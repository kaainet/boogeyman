(this.Ya && this.Ya.Context) || (function(j, k, c) {
    var f = k.body;
    var m = j.Ya = j.Ya || {};
    m.ver = 575;
    m.narodPageID = 54273;
    m.apply = function(p, n, o) {
        if (o) {
            m.apply(p, o)
            }
        if (p && n) {
            for (var q in n) {
                if (n.hasOwnProperty(q)) {
                    p[q] = n[q]
                    }
            }
        }
        return p
    };
    m.emptyFn = function() {}; (function() {
        var t = 0,
        K = 0,
        s = navigator,
        x = k.documentMode,
        I = s.userAgent.toLowerCase(),
        J = s.platform.toLowerCase(),
        D = s.plugins || {},
        H = I.indexOf("opera") > -1,
        r = I.indexOf("opera mini") > -1,
        B = (!H && I.indexOf("msie 7") > -1 || x == 7),
        A = (!H && I.indexOf("msie 8") > -1 && x != 7 && x != 9 || x == 8),
        z = (!H && I.indexOf("msie 9") > -1 && x != 7 && x != 8 || x == 9),
        C = !H && I.indexOf("msie 6") > -1,
        E = ((!H && I.indexOf("msie") > -1) || C || B || A || z),
        w = (E && x == 5),
        q = I.indexOf("chrome") > -1,
        F = (!q && (/webkit|khtml/).test(I)),
        o = (F && I.indexOf("webkit/5") != -1),
        y = (!F && !q && I.indexOf("gecko") > -1),
        n = (y && I.indexOf("rv:1.9") > -1),
        p = (j.location.href.toLowerCase().indexOf("https") === 0),
        G = ((J && /win/.test(J)) || (!J && /win/.test(u))),
        v = ((J && /mac/.test(J)) || (!J && /mac/.test(u)));
        m.apply(m, {
            extend: function() {
                var L = function(N) {
                    for (var O in N) {
                        this[O] = N[O]
                        }
                };
                var M = Object.prototype.constructor;
                return function(Q, S) {
                    var P = (S.constructor != M) ? S.constructor: function() {
                        Q.apply(this, arguments)
                        };
                    var R = function() {},
                    O,
                    N = Q.prototype;
                    R.prototype = N;
                    O = P.prototype = new R();
                    O.constructor = P;
                    P.superclass = N;
                    if (N.constructor == M) {
                        N.constructor = Q
                    }
                    P.override = function(T) {
                        m.override(P, T)
                        };
                    P.override = L;
                    m.override(P, S);
                    P.extend = function(T) {
                        m.extend(P, T)
                        };
                    return P
                }
            } (),
            xTempl: (function() {
                var M = {};
                return this.tmpl = function L(P, O) {
                    var N = !/\W/.test(P) ? M[P] = M[P] || L(k.getElementById(P).innerHTML) : new Function("data", "var platform=[]/*,print=function(){platform.push.apply(platform,arguments);}*/;/*with(data){*/platform.push('" + P.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/\t=(.*?)%>/g, "',typeof data.$1 === 'string' || typeof data.$1 === 'number' ? data.$1 : 'data.$1','").split("\t").join("');").split("%>").join("platform.push('") + "');/*}*/return platform.join('');");
                    return O ? N(O) : N
                }
            })(),
            genId: function(L) {
                L = L || "ya_context";
                return L + (++t)
                },
            genRnd: function() {
                return Math.round(Math.random() * 1000000)
                },
            override: function(L, N) {
                if (N) {
                    var M = L.prototype;
                    for (var O in N) {
                        M[O] = N[O]
                        }
                }
            },
            applyIf: function(M, N) {
                if (M) {
                    for (var L in N) {
                        if (!m.isDefined(M[L])) {
                            M[L] = N[L]
                            }
                    }
                }
                return M
            },
            isDefined: function(L) {
                return typeof L !== "undefined"
            },
            namespace: function(M, P, O) {
                O = O || ".";
                var L = 1,
                Q = M.split(O),
                N;
                if (P) {
                    L = 0
                } else {
                    P = m
                }
                for (N = L; N < Q.length; N++) {
                    if (!P[Q[N]]) {
                        P[Q[N]] = {}
                    }
                    P = P[Q[N]]
                    }
                return P
            },
            deepCopy: function(M, L) {
                if (L && typeof L == "object") {
                    for (var N in L) {
                        if (!L.hasOwnProperty(N)) {
                            continue
                        }
                        if (typeof L[N] == "object" && !m.isArray(L[N])) {
                            if (typeof M[N] != "object") {
                                M[N] = {}
                            }
                            m.deepCopy(M[N], L[N])
                            } else {
                            M[N] = L[N]
                            }
                    }
                }
                return M
            },
            keys: function(N) {
                var M = [],
                L;
                for (L in N) {
                    if (N.hasOwnProperty(L)) {
                        M.push(L)
                        }
                }
                return M
            },
            isArray: function(L) {
                return L && typeof L.splice == "function" && typeof L.length == "number"
            },
            isFunction: (typeof k !== "undefined" && typeof k.getElementsByTagName("body") === "function") ? function(L) {
                return toString.call(L) === "[object Function]"
            }: function(L) {
                return typeof L === "function"
            },
            inArray: function(P, O, N, L) {
                if (typeof O == "undefined" || O === null) {
                    O = ""
                }
                for (var M = 0; M < P.length; M++) {
                    if (N && N(O, P[M])) {
                        return M
                    } else {
                        if (L && P[M] === O) {
                            return M
                        } else {
                            if (!N && !L && P[M].toString().toLowerCase() == O.toString().toLowerCase()) {
                                return M
                            }
                        }
                    }
                }
                return - 1
            },
            unique: function(P) {
                var O = {},
                N = P.length,
                L = [],
                M;
                for (M = 0; M < N; M++) {
                    O[P[M]] = P[M]
                    }
                for (M in O) {
                    L.push(O[M])
                    }
                return L
            },
            inObject: function(P, O, Q, N, L) {
                if (typeof O == "undefined") {
                    O = ""
                }
                var R,
                M = 0;
                for (R in P) {
                    if (P.hasOwnProperty(R)) {
                        if (N && N(O, P[R])) {
                            return Q ? M: R
                        } else {
                            if (L && P[R] === O) {
                                return Q ? M: R
                            } else {
                                if (P[R].toString().toLowerCase() == O.toString().toLowerCase()) {
                                    return Q ? M: R
                                }
                            }
                        }
                        M++
                    }
                }
                return Q ? -1: ""
            },
            map: function(Q, P, O) {
                var L = new Array(Q.length),
                N,
                M;
                for (N = 0, M = Q.length; N < M; N++) {
                    if (N in Q) {
                        L[N] = P.call(O, Q[N], N, Q)
                        }
                }
                return L
            },
            reverse: function(L) {
                if (m.checkNativeCode(Array.prototype.reverse)) {
                    return L.reverse()
                    } else {
                    if (m.Utils.pureBrowserMethods.arrayReverse) {
                        m.reverse = function(M) {
                            return m.Utils.pureBrowserMethods.arrayReverse.call(M)
                            };
                        return m.reverse(L)
                        }
                }
                return L.reverse()
                },
            checkNativeCode: function(M) {
                if (!m.isFunction(M) || !m.isFunction(M.toString)) {
                    return false
                }
                var L = M.toString();
                if (/\[native code\]/.test(L) || /\/\* source code not available \*\//.test(L)) {
                    return true
                }
                return false
            },
            format: function(N, M) {
                var L = Array.prototype.slice.call(arguments, 1);
                return N.toString().replace(/(^|.|\r|\n)(\$\{(.*?)\})/g, function(R, Q, P, O) {
                    if (Q == "\\") {
                        return P
                    } else {
                        if (/^[0-9]+$/.test(O)) {
                            return Q + [L[ + O]].join("")
                            } else {
                            return Q + [M && M[O]].join("")
                            }
                    }
                })
                },
            trim: function(L) {
                return L.replace(/^\s+|\s+$/g, "")
                },
            camelize: function(L) {
                return L.replace(/[-|_]([a-z])/g, function() {
                    return arguments[1].toUpperCase()
                    })
                },
            uncamelize: function(L) {
                return L.replace(/[A-Z]/g, function(M) {
                    return "-" + M.toLowerCase()
                    })
                },
            capitalize: function(L) {
                return L.charAt(0).toUpperCase() + L.substring(1, L.length)
                },
            checkColorHash: function(L) {
                return / ^ [0 - 9A - F] {
                    6
                }
                $ / i.test(L)
                },
            entityify: function(L) {
                return L.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace('"', "&quot;")
                },
            quote: function(L) {
                return L.replace("\\", "\\\\").replace("'", "\\'")
                },
            isOpera: H,
            isGecko: y,
            isGecko2: y && !n,
            isGecko3: n,
            isSafari: F,
            isSafari3: o,
            isSafari2: F && !o,
            isIE: E,
            isIE6: C,
            isIE7: B,
            isIE8: A,
            isIE9: z,
            isIEQuirks: w,
            isChrome: q,
            isWindows: G,
            isMac: v,
            isOperaMini: r,
            isSecure: p,
            flashVer: (function() {
                var T = "undefined",
                M = "object",
                N = "Shockwave Flash",
                L = "ShockwaveFlash.ShockwaveFlash",
                Q = "application/x-shockwave-flash",
                S = [0, 0, 0],
                O;
                if (typeof D[N] == M) {
                    O = D[N].description;
                    if (O && !(typeof s.mimeTypes != T && s.mimeTypes[Q] && !s.mimeTypes[Q].enabledPlugin)) {
                        O = O.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        S[0] = parseInt(O.replace(/^(.*)\..*$/, "$1"), 10);
                        S[1] = parseInt(O.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        S[2] = /[a-zA-Z]/.test(O) ? parseInt(O.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
                        return S
                    }
                } else {
                    if (typeof j.ActiveXObject != T) {
                        try {
                            var R = new ActiveXObject(L);
                            if (R) {
                                O = R.GetVariable("$version");
                                if (O) {
                                    O = O.split(" ")[1].split(",");
                                    return [parseInt(O[0], 10), parseInt(O[1], 10), parseInt(O[2], 10)]
                                    }
                            }
                        } catch(P) {}
                    }
                }
                return S
            })(),
            debugMode: /yandex_show_errors=(\d+)/.test(j.location.href)
            });
        m.ns = m.namespace
    })();
    m.ns("Ya.Utils");
    m.apply(m.Utils, {
        escape: function(o, n) {
            if (typeof o == "undefined") {
                return ""
            }
            return encodeURIComponent(o)
            },
        appendStyle: function(n, p) {
            if (p) {
                k.write('<style type="text/css">' + n + "</style>");
                return
            }
            var o = k.createElement("style");
            o.setAttribute("type", "text/css");
            if (o.styleSheet) {
                o.styleSheet.cssText = n
            } else {
                o.appendChild(k.createTextNode(n))
                }
            e.head().appendChild(o)
            },
        isFirstScreen: function(p) {
            if (!p) {
                return 0
            }
            try {
                if (j.top != j) {
                    return 2
                }
            } catch(t) {
                return 2
            }
            p = e("#" + p);
            var s = e.getXY(p),
            r = s.offsetLeft,
            q = s.offsetTop,
            o = e.getWindowSize()[0],
            n = e.getWindowSize()[1];
            if (o - r >= 0 && n - q >= 0) {
                return 1
            } else {
                return 3
            }
        },
        addScript: function(p, o) {
            if (!p) {
                return false
            }
            if (o) {
                k.write('<script type="text/javascript" src="' + p + '"><\/script>');
                return true
            }
            var n = k.createElement("script");
            n.type = "text/javascript";
            n.src = p;
            e.head().appendChild(n);
            return n
        },
        toQueryParams: function(p) {
            var o = [],
            n;
            for (n in p) {
                if (p.hasOwnProperty(n) && typeof p[n] != "undefined" && p[n] !== "") {
                    o[o.length] = n + "=" + m.Utils.escape(p[n])
                    }
            }
            return o.join("&")
            },
        getDocumentCharset: function() {
            var r,
            n = k.getElementsByTagName("meta");
            if (n && n.length > 0) {
                for (var p = 0, o = n.length; p < o; p++) {
                    if (n[p].content) {
                        var q = n[p].content.match(/charset=(.*)/);
                        if (q) {
                            r = q[1];
                            break
                        }
                    }
                }
            }
            r = r || k.characterSet || k.charset;
            return r
        },
        calcFletcherSum: function(v) {
            var o = typeof v == "string" ? function(y) {
                return v.charCodeAt(y)
                }: function(y) {
                return v[y]
                };
            var q = v.length,
            w = 0,
            t = 255,
            s = 255;
            while (q) {
                var r = q > 21 ? 21: q;
                q -= r;
                do {
                    var n = o(w++);
                    if (n > 255) {
                        var p = n >> 8;
                        n & =255;
                        n^ = p
                    }
                    t += n;
                    s += t
                }
                while (--r);
                t = (t & 255) + (t >> 8);
                s = (s & 255) + (s >> 8)
                }
            var x = (((t & 255) + (t >> 8)) << 8) | ((s & 255) + (s >> 8));
            return x == 65535 ? 0: x
        },
        prettify: function(x) {
            if (/[\u0404\u0406\u0407\u0454\u0456\u0457\u0490\u0491]/.test(x)) {
                return x
            }
            var n = "\u0430-\u043F\u0440-\u044F\u0410-\u042F\u0451\u0401",
            q = "a-zA-Z" + n,
            t = new RegExp("([" + q + "]) - ([" + q + "])", "g"),
            s = "[\u0410\u0430]|[\u0411\u0431]\u0435\u0437|[\u0412\u0432](?:|\u044B|\u0430\u0441|\u0430\u043C|\u0441\u0435|\u0441\u0451)|[\u0413\u0433]\u0434\u0435|[\u0414\u0434](?:\u043E|\u043B\u044F)|[\u0417\u0437]\u0430|[\u0418\u0438](?:|\u0437)|[\u041A\u043A](?:|\u043E|\u0430\u043A)|[\u041C\u043C]\u044B|[\u041D\u043D](?:\u0430|\u0430\u043C|\u0430\u0441|\u0435|\u0438|\u043E)|[\u041E\u043E](?:|\u0431|\u0442)|[\u041F\u043F](?:\u043E|\u0440\u043E)|[\u0421\u0441](?:|\u043E)|[\u0422\u0442](?:\u043E|\u0443\u0442|\u044B)|[\u0423\u0443]|[\u0427\u0447]\u0442\u043E|[\u042D\u044D]\u0442\u043E",
            w = "\u00A0",
            r = "\u2013",
            p = x.match(/"/g),
            v = new RegExp('(^|\\s)"([.\\-\\s\\d' + q + ']{3,})"', "g"),
            o = x.match(v);
            if (p && o && p.length % 2 == 0 && p.length / 2 == o.length) {
                x = x.replace(v, function(z, y, A) {
                    if (/^[\-\s]|[\-\s]$|^[\-\s\d]+$/.test(A)) {
                        return z
                    } else {
                        return y + "\u00AB" + A + "\u00BB"
                    }
                })
                }
            return x.replace(new RegExp("(^|\\(|\\s)(" + s + ')\\s([\u00AB"$\\d' + q + "])", "g"), "$1$2" + w + "$3").replace(t, "$1" + w + r + " $2").replace(/ \-(\d\d?)%/g, " \u2212$1%").replace(/ ([^\s]{1,2})$/, w + "$1").replace(/(\d+ (\d{3} ){0,2})\u0440\u0443\u0431([.,?!:;\s]|$)/g, function(y) {
                return y.replace(/ /g, w)
                }).replace(/ !/, w + "!")
            },
        checkValue: function(p, n, q, o) {
            if (typeof o == "undefined") {
                o = q;
                if (Math.abs(p - n) < Math.abs(p - q)) {
                    o = n
                }
            }
            return (p >= n && p <= q) ? p: o
        },
        pureBrowserMethods: m.isIE ? {}: (function() {
            var p = k.createElement("iframe"),
            o = false,
            q,
            n = {};
            p.style.cssText = "width: 1px; height: 1px; position: absolute; top: -9999px; bottom: -9999px;";
            q = function() {
                if (!o && p.contentWindow) {
                    o = true;
                    var r = p.contentWindow,
                    t = r.document || p.contentDocument,
                    s;
                    t.open();
                    t.write('<body onload=""></body>');
                    t.close();
                    s = t.body;
                    n = {
                        getElementsByClassName: s.getElementsByClassName,
                        addEventListener: s.addEventListener,
                        removeEventListener: s.removeEventListener,
                        arrayReverse: r.Array.prototype.reverse
                    };
                    k.documentElement.removeChild(p);
                    setTimeout(function() {}, 3600 * 24 * 1000)
                    }
            };
            p.onload = q;
            k.documentElement.insertBefore(p, k.documentElement.firstChild);
            q();
            return n
        } ())
        });
    m.Utils.RGB = function(q, p, n) {
        var o;
        if (typeof p == "undefined" || typeof n == "undefined") {
            o = (q || "000000").replace(/^#/, "");
            q = parseInt(o.substr(0, 2), 16) || 0;
            p = parseInt(o.substr(2, 2), 16) || 0;
            n = parseInt(o.substr(4, 2), 16) || 0
        }
        this[0] = q;
        this[1] = p;
        this[2] = n;
        return this
    };
    m.Utils.RGB.prototype = (function() {
        function n(p) {
            var o = "0123456789ABCDEF";
            return o.charAt(p / 16 << 0) + o.charAt(p % 16)
            }
        return {
            toString: function() {
                return "#" + n(this[0]) + n(this[1]) + n(this[2])
                },
            avg: function() {
                return (this[0] + this[1] + this[2]) / 3
            },
            luma: function() {
                return (this[0] * 299 + this[1] * 587 + this[2] * 114) / 1000
            },
            lighter: function(q, s, t, p) {
                var o = this.rgb2Hsl(),
                r;
                t = t || 0.67;
                q = q || 0;
                s = s || 0.33;
                p = p || false;
                if (o[2] >= t && p || o[2] < t && !p) {
                    o[2] += s;
                    if (o[2] > 1) {
                        o[2] = 1;
                        o[1] += q
                    }
                } else {
                    o[2] -= s;
                    if (o[2] < 0) {
                        o[2] = 0;
                        o[1] -= q
                    }
                }
                r = this.hsl2Rgb(o[0], o[1], o[2]);
                this[0] = r[0];
                this[1] = r[1];
                this[2] = r[2];
                return this
            },
            checkContrast: function(o) {
                return this.luma() > 127 ? true: false
            },
            rgb2Hsl: function(o, v, x) {
                o = o || this[0];
                v = v || this[1];
                x = x || this[2];
                o /= 255;
                v /= 255;
                x /= 255;
                var y = Math.max(o, v, x),
                q = Math.min(o, v, x);
                var t,
                z,
                p = (y + q) / 2;
                if (y == q) {
                    t = z = 0
                } else {
                    var w = y - q;
                    z = p > 0.5 ? w / (2 - y - q) : w / (y + q);
                    switch (y) {
                    case o:
                        t = (v - x) / w + (v < x ? 6: 0);
                        break;
                    case v:
                        t = (x - o) / w + 2;
                        break;
                    case x:
                        t = (o - v) / w + 4;
                        break
                    }
                    t /= 6
                }
                return [t, z, p]
                },
            hsl2Rgb: function(y, B, x) {
                var o,
                z,
                A;
                if (B == 0) {
                    o = z = A = x
                } else {
                    function w(C, s, r) {
                        if (r < 0) {
                            r += 1
                        }
                        if (r > 1) {
                            r -= 1
                        }
                        if (r < 1 / 6) {
                            return C + (s - C) * 6 * r
                        }
                        if (r < 1 / 2) {
                            return s
                        }
                        if (r < 2 / 3) {
                            return C + (s - C) * (2 / 3 - r) * 6
                        }
                        return C
                    }
                    var t = x < 0.5 ? x * (1 + B) : x + B - x * B;
                    var v = 2 * x - t;
                    o = w(v, t, y + 1 / 3);
                    z = w(v, t, y);
                    A = w(v, t, y - 1 / 3)
                    }
                return [o * 255, z * 255, A * 255]
                }
        }
    } ());
    m.Utils.Base64 = new function() {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        o = String.fromCharCode;
        this.encode = function(v, r) {
            r = r || 1000000;
            var s = "";
            var C,
            A,
            y,
            B,
            z,
            x,
            w;
            var t = 0;
            v = p(v, r * 3 / 4 | 0);
            while (t < v.length) {
                C = v.charCodeAt(t++);
                A = v.charCodeAt(t++);
                y = v.charCodeAt(t++);
                B = C >> 2;
                z = ((C & 3) << 4) | (A >> 4);
                x = ((A & 15) << 2) | (y >> 6);
                w = y & 63;
                if (isNaN(A)) {
                    x = w = 64
                } else {
                    if (isNaN(y)) {
                        w = 64
                    }
                }
                s = s + n.charAt(B) + n.charAt(z) + n.charAt(x) + n.charAt(w)
                }
            return s
        };
        function p(t, s) {
            t = t.replace(/\r\n/g, "\n");
            var r = "",
            v;
            for (var x = 0; x < t.length; x++) {
                var w = t.charCodeAt(x);
                if (w < 128) {
                    v = o(w)
                    } else {
                    if ((w > 127) && (w < 2048)) {
                        v = o((w >> 6) | 192);
                        v += o((w & 63) | 128)
                        } else {
                        v = o((w >> 12) | 224);
                        v += o(((w >> 6) & 63) | 128);
                        v += o((w & 63) | 128)
                        }
                }
                if (r.length + v.length > s) {
                    break
                }
                r += v
            }
            return r
        }
        this.decode = function(t) {
            var r = "",
            B,
            z,
            x,
            A,
            y,
            w,
            v,
            s = 0;
            t = t.replace(/[^A-Za-z0-9\-\_\=]/g, "");
            while (s < t.length) {
                A = n.indexOf(t.charAt(s++));
                y = n.indexOf(t.charAt(s++));
                w = n.indexOf(t.charAt(s++));
                v = n.indexOf(t.charAt(s++));
                B = (A << 2) | (y >> 4);
                z = ((y & 15) << 4) | (w >> 2);
                x = ((w & 3) << 6) | v;
                r += String.fromCharCode(B);
                if (w != 64) {
                    r += String.fromCharCode(z)
                    }
                if (v != 64) {
                    r += String.fromCharCode(x)
                    }
            }
            return q(r)
            };
        function q(r) {
            var s = "",
            v = 0,
            x = 0,
            w = 0,
            t = 0;
            while (v < r.length) {
                x = r.charCodeAt(v);
                if (x < 128) {
                    s += String.fromCharCode(x);
                    v++
                } else {
                    if ((x > 191) && (x < 224)) {
                        t = r.charCodeAt(v + 1);
                        s += String.fromCharCode(((x & 31) << 6) | (t & 63));
                        v += 2
                    } else {
                        t = r.charCodeAt(v + 1);
                        c3 = r.charCodeAt(v + 2);
                        s += String.fromCharCode(((x & 15) << 12) | ((t & 63) << 6) | (c3 & 63));
                        v += 3
                    }
                }
            }
            return s
        }
    };
    m.Utils.isSameDomain = function(v) {
        var t = m.reverse(j.self.document.domain.split(".")),
        s = v.length,
        n = true,
        r,
        q,
        p;
        for (q = 0; q < s; q++) {
            r = m.reverse(v[q].split("."));
            for (p = 0; p < r.length; p++) {
                if (r[p] != t[p]) {
                    n = false
                }
            }
            if (n) {
                return true
            }
            n = true
        }
        if (n && s > 0) {
            return true
        }
        if (j.top && (j.self !== j.top)) {
            n = false;
            try {
                if (j.top.document && (j.self.document.domain == j.top.document.domain)) {
                    n = true
                }
            } catch(o) {}
        }
        return n
    };
    m.Utils.Warning = (function() {
        var p = [255, 247, 240, 231, 221, 210, 194, 174, 144, 112, 80, 35, 0],
        o = [255, 222, 190, 165, 139, 118, 102, 86, 75, 70, 68, 66, 64],
        q = 0.85,
        n = m.Utils.RGB;
        return {
            getBgColor: function(z) {
                var t = new n(z),
                w = t.avg(),
                v = 1;
                while (w < p[v]) {
                    v++
                }
                var B = p[v],
                s = p[v - 1],
                x = o[v],
                C = o[v - 1],
                y = (x + 1 * (w - B) / (s - B) * (C - x)) / 255,
                A = 1 - y,
                r = 255 * y;
                return new n(t[0] * A + r, t[1] * A + r, t[2] * A + r).toString()
                },
            getBorderColor: function(v, s) {
                var r = new n(v),
                t = new n(s);
                return new n(r[0] * q + t[0] * (1 - q), r[1] * q + t[1] * (1 - q), r[2] * q + t[2] * (1 - q)).toString()
                }
        }
    } ());
    m.Utils.Punycode = new function d() {
        this.utf16 = {
            decode: function(E) {
                var D = [],
                F = 0,
                C = E.length,
                G,
                B;
                while (F < C) {
                    G = E.charCodeAt(F++);
                    if ((G & 63488) === 55296) {
                        B = E.charCodeAt(F++);
                        if (((G & 64512) !== 55296) || ((B & 64512) !== 56320)) {
                            throw new RangeError("UTF-16(decode): Illegal UTF-16 sequence")
                            }
                        G = ((G & 1023) << 10) + (B & 1023) + 65536
                    }
                    D.push(G)
                    }
                return D
            },
            encode: function(D) {
                var C = [],
                E = 0,
                B = D.length,
                F;
                while (E < B) {
                    F = D[E++];
                    if ((F & 63488) === 55296) {
                        throw new RangeError("UTF-16(encode): Illegal UTF-16 value")
                        }
                    if (F > 65535) {
                        F -= 65536;
                        C.push(String.fromCharCode(((F >>> 10) & 1023) | 55296));
                        F = 56320 | (F & 1023)
                        }
                    C.push(String.fromCharCode(F))
                    }
                return C.join("")
                }
        };
        var s = 128;
        var y = 72;
        var n = "\x2D";
        var p = 36;
        var r = 700;
        var o = 1;
        var t = 26;
        var A = 38;
        var q = 2147483647;
        function x(B) {
            return B - 48 < 10 ? B - 22: B - 65 < 26 ? B - 65: B - 97 < 26 ? B - 97: p
        }
        function z(C, B) {
            return C + 22 + 75 * (C < 26) - ((B != 0) << 5)
            }
        function w(E, D, C) {
            var B;
            E = C ? Math.floor(E / r) : (E >> 1);
            E += Math.floor(E / D);
            for (B = 0; E > (((p - o) * t) >> 1); B += p) {
                E = Math.floor(E / (p - o))
                }
            return Math.floor(B + (p - o + 1) * E / (E + A))
            }
        function v(C, B) {
            C -= (C - 97 < 26) << 5;
            return C + ((!B && (C - 65 < 26)) << 5)
            }
        this.decode = function(H, D) {
            var F = [];
            var S = [];
            var M = H.length;
            var L,
            Q,
            P,
            E,
            C,
            O,
            K,
            B,
            G,
            N,
            J,
            I,
            R;
            L = s;
            P = 0;
            E = y;
            C = H.lastIndexOf(n);
            if (C < 0) {
                C = 0
            }
            for (O = 0; O < C;++O) {
                if (D) {
                    S[F.length] = (H.charCodeAt(O) - 65 < 26)
                    }
                if (H.charCodeAt(O) >= 128) {
                    throw new RangeError("Illegal input >= 0x80")
                    }
                F.push(H.charCodeAt(O))
                }
            for (K = C > 0 ? C + 1: 0; K < M;) {
                for (B = P, G = 1, N = p;; N += p) {
                    if (K >= M) {
                        throw RangeError("punycode_bad_input(1)")
                        }
                    J = x(H.charCodeAt(K++));
                    if (J >= p) {
                        throw RangeError("punycode_bad_input(2)")
                        }
                    if (J > Math.floor((q - P) / G)) {
                        throw RangeError("punycode_overflow(1)")
                        }
                    P += J * G;
                    I = N <= E ? o: N >= E + t ? t: N - E;
                    if (J < I) {
                        break
                    }
                    if (G > Math.floor(q / (p - I))) {
                        throw RangeError("punycode_overflow(2)")
                        }
                    G *= (p - I)
                    }
                Q = F.length + 1;
                E = w(P - B, Q, B === 0);
                if (Math.floor(P / Q) > q - L) {
                    throw RangeError("punycode_overflow(3)")
                    }
                L += Math.floor(P / Q);
                P %= Q;
                if (D) {
                    S.splice(P, 0, H.charCodeAt(K - 1) - 65 < 26)
                    }
                F.splice(P, 0, L);
                P++
            }
            if (D) {
                for (P = 0, R = F.length; P < R; P++) {
                    if (S[P]) {
                        F[P] = (String.fromCharCode(F[P]).toUpperCase()).charCodeAt(0)
                        }
                }
            }
            return this.utf16.encode(F)
            };
        this.encode = function(N, B) {
            var F,
            P,
            J,
            M,
            K,
            I,
            G,
            D,
            H,
            Q,
            O,
            C;
            if (B) {
                C = this.utf16.decode(N)
                }
            N = this.utf16.decode(N.toLowerCase());
            var L = N.length;
            if (B) {
                for (I = 0; I < L; I++) {
                    C[I] = N[I] != C[I]
                    }
            }
            var E = [];
            F = s;
            P = 0;
            K = y;
            for (I = 0; I < L;++I) {
                if (N[I] < 128) {
                    E.push(String.fromCharCode(C ? v(N[I], C[I]) : N[I]))
                    }
            }
            J = M = E.length;
            if (M > 0) {
                E.push(n)
                }
            while (J < L) {
                for (G = q, I = 0; I < L;++I) {
                    O = N[I];
                    if (O >= F && O < G) {
                        G = O
                    }
                }
                if (G - F > Math.floor((q - P) / (J + 1))) {
                    throw RangeError("punycode_overflow (1)")
                    }
                P += (G - F) * (J + 1);
                F = G;
                for (I = 0; I < L;++I) {
                    O = N[I];
                    if (O < F) {
                        if (++P > q) {
                            return Error("punycode_overflow(2)")
                            }
                    }
                    if (O == F) {
                        for (D = P, H = p;; H += p) {
                            Q = H <= K ? o: H >= K + t ? t: H - K;
                            if (D < Q) {
                                break
                            }
                            E.push(String.fromCharCode(z(Q + (D - Q) % (p - Q), 0)));
                            D = Math.floor((D - Q) / (p - Q))
                            }
                        E.push(String.fromCharCode(z(D, B && C[I] ? 1: 0)));
                        K = w(P, J + 1, J == M);
                        P = 0;++J
                    }
                }++P;++F
            }
            return E.join("")
            };
        this.toASCII = function(F) {
            var B = F.split(".");
            var C = [];
            for (var D = 0; D < B.length;++D) {
                var E = B[D];
                C.push(E.match(/[^A-Za-z0-9-]/) ? "xn--" + m.Utils.Punycode.encode(E) : E)
                }
            return C.join(".")
            };
        this.toUnicode = function(F) {
            var B = F.split(".");
            var C = [];
            for (var D = 0; D < B.length;++D) {
                var E = B[D];
                C.push(E.match(/^xn--/) ? m.Utils.Punycode.decode(E.slice(4)) : E)
                }
            return C.join(".")
            }
    } ();
    var e = function(n, o) {
        o = o || k;
        if (typeof n == "string" && n.indexOf("#") == 0) {
            return k.getElementById(n.substr(1, n.length))
            } else {
            if (typeof n == "string" && n.indexOf(".") == 0) {
                return e.getElementsByClassName(n.substr(1, n.length), o)
                }
        }
        return n
    };
    m.$ = m.apply(e, {
        getElementsByClassName: function(r, t) {
            if (t && t.getElementsByClassName && m.checkNativeCode(t.getElementsByClassName)) {
                return t.getElementsByClassName(r) || []
                } else {
                if (t && m.Utils.pureBrowserMethods.getElementsByClassName) {
                    return m.Utils.pureBrowserMethods.getElementsByClassName.call(t, r) || []
                    } else {
                    if (!t) {
                        return []
                        }
                }
            }
            var n = [],
            q = new RegExp("\\b" + r + "\\b"),
            p = t.getElementsByTagName("*"),
            s = p.length,
            o;
            for (o = 0; o < s; o++) {
                if (q.test(p[o].className)) {
                    n.push(p[o])
                    }
            }
            return n
        },
        css: function(p, o) {
            p = e(p);
            if (!p) {
                return
            }
            var n,
            q;
            for (n in o) {
                q = e.normalizeCSSProperty(n, o[n]);
                p.style[m.camelize(q[0])] = q[1]
                }
        },
        classNameExists: function(o, n) {
            if (!o) {
                return false
            }
            return new RegExp("(^|\\s)" + m.trim(n) + "(\\s|$)", "").test(e(o).className)
            },
        addClass: function(o, n) {
            if (!this.classNameExists(o, n)) {
                e(o).className += " " + n;
                return true
            }
            return false
        },
        removeClass: function(p, o) {
            p = e(p);
            var n = p.className.replace(new RegExp("(^|\\s)" + o + "(?=\\s|$)", "g"), " ");
            if (n != p.className) {
                p.className = n;
                return true
            }
            return false
        },
        toggleclassName: function(p, o, n) {
            if (arguments.length < 3) {
                n = !this.classNameExists(p, o)
                }
            if (n) {
                return this.addClass(p, o)
                } else {
                return this.removeClass(p, o)
                }
        },
        head: function() {
            if (!k.getElementsByTagName("head")[0]) {
                k.getElementsByTagName("html")[0].appendChild(k.createElement("HEAD"))
                }
            return k.getElementsByTagName("head")[0]
            },
        getXY: function(o) {
            var n = k.body;
            if (o == n) {
                return {
                    offsetLeft: 0,
                    offsetTop: 0
                }
            }
            if ("getBoundingClientRect" in k.documentElement) {
                this.getXY = function(q) {
                    var p = q.getBoundingClientRect();
                    return {
                        offsetLeft: Math.round(p.left + e.getWindowScroll()[0]),
                        offsetTop: Math.round(p.top + e.getWindowScroll()[1])
                        }
                }
            } else {
                this.getXY = function(r) {
                    var s,
                    q,
                    w,
                    p = 0,
                    v = 0,
                    t;
                    t = this.getStyle(r, "postion") == "absolute";
                    s = r;
                    while (s) {
                        p += s.offsetLeft;
                        v += s.offsetTop;
                        t = t || this.getStyle(s, "position") == "absolute";
                        if (m.isGecko) {
                            v += q = parseInt(this.getStyle(s, "borderTopWidth"), 10) || 0;
                            p += w = parseInt(this.getStyle(s, "borderLeftWidth"), 10) || 0;
                            if (s != s && this.getStyle(s, "overflow") != "visible") {
                                p += w;
                                v += q
                            }
                        }
                        s = s.offsetParent
                    }
                    if (m.isSafari && t) {
                        p -= n.offsetLeft;
                        v -= n.offsetTop
                    }
                    if (m.isGecko && !t) {
                        p += parseInt(this.getStyle(n, "borderLeftWidth"), 10) || 0;
                        v += parseInt(this.getStyle(n, "borderTopWidth"), 10) || 0
                    }
                    s = r.parentNode;
                    while (s && s != n) {
                        if (!m.isOpera || (s.tagName != "TR" && this.getStyle(s, "display") != "inline")) {
                            p -= s.scrollLeft;
                            v -= s.scrollTop
                        }
                        s = s.parentNode
                    }
                    return {
                        offsetLeft: p,
                        offsetTop: v
                    }
                }
            }
            return this.getXY(o)
            },
        getStyle: function(n, o) {
            if (k.defaultView && k.defaultView.getComputedStyle) {
                this.getStyle = function(p, q) {
                    if (!p || p == k) {
                        return null
                    }
                    q = this.normalizeCSSProperty(q, c, p);
                    return k.defaultView.getComputedStyle(p, null)[q[0]]
                    }
            } else {
                if (n.currentStyle) {
                    this.getStyle = function(p, q) {
                        if (!p || p == k || !p.currentStyle) {
                            return null
                        }
                        q = this.normalizeCSSProperty(q, c, p);
                        return p.currentStyle[q[0]]
                        }
                } else {
                    this.getStyle = function(p, q) {
                        if (!p || p == k) {
                            return null
                        }
                        q = this.normalizeCSSProperty(q, c, p);
                        return p.style[q[0]]
                        }
                }
            }
            return this.getStyle(n, o)
            },
        normalizeCSSProperty: function(n, q, o) {
            var p = o ? o.style: k.documentElement.style;
            n = m.camelize(n);
            if (n == "opacity" && typeof p.opacity != "string") {
                return ["filter", q == 1 ? "": "Alpha(opacity=" + (q * 100) + ")"]
                }
            if (/^(float|(style|css)Float)$/.test(n)) {
                n = "float";
                if (o) {
                    n = typeof p.cssFloat == "string" ? "cssFloat": "styleFloat"
                }
                return [n, q]
                }
            if (n == "boxShadow") { ["MozBoxShadow", "WebkitBoxShadow", "boxShadow"].forEach(function(r) {
                    if (typeof p[r] == "string") {
                        n = r
                    }
                });
                return [n, q]
                }
            return [n, q]
            },
        getElemScroll: function(n) {
            if (n) {
                return [n.scrollLeft || 0, n.scrollTop || 0]
                }
            return [null, null]
            },
        getWindowScroll: function() {
            if ((typeof(j.pageXOffset) == "number") || (typeof(j.pageYOffset) == "number")) {
                return [j.pageXOffset, j.pageYOffset]
                } else {
                if (k.body && (k.body.scrollLeft || k.body.scrollTop)) {
                    return [k.body.scrollLeft, k.body.scrollTop]
                    } else {
                    if (k.documentElement && (k.documentElement.scrollLeft || k.documentElement.scrollTop)) {
                        return [k.documentElement.scrollLeft, k.documentElement.scrollTop]
                        }
                }
            }
            return [null, null]
            },
        getWindowSize: function() {
            if ((typeof(j.innerWidth) == "number") || (typeof(j.innerHeight) == "number")) {
                return [j.innerWidth, j.innerHeight]
                } else {
                if (k.documentElement && (k.documentElement.clientWidth || k.documentElement.clientHeight)) {
                    return [k.documentElement.clientWidth, k.documentElement.clientHeight]
                    } else {
                    if (k.body && (k.body.clientWidth || k.body.clientHeight)) {
                        return [k.body.clientWidth, k.body.clientHeight]
                        }
                }
            }
            return [null, null]
            },
        remove: function(o) {
            if (o && o.length) {
                for (var n = 0; n < o.length; n++) {
                    e.remove(o[n])
                    }
            } else {
                if (o && o.parentNode) {
                    o.parentNode.removeChild(o)
                    }
            }
        },
        isHasScroll: function(o) {
            if (!o) {
                return false
            }
            var n = o.scrollTop;
            o.scrollTop += 1;
            if (n != o.scrollTop) {
                o.scrollTop -= 1;
                return true
            }
            return false
        }
    });
    m.ns("Ya.Utils");
    m.Utils.DomEvent = function() {
        function q(x, w) {
            return function(y) {
                setTimeout(function() {
                    x(y)
                    }, w || 10)
                }
        }
        function r(y, w) {
            var x = new m.Utils.DelayedTask(y);
            return function(z) {
                x.delay(w, y, null, [z])
                }
        }
        function v(y, w, x) {
            return function(z) {
                p(x, w, y);
                y(z)
                }
        }
        var o = function(y, w, x) {
            if (!y) {
                return
            }
            if (y.attachEvent) {
                y.attachEvent("on" + w, x)
                } else {
                if (y.addEventListener && m.checkNativeCode(y.addEventListener)) {
                    y.addEventListener(w, x, false)
                    } else {
                    if (m.Utils.pureBrowserMethods.addEventListener) {
                        m.Utils.pureBrowserMethods.addEventListener.call(y, w, x, false)
                        }
                }
            }
        },
        p = function(y, w, x) {
            if (!y) {
                return
            }
            if (y.detachEvent) {
                y.detachEvent("on" + w, x)
                } else {
                if (y.removeEventListener) {
                    y.removeEventListener(w, x, false)
                    } else {
                    if (m.Utils.pureBrowserMethods.removeEventListener) {
                        m.Utils.pureBrowserMethods.removeEventListener.call(y, w, x, false)
                        }
                }
            }
        },
        t = function(w) {
            w = w.toLowerCase();
            if (w.indexOf("on", 0) == 0) {
                w = w.substring(2)
                }
            return w
        },
        n = function(A, y, z) {
            var w = A.yaEvCache,
            B = A.yaEvCache.length,
            x = 0;
            for (; x < B; x++) {
                if (w[x].evName == y && w[x].fn == z) {
                    return w[x]
                    }
            }
            return false
        },
        s = []; (function(z) {
            var B,
            y = function() {
                m.isReady = true;
                for (var C = 0; C < z.length; C++) {
                    z[C]()
                    }
                y = m.emptyFn
            },
            w = function() {
                if (m.isReady) {
                    return
                }
                try {
                    k.documentElement.doScroll("left")
                    } catch(C) {
                    setTimeout(w, 1);
                    return
                }
                y()
                };
            if (k.readyState === "complete") {
                setTimeout(y, 1)
                }
            B = function() {
                k.removeEventListener("DOMContentLoaded", B, false);
                y()
                };
            if (k.attachEvent) {
                B = function() {
                    if (k.readyState === "complete") {
                        k.detachEvent("onreadystatechange", B);
                        y()
                        }
                };
                k.attachEvent("onreadystatechange", B);
                j.attachEvent("onload", y);
                var x = false;
                try {
                    x = j.frameElement == null
                } catch(A) {}
                if (k.documentElement.doScroll && x) {
                    w()
                    }
            } else {
                if (k.addEventListener && m.checkNativeCode(k.addEventListener)) {
                    k.addEventListener("DOMContentLoaded", B, false);
                    j.addEventListener("onload", y, false)
                    } else {
                    if (m.Utils.pureBrowserMethods.addEventListener) {
                        m.Utils.pureBrowserMethods.addEventListener.call(k, "DOMContentLoaded", B, false);
                        m.Utils.pureBrowserMethods.addEventListener.call(j, "onload", y, false)
                        }
                }
            }
        } (s));
        return {
            on: function(A, x, z, y, w) {
                if (!A || !z) {
                    return
                }
                A.yaEvCache = A.yaEvCache || [];
                x = t(x);
                w = m.apply({
                    args: [],
                    single: false,
                    timeout: 0,
                    buffer: 0
                }, w);
                var B = function(C) {
                    if (m.debugMode) {
                        return z.apply(y, [C].concat(w.args))
                        }
                    try {
                        return z.apply(y, [C].concat(w.args))
                        } catch(C) {
                        m.Utils.logger.log("v" + m.ver + ":dom EL handler:" + C.message + ":" + m.Utils.logger.getStackTrace())
                        }
                };
                if (w.timeout) {
                    B = q(B, w.timeout)
                    }
                if (w.single) {
                    B = v(B, x, A)
                    }
                if (w.buffer) {
                    B = r(B, w.buffer)
                    }
                A.yaEvCache.push({
                    evName: x,
                    fn: z,
                    hn: B,
                    opts: w,
                    scope: y,
                    ind: A.yaEvCache.length
                });
                o(A, x, B)
                },
            un: function(y, w, x) {
                if (!y || !y.yaEvCache || !x) {
                    return
                }
                var w = t(w),
                z = n(y, w, x);
                if (z) {
                    p(y, w, z.hn);
                    y.yaEvCache.splice(z.ind, 1)
                    }
            },
            getTarget: function(w) {
                if (w) {
                    return w.target || w.srcElement
                }
            },
            stopEvent: function(w) {
                this.stopPropagation(w);
                this.preventDefault(w)
                },
            stopPropagation: function(w) {
                w = this.getEvent(w);
                if (w && w.stopPropagation) {
                    w.stopPropagation()
                    } else {
                    if (w) {
                        w.cancelBubble = true
                    }
                }
            },
            preventDefault: function(w) {
                w = this.getEvent(w);
                if (w && w.preventDefault) {
                    w.preventDefault()
                    } else {
                    if (w) {
                        w.returnValue = false
                    }
                }
            },
            getEvent: function(w) {
                return w || j.event
            },
            domReady: function(x, w) {
                var y = x;
                if (w) {
                    y = function() {
                        x.call(w)
                        }
                }
                s.push(y)
                }
        }
    } ();
    m.ns("Ya.Utils"); (function() {
        var n = function(s, r, q) {
            return function() {
                var t = Array.prototype.slice.call(arguments, 0);
                setTimeout(function() {
                    s.apply(q, t)
                    }, r.delay || 10)
                }
        };
        var p = function(t, s, r, q) {
            return function() {
                s.removeListener(r, q);
                return t.apply(q, arguments)
                }
        };
        var o = function(t, s, r) {
            var q = new m.Utils.DelayedTask();
            return function() {
                q.delay(s.buffer, t, r, Array.prototype.slice.call(arguments, 0))
                }
        };
        m.Utils.Event = function(r, q) {
            this.name = q;
            this.obj = r;
            this.listeners = []
            };
        m.Utils.Event.prototype = {
            createListener: function(s, r, t) {
                t = t || {};
                r = r || this.obj;
                var q = {
                    fn: s,
                    scope: r,
                    options: t
                };
                var v = s;
                if (t.delay) {
                    v = n(v, t, r)
                    }
                if (t.single) {
                    v = p(v, this, s, r)
                    }
                if (t.buffer) {
                    v = o(v, t, r)
                    }
                q.fireFn = v;
                return q
            },
            getListenerIndex: function(t, s) {
                s = s || this.obj;
                var v = this.listeners.length,
                q;
                for (var r = 0; r < v; r++) {
                    q = this.listeners[r];
                    if (q.fn == t && q.scope == s) {
                        return r
                    }
                }
                return - 1
            },
            fire: function() {
                var q = this.listeners,
                s = q.length;
                if (s > 0) {
                    this.firing = true;
                    for (var r = 0; r < s; r++) {
                        if (q[r].fireFn.apply(q[r].scope || this.obj || j, arguments) === false) {
                            this.firing = false;
                            return false
                        }
                    }
                    this.firing = false
                }
                return true
            },
            on: function(t, s, r) {
                if (m.isFunction(t)) {
                    s = s || this.obj;
                    if (!this.isListening(t, s)) {
                        var q = this.createListener(t, s, r);
                        if (!this.firing) {
                            this.listeners.push(q)
                            } else {
                            this.listeners = this.listeners.slice(0);
                            this.listeners.push(q)
                            }
                    }
                }
            },
            isListening: function(r, q) {
                return this.getListenerIndex(r, q) != -1
            },
            removeListener: function(s, r) {
                var q;
                if ((q = this.getListenerIndex(s, r)) != -1) {
                    if (!this.firing) {
                        this.listeners.splice(q, 1)
                        } else {
                        this.listeners = this.listeners.slice(0);
                        this.listeners.splice(q, 1)
                        }
                    return true
                }
                return false
            },
            clearListeners: function() {
                this.listeners = []
                }
        }
    })();
    m.Utils.Observable = function(n) {
        m.apply(this, n);
        this.events = {}
    };
    m.Utils.Observable.prototype = {
        filterOptRe: /^(?:scope|delay|buffer|single)$/,
        addEvents: function(q) {
            if (typeof q == "string") {
                for (var p = 0, n = arguments, o; o = n[p]; p++) {
                    if (!this.events[n[p]]) {
                        this.events[n[p]] = true
                    }
                }
            } else {
                m.apply(this.events, q)
                }
        },
        fireEvent: function() {
            if (this.eventsSuspended !== true) {
                var n = this.events[arguments[0].toLowerCase()];
                if (typeof n == "object") {
                    return n.fire.apply(n, Array.prototype.slice.call(arguments, 1))
                    }
            }
            return true
        },
        on: function(n, p, o, s) {
            if (typeof n == "object") {
                s = n;
                for (var q in s) {
                    if (this.filterOptRe.test(q)) {
                        continue
                    }
                    if (typeof s[q] == "function") {
                        this.on(q, s[q], s.scope, s)
                        } else {
                        this.on(q, s[q].fn, s[q].scope, s[q])
                        }
                }
                return
            }
            s = (!s || typeof s == "boolean") ? {}: s;
            n = n.toLowerCase();
            var r = this.events[n] || true;
            if (typeof r == "boolean") {
                r = new m.Utils.Event(this, n);
                this.events[n] = r
            }
            r.on(p, o, s)
            },
        un: function(n, p, o) {
            var q = this.events[n.toLowerCase()];
            if (typeof q == "object") {
                q.removeListener(p, o)
                }
        },
        purgeListeners: function() {
            for (var n in this.events) {
                if (typeof this.events[n] == "object") {
                    this.events[n].clearListeners()
                    }
            }
        },
        suspendEvents: function() {
            this.eventsSuspended = true
        },
        resumeEvents: function() {
            this.eventsSuspended = false
        }
    };
    m.Utils.Observable.prototype.constructor = m.Utils.Observable;
    m.ns("Ya.Utils");
    m.Utils.Ajax = (function() {
        function r() {
            try {
                return new j.XMLHttpRequest()
                } catch(z) {}
        }
        function x() {
            try {
                return new j.ActiveXObject("Microsoft.XMLHTTP")
                } catch(z) {}
        }
        function o() {
            try {
                return new j.XDomainRequest()
                } catch(z) {}
        }
        function w(A, z) {
            if (!z.hn) {
                return
            }
            A.onload = function() {
                var B = A.responseText;
                z.hn.apply(z.scope || A, z.args.splice(0, 0, B))
                }
        }
        function n(A, z) {
            if (!z.hn) {
                return
            }
            A.onreadystatechange = function() {
                if (A.readyState == 4) {
                    if (A.status == 200) {
                        var B = A.responseText;
                        z.hn.apply(z.scope || A, z.args.splice(0, 0, B))
                        } else {}
                }
            }
        }
        var v;
        function q() {
            var z = r();
            if (z) {
                q = r;
                v = n
            } else {
                q = o;
                v = w
            }
            return z
        }
        function t() {
            return r() || x()
            }
        function y(B, A) {
            for (var z in A) {
                if (A.hasOwnProperty(z)) {
                    B.setRequestHeader(z, A[z])
                    }
            }
        }
        function s(A) {
            var z = k.createElement("div"),
            D = "uploadFrame_" + m.genId(),
            B,
            C;
            z.style.position = "absolute";
            z.style.left = "-9999px";
            z.style.top = "-9999px";
            z.innerHTML = '<iframe name="' + D + '"></iframe><form target="' + D + '" method="' + A.type + '" enctype="' + (A.multipart ? "multipart/form-data": "application/x-www-form-urlencoded") + '" action="' + A.url + '">';
            k.body.appendChild(z);
            B = z.getElementsByTagName("iframe")[0];
            if (m.isSecure) {
                B.src = "javascript:false"
            }
            C = z.getElementsByTagName("form")[0];
            p(C, A.data);
            C.submit();
            setTimeout(function() {
                e.remove(z)
                }, 15000)
            }
        function p(A, B) {
            var z;
            for (var C in B) {
                if (B.hasOwnProperty(C)) {
                    z = k.createElement("input");
                    z.type = "hidden";
                    z.name = C;
                    z.value = B[C];
                    A.appendChild(z)
                    }
            }
        }
        return function(A) {
            var C,
            B = m.Utils.toQueryParams(A.data),
            z = A.url;
            if (A.type == "GET") {
                z += "?" + B;
                m.Utils.addScript(z)
                } else {
                C = q();
                if (!m.isOpera && ("withCredentials" in C || (C instanceof j.XDomainRequest))) {
                    v(C, A);
                    C.open(A.type, z, true);
                    y(C, A.headers);
                    C.send(B)
                    } else {
                    s(A)
                    }
            }
        }
    })();
    m.ns("Ya.Context");
    m.Context.Component = m.extend(m.Utils.Observable, {
        renderTo: "",
        _mainCont: null,
        _mainContId: "",
        classes: "",
        _uid: 0,
        css: {},
        html: "",
        templData: null,
        constructor: function(n) {
            m.Context.Component.superclass.constructor.call(this, n);
            this._mainContId = "ya_partner_" + this._uid
        },
        destructor: function() {
            this.destructor = m.emptyFn;
            m.Context.AdvManager.unregister(this);
            this.clearEvents();
            this.clearHTML()
            },
        clearHTML: function() {
            e.remove(this._mainCont);
            this._mainCont = null
        },
        clearEvents: function() {},
        render: function() {
            this.appendBlock()
            },
        initComponent: function() {},
        getMainCont: function(n) {
            if (!this._mainCont || n) {
                return this._mainCont = e("#" + this._mainContId)
                }
            return this._mainCont
        },
        _grabCss: function(q) {
            q = q || "css";
            var n = m.reverse(this._grabPrototypeChain(q, true)),
            o,
            r = {},
            p;
            for (p = 0; p < n.length; p++) {
                m.deepCopy(r, n[p])
                }
            if (m.isIE6 || m.isIE7 || m.isIE8 || m.isIEQuirks) {
                o = m.reverse(this._grabPrototypeChain(q + "Ie"));
                for (p = 0; p < o.length; p++) {
                    m.deepCopy(r, o[p])
                    }
            }
            return r
        },
        _specifyCssStylesSheet: function(q, p) {
            p = p || "#" + this._mainContId + " ";
            var s,
            o,
            r = [],
            n;
            for (o in q) {
                if (q.hasOwnProperty(o)) {
                    r.push(o)
                    }
            }
            for (n = 0; n < r.length; n++) {
                s = p + r[n];
                q[s] = q[r[n]];
                delete q[r[n]]
                }
            return q
        },
        decorateCss: function(n) {
            return n
        },
        decorateHtml: function(n) {
            this.templData = {};
            this.decorateHtml = function(o) {
                m.apply(this.templData, o)
                };
            this.decorateHtml(n)
            },
        _getCss: function() {
            var o = this._grabCss(),
            n = {};
            this.decorateCss(n);
            this._specifyCssStylesSheet(n);
            this._getCss = m.emptyFn;
            return this.compiledCss = this._buildCss({
                publicCss: o,
                privateCss: n
            }, true)
            },
        _grabClasses: function() {
            var n = (this._grabPrototypeChain("classes").join(" ") + " " + (this.classes || "")).split(" ");
            return m.reverse(m.unique(n)).join(" ")
            },
        _getHtml: function() {
            this.templData = this.templData || {};
            this.decorateHtml({
                classes: this._grabClasses(),
                mainContId: this._mainContId
            });
            return this.compiledHtml = m.xTempl(this.html, this.templData)
            },
        appendBlock: function(o, n) {
            n = n || this._getCss();
            o = o || this._getHtml();
            this.insertCSS(n);
            if (!o || !this.insertHtml(o)) {
                this.fireEvent("insertFailed", this);
                return false
            }
            this.fireEvent("afterInsert", this);
            return true
        },
        insertCSS: function(n) {
            m.Utils.appendStyle(n, !this.async)
            },
        insertHtml: function(o) {
            var n = e("#" + this.renderTo);
            if (this.renderTo && n) {
                n.innerHTML = o;
                return true
            } else {
                if (!this.async) {
                    k.write(o);
                    return true
                }
            }
            this.fireEvent("insertFailed", this);
            return false
        },
        _grabPrototypeChain: function(q, o) {
            var n = this.constructor.prototype.hasOwnProperty(q) ? [this.constructor.prototype[q]] : [],
            p = this.constructor.superclass;
            while (p) {
                if (p.hasOwnProperty(q)) {
                    n.push(p[q]);
                    if (o) {
                        delete p[q]
                        }
                }
                p = p.constructor.superclass
            }
            if (o) {
                delete this.constructor.prototype[q]
                }
            return n
        },
        _buildCss: function(n, o) {
            if (typeof n == "string") {
                n = this[n]
                }
            var p = this._compileCSSRule("", n.privateCss, o),
            q = this._compileCSSRule("", n.publicCss, o);
            return [m.trim(q.substring(2, q.length - 2)), m.trim(p.substring(2, p.length - 2))].join("\n")
            },
        _compileCSSRule: function(q, p, n) {
            var o = [];
            return m.format("${0} {\n${1}}\n", q, m.map(m.keys(p), function(v) {
                var t = p[v],
                s,
                r,
                w;
                if (typeof t == "object") {
                    if (/^[?^] /.test(v)) {
                        s = typeof k.documentElement.style[e.normalizeCSSProperty(v.substr(2), "")[0]] == "string";
                        r = (v.charAt(0) == "?" && s) || (v.charAt(0) == "^" && !s);
                        if (r) {
                            o.push(this._compileCSSRule(q, t, n))
                            }
                    } else {
                        o.push(this._compileCSSRule(q + " " + v, t, n))
                        }
                    return ""
                } else {
                    if (n && !/!important$/.test(t)) {
                        t += " !important"
                    }
                    w = e.normalizeCSSProperty(v, m.format(t, this));
                    return m.format("    ${0}: ${1};\n", m.uncamelize(w[0]), w[1])
                    }
            }, this).join("") + o.join(""))
            },
        addModificatorClass: function(o, n) {
            if (o || typeof o == "string") {
                if (n) {
                    this.classes = m.trim(o) + " " + this.classes
                } else {
                    this.classes += " " + m.trim(o)
                    }
            }
        },
        addCssStyle: function(q, p, s) {
            if (typeof q == "string") {
                q = q.split(",")
                }
            var r,
            o,
            t,
            n;
            for (n = 0; n < q.length; n++) {
                r = m.trim(q[n]);
                if (!r) {
                    continue
                }
                o = m.ns(r, p, ";");
                for (t in s) {
                    if (s.hasOwnProperty(t)) {
                        o[t] = s[t]
                        }
                }
            }
            return p
        },
        getCssStyle: function(n, p, o) {
            if (!n) {
                return
            }
            var q = m.ns(n, o, ";");
            return q[p]
            }
    });
    m.ns("Ya.Context");
    m.Utils.logger = new(m.extend(m.Utils.Observable, {
        errorsLimit: 3,
        log: function(n) {
            if (!this.errorsLimit) {
                return
            }
            this.errorsLimit--;
            m.Utils.Ajax({
                type: "POST",
                url: "//an.yandex.ru/jserr/" + m.partnerId,
                data: {
                    errmsg: n + "----" + m.Context.Loader._dataStr || m.Context.Loader.dataRtbStr
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            },
        wrapFunc: function(n, p, o) {
            var q = function() {
                if (m.debugMode) {
                    return p.apply(o || this, arguments)
                    }
                try {
                    return p.apply(o || this, arguments)
                    } catch(r) {
                    if (m.isTestVersion) {
                        m.Utils.logger.log("v" + m.ver + ":" + n + ":" + r.message + ":" + m.Utils.logger.getStackTrace())
                        }
                }
            };
            q.__wrapped = true;
            q.prototype = p.prototype;
            return m.apply(q, p)
            },
        wrapObj: function(p, q, o) {
            for (var n in q) {
                if (q[n] && q[n].apply && !q[n].__wrapped) {
                    q[n] = this.wrapFunc(p + n, q[n], o)
                    }
            }
        },
        getFunctionName: function(n) {
            var o = (n + "").match(/function\s*(\w*)/)[1];
            if ((o == null) || (o.length == 0)) {
                o = "anonymous"
            }
            return o
        },
        getStackTrace: function() {
            var o = "";
            if (typeof(arguments.caller) != "undefined") {
                for (var p = arguments.caller; p != null; p = p.caller) {
                    o += "> " + this.getFunctionName(p.callee);
                    if (p.caller == p) {
                        o += "*";
                        break
                    }
                }
            } else {
                var q;
                try {
                    foo.bar
                } catch(q) {
                    var n = this.parseErrorStack(q);
                    for (var r = 1; r < n.length; r++) {
                        o += "> " + n[r]
                        }
                }
            }
            return o
        },
        parseErrorStack: function(q) {
            var n = [];
            var o;
            if (!q || !q.stack) {
                return n
            }
            var s = q.stack.split("\n");
            for (var p = 0; p < s.length - 1; p++) {
                var r = s[p];
                o = r.match(/^(\w*)/)[1];
                if (!o) {
                    o = "anonymous"
                }
                n[n.length] = o
            }
            return n
        }
    }))();
    m.ns("Ya.Context"); (function() {
        m.Context.grab = function(q, z) {
            if (z) {
                var w = "yandex.ru yandex.com yandex.ua yandex.by yandex.kz yandex.com.tr".split(" "),
                A = k.location.host,
                v;
                for (v = 0; v < w.length; v++) {
                    if (A.substr(A.length - w[v].length, A.length) == w[v]) {
                        return z
                    }
                }
            }
            var s = ["t" + (k.title || "")],
            y = s[0].length,
            v = 1,
            t,
            x;
            while (v < 4 && y < q) {
                t = k.getElementsByTagName("h" + v);
                for (var r = 0; r < t.length; r++) {
                    x = o(t[r]);
                    y += x.length;
                    s.push(v + "" + x)
                    }
                v++
            }
            var B = s.join("\n");
            return m.Utils.Base64.encode(B, q)
            };
        function o(q) {
            return p(q, 0).replace(/\s+/, " ")
            }
        var n = 5;
        function p(t, v) {
            if (!t || v > n) {
                return ""
            }
            var q = "",
            s = t.childNodes,
            r = 0,
            w;
            while (r < s.length) {
                w = s[r];
                switch (w.nodeType) {
                case 1:
                case 5:
                    q += p(w, v + 1);
                    break;
                case 3:
                case 2:
                case 4:
                    q += w.nodeValue + " ";
                    break
                }
                r++
            }
            return q
        }
    })();
    m.ns("Ya.Context");
    m.Context.Loader = new(m.extend(m.Utils.Observable, {
        _startLoading: false,
        _data: {},
        _dataStr: "",
        _lastReloadTime: 0,
        callbacks: {},
        usedAdvs: [],
        rtbFilter: "",
        suspendFiring: false,
        constructor: function(n) {
            this.constructor.superclass.constructor.call(this, n);
            m.Utils.logger.wrapObj("loader.", this, this)
            },
        load: function(r, q, p) {
            var o = q.product == m.Const.Products.RTB,
            s = +new Date();
            if (!o && this._startLoading) {
                return
            } else {
                if (!o && !this.isCanReload()) {
                    this.fireEvent("loaded", this, null, null, this._data.settings, q.product, this._data.common.deviceType);
                    return
                } else {
                    if (r && (this._startLoadingRTB || o && this._startLoading)) {
                        this.on("continueLoading", function() {
                            this.load(r, q, p)
                            }, this, {
                            single: true
                        });
                        this.suspendFiring = true;
                        return
                    }
                }
            }
            m[s] = m.Utils.logger.wrapFunc("cb.", function(v) {
                var B,
                t,
                x = "loaded",
                A = ":BK:",
                y,
                w;
                this._dataStr = v;
                try {
                    delete m.Context.Loader.callbacks[s];
                    B = (new Function("return " + v + ";"))()
                    } catch(z) {
                    if (o) {
                        A += "RTB:"
                    }
                    m.Utils.logger.log("v" + m.ver + A + z.message)
                    }
                this.validateData(B);
                this.validateData(this._data);
                if (!o) {
                    this._data = B;
                    this._lastReloadTime = +new Date();
                    this._startLoading = false
                } else {
                    x = "loadedRTB";
                    this._startLoadingRTB = false
                }
                if (o && B.rtb && B.rtb.html) {
                    w = [B.rtb];
                    y = m.Const.Products.RTB;
                    t = this.getProductCommonData(y, B)
                    } else {
                    if (o) {
                        w = B.direct.ads;
                        y = m.Const.Products.DIRECT;
                        this.removeUsed(m.Const.Products.RTB, B.direct.ads);
                        t = this.getProductCommonData(y, B)
                        }
                }
                this.fireEvent(x, this, w, t, B.settings, y, B.common.deviceType);
                this.fireEvent("continueLoading")
                }, this);
            var n = this.getAdsUrl(q, p, "Ya[" + s + "]");
            m.Utils.addScript(n, !r);
            if (o) {
                this._startLoadingRTB = true
            } else {
                this._startLoading = true
            }
        },
        validateData: function(o) {
            var o = o || this._data || {},
            p = m.Const.Products,
            n;
            o.common = o.common || {};
            o.settings = o.settings || {};
            for (n in p) {
                n = n.toLowerCase();
                o[n] = o[n] || {}
            }
        },
        getAdvsFromCache: function(t, n, s) {
            var o = t == m.Const.Products.RTB;
            if (o && this._data[t].rtb) {
                return [this._data[t]]
                } else {
                if (o) {
                    return []
                    }
            }
            var r = [],
            v = this._data[t].ads || [],
            q = Math.min(n, v.length),
            p = 0;
            while (r.length < q && v.length > p) {
                if (s !== true || !v[p].warning) {
                    r.push(m.deepCopy({}, v[p]))
                    }
                p++
            }
            return r
        },
        getProductCommonData: function(o, n) {
            var n = n || this._data,
            p = n.common.linkHead;
            if (o == m.Const.Products.MARKET) {
                p = n[o]["linkConf"]
                }
            return {
                linkHead: p,
                prodTitle: n[o][o + "Title"] || {},
                linkAll: n[o].linkAll || {}
            }
        },
        getAllowedDomains: function() {
            return this._data.common.domains || []
            },
        getCheckVisOff: function() {
            return this._data.common.checkVisOff || []
            },
        removeUsed: function(t, q) {
            q = q || [];
            var n = function(w, v) {
                if (w.url == v.url || w.linkTail == v.linkTail || w.body == v.body) {
                    return true
                }
            },
            o = (this._data[t] || {}).ads || [],
            r = q.length,
            s,
            p;
            for (p = 0; p < q.length; p++) {
                s = m.inArray(o, q[p], n);
                if (s != -1) {
                    o.splice(s, 1)
                    }
                if (s != -1 || t == m.Const.Products.DIRECT) {
                    this.usedAdvs.push(q[p].adId)
                    }
            }
        },
        isCanReload: function() {
            return ! (this._lastReloadTime && new Date() - this._lastReloadTime < m.Const.Limits.reloadTimeOut)
            },
        getAdsUrl: function(o, t, v) {
            var p,
            q,
            x,
            r = /^[a-z\.\-]*?$/i;
            try {
                p = j.top.document.location.href;
                q = j.top.document.referrer;
                x = j.top.document.location.host;
                if (m.isIE6 && p == q) {
                    q = ""
                }
                if (!r.test(x)) {
                    p = p.replace(x, m.Utils.Punycode.toASCII(x))
                    }
            } catch(s) {
                p = k.referrer || j.location.href;
                q = ""
            }
            if (!r.test(q)) {
                q = q.replace(x, m.Utils.Punycode.toASCII(x))
                }
            var w = {
                callback: v,
                "target-ref": p.substr(0, 512),
                "page-ref": q.substr(0, 512),
                rnd: m.genRnd(),
                UT: o.updatetag ? m.Utils.calcFletcherSum(o.updatetag + "").toString(16) : "",
                charset: o.siteCharset || m.Utils.getDocumentCharset(),
                "stat-id": o.statId
            },
            n = "//an.yandex.ru/page/" + t.pageId + "?";
            this.getSocialData(w, o);
            if (o.product == m.Const.Products.RTB) {
                m.apply(w, {
                    "skip-token": this.getAdsFilter(true),
                    "imp-id": t.blockId || 1
                });
                n = "//bs-meta.yandex.ru/meta/" + (t.pageId || o.partnerId) + "?"
            } else {
                w["skip-banner"] = this.getAdsFilter()
                }
            n += m.Utils.toQueryParams(w);
            n += o.extParams || "";
            n += "&grab=";
            if (location.protocol == "http:") {
                n += m.Context.grab(2040 - n.length, o.grab)
                }
            return n
        },
        getAdsFilter: function(n) {
            var p,
            o;
            if (n) {
                p = "yabs." + m.Utils.Base64.encode(this.usedAdvs.join("\n"));
                o = this.rtbFilter.replace(/^yabs\.[^:]*:?/im, "");
                if (o) {
                    p += ":" + this.rtbFilter.replace(/^yabs\.[^:]*:?/im, "")
                    }
                return p
            } else {
                return this.usedAdvs.join("\n")
                }
        },
        getSocialData: function(n, p) {
            var o = p.userGender,
            r = parseInt(p.userYearofbirth, 10),
            q = parseInt(p.userExternal, 10);
            if (r && r > 1920 && r < ((new Date).getFullYear() - 3)) {
                n.YOB = r
            }
            if (/^male$/.test(o)) {
                n.gender = 1
            } else {
                if (/^female$/.test(o)) {
                    n.gender = 2
                }
            }
            if (/^\d{1,16}$/.test(q) && q > 0) {
                n.uid = q
            }
        }
    }))();
    m.ns("Ya.Const");
    m.Const.BlockTypes = {
        VERTICAL: "vertical",
        FLAT: "flat",
        HORIZONTAL: "horizontal",
        AUTO: "auto",
        MOBILE: "mobile",
        ROW: "row",
        MEDIA: "media"
    };
    m.Const.BorderTypes = {
        NONE: "none",
        BLOCK: "block",
        AD: "ad"
    };
    m.Const.BorderStyles = {
        RADIUS: "radius",
        NONE: "NONE"
    };
    m.Const.Products = {
        MARKET: "market",
        DIRECT: "direct",
        RTB: "rtb",
        MEDIA: "media"
    };
    m.Const.Header = {
        RIGHT: "right",
        LEFT: "left",
        BOTTOM: "bottom",
        TOP: "top",
        TOP_BOTTOM: "top+bottom",
        TOP_RIGHT: "top+right",
        BOTTOM_BOTTOM: "bottom+bottom"
    };
    m.Const.Limits = {
        reloadTimeOut: 30000,
        visibCheckDelay: 2000,
        minAdv: 1,
        maxAdv: 9
    };
    m.Const.Fonts = {
        fontNames: ["arial", "courier new", "tahoma", "times new roman", "verdana"],
        fontFamilies: ["sans-serif", "serif", "monoscape"],
        fontSizeMin: 0.5,
        fontSizeMax: 2.5,
        fontSizeDef: 1,
        titleFontSizeSettingsDef: 3,
        titleFontSizeDef: "125%",
        fontSizeRanges: {
            1: [0, 777],
            2: [0, 0.7, 0.8, 1.1, 777],
            3: [0, 0.9, 1, 1.1, 777]
            },
        titleFontSizes: {
            1: [107],
            2: [128, 125, 123, 116],
            3: [135, 130, 128, 125]
            }
    };
    m.ns("Ya.Context.Direct");
    m.Context.Direct.Format = m.extend(m.emptyFn, {
        constructor: function(n) {
            m.apply(this, n);
            this.size = this.size || []
            },
        skipWarnings: function(p) {
            var q = m.Const.BlockTypes,
            o = ["600x60", "125x125", "234x60", "468x60", "180x150"],
            n = [q.ROW];
            if (m.inArray(o, this.name) > -1 || m.inArray(n, this.type) > -1) {
                return true
            }
            return false
        },
        getSize: function() {
            if (this.fixed) {
                return this.name.split("x")
                }
            return [ - 1, -1]
            }
    });
    m.Context.Direct.FormatManager = new(m.extend(m.emptyFn, {
        formats: null,
        constructor: function(n) {
            this.constructor.superclass.constructor.call(this, n);
            var q = m.Context.Direct.Format,
            o = m.Const.BlockTypes,
            p = m.Const.BorderTypes,
            r = m.Const.Header;
            this.formats = [new q({
                name: o.VERTICAL,
                fixed: false,
                type: o.VERTICAL,
                limit: 9,
                header: [r.TOP, r.BOTTOM],
                border: [p.NONE, p.BLOCK, p.AD]
                }), new q({
                name: o.FLAT,
                fixed: false,
                type: o.FLAT,
                limit: 4,
                header: [r.TOP, r.BOTTOM],
                border: [p.NONE, p.BLOCK, p.AD]
                }), new q({
                name: o.HORIZONTAL,
                fixed: false,
                type: o.HORIZONTAL,
                limit: 4,
                header: [r.TOP, r.BOTTOM],
                border: [p.NONE, p.BLOCK, p.AD]
                }), new q({
                name: o.AUTO,
                fixed: false,
                type: o.HORIZONTAL,
                limit: 3,
                header: [r.TOP],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "160x600",
                fixed: true,
                type: o.VERTICAL,
                limit: 5,
                header: [r.TOP_BOTTOM],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "240x400",
                fixed: true,
                type: o.VERTICAL,
                limit: 4,
                header: [r.BOTTOM],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "120x600",
                fixed: true,
                type: o.VERTICAL,
                limit: 4,
                header: [r.TOP_BOTTOM],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "200x300",
                fixed: true,
                type: o.VERTICAL,
                limit: 3,
                header: [r.BOTTOM],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "300x300",
                fixed: true,
                type: o.VERTICAL,
                limit: 4,
                header: [r.BOTTOM],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "300x250",
                fixed: true,
                type: o.VERTICAL,
                limit: 3,
                header: [r.BOTTOM],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "250x250",
                fixed: true,
                type: o.VERTICAL,
                limit: 3,
                header: [r.BOTTOM],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "120x240",
                fixed: true,
                type: o.VERTICAL,
                limit: 2,
                header: [r.BOTTOM],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "180x150",
                fixed: true,
                type: o.VERTICAL,
                limit: 1,
                header: [r.TOP_BOTTOM],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "125x125",
                fixed: true,
                type: o.VERTICAL,
                limit: 1,
                header: [r.BOTTOM],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "728x90",
                fixed: true,
                type: o.FLAT,
                limit: 3,
                header: [r.BOTTOM, r.TOP],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "600x60",
                fixed: true,
                type: o.FLAT,
                limit: 2,
                header: [r.BOTTOM, r.TOP],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "468x60",
                fixed: true,
                type: o.FLAT,
                limit: 1,
                header: [r.BOTTOM, r.TOP],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: "234x60",
                fixed: true,
                type: o.FLAT,
                limit: 1,
                header: [r.BOTTOM, r.TOP],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: o.ROW,
                fixed: false,
                type: o.ROW,
                limit: 1,
                header: [r.LEFT],
                border: [p.NONE]
                }), new q({
                name: o.MEDIA,
                fixed: false,
                type: o.MEDIA,
                limit: 1,
                header: [r.TOP],
                border: [p.NONE, p.BLOCK]
                }), new q({
                name: o.MOBILE,
                fixed: false,
                type: o.MOBILE,
                limit: 1,
                header: [r.BOTTOM],
                border: [p.NONE, p.BLOCK]
                })]
            },
        getFormatTypeByName: function(o) {
            var n = m.inArray(this.formats, o, function(q, p) {
                if (p.name == q) {
                    return true
                }
            });
            if (n != -1) {
                return this.formats[n].type
            }
            return ""
        },
        getFormatByName: function(p, n) {
            var o = m.inArray(this.formats, p, function(r, q) {
                if (q.name == r) {
                    return true
                }
            });
            if (o != -1) {
                this.formats[o].index = o;
                return this.formats[o]
                }
            if (n !== false) {
                return this.getDefaultFormat()
                }
        },
        getDefaultFormat: function() {
            return this.formats[0]
            }
    }))();
    m.ns("Ya.Context");
    m.Context.AdvManager = new(m.extend(m.Utils.Observable, {
        blocks: [],
        customTag: "YATAG",
        constructor: function(n) {
            this.constructor.superclass.constructor.call(this, n);
            m.Utils.logger.wrapObj("advManager.", this, this);
            if (this.customTag) {
                k.createElement(this.customTag)
                }
        },
        _expId: (function() {
            if (/yandex_exp_id=(\d+)/.test(j.location.href)) {
                return m.expId = RegExp.$1 * 1
            }
            var q = [0, 0, 0, 0, 0, 0],
            o = Math.random(),
            n = 0,
            p = 0;
            while (q.length > n) {
                p += 0.01 * q[n];
                if (o < p) {
                    return m.expId = n + 1
                }
                n++
            }
            return m.expId = 0
        } ()),
        render: function(o, r) {
            o.settings = this.validateSettings(o.settings);
            o.settings.extParams = o.extParams;
            o.blockUID = this.parsePageUID(o.blockId);
            var p = "loaded",
            q;
            if (o.blockUID.product) {
                o.settings.product = m.Const.Products.RTB;
                p = "loadedRTB"
            }
            if (o.async) {
                q = this.getBlockByElId(o.renderTo);
                if (q && !q.isCanReload()) {
                    q.redrawAdv();
                    return false
                }
            }
            this.metrikaHit(o.blockUID.pageId);
            var n = m.Context.Loader;
            if (!o.async) {
                n.fireEvent(p, n, [])
                }
            n.on(p, function(x, t, w, v, z, y) {
                var s;
                if (v && v[o.blockUID.blockId]) {
                    s = v[o.blockUID.blockId];
                    s.product = z;
                    n.rtbFilter = s.adFilter || "";
                    o.settings = this.validateSettings(s)
                    }
                var A = (this.getBlockByElId(o.renderTo) || this.blockFabric(o, y));
                if (z && A.settings.product != z) {
                    A.destructor();
                    A = this.blockFabric(o, y)
                    }
                A.on("altCallback", r);
                A.showAdvs(n, t, w);
                if (n.suspendFiring === true && o.async && p != "loaded") {
                    n.suspendFiring = false;
                    return false
                }
            }, this, {
                single: true
            });
            n.load(o.async, o.settings, o.blockUID);
            return true
        },
        parsePageUID: function(o) {
            var p = /^(\w)\-(\d+)\-(\d+)$/i.exec(o),
            n = {
                uidStr: o
            };
            if (p && p.length == 4) {
                n.product = p[1];
                n.blockId = p[3];
                m.partnerId = n.pageId = p[2]
                } else {
                m.partnerId = n.pageId = parseInt(o || j.yandex_partner_id, 10);
                n.blockId = 1;
                j.yandex_partner_id = null
            }
            return n
        },
        metrikaHit: function(n) {
            if (!n) {
                return
            }
            a(n, 1);
            this.metrikaHit = m.emptyFn
        },
        blockFabric: function(n, q) {
            var p = n.settings,
            o = n._uid = this.blocks.length,
            r = p.product;
            n.renderTo = n.renderTo || p.renderTo || "";
            if (r == m.Const.Products.MOBILE) {
                if (q < 3 && q > 4) {
                    p.format.name = "PdaBlock"
                } else {
                    p.format.name = "TouchBlock"
                }
            } else {
                if (m.Context[m.capitalize(r)] && m.Context[m.capitalize(r)][m.capitalize(p.format.name)]) {
                    return this.blocks[o] = new m.Context[m.capitalize(r)][m.capitalize(p.format.name)](n)
                    } else {
                    if (r == m.Const.Products.RTB) {
                        return this.blocks[o] = new m.Context.RTB(n)
                        }
                }
            }
            return this.blocks[o] = new m.Context.Direct.Vertical(n)
            },
        unregister: function(n) {
            if (this.blocks[n._uid]) {
                this.blocks[n._uid].destructor();
                delete this.blocks[n._uid]
                }
        },
        getBlockById: function(n) {
            return this.blocks[n]
            },
        getBlockByElId: function(o) {
            if (!o) {
                return null
            }
            var n = m.inArray(this.blocks, o, function(q, p) {
                if (p && p.renderTo == q) {
                    return true
                }
            });
            return this.blocks[n]
            },
        camelizeSettings: function(p) {
            var o,
            n;
            for (n in p) {
                if (!p.hasOwnProperty(n)) {
                    continue
                }
                o = m.camelize(n);
                p[o] = p[n];
                if (o != n) {
                    delete p[n]
                    }
            }
        },
        convertOldSettings: function(o) {
            var n = {
                type: "name",
                place: "renderTo",
                ad_format: "product"
            },
            p;
            for (p in n) {
                if (!o.hasOwnProperty(p)) {
                    continue
                }
                if (o[p]) {
                    o[n[p]] = o[p];
                    delete o[p]
                    }
            }
            this.camelizeSettings(o)
            },
        validateSettings: function(o) {
            o = o || {};
            this.convertOldSettings(o);
            o.product = o.product || m.Const.Products.DIRECT;
            if (o.product == m.Const.Products.MEDIA) {
                o.name = m.Const.BlockTypes.MEDIA
            } else {
                if (o.product == m.Const.Products.MOBILE) {
                    o.name = m.Const.BlockTypes.MOBILE
                }
            }
            o.statId = parseInt(o.statId, 10);
            if (isNaN(o.statId)) {
                o.statId = ""
            }
            o.format = m.Context.Direct.FormatManager.getFormatByName(o.name);
            o.limit = m.Utils.checkValue(parseInt(o.limit, 10), m.Const.Limits.minAdv, m.Const.Limits.maxAdv, m.Const.Limits.maxAdv);
            var p = o.format,
            n = p.getSize();
            o.width = n[0];
            o.height = n[1];
            if (m.inArray(p.border, o.borderType) == -1) {
                o.borderType = p.border[0]
                }
            if (!o.borderRadius) {
                o.borderRadius = m.Const.BorderStyles.NONE
            }
            if (m.inArray(p.header, o.headerPosition) == -1) {
                o.headerPosition = p.header[0]
                }
            this.validateColors(o);
            this.validateFonts(o);
            this.validateFontSizes(o);
            return o
        },
        validateFonts: function(p) {
            var o = m.Const.Fonts,
            n = o.fontNames,
            r = o.fontFamilies,
            q = m.inArray(n, p.fontFamily);
            if (q == -1) {
                p.fontFamily = "inherit"
            } else {
                if (q == 1) {
                    p.fontFamily += ", " + r[2]
                    } else {
                    if (q == 3) {
                        p.fontFamily += ", " + r[1]
                        } else {
                        p.fontFamily += ", " + r[0]
                        }
                }
            }
            return p
        },
        validateFontSizes: function(r) {
            if (r.format.fixed) {
                return r
            }
            var q = m.Const.Fonts,
            t = r.fontSize = m.Utils.checkValue(parseFloat(r.fontSize, 10), q.fontSizeMin, q.fontSizeMax, q.fontSizeDef),
            n = m.Utils.checkValue(parseInt(r.titleFontSize, 10), 1, 3, q.titleFontSizeSettingsDef),
            o = q.fontSizeRanges[n],
            s = q.titleFontSizes[n],
            p;
            for (p = 0; p < o.length - 1; p++) {
                if (o[p] < t && t <= o[p + 1]) {
                    r.titleFontSize = s[p] + "%";
                    return r
                }
            }
        },
        validateColors: function(o) {
            var q = "siteBgColor bgColor borderColor headerBgColor titleColor urlColor allColor hoverColor bgStartColor bgEndColor textColor".split(" "),
            r,
            p = q.length,
            n;
            for (n = 0; n < p; n++) {
                r = o[q[n]];
                if (m.checkColorHash(r)) {
                    o[q[n]] = "#" + r
                } else {
                    delete o[q[n]]
                    }
            }
            return o
        },
        getBlocksEls: function() {
            var n = [],
            p = this.blocks.length,
            q,
            o;
            for (o = 0; o < p; o++) {
                q = this.blocks[o];
                if (q.mainCont) {
                    n.push(q.mainCont)
                    }
            }
            return n
        },
        getBlocks: function() {
            return this.blocks
        }
    }))();
    m.Context.Adv = m.extend(m.Context.Component, {
        css: {
            "body .ya-partner .ya-partner__hidden": {
                display: "none !important"
            }
        },
        advs: null,
        loaded: false,
        lastReloadTime: 0,
        constructor: function(n) {
            m.Context.Adv.superclass.constructor.call(this, n);
            this.advs = [];
            m.Utils.logger.wrapObj("blocks.", this, this);
            this.on("afterRender", this.onRender)
            },
        clearEvents: function() {
            m.Context.Adv.superclass.clearEvents.call(this);
            this.removeVisibilityCheck()
            },
        isCanReload: function() {
            if (this.lastReloadTime && new Date() - this.lastReloadTime < m.Const.Limits.reloadTimeOut) {
                return false
            }
            return true
        },
        checkPartner: function(n) {
            return ! (this.parnterId != m.narodPageID && n.length && !m.Utils.isSameDomain(n || []))
            },
        createTemplObj: function(o, p) {
            var n = this.settings;
            this.typography(o);
            this.addLinkTails(o);
            if (n.favicon) {
                this.setFaviconSrc(o)
                }
            return {
                yaUrl: p.prodTitle.url || "",
                yaTitle: p.prodTitle.title || "",
                allAdvUrl: p.linkAll.url || "",
                allAdvTitle: p.linkAll.title || "",
                ads: o,
                settings: n,
                format: n.format
            }
        },
        getAdvsCount: function() {
            var o = this.settings,
            p = o.format,
            n = Math.min(p.limit, o.limit || 9);
            if (p.fixed) {
                return p.limit
            }
            return n
        },
        showAdvs: function(s, o, q) {
            if (m.isArray(o) && !o.length) {
                this.fireEvent("renderFailed", this, this.mainCont, 0);
                return true
            }
            this.clearEvents();
            this.clearHTML();
            if (!this.checkPartner(s.getAllowedDomains())) {
                this.fireEvent("renderFailed", this, this.mainCont, 0);
                return true
            }
            var n = this.settings,
            v = m.Utils.DomEvent,
            t = n.product,
            r = n.format,
            p = this.getAdvsCount();
            q = q || s.getProductCommonData(t);
            this.advs = o || s.getAdvsFromCache(t, p, r.skipWarnings(n));
            p = Math.min(this.advs.length, p);
            this.advs = this.advs.slice(0, p);
            if (p == 0) {
                this.fireEvent("renderFailed", this, this.mainCont, 0);
                this.fireEvent("altCallback", this, this.mainCont);
                return true
            }
            var w = this.createTemplObj(this.advs, q);
            this.decorateHtml(w);
            if (!this.appendBlock()) {
                this.fireEvent("renderFailed", this, this._mainCont, 0);
                return true
            }
            this.getMainCont(true);
            this.removeOverflow();
            v.on(j, "load", this.removeOverflow, this);
            v.domReady(this.removeOverflow, this);
            if (!this.async) {
                j.yandex_ad_is_displayed = true
            }
            this.linkHead = q.linkHead;
            this.getVisibilityCheckLink(this.linkHead, this.advs);
            if (m.inArray(s.getCheckVisOff() || [], this.blockUID.pageId) > -1) {
                m.Utils.addScript(this.visibCheckLink)
                } else {
                this.addVisibilityCheck()
                }
            this.lastReloadTime = +new Date();
            s.removeUsed(t, this.advs);
            this.fireEvent("afterRender", this, this._mainCont, this.advs, p);
            return true
        },
        redrawAdv: function() {
            this.appendBlock(this.compiledHtml, this.compiledCss);
            this.removeOverflow()
            },
        isAdsHasWarnings: function(o) {
            for (var n = 0; n < o.length; n++) {
                if (o[n] && o[n].warning) {
                    return true
                }
            }
        },
        addExpClass: function() {
            var n = "";
            if (m.expId > 0) {
                n = "exp" + m.expId
            }
            this.addModificatorClass(n)
            },
        addLinkTails: function(o) {
            if (this.settings.product == m.Const.Products.MARKET) {
                return false
            }
            var p = this.getLinkTailExt(o);
            for (var n = 0; n < o.length; n++) {
                o[n].url += p;
                if (o[n].vcardUrl) {
                    o[n].vcardUrl += p
                }
                if (o[n].callUrl) {
                    o[n].callUrl += p
                }
            }
        },
        getVisibilityCheckLink: function(o, n) {
            return this.visibCheckLink = o + this.getLinkTail(n) + "&wmode=3"
        },
        getTestTag: function(q) {
            var o = this.settings,
            p = 0,
            n = o.fontFamily;
            p | =1;
            p | =m.ver % 8 << 4;
            p | =m.expId << 7;
            p | =o.format.index << 10;
            p | =this._uid << 15;
            p | =((o.format.fixed || o.format.name == m.Const.BlockTypes.AUTO) ? o.format.limit: Math.min(o.limit || 9, o.format.limit)) << 18;
            p | =q.length << 22;
            p | =(n ? m.inArray(m.Const.Fonts.fontNames, n) + 1: 0) << 26;
            p | =(o.favicon ? 1: 0) << 29;
            return p
        },
        getLinkTailExt: function(p, r, n) {
            var q = this.getTestTag(p, r, n),
            o = j.yandex_stat_id || p.stat_id;
            return (o ? "?stat-id=" + o: "") + (q ? (o ? "&": "?") + "test-tag=" + q: "")
            },
        removeOverflow: function() {
            if (!this.settings.format.fixed && this.settings.format.type != m.Const.BlockTypes.ROW) {
                return this.advs
            }
            var D = this.getMainCont(true),
            p = e(".ya-partner", D)[0],
            A = e.classNameExists(p, "ya-partner__hide-urls"),
            v = e(".ya-partner__item", D),
            y = e(".ya-partner__hidden", D),
            q = v[v.length - 1],
            o = q,
            B = 0,
            n = true,
            x = false,
            t = m.isOpera ? "scroll": "auto",
            w;
            e.remove(y);
            e.css(p, {
                overflow: t
            });
            while (e.isHasScroll(p)) {
                x = true;
                if (n && !A) {
                    e.addClass(p, "ya-partner__hide-urls")
                    } else {
                    if (!o.previousSibling) {
                        e.addClass(p, "ya-partner__hide-urls");
                        n = false;
                        break
                    }
                    if (!A) {
                        e.removeClass(p, "ya-partner__hide-urls")
                        }
                    o = q.previousSibling;
                    e.addClass(o, "ya-partner__item_pos_last");
                    e.remove(q);
                    q = o;
                    B++
                }
                n = !n
            }
            e.css(p, {
                overflow: "hidden"
            });
            if (x && !n && !A) {
                e.addClass(p, "ya-partner__hide-urls")
                }
            if (!B) {
                return this.advs
            }
            var r = this.getLinkTailExt(this.advs),
            s = this.advs.slice(0, this.advs.length - B),
            E = this.getLinkTailExt(s),
            C = (D || p).getElementsByTagName("a") || [],
            z = C.length;
            for (w = 0; w < z; w++) {
                C[w].href = C[w].href.replace(r, E)
                }
            this.getVisibilityCheckLink(this.linkHead, s);
            this.advs = s;
            return s
        },
        addVisibilityCheck: function() {
            var p = this.getMainCont(true),
            o = m.Utils.DomEvent;
            if (this.isAddedVisibCheck) {
                return
            } else {
                if (!p) {
                    o.domReady(this.addVisibilityCheck, this);
                    return
                }
            }
            this.checkVisibility();
            this.isAddedVisibCheck = true;
            o.on(j, "scroll", this.checkVisibility, this);
            o.on(j, "resize", this.checkVisibility, this);
            o.on(p, "mouseover", this.sendVisibility, this);
            o.on(j, "load", this.checkVisibility, this, {
                single: true
            });
            o.domReady(this.checkVisibility, this);
            var n = p,
            q = k.getElementsByTagName("html")[0];
            do {
                n = n.parentNode;
                var r = e.getStyle(n, "overflow");
                if (n && n != k && n != k.body && n != q && (r == "scroll" || r == "auto")) {
                    o.on(n, "scroll", this.checkVisibility, this);
                    o.on(n, "resize", this.checkVisibility, this)
                    }
            }
            while (n)
            },
        checkVisibility: (function() {
            if (m.isOperaMini) {
                return function() {
                    var n = this.getMainCont(true);
                    if (n.offsetWidth > 0 && n.offsetHeight > 0) {
                        this.sendVisibility();
                        return true
                    } else {
                        m.Utils.DomEvent.on(j, "load", this.checkVisibility, this, {
                            single: true
                        })
                        }
                }
            } else {
                return function() {
                    if (this.isSentVisibility) {
                        return true
                    }
                    var w = this.getMainCont(true),
                    v;
                    if (!w) {
                        return
                    }
                    v = w.firstChild || w;
                    if (v.offsetWidth <= 0 && v.offsetHeight <= 0) {
                        return
                    }
                    var t = e.getXY(v),
                    p = t.offsetLeft,
                    o = t.offsetTop,
                    q = e.getWindowSize()[0],
                    s = e.getWindowSize()[1],
                    r = e.getWindowScroll()[0],
                    n = e.getWindowScroll()[1];
                    if ((p + v.offsetWidth) >= r && p < (r + q) && (o + v.offsetHeight) >= n && o < (n + s)) {
                        if (!this.visibCheckTimeOutId) {
                            var x = this;
                            this.visibCheckTimeOutId = setTimeout(function() {
                                x.sendVisibility()
                                }, m.Const.Limits.visibCheckDelay)
                            }
                    } else {
                        clearTimeout(this.visibCheckTimeOutId);
                        this.visibCheckTimeOutId = null
                    }
                }
            }
        })(),
        sendVisibility: function() {
            this.removeVisibilityCheck();
            if (this.isSentVisibility) {
                return
            }
            m.Utils.addScript(this.visibCheckLink);
            if (this.settings.linkTail) {
                m.Utils.addScript(this.settings.linkTail)
                }
            this.isSentVisibility = true
        },
        removeVisibilityCheck: function() {
            clearTimeout(this.visibCheckTimeOutId);
            this.visibCheckTimeOutId = null;
            this.isAddedVisibCheck = false;
            this.isSentVisibility = false;
            var o = m.Utils.DomEvent,
            p = this.getMainCont();
            o.un(j, "scroll", this.checkVisibility);
            o.un(j, "resize", this.checkVisibility);
            o.un(p, "mouseover", this.sendVisibility);
            if (!p) {
                return
            }
            var n = p,
            q = k.getElementsByTagName("html")[0],
            r;
            do {
                n = n.parentNode;
                r = e.getStyle(n, "overflow");
                if (n && n != k && n != k.body && n != q && (r == "scroll" || r == "auto")) {
                    o.un(n, "scroll", this.checkVisibility);
                    o.un(n, "resize", this.checkVisibility)
                    }
            }
            while (n)
            },
        getLinkTailExt: function(p) {
            var o = this.getTestTag(p),
            n = this.settings.statId;
            return (n ? "?stat-id=" + n: "") + (o ? (n ? "&": "?") + "test-tag=" + o: "")
            },
        getLinkTail: function(n) {
            var o = this.getLinkTailStr(n);
            o += this.getLinkTailExt(n);
            return o
        },
        getLinkTailStr: function(p) {
            var q = "",
            n = p.length,
            o;
            for (o = 0; o < n; o++) {
                if (p[o] && p[o].linkTail) {
                    q += p[o].linkTail
                }
            }
            return q
        }
    });
    m.Context.Direct.Direct = m.extend(m.Context.Adv, {
        html: (function() {
            var n = '<% if (((data.yaUrl && data.yaTitle) || (data.allAdvUrl && data.allAdvTitle)) && !isRow) { %><yatag class="ya-partner__ads"><% if (data.yaUrl && data.yaTitle) { %><yatag class="ya-partner__ads-l"><a href="<%=yaUrl%>" class="ya-partner__ads-link ya-partner__ads-link-l" target="_blank"><%=yaTitle%></a><yatag class="ya-partner__ads-arrow"><yatag class="ya-partner__ads-arrow-i"></yatag>&#160;</yatag></yatag><% } %><% if (data.allAdvUrl && data.allAdvTitle && !is125x125 && !is120x240) { %><yatag class="ya-partner__ads-r"><a href="<%=allAdvUrl%>" class="ya-partner__ads-link ya-partner__ads-link-r" target="_blank"><%=allAdvTitle%></a></yatag><% if (data.format.name == Ya.Const.BlockTypes.AUTO) { %><yatag class="ya-partner__close"><yatag class="ya-partner__close-text">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</yatag><yatag class="ya-partner__close-button"> [x]</yatag></yatag><% } %><% } %></yatag><% } %>';
            return '<% var isRow = data.format.name == Ya.Const.BlockTypes.ROW, isFlat = data.format.type == Ya.Const.BlockTypes.FLAT, isVert = data.format.type == Ya.Const.BlockTypes.VERTICAL, isHor = data.format.type == Ya.Const.BlockTypes.HORIZONTAL, isMedia = data.format.type == Ya.Const.BlockTypes.MEDIA; %><% var isFixed = data.format.fixed; %><% var is125x125 = data.format.name == "125x125", is120x240 = data.format.name == "120x240", is600x60 = data.format.name == "600x60", is234x60 = data.format.name == "234x60", is728x90 = data.format.name == "728x90", is468x60 = data.format.name == "468x60"; %><% var isBottomHeader = data.settings.headerPosition.indexOf(Ya.Const.Header.BOTTOM) != -1, isTopHeader = data.settings.headerPosition.indexOf(Ya.Const.Header.TOP) != -1; %><div id="<%=mainContId%>" style="background: none !important; border: none !important; clear: none !important; clip: auto !important; cursor: auto !important; float: none !important; font-size: 100% !important; font-style: normal !important; font-variant: normal !important; font-weight: normal !important; height: auto !important; letter-spacing: normal !important; line-height: normal !important; margin: 0 !important; overflow: visible !important; padding: 0 !important; position: static !important; text-align: left !important; text-decoration: none !important; text-indent: 0 !important; text-transform: none !important; vertical-align: baseline !important; visibility: visible !important; white-space: normal !important; width: auto !important; word-spacing: normal !important; z-index: auto !important; display: block !important; text-indent: 0 !important;"><% if (isFlat && !(is600x60 || is234x60 || is468x60 || is728x90 )) { %><yatag class="<%=classes%> ya-partner_type_flat-simple"><% } else { %><yatag class="<%=classes%>"><% } %><% if (!isFixed && (isHor || isVert || isFlat) && (Ya.isIE6 || Ya.isIE7 || Ya.isIE8)) { %><yatag class="ya-partner__wrap-fit"><% } %><% if (isTopHeader) { %>' + n + '<% } %><% if (isMedia) { %><%=mediaCode%><% } else { %><% if (isHor) { %><table cellpadding="0" cellspacing="0" class="ya-partner__list"><tr class="ya-partner__tr"><% } else { %><yatag class="ya-partner__list"><% } %><% for (var i=0, ads = data.ads, ln = ads.length; i < data.ads.length; i++) { %><% if (isHor) { %><td<% } else {%><yatag<% } %> class="ya-partner__item<% if (i == 0) { %> ya-partner__item_pos_first<% } %><%  if (i == ln-1) { %> ya-partner__item_pos_last<% } %>"><% if (isRow) { %><yatag class="ya-partner__ads"><yatag class="ya-partner__ads-l"><a class="ya-partner__ads-link ya-partner__ads-link-l" href="<%=yaUrl%>"><%=yaTitle%></a><yatag class="ya-partner__ads-arrow"><yatag class="ya-partner__ads-arrow-i"></yatag>&nbsp;</yatag></yatag></yatag><% } %><a href="<%=ads[i].url%>" class="ya-partner__title-link" target="_blank"><% if (ads[i].favicon) { %><img class="ya-partner__icon" src="<%=ads[i].favicon%>" alt=""/><% } %><yatag class="ya-partner__title-link-text"><%=ads[i].title%></yatag></a> <yatag class="ya-partner__text"><%=ads[i].body%><% if (ads[i].debug) { %><yatag class="ya-partner__text"><%=ads[i].debug%><% } %><% if (ads[i].warning && !isFlat) { %><yatag class="ya-partner__warn"><%=ads[i].warning%></yatag><% } %></yatag> <yatag class="ya-partner__url"><% if (ads[i].vcardUrl) { %><a class="ya-partner__adress" target="_blank" href="<%=ads[i].vcardUrl%>">\u0410\u0434\u0440\u0435\u0441&nbsp;\u0438&nbsp;\u0442\u0435\u043B\u0435\u0444\u043E\u043D</a><% if (!isFlat) { %> <% } else {%>&nbsp;<% } %><% } %><yatag class="ya-partner__domain"><%=ads[i].site%></yatag><% if (!isFlat) { %> <% } else {%>&nbsp;<% } %><yatag class="ya-partner__region"><%=ads[i].region%></yatag></yatag><% if (ads[i].warning && isFlat) { %><yatag class="ya-partner__warn"><%=ads[i].warning%></yatag><% } %><% if (isHor) { %></td><%  if (i != ln-1) { %><td class="ya-partner__gap">&nbsp;</td><% } %><% } else {%></yatag><% } %><% } %><% if (isHor) { %></tr></table><% } else {%></yatag><% } %><% } %><% if (isBottomHeader/* && isHor*/) { %>' + n + "<% } %><% if (!isHor && !isFlat) { %></yatag><% } %><% if (!isFixed && (isHor || isVert || isFlat) && (Ya.isIE6 || Ya.isIE7 || Ya.isIE8)) { %></yatag><% } %></yatag></div>"
        } ()),
        classes: "ya-partner",
        css: {
            ".ya-partner": {
                "font-size": "100%",
                position: "relative",
                display: "block",
                "text-align": "left",
                "line-height": "normal",
                "border-radius": "4px 4px 4px 4px",
                "-webkit-box-sizing": "border-box",
                "-moz-box-sizing": "border-box",
                "box-sizing": "border-box",
                "white-space": "normal"
            },
            ".ya-partner, .ya-partner__ads-l, .ya-partner__ads-l em, .ya-partner__ads-r, .ya-partner__item, .ya-partner__title-link-text, .ya-partner__text, .ya-partner__domain, .ya-partner__region, .ya-partner__list tbody, .ya-partner__list tr, .ya-partner__list td": {
                "font-size": "inherit",
                "font-style": "normal",
                "text-indent": 0
            },
            ".ya-partner yatag": {
                "text-align": "left",
                "font-family": "inherit"
            },
            ".ya-partner__list": {
                display: "block",
                "line-height": "normal",
                "font-size": "inherit",
                "text-indent": 0
            },
            ".ya-partner__title-link, .ya-partner__adress, .ya-partner__ads-link": {
                "font-weight": "normal",
                padding: "0",
                margin: "0",
                border: "none",
                "font-size": "inherit",
                background: "none",
                visibility: "visible",
                position: "static",
                "text-indent": "0",
                display: "inline",
                "-o-transition": "none",
                "-moz-transition": "none",
                "-ms-transition": "none",
                "-webkit-transition": "none",
                transition: "none",
                "-o-transform": "none",
                "-moz-transform": "none",
                "-ms-transform": "none",
                "-webkit-transform": "none",
                transform: "none",
                "-webkit-animation": "none",
                "-moz-animation": "none",
                "-o-animation": "none",
                "-ms-animation": "none",
                animation: "none"
            },
            "a.ya-partner__adress:link, a.ya-partner__adress:hover, a.ya-partner__adress:visited": {
                "text-decoration": "underline"
            },
            ".ya-partner__adress": {
                "margin-right": "0.3em"
            },
            "a.ya-partner__ads-link:link, a.ya-partner__ads-link:hover, a.ya-partner__ads-link:visited": {
                "text-decoration": "none",
                "font-weight": "normal"
            },
            ".ya-partner__ads-link em": {
                "font-style": "normal"
            },
            ".ya-partner__item": {
                "border-radius": "4px 4px 4px 4px",
                border: "none",
                padding: "0.2em 0.3em",
                "line-height": "normal"
            },
            "body .ya-partner__item_pos_last": {
                "margin-bottom": "0"
            },
            ".ya-partner_ads_inner-up .ya-partner__item_pos_first, .ya-partner_ads_inner-up-down .ya-partner__item_pos_first, .ya-partner_ads_inner-down .ya-partner__item_pos_last": {
                "border-radius": "0 4px 4px 4px"
            },
            ".ya-partner_ads_inner-down .ya-partner__item_pos_last, .ya-partner_ads_inner-up-down .ya-partner__item_pos_last": {
                "border-radius": "4px 4px 4px 0"
            },
            ".ya-partner_ads_inner-down .ya-partner__item_pos_first.ya-partner__item_pos_last": {
                "border-radius": "4px 4px 4px 0"
            },
            ".ya-partner__url": {
                "font-size": "87%",
                display: "block"
            },
            ".ya-partner__hide-urls .ya-partner__list .ya-partner__url": {
                display: "none"
            },
            ".ya-partner__warn": {
                "font-size": "70%",
                "border-radius": "2px",
                "-moz-border-radius": "2px",
                "-webkit-border-radius": "2px",
                padding: "0.25em 0.3em 0.25em",
                "line-height": "1.1em"
            },
            ".ya-partner__ads": {
                "white-space": "nowrap",
                "font-size": "87%"
            },
            ".ya-partner__icon": {
                font: "0/0 a",
                margin: "0 4px -2px 0",
                "vertical-align": " baseline",
                border: "0",
                display: "inline",
                width: "auto",
                "float": "none"
            },
            ".ya-partner__ads-link": {
                position: "relative",
                "z-index": "10",
                "margin-left": "5px",
                "line-height": "normal",
                "white-space": "nowrap"
            },
            ".ya-partner__ads-l": {
                display: "inline-block",
                position: "relative",
                "margin-right": "10px"
            },
            ".ya-partner__ads-r": {
                display: "inline-block",
                "margin-left": "-5px",
                padding: "0 0 0 10px"
            },
            ".ya-partner__ads-r .ya-partner__ads-link": {
                margin: "0 5px 0 0"
            },
            ".ya-partner__ads-arrow": {
                "font-size": "100%",
                position: "absolute",
                "z-index": "9",
                overflow: "hidden",
                width: "10px",
                height: "100%"
            },
            "a.ya-partner__ads-link-r,a.ya-partner__ads-link-r:link,a.ya-partner__ads-link-r:hover,a.ya-partner__ads-link-r:visited,a.ya-partner__ads-link-r:active,a.ya-partner__ads-link-r:focus,a.ya-partner__ads-link-l,a.ya-partner__ads-link-l:link,a.ya-partner__ads-link-l:hover,a.ya-partner__ads-link-l:visited,a.ya-partner__ads-link-l:active,a.ya-partner__ads-link-l:focus": {
                "font-weight": "normal"
            },
            "a.ya-partner__title-link,a.ya-partner__title-link:link,a.ya-partner__title-link:hover,a.ya-partner__title-link:visited,a.ya-partner__title-link:active,a.ya-partner__title-link:focus": {
                "font-weight": "normal",
                "line-height": "normal",
                "text-decoration": "none"
            },
            "a.ya-partner__title-link .ya-partner__title-link-text,a.ya-partner__title-link .ya-partner__title-link-text:link,a.ya-partner__title-link .ya-partner__title-link-text:hover,a.ya-partner__title-link .ya-partner__title-link-text:visited,a.ya-partner__title-link .ya-partner__title-link-text:active,a.ya-partner__title-link .ya-partner__title-link-text:focus": {
                display: "inline",
                "text-decoration": "underline"
            },
            ".ya-partner__ads-arrow-i": {
                font: "0/0 a",
                position: "absolute",
                left: "0",
                top: "50%",
                "margin-top": "-20px",
                "border-style": "solid",
                "border-width": "20px 0 20px 10px",
                "border-color": "transparent #fff transparent transparent",
                "-moz-border-end-style": "dotted"
            },
            ".ya-partner_ads-up .ya-partner__ads": {
                position: "relative",
                display: "block"
            },
            ".ya-partner_ads-up .ya-partner__ads-l": {
                "padding-bottom": "1px",
                "vertical-align": "top",
                "border-radius": "4px 0 0 0",
                "-moz-border-radius": "4px 0 0 0",
                "-webkit-border-radius": "4px 0 0 0"
            },
            ".ya-partner_ads-up .ya-partner__ads-r": {
                "padding-bottom": "1px",
                "vertical-align": "top",
                "border-radius": "0 0 4px 0",
                "-moz-border-radius": "0 0 4px 0",
                "-webkit-border-radius": "0 0 4px 0"
            },
            ".ya-partner_ads-down .ya-partner__ads": {
                position: "absolute",
                bottom: "0"
            },
            ".ya-partner_ads-down .ya-partner__list": {
                "margin-bottom": "1em"
            },
            ".ya-partner_ads-down .ya-partner__ads-l": {
                "border-radius": "0 0 0 3px",
                "-moz-border-radius": "0 0 0 3px",
                "-webkit-border-radius": "0 0 0 3px"
            },
            ".ya-partner_ads-down .ya-partner__ads-r": {
                "border-radius": "0 4px 0 0",
                "-moz-border-radius": "0 4px 0 0",
                "-webkit-border-radius": "0 4px 0 0"
            },
            ".ya-partner_ads_inner-up-down .ya-partner__list": {
                margin: "0 0 1em"
            },
            ".ya-partner_ads-up-down .ya-partner__list": {
                margin: "1em 0"
            },
            ".ya-partner_ads_inner-up-down .ya-partner__ads-l, .ya-partner_ads-up-down .ya-partner__ads-l": {
                "border-radius": "3px 0 0 0",
                "-moz-border-radius": "3px 0 0 0",
                "-webkit-border-radius": "3px 0 0 0"
            },
            ".ya-partner_ads-up-down .ya-partner__ads-l": {
                position: "absolute",
                top: "0"
            },
            ".ya-partner_ads-up-down .ya-partner__ads-link": {
                display: "inline-block",
                "padding-bottom": "2px"
            },
            ".ya-partner_ads-up-down .ya-partner__ads-r .ya-partner__ads-link": {
                "padding-bottom": "1px"
            },
            ".ya-partner_ads_inner-up-down .ya-partner__ads-r, .ya-partner_ads-up-down .ya-partner__ads-r": {
                position: "absolute",
                bottom: "0",
                width: "100%",
                margin: "0",
                padding: "0",
                "border-radius": "0 0 4px 4px",
                "-moz-border-radius": "0 0 4px 4px",
                "-webkit-border-radius": "0 0 4px 4px"
            },
            ".ya-partner_ads_inner-up-down .ya-partner__ads-r": {
                left: "0"
            },
            ".ya-partner_ads-up-down .ya-partner__ads-r": {
                "border-radius": "0 0 3px 3px",
                "-moz-border-radius": "0 0 3px 3px",
                "-webkit-border-radius": "0 0 3px 3px"
            },
            ".ya-partner_ads_inner-up-down .ya-partner__ads-link, .ya-partner_ads-up-down .ya-partner__ads-link": {
                "margin-left": "5px"
            },
            ".ya-partner_ads_inner-up .ya-partner__ads": {
                display: "block"
            },
            ".ya-partner_ads_inner-up .ya-partner__ads-l, .ya-partner_ads_inner-up .ya-partner__ads-r": {
                "vertical-align": "top"
            },
            ".ya-partner_ads_inner-up .ya-partner__ads-l": {
                "border-radius": "4px 0 0 0",
                "-moz-border-radius": "4px 0 0 0",
                "-webkit-border-radius": "4px 0 0 0"
            },
            ".ya-partner_ads_inner-up .ya-partner__ads-r": {
                "border-radius": "0 4px 0 0",
                "-moz-border-radius": "0 4px 0 0",
                "-webkit-border-radius": "0 4px 0 0"
            },
            ".ya-partner_ads_inner-down .ya-partner__ads": {
                display: "block"
            },
            ".ya-partner_ads_inner-down .ya-partner__ads-l": {
                "border-radius": "0 0 0 4px",
                "-moz-border-radius": "0 0 0 4px",
                "-webkit-border-radius": "0 0 0 4px"
            },
            ".ya-partner_ads_inner-down .ya-partner__ads-r": {
                "border-radius": "0 0 4px 0",
                "-moz-border-radius": "0 0 4px 0",
                "-webkit-border-radius": "0 0 4px 0"
            },
            ".ya-partner_ads_inner-down .ya-partner__ads-link, .ya-partner_ads-down .ya-partner__ads-link": {
                display: "inline-block",
                "padding-bottom": "1px"
            },
            ".ya-partner_ads_only-arrow .ya-partner__ads": {
                "margin-right": "0.5em"
            },
            ".ya-partner_margin_yes .ya-partner__icon": {
                "margin-left": "-20px"
            },
            ".ya-partner_margin_yes .ya-partner__item": {
                "padding-left": "20px"
            }
        },
        cssIe: {
            ".ya-partner": {
                "font-size": "100%",
                zoom: "1"
            },
            ".ya-partner_type_horiz, .ya-partner_type_vert, .ya-partner_type_flat": {
                display: "table",
                width: "100%",
                "border-spacing": "0"
            },
            ".ya-partner__ads": {
                left: "0",
                "white-space": "nowrap"
            },
            ".ya-partner_ads-up .ya-partner__ads,.ya-partner_ads-down .ya-partner__ads": {
                overflow: "hidden"
            },
            ".ya-partner__item": {
                "padding-bottom": "0.3em"
            },
            "* html .ya-partner__ads-l, * html .ya-partner__ads-r": {
                display: "inline",
                zoom: "1"
            },
            ".ya-partner__ads-arrow": {
                "*padding-bottom": "2px",
                "_padding-bottom": "2px",
                "*margin-top": "-1px",
                "_margin-top": "-1px"
            },
            ".ya-partner_ads_inner-up-down .ya-partner__ads-arrow": {
                "*padding-bottom": "1px",
                "_padding-bottom": "1px",
                "*margin-top": "-1px",
                "_margin-top": "-1px"
            },
            ".ya-partner_ads_inner-down .ya-partner__ads-arrow": {
                "*padding-bottom": "0",
                "_padding-bottom": "0",
                "*margin-top": "0",
                "_margin-top": "0"
            },
            "* html .ya-partner_ads-down .ya-partner__ads-arrow": {
                "*margin-top": "0"
            },
            ".ya-partner_ads_inner-up .ya-partner__ads-arrow": {
                "_padding-bottom": "2px",
                "*padding-bottom": "1px"
            },
            "* html .ya-partner_ads_inner-down .ya-partner__ads-arrow": {
                "_padding-bottom": "2px",
                "padding-bottom": "1px"
            },
            ".ya-partner_ads_inner-down .ya-partner__ads-arrow-i": {
                "*margin-top": "-21px",
                "_margin-top": "-21px"
            },
            ".ya-partner_ads-up .ya-partner__ads-arrow": {
                "*margin-top": "0"
            },
            ".ya-partner_ads-up-down .ya-partner__ads-arrow": {
                "*padding-bottom": "1px",
                "_padding-bottom": "1px",
                "*margin-top": "-1px",
                "_margin-top": "0"
            },
            "* html .ya-partner_ads-up-down .ya-partner__ads-arrow": {
                "*margin-top": "0",
                height: "1%",
                zoom: "1"
            },
            ".ya-partner_ads_inner-up-down .ya-partner__list, .ya-partner_ads-up-down .ya-partner__list": {
                margin: "1em 0"
            },
            ".ya-partner_ads_inner-up-down .ya-partner__ads-l, .ya-partner_ads-up-down .ya-partner__ads-l": {
                position: "absolute",
                top: "0"
            },
            ".ya-partner_ads-up-down .ya-partner__ads-link": {
                "padding-bottom": "1px",
                "*padding-bottom": "2px",
                "_padding-bottom": "2px"
            },
            ".ya-partner_ads-up-down .ya-partner__ads-l": {
                "line-height": "130%"
            },
            ".ya-partner_ads-up-down .ya-partner__ads-r": {
                "*left": "-3px",
                _left: "-3px"
            },
            "* html .ya-partner__ads-arrow": {
                "float": "right",
                zoom: "1"
            },
            "* html .ya-partner_ads-up .ya-partner__ads-arrow": {
                "*height": "1.3em",
                "*margin-top": "-1px",
                _height: "100%"
            },
            "body .ya-partner_ads-up .ya-partner__ads-arrow": {
                "*margin-top": "-2px"
            },
            "* html body .ya-partner_ads-up .ya-partner__ads-arrow": {
                "*margin-top": "0",
                "_margin-top": "-1px"
            },
            "body .ya-partner_ads-up-dowm .ya-partner__ads-arrow": {
                "*margin-top": "-2px"
            },
            "* html body .ya-partner_ads-up-down .ya-partner__ads-arrow": {
                "*margin-top": "-1px",
                "_margin-top": "0"
            },
            "* html .ya-partner__ads-arrow-i": {
                "border-style": "dotted solid dotted"
            },
            ".ya-partner__ads-link": {
                position: "static",
                "line-height": "normal"
            },
            ".ya-partner_ads_only-arrow .ya-partner__list": {
                "-zoom": "1"
            },
            ".ya-partner_ads_inner-down .ya-partner__ads": {
                overflow: "hidden"
            },
            ".ya-partner_ads_only-arrow .ya-partner__icon": {
                "margin-top": "2px"
            },
            ".ya-partner_ads_inner-up .ya-partner__item_pos_first": {
                position: "relative",
                "z-index": "10",
                zoom: "1"
            },
            ".ya-partner_ads_inner-up .ya-partner__ads-link": {
                "line-height": "normal"
            },
            "* html .ya-partner_ads_inner-down .ya-partner__list": {
                zoom: "1"
            },
            ".ya-partner__wrap-fit": {
                display: "block",
                zoom: "1",
                position: "relative",
                "padding-bottom": "1px",
                "font-size": "inherit",
                "border-radius": "4px 4px 4px 4px"
            },
            ".ya-partner_border.ya-partner_ads-down .ya-partner__wrap-fit .ya-partner__ads": {
                margin: "0"
            },
            ".ya-partner_ads_inner-up-down, .ya-partner_ads-up-down": {
                "padding-top": "0"
            },
            "* html .ya-partner__item, * html .ya-partner__text": {
                _zoom: "1",
                "*zoom": "auto"
            },
            "* html .ya-partner__text": {
                "margin-top": "-0.1em"
            },
            "* html .ya-partner_ads_inner-up-down .ya-partner__ads-link-l": {
                zoom: "1"
            },
            ".ya-partner_ads_inner-up-down .ya-partner__ads": {
                "font-size": "82%"
            }
        },
        constructor: function(p) {
            m.Context.Direct.Direct.superclass.constructor.call(this, p);
            var o = function() {
                var s = this.getMainCont();
                if (!s) {
                    return true
                }
                var v = s.firstChild,
                t = e(".ya-partner__ads-l", v)[0],
                r = e(".ya-partner__ads-r", v)[0];
                if (t && r && t.offsetWidth + r.offsetWidth > s.offsetWidth) {
                    if (e.classNameExists(v, "ya-partner_ads-up") || e.classNameExists(v, "ya-partner_ads-down")) {
                        e.removeClass(v, "ya-partner_ads-up");
                        e.removeClass(v, "ya-partner_ads-down");
                        e.addClass(v, "ya-partner_ads-up-down")
                        } else {
                        if (e.classNameExists(v, "ya-partner_ads_inner-up") || e.classNameExists(v, "ya-partner_ads_inner-down")) {
                            e.removeClass(v, "ya-partner_ads_inner-up");
                            e.removeClass(v, "ya-partner_ads_inner-down");
                            e.addClass(v, "ya-partner_ads_inner-up-down")
                            }
                    }
                }
            },
            q = m.Utils.DomEvent,
            n = function() {
                var t = this.getMainCont();
                if (!t) {
                    return true
                }
                var r = e(".ya-partner__icon", t.firstChild),
                v = r.length,
                s;
                if (!v) {
                    return true
                }
                for (s = 0; s < r.length; s++) {
                    q.on(r[s], "load", function() {
                        if (!this.width && (m.isIE6 || m.isIE7)) {
                            var w = new Image();
                            w.src = this.src;
                            if (w.width < 2) {
                                e.addClass(this, "ya-partner__hidden")
                                }
                        } else {
                            if (this.width < 15) {
                                e.addClass(this, "ya-partner__hidden")
                                }
                        }
                    }, r[s], {
                        single: true
                    })
                    }
            };
            this.on("afterInsert", o, this);
            this.on("afterInsert", n, this);
            q.on(j, "load", o, this);
            q.domReady(o, this)
            },
        createTemplObj: function(o, p) {
            var n = this.settings;
            if (n.favicon) {
                this.setFaviconSrc(o)
                }
            this.addLinkTails(o);
            this.typography(o);
            return {
                yaUrl: p.prodTitle.url || "",
                yaTitle: p.prodTitle.title || "",
                allAdvUrl: p.linkAll.url || "",
                allAdvTitle: p.linkAll.title || "",
                ads: o,
                settings: n,
                format: n.format
            }
        },
        typography: function(o) {
            var q = o.length,
            p;
            for (var n = 0; n < q; n++) {
                p = o[n];
                if (typeof p.body == "string") {
                    p.body = m.Utils.prettify(p.body)
                    }
                if (typeof p.title == "string") {
                    p.title = m.Utils.prettify(p.title)
                    }
                if (typeof p.domain == "string") {
                    p.site = p.domain.replace(/^www\./, "").replace("-", "&#8209;")
                    }
            }
            return o
        },
        setFaviconSrc: function(o) {
            var q = o.length,
            p,
            n;
            for (n = 0; n < q; n++) {
                p = o[n];
                if (p.domain) {
                    p.favicon = "//favicon.yandex.net/favicon/" + m.Utils.Punycode.toASCII(p.domain)
                    }
            }
            return o
        },
        addWarningCss: function(n) {
            var o = this.settings,
            p = o.bgColor || o.bgStartColor || o.siteBgColor || "#FFFFFF";
            this.addCssStyle(".ya-partner__warn", n, {
                border: "1px solid " + m.Utils.Warning.getBorderColor(p, o.textColor),
                "background-color": m.Utils.Warning.getBgColor(p)
                })
            },
        addHeaderBorderCss: function(p) {
            var r = this.settings,
            q = "ya-partner_ads",
            n = "ya-partner_theme_" + r.format.type,
            o = "";
            if (r.borderType == m.Const.BorderTypes.AD) {
                q += "_inner";
                n += "_inner";
                o = ".ya-partner__item"
            } else {
                if (r.borderType == m.Const.BorderTypes.BLOCK) {
                    this.addModificatorClass("ya-partner_border");
                    o = ".ya-partner_border"
                }
            }
            if (r.headerPosition.indexOf(m.Const.Header.TOP) != -1) {
                q += "-up"
            }
            if (r.headerPosition.indexOf(m.Const.Header.BOTTOM) != -1) {
                q += "-down"
            }
            this.addModificatorClass(n);
            this.addModificatorClass(q);
            this.addCssStyle(o || ".ya-partner", p, {
                background: r.bgColor
            });
            if (!r.format.fixed && (r.format.type == m.Const.BlockTypes.HORIZONTAL || r.format.type == m.Const.BlockTypes.FLAT || r.format.type == m.Const.BlockTypes.VERTICAL) && r.borderType == m.Const.BorderTypes.BLOCK && (m.isIE6 || m.isIE7 || m.isIE8)) {
                o = ".ya-partner__wrap-fit"
            }
            this.addCssStyle(o, p, {
                border: "1px solid " + r.borderColor || "transparent"
            });
            if (r.borderRadius == m.Const.BorderStyles.NONE) {
                if (r.borderType == m.Const.BorderTypes.BLOCK || r.borderType == m.Const.BorderTypes.NONE) {
                    this.addCssStyle([".ya-partner_ads-down .ya-partner__ads-l", ".ya-partner_ads-up .ya-partner__ads-l"], p, {
                        "border-radius": "0",
                        "-moz-border-radius": "0",
                        "-webkit-border-radius": "0"
                    })
                    }
                this.addCssStyle(".ya-partner, .ya-partner__item", p, {
                    "border-radius": "0"
                })
                }
        },
        addGradientBg: function(o) {
            var p = this.settings,
            q = {},
            r,
            n = "";
            if ((p.format.name == m.Const.BlockTypes.AUTO || p.format.fixed) && (p.bgStartColor && p.bgEndColor)) {
                r = "linear-gradient(bottom, " + p.bgStartColor + " 49%, " + p.bgEndColor + " 100%)";
                if (m.isOpera) {
                    n = "-o-"
                } else {
                    if (m.isGecko) {
                        n = "-moz-"
                    } else {
                        if (m.isIE) {
                            n = "-ms-";
                            q.zoom = 1;
                            q.filter = "progid:DXImageTransform.Microsoft.Gradient(Enabled=true, GradientType=0, StartColorStr=" + p.bgStartColor + ", EndColorStr=" + p.bgEndColor + ")"
                        } else {
                            if (m.isSafari || m.isChrome) {
                                n = "-webkit-"
                            }
                        }
                    }
                }
                q["background-image"] = n + r;
                this.addCssStyle(".ya-partner", o, q)
                }
        },
        setFontSize: function(n) {
            var o = this.settings;
            if (o.format.fixed) {
                return false
            }
            this.addCssStyle(".ya-partner__title-link-text", n, {
                "font-size": o.titleFontSize
            });
            if (!o.format.fixed && o.titleFontSize == "107%") {
                this.addCssStyle(".ya-partner__title-link-text", n, {
                    "font-weight": "bold"
                })
                }
            this.addCssStyle(".ya-partner", n, {
                "font-size": o.fontSize + "em"
            })
            },
        setFontColors: function(o) {
            var p = this.settings,
            n = [".ya-partner__title-link-text:visited", ".ya-partner__title-link-text:link", ".ya-partner__title-link-text:hover", ".ya-partner__title-link-text"],
            q = ".ya-partner__title-link-text:hover";
            if (m.isIE) {
                n = [".ya-partner__title-link:visited", ".ya-partner__title-link:link", ".ya-partner__title-link:hover", ".ya-partner__title-link"];
                q = ".ya-partner__title-link:hover"
            }
            this.addCssStyle(n, o, {
                color: p.titleColor
            });
            this.addCssStyle(q, o, {
                color: p.hoverColor
            });
            this.addCssStyle(".ya-partner__region, .ya-partner__domain, .ya-partner__adress", o, {
                color: p.urlColor
            });
            this.addCssStyle(".ya-partner, .ya-partner__text", o, {
                "font-family": p.fontFamily,
                color: p.textColor
            })
            },
        setArrowColors: function(r) {
            var o = this.settings,
            t = o.headerBgColor,
            v = o.siteBgColor || "#FFFFFF",
            w = o.bgColor,
            s = "#FFF",
            q = "",
            n = "underline",
            p;
            this.addCssStyle(".ya-partner__ads-l,.ya-partner__ads-link-l em", r, {
                background: "none repeat scroll 0 0 " + t
            });
            this.addCssStyle(".ya-partner__ads-arrow-i", r, {
                "border-left-color": t
            });
            if ((!t || t == w || t == v)) {
                q = "underline"
            }
            if (o.borderType == m.Const.BorderTypes.AD && o.headerPosition.indexOf(m.Const.Header.TOP) != -1 || o.borderType == m.Const.BorderTypes.BLOCK && o.headerPosition == m.Const.Header.BOTTOM) {
                q = ""
            }
            if (o.borderType == m.Const.BorderTypes.BLOCK && o.headerPosition.indexOf(m.Const.Header.BOTTOM) != -1 || o.borderType == m.Const.BorderTypes.AD && o.headerPosition == m.Const.Header.TOP) {
                n = ""
            }
            this.addCssStyle("a.ya-partner__ads-link-r:link,a.ya-partner__ads-link-r:hover,a.ya-partner__ads-link-r:visited", r, {
                "text-decoration": n
            });
            p = (new m.Utils.RGB(t || v)).checkContrast();
            if (p) {
                s = "#000"
            }
            this.addCssStyle("a.ya-partner__ads-link-l:link,a.ya-partner__ads-link-l:hover,a.ya-partner__ads-link-l:visited", r, {
                "text-decoration": q,
                color: s
            });
            s = "#FFF";
            p = (new m.Utils.RGB(v || t || w)).checkContrast();
            if (p) {
                s = "#000"
            }
            this.addCssStyle("a.ya-partner__ads-link-r:link,a.ya-partner__ads-link-r:hover,a.ya-partner__ads-link-r:visited", r, {
                color: s
            })
            },
        decorateCss: function(n) {
            if (this.settings.noStyle === true) {
                return n
            }
            if (!m.isOpera) {
                this.addCssStyle(".ya-partner", n, {
                    overflow: "hidden"
                })
                }
            this.setFontColors(n);
            this.setFontSize(n);
            this.addHeaderBorderCss(n);
            this.addWarningCss(n);
            this.setArrowColors(n);
            this.addGradientBg(n);
            return n
        }
    });
    m.Context.Direct.Mobile = m.extend(m.Context.Direct.Direct, {
        fontSizeMin: 0.9,
        fontSizeMax: 1.1,
        html: '<div id="<%=mainContId%>"><div class="ya-partner-mob"><% for (var i=0, ads = data.ads, ln = ads.length; i < data.ads.length; i++) { %><div class="ya-partner-mob__title"><a href="<%=ads[i].url%>" class="ya-partner-mob__title-link" target="_blank"><%=ads[i].title%></a></div><div class="ya-partner-mob__txt"><%=ads[i].body%></div><% if (ads[i].debug) { %><div class="ya-partner-mob__txt"><%=ads[i].debug%></div><% } %><% if (ads[i].warning) { %><div class="ya-partner-mob__alert"><%=ads[i].warning%></div><% } %><div class="ya-partner-mob__info"><% if (ads[i].callUrl && ads[i].telNum && (data.isPda || Ya.isOperaMini)) { %><a class="ya-partner-mob__info-link" href="<%=ads[i].callUrl%>" target="_blank">\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C</a><% } else if (ads[i].callUrl && ads[i].telNum) {%><a class="ya-partner-mob__phone ya-partner-mob__phone__unpressed" href="<%=ads[i].callUrl%>" target="_blank"><span class="ya-partner-mob__phone-inner"><%=ads[i].telNum%></span></a><% } %><% if (ads[i].vcardUrl) { %><a class="ya-partner-mob__info-link" href="<%=ads[i].vcardUrl%>" target="_blank">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435</a><% } %><div class="ya-partner-mob__info-link"><%=ads[i].domain%></div></div><% if (data.yaTitle) { %><div class="ya-partner-mob__ya"><span class="ya-partner-mob__ya-link"><%=yaTitle%><i class="ya-partner-mob__ya-link-tail"></i></span></div><% } %><% } %></div></div>',
        css: {
            ".ya-partner-mob": {
                "font-family": "Arial, sans-serif",
                padding: "3px 0 0",
                "-webkit-text-size-adjust": "none"
            },
            ".ya-partner-mob__title": {
                "font-size": "120%"
            },
            ".ya-partner-mob__title-link": {
                "text-decoration": "none"
            },
            ".ya-partner-mob__txt": {},
            ".ya-partner-mob__ya-link": {
                "font-size": "70%",
                color: "#FFFFFF",
                "float": "left",
                position: "relative",
                "text-decoration": "none",
                background: "none repeat scroll 0 0 #EEEEEE"
            },
            ".ya-partner-mob__ya": {
                clear: "both",
                overflow: "hidden"
            },
            ".ya-partner-mob__alert": {
                "font-size": "70%",
                padding: "0 2px"
            },
            ".ya-partner-mob__info-link": {
                display: "inline-block",
                "padding-right": "8px",
                "white-space": "nowrap"
            },
            ".ya-partner-mob__ya-link-tail": {
                "border-style": "solid",
                "border-width": "10px 0 10px 7px",
                content: '""',
                font: "0pt/0 a",
                "margin-top": "-10px",
                position: "absolute",
                right: "-7px",
                top: "50%",
                "border-color": "transparent transparent transparent #EEE !important"
            },
            ".ya-partner-mob__ya-link em": {
                "font-style": "normal",
                "line-height": "100%"
            },
            ".ya-partner-mob__phone,.ya-partner-mob__phone-inner, .ya-partner-mob__title-link,.ya-partner-mob__txt,.ya-partner-mob,.ya-partner-mob__title,.ya-partner-mob__ya-link,.ya-partner-mob__ya-link-tail,.ya-partner-mob__alert,.ya-partner-mob__info-link,.ya-partner-mob__ya, .ya-partner-mob__info": {
                "line-height": "100%"
            }
        },
        createTemplObj: function(p, q, n) {
            var o = m.Context.Direct.Mobile.superclass.createTemplObj.call(this, p, q, n);
            o.isPda = this.isPda;
            return o
        },
        setFontSize: function(n) {
            var o = this.settings;
            this.addCssStyle(".ya-partner-mob", n, {
                "font-size": (o.fontSize * 100) + "%",
                "font-family": o.fontFamily
            })
            },
        setFontColors: function(n) {
            var o = this.settings;
            this.addCssStyle(".ya-partner-mob__title-link", n, {
                color: o.titleColor
            });
            this.addCssStyle(".ya-partner-mob__info-link", n, {
                color: o.urlColor
            });
            this.addCssStyle(".ya-partner-mob__txt", n, {
                color: o.textColor
            })
            },
        setArrowColors: function(o) {
            var r = this.settings,
            q = r.headerBgColor,
            p = r.siteBgColor || "#FFFFFF",
            t = r.borderColor,
            n,
            s;
            this.addCssStyle(".ya-partner-mob__ya-link-tail", o, {
                "border-color": "transparent transparent transparent " + q || t
            });
            n = (new m.Utils.RGB(q || p)).checkContrast();
            if (n) {
                s = "#000"
            }
            this.addCssStyle(".ya-partner-mob__ya-link", o, {
                background: q || t,
                color: s
            })
            },
        addWarningCss: function(n) {
            var o = this.settings,
            p = o.bgColor || o.bgStartColor || o.siteBgColor;
            this.addCssStyle(".ya-partner-mob__alert", n, {
                border: "1px solid " + m.Utils.Warning.getBorderColor(p, o.textColor)
                });
            this.addCssStyle(".ya-partner-mob__alert", n, {
                "background-color": m.Utils.Warning.getBgColor(p)
                })
            },
        addHeaderBorderCss: function(n) {
            var o = this.settings;
            this.addCssStyle(".ya-partner-mob", n, {
                background: o.bgColor
            });
            this.addCssStyle(".ya-partner-mob", n, {
                border: "1px solid " + o.borderColor || "transparent"
            })
            }
    });
    m.Context.Direct.TouchBlock = m.extend(m.Context.Direct.Mobile, {
        css: {
            ".ya-partner-mob__title": {
                margin: "0 10px 2px"
            },
            ".ya-partner-mob__txt": {
                margin: "0 10px 1px"
            },
            ".ya-partner-mob__info": {
                margin: "0px 10px 1px"
            },
            ".ya-partner-mob__alert": {
                margin: "0 10px"
            },
            ".ya-partner-mob__ya-link": {
                padding: "2px 3px 2px 10px",
                "vertical-align": "middle"
            },
            ".ya-partner-mob__info-link": {
                "text-decoration": "none"
            },
            ".ya-partner-mob__phone": {
                "text-align": "center",
                "text-decoration": "none",
                position: "relative",
                display: "inline-block",
                margin: "0 8px 0 0",
                padding: "1px",
                "text-shadow": "0 1px 0px #fbfbfb",
                color: "#000",
                border: "0",
                "-webkit-border-radius": "3px",
                "border-radius": "3px",
                "-webkit-appearance": "none",
                "-webkit-user-select": "none",
                "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"
            },
            ".ya-partner-mob__phone__unpressed": {
                background: "-webkit-gradient(linear, 0 100%, 0 0, color-stop(0, rgba(49, 49, 49, 0.5)), color-stop(1, rgba(192, 192, 192, 0.6)))"
            },
            ".ya-partner-mob__phone__pressed": {
                background: "-webkit-gradient(linear, 0 0, 0 100%, color-stop(0, rgba(91, 91, 91, 0.6)), color-stop(1, rgba(109, 109, 109, 0.4)))"
            },
            ".ya-partner-mob__phone__unpressed .ya-partner-mob__phone-inner": {
                background: "-webkit-gradient(linear, 0 100%, 0 0, color-stop(0, rgba(179, 179, 179, 0.66)), color-stop(0.08, rgba(210, 210, 210, 0.66)), color-stop(0.9, rgba(255, 255, 255, 0.9)))"
            },
            ".ya-partner-mob__phone__pressed .ya-partner-mob__phone-inner": {
                background: "-webkit-gradient(linear, 0 0, 0 100%, from(rgba(216, 216, 216, 0.66)), to(rgba(251, 251, 251, 0.8)))",
                "-webkit-box-shadow": "inset 0px 1px 3px 0px rgba(0, 0, 0, 0.28)"
            },
            ".ya-partner-mob__phone-inner": {
                display: "inline-block",
                padding: "0 6px 1px",
                "-webkit-border-radius": "2px",
                "border-radius": "2px"
            },
            ".ya-partner-mob__phone-inner,.ya-partner-mob__phone-inner,.ya-partner-mob__phone__unpressed,.ya-partner-mob__phone__pressed": {
                "line-height": "100%"
            }
        },
        init: function() {
            var n = m.Utils.DomEvent,
            o = e(".ya-partner-mob__phone", this.getMainCont(true))[0];
            n.on(o, "touchstart", this.touchHn, this);
            n.on(o, "touchend", this.touchHn, this)
            },
        touchHn: function(o) {
            var n = e(".ya-partner-mob__phone", this.getMainCont(true))[0];
            e.toggleClassName(n, "ya-partner-mob__phone__pressed")
            },
        clearEvents: function() {
            m.Context.Direct.TouchBlock.superclass.clearEvents.call(this);
            var n = m.Utils.DomEvent,
            o = e(".ya-partner-mob__phone", this.getMainCont(true))[0];
            n.un(o, "touchstart", this.touchHn, this);
            n.un(o, "touchend", this.touchHn, this)
            },
        setFontSize: function(n) {
            settings.fontSize = m.Utils.checkValue(settings.fontSize - 0.1, this.fontSizeMin, this.fontSizeMax, 1);
            m.Context.Direct.TouchBlock.superclass.setFontCss.call(this, n)
            }
    });
    m.Context.Direct.PdaBlock = m.extend(m.Context.Direct.Mobile, {
        isPda: true,
        css: {
            ".ya-partner-mob__title": {
                margin: "0 5px"
            },
            ".ya-partner-mob__txt": {
                margin: "0 5px 1px"
            },
            ".ya-partner-mob__info": {
                margin: "1px 5px 0px"
            },
            ".ya-partner-mob__alert": {
                margin: "0 5px"
            },
            ".ya-partner-mob__ya-link": {
                padding: "0px 3px 0px 5px"
            },
            ".ya-partner-mob__info-link": {
                "text-decoration": "underline"
            }
        }
    });
    m.Context.Direct.Vertical = m.extend(m.Context.Direct.Direct, {
        classes: "ya-partner_type_vert",
        css: {
            ".ya-partner_type_vert ": {
                "min-width": "50px",
                clear: "both"
            },
            ":root .ya-partner_type_vert": {
                display: "table\\0/IE9",
                width: "100%\\0/IE9"
            },
            ":root .ya-partner_type_vert.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "1px\\0/IE9"
            },
            ".ya-partner_type_vert .ya-partner__item,.ya-partner_type_vert .ya-partner__warn,.ya-partner_type_vert .ya-partner__text,.ya-partner_type_vert .ya-partner__url": {
                display: "block"
            },
            ".ya-partner_type_vert .ya-partner__item": {
                margin: "0 0 0.5em 0",
                padding: "0.5em"
            },
            ".ya-partner_type_vert .ya-partner__text,.ya-partner_type_vert .ya-partner__warn": {
                margin: "0.4em 0"
            },
            ".ya-partner_type_vert .ya-partner__item_pos_last": {
                margin: "0"
            }
        },
        cssIe: {
            ".ya-partner_type_vert .ya-partner__list": {
                zoom: "1"
            },
            "html* .ya-partner_ads-down .ya-partner__ads": {},
            ".ya-partner_type_vert.ya-partner_ads_inner-up-down .ya-partner__wrap-fit": {
                "padding-top": "1px"
            }
        }
    });
    m.Context.Direct.Horizontal = m.extend(m.Context.Direct.Direct, {
        classes: "ya-partner_type_horiz",
        css: {
            ".ya-partner_type_horiz": {
                display: "inline-block",
                width: "100%",
                "-moz-box-sizing": "border-box",
                "-webkit-box-sizing": "border-box",
                "box-sizing": "border-box"
            },
            ":root .ya-partner_type_horiz": {
                display: "table\\0/IE9",
                width: "100%\\0/IE9"
            },
            ":root .ya-partner_type_horiz.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "1px\\0/IE9"
            },
            ".ya-partner_type_horiz:before,.ya-partner_type_horiz:after": {
                content: '""',
                display: "table",
                "border-spacing": "0",
                border: "0"
            },
            ".ya-partner_type_horiz .ya-partner__list": {
                display: "table",
                width: "100%",
                margin: "0",
                padding: "0",
                border: "none",
                "border-spacing": "0",
                "font-size": "inherit"
            },
            ".ya-partner_ads-down table.ya-partner__list": {
                "margin-bottom": "1em"
            },
            "body .ya-partner_type_horiz .ya-partner__item": {
                position: "static"
            },
            ".ya-partner_type_horiz .ya-partner__tr": {
                "font-size": "inherit"
            },
            ".ya-partner_type_horiz .ya-partner__item": {
                padding: "0.5em",
                "vertical-align": "top",
                "border-spacing": "0",
                "font-size": "inherit",
                "border-collapse": "separate"
            },
            ".ya-partner_type_horiz .ya-partner__gap": {
                "font-size": "10px",
                padding: "0.25em",
                margin: "0",
                border: "none",
                background: "none"
            },
            ".ya-partner_type_horiz table.ya-partner__list, .ya-partner_type_horiz td.ya-partner__item,.ya-partner_type_horiz td.ya-partner__gap": {
                "border-collapse": "separate"
            },
            ".ya-partner_type_horiz .ya-partner__warn,.ya-partner_type_horiz .ya-partner__inner,.ya-partner_type_horiz .ya-partner__text,.ya-partner_type_horiz .ya-partner__url": {
                display: "block"
            },
            ".ya-partner_type_horiz.ya-partner_ads_inner-down .ya-partner__item_pos_first": {
                "border-radius": "4px 4px 4px 0",
                "-moz-border-radius": "4px 4px 4px 0",
                "-webkit-border-radius": "4px 4px 4px 0"
            },
            ".ya-partner_ads_inner-down .ya-partner__item_pos_last, .ya-partner_ads_inner-up-down .ya-partner__item_pos_last": {
                "border-radius": "4px"
            },
            ".ya-partner_type_horiz .ya-partner__item_pos_last": {
                "margin-right": "0"
            },
            ".ya-partner_type_horiz .ya-partner__text, .ya-partner_type_horiz .ya-partner__warn": {
                margin: "0.4em 0"
            },
            ".ya-partner_type_horiz .ya-context__list_item_2 .ya-partner__item": {
                width: "50%"
            },
            ".ya-partner_type_horiz .ya-context__list_item_3 .ya-partner__item": {
                width: "33.3%"
            },
            ".ya-partner_type_horiz .ya-context__list_item_4 .ya-partner__item": {
                width: "25%"
            }
        },
        cssIe: {
            ".ya-partner_ads-down .ya-partner__list": {
                zoom: "1"
            },
            "html* .ya-partner_ads-down .ya-partner__ads": {
                _bottom: "-1px"
            },
            ".ya-partner_type_horiz .ya-partner__item, .ya-partner_type_horiz .ya-partner__tr, .ya-partner_type_horiz .ya-partner__list": {
                "font-size": "100%"
            },
            ".ya-partner_type_horiz:before,.ya-partner_type_horiz:after": {
                font: "0/0 a",
                content: "."
            }
        },
        constructor: function(n) {
            m.Context.Direct.Horizontal.superclass.constructor.call(this, n);
            var o = function() {
                var r = this.getMainCont(),
                q = e(".ya-partner__list", this.getMainCont())[0],
                p = e(".ya-partner__item", r);
                if (!p || !p.length || !q) {
                    return false
                }
                e.addClass(q, "ya-context__list_item_" + p.length)
                };
            this.on("afterRender", o, this)
            }
    });
    m.Context.Direct.Flat = m.extend(m.Context.Direct.Direct, {
        classes: "ya-partner_type_flat",
        css: {
            ".ya-partner_type_flat .ya-partner__title-link, .ya-partner_type_flat .ya-partner__text, .ya-partner_type_flat .ya-partner__url": {
                display: "inline",
                "vertical-align": "baseline"
            },
            ":root .ya-partner_type_flat": {
                display: "table\\0/IE9",
                width: "100%\\0/IE9"
            },
            ":root .ya-partner_type_flat.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "1px\\0/IE9"
            },
            ".ya-partner_type_flat .ya-partner__item": {
                display: "block",
                "line-height": "normal"
            },
            ".ya-partner_type_flat .ya-partner__text": {
                "padding-left": "0.5em"
            },
            ".ya-partner_type_flat .ya-partner__warn": {
                display: "block",
                "margin-top": "0.3em"
            },
            ".ya-partner_theme_flat_inner .ya-partner__item": {
                "margin-bottom": "0.5em"
            },
            ".ya-partner_theme_flat_inner .ya-partner__item_pos_last": {
                "margin-bottom": "0"
            },
            ".ya-partner_type_flat-simple .ya-partner__list": {},
            ".ya-partner_type_flat-simple .ya-partner__url": {
                display: "block",
                "margin-top": "0.3em"
            },
            ".ya-partner_type_flat-simple .ya-partner__item": {
                "padding-top": "0.5em",
                "padding-bottom": "0.5em"
            },
            ".ya-partner_type_flat-simple .ya-partner__text": {
                "padding-left": "0"
            }
        },
        cssIe: {
            ".ya-partner_type_flat": {
                zoom: "1"
            },
            ".ya-partner_theme_flat .ya-partner__icon": {
                "margin-bottom": "-2px"
            },
            "html* .ya-partner_ads-down .ya-partner__list": {
                "_margin-bottom": "0.9em"
            }
        },
        constructor: function(n) {
            m.Context.Direct.Flat.superclass.constructor.call(this, n);
            if (!this.settings.format.fixed) {
                return true
            }
            var o = m.Utils.DomEvent,
            p = function() {
                var t = this.advs.length,
                s = this.getMainCont(),
                v,
                q = false,
                r;
                if (!s) {
                    return true
                }
                v = s.firstChild;
                for (r = 0; r < t; r++) {
                    if (this.advs[r].warning) {
                        q = true
                    }
                }
                if (q) {
                    e.addClass(v, "ya-partner__hide-urls")
                    }
            };
            this.on("afterInsert", p, this);
            o.domReady(p, this)
            }
    });
    m.Context.Direct.Auto = m.extend(m.Context.Direct.Horizontal, {
        classes: "ya-partner_type_auto",
        css: {
            ".ya-partner_type_auto": {
                display: "block"
            },
            ".ya-partner__close-text": {
                display: "inline"
            },
            ".ya-partner__close-button": {
                display: "inline"
            },
            ".ya-partner__close": {
                bottom: "-0.2em",
                right: "1em",
                cursor: "pointer",
                margin: "0",
                position: "absolute"
            },
            ".ya-partner__ads": {
                width: "100%"
            }
        },
        cssIe: {
            ".ya-partner__close": {
                bottom: "0"
            }
        },
        constructor: function(n) {
            m.Context.Direct.Auto.superclass.constructor.call(this, n);
            this.on("afterRender", function() {
                this.initCloseLink()
                })
            },
        insertHtml: function(o) {
            var n = k.body,
            p = k.createElement("div");
            if (!n) {
                m.Utils.DomEvent.domReady(function() {
                    this.insertHtml(o)
                    }, this);
                return true
            }
            n.insertBefore(p, n.firstChild);
            p.innerHTML = o;
            n.insertBefore(p.firstChild, p);
            e.remove(p);
            return true
        },
        initCloseLink: function() {
            var n = m.Utils.DomEvent;
            n.on(e(".ya-partner__close", this.getMainCont())[0], "click", function(o) {
                this.destructor()
                }, this);
            n.on(e(".ya-partner__close-text", this.getMainCont())[0], "click", function(o) {
                this.destructor()
                }, this)
            },
        decorateCss: function(o) {
            m.Context.Direct.Auto.superclass.decorateCss.call(this, o);
            var n = this.getCssStyle(".ya-partner__ads-link-l", "color", o),
            p = new m.Utils.RGB(this.settings.bgColor || "#FFFFFF");
            n = new m.Utils.RGB(n);
            if (n.checkContrast() && !p.checkContrast() || !n.checkContrast() && p.checkContrast()) {
                this.addCssStyle(".ya-partner__close", o, {
                    color: n.toString()
                    })
                } else {
                n = this.getCssStyle(".ya-partner__ads-link-r", "color", o);
                this.addCssStyle(".ya-partner__close", o, {
                    color: n
                })
                }
        },
        getAdvsCount: function() {
            return this.settings.format.limit
        }
    });
    m.Context.Direct.Row = m.extend(m.Context.Direct.Direct, {
        classes: "ya-partner_type_row ya-partner_ads_only-arrow",
        css: {
            ".ya-partner_type_row": {
                height: "2.2em",
                overflow: "hidden"
            },
            ".ya-partner_type_row .ya-partner_ads_only-arrow .ya-partner__ads": {
                "margin-right": "0.5em"
            },
            ".ya-partner_type_row .ya-partner__item": {
                padding: "0.4em 0.5em",
                display: "block",
                "border-radius": ""
            },
            ".ya-partner_type_row .ya-partner": {
                "border-radius": ""
            },
            ".ya-partner_type_row .ya-partner__adress": {
                "margin-right": "0.5em"
            },
            ".ya-partner_type_row .ya-partner__text": {
                margin: "0 0.4em"
            },
            ".ya-partner_type_row .ya-partner__ads-arrow": {
                top: "0"
            },
            ".ya-partner_type_row .ya-partner__ads-l": {
                "line-height": "1.8em"
            },
            ".ya-partner_type_row .ya-partner__url": {
                display: "inline !important"
            }
        },
        addHeaderBorderCss: function(n) {
            var o = this.settings;
            this.addCssStyle(".ya-partner", n, {
                background: o.bgColor
            })
            }
    });
    m.ns("Ya.Context.Direct");
    m.Context.Direct["160x600"] = m.extend(m.Context.Direct.Vertical, {
        classes: "ya-partner_type_160x600",
        css: {
            ".ya-partner_type_160x600": {
                width: "160px",
                height: "600px"
            },
            ".ya-partner_type_160x600 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_160x600": {
                width: "160px",
                display: "block"
            },
            ":root body .ya-partner_type_160x600.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_160x600 a.ya-partner__title-link:link,.ya-partner_type_160x600 a.ya-partner__title-link:visited,.ya-partner_type_160x600 a.ya-partner__title-link:hover": {
                "font-size": "15px",
                "font-weight": "normal"
            },
            ".ya-partner_type_160x600 .ya-partner__text": {
                "font-size": "12px",
                "font-weight": "normal",
                margin: "5px 0px 3px"
            },
            ".ya-partner_type_160x600 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal"
            },
            ".ya-partner_type_160x600 .ya-partner__item": {
                "margin-bottom": "6px"
            }
        },
        cssIe: {
            "body .ya-partner_type_160x600": {
                width: "160px",
                display: "block"
            }
        }
    });
    m.Context.Direct["240x400"] = m.extend(m.Context.Direct.Vertical, {
        classes: "ya-partner_type_240x400",
        css: {
            ".ya-partner_type_240x400 yatag": {
                "font-family": "Arial, sans-serif"
            },
            ".ya-partner_type_240x400": {
                width: "240px",
                height: "400px"
            },
            ":root body .ya-partner_type_240x400": {
                width: "240px",
                display: "block"
            },
            ":root body .ya-partner_type_240x400.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_240x400 a.ya-partner__title-link:link,.ya-partner_type_240x400 a.ya-partner__title-link:visited,.ya-partner_type_240x400 a.ya-partner__title-link:hover": {
                "font-size": "15px",
                "font-weight": "normal"
            },
            ".ya-partner_type_240x400 .ya-partner__text": {
                "font-size": "12px",
                "font-weight": "normal",
                margin: "5px 0px 3px"
            },
            ".ya-partner_type_240x400 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal"
            },
            ".ya-partner_type_240x400 .ya-partner__item": {
                margin: 0,
                padding: "0.4em 0.5em"
            }
        },
        cssIe: {
            "body .ya-partner_type_240x400": {
                width: "240px",
                display: "block"
            }
        }
    });
    m.Context.Direct["120x600"] = m.extend(m.Context.Direct.Vertical, {
        classes: "ya-partner_type_120x600",
        css: {
            ".ya-partner_type_120x600": {
                width: "120px",
                height: "600px"
            },
            ".ya-partner_type_120x600 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_120x600": {
                width: "120px",
                display: "block"
            },
            ":root body .ya-partner_type_120x600.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_120x600 a.ya-partner__title-link:link, .ya-partner_type_120x600 a.ya-partner__title-link:visited, .ya-partner_type_120x600 a.ya-partner__title-link:hover": {
                "font-size": "15px",
                "font-weight": "normal"
            },
            ".ya-partner_type_120x600 .ya-partner__text": {
                "font-size": "12px",
                "font-weight": "normal",
                margin: "5px 0px 3px"
            },
            ".ya-partner_type_120x600 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal"
            }
        },
        cssIe: {
            "body .ya-partner_type_120x600": {
                width: "120px",
                display: "block"
            }
        }
    });
    m.Context.Direct["200x300"] = m.extend(m.Context.Direct.Vertical, {
        classes: "ya-partner_type_200x300",
        css: {
            ".ya-partner_type_200x300": {
                width: "200px",
                height: "300px"
            },
            ".ya-partner_type_200x300 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_200x300": {
                width: "200px",
                display: "block"
            },
            ":root body .ya-partner_type_200x300.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_200x300 a.ya-partner__title-link:link,.ya-partner_type_200x300 a.ya-partner__title-link:visited,.ya-partner_type_200x300 a.ya-partner__title-link:hover": {
                "font-size": "15px",
                "font-weight": "normal"
            },
            ".ya-partner_type_200x300 .ya-partner__text": {
                "font-size": "12px",
                "font-weight": "normal",
                margin: "5px 0px 3px"
            },
            ".ya-partner_type_200x300 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal"
            }
        },
        cssIe: {
            "body .ya-partner_type_200x300": {
                width: "200px",
                display: "block"
            }
        }
    });
    m.Context.Direct["300x300"] = m.extend(m.Context.Direct.Vertical, {
        classes: "ya-partner_type_300x300",
        css: {
            ".ya-partner_type_300x300": {
                width: "300px",
                height: "300px"
            },
            ".ya-partner_type_300x300 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_300x300": {
                width: "300px",
                display: "block"
            },
            ":root body .ya-partner_type_300x300.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_300x300 a.ya-partner__title-link:link,.ya-partner_type_300x300 a.ya-partner__title-link:visited,.ya-partner_type_300x300 a.ya-partner__title-link:hover": {
                "font-size": "15px",
                "font-weight": "normal"
            },
            ".ya-partner_type_300x300 .ya-partner__text": {
                "font-size": "12px",
                "font-weight": "normal",
                margin: "5px 0px 3px"
            },
            ".ya-partner_type_300x300 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal"
            }
        },
        cssIe: {
            "body .ya-partner_type_300x300": {
                width: "300px",
                display: "block"
            }
        }
    });
    m.Context.Direct["300x250"] = m.extend(m.Context.Direct.Vertical, {
        classes: "ya-partner_type_300x250",
        css: {
            ".ya-partner_type_300x250": {
                width: "300px",
                height: "250px"
            },
            ".ya-partner_type_300x250 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_300x250": {
                width: "300px",
                display: "block"
            },
            ":root body .ya-partner_type_300x250.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_300x250 a.ya-partner__title-link:link,.ya-partner_type_300x250 a.ya-partner__title-link:visited,.ya-partner_type_300x250 a.ya-partner__title-link:hover": {
                "font-size": "15px",
                "font-weight": "normal",
                margin: "5px 0px 3px"
            },
            ".ya-partner_type_300x250 .ya-partner__text": {
                "font-size": "12px",
                "font-weight": "normal",
                margin: "5px 0 0"
            },
            ".ya-partner_type_300x250 .ya-partner__list .ya-partner__item": {
                margin: 0,
                padding: ".5em .5em .2em .5em"
            },
            ".ya-partner_type_300x250 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal"
            }
        },
        cssIe: {
            "body .ya-partner_type_300x250": {
                width: "300px",
                display: "block"
            }
        }
    });
    m.Context.Direct["250x250"] = m.extend(m.Context.Direct.Vertical, {
        classes: "ya-partner_type_250x250",
        css: {
            ".ya-partner_type_250x250": {
                width: "250px",
                height: "250px"
            },
            ".ya-partner_type_250x250 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_250x250": {
                width: "250px",
                display: "block"
            },
            ":root body .ya-partner_type_250x250.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_250x250 a.ya-partner__title-link:link,.ya-partner_type_250x250 a.ya-partner__title-link:visited,.ya-partner_type_250x250 a.ya-partner__title-link:hover": {
                "font-size": "15px",
                "font-weight": "normal"
            },
            ".ya-partner_type_250x250 .ya-partner__text": {
                "font-size": "12px",
                "font-weight": "normal",
                margin: "5px 0px 3px"
            },
            ".ya-partner_type_250x250 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal"
            }
        },
        cssIe: {
            "body .ya-partner_type_250x250": {
                width: "250px",
                display: "block"
            }
        }
    });
    m.Context.Direct["120x240"] = m.extend(m.Context.Direct.Vertical, {
        classes: "ya-partner_type_120x240",
        css: {
            ".ya-partner_type_120x240": {
                width: "120px",
                height: "240px"
            },
            ".ya-partner_type_120x240 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_120x240": {
                width: "120px",
                display: "block"
            },
            ":root body .ya-partner_type_120x240.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_120x240 a.ya-partner__title-link:link,.ya-partner_type_120x240 a.ya-partner__title-link:visited,.ya-partner_type_120x240 a.ya-partner__title-link:hover": {
                "font-size": "15px",
                "font-weight": "normal"
            },
            ".ya-partner_type_120x240 .ya-partner__text": {
                "font-size": "12px",
                "font-weight": "normal",
                margin: "5px 0px 3px"
            },
            ".ya-partner_type_120x240 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal"
            }
        },
        cssIe: {
            "body .ya-partner_type_120x240": {
                width: "120px",
                display: "block"
            }
        }
    });
    m.Context.Direct["180x150"] = m.extend(m.Context.Direct.Vertical, {
        classes: "ya-partner_type_180x150",
        css: {
            ".ya-partner_type_180x150": {
                width: "180px",
                height: "150px"
            },
            ".ya-partner_type_180x150 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_180x150": {
                width: "180px",
                display: "block"
            },
            ":root body .ya-partner_type_180x150.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_180x150 a.ya-partner__title-link:link,.ya-partner_type_180x150 a.ya-partner__title-link:visited,.ya-partner_type_180x150 a.ya-partner__title-link:hover": {
                "font-size": "15px",
                "font-weight": "normal"
            },
            ".ya-partner_type_180x150 .ya-partner__text": {
                "font-size": "12px",
                "font-weight": "normal",
                margin: "5px 0px 3px"
            },
            ".ya-partner_type_180x150 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal",
                margin: "5px 0px 3px"
            }
        },
        cssIe: {
            "body .ya-partner_type_180x150": {
                width: "180px",
                display: "block"
            }
        }
    });
    m.Context.Direct["125x125"] = m.extend(m.Context.Direct.Vertical, {
        classes: "ya-partner_type_125x125",
        css: {
            ".ya-partner_type_125x125": {
                width: "125px",
                height: "125px"
            },
            ".ya-partner_type_125x125 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_125x125": {
                width: "125px",
                display: "block"
            },
            ":root body .ya-partner_type_125x125.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_125x125 a.ya-partner__title-link:link,.ya-partner_type_125x125 a.ya-partner__title-link:visited,.ya-partner_type_125x125 a.ya-partner__title-link:hover": {
                "font-size": "13px",
                "font-weight": "normal"
            },
            ".ya-partner_type_125x125 .ya-partner__text": {
                "font-size": "10px",
                "font-weight": "normal",
                margin: "0px 0px 1px"
            },
            ".ya-partner_type_125x125 .ya-partner__ads": {
                "font-size": "70%"
            },
            ".ya-partner_type_125x125 .ya-partner__item": {
                padding: "0.5em 0.2em"
            },
            ".ya-partner_type_125x125 .ya-partner__url": {
                display: "none"
            },
            ".ya-partner_type_125x125 .ya-partner__list": {
                margin: "0 0 0.7em 0"
            }
        },
        cssIe: {
            "body .ya-partner_type_125x125": {
                width: "125px",
                display: "block"
            }
        }
    });
    m.Context.Direct["728x90"] = m.extend(m.Context.Direct.Flat, {
        classes: "ya-partner_type_728x90",
        css: {
            ".ya-partner_type_728x90": {
                width: "728px",
                height: "90px"
            },
            ".ya-partner_type_728x90 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_728x90": {
                width: "728px",
                display: "block"
            },
            ":root body .ya-partner_type_728x90.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_728x90 .ya-partner__item": {
                margin: "4px 0",
                padding: "0 3px"
            },
            ".ya-partner_type_728x90 a.ya-partner__title-link:link,.ya-partner_type_728x90 a.ya-partner__title-link:visited,.ya-partner_type_728x90 a.ya-partner__title-link:hover": {
                "font-size": "15px",
                "font-weight": "normal"
            },
            ".ya-partner_type_728x90 .ya-partner__text": {
                "font-size": "12px",
                "font-weight": "normal",
                margin: "0 0 3px"
            },
            ".ya-partner_type_728x90 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal"
            }
        },
        cssIe: {
            "body .ya-partner_type_728x90": {
                width: "728px",
                display: "block"
            },
            "* html .ya-partner_type_728x90 .ya-partner__text": {
                "margin-top": "0.2em"
            },
            ".ya-partner_type_728x90 .ya-partner__text": {
                "margin-top": "0.25em"
            }
        }
    });
    m.Context.Direct["600x60"] = m.extend(m.Context.Direct.Flat, {
        classes: "ya-partner_type_600x60",
        css: {
            ".ya-partner_type_600x60": {
                width: "600px",
                height: "60px"
            },
            ".ya-partner_type_600x60 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_600x60": {
                width: "600px",
                display: "block"
            },
            ":root body .ya-partner_type_600x60.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_600x60 a.ya-partner__title-link:link, .ya-partner_type_600x60 a.ya-partner__title-link:visited, .ya-partner_type_600x60 a.ya-partner__title-link:hover": {
                "font-size": "13px",
                "font-weight": "normal"
            },
            ".ya-partner_type_600x60 .ya-partner__text": {
                "font-size": "11px",
                "font-weight": "normal",
                margin: "5px 0 3px"
            },
            ".ya-partner_type_600x60 .ya-partner__item": {
                margin: "0",
                padding: "0.2em"
            },
            ".ya-partner_type_600x60 .ya-partner__ads": {
                "font-size": "70%"
            },
            ".ya-partner_type_600x60 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal"
            }
        },
        cssIe: {
            "body .ya-partner_type_600x60": {
                width: "600px",
                display: "block"
            }
        }
    });
    m.Context.Direct["468x60"] = m.extend(m.Context.Direct.Flat, {
        classes: "ya-partner_type_468x60",
        css: {
            ".ya-partner_type_468x60": {
                width: "468px",
                height: "60px"
            },
            ".ya-partner_type_468x60 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_468x60": {
                width: "468px",
                display: "block"
            },
            ":root body .ya-partner_type_468x60.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_468x60 a.ya-partner__title-link:link, .ya-partner_type_468x60 a.ya-partner__title-link:visited, .ya-partner_type_468x60 a.ya-partner__title-link:hover": {
                "font-size": "15px",
                "font-weight": "normal"
            },
            ".ya-partner_type_468x60 .ya-partner__text": {
                "font-size": "12px",
                "font-weight": "normal",
                margin: "5px 0 3px"
            },
            ".ya-partner_type_468x60 .ya-partner__url": {
                "font-size": "11px",
                "font-weight": "normal"
            }
        },
        cssIe: {
            "body .ya-partner_type_468x60": {
                width: "480px",
                display: "block"
            }
        }
    });
    m.Context.Direct["234x60"] = m.extend(m.Context.Direct.Flat, {
        classes: "ya-partner_type_234x60",
        css: {
            ".ya-partner_type_234x60": {
                width: "234px",
                height: "60px"
            },
            ".ya-partner_type_234x60 yatag": {
                "font-family": "Arial, Sans-serif"
            },
            ":root body .ya-partner_type_234x60": {
                width: "234px",
                display: "block"
            },
            ":root body .ya-partner_type_234x60.ya-partner_border.ya-partner_ads-down .ya-partner__ads": {
                bottom: "0"
            },
            ".ya-partner_type_234x60 a.ya-partner__title-link:link, .ya-partner_type_234x60 a.ya-partner__title-link:visited, .ya-partner_type_234x60 a.ya-partner__title-link:hover": {
                "font-size": "13px",
                "font-weight": "normal"
            },
            ".ya-partner_type_234x60 .ya-partner__text": {
                "font-size": "10px",
                "font-weight": "normal",
                margin: "5px 0 1px"
            },
            ".ya-partner_type_234x60 .ya-partner__ads": {
                "font-size": "70%"
            },
            ".ya-partner_type_234x60 .ya-partner__item": {
                padding: "0 0.3em"
            },
            ".ya-partner_type_234x60 .ya-partner__list": {
                margin: "0"
            },
            ".ya-partner_type_234x60 .ya-partner__url": {
                display: "none"
            }
        },
        cssIe: {
            "body .ya-partner_type_234x60": {
                width: "234px",
                display: "block"
            },
            "* html .ya-partner_type_234x60 .ya-partner__text": {
                "font-size": "10px",
                "font-weight": "normal",
                margin: "1px 0"
            },
            "* html .ya-partner_type_234x60 .ya-partner__ads": {
                "font-size": "65%"
            },
            "* html .ya-partner__item, * html .ya-partner__text": {
                zoom: "1"
            }
        }
    });
    m.ns("Ya.Context.Market");
    m.Context.Market.Vertical = m.extend(m.Context.Direct.Vertical, {
        getHtml: function(o, p) {
            for (var n = 0; n < o.length; n++) {
                o[n].domain = o[n].domain + " &mdash; " + o[n].region
            }
            return this.constructor.superclass.getHtml.call(this, o, p)
            },
        addVisibilityCheck: function() {
            if (!m.Context.Market.visibSended) {
                m.Utils.addScript(this.visibCheckLink)
                }
            m.Context.Market.visibSended = true;
            this.addVisibilityCheck = m.emptyFn
        },
        getVisibilityCheckLink: function(n) {
            return this.visibCheckLink = n + "?wmode=3"
        }
    });
    m.Context.Market.Horizontal = m.extend(m.Context.Direct.Horizontal, {
        getHtml: function(o, p) {
            for (var n = 0; n < o.length; n++) {
                o[n].domain = o[n].domain + " &mdash; " + o[n].region
            }
            return this.constructor.superclass.getHtml.call(this, o, p)
            },
        addVisibilityCheck: function() {
            if (!m.Context.Market.visibSended) {
                m.Utils.addScript(this.visibCheckLink)
                }
            m.Context.Market.visibSended = true;
            this.addVisibilityCheck = m.emptyFn
        },
        getVisibilityCheckLink: function(n) {
            return this.visibCheckLink = n + "?wmode=3"
        }
    });
    m.ns("Ya.Context.Media");
    m.Context.Media.Media = m.extend(m.Context.Direct.Direct, {
        css: {
            ".ya-partner_type_media .ya-partner__ads": {
                display: "block"
            },
            ".ya-partner_type_media .ya-partner__ads-l": {
                "border-radius": "4px 0 0"
            }
        },
        classes: "ya-partner_type_media",
        createTemplObj: function(r, s) {
            var o = r[0],
            q = this.settings,
            p = this._grabPrototypeChain("classes").join(" "),
            n;
            o.flashV = parseInt(o.flashV, 10);
            o.ieOnly = parseInt(o.ieOnly, 10);
            if (m.flashVer[0] < o.flashV || (o.ieOnly && !m.isIE)) {
                n = this.getImgHtml(o)
                } else {
                n = this.getSWFHtml(o)
                }
            return {
                yaUrl: s.prodTitle.url || "",
                yaTitle: s.prodTitle.title || "",
                allAdvUrl: s.linkAll.url || "",
                allAdvTitle: s.linkAll.title || "",
                classes: p,
                ads: r,
                mainContId: this.mainContId,
                settings: q,
                format: q.format,
                mediaCode: n
            }
        },
        selectAdvs: function(n) {
            return [n[0]]
            },
        getImgHtml: function(n) {
            var p = (n.flashUrl || n.imgUrl) && n.img,
            o = "";
            if (p) {
                o += '<a href="' + (n.flashUrl || n.imgUrl) + "?rnd=" + m.genRnd() + '" target="_blank">'
            }
            o += '<img src="' + n.img + "?rnd=" + m.genRnd() + '"' + this.getBannerSizeStyle(n) + ' title="' + n.alt + '" alt="' + n.alt + '" border="0" />';
            if (p) {
                o += "</a>"
            }
            return o
        },
        getSWFHtml: function(n) {
            var q = '<param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="bgcolor" value="#ffffff" />',
            o = n.flash + "?rnd=" + m.genRnd() + "&link1=" + n.flashUrl,
            p = "";
            if (m.isIE) {
                p += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + this.getBannerSizeStyle(n) + ">";
                p += '<param name="movie" value="' + o + '" />' + q + "</object>"
            } else {
                if (m.isGecko) {
                    p += '<embed src="' + o + '"' + this.getBannerSizeStyle(n) + ' quality="high" wmode="transparent" bgcolor="#ffffff" type="application/x-shockwave-flash"></embed>'
                } else {
                    p += '<object type="application/x-shockwave-flash" data="' + o + '"' + this.getBannerSizeStyle(n) + ">" + q + "</object>"
                }
            }
            if (n.count) {
                p += '<img src="' + n.count + '?wmode=3" width="1" height="1"/>'
            }
            return p
        },
        getBannerSizeStyle: function(n) {
            return ' width="' + n.width + '" height="' + n.height + '" style="width:' + n.width + "px !important; height:" + n.height + 'px !important;" '
        },
        decorateCss: function(n) {
            if (this.settings.noStyle === true) {
                return n
            }
            this.setArrowColors(n);
            return n
        },
        addVisibilityCheck: m.emptyFn
    });
    m.Context.RTB = m.extend(m.Context.Adv, {
        html: '<iframe id="<%=mainContId%>" width="<%=settings.width%>" height="<%=settings.height%>" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0"></iframe>',
        constructor: function(n) {
            m.Context.RTB.superclass.constructor.call(this, n);
            this.on("afterInsert", function() {
                var o = this.initBanner();
                if (!o) {
                    this.fireEvent("renderFailed", this, this._mainCont, 0)
                    }
            }, this);
            this.on("afterRender", function() {
                if (!this.async) {
                    j.yandex_rtb_is_displayed = true
                }
                j.yandex_ad_is_displayed = null
            })
            },
        createTemplObj: function() {
            return {
                mainContId: this.mainContId,
                settings: this.settings
            }
        },
        removeOverflow: m.emptyFn,
        insertCSS: m.emptyFn,
        getVisibilityCheckLink: function() {
            return ""
        },
        initBanner: function() {
            if (!this.advs[0].html) {
                return true
            }
            var p = e("#" + this.renderTo),
            n,
            o = m.Utils.Base64.decode(this.advs[0].html);
            if (!p) {
                return false
            }
            n = p.getElementsByTagName("iframe")[0];
            if (m.isIE) {
                return this.initIe(n, o)
                }
            return this.initNotIe(n, o)
            },
        initIe: function(n, p) {
            var o = +new Date();
            m.Context.RTB[o] = p;
            n.src = "javascript: parent.Ya.Context.RTB[" + o + "];";
            return true
        },
        initNotIe: function(n, o) {
            var p = n.contentDocument || n.contentWindow.document;
            if (p && p.open && p.write && p.close) {
                p.open();
                p.write("<!DOCTYPE html>");
                p.write("<html><head></head><body>");
                p.write(o);
                p.write("</body></html>");
                if (m.isOpera) {
                    p.write('<script type="text/javascript">document.close();<\u002fscript>')
                    } else {
                    p.close()
                    }
            }
            return true
        }
    });
    m.ns("Ya.Context");
    m.Context.ContextManager = new(m.extend(m.Utils.Observable, {
        constructor: function(n) {
            this.constructor.superclass.constructor.call(this, n);
            m.Utils.logger.wrapObj("cntxt.", this, this)
            },
        init: function() {
            this.oldSyncInit();
            this.callbackInit()
            },
        oldSyncInit: function(p) {
            p = p || j.yandex_ad_format;
            j.yandex_ad_format = null;
            if (!p) {
                return false
            }
            if (p == "compatibility") {
                i();
                return
            }
            var o = m.apply({
                product: p
            }, l(p)),
            n = {
                async: false,
                settings: o
            };
            m.Context.AdvManager.render(n)
            },
        callbackInit: function() {
            var p = ((j.yandexContextSyncCallbacks || []).concat(j.yandex_context_callbacks || [], j.yandexContextAsyncCallbacks || [])),
            o = p.length,
            n;
            if (p) {
                for (n = 0; n < o; n++) {
                    p[n]()
                    }
            }
            j.yandexContextSyncCallbacks = j.yandexContextAsyncCallbacks = j.yandex_context_callbacks = c
        }
    }))();
    m.ns("Ya.Direct");
    m.Direct.insertInto = function(p, n, o, q) {
        o.renderTo = o.renderTo || o.place || n;
        m.Context.AdvManager.render({
            renderTo: o.renderTo,
            async: true,
            blockId: p || m.partnerId,
            settings: o
        }, q)
        };
    function i() {
        j.yandex_direct_print = function() {
            m.Context.ContextManager.oldSyncInit(m.Const.Products.DIRECT)
            };
        j.yandex_market_print = function() {
            m.Context.ContextManager.oldSyncInit(m.Const.Products.MARKET)
            };
        j.yandex_media_print = function() {
            m.Context.ContextManager.oldSyncInit(m.Const.Products.MEDIA)
            }
    }
    function h() {
        return yandex_ad_is_displayed
    }
    function l(q) {
        var p = {},
        n = "type border_type header_position bg_color border_radius bg_start_color bg_end_color border_color header_bg_color title_color text_color category_color url_color all_color hover_color limit place callback favicon show_how_link title_font_size grab updatetag noStyle".split(" ");
        for (var o = 0; o < n.length; o++) {
            p[n[o]] = p[n[o]] || j["yandex_" + q + "_" + n[o]];
            j["yandex_" + q + "_" + n[o]] = c
        }
        b(p);
        return p
    }
    function b(p) {
        var n = "border_radius site_bg_color font_size site_charset font_family stat_id user_gender user_yearofbirth user_external".split(" ");
        for (var o = 0; o < n.length; o++) {
            p[n[o]] = p[n[o]] || j["yandex_" + n[o]];
            j["yandex_" + n[o]] = c
        }
    }
    j.Ya = j.Ya || {};
    m._metrika = m._metrika || {};
    m._metrika.hitParam = m._metrika.hitParam || [];
    function g() {
        return ("" + (k.characterSet || k.charset || "")).toLowerCase()
        }
    function a(Y, am) {
        if (!Y) {
            return
        }
        am = am || 0;
        function B() {
            var aB = {},
            ay = ["hash", "host", "hostname", "href", "pathname", "port", "protocol", "search"],
            av = ay.length;
            var ax = av;
            while (ax--) {
                aB[ay[ax]] = ""
            }
            try {
                var aw = j.location;
                ax = av;
                while (ax--) {
                    var aA = ay[ax];
                    aB[aA] = aw[aA]
                    }
            } catch(az) {
                if (O) {
                    aB = O
                }
            }
            return aB
        }
        var O = B();
        var M = Math.round(Math.random() * (1 << 31 - 1)),
        P,
        W,
        E = typeof k.all == "object",
        ai = j.navigator,
        F = j.screen,
        N = O.protocol == "https:" ? "https:": "http:",
        S = "$Rev: 1 $".match(/(\d+)/)[1],
        al = "//mc.yandex.ru/watch/",
        q = E ? 512: 2048,
        ad = E ? 512: 2048,
        an = E ? 100: 400,
        U = 64,
        ag = "noindex",
        ap = null,
        w = false,
        ah = {};
        function H(aw, av) {
            av = av || 256;
            if (!aw) {
                return ""
            }
            if (aw.length > av) {
                aw = aw.substr(0, av)
                }
            return (j.encodeURIComponent || j.escape)(aw).replace(/\+/g, "%2B")
            }
        function o(ax) {
            function aA(aC) {
                return aC ? aC.replace(/\\/g, "\\\\").replace(/"/g, '\\"') : ""
            }
            if (ax === c) {
                return ""
            }
            if (ax === null) {
                return "null"
            }
            switch (ax.constructor) {
            case Boolean:
                return ax.toString();
            case Number:
                return isFinite(ax) ? ax.toString() : "null";
            case String:
                return '"' + aA(ax) + '"';
            case Array:
                var av = [];
                for (var ay = 0, az = ax.length; ay < az; ay++) {
                    av[av.length] = o(ax[ay])
                    }
                return "[" + av.join(",") + "]";
            case Object:
                var av = "{",
                ay = 0;
                for (var aw in ax) {
                    if (!ax.hasOwnProperty(aw)) {
                        continue
                    }
                    var aB = ax[aw];
                    if (aB === c) {
                        continue
                    }
                    av += (ay ? ",": "") + '"' + aA(aw) + '":' + o(aB);
                    ay++
                }
                av += "}";
                return av;
            default:
                return "null"
            }
        }
        function af() {
            return Math.floor(Math.random() * 1000000)
            }
        function ak() {
            return + new Date()
            }
        function V(ax) {
            var ay = ak();
            for (var aw = 1; aw > 0; aw++) {
                if (aw % 1000 == 0) {
                    var av = ak();
                    if (ay > av) {
                        break
                    }
                    if (av - ay > ax) {
                        break
                    }
                }
            }
        }
        function L(av) {
            return av ? av.toString().replace(/<\/?[^>]+>/gi, "") : ""
        }
        function r(av) {
            return av ? av.toString().replace(/^\s+/, "").replace(/\s+$/, "") : ""
        }
        function x(av) {
            return r(L(av.innerHTML))
            }
        function ab(av) {
            return av.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }
        function au(av) {
            return av ? av.split(/\?/)[0] : ""
        }
        function X(av, ax) {
            if (!av || !ax) {
                return false
            }
            var az = [];
            for (var aw = 0; aw < ax.length; aw++) {
                az.push(ab(ax[aw]))
                }
            var ay = new RegExp("\\.(" + az.join("|") + ")$", "i");
            return ay.test(av)
            }
        function J(aw) {
            var ay = aw.target || aw.srcElement;
            if (!ay) {
                return false
            }
            if (ay.nodeType == 3) {
                ay = ay.parentNode
            }
            function ax(az) {
                return az.nodeName.toString().toLowerCase()
                }
            var av = ax(ay);
            while (ay.parentNode && ay.parentNode.nodeName && ((av != "a" && av != "area") || !ay.href)) {
                ay = ay.parentNode;
                av = ax(ay)
                }
            if (!ay.href) {
                return false
            }
            return ay
        }
        function ar(av, ax) {
            function aw(ay) {
                return ay ? ay.replace(/^www\./, "") : ""
            }
            return aw(av) == aw(ax) ? true: false
        }
        function R(ax, aw) {
            if (!ax || !aw) {
                if (!ax && !aw) {
                    return true
                }
                return false
            }
            function av(ay) {
                ay = ay.split(":");
                ay = ay[1] || "";
                ay = ay.replace(/^\/*/, "").replace(/^www\./, "");
                return ay.split("/")[0]
                }
            if (av(ax) == av(aw)) {
                return true
            }
            return false
        }
        function p(ay, ax) {
            var az = ax.target,
            av = false;
            if (!ax.hostname) {
                return false
            }
            if (!az || az == "_self" || az == "_top" || az == "_parent") {
                av = true
            }
            var aw = ay.shiftKey || ay.ctrlKey || ay.altKey;
            if (!aw) {
                if (ay.modifiers && j.Event) {
                    aw = ay.modifiers & j.Event.CONTROL_MASK || ay.modifiers & j.Event.SHIFT_MASK || ay.modifiers & j.Event.ALT_MASK
                }
            }
            return av && !aw
        }
        function v(aw, aB, aA, aD, ay) {
            ay = ay || {};
            var az = (typeof aA != "undefined") ? aA: ap,
            ax = [];
            function aC(aF, aE) {
                ax[ax.length] = aF;
                ax[ax.length] = aE
            }
            if (ay.ar && !ay.onlyData) {
                az = ac(az);
                aw = ac(aw)
                }
            aC("page-ref", H(az, q));
            aC("page-url", H(aw, q));
            aC("browser-info", aa(aB, ay));
            if (B().hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/) != -1) {
                aC("ut", ag)
                } else {
                if (typeof ay.ut != "undefined") {
                    aC("ut", H("" + ay.ut, U))
                    }
            }
            if (aD) {
                aC("site-info", H(o(aD), ad))
                }
            if (ay.saveRef) {
                ap = az
            }
            var av = n(al, ax);
            if (j.name != "MetrikaPlayer") {
                new Image().src = av;
                t(av);
                if (ay.isDelay) {
                    V(ay.delay)
                    }
            }
            return av
        }
        function Z(aw, aD, aC, aJ, ay, aG, aF) {
            ay = ay || {};
            var az = (typeof aC != "undefined") ? aC: ap,
            ax = [];
            function aH(aL, aK) {
                ax[ax.length] = aL;
                ax[ax.length] = aK
            }
            if (ay.ar && !ay.onlyData) {
                az = ac(az);
                aw = ac(aw)
                }
            if (j.name != "MetrikaPlayer") {
                var aB = "_ymjsp" + af();
                var aI = k.createElement("script");
                j[aB] = function(aL) {
                    try {
                        delete j[aB]
                        } catch(aK) {
                        j[aB] = c
                    }
                    aF(aL);
                    if (aI.parentNode) {
                        aI.parentNode.removeChild(aI)
                        }
                };
                aH("wmode", 5);
                aH("callback", aB);
                aH("page-ref", H(az, q));
                aH("page-url", H(aw, q));
                var aE = aa(aD, ay);
                if (aG) {
                    aE = ["vc", aG, aE].join(":")
                    }
                aH("browser-info", aE);
                if (B().hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/) != -1) {
                    aH("ut", ag)
                    } else {
                    if (typeof ay.ut != "undefined") {
                        aH("ut", H("" + ay.ut, U))
                        }
                }
                if (aJ) {
                    aH("site-info", H(o(aJ), ad))
                    }
                if (ay.saveRef) {
                    ap = az
                }
                var av = n(al, ax);
                aI.type = "text/javascript";
                aI.src = av;
                var aA = k.getElementsByTagName("head")[0];
                aA.insertBefore(aI, aA.firstChild);
                t(av)
                }
        }
        function n(az, aA) {
            var ay = ["rn", af(), "cnt-class", am].concat(aA),
            av = [];
            for (var aw = 0; aw < ay.length; aw += 2) {
                var ax = ay[aw + 1];
                if (ax) {
                    av[av.length] = ay[aw] + "=" + ax
                }
            }
            return N + az + Y + "?" + av.join("&")
            }
        function ac(aw) {
            var aB = B(),
            az = aB.host,
            av = aB.href;
            if (!aw) {
                return av
            }
            if (aw.search(/^\w+:\/\//) != -1) {
                return aw
            }
            var ay = aw.charAt(0);
            if (ay == "?") {
                var ax = av.search(/\?/);
                if (ax == -1) {
                    return av + aw
                }
                return av.substr(0, ax) + aw
            }
            if (ay == "#") {
                var ax = av.search(/#/);
                if (ax == -1) {
                    return av + aw
                }
                return av.substr(0, ax) + aw
            }
            if (ay == "/") {
                var ax = av.search(az);
                if (ax != -1) {
                    return av.substr(0, ax + az.length) + aw
                }
            } else {
                var aA = av.split("/");
                aA[aA.length - 1] = aw;
                return aA.join("/")
                }
            return aw
        }
        function t(av) {
            if (typeof j.ymLog == "function") {
                j.ymLog(av)
                }
        }
        function ao(ay, aw) {
            for (var ax = 0, av = aw.length; ax < av; ax += 1) {
                if (ay === aw[ax]) {
                    return ax
                }
            }
            return false
        }
        var z = null,
        K = null,
        T = null;
        function aa(aG, aw) {
            aw = aw || {};
            var aH = [];
            function aI(aJ, aK) {
                if (aJ && aK) {
                    aH[aH.length] = [aJ, aK].join(":")
                    }
            }
            function aD(aJ) {
                aI(aJ, aw[aJ] ? "1": "")
                }
            var aB = D(),
            aF = A();
            if (!W) {
                W = aF;
                P = aB
            }
            aI("j", ai.javaEnabled() ? "1": "");
            if (F) {
                aI("s", F.width + "x" + F.height + "x" + (F.colorDepth || F.pixelDepth))
                }
            if (z === null) {
                z = aq()
                }
            aI("f", z);
            aI("w", y() + "x" + aj());
            aI("z", aB);
            aI("i", aF);
            if (K === null) {
                K = ae()
                }
            aI("l", K || "");
            aI("en", g());
            aI("v", S);
            aI("c", ai.cookieEnabled ? "1": "");
            if (E && k.documentMode) {
                if (T === null) {
                    T = G()
                    }
                if (T) {
                    aI("jv", T)
                    }
            }
            aI("la", I());
            aI("ex", s());
            if (w) {
                aI("wh", "1")
                }
            var az = ["ar", "ln", "dl", "ad", "nb", "pa"];
            for (var aC = 0; aC < az.length; aC++) {
                aD(az[aC])
                }
            var av = ["va", "vt", "sn", "sa", "he"];
            for (var aC = 0; aC < av.length; aC++) {
                var ay = av[aC];
                aI(ay, aw[ay])
                }
            aI("hid", M);
            if (ah._webvisor) {
                if (!j.name) {
                    j.name = Math.round(Math.random() * 65535)
                    }
                var aA = +j.name;
                if (aA) {
                    if (aA < 0) {
                        aA *= -1
                    }
                    aA %= 65535
                }
                aI("wn", aA || calcFletcherSum(j.name));
                try {
                    if (j.opener && j.opener.name) {
                        aI("on", calcFletcherSum(j.opener.name))
                        }
                } catch(aE) {}
                try {
                    if (j.history) {
                        aI("hl", String(j.history.length))
                        }
                } catch(aE) {}
            }
            var ax;
            if (typeof aG == "undefined") {
                ax = C();
                ax = ax ? H(ax, an) : ""
            } else {
                ax = H(aG, an)
                }
            aI("t", ax);
            return aH.join(":")
            }
        function G() {
            return Function("return /*@cc_on @_jscript_version @*/;")()
            }
        function s() {
            return k.webkitVisibilityState == "prerender" ? "pre1": ""
        }
        function I() {
            return (ai && (ai.language || ai.browserLanguage) || "").toLowerCase()
            }
        function aq() {
            var ay = null,
            aC = null,
            aw,
            av = j.navigator,
            ax = "application/x-shockwave-flash",
            aA = "Shockwave Flash",
            aB = "ShockwaveFlash.ShockwaveFlash";
            if (typeof av.plugins != "undefined" && typeof av.plugins[aA] == "object") {
                ay = av.plugins[aA].description;
                if (ay && !(typeof av.mimeTypes != "undefined" && av.mimeTypes[ax] && !av.mimeTypes[ax].enabledPlugin)) {
                    aC = ay.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".")
                    }
            } else {
                if (typeof j.ActiveXObject != "undefined") {
                    try {
                        aw = new ActiveXObject(aB);
                        if (aw) {
                            ay = aw.GetVariable("$version");
                            if (ay) {
                                aC = ay.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, "")
                                }
                        }
                    } catch(az) {}
                }
            }
            return aC
        }
        function C() {
            var aw = k.title;
            if (typeof aw != "string") {
                var av = k.getElementsByTagName("title");
                if (av && av.length) {
                    aw = av[0].innerHTML
                } else {
                    aw = ""
                }
            }
            return aw
        }
        function ae() {
            var av = null;
            if (j.ActiveXObject) {
                try {
                    var aA = new ActiveXObject("AgControl.AgControl");
                    function aB(aF, aD, aC, aE) {
                        while (ax(aF, aD)) {
                            aD[aC] += aE
                        }
                        aD[aC] -= aE
                    }
                    function ax(aD, aC) {
                        return aD.isVersionSupported(aC[0] + "." + aC[1] + "." + aC[2] + "." + aC[3])
                        }
                    var aw = [1, 0, 0, 0];
                    aB(aA, aw, 0, 1);
                    aB(aA, aw, 1, 1);
                    aB(aA, aw, 2, 10000);
                    aB(aA, aw, 2, 1000);
                    aB(aA, aw, 2, 100);
                    aB(aA, aw, 2, 10);
                    aB(aA, aw, 2, 1);
                    aB(aA, aw, 3, 1);
                    av = aw.join(".")
                    } catch(az) {}
            } else {
                var ay = ai.plugins["Silverlight Plug-In"];
                if (ay) {
                    av = ay.description
                }
            }
            return av
        }
        function D() {
            return (new Date()).getTimezoneOffset() * ( - 1)
            }
        function A() {
            function ax(aA) {
                return aA < 10 ? "0" + aA: aA
            }
            var aw = new Date(),
            av = [aw.getFullYear(), aw.getMonth() + 1, aw.getDate(), aw.getHours(), aw.getMinutes(), aw.getSeconds()],
            az = "";
            for (var ay = 0; ay < av.length; ay++) {
                az += ax(av[ay])
                }
            return az
        }
        function y() {
            var av = -1;
            if (k.documentElement && k.compatMode == "CSS1Compat") {
                av = k.documentElement.clientWidth
            } else {
                if (k.body) {
                    av = k.body.clientWidth
                }
            }
            return av
        }
        function aj() {
            var av = -1;
            if (k.documentElement && k.compatMode == "CSS1Compat") {
                av = k.documentElement.clientHeight
            } else {
                if (k.body) {
                    av = k.body.clientHeight
                }
            }
            return av
        }
        function at(av) {
            return (av == 1 && j.Ya && j.Ya.Direct) ? true: false
        }
        var Q = Y + ":" + am;
        if (!m._metrika.hitParam[Q]) {
            m._metrika.hitParam[Q] = 1;
            v(O.href, C(), k.referrer, null, {
                ad: true
            })
            }
    }
})(this, this.document);
Ya.Context.ContextManager.init();