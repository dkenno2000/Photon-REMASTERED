(() =>
{
	"use strict";

	function e(e, t, i, s)
	{
		return new(i || (i = Promise))((function (r, a)
		{
			function n(e)
			{
				try
				{
					l(s.next(e))
				}
				catch (e)
				{
					a(e)
				}
			}

			function o(e)
			{
				try
				{
					l(s.throw(e))
				}
				catch (e)
				{
					a(e)
				}
			}

			function l(e)
			{
				var t;
				e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i((function (e)
				{
					e(t)
				}))).then(n, o)
			}
			l((s = s.apply(e, t || [])).next())
		}))
	}
	Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
	class t
	{
		constructor(e)
		{
			Object.defineProperty(this, "_value",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this._value = e
		}
		get value()
		{
			return this._value / 100
		}
		get percent()
		{
			return this._value
		}
		toString()
		{
			return this._value + "%"
		}
		interpolate(e, t)
		{
			return e + this.value * (t - e)
		}
		static normalize(e, i, s)
		{
			return e instanceof t ? e : new t(i === s ? 0 : 100 * Math.min(Math.max(1 / (s - i) * (e - i), 0), 1))
		}
	}

	function i(e)
	{
		return new t(e)
	}
	i(0);
	const s = i(100),
		r = i(50);

	function a(e)
	{
		return e instanceof t
	}

	function n(e)
	{
		return Number(e) !== e
	}

	function o(e)
	{
		if (null != e && !d(e))
		{
			let t = Number(e);
			return n(t) && u(e) && "" != e && e.match(/[0-9]+/) ? o(e.replace(/[^0-9.\-]+/g, "")) : t
		}
		return e
	}

	function l(e)
	{
		if (c(e)) return new Date(e);
		if (d(e)) return new Date(e);
		{
			let t = Number(e);
			return d(t) ? new Date(t) : new Date(e)
		}
	}

	function h(e, t)
	{
		return new Array(t + 1).join(e)
	}

	function c(e)
	{
		return "[object Date]" === function (e)
		{
			return {}.toString.call(e)
		}(e)
	}

	function u(e)
	{
		return "string" == typeof e
	}

	function d(e)
	{
		return "number" == typeof e && Number(e) == e
	}

	function p(e)
	{
		return "object" == typeof e && null !== e
	}
	const g = "__§§§__",
		m = "__§§§§__";

	function f(e, t)
	{
		const i = e.length;
		for (let s = 0; s < i; ++s)
			if (e[s] === t) return s;
		return -1
	}

	function b(e, t)
	{
		const i = e.length,
			s = new Array(i);
		for (let r = 0; r < i; ++r) s[r] = t(e[r], r);
		return s
	}

	function _(e, t)
	{
		const i = e.length;
		for (let s = 0; s < i; ++s) t(e[s], s)
	}

	function v(e, t)
	{
		let i = e.length;
		for (; i > 0;) --i, t(e[i], i)
	}

	function y(e, t)
	{
		const i = e.length;
		for (let s = 0; s < i && t(e[s], s); ++s);
	}

	function w(e, t)
	{
		let i = !1,
			s = 0;
		for (;;)
		{
			if (s = e.indexOf(t, s), -1 === s) return i;
			i = !0, e.splice(s, 1)
		}
	}

	function x(e, t)
	{
		let i = e.indexOf(t);
		return -1 !== i && (e.splice(i, 1), !0)
	}

	function k(e, t)
	{
		-1 === e.indexOf(t) && e.push(t)
	}

	function P(e, t, i)
	{
		e.splice(t, 0, i)
	}

	function D(e, t)
	{
		e.splice(t, 1)
	}

	function T(e, t)
	{
		const i = e.length;
		for (let s = 0; s < i; ++s)
			if (t(e[s], s)) return s;
		return -1
	}

	function O(e, t)
	{
		const i = T(e, t);
		if (-1 !== i) return e[i]
	}

	function S(e, t)
	{
		let i = e.length;
		for (; i > 0;) --i, t(e[i]) || e.splice(i, 1)
	}

	function E(e)
	{
		return Object.keys(e)
	}

	function C(e, t)
	{
		E(e).forEach((i =>
		{
			t(i, e[i])
		}))
	}

	function j(e, t)
	{
		return {}.hasOwnProperty.call(e, t)
	}
	class M
	{
		constructor()
		{
			Object.defineProperty(this, "_disposed",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this._disposed = !1
		}
		isDisposed()
		{
			return this._disposed
		}
		dispose()
		{
			this._disposed || (this._disposed = !0, this._dispose())
		}
	}
	class A
	{
		constructor(e)
		{
			Object.defineProperty(this, "_disposed",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_dispose",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this._disposed = !1, this._dispose = e
		}
		isDisposed()
		{
			return this._disposed
		}
		dispose()
		{
			this._disposed || (this._disposed = !0, this._dispose())
		}
	}
	class B extends M
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_disposers",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			})
		}
		_dispose()
		{
			_(this._disposers, (e =>
			{
				e.dispose()
			}))
		}
	}
	class L extends M
	{
		constructor(e)
		{
			super(), Object.defineProperty(this, "_disposers",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this._disposers = e
		}
		_dispose()
		{
			_(this._disposers, (e =>
			{
				e.dispose()
			}))
		}
		get disposers()
		{
			return this._disposers
		}
	}
	class R extends A
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_counter",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			})
		}
		increment()
		{
			return ++this._counter, new A((() =>
			{
				--this._counter, 0 === this._counter && this.dispose()
			}))
		}
	}

	function I(e, t, i, s)
	{
		return e.addEventListener(t, i, s || !1), new A((() =>
		{
			e.removeEventListener(t, i, s || !1)
		}))
	}

	function H(e)
	{
		return I(window, "resize", (t =>
		{
			e()
		}))
	}

	function F(e)
	{
		switch (e)
		{
		case "touchevents":
			return window.hasOwnProperty("TouchEvent");
		case "pointerevents":
			return window.hasOwnProperty("PointerEvent");
		case "mouseevents":
			return window.hasOwnProperty("MouseEvent");
		case "wheelevents":
			return window.hasOwnProperty("WheelEvent");
		case "keyboardevents":
			return window.hasOwnProperty("KeyboardEvent")
		}
		return !1
	}

	function N(e)
	{
		return e.pointerId || 0
	}

	function z(e)
	{
		if (F("pointerevents")) return e;
		if (F("touchevents")) switch (e)
		{
		case "pointerover":
		case "pointerdown":
			return "touchstart";
		case "pointerout":
		case "pointerleave":
		case "pointerup":
			return "touchend";
		case "pointermove":
			return "touchmove";
		case "click":
			return "click";
		case "dblclick":
			return "dblclick"
		}
		else if (F("mouseevents")) switch (e)
		{
		case "pointerover":
			return "mouseover";
		case "pointerout":
			return "mouseout";
		case "pointerleave":
			return "mouseleave";
		case "pointerdown":
			return "mousedown";
		case "pointermove":
			return "mousemove";
		case "pointerup":
			return "mouseup";
		case "click":
			return "click";
		case "dblclick":
			return "dblclick"
		}
		return e
	}

	function V(e)
	{
		if ("undefined" != typeof Touch && e instanceof Touch) return !0;
		if ("undefined" != typeof PointerEvent && e instanceof PointerEvent && null != e.pointerType) switch (e.pointerType)
		{
		case "touch":
		case "pen":
		case 2:
			return !0;
		case "mouse":
		case 4:
			return !1;
		default:
			return !(e instanceof MouseEvent)
		}
		else if (null != e.type && e.type.match(/^mouse/)) return !1;
		return !0
	}

	function q(e, t, i)
	{
		e.style[t] = i
	}

	function W(e)
	{
		if (e.composedPath)
		{
			const t = e.composedPath();
			return 0 === t.length ? null : t[0]
		}
		return e.target
	}

	function Y(e, t)
	{
		e.style.pointerEvents = t ? "auto" : "none"
	}

	function G(e)
	{
		if (void 0 !== e.key) return e.key;
		switch (e.keyCode)
		{
		case 9:
			return "Tab";
		case 13:
			return "Enter";
		case 16:
			return "Shift";
		case 17:
			return "Control";
		case 27:
			return "Escape";
		case 32:
			return " ";
		case 37:
			return "ArrowLeft";
		case 38:
			return "ArrowUp";
		case 39:
			return "ArrowRight";
		case 40:
			return "ArrowDown";
		case 46:
			return "Delete"
		}
		return "" + e.keyCode
	}

	function U(e, t)
	{
		return d(e) ? e : null != e && d(e.value) && d(t) ? t * e.value : 0
	}

	function X(e, t = 0, i = "0")
	{
		return "string" != typeof e && (e = e.toString()), t > e.length ? Array(t - e.length + 1).join(i) + e : e
	}

	function K(e)
	{
		return function (e)
		{
			return e.replace(/^[\s]*/, "")
		}(function (e)
		{
			return e.replace(/[\s]*$/, "")
		}(e))
	}

	function $(e)
	{
		return e.replace(/\/(date|number|duration)$/i, "")
	}

	function Z(e)
	{
		return e ? e.replace(/<[^>]*>/g, "") : e
	}

	function J(e)
	{
		return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
	}

	function Q(e, t = !1)
	{
		const i = new Date(e.getFullYear(), 0, 0),
			s = e.getTime() - i.getTime() + 60 * (i.getTimezoneOffset() - e.getTimezoneOffset()) * 1e3;
		return Math.floor(s / 864e5)
	}

	function ee(e, t = !1)
	{
		const i = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())),
			s = i.getUTCDay() || 7;
		i.setUTCDate(i.getUTCDate() + 4 - s);
		const r = new Date(Date.UTC(i.getUTCFullYear(), 0, 1));
		return Math.ceil(((i.getTime() - r.getTime()) / 864e5 + 1) / 7)
	}

	function te(e, t = !1)
	{
		const i = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())),
			s = i.getUTCDay() || 7;
		return i.setUTCDate(i.getUTCDate() + 4 - s), new Date(Date.UTC(i.getUTCFullYear(), 0, 1)).getFullYear()
	}

	function ie(e, t = !1)
	{
		const i = ee(new Date(e.getFullYear(), e.getMonth(), 1), t);
		let s = ee(e, t);
		return 1 == s && (s = 53), s - i + 1
	}

	function se(e, t)
	{
		return e > 12 ? e -= 12 : 0 === e && (e = 12), null != t ? e + (t - 1) : e
	}

	function re(e, t = !1, i = !1, s = !1, r)
	{
		if (s) return t ? "Coordinated Universal Time" : "UTC";
		if (r)
		{
			const i = e.toLocaleString("en-US",
			{
				timeZone: r
			});
			return K(e.toLocaleString("en-US",
			{
				timeZone: r,
				timeZoneName: t ? "long" : "short"
			}).substr(i.length))
		}
		let a = e.toLocaleString("UTC"),
			n = e.toLocaleString("UTC",
			{
				timeZoneName: t ? "long" : "short"
			}).substr(a.length);
		return !1 === i && (n = n.replace(/ (standard|daylight|summer|winter) /i, " ")), K(n)
	}

	function ae(e, t)
	{
		const i = t || new Date(Date.UTC(2012, 0, 1, 0, 0, 0, 0)),
			s = new Date(i.toLocaleString("en-US",
			{
				timeZone: "UTC"
			}));
		return (new Date(i.toLocaleString("en-US",
		{
			timeZone: e
		})).getTime() - s.getTime()) / 6e4 * -1
	}

	function ne(e)
	{
		let t, i, s, r = e.h,
			a = e.s,
			n = e.l;
		if (0 == a) t = i = s = n;
		else
		{
			let e = function (e, t, i)
				{
					return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + 6 * (t - e) * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
				},
				o = n < .5 ? n * (1 + a) : n + a - n * a,
				l = 2 * n - o;
			t = e(l, o, r + 1 / 3), i = e(l, o, r), s = e(l, o, r - 1 / 3)
		}
		return {
			r: Math.round(255 * t),
			g: Math.round(255 * i),
			b: Math.round(255 * s)
		}
	}

	function oe(e)
	{
		let t = e.r / 255,
			i = e.g / 255,
			s = e.b / 255,
			r = Math.max(t, i, s),
			a = Math.min(t, i, s),
			n = 0,
			o = 0,
			l = (r + a) / 2;
		if (r === a) n = o = 0;
		else
		{
			let e = r - a;
			switch (o = l > .5 ? e / (2 - r - a) : e / (r + a), r)
			{
			case t:
				n = (i - s) / e + (i < s ? 6 : 0);
				break;
			case i:
				n = (s - t) / e + 2;
				break;
			case s:
				n = (t - i) / e + 4
			}
			n /= 6
		}
		return {
			h: n,
			s: o,
			l
		}
	}

	function le(e, t)
	{
		let i = t > 0 ? 255 - e : e;
		return Math.round(i * t)
	}

	function he(e)
	{
		return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 >= 128
	}

	function ce(e, t)
	{
		return e || (e = []), [...e, ...t].filter(((e, t, i) => i.indexOf(e) === t))
	}

	function ue(e)
	{
		return "#" === e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0].repeat(2) + e[1].repeat(2) + e[2].repeat(2)), parseInt(e, 16)
	}

	function de(e)
	{
		return pe.fromAny(e)
	}
	class pe
	{
		constructor(e)
		{
			Object.defineProperty(this, "_hex",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this._hex = 0 | e
		}
		get hex()
		{
			return this._hex
		}
		get r()
		{
			return this._hex >>> 16
		}
		get g()
		{
			return this._hex >> 8 & 255
		}
		get b()
		{
			return 255 & this._hex
		}
		toCSS(e = 1)
		{
			return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + e + ")"
		}
		toCSSHex()
		{
			return "#" + X(this.r.toString(16), 2) + X(this.g.toString(16), 2) + X(this.b.toString(16), 2)
		}
		toHSL(e = 1)
		{
			return oe(
			{
				r: this.r,
				g: this.g,
				b: this.b,
				a: e
			})
		}
		static fromHSL(e, t, i)
		{
			const s = ne(
			{
				h: e,
				s: t,
				l: i
			});
			return this.fromRGB(s.r, s.g, s.b)
		}
		toString()
		{
			return this.toCSSHex()
		}
		static fromHex(e)
		{
			return new pe(e)
		}
		static fromRGB(e, t, i)
		{
			return new pe((0 | i) + (t << 8) + (e << 16))
		}
		static fromString(e)
		{
			return new pe(ue(e))
		}
		static fromCSS(e)
		{
			return new pe(function (e)
			{
				let t = (e = e.replace(/[ ]/g, "")).match(/^rgb\(([0-9]*),([0-9]*),([0-9]*)\)/i);
				if (t) t.push("1");
				else if (t = e.match(/^rgba\(([0-9]*),([0-9]*),([0-9]*),([.0-9]*)\)/i), !t) return 0;
				let i = "";
				for (let e = 1; e <= 3; e++)
				{
					let s = parseInt(t[e]).toString(16);
					1 == s.length && (s = "0" + s), i += s
				}
				return ue(i)
			}(e))
		}
		static fromAny(e)
		{
			if (u(e))
			{
				if ("#" == e[0]) return pe.fromString(e);
				if ("rgb" == e.substr(0, 3)) return pe.fromCSS(e)
			}
			else
			{
				if (d(e)) return pe.fromHex(e);
				if (e instanceof pe) return pe.fromHex(e.hex)
			}
			throw new Error("Unknown color syntax: " + e)
		}
		static alternative(e, t, i)
		{
			const s = function (e, t = {
				r: 255,
				g: 255,
				b: 255
			}, i = {
				r: 255,
				g: 255,
				b: 255
			})
			{
				let s = t,
					r = i;
				return he(i) && (s = i, r = t), he(e) ? r : s
			}(
			{
				r: e.r,
				g: e.g,
				b: e.b
			}, t ?
			{
				r: t.r,
				g: t.g,
				b: t.b
			} : void 0, i ?
			{
				r: i.r,
				g: i.g,
				b: i.b
			} : void 0);
			return this.fromRGB(s.r, s.g, s.b)
		}
		static interpolate(e, t, i, s = "rgb")
		{
			if ("hsl" == s)
			{
				const s = t.toHSL(),
					r = i.toHSL();
				return pe.fromHSL(me(e, s.h, r.h), me(e, s.s, r.s), me(e, s.l, r.l))
			}
			return pe.fromRGB(me(e, t.r, i.r), me(e, t.g, i.g), me(e, t.b, i.b))
		}
		static lighten(e, t)
		{
			const i = function (e, t)
			{
				return e ?
				{
					r: Math.max(0, Math.min(255, e.r + le(e.r, t))),
					g: Math.max(0, Math.min(255, e.g + le(e.g, t))),
					b: Math.max(0, Math.min(255, e.b + le(e.b, t))),
					a: e.a
				} : e
			}(
			{
				r: e.r,
				g: e.g,
				b: e.b
			}, t);
			return pe.fromRGB(i.r, i.g, i.b)
		}
		static brighten(e, t)
		{
			const i = function (e, t)
			{
				if (e)
				{
					let i = le(Math.min(Math.max(e.r, e.g, e.b), 230), t);
					return {
						r: Math.max(0, Math.min(255, Math.round(e.r + i))),
						g: Math.max(0, Math.min(255, Math.round(e.g + i))),
						b: Math.max(0, Math.min(255, Math.round(e.b + i))),
						a: e.a
					}
				}
				return e
			}(
			{
				r: e.r,
				g: e.g,
				b: e.b
			}, t);
			return pe.fromRGB(i.r, i.g, i.b)
		}
		static saturate(e, t)
		{
			const i = function (e, t)
			{
				if (void 0 === e || 1 == t) return e;
				let i = oe(e);
				return i.s = t, ne(i)
			}(
			{
				r: e.r,
				g: e.g,
				b: e.b
			}, t);
			return pe.fromRGB(i.r, i.g, i.b)
		}
	}

	function ge(t)
	{
		return e(this, void 0, void 0, (function* ()
		{
			if (void 0 !== t)
			{
				const e = [];
				C(t, ((t, i) =>
				{
					e.push(i.waitForStop())
				})), yield Promise.all(e)
			}
		}))
	}

	function me(e, t, i)
	{
		return t + e * (i - t)
	}

	function fe(e, t, i)
	{
		return e >= 1 ? i : t
	}

	function be(e, i, s)
	{
		return new t(me(e, i.percent, s.percent))
	}

	function _e(e, t, i)
	{
		return pe.interpolate(e, t, i)
	}
	var ve;
	! function (e)
	{
		e[e.Stopped = 0] = "Stopped", e[e.Playing = 1] = "Playing", e[e.Paused = 2] = "Paused"
	}(ve || (ve = {}));
	class ye
	{
		constructor()
		{
			Object.defineProperty(this, "_listeners",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_killed",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_disabled",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_iterating",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_enabled",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_disposed",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this._listeners = [], this._killed = [], this._disabled = {}, this._iterating = 0, this._enabled = !0, this._disposed = !1
		}
		isDisposed()
		{
			return this._disposed
		}
		dispose()
		{
			if (!this._disposed)
			{
				this._disposed = !0;
				const e = this._listeners;
				this._iterating = 1, this._listeners = null, this._disabled = null;
				try
				{
					_(e, (e =>
					{
						e.disposer.dispose()
					}))
				}
				finally
				{
					this._killed = null, this._iterating = null
				}
			}
		}
		hasListeners()
		{
			return 0 !== this._listeners.length
		}
		hasListenersByType(e)
		{
			return function (t)
			{
				const i = t.length;
				for (let r = 0; r < i; ++r)
					if ((null === (s = t[r]).type || s.type === e) && !s.killed) return !0;
				var s;
				return !1
			}(this._listeners)
		}
		enable()
		{
			this._enabled = !0
		}
		disable()
		{
			this._enabled = !1
		}
		enableType(e)
		{
			delete this._disabled[e]
		}
		disableType(e, t = 1 / 0)
		{
			this._disabled[e] = t
		}
		_removeListener(e)
		{
			if (0 === this._iterating)
			{
				const t = this._listeners.indexOf(e);
				if (-1 === t) throw new Error("Invalid state: could not remove listener");
				this._listeners.splice(t, 1)
			}
			else this._killed.push(e)
		}
		_removeExistingListener(e, t, i, s)
		{
			if (this._disposed) throw new Error("EventDispatcher is disposed");
			this._eachListener((r =>
			{
				r.once !== e || r.type !== t || void 0 !== i && r.callback !== i || r.context !== s || r.disposer.dispose()
			}))
		}
		isEnabled(e)
		{
			if (this._disposed) throw new Error("EventDispatcher is disposed");
			return this._enabled && this._listeners.length > 0 && this.hasListenersByType(e) && void 0 === this._disabled[e]
		}
		removeType(e)
		{
			if (this._disposed) throw new Error("EventDispatcher is disposed");
			this._eachListener((t =>
			{
				t.type === e && t.disposer.dispose()
			}))
		}
		has(e, t, i)
		{
			return -1 !== T(this._listeners, (s => !0 !== s.once && s.type === e && (void 0 === t || s.callback === t) && s.context === i))
		}
		_shouldDispatch(e)
		{
			if (this._disposed) throw new Error("EventDispatcher is disposed");
			const t = this._disabled[e];
			return d(t) ? (t <= 1 ? delete this._disabled[e] : --this._disabled[e], !1) : this._enabled
		}
		_eachListener(e)
		{
			++this._iterating;
			try
			{
				_(this._listeners, e)
			}
			finally
			{
				--this._iterating, 0 === this._iterating && 0 !== this._killed.length && (_(this._killed, (e =>
				{
					this._removeListener(e)
				})), this._killed.length = 0)
			}
		}
		dispatch(e, t)
		{
			this._shouldDispatch(e) && this._eachListener((i =>
			{
				i.killed || null !== i.type && i.type !== e || i.dispatch(e, t)
			}))
		}
		_on(e, t, i, s, r, a)
		{
			if (this._disposed) throw new Error("EventDispatcher is disposed");
			this._removeExistingListener(e, t, i, s);
			const n = {
				type: t,
				callback: i,
				context: s,
				shouldClone: r,
				dispatch: a,
				killed: !1,
				once: e,
				disposer: new A((() =>
				{
					n.killed = !0, this._removeListener(n)
				}))
			};
			return this._listeners.push(n), n
		}
		onAll(e, t, i = !0)
		{
			return this._on(!1, null, e, t, i, ((i, s) => e.call(t, s))).disposer
		}
		on(e, t, i, s = !0)
		{
			return this._on(!1, e, t, i, s, ((e, s) => t.call(i, s))).disposer
		}
		once(e, t, i, s = !0)
		{
			const r = this._on(!0, e, t, i, s, ((e, s) =>
			{
				r.disposer.dispose(), t.call(i, s)
			}));
			return r.disposer
		}
		off(e, t, i)
		{
			this._removeExistingListener(!1, e, t, i)
		}
		copyFrom(e)
		{
			if (this._disposed) throw new Error("EventDispatcher is disposed");
			if (e === this) throw new Error("Cannot copyFrom the same TargetedEventDispatcher");
			const t = [];
			return _(e._listeners, (e =>
			{
				!e.killed && e.shouldClone && (null === e.type ? t.push(this.onAll(e.callback, e.context)) : e.once ? t.push(this.once(e.type, e.callback, e.context)) : t.push(this.on(e.type, e.callback, e.context)))
			})), new L(t)
		}
	}

	function we(e, t)
	{
		if (!(e >= 0 && e < t)) throw new Error("Index out of bounds: " + e)
	}
	class xe
	{
		constructor(e = [])
		{
			Object.defineProperty(this, "_values",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "events",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: new ye
			}), this._values = e
		}
		get values()
		{
			return this._values
		}
		contains(e)
		{
			return -1 !== this._values.indexOf(e)
		}
		removeValue(e)
		{
			let t = 0,
				i = this._values.length;
			for (; t < i;) this._values[t] === e ? (this.removeIndex(t), --i) : ++t
		}
		indexOf(e)
		{
			return f(this._values, e)
		}
		get length()
		{
			return this._values.length
		}
		hasIndex(e)
		{
			return e >= 0 && e < this._values.length
		}
		getIndex(e)
		{
			return this._values[e]
		}
		_onPush(e)
		{
			this.events.isEnabled("push") && this.events.dispatch("push",
			{
				type: "push",
				target: this,
				newValue: e
			})
		}
		_onInsertIndex(e, t)
		{
			this.events.isEnabled("insertIndex") && this.events.dispatch("insertIndex",
			{
				type: "insertIndex",
				target: this,
				index: e,
				newValue: t
			})
		}
		_onSetIndex(e, t, i)
		{
			this.events.isEnabled("setIndex") && this.events.dispatch("setIndex",
			{
				type: "setIndex",
				target: this,
				index: e,
				oldValue: t,
				newValue: i
			})
		}
		_onSwap(e, t)
		{
			this.events.isEnabled("swap") && this.events.dispatch("swap",
			{
				type: "swap",
				target: this,
				a: e,
				b: t
			})
		}
		_onRemoveIndex(e, t)
		{
			this.events.isEnabled("removeIndex") && this.events.dispatch("removeIndex",
			{
				type: "removeIndex",
				target: this,
				index: e,
				oldValue: t
			})
		}
		_onMoveIndex(e, t, i)
		{
			this.events.isEnabled("moveIndex") && this.events.dispatch("moveIndex",
			{
				type: "moveIndex",
				target: this,
				oldIndex: e,
				newIndex: t,
				value: i
			})
		}
		_onClear(e)
		{
			this.events.isEnabled("clear") && this.events.dispatch("clear",
			{
				type: "clear",
				target: this,
				oldValues: e
			})
		}
		setIndex(e, t)
		{
			we(e, this._values.length);
			const i = this._values[e];
			return i !== t && (this._values[e] = t, this._onSetIndex(e, i, t)), i
		}
		insertIndex(e, t)
		{
			return we(e, this._values.length + 1), P(this._values, e, t), this._onInsertIndex(e, t), t
		}
		swap(e, t)
		{
			const i = this._values.length;
			if (we(e, i), we(t, i), e !== t)
			{
				const i = this._values[e],
					s = this._values[t];
				this._values[e] = s, this._values[t] = i, this._onSwap(i, s)
			}
		}
		removeIndex(e)
		{
			we(e, this._values.length);
			const t = this._values[e];
			return D(this._values, e), this._onRemoveIndex(e, t), t
		}
		moveValue(e, t)
		{
			let i = this.indexOf(e);
			if (-1 !== i)
				if (D(this._values, i), null == t)
				{
					const t = this._values.length;
					this._values.push(e), this._onMoveIndex(i, t, e)
				}
			else P(this._values, t, e), this._onMoveIndex(i, t, e);
			else null == t ? (this._values.push(e), this._onPush(e)) : (P(this._values, t, e), this._onInsertIndex(t, e));
			return e
		}
		push(e)
		{
			return this._values.push(e), this._onPush(e), e
		}
		unshift(e)
		{
			return this.insertIndex(0, e), e
		}
		pushAll(e)
		{
			_(e, (e =>
			{
				this.push(e)
			}))
		}
		copyFrom(e)
		{
			this.pushAll(e._values)
		}
		pop()
		{
			return this._values.length - 1 < 0 ? void 0 : this.removeIndex(this._values.length - 1)
		}
		shift()
		{
			return this._values.length ? this.removeIndex(0) : void 0
		}
		setAll(e)
		{
			const t = this._values;
			this._values = [], this._onClear(t), _(e, (e =>
			{
				this._values.push(e), this._onPush(e)
			}))
		}
		clear()
		{
			this.setAll([])
		}*[Symbol.iterator]()
		{
			const e = this._values.length;
			for (let t = 0; t < e; ++t) yield this._values[t]
		}
		each(e)
		{
			_(this._values, e)
		}
		eachReverse(e)
		{
			v(this._values, e)
		}
	}
	class ke extends xe
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "autoDispose",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), Object.defineProperty(this, "_disposed",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			})
		}
		swap(e, t)
		{
			const i = this.autoDispose;
			this.autoDispose = !1, super.swap(e, t), this.autoDispose = i
		}
		_onSetIndex(e, t, i)
		{
			this.autoDispose && t.dispose(), super._onSetIndex(e, t, i)
		}
		_onRemoveIndex(e, t)
		{
			this.autoDispose && t.dispose(), super._onRemoveIndex(e, t)
		}
		_onClear(e)
		{
			this.autoDispose && _(e, (e =>
			{
				e.dispose()
			})), super._onClear(e)
		}
		_dispose()
		{
			this.autoDispose && _(this._values, (e =>
			{
				e.dispose()
			}))
		}
		isDisposed()
		{
			return this._disposed
		}
		dispose()
		{
			this._disposed || (this._disposed = !0, this._dispose())
		}
	}
	class Pe extends ke
	{
		constructor(e, t)
		{
			super(), Object.defineProperty(this, "template",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "make",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this.template = e, this.make = t
		}
		_dispose()
		{
			super._dispose(), this.autoDispose && this.template.dispose()
		}
	}
	class De extends xe
	{
		constructor(e)
		{
			super(), Object.defineProperty(this, "_disposed",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_container",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_events",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this._container = e, this._events = this.events.onAll((e =>
			{
				if ("clear" === e.type) _(e.oldValues, (e =>
				{
					this._onRemoved(e)
				}));
				else if ("push" === e.type) this._onInserted(e.newValue);
				else if ("setIndex" === e.type) this._onRemoved(e.oldValue), this._onInserted(e.newValue, e.index);
				else if ("insertIndex" === e.type) this._onInserted(e.newValue, e.index);
				else if ("removeIndex" === e.type) this._onRemoved(e.oldValue);
				else
				{
					if ("moveIndex" !== e.type) throw new Error("Unknown IListEvent type");
					this._onRemoved(e.value), this._onInserted(e.value, e.newIndex)
				}
			}))
		}
		_onInserted(e, t)
		{
			e._setParent(this._container, !0);
			const i = this._container._childrenDisplay;
			void 0 === t ? i.addChild(e._display) : i.addChildAt(e._display, t)
		}
		_onRemoved(e)
		{
			this._container._childrenDisplay.removeChild(e._display), this._container.markDirtyBounds(), this._container.markDirty()
		}
		isDisposed()
		{
			return this._disposed
		}
		dispose()
		{
			this._disposed || (this._disposed = !0, this._events.dispose(), _(this.values, (e =>
			{
				e.dispose()
			})))
		}
	}

	function Te(e)
	{
		return e
	}

	function Oe(e)
	{
		return e * e * e
	}

	function Se(e)
	{
		return function (t)
		{
			return 1 - e(1 - t)
		}
	}
	Math.PI;
	Math.asin(1);
	class Ee
	{
		constructor(e, t)
		{
			Object.defineProperty(this, "_entity",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_settings",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_userSettings",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), this._entity = e, this._settings = t, C(t, (e =>
			{
				this._userSettings[e] = !0
			}))
		}
		get(e, t)
		{
			const i = this._settings[e];
			return void 0 !== i ? i : t
		}
		setRaw(e, t)
		{
			this._settings[e] = t
		}
		set(e, t)
		{
			this._userSettings[e] = !0, this.setRaw(e, t)
		}
		remove(e)
		{
			delete this._userSettings[e], delete this._settings[e]
		}
		setAll(e)
		{
			E(e).forEach((t =>
			{
				this.set(t, e[t])
			}))
		}
		_eachSetting(e)
		{
			C(this._settings, e)
		}
		apply()
		{
			const e = {
					stateAnimationEasing: !0,
					stateAnimationDuration: !0
				},
				t = this._entity.states.lookup("default");
			this._eachSetting(((i, s) =>
			{
				e[i] || (e[i] = !0, this !== t && (i in t._settings || (t._settings[i] = this._entity.get(i))), this._entity.set(i, s))
			}))
		}
		applyAnimate(e)
		{
			null == e && (e = this._settings.stateAnimationDuration), null == e && (e = this.get("stateAnimationDuration", this._entity.get("stateAnimationDuration", 0)));
			let t = this._settings.stateAnimationEasing;
			null == t && (t = this.get("stateAnimationEasing", this._entity.get("stateAnimationEasing", Oe)));
			const i = this._entity.states.lookup("default"),
				s = {
					stateAnimationEasing: !0,
					stateAnimationDuration: !0
				},
				r = {};
			return this._eachSetting(((a, n) =>
			{
				if (!s[a])
				{
					s[a] = !0, this != i && (a in i._settings || (i._settings[a] = this._entity.get(a)));
					const o = this._entity.animate(
					{
						key: a,
						to: n,
						duration: e,
						easing: t
					});
					o && (r[a] = o)
				}
			})), r
		}
	}
	class Ce
	{
		constructor(e)
		{
			Object.defineProperty(this, "_states",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "_entity",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this._entity = e
		}
		lookup(e)
		{
			return this._states[e]
		}
		create(e, t)
		{
			const i = this._states[e];
			if (i) return i.setAll(t), i;
			{
				const i = new Ee(this._entity, t);
				return this._states[e] = i, i
			}
		}
		remove(e)
		{
			delete this._states[e]
		}
		apply(e)
		{
			const t = this._states[e];
			t && t.apply(), this._entity._applyState(e)
		}
		applyAnimate(e, t)
		{
			let i;
			const s = this._states[e];
			return s && (i = s.applyAnimate(t)), this._entity._applyStateAnimated(e, t), i
		}
	}
	const je = new class
	{
		constructor()
		{
			Object.defineProperty(this, "version",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: "5.12.0"
			}), Object.defineProperty(this, "licenses",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			}), Object.defineProperty(this, "entitiesById",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "rootElements",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			})
		}
	};

	function Me(e, t)
	{
		return e === t ? 0 : e < t ? -1 : 1
	}

	function Ae(e, t, i)
	{
		const s = e.length,
			r = t.length,
			a = Math.min(s, r);
		for (let s = 0; s < a; ++s)
		{
			const r = i(e[s], t[s]);
			if (0 !== r) return r
		}
		return Me(s, r)
	}
	class Be
	{
		constructor(e)
		{
			Object.defineProperty(this, "_entity",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_callbacks",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "_disabled",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), this._entity = e
		}
		add(e, t)
		{
			let i = this._callbacks[e];
			return void 0 === i && (i = this._callbacks[e] = []), i.push(t), this._entity._markDirtyKey(e), new A((() =>
			{
				x(i, t) && this._entity._markDirtyKey(e)
			}))
		}
		remove(e)
		{
			const t = this._callbacks[e];
			void 0 !== t && (delete this._callbacks[e], 0 !== t.length && this._entity._markDirtyKey(e))
		}
		enable(e)
		{
			this._disabled[e] && (delete this._disabled[e], this._entity._markDirtyKey(e))
		}
		disable(e)
		{
			this._disabled[e] || (this._disabled[e] = !0, this._entity._markDirtyKey(e))
		}
		fold(e, t)
		{
			if (!this._disabled[e])
			{
				const i = this._callbacks[e];
				if (void 0 !== i)
					for (let s = 0, r = i.length; s < r; ++s) t = i[s](t, this._entity, e)
			}
			return t
		}
	}
	class Le
	{
		constructor(e, i, s, r, a, n, o)
		{
			Object.defineProperty(this, "_animation",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_from",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_to",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_duration",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_easing",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_loops",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_interpolate",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_oldTime",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_time",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_stopped",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_playing",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), Object.defineProperty(this, "events",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: new ye
			}), this._animation = e, this._from = i, this._to = s, this._duration = r, this._easing = a, this._loops = n, this._interpolate = function (e, i)
			{
				return "number" == typeof e && "number" == typeof i ? me : e instanceof t && i instanceof t ? be : e instanceof pe && i instanceof pe ? _e : fe
			}(i, s), this._oldTime = o
		}
		get to()
		{
			return this._to
		}
		get from()
		{
			return this._from
		}
		get playing()
		{
			return this._playing
		}
		get stopped()
		{
			return this._stopped
		}
		stop()
		{
			this._stopped || (this._stopped = !0, this._playing = !1, this.events.isEnabled("stopped") && this.events.dispatch("stopped",
			{
				type: "stopped",
				target: this
			}))
		}
		pause()
		{
			this._playing = !1, this._oldTime = null
		}
		play()
		{
			this._stopped || this._playing || (this._playing = !0, this._animation._startAnimation())
		}
		get percentage()
		{
			return this._time / this._duration
		}
		waitForStop()
		{
			return new Promise(((e, t) =>
			{
				if (this._stopped) e();
				else
				{
					const t = () =>
						{
							i.dispose(), e()
						},
						i = this.events.on("stopped", t)
				}
			}))
		}
		_checkEnded()
		{
			return !(this._loops > 1 && (--this._loops, 1))
		}
		_run(e)
		{
			null !== this._oldTime && (this._time += e - this._oldTime, this._time > this._duration && (this._time = this._duration)), this._oldTime = e
		}
		_reset(e)
		{
			this._oldTime = e, this._time = 0
		}
		_value(e)
		{
			return this._interpolate(this._easing(e), this._from, this._to)
		}
	}
	let Re = 0;
	class Ie
	{
		constructor(e)
		{
			Object.defineProperty(this, "uid",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: ++Re
			}), Object.defineProperty(this, "_settings",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_privateSettings",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "_settingEvents",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "_privateSettingEvents",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "_prevSettings",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "_prevPrivateSettings",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "_animatingSettings",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "_animatingPrivateSettings",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "_disposed",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_userProperties",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "enableDispose",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), this._settings = e
		}
		_checkDirty()
		{
			E(this._settings).forEach((e =>
			{
				this._userProperties[e] = !0, this._markDirtyKey(e)
			}))
		}
		resetUserSettings()
		{
			this._userProperties = {}
		}
		_runAnimation(e)
		{
			let t = ve.Stopped;
			if (!this.isDisposed())
			{
				let i = !1,
					s = !1;
				C(this._animatingSettings, ((t, r) =>
				{
					if (r.stopped) this._stopAnimation(t);
					else if (r.playing)
					{
						r._run(e);
						const s = r.percentage;
						s >= 1 ? r._checkEnded() ? this.set(t, r._value(1)) : (i = !0, r._reset(e), this._set(t, r._value(1))) : (i = !0, this._set(t, r._value(s)))
					}
					else s = !0
				})), C(this._animatingPrivateSettings, ((t, r) =>
				{
					if (r.stopped) this._stopAnimationPrivate(t);
					else if (r.playing)
					{
						r._run(e);
						const s = r.percentage;
						s >= 1 ? r._checkEnded() ? this.setPrivate(t, r._value(1)) : (i = !0, r._reset(e), this._setPrivate(t, r._value(1))) : (i = !0, this._setPrivate(t, r._value(s)))
					}
					else s = !0
				})), i ? t = ve.Playing : s && (t = ve.Paused)
			}
			return t
		}
		_markDirtyKey(e)
		{
			this.markDirty()
		}
		_markDirtyPrivateKey(e)
		{
			this.markDirty()
		}
		on(e, t)
		{
			let i = this._settingEvents[e];
			return void 0 === i && (i = this._settingEvents[e] = []), i.push(t), new A((() =>
			{
				x(i, t), 0 === i.length && delete this._settingEvents[e]
			}))
		}
		off(e, t)
		{
			let i = this._settingEvents[e];
			void 0 !== i && void 0 !== t ? x(i, t) : delete this._settingEvents[e]
		}
		onPrivate(e, t)
		{
			let i = this._privateSettingEvents[e];
			return void 0 === i && (i = this._privateSettingEvents[e] = []), i.push(t), new A((() =>
			{
				x(i, t), 0 === i.length && delete this._privateSettingEvents[e]
			}))
		}
		offPrivate(e, t)
		{
			let i = this._privateSettingEvents[e];
			void 0 !== i && void 0 !== t ? x(i, t) : delete this._privateSettingEvents[e]
		}
		getRaw(e, t)
		{
			const i = this._settings[e];
			return void 0 !== i ? i : t
		}
		has(e)
		{
			return e in this._settings
		}
		get(e, t)
		{
			return this.getRaw(e, t)
		}
		_sendKeyEvent(e, t)
		{
			const i = this._settingEvents[e];
			void 0 !== i && _(i, (i =>
			{
				i(t, this, e)
			}))
		}
		_sendPrivateKeyEvent(e, t)
		{
			const i = this._privateSettingEvents[e];
			void 0 !== i && _(i, (i =>
			{
				i(t, this, e)
			}))
		}
		_setRaw(e, t, i)
		{
			this._prevSettings[e] = t, this._sendKeyEvent(e, i)
		}
		setRaw(e, t)
		{
			const i = this._settings[e];
			this._settings[e] = t, i !== t && this._setRaw(e, i, t)
		}
		_set(e, t)
		{
			const i = this._settings[e];
			this._settings[e] = t, i !== t && (this._setRaw(e, i, t), this._markDirtyKey(e))
		}
		_stopAnimation(e)
		{
			const t = this._animatingSettings[e];
			t && (delete this._animatingSettings[e], t.stop())
		}
		set(e, t)
		{
			return this._set(e, t), this._stopAnimation(e), t
		}
		remove(e)
		{
			e in this._settings && (this._prevSettings[e] = this._settings[e], delete this._settings[e], this._sendKeyEvent(e, void 0), this._markDirtyKey(e)), this._stopAnimation(e)
		}
		removeAll()
		{
			_(E(this._settings), (e =>
			{
				this.remove(e)
			}))
		}
		getPrivate(e, t)
		{
			const i = this._privateSettings[e];
			return void 0 !== i ? i : t
		}
		_setPrivateRaw(e, t, i)
		{
			this._prevPrivateSettings[e] = t, this._sendPrivateKeyEvent(e, i)
		}
		setPrivateRaw(e, t)
		{
			const i = this._privateSettings[e];
			this._privateSettings[e] = t, i !== t && this._setPrivateRaw(e, i, t)
		}
		_setPrivate(e, t)
		{
			const i = this._privateSettings[e];
			this._privateSettings[e] = t, i !== t && (this._setPrivateRaw(e, i, t), this._markDirtyPrivateKey(e))
		}
		_stopAnimationPrivate(e)
		{
			const t = this._animatingPrivateSettings[e];
			t && (t.stop(), delete this._animatingPrivateSettings[e])
		}
		setPrivate(e, t)
		{
			return this._setPrivate(e, t), this._stopAnimationPrivate(e), t
		}
		removePrivate(e)
		{
			e in this._privateSettings && (this._prevPrivateSettings[e] = this._privateSettings[e], delete this._privateSettings[e], this._markDirtyPrivateKey(e)), this._stopAnimationPrivate(e)
		}
		setAll(e)
		{
			C(e, ((e, t) =>
			{
				this.set(e, t)
			}))
		}
		animate(e)
		{
			const t = e.key,
				i = e.to,
				s = e.duration || 0,
				r = e.loops || 1,
				a = void 0 === e.from ? this.get(t) : e.from,
				n = void 0 === e.easing ? Te : e.easing;
			if (0 === s) this.set(t, i);
			else
			{
				if (void 0 !== a && a !== i)
				{
					this.set(t, a);
					const e = this._animatingSettings[t] = new Le(this, a, i, s, n, r, this._animationTime());
					return this._startAnimation(), e
				}
				this.set(t, i)
			}
			const o = new Le(this, a, i, s, n, r, null);
			return o.stop(), o
		}
		animatePrivate(e)
		{
			const t = e.key,
				i = e.to,
				s = e.duration || 0,
				r = e.loops || 1,
				a = void 0 === e.from ? this.getPrivate(t) : e.from,
				n = void 0 === e.easing ? Te : e.easing;
			if (0 === s) this.setPrivate(t, i);
			else
			{
				if (void 0 !== a && a !== i)
				{
					this.setPrivate(t, a);
					const e = this._animatingPrivateSettings[t] = new Le(this, a, i, s, n, r, this._animationTime());
					return this._startAnimation(), e
				}
				this.setPrivate(t, i)
			}
			const o = new Le(this, a, i, s, n, r, null);
			return o.stop(), o
		}
		_dispose()
		{}
		isDisposed()
		{
			return this._disposed
		}
		dispose()
		{
			this.enableDispose && !this._disposed && (this._disposed = !0, this._dispose())
		}
	}
	class He extends Ie
	{
		constructor(e, t, i, s = [])
		{
			if (super(t), Object.defineProperty(this, "_root",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_user_id",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "states",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: new Ce(this)
				}), Object.defineProperty(this, "adapters",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: new Be(this)
				}), Object.defineProperty(this, "events",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: this._createEvents()
				}), Object.defineProperty(this, "_userPrivateProperties",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_dirty",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_dirtyPrivate",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_template",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_templates",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_internalTemplates",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_defaultThemes",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_templateDisposers",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_disposers",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_runSetup",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !0
				}), Object.defineProperty(this, "_disposerProperties",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), !i) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
			this._root = e, this._internalTemplates = s, t.id && this._registerId(t.id)
		}
		static new(e, t, i)
		{
			const s = new this(e, t, !0);
			return s._template = i, s._afterNew(), s
		}
		static _new(e, t, i = [])
		{
			const s = new this(e, t, !0, i);
			return s._afterNew(), s
		}
		_afterNew()
		{
			this._checkDirty();
			let e = !1;
			const t = this._template;
			t && (e = !0, t._setObjectTemplate(this)), _(this._internalTemplates, (t =>
			{
				e = !0, t._setObjectTemplate(this)
			})), e && this._applyTemplates(!1), this.states.create("default",
			{}), this._setDefaults()
		}
		_afterNewApplyThemes()
		{
			this._checkDirty();
			const e = this._template;
			e && e._setObjectTemplate(this), _(this._internalTemplates, (e =>
			{
				e._setObjectTemplate(this)
			})), this.states.create("default",
			{}), this._setDefaults(), this._applyThemes()
		}
		_createEvents()
		{
			return new ye
		}
		get classNames()
		{
			return this.constructor.classNames
		}
		get className()
		{
			return this.constructor.className
		}
		_setDefaults()
		{}
		_setDefaultFn(e, t)
		{
			const i = this.get(e);
			if (i) return i;
			{
				const i = t();
				return this.set(e, i), i
			}
		}
		_setDefault(e, t)
		{
			this.has(e) || super.set(e, t)
		}
		_setRawDefault(e, t)
		{
			this.has(e) || super.setRaw(e, t)
		}
		_clearDirty()
		{
			E(this._dirty).forEach((e =>
			{
				this._dirty[e] = !1
			})), E(this._dirtyPrivate).forEach((e =>
			{
				this._dirtyPrivate[e] = !1
			}))
		}
		isDirty(e)
		{
			return !!this._dirty[e]
		}
		isPrivateDirty(e)
		{
			return !!this._dirtyPrivate[e]
		}
		_markDirtyKey(e)
		{
			this._dirty[e] = !0, super._markDirtyKey(e)
		}
		_markDirtyPrivateKey(e)
		{
			this._dirtyPrivate[e] = !0, super._markDirtyKey(e)
		}
		isType(e)
		{
			return -1 !== this.classNames.indexOf(e)
		}
		_pushPropertyDisposer(e, t)
		{
			let i = this._disposerProperties[e];
			return void 0 === i && (i = this._disposerProperties[e] = []), i.push(t), t
		}
		_disposeProperty(e)
		{
			const t = this._disposerProperties[e];
			void 0 !== t && (_(t, (e =>
			{
				e.dispose()
			})), delete this._disposerProperties[e])
		}
		set template(e)
		{
			const t = this._template;
			t !== e && (this._template = e, t && t._removeObjectTemplate(this), e && e._setObjectTemplate(this), this._applyTemplates())
		}
		get template()
		{
			return this._template
		}
		markDirty()
		{
			this._root._addDirtyEntity(this)
		}
		_startAnimation()
		{
			this._root._addAnimation(this)
		}
		_animationTime()
		{
			return this._root.animationTime
		}
		_applyState(e)
		{}
		_applyStateAnimated(e, t)
		{}
		get(e, t)
		{
			const i = this.adapters.fold(e, this._settings[e]);
			return void 0 !== i ? i : t
		}
		isUserSetting(e)
		{
			return this._userProperties[e] || !1
		}
		set(e, t)
		{
			return this._userProperties[e] = !0, super.set(e, t)
		}
		setRaw(e, t)
		{
			this._userProperties[e] = !0, super.setRaw(e, t)
		}
		_setSoft(e, t)
		{
			return this._userProperties[e] ? t : super.set(e, t)
		}
		remove(e)
		{
			delete this._userProperties[e], this._removeTemplateProperty(e)
		}
		setPrivate(e, t)
		{
			return this._userPrivateProperties[e] = !0, super.setPrivate(e, t)
		}
		setPrivateRaw(e, t)
		{
			this._userPrivateProperties[e] = !0, super.setPrivateRaw(e, t)
		}
		removePrivate(e)
		{
			delete this._userPrivateProperties[e], this._removeTemplatePrivateProperty(e)
		}
		_setTemplateProperty(e, t, i)
		{
			this._userProperties[t] || e === this._findTemplateByKey(t) && super.set(t, i)
		}
		_setTemplatePrivateProperty(e, t, i)
		{
			this._userPrivateProperties[t] || e === this._findTemplateByPrivateKey(t) && super.setPrivate(t, i)
		}
		_removeTemplateProperty(e)
		{
			if (!this._userProperties[e])
			{
				const t = this._findTemplateByKey(e);
				t ? super.set(e, t._settings[e]) : super.remove(e)
			}
		}
		_removeTemplatePrivateProperty(e)
		{
			if (!this._userPrivateProperties[e])
			{
				const t = this._findTemplateByPrivateKey(e);
				t ? super.setPrivate(e, t._privateSettings[e]) : super.removePrivate(e)
			}
		}
		_walkParents(e)
		{
			e(this._root._rootContainer), e(this)
		}
		_applyStateByKey(e)
		{
			const t = this.states.create(e,
				{}),
				i = {};
			this._eachTemplate((s =>
			{
				const r = s.states.lookup(e);
				r && r._apply(t, i)
			})), C(t._settings, (e =>
			{
				i[e] || t._userSettings[e] || t.remove(e)
			}))
		}
		_applyTemplate(e, t)
		{
			this._templateDisposers.push(e._apply(this, t)), C(e._settings, ((e, i) =>
			{
				t.settings[e] || this._userProperties[e] || (t.settings[e] = !0, super.set(e, i))
			})), C(e._privateSettings, ((e, i) =>
			{
				t.privateSettings[e] || this._userPrivateProperties[e] || (t.privateSettings[e] = !0, super.setPrivate(e, i))
			})), this._runSetup && e.setup && (this._runSetup = !1, e.setup(this))
		}
		_findStaticTemplate(e)
		{
			if (this._template && e(this._template)) return this._template
		}
		_eachTemplate(e)
		{
			this._findStaticTemplate((t => (e(t), !1))), v(this._internalTemplates, e), _(this._templates, e)
		}
		_applyTemplates(e = !0)
		{
			e && this._disposeTemplates();
			const t = {
				settings:
				{},
				privateSettings:
				{},
				states:
				{}
			};
			this._eachTemplate((e =>
			{
				this._applyTemplate(e, t)
			})), e && (C(this._settings, (e =>
			{
				this._userProperties[e] || t.settings[e] || super.remove(e)
			})), C(this._privateSettings, (e =>
			{
				this._userPrivateProperties[e] || t.privateSettings[e] || super.removePrivate(e)
			})))
		}
		_findTemplate(e)
		{
			const t = this._findStaticTemplate(e);
			if (void 0 === t)
			{
				const t = function (e, t)
				{
					const i = function (e, t)
					{
						let i = e.length;
						for (; i > 0;)
							if (--i, t(e[i], i)) return i;
						return -1
					}(e, t);
					if (-1 !== i) return e[i]
				}(this._internalTemplates, e);
				return void 0 === t ? O(this._templates, e) : t
			}
			return t
		}
		_findTemplateByKey(e)
		{
			return this._findTemplate((t => e in t._settings))
		}
		_findTemplateByPrivateKey(e)
		{
			return this._findTemplate((t => e in t._privateSettings))
		}
		_disposeTemplates()
		{
			_(this._templateDisposers, (e =>
			{
				e.dispose()
			})), this._templateDisposers.length = 0
		}
		_removeTemplates()
		{
			_(this._templates, (e =>
			{
				e._removeObjectTemplate(this)
			})), this._templates.length = 0
		}
		_applyThemes(e = !1)
		{
			let t = !1;
			const i = [];
			let s = [];
			const r = new Set,
				a = this.get("themeTagsSelf");
			return a && _(a, (e =>
			{
				r.add(e)
			})), this._walkParents((e =>
			{
				e === this._root._rootContainer && (t = !0), e._defaultThemes.length > 0 && i.push(e._defaultThemes);
				const a = e.get("themes");
				a && s.push(a);
				const n = e.get("themeTags");
				n && _(n, (e =>
				{
					r.add(e)
				}))
			})), s = i.concat(s), this._removeTemplates(), (t || e) && v(this.classNames, (e =>
			{
				const t = [];
				_(s, (i =>
				{
					_(i, (i =>
					{
						const s = i._lookupRules(e);
						s && v(s, (e =>
						{
							if (e.tags.every((e => r.has(e))))
							{
								const i = function (e, t)
								{
									let i = 0,
										s = e.length,
										r = !1;
									for (; i < s;)
									{
										const a = i + s >> 1,
											n = t(e[a]);
										n < 0 ? i = a + 1 : 0 === n ? (r = !0, s = a) : s = a
									}
									return {
										found: r,
										index: i
									}
								}(t, (t =>
								{
									const i = Me(e.tags.length, t.tags.length);
									return 0 === i ? Ae(e.tags, t.tags, Me) : i
								}));
								t.splice(i.index, 0, e)
							}
						}))
					}))
				})), _(t, (e =>
				{
					this._templates.push(e.template), e.template._setObjectTemplate(this)
				}))
			})), this._applyTemplates(), (t || e) && (this._runSetup = !1), t || e
		}
		_changed()
		{}
		_beforeChanged()
		{
			if (this.isDirty("id"))
			{
				const e = this.get("id");
				e && this._registerId(e);
				const t = this._prevSettings.id;
				t && (delete this._root.entitiesById[t], delete je.entitiesById[t])
			}
		}
		_registerId(e)
		{
			if (this._root.entitiesById[e] && this._root.entitiesById[e] !== this) throw new Error('An entity with id "' + e + '" already exists.');
			this._root.entitiesById[e] = this, je.entitiesById[e] = this
		}
		_afterChanged()
		{}
		addDisposer(e)
		{
			return this._disposers.push(e), e
		}
		_dispose()
		{
			super._dispose();
			const e = this._template;
			e && e._removeObjectTemplate(this), _(this._internalTemplates, (e =>
			{
				e._removeObjectTemplate(this)
			})), this._removeTemplates(), this._disposeTemplates(), this.events.dispose(), this._disposers.forEach((e =>
			{
				e.dispose()
			})), C(this._disposerProperties, ((e, t) =>
			{
				_(t, (e =>
				{
					e.dispose()
				}))
			}));
			const t = this.get("id");
			t && (delete this._root.entitiesById[t], delete je.entitiesById[t])
		}
		setTimeout(e, t)
		{
			const i = setTimeout((() =>
				{
					this.removeDispose(s), e()
				}), t),
				s = new A((() =>
				{
					clearTimeout(i)
				}));
			return this._disposers.push(s), s
		}
		removeDispose(e)
		{
			if (!this.isDisposed())
			{
				let t = f(this._disposers, e);
				t > -1 && this._disposers.splice(t, 1)
			}
			e.dispose()
		}
		hasTag(e)
		{
			return -1 !== f(this.get("themeTags", []), e)
		}
		addTag(e)
		{
			if (!this.hasTag(e))
			{
				const t = this.get("themeTags", []);
				t.push(e), this.set("themeTags", t)
			}
		}
		removeTag(e)
		{
			if (this.hasTag(e))
			{
				const t = this.get("themeTags", []);
				w(t, e), this.set("themeTags", t)
			}
		}
		_t(e, t, ...i)
		{
			return this._root.language.translate(e, t, ...i)
		}
		get root()
		{
			return this._root
		}
	}

	function Fe(e)
	{
		C(e, ((e, t) =>
		{
			p(t) && "function" == typeof t.dispose && (t.enableDispose = !0, t.dispose())
		}))
	}
	Object.defineProperty(He, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Entity"
	}), Object.defineProperty(He, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: ["Entity"]
	});
	class Ne
	{
		constructor(e, t, i)
		{
			Object.defineProperty(this, "_settings",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_name",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_template",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this._name = e, this._template = t, this._settings = i
		}
		_dispose()
		{
			Fe(this._settings)
		}
		get(e, t)
		{
			const i = this._settings[e];
			return void 0 !== i ? i : t
		}
		set(e, t)
		{
			this._settings[e] = t, this._template._stateChanged(this._name)
		}
		remove(e)
		{
			delete this._settings[e], this._template._stateChanged(this._name)
		}
		setAll(e)
		{
			E(e).forEach((t =>
			{
				this._settings[t] = e[t]
			})), this._template._stateChanged(this._name)
		}
		_apply(e, t)
		{
			C(this._settings, ((i, s) =>
			{
				t[i] || e._userSettings[i] || (t[i] = !0, e.setRaw(i, s))
			}))
		}
	}
	class ze
	{
		constructor(e)
		{
			Object.defineProperty(this, "_template",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_states",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), this._template = e
		}
		_dispose()
		{
			C(this._states, ((e, t) =>
			{
				t._dispose()
			}))
		}
		lookup(e)
		{
			return this._states[e]
		}
		create(e, t)
		{
			const i = this._states[e];
			if (i) return i.setAll(t), i;
			{
				const i = new Ne(e, this._template, t);
				return this._states[e] = i, this._template._stateChanged(e), i
			}
		}
		remove(e)
		{
			delete this._states[e], this._template._stateChanged(e)
		}
		_apply(e, t)
		{
			C(this._states, ((i, s) =>
			{
				let r = t.states[i];
				null == r && (r = t.states[i] = {});
				const a = e.states.create(i,
				{});
				s._apply(a, r)
			}))
		}
	}
	class Ve
	{
		constructor()
		{
			Object.defineProperty(this, "_callbacks",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			})
		}
		add(e, t)
		{
			let i = this._callbacks[e];
			return void 0 === i && (i = this._callbacks[e] = []), i.push(t), new A((() =>
			{
				x(i, t), 0 === i.length && delete this._callbacks[e]
			}))
		}
		remove(e)
		{
			void 0 !== this._callbacks[e] && delete this._callbacks[e]
		}
		_apply(e)
		{
			const t = [];
			return C(this._callbacks, ((i, s) =>
			{
				_(s, (s =>
				{
					t.push(e.adapters.add(i, s))
				}))
			})), new L(t)
		}
	}
	class qe
	{
		constructor(e, t)
		{
			if (Object.defineProperty(this, "_disposed",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "_settings",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_privateSettings",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_settingEvents",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_privateSettingEvents",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_entities",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "states",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: new ze(this)
				}), Object.defineProperty(this, "adapters",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: new Ve
				}), Object.defineProperty(this, "events",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: new ye
				}), Object.defineProperty(this, "setup",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), !t) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
			this._settings = e
		}
		static new(e)
		{
			return new qe(e, !0)
		}
		_dispose()
		{
			Fe(this._settings), Fe(this._privateSettings)
		}
		isDisposed()
		{
			return this._disposed
		}
		dispose()
		{
			this._disposed || (this._disposed = !0, this._dispose())
		}
		_checkDisposed()
		{
			if (this._disposed) throw new Error("Template is disposed")
		}
		get entities()
		{
			return this._entities
		}
		get(e, t)
		{
			this._checkDisposed();
			const i = this._settings[e];
			return void 0 !== i ? i : t
		}
		setRaw(e, t)
		{
			this._checkDisposed(), this._settings[e] = t
		}
		set(e, t)
		{
			this._checkDisposed(), this._settings[e] !== t && (this.setRaw(e, t), this._entities.forEach((i =>
			{
				i._setTemplateProperty(this, e, t)
			})))
		}
		remove(e)
		{
			this._checkDisposed(), e in this._settings && (delete this._settings[e], this._entities.forEach((t =>
			{
				t._removeTemplateProperty(e)
			})))
		}
		removeAll()
		{
			this._checkDisposed(), C(this._settings, ((e, t) =>
			{
				this.remove(e)
			}))
		}
		getPrivate(e, t)
		{
			this._checkDisposed();
			const i = this._privateSettings[e];
			return void 0 !== i ? i : t
		}
		setPrivateRaw(e, t)
		{
			return this._checkDisposed(), this._privateSettings[e] = t, t
		}
		setPrivate(e, t)
		{
			return this._checkDisposed(), this._privateSettings[e] !== t && (this.setPrivateRaw(e, t), this._entities.forEach((i =>
			{
				i._setTemplatePrivateProperty(this, e, t)
			}))), t
		}
		removePrivate(e)
		{
			this._checkDisposed(), e in this._privateSettings && (delete this._privateSettings[e], this._entities.forEach((t =>
			{
				t._removeTemplatePrivateProperty(e)
			})))
		}
		setAll(e)
		{
			this._checkDisposed(), C(e, ((e, t) =>
			{
				this.set(e, t)
			}))
		}
		on(e, t)
		{
			this._checkDisposed();
			let i = this._settingEvents[e];
			return void 0 === i && (i = this._settingEvents[e] = []), i.push(t), new A((() =>
			{
				x(i, t), 0 === i.length && delete this._settingEvents[e]
			}))
		}
		onPrivate(e, t)
		{
			this._checkDisposed();
			let i = this._privateSettingEvents[e];
			return void 0 === i && (i = this._privateSettingEvents[e] = []), i.push(t), new A((() =>
			{
				x(i, t), 0 === i.length && delete this._privateSettingEvents[e]
			}))
		}
		_apply(e, t)
		{
			this._checkDisposed();
			const i = [];
			return C(this._settingEvents, ((t, s) =>
			{
				_(s, (s =>
				{
					i.push(e.on(t, s))
				}))
			})), C(this._privateSettingEvents, ((t, s) =>
			{
				_(s, (s =>
				{
					i.push(e.onPrivate(t, s))
				}))
			})), this.states._apply(e, t), i.push(this.adapters._apply(e)), i.push(e.events.copyFrom(this.events)), new L(i)
		}
		_setObjectTemplate(e)
		{
			this._checkDisposed(), this._entities.push(e)
		}
		_removeObjectTemplate(e)
		{
			w(this._entities, e)
		}
		_stateChanged(e)
		{
			this._checkDisposed(), this._entities.forEach((t =>
			{
				t._applyStateByKey(e)
			}))
		}
	}
	const We = Math.PI,
		Ye = We / 180,
		Ge = 180 / We;

	function Ue(e, t, i)
	{
		return Math.min(Math.max(e, t), i)
	}

	function Xe(e)
	{
		return Math.sin(Ye * e)
	}

	function Ke(e)
	{
		return Math.cos(Ye * e)
	}

	function $e(e)
	{
		return (e %= 360) < 0 && (e += 360), e
	}

	function Ze(e, t, i, s, r)
	{
		let a = Number.MAX_VALUE,
			n = Number.MAX_VALUE,
			o = -Number.MAX_VALUE,
			l = -Number.MAX_VALUE,
			h = [];
		h.push(Je(r, i)), h.push(Je(r, s));
		let c = Math.min(90 * Math.floor(i / 90), 90 * Math.floor(s / 90)),
			u = Math.max(90 * Math.ceil(i / 90), 90 * Math.ceil(s / 90));
		for (let e = c; e <= u; e += 90) e >= i && e <= s && h.push(Je(r, e));
		for (let e = 0; e < h.length; e++)
		{
			let t = h[e];
			t.x < a && (a = t.x), t.y < n && (n = t.y), t.x > o && (o = t.x), t.y > l && (l = t.y)
		}
		return {
			left: e + a,
			top: t + n,
			right: e + o,
			bottom: t + l
		}
	}

	function Je(e, t)
	{
		return {
			x: e * Ke(t),
			y: e * Xe(t)
		}
	}
	class Qe extends ye
	{
		constructor(e)
		{
			super(), Object.defineProperty(this, "_sprite",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_rendererDisposers",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "_dispatchParents",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), this._sprite = e
		}
		_makePointerEvent(e, t)
		{
			return {
				type: e,
				originalEvent: t.event,
				point: t.point,
				simulated: t.simulated,
				native: t.native,
				target: this._sprite
			}
		}
		_onRenderer(e, t)
		{
			this._sprite.set("interactive", !0), this._sprite._display.interactive = !0;
			let i = this._rendererDisposers[e];
			if (void 0 === i)
			{
				const s = this._sprite._display.on(e, (e =>
				{
					t.call(this, e)
				}));
				i = this._rendererDisposers[e] = new R((() =>
				{
					delete this._rendererDisposers[e], s.dispose()
				}))
			}
			return i.increment()
		}
		_on(e, t, i, s, r, a)
		{
			const n = super._on(e, t, i, s, r, a),
				o = Qe.RENDERER_EVENTS[t];
			return void 0 !== o && (n.disposer = new L([n.disposer, this._onRenderer(t, o)])), n
		}
		stopParentDispatch()
		{
			this._dispatchParents = !1
		}
		dispatchParents(e, t)
		{
			const i = this._dispatchParents;
			this._dispatchParents = !0;
			try
			{
				this.dispatch(e, t), this._dispatchParents && this._sprite.parent && this._sprite.parent.events.dispatchParents(e, t)
			}
			finally
			{
				this._dispatchParents = i
			}
		}
	}
	Object.defineProperty(Qe, "RENDERER_EVENTS",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value:
		{
			click: function (e)
			{
				this.isEnabled("click") && !this._sprite.isDragging() && this._sprite._hasDown() && !this._sprite._hasMoved(this._makePointerEvent("click", e)) && this.dispatch("click", this._makePointerEvent("click", e))
			},
			rightclick: function (e)
			{
				this.isEnabled("rightclick") && this.dispatch("rightclick", this._makePointerEvent("rightclick", e))
			},
			middleclick: function (e)
			{
				this.isEnabled("middleclick") && this.dispatch("middleclick", this._makePointerEvent("middleclick", e))
			},
			dblclick: function (e)
			{
				this.dispatchParents("dblclick", this._makePointerEvent("dblclick", e))
			},
			pointerover: function (e)
			{
				const t = this._sprite;
				let i = !0;
				if (t.getPrivate("trustBounds"))
				{
					t._getBounds();
					const s = t.globalBounds();
					if (t.isType("Graphics"))
					{
						const e = t.get("strokeWidth", 1) / 2;
						e >= 1 && (s.left -= e, s.right += e, s.top -= e, s.bottom += e)
					}(function (e, t)
					{
						return e.x >= t.left && e.y >= t.top && e.x <= t.right && e.y <= t.bottom
					})(e.point, s) || (i = !1, t._root._renderer.removeHovering(t._display))
				}
				i && this.isEnabled("pointerover") && this.dispatch("pointerover", this._makePointerEvent("pointerover", e))
			},
			pointerout: function (e)
			{
				this.isEnabled("pointerout") && this.dispatch("pointerout", this._makePointerEvent("pointerout", e))
			},
			pointerdown: function (e)
			{
				this.dispatchParents("pointerdown", this._makePointerEvent("pointerdown", e))
			},
			pointerup: function (e)
			{
				this.isEnabled("pointerup") && this.dispatch("pointerup", this._makePointerEvent("pointerup", e))
			},
			globalpointerup: function (e)
			{
				this.isEnabled("globalpointerup") && this.dispatch("globalpointerup", this._makePointerEvent("globalpointerup", e))
			},
			globalpointermove: function (e)
			{
				this.isEnabled("globalpointermove") && this.dispatch("globalpointermove", this._makePointerEvent("globalpointermove", e))
			},
			wheel: function (e)
			{
				this.dispatchParents("wheel",
				{
					type: "wheel",
					target: this._sprite,
					originalEvent: e.event,
					point: e.point
				})
			}
		}
	});
	class et extends He
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_adjustedLocalBounds",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}
			}), Object.defineProperty(this, "_localBounds",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}
			}), Object.defineProperty(this, "_parent",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_dataItem",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_templateField",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_sizeDirty",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_isDragging",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_dragEvent",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_dragPoint",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_isHidden",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_isShowing",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_isHiding",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_isDown",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_downPoint",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_downPoints",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{}
			}), Object.defineProperty(this, "_toggleDp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_dragDp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_tooltipDp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_hoverDp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_focusDp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_tooltipMoveDp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_tooltipPointerDp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_statesHandled",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			})
		}
		_afterNew()
		{
			this.setPrivateRaw("visible", !0), super._afterNew()
		}
		markDirtyKey(e)
		{
			this._markDirtyKey(e)
		}
		_markDirtyKey(e)
		{
			super._markDirtyKey(e), "x" != e && "y" != e && "dx" != e && "dy" != e || (this.markDirtyBounds(), this._addPercentagePositionChildren(), this.markDirtyPosition())
		}
		_markDirtyPrivateKey(e)
		{
			super._markDirtyPrivateKey(e), "x" != e && "y" != e || this.markDirtyPosition()
		}
		_removeTemplateField()
		{
			this._templateField && this._templateField._removeObjectTemplate(this)
		}
		_createEvents()
		{
			return new Qe(this)
		}
		_processTemplateField()
		{
			let e;
			const t = this.get("templateField");
			if (t)
			{
				const i = this.dataItem;
				if (i)
				{
					const s = i.dataContext;
					s && (e = s[t], e instanceof qe || !e || (e = qe.new(e)))
				}
			}
			this._templateField !== e && (this._removeTemplateField(), this._templateField = e, e && e._setObjectTemplate(this), this._applyTemplates())
		}
		_setDataItem(e)
		{
			const t = this._dataItem;
			this._dataItem = e, this._processTemplateField();
			const i = "dataitemchanged";
			e != t && this.events.isEnabled(i) && this.events.dispatch(i,
			{
				type: i,
				target: this,
				oldDataItem: t,
				newDataItem: e
			})
		}
		set dataItem(e)
		{
			this._setDataItem(e)
		}
		get dataItem()
		{
			if (this._dataItem) return this._dataItem;
			{
				let e = this._parent;
				for (; e;)
				{
					if (e._dataItem) return e._dataItem;
					e = e._parent
				}
			}
		}
		_addPercentageSizeChildren()
		{
			let e = this.parent;
			e && (this.get("width") instanceof t || this.get("height") instanceof t ? k(e._percentageSizeChildren, this) : x(e._percentageSizeChildren, this))
		}
		_addPercentagePositionChildren()
		{
			let e = this.parent;
			e && (this.get("x") instanceof t || this.get("y") instanceof t ? k(e._percentagePositionChildren, this) : x(e._percentagePositionChildren, this))
		}
		markDirtyPosition()
		{
			this._root._addDirtyPosition(this)
		}
		updatePivotPoint()
		{
			const e = this._localBounds;
			if (e)
			{
				const t = this.get("centerX");
				null != t && (this._display.pivot.x = e.left + U(t, e.right - e.left));
				const i = this.get("centerY");
				null != i && (this._display.pivot.y = e.top + U(i, e.bottom - e.top))
			}
		}
		_beforeChanged()
		{
			if (super._beforeChanged(), this._handleStates(), this.isDirty("tooltip"))
			{
				const e = this._prevSettings.tooltip;
				e && e.dispose()
			}
			if ((this.isDirty("layer") || this.isDirty("layerMargin")) && (this._display.setLayer(this.get("layer"), this.get("layerMargin")), this.markDirtyLayer()), this.isDirty("tooltipPosition"))
			{
				const e = this._tooltipMoveDp;
				e && (e.dispose(), this._tooltipMoveDp = void 0);
				const t = this._tooltipPointerDp;
				t && (t.dispose(), this._tooltipPointerDp = void 0), "pointer" == this.get("tooltipPosition") && (this.isHover() && (this._tooltipMoveDp = this.events.on("globalpointermove", (e =>
				{
					this.showTooltip(e.point)
				}))), this._tooltipPointerDp = new L([this.events.on("pointerover", (() =>
				{
					this._tooltipMoveDp = this.events.on("globalpointermove", (e =>
					{
						this.showTooltip(e.point)
					}))
				})), this.events.on("pointerout", (() =>
				{
					const e = this._tooltipMoveDp;
					e && (e.dispose(), this._tooltipMoveDp = void 0)
				}))]))
			}
		}
		_handleStates()
		{
			this._statesHandled || (this.isDirty("active") && (this.get("active") ? (this.states.applyAnimate("active"), this.set("ariaChecked", !0)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", !1)), this.markDirtyAccessibility()), this.isDirty("disabled") && (this.get("disabled") ? (this.states.applyAnimate("disabled"), this.set("ariaChecked", !1)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", !0)), this.markDirtyAccessibility()), this._statesHandled = !0)
		}
		_changed()
		{
			super._changed();
			const e = this._display,
				i = this.events;
			if (this.isDirty("draggable"))
			{
				const t = this.get("draggable");
				t ? (this.set("interactive", !0), this._dragDp = new L([i.on("pointerdown", (e =>
				{
					this.dragStart(e)
				})), i.on("globalpointermove", (e =>
				{
					this.dragMove(e)
				})), i.on("globalpointerup", (e =>
				{
					this.dragStop(e)
				}))])) : this._dragDp && (this._dragDp.dispose(), this._dragDp = void 0), e.cancelTouch = !!t
			}
			if (this.isDirty("tooltipText") || this.isDirty("tooltipHTML") || this.isDirty("showTooltipOn"))
			{
				const e = this.get("tooltipText"),
					t = this.get("tooltipHTML"),
					s = this.get("showTooltipOn", "hover");
				this._tooltipDp && (this._tooltipDp.dispose(), this._tooltipDp = void 0), (e || t) && ("click" == s ? (this._tooltipDp = new L([i.on("click", (() =>
				{
					this.setTimeout((() =>
					{
						const e = this.getTooltip();
						e && !e.isHidden() && e.get("tooltipTarget") === this ? this.hideTooltip() : this.showTooltip()
					}), 10)
				})), I(document, "click", (e =>
				{
					this.hideTooltip()
				}))]), this._disposers.push(this._tooltipDp)) : "always" == s || (this._tooltipDp = new L([i.on("pointerover", (() =>
				{
					this.showTooltip()
				})), i.on("pointerout", (() =>
				{
					this.hideTooltip()
				}))]), this._disposers.push(this._tooltipDp)))
			}
			if (this.isDirty("toggleKey"))
			{
				let e = this.get("toggleKey");
				e && "none" != e ? this._toggleDp = i.on("click", (() =>
				{
					this._isDragging || this.set(e, !this.get(e))
				})) : this._toggleDp && (this._toggleDp.dispose(), this._toggleDp = void 0)
			}
			if (this.isDirty("opacity") && (e.alpha = Math.max(0, this.get("opacity", 1)), this.get("focusable") && this.markDirtyAccessibility()), this.isDirty("rotation") && (this.markDirtyBounds(), e.angle = this.get("rotation", 0)), this.isDirty("scale") && (this.markDirtyBounds(), e.scale = this.get("scale", 0)), (this.isDirty("centerX") || this.isDirty("centerY")) && (this.markDirtyBounds(), this.updatePivotPoint()), (this.isDirty("visible") || this.isPrivateDirty("visible") || this.isDirty("forceHidden")) && (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? e.visible = !0 : (e.visible = !1, this.hideTooltip()), this.markDirtyBounds(), this.get("focusable") && this.markDirtyAccessibility()), this.isDirty("width") || this.isDirty("height"))
			{
				this.markDirtyBounds(), this._addPercentageSizeChildren();
				const e = this.parent;
				e && (this.isDirty("width") && this.get("width") instanceof t || this.isDirty("height") && this.get("height") instanceof t) && (e.markDirty(), e._prevWidth = 0), this._sizeDirty = !0
			}
			if ((this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("minWidth") || this.isDirty("minHeight") || this.isPrivateDirty("maxWidth") || this.isPrivateDirty("maxHeight") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight") || this.isDirty("marginLeft") || this.isDirty("marginTop") || this.isDirty("marginRight") || this.isDirty("marginBottom")) && (this.markDirtyBounds(), this._sizeDirty = !0), this._sizeDirty && this._updateSize(), this.isDirty("wheelable"))
			{
				const t = this.get("wheelable");
				t && this.set("interactive", !0), e.wheelable = !!t
			}(this.isDirty("tabindexOrder") || this.isDirty("focusableGroup")) && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this)), this.isDirty("filter") && (e.filter = this.get("filter"));
			let s = this.get("filter", "");
			if (this.isDirty("blur"))
			{
				const e = this.get("blur", 0);
				0 != e && (s += " blur(" + e + "px)")
			}
			if (this.isDirty("saturate"))
			{
				const e = this.get("saturate", 1);
				1 != e && (s += " saturate(" + e + ")")
			}
			if (this.isDirty("brightness"))
			{
				const e = this.get("brightness", 1);
				1 != e && (s += " brightness(" + e + ")")
			}
			if (this.isDirty("contrast"))
			{
				const e = this.get("contrast", 1);
				1 != e && (s += " contrast(" + e + ")")
			}
			if (this.isDirty("sepia"))
			{
				const e = this.get("sepia", 0);
				0 != e && (s += " sepia(" + e + ")")
			}
			if (this.isDirty("hue"))
			{
				const e = this.get("hue", 0);
				0 != e && (s += " hue-rotate(" + e + "deg)")
			}
			if (this.isDirty("invert"))
			{
				const e = this.get("invert", 0);
				0 != e && (s += " invert(" + e + ")")
			}
			if (s && (e.filter = s), this.isDirty("cursorOverStyle") && (e.cursorOverStyle = this.get("cursorOverStyle")), this.isDirty("hoverOnFocus") && (this.get("hoverOnFocus") ? this._focusDp = new L([i.on("focus", (() =>
				{
					this.showTooltip()
				})), i.on("blur", (() =>
				{
					this.hideTooltip()
				}))]) : this._focusDp && (this._focusDp.dispose(), this._focusDp = void 0)), this.isDirty("focusable") && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this), this.markDirtyAccessibility(), this._disposers.push(i.on("blur", (() =>
				{
					this.setPrivateRaw("touchHovering", !1)
				}))), this._disposers.push(i.once("boundschanged", (() =>
				{
					this.markDirtyAccessibility()
				})))), this.isPrivateDirty("focusable") && this.markDirtyAccessibility(), (this.isDirty("role") || this.isDirty("ariaLive") || this.isDirty("ariaChecked") || this.isDirty("ariaHidden") || this.isDirty("ariaOrientation") || this.isDirty("ariaValueNow") || this.isDirty("ariaValueMin") || this.isDirty("ariaValueMax") || this.isDirty("ariaValueText") || this.isDirty("ariaLabel") || this.isDirty("ariaControls")) && this.markDirtyAccessibility(), this.isDirty("exportable") && (e.exportable = this.get("exportable")), this.isDirty("interactive"))
			{
				const e = this.events;
				this.get("interactive") && !e.isDisposed() ? this._hoverDp = new L([e.on("click", (e =>
				{
					V(e.originalEvent) && (this.getPrivate("touchHovering") || this.setTimeout((() =>
					{
						this._handleOver(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.showTooltip(), this.setPrivateRaw("touchHovering", !0), this.events.dispatch("pointerover",
						{
							type: "pointerover",
							target: e.target,
							originalEvent: e.originalEvent,
							point: e.point,
							simulated: e.simulated
						})
					}), 10))
				})), e.on("globalpointerup", (e =>
				{
					V(e.originalEvent) && this.getPrivate("touchHovering") && (this._handleOut(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.hideTooltip(), this.setPrivateRaw("touchHovering", !1), this.events.dispatch("pointerout",
					{
						type: "pointerout",
						target: e.target,
						originalEvent: e.originalEvent,
						point: e.point,
						simulated: e.simulated
					})), this._isDown && this._handleUp(e)
				})), e.on("pointerover", (() =>
				{
					this._handleOver()
				})), e.on("pointerout", (() =>
				{
					this._handleOut()
				})), e.on("pointerdown", (e =>
				{
					this._handleDown(e)
				}))]) : (this._display.interactive = !1, this._hoverDp && (this._hoverDp.dispose(), this._hoverDp = void 0))
			}
			this.isDirty("forceInactive") && (this._display.inactive = this.get("forceInactive", null)), "always" == this.get("showTooltipOn") && this._display.visible && this.showTooltip()
		}
		dragStart(e)
		{
			this._dragEvent = e, this.events.stopParentDispatch()
		}
		dragStop(e)
		{
			if (this._dragEvent = void 0, this._dragPoint = void 0, this.events.stopParentDispatch(), this._isDragging)
			{
				this._isDragging = !1;
				const t = "dragstop";
				this.events.isEnabled(t) && this.events.dispatch(t,
				{
					type: t,
					target: this,
					originalEvent: e.originalEvent,
					point: e.point,
					simulated: e.simulated
				})
			}
		}
		_handleOver()
		{
			this.isHidden() || (this.get("active") && this.states.lookup("hoverActive") ? this.states.applyAnimate("hoverActive") : this.get("disabled") && this.states.lookup("hoverDisabled") ? this.states.applyAnimate("hoverDisabled") : this.states.applyAnimate("hover"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"))
		}
		_handleOut()
		{
			this.isHidden() || (this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : (this.states.lookup("hover") || this.states.lookup("hoverActive")) && this.states.applyAnimate("default"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"))
		}
		_handleUp(e)
		{
			if (!this.isHidden())
			{
				this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : this.states.lookup("down") && (this.isHover() ? this.states.applyAnimate("hover") : this.states.applyAnimate("default")), this._downPoint = void 0;
				const t = N(e.originalEvent);
				delete this._downPoints[t], 0 == E(this._downPoints).length && (this._isDown = !1)
			}
		}
		_hasMoved(e)
		{
			const t = N(e.originalEvent),
				i = this._downPoints[t];
			if (i)
			{
				const t = Math.abs(i.x - e.point.x),
					s = Math.abs(i.y - e.point.y);
				return t > 5 || s > 5
			}
			return !1
		}
		_hasDown()
		{
			return E(this._downPoints).length > 0
		}
		_handleDown(e)
		{
			const t = this.parent;
			if (t && !this.get("draggable") && t._handleDown(e), this.get("interactive") && !this.isHidden())
			{
				this.states.lookup("down") && this.states.applyAnimate("down"), this._downPoint = {
					x: e.point.x,
					y: e.point.y
				}, this._isDown = !0;
				const t = N(e.originalEvent);
				this._downPoints[t] = {
					x: e.point.x,
					y: e.point.y
				}
			}
		}
		dragMove(e)
		{
			let t = this._dragEvent;
			if (t)
			{
				if (t.simulated && !e.simulated) return !0;
				let i = 0,
					s = this.parent,
					r = 1;
				for (; null != s;) i += s.get("rotation", 0), s = s.parent, s && (r *= s.get("scale", 1));
				let a = (e.point.x - t.point.x) / r,
					n = (e.point.y - t.point.y) / r;
				const o = this.events;
				if (t.simulated && !this._isDragging)
				{
					this._isDragging = !0, this._dragEvent = e, this._dragPoint = {
						x: this.x(),
						y: this.y()
					};
					const t = "dragstart";
					o.isEnabled(t) && o.dispatch(t,
					{
						type: t,
						target: this,
						originalEvent: e.originalEvent,
						point: e.point,
						simulated: e.simulated
					})
				}
				if (this._isDragging)
				{
					let t = this._dragPoint;
					this.set("x", t.x + a * Ke(i) + n * Xe(i)), this.set("y", t.y + n * Ke(i) - a * Xe(i));
					const s = "dragged";
					o.isEnabled(s) && o.dispatch(s,
					{
						type: s,
						target: this,
						originalEvent: e.originalEvent,
						point: e.point,
						simulated: e.simulated
					})
				}
				else if (Math.hypot(a, n) > 5)
				{
					this._isDragging = !0, this._dragEvent = e, this._dragPoint = {
						x: this.x(),
						y: this.y()
					};
					const t = "dragstart";
					o.isEnabled(t) && o.dispatch(t,
					{
						type: t,
						target: this,
						originalEvent: e.originalEvent,
						point: e.point,
						simulated: e.simulated
					})
				}
			}
		}
		_updateSize()
		{}
		_getBounds()
		{
			this._localBounds = this._display.getLocalBounds()
		}
		depth()
		{
			let e = this.parent,
				t = 0;
			for (;;)
			{
				if (!e) return t;
				++t, e = e.parent
			}
		}
		markDirtySize()
		{
			this._sizeDirty = !0, this.markDirty()
		}
		markDirtyBounds()
		{
			const e = this._display;
			if (this.get("isMeasured"))
			{
				this._root._addDirtyBounds(this), e.isMeasured = !0, e.invalidateBounds();
				const t = this.parent;
				t && "absolute" != this.get("position") && (null == t.get("width") || null == t.get("height") || t.get("layout")) && t.markDirtyBounds(), this.get("focusable") && this.markDirtyAccessibility()
			}
		}
		markDirtyAccessibility()
		{
			this._root._invalidateAccessibility(this)
		}
		markDirtyLayer()
		{
			this._display.markDirtyLayer(!0)
		}
		markDirty()
		{
			super.markDirty(), this.markDirtyLayer()
		}
		_updateBounds()
		{
			const e = this._adjustedLocalBounds;
			let t;
			if (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? (this._getBounds(), this._fixMinBounds(this._localBounds), this.updatePivotPoint(), this._adjustedLocalBounds = this._display.getAdjustedBounds(this._localBounds), t = this._adjustedLocalBounds) : (t = {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}, this._localBounds = t, this._adjustedLocalBounds = t), !e || e.left !== t.left || e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom)
			{
				const e = "boundschanged";
				this.events.isEnabled(e) && this.events.dispatch(e,
				{
					type: e,
					target: this
				}), this.parent && (this.parent.markDirty(), this.parent.markDirtyBounds()), this.getPrivate("showingTooltip") && this.showTooltip()
			}
		}
		_fixMinBounds(e)
		{
			let t = this.get("minWidth", this.getPrivate("minWidth")),
				i = this.get("minHeight", this.getPrivate("minHeight"));
			d(t) && e.right - e.left < t && (e.right = e.left + t), d(i) && e.bottom - e.top < i && (e.bottom = e.top + i);
			let s = this.getPrivate("width"),
				r = this.getPrivate("height");
			d(s) && (s > 0 ? e.right = e.left + s : e.left = e.right + s), d(r) && (r > 0 ? e.bottom = e.top + r : e.top = e.bottom + r)
		}
		_removeParent(e)
		{
			e && (e.children.removeValue(this), x(e._percentageSizeChildren, this), x(e._percentagePositionChildren, this))
		}
		_clearDirty()
		{
			super._clearDirty(), this._sizeDirty = !1, this._statesHandled = !1
		}
		hover()
		{
			this.isDisposed() || (this.showTooltip(), this._handleOver())
		}
		unhover()
		{
			this.isDisposed() || (this.hideTooltip(), this._handleOut())
		}
		showTooltip(e)
		{
			if (!this.isDisposed())
			{
				const t = this.getTooltip(),
					i = this.get("tooltipText"),
					s = this.get("tooltipHTML");
				if ((i || s) && t)
				{
					const r = this.get("tooltipPosition"),
						a = this.getPrivate("tooltipTarget", this);
					if ("fixed" != r && e || (this._display._setMatrix(), e = this.toGlobal(a._getTooltipPoint())), "pointer" == r)
					{
						const t = this.getPrivate("lastTooltipCoords");
						if (t && t.x == e.x && t.y == e.y) return;
						this.setPrivate("lastTooltipCoords", e)
					}
					t.set("pointTo", e), t.set("tooltipTarget", a), t.get("x") || t.set("x", e.x), t.get("y") || t.set("y", e.y), i && t.label.set("text", i), s && t.label.set("html", s);
					const n = this.dataItem;
					if (n && t.label._setDataItem(n), "always" == this.get("showTooltipOn") && (e.x < 0 || e.x > this._root.width() || e.y < 0 || e.y > this._root.height())) return void this.hideTooltip();
					t.label.text.markDirtyText();
					const o = t.show();
					return this.setPrivateRaw("showingTooltip", !0), o
				}
			}
		}
		hideTooltip()
		{
			const e = this.getTooltip();
			if (e && (this.removePrivate("lastTooltipCoords"), e.get("tooltipTarget") == this.getPrivate("tooltipTarget", this) || this.get("tooltip") == e))
			{
				let t = e.get("keepTargetHover") && 0 == e.get("stateAnimationDuration", 0) ? 400 : void 0;
				const i = e.hide(t);
				return this.setPrivateRaw("showingTooltip", !1), i
			}
		}
		_getTooltipPoint()
		{
			const e = this._localBounds;
			if (e)
			{
				let t = 0,
					i = 0;
				return this.get("isMeasured") ? (t = e.left + U(this.get("tooltipX", 0), e.right - e.left), i = e.top + U(this.get("tooltipY", 0), e.bottom - e.top)) : (t = U(this.get("tooltipX", 0), this.width()), i = U(this.get("tooltipY", 0), this.height())),
				{
					x: t,
					y: i
				}
			}
			return {
				x: 0,
				y: 0
			}
		}
		getTooltip()
		{
			let e = this.get("tooltip");
			if (e) return e;
			{
				let e = this.parent;
				if (e) return e.getTooltip()
			}
		}
		_updatePosition()
		{
			const e = this.parent;
			let i = this.get("dx", 0),
				s = this.get("dy", 0),
				r = this.get("x"),
				a = this.getPrivate("x"),
				n = 0,
				o = 0;
			const l = this.get("position");
			r instanceof t && (r = e ? e.innerWidth() * r.value + e.get("paddingLeft", 0) : 0), d(r) ? n = r + i : null != a ? n = a : e && "relative" == l && (n = e.get("paddingLeft", 0) + i);
			let h = this.get("y"),
				c = this.getPrivate("y");
			h instanceof t && (h = e ? e.innerHeight() * h.value + e.get("paddingTop", 0) : 0), d(h) ? o = h + s : null != c ? o = c : e && "relative" == l && (o = e.get("paddingTop", 0) + s);
			const u = this._display;
			if (u.x != n || u.y != o)
			{
				u.invalidateBounds(), u.x = n, u.y = o;
				const e = "positionchanged";
				this.events.isEnabled(e) && this.events.dispatch(e,
				{
					type: e,
					target: this
				})
			}
			this.getPrivate("showingTooltip") && this.showTooltip()
		}
		x()
		{
			let e = this.get("x"),
				i = this.getPrivate("x");
			const s = this.parent;
			return s ? e instanceof t ? U(e, s.innerWidth()) + s.get("paddingLeft", 0) : d(e) ? e : null != i ? i : s.get("paddingLeft", this._display.x) : this._display.x
		}
		y()
		{
			let e = this.getPrivate("y");
			if (null != e) return e;
			let i = this.get("y");
			const s = this.parent;
			return s ? i instanceof t ? U(i, s.innerHeight()) + s.get("paddingTop", 0) : d(i) ? i : null != e ? e : s.get("paddingTop", this._display.y) : this._display.y
		}
		_dispose()
		{
			super._dispose(), this._display.dispose(), this._removeTemplateField(), this._removeParent(this.parent), this._root._removeFocusElement(this);
			const e = this.get("tooltip");
			e && e.dispose(), this.markDirty()
		}
		adjustedLocalBounds()
		{
			return this._fixMinBounds(this._adjustedLocalBounds), this._adjustedLocalBounds
		}
		localBounds()
		{
			return this._localBounds
		}
		bounds()
		{
			const e = this._adjustedLocalBounds,
				t = this.x(),
				i = this.y();
			return {
				left: e.left + t,
				right: e.right + t,
				top: e.top + i,
				bottom: e.bottom + i
			}
		}
		globalBounds()
		{
			const e = this.localBounds(),
				t = this.toGlobal(
				{
					x: e.left,
					y: e.top
				}),
				i = this.toGlobal(
				{
					x: e.right,
					y: e.top
				}),
				s = this.toGlobal(
				{
					x: e.right,
					y: e.bottom
				}),
				r = this.toGlobal(
				{
					x: e.left,
					y: e.bottom
				});
			return {
				left: Math.min(t.x, i.x, s.x, r.x),
				top: Math.min(t.y, i.y, s.y, r.y),
				right: Math.max(t.x, i.x, s.x, r.x),
				bottom: Math.max(t.y, i.y, s.y, r.y)
			}
		}
		_onShow(e)
		{}
		_onHide(e)
		{}
		appear(t, i)
		{
			return e(this, void 0, void 0, (function* ()
			{
				return yield this.hide(0), i ? new Promise(((e, s) =>
				{
					this.setTimeout((() =>
					{
						e(this.show(t))
					}), i)
				})) : this.show(t)
			}))
		}
		show(t)
		{
			return e(this, void 0, void 0, (function* ()
			{
				if (!this._isShowing)
				{
					this._isHidden = !1, this._isShowing = !0, this._isHiding = !1, this.states.lookup("default").get("visible") && this.set("visible", !0), this._onShow(t);
					const e = this.states.applyAnimate("default", t);
					yield ge(e), this._isShowing = !1
				}
			}))
		}
		hide(t)
		{
			return e(this, void 0, void 0, (function* ()
			{
				if (!this._isHiding && !this._isHidden)
				{
					this._isHiding = !0, this._isShowing = !1;
					let e = this.states.lookup("hidden");
					e || (e = this.states.create("hidden",
					{
						opacity: 0,
						visible: !1
					})), this._isHidden = !0, this._onHide(t);
					const i = this.states.applyAnimate("hidden", t);
					yield ge(i), this._isHiding = !1
				}
			}))
		}
		isHidden()
		{
			return this._isHidden
		}
		isShowing()
		{
			return this._isShowing
		}
		isHiding()
		{
			return this._isHiding
		}
		isHover()
		{
			return this._display.hovering()
		}
		isFocus()
		{
			return this._root.focused(this)
		}
		isDragging()
		{
			return this._isDragging
		}
		isVisible()
		{
			return !(!this.get("visible") || !this.getPrivate("visible") || this.get("forceHidden"))
		}
		isVisibleDeep()
		{
			return this._parent ? this._parent.isVisibleDeep() && this.isVisible() : this.isVisible()
		}
		compositeOpacity()
		{
			const e = this.get("opacity", 1);
			return this._parent ? this._parent.compositeOpacity() * e : e
		}
		compositeScale()
		{
			const e = this.get("scale", 1);
			return this._parent ? this._parent.compositeScale() * e : e
		}
		compositeRotation()
		{
			const e = this.get("rotation", 0);
			return this._parent ? this._parent.compositeRotation() + e : e
		}
		width()
		{
			let e = this.get("width"),
				i = this.get("maxWidth", this.getPrivate("maxWidth")),
				s = this.get("minWidth", this.getPrivate("minWidth")),
				r = this.getPrivate("width"),
				a = 0;
			if (d(r)) a = r;
			else if (null == e) this._adjustedLocalBounds && (a = this._adjustedLocalBounds.right - this._adjustedLocalBounds.left);
			else if (e instanceof t)
			{
				const t = this.parent;
				a = t ? t.innerWidth() * e.value : this._root.width() * e.value
			}
			else d(e) && (a = e);
			return d(s) && (a = Math.max(s, a)), d(i) && (a = Math.min(i, a)), a
		}
		maxWidth()
		{
			let e = this.get("maxWidth", this.getPrivate("maxWidth"));
			if (d(e)) return e;
			{
				let e = this.get("width");
				if (d(e)) return e
			}
			const t = this.parent;
			return t ? t.innerWidth() : this._root.width()
		}
		maxHeight()
		{
			let e = this.get("maxHeight", this.getPrivate("maxHeight"));
			if (d(e)) return e;
			{
				let e = this.get("height");
				if (d(e)) return e
			}
			const t = this.parent;
			return t ? t.innerHeight() : this._root.height()
		}
		height()
		{
			let e = this.get("height"),
				i = this.get("maxHeight", this.getPrivate("maxHeight")),
				s = this.get("minHeight", this.getPrivate("minHeight")),
				r = this.getPrivate("height"),
				a = 0;
			if (d(r)) a = r;
			else if (null == e) this._adjustedLocalBounds && (a = this._adjustedLocalBounds.bottom - this._adjustedLocalBounds.top);
			else if (e instanceof t)
			{
				const t = this.parent;
				a = t ? t.innerHeight() * e.value : this._root.height() * e.value
			}
			else d(e) && (a = e);
			return d(s) && (a = Math.max(s, a)), d(i) && (a = Math.min(i, a)), a
		}
		_findStaticTemplate(e)
		{
			return this._templateField && e(this._templateField) ? this._templateField : super._findStaticTemplate(e)
		}
		_walkParents(e)
		{
			this._parent && this._walkParent(e)
		}
		_walkParent(e)
		{
			this._parent && this._parent._walkParent(e), e(this)
		}
		get parent()
		{
			return this._parent
		}
		_setParent(e, t = !1)
		{
			const i = this._parent;
			e !== i && (this.markDirtyBounds(), e.markDirty(), this._parent = e, t && (this._removeParent(i), e && (this._addPercentageSizeChildren(), this._addPercentagePositionChildren())), this.markDirtyPosition(), this._applyThemes())
		}
		getNumberFormatter()
		{
			return this.get("numberFormatter", this._root.numberFormatter)
		}
		getDateFormatter()
		{
			return this.get("dateFormatter", this._root.dateFormatter)
		}
		getDurationFormatter()
		{
			return this.get("durationFormatter", this._root.durationFormatter)
		}
		toGlobal(e)
		{
			return this._display.toGlobal(e)
		}
		toLocal(e)
		{
			return this._display.toLocal(e)
		}
		_getDownPoint()
		{
			const e = this._getDownPointId();
			if (e) return this._downPoints[e]
		}
		_getDownPointId()
		{
			if (this._downPoints) return (e = this._downPoints, t = (e, t) => e > t ? 1 : e < t ? -1 : 0, E(e).sort(t))[0];
			var e, t
		}
		toFront()
		{
			const e = this.parent;
			e && e.children.moveValue(this, e.children.length - 1)
		}
		toBack()
		{
			const e = this.parent;
			e && e.children.moveValue(this, 0)
		}
	}
	Object.defineProperty(et, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Sprite"
	}), Object.defineProperty(et, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: He.classNames.concat([et.className])
	});
	class tt extends He
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_display",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this._root._renderer.makeGraphics()
			}), Object.defineProperty(this, "_backgroundDisplay",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this._root._renderer.makeGraphics()
			}), Object.defineProperty(this, "_clear",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_pattern",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			})
		}
		_afterNew()
		{
			super._afterNewApplyThemes()
		}
		get pattern()
		{
			return this._pattern
		}
		_draw()
		{}
		_beforeChanged()
		{
			super._beforeChanged(), (this.isDirty("repetition") || this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation") || this.isDirty("strokeWidth") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("colorOpacity") || this.isDirty("fillOpacity")) && (this._clear = !0), this._checkDirtyFill()
		}
		_checkDirtyFill()
		{
			(this.isDirty("color") || this.isDirty("fill")) && (this._clear = !0)
		}
		_changed()
		{
			if (super._changed(), this._clear)
			{
				const e = this.get("repetition", ""),
					t = this.get("width", 100),
					i = this.get("height", 100),
					s = this.get("fill"),
					r = this.get("fillOpacity", 1),
					a = this._backgroundDisplay,
					n = this._display;
				n.clear(), a.clear(), s && r > 0 && (a.beginFill(s, r), a.drawRect(0, 0, t, i), a.endFill()), n.angle = this.get("rotation", 0), this._draw(), this._pattern = this._root._renderer.createPattern(n, a, e, t, i)
			}
			this._clear = !1
		}
	}
	Object.defineProperty(tt, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Pattern"
	}), Object.defineProperty(tt, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: He.classNames.concat([tt.className])
	});
	class it extends tt
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_image",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			})
		}
		_beforeChanged()
		{
			super._beforeChanged(), this._clear = !0, this.isDirty("src") && this._load();
			const e = this.get("canvas");
			e && (this.set("width", e.width), this.set("height", e.height))
		}
		_draw()
		{
			super._draw();
			const e = this.get("colorOpacity");
			void 0 !== e && (this._display.alpha = Math.max(0, e));
			const t = this._image;
			if (t)
			{
				const e = this.get("width", 100),
					i = this.get("height", 100),
					s = this.get("fit", "image");
				let r = 0,
					a = 0;
				"pattern" == s ? (r = e, a = i, this.markDirty()) : (r = t.width, a = t.height, "image" == s && (this.set("width", r), this.set("height", a)));
				let n = 0,
					o = 0;
				this.get("centered", !0) && (n = e / 2 - r / 2, o = i / 2 - a / 2), this._display.image(t, r, a, n, o)
			}
			const i = this.get("canvas");
			i && this._display.image(i, i.width, i.height, 0, 0)
		}
		_load()
		{
			const e = this.get("src");
			if (e)
			{
				const t = new Image;
				t.src = e, t.decode().then((() =>
				{
					this._image = t, this._draw(), this.events.isEnabled("loaded") && this.events.dispatch("loaded",
					{
						type: "loaded",
						target: this
					})
				})).catch((e =>
				{}))
			}
		}
	}
	var st;
	Object.defineProperty(it, "className",
		{
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: "PicturePattern"
		}), Object.defineProperty(it, "classNames",
		{
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: tt.classNames.concat([it.className])
		}),
		function (e)
		{
			e.ADD = "lighter", e.COLOR = "color", e.COLOR_BURN = "color-burn", e.COLOR_DODGE = "color-dodge", e.DARKEN = "darken", e.DIFFERENCE = "difference", e.DST_OVER = "destination-over", e.EXCLUSION = "exclusion", e.HARD_LIGHT = "hard-light", e.HUE = "hue", e.LIGHTEN = "lighten", e.LUMINOSITY = "luminosity", e.MULTIPLY = "multiply", e.NORMAL = "source-over", e.OVERLAY = "overlay", e.SATURATION = "saturation", e.SCREEN = "screen", e.SOFT_LIGHT = "soft-light", e.SRC_ATOP = "source-atop", e.XOR = "xor"
		}(st || (st = {}));
	const rt = ["fill", "fillOpacity", "stroke", "strokeWidth", "strokeOpacity", "fillPattern", "strokePattern", "fillGradient", "strokeGradient", "strokeDasharray", "strokeDashoffset", "shadowBlur", "shadowColor", "shadowOpacity", "shadowOffsetX", "shadowOffsetY", "blur", "sepia", "invert", "brightness", "hue", "contrast", "saturate"];
	class at extends et
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_display",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this._root._renderer.makeGraphics()
			}), Object.defineProperty(this, "_clear",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			})
		}
		_beforeChanged()
		{
			if (super._beforeChanged(), (this.isDirty("draw") || this.isDirty("svgPath")) && this.markDirtyBounds(), (this.isDirty("fill") || this.isDirty("stroke") || this.isDirty("visible") || this.isDirty("forceHidden") || this.isDirty("scale") || this.isDirty("fillGradient") || this.isDirty("strokeGradient") || this.isDirty("fillPattern") || this.isDirty("strokePattern") || this.isDirty("fillOpacity") || this.isDirty("strokeOpacity") || this.isDirty("strokeWidth") || this.isDirty("draw") || this.isDirty("blendMode") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("svgPath") || this.isDirty("lineJoin") || this.isDirty("lineCap") || this.isDirty("shadowColor") || this.isDirty("shadowBlur") || this.isDirty("shadowOffsetX") || this.isDirty("shadowOffsetY")) && (this._clear = !0), this._display.crisp = this.get("crisp", !1), this.isDirty("fillGradient"))
			{
				const e = this.get("fillGradient");
				if (e)
				{
					this._display.isMeasured = !0;
					const t = e.get("target");
					t && (this._disposers.push(t.events.on("boundschanged", (() =>
					{
						this._markDirtyKey("fill")
					}))), this._disposers.push(t.events.on("positionchanged", (() =>
					{
						this._markDirtyKey("fill")
					}))))
				}
			}
			if (this.isDirty("strokeGradient"))
			{
				const e = this.get("strokeGradient");
				if (e)
				{
					this._display.isMeasured = !0;
					const t = e.get("target");
					t && (this._disposers.push(t.events.on("boundschanged", (() =>
					{
						this._markDirtyKey("stroke")
					}))), this._disposers.push(t.events.on("positionchanged", (() =>
					{
						this._markDirtyKey("stroke")
					}))))
				}
			}
		}
		_changed()
		{
			if (super._changed(), this._clear)
			{
				this.markDirtyBounds(), this.markDirtyLayer(), this._display.clear();
				let e = this.get("strokeDasharray");
				d(e) && (e = e < .5 ? [0] : [e]), this._display.setLineDash(e);
				const t = this.get("strokeDashoffset");
				t && this._display.setLineDashOffset(t);
				const i = this.get("blendMode", st.NORMAL);
				this._display.blendMode = i;
				const s = this.get("draw");
				s && "function" == typeof s && s(this._display, this);
				const r = this.get("svgPath");
				null != r && this._display.svgPath(r)
			}
		}
		_afterChanged()
		{
			if (super._afterChanged(), this._clear)
			{
				const e = this.get("fill"),
					t = this.get("fillGradient"),
					i = this.get("fillPattern"),
					s = this.get("fillOpacity"),
					r = this.get("stroke"),
					a = this.get("strokeGradient"),
					n = this.get("strokePattern"),
					o = this.get("shadowColor"),
					l = this.get("shadowBlur"),
					h = this.get("shadowOffsetX"),
					c = this.get("shadowOffsetY"),
					u = this.get("shadowOpacity");
				if (o && (l || h || c) && this._display.shadow(o, l, h, c, u), e && !t && (this._display.beginFill(e, s), this._display.endFill()), t)
				{
					if (e)
					{
						const i = t.get("stops", []);
						i.length && _(i, (t =>
						{
							t.color && !t.colorInherited || !e || (t.color = e, t.colorInherited = !0), (null == t.opacity || t.opacityInherited) && (t.opacity = s, t.opacityInherited = !0)
						}))
					}
					const i = t.getFill(this);
					i && (this._display.beginFill(i, s), this._display.endFill())
				}
				if (i)
				{
					const e = i.pattern;
					e && (this._display.beginFill(e, s), this._display.endFill(), i instanceof it && i.events.once("loaded", (() =>
					{
						this._clear = !0, this.markDirty()
					})))
				}
				if (r || a || n)
				{
					const e = this.get("strokeOpacity");
					let t = this.get("strokeWidth", 1);
					this.get("nonScalingStroke") && (t /= this.get("scale", 1)), this.get("crisp") && (t /= this._root._renderer.resolution);
					const i = this.get("lineJoin"),
						s = this.get("lineCap");
					if (r && !a && (this._display.lineStyle(t, r, e, i, s), this._display.endStroke()), a)
					{
						const n = a.get("stops", []);
						n.length && _(n, (t =>
						{
							t.color && !t.colorInherited || !r || (t.color = r, t.colorInherited = !0), (null == t.opacity || t.opacityInherited) && (t.opacity = e, t.opacityInherited = !0)
						}));
						const o = a.getFill(this);
						o && (this._display.lineStyle(t, o, e, i, s), this._display.endStroke())
					}
					if (n)
					{
						let r = n.pattern;
						r && (this._display.lineStyle(t, r, e, i, s), this._display.endStroke(), n instanceof it && n.events.once("loaded", (() =>
						{
							this._clear = !0, this.markDirty()
						})))
					}
				}
				this.getPrivate("showingTooltip") && this.showTooltip()
			}
			this._clear = !1
		}
	}
	Object.defineProperty(at, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Graphics"
	}), Object.defineProperty(at, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: et.classNames.concat([at.className])
	});
	class nt extends at
	{
		_afterNew()
		{
			super._afterNew(), this._display.isMeasured = !0, this.setPrivateRaw("trustBounds", !0)
		}
		_beforeChanged()
		{
			super._beforeChanged(), (this.isDirty("width") || this.isDirty("height") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = !0)
		}
		_changed()
		{
			super._changed(), this._clear && !this.get("draw") && this._draw()
		}
		_draw()
		{
			this._display.drawRect(0, 0, this.width(), this.height())
		}
		_updateSize()
		{
			this.markDirty(), this._clear = !0
		}
	}

	function ot(e, t)
	{
		e.get("reverseChildren", !1) ? e.children.eachReverse(t) : e.children.each(t)
	}
	Object.defineProperty(nt, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Rectangle"
	}), Object.defineProperty(nt, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: at.classNames.concat([nt.className])
	});
	class lt extends He
	{}
	Object.defineProperty(lt, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Layout"
	}), Object.defineProperty(lt, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: He.classNames.concat([lt.className])
	});
	class ht extends lt
	{
		updateContainer(e)
		{
			let i = e.get("paddingLeft", 0),
				s = e.innerWidth(),
				r = 0;
			ot(e, (e =>
			{
				if (e.isVisible() && "relative" == e.get("position"))
				{
					let i = e.get("width");
					if (i instanceof t)
					{
						r += i.value;
						let t = s * i.value,
							a = e.get("minWidth", e.getPrivate("minWidth", -1 / 0));
						a > t && (s -= a, r -= i.value);
						let n = e.get("maxWidth", e.getPrivate("maxWidth", 1 / 0));
						t > n && (s -= n, r -= i.value)
					}
					else d(i) || (i = e.width()), s -= i + e.get("marginLeft", 0) + e.get("marginRight", 0)
				}
			})), (s <= 0 || s == 1 / 0) && (s = .1), ot(e, (e =>
			{
				if (e.isVisible() && "relative" == e.get("position"))
				{
					let i = e.get("width");
					if (i instanceof t)
					{
						let t = s * i.value / r - e.get("marginLeft", 0) - e.get("marginRight", 0),
							a = e.get("minWidth", e.getPrivate("minWidth", -1 / 0)),
							n = e.get("maxWidth", e.getPrivate("maxWidth", 1 / 0));
						t = Math.min(Math.max(a, t), n), e.setPrivate("width", t)
					}
					else e._prevSettings.width instanceof t && e.setPrivate("width", void 0)
				}
			}));
			let a = i;
			ot(e, (e =>
			{
				if ("relative" == e.get("position"))
					if (e.isVisible())
					{
						let t = e.adjustedLocalBounds(),
							i = e.get("marginLeft", 0),
							s = e.get("marginRight", 0),
							r = e.get("maxWidth"),
							n = t.left,
							o = t.right;
						r && o - n > r && (o = n + r);
						let l = a + i - n;
						e.setPrivate("x", l), a = l + o + s
					}
				else e.setPrivate("x", void 0)
			}))
		}
	}
	Object.defineProperty(ht, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "HorizontalLayout"
	}), Object.defineProperty(ht, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: lt.classNames.concat([ht.className])
	});
	class ct extends lt
	{
		updateContainer(e)
		{
			let i = e.get("paddingTop", 0),
				s = e.innerHeight(),
				r = 0;
			ot(e, (e =>
			{
				if (e.isVisible() && "relative" == e.get("position"))
				{
					let i = e.get("height");
					if (i instanceof t)
					{
						r += i.value;
						let t = s * i.value,
							a = e.get("minHeight", e.getPrivate("minHeight", -1 / 0));
						a > t && (s -= a, r -= i.value);
						let n = e.get("maxHeight", e.getPrivate("maxHeight", 1 / 0));
						t > n && (s -= n, r -= i.value)
					}
					else d(i) || (i = e.height()), s -= i + e.get("marginTop", 0) + e.get("marginBottom", 0)
				}
			})), (s <= 0 || s == 1 / 0) && (s = .1), ot(e, (e =>
			{
				if (e.isVisible() && "relative" == e.get("position"))
				{
					let i = e.get("height");
					if (i instanceof t)
					{
						let t = s * i.value / r - e.get("marginTop", 0) - e.get("marginBottom", 0),
							a = e.get("minHeight", e.getPrivate("minHeight", -1 / 0)),
							n = e.get("maxHeight", e.getPrivate("maxHeight", 1 / 0));
						t = Math.min(Math.max(a, t), n), e.setPrivate("height", t)
					}
					else e._prevSettings.height instanceof t && e.setPrivate("height", void 0)
				}
			}));
			let a = i;
			ot(e, (e =>
			{
				if ("relative" == e.get("position"))
					if (e.isVisible())
					{
						let t = e.adjustedLocalBounds(),
							i = e.get("marginTop", 0),
							s = t.top,
							r = t.bottom,
							n = e.get("maxHeight");
						n && r - s > n && (r = s + n);
						let o = e.get("marginBottom", 0),
							l = a + i - s;
						e.setPrivate("y", l), a = l + r + o
					}
				else e.setPrivate("y", void 0)
			}))
		}
	}
	Object.defineProperty(ct, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "VerticalLayout"
	}), Object.defineProperty(ct, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: lt.classNames.concat([ct.className])
	});
	class ut extends lt
	{
		_afterNew()
		{
			this._setRawDefault("maxColumns", Number.MAX_VALUE), super._afterNew()
		}
		updateContainer(e)
		{
			let t = e.get("paddingLeft", 0),
				i = e.get("paddingRight", 0),
				s = e.get("paddingTop", 0),
				r = e.maxWidth() - t - i,
				a = r,
				n = 1;
			ot(e, (e =>
			{
				if (e.get("visible") && e.getPrivate("visible") && !e.get("forceHidden") && "absolute" != e.get("position"))
				{
					let t = e.width();
					t < a && (a = t), t > n && (n = t)
				}
			})), a = Ue(a, 1, r), n = Ue(n, 1, r);
			let o = 1;
			o = this.get("fixedWidthGrid") ? r / n : r / a, o = Math.max(1, Math.floor(o)), o = Math.min(this.get("maxColumns", Number.MAX_VALUE), o);
			let l = this.getColumnWidths(e, o, n, r),
				h = s,
				c = 0,
				u = 0;
			o = l.length;
			let d = t;
			ot(e, (e =>
			{
				if ("relative" == e.get("position") && e.isVisible())
				{
					const i = e.get("marginTop", 0),
						s = e.get("marginBottom", 0);
					let r = e.adjustedLocalBounds(),
						a = e.get("marginLeft", 0),
						n = e.get("marginRight", 0),
						p = d + a - r.left,
						g = h + i - r.top;
					e.setPrivate("x", p), e.setPrivate("y", g), d += l[c] + n, u = Math.max(u, e.height() + i + s), c++, c >= o && (c = 0, d = t, h += u)
				}
			}))
		}
		getColumnWidths(e, t, i, s)
		{
			let r = 0,
				a = [],
				n = 0;
			return ot(e, (s =>
			{
				let r = s.adjustedLocalBounds();
				"absolute" != s.get("position") && s.isVisible() && (this.get("fixedWidthGrid") ? a[n] = i : a[n] = Math.max(0 | a[n], r.right - r.left + s.get("marginLeft", 0) + s.get("marginRight", 0)), n < e.children.length - 1 && (n++, n == t && (n = 0)))
			})), _(a, (e =>
			{
				r += e
			})), r > s ? t > 2 ? (t -= 1, this.getColumnWidths(e, t, i, s)) : [s] : a
		}
	}
	Object.defineProperty(ut, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "GridLayout"
	}), Object.defineProperty(ut, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: lt.classNames.concat([ut.className])
	});
	class dt
	{
		static escape(e)
		{
			return e.replace(/\[\[/g, this.prefix + "1").replace(/([^\/\]]{1})\]\]/g, "$1" + this.prefix + "2").replace(/\]\]/g, this.prefix + "2").replace(/\{\{/g, this.prefix + "3").replace(/\}\}/g, this.prefix + "4").replace(/\'\'/g, this.prefix + "5")
		}
		static unescape(e)
		{
			return e.replace(new RegExp(this.prefix + "1", "g"), "[[").replace(new RegExp(this.prefix + "2", "g"), "]]").replace(new RegExp(this.prefix + "3", "g"), "{{").replace(new RegExp(this.prefix + "4", "g"), "}}").replace(new RegExp(this.prefix + "5", "g"), "''")
		}
		static cleanUp(e)
		{
			return e.replace(/\[\[/g, "[").replace(/\]\]/g, "]").replace(/\{\{/g, "{").replace(/\}\}/g, "}").replace(/\'\'/g, "'")
		}
		static chunk(e, t = !1, i = !1)
		{
			let s = [];
			e = this.escape(e);
			let r = t ? e.split("'") : [e];
			for (let e = 0; e < r.length; e++)
			{
				let t = r[e];
				if ("" !== t)
					if (e % 2 == 0)
					{
						t = t.replace(/\]\[/g, "]" + g + "["), t = t.replace(/\[\]/g, "[ ]");
						let e = t.split(/[\[\]]+/);
						for (let t = 0; t < e.length; t++)
						{
							let r = this.cleanUp(this.unescape(e[t]));
							r !== g && "" !== r && (t % 2 == 0 ? s.push(
							{
								type: "value",
								text: r
							}) : s.push(
							{
								type: i ? "value" : "format",
								text: "[" + r + "]"
							}))
						}
					}
				else
				{
					let e = t.split(/[\[\]]+/);
					for (let t = 0; t < e.length; t++)
					{
						let i = this.cleanUp(this.unescape(e[t]));
						"" !== i && (t % 2 == 0 ? s.push(
						{
							type: "text",
							text: i
						}) : this.isImage(i) ? s.push(
						{
							type: "image",
							text: "[" + i + "]"
						}) : s.push(
						{
							type: "format",
							text: "[" + i + "]"
						}))
					}
				}
			}
			return s
		}
		static isImage(e)
		{
			return !!e.match(/img[ ]?:/)
		}
		static getTextStyle(e)
		{
			let t = {};
			if ("" == e || "[ ]" == e) return {};
			const i = e.match(/('[^']*')|("[^"]*")/gi);
			if (i)
				for (let t = 0; t < i.length; t++) e = e.replace(i[t], i[t].replace(/['"]*/g, "").replace(/[ ]+/g, "+"));
			let s = e.match(/([\w\-]*:[\s]?[^;\s\]]*)|(\#[\w]{1,6})|([\w\-]+)|(\/)/gi);
			if (!s) return {};
			for (let e = 0; e < s.length; e++)
				if (s[e].match(/^(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)$/i)) t.fontWeight = s[e];
				else if (s[e].match(/^(underline|line-through)$/i)) t.textDecoration = s[e];
			else if ("/" == s[e]);
			else if (s[e].match(/:/))
			{
				const i = s[e].replace("+", " ").split(/:[ ]*/);
				t[i[0]] = i[1]
			}
			else t.fill = pe.fromString(s[e]);
			return t
		}
	}

	function pt(e, t)
	{
		if (null != t)
		{
			t = "" + t;
			let i, s = (t = dt.escape(t)).match(/\{([^}]+)\}/g);
			if (s)
				for (i = 0; i < s.length; i++)
				{
					let r = gt(e, s[i].replace(/\{([^}]+)\}/, "$1"), "");
					null == r && (r = ""), t = t.split(s[i]).join(r)
				}
			t = dt.unescape(t)
		}
		else t = "";
		return t
	}

	function gt(e, t, i)
	{
		let s;
		const r = e.dataItem;
		let a, n = [],
			o = /(format[a-zA-Z]*)\((.*)\)|([^.]+)/g;
		for (; a = o.exec(t), null !== a;)
			if (a[3])
			{
				n.push(
				{
					prop: a[3]
				});
				const t = e.getDateFormatter().get("dateFields", []),
					i = e.getNumberFormatter().get("numericFields", []),
					s = e.getDurationFormatter().get("durationFields", []); - 1 !== t.indexOf(a[3]) ? n.push(
				{
					method: "formatDate",
					params: []
				}) : -1 !== i.indexOf(a[3]) ? n.push(
				{
					method: "formatNumber",
					params: []
				}) : -1 !== s.indexOf(a[3]) && n.push(
				{
					method: "formatDuration",
					params: []
				})
			}
		else
		{
			let e = [];
			if ("" != K(a[2]))
			{
				let t, i = /'([^']*)'|"([^"]*)"|([0-9\-]+)/g;
				for (; t = i.exec(a[2]), null !== t;) e.push(t[1] || t[2] || t[3])
			}
			n.push(
			{
				method: a[1],
				params: e
			})
		}
		if (r)
		{
			s = ft(e, n, r._settings), (null == s || p(s)) && (s = ft(e, n, r));
			let a = r.dataContext;
			null == s && a && (s = ft(e, n, a), null == s && (s = ft(e, [
			{
				prop: t
			}], a)), null == s && a.dataContext && (s = ft(e, n, a.dataContext))), null == s && r.component && r.component.dataItem !== r && (s = gt(r.component, t, i))
		}
		return null == s && (s = ft(e, n, e)), null == s && e.parent && (s = gt(e.parent, t, i)), s
	}

	function mt(e, t)
	{
		const i = e.getPrivate("customData");
		if (p(i)) return i[t]
	}

	function ft(e, t, i, s)
	{
		let r = i,
			a = !1;
		for (let h = 0, u = t.length; h < u; h++)
		{
			let u = t[h];
			if (u.prop)
			{
				if (r instanceof et)
				{
					let e = r.get(u.prop);
					null == e && (e = r.getPrivate(u.prop)), null == e && (e = mt(r, u.prop)), null == e && (e = r[u.prop]), r = e
				}
				else if (r.get)
				{
					let e = r.get(u.prop);
					null == e && (e = r[u.prop]), r = e
				}
				else r = r[u.prop];
				if (null == r) return
			}
			else switch (u.method)
			{
			case "formatNumber":
				let t = o(r);
				null != t && (r = e.getNumberFormatter().format(t, s || u.params[0] || void 0), a = !0);
				break;
			case "formatDate":
				let h = l(r);
				if (!c(h) || n(h.getTime())) return;
				null != h && (r = e.getDateFormatter().format(h, s || u.params[0] || void 0), a = !0);
				break;
			case "formatDuration":
				let d = o(r);
				null != d && (r = e.getDurationFormatter().format(d, s || u.params[0] || void 0, u.params[1] || void 0), a = !0);
				break;
			case "urlEncode":
			case "encodeURIComponent":
				r = encodeURIComponent(r);
				break;
			default:
				r[u.method] && r[u.method].apply(i, u.params)
			}
		}
		if (!a)
		{
			let t = [
			{
				method: "",
				params: s
			}];
			if (null == s) d(r) ? (t[0].method = "formatNumber", t[0].params = "") : c(r) && (t[0].method = "formatDate", t[0].params = "");
			else
			{
				let e = function (e)
				{
					if (void 0 === e) return "string";
					let t = (e = (e = (e = e.toLowerCase().replace(/^\[[^\]]*\]/, "")).replace(/\[[^\]]+\]/, "")).trim()).match(/\/(date|number|duration)$/);
					return t ? t[1] : "number" === e ? "number" : "date" === e ? "date" : "duration" === e ? "duration" : e.match(/[#0]/) ? "number" : e.match(/[ymwdhnsqaxkzgtei]/) ? "date" : "string"
				}(s);
				"number" === e ? t[0].method = "formatNumber" : "date" === e ? t[0].method = "formatDate" : "duration" === e && (t[0].method = "formatDuration")
			}
			t[0].method && (r = ft(e, t, r))
		}
		return r
	}
	Object.defineProperty(dt, "prefix",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "__amcharts__"
	});
	class bt extends et
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_display",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this._root._renderer.makeContainer()
			}), Object.defineProperty(this, "_childrenDisplay",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this._root._renderer.makeContainer()
			}), Object.defineProperty(this, "children",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: new De(this)
			}), Object.defineProperty(this, "_percentageSizeChildren",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			}), Object.defineProperty(this, "_percentagePositionChildren",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			}), Object.defineProperty(this, "_prevWidth",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_prevHeight",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_contentWidth",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_contentHeight",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_contentMask",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_vsbd0",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_vsbd1",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			})
		}
		_afterNew()
		{
			super._afterNew(), this._display.addChild(this._childrenDisplay)
		}
		_dispose()
		{
			v(this.allChildren(), (e =>
			{
				e.dispose()
			})), this.getPrivate("htmlElement") && this._root._removeHTMLContent(this), super._dispose()
		}
		_changed()
		{
			if (super._changed(), this.isDirty("interactiveChildren") && (this._display.interactiveChildren = this.get("interactiveChildren", !1)), this.isDirty("layout") && (this._prevWidth = 0, this._prevHeight = 0, this.markDirtyBounds(), this._prevSettings.layout && this.children.each((e =>
				{
					e.removePrivate("x"), e.removePrivate("y")
				}))), (this.isDirty("paddingTop") || this.isDirty("paddingBottom") || this.isDirty("paddingLeft") || this.isDirty("paddingRight")) && this.children.each((e =>
				{
					e.markDirtyPosition()
				})), this.isDirty("maskContent"))
			{
				const e = this._childrenDisplay;
				let t = this._contentMask;
				this.get("maskContent") ? t || (t = nt.new(this._root,
				{
					x: -.5,
					y: -.5,
					width: this.width() + 1,
					height: this.height() + 1
				}), this._contentMask = t, e.addChildAt(t._display, 0), e.mask = t._display) : t && (e.removeChild(t._display), e.mask = null, t.dispose(), this._contentMask = void 0)
			}
		}
		_updateSize()
		{
			super._updateSize(), _(this._percentageSizeChildren, (e =>
			{
				e._updateSize()
			})), _(this._percentagePositionChildren, (e =>
			{
				e.markDirtyPosition(), e._updateSize()
			})), this.updateBackground()
		}
		updateBackground()
		{
			const e = this.get("background");
			let t = this._localBounds;
			if (t && !this.isHidden())
			{
				let i = t.left,
					s = t.top,
					r = t.right - i,
					a = t.bottom - s,
					n = this.get("maxWidth"),
					o = this.get("maxHeight");
				o && a > o && (a = o), n && r > n && (r = n);
				let l = this.width(),
					h = this.height();
				e && (e.setAll(
				{
					width: r,
					height: a,
					x: i,
					y: s
				}), this._display.interactive && (e._display.interactive = !0));
				const c = this._contentMask;
				c && c.setAll(
				{
					width: l + 1,
					height: h + 1
				});
				const u = this.get("verticalScrollbar");
				if (u)
				{
					u.set("height", h), u.set("x", l - u.width() - u.get("marginRight", 0)), u.set("end", u.get("start", 0) + h / this._contentHeight);
					const e = u.get("background");
					e && e.setAll(
					{
						width: u.width(),
						height: h
					});
					let t = !0;
					this._contentHeight <= h && (t = !1), u.setPrivate("visible", t)
				}
			}
		}
		_applyThemes(e = !1)
		{
			return !!super._applyThemes(e) && (this.eachChildren((t =>
			{
				t._applyThemes(e)
			})), !0)
		}
		_applyState(e)
		{
			super._applyState(e), this.get("setStateOnChildren") && this.eachChildren((t =>
			{
				t.states.apply(e)
			}))
		}
		_applyStateAnimated(e, t)
		{
			super._applyStateAnimated(e, t), this.get("setStateOnChildren") && this.eachChildren((i =>
			{
				i.states.applyAnimate(e, t)
			}))
		}
		innerWidth()
		{
			return this.width() - this.get("paddingRight", 0) - this.get("paddingLeft", 0)
		}
		innerHeight()
		{
			return this.height() - this.get("paddingTop", 0) - this.get("paddingBottom", 0)
		}
		_getBounds()
		{
			if (this.get("html"))
			{
				let e = this._localBounds;
				e && (this._contentWidth = e.right - e.left, this._contentHeight = e.bottom - e.top)
			}
			else
			{
				let e = this.get("width"),
					t = this.get("height"),
					i = this.getPrivate("width"),
					s = this.getPrivate("height"),
					r = {
						left: 0,
						top: 0,
						right: this.width(),
						bottom: this.height()
					},
					a = this.get("layout"),
					n = !1,
					o = !1;
				if ((a instanceof ht || a instanceof ut) && (n = !0), a instanceof ct && (o = !0), null == e && null == i || null == t && null == s || this.get("verticalScrollbar"))
				{
					let e = Number.MAX_VALUE,
						t = e,
						i = -e,
						s = e,
						a = -e;
					const l = this.get("paddingLeft", 0),
						h = this.get("paddingTop", 0),
						c = this.get("paddingRight", 0),
						u = this.get("paddingBottom", 0);
					this.children.each((e =>
					{
						if ("absolute" != e.get("position") && e.get("isMeasured"))
						{
							let r = e.adjustedLocalBounds(),
								l = e.x(),
								h = e.y(),
								c = l + r.left,
								u = l + r.right,
								d = h + r.top,
								p = h + r.bottom;
							n && (c -= e.get("marginLeft", 0), u += e.get("marginRight", 0)), o && (d -= e.get("marginTop", 0), p += e.get("marginBottom", 0)), c < t && (t = c), u > i && (i = u), d < s && (s = d), p > a && (a = p)
						}
					})), t == e && (t = 0), i == -e && (i = 0), s == e && (s = 0), a == -e && (a = 0), r.left = t - l, r.top = s - h, r.right = i + c, r.bottom = a + u;
					const p = this.get("minWidth");
					d(p) && p > 0 && r.right - r.left < p && (r.right >= p ? r.left = r.right - p : r.right = r.left + p);
					const g = this.get("minHeight");
					d(g) && g > 0 && r.bottom - r.top < g && (r.bottom >= g ? r.top = r.bottom - g : r.bottom = r.top + g)
				}
				this._contentWidth = r.right - r.left, this._contentHeight = r.bottom - r.top, d(e) && (r.left = 0, r.right = e), d(i) && (r.left = 0, r.right = i), d(t) && (r.top = 0, r.bottom = t), d(s) && (r.top = 0, r.bottom = s), this._localBounds = r
			}
		}
		_updateBounds()
		{
			const e = this.get("layout");
			e && e.updateContainer(this), super._updateBounds(), this.updateBackground()
		}
		markDirty()
		{
			super.markDirty(), this._root._addDirtyParent(this)
		}
		_prepareChildren()
		{
			const e = this.innerWidth(),
				i = this.innerHeight();
			if (e != this._prevWidth || i != this._prevHeight)
			{
				let s = this.get("layout"),
					r = !1,
					a = !1;
				s && ((s instanceof ht || s instanceof ut) && (r = !0), s instanceof ct && (a = !0)), _(this._percentageSizeChildren, (s =>
				{
					if (!r)
					{
						let i = s.get("width");
						i instanceof t && s.setPrivate("width", i.value * e)
					}
					if (!a)
					{
						let e = s.get("height");
						e instanceof t && s.setPrivate("height", e.value * i)
					}
				})), _(this._percentagePositionChildren, (e =>
				{
					e.markDirtyPosition(), e.markDirtyBounds()
				})), this._prevWidth = e, this._prevHeight = i, this._sizeDirty = !0, this.updateBackground()
			}
			this._handleStates()
		}
		_updateHTMLContent()
		{
			const e = this.get("html", "");
			e && "" !== e ? this._root._setHTMLContent(this, pt(this, e)) : this._root._removeHTMLContent(this), this._root._positionHTMLElement(this)
		}
		scrollToChild(e)
		{
			const t = this.get("verticalScrollbar");
			if (t)
			{
				let i = e.y(),
					s = this.innerHeight(),
					r = e.height(),
					a = this._contentHeight,
					n = 1 - (s - r / 2) / a;
				if (i + .7 * r + this._childrenDisplay.y > s || i - .3 * r + this._childrenDisplay.y < 0)
				{
					let e = Math.max(0, Math.min(n, (i - r / 2) / a));
					t.animate(
					{
						key: "start",
						to: e,
						duration: t.get("animationDuration", 0),
						easing: t.get("animationEasing")
					})
				}
			}
		}
		_updateChildren()
		{
			if (this.isDirty("html") && this._updateHTMLContent(), this.isDirty("verticalScrollbar"))
			{
				const e = this.get("verticalScrollbar");
				if (e)
				{
					e._setParent(this), e.startGrip.setPrivate("visible", !1), e.endGrip.setPrivate("visible", !1), this.set("maskContent", !0), this.set("paddingRight", e.width() + e.get("marginRight", 0) + e.get("marginLeft", 0));
					let t = this.get("background");
					t || (t = this.set("background", nt.new(this._root,
					{
						themeTags: ["background"],
						fillOpacity: 0,
						fill: this._root.interfaceColors.get("alternativeBackground")
					}))), this._vsbd0 = this.events.on("wheel", (t =>
					{
						const i = t.originalEvent;
						if (! function (e, t)
							{
								return e.target && function (e, t)
								{
									let i = t;
									for (;;)
									{
										if (e === i) return !0;
										if (null === i.parentNode)
										{
											if (null == i.host) return !1;
											i = i.host
										}
										else i = i.parentNode
									}
								}(t.root.dom, e.target)
							}(i, this)) return;
						i.preventDefault();
						let s = i.deltaY / 5e3;
						const r = e.get("start", 0),
							a = e.get("end", 1);
						r + s <= 0 && (s = -r), a + s >= 1 && (s = 1 - a), r + s >= 0 && a + s <= 1 && (e.set("start", r + s), e.set("end", a + s))
					})), this._disposers.push(this._vsbd0), this._vsbd1 = e.events.on("rangechanged", (() =>
					{
						let t = this._contentHeight;
						const i = this._childrenDisplay,
							s = this._contentMask;
						i.y = -e.get("start", 0) * t, i.markDirtyLayer(), s && (s._display.y = -i.y, i.mask = s._display)
					})), this._disposers.push(this._vsbd1), this._display.addChild(e._display)
				}
				else
				{
					const e = this._prevSettings.verticalScrollbar;
					e && (this._display.removeChild(e._display), this._vsbd0 && this._vsbd0.dispose(), this._vsbd1 && this._vsbd1.dispose(), this._childrenDisplay.y = 0, this.setPrivate("height", void 0), this.set("maskContent", !1), this.set("paddingRight", void 0))
				}
			}
			if (this.isDirty("background"))
			{
				const e = this._prevSettings.background;
				e && this._display.removeChild(e._display);
				const t = this.get("background");
				t instanceof et && (t.set("isMeasured", !1), t._setParent(this), this._display.addChildAt(t._display, 0))
			}
			if (this.isDirty("mask"))
			{
				const e = this.get("mask"),
					t = this._prevSettings.mask;
				if (t && (this._display.removeChild(t._display), t != e && t.dispose()), e)
				{
					const t = e.parent;
					t && t.children.removeValue(e), e._setParent(this), this._display.addChildAt(e._display, 0), this._childrenDisplay.mask = e._display
				}
			}
		}
		_processTemplateField()
		{
			super._processTemplateField(), this.children.each((e =>
			{
				e._processTemplateField()
			}))
		}
		walkChildren(e)
		{
			this.children.each((t =>
			{
				t instanceof bt && t.walkChildren(e), e(t)
			}))
		}
		eachChildren(e)
		{
			const t = this.get("background");
			t && e(t);
			const i = this.get("verticalScrollbar");
			i && e(i);
			const s = this.get("mask");
			s && e(s), this.children.values.forEach((t =>
			{
				e(t)
			}))
		}
		allChildren()
		{
			const e = [];
			return this.eachChildren((t =>
			{
				e.push(t)
			})), e
		}
		_setDataItem(e)
		{
			const t = e !== this._dataItem;
			super._setDataItem(e);
			const i = this.get("html", "");
			i && "" !== i && t && this._root._setHTMLContent(this, pt(this, i))
		}
	}
	Object.defineProperty(bt, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Container"
	}), Object.defineProperty(bt, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: et.classNames.concat([bt.className])
	});
	class _t extends et
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "textStyle",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this._root._renderer.makeTextStyle()
			}), Object.defineProperty(this, "_display",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this._root._renderer.makeText("", this.textStyle)
			}), Object.defineProperty(this, "_textStyles",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: ["textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale", "maxChars"]
			}), Object.defineProperty(this, "_originalScale",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			})
		}
		_updateBounds()
		{
			if (this.get("text"))
			{
				super._updateBounds();
				let e = this.get("fillGradient");
				e && (this._display.style.fill = e.getFill(this))
			}
			else
			{
				let e = {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				};
				this._adjustedLocalBounds = e
			}
		}
		_changed()
		{
			super._changed(), this._display.clear();
			let e = this.textStyle;
			if (this.isDirty("opacity"))
			{
				let e = this.get("opacity", 1);
				this._display.alpha = e
			}
			if ((this.isDirty("text") || this.isDirty("populateText")) && (this._display.text = this._getText(), this.markDirtyBounds(), "tooltip" == this.get("role") && this._root.updateTooltip(this)), this.isPrivateDirty("tooltipElement") && this.getPrivate("tooltipElement") && this._disposers.push(new A((() =>
				{
					this._root._removeTooltipElement(this)
				}))), this.isDirty("width") && (e.wordWrapWidth = this.width(), this.markDirtyBounds()), this.isDirty("oversizedBehavior") && (e.oversizedBehavior = this.get("oversizedBehavior", "none"), this.markDirtyBounds()), this.isDirty("breakWords") && (e.breakWords = this.get("breakWords", !1), this.markDirtyBounds()), this.isDirty("ellipsis") && (e.ellipsis = this.get("ellipsis"), this.markDirtyBounds()), this.isDirty("ignoreFormatting") && (e.ignoreFormatting = this.get("ignoreFormatting", !1), this.markDirtyBounds()), this.isDirty("minScale") && (e.minScale = this.get("minScale", 0), this.markDirtyBounds()), this.isDirty("fill") || this.isDirty("fillGradient"))
			{
				const t = this.get("fill"),
					i = this.get("fillGradient"),
					s = this.get("fillOpacity");
				if (i)
				{
					if (t)
					{
						const e = i.get("stops", []);
						e.length && _(e, (e =>
						{
							e.color && !e.colorInherited || !t || (e.color = t, e.colorInherited = !0), (null == e.opacity || e.opacityInherited) && (e.opacity = s, e.opacityInherited = !0)
						}))
					}
					e.fill = i.getFill(this)
				}
				else t && (e.fill = t)
			}
			if (this.isDirty("fillOpacity"))
			{
				let t = this.get("fillOpacity", 1);
				t && (e.fillOpacity = t)
			}(this.isDirty("maxWidth") || this.isPrivateDirty("maxWidth")) && (e.maxWidth = this.get("maxWidth", this.getPrivate("maxWidth")), this.markDirtyBounds()), (this.isDirty("maxHeight") || this.isPrivateDirty("maxHeight")) && (e.maxHeight = this.get("maxHeight", this.getPrivate("maxHeight")), this.markDirtyBounds()), _(this._textStyles, (t =>
			{
				this._dirty[t] && (e[t] = this.get(t), this.markDirtyBounds())
			})), e.fontSize = this.get("fontSize"), e.fontFamily = this.get("fontFamily"), this._display.style = e, this.isDirty("role") && "tooltip" == this.get("role") && this._root.updateTooltip(this)
		}
		_getText()
		{
			let e = this.get("text", "");
			return this.get("maxChars") && (e = function (e, t, i = !1, s = "...")
			{
				if (e.length > t)
				{
					let r = t - 1;
					for (; r >= 0 && e.charAt(r).match(/\w/);) r--;
					return r >= 0 && 0 == i ? e.substring(0, r + 1) + "..." : e.substring(0, t) + s
				}
				return e
			}(e, this.get("maxChars", 1e8), this.get("breakWords"), this.get("ellipsis"))), this.get("populateText") ? pt(this, e) : e
		}
		_getAccessibleText()
		{
			const e = this.get("ariaLabel");
			return void 0 !== e ? this.get("populateText") ? pt(this, e) : e : this._getText()
		}
		markDirtyText()
		{
			this._display.text = this._getText(), "tooltip" == this.get("role") && this._root.updateTooltip(this), this.markDirtyBounds(), this.markDirty()
		}
		_setDataItem(e)
		{
			super._setDataItem(e), this.get("populateText") && this.markDirtyText()
		}
		getNumberFormatter()
		{
			return this.parent ? this.parent.getNumberFormatter() : super.getNumberFormatter()
		}
		getDateFormatter()
		{
			return this.parent ? this.parent.getDateFormatter() : super.getDateFormatter()
		}
		getDurationFormatter()
		{
			return this.parent ? this.parent.getDurationFormatter() : super.getDurationFormatter()
		}
	}
	Object.defineProperty(_t, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Text"
	}), Object.defineProperty(_t, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: et.classNames.concat([_t.className])
	});
	class vt
	{
		constructor()
		{
			Object.defineProperty(this, "_observer",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_targets",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			}), this._observer = new ResizeObserver((e =>
			{
				_(e, (e =>
				{
					_(this._targets, (t =>
					{
						t.target === e.target && t.callback()
					}))
				}))
			}))
		}
		addTarget(e, t)
		{
			this._observer.observe(e,
			{
				box: "border-box"
			}), this._targets.push(
			{
				target: e,
				callback: t
			})
		}
		removeTarget(e)
		{
			this._observer.unobserve(e), S(this._targets, (t => t.target !== e))
		}
	}
	class yt
	{
		constructor()
		{
			Object.defineProperty(this, "_timer",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: null
			}), Object.defineProperty(this, "_targets",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			})
		}
		addTarget(e, t)
		{
			if (null === this._timer)
			{
				let e = null;
				const t = () =>
				{
					const i = Date.now();
					(null === e || i > e + yt.delay) && (e = i, _(this._targets, (e =>
					{
						let t = e.target.getBoundingClientRect();
						t.width === e.size.width && t.height === e.size.height || (e.size = t, e.callback())
					}))), 0 === this._targets.length ? this._timer = null : this._timer = requestAnimationFrame(t)
				};
				this._timer = requestAnimationFrame(t)
			}
			this._targets.push(
			{
				target: e,
				callback: t,
				size:
				{
					width: 0,
					height: 0,
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					x: 0,
					y: 0
				}
			})
		}
		removeTarget(e)
		{
			S(this._targets, (t => t.target !== e)), 0 === this._targets.length && null !== this._timer && (cancelAnimationFrame(this._timer), this._timer = null)
		}
	}
	Object.defineProperty(yt, "delay",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: 200
	});
	let wt = null;
	class xt
	{
		constructor(e, t)
		{
			Object.defineProperty(this, "_sensor",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_element",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_listener",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_disposed",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), this._sensor = (null === wt && (wt = "undefined" != typeof ResizeObserver ? new vt : new yt), wt), this._element = e, this._listener = H(t), this._sensor.addTarget(e, t)
		}
		isDisposed()
		{
			return this._disposed
		}
		dispose()
		{
			this._disposed || (this._disposed = !0, this._sensor.removeTarget(this._element), this._listener.dispose())
		}
		get sensor()
		{
			return this._sensor
		}
	}
	class kt extends He
	{}
	Object.defineProperty(kt, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "InterfaceColors"
	}), Object.defineProperty(kt, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: He.classNames.concat([kt.className])
	});
	class Pt extends bt
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_text",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_textKeys",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: ["text", "fill", "fillGradient", "fillOpacity", "textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale", "populateText", "role", "ignoreFormatting", "maxChars", "ariaLabel"]
			})
		}
		get text()
		{
			return this._text
		}
		_afterNew()
		{
			super._afterNew(), this._makeText(), _(this._textKeys, (e =>
			{
				const t = this.get(e);
				null != t && this._text.set(e, t)
			})), "" !== this.get("html", "") && this._text.set("text", ""), this.onPrivate("maxWidth", (() =>
			{
				this._setMaxDimentions()
			})), this.onPrivate("maxHeight", (() =>
			{
				this._setMaxDimentions()
			}))
		}
		_makeText()
		{
			this._text = this.children.push(_t.new(this._root,
			{}))
		}
		_updateChildren()
		{
			super._updateChildren();
			const e = this._text;
			if (_(this._textKeys, (e =>
				{
					this._text.set(e, this.get(e))
				})), (this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isDirty("rotation")) && this._setMaxDimentions(), "" !== this.get("html", "") ? e.set("text", "") : (e.set("text", this.get("text")), this._maybeUpdateHTMLColor()), (this.isDirty("fill") || this.isDirty("fillGradient")) && this._maybeUpdateHTMLColor(), this.isDirty("textAlign") || this.isDirty("width"))
			{
				const t = this.get("textAlign");
				let i;
				null != this.get("width") ? i = "right" == t ? s : "center" == t ? r : 0 : "left" == t || "start" == t ? i = this.get("paddingLeft", 0) : "right" != t && "end" != t || (i = -this.get("paddingRight", 0)), e.set("x", i)
			}
			const t = this.get("background");
			t && t.setPrivate("visible", e._display.textVisible)
		}
		_maybeUpdateHTMLColor()
		{
			const e = this.getPrivate("htmlElement");
			e && this.get("fill") && (e.style.color = this.get("fill").toCSSHex())
		}
		_setMaxDimentions()
		{
			const e = this.get("rotation"),
				t = 90 == e || 270 == e || -90 == e,
				i = this._text,
				s = this.get("maxWidth", this.getPrivate("maxWidth", 1 / 0));
			d(s) ? i.set(t ? "maxHeight" : "maxWidth", s - this.get("paddingTop", 0) - this.get("paddingBottom", 0)) : i.set(t ? "maxHeight" : "maxWidth", void 0);
			const r = this.get("maxHeight", this.getPrivate("maxHeight", 1 / 0));
			d(r) ? i.set(t ? "maxWidth" : "maxHeight", r - this.get("paddingLeft", 0) - this.get("paddingRight", 0)) : i.set(t ? "maxWidth" : "maxHeight", void 0), this.root.events.once("frameended", (() =>
			{
				i.markDirtyBounds()
			}))
		}
		_setDataItem(e)
		{
			super._setDataItem(e), this._markDirtyKey("text"), this._markDirtyKey("html");
			const t = this._text;
			t.get("populateText") && t.markDirtyText();
			const i = this.get("html");
			i && "" !== i && this._updateHTMLContent()
		}
		getText()
		{
			return this._text._getText()
		}
		getAccessibleText()
		{
			return this._text._getAccessibleText()
		}
	}
	Object.defineProperty(Pt, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Label"
	}), Object.defineProperty(Pt, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: bt.classNames.concat([Pt.className])
	});
	class Dt extends at
	{
		_beforeChanged()
		{
			super._beforeChanged(), (this.isDirty("pointerBaseWidth") || this.isDirty("cornerRadius") || this.isDirty("pointerLength") || this.isDirty("pointerX") || this.isDirty("pointerY") || this.isDirty("width") || this.isDirty("height")) && (this._clear = !0)
		}
		_changed()
		{
			if (super._changed(), this._clear)
			{
				this.markDirtyBounds();
				let e = this.width(),
					t = this.height();
				if (e > 0 && t > 0)
				{
					let i = this.get("cornerRadius", 8);
					i = Ue(i, 0, Math.min(e / 2, t / 2));
					let s = this.get("pointerX", 0),
						r = this.get("pointerY", 0),
						a = this.get("pointerBaseWidth", 15) / 2,
						n = 0,
						o = 0,
						l = 0,
						h = (s - n) * (t - o) - (r - o) * (e - n),
						c = (s - l) * (0 - t) - (r - t) * (e - l);
					const u = this._display;
					if (u.moveTo(i, 0), h > 0 && c > 0)
					{
						let t = Math.round(Ue(s, i + a, e - a - i));
						r = Ue(r, -1 / 0, 0), u.lineTo(t - a, 0), u.lineTo(s, r), u.lineTo(t + a, 0)
					}
					if (u.lineTo(e - i, 0), u.arcTo(e, 0, e, i, i), h > 0 && c < 0)
					{
						let n = Math.round(Ue(r, i + a, t - a - i));
						s = Ue(s, e, 1 / 0), u.lineTo(e, i), u.lineTo(e, Math.max(n - a, i)), u.lineTo(s, r), u.lineTo(e, n + a)
					}
					if (u.lineTo(e, t - i), u.arcTo(e, t, e - i, t, i), h < 0 && c < 0)
					{
						let n = Math.round(Ue(s, i + a, e - a - i));
						r = Ue(r, t, 1 / 0), u.lineTo(e - i, t), u.lineTo(n + a, t), u.lineTo(s, r), u.lineTo(n - a, t)
					}
					if (u.lineTo(i, t), u.arcTo(0, t, 0, t - i, i), h < 0 && c > 0)
					{
						let e = Math.round(Ue(r, i + a, t - i - a));
						s = Ue(s, -1 / 0, 0), u.lineTo(0, t - i), u.lineTo(0, e + a), u.lineTo(s, r), u.lineTo(0, Math.max(e - a, i))
					}
					u.lineTo(0, i), u.arcTo(0, 0, i, 0, i), u.closePath()
				}
			}
		}
	}
	Object.defineProperty(Dt, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "PointedRectangle"
	}), Object.defineProperty(Dt, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: at.classNames.concat([Dt.className])
	});
	class Tt extends bt
	{
		constructor(e, t, i, s = [])
		{
			super(e, t, i, s), Object.defineProperty(this, "_fx",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_fy",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_label",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_fillDp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_strokeDp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_labelDp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_w",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_h",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_keepHoverDp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_htmlContentHovered",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			})
		}
		_afterNew()
		{
			this._settings.themeTags = ce(this._settings.themeTags, ["tooltip"]), super._afterNew(), this._setDefaultFn("background", (() => Dt.new(this._root,
			{}))).set("themeTags", ["tooltip", "background"]), this._label = this.children.push(Pt.new(this._root,
			{})), this._disposers.push(this._label.events.on("boundschanged", (() =>
			{
				this._updateBackground()
			}))), this._disposers.push(this.on("bounds", (() =>
			{
				this._updateBackground()
			}))), this._updateTextColor(), this._root.tooltipContainer.children.push(this), this.hide(0), this._disposers.push(this.label.onPrivate("htmlElement", (e =>
			{
				e && (this._disposers.push(I(e, "pointerover", (e =>
				{
					this._htmlContentHovered = !0
				}))), this._disposers.push(I(e, "pointerout", (e =>
				{
					this._htmlContentHovered = !1
				}))))
			}))), this.on("visible", (e =>
			{
				this._handleReaderAnnouncement()
			})), this.label.events.on("dataitemchanged", (e =>
			{
				this._handleReaderAnnouncement()
			})), this._root._tooltips.push(this)
		}
		_handleReaderAnnouncement()
		{
			this.get("readerAnnounce") && this.isVisibleDeep() && this._root.readerAlert(this.label.getAccessibleText())
		}
		get label()
		{
			return this._label
		}
		_dispose()
		{
			super._dispose(), w(this._root._tooltips, this)
		}
		_updateChildren()
		{
			super._updateChildren(), (this.isDirty("pointerOrientation") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight")) && this.get("background")._markDirtyKey("width"), null != this.get("labelText") && this.label.set("text", this.get("labelText")), null != this.get("labelHTML") && this.label.set("html", this.get("labelHTML")), null != this.get("labelAriaLabel") && this.label.set("ariaLabel", this.get("labelAriaLabel"))
		}
		_changed()
		{
			if (super._changed(), (this.isDirty("pointTo") || this.isDirty("pointerOrientation")) && this._updateBackground(), this.isDirty("tooltipTarget") && this.updateBackgroundColor(), this.isDirty("keepTargetHover"))
				if (this.get("keepTargetHover"))
				{
					const e = this.get("background");
					this._keepHoverDp = new L([e.events.on("pointerover", (e =>
					{
						let t = this.get("tooltipTarget");
						t && (t.parent && t.parent.getPrivate("tooltipTarget") == t && (t = t.parent), t.hover())
					})), e.events.on("pointerout", (e =>
					{
						let t = this.get("tooltipTarget");
						t && (t.parent && t.parent.getPrivate("tooltipTarget") == t && (t = t.parent), this._htmlContentHovered || t.unhover())
					}))]), this.label.onPrivate("htmlElement", (t =>
					{
						this._keepHoverDp && t && this._keepHoverDp.disposers.push(I(t, "pointerleave", (t =>
						{
							const i = this.root._renderer.getEvent(t);
							e.events.dispatch("pointerout",
							{
								type: "pointerout",
								originalEvent: i.event,
								point: i.point,
								simulated: !1,
								target: e
							})
						})))
					}))
				}
			else this._keepHoverDp && (this._keepHoverDp.dispose(), this._keepHoverDp = void 0)
		}
		_onShow()
		{
			super._onShow(), this.updateBackgroundColor()
		}
		updateBackgroundColor()
		{
			let e = this.get("tooltipTarget");
			const t = this.get("background");
			let i, s;
			e && t && (i = e.get("fill"), s = e.get("stroke"), null == i && (i = s), this.get("getFillFromSprite") && (this._fillDp && this._fillDp.dispose(), null != i && t.set("fill", i), this._fillDp = e.on("fill", (e =>
			{
				null != e && (t.set("fill", e), this._updateTextColor(e))
			})), this._disposers.push(this._fillDp)), this.get("getStrokeFromSprite") && (this._strokeDp && this._strokeDp.dispose(), null != i && t.set("stroke", i), this._strokeDp = e.on("fill", (e =>
			{
				null != e && t.set("stroke", e)
			})), this._disposers.push(this._strokeDp)), this.get("getLabelFillFromSprite") && (this._labelDp && this._labelDp.dispose(), null != i && this.label.set("fill", i), this._labelDp = e.on("fill", (e =>
			{
				null != e && this.label.set("fill", e)
			})), this._disposers.push(this._labelDp))), this._updateTextColor(i)
		}
		_updateTextColor(e)
		{
			this.get("autoTextColor") && (null == e && (e = this.get("background").get("fill")), null == e && (e = this._root.interfaceColors.get("background")), e instanceof pe && this.label.set("fill", pe.alternative(e, this._root.interfaceColors.get("alternativeText"), this._root.interfaceColors.get("text"))))
		}
		_setDataItem(e)
		{
			super._setDataItem(e), this.label._setDataItem(e)
		}
		_updateBackground()
		{
			super.updateBackground();
			const e = this._root.container;
			if (e)
			{
				let i = .5,
					s = .5,
					r = this.get("centerX");
				r instanceof t && (i = r.value);
				let a = this.get("centerY");
				a instanceof t && (s = a.value);
				let n = e.width(),
					o = e.height(),
					l = this.parent,
					h = 0,
					c = 0;
				if (l)
				{
					h = l.x(), c = l.y();
					const e = l.get("layerMargin");
					e && (h += e.left || 0, c += e.top || 0, n += (e.left || 0) + (e.right || 0), o += (e.top || 0) + (e.bottom || 0))
				}
				const u = this.get("bounds",
				{
					left: -h,
					top: -c,
					right: n - h,
					bottom: o - c
				});
				this._updateBounds();
				let d = this.width(),
					p = this.height();
				0 === d && (d = this._w), 0 === p && (p = this._h);
				let g = this.get("pointTo",
					{
						x: n / 2,
						y: o / 2
					}),
					m = g.x,
					f = g.y,
					b = this.get("pointerOrientation"),
					_ = this.get("background"),
					v = 0,
					y = 0,
					w = 0;
				_ instanceof Dt && (v = _.get("pointerLength", 0), y = _.get("strokeWidth", 0) / 2, w = y, _.set("width", d), _.set("height", p));
				let x = 0,
					k = 0,
					P = u.right - u.left,
					D = u.bottom - u.top;
				"horizontal" == b || "left" == b || "right" == b ? (y = 0, "horizontal" == b ? m > u.left + P / 2 ? (m -= d * (1 - i) + v, w *= -1) : m += d * i + v : "left" == b ? m += d * (1 - i) + v : (m -= d * i + v, w *= -1)) : (w = 0, "vertical" == b ? f > u.top + p / 2 + v ? f -= p * (1 - s) + v : (f += p * s + v, y *= -1) : "down" == b ? f -= p * (1 - s) + v : (f += p * s + v, y *= -1)), m = Ue(m, u.left + d * i, u.left + P - d * (1 - i)) + w, f = Ue(f, u.top + p * s, u.top + D - p * (1 - s)) - y, x = g.x - m + d * i + w, k = g.y - f + p * s - y, this._fx = m, this._fy = f;
				const T = this.get("animationDuration", 0);
				if (T > 0 && this.get("visible") && this.get("opacity") > .1)
				{
					const e = this.get("animationEasing");
					this.animate(
					{
						key: "x",
						to: m,
						duration: T,
						easing: e
					}), this.animate(
					{
						key: "y",
						to: f,
						duration: T,
						easing: e
					})
				}
				else this.set("x", m), this.set("y", f);
				_ instanceof Dt && (_.set("pointerX", x), _.set("pointerY", k)), d > 0 && (this._w = d), p > 0 && (this._h = p)
			}
		}
	}
	Object.defineProperty(Tt, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Tooltip"
	}), Object.defineProperty(Tt, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: bt.classNames.concat([Tt.className])
	});
	class Ot extends He
	{
		_setDefaults()
		{
			this._setDefault("negativeBase", 0), this._setDefault("numberFormat", "#,###.#####"), this._setDefault("smallNumberThreshold", 1);
			const e = "_big_number_suffix_",
				t = "_small_number_suffix_",
				i = "_byte_suffix_";
			this._setDefault("bigNumberPrefixes", [
			{
				number: 1e3,
				suffix: this._t(e + "3")
			},
			{
				number: 1e6,
				suffix: this._t(e + "6")
			},
			{
				number: 1e9,
				suffix: this._t(e + "9")
			},
			{
				number: 1e12,
				suffix: this._t(e + "12")
			},
			{
				number: 1e15,
				suffix: this._t(e + "15")
			},
			{
				number: 1e18,
				suffix: this._t(e + "18")
			},
			{
				number: 1e21,
				suffix: this._t(e + "21")
			},
			{
				number: 1e24,
				suffix: this._t(e + "24")
			}]), this._setDefault("smallNumberPrefixes", [
			{
				number: 1e-24,
				suffix: this._t(t + "24")
			},
			{
				number: 1e-21,
				suffix: this._t(t + "21")
			},
			{
				number: 1e-18,
				suffix: this._t(t + "18")
			},
			{
				number: 1e-15,
				suffix: this._t(t + "15")
			},
			{
				number: 1e-12,
				suffix: this._t(t + "12")
			},
			{
				number: 1e-9,
				suffix: this._t(t + "9")
			},
			{
				number: 1e-6,
				suffix: this._t(t + "6")
			},
			{
				number: .001,
				suffix: this._t(t + "3")
			}]), this._setDefault("bytePrefixes", [
			{
				number: 1,
				suffix: this._t(i + "B")
			},
			{
				number: 1024,
				suffix: this._t(i + "KB")
			},
			{
				number: 1048576,
				suffix: this._t(i + "MB")
			},
			{
				number: 1073741824,
				suffix: this._t(i + "GB")
			},
			{
				number: 1099511627776,
				suffix: this._t(i + "TB")
			},
			{
				number: 0x4000000000000,
				suffix: this._t(i + "PB")
			}]), super._setDefaults()
		}
		_beforeChanged()
		{
			super._beforeChanged()
		}
		format(e, t, i)
		{
			let s;
			(null == t || u(t) && "number" === t.toLowerCase()) && (t = this.get("numberFormat", ""));
			let r = Number(e);
			if (p(t)) try
			{
				return this.get("intlLocales") ? new Intl.NumberFormat(this.get("intlLocales"), t).format(r) : new Intl.NumberFormat(void 0, t).format(r)
			}
			catch (e)
			{
				return "Invalid"
			}
			else
			{
				t = $(t);
				let e, n = this.parseFormat(t, this._root.language);
				e = r > this.get("negativeBase") ? n.positive : r < this.get("negativeBase") ? n.negative : n.zero, null == i || e.mod || (a = e, e = Object.assign(
				{}, a), e.decimals.active = 0 == r ? 0 : i), s = e.template.split(g).join(this.applyFormat(r, e))
			}
			var a;
			return !0 === this.get("forceLTR") && (s = "‎" + s), s
		}
		parseFormat(e, t)
		{
			const i = t.translateEmpty("_thousandSeparator"),
				s = t.translateEmpty("_decimalSeparator");
			let r = {
					positive:
					{
						thousands:
						{
							active: -1,
							passive: -1,
							interval: -1,
							separator: i
						},
						decimals:
						{
							active: -1,
							passive: -1,
							separator: s
						},
						template: "",
						source: "",
						parsed: !1
					},
					negative:
					{
						thousands:
						{
							active: -1,
							passive: -1,
							interval: -1,
							separator: i
						},
						decimals:
						{
							active: -1,
							passive: -1,
							separator: s
						},
						template: "",
						source: "",
						parsed: !1
					},
					zero:
					{
						thousands:
						{
							active: -1,
							passive: -1,
							interval: -1,
							separator: i
						},
						decimals:
						{
							active: -1,
							passive: -1,
							separator: s
						},
						template: "",
						source: "",
						parsed: !1
					}
				},
				a = (e = e.replace("||", m)).split("|");
			return r.positive.source = a[0], void 0 === a[2] ? r.zero = r.positive : r.zero.source = a[2], void 0 === a[1] ? r.negative = r.positive : r.negative.source = a[1], C(r, ((e, t) =>
			{
				if (t.parsed) return;
				let i = t.source;
				"number" === i.toLowerCase() && (i = this.get("numberFormat", "#,###.#####"));
				let s = dt.chunk(i, !0);
				for (let e = 0; e < s.length; e++)
				{
					let i = s[e];
					if (i.text = i.text.replace(m, "|"), "value" === i.type)
					{
						let e = i.text.match(/[#0.,]+[ ]?[abespABESP%!]?[abespABESP‰!]?/);
						if (e)
							if (null === e || "" === e[0]) t.template += i.text;
							else
							{
								let s = e[0].match(/[abespABESP%‰!]{2}|[abespABESP%‰]{1}$/);
								s && (t.mod = s[0].toLowerCase(), t.modSpacing = !!e[0].match(/[ ]{1}[abespABESP%‰!]{1}$/));
								let r = e[0].split(".");
								if ("" === r[0]);
								else
								{
									t.thousands.active = (r[0].match(/0/g) || []).length, t.thousands.passive = (r[0].match(/\#/g) || []).length + t.thousands.active;
									let e = r[0].split(",");
									1 === e.length || (t.thousands.interval = (e.pop() || "").length, 0 === t.thousands.interval && (t.thousands.interval = -1))
								}
								void 0 === r[1] || (t.decimals.active = (r[1].match(/0/g) || []).length, t.decimals.passive = (r[1].match(/\#/g) || []).length + t.decimals.active), t.template += i.text.split(e[0]).join(g)
							}
					}
					else t.template += i.text
				}
				t.parsed = !0
			})), r
		}
		applyFormat(e, t)
		{
			let i = e < 0;
			e = Math.abs(e);
			let s = "",
				r = "",
				a = t.mod ? t.mod.split("") : [];
			if (-1 !== a.indexOf("b"))
			{
				let i = this.applyPrefix(e, this.get("bytePrefixes"), -1 !== a.indexOf("!"));
				e = i[0], s = i[1], r = i[2], t.modSpacing && (r = " " + r)
			}
			else if (-1 !== a.indexOf("a"))
			{
				let i = this.applyPrefix(e, e < this.get("smallNumberThreshold") ? this.get("smallNumberPrefixes") : this.get("bigNumberPrefixes"), -1 !== a.indexOf("!"));
				e = i[0], s = i[1], r = i[2], t.modSpacing && (r = " " + r)
			}
			else if (-1 !== a.indexOf("p"))
			{
				let t = Math.min(e.toString().length + 2, 21);
				e = parseFloat(e.toPrecision(t)), s = this._root.language.translate("_percentPrefix"), r = this._root.language.translate("_percentSuffix"), "" == s && "" == r && (r = "%")
			}
			else if (-1 !== a.indexOf("%"))
			{
				let t = Math.min(e.toString().length + 2, 21);
				e *= 100, e = parseFloat(e.toPrecision(t)), r = "%"
			}
			else if (-1 !== a.indexOf("‰"))
			{
				let t = Math.min(e.toString().length + 3, 21);
				e *= 1e3, e = parseFloat(e.toPrecision(t)), r = "‰"
			}
			if (-1 !== a.indexOf("e"))
			{
				let i;
				i = t.decimals.passive >= 0 ? e.toExponential(t.decimals.passive).split("e") : e.toExponential().split("e"), e = Number(i[0]), r = "e" + i[1], t.modSpacing && (r = " " + r)
			}
			else if (0 === t.decimals.passive) e = Math.round(e);
			else if (t.decimals.passive > 0)
			{
				const i = function (e)
				{
					let t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
					return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
				}(e);
				if (i > 0)
				{
					const s = Math.pow(10, t.decimals.passive);
					e = Math.round(parseFloat((e * s).toFixed(i))) / s
				}
			}
			let o = "",
				l = function (e)
				{
					if (n(e)) return "NaN";
					if (e === 1 / 0) return "Infinity";
					if (e === -1 / 0) return "-Infinity";
					if (0 === e && 1 / e == -1 / 0) return "-0";
					let t = e < 0;
					e = Math.abs(e);
					let i, s = /^([0-9]+)(?:\.([0-9]+))?(?:e[\+\-]([0-9]+))?$/.exec("" + e),
						r = s[1],
						a = s[2] || "";
					if (void 0 === s[3]) i = "" === a ? r : r + "." + a;
					else
					{
						let t = +s[3];
						if (e < 1) i = "0." + h("0", t - 1) + r + a;
						else
						{
							let e = t - a.length;
							i = 0 === e ? r + a : e < 0 ? r + a.slice(0, e) + "." + a.slice(e) : r + a + h("0", e)
						}
					}
					return t ? "-" + i : i
				}(e).split("."),
				c = l[0];
			if (c.length < t.thousands.active && (c = Array(t.thousands.active - c.length + 1).join("0") + c), t.thousands.interval > 0)
			{
				let e = [],
					i = c.split("").reverse().join("");
				for (let s = 0, r = c.length; s <= r; s += t.thousands.interval)
				{
					let r = i.substr(s, t.thousands.interval).split("").reverse().join("");
					"" !== r && e.unshift(r)
				}
				c = e.join(t.thousands.separator)
			}
			o += c, 1 === l.length && l.push("");
			let u = l[1];
			return u.length < t.decimals.active && (u += Array(t.decimals.active - u.length + 1).join("0")), "" !== u && (o += t.decimals.separator + u), "" === o && (o = "0"), 0 !== e && i && -1 === a.indexOf("s") && (o = "-" + o), s && (o = s + o), r && (o += r), o
		}
		applyPrefix(e, t, i = !1)
		{
			let s = e,
				r = "",
				a = "",
				n = !1,
				o = 1;
			for (let i = 0, l = t.length; i < l; i++) t[i].number <= e && (0 === t[i].number ? s = 0 : (s = e / t[i].number, o = t[i].number), r = t[i].prefix, a = t[i].suffix, n = !0);
			return !n && i && t.length && 0 != e && (s = e / t[0].number, r = t[0].prefix, a = t[0].suffix, n = !0), n && (s = parseFloat(s.toPrecision(Math.min(o.toString().length + Math.floor(s).toString().replace(/[^0-9]*/g, "").length, 21)))), [s, r, a]
		}
		escape(e)
		{
			return e.replace("||", m)
		}
		unescape(e)
		{
			return e.replace(m, "|")
		}
	}

	function St(e, t)
	{
		let i = 0,
			s = 0,
			r = 1,
			a = 0,
			n = 0,
			o = 0,
			l = 0,
			h = 0;
		return e.formatToParts(t).forEach((e =>
		{
			switch (e.type)
			{
			case "year":
				i = +e.value;
				break;
			case "month":
				s = +e.value - 1;
				break;
			case "day":
				r = +e.value;
				break;
			case "hour":
				a = +e.value;
				break;
			case "minute":
				n = +e.value;
				break;
			case "second":
				o = +e.value;
				break;
			case "fractionalSecond":
				l = +e.value;
				break;
			case "weekday":
				switch (e.value)
				{
				case "Sun":
					h = 0;
					break;
				case "Mon":
					h = 1;
					break;
				case "Tue":
					h = 2;
					break;
				case "Wed":
					h = 3;
					break;
				case "Thu":
					h = 4;
					break;
				case "Fri":
					h = 5;
					break;
				case "Sat":
					h = 6
				}
			}
		})), 24 === a && (a = 0),
		{
			year: i,
			month: s,
			day: r,
			hour: a,
			minute: n,
			second: o,
			millisecond: l,
			weekday: h
		}
	}

	function Et(e, t)
	{
		const
		{
			year: i,
			month: s,
			day: r,
			hour: a,
			minute: n,
			second: o,
			millisecond: l
		} = St(e, t);
		return Date.UTC(i, s, r, a, n, o, l)
	}
	class Ct
	{
		constructor(e, t)
		{
			if (Object.defineProperty(this, "_utc",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_dtf",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "name",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), !t) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
			this.name = e, this._utc = new Intl.DateTimeFormat("en-US",
			{
				hour12: !1,
				timeZone: "UTC",
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				weekday: "short",
				fractionalSecondDigits: 3
			}), this._dtf = new Intl.DateTimeFormat("en-US",
			{
				hour12: !1,
				timeZone: e,
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				weekday: "short",
				fractionalSecondDigits: 3
			})
		}
		static new(e)
		{
			return new this(e, !0)
		}
		convertLocal(e)
		{
			const t = this.offsetUTC(e),
				i = e.getTimezoneOffset(),
				s = new Date(e);
			s.setUTCMinutes(s.getUTCMinutes() - (t - i));
			const r = s.getTimezoneOffset();
			return i != r && s.setUTCMinutes(s.getUTCMinutes() + r - i), s
		}
		offsetUTC(e)
		{
			return (Et(this._utc, e) - Et(this._dtf, e)) / 6e4
		}
		parseDate(e)
		{
			return St(this._dtf, e)
		}
	}
	class jt extends He
	{
		_setDefaults()
		{
			this._setDefault("capitalize", !0), this._setDefault("dateFormat", "yyyy-MM-dd"), super._setDefaults()
		}
		_beforeChanged()
		{
			super._beforeChanged()
		}
		format(e, t, i = !1)
		{
			let s;
			void 0 !== t && "" !== t || (t = this.get("dateFormat", "yyyy-MM-dd"));
			let r = e;
			if (p(t)) try
			{
				const e = this.get("intlLocales");
				return e ? new Intl.DateTimeFormat(e, t).format(r) : new Intl.DateTimeFormat(void 0, t).format(r)
			}
			catch (e)
			{
				return "Invalid"
			}
			let a = this.parseFormat(t);
			const n = this._root.timezone;
			let o = r;
			return !n || this._root.utc || i || (r = n.convertLocal(r)), d(r.getTime()) ? (s = this.applyFormat(r, a, i, o), this.get("capitalize") && (s = s.replace(/^.{1}/, s.substr(0, 1).toUpperCase())), s) : "Invalid date"
		}
		applyFormat(e, t, i = !1, s)
		{
			let r, a, n, o, l, h, c, u, d = t.template,
				p = e.getTime();
			this._root.utc && !i ? (r = e.getUTCFullYear(), a = e.getUTCMonth(), n = e.getUTCDay(), o = e.getUTCDate(), l = e.getUTCHours(), h = e.getUTCMinutes(), c = e.getUTCSeconds(), u = e.getUTCMilliseconds()) : (r = e.getFullYear(), a = e.getMonth(), n = e.getDay(), o = e.getDate(), l = e.getHours(), h = e.getMinutes(), c = e.getSeconds(), u = e.getMilliseconds());
			for (let i = 0, m = t.parts.length; i < m; i++)
			{
				let m = "";
				switch (t.parts[i])
				{
				case "G":
					m = this._t(r < 0 ? "_era_bc" : "_era_ad");
					break;
				case "yyyy":
					m = Math.abs(r).toString(), r < 0 && (m += this._t("_era_bc"));
					break;
				case "yyy":
				case "yy":
				case "y":
					m = Math.abs(r).toString().substr(-t.parts[i].length), r < 0 && (m += this._t("_era_bc"));
					break;
				case "YYYY":
				case "YYY":
				case "YY":
				case "Y":
					let d = te(e, this._root.utc);
					m = "YYYY" == t.parts[i] ? Math.abs(d).toString() : Math.abs(d).toString().substr(-t.parts[i].length), d < 0 && (m += this._t("_era_bc"));
					break;
				case "u":
				case "F":
				case "g":
					break;
				case "q":
					m = "" + Math.ceil((e.getMonth() + 1) / 3);
					break;
				case "MMMMM":
					m = this._t(this._getMonth(a)).substr(0, 1);
					break;
				case "MMMM":
					m = this._t(this._getMonth(a));
					break;
				case "MMM":
					m = this._t(this._getShortMonth(a));
					break;
				case "MM":
					m = X(a + 1, 2, "0");
					break;
				case "M":
					m = (a + 1).toString();
					break;
				case "ww":
					m = X(ee(e, this._root.utc), 2, "0");
					break;
				case "w":
					m = ee(e, this._root.utc).toString();
					break;
				case "W":
					m = ie(e, this._root.utc).toString();
					break;
				case "dd":
					m = X(o, 2, "0");
					break;
				case "d":
					m = o.toString();
					break;
				case "DD":
				case "DDD":
					m = X(Q(e, this._root.utc).toString(), t.parts[i].length, "0");
					break;
				case "D":
					m = Q(e, this._root.utc).toString();
					break;
				case "t":
					m = this._root.language.translateFunc("_dateOrd").call(this, o);
					break;
				case "E":
					m = (n || 7).toString();
					break;
				case "EE":
					m = X((n || 7).toString(), 2, "0");
					break;
				case "EEE":
				case "eee":
					m = this._t(this._getShortWeekday(n));
					break;
				case "EEEE":
				case "eeee":
					m = this._t(this._getWeekday(n));
					break;
				case "EEEEE":
				case "eeeee":
					m = this._t(this._getShortWeekday(n)).substr(0, 1);
					break;
				case "e":
				case "ee":
					m = (n - (this._root.locale.firstDayOfWeek || 1) + 1).toString(), "ee" == t.parts[i] && (m = X(m, 2, "0"));
					break;
				case "a":
					m = l >= 12 ? this._t("PM") : this._t("AM");
					break;
				case "aa":
					m = l >= 12 ? this._t("P.M.") : this._t("A.M.");
					break;
				case "aaa":
					m = l >= 12 ? this._t("P") : this._t("A");
					break;
				case "h":
					m = se(l).toString();
					break;
				case "hh":
					m = X(se(l), 2, "0");
					break;
				case "H":
					m = l.toString();
					break;
				case "HH":
					m = X(l, 2, "0");
					break;
				case "K":
					m = se(l, 0).toString();
					break;
				case "KK":
					m = X(se(l, 0), 2, "0");
					break;
				case "k":
					m = (l + 1).toString();
					break;
				case "kk":
					m = X(l + 1, 2, "0");
					break;
				case "m":
					m = h.toString();
					break;
				case "mm":
					m = X(h, 2, "0");
					break;
				case "s":
					m = c.toString();
					break;
				case "ss":
					m = X(c, 2, "0");
					break;
				case "S":
				case "SS":
				case "SSS":
					m = Math.round(u / 1e3 * Math.pow(10, t.parts[i].length)).toString();
					break;
				case "x":
					m = p.toString();
					break;
				case "n":
				case "nn":
				case "nnn":
					m = X(u, t.parts[i].length, "0");
					break;
				case "z":
					m = re(s || e, !1, !1, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
					break;
				case "zz":
					m = re(s || e, !0, !1, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
					break;
				case "zzz":
					m = re(s || e, !1, !0, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
					break;
				case "zzzz":
					m = re(s || e, !0, !0, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
					break;
				case "Z":
				case "ZZ":
					let g = this._root.utc ? "UTC" : this._root.timezone;
					g instanceof Ct && (g = g.name);
					const f = g ? ae(g, s || e) : e.getTimezoneOffset();
					let b = Math.abs(f) / 60,
						_ = Math.floor(b),
						v = 60 * b - 60 * _;
					this._root.utc && (_ = 0, v = 0), "Z" == t.parts[i] ? (m = "GMT", m += f > 0 ? "-" : "+", m += X(_, 2) + ":" + X(v, 2)) : (m = f > 0 ? "-" : "+", m += X(_, 2) + X(v, 2));
					break;
				case "i":
					m = e.toISOString();
					break;
				case "I":
					m = e.toUTCString()
				}
				d = d.replace(g, m)
			}
			return d
		}
		parseFormat(e)
		{
			let t = {
					template: "",
					parts: []
				},
				i = dt.chunk(e, !0);
			for (let e = 0; e < i.length; e++)
			{
				let s = i[e];
				if ("value" === s.type)
				{
					if (s.text.match(/^date$/i))
					{
						let e = this.get("dateFormat", "yyyy-MM-dd");
						u(e) || (e = "yyyy-MM-dd"), s.text = e
					}
					let e = s.text.match(/G|yyyy|yyy|yy|y|YYYY|YYY|YY|Y|u|q|MMMMM|MMMM|MMM|MM|M|ww|w|W|dd|d|DDD|DD|D|F|g|EEEEE|EEEE|EEE|EE|E|eeeee|eeee|eee|ee|e|aaa|aa|a|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|SSS|SS|S|A|zzzz|zzz|zz|z|ZZ|Z|t|x|nnn|nn|n|i|I/g);
					if (e)
						for (let i = 0; i < e.length; i++) t.parts.push(e[i]), s.text = s.text.replace(e[i], g)
				}
				t.template += s.text
			}
			return t
		}
		_months()
		{
			return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		}
		_getMonth(e)
		{
			return this._months()[e]
		}
		_shortMonths()
		{
			return ["Jan", "Feb", "Mar", "Apr", "May(short)", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		}
		_getShortMonth(e)
		{
			return this._shortMonths()[e]
		}
		_weekdays()
		{
			return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		}
		_getWeekday(e)
		{
			return this._weekdays()[e]
		}
		_shortWeekdays()
		{
			return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		}
		_getShortWeekday(e)
		{
			return this._shortWeekdays()[e]
		}
		parse(e, t, i)
		{
			if (void 0 === i && (i = this._root.utc), e instanceof Date) return e;
			if (d(e)) return new Date(e);
			if ("x" == t) return new Date(parseInt(e));
			let s;
			u(e) || (e = e.toString());
			let r = "";
			t = (t = $(t)).substr(0, e.length);
			let a = this.parseFormat(t),
				n = {
					year: -1,
					year3: -1,
					year2: -1,
					year1: -1,
					month: -1,
					monthShort: -1,
					monthLong: -1,
					weekdayShort: -1,
					weekdayLong: -1,
					day: -1,
					yearDay: -1,
					week: -1,
					hourBase0: -1,
					hour12Base0: -1,
					hourBase1: -1,
					hour12Base1: -1,
					minute: -1,
					second: -1,
					millisecond: -1,
					millisecondDigits: -1,
					am: -1,
					zone: -1,
					timestamp: -1,
					iso: -1
				},
				l = {
					year: 1970,
					month: 0,
					day: 1,
					hour: 0,
					minute: 0,
					second: 0,
					millisecond: 0,
					timestamp: null,
					offset: 0,
					utc: i
				},
				h = 0,
				c = 0;
			for (let e = 0; e < a.parts.length; e++)
			{
				switch (c = e + h + 1, a.parts[e])
				{
				case "yyyy":
				case "YYYY":
					r += "([0-9]{4})", n.year = c;
					break;
				case "yyy":
				case "YYY":
					r += "([0-9]{3})", n.year3 = c;
					break;
				case "yy":
				case "YY":
					r += "([0-9]{2})", n.year2 = c;
					break;
				case "y":
				case "Y":
					r += "([0-9]{1})", n.year1 = c;
					break;
				case "MMMM":
					r += "(" + this.getStringList(this._months()).join("|") + ")", n.monthLong = c;
					break;
				case "MMM":
					r += "(" + this.getStringList(this._shortMonths()).join("|") + ")", n.monthShort = c;
					break;
				case "MM":
				case "M":
					r += "([0-9]{2}|[0-9]{1})", n.month = c;
					break;
				case "ww":
				case "w":
					r += "([0-9]{2}|[0-9]{1})", n.week = c;
					break;
				case "dd":
				case "d":
					r += "([0-9]{2}|[0-9]{1})", n.day = c;
					break;
				case "DDD":
				case "DD":
				case "D":
					r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", n.yearDay = c;
					break;
				case "dddd":
					r += "(" + this.getStringList(this._weekdays()).join("|") + ")", n.weekdayLong = c;
					break;
				case "ddd":
					r += "(" + this.getStringList(this._shortWeekdays()).join("|") + ")", n.weekdayShort = c;
					break;
				case "aaa":
				case "aa":
				case "a":
					r += "(" + this.getStringList(["AM", "PM", "A.M.", "P.M.", "A", "P"]).join("|") + ")", n.am = c;
					break;
				case "hh":
				case "h":
					r += "([0-9]{2}|[0-9]{1})", n.hour12Base1 = c;
					break;
				case "HH":
				case "H":
					r += "([0-9]{2}|[0-9]{1})", n.hourBase0 = c;
					break;
				case "KK":
				case "K":
					r += "([0-9]{2}|[0-9]{1})", n.hour12Base0 = c;
					break;
				case "kk":
				case "k":
					r += "([0-9]{2}|[0-9]{1})", n.hourBase1 = c;
					break;
				case "mm":
				case "m":
					r += "([0-9]{2}|[0-9]{1})", n.minute = c;
					break;
				case "ss":
				case "s":
					r += "([0-9]{2}|[0-9]{1})", n.second = c;
					break;
				case "SSS":
				case "SS":
				case "S":
					r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", n.millisecond = c, n.millisecondDigits = a.parts[e].length;
					break;
				case "nnn":
				case "nn":
				case "n":
					r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", n.millisecond = c;
					break;
				case "x":
					r += "([0-9]{1,})", n.timestamp = c;
					break;
				case "Z":
					r += "GMT([-+]+[0-9]{2}:[0-9]{2})", n.zone = c;
					break;
				case "ZZ":
					r += "([\\-+]+[0-9]{2}[0-9]{2})", n.zone = c;
					break;
				case "i":
					r += "([0-9]{4})-?([0-9]{2})-?([0-9]{2})T?([0-9]{2}):?([0-9]{2}):?([0-9]{2})\\.?([0-9]{0,3})([zZ]|[+\\-][0-9]{2}:?[0-9]{2}|$)", n.iso = c, h += 7;
					break;
				case "G":
				case "YYYY":
				case "YYY":
				case "YY":
				case "Y":
				case "MMMMM":
				case "W":
				case "EEEEE":
				case "EEEE":
				case "EEE":
				case "EE":
				case "E":
				case "eeeee":
				case "eeee":
				case "eee":
				case "ee":
				case "e":
				case "zzzz":
				case "zzz":
				case "zz":
				case "z":
				case "t":
					h--
				}
				r += "[^0-9]*"
			}
			let p = new RegExp(r),
				g = e.match(p);
			if (g)
			{
				if (n.year > -1 && (l.year = parseInt(g[n.year])), n.year3 > -1)
				{
					let e = parseInt(g[n.year3]);
					e += 1e3, l.year = e
				}
				if (n.year2 > -1)
				{
					let e = parseInt(g[n.year2]);
					e += e > 50 ? 1e3 : 2e3, l.year = e
				}
				if (n.year1 > -1)
				{
					let e = parseInt(g[n.year1]);
					e = 10 * Math.floor((new Date).getFullYear() / 10) + e, l.year = e
				}
				if (n.monthLong > -1 && (l.month = this.resolveMonth(g[n.monthLong])), n.monthShort > -1 && (l.month = this.resolveShortMonth(g[n.monthShort])), n.month > -1 && (l.month = parseInt(g[n.month]) - 1), n.week > -1 && -1 === n.day && (l.month = 0, l.day = function (e, t, i = 1, s = !1)
					{
						let r = new Date(t, 0, 4, 0, 0, 0, 0);
						return s && r.setUTCFullYear(t), 7 * e + i - ((r.getDay() || 7) + 3)
					}(parseInt(g[n.week]), l.year, 1, i)), n.day > -1 && (l.day = parseInt(g[n.day])), n.yearDay > -1 && (l.month = 0, l.day = parseInt(g[n.yearDay])), n.hourBase0 > -1 && (l.hour = parseInt(g[n.hourBase0])), n.hourBase1 > -1 && (l.hour = parseInt(g[n.hourBase1]) - 1), n.hour12Base0 > -1)
				{
					let e = parseInt(g[n.hour12Base0]);
					11 == e && (e = 0), n.am > -1 && !this.isAm(g[n.am]) && (e += 12), l.hour = e
				}
				if (n.hour12Base1 > -1)
				{
					let e = parseInt(g[n.hour12Base1]);
					12 == e && (e = 0), n.am > -1 && !this.isAm(g[n.am]) && (e += 12), l.hour = e
				}
				if (n.minute > -1 && (l.minute = parseInt(g[n.minute])), n.second > -1 && (l.second = parseInt(g[n.second])), n.millisecond > -1)
				{
					let e = parseInt(g[n.millisecond]);
					2 == n.millisecondDigits ? e *= 10 : 1 == n.millisecondDigits && (e *= 100), l.millisecond = e
				}
				if (n.timestamp > -1)
				{
					l.timestamp = parseInt(g[n.timestamp]);
					const e = new Date(l.timestamp);
					l.year = e.getUTCFullYear(), l.month = e.getUTCMonth(), l.day = e.getUTCDate(), l.hour = e.getUTCHours(), l.minute = e.getUTCMinutes(), l.second = e.getUTCSeconds(), l.millisecond = e.getUTCMilliseconds()
				}
				n.zone > -1 && (l.offset = this.resolveTimezoneOffset(new Date(l.year, l.month, l.day), g[n.zone])), n.iso > -1 && (l.year = o(g[n.iso + 0]), l.month = o(g[n.iso + 1]) - 1, l.day = o(g[n.iso + 2]), l.hour = o(g[n.iso + 3]), l.minute = o(g[n.iso + 4]), l.second = o(g[n.iso + 5]), l.millisecond = o(g[n.iso + 6]), "Z" == g[n.iso + 7] || "z" == g[n.iso + 7] ? l.utc = !0 : "" != g[n.iso + 7] && (l.offset = this.resolveTimezoneOffset(new Date(l.year, l.month, l.day), g[n.iso + 7]))), s = l.utc ? new Date(Date.UTC(l.year, l.month, l.day, l.hour, l.minute, l.second, l.millisecond)) : new Date(l.year, l.month, l.day, l.hour, l.minute + l.offset, l.second, l.millisecond)
			}
			else s = new Date(e);
			return s
		}
		resolveTimezoneOffset(e, t)
		{
			if (t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/))
			{
				let i = t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/),
					s = i[1],
					r = i[2],
					a = i[3],
					n = 60 * parseInt(r) + parseInt(a);
				return "+" == s && (n *= -1), n - (e || new Date).getTimezoneOffset()
			}
			return 0
		}
		resolveMonth(e)
		{
			let t = this._months().indexOf(e);
			return t > -1 || !this._root.language.isDefault() && (t = this._root.language.translateAll(this._months()).indexOf(e), t > -1) ? t : 0
		}
		resolveShortMonth(e)
		{
			let t = this._shortMonths().indexOf(e);
			return t > -1 ? t : (t = this._months().indexOf(e), t > -1 || this._root.language && !this._root.language.isDefault() && (t = this._root.language.translateAll(this._shortMonths()).indexOf(e), t > -1) ? t : 0)
		}
		isAm(e)
		{
			return this.getStringList(["AM", "A.M.", "A"]).indexOf(e.toUpperCase()) > -1
		}
		getStringList(e)
		{
			let t = [];
			for (let i = 0; i < e.length; i++) this._root.language ? t.push(J(this._t(e[i]))) : t.push(J(e[i]));
			return t
		}
	}
	class Mt extends He
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_unitAliases",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{
					Y: "y",
					D: "d",
					H: "h",
					K: "h",
					k: "h",
					n: "S"
				}
			})
		}
		_setDefaults()
		{
			const e = "_duration_millisecond",
				t = "_duration_second",
				i = "_duration_minute",
				s = "_duration_hour",
				r = "_duration_day",
				a = "_duration_week",
				n = "_duration_month",
				o = "_minute",
				l = "_hour",
				h = "_day",
				c = "_week",
				u = "_week",
				d = "_year";
			this._setDefault("negativeBase", 0), this._setDefault("baseUnit", "second"), this._setDefault("durationFormats",
			{
				millisecond:
				{
					millisecond: this._t(e),
					second: this._t(e + "_second"),
					minute: this._t(e + o),
					hour: this._t(e + l),
					day: this._t(e + h),
					week: this._t(e + c),
					month: this._t(e + u),
					year: this._t(e + d)
				},
				second:
				{
					second: this._t(t),
					minute: this._t(t + o),
					hour: this._t(t + l),
					day: this._t(t + h),
					week: this._t(t + c),
					month: this._t(t + u),
					year: this._t(t + d)
				},
				minute:
				{
					minute: this._t(i),
					hour: this._t(i + l),
					day: this._t(i + h),
					week: this._t(i + c),
					month: this._t(i + u),
					year: this._t(i + d)
				},
				hour:
				{
					hour: this._t(s),
					day: this._t(s + h),
					week: this._t(s + c),
					month: this._t(s + u),
					year: this._t(s + d)
				},
				day:
				{
					day: this._t(r),
					week: this._t(r + c),
					month: this._t(r + u),
					year: this._t(r + d)
				},
				week:
				{
					week: this._t(a),
					month: this._t(a + u),
					year: this._t(a + d)
				},
				month:
				{
					month: this._t(n),
					year: this._t(n + d)
				},
				year:
				{
					year: this._t("_duration_year")
				}
			}), super._setDefaults()
		}
		_beforeChanged()
		{
			super._beforeChanged()
		}
		format(e, t, i)
		{
			let s = i || this.get("baseUnit");
			void 0 !== t && "" !== t || (t = null != this.get("durationFormat") ? this.get("durationFormat") : this.getFormat(o(e), void 0, s)), t = $(t);
			let r, a = this.parseFormat(t, s),
				n = Number(e);
			r = n > this.get("negativeBase") ? a.positive : n < this.get("negativeBase") ? a.negative : a.zero;
			let l = this.applyFormat(n, r);
			return "" !== r.color && (l = "[" + r.color + "]" + l + "[/]"), l
		}
		parseFormat(e, t)
		{
			let i = t || this.get("baseUnit"),
				s = {
					positive:
					{
						color: "",
						template: "",
						parts: [],
						source: "",
						baseUnit: i,
						parsed: !1,
						absolute: !1
					},
					negative:
					{
						color: "",
						template: "",
						parts: [],
						source: "",
						baseUnit: i,
						parsed: !1,
						absolute: !1
					},
					zero:
					{
						color: "",
						template: "",
						parts: [],
						source: "",
						baseUnit: i,
						parsed: !1,
						absolute: !1
					}
				},
				r = (e = e.replace("||", m)).split("|");
			return s.positive.source = r[0], void 0 === r[2] ? s.zero = s.positive : s.zero.source = r[2], void 0 === r[1] ? s.negative = s.positive : s.negative.source = r[1], C(s, ((e, t) =>
			{
				if (t.parsed) return;
				let i = t.source,
					s = [];
				s = t.source.match(/^\[([^\]]*)\]/), s && s.length && "" !== s[0] && (i = t.source.substr(s[0].length), t.color = s[1]);
				let r = dt.chunk(i, !0);
				for (let e = 0; e < r.length; e++)
				{
					let i = r[e];
					if (i.text = i.text.replace(m, "|"), "value" === i.type)
					{
						i.text.match(/[yYMdDwhHKkmsSn]+a/) && (t.absolute = !0, i.text = i.text.replace(/([yYMdDwhHKkmsSn]+)a/, "$1"));
						let e = i.text.match(/y+|Y+|M+|d+|D+|w+|h+|H+|K+|k+|m+|s+|S+|n+/g);
						if (e)
							for (let s = 0; s < e.length; s++) null == e[s] && (e[s] = this._unitAliases[e[s]]), t.parts.push(e[s]), i.text = i.text.replace(e[s], g)
					}
					t.template += i.text
				}
				t.parsed = !0
			})), s
		}
		applyFormat(e, t)
		{
			let i = !t.absolute && e < this.get("negativeBase");
			e = Math.abs(e);
			let s = this.toTimeStamp(e, t.baseUnit),
				r = t.template;
			const a = {
				millisecond: 0,
				second: 0,
				minute: 0,
				hour: 0,
				day: 0,
				week: 0,
				month: 0,
				year: 0
			};
			for (let e = 0, i = t.parts.length; e < i; e++)
			{
				let r, n = t.parts[e],
					o = this._toTimeUnit(n.substr(0, 1));
				const l = this._getUnitValue(o);
				r = e < i - 1 ? Math.floor(s / l) : Math.round(s / l), a[o] += r, s -= r * l
			}
			C(a, ((e, t) =>
			{
				"millisecond" == e && 1e3 == t ? (a.second++, a.millisecond = 0) : "second" == e && 60 == t ? (a.minute++, a.second = 0) : "minute" == e && 60 == t ? (a.hour++, a.minute = 0) : "hour" == e && 24 == t ? (a.day++, a.hour = 0) : "day" == e && 7 == t ? (a.week++, a.day = 0) : "day" == e && 30 == t ? (a.month++, a.day = 0) : "month" == e && 12 == t && (a.year++, a.month = 0)
			}));
			for (let e = 0, i = t.parts.length; e < i; e++)
			{
				let i = t.parts[e],
					s = this._toTimeUnit(i.substr(0, 1)),
					n = i.length;
				r = r.replace(g, X(a[s], n, "0"))
			}
			return i && (r = "-" + r), r
		}
		toTimeStamp(e, t)
		{
			return e * this._getUnitValue(t)
		}
		_toTimeUnit(e)
		{
			switch (e)
			{
			case "S":
				return "millisecond";
			case "s":
				return "second";
			case "m":
				return "minute";
			case "h":
				return "hour";
			case "d":
				return "day";
			case "w":
				return "week";
			case "M":
				return "month";
			case "y":
				return "year"
			}
		}
		getFormat(e, t, i)
		{
			if (null != this.get("durationFormat")) return this.get("durationFormat");
			if (i || (i = this.get("baseUnit")), null != t && e != t)
			{
				e = Math.abs(e), t = Math.abs(t);
				let s = this.getValueUnit(Math.max(e, t), i);
				return this.get("durationFormats")[i][s]
			}
			{
				let t = this.getValueUnit(e, i);
				return this.get("durationFormats")[i][t]
			}
		}
		getValueUnit(e, t)
		{
			let i;
			t || (t = this.get("baseUnit"));
			let s = this.getMilliseconds(e, t);
			return function (e, t)
			{
				for (let i in e)
					if (j(e, i) && !t(i, e[i])) break
			}(this._getUnitValues(), ((e, r) =>
			{
				if (e == t || i)
				{
					if (s / r <= 1) return i || (i = e), !1;
					i = e
				}
				return !0
			})), i
		}
		getMilliseconds(e, t)
		{
			return t || (t = this.get("baseUnit")), e * this._getUnitValue(t)
		}
		_getUnitValue(e)
		{
			return this._getUnitValues()[e]
		}
		_getUnitValues()
		{
			return {
				millisecond: 1,
				second: 1e3,
				minute: 6e4,
				hour: 36e5,
				day: 864e5,
				week: 6048e5,
				month: 2592e6,
				year: 31536e6
			}
		}
	}
	const At = {
		firstDayOfWeek: 1,
		_decimalSeparator: ".",
		_thousandSeparator: ",",
		_percentPrefix: null,
		_percentSuffix: "%",
		_big_number_suffix_3: "k",
		_big_number_suffix_6: "M",
		_big_number_suffix_9: "G",
		_big_number_suffix_12: "T",
		_big_number_suffix_15: "P",
		_big_number_suffix_18: "E",
		_big_number_suffix_21: "Z",
		_big_number_suffix_24: "Y",
		_small_number_suffix_3: "m",
		_small_number_suffix_6: "μ",
		_small_number_suffix_9: "n",
		_small_number_suffix_12: "p",
		_small_number_suffix_15: "f",
		_small_number_suffix_18: "a",
		_small_number_suffix_21: "z",
		_small_number_suffix_24: "y",
		_byte_suffix_B: "B",
		_byte_suffix_KB: "KB",
		_byte_suffix_MB: "MB",
		_byte_suffix_GB: "GB",
		_byte_suffix_TB: "TB",
		_byte_suffix_PB: "PB",
		_date: "yyyy-MM-dd",
		_date_millisecond: "mm:ss SSS",
		_date_millisecond_full: "HH:mm:ss SSS",
		_date_second: "HH:mm:ss",
		_date_second_full: "HH:mm:ss",
		_date_minute: "HH:mm",
		_date_minute_full: "HH:mm - MMM dd, yyyy",
		_date_hour: "HH:mm",
		_date_hour_full: "HH:mm - MMM dd, yyyy",
		_date_day: "MMM dd",
		_date_day_full: "MMM dd, yyyy",
		_date_week: "ww",
		_date_week_full: "MMM dd, yyyy",
		_date_month: "MMM",
		_date_month_full: "MMM, yyyy",
		_date_year: "yyyy",
		_duration_millisecond: "SSS",
		_duration_millisecond_second: "ss.SSS",
		_duration_millisecond_minute: "mm:ss SSS",
		_duration_millisecond_hour: "hh:mm:ss SSS",
		_duration_millisecond_day: "d'd' mm:ss SSS",
		_duration_millisecond_week: "d'd' mm:ss SSS",
		_duration_millisecond_month: "M'm' dd'd' mm:ss SSS",
		_duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS",
		_duration_second: "ss",
		_duration_second_minute: "mm:ss",
		_duration_second_hour: "hh:mm:ss",
		_duration_second_day: "d'd' hh:mm:ss",
		_duration_second_week: "d'd' hh:mm:ss",
		_duration_second_month: "M'm' dd'd' hh:mm:ss",
		_duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss",
		_duration_minute: "mm",
		_duration_minute_hour: "hh:mm",
		_duration_minute_day: "d'd' hh:mm",
		_duration_minute_week: "d'd' hh:mm",
		_duration_minute_month: "M'm' dd'd' hh:mm",
		_duration_minute_year: "y'y' MM'm' dd'd' hh:mm",
		_duration_hour: "hh'h'",
		_duration_hour_day: "d'd' hh'h'",
		_duration_hour_week: "d'd' hh'h'",
		_duration_hour_month: "M'm' dd'd' hh'h'",
		_duration_hour_year: "y'y' MM'm' dd'd' hh'h'",
		_duration_day: "d'd'",
		_duration_day_week: "d'd'",
		_duration_day_month: "M'm' dd'd'",
		_duration_day_year: "y'y' MM'm' dd'd'",
		_duration_week: "w'w'",
		_duration_week_month: "w'w'",
		_duration_week_year: "w'w'",
		_duration_month: "M'm'",
		_duration_month_year: "y'y' MM'm'",
		_duration_year: "y'y'",
		_era_ad: "AD",
		_era_bc: "BC",
		A: "",
		P: "",
		AM: "",
		PM: "",
		"A.M.": "",
		"P.M.": "",
		January: "",
		February: "",
		March: "",
		April: "",
		May: "",
		June: "",
		July: "",
		August: "",
		September: "",
		October: "",
		November: "",
		December: "",
		Jan: "",
		Feb: "",
		Mar: "",
		Apr: "",
		"May(short)": "May",
		Jun: "",
		Jul: "",
		Aug: "",
		Sep: "",
		Oct: "",
		Nov: "",
		Dec: "",
		Sunday: "",
		Monday: "",
		Tuesday: "",
		Wednesday: "",
		Thursday: "",
		Friday: "",
		Saturday: "",
		Sun: "",
		Mon: "",
		Tue: "",
		Wed: "",
		Thu: "",
		Fri: "",
		Sat: "",
		_dateOrd: function (e)
		{
			let t = "th";
			if (e < 11 || e > 13) switch (e % 10)
			{
			case 1:
				t = "st";
				break;
			case 2:
				t = "nd";
				break;
			case 3:
				t = "rd"
			}
			return t
		},
		"Zoom Out": "",
		Play: "",
		Stop: "",
		Legend: "",
		"Press ENTER to toggle": "",
		Loading: "",
		Home: "",
		Chart: "",
		"Serial chart": "",
		"X/Y chart": "",
		"Pie chart": "",
		"Gauge chart": "",
		"Radar chart": "",
		"Sankey diagram": "",
		"Flow diagram": "",
		"Chord diagram": "",
		"TreeMap chart": "",
		"Force directed tree": "",
		"Sliced chart": "",
		Series: "",
		"Candlestick Series": "",
		"OHLC Series": "",
		"Column Series": "",
		"Line Series": "",
		"Pie Slice Series": "",
		"Funnel Series": "",
		"Pyramid Series": "",
		"X/Y Series": "",
		Map: "",
		"Press ENTER to zoom in": "",
		"Press ENTER to zoom out": "",
		"Use arrow keys to zoom in and out": "",
		"Use plus and minus keys on your keyboard to zoom in and out": "",
		Export: "",
		Image: "",
		Data: "",
		Print: "",
		"Press ENTER or use arrow keys to navigate": "",
		"Press ENTER to open": "",
		"Press ENTER to print.": "",
		"Press ENTER to export as %1.": "",
		"(Press ESC to close this message)": "",
		"Image Export Complete": "",
		"Export operation took longer than expected. Something might have gone wrong.": "",
		"Saved from": "",
		PNG: "",
		JPG: "",
		GIF: "",
		SVG: "",
		PDF: "",
		JSON: "",
		CSV: "",
		XLSX: "",
		HTML: "",
		"Use TAB to select grip buttons or left and right arrows to change selection": "",
		"Use left and right arrows to move selection": "",
		"Use left and right arrows to move left selection": "",
		"Use left and right arrows to move right selection": "",
		"Use TAB select grip buttons or up and down arrows to change selection": "",
		"Use up and down arrows to move selection": "",
		"Use up and down arrows to move lower selection": "",
		"Use up and down arrows to move upper selection": "",
		"From %1 to %2": "",
		"From %1": "",
		"To %1": "",
		"No parser available for file: %1": "",
		"Error parsing file: %1": "",
		"Unable to load file: %1": "",
		"Invalid date": "",
		Close: "",
		Minimize: ""
	};
	class Bt extends He
	{
		_setDefaults()
		{
			this.setPrivate("defaultLocale", At), super._setDefaults()
		}
		translate(e, t, ...i)
		{
			t || (t = this._root.locale || this.getPrivate("defaultLocale"));
			let s = e,
				r = t[e];
			if (null === r) s = "";
			else if (null != r) r && (s = r);
			else if (t !== this.getPrivate("defaultLocale")) return this.translate(e, this.getPrivate("defaultLocale"), ...i);
			if (i.length)
				for (let e = i.length, t = 0; t < e; ++t) s = s.split("%" + (t + 1)).join(i[t]);
			return s
		}
		translateAny(e, t, ...i)
		{
			return this.translate(e, t, ...i)
		}
		setTranslationAny(e, t, i)
		{
			(i || this._root.locale)[e] = t
		}
		setTranslationsAny(e, t)
		{
			C(e, ((e, i) =>
			{
				this.setTranslationAny(e, i, t)
			}))
		}
		translateEmpty(e, t, ...i)
		{
			let s = this.translate(e, t, ...i);
			return s == e ? "" : s
		}
		translateFunc(e, t)
		{
			return this._root.locale[e] ? this._root.locale[e] : t !== this.getPrivate("defaultLocale") ? this.translateFunc(e, this.getPrivate("defaultLocale")) : () => ""
		}
		translateAll(e, t)
		{
			return this.isDefault() ? e : b(e, (e => this.translate(e, t)))
		}
		isDefault()
		{
			return this.getPrivate("defaultLocale") === this._root.locale
		}
	}
	class Lt
	{
		constructor(e, t)
		{
			if (Object.defineProperty(this, "_root",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_rules",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), this._root = e, !t) throw new Error("You cannot use `new Class()`, instead use `Class.new()`")
		}
		static new(e)
		{
			const t = new this(e, !0);
			return t.setupDefaultRules(), t
		}
		setupDefaultRules()
		{}
		_lookupRules(e)
		{
			return this._rules[e]
		}
		ruleRaw(e, t = [])
		{
			let i = this._rules[e];
			i || (i = this._rules[e] = []), t.sort(Me);
			const
			{
				index: s,
				found: r
			} = function (e, t)
			{
				let i = 0,
					s = e.length,
					r = !1;
				for (; i < s;)
				{
					const a = i + s >> 1,
						n = t(e[a]);
					n < 0 ? i = a + 1 : 0 === n ? (r = !0, i = a + 1) : s = a
				}
				return {
					found: r,
					index: r ? i - 1 : i
				}
			}(i, (e =>
			{
				const i = Me(e.tags.length, t.length);
				return 0 === i ? Ae(e.tags, t, Me) : i
			}));
			if (r) return i[s].template;
			{
				const e = qe.new(
				{});
				return i.splice(s, 0,
				{
					tags: t,
					template: e
				}), e
			}
		}
		rule(e, t = [])
		{
			return this.ruleRaw(e, t)
		}
	}

	function Rt(e, t, i, s)
	{
		e.set(t, i.get(s)), i.on(s, (i =>
		{
			e.set(t, i)
		}))
	}
	class It extends Lt
	{
		setupDefaultRules()
		{
			super.setupDefaultRules();
			const e = this._root.language,
				t = this._root.interfaceColors,
				i = this._root.horizontalLayout,
				a = this._root.verticalLayout,
				n = this.rule.bind(this);
			n("InterfaceColors").setAll(
			{
				stroke: pe.fromHex(15066597),
				fill: pe.fromHex(15987699),
				primaryButton: pe.fromHex(6788316),
				primaryButtonHover: pe.fromHex(6779356),
				primaryButtonDown: pe.fromHex(6872182),
				primaryButtonActive: pe.fromHex(6872182),
				primaryButtonDisabled: pe.fromHex(14342874),
				primaryButtonTextDisabled: pe.fromHex(16777215),
				primaryButtonText: pe.fromHex(16777215),
				primaryButtonStroke: pe.fromHex(16777215),
				secondaryButton: pe.fromHex(14277081),
				secondaryButtonHover: pe.fromHex(10724259),
				secondaryButtonDown: pe.fromHex(9276813),
				secondaryButtonActive: pe.fromHex(15132390),
				secondaryButtonText: pe.fromHex(0),
				secondaryButtonStroke: pe.fromHex(16777215),
				grid: pe.fromHex(0),
				background: pe.fromHex(16777215),
				alternativeBackground: pe.fromHex(0),
				text: pe.fromHex(0),
				alternativeText: pe.fromHex(16777215),
				disabled: pe.fromHex(11382189),
				positive: pe.fromHex(5288704),
				negative: pe.fromHex(11730944)
			});
			{
				const e = n("ColorSet");
				e.setAll(
				{
					passOptions:
					{
						hue: .05,
						saturation: 0,
						lightness: 0
					},
					colors: [pe.fromHex(6797276)],
					step: 1,
					reuse: !1,
					startIndex: 0
				}), e.setPrivate("currentStep", 0), e.setPrivate("currentPass", 0)
			}
			n("Entity").setAll(
			{
				stateAnimationDuration: 0,
				stateAnimationEasing: Se(Oe)
			}), n("Component").setAll(
			{
				interpolationDuration: 0,
				interpolationEasing: Se(Oe)
			}), n("Sprite").setAll(
			{
				visible: !0,
				scale: 1,
				opacity: 1,
				rotation: 0,
				position: "relative",
				tooltipX: r,
				tooltipY: r,
				tooltipPosition: "fixed",
				isMeasured: !0
			}), n("Sprite").states.create("default",
			{
				visible: !0,
				opacity: 1
			}), n("Container").setAll(
			{
				interactiveChildren: !0,
				setStateOnChildren: !1
			}), n("Graphics").setAll(
			{
				strokeWidth: 1
			}), n("Chart").setAll(
			{
				width: s,
				height: s,
				interactiveChildren: !1
			}), n("ZoomableContainer").setAll(
			{
				width: s,
				height: s,
				wheelable: !0,
				pinchZoom: !0,
				maxZoomLevel: 32,
				minZoomLevel: 1,
				zoomStep: 2,
				animationEasing: Se(Oe),
				animationDuration: 600,
				maxPanOut: .4
			}), n("Sprite", ["horizontal", "center"]).setAll(
			{
				centerX: r,
				x: r
			}), n("Sprite", ["vertical", "center"]).setAll(
			{
				centerY: r,
				y: r
			}), n("Container", ["horizontal", "layout"]).setAll(
			{
				layout: i
			}), n("Container", ["vertical", "layout"]).setAll(
			{
				layout: a
			}), n("Pattern").setAll(
			{
				repetition: "repeat",
				width: 50,
				height: 50,
				rotation: 0,
				fillOpacity: 1
			}), n("LinePattern").setAll(
			{
				gap: 6,
				colorOpacity: 1,
				width: 49,
				height: 49
			}), n("RectanglePattern").setAll(
			{
				gap: 6,
				checkered: !1,
				centered: !0,
				maxWidth: 5,
				maxHeight: 5,
				width: 48,
				height: 48,
				strokeWidth: 0
			}), n("CirclePattern").setAll(
			{
				gap: 5,
				checkered: !1,
				centered: !1,
				radius: 3,
				strokeWidth: 0,
				width: 45,
				height: 45
			}), n("GrainPattern").setAll(
			{
				width: 200,
				height: 200,
				colors: [pe.fromHex(0)],
				size: 1,
				horizontalGap: 0,
				verticalGap: 0,
				density: 1,
				minOpacity: 0,
				maxOpacity: .2
			});
			{
				const e = n("PatternSet");
				e.setAll(
				{
					step: 1
				}), Rt(e, "color", t, "stroke")
			}
			n("LinearGradient").setAll(
			{
				rotation: 90
			}), n("Legend").setAll(
			{
				fillField: "fill",
				strokeField: "stroke",
				nameField: "name",
				layout: ut.new(this._root,
				{}),
				layer: 30,
				clickTarget: "itemContainer"
			}), n("Container", ["legend", "item", "itemcontainer"]).setAll(
			{
				paddingLeft: 5,
				paddingRight: 5,
				paddingBottom: 5,
				paddingTop: 5,
				layout: i,
				setStateOnChildren: !0,
				interactiveChildren: !1,
				ariaChecked: !0,
				focusable: !0,
				ariaLabel: e.translate("Press ENTER to toggle"),
				role: "checkbox"
			});
			{
				const e = n("Rectangle", ["legend", "item", "background"]);
				e.setAll(
				{
					fillOpacity: 0
				}), Rt(e, "fill", t, "background")
			}
			n("Container", ["legend", "marker"]).setAll(
			{
				setStateOnChildren: !0,
				centerY: r,
				paddingLeft: 0,
				paddingRight: 0,
				paddingBottom: 0,
				paddingTop: 0,
				width: 18,
				height: 18
			}), n("RoundedRectangle", ["legend", "marker", "rectangle"]).setAll(
			{
				width: s,
				height: s,
				cornerRadiusBL: 3,
				cornerRadiusTL: 3,
				cornerRadiusBR: 3,
				cornerRadiusTR: 3
			});
			{
				const e = n("RoundedRectangle", ["legend", "marker", "rectangle"]).states.create("disabled",
				{});
				Rt(e, "fill", t, "disabled"), Rt(e, "stroke", t, "disabled")
			}
			n("Label", ["legend", "label"]).setAll(
			{
				centerY: r,
				marginLeft: 5,
				paddingRight: 0,
				paddingLeft: 0,
				paddingTop: 0,
				paddingBottom: 0,
				populateText: !0
			}), Rt(n("Label", ["legend", "label"]).states.create("disabled",
			{}), "fill", t, "disabled"), n("Label", ["legend", "value", "label"]).setAll(
			{
				centerY: r,
				marginLeft: 5,
				paddingRight: 0,
				paddingLeft: 0,
				paddingTop: 0,
				paddingBottom: 0,
				width: 50,
				centerX: s,
				populateText: !0
			}), Rt(n("Label", ["legend", "value", "label"]).states.create("disabled",
			{}), "fill", t, "disabled"), n("HeatLegend").setAll(
			{
				stepCount: 1
			}), n("RoundedRectangle", ["heatlegend", "marker"]).setAll(
			{
				cornerRadiusTR: 0,
				cornerRadiusBR: 0,
				cornerRadiusTL: 0,
				cornerRadiusBL: 0
			}), n("RoundedRectangle", ["vertical", "heatlegend", "marker"]).setAll(
			{
				height: s,
				width: 15
			}), n("RoundedRectangle", ["horizontal", "heatlegend", "marker"]).setAll(
			{
				width: s,
				height: 15
			}), n("HeatLegend", ["vertical"]).setAll(
			{
				height: s
			}), n("HeatLegend", ["horizontal"]).setAll(
			{
				width: s
			}), n("Label", ["heatlegend", "start"]).setAll(
			{
				paddingLeft: 5,
				paddingRight: 5,
				paddingTop: 5,
				paddingBottom: 5
			}), n("Label", ["heatlegend", "end"]).setAll(
			{
				paddingLeft: 5,
				paddingRight: 5,
				paddingTop: 5,
				paddingBottom: 5
			});
			{
				const e = n("Label");
				e.setAll(
				{
					paddingTop: 8,
					paddingBottom: 8,
					paddingLeft: 10,
					paddingRight: 10,
					fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
					fontSize: "1em",
					populateText: !1
				}), Rt(e, "fill", t, "text")
			}
			n("RadialLabel").setAll(
			{
				textType: "regular",
				centerY: r,
				centerX: r,
				inside: !1,
				radius: 0,
				baseRadius: s,
				orientation: "auto",
				textAlign: "center"
			}), n("EditableLabel").setAll(
			{
				editOn: "click",
				themeTags: ["editablelabel"],
				multiLine: !0
			}), n("RoundedRectangle", ["editablelabel", "background"]).setAll(
			{
				fillOpacity: 0,
				fill: pe.fromHex(0),
				cornerRadiusBL: 3,
				cornerRadiusBR: 3,
				cornerRadiusTL: 3,
				cornerRadiusTR: 3,
				strokeOpacity: 0,
				stroke: pe.fromHex(0)
			}), n("RoundedRectangle", ["editablelabel", "background"]).states.create("active",
			{
				strokeOpacity: .2
			}), n("RoundedRectangle").setAll(
			{
				cornerRadiusTL: 8,
				cornerRadiusBL: 8,
				cornerRadiusTR: 8,
				cornerRadiusBR: 8
			}), n("PointedRectangle").setAll(
			{
				pointerBaseWidth: 15,
				pointerLength: 10,
				cornerRadius: 8
			}), n("Slice").setAll(
			{
				shiftRadius: 0,
				dRadius: 0,
				dInnerRadius: 0
			});
			{
				const e = n("Tick");
				e.setAll(
				{
					strokeOpacity: .15,
					isMeasured: !1,
					length: 4.5,
					position: "absolute",
					crisp: !0
				}), Rt(e, "stroke", t, "grid")
			}
			n("Bullet").setAll(
			{
				locationX: .5,
				locationY: .5
			}), n("Tooltip").setAll(
			{
				position: "absolute",
				getFillFromSprite: !0,
				getStrokeFromSprite: !1,
				autoTextColor: !0,
				paddingTop: 9,
				paddingBottom: 8,
				paddingLeft: 10,
				paddingRight: 10,
				marginBottom: 5,
				pointerOrientation: "vertical",
				centerX: r,
				centerY: r,
				animationEasing: Se(Oe),
				exportable: !1
			}), n("Polygon").setAll(
			{
				animationEasing: Se(Oe)
			}), n("PointedRectangle", ["tooltip", "background"]).setAll(
			{
				strokeOpacity: .9,
				cornerRadius: 4,
				pointerLength: 4,
				pointerBaseWidth: 8,
				fillOpacity: .9,
				stroke: pe.fromHex(16777215)
			});
			{
				const e = n("Label", ["tooltip"]);
				e.setAll(
				{
					role: "tooltip",
					populateText: !0,
					paddingRight: 0,
					paddingTop: 0,
					paddingLeft: 0,
					paddingBottom: 0
				}), Rt(e, "fill", t, "alternativeText")
			}
			n("Button").setAll(
			{
				paddingTop: 8,
				paddingBottom: 8,
				paddingLeft: 10,
				paddingRight: 10,
				interactive: !0,
				layout: i,
				interactiveChildren: !1,
				setStateOnChildren: !0,
				focusable: !0
			}), n("Button").states.create("hover",
			{}), n("Button").states.create("down",
			{
				stateAnimationDuration: 0
			}), n("Button").states.create("active",
			{}), n("Button").states.create("disabled",
			{
				forceInactive: !0
			});
			{
				const e = n("RoundedRectangle", ["button", "background"]);
				Rt(e, "fill", t, "primaryButton"), Rt(e, "stroke", t, "primaryButtonStroke")
			}
			Rt(n("RoundedRectangle", ["button", "background"]).states.create("hover",
			{}), "fill", t, "primaryButtonHover"), Rt(n("RoundedRectangle", ["button", "background"]).states.create("down",
			{
				stateAnimationDuration: 0
			}), "fill", t, "primaryButtonDown"), Rt(n("RoundedRectangle", ["button", "background"]).states.create("active",
			{}), "fill", t, "primaryButtonActive"), Rt(n("RoundedRectangle", ["button", "background"]).states.create("disabled",
			{}), "fill", t, "primaryButtonDisabled"), Rt(n("Graphics", ["button", "icon"]).states.create("disabled",
			{}), "fill", t, "primaryButtonTextDisabled"), Rt(n("Label", ["button"]).states.create("disabled",
			{}), "fill", t, "primaryButtonTextDisabled");
			{
				const e = n("Graphics", ["button", "icon"]);
				e.setAll(
				{
					forceInactive: !0
				}), Rt(e, "stroke", t, "primaryButtonText")
			}
			Rt(n("Label", ["button"]), "fill", t, "primaryButtonText"), n("Button", ["zoom"]).setAll(
			{
				paddingTop: 18,
				paddingBottom: 18,
				paddingLeft: 12,
				paddingRight: 12,
				centerX: 46,
				centerY: -10,
				y: 0,
				x: s,
				role: "button",
				ariaLabel: e.translate("Zoom Out"),
				layer: 30
			});
			{
				const e = n("RoundedRectangle", ["background", "button", "zoom"]);
				e.setAll(
				{
					cornerRadiusBL: 40,
					cornerRadiusBR: 40,
					cornerRadiusTL: 40,
					cornerRadiusTR: 40
				}), Rt(e, "fill", t, "primaryButton")
			}
			Rt(n("RoundedRectangle", ["background", "button", "zoom"]).states.create("hover",
			{}), "fill", t, "primaryButtonHover"), Rt(n("RoundedRectangle", ["background", "button", "zoom"]).states.create("down",
			{
				stateAnimationDuration: 0
			}), "fill", t, "primaryButtonDown");
			{
				const e = n("Graphics", ["icon", "button", "zoom"]);
				e.setAll(
				{
					crisp: !0,
					strokeOpacity: .7,
					draw: e =>
					{
						e.moveTo(0, 0), e.lineTo(12, 0)
					}
				}), Rt(e, "stroke", t, "primaryButtonText")
			}
			n("Button", ["resize"]).setAll(
			{
				paddingTop: 9,
				paddingBottom: 9,
				paddingLeft: 13,
				paddingRight: 13,
				draggable: !0,
				centerX: r,
				centerY: r,
				position: "absolute",
				role: "slider",
				ariaValueMin: "0",
				ariaValueMax: "100",
				ariaLabel: e.translate("Use up and down arrows to move selection")
			});
			{
				const e = n("RoundedRectangle", ["background", "resize", "button"]);
				e.setAll(
				{
					cornerRadiusBL: 40,
					cornerRadiusBR: 40,
					cornerRadiusTL: 40,
					cornerRadiusTR: 40
				}), Rt(e, "fill", t, "secondaryButton"), Rt(e, "stroke", t, "secondaryButtonStroke")
			}
			Rt(n("RoundedRectangle", ["background", "resize", "button"]).states.create("hover",
			{}), "fill", t, "secondaryButtonHover"), Rt(n("RoundedRectangle", ["background", "resize", "button"]).states.create("down",
			{
				stateAnimationDuration: 0
			}), "fill", t, "secondaryButtonDown");
			{
				const e = n("Graphics", ["resize", "button", "icon"]);
				e.setAll(
				{
					interactive: !1,
					crisp: !0,
					strokeOpacity: .5,
					draw: e =>
					{
						e.moveTo(0, .5), e.lineTo(0, 12.5), e.moveTo(4, .5), e.lineTo(4, 12.5)
					}
				}), Rt(e, "stroke", t, "secondaryButtonText")
			}
			n("Button", ["resize", "vertical"]).setAll(
			{
				rotation: 90,
				cursorOverStyle: "ns-resize"
			}), n("Button", ["resize", "horizontal"]).setAll(
			{
				cursorOverStyle: "ew-resize"
			}), n("Button", ["play"]).setAll(
			{
				paddingTop: 13,
				paddingBottom: 13,
				paddingLeft: 14,
				paddingRight: 14,
				ariaLabel: e.translate("Play"),
				toggleKey: "active"
			});
			{
				const e = n("RoundedRectangle", ["play", "background"]);
				e.setAll(
				{
					strokeOpacity: .5,
					cornerRadiusBL: 100,
					cornerRadiusBR: 100,
					cornerRadiusTL: 100,
					cornerRadiusTR: 100
				}), Rt(e, "fill", t, "primaryButton")
			}
			{
				const e = n("Graphics", ["play", "icon"]);
				e.setAll(
				{
					stateAnimationDuration: 0,
					dx: 1,
					draw: e =>
					{
						e.moveTo(0, -5), e.lineTo(8, 0), e.lineTo(0, 5), e.lineTo(0, -5)
					}
				}), Rt(e, "fill", t, "primaryButtonText")
			}
			n("Graphics", ["play", "icon"]).states.create("default",
			{
				stateAnimationDuration: 0
			}), n("Graphics", ["play", "icon"]).states.create("active",
			{
				stateAnimationDuration: 0,
				draw: e =>
				{
					e.moveTo(-4, -5), e.lineTo(-1, -5), e.lineTo(-1, 5), e.lineTo(-4, 5), e.lineTo(-4, -5), e.moveTo(4, -5), e.lineTo(1, -5), e.lineTo(1, 5), e.lineTo(4, 5), e.lineTo(4, -5)
				}
			}), n("Button", ["switch"]).setAll(
			{
				paddingTop: 4,
				paddingBottom: 4,
				paddingLeft: 4,
				paddingRight: 4,
				ariaLabel: e.translate("Press ENTER to toggle"),
				toggleKey: "active",
				width: 40,
				height: 24,
				layout: null
			});
			{
				const e = n("RoundedRectangle", ["switch", "background"]);
				e.setAll(
				{
					strokeOpacity: .5,
					cornerRadiusBL: 100,
					cornerRadiusBR: 100,
					cornerRadiusTL: 100,
					cornerRadiusTR: 100
				}), Rt(e, "fill", t, "primaryButton")
			}
			{
				const e = n("Circle", ["switch", "icon"]);
				e.setAll(
				{
					radius: 8,
					centerY: 0,
					centerX: 0,
					dx: 0
				}), Rt(e, "fill", t, "primaryButtonText")
			}
			n("Graphics", ["switch", "icon"]).states.create("active",
			{
				dx: 16
			}), n("Scrollbar").setAll(
			{
				start: 0,
				end: 1,
				layer: 30,
				animationEasing: Se(Oe)
			}), n("Scrollbar", ["vertical"]).setAll(
			{
				marginRight: 13,
				marginLeft: 13,
				minWidth: 12,
				height: s
			}), n("Scrollbar", ["horizontal"]).setAll(
			{
				marginTop: 13,
				marginBottom: 13,
				minHeight: 12,
				width: s
			}), this.rule("Button", ["scrollbar"]).setAll(
			{
				exportable: !1
			});
			{
				const e = n("RoundedRectangle", ["scrollbar", "main", "background"]);
				e.setAll(
				{
					cornerRadiusTL: 8,
					cornerRadiusBL: 8,
					cornerRadiusTR: 8,
					cornerRadiusBR: 8,
					fillOpacity: .8
				}), Rt(e, "fill", t, "fill")
			}
			{
				const e = n("RoundedRectangle", ["scrollbar", "thumb"]);
				e.setAll(
				{
					role: "slider",
					ariaLive: "polite",
					position: "absolute",
					draggable: !0
				}), Rt(e, "fill", t, "secondaryButton")
			}
			Rt(n("RoundedRectangle", ["scrollbar", "thumb"]).states.create("hover",
			{}), "fill", t, "secondaryButtonHover"), Rt(n("RoundedRectangle", ["scrollbar", "thumb"]).states.create("down",
			{
				stateAnimationDuration: 0
			}), "fill", t, "secondaryButtonDown"), n("RoundedRectangle", ["scrollbar", "thumb", "vertical"]).setAll(
			{
				x: r,
				width: s,
				centerX: r,
				ariaLabel: e.translate("Use up and down arrows to move selection")
			}), n("RoundedRectangle", ["scrollbar", "thumb", "horizontal"]).setAll(
			{
				y: r,
				centerY: r,
				height: s,
				ariaLabel: e.translate("Use left and right arrows to move selection")
			});
			{
				const e = n("PointedRectangle", ["axis", "tooltip", "background"]);
				e.setAll(
				{
					cornerRadius: 0
				}), Rt(e, "fill", t, "alternativeBackground")
			}
			n("Label", ["axis", "tooltip"]).setAll(
			{
				role: void 0
			}), n("Label", ["axis", "tooltip", "y"]).setAll(
			{
				textAlign: "right"
			}), n("Label", ["axis", "tooltip", "y", "opposite"]).setAll(
			{
				textAlign: "left"
			}), n("Label", ["axis", "tooltip", "x"]).setAll(
			{
				textAlign: "center"
			}), n("Tooltip", ["categoryaxis"]).setAll(
			{
				labelText: "{category}"
			}), n("Star").setAll(
			{
				spikes: 5,
				innerRadius: 5,
				radius: 10
			}), n("Tooltip", ["stock"]).setAll(
			{
				paddingTop: 6,
				paddingBottom: 5,
				paddingLeft: 7,
				paddingRight: 7
			}), n("Tooltip", ["indicator"]).setAll(
			{
				forceHidden: !0
			}), n("PointedRectangle", ["tooltip", "stock", "axis"]).setAll(
			{
				pointerLength: 0,
				pointerBaseWidth: 0,
				cornerRadius: 3
			}), n("Label", ["tooltip", "stock"]).setAll(
			{
				fontSize: "0.8em"
			}), n("SpriteResizer").setAll(
			{
				rotationStep: 10,
				isMeasured: !1
			}), n("Container", ["resizer", "grip"]).states.create("hover",
			{});
			{
				const e = n("RoundedRectangle", ["resizer", "grip"]);
				e.setAll(
				{
					strokeOpacity: .7,
					strokeWidth: 1,
					fillOpacity: 1,
					width: 12,
					height: 12
				}), Rt(e, "fill", t, "background"), Rt(e, "stroke", t, "alternativeBackground")
			}
			{
				const e = n("RoundedRectangle", ["resizer", "grip", "outline"]);
				e.setAll(
				{
					strokeOpacity: 0,
					fillOpacity: 0,
					width: 20,
					height: 20
				}), e.states.create("hover",
				{
					fillOpacity: .3
				}), Rt(e, "fill", t, "alternativeBackground")
			}
			n("RoundedRectangle", ["resizer", "grip", "left"]).setAll(
			{
				cornerRadiusBL: 0,
				cornerRadiusBR: 0,
				cornerRadiusTL: 0,
				cornerRadiusTR: 0
			}), n("RoundedRectangle", ["resizer", "grip", "right"]).setAll(
			{
				cornerRadiusBL: 0,
				cornerRadiusBR: 0,
				cornerRadiusTL: 0,
				cornerRadiusTR: 0
			});
			{
				const e = n("Rectangle", ["resizer", "rectangle"]);
				e.setAll(
				{
					strokeDasharray: [2, 2],
					strokeOpacity: .5,
					strokeWidth: 1
				}), Rt(e, "stroke", t, "alternativeBackground")
			}
			n("Graphics", ["button", "plus", "icon"]).setAll(
			{
				x: r,
				y: r,
				draw: e =>
				{
					e.moveTo(-4, 0), e.lineTo(4, 0), e.moveTo(0, -4), e.lineTo(0, 4)
				}
			}), n("Graphics", ["button", "minus", "icon"]).setAll(
			{
				x: r,
				y: r,
				draw: e =>
				{
					e.moveTo(-4, 0), e.lineTo(4, 0)
				}
			}), n("Graphics", ["button", "home", "icon"]).setAll(
			{
				x: r,
				y: r,
				svgPath: "M 8 -1 L 6 -1 L 6 7 L 2 7 L 2 1 L -2 1 L -2 7 L -6 7 L -6 -1 L -8 -1 L 0 -9 L 8 -1 Z M 8 -1"
			}), n("Button", ["zoomtools"]).setAll(
			{
				marginTop: 1,
				marginBottom: 2
			}), n("ZoomTools").setAll(
			{
				x: s,
				centerX: s,
				y: s,
				centerY: s,
				paddingRight: 10,
				paddingBottom: 10
			})
		}
	}
	class Ht
	{
		constructor(e = 1, t = 0, i = 0, s = 1, r = 0, a = 0)
		{
			Object.defineProperty(this, "a",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "b",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "c",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "d",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "tx",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "ty",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this.a = e, this.b = t, this.c = i, this.d = s, this.tx = r, this.ty = a
		}
		setTransform(e, t, i, s, r, a = 1)
		{
			this.a = Math.cos(r) * a, this.b = Math.sin(r) * a, this.c = -Math.sin(r) * a, this.d = Math.cos(r) * a, this.tx = e - (i * this.a + s * this.c), this.ty = t - (i * this.b + s * this.d)
		}
		apply(e)
		{
			return {
				x: this.a * e.x + this.c * e.y + this.tx,
				y: this.b * e.x + this.d * e.y + this.ty
			}
		}
		applyInverse(e)
		{
			const t = 1 / (this.a * this.d + this.c * -this.b);
			return {
				x: this.d * t * e.x + -this.c * t * e.y + (this.ty * this.c - this.tx * this.d) * t,
				y: this.a * t * e.y + -this.b * t * e.x + (-this.ty * this.a + this.tx * this.b) * t
			}
		}
		append(e)
		{
			const t = this.a,
				i = this.b,
				s = this.c,
				r = this.d;
			this.a = e.a * t + e.b * s, this.b = e.a * i + e.b * r, this.c = e.c * t + e.d * s, this.d = e.c * i + e.d * r, this.tx = e.tx * t + e.ty * s + this.tx, this.ty = e.tx * i + e.ty * r + this.ty
		}
		prepend(e)
		{
			const t = this.tx;
			if (1 !== e.a || 0 !== e.b || 0 !== e.c || 1 !== e.d)
			{
				const t = this.a,
					i = this.c;
				this.a = t * e.a + this.b * e.c, this.b = t * e.b + this.b * e.d, this.c = i * e.a + this.d * e.c, this.d = i * e.b + this.d * e.d
			}
			this.tx = t * e.a + this.ty * e.c + e.tx, this.ty = t * e.b + this.ty * e.d + e.ty
		}
		copyFrom(e)
		{
			this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.tx = e.tx, this.ty = e.ty
		}
	}
	var Ft = 2 * Math.PI,
		Nt = function (e, t, i, s, r, a, n)
		{
			var o = e.x,
				l = e.y;
			return {
				x: s * (o *= t) - r * (l *= i) + a,
				y: r * o + s * l + n
			}
		},
		zt = function (e, t)
		{
			var i = 1.5707963267948966 === t ? .551915024494 : -1.5707963267948966 === t ? -.551915024494 : 4 / 3 * Math.tan(t / 4),
				s = Math.cos(e),
				r = Math.sin(e),
				a = Math.cos(e + t),
				n = Math.sin(e + t);
			return [
			{
				x: s - r * i,
				y: r + s * i
			},
			{
				x: a + n * i,
				y: n - a * i
			},
			{
				x: a,
				y: n
			}]
		},
		Vt = function (e, t, i, s)
		{
			var r = e * i + t * s;
			return r > 1 && (r = 1), r < -1 && (r = -1), (e * s - t * i < 0 ? -1 : 1) * Math.acos(r)
		};
	const qt = function (e)
	{
		var t = e.px,
			i = e.py,
			s = e.cx,
			r = e.cy,
			a = e.rx,
			n = e.ry,
			o = e.xAxisRotation,
			l = void 0 === o ? 0 : o,
			h = e.largeArcFlag,
			c = void 0 === h ? 0 : h,
			u = e.sweepFlag,
			d = void 0 === u ? 0 : u,
			p = [];
		if (0 === a || 0 === n) return [];
		var g = Math.sin(l * Ft / 360),
			m = Math.cos(l * Ft / 360),
			f = m * (t - s) / 2 + g * (i - r) / 2,
			b = -g * (t - s) / 2 + m * (i - r) / 2;
		if (0 === f && 0 === b) return [];
		a = Math.abs(a), n = Math.abs(n);
		var _ = Math.pow(f, 2) / Math.pow(a, 2) + Math.pow(b, 2) / Math.pow(n, 2);
		_ > 1 && (a *= Math.sqrt(_), n *= Math.sqrt(_));
		var v = function (e, t, i, s, r, a, n, o, l, h, c, u)
			{
				var d = Math.pow(r, 2),
					p = Math.pow(a, 2),
					g = Math.pow(c, 2),
					m = Math.pow(u, 2),
					f = d * p - d * m - p * g;
				f < 0 && (f = 0), f /= d * m + p * g;
				var b = (f = Math.sqrt(f) * (n === o ? -1 : 1)) * r / a * u,
					_ = f * -a / r * c,
					v = h * b - l * _ + (e + i) / 2,
					y = l * b + h * _ + (t + s) / 2,
					w = (c - b) / r,
					x = (u - _) / a,
					k = (-c - b) / r,
					P = (-u - _) / a,
					D = Vt(1, 0, w, x),
					T = Vt(w, x, k, P);
				return 0 === o && T > 0 && (T -= Ft), 1 === o && T < 0 && (T += Ft), [v, y, D, T]
			}(t, i, s, r, a, n, c, d, g, m, f, b),
			y = function (e, t)
			{
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return function (e, t)
				{
					var i = [],
						s = !0,
						r = !1,
						a = void 0;
					try
					{
						for (var n, o = e[Symbol.iterator](); !(s = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); s = !0);
					}
					catch (e)
					{
						r = !0, a = e
					}
					finally
					{
						try
						{
							!s && o.return && o.return()
						}
						finally
						{
							if (r) throw a
						}
					}
					return i
				}(e, t);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}(v, 4),
			w = y[0],
			x = y[1],
			k = y[2],
			P = y[3],
			D = Math.abs(P) / (Ft / 4);
		Math.abs(1 - D) < 1e-7 && (D = 1);
		var T = Math.max(Math.ceil(D), 1);
		P /= T;
		for (var O = 0; O < T; O++) p.push(zt(k, P)), k += P;
		return p.map((function (e)
		{
			var t = Nt(e[0], a, n, m, g, w, x),
				i = t.x,
				s = t.y,
				r = Nt(e[1], a, n, m, g, w, x),
				o = r.x,
				l = r.y,
				h = Nt(e[2], a, n, m, g, w, x);
			return {
				x1: i,
				y1: s,
				x2: o,
				y2: l,
				x: h.x,
				y: h.y
			}
		}))
	};

	function Wt(e, t, i)
	{
		if (t !== i) throw new Error("Required " + i + " arguments for " + e + " but got " + t)
	}

	function Yt(e, t, i)
	{
		if (t < i) throw new Error("Required at least " + i + " arguments for " + e + " but got " + t)
	}

	function Gt(e, t, i)
	{
		if (Yt(e, t, i), t % i != 0) throw new Error("Arguments for " + e + " must be in pairs of " + i)
	}

	function Ut(e)
	{
		for (let t = 0; t < e.length; t += 7)
		{
			let i = t + 3,
				s = e[i];
			if (s.length > 1)
			{
				const t = /^([01])([01])(.*)$/.exec(s);
				null !== t && (e.splice(i, 0, t[1]), ++i, e.splice(i, 0, t[2]), ++i, t[3].length > 0 ? e[i] = t[3] : e.splice(i, 1))
			}
			if (++i, s = e[i], s.length > 1)
			{
				const t = /^([01])(.+)$/.exec(s);
				null !== t && (e.splice(i, 0, t[1]), ++i, e[i] = t[2])
			}
		}
	}

	function Xt(e)
	{
		if (0 === e || 1 === e) return e;
		throw new Error("Flag must be 0 or 1")
	}

	function Kt(e, t)
	{
		for (;
			(!e.interactive || t(e)) && e._parent;) e = e._parent
	}

	function $t(e, t, i)
	{
		return I(e, z(t), (e =>
		{
			const t = W(e);
			let s = e.touches;
			s ? (0 == s.length && (s = e.changedTouches), i(function (e)
			{
				const t = e.length,
					i = new Array(t);
				for (let s = 0; s < t; ++s) i[s] = e[s];
				return i
			}(s), t)) : i([e], t)
		}))
	}

	function Zt(e)
	{
		const t = document.createElement("canvas");
		t.width = 1, t.height = 1;
		const i = t.getContext("2d",
		{
			willReadFrequently: !0
		});
		i.drawImage(e, 0, 0, 1, 1);
		try
		{
			return i.getImageData(0, 0, 1, 1), !1
		}
		catch (t)
		{
			return console.warn('Image "' + e.src + '" is loaded from different host and is not covered by CORS policy. For more information about the implications read here: https://www.amcharts.com/docs/v5/concepts/cors'), !0
		}
	}

	function Jt(e)
	{
		e.width = 0, e.height = 0, e.style.width = "0px", e.style.height = "0px"
	}

	function Qt(e)
	{
		return Math.floor(e) + .5
	}
	class ei
	{
		constructor()
		{
			Object.defineProperty(this, "_x",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_y",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			})
		}
		get x()
		{
			return this._x
		}
		get y()
		{
			return this._y
		}
		set x(e)
		{
			this._x = e
		}
		set y(e)
		{
			this._y = e
		}
	}
	class ti extends M
	{
		constructor(e)
		{
			super(), Object.defineProperty(this, "_layer",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "mask",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: null
			}), Object.defineProperty(this, "visible",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), Object.defineProperty(this, "exportable",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), Object.defineProperty(this, "interactive",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "inactive",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: null
			}), Object.defineProperty(this, "wheelable",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "cancelTouch",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "isMeasured",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "buttonMode",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "alpha",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 1
			}), Object.defineProperty(this, "compoundAlpha",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 1
			}), Object.defineProperty(this, "angle",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "scale",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 1
			}), Object.defineProperty(this, "x",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "y",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "crisp",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "pivot",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: new ei
			}), Object.defineProperty(this, "filter",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "cursorOverStyle",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_replacedCursorStyle",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_localMatrix",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: new Ht
			}), Object.defineProperty(this, "_matrix",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: new Ht
			}), Object.defineProperty(this, "_uMatrix",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: new Ht
			}), Object.defineProperty(this, "_renderer",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_parent",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_localBounds",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_bounds",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_colorId",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this._renderer = e
		}
		subStatus(e)
		{
			return {
				inactive: null == this.inactive ? e.inactive : this.inactive,
				layer: this._layer || e.layer
			}
		}
		_dispose()
		{
			this._renderer._removeObject(this), this.getLayer().dirty = !0
		}
		getCanvas()
		{
			return this.getLayer().view
		}
		getLayer()
		{
			let e = this;
			for (;;)
			{
				if (e._layer) return e._layer;
				if (!e._parent) return this._renderer.defaultLayer;
				e = e._parent
			}
		}
		setLayer(e, t)
		{
			if (null == e) this._layer = void 0;
			else
			{
				const i = !0;
				this._layer = this._renderer.getLayer(e, i), this._layer.visible = i, this._layer.margin = t, t && Y(this._layer.view, !1), this._renderer._ghostLayer.setMargin(this._renderer.layers), this._parent && this._parent.registerChildLayer(this._layer), this._layer.dirty = !0, this._renderer.resizeLayer(this._layer), this._renderer.resizeGhost()
			}
		}
		markDirtyLayer()
		{
			this.getLayer().dirty = !0
		}
		clear()
		{
			this.invalidateBounds()
		}
		invalidateBounds()
		{
			this._localBounds = void 0
		}
		_addBounds(e)
		{}
		_getColorId()
		{
			return void 0 === this._colorId && (this._colorId = this._renderer.paintId(this)), this._colorId
		}
		_isInteractive(e)
		{
			return !e.inactive && (this.interactive || this._renderer._forceInteractive > 0)
		}
		_isInteractiveMask(e)
		{
			return this._isInteractive(e)
		}
		contains(e)
		{
			for (;;)
			{
				if (e === this) return !0;
				if (!e._parent) return !1;
				e = e._parent
			}
		}
		toGlobal(e)
		{
			return this._matrix.apply(e)
		}
		toLocal(e)
		{
			return this._matrix.applyInverse(e)
		}
		getLocalMatrix()
		{
			return this._uMatrix.setTransform(0, 0, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._uMatrix
		}
		getLocalBounds()
		{
			if (!this._localBounds)
			{
				const e = 1e7;
				this._localBounds = {
					left: e,
					top: e,
					right: -e,
					bottom: -e
				}, this._addBounds(this._localBounds)
			}
			return this._localBounds
		}
		getAdjustedBounds(e)
		{
			this._setMatrix();
			const t = this.getLocalMatrix(),
				i = t.apply(
				{
					x: e.left,
					y: e.top
				}),
				s = t.apply(
				{
					x: e.right,
					y: e.top
				}),
				r = t.apply(
				{
					x: e.right,
					y: e.bottom
				}),
				a = t.apply(
				{
					x: e.left,
					y: e.bottom
				});
			return {
				left: Math.min(i.x, s.x, r.x, a.x),
				top: Math.min(i.y, s.y, r.y, a.y),
				right: Math.max(i.x, s.x, r.x, a.x),
				bottom: Math.max(i.y, s.y, r.y, a.y)
			}
		}
		on(e, t, i)
		{
			return this.interactive ? this._renderer._addEvent(this, e, t, i) : new A((() =>
			{}))
		}
		_setMatrix()
		{
			this._localMatrix.setTransform(this.x, this.y, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._matrix.copyFrom(this._localMatrix), this._parent && this._matrix.prepend(this._parent._matrix)
		}
		_transform(e, t)
		{
			const i = this._matrix;
			let s = i.tx * t,
				r = i.ty * t;
			this.crisp && (s = Qt(s), r = Qt(r)), e.setTransform(i.a * t, i.b * t, i.c * t, i.d * t, s, r)
		}
		_transformMargin(e, t, i)
		{
			const s = this._matrix;
			e.setTransform(s.a * t, s.b * t, s.c * t, s.d * t, (s.tx + i.left) * t, (s.ty + i.top) * t)
		}
		_transformLayer(e, t, i)
		{
			i.margin ? this._transformMargin(e, i.scale || t, i.margin) : this._transform(e, i.scale || t)
		}
		render(e, t = 0)
		{
			if (this.visible && (!1 !== this.exportable || !this._renderer._omitTainted))
			{
				this._setMatrix();
				const i = this.subStatus(e),
					s = this._renderer.resolution,
					r = this._renderer.layers,
					a = this._renderer._ghostLayer,
					n = a.context,
					o = this.mask;
				o && o._setMatrix(), _(r, (e =>
				{
					if (e)
					{
						const t = e.context;
						t.save(), o && (o._transformLayer(t, s, e), o._runPath(t), t.clip()), t.globalAlpha = this.compoundAlpha * this.alpha, this._transformLayer(t, s, e), this.filter && (t.filter = this.filter)
					}
				})), n.save(), o && this._isInteractiveMask(i) && (o._transformMargin(n, s, a.margin), o._runPath(n), n.clip()), this._transformMargin(n, s, a.margin), i.layer.order > 0 && !t && function (e, t)
				{
					let i = f(e, t); - 1 !== i && D(e, i), e.push(t)
				}(this._renderer._deferredGhostLayers, i.layer.order), this._render(i, t), n.restore(), _(r, (e =>
				{
					e && e.context.restore()
				}))
			}
		}
		_render(e, t = 0)
		{
			!1 === this.exportable && (e.layer.tainted = !0)
		}
		_ghostOnly(e = 0)
		{
			return e > 0
		}
		_drawGhost(e, t = 0)
		{
			const i = this._isInteractive(e),
				s = e.layer.order || 0;
			return !(!i || (0 != s || this._ghostOnly(t)) && s != t)
		}
		hovering()
		{
			return this._renderer._hovering.has(this)
		}
		dragging()
		{
			return this._renderer._dragging.some((e => e.value === this))
		}
		shouldCancelTouch()
		{
			const e = this._renderer;
			return !(e.tapToActivate && !e._touchActive) && (!!this.cancelTouch || !!this._parent && this._parent.shouldCancelTouch())
		}
	}
	class ii extends ti
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "interactiveChildren",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), Object.defineProperty(this, "_childLayers",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_children",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			})
		}
		_isInteractiveMask(e)
		{
			return this.interactiveChildren || super._isInteractiveMask(e)
		}
		addChild(e)
		{
			e._parent = this, this._children.push(e), e._layer && this.registerChildLayer(e._layer)
		}
		addChildAt(e, t)
		{
			e._parent = this, this._children.splice(t, 0, e), e._layer && this.registerChildLayer(e._layer)
		}
		removeChild(e)
		{
			e._parent = void 0, x(this._children, e)
		}
		_render(e, t)
		{
			super._render(e);
			const i = this._renderer;
			this.interactive && this.interactiveChildren && ++i._forceInteractive, _(this._children, (i =>
			{
				i.compoundAlpha = this.compoundAlpha * this.alpha, i.render(e, t)
			})), this.interactive && this.interactiveChildren && --i._forceInteractive
		}
		registerChildLayer(e)
		{
			this._childLayers || (this._childLayers = []), k(this._childLayers, e), this._parent && this._parent.registerChildLayer(e)
		}
		markDirtyLayer(e = !1)
		{
			super.markDirtyLayer(), e && this._childLayers && _(this._childLayers, (e => e.dirty = !0))
		}
		_dispose()
		{
			super._dispose(), this._childLayers && _(this._childLayers, (e =>
			{
				e.dirty = !0
			}))
		}
	}

	function si(e, t)
	{
		e.left = Math.min(e.left, t.x), e.top = Math.min(e.top, t.y), e.right = Math.max(e.right, t.x), e.bottom = Math.max(e.bottom, t.y)
	}
	class ri
	{
		colorize(e, t)
		{}
		colorizeGhost(e, t)
		{
			this.colorize(e, t)
		}
		path(e)
		{}
		pathGhost(e)
		{
			this.path(e)
		}
		addBounds(e)
		{}
	}
	class ai extends ri
	{
		colorize(e, t)
		{
			e.beginPath()
		}
	}
	class ni extends ri
	{
		constructor(e)
		{
			super(), Object.defineProperty(this, "color",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			})
		}
		colorize(e, t)
		{
			e.fillStyle = void 0 !== t ? t : this.color
		}
	}
	class oi extends ri
	{
		constructor(e)
		{
			super(), Object.defineProperty(this, "clearShadow",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			})
		}
		colorize(e, t)
		{
			e.fill(), this.clearShadow && (e.shadowColor = "", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0)
		}
	}
	class li extends ri
	{
		colorize(e, t)
		{
			e.stroke()
		}
	}
	class hi extends ri
	{
		constructor(e, t, i, s)
		{
			super(), Object.defineProperty(this, "width",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "color",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			}), Object.defineProperty(this, "lineJoin",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i
			}), Object.defineProperty(this, "lineCap",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: s
			})
		}
		colorize(e, t)
		{
			e.strokeStyle = void 0 !== t ? t : this.color, e.lineWidth = this.width, this.lineJoin && (e.lineJoin = this.lineJoin), this.lineCap && (e.lineCap = this.lineCap)
		}
	}
	class ci extends ri
	{
		constructor(e)
		{
			super(), Object.defineProperty(this, "dash",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			})
		}
		colorize(e, t)
		{
			e.setLineDash(this.dash)
		}
	}
	class ui extends ri
	{
		constructor(e)
		{
			super(), Object.defineProperty(this, "dashOffset",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			})
		}
		colorize(e, t)
		{
			e.lineDashOffset = this.dashOffset
		}
	}
	class di extends ri
	{
		constructor(e, t, i, s)
		{
			super(), Object.defineProperty(this, "x",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "y",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			}), Object.defineProperty(this, "width",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i
			}), Object.defineProperty(this, "height",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: s
			})
		}
		path(e)
		{
			e.rect(this.x, this.y, this.width, this.height)
		}
		addBounds(e)
		{
			const t = this.x,
				i = this.y,
				s = t + this.width,
				r = i + this.height;
			si(e,
			{
				x: t,
				y: i
			}), si(e,
			{
				x: s,
				y: i
			}), si(e,
			{
				x: t,
				y: r
			}), si(e,
			{
				x: s,
				y: r
			})
		}
	}
	class pi extends ri
	{
		constructor(e, t, i)
		{
			super(), Object.defineProperty(this, "x",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "y",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			}), Object.defineProperty(this, "radius",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i
			})
		}
		path(e)
		{
			e.moveTo(this.x + this.radius, this.y), e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
		}
		addBounds(e)
		{
			si(e,
			{
				x: this.x - this.radius,
				y: this.y - this.radius
			}), si(e,
			{
				x: this.x + this.radius,
				y: this.y + this.radius
			})
		}
	}
	class gi extends ri
	{
		constructor(e, t, i, s)
		{
			super(), Object.defineProperty(this, "x",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "y",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			}), Object.defineProperty(this, "radiusX",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i
			}), Object.defineProperty(this, "radiusY",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: s
			})
		}
		path(e)
		{
			e.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI)
		}
		addBounds(e)
		{
			si(e,
			{
				x: this.x - this.radiusX,
				y: this.y - this.radiusY
			}), si(e,
			{
				x: this.x + this.radiusX,
				y: this.y + this.radiusY
			})
		}
	}
	class mi extends ri
	{
		constructor(e, t, i, s, r, a)
		{
			super(), Object.defineProperty(this, "cx",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "cy",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			}), Object.defineProperty(this, "radius",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i
			}), Object.defineProperty(this, "startAngle",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: s
			}), Object.defineProperty(this, "endAngle",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: r
			}), Object.defineProperty(this, "anticlockwise",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: a
			})
		}
		path(e)
		{
			this.radius > 0 && e.arc(this.cx, this.cy, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
		}
		addBounds(e)
		{
			let t = Ze(this.cx, this.cy, this.startAngle * Ge, this.endAngle * Ge, this.radius);
			si(e,
			{
				x: t.left,
				y: t.top
			}), si(e,
			{
				x: t.right,
				y: t.bottom
			})
		}
	}
	class fi extends ri
	{
		constructor(e, t, i, s, r)
		{
			super(), Object.defineProperty(this, "x1",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "y1",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			}), Object.defineProperty(this, "x2",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i
			}), Object.defineProperty(this, "y2",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: s
			}), Object.defineProperty(this, "radius",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: r
			})
		}
		path(e)
		{
			this.radius > 0 && e.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
		}
		addBounds(e)
		{}
	}
	class bi extends ri
	{
		constructor(e, t)
		{
			super(), Object.defineProperty(this, "x",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "y",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			})
		}
		path(e)
		{
			e.lineTo(this.x, this.y)
		}
		addBounds(e)
		{
			si(e,
			{
				x: this.x,
				y: this.y
			})
		}
	}
	class _i extends ri
	{
		constructor(e, t)
		{
			super(), Object.defineProperty(this, "x",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "y",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			})
		}
		path(e)
		{
			e.moveTo(this.x, this.y)
		}
		addBounds(e)
		{
			si(e,
			{
				x: this.x,
				y: this.y
			})
		}
	}
	class vi extends ri
	{
		path(e)
		{
			e.closePath()
		}
	}
	class yi extends ri
	{
		constructor(e, t, i, s, r, a)
		{
			super(), Object.defineProperty(this, "cpX",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "cpY",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			}), Object.defineProperty(this, "cpX2",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i
			}), Object.defineProperty(this, "cpY2",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: s
			}), Object.defineProperty(this, "toX",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: r
			}), Object.defineProperty(this, "toY",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: a
			})
		}
		path(e)
		{
			e.bezierCurveTo(this.cpX, this.cpY, this.cpX2, this.cpY2, this.toX, this.toY)
		}
		addBounds(e)
		{
			si(e,
			{
				x: this.cpX,
				y: this.cpY
			}), si(e,
			{
				x: this.cpX2,
				y: this.cpY2
			}), si(e,
			{
				x: this.toX,
				y: this.toY
			})
		}
	}
	class wi extends ri
	{
		constructor(e, t, i, s)
		{
			super(), Object.defineProperty(this, "cpX",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "cpY",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			}), Object.defineProperty(this, "toX",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i
			}), Object.defineProperty(this, "toY",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: s
			})
		}
		path(e)
		{
			e.quadraticCurveTo(this.cpX, this.cpY, this.toX, this.toY)
		}
		addBounds(e)
		{
			si(e,
			{
				x: this.cpX,
				y: this.cpY
			}), si(e,
			{
				x: this.toX,
				y: this.toY
			})
		}
	}
	class xi extends ri
	{
		constructor(e, t, i, s, r)
		{
			super(), Object.defineProperty(this, "color",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "blur",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			}), Object.defineProperty(this, "offsetX",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i
			}), Object.defineProperty(this, "offsetY",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: s
			}), Object.defineProperty(this, "opacity",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: r
			})
		}
		colorize(e, t)
		{
			this.opacity && (e.fillStyle = this.color), e.shadowColor = this.color, e.shadowBlur = this.blur, e.shadowOffsetX = this.offsetX, e.shadowOffsetY = this.offsetY
		}
		colorizeGhost(e, t)
		{}
	}
	class ki extends ri
	{
		constructor(e, t, i, s, r)
		{
			super(), Object.defineProperty(this, "image",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "width",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			}), Object.defineProperty(this, "height",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i
			}), Object.defineProperty(this, "x",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: s
			}), Object.defineProperty(this, "y",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: r
			})
		}
		path(e)
		{
			e.drawImage(this.image, this.x, this.y, this.width, this.height)
		}
		addBounds(e)
		{
			si(e,
			{
				x: this.x,
				y: this.y
			}), si(e,
			{
				x: this.width,
				y: this.height
			})
		}
	}
	class Pi extends ti
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_operations",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			}), Object.defineProperty(this, "blendMode",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: st.NORMAL
			}), Object.defineProperty(this, "_hasShadows",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_fillAlpha",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_strokeAlpha",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			})
		}
		clear()
		{
			super.clear(), this._operations.length = 0
		}
		_pushOp(e)
		{
			this._operations.push(e)
		}
		beginFill(e, t = 1)
		{
			this._fillAlpha = t, e ? e instanceof pe ? this._pushOp(new ni(e.toCSS(t))) : (this.isMeasured = !0, this._pushOp(new ni(e))) : this._pushOp(new ni("rgba(0, 0, 0, " + t + ")"))
		}
		endFill()
		{
			this._pushOp(new oi(this._hasShadows))
		}
		endStroke()
		{
			this._pushOp(new li)
		}
		beginPath()
		{
			this._pushOp(new ai)
		}
		lineStyle(e = 0, t, i = 1, s, r)
		{
			this._strokeAlpha = i, t ? t instanceof pe ? this._pushOp(new hi(e, t.toCSS(i), s, r)) : this._pushOp(new hi(e, t, s, r)) : this._pushOp(new hi(e, "rgba(0, 0, 0, " + i + ")", s, r))
		}
		setLineDash(e)
		{
			this._pushOp(new ci(e || []))
		}
		setLineDashOffset(e = 0)
		{
			this._pushOp(new ui(e))
		}
		drawRect(e, t, i, s)
		{
			this._pushOp(new di(e, t, i, s))
		}
		drawCircle(e, t, i)
		{
			this._pushOp(new pi(e, t, i))
		}
		drawEllipse(e, t, i, s)
		{
			this._pushOp(new gi(e, t, i, s))
		}
		arc(e, t, i, s, r, a = !1)
		{
			this._pushOp(new mi(e, t, i, s, r, a))
		}
		arcTo(e, t, i, s, r)
		{
			this._pushOp(new fi(e, t, i, s, r))
		}
		lineTo(e, t)
		{
			this._pushOp(new bi(e, t))
		}
		moveTo(e, t)
		{
			this._pushOp(new _i(e, t))
		}
		bezierCurveTo(e, t, i, s, r, a)
		{
			this._pushOp(new yi(e, t, i, s, r, a))
		}
		quadraticCurveTo(e, t, i, s)
		{
			this._pushOp(new wi(e, t, i, s))
		}
		closePath()
		{
			this._pushOp(new vi)
		}
		shadow(e, t = 0, i = 0, s = 0, r)
		{
			this._hasShadows = !0, this._pushOp(new xi(r ? e.toCSS(r) : e.toCSS(this._fillAlpha || this._strokeAlpha), t, i, s))
		}
		image(e, t, i, s, r)
		{
			this._pushOp(new ki(e, t, i, s, r))
		}
		svgPath(e)
		{
			let t = 0,
				i = 0,
				s = null,
				r = null,
				a = null,
				n = null;
			const o = /([MmZzLlHhVvCcSsQqTtAa])([^MmZzLlHhVvCcSsQqTtAa]*)/g,
				l = /[\u0009\u0020\u000A\u000C\u000D]*([\+\-]?[0-9]*\.?[0-9]+(?:[eE][\+\-]?[0-9]+)?)[\u0009\u0020\u000A\u000C\u000D]*,?/g;
			let h;
			for (; null !== (h = o.exec(e));)
			{
				const e = h[1],
					o = h[2],
					c = [];
				for (; null !== (h = l.exec(o));) c.push(h[1]);
				switch ("S" !== e && "s" !== e && "C" !== e && "c" !== e && (s = null, r = null), "Q" !== e && "q" !== e && "T" !== e && "t" !== e && (a = null, n = null), e)
				{
				case "M":
					Gt(e, c.length, 2), t = +c[0], i = +c[1], this.moveTo(t, i);
					for (let e = 2; e < c.length; e += 2) t = +c[e], i = +c[e + 1], this.lineTo(t, i);
					break;
				case "m":
					Gt(e, c.length, 2), t += +c[0], i += +c[1], this.moveTo(t, i);
					for (let e = 2; e < c.length; e += 2) t += +c[e], i += +c[e + 1], this.lineTo(t, i);
					break;
				case "L":
					Gt(e, c.length, 2);
					for (let e = 0; e < c.length; e += 2) t = +c[e], i = +c[e + 1], this.lineTo(t, i);
					break;
				case "l":
					Gt(e, c.length, 2);
					for (let e = 0; e < c.length; e += 2) t += +c[e], i += +c[e + 1], this.lineTo(t, i);
					break;
				case "H":
					Yt(e, c.length, 1);
					for (let e = 0; e < c.length; ++e) t = +c[e], this.lineTo(t, i);
					break;
				case "h":
					Yt(e, c.length, 1);
					for (let e = 0; e < c.length; ++e) t += +c[e], this.lineTo(t, i);
					break;
				case "V":
					Yt(e, c.length, 1);
					for (let e = 0; e < c.length; ++e) i = +c[e], this.lineTo(t, i);
					break;
				case "v":
					Yt(e, c.length, 1);
					for (let e = 0; e < c.length; ++e) i += +c[e], this.lineTo(t, i);
					break;
				case "C":
					Gt(e, c.length, 6);
					for (let e = 0; e < c.length; e += 6)
					{
						const a = +c[e],
							n = +c[e + 1];
						s = +c[e + 2], r = +c[e + 3], t = +c[e + 4], i = +c[e + 5], this.bezierCurveTo(a, n, s, r, t, i)
					}
					break;
				case "c":
					Gt(e, c.length, 6);
					for (let e = 0; e < c.length; e += 6)
					{
						const a = +c[e] + t,
							n = +c[e + 1] + i;
						s = +c[e + 2] + t, r = +c[e + 3] + i, t += +c[e + 4], i += +c[e + 5], this.bezierCurveTo(a, n, s, r, t, i)
					}
					break;
				case "S":
					Gt(e, c.length, 4), null !== s && null !== r || (s = t, r = i);
					for (let e = 0; e < c.length; e += 4)
					{
						const a = 2 * t - s,
							n = 2 * i - r;
						s = +c[e], r = +c[e + 1], t = +c[e + 2], i = +c[e + 3], this.bezierCurveTo(a, n, s, r, t, i)
					}
					break;
				case "s":
					Gt(e, c.length, 4), null !== s && null !== r || (s = t, r = i);
					for (let e = 0; e < c.length; e += 4)
					{
						const a = 2 * t - s,
							n = 2 * i - r;
						s = +c[e] + t, r = +c[e + 1] + i, t += +c[e + 2], i += +c[e + 3], this.bezierCurveTo(a, n, s, r, t, i)
					}
					break;
				case "Q":
					Gt(e, c.length, 4);
					for (let e = 0; e < c.length; e += 4) a = +c[e], n = +c[e + 1], t = +c[e + 2], i = +c[e + 3], this.quadraticCurveTo(a, n, t, i);
					break;
				case "q":
					Gt(e, c.length, 4);
					for (let e = 0; e < c.length; e += 4) a = +c[e] + t, n = +c[e + 1] + i, t += +c[e + 2], i += +c[e + 3], this.quadraticCurveTo(a, n, t, i);
					break;
				case "T":
					Gt(e, c.length, 2), null !== a && null !== n || (a = t, n = i);
					for (let e = 0; e < c.length; e += 2) a = 2 * t - a, n = 2 * i - n, t = +c[e], i = +c[e + 1], this.quadraticCurveTo(a, n, t, i);
					break;
				case "t":
					Gt(e, c.length, 2), null !== a && null !== n || (a = t, n = i);
					for (let e = 0; e < c.length; e += 2) a = 2 * t - a, n = 2 * i - n, t += +c[e], i += +c[e + 1], this.quadraticCurveTo(a, n, t, i);
					break;
				case "A":
				case "a":
					const o = "a" === e;
					Ut(c), Gt(e, c.length, 7);
					for (let e = 0; e < c.length; e += 7)
					{
						let s = +c[e + 5],
							r = +c[e + 6];
						o && (s += t, r += i), _(qt(
						{
							px: t,
							py: i,
							rx: +c[e],
							ry: +c[e + 1],
							xAxisRotation: +c[e + 2],
							largeArcFlag: Xt(+c[e + 3]),
							sweepFlag: Xt(+c[e + 4]),
							cx: s,
							cy: r
						}), (e =>
						{
							this.bezierCurveTo(e.x1, e.y1, e.x2, e.y2, e.x, e.y), t = e.x, i = e.y
						}))
					}
					break;
				case "Z":
				case "z":
					Wt(e, c.length, 0), this.closePath()
				}
			}
		}
		_runPath(e)
		{
			e.beginPath(), _(this._operations, (t =>
			{
				t.path(e)
			}))
		}
		_render(e, t = 0)
		{
			super._render(e);
			const i = e.layer.dirty,
				s = this._isInteractive(e),
				r = this._ghostOnly(t),
				a = this._drawGhost(e, t);
			if (i || s || r)
			{
				const t = e.layer.context,
					s = this._renderer._ghostLayer.context;
				let n;
				i && !r && (t.globalCompositeOperation = this.blendMode, t.beginPath()), a && (s.beginPath(), n = this._getColorId()), _(this._operations, (e =>
				{
					i && !r && (e.path(t), e.colorize(t, void 0)), a && (e.pathGhost(s), e.colorizeGhost(s, n))
				}))
			}
		}
		renderDetached(e)
		{
			if (this.visible)
			{
				this._setMatrix(), e.save();
				const t = this.mask;
				t && (t._setMatrix(), t._transform(e, 1), t._runPath(e), e.clip()), e.globalAlpha = this.compoundAlpha * this.alpha, this._transform(e, 1), this.filter && (e.filter = this.filter), e.globalCompositeOperation = this.blendMode, e.beginPath(), _(this._operations, (t =>
				{
					t.path(e), t.colorize(e, void 0)
				})), e.restore()
			}
		}
		_addBounds(e)
		{
			this.visible && this.isMeasured && _(this._operations, (t =>
			{
				t.addBounds(e)
			}))
		}
	}
	class Di extends ti
	{
		constructor(e, t, i)
		{
			super(e), Object.defineProperty(this, "text",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "style",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "resolution",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 1
			}), Object.defineProperty(this, "textVisible",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), Object.defineProperty(this, "truncated",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_textInfo",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_originalScale",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 1
			}), this.text = t, this.style = i
		}
		invalidateBounds()
		{
			super.invalidateBounds(), this._textInfo = void 0
		}
		_shared(e)
		{
			this.style.textAlign && (e.textAlign = this.style.textAlign), this.style.direction && (e.direction = this.style.direction), this.style.textBaseline && (e.textBaseline = this.style.textBaseline)
		}
		_prerender(e, t = !1, i = !1)
		{
			super._render(e);
			const s = e.layer.context,
				r = this._renderer._ghostLayer.context,
				a = this.style;
			let n = this._getFontStyle(void 0, i);
			s.font = n, this._isInteractive(e) && !t && (r.font = n), a.fill && (a.fill instanceof pe ? s.fillStyle = a.fill.toCSS(null != a.fillOpacity ? a.fillOpacity : 1) : s.fillStyle = a.fill), a.shadowColor && (e.layer.context.shadowColor = a.shadowColor.toCSS(a.shadowOpacity || 1)), a.shadowBlur && (e.layer.context.shadowBlur = a.shadowBlur), a.shadowOffsetX && (e.layer.context.shadowOffsetX = a.shadowOffsetX), a.shadowOffsetY && (e.layer.context.shadowOffsetY = a.shadowOffsetY), this._shared(s), this._isInteractive(e) && !t && (r.fillStyle = this._getColorId(), this._shared(r))
		}
		_getFontStyle(e, t = !1)
		{
			const i = this.style;
			let s = [];
			return e && e.fontVariant ? s.push(e.fontVariant) : i.fontVariant && s.push(i.fontVariant), t || (e && e.fontWeight ? s.push(e.fontWeight) : i.fontWeight && s.push(i.fontWeight)), e && e.fontStyle ? s.push(e.fontStyle) : i.fontStyle && s.push(i.fontStyle), e && e.fontSize ? (d(e.fontSize) && (e.fontSize = e.fontSize + "px"), s.push(e.fontSize)) : i.fontSize && (d(i.fontSize) && (i.fontSize = i.fontSize + "px"), s.push(i.fontSize)), e && e.fontFamily ? s.push(e.fontFamily) : i.fontFamily ? s.push(i.fontFamily) : s.length && s.push("Arial"), s.join(" ")
		}
		_render(e, t = 0)
		{
			if (this._textInfo || this._measure(e), this.textVisible)
			{
				const i = this._isInteractive(e),
					s = e.layer.context,
					r = e.layer.dirty,
					a = this._renderer._ghostLayer.context,
					n = this._ghostOnly(t),
					o = this._drawGhost(e, t);
				s.save(), a.save(), this._prerender(e), _(this._textInfo, ((t, l) =>
				{
					_(t.textChunks, ((l, h) =>
					{
						if (l.style && (s.save(), a.save(), n || (s.font = l.style), this._isInteractive(e) && (a.font = l.style)), l.fill && (s.save(), n || (s.fillStyle = l.fill.toCSS())), r && !n && s.fillText(l.text, l.offsetX, t.offsetY + l.offsetY), "underline" == l.textDecoration || "line-through" == l.textDecoration)
						{
							let e = 1,
								i = 1,
								r = l.height;
							const a = this.style.oversizedBehavior || "";
							if (["truncate", "wrap", "wrap-no-break"].indexOf(a) > -1)
							{
								const e = this._measureText(l.text, s);
								l.width = e.actualBoundingBoxLeft + e.actualBoundingBoxRight
							}
							let o, h = l.offsetX;
							switch (this.style.textAlign)
							{
							case "right":
							case "end":
								h -= l.width;
								break;
							case "center":
								h -= l.width / 2
							}
							if (l.style) switch (dt.getTextStyle(l.style).fontWeight)
							{
							case "bolder":
							case "bold":
							case "700":
							case "800":
							case "900":
								e = 2
							}
							r && (i = r / 20), o = "line-through" == l.textDecoration ? e + t.offsetY + l.offsetY - l.height / 2 : e + 1.5 * i + t.offsetY + l.offsetY, n || (s.save(), s.beginPath(), l.fill ? s.strokeStyle = l.fill.toCSS() : this.style.fill && this.style.fill instanceof pe && (s.strokeStyle = this.style.fill.toCSS()), s.lineWidth = e * i, s.moveTo(h, o), s.lineTo(h + l.width, o), s.stroke(), s.restore())
						}
						i && this.interactive && o && a.fillText(l.text, l.offsetX, t.offsetY + l.offsetY), l.fill && s.restore(), l.style && (s.restore(), a.restore())
					}))
				})), s.restore(), a.restore()
			}
		}
		_addBounds(e)
		{
			if (this.visible && this.isMeasured)
			{
				const t = this._measure(
				{
					inactive: this.inactive,
					layer: this.getLayer()
				});
				si(e,
				{
					x: t.left,
					y: t.top
				}), si(e,
				{
					x: t.right,
					y: t.bottom
				})
			}
		}
		_ignoreFontWeight()
		{
			return /apple/i.test(navigator.vendor)
		}
		_measure(e)
		{
			const i = e.layer.context,
				s = this._renderer._ghostLayer.context,
				r = "rtl" == this.style.direction;
			this._textInfo = [];
			const a = this.style.oversizedBehavior,
				n = this.style.maxWidth,
				l = d(n) && "truncate" == a,
				h = d(n) && ("wrap" == a || "wrap-no-break" == a);
			i.save(), s.save(), this._prerender(e, !0, this._ignoreFontWeight());
			const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ",
				u = this.text.toString().replace(/\r/g, "").split(/\n/);
			let p, g = !0,
				m = 0,
				f = 0,
				b = 0;
			_(u, ((e, r) =>
			{
				let a;
				for (a = "" == e ? [
					{
						type: "value",
						text: ""
					}] : dt.chunk(e, !1, this.style.ignoreFormatting); a.length > 0;)
				{
					let e = {
						offsetY: b,
						ascent: 0,
						width: 0,
						height: 0,
						left: 0,
						right: 0,
						textChunks: []
					};
					const r = this._measureText(c, i),
						u = r.actualBoundingBoxAscent + r.actualBoundingBoxDescent;
					let d;
					e.height = u, e.ascent = r.actualBoundingBoxAscent;
					let _, v, w, x = this.style.textDecoration,
						k = !1,
						P = !0,
						D = [];
					y(a, ((t, r) =>
					{
						if ("format" == t.type)
							if ("[/]" == t.text) g || (i.restore(), s.restore(), g = !0), _ = void 0, p = void 0, v = void 0, x = this.style.textDecoration, w = void 0, d = t.text;
							else
							{
								g || (i.restore(), s.restore());
								let r = dt.getTextStyle(t.text);
								const a = this._getFontStyle(r);
								i.save(), s.save(), i.font = a, p = a, d = t.text, r.textDecoration && (x = r.textDecoration), r.fill && (_ = r.fill), r.width && (v = o(r.width)), r.verticalAlign && (w = r.verticalAlign), g = !1;
								const n = this._measureText(c, i),
									l = n.actualBoundingBoxAscent + n.actualBoundingBoxDescent;
								l > e.height && (e.height = l), n.actualBoundingBoxAscent > e.ascent && (e.ascent = n.actualBoundingBoxAscent)
							}
						else if ("value" == t.type && !k)
						{
							const s = this._measureText(t.text, i);
							let o = s.actualBoundingBoxLeft + s.actualBoundingBoxRight;
							if (l)
							{
								this.truncated = void 0;
								let s = P || this.style.breakWords || !1;
								const r = this.style.ellipsis || "",
									a = this._measureText(r, i),
									l = a.actualBoundingBoxLeft + a.actualBoundingBoxRight;
								if (e.width + o > n)
								{
									const a = n - e.width - l;
									t.text = this._truncateText(i, t.text, a, s), t.text += r, k = !0, this.truncated = !0
								}
							}
							else if (h && e.width + o > n)
							{
								const s = n - e.width,
									o = this._truncateText(i, t.text, s, !1, P && "wrap-no-break" != this.style.oversizedBehavior);
								if ("" == o) return this.textVisible = !0, !1;
								D = a.slice(r + 1), K(o) != K(t.text) && (D.unshift(
								{
									type: "value",
									text: t.text.substr(o.length)
								}), d && D.unshift(
								{
									type: "format",
									text: d
								})), t.text = K(o), a = [], k = !0
							}
							let c = 1,
								u = 1;
							if (p && v && v > o)
							{
								const e = o / v;
								switch (this.style.textAlign)
								{
								case "right":
								case "end":
									c = e;
									break;
								case "center":
									c = e, u = e;
									break;
								default:
									u = e
								}
								o = v
							}
							const g = s.actualBoundingBoxAscent + s.actualBoundingBoxDescent;
							g > e.height && (e.height = g), s.actualBoundingBoxAscent > e.ascent && (e.ascent = s.actualBoundingBoxAscent), e.width += o, e.left += s.actualBoundingBoxLeft / c, e.right += s.actualBoundingBoxRight / u, e.textChunks.push(
							{
								style: p,
								fill: _,
								text: t.text,
								width: o,
								height: g,
								left: s.actualBoundingBoxLeft,
								right: s.actualBoundingBoxRight,
								ascent: s.actualBoundingBoxAscent,
								offsetX: 0,
								offsetY: 0,
								textDecoration: x,
								verticalAlign: w
							}), P = !1
						}
						return !0
					})), this.style.lineHeight instanceof t ? (e.height *= this.style.lineHeight.value, e.ascent *= this.style.lineHeight.value) : (e.height *= this.style.lineHeight || 1.2, e.ascent *= this.style.lineHeight || 1.2), m < e.left && (m = e.left), f < e.right && (f = e.right), this._textInfo.push(e), b += e.height, a = D || []
				}
			})), g || (i.restore(), s.restore()), _(this._textInfo, ((e, t) =>
			{
				let i = 0;
				_(e.textChunks, (t =>
				{
					if (t.offsetX = i + t.left - e.left, t.offsetY += e.height - e.height * (this.style.baselineRatio || .19), i += t.width, t.verticalAlign) switch (t.verticalAlign)
					{
					case "super":
						t.offsetY -= e.height / 2 - t.height / 2;
						break;
					case "sub":
						t.offsetY += t.height / 2
					}
				}))
			}));
			const v = {
				left: r ? -f : -m,
				top: 0,
				right: r ? m : f,
				bottom: b
			};
			if ("none" !== a)
			{
				const e = this._fitRatio(v);
				if (e < 1)
					if ("fit" == a) d(this.style.minScale) && e < this.style.minScale ? (this.textVisible = !1, v.left = 0, v.top = 0, v.right = 0, v.bottom = 0) : (this._originalScale || (this._originalScale = this.scale), this.scale = e, this.textVisible = !0);
					else if ("hide" == a) this.textVisible = !1, v.left = 0, v.top = 0, v.right = 0, v.bottom = 0;
				else
				{
					switch (this.style.textAlign)
					{
					case "right":
					case "end":
						v.left = r ? n : -n, v.right = 0;
						break;
					case "center":
						v.left = -n / 2, v.right = n / 2;
						break;
					default:
						v.left = 0, v.right = r ? -n : n
					}
					this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = !0
				}
				else this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = !0
			}
			return i.restore(), s.restore(), v
		}
		_fitRatio(e)
		{
			const t = this.style.maxWidth,
				i = this.style.maxHeight;
			if (!d(t) && !d(i)) return 1;
			const s = e.right - e.left,
				r = e.bottom - e.top;
			return Math.min(t / s || 1, i / r || 1)
		}
		_truncateText(e, t, i, s = !1, r = !0)
		{
			let a;
			do {
				if (s) t = t.slice(0, -1);
				else
				{
					let e = t.replace(/[^,;:!?\\\/\s​]+[,;:!?\\\/\s​]*$/g, "");
					if ("" != e && e !== t || !r)
					{
						if ("" == e) return t;
						t = e
					}
					else s = !0
				}
				const i = this._measureText(t, e);
				a = i.actualBoundingBoxLeft + i.actualBoundingBoxRight
			} while (a > i && "" != t);
			return t
		}
		_measureText(e, t)
		{
			let i = t.measureText(e),
				s = {};
			if (null == i.actualBoundingBoxAscent)
			{
				const t = document.createElement("div");
				t.innerText = e, t.style.visibility = "hidden", t.style.position = "absolute", t.style.top = "-1000000px;", t.style.fontFamily = this.style.fontFamily || "", t.style.fontSize = this.style.fontSize + "", document.body.appendChild(t);
				const r = t.getBoundingClientRect();
				document.body.removeChild(t);
				const a = r.height,
					n = i.width;
				s = {
					actualBoundingBoxAscent: a,
					actualBoundingBoxDescent: 0,
					actualBoundingBoxLeft: 0,
					actualBoundingBoxRight: n,
					fontBoundingBoxAscent: a,
					fontBoundingBoxDescent: 0,
					width: n
				}
			}
			else s = {
				actualBoundingBoxAscent: i.actualBoundingBoxAscent,
				actualBoundingBoxDescent: i.actualBoundingBoxDescent,
				actualBoundingBoxLeft: i.actualBoundingBoxLeft,
				actualBoundingBoxRight: i.actualBoundingBoxRight,
				fontBoundingBoxAscent: i.actualBoundingBoxAscent,
				fontBoundingBoxDescent: i.actualBoundingBoxDescent,
				width: i.width
			};
			const r = i.width;
			switch (this.style.textAlign)
			{
			case "right":
			case "end":
				s.actualBoundingBoxLeft = r, s.actualBoundingBoxRight = 0;
				break;
			case "center":
				s.actualBoundingBoxLeft = r / 2, s.actualBoundingBoxRight = r / 2;
				break;
			default:
				s.actualBoundingBoxLeft = 0, s.actualBoundingBoxRight = r
			}
			return s
		}
	}
	class Ti
	{
		constructor()
		{
			Object.defineProperty(this, "fill",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "fillOpacity",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "textAlign",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "fontFamily",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "fontSize",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "fontWeight",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "fontStyle",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "fontVariant",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "textDecoration",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "shadowColor",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "shadowBlur",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "shadowOffsetX",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "shadowOffsetY",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "shadowOpacity",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "lineHeight",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i(120)
			}), Object.defineProperty(this, "baselineRatio",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: .19
			}), Object.defineProperty(this, "direction",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "textBaseline",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "oversizedBehavior",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: "none"
			}), Object.defineProperty(this, "breakWords",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "ellipsis",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: "…"
			}), Object.defineProperty(this, "maxWidth",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "maxHeight",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "minScale",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "ignoreFormatting",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			})
		}
	}
	class Oi extends Di
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "textType",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: "circular"
			}), Object.defineProperty(this, "radius",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "startAngle",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "inside",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "orientation",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: "auto"
			}), Object.defineProperty(this, "kerning",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_textReversed",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			})
		}
		_render(e, t = 0)
		{
			"circular" === this.textType ? this._renderCircular(e, t) : super._render(e, t)
		}
		_renderCircular(e, t = 0)
		{
			if (this.textVisible)
			{
				this._prerender(e);
				const i = this._isInteractive(e),
					s = e.layer.context,
					r = e.layer.dirty,
					a = this._renderer._ghostLayer.context;
				s.save(), i && a.save(), this._textInfo || this._measure(e);
				let n = this.radius || 0,
					o = this.startAngle || 0,
					l = 0,
					h = this.orientation,
					c = "auto" == h ? "auto" : "inward" == h;
				const u = this.inside,
					d = this.style.textAlign || "left",
					p = this.kerning || 0;
				let g = "left" == d ? 1 : -1;
				const m = !this._textReversed,
					f = this._ghostOnly(t),
					b = this._drawGhost(e, t);
				if ("auto" == c)
				{
					let e = 0,
						t = 0;
					_(this._textInfo, ((t, i) =>
					{
						const s = o + t.width / (n - t.height) / 2 * -g;
						s > e && (e = s)
					})), t = "left" == d ? (e + l / 2) * Ge : "right" == d ? (e - l / 2) * Ge : o * Ge, t = $e(t), c = t >= 270 || t <= 90
				}
				1 == c && m && (this._textInfo.reverse(), this._textReversed = !0), _(this._textInfo, ((e, t) =>
				{
					const h = e.height;
					u || (n += h), (-1 == g && c || 1 == g && !c) && m && e.textChunks.reverse();
					let v = o;
					l = 0, "center" == d && (v += e.width / (n - h) / 2 * -g, l = v - o), v += Math.PI * (c ? 0 : 1), s.save(), i && a.save(), f || s.rotate(v), i && a.rotate(v);
					let y = 0;
					_(e.textChunks, ((e, t) =>
					{
						const o = e.text,
							l = e.width;
						y = l / 2 / (n - h) * g, f || s.rotate(y), i && a.rotate(y), e.style && (s.save(), a.save(), f || (s.font = e.style), i && (a.font = e.style)), e.fill && (s.save(), f || (s.fillStyle = e.fill.toCSS())), f || (s.textBaseline = "middle", s.textAlign = "center"), i && (a.textBaseline = "middle", a.textAlign = "center"), r && !f && s.fillText(o, 0, (c ? 1 : -1) * (0 - n + h / 2)), i && b && a.fillText(o, 0, (c ? 1 : -1) * (0 - n + h / 2)), e.fill && s.restore(), e.style && (s.restore(), a.restore()), y = (l / 2 + p) / (n - h) * g, f || s.rotate(y), i && a.rotate(y)
					})), s.restore(), i && a.restore(), u && (n -= h)
				})), s.restore(), i && a.restore()
			}
		}
		_measure(e)
		{
			return "circular" === this.textType ? this._measureCircular(e) : super._measure(e)
		}
		_measureCircular(e)
		{
			const i = e.layer.context,
				s = this._renderer._ghostLayer.context,
				r = "rtl" == this.style.direction,
				a = this.style.oversizedBehavior,
				n = this.style.maxWidth,
				l = d(n) && "truncate" == a,
				h = this.style.ellipsis || "";
			let c;
			this.textVisible = !0, this._textInfo = [], this._textReversed = !1, i.save(), s.save(), this._prerender(e, !0);
			const u = this.text.toString().replace(/\r/g, "").split(/\n/);
			let p = !0,
				g = 0,
				m = 0;
			return _(u, ((e, a) =>
			{
				let u, d, f, b = dt.chunk(e, !1, this.style.ignoreFormatting),
					v = {
						offsetY: m,
						ascent: 0,
						width: 0,
						height: 0,
						left: 0,
						right: 0,
						textChunks: []
					};
				_(b, ((e, t) =>
				{
					if ("format" == e.type)
					{
						if ("[/]" == e.text) p || (i.restore(), s.restore(), p = !0), d = void 0, u = void 0, f = void 0;
						else
						{
							let t = dt.getTextStyle(e.text);
							const r = this._getFontStyle(t);
							i.save(), s.save(), i.font = r, u = r, t.fill && (d = t.fill), t.width && (f = o(t.width)), p = !1
						}
						l && (c = this._measureText(h, i))
					}
					else if ("value" == e.type)
					{
						let t = e.text.match(/./gu) || [];
						r && (t = function (e)
						{
							const t = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/,
								i = /([^اأدذرزو]*[اأدذرزو])/gi;
							let s = e.split(/(\s+)/),
								r = [];
							return s.forEach((e =>
							{
								if (e.match(/^\s+$/))(e = " ") && (e = "  "), r.push(e);
								else if (t.test(e))
								{
									let t = e.split(i).filter((e => "" !== e));
									r = r.concat(t)
								}
								else r = r.concat([...e])
							})), r
						}(e.text), t.reverse());
						for (let e = 0; e < t.length; e++)
						{
							const s = t[e],
								r = this._measureText(s, i);
							let a = r.width;
							u && f && f > a && (a = f);
							const o = r.actualBoundingBoxAscent + r.actualBoundingBoxDescent;
							if (o > v.height && (v.height = o), r.actualBoundingBoxAscent > v.ascent && (v.ascent = r.actualBoundingBoxAscent), g += a, l)
							{
								c || (c = this._measureText(h, i));
								const e = c.actualBoundingBoxLeft + c.actualBoundingBoxRight;
								if (g + e > n)
								{
									1 == v.textChunks.length ? this.textVisible = !1 : (v.width += e, v.left += c.actualBoundingBoxLeft, v.right += c.actualBoundingBoxRight, v.textChunks.push(
									{
										style: u,
										fill: d,
										text: h,
										width: e,
										height: o + c.actualBoundingBoxDescent,
										left: c.actualBoundingBoxLeft,
										right: c.actualBoundingBoxRight,
										ascent: c.actualBoundingBoxAscent,
										offsetX: 0,
										offsetY: o,
										textDecoration: void 0
									}));
									break
								}
							}
							v.width += a, v.left += r.actualBoundingBoxLeft, v.right += r.actualBoundingBoxRight, v.textChunks.push(
							{
								style: u,
								fill: d,
								text: s,
								width: a,
								height: o + r.actualBoundingBoxDescent,
								left: r.actualBoundingBoxLeft,
								right: r.actualBoundingBoxRight,
								ascent: r.actualBoundingBoxAscent,
								offsetX: 0,
								offsetY: o,
								textDecoration: void 0
							})
						}
					}
				})), this.style.lineHeight instanceof t ? v.height *= this.style.lineHeight.value : v.height *= this.style.lineHeight || 1.2, this._textInfo.push(v), m += v.height
			})), p || (i.restore(), s.restore()), "hide" == a && g > n && (this.textVisible = !1), _(this._textInfo, (e =>
			{
				_(e.textChunks, (t =>
				{
					t.offsetY += Math.round((e.height - t.height + (e.ascent - t.ascent)) / 2)
				}))
			})), i.restore(), s.restore(),
			{
				left: 0,
				top: 0,
				right: 0,
				bottom: 0
			}
		}
	}
	class Si extends ti
	{
		constructor(e, t)
		{
			super(e), Object.defineProperty(this, "width",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "height",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "image",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "tainted",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "shadowColor",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "shadowBlur",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "shadowOffsetX",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "shadowOffsetY",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "shadowOpacity",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_imageMask",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this.image = t
		}
		_dispose()
		{
			super._dispose(), this._imageMask && Jt(this._imageMask)
		}
		getLocalBounds()
		{
			if (!this._localBounds)
			{
				let e = 0,
					t = 0;
				this.width && (e = this.width), this.height && (t = this.height), this._localBounds = {
					left: 0,
					top: 0,
					right: e,
					bottom: t
				}, this._addBounds(this._localBounds)
			}
			return this._localBounds
		}
		_render(e, t = 0)
		{
			if (super._render(e), this.image)
			{
				if (void 0 === this.tainted && (this.tainted = Zt(this.image), e.layer.tainted = !0), this.tainted && this._renderer._omitTainted) return;
				const i = this._ghostOnly(t),
					s = this._drawGhost(e, t);
				if (e.layer.dirty && !i)
				{
					this.shadowColor && (e.layer.context.shadowColor = this.shadowColor.toCSS(this.shadowOpacity || 1)), this.shadowBlur && (e.layer.context.shadowBlur = this.shadowBlur), this.shadowOffsetX && (e.layer.context.shadowOffsetX = this.shadowOffsetX), this.shadowOffsetY && (e.layer.context.shadowOffsetY = this.shadowOffsetY);
					const t = this.width || this.image.naturalWidth,
						i = this.height || this.image.naturalHeight;
					e.layer.context.drawImage(this.image, 0, 0, t, i)
				}
				if (this.interactive && this._isInteractive(e) && s)
				{
					const e = this._getMask(this.image);
					this._renderer._ghostLayer.context.drawImage(e, 0, 0)
				}
			}
		}
		clear()
		{
			super.clear(), this.image = void 0, this._imageMask = void 0
		}
		_getMask(e)
		{
			if (void 0 === this._imageMask)
			{
				const t = this.width || e.naturalWidth,
					i = this.height || e.naturalHeight,
					s = document.createElement("canvas");
				s.width = t, s.height = i;
				const r = s.getContext("2d");
				r.imageSmoothingEnabled = !1, r.fillStyle = this._getColorId(), r.fillRect(0, 0, t, i), Zt(e) || (r.globalCompositeOperation = "destination-in", r.drawImage(e, 0, 0, t, i)), this._imageMask = s
			}
			return this._imageMask
		}
	}
	class Ei
	{
		constructor(e, t, i, s)
		{
			Object.defineProperty(this, "event",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: e
			}), Object.defineProperty(this, "originalPoint",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t
			}), Object.defineProperty(this, "point",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: i
			}), Object.defineProperty(this, "bbox",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: s
			}), Object.defineProperty(this, "id",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "simulated",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "native",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), F("touchevents") && e instanceof Touch ? this.id = e.identifier : this.id = null
		}
	}
	class Ci extends B
	{
		constructor(e)
		{
			if (super(), Object.defineProperty(this, "view",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: document.createElement("div")
				}), Object.defineProperty(this, "_layerDom",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: document.createElement("div")
				}), Object.defineProperty(this, "layers",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_dirtyLayers",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "defaultLayer",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: this.getLayer(0)
				}), Object.defineProperty(this, "_ghostLayer",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: new ji
				}), Object.defineProperty(this, "_deferredGhostLayers",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_patternCanvas",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: document.createElement("canvas")
				}), Object.defineProperty(this, "_patternContext",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: this._patternCanvas.getContext("2d")
				}), Object.defineProperty(this, "_realWidth",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0
				}), Object.defineProperty(this, "_realHeight",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0
				}), Object.defineProperty(this, "_calculatedWidth",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0
				}), Object.defineProperty(this, "_calculatedHeight",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0
				}), Object.defineProperty(this, "resolution",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "interactionsEnabled",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !0
				}), Object.defineProperty(this, "_listeners",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_events",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_colorId",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0
				}), Object.defineProperty(this, "_colorMap",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_forceInteractive",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0
				}), Object.defineProperty(this, "_omitTainted",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "_hovering",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: new Set
				}), Object.defineProperty(this, "_dragging",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_mousedown",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_lastPointerMoveEvent",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "tapToActivate",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "tapToActivateTimeout",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 3e3
				}), Object.defineProperty(this, "_touchActive",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "_touchActiveTimeout",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), this.resolution = null == e ? window.devicePixelRatio : e, this.view.style.position = "absolute", this.view.setAttribute("aria-hidden", "true"), this.view.appendChild(this._layerDom), this._disposers.push(new A((() =>
				{
					C(this._events, ((e, t) =>
					{
						t.disposer.dispose()
					})), _(this.layers, (e =>
					{
						Jt(e.view), e.exportableView && Jt(e.exportableView)
					})), Jt(this._ghostLayer.view), Jt(this._patternCanvas)
				}))), this._disposers.push(H((() =>
				{
					null == e && (this.resolution = window.devicePixelRatio)
				}))), F("touchevents"))
			{
				const e = e =>
				{
					0 !== this._dragging.length && y(this._dragging, (t => !t.value.shouldCancelTouch() || (e.preventDefault(), !1))), this._touchActiveTimeout && this._delayTouchDeactivate()
				};
				this._disposers.push(I(window, "touchstart", e,
				{
					passive: !1
				})), this._disposers.push(I(this.view, "touchstart", e,
				{
					passive: !1
				})), this._disposers.push(I(this.view, "touchmove", (() =>
				{
					this._touchActiveTimeout && this._delayTouchDeactivate()
				}),
				{
					passive: !0
				})), this._disposers.push(I(window, "click", (e =>
				{
					this._touchActive = !1
				}),
				{
					passive: !0
				})), this._disposers.push(I(this.view, "click", (e =>
				{
					window.setTimeout((() =>
					{
						this._touchActive = !0, this._delayTouchDeactivate()
					}), 100)
				}),
				{
					passive: !0
				}))
			}
			F("wheelevents") && this._disposers.push(I(this.view, "wheel", (e =>
			{
				let t = !1;
				this._hovering.forEach((e =>
				{
					if (e.wheelable) return t = !0, !1
				})), t && e.preventDefault()
			}),
			{
				passive: !1
			}))
		}
		resetImageArray()
		{
			this._ghostLayer.imageArray = void 0
		}
		_delayTouchDeactivate()
		{
			this._touchActiveTimeout && clearTimeout(this._touchActiveTimeout), this.tapToActivateTimeout > 0 && (this._touchActiveTimeout = window.setTimeout((() =>
			{
				this._touchActive = !1
			}), this.tapToActivateTimeout))
		}
		get debugGhostView()
		{
			return !!this._ghostLayer.view.parentNode
		}
		set debugGhostView(e)
		{
			e ? this._ghostLayer.view.parentNode || this.view.appendChild(this._ghostLayer.view) : this._ghostLayer.view.parentNode && this._ghostLayer.view.parentNode.removeChild(this._ghostLayer.view)
		}
		createLinearGradient(e, t, i, s)
		{
			return this.defaultLayer.context.createLinearGradient(e, t, i, s)
		}
		createRadialGradient(e, t, i, s, r, a)
		{
			return this.defaultLayer.context.createRadialGradient(e, t, i, s, r, a)
		}
		createPattern(e, t, i, s, r)
		{
			return this._patternCanvas.width = s, this._patternCanvas.height = r, this._patternContext.clearRect(0, 0, s, r), t.renderDetached(this._patternContext), e.renderDetached(this._patternContext), this._patternContext.createPattern(this._patternCanvas, i)
		}
		makeContainer()
		{
			return new ii(this)
		}
		makeGraphics()
		{
			return new Pi(this)
		}
		makeText(e, t)
		{
			return new Di(this, e, t)
		}
		makeTextStyle()
		{
			return new Ti
		}
		makeRadialText(e, t)
		{
			return new Oi(this, e, t)
		}
		makePicture(e)
		{
			return new Si(this, e)
		}
		resizeLayer(e)
		{
			e.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution)
		}
		resizeGhost()
		{
			this._ghostLayer.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution)
		}
		resize(e, t, i, s)
		{
			this._realWidth = e, this._realHeight = t, this._calculatedWidth = i, this._calculatedHeight = s, _(this.layers, (e =>
			{
				e && (e.dirty = !0, this.resizeLayer(e))
			})), this.resizeGhost(), this.view.style.width = i + "px", this.view.style.height = s + "px"
		}
		createDetachedLayer(e = !1)
		{
			const t = document.createElement("canvas"),
				i = t.getContext("2d",
				{
					willReadFrequently: e
				}),
				s = new Mi(t, i);
			return t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", s
		}
		getLayerByOrder(e)
		{
			const t = this.layers,
				i = t.length;
			for (let s = 0; s < i; s++)
			{
				const i = t[s];
				if (i.order == e) return i
			}
		}
		getLayer(e, t = !0)
		{
			let i = this.getLayerByOrder(e);
			if (i) return i;
			const s = this.createDetachedLayer(99 == e);
			s.order = e, s.visible = t, s.view.className = "am5-layer-" + e, s.visible && this.resizeLayer(s);
			const r = this.layers;
			r.push(s), r.sort(((e, t) => e.order > t.order ? 1 : e.order < t.order ? -1 : 0));
			const a = r.length;
			let n;
			for (let e = f(r, s) + 1; e < a; e++)
				if (r[e].visible)
				{
					n = r[e];
					break
				} return s.visible && (void 0 === n ? this._layerDom.appendChild(s.view) : this._layerDom.insertBefore(s.view, n.view)), s
		}
		render(e)
		{
			this._dirtyLayers.length = 0, this._deferredGhostLayers = [], _(this.layers, (e =>
			{
				e && e.dirty && e.visible && (this._dirtyLayers.push(e), e.clear())
			})), this._ghostLayer.clear(), e.render(
			{
				inactive: null,
				layer: this.defaultLayer
			});
			const t = this._deferredGhostLayers;
			if (t.length && (t.sort(((e, t) => e - t)), _(t, (t =>
				{
					e.render(
					{
						inactive: null,
						layer: this.defaultLayer
					}, t)
				}))), this._ghostLayer.context.restore(), _(this.layers, (e =>
				{
					if (e)
					{
						const t = e.context;
						t.beginPath(), t.moveTo(0, 0), t.stroke()
					}
				})), _(this._dirtyLayers, (e =>
				{
					e.context.restore(), e.dirty = !1
				})), this._hovering.size && this._lastPointerMoveEvent)
			{
				const
				{
					events: e,
					target: t,
					native: i
				} = this._lastPointerMoveEvent;
				_(e, (e =>
				{
					this._dispatchGlobalMousemove(e, t, i)
				}))
			}
		}
		paintId(e)
		{
			const t = function (e)
				{
					const t = [0, 0, 0];
					for (let i = 0; i < 24; i++) t[i % 3] <<= 1, t[i % 3] |= 1 & e, e >>= 1;
					return (0 | t[0]) + (t[1] << 8) + (t[2] << 16)
				}(++this._colorId),
				i = pe.fromHex(t).toCSS();
			return this._colorMap[i] = e, i
		}
		_removeObject(e)
		{
			void 0 !== e._colorId && delete this._colorMap[e._colorId]
		}
		_adjustBoundingBox(e)
		{
			const t = this._ghostLayer.margin;
			return new DOMRect(-t.left, -t.top, e.width + t.left + t.right, e.height + t.top + t.bottom)
		}
		getEvent(e, t = !0)
		{
			const i = this.view.getBoundingClientRect(),
				s = e.clientX || 0,
				r = e.clientY || 0,
				a = this._calculatedWidth / this._realWidth,
				n = this._calculatedHeight / this._realHeight,
				o = {
					x: s - i.left,
					y: r - i.top
				},
				l = {
					x: (s - (t ? i.left : 0)) * a,
					y: (r - (t ? i.top : 0)) * n
				};
			return new Ei(e, o, l, this._adjustBoundingBox(i))
		}
		_getHitTarget(e, t, i)
		{
			if (0 === t.width || 0 === t.height || e.x < t.left || e.x > t.right || e.y < t.top || e.y > t.bottom) return;
			if (!i || !this._layerDom.contains(i)) return;
			const s = this._ghostLayer.getImageData(e, t);
			if (0 === s.data[0] && 0 === s.data[1] && 0 === s.data[2]) return !1;
			const r = pe.fromRGB(s.data[0], s.data[1], s.data[2]).toCSS();
			return this._colorMap[r]
		}
		getObjectAtPoint(e)
		{
			const t = this._ghostLayer.getImageArray(e);
			if (0 === t[0] && 0 === t[1] && 0 === t[2]) return;
			const i = pe.fromRGB(t[0], t[1], t[2]).toCSS();
			return this._colorMap[i]
		}
		_withEvents(e, t)
		{
			const i = this._events[e];
			if (void 0 !== i)
			{
				i.dispatching = !0;
				try
				{
					t(i)
				}
				finally
				{
					i.dispatching = !1, i.cleanup && (i.cleanup = !1, S(i.callbacks, (e => !e.disposed)), 0 === i.callbacks.length && (i.disposer.dispose(), delete this._events[e]))
				}
			}
		}
		_dispatchEventAll(e, t)
		{
			this.interactionsEnabled && this._withEvents(e, (e =>
			{
				_(e.callbacks, (e =>
				{
					e.disposed || e.callback.call(e.context, t)
				}))
			}))
		}
		_dispatchEvent(e, t, i)
		{
			if (!this.interactionsEnabled) return !1;
			let s = !1;
			return this._withEvents(e, (e =>
			{
				_(e.callbacks, (e =>
				{
					e.disposed || e.object !== t || (e.callback.call(e.context, i), s = !0)
				}))
			})), s
		}
		_dispatchMousedown(e, t)
		{
			const i = e.button;
			if (0 != i && 2 != i && 1 != i && void 0 !== i) return;
			const s = this.getEvent(e),
				r = this._getHitTarget(s.originalPoint, s.bbox, t);
			if (r)
			{
				const e = s.id;
				let t = !1;
				Kt(r, (i =>
				{
					const r = {
						id: e,
						value: i
					};
					return this._mousedown.push(r), !t && this._dispatchEvent("pointerdown", i, s) && (t = !0, this._dragging.some((t => t.value === i && t.id === e)) || this._dragging.push(r)), !0
				}))
			}
		}
		_dispatchGlobalMousemove(e, t, i)
		{
			const s = this.getEvent(e),
				r = this._getHitTarget(s.originalPoint, s.bbox, t);
			s.native = i, r ? (this._hovering.forEach((e =>
			{
				e.contains(r) || (this._hovering.delete(e), e.cursorOverStyle && q(document.body, "cursor", e._replacedCursorStyle), this._dispatchEvent("pointerout", e, s))
			})), s.native && Kt(r, (e => (this._hovering.has(e) || (this._hovering.add(e), e.cursorOverStyle && (e._replacedCursorStyle = document.body.style.cursor, q(document.body, "cursor", e.cursorOverStyle)), this._dispatchEvent("pointerover", e, s)), !0)))) : (this._hovering.forEach((e =>
			{
				e.cursorOverStyle && q(document.body, "cursor", e._replacedCursorStyle), this._dispatchEvent("pointerout", e, s)
			})), this._hovering.clear()), this._dispatchEventAll("globalpointermove", s)
		}
		removeHovering(e)
		{
			this._hovering.delete(e), e.cursorOverStyle && q(document.body, "cursor", e._replacedCursorStyle)
		}
		_dispatchGlobalMouseup(e, t)
		{
			const i = this.getEvent(e);
			i.native = t, this._dispatchEventAll("globalpointerup", i)
		}
		_dispatchDragMove(e)
		{
			if (0 !== this._dragging.length)
			{
				const t = this.getEvent(e),
					i = t.id;
				this._dragging.forEach((e =>
				{
					e.id === i && this._dispatchEvent("pointermove", e.value, t)
				}))
			}
		}
		_dispatchDragEnd(e, t)
		{
			const i = e.button;
			let s;
			if (0 == i || void 0 === i) s = "click";
			else if (2 == i) s = "rightclick";
			else
			{
				if (1 != i) return;
				s = "middleclick"
			}
			const r = this.getEvent(e),
				a = r.id;
			if (0 !== this._mousedown.length)
			{
				const e = this._getHitTarget(r.originalPoint, r.bbox, t);
				e && this._mousedown.forEach((t =>
				{
					t.id === a && t.value.contains(e) && this._dispatchEvent(s, t.value, r)
				})), this._mousedown.length = 0
			}
			0 !== this._dragging.length && (this._dragging.forEach((e =>
			{
				e.id === a && this._dispatchEvent("pointerup", e.value, r)
			})), this._dragging.length = 0)
		}
		_dispatchDoubleClick(e, t)
		{
			const i = this.getEvent(e),
				s = this._getHitTarget(i.originalPoint, i.bbox, t);
			s && Kt(s, (e => !this._dispatchEvent("dblclick", e, i)))
		}
		_dispatchWheel(e, t)
		{
			const i = this.getEvent(e),
				s = this._getHitTarget(i.originalPoint, i.bbox, t);
			s && Kt(s, (e => !this._dispatchEvent("wheel", e, i)))
		}
		_makeSharedEvent(e, t)
		{
			if (void 0 === this._listeners[e])
			{
				const i = t();
				this._listeners[e] = new R((() =>
				{
					delete this._listeners[e], i.dispose()
				}))
			}
			return this._listeners[e].increment()
		}
		_onPointerEvent(e, t)
		{
			let i = !1,
				s = null;

			function r()
			{
				s = null, i = !1
			}
			return new L([new A((() =>
			{
				null !== s && clearTimeout(s), r()
			})), I(this.view, z(e), (e =>
			{
				i = !0, null !== s && clearTimeout(s), s = window.setTimeout(r, 0)
			})), $t(window, e, ((e, r) =>
			{
				null !== s && (clearTimeout(s), s = null), t(e, r, i), i = !1
			}))])
		}
		_initEvent(e)
		{
			switch (e)
			{
			case "globalpointermove":
			case "pointerover":
			case "pointerout":
				return this._makeSharedEvent("pointermove", (() =>
				{
					const e = (e, t, i) =>
					{
						this._lastPointerMoveEvent = {
							events: e,
							target: t,
							native: i
						}, _(e, (e =>
						{
							this._dispatchGlobalMousemove(e, t, i)
						}))
					};
					return new L([this._onPointerEvent("pointerdown", e), this._onPointerEvent("pointermove", e)])
				}));
			case "globalpointerup":
				return this._makeSharedEvent("pointerup", (() =>
				{
					const e = this._onPointerEvent("pointerup", ((e, t, i) =>
						{
							_(e, (e =>
							{
								this._dispatchGlobalMouseup(e, i)
							})), this._lastPointerMoveEvent = {
								events: e,
								target: t,
								native: i
							}
						})),
						t = this._onPointerEvent("pointercancel", ((e, t, i) =>
						{
							_(e, (e =>
							{
								this._dispatchGlobalMouseup(e, i)
							})), this._lastPointerMoveEvent = {
								events: e,
								target: t,
								native: i
							}
						}));
					return new A((() =>
					{
						e.dispose(), t.dispose()
					}))
				}));
			case "click":
			case "rightclick":
			case "middleclick":
			case "pointerdown":
			case "pointermove":
			case "pointerup":
				return this._makeSharedEvent("pointerdown", (() =>
				{
					const e = this._onPointerEvent("pointerdown", ((e, t) =>
						{
							_(e, (e =>
							{
								this._dispatchMousedown(e, t)
							}))
						})),
						t = this._onPointerEvent("pointermove", (e =>
						{
							_(e, (e =>
							{
								this._dispatchDragMove(e)
							}))
						})),
						i = this._onPointerEvent("pointerup", ((e, t) =>
						{
							_(e, (e =>
							{
								this._dispatchDragEnd(e, t)
							}))
						})),
						s = this._onPointerEvent("pointercancel", ((e, t) =>
						{
							_(e, (e =>
							{
								this._dispatchDragEnd(e, t)
							}))
						}));
					return new A((() =>
					{
						e.dispose(), t.dispose(), i.dispose(), s.dispose()
					}))
				}));
			case "dblclick":
				return this._makeSharedEvent("dblclick", (() => this._onPointerEvent("dblclick", ((e, t) =>
				{
					_(e, (e =>
					{
						this._dispatchDoubleClick(e, t)
					}))
				}))));
			case "wheel":
				return this._makeSharedEvent("wheel", (() => I(this.view, z("wheel"), (e =>
				{
					this._dispatchWheel(e, W(e))
				}),
				{
					passive: !1
				})))
			}
		}
		_addEvent(e, t, i, s)
		{
			let r = this._events[t];
			void 0 === r && (r = this._events[t] = {
				disposer: this._initEvent(t),
				callbacks: [],
				dispatching: !1,
				cleanup: !1
			});
			const a = {
				object: e,
				context: s,
				callback: i,
				disposed: !1
			};
			return r.callbacks.push(a), new A((() =>
			{
				a.disposed = !0, r.dispatching ? r.cleanup = !0 : (x(r.callbacks, a), 0 === r.callbacks.length && (r.disposer.dispose(), delete this._events[t]))
			}))
		}
		getCanvas(e, t)
		{
			this.render(e), t || (t = {});
			let i = this.resolution,
				s = Math.floor(this._calculatedWidth * this.resolution),
				r = Math.floor(this._calculatedHeight * this.resolution);
			if (t.minWidth && t.minWidth > s)
			{
				let e = t.minWidth / s;
				e > i && (i = e * this.resolution)
			}
			if (t.minHeight && t.minHeight > r)
			{
				let e = t.minHeight / r;
				e > i && (i = e * this.resolution)
			}
			if (t.maxWidth && t.maxWidth < s)
			{
				let e = t.maxWidth / s;
				e < i && (i = e * this.resolution)
			}
			if (t.maxHeight && t.maxHeight > r)
			{
				let e = t.maxHeight / r;
				e < i && (i = e * this.resolution)
			}
			t.maintainPixelRatio && (i /= this.resolution);
			const a = [];
			let n = !1;
			const o = document.createElement("canvas");
			i != this.resolution && (n = !0, s = s * i / this.resolution, r = r * i / this.resolution), o.width = s, o.height = r, o.style.position = "fixed", o.style.top = "-10000px", this.view.appendChild(o), a.push(o);
			const l = o.getContext("2d");
			let h = 0,
				c = 0,
				u = !1;
			return _(this.layers, (e =>
			{
				if (e && e.visible && (e.tainted || n))
				{
					u = !0, e.exportableView = e.view, e.exportableContext = e.context, e.view = document.createElement("canvas"), e.view.style.position = "fixed", e.view.style.top = "-10000px", this.view.appendChild(e.view), a.push(e.view);
					let t = 0,
						n = 0;
					e.margin && (t += e.margin.left || 0 + e.margin.right || 0, n += e.margin.top || 0 + e.margin.bottom || 0), e.view.width = s + t, e.view.height = r + n, e.context = e.view.getContext("2d"), e.dirty = !0, e.scale = i
				}
			})), u && (this._omitTainted = !0, this.render(e), this._omitTainted = !1), _(this.layers, (e =>
			{
				if (e && e.visible)
				{
					let t = 0,
						i = 0;
					e.margin && (t = -(e.margin.left || 0) * this.resolution, i = -(e.margin.top || 0) * this.resolution), l.drawImage(e.view, t, i), e.exportableView && (e.view = e.exportableView, e.exportableView = void 0), e.exportableContext && (e.context = e.exportableContext, e.exportableContext = void 0), h < e.view.clientWidth && (h = e.view.clientWidth), c < e.view.clientHeight && (c = e.view.clientHeight), e.scale = void 0
				}
			})), o.style.width = h + "px", o.style.height = c + "px", _(a, (e =>
			{
				e.style.position = "", e.style.top = "", this.view.removeChild(e)
			})), o
		}
	}
	class ji
	{
		constructor()
		{
			Object.defineProperty(this, "view",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "context",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "margin",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value:
				{
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}
			}), Object.defineProperty(this, "_resolution",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 1
			}), Object.defineProperty(this, "_width",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_height",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "imageArray",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this.view = document.createElement("canvas"), this.context = this.view.getContext("2d",
			{
				alpha: !1,
				willReadFrequently: !0
			}), this.context.imageSmoothingEnabled = !1, this.view.style.position = "absolute", this.view.style.top = "0px", this.view.style.left = "0px"
		}
		resize(e, t, i, s, r)
		{
			this._resolution = r, e += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i += this.margin.left + this.margin.right, s += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px", this._width = Math.floor(e * r), this._height = Math.floor(t * r), this.view.width = this._width, this.view.style.width = i + "px", this.view.height = this._height, this.view.style.height = s + "px"
		}
		getImageData(e, t)
		{
			return this.context.getImageData(Math.round((e.x - t.left) / t.width * this._width), Math.round((e.y - t.top) / t.height * this._height), 1, 1)
		}
		getImageArray(e)
		{
			this.imageArray || (this.imageArray = this.context.getImageData(0, 0, this._width, this._height).data);
			const t = this.imageArray,
				i = Math.round(e.x * this._resolution),
				s = 4 * (Math.round(e.y * this._resolution) * this._width + i);
			return [t[s], t[s + 1], t[s + 2], t[s + 3]]
		}
		setMargin(e)
		{
			this.margin.left = 0, this.margin.right = 0, this.margin.top = 0, this.margin.bottom = 0, _(e, (e =>
			{
				e.margin && (this.margin.left = Math.max(this.margin.left, e.margin.left), this.margin.right = Math.max(this.margin.right, e.margin.right), this.margin.top = Math.max(this.margin.top, e.margin.top), this.margin.bottom = Math.max(this.margin.bottom, e.margin.bottom))
			}))
		}
		clear()
		{
			this.context.save(), this.context.fillStyle = "#000", this.context.fillRect(0, 0, this._width, this._height)
		}
	}
	class Mi
	{
		constructor(e, t)
		{
			Object.defineProperty(this, "view",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "context",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "tainted",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), Object.defineProperty(this, "margin",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "order",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "visible",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), Object.defineProperty(this, "width",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "height",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "scale",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "dirty",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !0
			}), Object.defineProperty(this, "exportableView",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "exportableContext",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_width",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_height",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), this.view = e, this.context = t
		}
		resize(e, t, i, s, r)
		{
			null != this.width && (e = this.width, i = this.width), null != this.height && (t = this.height, s = this.height), this.margin ? (e += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i += this.margin.left + this.margin.right, s += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px") : (this.view.style.left = "0px", this.view.style.top = "0px"), this._width = Math.floor(e * r), this._height = Math.floor(t * r), this.view.width = this._width, this.view.style.width = i + "px", this.view.height = this._height, this.view.style.height = s + "px"
		}
		clear()
		{
			this.context.save(), this.context.clearRect(0, 0, this._width, this._height)
		}
	}

	function Ai(e, t)
	{
		null == e ? requestAnimationFrame(t) : setTimeout((() =>
		{
			requestAnimationFrame(t)
		}), 1e3 / e)
	}
	class Bi
	{
		constructor(e, t = {}, i)
		{
			if (Object.defineProperty(this, "dom",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_inner",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_settings",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_isDirty",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "_isDirtyParents",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "_isDirtyAnimation",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "_dirty",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_dirtyParents",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_dirtyBounds",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_dirtyPositions",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), Object.defineProperty(this, "_ticker",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null
				}), Object.defineProperty(this, "_tickers",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_updateTick",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !0
				}), Object.defineProperty(this, "events",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: new ye
				}), Object.defineProperty(this, "animationTime",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null
				}), Object.defineProperty(this, "_animations",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_renderer",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_rootContainer",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "container",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "tooltipContainer",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_tooltipContainerSettings",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_tooltip",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "language",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: Bt.new(this,
					{})
				}), Object.defineProperty(this, "locale",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: At
				}), Object.defineProperty(this, "utc",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "timezone",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "fps",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "numberFormatter",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: Ot.new(this,
					{})
				}), Object.defineProperty(this, "dateFormatter",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: jt.new(this,
					{})
				}), Object.defineProperty(this, "durationFormatter",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: Mt.new(this,
					{})
				}), Object.defineProperty(this, "tabindex",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0
				}), Object.defineProperty(this, "_tabindexes",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_a11yD",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "_focusElementDirty",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "_focusElementContainer",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_focusedSprite",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_isShift",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_keyboardDragPoint",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_tooltipElementContainer",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_readerAlertElement",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_logo",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_tooltipDiv",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "nonce",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "interfaceColors",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "verticalLayout",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: ct.new(this,
					{})
				}), Object.defineProperty(this, "horizontalLayout",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: ht.new(this,
					{})
				}), Object.defineProperty(this, "gridLayout",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: ut.new(this,
					{})
				}), Object.defineProperty(this, "_paused",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "autoResize",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !0
				}), Object.defineProperty(this, "_fontHash",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: ""
				}), Object.defineProperty(this, "_isDisposed",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1
				}), Object.defineProperty(this, "_disposers",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_resizeSensorDisposer",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_tooltips",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "_htmlElementContainer",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, "_htmlEnabledContainers",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: []
				}), Object.defineProperty(this, "entitiesById",
				{
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value:
					{}
				}), !i) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
			let s, r;
			if (this._settings = t, 0 == t.accessible && (this._a11yD = !0), null == t.useSafeResolution && (t.useSafeResolution = !0), t.useSafeResolution && (s = /apple/i.test(navigator.vendor) && "ontouchend" in document ? 1 : void 0), this._renderer = new Ci(s), r = e instanceof HTMLElement ? e : document.getElementById(e), _(je.rootElements, (e =>
				{
					if (e.dom === r) throw new Error("You cannot have multiple Roots on the same DOM node")
				})), this.interfaceColors = kt.new(this,
				{}), null === r) throw new Error("Could not find HTML element with id `" + e + "`");
			this.dom = r;
			let a = document.createElement("div");
			a.style.position = "relative", a.style.width = "100%", a.style.height = "100%", r.appendChild(a);
			const n = t.tooltipContainerBounds;
			n && (this._tooltipContainerSettings = n), this._inner = a, this._updateComputedStyles(), je.rootElements.push(this)
		}
		static new(e, t)
		{
			const i = new Bi(e, t, !0);
			return i._init(), i
		}
		moveDOM(e)
		{
			let t;
			if (t = e instanceof HTMLElement ? e : document.getElementById(e), t)
			{
				for (; this.dom.childNodes.length > 0;) t.appendChild(this.dom.childNodes[0]);
				this.dom = t, this._initResizeSensor(), this.resize()
			}
		}
		_handleLogo()
		{
			if (this._logo)
			{
				const e = this.dom.offsetWidth,
					t = this.dom.offsetHeight;
				e <= 150 || t <= 60 ? this._logo.hide() : this._logo.show()
			}
		}
		_showBranding()
		{
			if (!this._logo)
			{
				const e = this.tooltipContainer.children.push(bt.new(this,
					{
						interactive: !0,
						interactiveChildren: !1,
						position: "absolute",
						setStateOnChildren: !0,
						paddingTop: 9,
						paddingRight: 9,
						paddingBottom: 9,
						paddingLeft: 9,
						scale: .6,
						y: i(100),
						centerY: s,
						tooltipText: "Created using amCharts 5",
						tooltipX: s,
						cursorOverStyle: "pointer",
						background: nt.new(this,
						{
							fill: de(4671320),
							fillOpacity: 0,
							tooltipY: 5
						})
					})),
					t = Tt.new(this,
					{
						pointerOrientation: "horizontal",
						paddingTop: 4,
						paddingRight: 7,
						paddingBottom: 4,
						paddingLeft: 7
					});
				t.label.setAll(
				{
					fontSize: 12
				}), t.get("background").setAll(
				{
					fill: this.interfaceColors.get("background"),
					stroke: this.interfaceColors.get("grid"),
					strokeOpacity: .3
				}), e.set("tooltip", t), e.events.on("click", (() =>
				{
					window.open("https://www.amcharts.com/", "_blank")
				})), e.states.create("hover",
				{}), e.children.push(at.new(this,
				{
					stroke: de(13421772),
					strokeWidth: 3,
					svgPath: "M5 25 L13 25h13.6c3.4 0 6 0 10.3-4.3s5.2-12 8.6-12c3.4 0 4.3 8.6 7.7 8.6M83.4 25H79.8c-3.4 0-6 0-10.3-4.3s-5.2-12-8.6-12-4.3 8.6-7.7 8.6"
				})).states.create("hover",
				{
					stroke: de(3976191)
				}), e.children.push(at.new(this,
				{
					stroke: de(8947848),
					strokeWidth: 3,
					svgPath: "M83.4 25h-31C37 25 39.5 4.4 28.4 4.4S18.9 24.2 4.3 25H0"
				})).states.create("hover",
				{
					stroke: de(4671320)
				}), this._logo = e, this._handleLogo()
			}
		}
		_getRealSize()
		{
			return this.dom.getBoundingClientRect()
		}
		_getCalculatedSize(e)
		{
			return this._settings.calculateSize ? this._settings.calculateSize(e) :
			{
				width: e.width,
				height: e.height
			}
		}
		_init()
		{
			const e = this._settings;
			!1 !== e.accessible && (e.focusable && (this._inner.setAttribute("focusable", "true"), this._inner.setAttribute("tabindex", this.tabindex + "")), e.ariaLabel && this._inner.setAttribute("aria-label", e.ariaLabel), e.role && this._inner.setAttribute("role", e.role));
			const t = this._renderer,
				i = this._getRealSize(),
				r = this._getCalculatedSize(i),
				a = Math.floor(r.width),
				n = Math.floor(r.height),
				o = Math.floor(i.width),
				l = Math.floor(i.height),
				h = bt.new(this,
				{
					visible: !0,
					width: a,
					height: n
				});
			this._rootContainer = h, this._rootContainer._defaultThemes.push(It.new(this));
			const c = h.children.push(bt.new(this,
			{
				visible: !0,
				width: s,
				height: s
			}));
			this.container = c, t.resize(o, l, a, n), this._inner.appendChild(t.view), this._initResizeSensor();
			const u = document.createElement("div");
			if (this._htmlElementContainer = u, u.className = "am5-html-container", u.style.position = "absolute", u.style.pointerEvents = "none", this._tooltipContainerSettings || (u.style.overflow = "hidden"), this._inner.appendChild(u), !0 !== this._a11yD)
			{
				const e = document.createElement("div");
				e.className = "am5-reader-container", e.setAttribute("role", "alert"), e.style.position = "absolute", e.style.width = "1px", e.style.height = "1px", e.style.overflow = "hidden", e.style.clip = "rect(1px, 1px, 1px, 1px)", this._readerAlertElement = e, this._inner.appendChild(this._readerAlertElement);
				const i = document.createElement("div");
				i.className = "am5-focus-container", i.style.position = "absolute", i.style.pointerEvents = "none", i.style.top = "0px", i.style.left = "0px", i.style.overflow = "hidden", i.style.width = a + "px", i.style.height = n + "px", i.setAttribute("role", "graphics-document"), Y(i, !1), this._focusElementContainer = i, this._inner.appendChild(this._focusElementContainer);
				const s = document.createElement("div");
				this._tooltipElementContainer = s, s.className = "am5-tooltip-container", this._inner.appendChild(s), F("keyboardevents") && (this._disposers.push(I(window, "keydown", (e =>
				{
					const t = G(e);
					"Shift" == t ? this._isShift = !0 : "Tab" == t && (this._isShift = e.shiftKey)
				}))), this._disposers.push(I(window, "keyup", (e =>
				{
					"Shift" == G(e) && (this._isShift = !1)
				}))), this._disposers.push(I(i, "click", (() =>
				{
					const e = this._focusedSprite;
					if (e)
					{
						const i = e.get("clickAnnounceText", "");
						"" !== i && this.readerAlert(i);
						const s = t.getEvent(new MouseEvent("click"));
						e.events.dispatch("click",
						{
							type: "click",
							originalEvent: s.event,
							point: s.point,
							simulated: !0,
							target: e
						})
					}
				}))), this._disposers.push(I(i, "keydown", (e =>
				{
					const i = this._focusedSprite;
					if (i)
					{
						"Escape" == e.key && (function ()
						{
							if (document.activeElement && document.activeElement != document.body)
								if (document.activeElement.blur) document.activeElement.blur();
								else
								{
									let e = document.createElement("button");
									e.style.position = "fixed", e.style.top = "0px", e.style.left = "-10000px", document.body.appendChild(e), e.focus(), e.blur(), document.body.removeChild(e)
								}
						}(), this._focusedSprite = void 0);
						let s = 0,
							r = 0;
						const a = G(e);
						switch (a)
						{
						case "Enter":
						case " ":
							const n = i.get("clickAnnounceText", "");
							if ("" !== n && this.readerAlert(n), " " == a && "checkbox" != i.get("role")) return;
							e.preventDefault();
							const o = t.getEvent(new MouseEvent("mouse"));
							return void i.events.dispatch("click",
							{
								type: "click",
								originalEvent: o.event,
								point: o.point,
								simulated: !0,
								target: i
							});
						case "ArrowLeft":
							s = -6;
							break;
						case "ArrowRight":
							s = 6;
							break;
						case "ArrowUp":
							r = -6;
							break;
						case "ArrowDown":
							r = 6;
							break;
						default:
							return
						}
						if (0 != s || 0 != r)
						{
							if (e.preventDefault(), !i.isDragging())
							{
								this._keyboardDragPoint = {
									x: 0,
									y: 0
								};
								const e = t.getEvent(new MouseEvent("mousedown",
								{
									clientX: 0,
									clientY: 0
								}));
								e.point = {
									x: 0,
									y: 0
								}, i.events.isEnabled("pointerdown") && i.events.dispatch("pointerdown",
								{
									type: "pointerdown",
									originalEvent: e.event,
									point: e.point,
									simulated: !0,
									target: i
								})
							}
							const a = this._keyboardDragPoint;
							a.x += s, a.y += r;
							const n = t.getEvent(new MouseEvent("mousemove",
							{
								clientX: a.x,
								clientY: a.y
							}), !1);
							i.events.isEnabled("globalpointermove") && i.events.dispatch("globalpointermove",
							{
								type: "globalpointermove",
								originalEvent: n.event,
								point: n.point,
								simulated: !0,
								target: i
							})
						}
					}
				}))), this._disposers.push(I(i, "keyup", (e =>
				{
					if (this._focusedSprite)
					{
						const s = this._focusedSprite,
							r = G(e);
						switch (r)
						{
						case "ArrowLeft":
						case "ArrowRight":
						case "ArrowUp":
						case "ArrowDown":
							if (s.isDragging())
							{
								const e = this._keyboardDragPoint,
									i = t.getEvent(new MouseEvent("mouseup",
									{
										clientX: e.x,
										clientY: e.y
									}));
								return s.events.isEnabled("globalpointerup") && s.events.dispatch("globalpointerup",
								{
									type: "globalpointerup",
									originalEvent: i.event,
									point: i.point,
									simulated: !0,
									target: s
								}), void(this._keyboardDragPoint = void 0)
							}
							if (s.get("focusableGroup"))
							{
								const e = s.get("focusableGroup"),
									t = this._tabindexes.filter((t => !(t.get("focusableGroup") != e || !1 === t.getPrivate("focusable") || !t.isVisibleDeep())));
								let a = t.indexOf(s);
								const n = t.length - 1;
								a += "ArrowRight" == r || "ArrowDown" == r ? 1 : -1, a < 0 ? a = n : a > n && (a = 0), (i = t[a].getPrivate("focusElement").dom) && i.focus()
							}
							break;
						case "Tab":
							const e = s.get("focusableGroup");
							if (e && this._isShift) return void this._focusNext(s.getPrivate("focusElement").dom, -1, e)
						}
					}
					var i
				}))))
			}
			this._startTicker(), this.setThemes([]), this._addTooltip(), this._hasLicense() || this._showBranding()
		}
		_initResizeSensor()
		{
			this._resizeSensorDisposer && this._resizeSensorDisposer.dispose(), this._resizeSensorDisposer = new xt(this.dom, (() =>
			{
				this.autoResize && this.resize()
			})), this._disposers.push(this._resizeSensorDisposer)
		}
		resize()
		{
			const e = this._getRealSize(),
				t = this._getCalculatedSize(e),
				i = Math.floor(t.width),
				s = Math.floor(t.height);
			if (i > 0 && s > 0)
			{
				const t = Math.floor(e.width),
					r = Math.floor(e.height),
					a = this._htmlElementContainer;
				if (a.style.width = i + "px", a.style.height = s + "px", !0 !== this._a11yD)
				{
					const e = this._focusElementContainer;
					e.style.width = i + "px", e.style.height = s + "px"
				}
				this._renderer.resize(t, r, i, s);
				const n = this._rootContainer;
				n.setPrivate("width", i), n.setPrivate("height", s), this._render(), this._handleLogo()
			}
		}
		_render()
		{
			this._renderer.render(this._rootContainer._display), this._focusElementDirty && (this._updateCurrentFocus(), this._focusElementDirty = !1)
		}
		_runTickers(e)
		{
			_(this._tickers, (t =>
			{
				t(e)
			}))
		}
		_runAnimations(e)
		{
			let t = 0;
			return S(this._animations, (i =>
			{
				const s = i._runAnimation(e);
				return s !== ve.Stopped && (s !== ve.Playing || (++t, !0))
			})), this._isDirtyAnimation = !1, 0 === t
		}
		_runDirties()
		{
			let e = {};
			for (; this._isDirtyParents;) this._isDirtyParents = !1, E(this._dirtyParents).forEach((t =>
			{
				const i = this._dirtyParents[t];
				delete this._dirtyParents[t], i.isDisposed() || (e[i.uid] = i, i._prepareChildren())
			}));
			E(e).forEach((t =>
			{
				e[t]._updateChildren()
			}));
			const t = [];
			E(this._dirty).forEach((e =>
			{
				const i = this._dirty[e];
				i.isDisposed() ? delete this._dirty[i.uid] : (t.push(i), i._beforeChanged())
			})), t.forEach((e =>
			{
				e._changed(), delete this._dirty[e.uid], e._clearDirty()
			})), this._isDirty = !1;
			const i = {},
				s = [];
			E(this._dirtyBounds).forEach((e =>
			{
				const t = this._dirtyBounds[e];
				delete this._dirtyBounds[e], t.isDisposed() || (i[t.uid] = t.depth(), s.push(t))
			})), this._positionHTMLElements(), s.sort(((e, t) => Me(i[t.uid], i[e.uid]))), s.forEach((e =>
			{
				e._updateBounds()
			}));
			const r = this._dirtyPositions;
			E(r).forEach((e =>
			{
				const t = r[e];
				delete r[e], t.isDisposed() || t._updatePosition()
			})), t.forEach((e =>
			{
				e._afterChanged()
			}))
		}
		_renderFrame(e)
		{
			if (this._updateTick)
			{
				this.events.isEnabled("framestarted") && this.events.dispatch("framestarted",
				{
					type: "framestarted",
					target: this,
					timestamp: e
				}), this._checkComputedStyles(), this._runTickers(e);
				const t = this._runAnimations(e);
				return this._runDirties(), this._render(), this._renderer.resetImageArray(), this._positionHTMLElements(), this.events.isEnabled("frameended") && this.events.dispatch("frameended",
				{
					type: "frameended",
					target: this,
					timestamp: e
				}), 0 === this._tickers.length && t && !this._isDirtyAnimation && !this._isDirty
			}
			return !0
		}
		_runTicker(e, t)
		{
			this.isDisposed() || (this.animationTime = e, this._renderFrame(e) ? (this._ticker = null, this.animationTime = null) : this._paused || (t ? this._ticker : Ai(this.fps, this._ticker)))
		}
		_runTickerNow(e = 1e4)
		{
			if (!this.isDisposed())
			{
				const t = performance.now() + e;
				for (;;)
				{
					const e = performance.now();
					if (e >= t)
					{
						this.animationTime = null;
						break
					}
					if (this.animationTime = e, this._renderFrame(e))
					{
						this.animationTime = null;
						break
					}
				}
			}
		}
		_startTicker()
		{
			null === this._ticker && (this.animationTime = null, this._ticker = e =>
			{
				this._runTicker(e)
			}, Ai(this.fps, this._ticker))
		}
		get updateTick()
		{
			return this._updateTick
		}
		set updateTick(e)
		{
			this._updateTick = e, e && this._startTicker()
		}
		_addDirtyEntity(e)
		{
			this._isDirty = !0, void 0 === this._dirty[e.uid] && (this._dirty[e.uid] = e), this._startTicker()
		}
		_addDirtyParent(e)
		{
			this._isDirty = !0, this._isDirtyParents = !0, void 0 === this._dirtyParents[e.uid] && (this._dirtyParents[e.uid] = e), this._startTicker()
		}
		_addDirtyBounds(e)
		{
			this._isDirty = !0, void 0 === this._dirtyBounds[e.uid] && (this._dirtyBounds[e.uid] = e), this._startTicker()
		}
		_addDirtyPosition(e)
		{
			this._isDirty = !0, void 0 === this._dirtyPositions[e.uid] && (this._dirtyPositions[e.uid] = e), this._startTicker()
		}
		_addAnimation(e)
		{
			this._isDirtyAnimation = !0, -1 === this._animations.indexOf(e) && this._animations.push(e), this._startTicker()
		}
		_markDirty()
		{
			this._isDirty = !0
		}
		_markDirtyRedraw()
		{
			this.events.once("frameended", (() =>
			{
				this._isDirty = !0, this._startTicker()
			}))
		}
		eachFrame(e)
		{
			return this._tickers.push(e), this._startTicker(), new A((() =>
			{
				x(this._tickers, e)
			}))
		}
		markDirtyGlobal(e)
		{
			e || (e = this.container), e.walkChildren((e =>
			{
				e instanceof bt && this.markDirtyGlobal(e), e.markDirty(), e.markDirtyBounds()
			}))
		}
		width()
		{
			return Math.floor(this._getCalculatedSize(this._getRealSize()).width)
		}
		height()
		{
			return Math.floor(this._getCalculatedSize(this._getRealSize()).height)
		}
		dispose()
		{
			var e;
			this._isDisposed || (this._isDisposed = !0, this._rootContainer.dispose(), this._renderer.dispose(), this.horizontalLayout.dispose(), this.verticalLayout.dispose(), this.interfaceColors.dispose(), _(this._disposers, (e =>
			{
				e.dispose()
			})), this._inner && (e = this._inner).parentNode && e.parentNode.removeChild(e), w(je.rootElements, this))
		}
		isDisposed()
		{
			return this._isDisposed
		}
		readerAlert(e)
		{
			if (!0 !== this._a11yD)
			{
				const t = this._readerAlertElement;
				e = Z(e), t.innerHTML == e && (t.innerHTML = ""), t.innerHTML = e
			}
		}
		setThemes(e)
		{
			this._rootContainer.set("themes", e);
			const t = this.tooltipContainer;
			t && t._applyThemes();
			const i = this.interfaceColors;
			i && i._applyThemes()
		}
		_addTooltip()
		{
			if (!this.tooltipContainer)
			{
				const e = this._tooltipContainerSettings,
					t = this._rootContainer.children.push(bt.new(this,
					{
						position: "absolute",
						isMeasured: !1,
						width: s,
						height: s,
						layer: e ? 35 : 30,
						layerMargin: e || void 0
					}));
				this.tooltipContainer = t;
				const i = Tt.new(this,
				{});
				this.container.set("tooltip", i), i.hide(0), this._tooltip = i
			}
		}
		_registerTabindexOrder(e)
		{
			1 != this._a11yD && (e.get("focusable") ? k(this._tabindexes, e) : w(this._tabindexes, e), this._invalidateTabindexes())
		}
		_unregisterTabindexOrder(e)
		{
			1 != this._a11yD && (w(this._tabindexes, e), this._invalidateTabindexes())
		}
		_invalidateTabindexes()
		{
			if (1 == this._a11yD) return;
			this._tabindexes.sort(((e, t) =>
			{
				const i = e.get("tabindexOrder", 0),
					s = t.get("tabindexOrder", 0);
				return i == s ? 0 : i > s ? 1 : -1
			}));
			const e = [];
			_(this._tabindexes, ((t, i) =>
			{
				t.getPrivate("focusElement") ? this._moveFocusElement(i, t) : this._makeFocusElement(i, t);
				const s = t.get("focusableGroup");
				s && !1 !== t.getPrivate("focusable") && (-1 !== e.indexOf(s) ? t.getPrivate("focusElement").dom.setAttribute("tabindex", "-1") : e.push(s))
			}))
		}
		_updateCurrentFocus()
		{
			1 != this._a11yD && this._focusedSprite && (this._decorateFocusElement(this._focusedSprite), this._positionFocusElement(this._focusedSprite))
		}
		_decorateFocusElement(e, t)
		{
			if (1 == this._a11yD) return;
			if (t || (t = e.getPrivate("focusElement").dom), !t) return;
			const i = e.get("role");
			i ? t.setAttribute("role", i) : t.removeAttribute("role");
			const s = e.get("ariaLabel");
			if (s)
			{
				const i = pt(e, s);
				t.setAttribute("aria-label", i)
			}
			else t.removeAttribute("aria-label");
			const r = e.get("ariaLive");
			r ? t.setAttribute("aria-live", r) : t.removeAttribute("aria-live");
			const a = e.get("ariaChecked");
			null != a && i && -1 !== ["checkbox", "option", "radio", "menuitemcheckbox", "menuitemradio", "treeitem"].indexOf(i) ? t.setAttribute("aria-checked", a ? "true" : "false") : t.removeAttribute("aria-checked");
			const n = e.get("ariaCurrent");
			null != n ? t.setAttribute("aria-current", n) : t.removeAttribute("aria-current");
			const o = e.get("ariaSelected");
			null != o && i && -1 !== ["gridcell", "option", "row", "tab", "columnheader", "rowheader", "treeitem"].indexOf(i) ? t.setAttribute("aria-selected", o ? "true" : "false") : t.removeAttribute("aria-selected"), e.get("ariaHidden") ? t.setAttribute("aria-hidden", "true") : t.removeAttribute("aria-hidden");
			const l = e.get("ariaOrientation");
			l ? t.setAttribute("aria-orientation", l) : t.removeAttribute("aria-orientation");
			const h = e.get("ariaValueNow");
			h ? t.setAttribute("aria-valuenow", h) : t.removeAttribute("aria-valuenow");
			const c = e.get("ariaValueMin");
			c ? t.setAttribute("aria-valuemin", c) : t.removeAttribute("aria-valuemin");
			const u = e.get("ariaValueMax");
			u ? t.setAttribute("aria-valuemax", u) : t.removeAttribute("aria-valuemax");
			const d = e.get("ariaValueText");
			d ? t.setAttribute("aria-valuetext", d) : t.removeAttribute("aria-valuetext");
			const p = e.get("ariaControls");
			p ? t.setAttribute("aria-controls", p) : t.removeAttribute("aria-controls"), e.get("visible") && 0 !== e.get("opacity") && "tooltip" != e.get("role") && !e.isHidden() && !1 !== e.getPrivate("focusable") && (e.height() || e.width()) ? ("-1" != t.getAttribute("tabindex") && t.setAttribute("tabindex", "" + this.tabindex), t.removeAttribute("aria-hidden")) : (t.removeAttribute("tabindex"), t.setAttribute("aria-hidden", "true"))
		}
		_makeFocusElement(e, t)
		{
			if (t.getPrivate("focusElement") || 1 == this._a11yD) return;
			const i = document.createElement("div");
			"tooltip" != t.get("role") && (i.tabIndex = this.tabindex), i.style.position = "absolute", Y(i, !1);
			const s = [];
			t.setPrivate("focusElement",
			{
				dom: i,
				disposers: s
			}), this._decorateFocusElement(t), s.push(I(i, "focus", (e =>
			{
				this._handleFocus(e)
			}))), s.push(I(i, "blur", (e =>
			{
				this._handleBlur(e)
			}))), this._moveFocusElement(e, t)
		}
		_removeFocusElement(e)
		{
			if (1 == this._a11yD) return;
			w(this._tabindexes, e);
			const t = e.getPrivate("focusElement");
			t && (this._focusElementContainer.removeChild(t.dom), _(t.disposers, (e =>
			{
				e.dispose()
			})))
		}
		_hideFocusElement(e)
		{
			1 != this._a11yD && (e.getPrivate("focusElement").dom.style.display = "none")
		}
		_moveFocusElement(e, t)
		{
			if (1 == this._a11yD) return;
			const i = this._focusElementContainer,
				s = t.getPrivate("focusElement").dom;
			if (s === this._focusElementContainer.children[e]) return;
			const r = this._focusElementContainer.children[e + 1];
			r ? i.insertBefore(s, r) : i.append(s)
		}
		_positionFocusElement(e)
		{
			if (1 == this._a11yD || null == e) return;
			const t = e.globalBounds();
			let i = t.right == t.left ? e.width() : t.right - t.left,
				s = t.top == t.bottom ? e.height() : t.bottom - t.top;
			const r = void 0 !== this._settings.focusPadding ? this._settings.focusPadding : 2;
			let a = t.left - r,
				n = t.top - r;
			i < 0 && (a += i, i = Math.abs(i)), s < 0 && (n += s, s = Math.abs(s));
			const o = e.getPrivate("focusElement").dom;
			o.style.top = n + "px", o.style.left = a + "px", o.style.width = i + 2 * r + "px", o.style.height = s + 2 * r + "px"
		}
		_getSpriteByFocusElement(e)
		{
			let t;
			return y(this._tabindexes, ((i, s) => i.getPrivate("focusElement").dom !== e || (t = i, !1))), t
		}
		_handleFocus(e)
		{
			if (1 == this._a11yD) return;
			const t = this._getSpriteByFocusElement(e.target);
			t && (t.isVisibleDeep() ? (this._positionFocusElement(t), this._focusedSprite = t, t.events.isEnabled("focus") && t.events.dispatch("focus",
			{
				type: "focus",
				originalEvent: e,
				target: t
			})) : this._focusNext(e.target, this._isShift ? -1 : 1))
		}
		_focusNext(e, t, i)
		{
			if (1 == this._a11yD) return;
			const s = Array.from(document.querySelectorAll(["a[href]", "area[href]", "button:not([disabled])", "details", "input:not([disabled])", "iframe:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", '[contentEditable=""]', '[contentEditable="true"]', '[contentEditable="TRUE"]', '[tabindex]:not([tabindex^="-"])'].join(",")));
			let r = s.indexOf(e) + t;
			r < 0 ? r = s.length - 1 : r >= s.length && (r = 0);
			const a = s[r];
			if (i && -1 == t)
			{
				const e = this._getSpriteByFocusElement(a);
				if (e && e.get("focusableGroup") == i) return void this._focusNext(a, t)
			}
			a.focus()
		}
		_handleBlur(e)
		{
			if (1 == this._a11yD) return;
			const t = this._focusedSprite;
			t && !t.isDisposed() && t.events.isEnabled("blur") && t.events.dispatch("blur",
			{
				type: "blur",
				originalEvent: e,
				target: t
			}), this._focusedSprite = void 0
		}
		updateTooltip(e)
		{
			if (1 == this._a11yD) return;
			const t = Z(e._getText());
			let i = e.getPrivate("tooltipElement");
			"tooltip" == e.get("role") && "" != t ? (i || (i = this._makeTooltipElement(e)), i.innerHTML != t && (i.innerHTML = t), i.setAttribute("aria-hidden", e.isVisibleDeep() ? "false" : "true")) : i && (i.remove(), e.removePrivate("tooltipElement"))
		}
		_makeTooltipElement(e)
		{
			const t = this._tooltipElementContainer,
				i = document.createElement("div");
			return i.style.position = "absolute", i.style.width = "1px", i.style.height = "1px", i.style.overflow = "hidden", i.style.clip = "rect(1px, 1px, 1px, 1px)", Y(i, !1), this._decorateFocusElement(e, i), t.append(i), e.setPrivate("tooltipElement", i), i
		}
		_removeTooltipElement(e)
		{
			if (1 == this._a11yD) return;
			const t = e.getPrivate("tooltipElement");
			if (t)
			{
				const e = t.parentElement;
				e && e.removeChild(t)
			}
		}
		_invalidateAccessibility(e)
		{
			if (1 == this._a11yD) return;
			this._focusElementDirty = !0;
			const t = e.getPrivate("focusElement");
			e.get("focusable") ? t && (this._decorateFocusElement(e), this._positionFocusElement(e)) : t && this._removeFocusElement(e)
		}
		focused(e)
		{
			return this._focusedSprite === e
		}
		documentPointToRoot(e)
		{
			const t = this._getRealSize(),
				i = this._getCalculatedSize(t),
				s = i.width / t.width,
				r = i.height / t.height;
			return {
				x: (e.x - t.left) * s,
				y: (e.y - t.top) * r
			}
		}
		rootPointToDocument(e)
		{
			const t = this._getRealSize(),
				i = this._getCalculatedSize(t),
				s = i.width / t.width,
				r = i.height / t.height;
			return {
				x: e.x / s + t.left,
				y: e.y / r + t.top
			}
		}
		addDisposer(e)
		{
			return this._disposers.push(e), e
		}
		_updateComputedStyles()
		{
			const e = window.getComputedStyle(this.dom);
			let t = "";
			C(e, ((e, i) =>
			{
				u(e) && e.match(/^font/) && (t += i)
			}));
			const i = t != this._fontHash;
			return i && (this._fontHash = t), i
		}
		_checkComputedStyles()
		{
			this._updateComputedStyles() && this._invalidateLabelBounds(this.container)
		}
		_invalidateLabelBounds(e)
		{
			e instanceof bt ? e.children.each((e =>
			{
				this._invalidateLabelBounds(e)
			})) : e instanceof _t && e.markDirtyBounds()
		}
		_hasLicense()
		{
			for (let e = 0; e < je.licenses.length; e++)
				if (je.licenses[e].match(/^AM5C.{5,}/i)) return !0;
			return !1
		}
		_licenseApplied()
		{
			this._logo && this._logo.set("forceHidden", !0)
		}
		get debugGhostView()
		{
			return this._renderer.debugGhostView
		}
		set debugGhostView(e)
		{
			this._renderer.debugGhostView = e
		}
		set tapToActivate(e)
		{
			this._renderer.tapToActivate = e
		}
		get tapToActivate()
		{
			return this._renderer.tapToActivate
		}
		set tapToActivateTimeout(e)
		{
			this._renderer.tapToActivateTimeout = e
		}
		get tapToActivateTimeout()
		{
			return this._renderer.tapToActivateTimeout
		}
		_makeHTMLElement(e)
		{
			const t = this._htmlElementContainer,
				i = document.createElement("div");
			e.setPrivate("htmlElement", i);
			let s, r, a = !1;
			return e._walkParents((e =>
			{
				if (e.get("verticalScrollbar")) return a = !0, s = e, !1
			})), a && (r = document.createElement("div"), e.setPrivate("htmlElementWrapper", r), e.setPrivate("wrapperContainer", s), r.style.position = "absolute", r.style.overflow = "hidden", r.style.boxSizing = "border-box", r.style.top = "0px", r.style.left = "0px", r.style.width = "100%", r.style.height = "100%", s.events.on("boundschanged", (() =>
			{
				this._positionHTMLElement(e)
			}))), i.style.position = "absolute", i.style.overflow = "auto", i.style.boxSizing = "border-box", Y(i, e.get("interactive", !1)), e.events.isEnabled("click") && (Y(i, !0), this._disposers.push(I(i, "click", (t =>
			{
				const i = this._renderer.getEvent(t);
				e.events.dispatch("click",
				{
					type: "click",
					originalEvent: i.event,
					point: i.point,
					simulated: !1,
					target: e
				})
			})))), this._positionHTMLElement(e), a ? (r.append(i), t.append(r)) : t.append(i), k(this._htmlEnabledContainers, e), i
		}
		_positionHTMLElements()
		{
			_(this._htmlEnabledContainers, (e =>
			{
				this._positionHTMLElement(e)
			}))
		}
		_positionHTMLElement(e)
		{
			const i = e.getPrivate("htmlElementWrapper");
			if (i)
			{
				const t = e.getPrivate("wrapperContainer");
				if (t)
				{
					const e = t.globalBounds();
					i.style.clipPath = "rect(" + e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px)"
				}
			}
			const s = e.getPrivate("htmlElement");
			if (s)
			{
				_(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "minWidth", "minHeight", "maxWidth", "maxHeight"], (t =>
				{
					const i = e.get(t);
					s.style[t] = i ? i + "px" : ""
				})), _(["fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration"], (t =>
				{
					const i = e.get(t);
					i ? "fontSize" != t || u(i) ? s.style[t] = i + "" : s.style[t] = i + "px" : s.style[t] = ""
				}));
				const i = e.compositeScale() || 1,
					r = e.compositeRotation() || 0;
				s.style.transform = "", s.style.transformOrigin = "";
				const n = e.compositeOpacity();
				setTimeout((() =>
				{
					s.style.opacity = n + ""
				}), 10);
				const o = e.isVisibleDeep();
				o && (s.style.display = "block");
				let l = {
					x: e.x() + e.get("dx", 0),
					y: e.y() + e.get("dy", 0)
				};
				e.parent && (l = e.parent.toGlobal(l)), s.style.top = l.y + "px", s.style.left = l.x + "px";
				const h = e.get("width"),
					c = e.get("height");
				let d = 0,
					p = 0;
				if (h && (d = e.width()), c && (p = e.height()), !h || !c)
				{
					s.style.position = "fixed", s.style.width = "", s.style.height = "";
					const r = s.getBoundingClientRect();
					s.style.position = "absolute", h || (d = r.width), c || (p = r.height);
					let a = d / i,
						n = p / i,
						o = e.get("centerX", 0),
						l = e.get("centerY", 0),
						u = 0,
						g = 0,
						m = 0,
						f = 0;
					o instanceof t ? (u = -o.value * a, g = (1 - o.value) * a) : (u = -o, g = a - o), l instanceof t ? (m = -l.value * n, f = (1 - l.value) * n) : (m = -l, f = n - l), e._localBounds = {
						left: u,
						right: g,
						top: m,
						bottom: f
					};
					let b = e._adjustedLocalBounds,
						_ = e._display.getAdjustedBounds(e._localBounds);
					e._adjustedLocalBounds = _, b.left === _.left && b.right === _.right && b.top === _.top && b.bottom === _.bottom || e.markDirtyBounds()
				}
				d > 0 && (s.style.minWidth = d + "px"), p > 0 && (s.style.minHeight = p + "px"), o && 0 != n || (s.style.display = "none");
				const g = e.get("centerX", 0),
					m = a(g) ? g.percent + "%" : g + "px",
					f = e.get("centerY", 0),
					b = a(f) ? f.percent + "%" : f + "px";
				(g || f) && (s.style.transform = "translate(-" + m + ", -" + b + ")" + s.style.transform), 1 != i && (s.style.transform += "scale(" + i + ")"), 0 != r && (s.style.transform += " rotate(" + r + "deg)"), "" != s.style.transform && (s.style.transformOrigin = m + " " + b)
			}
		}
		_setHTMLContent(e, t)
		{
			let i = e.getPrivate("htmlElement");
			i || (i = this._makeHTMLElement(e)), i.innerHTML != t && (i.innerHTML = t)
		}
		_removeHTMLContent(e)
		{
			const t = e.getPrivate("htmlElementWrapper"),
				i = e.getPrivate("htmlElement");
			t ? (this._htmlElementContainer.removeChild(t), e.removePrivate("htmlElement"), e.removePrivate("htmlElementWrapper"), e.removePrivate("wrapperContainer")) : i && (this._htmlElementContainer.removeChild(i), e.removePrivate("htmlElement"), e.removePrivate("wrapperContainer")), w(this._htmlEnabledContainers, e)
		}
	}
	class Li extends xe
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "processor",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			})
		}
		incrementRef()
		{}
		decrementRef()
		{}
		_onPush(e)
		{
			this.processor && this.processor.processRow(e), super._onPush(e)
		}
		_onInsertIndex(e, t)
		{
			this.processor && this.processor.processRow(t), super._onInsertIndex(e, t)
		}
		_onSetIndex(e, t, i)
		{
			this.processor && this.processor.processRow(i), super._onSetIndex(e, t, i)
		}
	}
	class Ri extends Ie
	{
		constructor(e, t, i)
		{
			super(i), Object.defineProperty(this, "component",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "dataContext",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "bullets",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "open",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "close",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), this.dataContext = t, this.component = e, this._settings.visible = !0, this._checkDirty()
		}
		markDirty()
		{
			this.component.markDirtyValues(this)
		}
		_startAnimation()
		{
			this.component._root._addAnimation(this)
		}
		_animationTime()
		{
			return this.component._root.animationTime
		}
		_dispose()
		{
			this.component && this.component.disposeDataItem(this), super._dispose()
		}
		show(e)
		{
			this.setRaw("visible", !0), this.component && this.component.showDataItem(this, e)
		}
		hide(e)
		{
			this.setRaw("visible", !1), this.component && this.component.hideDataItem(this, e)
		}
		isHidden()
		{
			return !this.get("visible")
		}
	}
	class Ii extends bt
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_data",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: new Li
			}), Object.defineProperty(this, "_dataItems",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			}), Object.defineProperty(this, "_mainDataItems",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this._dataItems
			}), Object.defineProperty(this, "valueFields",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			}), Object.defineProperty(this, "fields",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: ["id"]
			}), Object.defineProperty(this, "_valueFields",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_valueFieldsF",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_fields",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_fieldsF",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_valuesDirty",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_dataChanged",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_dataGrouped",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "inited",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			})
		}
		set data(e)
		{
			e.incrementRef(), this._data.decrementRef(), this._data = e
		}
		get data()
		{
			return this._data
		}
		_dispose()
		{
			super._dispose(), this._data.decrementRef()
		}
		_onDataClear()
		{}
		_afterNew()
		{
			super._afterNew(), this._data.incrementRef(), this._updateFields(), this._disposers.push(this.data.events.onAll((e =>
			{
				const t = this._mainDataItems;
				if (this.markDirtyValues(), this._markDirtyGroup(), this._dataChanged = !0, "clear" === e.type) _(t, (e =>
				{
					e.dispose()
				})), t.length = 0, this._onDataClear();
				else if ("push" === e.type)
				{
					const i = new Ri(this, e.newValue, this._makeDataItem(e.newValue));
					t.push(i), this.processDataItem(i)
				}
				else if ("setIndex" === e.type)
				{
					const i = t[e.index],
						s = this._makeDataItem(e.newValue);
					i.bullets && 0 == i.bullets.length && (i.bullets = void 0), E(s).forEach((e =>
					{
						i.animate(
						{
							key: e,
							to: s[e],
							duration: this.get("interpolationDuration", 0),
							easing: this.get("interpolationEasing")
						})
					})), i.dataContext = e.newValue
				}
				else if ("insertIndex" === e.type)
				{
					const i = new Ri(this, e.newValue, this._makeDataItem(e.newValue));
					t.splice(e.index, 0, i), this.processDataItem(i)
				}
				else if ("removeIndex" === e.type) t[e.index].dispose(), t.splice(e.index, 1);
				else
				{
					if ("moveIndex" !== e.type) throw new Error("Unknown IStreamEvent type");
					{
						const i = t[e.oldIndex];
						t.splice(e.oldIndex, 1), t.splice(e.newIndex, 0, i)
					}
				}
				this._afterDataChange()
			})))
		}
		_updateFields()
		{
			this.valueFields && (this._valueFields = [], this._valueFieldsF = {}, _(this.valueFields, (e =>
			{
				this.get(e + "Field") && (this._valueFields.push(e), this._valueFieldsF[e] = {
					fieldKey: e + "Field",
					workingKey: e + "Working"
				})
			}))), this.fields && (this._fields = [], this._fieldsF = {}, _(this.fields, (e =>
			{
				this.get(e + "Field") && (this._fields.push(e), this._fieldsF[e] = e + "Field")
			})))
		}
		get dataItems()
		{
			return this._dataItems
		}
		processDataItem(e)
		{}
		_makeDataItem(e)
		{
			const t = {};
			return this._valueFields && _(this._valueFields, (i =>
			{
				const s = this.get(this._valueFieldsF[i].fieldKey);
				t[i] = e[s], t[this._valueFieldsF[i].workingKey] = t[i]
			})), this._fields && _(this._fields, (i =>
			{
				const s = this.get(this._fieldsF[i]);
				t[i] = e[s]
			})), t
		}
		makeDataItem(e, t)
		{
			let i = new Ri(this, t, e);
			return this.processDataItem(i), i
		}
		pushDataItem(e, t)
		{
			const i = this.makeDataItem(e, t);
			return this._mainDataItems.push(i), i
		}
		disposeDataItem(e)
		{}
		showDataItem(t, i)
		{
			return e(this, void 0, void 0, (function* ()
			{
				t.set("visible", !0)
			}))
		}
		hideDataItem(t, i)
		{
			return e(this, void 0, void 0, (function* ()
			{
				t.set("visible", !1)
			}))
		}
		_clearDirty()
		{
			super._clearDirty(), this._valuesDirty = !1
		}
		_afterDataChange()
		{}
		_afterChanged()
		{
			if (super._afterChanged(), this._dataChanged)
			{
				const e = "datavalidated";
				this.events.isEnabled(e) && this.events.dispatch(e,
				{
					type: e,
					target: this
				}), this._dataChanged = !1
			}
			this.inited = !0
		}
		markDirtyValues(e)
		{
			this.markDirty(), this._valuesDirty = !0
		}
		_markDirtyGroup()
		{
			this._dataGrouped = !1
		}
		markDirtySize()
		{
			this._sizeDirty = !0, this.markDirty()
		}
	}
	Object.defineProperty(Ii, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Component"
	}), Object.defineProperty(Ii, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: bt.classNames.concat([Ii.className])
	});
	class Hi extends Ii
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_aggregatesCalculated",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_selectionAggregatesCalculated",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_dataProcessed",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			}), Object.defineProperty(this, "_psi",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "_pei",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "chart",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0
			}), Object.defineProperty(this, "bullets",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: new xe
			}), Object.defineProperty(this, "bulletsContainer",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: bt.new(this._root,
				{
					width: s,
					height: s,
					position: "absolute"
				})
			})
		}
		_afterNew()
		{
			this.valueFields.push("value", "customValue"), super._afterNew(), this.setPrivate("customData",
			{}), this._disposers.push(this.bullets.events.onAll((e =>
			{
				if ("clear" === e.type) this._handleBullets(this.dataItems);
				else if ("push" === e.type) this._handleBullets(this.dataItems);
				else if ("setIndex" === e.type) this._handleBullets(this.dataItems);
				else if ("insertIndex" === e.type) this._handleBullets(this.dataItems);
				else if ("removeIndex" === e.type) this._handleBullets(this.dataItems);
				else
				{
					if ("moveIndex" !== e.type) throw new Error("Unknown IListEvent type");
					this._handleBullets(this.dataItems)
				}
			})))
		}
		_dispose()
		{
			this.bulletsContainer.dispose(), super._dispose()
		}
		startIndex()
		{
			let e = this.dataItems.length;
			return Math.min(this.getPrivate("startIndex", 0), e)
		}
		endIndex()
		{
			let e = this.dataItems.length;
			return Math.min(this.getPrivate("endIndex", e), e)
		}
		_handleBullets(e)
		{
			_(e, (e =>
			{
				const t = e.bullets;
				t && (_(t, (e =>
				{
					e.dispose()
				})), e.bullets = void 0)
			})), this.markDirtyValues()
		}
		getDataItemById(e)
		{
			return O(this.dataItems, (t => t.get("id") == e))
		}
		_makeBullets(e)
		{
			this._shouldMakeBullet(e) && (e.bullets = [], this.bullets.each((t =>
			{
				this._makeBullet(e, t)
			})))
		}
		_shouldMakeBullet(e)
		{
			return !0
		}
		_makeBullet(e, t, i)
		{
			const s = t(this._root, this, e);
			return s && (s._index = i, this._makeBulletReal(e, s)), s
		}
		_makeBulletReal(e, t)
		{
			let i = t.get("sprite");
			i && (i._setDataItem(e), i.setRaw("position", "absolute"), this.bulletsContainer.children.push(i)), t.series = this, e.bullets.push(t)
		}
		addBullet(e, t)
		{
			e.bullets || (e.bullets = []), t && this._makeBulletReal(e, t)
		}
		_clearDirty()
		{
			super._clearDirty(), this._aggregatesCalculated = !1, this._selectionAggregatesCalculated = !1
		}
		_prepareChildren()
		{
			super._prepareChildren();
			let e = this.startIndex(),
				t = this.endIndex();
			if (this.isDirty("name") && this.updateLegendValue(), this.isDirty("heatRules") && (this._valuesDirty = !0), this.isPrivateDirty("baseValueSeries"))
			{
				const e = this.getPrivate("baseValueSeries");
				e && this._disposers.push(e.onPrivate("startIndex", (() =>
				{
					this.markDirtyValues()
				})))
			}
			if (this.get("calculateAggregates") && (this._valuesDirty && !this._dataProcessed && (this._aggregatesCalculated || (this._calculateAggregates(0, this.dataItems.length), this._aggregatesCalculated = !0, 0 != e && (this._psi = void 0))), this._psi == e && this._pei == t && !this.isPrivateDirty("adjustedStartIndex") || this._selectionAggregatesCalculated || (0 === e && t === this.dataItems.length && this._aggregatesCalculated || this._calculateAggregates(e, t), this._selectionAggregatesCalculated = !0)), this.isDirty("tooltip"))
			{
				let e = this.get("tooltip");
				e && (e.hide(0), e.set("tooltipTarget", this))
			}
			if (this.isDirty("fill") || this.isDirty("stroke"))
			{
				let e;
				const t = this.get("legendDataItem");
				if (t && (e = t.get("markerRectangle"), e && this.isVisible()))
				{
					if (this.isDirty("stroke"))
					{
						let t = this.get("stroke");
						e.set("stroke", t)
					}
					if (this.isDirty("fill"))
					{
						let t = this.get("fill");
						e.set("fill", t)
					}
				}
				this.updateLegendMarker(void 0)
			}
			if (this.bullets.length > 0)
			{
				let e = this.startIndex(),
					t = this.endIndex();
				t < this.dataItems.length && t++;
				for (let i = e; i < t; i++)
				{
					let e = this.dataItems[i];
					e.bullets || this._makeBullets(e)
				}
			}
		}
		_handleRemoved()
		{}
		_adjustStartIndex(e)
		{
			return e
		}
		_calculateAggregates(e, t)
		{
			let i = this._valueFields;
			if (!i) throw new Error("No value fields are set for the series.");
			const s = {},
				r = {},
				a = {},
				n = {},
				o = {},
				l = {},
				h = {},
				c = {},
				u = {};
			_(i, (e =>
			{
				s[e] = 0, r[e] = 0, a[e] = 0
			})), _(i, (i =>
			{
				let d = i + "Change",
					p = i + "ChangePercent",
					g = i + "ChangePrevious",
					m = i + "ChangePreviousPercent",
					f = i + "ChangeSelection",
					b = i + "ChangeSelectionPercent",
					_ = "valueY";
				"valueX" != i && "openValueX" != i && "lowValueX" != i && "highValueX" != i || (_ = "valueX");
				const v = this.getPrivate("baseValueSeries"),
					y = this.getPrivate("adjustedStartIndex", e);
				for (let w = y; w < t; w++)
				{
					const t = this.dataItems[w];
					if (t)
					{
						let y = t.get(i);
						null != y && (a[i]++, s[i] += y, r[i] += Math.abs(y), c[i] = s[i] / a[i], (n[i] > y || null == n[i]) && (n[i] = y), (o[i] < y || null == o[i]) && (o[i] = y), h[i] = y, null == l[i] && (l[i] = y, u[i] = y, v && (l[_] = v._getBase(_))), 0 === e && (t.setRaw(d, y - l[_]), t.setRaw(p, (y - l[_]) / l[_] * 100)), t.setRaw(g, y - u[_]), t.setRaw(m, (y - u[_]) / u[_] * 100), t.setRaw(f, y - l[_]), t.setRaw(b, (y - l[_]) / l[_] * 100), u[i] = y)
					}
				}
				if (t < this.dataItems.length - 1)
				{
					const e = this.dataItems[t];
					if (e)
					{
						let t = e.get(i);
						e.setRaw(g, t - u[_]), e.setRaw(m, (t - u[_]) / u[_] * 100), e.setRaw(f, t - l[_]), e.setRaw(b, (t - l[_]) / l[_] * 100)
					}
				}
				e > 0 && e--, delete u[i];
				for (let t = e; t < y; t++)
				{
					const e = this.dataItems[t];
					if (e)
					{
						let t = e.get(i);
						null == u[i] && (u[i] = t), null != t && (e.setRaw(g, t - u[_]), e.setRaw(m, (t - u[_]) / u[_] * 100), e.setRaw(f, t - l[_]), e.setRaw(b, (t - l[_]) / l[_] * 100), u[i] = t)
					}
				}
			})), _(i, (e =>
			{
				this.setPrivate(e + "AverageSelection", c[e]), this.setPrivate(e + "CountSelection", a[e]), this.setPrivate(e + "SumSelection", s[e]), this.setPrivate(e + "AbsoluteSumSelection", r[e]), this.setPrivate(e + "LowSelection", n[e]), this.setPrivate(e + "HighSelection", o[e]), this.setPrivate(e + "OpenSelection", l[e]), this.setPrivate(e + "CloseSelection", h[e])
			})), 0 === e && t === this.dataItems.length && _(i, (e =>
			{
				this.setPrivate(e + "Average", c[e]), this.setPrivate(e + "Count", a[e]), this.setPrivate(e + "Sum", s[e]), this.setPrivate(e + "AbsoluteSum", r[e]), this.setPrivate(e + "Low", n[e]), this.setPrivate(e + "High", o[e]), this.setPrivate(e + "Open", l[e]), this.setPrivate(e + "Close", h[e])
			}))
		}
		_updateChildren()
		{
			super._updateChildren(), this._psi = this.startIndex(), this._pei = this.endIndex(), this.isDirty("visible") && this.bulletsContainer.set("visible", this.get("visible"));
			const e = this.get("heatRules");
			if (this._valuesDirty && e && e.length > 0 && _(e, (e =>
				{
					const i = e.minValue || this.getPrivate(e.dataField + "Low") || 0,
						s = e.maxValue || this.getPrivate(e.dataField + "High") || 0;
					_(e.target._entities, (r =>
					{
						const a = r.dataItem.get(e.dataField);
						if (!d(a))
						{
							e.neutral && r.set(e.key, e.neutral);
							const t = r.states;
							if (t)
							{
								const i = t.lookup("default");
								i && e.neutral && i.set(e.key, e.neutral)
							}
							if (!e.customFunction) return
						}
						if (e.customFunction) e.customFunction.call(this, r, i, s, a);
						else
						{
							let n, o;
							n = e.logarithmic ? (Math.log(a) * Math.LOG10E - Math.log(i) * Math.LOG10E) / (Math.log(s) * Math.LOG10E - Math.log(i) * Math.LOG10E) : (a - i) / (s - i), !d(a) || d(n) && Math.abs(n) != 1 / 0 || (n = .5), d(e.min) ? o = e.min + (e.max - e.min) * n : e.min instanceof pe ? o = pe.interpolate(n, e.min, e.max) : e.min instanceof t && (o = be(n, e.min, e.max)), r.set(e.key, o);
							const l = r.states;
							if (l)
							{
								const t = l.lookup("default");
								t && t.set(e.key, o)
							}
						}
					}))
				})), this.get("visible"))
			{
				let e = this.dataItems.length,
					t = this.startIndex(),
					i = this.endIndex();
				i < e && i++, t > 0 && t--;
				for (let e = 0; e < t; e++) this._hideBullets(this.dataItems[e]);
				for (let e = t; e < i; e++) this._positionBullets(this.dataItems[e]);
				for (let t = i; t < e; t++) this._hideBullets(this.dataItems[t])
			}
		}
		_positionBullets(e)
		{
			e.bullets && _(e.bullets, (e =>
			{
				this._positionBullet(e);
				const t = e.get("sprite");
				e.get("dynamic") && (t && (t._markDirtyKey("fill"), t.markDirtySize()), t instanceof bt && t.walkChildren((e =>
				{
					e._markDirtyKey("fill"), e.markDirtySize(), e instanceof Pt && e.text.markDirtyText()
				}))), t instanceof Pt && t.get("populateText") && t.text.markDirtyText()
			}))
		}
		_hideBullets(e)
		{
			e.bullets && _(e.bullets, (e =>
			{
				let t = e.get("sprite");
				t && t.setPrivate("visible", !1)
			}))
		}
		_positionBullet(e)
		{}
		_placeBulletsContainer(e)
		{
			e.bulletsContainer.children.moveValue(this.bulletsContainer)
		}
		_removeBulletsContainer()
		{
			const e = this.bulletsContainer;
			e.parent && e.parent.children.removeValue(e)
		}
		disposeDataItem(e)
		{
			const t = e.bullets;
			t && _(t, (e =>
			{
				e.dispose()
			}))
		}
		_getItemReaderLabel()
		{
			return ""
		}
		showDataItem(t, i)
		{
			const s = Object.create(null,
			{
				showDataItem:
				{
					get: () => super.showDataItem
				}
			});
			return e(this, void 0, void 0, (function* ()
			{
				const e = [s.showDataItem.call(this, t, i)],
					r = t.bullets;
				r && _(r, (t =>
				{
					const s = t.get("sprite");
					s && e.push(s.show(i))
				})), yield Promise.all(e)
			}))
		}
		hideDataItem(t, i)
		{
			const s = Object.create(null,
			{
				hideDataItem:
				{
					get: () => super.hideDataItem
				}
			});
			return e(this, void 0, void 0, (function* ()
			{
				const e = [s.hideDataItem.call(this, t, i)],
					r = t.bullets;
				r && _(r, (t =>
				{
					const s = t.get("sprite");
					s && e.push(s.hide(i))
				})), yield Promise.all(e)
			}))
		}
		_sequencedShowHide(t, i)
		{
			return e(this, void 0, void 0, (function* ()
			{
				if (this.get("sequencedInterpolation"))
					if (d(i) || (i = this.get("interpolationDuration", 0)), i > 0)
					{
						const s = this.startIndex(),
							r = this.endIndex();
						yield Promise.all(b(this.dataItems, ((a, n) => e(this, void 0, void 0, (function* ()
						{
							let e = i || 0;
							(n < s - 10 || n > r + 10) && (e = 0);
							let o = this.get("sequencedDelay", 0) + e / (r - s);
							var l;
							yield(l = o * (n - s), new Promise(((e, t) =>
							{
								setTimeout(e, l)
							}))), t ? yield this.showDataItem(a, e): yield this.hideDataItem(a, e)
						})))))
					}
				else yield Promise.all(b(this.dataItems, (e => t ? this.showDataItem(e, 0) : this.hideDataItem(e, 0))))
			}))
		}
		updateLegendValue(e)
		{
			if (e)
			{
				const t = e.get("legendDataItem");
				if (t)
				{
					const i = t.get("valueLabel");
					if (i)
					{
						const t = i.text;
						let s = "";
						i._setDataItem(e), s = this.get("legendValueText", t.get("text", "")), i.set("text", s), t.markDirtyText()
					}
					const s = t.get("label");
					if (s)
					{
						const t = s.text;
						let i = "";
						s._setDataItem(e), i = this.get("legendLabelText", t.get("text", "")), s.set("text", i), t.markDirtyText()
					}
				}
			}
		}
		updateLegendMarker(e)
		{}
		_onHide()
		{
			super._onHide();
			const e = this.getTooltip();
			e && e.hide()
		}
		hoverDataItem(e)
		{}
		unhoverDataItem(e)
		{}
		_getBase(e)
		{
			const t = this.dataItems[this.startIndex()];
			return t ? t.get(e) : 0
		}
	}
	Object.defineProperty(Hi, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Series"
	}), Object.defineProperty(Hi, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: Ii.classNames.concat([Hi.className])
	});
	class Fi extends nt
	{
		_beforeChanged()
		{
			super._beforeChanged(), (this.isDirty("cornerRadiusTL") || this.isDirty("cornerRadiusTR") || this.isDirty("cornerRadiusBR") || this.isDirty("cornerRadiusBL")) && (this._clear = !0)
		}
		_draw()
		{
			let e = this.width(),
				t = this.height(),
				i = e,
				s = t,
				r = i / Math.abs(e),
				a = s / Math.abs(t);
			if (d(i) && d(s))
			{
				let e = Math.min(i, s) / 2,
					t = U(this.get("cornerRadiusTL", 8), e),
					n = U(this.get("cornerRadiusTR", 8), e),
					o = U(this.get("cornerRadiusBR", 8), e),
					l = U(this.get("cornerRadiusBL", 8), e),
					h = Math.min(Math.abs(i / 2), Math.abs(s / 2));
				t = Ue(t, 0, h), n = Ue(n, 0, h), o = Ue(o, 0, h), l = Ue(l, 0, h);
				const c = this._display;
				c.moveTo(t * r, 0), c.lineTo(i - n * r, 0), n > 0 && c.arcTo(i, 0, i, n * a, n), c.lineTo(i, s - o * a), o > 0 && c.arcTo(i, s, i - o * r, s, o), c.lineTo(l * r, s), l > 0 && c.arcTo(0, s, 0, s - l * a, l), c.lineTo(0, t * a), t > 0 && c.arcTo(0, 0, t * r, 0, t), c.closePath()
			}
		}
	}
	Object.defineProperty(Fi, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "RoundedRectangle"
	}), Object.defineProperty(Fi, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: nt.classNames.concat([Fi.className])
	});
	class Ni extends Hi
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "itemContainers",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.addDisposer(new Pe(qe.new(
				{}), (() => bt._new(this._root,
				{
					themeTags: ce(this.itemContainers.template.get("themeTags", []), ["legend", "item"]),
					themeTagsSelf: ce(this.itemContainers.template.get("themeTagsSelf", []), ["itemcontainer"]),
					background: Fi.new(this._root,
					{
						themeTags: ce(this.itemContainers.template.get("themeTags", []), ["legend", "item", "background"]),
						themeTagsSelf: ce(this.itemContainers.template.get("themeTagsSelf", []), ["itemcontainer"])
					})
				}, [this.itemContainers.template]))))
			}), Object.defineProperty(this, "markers",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.addDisposer(new Pe(qe.new(
				{}), (() => bt._new(this._root,
				{
					themeTags: ce(this.markers.template.get("themeTags", []), ["legend", "marker"])
				}, [this.markers.template]))))
			}), Object.defineProperty(this, "labels",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.addDisposer(new Pe(qe.new(
				{}), (() => Pt._new(this._root,
				{
					themeTags: ce(this.labels.template.get("themeTags", []), ["legend", "label"])
				}, [this.labels.template]))))
			}), Object.defineProperty(this, "valueLabels",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.addDisposer(new Pe(qe.new(
				{}), (() => Pt._new(this._root,
				{
					themeTags: ce(this.valueLabels.template.get("themeTags", []), ["legend", "label", "value"])
				}, [this.valueLabels.template]))))
			}), Object.defineProperty(this, "markerRectangles",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.addDisposer(new Pe(qe.new(
				{}), (() => Fi._new(this._root,
				{
					themeTags: ce(this.markerRectangles.template.get("themeTags", []), ["legend", "marker", "rectangle"])
				}, [this.markerRectangles.template]))))
			})
		}
		_afterNew()
		{
			this._settings.themeTags = ce(this._settings.themeTags, ["legend"]), this.fields.push("name", "stroke", "fill"), super._afterNew()
		}
		makeItemContainer(e)
		{
			const t = this.children.push(this.itemContainers.make());
			return t._setDataItem(e), this.itemContainers.push(t), t.states.create("disabled",
			{}), t
		}
		makeMarker()
		{
			const e = this.markers.make();
			return this.markers.push(e), e.states.create("disabled",
			{}), e
		}
		makeLabel()
		{
			const e = this.labels.make();
			return e.states.create("disabled",
			{}), e
		}
		makeValueLabel()
		{
			const e = this.valueLabels.make();
			return e.states.create("disabled",
			{}), e
		}
		makeMarkerRectangle()
		{
			const e = this.markerRectangles.make();
			return e.states.create("disabled",
			{}), e
		}
		processDataItem(e)
		{
			super.processDataItem(e);
			const t = this.makeItemContainer(e),
				i = this.get("nameField"),
				s = this.get("fillField"),
				r = this.get("strokeField");
			if (t)
			{
				const a = this.get("clickTarget", "itemContainer"),
					n = e.dataContext;
				n && n.set && n.set("legendDataItem", e), t._setDataItem(e), e.set("itemContainer", t);
				const o = this.makeMarker();
				if (o)
				{
					t.children.push(o), o._setDataItem(e), e.set("marker", o);
					const i = this.get("useDefaultMarker"),
						a = o.children.push(this.makeMarkerRectangle());
					let l = e.get("fill"),
						h = e.get("stroke");
					e.set("markerRectangle", a), n && n.get && (l = n.get(s, l), h = n.get(r, h)), h || (h = l), i ? n.on && (n.on(s, (() =>
					{
						a.set("fill", n.get(s))
					})), n.on(r, (() =>
					{
						a.set("stroke", n.get(r))
					}))) : n && n.createLegendMarker && n.createLegendMarker(), a.setAll(
					{
						fill: l,
						stroke: h
					});
					const c = n.component;
					c && c.updateLegendMarker && c.updateLegendMarker(n)
				}
				const l = this.makeLabel();
				if (l)
				{
					t.children.push(l), l._setDataItem(e), e.set("label", l), l.text.on("text", (() =>
					{
						t.setRaw("ariaLabel", l.text._getText() + ("none" !== this.get("clickTarget") ? "; " + this._t("Press ENTER to toggle") : "")), t.markDirtyAccessibility()
					})), n && n.get && e.set("name", n.get(i));
					let s = e.get("name");
					s && l.set("text", s)
				}
				const h = this.makeValueLabel();
				if (h && (t.children.push(h), h._setDataItem(e), e.set("valueLabel", h)), n && n.show && (n.on("visible", (e =>
					{
						t.set("disabled", !e)
					})), n.get("visible") || t.set("disabled", !0), "none" != a))
				{
					let i = t;
					"marker" == a && (i = o), this._addClickEvents(i, n, e)
				}
				this.children.values.sort(((e, t) =>
				{
					const i = e.dataItem.dataContext,
						s = t.dataItem.dataContext;
					if (i && s)
					{
						const e = this.data.indexOf(i),
							t = this.data.indexOf(s);
						if (e > t) return 1;
						if (e < t) return -1
					}
					return 0
				})), n && n.updateLegendValue && n.updateLegendValue()
			}
		}
		_addClickEvents(e, t, i)
		{
			e.set("cursorOverStyle", "pointer"), e.events.on("pointerover", (() =>
			{
				const e = t.component;
				e && e.hoverDataItem && e.hoverDataItem(t)
			})), e.events.on("pointerout", (() =>
			{
				const e = t.component;
				e && e.hoverDataItem && e.unhoverDataItem(t)
			})), e.events.on("click", (() =>
			{
				const s = i.get("label").text._getText();
				t.show && t.isHidden && (t.isHidden() || !1 === t.get("visible")) ? (t.show(), e.set("disabled", !1), this._root.readerAlert(this._t("%1 shown", this._root.locale, s))) : t.hide && (t.hide(), e.set("disabled", !0), this._root.readerAlert(this._t("%1 hidden", this._root.locale, s)))
			}))
		}
		disposeDataItem(e)
		{
			super.disposeDataItem(e);
			const t = e.dataContext;
			t && t.get && t.get("legendDataItem") == e && t.set("legendDataItem", void 0);
			let i = e.get("itemContainer");
			i && (this.itemContainers.removeValue(i), i.dispose());
			let s = e.get("marker");
			s && (this.markers.removeValue(s), s.dispose());
			let r = e.get("markerRectangle");
			r && (this.markerRectangles.removeValue(r), r.dispose());
			let a = e.get("label");
			a && (this.labels.removeValue(a), a.dispose());
			let n = e.get("valueLabel");
			n && (this.valueLabels.removeValue(n), n.dispose())
		}
	}
	Object.defineProperty(Ni, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Legend"
	}), Object.defineProperty(Ni, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: Hi.classNames.concat([Ni.className])
	});
	class zi extends bt
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "chartContainer",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.children.push(bt.new(this._root,
				{
					width: s,
					height: s,
					interactiveChildren: !1
				}))
			}), Object.defineProperty(this, "bulletsContainer",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: bt.new(this._root,
				{
					interactiveChildren: !1,
					isMeasured: !1,
					position: "absolute",
					width: s,
					height: s
				})
			})
		}
	}
	Object.defineProperty(zi, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Chart"
	}), Object.defineProperty(zi, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: bt.classNames.concat([zi.className])
	});
	class Vi extends zi
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "seriesContainer",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: bt.new(this._root,
				{
					width: s,
					height: s,
					isMeasured: !1
				})
			}), Object.defineProperty(this, "series",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: new ke
			})
		}
		_afterNew()
		{
			super._afterNew(), this._disposers.push(this.series);
			const e = this.seriesContainer.children;
			this._disposers.push(this.series.events.onAll((t =>
			{
				if ("clear" === t.type)
				{
					_(t.oldValues, (e =>
					{
						this._removeSeries(e)
					}));
					const e = this.get("colors");
					e && e.reset();
					const i = this.get("patterns");
					i && i.reset()
				}
				else if ("push" === t.type) e.moveValue(t.newValue), this._processSeries(t.newValue);
				else if ("setIndex" === t.type) e.setIndex(t.index, t.newValue), this._processSeries(t.newValue);
				else if ("insertIndex" === t.type) e.insertIndex(t.index, t.newValue), this._processSeries(t.newValue);
				else if ("removeIndex" === t.type) this._removeSeries(t.oldValue);
				else if ("moveIndex" === t.type) e.moveValue(t.value, t.newIndex), this._processSeries(t.value);
				else
				{
					if ("swap" !== t.type) throw new Error("Unknown IListEvent type");
					{
						const i = t.a,
							s = t.b,
							r = this.series.indexOf(i),
							a = this.series.indexOf(s);
						e.moveValue(i, a), e.moveValue(s, r), this.series.each((e =>
						{
							this._processSeries(e), e.markDirtyValues()
						}))
					}
				}
			})))
		}
		_processSeries(e)
		{
			e.chart = this, e._placeBulletsContainer(this)
		}
		_removeSeries(e)
		{
			e._handleRemoved(), e.isDisposed() || (this.seriesContainer.children.removeValue(e), e._removeBulletsContainer())
		}
	}
	Object.defineProperty(Vi, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "SerialChart"
	}), Object.defineProperty(Vi, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: zi.classNames.concat([Vi.className])
	});
	class qi extends He
	{
		_afterNew()
		{
			super._afterNewApplyThemes(), this._dirty.colors = !1
		}
		_beforeChanged()
		{
			this.isDirty("colors") && this.reset()
		}
		generateColors()
		{
			this.setPrivate("currentPass", this.getPrivate("currentPass", 0) + 1);
			const e = this.getPrivate("currentPass"),
				t = this.get("colors", [this.get("baseColor", pe.fromHex(16711680))]);
			this.getPrivate("numColors") || this.setPrivate("numColors", t.length);
			const i = this.getPrivate("numColors"),
				s = this.get("passOptions"),
				r = this.get("reuse");
			for (let a = 0; a < i; a++)
				if (r) t.push(t[a]);
				else
				{
					const i = t[a].toHSL();
					let r = i.h + (s.hue || 0) * e;
					for (; r > 1;) r -= 1;
					let n = i.s + (s.saturation || 0) * e;
					n > 1 && (n = 1), n < 0 && (n = 0);
					let o = i.l + (s.lightness || 0) * e;
					for (; o > 1;) o -= 1;
					t.push(pe.fromHSL(r, n, o))
				}
		}
		getIndex(e)
		{
			const t = this.get("colors", []),
				i = this.get("saturation");
			return e >= t.length ? (this.generateColors(), this.getIndex(e)) : null != i ? pe.saturate(t[e], i) : t[e]
		}
		next()
		{
			let e = this.getPrivate("currentStep", this.get("startIndex", 0));
			return this.setPrivate("currentStep", e + this.get("step", 1)), this.getIndex(e)
		}
		reset()
		{
			this.setPrivate("currentStep", this.get("startIndex", 0)), this.setPrivate("currentPass", 0)
		}
	}
	Object.defineProperty(qi, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "ColorSet"
	}), Object.defineProperty(qi, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: He.classNames.concat([qi.className])
	});
	class Wi extends Lt
	{
		setupDefaultRules()
		{
			super.setupDefaultRules();
			const e = this._root.interfaceColors,
				t = this.rule.bind(this);
			t("PercentSeries").setAll(
			{
				legendLabelText: "{category}",
				legendValueText: "{valuePercentTotal.formatNumber('0.00p')}",
				colors: qi.new(this._root,
				{}),
				width: s,
				height: s
			}), t("PieChart").setAll(
			{
				radius: i(80),
				startAngle: -90,
				endAngle: 270
			}), t("PieSeries").setAll(
			{
				alignLabels: !0,
				startAngle: -90,
				endAngle: 270
			}), t("PieSeries").states.create("hidden",
			{
				endAngle: -90,
				opacity: 0
			}), t("Slice", ["pie"]).setAll(
			{
				position: "absolute",
				isMeasured: !1,
				x: 0,
				y: 0,
				toggleKey: "active",
				tooltipText: "{category}: {valuePercentTotal.formatNumber('0.00p')}",
				strokeWidth: 1,
				strokeOpacity: 1,
				role: "figure",
				lineJoin: "round"
			}), t("Slice", ["pie"]).states.create("active",
			{
				shiftRadius: 20,
				scale: 1
			}), t("Slice", ["pie"]).states.create("hoverActive",
			{
				scale: 1.04
			}), t("Slice", ["pie"]).states.create("hover",
			{
				scale: 1.04
			}), t("RadialLabel", ["pie"]).setAll(
			{
				textType: "aligned",
				radius: 10,
				text: "{category}: {valuePercentTotal.formatNumber('0.00p')}",
				paddingTop: 5,
				paddingBottom: 5,
				populateText: !0
			}), t("Tick", ["pie"]).setAll(
			{
				location: 1
			}), t("SlicedChart").setAll(
			{
				paddingLeft: 10,
				paddingRight: 10,
				paddingTop: 10,
				paddingBottom: 10
			}), t("FunnelSeries").setAll(
			{
				startLocation: 0,
				endLocation: 1,
				orientation: "vertical",
				alignLabels: !0,
				sequencedInterpolation: !0
			}), t("FunnelSlice").setAll(
			{
				interactive: !0,
				expandDistance: 0
			}), t("FunnelSlice").states.create("hover",
			{
				expandDistance: .15
			}), t("Label", ["funnel"]).setAll(
			{
				populateText: !0,
				text: "{category}: {valuePercentTotal.formatNumber('0.00p')}",
				centerY: r
			}), t("Label", ["funnel", "horizontal"]).setAll(
			{
				centerX: 0,
				centerY: r,
				rotation: -90
			}), t("Label", ["funnel", "vertical"]).setAll(
			{
				centerY: r,
				centerX: 0
			}), t("Tick", ["funnel"]).setAll(
			{
				location: 1
			}), t("FunnelSlice", ["funnel", "link"]).setAll(
			{
				fillOpacity: .5,
				strokeOpacity: 0,
				expandDistance: -.1
			}), t("FunnelSlice", ["funnel", "link", "vertical"]).setAll(
			{
				height: 10
			}), t("FunnelSlice", ["funnel", "link", "horizontal"]).setAll(
			{
				width: 10
			}), t("PyramidSeries").setAll(
			{
				valueIs: "area"
			}), t("FunnelSlice", ["pyramid", "link"]).setAll(
			{
				fillOpacity: .5
			}), t("FunnelSlice", ["pyramid", "link", "vertical"]).setAll(
			{
				height: 0
			}), t("FunnelSlice", ["pyramid", "link", "horizontal"]).setAll(
			{
				width: 0
			}), t("FunnelSlice", ["pyramid"]).setAll(
			{
				interactive: !0,
				expandDistance: 0
			}), t("FunnelSlice", ["pyramid"]).states.create("hover",
			{
				expandDistance: .15
			}), t("Label", ["pyramid"]).setAll(
			{
				populateText: !0,
				text: "{category}: {valuePercentTotal.formatNumber('0.00p')}",
				centerY: r
			}), t("Label", ["pyramid", "horizontal"]).setAll(
			{
				centerX: 0,
				centerY: r,
				rotation: -90
			}), t("Label", ["pyramid", "vertical"]).setAll(
			{
				centerY: r,
				centerX: 0
			}), t("Tick", ["pyramid"]).setAll(
			{
				location: 1
			}), t("FunnelSlice", ["pictorial"]).setAll(
			{
				interactive: !0,
				tooltipText: "{category}: {valuePercentTotal.formatNumber('0.00p')}"
			}), t("Label", ["pictorial"]).setAll(
			{
				populateText: !0,
				text: "{category}: {valuePercentTotal.formatNumber('0.00p')}",
				centerY: r
			}), t("Label", ["pictorial", "horizontal"]).setAll(
			{
				centerX: 0,
				centerY: r,
				rotation: -90
			}), t("Label", ["pictorial", "vertical"]).setAll(
			{
				centerY: r,
				centerX: 0
			}), t("FunnelSlice", ["pictorial", "link"]).setAll(
			{
				fillOpacity: .5,
				width: 0,
				height: 0
			}), t("Tick", ["pictorial"]).setAll(
			{
				location: .5
			});
			{
				const i = t("Graphics", ["pictorial", "background"]);
				i.setAll(
				{
					fillOpacity: .2
				}), Rt(i, "fill", e, "alternativeBackground")
			}
		}
	}
	class Yi extends Vi
	{
		_afterNew()
		{
			this._defaultThemes.push(Wi.new(this._root)), super._afterNew(), this.chartContainer.children.push(this.seriesContainer), this.seriesContainer.children.push(this.bulletsContainer)
		}
		_processSeries(e)
		{
			super._processSeries(e), this.seriesContainer.children.moveValue(this.bulletsContainer, this.seriesContainer.children.length - 1)
		}
	}
	Object.defineProperty(Yi, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "PercentChart"
	}), Object.defineProperty(Yi, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: Vi.classNames.concat([Yi.className])
	});
	class Gi extends Yi
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_maxRadius",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 1
			})
		}
		_afterNew()
		{
			super._afterNew(), this.seriesContainer.setAll(
			{
				x: r,
				y: r
			})
		}
		_prepareChildren()
		{
			super._prepareChildren();
			const e = this.chartContainer,
				i = e.innerWidth(),
				s = e.innerHeight(),
				r = this.get("startAngle", 0),
				a = this.get("endAngle", 0),
				n = this.get("innerRadius");
			let o = Ze(0, 0, r, a, 1);
			const l = i / (o.right - o.left),
				h = s / (o.bottom - o.top);
			let c = {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			};
			if (n instanceof t)
			{
				let e = n.value,
					t = Math.min(l, h);
				e = Math.max(t * e, t - Math.min(s, i)) / t, c = Ze(0, 0, r, a, e), this.setPrivateRaw("irModifyer", e / n.value)
			}
			o = function (e)
			{
				const t = e.length;
				if (t > 0)
				{
					let i = e[0],
						s = i.left,
						r = i.top,
						a = i.right,
						n = i.bottom;
					if (t > 1)
						for (let o = 1; o < t; o++) i = e[o], s = Math.min(i.left, s), a = Math.max(i.right, a), r = Math.min(i.top, r), n = Math.max(i.bottom, n);
					return {
						left: s,
						right: a,
						top: r,
						bottom: n
					}
				}
				return {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}
			}([o, c]);
			const u = this._maxRadius;
			this._maxRadius = Math.min(l, h);
			const d = U(this.get("radius", 0), this._maxRadius);
			this.seriesContainer.setAll(
			{
				dy: -d * (o.bottom + o.top) / 2,
				dx: -d * (o.right + o.left) / 2
			}), (this.isDirty("startAngle") || this.isDirty("endAngle") || u != this._maxRadius) && this.series.each((e =>
			{
				e._markDirtyKey("startAngle")
			})), (this.isDirty("innerRadius") || this.isDirty("radius")) && this.series.each((e =>
			{
				e._markDirtyKey("innerRadius")
			}))
		}
		radius(e)
		{
			let t = U(this.get("radius", 0), this._maxRadius),
				i = U(this.get("innerRadius", 0), t);
			if (e)
			{
				let s = this.series.indexOf(e),
					r = this.series.length,
					a = e.get("radius");
				return null != a ? i + U(a, t - i) : i + (t - i) / r * (s + 1)
			}
			return t
		}
		innerRadius(e)
		{
			const t = this.radius();
			let i = U(this.get("innerRadius", 0), t);
			if (i < 0 && (i = t + i), e)
			{
				let s = this.series.indexOf(e),
					r = this.series.length,
					a = e.get("innerRadius");
				return null != a ? i + U(a, t - i) : i + (t - i) / r * s
			}
			return i
		}
		_updateSize()
		{
			super._updateSize(), this.markDirtyKey("radius")
		}
	}
	Object.defineProperty(Gi, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "PieChart"
	}), Object.defineProperty(Gi, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: Yi.classNames.concat([Gi.className])
	});
	class Ui extends Hi
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "slicesContainer",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.children.push(bt.new(this._root,
				{
					position: "absolute",
					isMeasured: !1
				}))
			}), Object.defineProperty(this, "labelsContainer",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.children.push(bt.new(this._root,
				{
					position: "absolute",
					isMeasured: !1
				}))
			}), Object.defineProperty(this, "ticksContainer",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.children.push(bt.new(this._root,
				{
					position: "absolute",
					isMeasured: !1
				}))
			}), Object.defineProperty(this, "_lLabels",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			}), Object.defineProperty(this, "_rLabels",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			}), Object.defineProperty(this, "_hLabels",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: []
			}), Object.defineProperty(this, "slices",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.addDisposer(this._makeSlices())
			}), Object.defineProperty(this, "labels",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.addDisposer(this._makeLabels())
			}), Object.defineProperty(this, "ticks",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this.addDisposer(this._makeTicks())
			})
		}
		makeSlice(e)
		{
			const t = this.slicesContainer.children.push(this.slices.make());
			return t.on("fill", (() =>
			{
				this.updateLegendMarker(e)
			})), t.on("fillPattern", (() =>
			{
				this.updateLegendMarker(e)
			})), t.on("stroke", (() =>
			{
				this.updateLegendMarker(e)
			})), t._setDataItem(e), e.set("slice", t), this.slices.push(t), t
		}
		makeLabel(e)
		{
			const t = this.labelsContainer.children.push(this.labels.make());
			return t._setDataItem(e), e.set("label", t), this.labels.push(t), t
		}
		_shouldMakeBullet(e)
		{
			return null != e.get("value")
		}
		makeTick(e)
		{
			const t = this.ticksContainer.children.push(this.ticks.make());
			return t._setDataItem(e), e.set("tick", t), this.ticks.push(t), t
		}
		_afterNew()
		{
			this.fields.push("category", "fill"), super._afterNew()
		}
		_onDataClear()
		{
			const e = this.get("colors");
			e && e.reset();
			const t = this.get("patterns");
			t && t.reset()
		}
		_prepareChildren()
		{
			if (super._prepareChildren(), this._lLabels = [], this._rLabels = [], this._hLabels = [], this._valuesDirty)
			{
				let e = 0,
					t = 0,
					i = 0,
					s = 1 / 0,
					r = 0;
				_(this._dataItems, (i =>
				{
					let s = i.get("valueWorking", 0);
					e += s, t += Math.abs(s)
				})), _(this._dataItems, (e =>
				{
					let a = e.get("valueWorking", 0);
					a > i && (i = a), a < s && (s = a), r++;
					let n = a / t;
					0 == t && (n = 0), e.setRaw("valuePercentTotal", 100 * n)
				})), this.setPrivateRaw("valueLow", s), this.setPrivateRaw("valueHigh", i), this.setPrivateRaw("valueSum", e), this.setPrivateRaw("valueAverage", e / r), this.setPrivateRaw("valueAbsoluteSum", t)
			}
		}
		show(t)
		{
			const i = Object.create(null,
			{
				show:
				{
					get: () => super.show
				}
			});
			return e(this, void 0, void 0, (function* ()
			{
				let e = [];
				e.push(i.show.call(this, t)), e.push(this._sequencedShowHide(!0, t)), yield Promise.all(e)
			}))
		}
		hide(t)
		{
			const i = Object.create(null,
			{
				hide:
				{
					get: () => super.hide
				}
			});
			return e(this, void 0, void 0, (function* ()
			{
				let e = [];
				e.push(i.hide.call(this, t)), e.push(this._sequencedShowHide(!1, t)), yield Promise.all(e)
			}))
		}
		_updateChildren()
		{
			super._updateChildren(), this._valuesDirty && _(this._dataItems, (e =>
			{
				e.get("label").text.markDirtyText()
			})), (this.isDirty("legendLabelText") || this.isDirty("legendValueText")) && _(this._dataItems, (e =>
			{
				this.updateLegendValue(e)
			})), this._arrange()
		}
		_arrange()
		{
			this._arrangeDown(this._lLabels), this._arrangeUp(this._lLabels), this._arrangeDown(this._rLabels), this._arrangeUp(this._rLabels), this._arrangeLeft(this._hLabels), this._arrangeRight(this._hLabels), _(this.dataItems, (e =>
			{
				this._updateTick(e)
			}))
		}
		_afterChanged()
		{
			super._afterChanged(), this._arrange()
		}
		processDataItem(e)
		{
			if (super.processDataItem(e), null == e.get("fill"))
			{
				let t = this.get("colors");
				t && e.setRaw("fill", t.next())
			}
			if (null == e.get("fillPattern"))
			{
				let t = this.get("patterns");
				t && e.setRaw("fillPattern", t.next())
			}
		}
		showDataItem(t, i)
		{
			const s = Object.create(null,
			{
				showDataItem:
				{
					get: () => super.showDataItem
				}
			});
			return e(this, void 0, void 0, (function* ()
			{
				const e = [s.showDataItem.call(this, t, i)];
				d(i) || (i = this.get("stateAnimationDuration", 0));
				const r = this.get("stateAnimationEasing");
				let a = t.get("value");
				const n = t.animate(
				{
					key: "valueWorking",
					to: a,
					duration: i,
					easing: r
				});
				n && e.push(n.waitForStop());
				const o = t.get("tick");
				o && e.push(o.show(i));
				const l = t.get("label");
				l && e.push(l.show(i));
				const h = t.get("slice");
				h && e.push(h.show(i)), h.get("active") && h.states.applyAnimate("active"), yield Promise.all(e)
			}))
		}
		hideDataItem(t, i)
		{
			const s = Object.create(null,
			{
				hideDataItem:
				{
					get: () => super.hideDataItem
				}
			});
			return e(this, void 0, void 0, (function* ()
			{
				const e = [s.hideDataItem.call(this, t, i)],
					r = this.states.create("hidden",
					{});
				d(i) || (i = r.get("stateAnimationDuration", this.get("stateAnimationDuration", 0)));
				const a = r.get("stateAnimationEasing", this.get("stateAnimationEasing")),
					n = t.animate(
					{
						key: "valueWorking",
						to: 0,
						duration: i,
						easing: a
					});
				n && e.push(n.waitForStop());
				const o = t.get("tick");
				o && e.push(o.hide(i));
				const l = t.get("label");
				l && e.push(l.hide(i));
				const h = t.get("slice");
				h.hideTooltip(), h && e.push(h.hide(i)), yield Promise.all(e)
			}))
		}
		disposeDataItem(e)
		{
			super.disposeDataItem(e);
			let t = e.get("label");
			t && (this.labels.removeValue(t), t.dispose());
			let i = e.get("tick");
			i && (this.ticks.removeValue(i), i.dispose());
			let s = e.get("slice");
			s && (this.slices.removeValue(s), s.dispose())
		}
		hoverDataItem(e)
		{
			const t = e.get("slice");
			t && !t.isHidden() && t.hover()
		}
		unhoverDataItem(e)
		{
			const t = e.get("slice");
			t && t.unhover()
		}
		updateLegendMarker(e)
		{
			if (e)
			{
				const t = e.get("slice");
				if (t)
				{
					const i = e.get("legendDataItem");
					if (i)
					{
						const e = i.get("markerRectangle");
						_(rt, (i =>
						{
							null != t.get(i) && e.set(i, t.get(i))
						}))
					}
				}
			}
		}
		_arrangeDown(e)
		{
			if (e)
			{
				let t = this._getNextDown();
				e.sort(((e, t) => e.y > t.y ? 1 : e.y < t.y ? -1 : 0)), _(e, (e =>
				{
					const i = e.label.adjustedLocalBounds();
					let s = i.top;
					e.y + s < t && (e.y = t - s), e.label.set("y", e.y), t = e.y + i.bottom
				}))
			}
		}
		_getNextUp()
		{
			return this.labelsContainer.maxHeight()
		}
		_getNextDown()
		{
			return 0
		}
		_arrangeUp(e)
		{
			if (e)
			{
				let t = this._getNextUp();
				e.sort(((e, t) => e.y < t.y ? 1 : e.y > t.y ? -1 : 0)), _(e, (e =>
				{
					const i = e.label.adjustedLocalBounds();
					let s = i.bottom;
					e.y + s > t && (e.y = t - s), e.label.set("y", e.y), t = e.y + i.top
				}))
			}
		}
		_arrangeRight(e)
		{
			if (e)
			{
				let t = 0;
				e.sort(((e, t) => e.y > t.y ? 1 : e.y < t.y ? -1 : 0)), _(e, (e =>
				{
					const i = e.label.adjustedLocalBounds();
					let s = i.left;
					e.y + s < t && (e.y = t - s), e.label.set("x", e.y), t = e.y + i.right
				}))
			}
		}
		_arrangeLeft(e)
		{
			if (e)
			{
				let t = this.labelsContainer.maxWidth();
				e.sort(((e, t) => e.y < t.y ? 1 : e.y > t.y ? -1 : 0)), _(e, (e =>
				{
					const i = e.label.adjustedLocalBounds();
					let s = i.right;
					e.y + s > t && (e.y = t - s), e.label.set("x", e.y), t = e.y + i.left
				}))
			}
		}
		_updateSize()
		{
			super._updateSize(), this.markDirty()
		}
		_updateTick(e)
		{}
		_dispose()
		{
			super._dispose();
			const e = this.chart;
			e && e.series.removeValue(this)
		}
	}

	function Xi(e)
	{
		return function ()
		{
			return e
		}
	}
	Object.defineProperty(Ui, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "PercentSeries"
	}), Object.defineProperty(Ui, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: Hi.classNames.concat([Ui.className])
	});
	const Ki = Math.abs,
		$i = Math.atan2,
		Zi = Math.cos,
		Ji = Math.max,
		Qi = Math.min,
		es = Math.sin,
		ts = Math.sqrt,
		is = 1e-12,
		ss = Math.PI,
		rs = ss / 2,
		as = 2 * ss;

	function ns(e)
	{
		return e >= 1 ? rs : e <= -1 ? -rs : Math.asin(e)
	}
	const os = Math.PI,
		ls = 2 * os,
		hs = 1e-6,
		cs = ls - hs;

	function us(e)
	{
		this._ += e[0];
		for (let t = 1, i = e.length; t < i; ++t) this._ += arguments[t] + e[t]
	}
	class ds
	{
		constructor(e)
		{
			this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == e ? us : function (e)
			{
				let t = Math.floor(e);
				if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
				if (t > 15) return us;
				const i = 10 ** t;
				return function (e)
				{
					this._ += e[0];
					for (let t = 1, s = e.length; t < s; ++t) this._ += Math.round(arguments[t] * i) / i + e[t]
				}
			}(e)
		}
		moveTo(e, t)
		{
			this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`
		}
		closePath()
		{
			null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
		}
		lineTo(e, t)
		{
			this._append`L${this._x1=+e},${this._y1=+t}`
		}
		quadraticCurveTo(e, t, i, s)
		{
			this._append`Q${+e},${+t},${this._x1=+i},${this._y1=+s}`
		}
		bezierCurveTo(e, t, i, s, r, a)
		{
			this._append`C${+e},${+t},${+i},${+s},${this._x1=+r},${this._y1=+a}`
		}
		arcTo(e, t, i, s, r)
		{
			if (e = +e, t = +t, i = +i, s = +s, (r = +r) < 0) throw new Error(`negative radius: ${r}`);
			let a = this._x1,
				n = this._y1,
				o = i - e,
				l = s - t,
				h = a - e,
				c = n - t,
				u = h * h + c * c;
			if (null === this._x1) this._append`M${this._x1=e},${this._y1=t}`;
			else if (u > hs)
				if (Math.abs(c * o - l * h) > hs && r)
				{
					let d = i - a,
						p = s - n,
						g = o * o + l * l,
						m = d * d + p * p,
						f = Math.sqrt(g),
						b = Math.sqrt(u),
						_ = r * Math.tan((os - Math.acos((g + u - m) / (2 * f * b))) / 2),
						v = _ / b,
						y = _ / f;
					Math.abs(v - 1) > hs && this._append`L${e+v*h},${t+v*c}`, this._append`A${r},${r},0,0,${+(c*d>h*p)},${this._x1=e+y*o},${this._y1=t+y*l}`
				}
			else this._append`L${this._x1=e},${this._y1=t}`
		}
		arc(e, t, i, s, r, a)
		{
			if (e = +e, t = +t, a = !!a, (i = +i) < 0) throw new Error(`negative radius: ${i}`);
			let n = i * Math.cos(s),
				o = i * Math.sin(s),
				l = e + n,
				h = t + o,
				c = 1 ^ a,
				u = a ? s - r : r - s;
			null === this._x1 ? this._append`M${l},${h}` : (Math.abs(this._x1 - l) > hs || Math.abs(this._y1 - h) > hs) && this._append`L${l},${h}`, i && (u < 0 && (u = u % ls + ls), u > cs ? this._append`A${i},${i},0,1,${c},${e-n},${t-o}A${i},${i},0,1,${c},${this._x1=l},${this._y1=h}` : u > hs && this._append`A${i},${i},0,${+(u>=os)},${c},${this._x1=e+i*Math.cos(r)},${this._y1=t+i*Math.sin(r)}`)
		}
		rect(e, t, i, s)
		{
			this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${i=+i}v${+s}h${-i}Z`
		}
		toString()
		{
			return this._
		}
	}

	function ps(e)
	{
		return e.innerRadius
	}

	function gs(e)
	{
		return e.outerRadius
	}

	function ms(e)
	{
		return e.startAngle
	}

	function fs(e)
	{
		return e.endAngle
	}

	function bs(e)
	{
		return e && e.padAngle
	}

	function _s(e, t, i, s, r, a, n)
	{
		var o = e - i,
			l = t - s,
			h = (n ? a : -a) / ts(o * o + l * l),
			c = h * l,
			u = -h * o,
			d = e + c,
			p = t + u,
			g = i + c,
			m = s + u,
			f = (d + g) / 2,
			b = (p + m) / 2,
			_ = g - d,
			v = m - p,
			y = _ * _ + v * v,
			w = r - a,
			x = d * m - g * p,
			k = (v < 0 ? -1 : 1) * ts(Ji(0, w * w * y - x * x)),
			P = (x * v - _ * k) / y,
			D = (-x * _ - v * k) / y,
			T = (x * v + _ * k) / y,
			O = (-x * _ + v * k) / y,
			S = P - f,
			E = D - b,
			C = T - f,
			j = O - b;
		return S * S + E * E > C * C + j * j && (P = T, D = O),
		{
			cx: P,
			cy: D,
			x01: -c,
			y01: -u,
			x11: P * (r / w - 1),
			y11: D * (r / w - 1)
		}
	}

	function vs()
	{
		var e = ps,
			t = gs,
			i = Xi(0),
			s = null,
			r = ms,
			a = fs,
			n = bs,
			o = null,
			l = function (e)
			{
				let t = 3;
				return e.digits = function (i)
				{
					if (!arguments.length) return t;
					if (null == i) t = null;
					else
					{
						const e = Math.floor(i);
						if (!(e >= 0)) throw new RangeError(`invalid digits: ${i}`);
						t = e
					}
					return e
				}, () => new ds(t)
			}(h);

		function h()
		{
			var h, c, u, d = +e.apply(this, arguments),
				p = +t.apply(this, arguments),
				g = r.apply(this, arguments) - rs,
				m = a.apply(this, arguments) - rs,
				f = Ki(m - g),
				b = m > g;
			if (o || (o = h = l()), p < d && (c = p, p = d, d = c), p > is)
				if (f > as - is) o.moveTo(p * Zi(g), p * es(g)), o.arc(0, 0, p, g, m, !b), d > is && (o.moveTo(d * Zi(m), d * es(m)), o.arc(0, 0, d, m, g, b));
				else
				{
					var _, v, y = g,
						w = m,
						x = g,
						k = m,
						P = f,
						D = f,
						T = n.apply(this, arguments) / 2,
						O = T > is && (s ? +s.apply(this, arguments) : ts(d * d + p * p)),
						S = Qi(Ki(p - d) / 2, +i.apply(this, arguments)),
						E = S,
						C = S;
					if (O > is)
					{
						var j = ns(O / d * es(T)),
							M = ns(O / p * es(T));
						(P -= 2 * j) > is ? (x += j *= b ? 1 : -1, k -= j) : (P = 0, x = k = (g + m) / 2), (D -= 2 * M) > is ? (y += M *= b ? 1 : -1, w -= M) : (D = 0, y = w = (g + m) / 2)
					}
					var A = p * Zi(y),
						B = p * es(y),
						L = d * Zi(k),
						R = d * es(k);
					if (S > is)
					{
						var I, H = p * Zi(w),
							F = p * es(w),
							N = d * Zi(x),
							z = d * es(x);
						if (f < ss)
							if (I = function (e, t, i, s, r, a, n, o)
								{
									var l = i - e,
										h = s - t,
										c = n - r,
										u = o - a,
										d = u * l - c * h;
									if (!(d * d < is)) return [e + (d = (c * (t - a) - u * (e - r)) / d) * l, t + d * h]
								}(A, B, N, z, H, F, L, R))
							{
								var V = A - I[0],
									q = B - I[1],
									W = H - I[0],
									Y = F - I[1],
									G = 1 / es(((u = (V * W + q * Y) / (ts(V * V + q * q) * ts(W * W + Y * Y))) > 1 ? 0 : u < -1 ? ss : Math.acos(u)) / 2),
									U = ts(I[0] * I[0] + I[1] * I[1]);
								E = Qi(S, (d - U) / (G - 1)), C = Qi(S, (p - U) / (G + 1))
							}
						else E = C = 0
					}
					D > is ? C > is ? (_ = _s(N, z, A, B, p, C, b), v = _s(H, F, L, R, p, C, b), o.moveTo(_.cx + _.x01, _.cy + _.y01), C < S ? o.arc(_.cx, _.cy, C, $i(_.y01, _.x01), $i(v.y01, v.x01), !b) : (o.arc(_.cx, _.cy, C, $i(_.y01, _.x01), $i(_.y11, _.x11), !b), o.arc(0, 0, p, $i(_.cy + _.y11, _.cx + _.x11), $i(v.cy + v.y11, v.cx + v.x11), !b), o.arc(v.cx, v.cy, C, $i(v.y11, v.x11), $i(v.y01, v.x01), !b))) : (o.moveTo(A, B), o.arc(0, 0, p, y, w, !b)) : o.moveTo(A, B), d > is && P > is ? E > is ? (_ = _s(L, R, H, F, d, -E, b), v = _s(A, B, N, z, d, -E, b), o.lineTo(_.cx + _.x01, _.cy + _.y01), E < S ? o.arc(_.cx, _.cy, E, $i(_.y01, _.x01), $i(v.y01, v.x01), !b) : (o.arc(_.cx, _.cy, E, $i(_.y01, _.x01), $i(_.y11, _.x11), !b), o.arc(0, 0, d, $i(_.cy + _.y11, _.cx + _.x11), $i(v.cy + v.y11, v.cx + v.x11), b), o.arc(v.cx, v.cy, E, $i(v.y11, v.x11), $i(v.y01, v.x01), !b))) : o.arc(0, 0, d, k, x, b) : o.lineTo(L, R)
				}
			else o.moveTo(0, 0);
			if (o.closePath(), h) return o = null, h + "" || null
		}
		return h.centroid = function ()
		{
			var i = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2,
				s = (+r.apply(this, arguments) + +a.apply(this, arguments)) / 2 - ss / 2;
			return [Zi(s) * i, es(s) * i]
		}, h.innerRadius = function (t)
		{
			return arguments.length ? (e = "function" == typeof t ? t : Xi(+t), h) : e
		}, h.outerRadius = function (e)
		{
			return arguments.length ? (t = "function" == typeof e ? e : Xi(+e), h) : t
		}, h.cornerRadius = function (e)
		{
			return arguments.length ? (i = "function" == typeof e ? e : Xi(+e), h) : i
		}, h.padRadius = function (e)
		{
			return arguments.length ? (s = null == e ? null : "function" == typeof e ? e : Xi(+e), h) : s
		}, h.startAngle = function (e)
		{
			return arguments.length ? (r = "function" == typeof e ? e : Xi(+e), h) : r
		}, h.endAngle = function (e)
		{
			return arguments.length ? (a = "function" == typeof e ? e : Xi(+e), h) : a
		}, h.padAngle = function (e)
		{
			return arguments.length ? (n = "function" == typeof e ? e : Xi(+e), h) : n
		}, h.context = function (e)
		{
			return arguments.length ? (o = null == e ? null : e, h) : o
		}, h
	}
	class ys extends at
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "ix",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "iy",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: 0
			}), Object.defineProperty(this, "_generator",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: vs()
			})
		}
		_getTooltipPoint()
		{
			let e = this.get("tooltipX"),
				i = this.get("tooltipY"),
				s = 0,
				r = 0;
			d(e) && (s = e), d(i) && (r = i);
			let a = this.get("radius", 0),
				n = this.get("innerRadius", 0);
			return a += this.get("dRadius", 0), n += this.get("dInnerRadius", 0), n < 0 && (n = a + n), e instanceof t && (s = this.ix * (n + (a - n) * e.value)), i instanceof t && (r = this.iy * (n + (a - n) * i.value)), this.get("arc") >= 360 && 0 == n && (s = 0, r = 0),
			{
				x: s,
				y: r
			}
		}
		_beforeChanged()
		{
			super._beforeChanged(), (this.isDirty("radius") || this.isDirty("arc") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("dRadius") || this.isDirty("dInnerRadius") || this.isDirty("cornerRadius") || this.isDirty("shiftRadius")) && (this._clear = !0)
		}
		_changed()
		{
			if (super._changed(), this._clear)
			{
				let e = this.get("startAngle", 0),
					t = this.get("arc", 0);
				const i = this._generator;
				t < 0 && (e += t, t *= -1), t > .1 && i.cornerRadius(this.get("cornerRadius", 0)), i.context(this._display);
				let s = this.get("radius", 0),
					r = this.get("innerRadius", 0);
				s += this.get("dRadius", 0), r += this.get("dInnerRadius", 0), r < 0 && (r = s + r), i(
				{
					innerRadius: r,
					outerRadius: s,
					startAngle: (e + 90) * Ye,
					endAngle: (e + t + 90) * Ye
				});
				let a = e + t / 2;
				this.ix = Ke(a), this.iy = Xe(a);
				const n = this.get("shiftRadius", 0);
				this.setRaw("dx", this.ix * n), this.setRaw("dy", this.iy * n), this.markDirtyPosition()
			}
		}
	}

	function ws(e, t)
	{
		for (let i = 0, s = t.length; i < s; i++)
		{
			const s = t[i];
			if (s.length > 0)
			{
				let t = s[0];
				if (t.length > 0)
				{
					let i = t[0];
					e.moveTo(i.x, i.y);
					for (let t = 0, i = s.length; t < i; t++) xs(e, s[t])
				}
			}
		}
	}

	function xs(e, t)
	{
		for (let i = 0, s = t.length; i < s; i++)
		{
			const s = t[i];
			e.lineTo(s.x, s.y)
		}
	}
	Object.defineProperty(ys, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Slice"
	}), Object.defineProperty(ys, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: at.classNames.concat([ys.className])
	});
	class ks extends at
	{
		_beforeChanged()
		{
			super._beforeChanged(), (this.isDirty("points") || this.isDirty("segments") || this._sizeDirty || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = !0)
		}
		_changed()
		{
			if (super._changed(), this._clear)
			{
				const e = this.get("points"),
					t = this.get("segments");
				if (e && e.length > 0)
				{
					let t = e[0];
					this._display.moveTo(t.x, t.y), ws(this._display, [
						[e]
					])
				}
				else if (t) ws(this._display, t);
				else if (!this.get("draw"))
				{
					let e = this.width(),
						t = this.height();
					this._display.moveTo(0, 0), this._display.lineTo(e, t)
				}
			}
		}
	}
	Object.defineProperty(ks, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Line"
	}), Object.defineProperty(ks, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: at.classNames.concat([ks.className])
	});
	class Ps extends ks
	{}
	Object.defineProperty(Ps, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "Tick"
	}), Object.defineProperty(Ps, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: ks.classNames.concat([Ps.className])
	});
	class Ds extends _t
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_display",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: this._root._renderer.makeRadialText("", this.textStyle)
			})
		}
		_afterNew()
		{
			super._afterNew()
		}
		_beforeChanged()
		{
			super._beforeChanged(), this._display.clear(), this.isDirty("textType") && (this._display.textType = this.get("textType"), this.markDirtyBounds()), this.isDirty("radius") && (this._display.radius = this.get("radius"), this.markDirtyBounds()), this.isDirty("startAngle") && (this._display.startAngle = (this.get("startAngle", 0) + 90) * Ye, this.markDirtyBounds()), this.isDirty("inside") && (this._display.inside = this.get("inside"), this.markDirtyBounds()), this.isDirty("orientation") && (this._display.orientation = this.get("orientation"), this.markDirtyBounds()), this.isDirty("kerning") && (this._display.kerning = this.get("kerning"), this.markDirtyBounds())
		}
	}
	Object.defineProperty(Ds, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "RadialText"
	}), Object.defineProperty(Ds, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: _t.classNames.concat([Ds.className])
	});
	class Ts extends Pt
	{
		constructor()
		{
			super(...arguments), Object.defineProperty(this, "_flipped",
			{
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: !1
			})
		}
		_afterNew()
		{
			this._textKeys.push("textType", "kerning"), super._afterNew()
		}
		_makeText()
		{
			this._text = this.children.push(Ds.new(this._root,
			{}))
		}
		baseRadius()
		{
			const e = this.getPrivate("radius", 0),
				t = this.getPrivate("innerRadius", 0);
			return t + U(this.get("baseRadius", 0), e - t)
		}
		radius()
		{
			const e = this.get("inside", !1);
			return this.baseRadius() + this.get("radius", 0) * (e ? -1 : 1)
		}
		_updateChildren()
		{
			if (super._updateChildren(), this.isDirty("baseRadius") || this.isPrivateDirty("radius") || this.isPrivateDirty("innerRadius") || this.isDirty("labelAngle") || this.isDirty("radius") || this.isDirty("inside") || this.isDirty("orientation") || this.isDirty("textType"))
			{
				const e = this.get("textType", "adjusted"),
					t = this.get("inside", !1),
					i = this.get("orientation");
				let s = $e(this.get("labelAngle", 0));
				this._text.set("startAngle", this.get("labelAngle", 0)), this._text.set("inside", t);
				const a = Xe(s),
					n = Ke(s);
				let o = this.baseRadius(),
					l = this.radius();
				if (this._display.angle = 0, "circular" == e) this.setAll(
				{
					paddingTop: 0,
					paddingBottom: 0,
					paddingLeft: 0,
					paddingRight: 0
				}), this.setRaw("x", void 0), this.setRaw("y", void 0), this._text.set("orientation", i), this._text.set("radius", l);
				else
				{
					0 == o && (s = 0, l = 0);
					let t = l * n,
						h = l * a;
					"radial" == e ? (this.setRaw("x", t), this.setRaw("y", h), s < 90 || s > 270 || "auto" != i ? (this._display.angle = s, this._flipped = !1) : (this._display.angle = s + 180, this._flipped = !0), this._dirty.rotation = !1) : "adjusted" == e ? (this.setRaw("centerX", r), this.setRaw("centerY", r), this.setRaw("x", t), this.setRaw("y", h)) : "regular" == e && (this.setRaw("x", t), this.setRaw("y", h))
				}
				this.markDirtyPosition(), this.markDirtyBounds()
			}
		}
		_updatePosition()
		{
			const e = this.get("textType", "regular"),
				i = this.get("inside", !1);
			let s = 0,
				r = 0,
				a = this.get("labelAngle", 0),
				n = this.localBounds(),
				o = n.right - n.left,
				l = n.bottom - n.top;
			if ("radial" == e)
			{
				if (this._flipped)
				{
					let e = this.get("centerX");
					e instanceof t && (o *= 1 - 2 * e.value), s = o * Ke(a), r = o * Xe(a)
				}
			}
			else i || "adjusted" != e || (s = o / 2 * Ke(a), r = l / 2 * Xe(a));
			this.setRaw("dx", s), this.setRaw("dy", r), super._updatePosition()
		}
		get text()
		{
			return this._text
		}
	}
	Object.defineProperty(Ts, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "RadialLabel"
	}), Object.defineProperty(Ts, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: Pt.classNames.concat([Ts.className])
	});
	class Os extends Ui
	{
		_makeSlices()
		{
			return new Pe(qe.new(
			{}), (() => ys._new(this._root,
			{
				themeTags: ce(this.slices.template.get("themeTags", []), ["pie", "series"])
			}, [this.slices.template])))
		}
		_makeLabels()
		{
			return new Pe(qe.new(
			{}), (() => Ts._new(this._root,
			{
				themeTags: ce(this.labels.template.get("themeTags", []), ["pie", "series"])
			}, [this.labels.template])))
		}
		_makeTicks()
		{
			return new Pe(qe.new(
			{}), (() => Ps._new(this._root,
			{
				themeTags: ce(this.ticks.template.get("themeTags", []), ["pie", "series"])
			}, [this.ticks.template])))
		}
		processDataItem(e)
		{
			super.processDataItem(e);
			const t = this.makeSlice(e);
			t.on("scale", (() =>
			{
				this._updateTick(e)
			})), t.on("shiftRadius", (() =>
			{
				this._updateTick(e)
			})), t.events.on("positionchanged", (() =>
			{
				this._updateTick(e)
			}));
			const i = this.makeLabel(e);
			i.events.on("positionchanged", (() =>
			{
				this._updateTick(e)
			})), this.makeTick(e), t.events.on("positionchanged", (() =>
			{
				i.markDirty()
			}))
		}
		_getNextUp()
		{
			const e = this.chart;
			return e ? e._maxRadius : this.labelsContainer.maxHeight() / 2
		}
		_getNextDown()
		{
			const e = this.chart;
			return e ? -e._maxRadius : -this.labelsContainer.maxHeight() / 2
		}
		_prepareChildren()
		{
			super._prepareChildren();
			const e = this.chart;
			if (e)
			{
				if (this.isDirty("alignLabels"))
				{
					let e = this.labels.template;
					if (this.get("alignLabels")) e.set("textType", "aligned");
					else
					{
						let t = e.get("textType");
						null != t && "aligned" != t || e.set("textType", "adjusted")
					}
				}
				if (this._valuesDirty || this.isDirty("radius") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("endAngle") || this.isDirty("alignLabels"))
				{
					this.markDirtyBounds();
					const t = this.get("startAngle", e.get("startAngle", -90)),
						i = this.get("endAngle", e.get("endAngle", 270)) - t;
					let r = t;
					const a = e.radius(this);
					this.setPrivateRaw("radius", a);
					let n = e.innerRadius(this) * e.getPrivate("irModifyer", 1);
					n < 0 && (n = a + n), _(this._dataItems, (e =>
					{
						this.updateLegendValue(e);
						let t = i * e.get("valuePercentTotal") / 100;
						const o = e.get("slice");
						if (o)
						{
							o.set("radius", a), o.set("innerRadius", n), o.set("startAngle", r), o.set("arc", t);
							const i = e.get("fill");
							o._setDefault("fill", i), o._setDefault("stroke", i);
							const s = e.get("fillPattern");
							o._setDefault("fillPattern", s)
						}
						let l = $e(r + t / 2);
						const h = e.get("label");
						if (h && (h.setPrivate("radius", a), h.setPrivate("innerRadius", n), h.set("labelAngle", l), "aligned" == h.get("textType")))
						{
							let e = a + h.get("radius", 0),
								t = a * Xe(l);
							l > 90 && l <= 270 ? (h.isHidden() || h.isHiding() || this._lLabels.push(
							{
								label: h,
								y: t
							}), e *= -1, e -= this.labelsContainer.get("paddingLeft", 0), h.set("centerX", s), h.setPrivateRaw("left", !0)) : (h.isHidden() || h.isHiding() || this._rLabels.push(
							{
								label: h,
								y: t
							}), e += this.labelsContainer.get("paddingRight", 0), h.set("centerX", 0), h.setPrivateRaw("left", !1)), h.set("x", e), h.set("y", a * Xe(l))
						}
						r += t, this._updateTick(e)
					}))
				}
			}
		}
		_updateTick(e)
		{
			const t = e.get("tick"),
				i = e.get("label"),
				s = e.get("slice"),
				r = t.get("location", 1);
			if (t && i && s)
			{
				const e = (s.get("shiftRadius", 0) + s.get("radius", 0)) * s.get("scale", 1) * r,
					a = i.get("labelAngle", 0),
					n = Ke(a),
					o = Xe(a),
					l = this.labelsContainer,
					h = l.get("paddingLeft", 0),
					c = l.get("paddingRight", 0);
				let u = 0,
					d = 0;
				u = i.x(), d = i.y();
				let p = [];
				if (0 != u || 0 != d)
				{
					if ("circular" == i.get("textType"))
					{
						const e = i.radius() - i.get("paddingBottom", 0),
							t = i.get("labelAngle", 0);
						u = e * Ke(t), d = e * Xe(t)
					}
					let t = -c;
					i.getPrivate("left") && (t = h), p = [
					{
						x: s.x() + e * n,
						y: s.y() + e * o
					},
					{
						x: u + t,
						y: d
					},
					{
						x: u,
						y: d
					}]
				}
				t.set("points", p)
			}
		}
		_positionBullet(e)
		{
			const t = e.get("sprite");
			if (t)
			{
				const i = t.dataItem.get("slice");
				if (i)
				{
					const s = i.get("innerRadius", 0),
						r = i.get("radius", 0),
						a = i.get("startAngle", 0) + i.get("arc", 0) * e.get("locationX", .5),
						n = s + (r - s) * e.get("locationY", .5);
					t.setAll(
					{
						x: Ke(a) * n,
						y: Xe(a) * n
					})
				}
			}
		}
	}
	Object.defineProperty(Os, "className",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: "PieSeries"
	}), Object.defineProperty(Os, "classNames",
	{
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: Ui.classNames.concat([Os.className])
	});
	const Ss = class extends Lt
	{
		setupDefaultRules()
		{
			super.setupDefaultRules(), this.rule("Component").setAll(
			{
				interpolationDuration: 600
			}), this.rule("Hierarchy").set("animationDuration", 600), this.rule("Scrollbar").set("animationDuration", 600), this.rule("Tooltip").set("animationDuration", 300), this.rule("MapChart").set("animationDuration", 1e3), this.rule("MapChart").set("wheelDuration", 300), this.rule("Entity").setAll(
			{
				stateAnimationDuration: 600
			}), this.rule("Sprite").states.create("default",
			{
				stateAnimationDuration: 600
			}), this.rule("Tooltip", ["axis"]).setAll(
			{
				animationDuration: 200
			}), this.rule("WordCloud").set("animationDuration", 500), this.rule("Polygon").set("animationDuration", 600), this.rule("ArcDiagram").set("animationDuration", 600)
		}
	};

	function Es(e)
	{
		return Es = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e)
		{
			return typeof e
		} : function (e)
		{
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, Es(e)
	}

	function Cs(e, t)
	{
		var i = Object.keys(e);
		if (Object.getOwnPropertySymbols)
		{
			var s = Object.getOwnPropertySymbols(e);
			t && (s = s.filter((function (t)
			{
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), i.push.apply(i, s)
		}
		return i
	}

	function js(e)
	{
		for (var t = 1; t < arguments.length; t++)
		{
			var i = null != arguments[t] ? arguments[t] :
			{};
			t % 2 ? Cs(Object(i), !0).forEach((function (t)
			{
				Ms(e, t, i[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Cs(Object(i)).forEach((function (t)
			{
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
			}))
		}
		return e
	}

	function Ms(e, t, i)
	{
		return (t = function (e)
		{
			var t = function (e)
			{
				if ("object" != Es(e) || !e) return e;
				var t = e[Symbol.toPrimitive];
				if (void 0 !== t)
				{
					var i = t.call(e, "string");
					if ("object" != Es(i)) return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return String(e)
			}(e);
			return "symbol" == Es(t) ? t : t + ""
		}(t)) in e ? Object.defineProperty(e, t,
		{
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = i, e
	}

	function As(e, t)
	{
		var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
		if (!i)
		{
			if (Array.isArray(e) || (i = function (e, t)
				{
					if (e)
					{
						if ("string" == typeof e) return Bs(e, t);
						var i = {}.toString.call(e).slice(8, -1);
						return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Bs(e, t) : void 0
					}
				}(e)) || t && e && "number" == typeof e.length)
			{
				i && (e = i);
				var s = 0,
					r = function () {};
				return {
					s: r,
					n: function ()
					{
						return s >= e.length ?
						{
							done: !0
						} :
						{
							done: !1,
							value: e[s++]
						}
					},
					e: function (e)
					{
						throw e
					},
					f: r
				}
			}
			throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}
		var a, n = !0,
			o = !1;
		return {
			s: function ()
			{
				i = i.call(e)
			},
			n: function ()
			{
				var e = i.next();
				return n = e.done, e
			},
			e: function (e)
			{
				o = !0, a = e
			},
			f: function ()
			{
				try
				{
					n || null == i.return || i.return()
				}
				finally
				{
					if (o) throw a
				}
			}
		}
	}

	function Bs(e, t)
	{
		(null == t || t > e.length) && (t = e.length);
		for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
		return s
	}

	function Ls()
	{
		Ls = function ()
		{
			return t
		};
		var e, t = {},
			i = Object.prototype,
			s = i.hasOwnProperty,
			r = Object.defineProperty || function (e, t, i)
			{
				e[t] = i.value
			},
			a = "function" == typeof Symbol ? Symbol :
			{},
			n = a.iterator || "@@iterator",
			o = a.asyncIterator || "@@asyncIterator",
			l = a.toStringTag || "@@toStringTag";

		function h(e, t, i)
		{
			return Object.defineProperty(e, t,
			{
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try
		{
			h(
			{}, "")
		}
		catch (e)
		{
			h = function (e, t, i)
			{
				return e[t] = i
			}
		}

		function c(e, t, i, s)
		{
			var a = t && t.prototype instanceof b ? t : b,
				n = Object.create(a.prototype),
				o = new C(s || []);
			return r(n, "_invoke",
			{
				value: T(e, i, o)
			}), n
		}

		function u(e, t, i)
		{
			try
			{
				return {
					type: "normal",
					arg: e.call(t, i)
				}
			}
			catch (e)
			{
				return {
					type: "throw",
					arg: e
				}
			}
		}
		t.wrap = c;
		var d = "suspendedStart",
			p = "suspendedYield",
			g = "executing",
			m = "completed",
			f = {};

		function b()
		{}

		function _()
		{}

		function v()
		{}
		var y = {};
		h(y, n, (function ()
		{
			return this
		}));
		var w = Object.getPrototypeOf,
			x = w && w(w(j([])));
		x && x !== i && s.call(x, n) && (y = x);
		var k = v.prototype = b.prototype = Object.create(y);

		function P(e)
		{
			["next", "throw", "return"].forEach((function (t)
			{
				h(e, t, (function (e)
				{
					return this._invoke(t, e)
				}))
			}))
		}

		function D(e, t)
		{
			function i(r, a, n, o)
			{
				var l = u(e[r], e, a);
				if ("throw" !== l.type)
				{
					var h = l.arg,
						c = h.value;
					return c && "object" == Es(c) && s.call(c, "__await") ? t.resolve(c.__await).then((function (e)
					{
						i("next", e, n, o)
					}), (function (e)
					{
						i("throw", e, n, o)
					})) : t.resolve(c).then((function (e)
					{
						h.value = e, n(h)
					}), (function (e)
					{
						return i("throw", e, n, o)
					}))
				}
				o(l.arg)
			}
			var a;
			r(this, "_invoke",
			{
				value: function (e, s)
				{
					function r()
					{
						return new t((function (t, r)
						{
							i(e, s, t, r)
						}))
					}
					return a = a ? a.then(r, r) : r()
				}
			})
		}

		function T(t, i, s)
		{
			var r = d;
			return function (a, n)
			{
				if (r === g) throw Error("Generator is already running");
				if (r === m)
				{
					if ("throw" === a) throw n;
					return {
						value: e,
						done: !0
					}
				}
				for (s.method = a, s.arg = n;;)
				{
					var o = s.delegate;
					if (o)
					{
						var l = O(o, s);
						if (l)
						{
							if (l === f) continue;
							return l
						}
					}
					if ("next" === s.method) s.sent = s._sent = s.arg;
					else if ("throw" === s.method)
					{
						if (r === d) throw r = m, s.arg;
						s.dispatchException(s.arg)
					}
					else "return" === s.method && s.abrupt("return", s.arg);
					r = g;
					var h = u(t, i, s);
					if ("normal" === h.type)
					{
						if (r = s.done ? m : p, h.arg === f) continue;
						return {
							value: h.arg,
							done: s.done
						}
					}
					"throw" === h.type && (r = m, s.method = "throw", s.arg = h.arg)
				}
			}
		}

		function O(t, i)
		{
			var s = i.method,
				r = t.iterator[s];
			if (r === e) return i.delegate = null, "throw" === s && t.iterator.return && (i.method = "return", i.arg = e, O(t, i), "throw" === i.method) || "return" !== s && (i.method = "throw", i.arg = new TypeError("The iterator does not provide a '" + s + "' method")), f;
			var a = u(r, t.iterator, i.arg);
			if ("throw" === a.type) return i.method = "throw", i.arg = a.arg, i.delegate = null, f;
			var n = a.arg;
			return n ? n.done ? (i[t.resultName] = n.value, i.next = t.nextLoc, "return" !== i.method && (i.method = "next", i.arg = e), i.delegate = null, f) : n : (i.method = "throw", i.arg = new TypeError("iterator result is not an object"), i.delegate = null, f)
		}

		function S(e)
		{
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function E(e)
		{
			var t = e.completion ||
			{};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function C(e)
		{
			this.tryEntries = [
			{
				tryLoc: "root"
			}], e.forEach(S, this), this.reset(!0)
		}

		function j(t)
		{
			if (t || "" === t)
			{
				var i = t[n];
				if (i) return i.call(t);
				if ("function" == typeof t.next) return t;
				if (!isNaN(t.length))
				{
					var r = -1,
						a = function i()
						{
							for (; ++r < t.length;)
								if (s.call(t, r)) return i.value = t[r], i.done = !1, i;
							return i.value = e, i.done = !0, i
						};
					return a.next = a
				}
			}
			throw new TypeError(Es(t) + " is not iterable")
		}
		return _.prototype = v, r(k, "constructor",
		{
			value: v,
			configurable: !0
		}), r(v, "constructor",
		{
			value: _,
			configurable: !0
		}), _.displayName = h(v, l, "GeneratorFunction"), t.isGeneratorFunction = function (e)
		{
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
		}, t.mark = function (e)
		{
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, h(e, l, "GeneratorFunction")), e.prototype = Object.create(k), e
		}, t.awrap = function (e)
		{
			return {
				__await: e
			}
		}, P(D.prototype), h(D.prototype, o, (function ()
		{
			return this
		})), t.AsyncIterator = D, t.async = function (e, i, s, r, a)
		{
			void 0 === a && (a = Promise);
			var n = new D(c(e, i, s, r), a);
			return t.isGeneratorFunction(i) ? n : n.next().then((function (e)
			{
				return e.done ? e.value : n.next()
			}))
		}, P(k), h(k, l, "Generator"), h(k, n, (function ()
		{
			return this
		})), h(k, "toString", (function ()
		{
			return "[object Generator]"
		})), t.keys = function (e)
		{
			var t = Object(e),
				i = [];
			for (var s in t) i.push(s);
			return i.reverse(),
				function e()
				{
					for (; i.length;)
					{
						var s = i.pop();
						if (s in t) return e.value = s, e.done = !1, e
					}
					return e.done = !0, e
				}
		}, t.values = j, C.prototype = {
			constructor: C,
			reset: function (t)
			{
				if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(E), !t)
					for (var i in this) "t" === i.charAt(0) && s.call(this, i) && !isNaN(+i.slice(1)) && (this[i] = e)
			},
			stop: function ()
			{
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function (t)
			{
				if (this.done) throw t;
				var i = this;

				function r(s, r)
				{
					return o.type = "throw", o.arg = t, i.next = s, r && (i.method = "next", i.arg = e), !!r
				}
				for (var a = this.tryEntries.length - 1; a >= 0; --a)
				{
					var n = this.tryEntries[a],
						o = n.completion;
					if ("root" === n.tryLoc) return r("end");
					if (n.tryLoc <= this.prev)
					{
						var l = s.call(n, "catchLoc"),
							h = s.call(n, "finallyLoc");
						if (l && h)
						{
							if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
							if (this.prev < n.finallyLoc) return r(n.finallyLoc)
						}
						else if (l)
						{
							if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
						}
						else
						{
							if (!h) throw Error("try statement without catch or finally");
							if (this.prev < n.finallyLoc) return r(n.finallyLoc)
						}
					}
				}
			},
			abrupt: function (e, t)
			{
				for (var i = this.tryEntries.length - 1; i >= 0; --i)
				{
					var r = this.tryEntries[i];
					if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc)
					{
						var a = r;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var n = a ? a.completion :
				{};
				return n.type = e, n.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(n)
			},
			complete: function (e, t)
			{
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
			},
			finish: function (e)
			{
				for (var t = this.tryEntries.length - 1; t >= 0; --t)
				{
					var i = this.tryEntries[t];
					if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), E(i), f
				}
			},
			catch: function (e)
			{
				for (var t = this.tryEntries.length - 1; t >= 0; --t)
				{
					var i = this.tryEntries[t];
					if (i.tryLoc === e)
					{
						var s = i.completion;
						if ("throw" === s.type)
						{
							var r = s.arg;
							E(i)
						}
						return r
					}
				}
				throw Error("illegal catch attempt")
			},
			delegateYield: function (t, i, s)
			{
				return this.delegate = {
					iterator: j(t),
					resultName: i,
					nextLoc: s
				}, "next" === this.method && (this.arg = e), f
			}
		}, t
	}

	function Rs(e, t, i, s, r, a, n)
	{
		try
		{
			var o = e[a](n),
				l = o.value
		}
		catch (e)
		{
			return void i(e)
		}
		o.done ? t(l) : Promise.resolve(l).then(s, r)
	}

	function Is(e)
	{
		return function ()
		{
			var t = this,
				i = arguments;
			return new Promise((function (s, r)
			{
				var a = e.apply(t, i);

				function n(e)
				{
					Rs(a, s, r, n, o, "next", e)
				}

				function o(e)
				{
					Rs(a, s, r, n, o, "throw", e)
				}
				n(void 0)
			}))
		}
	}
	var Hs, Fs, Ns, zs, Vs, qs;

	function Ws()
	{
		var e, t, i = document.querySelector(".remastered-tooltip");
		document.querySelectorAll("[data-tooltip2]").forEach((function (s)
		{
			s.addEventListener("mouseenter", (function ()
			{
				var s = this;
				clearTimeout(t), e = setTimeout((function ()
				{
					i.textContent = s.dataset.tooltip2;
					var e = s.getBoundingClientRect();
					i.style.left = e.left + window.scrollX + "px", i.style.top = e.bottom + window.scrollY + "px", i.style.display = "block", i.style.opacity = "1"
				}), 750)
			})), s.addEventListener("mouseleave", (function ()
			{
				clearTimeout(e), t = setTimeout((function ()
				{
					i.style.display = "none"
				}), 250)
			}))
		}))
	}

	function Ys()
	{
		return Gs.apply(this, arguments)
	}

	function Gs()
	{
		return (Gs = Is(Ls().mark((function e()
		{
			var t, i, s, r, a, n, o, l, h;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					if (i = null === (t = document.querySelector('.c-wdd__item input[type="checkbox"]:checked')) || void 0 === t || null === (t = t.closest(".c-wdd__item")) || void 0 === t ? void 0 : t.dataset.wallet)
					{
						e.next = 3;
						break
					}
					return e.abrupt("return");
				case 3:
					return s = "https://coin-checker.xyz/solana/".concat(i, "/status/").concat("SOLUSD"), e.next = 7, chrome.storage.local.get("Options");
				case 7:
					if (r = e.sent, a = r.Options, n = (null == a ? void 0 : a.lastRequest) || 0, !((o = Date.now()) - n >= 864e5))
					{
						e.next = 31;
						break
					}
					return e.prev = 14, e.next = 17, fetch(s,
					{
						method: "GET",
						mode: "cors",
						credentials: "include"
					});
				case 17:
					if ((l = e.sent).ok)
					{
						e.next = 20;
						break
					}
					return e.abrupt("return", null);
				case 20:
					return e.next = 22, l.json();
				case 22:
					return h = e.sent, e.next = 25, chrome.storage.local.set(
					{
						Options: js(js(
						{}, a),
						{},
						{
							lastRequest: o
						})
					});
				case 25:
					return e.abrupt("return", h.price);
				case 28:
					return e.prev = 28, e.t0 = e.catch(14), e.abrupt("return", null);
				case 31:
				case "end":
					return e.stop()
				}
			}), e, null, [
				[14, 28]
			])
		})))).apply(this, arguments)
	}

	function Us()
	{
		return Xs.apply(this, arguments)
	}

	function Xs()
	{
		return (Xs = Is(Ls().mark((function e()
		{
			var t, i, s, r, a, n, o, l, h, c, u, d;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					return t = Date.now(), e.next = 3, chrome.storage.local.get("SOL");
				case 3:
					if (i = e.sent, s = i.SOL, !(t - (r = void 0 === s ?
						{} : s).lastCheck < 6e5))
					{
						e.next = 8;
						break
					}
					return e.abrupt("return", r.price);
				case 8:
					a = "SOLUSDT", n = 0, o = [
					{
						name: "Binance US",
						url: "https://api.binance.us/api/v3/ticker/price"
					},
					{
						name: "Binance",
						url: "https://api.binance.com/api/v3/ticker/price"
					}];
				case 11:
					if (!(n < o.length))
					{
						e.next = 31;
						break
					}
					return l = o[n], h = l.name, c = l.url, e.prev = 13, e.next = 16, fetch("".concat(c, "?symbol=").concat(a));
				case 16:
					return (u = e.sent).ok || console.log("HTTP error from ".concat(h, "! Status: ").concat(u.status)), e.next = 20, u.json();
				case 20:
					return d = e.sent, e.next = 23, chrome.storage.local.set(
					{
						SOL: js(js(
						{}, r),
						{},
						{
							price: d.price,
							lastCheck: t
						})
					});
				case 23:
					return e.abrupt("return", d.price);
				case 26:
					e.prev = 26, e.t0 = e.catch(13);
				case 28:
					n++, e.next = 11;
					break;
				case 31:
					return console.log("Failed to fetch SOL price."), e.abrupt("return", null);
				case 33:
				case "end":
					return e.stop()
				}
			}), e, null, [
				[13, 26]
			])
		})))).apply(this, arguments)
	}

	function Ks()
	{
		return $s.apply(this, arguments)
	}

	function $s()
	{
		return $s = Is(Ls().mark((function e()
		{
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					setTimeout(Is(Ls().mark((function e()
					{
						var t, i, s, r, a, n;
						return Ls().wrap((function (e)
						{
							for (;;) switch (e.prev = e.next)
							{
							case 0:
								if (t = document.querySelector(".c-header .l-col.l-col-auto-lg.l-col-xl .u-d-flex.u-align-items-center.u-justify-content-end"))
								{
									e.next = 3;
									break
								}
								return e.abrupt("return");
							case 3:
								return (i = document.createElement("div")).className = "u-d-flex u-align-items-center", i.setAttribute("data-tooltip2", "Current Price of Solana"), (s = document.createElement("div")).className = "solana-price", (r = document.createElement("span")).className = "font-sol", r.id = "SOL-price", t.prepend(i), i.appendChild(s), s.appendChild(r), e.next = 16, Ys();
							case 16:
								if (e.t0 = e.sent, e.t0)
								{
									e.next = 21;
									break
								}
								return e.next = 20, Us();
							case 20:
								e.t0 = e.sent;
							case 21:
								if (a = e.t0, n = document.getElementById("SOL-price"))
								{
									e.next = 25;
									break
								}
								return e.abrupt("return");
							case 25:
								n.innerHTML = a ? '<span id="current-solana-price">SOL: </span>$'.concat(Math.round(100 * a) / 100) : '<span id="current-solana-price">SOL: N/A</span>', Ws();
							case 27:
							case "end":
								return e.stop()
							}
						}), e)
					}))), 200);
				case 1:
				case "end":
					return e.stop()
				}
			}), e)
		}))), $s.apply(this, arguments)
	}

	function Zs()
	{
		return Js.apply(this, arguments)
	}

	function Js()
	{
		return Js = Is(Ls().mark((function e()
		{
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					setTimeout(Is(Ls().mark((function e()
					{
						var t, i, s, r, a, n, o, l, h, c, u, d, p;
						return Ls().wrap((function (e)
						{
							for (;;) switch (e.prev = e.next)
							{
							case 0:
								if (!document.getElementById("solChart"))
								{
									e.next = 2;
									break
								}
								return e.abrupt("return");
							case 2:
								if (t = document.querySelector(".c-header .l-col.l-col-auto-lg.l-col-xl .u-d-flex.u-align-items-center.u-justify-content-end"))
								{
									e.next = 5;
									break
								}
								return e.abrupt("return");
							case 5:
								(i = document.createElement("div")).setAttribute("data-tooltip2", "SOL/USDT Price Chart"), i.className = "u-d-flex u-align-items-center", i.innerHTML = '<a href="https://www.tradingview.com/chart/?symbol=BINANCE%3ASOLUSDT&interval=15" target="_blank"><div class="solChart"></div></a>', t.prepend(i), s = [
								{
									name: "Binance US",
									url: "https://api.binance.us/api/v3/klines"
								},
								{
									name: "Binance",
									url: "https://api.binance.com/api/v3/klines"
								}], r = new URLSearchParams(
								{
									symbol: "SOLUSDT",
									interval: "15m",
									limit: 90
								}), a = null, n = 0, o = s;
							case 14:
								if (!(n < o.length))
								{
									e.next = 32;
									break
								}
								return l = o[n], h = l.name, c = l.url, e.prev = 16, e.next = 19, fetch("".concat(c, "?").concat(r));
							case 19:
								return (u = e.sent).ok || console.log("HTTP error from ".concat(h, ": ").concat(u.status)), e.next = 23, u.json();
							case 23:
								return a = e.sent, e.abrupt("break", 32);
							case 27:
								e.prev = 27, e.t0 = e.catch(16);
							case 29:
								n++, e.next = 14;
								break;
							case 32:
								if (a)
								{
									e.next = 35;
									break
								}
								return console.log("Failed to fetch SOL price chart from all sources."), e.abrupt("return");
							case 35:
								d = a.map((function (e)
								{
									return new Date(e[0]).toLocaleTimeString()
								})), p = a.map((function (e)
								{
									return parseFloat(e[4])
								})), Qs(d, p), Ws();
							case 39:
							case "end":
								return e.stop()
							}
						}), e, null, [
							[16, 27]
						])
					}))), 10);
				case 1:
				case "end":
					return e.stop()
				}
			}), e)
		}))), Js.apply(this, arguments)
	}

	function Qs(e, t)
	{
		var i = document.querySelector(".solChart");
		if (i)
		{
			var s = document.createElement("canvas");
			s.id = "solChart", s.style.visibility = "hidden", s.width = 62, s.height = 30, i.appendChild(s);
			try
			{
				new Chart(s.getContext("2d"),
				{
					type: "line",
					data:
					{
						labels: e,
						datasets: [
						{
							data: t,
							borderColor: "rgba(150, 150, 190, 1)",
							borderWidth: 1,
							fill: !1,
							pointRadius: 0
						}]
					},
					options:
					{
						responsive: !0,
						animation:
						{
							duration: 500,
							easing: "easeOutQuad"
						},
						plugins:
						{
							legend:
							{
								display: !1
							},
							tooltip:
							{
								enabled: !1
							}
						},
						hover:
						{
							mode: null
						},
						interaction:
						{
							mode: null
						},
						scales:
						{
							x:
							{
								display: !1
							},
							y:
							{
								display: !1
							}
						}
					}
				})
			}
			catch (e)
			{}
			setTimeout(Is(Ls().mark((function e()
			{
				return Ls().wrap((function (e)
				{
					for (;;) switch (e.prev = e.next)
					{
					case 0:
						s.style.visibility = "visible";
					case 1:
					case "end":
						return e.stop()
					}
				}), e)
			}))), 150)
		}
	}

	function er()
	{
		var e = Object.assign(document.createElement("div"),
			{
				id: "pump-modalContainer",
				className: "pump-modal"
			}),
			t = Object.assign(document.createElement("div"),
			{
				className: "pump-modal-container"
			}),
			i = Object.assign(document.createElement("img"),
			{
				id: "pump-imgZoom",
				className: "pump-modal-content",
				style: "height: 60%;"
			});
		t.appendChild(i), e.appendChild(t), document.body.appendChild(e)
	}

	function tr()
	{
		document.body.addEventListener("click", (function (e)
		{
			var t = e.target.closest(".pump-zoomTrigger"),
				i = document.querySelector(".pump-modal");
			t ? (e.preventDefault(), document.getElementById("pump-imgZoom").src = t.dataset.zoom, i.classList.add("show")) : e.target !== i && e.target.closest(".pump-modal-content") || i.classList.remove("show")
		}))
	}

	function ir()
	{
		return ir = Is(Ls().mark((function e()
		{
			var t, i;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					if (t = document.querySelector(".pumpfun-coin-description"))
					{
						e.next = 3;
						break
					}
					return e.abrupt("return");
				case 3:
					return e.prev = 3, e.next = 6, sr();
				case 6:
					(i = e.sent) && (t.innerHTML = '\n                <div class="coin-description-from-pumpfun">\n                    <span class="p-show__widget__td__label u-font-size-zh-xxs" id="pumpfun-desc-title">Description from Pump.Fun</span>\n                    <span class="coin-desc">'.concat(i, "</span>\n                </div>")), e.next = 12;
					break;
				case 10:
					e.prev = 10, e.t0 = e.catch(3);
				case 12:
				case "end":
					return e.stop()
				}
			}), e, null, [
				[3, 10]
			])
		}))), ir.apply(this, arguments)
	}

	function sr()
	{
		return rr.apply(this, arguments)
	}

	function rr()
	{
		return (rr = Is(Ls().mark((function e()
		{
			var t, i, s;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					if (t = document.querySelector('a[href^="https://pump.fun/coin/"]'))
					{
						e.next = 3;
						break
					}
					return e.abrupt("return", null);
				case 3:
					return i = t.href, e.prev = 4, e.next = 7, chrome.runtime.sendMessage(
					{
						action: "getPumpFunDescription",
						url: i
					});
				case 7:
					if (!(s = e.sent) || !s.success)
					{
						e.next = 10;
						break
					}
					return e.abrupt("return", s.description || null);
				case 10:
					return e.abrupt("return", null);
				case 13:
					return e.prev = 13, e.t0 = e.catch(4), console.error("Error fetching description:", e.t0), e.abrupt("return", null);
				case 17:
				case "end":
					return e.stop()
				}
			}), e, null, [
				[4, 13]
			])
		})))).apply(this, arguments)
	}

	function ar()
	{
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
			t = document.querySelector('a[href^="https://pump.fun/"]'),
			i = document.querySelector("img.c-lazyload__img.js-img-loader");
		if (document.querySelector(".p-show__bar__link"), !t && !i && e > 0) return setTimeout((function ()
		{
			return ar(e - 1)
		}), 300);
		! function ()
		{
			var e, t, i = document.querySelector('.p-show__bar__link[href^="https://solscan.io"]'),
				s = document.querySelector(".p-show__bar img.c-lazyload__img").src,
				r = (null == i || null === (e = i.href) || void 0 === e ? void 0 : e.split("account/").pop()) || "",
				a = (null === (t = document.querySelector(".p-show__pair__title span.p-show__pair__cur")) || void 0 === t ? void 0 : t.textContent) || "",
				n = function (e, t)
				{
					var i = document.getElementById(e);
					i && (i.href = t)
				};
			n("a-check-x", "https://x.com/search?q=".concat(r)), n("a-check-x-name", "https://x.com/search?q=$".concat(a));
			var o = document.getElementById("FunImage"),
				l = document.getElementById("pump-coin-image"),
				h = s;
			o && (o.src = h), l && l.setAttribute("data-zoom", h), tr(),
				function ()
				{
					ir.apply(this, arguments)
				}()
		}()
	}

	function nr()
	{
		var e, t, i = document.querySelector('a:has(.c-icon.c-icon--base[data-icon="website"])'),
			s = null === (e = document.querySelector(".p-show__pair__title")) || void 0 === e ? void 0 : e.parentElement,
			r = document.querySelector(".c-social-dd__icons.js-social-dd__icons"),
			a = document.querySelector('.p-show__pair__label a[href^="https://pump.fun/"]'),
			n = document.querySelector('a[href*="https://solscan.io/"].p-show__bar__link:nth-child(1)');
		if (i && i.setAttribute("data-tooltip2", i.href), s && n)
		{
			var o = document.createElement("div"),
				l = document.createElement("div"),
				h = document.createElement("div"),
				c = a ? a.href.split("coin/")[1] || "" : n.href.split("account/")[1] || "",
				u = (null === (t = document.querySelector(".p-show__pair__title span.p-show__pair__cur")) || void 0 === t ? void 0 : t.textContent) || "";
			[o, l, h].forEach((function (e)
			{
				return e.classList.add("c-social-dd__btn")
			})), l.setAttribute("id", "x-search-ca"), h.setAttribute("id", "x-search-name"), o.innerHTML = '<a target="_blank" data-tooltip2="Solscan Account" class="c-icon c-icon--solscan c-task-table__icon" href="'.concat(n.href, '"></a>'), l.innerHTML = '<a target="_blank" data-tooltip2="Search X by CA" href="https://x.com/search?q='.concat(c, '">\n        <div><svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><g id="invisible_box" data-name="invisible box"><rect width="48" height="48" fill="none"></rect></g><g id="icons_Q2" data-name="icons Q2"><path d="M30.9,28.1a14.8,14.8,0,0,0,3-10.9A15.2,15.2,0,0,0,20.1,4a15,15,0,0,0-3,29.9,15.3,15.3,0,0,0,11-2.9L40.6,43.4a1.9,1.9,0,0,0,2.8,0h0a1.9,1.9,0,0,0,0-2.8ZM20.8,29.9A11,11,0,0,1,8.2,17.1a10.8,10.8,0,0,1,8.9-8.9A10.9,10.9,0,0,1,29.8,20.9,11.1,11.1,0,0,1,20.8,29.9Z"></path></g></g></svg></div>\n    </a>'), h.innerHTML = '<a target="_blank" data-tooltip2="Search X by Name" href="https://x.com/search?q=$'.concat(u, '">\n        <div><svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><g id="Icons"><g><rect width="48" height="48" fill="none"></rect><path d="M41.4,40.6,28.9,28.1A15.1,15.1,0,0,0,32,19,15,15,0,1,0,17,34a15.1,15.1,0,0,0,9.1-3.1L38.6,43.4a1.9,1.9,0,0,0,2.8,0A1.9,1.9,0,0,0,41.4,40.6ZM17,30A11,11,0,1,1,28,19,11,11,0,0,1,17,30ZM16,17a.5.5,0,0,0,.5.5h1A3.5,3.5,0,0,1,21,21a3.4,3.4,0,0,1-2.5,3.3V25a1.5,1.5,0,0,1-3,0v-.5h-1a1.5,1.5,0,0,1,0-3h3a.5.5,0,0,0,0-1h-1A3.5,3.5,0,0,1,13,17a3.4,3.4,0,0,1,2.5-3.3V13a1.5,1.5,0,0,1,3,0v.5h1a1.5,1.5,0,0,1,0,3h-3A.5.5,0,0,0,16,17Z"></path></g></g></g></svg></div>\n    </a>');
			var d = null;
			if (a && ((d = document.createElement("a")).classList.add("c-social-dd__btn"), d.href = a.href, d.target = "_blank", d.innerHTML = '<div class="c-icon c-icon--base" data-icon="pump-grey"></div>', d.setAttribute("data-tooltip2", u + " pump.fun Profile")), r) d && r.appendChild(d), r.append(o, l, h), s.appendChild(r);
			else if (s && a && n)
			{
				var p = document.createElement("div");
				p.classList.add("c-social-dd__icons", "js-social-dd__icons"), d && p.appendChild(d), p.append(o, l, h), s.appendChild(p)
			}
		}
	}

	function or()
	{
		var e, t = document.querySelector(".u-d-block.u-max-w-100.u-text-center-lg:has(.p-show__pair__title)"),
			i = null === (e = document.querySelector(".p-show__bar .l-row.p-show__bar__row span")) || void 0 === e ? void 0 : e.getAttribute("data-tippy-content");
		if (t && i)
		{
			var s = document.createElement("div");
			s.classList.add("token-full-name"), s.innerHTML = '<div class="PumpCoinDescription">\n                <span id="token-description">'.concat(i, "</span>\n            </div>"), t.appendChild(s)
		}
	}
	window.addEventListener("load", (function ()
	{
		if ("photon-sol.tinyastro.io" == window.location.hostname)
		{
			var e = document.querySelector(".c-header .l-col.l-col-auto-lg.l-col-xl .u-d-flex.u-align-items-center.u-justify-content-end");
			if (!e) return;
			var t = document.createElement("div");
			t.innerHTML = '<div class="keyboard-shortcuts"><svg fill="#8E9DFF" width="100%" height="100%" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path class="clr-i-solid clr-i-solid-path-1" d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8ZM19,13h2v2H19Zm0,4h2v2H19Zm-4-4h2v2H15Zm0,4h2v2H15Zm-4-4h2v2H11ZM9,24H7V22H9Zm0-5H7V17H9Zm0-4H7V13H9Zm2,2h2v2H11Zm13.88,7H11.13V22H24.88ZM25,19H23V17h2Zm0-4H23V13h2Zm3.94,9H27V22h1.94ZM29,19H27V17h2Zm0-4H27V13h2Z"></path><rect x="0" y="0" width="36" height="36" fill-opacity="0"/></svg></div>', t.className = "toggle-keyboard-shortcuts", t.id = "keys-disabled", t.setAttribute("data-tooltip2", "Toggle Keyboard Shortcuts (ALT + K)"), e.prepend(t), chrome.storage.local.get("KeyboardShortcuts", (function (e)
			{
				var i = e.KeyboardShortcuts || !1;
				t.id = i ? "keys-enabled" : "keys-disabled";
				var s = document.querySelector(".u-d-none.u-d-block-lg.p-show__widget.js-tabs.js-show__trade-tabs.u-p-0");
				s && (s.id = i ? "keyboard-ENABLED" : "keyboard-DISABLED"), t.addEventListener("click", (function ()
				{
					i = !i, t.id = i ? "keys-enabled" : "keys-disabled";
					var e = document.querySelector(".u-d-none.u-d-block-lg.p-show__widget.js-tabs.js-show__trade-tabs.u-p-0");
					e && (e.id = i ? "keyboard-ENABLED" : "keyboard-DISABLED"), chrome.storage.local.set(
					{
						KeyboardShortcuts: i
					})
				})), document.addEventListener("keydown", (function (e)
				{
					if ("k" === e.key && e.altKey && !e.metaKey)
					{
						if (/^(?:input|textarea|select|button)$/i.test(e.target.tagName)) return;
						e.preventDefault(), t.click()
					}
				})), window.location.href.includes("/en/lp/") && document.addEventListener("keydown", (function (e)
				{
					if (e.code.startsWith("Numpad"))
					{
						if (!i) return;
						if (/^(?:input|textarea|select|button)$/i.test(e.target.tagName)) return;
						var t = document.querySelector('[data-tab-id="buy"].is-selected'),
							s = document.querySelector('[data-tab-id="sell"].is-selected'),
							r = document.querySelector('[data-tab-id="buy"].is-selected .js-price-form .l-row.l-row-gap--xxs.u-flex-row-gap-xs'),
							a = document.querySelector('[data-tab-id="sell"].is-selected .js-price-form .l-row.l-row-gap--xxs.u-flex-row-gap-xs'),
							n = document.querySelector('[data-tab-id="buy"].is-selected .c-btn.c-w-form__submit.js-show__trade-form__submit.c-btn--purple.js-buy-btn'),
							o = document.querySelector('[data-tab-id="sell"].is-selected .c-btn.c-btn--purple.c-w-form__submit.js-show__trade-form__submit.js-sell-btn');
						"NumpadAdd" === e.code && (e.preventDefault(), document.querySelector('[data-tab-id="buy"] .c-icon.c-icon--flash.p-show__widget__tab__icon').click()), "NumpadSubtract" === e.code && (e.preventDefault(), document.querySelector('[data-tab-id="sell"] .c-icon.c-icon--tag.p-show__widget__tab__icon').click());
						var l = parseInt(e.code.replace("Numpad", ""), 10) - 1;
						if (t)
						{
							var h = r ? [r.querySelector('.l-col-4:nth-child(1) .c-btn[data-type="eth"]'), r.querySelector('.l-col-4:nth-child(2) .c-btn[data-type="eth"]'), r.querySelector('.l-col-4:nth-child(3) .c-btn[data-type="eth"]'), r.querySelector('.l-col-4:nth-child(4) .c-btn[data-type="eth"]'), r.querySelector('.l-col-4:nth-child(5) .c-btn[data-type="eth"]'), r.querySelector('.l-col-4:nth-child(6) .c-btn[data-type="eth"]')] : [];
							if (l >= 0 && l <= 5 && h[l]) e.preventDefault(), h[l].click();
							else if (l >= 6 && l <= 8)
							{
								var c = Array.from(document.querySelectorAll(".l-col-auto .p-settings__radio__btn.c-w-form__round-btn.c-btn.c-btn--transparent.js-show__preset")).filter((function (e)
								{
									return null !== e.offsetParent
								}))[l - 6];
								c && (e.preventDefault(), c.click())
							}
							"NumpadEnter" === e.code && n && (e.preventDefault(), n.click())
						}
						if (s)
						{
							var u = a ? [a.querySelector('.l-col-4:nth-child(1) .c-btn[data-type="percent"]'), a.querySelector('.l-col-4:nth-child(2) .c-btn[data-type="percent"]'), a.querySelector('.l-col-4:nth-child(3) .c-btn[data-type="percent"]')] : [];
							if (l >= 0 && l <= 2 && u[l]) e.preventDefault(), u[l].click();
							else if (l >= 6 && l <= 8)
							{
								var d = Array.from(document.querySelectorAll(".l-col-auto .p-settings__radio__btn.c-w-form__round-btn.c-btn.c-btn--transparent.js-show__preset")).filter((function (e)
								{
									return null !== e.offsetParent
								}))[l - 6];
								d && (e.preventDefault(), d.click())
							}
							"NumpadEnter" === e.code && o && (e.preventDefault(), o.click())
						}
					}
				}))
			}))
		}
	})), document.addEventListener("keyup", (function (e)
	{
		"/" !== e.key || e.ctrlKey || e.metaKey || /^(?:input|textarea|select|button)$/i.test(e.target.tagName) || (e.preventDefault(), document.querySelector(".c-autocomplete__input.js-autocomplete.js-intro").focus())
	}));
	var lr = null,
		hr = !1,
		cr = !1;

	function ur(e)
	{
		document.getElementById("dev-wallet-age") || setTimeout((function ()
		{
			var t = document.querySelector(".l-col.u-color-dark-dk.u-font-size-xxs.u-font-size-md-xs.l-row.u-flex-row-gap-xxs");
			if (!document.getElementById("dev-wallet-balance"))
			{
				var i = document.createElement("div");
				i.id = "dev-wallet-balance", i.className = "l-col-12 l-col-sm-auto", i.innerHTML = 'Dev Wallet Balance: <span class="u-color-light-lt u-ml-3xs" id="dev-sol-balance"></span>', t.appendChild(i)
			}! function (e)
			{
				var t = document.getElementById("dev-sol-balance");
				hr ? t.innerHTML = lr + '<span class="holders-sol-balance"> ' + String.fromCharCode(8801) + "</span>" : cr || (cr = !0, Is(Ls().mark((function i()
				{
					var s;
					return Ls().wrap((function (i)
					{
						for (;;) switch (i.prev = i.next)
						{
						case 0:
							return i.prev = 0, i.next = 3, dr(e);
						case 3:
							(s = i.sent) ? (lr = s, t.innerHTML = lr + '<span class="holders-sol-balance"> ' + String.fromCharCode(8801) + "</span>", hr = !0) : t.textContent = "N/A", i.next = 11;
							break;
						case 7:
							i.prev = 7, i.t0 = i.catch(0), console.log("Failed to fetch Dev wallet balance:", i.t0), t.textContent = "N/A";
						case 11:
							return i.prev = 11, cr = !1, i.finish(11);
						case 14:
						case "end":
							return i.stop()
						}
					}), i, null, [
						[0, 7, 11, 14]
					])
				})))())
			}(e)
		}), 10)
	}

	function dr(e)
	{
		return pr.apply(this, arguments)
	}

	function pr()
	{
		return (pr = Is(Ls().mark((function e(t)
		{
			var i, s, r, a, n;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					return i = {
						jsonrpc: "2.0",
						id: 1,
						method: "getBalance",
						params: [t]
					}, e.prev = 2, e.next = 5, fetch("https://lb.drpc.org/ogrpc?network=solana&dkey=AjCfLU79IkOVpRw570wVdXLt6UtJQfkR8IEp7sROl9Tz",
					{
						method: "POST",
						headers:
						{
							"Content-Type": "application/json"
						},
						body: JSON.stringify(i)
					});
				case 5:
					return s = e.sent, e.next = 8, s.json();
				case 8:
					if (!(r = e.sent).error)
					{
						e.next = 11;
						break
					}
					throw new Error("RPC Error: ".concat(r.error.message));
				case 11:
					return a = r.result.value, n = a / 1e9, e.abrupt("return", n.toFixed(2));
				case 16:
					return e.prev = 16, e.t0 = e.catch(2), console.log("Error fetching Dev's SOL balance:", e.t0.message || e.t0), e.abrupt("return", null);
				case 20:
				case "end":
					return e.stop()
				}
			}), e, null, [
				[2, 16]
			])
		})))).apply(this, arguments)
	}
	var gr = !1;

	function mr()
	{
		return (mr = Is(Ls().mark((function e()
		{
			var t;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					return e.next = 2, vr();
				case 2:
					gr || (t = setInterval(Is(Ls().mark((function e()
					{
						return Ls().wrap((function (e)
						{
							for (;;) switch (e.prev = e.next)
							{
							case 0:
								return e.next = 2, vr();
							case 2:
								gr && clearInterval(t);
							case 3:
							case "end":
								return e.stop()
							}
						}), e)
					}))), 2e4));
				case 3:
				case "end":
					return e.stop()
				}
			}), e)
		})))).apply(this, arguments)
	}

	function fr()
	{
		var e, t;
		if (!document.getElementById("dex-banner-img"))
		{
			var i = document.querySelector(".p-show__widget.p-show__pair.u-py-s-lg"),
				s = document.querySelector(".top-ten-container");
			if (i && s)
			{
				var r = document.querySelector('.p-show__bar__link[href^="https://solscan.io"]');
				if (r)
				{
					var a = (null == r || null === (e = r.href) || void 0 === e ? void 0 : e.split("account/").pop()) || "",
						n = "https://dd.dexscreener.com/ds-data/tokens/solana/".concat(a, "/header.png"),
						o = (null === (t = document.querySelector(".p-show__pair__title .p-show__pair__cur")) || void 0 === t ? void 0 : t.textContent) || "Unknown";
					! function (e, t)
					{
						var i = new Image;
						i.onload = function ()
						{
							return t(!0)
						}, i.onerror = function ()
						{
							return t(!1)
						}, i.src = e
					}(n, (function (e)
					{
						if (e)
						{
							var t = '\n                <div class="dex-header-banner">\n                    <span class="p-show__widget__td__label u-font-size-zh-xxs" id="dex-widget-header">DEX Banner</span>\n                    <a class="pump-zoomTrigger" href="#" id="pump-coin-image" data-zoom="'.concat(n, '">\n                        <img id="dex-banner-img" src="').concat(n, '">\n                    </a>\n                    <a href="https://dexscreener.com/solana/').concat(a, '" target="_blank">\n                        <div class="is-dex-paid">\n                            <span id="dex-is-paid">DEX is paid for ').concat(o, "</span>\n                        </div>\n                    </a>\n                </div>\n            ");
							tr(), setTimeout((function ()
								{
									s.insertAdjacentHTML("afterend", t)
								}), 200),
								function ()
								{
									mr.apply(this, arguments)
								}()
						}
					}))
				}
			}
		}
	}

	function br(e)
	{
		return _r.apply(this, arguments)
	}

	function _r()
	{
		return (_r = Is(Ls().mark((function e(t)
		{
			var i, s, r, a, n, o;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					return e.prev = 0, e.next = 3, fetch(t);
				case 3:
					if (!(i = e.sent).ok)
					{
						e.next = 11;
						break
					}
					return e.next = 7, i.json();
				case 7:
					return a = e.sent, n = null === (s = a[0]) || void 0 === s ? void 0 : s.type, o = null === (r = a[0]) || void 0 === r ? void 0 : r.status, e.abrupt("return", "tokenProfile" === n && "approved" === o);
				case 11:
					e.next = 15;
					break;
				case 13:
					e.prev = 13, e.t0 = e.catch(0);
				case 15:
					return e.abrupt("return", !1);
				case 16:
				case "end":
					return e.stop()
				}
			}), e, null, [
				[0, 13]
			])
		})))).apply(this, arguments)
	}

	function vr()
	{
		return yr.apply(this, arguments)
	}

	function yr()
	{
		return (yr = Is(Ls().mark((function e()
		{
			var t, i, s, r, a, n;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					if (t = document.querySelector('a[href^="https://pump.fun/"]'), i = document.querySelector(".p-show__bar__link"))
					{
						e.next = 4;
						break
					}
					return e.abrupt("return");
				case 4:
					return s = t ? t.href.split("coin/").pop() : i.href.split("account/").pop(), r = "https://api.dexscreener.com/orders/v1/solana/".concat(s), e.next = 8, br(r);
				case 8:
					a = e.sent, n = document.querySelector(".is-dex-paid"), a && (n && (n.style.display = "block"), gr = !0);
				case 11:
				case "end":
					return e.stop()
				}
			}), e)
		})))).apply(this, arguments)
	}

	function wr()
	{
		return xr.apply(this, arguments)
	}

	function xr()
	{
		return (xr = Is(Ls().mark((function e()
		{
			var t, i, s, r, a, n, o, l;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					if (t = document.querySelector(".l-row.l-row-gap-xxs.u-flex-row-gap-xs.p-show__pair__price"), i = document.querySelector(".p-show__bar__link"))
					{
						e.next = 4;
						break
					}
					return e.abrupt("return");
				case 4:
					return s = i.href.split("account/").pop(), "https://rugcheck.xyz/tokens/".concat(s), e.prev = 6, e.next = 9, fetch("https://api.rugcheck.xyz/v1/tokens/".concat(s, "/report"),
					{
						method: "GET",
						headers:
						{
							accept: "application/json"
						}
					});
				case 9:
					if ((r = e.sent).ok)
					{
						e.next = 12;
						break
					}
					return e.abrupt("return");
				case 12:
					return e.next = 14, r.json();
				case 14:
					a = e.sent, n = document.createElement("div"), o = document.createElement("div"), n.classList.add("rug-container"), l = null, a.score_normalised <= 20 && (l = "Good"), a.score_normalised >= 20 && a.score_normalised < 45 && (l = "Warning"), a.score_normalised >= 45 && (l = "Danger"), o.classList.add("risk-header"), o.innerHTML = '\n        <hr class="u-mb-xs-lg u-mb-xs u-mt-xs-lg u-mt-xxs">\n        <span class="p-show__widget__td__label u-font-size-zh-xxs" id="rugcheck-title">RugCheck Analysis</span>\n        <div class="rug-header">\n          <div>Risk Analysis</div>\n          <div>\n            <span>'.concat(a.score_normalised, ' / 100</span>\n          </div>\n        </div>\n        <a href="https://rugcheck.xyz/tokens/').concat(s, '" target="_blank">\n        <div class="rug-warn-level" id="rug-level-').concat(l, '">').concat(l, "</div>\n        </a>\n        "), n.appendChild(o), t && t.parentNode && t.parentNode.insertBefore(n, t), a.risks && Array.isArray(a.risks) && a.risks.forEach((function (e)
					{
						var i = document.createElement("div");
						i.classList.add("risk-item");
						var s = null;
						"good" === e.level && (s = "Good"), "warn" === e.level && (s = "Warning"), "danger" === e.level && (s = "Danger"), i.innerHTML = '\n                <div class="rug-risk-items" id="'.concat(s, '" data-tooltip2="').concat(e.description, '">\n                  <span class="rug-item-name">').concat(e.name, '</span>\n                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>\n                  </svg>\n                </div>\n                '), n.appendChild(i), t && t.parentNode && (t.parentNode.insertBefore(n, t), Ws())
					})), e.next = 33;
					break;
				case 29:
					return e.prev = 29, e.t0 = e.catch(6), console.log("RugCheck error:", e.t0), e.abrupt("return");
				case 33:
				case "end":
					return e.stop()
				}
			}), e, null, [
				[6, 29]
			])
		})))).apply(this, arguments)
	}

	function kr(e)
	{
		e.preventDefault();
		var t = e.currentTarget;
		if (t.href)
		{
			window.open(t.href, "_blank");
			var i = t.closest(".sBVBv2HePq7qYTpGDmRM");
			i && i.querySelectorAll(".IrSOk2x9Sg3QrXngRC6Q").forEach((function (e)
			{
				!e.href || e.href.startsWith("https://t.me") || e.href.startsWith("https://pump.fun") || window.open(e.href, "_blank")
			}))
		}
	}
	var Pr = new Set;

	function Dr(e)
	{
		e.forEach((function (e)
		{
			"childList" === e.type && e.addedNodes.forEach((function (e)
			{
				1 === e.nodeType && (e.classList.contains("kZ551pEiiCmBLd2UhVP_") && !Pr.has(e) && (e.addEventListener("click", kr), Pr.add(e)), e.querySelectorAll(".kZ551pEiiCmBLd2UhVP_").forEach((function (e)
				{
					Pr.has(e) || (e.addEventListener("click", kr), Pr.add(e))
				})))
			}))
		}))
	}
	var Tr = new MutationObserver(Dr);

	function Or()
	{
		chrome.storage.local.get("OpenAllSocialLinks", (function (e)
		{
			e.OpenAllSocialLinks ? (Tr || (Tr = new MutationObserver(Dr)), document.querySelectorAll(".kZ551pEiiCmBLd2UhVP_").forEach((function (e)
			{
				e.removeEventListener("click", kr), e.addEventListener("click", kr)
			})), Tr.observe(document.body,
			{
				childList: !0,
				subtree: !0
			})) : (Tr.disconnect(), Tr = null, document.querySelectorAll(".kZ551pEiiCmBLd2UhVP_").forEach((function (e)
			{
				e.removeEventListener("click", kr)
			})))
		}))
	}
	var Sr = !1,
		Er = !1,
		Cr = 0,
		jr = 0,
		Mr = 0,
		Ar = 0,
		Br = 0,
		Lr = 0,
		Rr = 0,
		Ir = 0,
		Hr = 0,
		Fr = 0;

	function Nr()
	{
		Cr = 0, jr = 0, Mr = 0, Ar = 0, Br = 0, Lr = 0, Rr = 0, Ir = 0, Hr = 0, Fr = 0
	}

	function zr()
	{
		document.querySelectorAll('[data-table-id="holders"]') && document.querySelectorAll(".c-grid-table__tr").forEach((function (e)
		{
			var t = e.querySelector(".c-grid-table__td:nth-child(3) .u-color-light-alt"),
				i = t ? parseFloat(t.textContent) : 0,
				s = e.querySelector(".c-grid-table__td:nth-child(1) .u-color-light-alt"),
				r = s ? parseFloat(s.textContent) : 0;
			e.querySelector("span.c-icon--emoji-happy") ? Mr += i : e.querySelector("span.c-icon--ghost") ? Ar += i : e.querySelector("span.c-icon--snipe") ? Br += i : e.querySelector("div.c-tag--pink") ? Cr += i : e.querySelector("div.c-tag--yellow") ? jr += i : Lr += i, r <= 1 ? Rr += 1 : r <= 5 ? Ir += 1 : r <= 50 ? Hr += 1 : Fr += 1
		}))
	}

	function Vr()
	{
		var e = document.getElementById("holders-popup-container1"),
			t = document.querySelector("#holders-svg-button1 svg path");
		if (e) Wr();
		else
		{
			var s = document.querySelector('.p-show__widget--table:has([data-table-id="holders"]) .u-mb-m'),
				r = document.createElement("div");
			r.id = "holders-popup-container1", r.innerHTML = '<div class="holders-popup1"><span class="top-100-holders-title">Top Holders by Supply</span><div id="holders-chartdiv1"></div></div>', s.appendChild(r),
				function ()
				{
					zr();
					var e = Bi.new("holders-chartdiv1");
					e.setThemes([Ss.new(e)]);
					var t = e.container.children.push(Gi.new(e,
						{
							layout: e.verticalLayout,
							innerRadius: i(50)
						})),
						s = t.series.push(Os.new(e,
						{
							valueField: "value",
							categoryField: "category",
							alignLabels: !1
						}));
					e.interfaceColors.get("background"), s.slices.template.setAll(
					{
						stroke: de(1974312),
						strokeOpacity: 0,
						strokeWidth: 5
					}), s.slices.template.states.create("hover",
					{
						scale: 1.06
					}), s.labels.template.set("text", "[#fff]{category}: {value.formatNumber('#,#')}"), s.slices.template.set("tooltipText", "[#F2F5F9]{category}: {value.formatNumber('#.##p')}");
					var r = Tt.new(e,
					{
						getFillFromSprite: !1
					});
					r.get("background").setAll(
					{
						fill: de(0),
						fillOpacity: .9,
						strokeOpacity: 0
					}), s.set("tooltip", r), s.labels.template.set("forceHidden", !0), s.set("text", de(16711680)), s.slices.template.setAll(
					{
						templateField: "sliceSettings"
					}), s.data.setAll([
					{
						value: Mr,
						category: "Users",
						sliceSettings:
						{
							fill: de(15794098)
						}
					},
					{
						value: Lr,
						category: "Bots",
						sliceSettings:
						{
							fill: de(10003306)
						}
					},
					{
						value: Br,
						category: "Snipers",
						sliceSettings:
						{
							fill: de(7633604)
						}
					},
					{
						value: Ar,
						category: "Insiders",
						sliceSettings:
						{
							fill: de(6515117)
						}
					},
					{
						value: jr,
						category: "Dev",
						sliceSettings:
						{
							fill: de(8147875)
						}
					},
					{
						value: Cr,
						category: "LP",
						sliceSettings:
						{
							fill: de(4013903)
						}
					}]);
					var a = t.children.push(Ni.new(e,
					{
						layout: ut.new(e,
						{
							maxColumns: 3,
							fixedWidthGrid: !0
						}),
						centerX: i(50),
						x: i(50),
						marginTop: 10,
						marginBottom: 15
					}));
					a.labels.template.setAll(
					{
						fontSize: 13,
						fontWeight: "600",
						fill: "#fff"
					}), a.markers.template.setAll(
					{
						width: 16,
						height: 16,
						strokeOpacity: 0
					}), a.valueLabels.template.set("forceHidden", !0), a.data.setAll(s.dataItems), s.appear(1e3, 100), e._logo.dispose(), Nr()
				}(), Sr = !0, t.setAttribute("fill", "#8E9DFF"), t.style.filter = "drop-shadow(0px 0px 4px #8E9DFF)", setTimeout((function ()
				{
					r.classList.add("show")
				}), 10)
		}
	}

	function qr()
	{
		var e = document.getElementById("holders-popup-container2"),
			t = document.querySelector("#holders-svg-button2 svg");
		if (e) Yr();
		else
		{
			var s = document.querySelector('.p-show__widget--table:has([data-table-id="holders"]) .u-mb-m'),
				r = document.createElement("div");
			r.id = "holders-popup-container2", r.innerHTML = '<div class="holders-popup2"><span class="top-100-holders-title">Top Holders by Type</span><div id="holders-chartdiv2"></div></div>', s.appendChild(r),
				function ()
				{
					zr();
					var e = Bi.new("holders-chartdiv2");
					e.setThemes([Ss.new(e)]);
					var t = e.container.children.push(Gi.new(e,
						{
							layout: e.verticalLayout,
							innerRadius: i(50)
						})),
						s = t.series.push(Os.new(e,
						{
							valueField: "value",
							categoryField: "category",
							alignLabels: !1
						}));
					e.interfaceColors.get("background"), s.slices.template.setAll(
					{
						stroke: de(1974312),
						strokeOpacity: 0,
						strokeWidth: 5
					}), s.slices.template.states.create("hover",
					{
						scale: 1.06
					}), s.labels.template.set("text", "[#fff]{category}: {value.formatNumber('##')}"), s.slices.template.set("tooltipText", "[#F2F5F9]{category}: {value.formatNumber('###')}");
					var r = Tt.new(e,
					{
						getFillFromSprite: !1
					});
					r.get("background").setAll(
					{
						fill: de(0),
						fillOpacity: .9,
						strokeOpacity: 0
					}), s.set("tooltip", r), s.labels.template.set("forceHidden", !0), s.set("text", de(16711680)), s.slices.template.setAll(
					{
						templateField: "sliceSettings"
					}), s.data.setAll([
					{
						value: Rr,
						category: "Shrimps",
						sliceSettings:
						{
							fill: de(4536507)
						}
					},
					{
						value: Ir,
						category: "Fish",
						sliceSettings:
						{
							fill: de(6901434)
						}
					},
					{
						value: Hr,
						category: "Sharks",
						sliceSettings:
						{
							fill: de(10708151)
						}
					},
					{
						value: Fr,
						category: "Whales",
						sliceSettings:
						{
							fill: de(13661368)
						}
					}]);
					var a = t.children.push(Ni.new(e,
					{
						layout: ut.new(e,
						{
							maxColumns: 2,
							fixedWidthGrid: !0,
							useDefaultMarker: !0
						}),
						centerX: i(50),
						x: i(50),
						marginTop: 10,
						marginBottom: 15
					}));
					a.labels.template.setAll(
					{
						fontSize: 13,
						fontWeight: "600",
						fill: "#fff"
					}), a.markers.template.setAll(
					{
						width: 16,
						height: 16,
						strokeOpacity: 0
					}), a.valueLabels.template.set("forceHidden", !0), a.data.setAll(s.dataItems), s.appear(1e3, 100), e._logo.dispose(), Nr()
				}(), Sr = !0, t.setAttribute("fill", "#8E9DFF"), t.style.filter = "drop-shadow(0px 0px 4px #8E9DFF)", setTimeout((function ()
				{
					r.classList.add("show")
				}), 10)
		}
	}

	function Wr()
	{
		var e = document.getElementById("holders-popup-container1"),
			t = document.querySelector("#holders-svg-button1 svg path");
		e && (e.classList.remove("show"), t.setAttribute("fill", "#8D93B7"), t.style.filter = "none", setTimeout((function ()
		{
			var e = document.getElementById("holders-popup-container1");
			e && e.parentNode && e.parentNode.removeChild(e), Sr = !1
		}), 350))
	}

	function Yr()
	{
		var e = document.getElementById("holders-popup-container2"),
			t = document.querySelector("#holders-svg-button2 svg");
		e && (e.classList.remove("show"), t.setAttribute("fill", "#8D93B7"), t.style.filter = "none", setTimeout((function ()
		{
			var e = document.getElementById("holders-popup-container2");
			e && e.parentNode && e.parentNode.removeChild(e), Sr = !1
		}), 350))
	}
	var Gr, Ur, Xr = new Map,
		Kr = !1;

	function $r(e, t)
	{
		return Zr.apply(this, arguments)
	}

	function Zr()
	{
		return (Zr = Is(Ls().mark((function e(t, i)
		{
			var s, r, a, n, o, l;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					if (s = t.querySelector('a[href^="https://solscan.io/account/"]'))
					{
						e.next = 3;
						break
					}
					return e.abrupt("return");
				case 3:
					if (void 0, h = s.href.split("/account/"), r = h.length > 1 ? h[1] : null)
					{
						e.next = 6;
						break
					}
					return e.abrupt("return");
				case 6:
					if (!Xr.has(r))
					{
						e.next = 9;
						break
					}
					return Jr(t, Xr.get(r)), e.abrupt("return");
				case 9:
					return Jr(t, "0.00"), e.next = 12, new Promise((function (e)
					{
						return setTimeout(e, i)
					}));
				case 12:
					return e.prev = 12, e.next = 15, sa(r);
				case 15:
					return a = e.sent, e.next = 18, Us();
				case 18:
					n = e.sent, o = n && a ? (a * n).toLocaleString("en-US",
					{
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					}) : "0.00", l = null !== a ? "".concat(a, '<span class="holders-sol-balance"> ≡</span><span class="holders-usd-balance"> $').concat(o, "</span>") : '<span class="holders-sol-balance">N/A</span>', Xr.set(r, l), Jr(t, l), e.next = 29;
					break;
				case 25:
					e.prev = 25, e.t0 = e.catch(12), console.log("Couldn't get balance for: ".concat(r, ":"), e.t0), Jr(t, "N/A");
				case 29:
				case "end":
					return e.stop()
				}
				var h
			}), e, null, [
				[12, 25]
			])
		})))).apply(this, arguments)
	}

	function Jr(e, t)
	{
		var i = e.querySelector(".balance-cell");
		i || ((i = document.createElement("div")).className = "c-grid-table__td c-trades-table__td balance-cell", e.insertBefore(i, e.firstChild)), i.innerHTML = '<div class="u-text-left u-color-light-alt">'.concat(t, "</div>")
	}

	function Qr(e)
	{
		e.querySelectorAll(".c-grid-table__tr:not(.processed)").forEach((function (e)
		{
			e.querySelector(".balance-cell") || Jr(e, '-.-- <span class="holders-sol-balance"> ' + String.fromCharCode(8801) + "</span>")
		}))
	}

	function ea()
	{
		return (ea = Is(Ls().mark((function e(t)
		{
			var i, s;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					if (!Kr)
					{
						e.next = 2;
						break
					}
					return e.abrupt("return");
				case 2:
					if (Kr = !0, e.prev = 3, (i = t.querySelectorAll(".c-grid-table__tr:not(.processed)")).length)
					{
						e.next = 7;
						break
					}
					return e.abrupt("return");
				case 7:
					Qr(t), s = 0;
				case 9:
					if (!(s < i.length))
					{
						e.next = 16;
						break
					}
					return i[s].classList.add("processed"), e.next = 13, $r(i[s], 35);
				case 13:
					s++, e.next = 9;
					break;
				case 16:
					return e.prev = 16, Kr = !1, e.finish(16);
				case 19:
				case "end":
					return e.stop()
				}
			}), e, null, [
				[3, , 16, 19]
			])
		})))).apply(this, arguments)
	}

	function ta(e)
	{
		e.forEach((function (e)
		{
			e.addedNodes.forEach((function (e)
			{
				1 === e.nodeType && e.classList.contains("c-grid-table__tr") && (Jr(e, "Fetching..."), $r(e, 75))
			}))
		}))
	}

	function ia()
	{
		Ur || (Ur = new MutationObserver((function ()
		{
			var e, t = document.querySelector('.c-grid-table[data-table-id="holders"]');
			t && null !== t.offsetParent && ((e = document.querySelector('.c-grid-table[data-table-id="holders"] .c-sortable.c-grid-table__body')) && (function ()
			{
				var e = document.querySelector('.c-grid-table[data-table-id="holders"] .c-grid-table__head');
				if (e && !e.querySelector(".balance-header"))
				{
					var t = document.createElement("div");
					t.className = "c-grid-table__th c-trades-table__th balance-header", t.innerHTML = '<div class="u-d-flex u-align-items-center">Balance</div>', e.insertBefore(t, e.firstChild)
				}
			}(), Qr(e), Gr || (Gr = new MutationObserver(ta)).observe(e,
			{
				childList: !0,
				subtree: !1
			}), function (e)
			{
				ea.apply(this, arguments)
			}(e)))
		}))).observe(document.body,
		{
			childList: !0,
			subtree: !0
		})
	}

	function sa(e)
	{
		return ra.apply(this, arguments)
	}

	function ra()
	{
		return (ra = Is(Ls().mark((function e(t)
		{
			var i, s, r, a, n, o, l, h;
			return Ls().wrap((function (e)
			{
				for (;;) switch (e.prev = e.next)
				{
				case 0:
					i = "https://lb.drpc.org/ogrpc?network=solana&dkey=", s = [].concat(["AjCfLU79IkOVpRw570wVdXLt6UtJQfkR8IEp7sROl9Tz", "AqdrIoawIElbtkuJa9TGkAcwL3jsCEER8I9FssvAG40d", "AqZ-jbpSs05fmwqvQqE9sJqkyykQQgQR8JruxpZiEquA", "AogqWSqkAEIkniRDNm4FcOeACwTUHfkR8LTWFoHUp5S4"]).sort((function ()
					{
						return Math.random() - .5
					})), r = {
						jsonrpc: "2.0",
						id: 1,
						method: "getBalance",
						params: [t]
					}, a = As(s), e.prev = 6, a.s();
				case 8:
					if ((n = a.n()).done)
					{
						e.next = 28;
						break
					}
					return o = n.value, e.prev = 10, e.next = 13, fetch(i + o,
					{
						method: "POST",
						headers:
						{
							"Content-Type": "application/json"
						},
						body: JSON.stringify(r)
					});
				case 13:
					return l = e.sent, e.next = 16, l.json();
				case 16:
					if (!(h = e.sent).error)
					{
						e.next = 19;
						break
					}
					throw new Error("RPC Error: ".concat(h.error.message));
				case 19:
					return e.abrupt("return", (h.result.value / 1e9).toFixed(2));
				case 22:
					e.prev = 22, e.t0 = e.catch(10), e.t0, console.log("Error fetching Holders's SOL balance:", e.t0.message || e.t0);
				case 26:
					e.next = 8;
					break;
				case 28:
					e.next = 33;
					break;
				case 30:
					e.prev = 30, e.t1 = e.catch(6), a.e(e.t1);
				case 33:
					return e.prev = 33, a.f(), e.finish(33);
				case 36:
					return e.abrupt("return", null);
				case 37:
				case "end":
					return e.stop()
				}
			}), e, null, [
				[6, 30, 33, 36],
				[10, 22]
			])
		})))).apply(this, arguments)
	}
	"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", ia) : ia();
	var aa = !1;

	function na()
	{
		aa || (aa = !0, la.observe(document.body,
		{
			childList: !0,
			subtree: !0
		}))
	}

	function oa()
	{
		aa = !1, la.disconnect()
	}
	var la = new MutationObserver((function (e)
	{
		aa && e.forEach((function (e)
		{
			"childList" === e.type && e.addedNodes.length > 0 && e.addedNodes.forEach((function (e)
			{
				if (1 === e.nodeType && (e.matches(".sBVBv2HePq7qYTpGDmRM") || e.querySelector(".sBVBv2HePq7qYTpGDmRM")))
				{
					var t = document.querySelector(".IkXVawB0ALMCnMdJvOFY:nth-child(3)").querySelector(".sBVBv2HePq7qYTpGDmRM");
					if (e === t || e.querySelector(".sBVBv2HePq7qYTpGDmRM") === t)
					{
						var i, s, r, a, n, o = null === (i = t.querySelector(".kZ551pEiiCmBLd2UhVP_")) || void 0 === i || null === (i = i.getAttribute("href")) || void 0 === i ? void 0 : i.split("lp/").pop().split("?")[0],
							l = null === (s = t.querySelector(".siDxb5Gcy0nyxGjDtRQj")) || void 0 === s ? void 0 : s.textContent.trim(),
							h = null === (r = t.querySelector(".fsYi35goS5HvMls5HBGU")) || void 0 === r ? void 0 : r.textContent.trim(),
							c = null === (a = t.querySelector("img.vGEynuWTSwDcOmw9G8zx")) || void 0 === a ? void 0 : a.src,
							u = (null === (n = t.querySelector("span.PexxssXyjdhtFKu0KhLw")) || void 0 === n || n.textContent, l + " just migrated.");
						o && chrome.storage.local.get("MigratingTokens", (function (e)
						{
							var t = e.MigratingTokens ||
							{};
							Object.values(t).includes(o) || (t[Object.keys(t).length] = o, chrome.storage.local.set(
							{
								MigratingTokens: t
							}, (function ()
							{
								! function (e, t, i)
								{
									window.Notification && ("granted" === Notification.permission ? setTimeout((function ()
									{
										new Notification(e,
										{
											body: t,
											icon: i
										})
									}), 450) : Notification.requestPermission().then((function (s)
									{
										"granted" === s ? new Notification(e,
										{
											body: t,
											icon: i
										}) : console.log("User blocked notifications.")
									})).catch(console.log()))
								}(u, h, c || void 0)
							})))
						}))
					}
				}
			}))
		}))
	}));

	function ha()
	{
		chrome.storage.local.get("MigratingNotifications", (function (e)
		{
			e.MigratingNotifications ? setTimeout(na, 1e3) : setTimeout(oa, 500)
		}))
	}

	function ca(e)
	{
		var t = function ()
			{
				try
				{
					if (e.contentDocument && e.contentDocument.head)
					{
						var t = e.contentDocument.head;
						if (!t.querySelector("style[data-custom-style]"))
						{
							var i = document.createElement("style");
							i.setAttribute("data-custom-style", "true"), i.textContent = "html.theme-dark { background: none !important;color-scheme: none; }html.theme-dark body { color: #00000000; }body {--tv-color-platform-background: none !important;                                   /* the main color of the page where all elements are placed on */ --tv-color-pane-background: none !important;                                       /* toolbar background color */ --tv-color-toolbar-button-background-hover: none !important;                       /* hover effect color for a toolbar button */ --tv-color-toolbar-button-background-expanded: #8E9DFF77 !important;               /* hover effect color for the active button on the right toolbar */ --tv-color-toolbar-button-text: #999 !important;                                   /* text and icon color for toolbar buttons */ --tv-color-toolbar-button-text-hover: #fff !important;                             /* text and icon color for toolbar buttons when hovering over them */ --tv-color-toolbar-button-text-active: #8E9DFF !important;                         /* text and icon color for toolbar buttons that are active */ --tv-color-toolbar-button-text-active-hover: #8E9DFF !important;                   /* text and icon color for toolbar buttons that are active when hovering over them */ --tv-color-item-active-text: #fff !important;                                      /* text color for toggle toolbar buttons (e.g. Magnet Mode, Lock All Drawings) */ --tv-color-toolbar-toggle-button-background-active: #8E9DFF77 !important;          /* fill color for toggle toolbar buttons (e.g. Magnet Mode, Lock All Drawings) */ --tv-color-toolbar-toggle-button-background-active-hover: #8E9DFF !important;      /* fill color for toggle toolbar buttons when hovering over them (e.g. Magnet Mode, Lock All Drawings) */ --tv-color-toolbar-divider-background: none !important;                            /* toolbar dividers color */ --tv-color-popup-element-background-active: #8E9DFF77 !important;.group-MBOVGQRI .apply-common-tooltip.customButton-qqNP9X6e span:nth-child(2) { color: #8E9DFF !important; }.chart-widget__top--themed-dark .title-l31H9iuA { color: #999 !important; font-size: 12px !important; }}", t.appendChild(i)
						}
					}
				}
				catch (e)
				{
					console.log("Cannot access the iframe content due to cross-origin restrictions.")
				}
			},
			i = setInterval((function ()
			{
				e.isConnected ? t() : clearInterval(i)
			}), 25);
		setTimeout((function ()
		{
			clearInterval(i)
		}), 1e4), t()
	}

	function ua()
	{
		document.querySelectorAll('[data-table-id="traders"] .c-trades-table__scroll [data-index] a[href^="https://solscan.io/"]').forEach((function (e)
		{
			var t = "https://app.cielo.finance/profile/" + e.href.split("account/").pop(),
				i = e.closest("[data-index]");
			if (i)
			{
				var s = i.querySelector(".c-grid-table__td.c-trades-table__td:last-child .u-d-flex.u-justify-content-center");
				if (s && !s.querySelector(".top-trader-profile-links"))
				{
					var r = document.createElement("div");
					r.className = "top-trader-profile-links", r.setAttribute("data-tooltip2", "GMGN wallet profile"), r.innerHTML = '<a href="'.concat(t, '" target="_blank">\n                        <svg fill="#8D93B7" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n                            <path class="cls-1" d="M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2ZM7.30274,4.28083a.95128.95128,0,0,1,1.34971,0,.92836.92836,0,0,1,.27615.67443.95244.95244,0,0,1-1.90483,0A.92362.92362,0,0,1,7.30274,4.28083ZM9.70043,12H6.29957V10.736h.83322V7.7772H6.29957V6.51325H8.88421V10.736h.81622Z"/>\n                        </svg>\n                    </a>'), s.appendChild(r), Ws()
				}
			}
		}))
	}

	function da()
	{
		var e = document.querySelector(".c-autocomplete__input.js-autocomplete.js-intro"),
			t = document.getElementById("autoComplete_list_1"),
			i = document.querySelector(".c-body");
		i && (Array.from(i.children).forEach((function (e)
		{
			e.style.transition = "filter 0.5s ease-in-out, pointer-events 0.5s ease-in-out"
		})), e.addEventListener("focus", (function ()
		{
			Array.from(i.children).forEach((function (i)
			{
				i !== e.parentElement && i !== t && (i.style.filter = "blur(3px) grayscale(0.1)", i.style.pointerEvents = "none !important")
			}))
		})), e.addEventListener("blur", (function ()
		{
			Array.from(i.children).forEach((function (e)
			{
				e.style.filter = "none", e.style.pointerEvents = "auto"
			}))
		})))
	}

	function pa()
	{
		var e = document.createElement("link");
		e.rel = "preconnect", e.href = "https://fonts.googleapis.com";
		var t = document.createElement("link");
		t.rel = "preconnect", t.href = "https://fonts.gstatic.com", t.crossOrigin = "anonymous";
		var i = document.createElement("link");
		i.rel = "stylesheet", i.href = "https://fonts.googleapis.com/css2?family=VT323&display=swap", document.head.appendChild(e), document.head.appendChild(t), document.head.appendChild(i)
	}! function ()
	{
		function e(e)
		{
			if (e)
			{
				var t = document.getElementById("theme-stylesheet");
				t || ((t = document.createElement("link")).id = "theme-stylesheet", t.rel = "stylesheet", document.head.appendChild(t)), t.href = chrome.runtime.getURL("themes/".concat(e, ".css"))
			}
		}
		chrome.storage.local.get("theme", (function (t)
		{
			t.theme && e(t.theme)
		})), chrome.storage.onChanged.addListener((function (t)
		{
			t.theme && e(t.theme.newValue)
		}))
	}();
	var ga = chrome.runtime.getURL("img/remastered-wide.png"),
		ma = chrome.runtime.getURL("img/remastered-square.png");

	function fa()
	{
		var e = document.querySelector(".c-logo__img__collapsed");
		e && e.src !== ga && (e.src = ga);
		var t = document.querySelector(".c-logo__thumb");
		t && t.src !== ma && (t.src = ma)
	}

	function ba()
	{
		new MutationObserver((function ()
		{
			fa()
		})).observe(document.body,
		{
			childList: !0,
			subtree: !0
		}), fa()
	}
	document.body ? ba() : new MutationObserver((function (e, t)
	{
		document.body && (ba(), t.disconnect())
	})).observe(document.documentElement,
	{
		childList: !0
	});
	var _a, va = "migrating-highlight";

	function ya()
	{
		chrome.storage.local.get("HighlightMigratingTokens", (function (e)
		{
			var t;
			e.HighlightMigratingTokens ? function ()
			{
				if (!document.getElementById(va))
				{
					var e = document.createElement("style");
					e.id = va, e.textContent = "\n      .sBVBv2HePq7qYTpGDmRM.VTmpJ0jdbJuSJQ4HKGlN:has(span.u-color-dark-dk.u-font-size-xs),\n      .sBVBv2HePq7qYTpGDmRM.VTmpJ0jdbJuSJQ4HKGlN:has(.MDjHGonOF351cZEGpOBo.u-pl-s.u-font-normal.u-d-none-sm.u-font-size-10.u-color-dark-dk) {\n        border: 1px solid #898eff88 !important;\n        background: #9fa1cf1f !important;\n        transition: 0.15s ease !important;\n      }\n      .sBVBv2HePq7qYTpGDmRM.VTmpJ0jdbJuSJQ4HKGlN:has(span.u-color-dark-dk.u-font-size-xs):hover,\n      .sBVBv2HePq7qYTpGDmRM.VTmpJ0jdbJuSJQ4HKGlN:has(.MDjHGonOF351cZEGpOBo.u-pl-s.u-font-normal.u-d-none-sm.u-font-size-10.u-color-dark-dk):hover {\n        border: 1px solid rgba(79, 238, 228, 0.3) !important;\n        box-shadow: inset 0 0 0 1px rgba(79, 238, 228, 0.3) !important;\n      }\n    ", document.head.appendChild(e)
				}
			}() : (t = document.getElementById(va)) && t.remove()
		}))
	}
	"photon-sol.tinyastro.io" == window.location.hostname && window.location.href.includes("/en/lp/") && (function ()
	{
		function e()
		{
			new MutationObserver((function (e)
			{
				e.forEach((function (e)
				{
					e.addedNodes.forEach((function (e)
					{
						"IFRAME" === e.tagName && ca(e)
					}))
				}))
			})).observe(document.body,
			{
				childList: !0,
				subtree: !0
			}), document.querySelectorAll("iframe").forEach((function (e)
			{
				ca(e)
			}))
		}
		if (document.body) e();
		else
		{
			var t = new MutationObserver((function ()
			{
				document.body && (t.disconnect(), e())
			}));
			t.observe(document.documentElement,
			{
				childList: !0
			})
		}
	}(), function ()
	{
		function e()
		{
			var t = document.querySelector('div[id^="ShowPageContainer"]');
			t ? new MutationObserver((function (e, t)
			{
				var i, s, r = As(e);
				try
				{
					for (r.s(); !(i = r.n()).done;)
						if ("childList" === i.value.type && document.querySelector('div[id^="ShowPageContainer"] > div > div:first-child .Baij3c8abbY_PzZUTQMw.e2Ijl9d4hDT4JrWnn5g1:nth-child(7)'))
						{
							var a = (s = void 0, (s = document.querySelector(".c-sortable.c-grid-table__body a:last-child .c-grid-table__td.c-trades-table__td:nth-child(2) span:last-child")) ? function (e)
							{
								var t = e.match(/(\d+d)?\s?(\d+h)?\s?(\d+m)?/),
									i = parseInt(t[1]) || 0,
									s = parseInt(t[2]) || 0,
									r = parseInt(t[3]) || 0;
								if (isNaN(r)) return e;
								(r += Math.floor(0 * Math.random()) + 3) >= 60 && (s += Math.floor(r / 60), r %= 60), s >= 24 && (i += Math.floor(s / 24), s %= 24);
								var a = "";
								return i > 0 && (a += i + "d "), s > 0 && (a += s + "h "), (a += r + "m").trim()
							}(s.textContent) : null);
							if (a)
							{
								var n = document.querySelector(".l-col.u-color-dark-dk.u-font-size-xxs.u-font-size-md-xs.l-row.u-flex-row-gap-xxs"),
									o = document.querySelector('[data-kind="ca_deployer"] a'),
									l = document.querySelector('[data-kind="deployer"] a'),
									h = o || l,
									c = h ? h.href.split("account/").pop() : null,
									u = c ? "https://pump.fun/profile/".concat(c, "?coins_sort=last_trade_timestamp&include-nsfw=true") : null;
								if (n && c && ur(c), n && a && !document.getElementById("dev-wallet-age"))
								{
									var d = document.createElement("div");
									d.id = "dev-wallet-age", d.className = "l-col-12 l-col-sm-auto", d.innerHTML = 'Dev Wallet Age: <span class="u-color-light-lt u-ml-3xs">'.concat(a, "</span>"), n.appendChild(d)
								}
								if (n && u && !document.getElementById("dev-wallet-profile"))
								{
									var p = document.createElement("div");
									p.id = "dev-wallet-profile", p.className = "l-col-12 l-col-sm-auto", p.innerHTML = '\n                                    Dev Profile:\n                                    <span class="u-color-light-lt u-ml-3xs">\n                                        <a href="'.concat(h.href, '" target="_blank">\n                                            <span class="c-icon c-icon--solscan c-task-table__icon" id="solscan-dev-profile"></span>\n                                        </a>\n                                        <a href="').concat(u, '" target="_blank">\n                                            <img src="https://pump.fun/_next/image?url=%2Flogo.png&w=32&q=75" id="pump-logo-dev-profile">\n                                        </a>\n                                    </span>'), n.appendChild(p)
								}
							}
						}
				}
				catch (e)
				{
					r.e(e)
				}
				finally
				{
					r.f()
				}
			})).observe(t,
			{
				childList: !0,
				subtree: !0
			}) : setTimeout(e, 500)
		}
		if (document.body) e();
		else
		{
			var t = new MutationObserver((function ()
			{
				document.body && (t.disconnect(), e())
			}));
			t.observe(document.documentElement,
			{
				childList: !0
			})
		}
	}(), function ()
	{
		function e()
		{
			var e = document.querySelector(".Baij3c8abbY_PzZUTQMw.e2Ijl9d4hDT4JrWnn5g1:nth-child(4)"),
				t = document.querySelector(".c-sortable.c-grid-table__body"),
				i = document.querySelector(".c-trades-table__scroll");
			if (e && t && i)
			{
				var s = window.getComputedStyle(t).height;
				i.style.maxHeight !== s && (i.style.maxHeight = s)
			}
		}

		function t()
		{
			new MutationObserver((function (t, i)
			{
				e()
			})).observe(document.body,
			{
				childList: !0,
				subtree: !0
			}), e()
		}
		if (document.body) t();
		else
		{
			var i = new MutationObserver((function ()
			{
				document.body && (i.disconnect(), t())
			}));
			i.observe(document.documentElement,
			{
				childList: !0
			})
		}
	}(), function ()
	{
		function e()
		{
			new MutationObserver((function (e)
			{
				e.forEach((function ()
				{
					var e, t, i, s = document.querySelector(".Baij3c8abbY_PzZUTQMw.e2Ijl9d4hDT4JrWnn5g1:nth-child(4)"),
						r = document.querySelector('div[id^="ShowPageContainer"] .u-custom-scroll.c-trades-table-wrapper.u-overflow-x-auto .c-trades-table__thead.c-grid-table__head .c-grid-table__th.c-trades-table__th:nth-child(5)');
					if (s && !Er && r)
					{
						! function ()
						{
							var e = document.querySelector('.p-show__widget--table:has([data-table-id="holders"]) .u-mb-m'),
								t = document.createElement("div");
							t.id = "top-holders-container", t.innerHTML = '<div class="svgBtn-disabled" id="holders-svg-button1" data-tooltip2="Top Holders by Supply"><svg width="18px" height="18px" viewBox="0 0 1024 1024" fill="#8D93B7" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M521.58 516.763v-472.816c250.725 22.642 450.175 222.092 472.817 472.817h-472.816zM918.229 593.091h-435.436c-21.963 0-39.769-17.805-39.769-39.769 0 0 0 0 0 0v-435.463c-222.914 20.121-397.682 207.273-397.682 435.436 0 241.605 195.898 437.452 437.451 437.451 228.163 0 415.339-174.715 435.436-397.657z" /></svg></div><div class="svgBtn-disabled" id="holders-svg-button2" data-tooltip2="Top Holders by Type"><svg width="18px" height="18px" viewBox="0 0 16 16" fill="#8D93B7" class="icon" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H12V15H16V1Z" /><path d="M6 5H10V15H6V5Z" /><path d="M0 9H4V15H0V9Z" /></svg></div>', e && !document.getElementById("top-holders-container") && (e.appendChild(t), setTimeout((function ()
							{
								var e = document.getElementById("holders-svg-button1"),
									t = document.getElementById("holders-svg-button2");
								e && e.classList.remove("svgBtn-disabled"), t && t.classList.remove("svgBtn-disabled")
							}), 5e3)), Ws()
						}(), (i = document.createElement("div")).className = "holders-tooltip", document.body.appendChild(i), document.querySelectorAll("[data-tooltip]").forEach((function (s)
						{
							s.addEventListener("mouseenter", (function ()
							{
								var s = this;
								clearTimeout(t), e = setTimeout((function ()
								{
									i.textContent = s.dataset.tooltip;
									var e = s.getBoundingClientRect();
									i.style.left = e.left + window.scrollX + "px", i.style.top = e.bottom + window.scrollY + "px", i.style.display = "block"
								}), 150)
							})), s.addEventListener("mouseleave", (function ()
							{
								clearTimeout(e), t = setTimeout((function ()
								{
									i.style.display = "none"
								}), 150)
							}))
						}));
						var a = document.getElementById("holders-svg-button1"),
							n = document.getElementById("holders-svg-button2");
						a && n && (a.addEventListener("click", Vr), n.addEventListener("click", qr), document.addEventListener("click", (function (e)
						{
							Sr && !e.target.closest("#holders-svg-button1") && Wr()
						})), document.addEventListener("click", (function (e)
						{
							Sr && !e.target.closest("#holders-svg-button2") && Yr()
						}))), Er = !0
					}
					else !s && Er && (Er = !1)
				}))
			})).observe(document.body,
			{
				childList: !0,
				subtree: !0
			})
		}
		if (document.body) e();
		else
		{
			var t = new MutationObserver((function ()
			{
				document.body && (t.disconnect(), e())
			}));
			t.observe(document.documentElement,
			{
				childList: !0
			})
		}
	}(), function ()
	{
		function e()
		{
			new MutationObserver((function ()
			{
				ua()
			})).observe(document.body,
			{
				childList: !0,
				subtree: !0
			}), ua()
		}
		if (document.body) e();
		else
		{
			var t = new MutationObserver((function ()
			{
				document.body && (t.disconnect(), e())
			}));
			t.observe(document.documentElement,
			{
				childList: !0
			})
		}
	}(), ua(), function ()
	{
		function e()
		{
			var e = document.querySelector('.p-show__collapsible__content.js-security-widget [data-kind="top_holders_perc"]'),
				t = document.querySelector(".l-row.l-row-gap-xxs.u-flex-row-gap-xs.p-show__pair__price");
			if (e && "" !== e.textContent.trim() && t && !document.querySelector(".top-ten-container"))
			{
				var i = document.createElement("div"),
					s = document.createElement("div");
				i.className = "top-ten-container", s.className = "top-ten-holders-perc", s.innerHTML = "<span>Top 10 Holding: </span>";
				var r = e.cloneNode(!0);
				i.appendChild(s), i.appendChild(r), t.before(i)
			}
		}

		function t()
		{
			new MutationObserver((function ()
			{
				e()
			})).observe(document.body,
			{
				childList: !0,
				subtree: !0
			}), e()
		}
		if (document.body) t();
		else
		{
			var i = new MutationObserver((function ()
			{
				document.body && (i.disconnect(), t())
			}));
			i.observe(document.documentElement,
			{
				childList: !0
			})
		}
	}(), _a = ia, document.body ? _a() : new MutationObserver((function (e, t)
	{
		document.body && (t.disconnect(), _a())
	})).observe(document.documentElement,
	{
		childList: !0
	})), window.onload = Is(Ls().mark((function e()
	{
		var t, i;
		return Ls().wrap((function (e)
		{
			for (;;) switch (e.prev = e.next)
			{
			case 0:
				(t = document.createElement("div")).className = "remastered-tooltip", document.body.appendChild(t), (i = document.querySelector(".c-autocomplete__input.js-autocomplete.js-intro")) && i.setAttribute("data-tooltip2", '"/" Keyboard Shortcut'), Ws(), chrome.storage.local.get("MigratingTokens", (function (e)
				{
					var t = e.MigratingTokens ||
					{};
					Object.keys(t).length > 100 && (t = {}, chrome.storage.local.set(
					{
						MigratingTokens: t
					}, (function () {})))
				})), pa(), "/en/memescope" == window.location.pathname && (setTimeout((function ()
				{
					ya()
				}), 400), ha(), Or()), window.location.href.includes("/en/lp/") && setTimeout(Is(Ls().mark((function e()
				{
					return Ls().wrap((function (e)
					{
						for (;;) switch (e.prev = e.next)
						{
						case 0:
							er(), t = void 0, (t = document.querySelector(".u-d-flex.u-flex-lg-column.u-justify-content-between.u-justify-content-lg-center.u-align-items-lg-center.u-align-items-start")) && (Hs = document.createElement("div"), Fs = document.createElement("div"), Ns = document.createElement("div"), zs = document.createElement("div"), Vs = document.createElement("a"), qs = document.createElement("img"), t.appendChild(Hs), Hs.appendChild(Fs), Hs.appendChild(Ns), Fs.appendChild(Vs), Hs.appendChild(zs), Vs.appendChild(qs), Hs.className = "pump-image-container", Fs.className = "pump-zoom", zs.className = "pumpfun-coin-description", Vs.className = "pump-zoomTrigger", Vs.setAttribute("href", "#"), Vs.setAttribute("id", "pump-coin-image"), qs.setAttribute("id", "FunImage"), Hs.setAttribute("id", "PUMP-FUN-IMG"), ar(), Ws()), or(), nr(), wr(), fr();
						case 6:
						case "end":
							return e.stop()
						}
						var t
					}), e)
				}))), 500), Ks(), Zs(), da();
			case 13:
			case "end":
				return e.stop()
			}
		}), e)
	}))), chrome.storage.onChanged.addListener((function (e, t)
	{
		"local" === t && ("MigratingNotifications" in e && ha(), "OpenAllSocialLinks" in e && Or(), "HighlightMigratingTokens" in e && ya())
	}))
})();