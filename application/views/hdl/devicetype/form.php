<?=View::make('system.inc.meta', get_defined_vars())->render()?>

<body>

	<?=View::make('system.inc.header', get_defined_vars())->render()?>

	<div class="container-fluid">

		<h1><?= ($create ? 'Create device type' : 'Edit device type')?></h1>

		<?	if($errors->has('model_create_fail'))
				echo 'model create fail<br/>';
		?>

		<?= Form::open() ?>
			<?= Form::token() ?>

			<?if(!$create):?>
				<?= Form::hidden('id', $device_type->id)?>
			<?endif;?>
			
			<?	if($errors->has('title'))
					echo $errors->first('title'), '<br/>';
			?>

			<?= Form::label('title', 'Title: ') ?>
			<?= Form::text('title', ( Input::old('title') || $create ? Input::old('title') : $device_type->title )) ?> <br/><br/>


			<?	if($errors->has('code'))
					echo $errors->first('code'), '<br/>';
			?>

			<?= Form::label('code', 'Code: ') ?>
			<?= Form::text('code', ( Input::old('code') || $create ? Input::old('code') : $device_type->code )) ?> <br/><br/>

			<?= Form::submit(($create ? 'create' : 'save'), array('class' => 'btn btn-primary')) ?>
		<?= Form::close() ?>


		<?if(!$create):?>
			<?= Form::open('hdl/devicetype/delete') ?>
				<?= Form::token() ?>

				<?= Form::hidden('id', $device_type->id)?>

				<?= Form::submit('delete', array('class' => 'btn btn-danger')) ?>
			<?= Form::close() ?>
		<?endif;?>
	</div>

	<footer>
		<?=View::make('system.inc.footer', get_defined_vars())->render()?>
	</footer>

	<?=View::make('system.inc.scripts', get_defined_vars())->render()?>
</body>
</html>