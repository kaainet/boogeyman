<?php namespace App\Libs;

use Laravel\Hash, Laravel\Config;
use Laravel\Auth\Drivers\Driver;
use App\Models\Account\Account;

class AccountAuth extends Driver
{

	/**
	 * Get the current user of the application.
	 *
	 * If the user is a guest, null should be returned.
	 *
	 * @param  int         $id
	 * @return mixed|null
	 */
	public function retrieve($id)
	{
		if (filter_var($id, FILTER_VALIDATE_INT) !== false)
		{
			return $this->model()->find($id);
		}
	}


	/**
	 * Attempt to log a user into the application.
	 *
	 * @param  array  $arguments
	 * @return void
	 */
	public function attempt($arguments = array())
	{
		$username = Config::get('auth.username');

		$user = $this->model()->with('status')->where($username, '=', $arguments['username'])->first();

		// This driver uses a basic username and password authentication scheme
		// so if the credentials match what is in the database we will just
		// log the user into the application and remember them if asked.
		$password = $arguments['password'];

		if ( ! is_null($user) and Hash::check($password, $user->password))
		{
			switch($user->status->code)
			{
				case 'unverified':
					throw new AccountAuthException('Account is unverified');
				break;

				case 'deleted':
					throw new AccountAuthException('Account is deleted');
				break;

				case 'blocked':
					throw new AccountAuthException('Account is blocked');
				break;
			}

			return $this->login($user->id, array_get($arguments, 'remember'));
		}

		return false;
	}

	/**
	 * Get a fresh model instance.
	 *
	 * @return Eloquent
	 */
	protected function model()
	{
		$model = Config::get('auth.model');

		return new $model;
	}

	/**
	 * Process access to route
	 *
	 * @param Request::route $route
	 * @return bool
	 */
	public function route($route)
	{
		return $this->can(array($route->controller .'@'. $route->controller_action));
	}


	/**
	 * Can user do something
	 *
	 * @param array $permissions
	 * @return bool
	 */
	public function can($permissions)
	{
		return Account::can($permissions);
	}
}


class AccountAuthException extends \Exception {}
