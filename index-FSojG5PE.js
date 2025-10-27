var Bg = e => {
    throw TypeError(e)
}
;
var fd = (e, t, n) => t.has(e) || Bg("Cannot " + n);
var P = (e, t, n) => (fd(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , me = (e, t, n) => t.has(e) ? Bg("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , ee = (e, t, n, i) => (fd(e, t, "write to private field"),
i ? i.call(e, n) : t.set(e, n),
n)
  , Ce = (e, t, n) => (fd(e, t, "access private method"),
n);
var hl = (e, t, n, i) => ({
    set _(o) {
        ee(e, t, o, n)
    },
    get _() {
        return P(e, t, i)
    }
});
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        i(o);
    new MutationObserver(o => {
        for (const l of o)
            if (l.type === "childList")
                for (const u of l.addedNodes)
                    u.tagName === "LINK" && u.rel === "modulepreload" && i(u)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const l = {};
        return o.integrity && (l.integrity = o.integrity),
        o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function i(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const l = n(o);
        fetch(o.href, l)
    }
}
)();
function Zb(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var hd = {
    exports: {}
}
  , po = {}
  , pd = {
    exports: {}
}
  , Te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ug;
function eE() {
    if (Ug)
        return Te;
    Ug = 1;
    var e = Symbol.for("react.element")
      , t = Symbol.for("react.portal")
      , n = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , l = Symbol.for("react.provider")
      , u = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , f = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function v(L) {
        return L === null || typeof L != "object" ? null : (L = y && L[y] || L["@@iterator"],
        typeof L == "function" ? L : null)
    }
    var x = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , b = Object.assign
      , C = {};
    function E(L, W, le) {
        this.props = L,
        this.context = W,
        this.refs = C,
        this.updater = le || x
    }
    E.prototype.isReactComponent = {},
    E.prototype.setState = function(L, W) {
        if (typeof L != "object" && typeof L != "function" && L != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, L, W, "setState")
    }
    ,
    E.prototype.forceUpdate = function(L) {
        this.updater.enqueueForceUpdate(this, L, "forceUpdate")
    }
    ;
    function T() {}
    T.prototype = E.prototype;
    function M(L, W, le) {
        this.props = L,
        this.context = W,
        this.refs = C,
        this.updater = le || x
    }
    var O = M.prototype = new T;
    O.constructor = M,
    b(O, E.prototype),
    O.isPureReactComponent = !0;
    var I = Array.isArray
      , z = Object.prototype.hasOwnProperty
      , G = {
        current: null
    }
      , J = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function _(L, W, le) {
        var pe, be = {}, Pe = null, xe = null;
        if (W != null)
            for (pe in W.ref !== void 0 && (xe = W.ref),
            W.key !== void 0 && (Pe = "" + W.key),
            W)
                z.call(W, pe) && !J.hasOwnProperty(pe) && (be[pe] = W[pe]);
        var Ae = arguments.length - 2;
        if (Ae === 1)
            be.children = le;
        else if (1 < Ae) {
            for (var Le = Array(Ae), Je = 0; Je < Ae; Je++)
                Le[Je] = arguments[Je + 2];
            be.children = Le
        }
        if (L && L.defaultProps)
            for (pe in Ae = L.defaultProps,
            Ae)
                be[pe] === void 0 && (be[pe] = Ae[pe]);
        return {
            $$typeof: e,
            type: L,
            key: Pe,
            ref: xe,
            props: be,
            _owner: G.current
        }
    }
    function D(L, W) {
        return {
            $$typeof: e,
            type: L.type,
            key: W,
            ref: L.ref,
            props: L.props,
            _owner: L._owner
        }
    }
    function $(L) {
        return typeof L == "object" && L !== null && L.$$typeof === e
    }
    function Y(L) {
        var W = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + L.replace(/[=:]/g, function(le) {
            return W[le]
        })
    }
    var H = /\/+/g;
    function ne(L, W) {
        return typeof L == "object" && L !== null && L.key != null ? Y("" + L.key) : W.toString(36)
    }
    function we(L, W, le, pe, be) {
        var Pe = typeof L;
        (Pe === "undefined" || Pe === "boolean") && (L = null);
        var xe = !1;
        if (L === null)
            xe = !0;
        else
            switch (Pe) {
            case "string":
            case "number":
                xe = !0;
                break;
            case "object":
                switch (L.$$typeof) {
                case e:
                case t:
                    xe = !0
                }
            }
        if (xe)
            return xe = L,
            be = be(xe),
            L = pe === "" ? "." + ne(xe, 0) : pe,
            I(be) ? (le = "",
            L != null && (le = L.replace(H, "$&/") + "/"),
            we(be, W, le, "", function(Je) {
                return Je
            })) : be != null && ($(be) && (be = D(be, le + (!be.key || xe && xe.key === be.key ? "" : ("" + be.key).replace(H, "$&/") + "/") + L)),
            W.push(be)),
            1;
        if (xe = 0,
        pe = pe === "" ? "." : pe + ":",
        I(L))
            for (var Ae = 0; Ae < L.length; Ae++) {
                Pe = L[Ae];
                var Le = pe + ne(Pe, Ae);
                xe += we(Pe, W, le, Le, be)
            }
        else if (Le = v(L),
        typeof Le == "function")
            for (L = Le.call(L),
            Ae = 0; !(Pe = L.next()).done; )
                Pe = Pe.value,
                Le = pe + ne(Pe, Ae++),
                xe += we(Pe, W, le, Le, be);
        else if (Pe === "object")
            throw W = String(L),
            Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
        return xe
    }
    function fe(L, W, le) {
        if (L == null)
            return L;
        var pe = []
          , be = 0;
        return we(L, pe, "", "", function(Pe) {
            return W.call(le, Pe, be++)
        }),
        pe
    }
    function he(L) {
        if (L._status === -1) {
            var W = L._result;
            W = W(),
            W.then(function(le) {
                (L._status === 0 || L._status === -1) && (L._status = 1,
                L._result = le)
            }, function(le) {
                (L._status === 0 || L._status === -1) && (L._status = 2,
                L._result = le)
            }),
            L._status === -1 && (L._status = 0,
            L._result = W)
        }
        if (L._status === 1)
            return L._result.default;
        throw L._result
    }
    var de = {
        current: null
    }
      , B = {
        transition: null
    }
      , ae = {
        ReactCurrentDispatcher: de,
        ReactCurrentBatchConfig: B,
        ReactCurrentOwner: G
    };
    function Z() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Te.Children = {
        map: fe,
        forEach: function(L, W, le) {
            fe(L, function() {
                W.apply(this, arguments)
            }, le)
        },
        count: function(L) {
            var W = 0;
            return fe(L, function() {
                W++
            }),
            W
        },
        toArray: function(L) {
            return fe(L, function(W) {
                return W
            }) || []
        },
        only: function(L) {
            if (!$(L))
                throw Error("React.Children.only expected to receive a single React element child.");
            return L
        }
    },
    Te.Component = E,
    Te.Fragment = n,
    Te.Profiler = o,
    Te.PureComponent = M,
    Te.StrictMode = i,
    Te.Suspense = f,
    Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae,
    Te.act = Z,
    Te.cloneElement = function(L, W, le) {
        if (L == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
        var pe = b({}, L.props)
          , be = L.key
          , Pe = L.ref
          , xe = L._owner;
        if (W != null) {
            if (W.ref !== void 0 && (Pe = W.ref,
            xe = G.current),
            W.key !== void 0 && (be = "" + W.key),
            L.type && L.type.defaultProps)
                var Ae = L.type.defaultProps;
            for (Le in W)
                z.call(W, Le) && !J.hasOwnProperty(Le) && (pe[Le] = W[Le] === void 0 && Ae !== void 0 ? Ae[Le] : W[Le])
        }
        var Le = arguments.length - 2;
        if (Le === 1)
            pe.children = le;
        else if (1 < Le) {
            Ae = Array(Le);
            for (var Je = 0; Je < Le; Je++)
                Ae[Je] = arguments[Je + 2];
            pe.children = Ae
        }
        return {
            $$typeof: e,
            type: L.type,
            key: be,
            ref: Pe,
            props: pe,
            _owner: xe
        }
    }
    ,
    Te.createContext = function(L) {
        return L = {
            $$typeof: u,
            _currentValue: L,
            _currentValue2: L,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        L.Provider = {
            $$typeof: l,
            _context: L
        },
        L.Consumer = L
    }
    ,
    Te.createElement = _,
    Te.createFactory = function(L) {
        var W = _.bind(null, L);
        return W.type = L,
        W
    }
    ,
    Te.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Te.forwardRef = function(L) {
        return {
            $$typeof: d,
            render: L
        }
    }
    ,
    Te.isValidElement = $,
    Te.lazy = function(L) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: L
            },
            _init: he
        }
    }
    ,
    Te.memo = function(L, W) {
        return {
            $$typeof: p,
            type: L,
            compare: W === void 0 ? null : W
        }
    }
    ,
    Te.startTransition = function(L) {
        var W = B.transition;
        B.transition = {};
        try {
            L()
        } finally {
            B.transition = W
        }
    }
    ,
    Te.unstable_act = Z,
    Te.useCallback = function(L, W) {
        return de.current.useCallback(L, W)
    }
    ,
    Te.useContext = function(L) {
        return de.current.useContext(L)
    }
    ,
    Te.useDebugValue = function() {}
    ,
    Te.useDeferredValue = function(L) {
        return de.current.useDeferredValue(L)
    }
    ,
    Te.useEffect = function(L, W) {
        return de.current.useEffect(L, W)
    }
    ,
    Te.useId = function() {
        return de.current.useId()
    }
    ,
    Te.useImperativeHandle = function(L, W, le) {
        return de.current.useImperativeHandle(L, W, le)
    }
    ,
    Te.useInsertionEffect = function(L, W) {
        return de.current.useInsertionEffect(L, W)
    }
    ,
    Te.useLayoutEffect = function(L, W) {
        return de.current.useLayoutEffect(L, W)
    }
    ,
    Te.useMemo = function(L, W) {
        return de.current.useMemo(L, W)
    }
    ,
    Te.useReducer = function(L, W, le) {
        return de.current.useReducer(L, W, le)
    }
    ,
    Te.useRef = function(L) {
        return de.current.useRef(L)
    }
    ,
    Te.useState = function(L) {
        return de.current.useState(L)
    }
    ,
    Te.useSyncExternalStore = function(L, W, le) {
        return de.current.useSyncExternalStore(L, W, le)
    }
    ,
    Te.useTransition = function() {
        return de.current.useTransition()
    }
    ,
    Te.version = "18.3.1",
    Te
}
var zg;
function Bf() {
    return zg || (zg = 1,
    pd.exports = eE()),
    pd.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $g;
function tE() {
    if ($g)
        return po;
    $g = 1;
    var e = Bf()
      , t = Symbol.for("react.element")
      , n = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function u(d, f, p) {
        var g, y = {}, v = null, x = null;
        p !== void 0 && (v = "" + p),
        f.key !== void 0 && (v = "" + f.key),
        f.ref !== void 0 && (x = f.ref);
        for (g in f)
            i.call(f, g) && !l.hasOwnProperty(g) && (y[g] = f[g]);
        if (d && d.defaultProps)
            for (g in f = d.defaultProps,
            f)
                y[g] === void 0 && (y[g] = f[g]);
        return {
            $$typeof: t,
            type: d,
            key: v,
            ref: x,
            props: y,
            _owner: o.current
        }
    }
    return po.Fragment = n,
    po.jsx = u,
    po.jsxs = u,
    po
}
var Hg;
function nE() {
    return Hg || (Hg = 1,
    hd.exports = tE()),
    hd.exports
}
var R = nE()
  , S = Bf()
  , pl = {}
  , md = {
    exports: {}
}
  , Ot = {}
  , gd = {
    exports: {}
}
  , yd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wg;
function rE() {
    return Wg || (Wg = 1,
    (function(e) {
        function t(B, ae) {
            var Z = B.length;
            B.push(ae);
            e: for (; 0 < Z; ) {
                var L = Z - 1 >>> 1
                  , W = B[L];
                if (0 < o(W, ae))
                    B[L] = ae,
                    B[Z] = W,
                    Z = L;
                else
                    break e
            }
        }
        function n(B) {
            return B.length === 0 ? null : B[0]
        }
        function i(B) {
            if (B.length === 0)
                return null;
            var ae = B[0]
              , Z = B.pop();
            if (Z !== ae) {
                B[0] = Z;
                e: for (var L = 0, W = B.length, le = W >>> 1; L < le; ) {
                    var pe = 2 * (L + 1) - 1
                      , be = B[pe]
                      , Pe = pe + 1
                      , xe = B[Pe];
                    if (0 > o(be, Z))
                        Pe < W && 0 > o(xe, be) ? (B[L] = xe,
                        B[Pe] = Z,
                        L = Pe) : (B[L] = be,
                        B[pe] = Z,
                        L = pe);
                    else if (Pe < W && 0 > o(xe, Z))
                        B[L] = xe,
                        B[Pe] = Z,
                        L = Pe;
                    else
                        break e
                }
            }
            return ae
        }
        function o(B, ae) {
            var Z = B.sortIndex - ae.sortIndex;
            return Z !== 0 ? Z : B.id - ae.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            e.unstable_now = function() {
                return l.now()
            }
        } else {
            var u = Date
              , d = u.now();
            e.unstable_now = function() {
                return u.now() - d
            }
        }
        var f = []
          , p = []
          , g = 1
          , y = null
          , v = 3
          , x = !1
          , b = !1
          , C = !1
          , E = typeof setTimeout == "function" ? setTimeout : null
          , T = typeof clearTimeout == "function" ? clearTimeout : null
          , M = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(B) {
            for (var ae = n(p); ae !== null; ) {
                if (ae.callback === null)
                    i(p);
                else if (ae.startTime <= B)
                    i(p),
                    ae.sortIndex = ae.expirationTime,
                    t(f, ae);
                else
                    break;
                ae = n(p)
            }
        }
        function I(B) {
            if (C = !1,
            O(B),
            !b)
                if (n(f) !== null)
                    b = !0,
                    he(z);
                else {
                    var ae = n(p);
                    ae !== null && de(I, ae.startTime - B)
                }
        }
        function z(B, ae) {
            b = !1,
            C && (C = !1,
            T(_),
            _ = -1),
            x = !0;
            var Z = v;
            try {
                for (O(ae),
                y = n(f); y !== null && (!(y.expirationTime > ae) || B && !Y()); ) {
                    var L = y.callback;
                    if (typeof L == "function") {
                        y.callback = null,
                        v = y.priorityLevel;
                        var W = L(y.expirationTime <= ae);
                        ae = e.unstable_now(),
                        typeof W == "function" ? y.callback = W : y === n(f) && i(f),
                        O(ae)
                    } else
                        i(f);
                    y = n(f)
                }
                if (y !== null)
                    var le = !0;
                else {
                    var pe = n(p);
                    pe !== null && de(I, pe.startTime - ae),
                    le = !1
                }
                return le
            } finally {
                y = null,
                v = Z,
                x = !1
            }
        }
        var G = !1
          , J = null
          , _ = -1
          , D = 5
          , $ = -1;
        function Y() {
            return !(e.unstable_now() - $ < D)
        }
        function H() {
            if (J !== null) {
                var B = e.unstable_now();
                $ = B;
                var ae = !0;
                try {
                    ae = J(!0, B)
                } finally {
                    ae ? ne() : (G = !1,
                    J = null)
                }
            } else
                G = !1
        }
        var ne;
        if (typeof M == "function")
            ne = function() {
                M(H)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var we = new MessageChannel
              , fe = we.port2;
            we.port1.onmessage = H,
            ne = function() {
                fe.postMessage(null)
            }
        } else
            ne = function() {
                E(H, 0)
            }
            ;
        function he(B) {
            J = B,
            G || (G = !0,
            ne())
        }
        function de(B, ae) {
            _ = E(function() {
                B(e.unstable_now())
            }, ae)
        }
        e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function(B) {
            B.callback = null
        }
        ,
        e.unstable_continueExecution = function() {
            b || x || (b = !0,
            he(z))
        }
        ,
        e.unstable_forceFrameRate = function(B) {
            0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < B ? Math.floor(1e3 / B) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function() {
            return v
        }
        ,
        e.unstable_getFirstCallbackNode = function() {
            return n(f)
        }
        ,
        e.unstable_next = function(B) {
            switch (v) {
            case 1:
            case 2:
            case 3:
                var ae = 3;
                break;
            default:
                ae = v
            }
            var Z = v;
            v = ae;
            try {
                return B()
            } finally {
                v = Z
            }
        }
        ,
        e.unstable_pauseExecution = function() {}
        ,
        e.unstable_requestPaint = function() {}
        ,
        e.unstable_runWithPriority = function(B, ae) {
            switch (B) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                B = 3
            }
            var Z = v;
            v = B;
            try {
                return ae()
            } finally {
                v = Z
            }
        }
        ,
        e.unstable_scheduleCallback = function(B, ae, Z) {
            var L = e.unstable_now();
            switch (typeof Z == "object" && Z !== null ? (Z = Z.delay,
            Z = typeof Z == "number" && 0 < Z ? L + Z : L) : Z = L,
            B) {
            case 1:
                var W = -1;
                break;
            case 2:
                W = 250;
                break;
            case 5:
                W = 1073741823;
                break;
            case 4:
                W = 1e4;
                break;
            default:
                W = 5e3
            }
            return W = Z + W,
            B = {
                id: g++,
                callback: ae,
                priorityLevel: B,
                startTime: Z,
                expirationTime: W,
                sortIndex: -1
            },
            Z > L ? (B.sortIndex = Z,
            t(p, B),
            n(f) === null && B === n(p) && (C ? (T(_),
            _ = -1) : C = !0,
            de(I, Z - L))) : (B.sortIndex = W,
            t(f, B),
            b || x || (b = !0,
            he(z))),
            B
        }
        ,
        e.unstable_shouldYield = Y,
        e.unstable_wrapCallback = function(B) {
            var ae = v;
            return function() {
                var Z = v;
                v = ae;
                try {
                    return B.apply(this, arguments)
                } finally {
                    v = Z
                }
            }
        }
    }
    )(yd)),
    yd
}
var qg;
function sE() {
    return qg || (qg = 1,
    gd.exports = rE()),
    gd.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kg;
function iE() {
    if (Kg)
        return Ot;
    Kg = 1;
    var e = Bf()
      , t = sE();
    function n(r) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, a = 1; a < arguments.length; a++)
            s += "&args[]=" + encodeURIComponent(arguments[a]);
        return "Minified React error #" + r + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , o = {};
    function l(r, s) {
        u(r, s),
        u(r + "Capture", s)
    }
    function u(r, s) {
        for (o[r] = s,
        r = 0; r < s.length; r++)
            i.add(s[r])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , f = Object.prototype.hasOwnProperty
      , p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , g = {}
      , y = {};
    function v(r) {
        return f.call(y, r) ? !0 : f.call(g, r) ? !1 : p.test(r) ? y[r] = !0 : (g[r] = !0,
        !1)
    }
    function x(r, s, a, c) {
        if (a !== null && a.type === 0)
            return !1;
        switch (typeof s) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return c ? !1 : a !== null ? !a.acceptsBooleans : (r = r.toLowerCase().slice(0, 5),
            r !== "data-" && r !== "aria-");
        default:
            return !1
        }
    }
    function b(r, s, a, c) {
        if (s === null || typeof s > "u" || x(r, s, a, c))
            return !0;
        if (c)
            return !1;
        if (a !== null)
            switch (a.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
            }
        return !1
    }
    function C(r, s, a, c, h, m, w) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4,
        this.attributeName = c,
        this.attributeNamespace = h,
        this.mustUseProperty = a,
        this.propertyName = r,
        this.type = s,
        this.sanitizeURL = m,
        this.removeEmptyString = w
    }
    var E = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
        E[r] = new C(r,0,!1,r,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
        var s = r[0];
        E[s] = new C(s,1,!1,r[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
        E[r] = new C(r,2,!1,r.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
        E[r] = new C(r,2,!1,r,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
        E[r] = new C(r,3,!1,r.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(r) {
        E[r] = new C(r,3,!0,r,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(r) {
        E[r] = new C(r,4,!1,r,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(r) {
        E[r] = new C(r,6,!1,r,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(r) {
        E[r] = new C(r,5,!1,r.toLowerCase(),null,!1,!1)
    });
    var T = /[\-:]([a-z])/g;
    function M(r) {
        return r[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
        var s = r.replace(T, M);
        E[s] = new C(s,1,!1,r,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
        var s = r.replace(T, M);
        E[s] = new C(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
        var s = r.replace(T, M);
        E[s] = new C(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(r) {
        E[r] = new C(r,1,!1,r.toLowerCase(),null,!1,!1)
    }),
    E.xlinkHref = new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(r) {
        E[r] = new C(r,1,!1,r.toLowerCase(),null,!0,!0)
    });
    function O(r, s, a, c) {
        var h = E.hasOwnProperty(s) ? E[s] : null;
        (h !== null ? h.type !== 0 : c || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (b(s, a, h, c) && (a = null),
        c || h === null ? v(s) && (a === null ? r.removeAttribute(s) : r.setAttribute(s, "" + a)) : h.mustUseProperty ? r[h.propertyName] = a === null ? h.type === 3 ? !1 : "" : a : (s = h.attributeName,
        c = h.attributeNamespace,
        a === null ? r.removeAttribute(s) : (h = h.type,
        a = h === 3 || h === 4 && a === !0 ? "" : "" + a,
        c ? r.setAttributeNS(c, s, a) : r.setAttribute(s, a))))
    }
    var I = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , z = Symbol.for("react.element")
      , G = Symbol.for("react.portal")
      , J = Symbol.for("react.fragment")
      , _ = Symbol.for("react.strict_mode")
      , D = Symbol.for("react.profiler")
      , $ = Symbol.for("react.provider")
      , Y = Symbol.for("react.context")
      , H = Symbol.for("react.forward_ref")
      , ne = Symbol.for("react.suspense")
      , we = Symbol.for("react.suspense_list")
      , fe = Symbol.for("react.memo")
      , he = Symbol.for("react.lazy")
      , de = Symbol.for("react.offscreen")
      , B = Symbol.iterator;
    function ae(r) {
        return r === null || typeof r != "object" ? null : (r = B && r[B] || r["@@iterator"],
        typeof r == "function" ? r : null)
    }
    var Z = Object.assign, L;
    function W(r) {
        if (L === void 0)
            try {
                throw Error()
            } catch (a) {
                var s = a.stack.trim().match(/\n( *(at )?)/);
                L = s && s[1] || ""
            }
        return `
` + L + r
    }
    var le = !1;
    function pe(r, s) {
        if (!r || le)
            return "";
        le = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(s.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (V) {
                        var c = V
                    }
                    Reflect.construct(r, [], s)
                } else {
                    try {
                        s.call()
                    } catch (V) {
                        c = V
                    }
                    r.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (V) {
                    c = V
                }
                r()
            }
        } catch (V) {
            if (V && c && typeof V.stack == "string") {
                for (var h = V.stack.split(`
`), m = c.stack.split(`
`), w = h.length - 1, k = m.length - 1; 1 <= w && 0 <= k && h[w] !== m[k]; )
                    k--;
                for (; 1 <= w && 0 <= k; w--,
                k--)
                    if (h[w] !== m[k]) {
                        if (w !== 1 || k !== 1)
                            do
                                if (w--,
                                k--,
                                0 > k || h[w] !== m[k]) {
                                    var A = `
` + h[w].replace(" at new ", " at ");
                                    return r.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", r.displayName)),
                                    A
                                }
                            while (1 <= w && 0 <= k);
                        break
                    }
            }
        } finally {
            le = !1,
            Error.prepareStackTrace = a
        }
        return (r = r ? r.displayName || r.name : "") ? W(r) : ""
    }
    function be(r) {
        switch (r.tag) {
        case 5:
            return W(r.type);
        case 16:
            return W("Lazy");
        case 13:
            return W("Suspense");
        case 19:
            return W("SuspenseList");
        case 0:
        case 2:
        case 15:
            return r = pe(r.type, !1),
            r;
        case 11:
            return r = pe(r.type.render, !1),
            r;
        case 1:
            return r = pe(r.type, !0),
            r;
        default:
            return ""
        }
    }
    function Pe(r) {
        if (r == null)
            return null;
        if (typeof r == "function")
            return r.displayName || r.name || null;
        if (typeof r == "string")
            return r;
        switch (r) {
        case J:
            return "Fragment";
        case G:
            return "Portal";
        case D:
            return "Profiler";
        case _:
            return "StrictMode";
        case ne:
            return "Suspense";
        case we:
            return "SuspenseList"
        }
        if (typeof r == "object")
            switch (r.$$typeof) {
            case Y:
                return (r.displayName || "Context") + ".Consumer";
            case $:
                return (r._context.displayName || "Context") + ".Provider";
            case H:
                var s = r.render;
                return r = r.displayName,
                r || (r = s.displayName || s.name || "",
                r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"),
                r;
            case fe:
                return s = r.displayName || null,
                s !== null ? s : Pe(r.type) || "Memo";
            case he:
                s = r._payload,
                r = r._init;
                try {
                    return Pe(r(s))
                } catch {}
            }
        return null
    }
    function xe(r) {
        var s = r.type;
        switch (r.tag) {
        case 24:
            return "Cache";
        case 9:
            return (s.displayName || "Context") + ".Consumer";
        case 10:
            return (s._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return r = s.render,
            r = r.displayName || r.name || "",
            s.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return s;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Pe(s);
        case 8:
            return s === _ ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof s == "function")
                return s.displayName || s.name || null;
            if (typeof s == "string")
                return s
        }
        return null
    }
    function Ae(r) {
        switch (typeof r) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return r;
        case "object":
            return r;
        default:
            return ""
        }
    }
    function Le(r) {
        var s = r.type;
        return (r = r.nodeName) && r.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }
    function Je(r) {
        var s = Le(r) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(r.constructor.prototype, s)
          , c = "" + r[s];
        if (!r.hasOwnProperty(s) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var h = a.get
              , m = a.set;
            return Object.defineProperty(r, s, {
                configurable: !0,
                get: function() {
                    return h.call(this)
                },
                set: function(w) {
                    c = "" + w,
                    m.call(this, w)
                }
            }),
            Object.defineProperty(r, s, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return c
                },
                setValue: function(w) {
                    c = "" + w
                },
                stopTracking: function() {
                    r._valueTracker = null,
                    delete r[s]
                }
            }
        }
    }
    function nr(r) {
        r._valueTracker || (r._valueTracker = Je(r))
    }
    function Vr(r) {
        if (!r)
            return !1;
        var s = r._valueTracker;
        if (!s)
            return !0;
        var a = s.getValue()
          , c = "";
        return r && (c = Le(r) ? r.checked ? "true" : "false" : r.value),
        r = c,
        r !== a ? (s.setValue(r),
        !0) : !1
    }
    function sa(r) {
        if (r = r || (typeof document < "u" ? document : void 0),
        typeof r > "u")
            return null;
        try {
            return r.activeElement || r.body
        } catch {
            return r.body
        }
    }
    function wu(r, s) {
        var a = s.checked;
        return Z({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: a ?? r._wrapperState.initialChecked
        })
    }
    function Kh(r, s) {
        var a = s.defaultValue == null ? "" : s.defaultValue
          , c = s.checked != null ? s.checked : s.defaultChecked;
        a = Ae(s.value != null ? s.value : a),
        r._wrapperState = {
            initialChecked: c,
            initialValue: a,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }
    function Qh(r, s) {
        s = s.checked,
        s != null && O(r, "checked", s, !1)
    }
    function xu(r, s) {
        Qh(r, s);
        var a = Ae(s.value)
          , c = s.type;
        if (a != null)
            c === "number" ? (a === 0 && r.value === "" || r.value != a) && (r.value = "" + a) : r.value !== "" + a && (r.value = "" + a);
        else if (c === "submit" || c === "reset") {
            r.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? Su(r, s.type, a) : s.hasOwnProperty("defaultValue") && Su(r, s.type, Ae(s.defaultValue)),
        s.checked == null && s.defaultChecked != null && (r.defaultChecked = !!s.defaultChecked)
    }
    function Gh(r, s, a) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var c = s.type;
            if (!(c !== "submit" && c !== "reset" || s.value !== void 0 && s.value !== null))
                return;
            s = "" + r._wrapperState.initialValue,
            a || s === r.value || (r.value = s),
            r.defaultValue = s
        }
        a = r.name,
        a !== "" && (r.name = ""),
        r.defaultChecked = !!r._wrapperState.initialChecked,
        a !== "" && (r.name = a)
    }
    function Su(r, s, a) {
        (s !== "number" || sa(r.ownerDocument) !== r) && (a == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + a && (r.defaultValue = "" + a))
    }
    var Ri = Array.isArray;
    function Cs(r, s, a, c) {
        if (r = r.options,
        s) {
            s = {};
            for (var h = 0; h < a.length; h++)
                s["$" + a[h]] = !0;
            for (a = 0; a < r.length; a++)
                h = s.hasOwnProperty("$" + r[a].value),
                r[a].selected !== h && (r[a].selected = h),
                h && c && (r[a].defaultSelected = !0)
        } else {
            for (a = "" + Ae(a),
            s = null,
            h = 0; h < r.length; h++) {
                if (r[h].value === a) {
                    r[h].selected = !0,
                    c && (r[h].defaultSelected = !0);
                    return
                }
                s !== null || r[h].disabled || (s = r[h])
            }
            s !== null && (s.selected = !0)
        }
    }
    function bu(r, s) {
        if (s.dangerouslySetInnerHTML != null)
            throw Error(n(91));
        return Z({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + r._wrapperState.initialValue
        })
    }
    function Xh(r, s) {
        var a = s.value;
        if (a == null) {
            if (a = s.children,
            s = s.defaultValue,
            a != null) {
                if (s != null)
                    throw Error(n(92));
                if (Ri(a)) {
                    if (1 < a.length)
                        throw Error(n(93));
                    a = a[0]
                }
                s = a
            }
            s == null && (s = ""),
            a = s
        }
        r._wrapperState = {
            initialValue: Ae(a)
        }
    }
    function Yh(r, s) {
        var a = Ae(s.value)
          , c = Ae(s.defaultValue);
        a != null && (a = "" + a,
        a !== r.value && (r.value = a),
        s.defaultValue == null && r.defaultValue !== a && (r.defaultValue = a)),
        c != null && (r.defaultValue = "" + c)
    }
    function Jh(r) {
        var s = r.textContent;
        s === r._wrapperState.initialValue && s !== "" && s !== null && (r.value = s)
    }
    function Zh(r) {
        switch (r) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Eu(r, s) {
        return r == null || r === "http://www.w3.org/1999/xhtml" ? Zh(s) : r === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r
    }
    var ia, ep = (function(r) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, a, c, h) {
            MSApp.execUnsafeLocalFunction(function() {
                return r(s, a, c, h)
            })
        }
        : r
    }
    )(function(r, s) {
        if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in r)
            r.innerHTML = s;
        else {
            for (ia = ia || document.createElement("div"),
            ia.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = ia.firstChild; r.firstChild; )
                r.removeChild(r.firstChild);
            for (; s.firstChild; )
                r.appendChild(s.firstChild)
        }
    });
    function _i(r, s) {
        if (s) {
            var a = r.firstChild;
            if (a && a === r.lastChild && a.nodeType === 3) {
                a.nodeValue = s;
                return
            }
        }
        r.textContent = s
    }
    var Ai = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , r1 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ai).forEach(function(r) {
        r1.forEach(function(s) {
            s = s + r.charAt(0).toUpperCase() + r.substring(1),
            Ai[s] = Ai[r]
        })
    });
    function tp(r, s, a) {
        return s == null || typeof s == "boolean" || s === "" ? "" : a || typeof s != "number" || s === 0 || Ai.hasOwnProperty(r) && Ai[r] ? ("" + s).trim() : s + "px"
    }
    function np(r, s) {
        r = r.style;
        for (var a in s)
            if (s.hasOwnProperty(a)) {
                var c = a.indexOf("--") === 0
                  , h = tp(a, s[a], c);
                a === "float" && (a = "cssFloat"),
                c ? r.setProperty(a, h) : r[a] = h
            }
    }
    var s1 = Z({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Cu(r, s) {
        if (s) {
            if (s1[r] && (s.children != null || s.dangerouslySetInnerHTML != null))
                throw Error(n(137, r));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null)
                    throw Error(n(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html"in s.dangerouslySetInnerHTML))
                    throw Error(n(61))
            }
            if (s.style != null && typeof s.style != "object")
                throw Error(n(62))
        }
    }
    function ku(r, s) {
        if (r.indexOf("-") === -1)
            return typeof s.is == "string";
        switch (r) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Tu = null;
    function Pu(r) {
        return r = r.target || r.srcElement || window,
        r.correspondingUseElement && (r = r.correspondingUseElement),
        r.nodeType === 3 ? r.parentNode : r
    }
    var Ru = null
      , ks = null
      , Ts = null;
    function rp(r) {
        if (r = Ji(r)) {
            if (typeof Ru != "function")
                throw Error(n(280));
            var s = r.stateNode;
            s && (s = Ra(s),
            Ru(r.stateNode, r.type, s))
        }
    }
    function sp(r) {
        ks ? Ts ? Ts.push(r) : Ts = [r] : ks = r
    }
    function ip() {
        if (ks) {
            var r = ks
              , s = Ts;
            if (Ts = ks = null,
            rp(r),
            s)
                for (r = 0; r < s.length; r++)
                    rp(s[r])
        }
    }
    function op(r, s) {
        return r(s)
    }
    function ap() {}
    var _u = !1;
    function lp(r, s, a) {
        if (_u)
            return r(s, a);
        _u = !0;
        try {
            return op(r, s, a)
        } finally {
            _u = !1,
            (ks !== null || Ts !== null) && (ap(),
            ip())
        }
    }
    function Ni(r, s) {
        var a = r.stateNode;
        if (a === null)
            return null;
        var c = Ra(a);
        if (c === null)
            return null;
        a = c[s];
        e: switch (s) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (c = !c.disabled) || (r = r.type,
            c = !(r === "button" || r === "input" || r === "select" || r === "textarea")),
            r = !c;
            break e;
        default:
            r = !1
        }
        if (r)
            return null;
        if (a && typeof a != "function")
            throw Error(n(231, s, typeof a));
        return a
    }
    var Au = !1;
    if (d)
        try {
            var Oi = {};
            Object.defineProperty(Oi, "passive", {
                get: function() {
                    Au = !0
                }
            }),
            window.addEventListener("test", Oi, Oi),
            window.removeEventListener("test", Oi, Oi)
        } catch {
            Au = !1
        }
    function i1(r, s, a, c, h, m, w, k, A) {
        var V = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(a, V)
        } catch (K) {
            this.onError(K)
        }
    }
    var Li = !1
      , oa = null
      , aa = !1
      , Nu = null
      , o1 = {
        onError: function(r) {
            Li = !0,
            oa = r
        }
    };
    function a1(r, s, a, c, h, m, w, k, A) {
        Li = !1,
        oa = null,
        i1.apply(o1, arguments)
    }
    function l1(r, s, a, c, h, m, w, k, A) {
        if (a1.apply(this, arguments),
        Li) {
            if (Li) {
                var V = oa;
                Li = !1,
                oa = null
            } else
                throw Error(n(198));
            aa || (aa = !0,
            Nu = V)
        }
    }
    function Br(r) {
        var s = r
          , a = r;
        if (r.alternate)
            for (; s.return; )
                s = s.return;
        else {
            r = s;
            do
                s = r,
                (s.flags & 4098) !== 0 && (a = s.return),
                r = s.return;
            while (r)
        }
        return s.tag === 3 ? a : null
    }
    function up(r) {
        if (r.tag === 13) {
            var s = r.memoizedState;
            if (s === null && (r = r.alternate,
            r !== null && (s = r.memoizedState)),
            s !== null)
                return s.dehydrated
        }
        return null
    }
    function cp(r) {
        if (Br(r) !== r)
            throw Error(n(188))
    }
    function u1(r) {
        var s = r.alternate;
        if (!s) {
            if (s = Br(r),
            s === null)
                throw Error(n(188));
            return s !== r ? null : r
        }
        for (var a = r, c = s; ; ) {
            var h = a.return;
            if (h === null)
                break;
            var m = h.alternate;
            if (m === null) {
                if (c = h.return,
                c !== null) {
                    a = c;
                    continue
                }
                break
            }
            if (h.child === m.child) {
                for (m = h.child; m; ) {
                    if (m === a)
                        return cp(h),
                        r;
                    if (m === c)
                        return cp(h),
                        s;
                    m = m.sibling
                }
                throw Error(n(188))
            }
            if (a.return !== c.return)
                a = h,
                c = m;
            else {
                for (var w = !1, k = h.child; k; ) {
                    if (k === a) {
                        w = !0,
                        a = h,
                        c = m;
                        break
                    }
                    if (k === c) {
                        w = !0,
                        c = h,
                        a = m;
                        break
                    }
                    k = k.sibling
                }
                if (!w) {
                    for (k = m.child; k; ) {
                        if (k === a) {
                            w = !0,
                            a = m,
                            c = h;
                            break
                        }
                        if (k === c) {
                            w = !0,
                            c = m,
                            a = h;
                            break
                        }
                        k = k.sibling
                    }
                    if (!w)
                        throw Error(n(189))
                }
            }
            if (a.alternate !== c)
                throw Error(n(190))
        }
        if (a.tag !== 3)
            throw Error(n(188));
        return a.stateNode.current === a ? r : s
    }
    function dp(r) {
        return r = u1(r),
        r !== null ? fp(r) : null
    }
    function fp(r) {
        if (r.tag === 5 || r.tag === 6)
            return r;
        for (r = r.child; r !== null; ) {
            var s = fp(r);
            if (s !== null)
                return s;
            r = r.sibling
        }
        return null
    }
    var hp = t.unstable_scheduleCallback
      , pp = t.unstable_cancelCallback
      , c1 = t.unstable_shouldYield
      , d1 = t.unstable_requestPaint
      , Qe = t.unstable_now
      , f1 = t.unstable_getCurrentPriorityLevel
      , Ou = t.unstable_ImmediatePriority
      , mp = t.unstable_UserBlockingPriority
      , la = t.unstable_NormalPriority
      , h1 = t.unstable_LowPriority
      , gp = t.unstable_IdlePriority
      , ua = null
      , mn = null;
    function p1(r) {
        if (mn && typeof mn.onCommitFiberRoot == "function")
            try {
                mn.onCommitFiberRoot(ua, r, void 0, (r.current.flags & 128) === 128)
            } catch {}
    }
    var nn = Math.clz32 ? Math.clz32 : y1
      , m1 = Math.log
      , g1 = Math.LN2;
    function y1(r) {
        return r >>>= 0,
        r === 0 ? 32 : 31 - (m1(r) / g1 | 0) | 0
    }
    var ca = 64
      , da = 4194304;
    function Mi(r) {
        switch (r & -r) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return r & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return r & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return r
        }
    }
    function fa(r, s) {
        var a = r.pendingLanes;
        if (a === 0)
            return 0;
        var c = 0
          , h = r.suspendedLanes
          , m = r.pingedLanes
          , w = a & 268435455;
        if (w !== 0) {
            var k = w & ~h;
            k !== 0 ? c = Mi(k) : (m &= w,
            m !== 0 && (c = Mi(m)))
        } else
            w = a & ~h,
            w !== 0 ? c = Mi(w) : m !== 0 && (c = Mi(m));
        if (c === 0)
            return 0;
        if (s !== 0 && s !== c && (s & h) === 0 && (h = c & -c,
        m = s & -s,
        h >= m || h === 16 && (m & 4194240) !== 0))
            return s;
        if ((c & 4) !== 0 && (c |= a & 16),
        s = r.entangledLanes,
        s !== 0)
            for (r = r.entanglements,
            s &= c; 0 < s; )
                a = 31 - nn(s),
                h = 1 << a,
                c |= r[a],
                s &= ~h;
        return c
    }
    function v1(r, s) {
        switch (r) {
        case 1:
        case 2:
        case 4:
            return s + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return s + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function w1(r, s) {
        for (var a = r.suspendedLanes, c = r.pingedLanes, h = r.expirationTimes, m = r.pendingLanes; 0 < m; ) {
            var w = 31 - nn(m)
              , k = 1 << w
              , A = h[w];
            A === -1 ? ((k & a) === 0 || (k & c) !== 0) && (h[w] = v1(k, s)) : A <= s && (r.expiredLanes |= k),
            m &= ~k
        }
    }
    function Lu(r) {
        return r = r.pendingLanes & -1073741825,
        r !== 0 ? r : r & 1073741824 ? 1073741824 : 0
    }
    function yp() {
        var r = ca;
        return ca <<= 1,
        (ca & 4194240) === 0 && (ca = 64),
        r
    }
    function Mu(r) {
        for (var s = [], a = 0; 31 > a; a++)
            s.push(r);
        return s
    }
    function Di(r, s, a) {
        r.pendingLanes |= s,
        s !== 536870912 && (r.suspendedLanes = 0,
        r.pingedLanes = 0),
        r = r.eventTimes,
        s = 31 - nn(s),
        r[s] = a
    }
    function x1(r, s) {
        var a = r.pendingLanes & ~s;
        r.pendingLanes = s,
        r.suspendedLanes = 0,
        r.pingedLanes = 0,
        r.expiredLanes &= s,
        r.mutableReadLanes &= s,
        r.entangledLanes &= s,
        s = r.entanglements;
        var c = r.eventTimes;
        for (r = r.expirationTimes; 0 < a; ) {
            var h = 31 - nn(a)
              , m = 1 << h;
            s[h] = 0,
            c[h] = -1,
            r[h] = -1,
            a &= ~m
        }
    }
    function Du(r, s) {
        var a = r.entangledLanes |= s;
        for (r = r.entanglements; a; ) {
            var c = 31 - nn(a)
              , h = 1 << c;
            h & s | r[c] & s && (r[c] |= s),
            a &= ~h
        }
    }
    var De = 0;
    function vp(r) {
        return r &= -r,
        1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var wp, ju, xp, Sp, bp, Iu = !1, ha = [], rr = null, sr = null, ir = null, ji = new Map, Ii = new Map, or = [], S1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Ep(r, s) {
        switch (r) {
        case "focusin":
        case "focusout":
            rr = null;
            break;
        case "dragenter":
        case "dragleave":
            sr = null;
            break;
        case "mouseover":
        case "mouseout":
            ir = null;
            break;
        case "pointerover":
        case "pointerout":
            ji.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ii.delete(s.pointerId)
        }
    }
    function Fi(r, s, a, c, h, m) {
        return r === null || r.nativeEvent !== m ? (r = {
            blockedOn: s,
            domEventName: a,
            eventSystemFlags: c,
            nativeEvent: m,
            targetContainers: [h]
        },
        s !== null && (s = Ji(s),
        s !== null && ju(s)),
        r) : (r.eventSystemFlags |= c,
        s = r.targetContainers,
        h !== null && s.indexOf(h) === -1 && s.push(h),
        r)
    }
    function b1(r, s, a, c, h) {
        switch (s) {
        case "focusin":
            return rr = Fi(rr, r, s, a, c, h),
            !0;
        case "dragenter":
            return sr = Fi(sr, r, s, a, c, h),
            !0;
        case "mouseover":
            return ir = Fi(ir, r, s, a, c, h),
            !0;
        case "pointerover":
            var m = h.pointerId;
            return ji.set(m, Fi(ji.get(m) || null, r, s, a, c, h)),
            !0;
        case "gotpointercapture":
            return m = h.pointerId,
            Ii.set(m, Fi(Ii.get(m) || null, r, s, a, c, h)),
            !0
        }
        return !1
    }
    function Cp(r) {
        var s = Ur(r.target);
        if (s !== null) {
            var a = Br(s);
            if (a !== null) {
                if (s = a.tag,
                s === 13) {
                    if (s = up(a),
                    s !== null) {
                        r.blockedOn = s,
                        bp(r.priority, function() {
                            xp(a)
                        });
                        return
                    }
                } else if (s === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    r.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        r.blockedOn = null
    }
    function pa(r) {
        if (r.blockedOn !== null)
            return !1;
        for (var s = r.targetContainers; 0 < s.length; ) {
            var a = Vu(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
            if (a === null) {
                a = r.nativeEvent;
                var c = new a.constructor(a.type,a);
                Tu = c,
                a.target.dispatchEvent(c),
                Tu = null
            } else
                return s = Ji(a),
                s !== null && ju(s),
                r.blockedOn = a,
                !1;
            s.shift()
        }
        return !0
    }
    function kp(r, s, a) {
        pa(r) && a.delete(s)
    }
    function E1() {
        Iu = !1,
        rr !== null && pa(rr) && (rr = null),
        sr !== null && pa(sr) && (sr = null),
        ir !== null && pa(ir) && (ir = null),
        ji.forEach(kp),
        Ii.forEach(kp)
    }
    function Vi(r, s) {
        r.blockedOn === s && (r.blockedOn = null,
        Iu || (Iu = !0,
        t.unstable_scheduleCallback(t.unstable_NormalPriority, E1)))
    }
    function Bi(r) {
        function s(h) {
            return Vi(h, r)
        }
        if (0 < ha.length) {
            Vi(ha[0], r);
            for (var a = 1; a < ha.length; a++) {
                var c = ha[a];
                c.blockedOn === r && (c.blockedOn = null)
            }
        }
        for (rr !== null && Vi(rr, r),
        sr !== null && Vi(sr, r),
        ir !== null && Vi(ir, r),
        ji.forEach(s),
        Ii.forEach(s),
        a = 0; a < or.length; a++)
            c = or[a],
            c.blockedOn === r && (c.blockedOn = null);
        for (; 0 < or.length && (a = or[0],
        a.blockedOn === null); )
            Cp(a),
            a.blockedOn === null && or.shift()
    }
    var Ps = I.ReactCurrentBatchConfig
      , ma = !0;
    function C1(r, s, a, c) {
        var h = De
          , m = Ps.transition;
        Ps.transition = null;
        try {
            De = 1,
            Fu(r, s, a, c)
        } finally {
            De = h,
            Ps.transition = m
        }
    }
    function k1(r, s, a, c) {
        var h = De
          , m = Ps.transition;
        Ps.transition = null;
        try {
            De = 4,
            Fu(r, s, a, c)
        } finally {
            De = h,
            Ps.transition = m
        }
    }
    function Fu(r, s, a, c) {
        if (ma) {
            var h = Vu(r, s, a, c);
            if (h === null)
                nc(r, s, c, ga, a),
                Ep(r, c);
            else if (b1(h, r, s, a, c))
                c.stopPropagation();
            else if (Ep(r, c),
            s & 4 && -1 < S1.indexOf(r)) {
                for (; h !== null; ) {
                    var m = Ji(h);
                    if (m !== null && wp(m),
                    m = Vu(r, s, a, c),
                    m === null && nc(r, s, c, ga, a),
                    m === h)
                        break;
                    h = m
                }
                h !== null && c.stopPropagation()
            } else
                nc(r, s, c, null, a)
        }
    }
    var ga = null;
    function Vu(r, s, a, c) {
        if (ga = null,
        r = Pu(c),
        r = Ur(r),
        r !== null)
            if (s = Br(r),
            s === null)
                r = null;
            else if (a = s.tag,
            a === 13) {
                if (r = up(s),
                r !== null)
                    return r;
                r = null
            } else if (a === 3) {
                if (s.stateNode.current.memoizedState.isDehydrated)
                    return s.tag === 3 ? s.stateNode.containerInfo : null;
                r = null
            } else
                s !== r && (r = null);
        return ga = r,
        null
    }
    function Tp(r) {
        switch (r) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (f1()) {
            case Ou:
                return 1;
            case mp:
                return 4;
            case la:
            case h1:
                return 16;
            case gp:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var ar = null
      , Bu = null
      , ya = null;
    function Pp() {
        if (ya)
            return ya;
        var r, s = Bu, a = s.length, c, h = "value"in ar ? ar.value : ar.textContent, m = h.length;
        for (r = 0; r < a && s[r] === h[r]; r++)
            ;
        var w = a - r;
        for (c = 1; c <= w && s[a - c] === h[m - c]; c++)
            ;
        return ya = h.slice(r, 1 < c ? 1 - c : void 0)
    }
    function va(r) {
        var s = r.keyCode;
        return "charCode"in r ? (r = r.charCode,
        r === 0 && s === 13 && (r = 13)) : r = s,
        r === 10 && (r = 13),
        32 <= r || r === 13 ? r : 0
    }
    function wa() {
        return !0
    }
    function Rp() {
        return !1
    }
    function Ft(r) {
        function s(a, c, h, m, w) {
            this._reactName = a,
            this._targetInst = h,
            this.type = c,
            this.nativeEvent = m,
            this.target = w,
            this.currentTarget = null;
            for (var k in r)
                r.hasOwnProperty(k) && (a = r[k],
                this[k] = a ? a(m) : m[k]);
            return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? wa : Rp,
            this.isPropagationStopped = Rp,
            this
        }
        return Z(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = wa)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = wa)
            },
            persist: function() {},
            isPersistent: wa
        }),
        s
    }
    var Rs = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(r) {
            return r.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Uu = Ft(Rs), Ui = Z({}, Rs, {
        view: 0,
        detail: 0
    }), T1 = Ft(Ui), zu, $u, zi, xa = Z({}, Ui, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Wu,
        button: 0,
        buttons: 0,
        relatedTarget: function(r) {
            return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget
        },
        movementX: function(r) {
            return "movementX"in r ? r.movementX : (r !== zi && (zi && r.type === "mousemove" ? (zu = r.screenX - zi.screenX,
            $u = r.screenY - zi.screenY) : $u = zu = 0,
            zi = r),
            zu)
        },
        movementY: function(r) {
            return "movementY"in r ? r.movementY : $u
        }
    }), _p = Ft(xa), P1 = Z({}, xa, {
        dataTransfer: 0
    }), R1 = Ft(P1), _1 = Z({}, Ui, {
        relatedTarget: 0
    }), Hu = Ft(_1), A1 = Z({}, Rs, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), N1 = Ft(A1), O1 = Z({}, Rs, {
        clipboardData: function(r) {
            return "clipboardData"in r ? r.clipboardData : window.clipboardData
        }
    }), L1 = Ft(O1), M1 = Z({}, Rs, {
        data: 0
    }), Ap = Ft(M1), D1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, j1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, I1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function F1(r) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(r) : (r = I1[r]) ? !!s[r] : !1
    }
    function Wu() {
        return F1
    }
    var V1 = Z({}, Ui, {
        key: function(r) {
            if (r.key) {
                var s = D1[r.key] || r.key;
                if (s !== "Unidentified")
                    return s
            }
            return r.type === "keypress" ? (r = va(r),
            r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? j1[r.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Wu,
        charCode: function(r) {
            return r.type === "keypress" ? va(r) : 0
        },
        keyCode: function(r) {
            return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
        },
        which: function(r) {
            return r.type === "keypress" ? va(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
        }
    })
      , B1 = Ft(V1)
      , U1 = Z({}, xa, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Np = Ft(U1)
      , z1 = Z({}, Ui, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Wu
    })
      , $1 = Ft(z1)
      , H1 = Z({}, Rs, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , W1 = Ft(H1)
      , q1 = Z({}, xa, {
        deltaX: function(r) {
            return "deltaX"in r ? r.deltaX : "wheelDeltaX"in r ? -r.wheelDeltaX : 0
        },
        deltaY: function(r) {
            return "deltaY"in r ? r.deltaY : "wheelDeltaY"in r ? -r.wheelDeltaY : "wheelDelta"in r ? -r.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , K1 = Ft(q1)
      , Q1 = [9, 13, 27, 32]
      , qu = d && "CompositionEvent"in window
      , $i = null;
    d && "documentMode"in document && ($i = document.documentMode);
    var G1 = d && "TextEvent"in window && !$i
      , Op = d && (!qu || $i && 8 < $i && 11 >= $i)
      , Lp = " "
      , Mp = !1;
    function Dp(r, s) {
        switch (r) {
        case "keyup":
            return Q1.indexOf(s.keyCode) !== -1;
        case "keydown":
            return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function jp(r) {
        return r = r.detail,
        typeof r == "object" && "data"in r ? r.data : null
    }
    var _s = !1;
    function X1(r, s) {
        switch (r) {
        case "compositionend":
            return jp(s);
        case "keypress":
            return s.which !== 32 ? null : (Mp = !0,
            Lp);
        case "textInput":
            return r = s.data,
            r === Lp && Mp ? null : r;
        default:
            return null
        }
    }
    function Y1(r, s) {
        if (_s)
            return r === "compositionend" || !qu && Dp(r, s) ? (r = Pp(),
            ya = Bu = ar = null,
            _s = !1,
            r) : null;
        switch (r) {
        case "paste":
            return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which)
            }
            return null;
        case "compositionend":
            return Op && s.locale !== "ko" ? null : s.data;
        default:
            return null
        }
    }
    var J1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Ip(r) {
        var s = r && r.nodeName && r.nodeName.toLowerCase();
        return s === "input" ? !!J1[r.type] : s === "textarea"
    }
    function Fp(r, s, a, c) {
        sp(c),
        s = ka(s, "onChange"),
        0 < s.length && (a = new Uu("onChange","change",null,a,c),
        r.push({
            event: a,
            listeners: s
        }))
    }
    var Hi = null
      , Wi = null;
    function Z1(r) {
        nm(r, 0)
    }
    function Sa(r) {
        var s = Ms(r);
        if (Vr(s))
            return r
    }
    function eb(r, s) {
        if (r === "change")
            return s
    }
    var Vp = !1;
    if (d) {
        var Ku;
        if (d) {
            var Qu = "oninput"in document;
            if (!Qu) {
                var Bp = document.createElement("div");
                Bp.setAttribute("oninput", "return;"),
                Qu = typeof Bp.oninput == "function"
            }
            Ku = Qu
        } else
            Ku = !1;
        Vp = Ku && (!document.documentMode || 9 < document.documentMode)
    }
    function Up() {
        Hi && (Hi.detachEvent("onpropertychange", zp),
        Wi = Hi = null)
    }
    function zp(r) {
        if (r.propertyName === "value" && Sa(Wi)) {
            var s = [];
            Fp(s, Wi, r, Pu(r)),
            lp(Z1, s)
        }
    }
    function tb(r, s, a) {
        r === "focusin" ? (Up(),
        Hi = s,
        Wi = a,
        Hi.attachEvent("onpropertychange", zp)) : r === "focusout" && Up()
    }
    function nb(r) {
        if (r === "selectionchange" || r === "keyup" || r === "keydown")
            return Sa(Wi)
    }
    function rb(r, s) {
        if (r === "click")
            return Sa(s)
    }
    function sb(r, s) {
        if (r === "input" || r === "change")
            return Sa(s)
    }
    function ib(r, s) {
        return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s
    }
    var rn = typeof Object.is == "function" ? Object.is : ib;
    function qi(r, s) {
        if (rn(r, s))
            return !0;
        if (typeof r != "object" || r === null || typeof s != "object" || s === null)
            return !1;
        var a = Object.keys(r)
          , c = Object.keys(s);
        if (a.length !== c.length)
            return !1;
        for (c = 0; c < a.length; c++) {
            var h = a[c];
            if (!f.call(s, h) || !rn(r[h], s[h]))
                return !1
        }
        return !0
    }
    function $p(r) {
        for (; r && r.firstChild; )
            r = r.firstChild;
        return r
    }
    function Hp(r, s) {
        var a = $p(r);
        r = 0;
        for (var c; a; ) {
            if (a.nodeType === 3) {
                if (c = r + a.textContent.length,
                r <= s && c >= s)
                    return {
                        node: a,
                        offset: s - r
                    };
                r = c
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = $p(a)
        }
    }
    function Wp(r, s) {
        return r && s ? r === s ? !0 : r && r.nodeType === 3 ? !1 : s && s.nodeType === 3 ? Wp(r, s.parentNode) : "contains"in r ? r.contains(s) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(s) & 16) : !1 : !1
    }
    function qp() {
        for (var r = window, s = sa(); s instanceof r.HTMLIFrameElement; ) {
            try {
                var a = typeof s.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                r = s.contentWindow;
            else
                break;
            s = sa(r.document)
        }
        return s
    }
    function Gu(r) {
        var s = r && r.nodeName && r.nodeName.toLowerCase();
        return s && (s === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || s === "textarea" || r.contentEditable === "true")
    }
    function ob(r) {
        var s = qp()
          , a = r.focusedElem
          , c = r.selectionRange;
        if (s !== a && a && a.ownerDocument && Wp(a.ownerDocument.documentElement, a)) {
            if (c !== null && Gu(a)) {
                if (s = c.start,
                r = c.end,
                r === void 0 && (r = s),
                "selectionStart"in a)
                    a.selectionStart = s,
                    a.selectionEnd = Math.min(r, a.value.length);
                else if (r = (s = a.ownerDocument || document) && s.defaultView || window,
                r.getSelection) {
                    r = r.getSelection();
                    var h = a.textContent.length
                      , m = Math.min(c.start, h);
                    c = c.end === void 0 ? m : Math.min(c.end, h),
                    !r.extend && m > c && (h = c,
                    c = m,
                    m = h),
                    h = Hp(a, m);
                    var w = Hp(a, c);
                    h && w && (r.rangeCount !== 1 || r.anchorNode !== h.node || r.anchorOffset !== h.offset || r.focusNode !== w.node || r.focusOffset !== w.offset) && (s = s.createRange(),
                    s.setStart(h.node, h.offset),
                    r.removeAllRanges(),
                    m > c ? (r.addRange(s),
                    r.extend(w.node, w.offset)) : (s.setEnd(w.node, w.offset),
                    r.addRange(s)))
                }
            }
            for (s = [],
            r = a; r = r.parentNode; )
                r.nodeType === 1 && s.push({
                    element: r,
                    left: r.scrollLeft,
                    top: r.scrollTop
                });
            for (typeof a.focus == "function" && a.focus(),
            a = 0; a < s.length; a++)
                r = s[a],
                r.element.scrollLeft = r.left,
                r.element.scrollTop = r.top
        }
    }
    var ab = d && "documentMode"in document && 11 >= document.documentMode
      , As = null
      , Xu = null
      , Ki = null
      , Yu = !1;
    function Kp(r, s, a) {
        var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Yu || As == null || As !== sa(c) || (c = As,
        "selectionStart"in c && Gu(c) ? c = {
            start: c.selectionStart,
            end: c.selectionEnd
        } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(),
        c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset
        }),
        Ki && qi(Ki, c) || (Ki = c,
        c = ka(Xu, "onSelect"),
        0 < c.length && (s = new Uu("onSelect","select",null,s,a),
        r.push({
            event: s,
            listeners: c
        }),
        s.target = As)))
    }
    function ba(r, s) {
        var a = {};
        return a[r.toLowerCase()] = s.toLowerCase(),
        a["Webkit" + r] = "webkit" + s,
        a["Moz" + r] = "moz" + s,
        a
    }
    var Ns = {
        animationend: ba("Animation", "AnimationEnd"),
        animationiteration: ba("Animation", "AnimationIteration"),
        animationstart: ba("Animation", "AnimationStart"),
        transitionend: ba("Transition", "TransitionEnd")
    }
      , Ju = {}
      , Qp = {};
    d && (Qp = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ns.animationend.animation,
    delete Ns.animationiteration.animation,
    delete Ns.animationstart.animation),
    "TransitionEvent"in window || delete Ns.transitionend.transition);
    function Ea(r) {
        if (Ju[r])
            return Ju[r];
        if (!Ns[r])
            return r;
        var s = Ns[r], a;
        for (a in s)
            if (s.hasOwnProperty(a) && a in Qp)
                return Ju[r] = s[a];
        return r
    }
    var Gp = Ea("animationend")
      , Xp = Ea("animationiteration")
      , Yp = Ea("animationstart")
      , Jp = Ea("transitionend")
      , Zp = new Map
      , em = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function lr(r, s) {
        Zp.set(r, s),
        l(s, [r])
    }
    for (var Zu = 0; Zu < em.length; Zu++) {
        var ec = em[Zu]
          , lb = ec.toLowerCase()
          , ub = ec[0].toUpperCase() + ec.slice(1);
        lr(lb, "on" + ub)
    }
    lr(Gp, "onAnimationEnd"),
    lr(Xp, "onAnimationIteration"),
    lr(Yp, "onAnimationStart"),
    lr("dblclick", "onDoubleClick"),
    lr("focusin", "onFocus"),
    lr("focusout", "onBlur"),
    lr(Jp, "onTransitionEnd"),
    u("onMouseEnter", ["mouseout", "mouseover"]),
    u("onMouseLeave", ["mouseout", "mouseover"]),
    u("onPointerEnter", ["pointerout", "pointerover"]),
    u("onPointerLeave", ["pointerout", "pointerover"]),
    l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Qi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , cb = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));
    function tm(r, s, a) {
        var c = r.type || "unknown-event";
        r.currentTarget = a,
        l1(c, s, void 0, r),
        r.currentTarget = null
    }
    function nm(r, s) {
        s = (s & 4) !== 0;
        for (var a = 0; a < r.length; a++) {
            var c = r[a]
              , h = c.event;
            c = c.listeners;
            e: {
                var m = void 0;
                if (s)
                    for (var w = c.length - 1; 0 <= w; w--) {
                        var k = c[w]
                          , A = k.instance
                          , V = k.currentTarget;
                        if (k = k.listener,
                        A !== m && h.isPropagationStopped())
                            break e;
                        tm(h, k, V),
                        m = A
                    }
                else
                    for (w = 0; w < c.length; w++) {
                        if (k = c[w],
                        A = k.instance,
                        V = k.currentTarget,
                        k = k.listener,
                        A !== m && h.isPropagationStopped())
                            break e;
                        tm(h, k, V),
                        m = A
                    }
            }
        }
        if (aa)
            throw r = Nu,
            aa = !1,
            Nu = null,
            r
    }
    function Ie(r, s) {
        var a = s[lc];
        a === void 0 && (a = s[lc] = new Set);
        var c = r + "__bubble";
        a.has(c) || (rm(s, r, 2, !1),
        a.add(c))
    }
    function tc(r, s, a) {
        var c = 0;
        s && (c |= 4),
        rm(a, r, c, s)
    }
    var Ca = "_reactListening" + Math.random().toString(36).slice(2);
    function Gi(r) {
        if (!r[Ca]) {
            r[Ca] = !0,
            i.forEach(function(a) {
                a !== "selectionchange" && (cb.has(a) || tc(a, !1, r),
                tc(a, !0, r))
            });
            var s = r.nodeType === 9 ? r : r.ownerDocument;
            s === null || s[Ca] || (s[Ca] = !0,
            tc("selectionchange", !1, s))
        }
    }
    function rm(r, s, a, c) {
        switch (Tp(s)) {
        case 1:
            var h = C1;
            break;
        case 4:
            h = k1;
            break;
        default:
            h = Fu
        }
        a = h.bind(null, s, a, r),
        h = void 0,
        !Au || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (h = !0),
        c ? h !== void 0 ? r.addEventListener(s, a, {
            capture: !0,
            passive: h
        }) : r.addEventListener(s, a, !0) : h !== void 0 ? r.addEventListener(s, a, {
            passive: h
        }) : r.addEventListener(s, a, !1)
    }
    function nc(r, s, a, c, h) {
        var m = c;
        if ((s & 1) === 0 && (s & 2) === 0 && c !== null)
            e: for (; ; ) {
                if (c === null)
                    return;
                var w = c.tag;
                if (w === 3 || w === 4) {
                    var k = c.stateNode.containerInfo;
                    if (k === h || k.nodeType === 8 && k.parentNode === h)
                        break;
                    if (w === 4)
                        for (w = c.return; w !== null; ) {
                            var A = w.tag;
                            if ((A === 3 || A === 4) && (A = w.stateNode.containerInfo,
                            A === h || A.nodeType === 8 && A.parentNode === h))
                                return;
                            w = w.return
                        }
                    for (; k !== null; ) {
                        if (w = Ur(k),
                        w === null)
                            return;
                        if (A = w.tag,
                        A === 5 || A === 6) {
                            c = m = w;
                            continue e
                        }
                        k = k.parentNode
                    }
                }
                c = c.return
            }
        lp(function() {
            var V = m
              , K = Pu(a)
              , Q = [];
            e: {
                var q = Zp.get(r);
                if (q !== void 0) {
                    var te = Uu
                      , se = r;
                    switch (r) {
                    case "keypress":
                        if (va(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        te = B1;
                        break;
                    case "focusin":
                        se = "focus",
                        te = Hu;
                        break;
                    case "focusout":
                        se = "blur",
                        te = Hu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        te = Hu;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        te = _p;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        te = R1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        te = $1;
                        break;
                    case Gp:
                    case Xp:
                    case Yp:
                        te = N1;
                        break;
                    case Jp:
                        te = W1;
                        break;
                    case "scroll":
                        te = T1;
                        break;
                    case "wheel":
                        te = K1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        te = L1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        te = Np
                    }
                    var ue = (s & 4) !== 0
                      , Ge = !ue && r === "scroll"
                      , j = ue ? q !== null ? q + "Capture" : null : q;
                    ue = [];
                    for (var N = V, F; N !== null; ) {
                        F = N;
                        var X = F.stateNode;
                        if (F.tag === 5 && X !== null && (F = X,
                        j !== null && (X = Ni(N, j),
                        X != null && ue.push(Xi(N, X, F)))),
                        Ge)
                            break;
                        N = N.return
                    }
                    0 < ue.length && (q = new te(q,se,null,a,K),
                    Q.push({
                        event: q,
                        listeners: ue
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if (q = r === "mouseover" || r === "pointerover",
                    te = r === "mouseout" || r === "pointerout",
                    q && a !== Tu && (se = a.relatedTarget || a.fromElement) && (Ur(se) || se[On]))
                        break e;
                    if ((te || q) && (q = K.window === K ? K : (q = K.ownerDocument) ? q.defaultView || q.parentWindow : window,
                    te ? (se = a.relatedTarget || a.toElement,
                    te = V,
                    se = se ? Ur(se) : null,
                    se !== null && (Ge = Br(se),
                    se !== Ge || se.tag !== 5 && se.tag !== 6) && (se = null)) : (te = null,
                    se = V),
                    te !== se)) {
                        if (ue = _p,
                        X = "onMouseLeave",
                        j = "onMouseEnter",
                        N = "mouse",
                        (r === "pointerout" || r === "pointerover") && (ue = Np,
                        X = "onPointerLeave",
                        j = "onPointerEnter",
                        N = "pointer"),
                        Ge = te == null ? q : Ms(te),
                        F = se == null ? q : Ms(se),
                        q = new ue(X,N + "leave",te,a,K),
                        q.target = Ge,
                        q.relatedTarget = F,
                        X = null,
                        Ur(K) === V && (ue = new ue(j,N + "enter",se,a,K),
                        ue.target = F,
                        ue.relatedTarget = Ge,
                        X = ue),
                        Ge = X,
                        te && se)
                            t: {
                                for (ue = te,
                                j = se,
                                N = 0,
                                F = ue; F; F = Os(F))
                                    N++;
                                for (F = 0,
                                X = j; X; X = Os(X))
                                    F++;
                                for (; 0 < N - F; )
                                    ue = Os(ue),
                                    N--;
                                for (; 0 < F - N; )
                                    j = Os(j),
                                    F--;
                                for (; N--; ) {
                                    if (ue === j || j !== null && ue === j.alternate)
                                        break t;
                                    ue = Os(ue),
                                    j = Os(j)
                                }
                                ue = null
                            }
                        else
                            ue = null;
                        te !== null && sm(Q, q, te, ue, !1),
                        se !== null && Ge !== null && sm(Q, Ge, se, ue, !0)
                    }
                }
                e: {
                    if (q = V ? Ms(V) : window,
                    te = q.nodeName && q.nodeName.toLowerCase(),
                    te === "select" || te === "input" && q.type === "file")
                        var ce = eb;
                    else if (Ip(q))
                        if (Vp)
                            ce = sb;
                        else {
                            ce = nb;
                            var ge = tb
                        }
                    else
                        (te = q.nodeName) && te.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (ce = rb);
                    if (ce && (ce = ce(r, V))) {
                        Fp(Q, ce, a, K);
                        break e
                    }
                    ge && ge(r, q, V),
                    r === "focusout" && (ge = q._wrapperState) && ge.controlled && q.type === "number" && Su(q, "number", q.value)
                }
                switch (ge = V ? Ms(V) : window,
                r) {
                case "focusin":
                    (Ip(ge) || ge.contentEditable === "true") && (As = ge,
                    Xu = V,
                    Ki = null);
                    break;
                case "focusout":
                    Ki = Xu = As = null;
                    break;
                case "mousedown":
                    Yu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Yu = !1,
                    Kp(Q, a, K);
                    break;
                case "selectionchange":
                    if (ab)
                        break;
                case "keydown":
                case "keyup":
                    Kp(Q, a, K)
                }
                var ye;
                if (qu)
                    e: {
                        switch (r) {
                        case "compositionstart":
                            var Se = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Se = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Se = "onCompositionUpdate";
                            break e
                        }
                        Se = void 0
                    }
                else
                    _s ? Dp(r, a) && (Se = "onCompositionEnd") : r === "keydown" && a.keyCode === 229 && (Se = "onCompositionStart");
                Se && (Op && a.locale !== "ko" && (_s || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && _s && (ye = Pp()) : (ar = K,
                Bu = "value"in ar ? ar.value : ar.textContent,
                _s = !0)),
                ge = ka(V, Se),
                0 < ge.length && (Se = new Ap(Se,r,null,a,K),
                Q.push({
                    event: Se,
                    listeners: ge
                }),
                ye ? Se.data = ye : (ye = jp(a),
                ye !== null && (Se.data = ye)))),
                (ye = G1 ? X1(r, a) : Y1(r, a)) && (V = ka(V, "onBeforeInput"),
                0 < V.length && (K = new Ap("onBeforeInput","beforeinput",null,a,K),
                Q.push({
                    event: K,
                    listeners: V
                }),
                K.data = ye))
            }
            nm(Q, s)
        })
    }
    function Xi(r, s, a) {
        return {
            instance: r,
            listener: s,
            currentTarget: a
        }
    }
    function ka(r, s) {
        for (var a = s + "Capture", c = []; r !== null; ) {
            var h = r
              , m = h.stateNode;
            h.tag === 5 && m !== null && (h = m,
            m = Ni(r, a),
            m != null && c.unshift(Xi(r, m, h)),
            m = Ni(r, s),
            m != null && c.push(Xi(r, m, h))),
            r = r.return
        }
        return c
    }
    function Os(r) {
        if (r === null)
            return null;
        do
            r = r.return;
        while (r && r.tag !== 5);
        return r || null
    }
    function sm(r, s, a, c, h) {
        for (var m = s._reactName, w = []; a !== null && a !== c; ) {
            var k = a
              , A = k.alternate
              , V = k.stateNode;
            if (A !== null && A === c)
                break;
            k.tag === 5 && V !== null && (k = V,
            h ? (A = Ni(a, m),
            A != null && w.unshift(Xi(a, A, k))) : h || (A = Ni(a, m),
            A != null && w.push(Xi(a, A, k)))),
            a = a.return
        }
        w.length !== 0 && r.push({
            event: s,
            listeners: w
        })
    }
    var db = /\r\n?/g
      , fb = /\u0000|\uFFFD/g;
    function im(r) {
        return (typeof r == "string" ? r : "" + r).replace(db, `
`).replace(fb, "")
    }
    function Ta(r, s, a) {
        if (s = im(s),
        im(r) !== s && a)
            throw Error(n(425))
    }
    function Pa() {}
    var rc = null
      , sc = null;
    function ic(r, s) {
        return r === "textarea" || r === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var oc = typeof setTimeout == "function" ? setTimeout : void 0
      , hb = typeof clearTimeout == "function" ? clearTimeout : void 0
      , om = typeof Promise == "function" ? Promise : void 0
      , pb = typeof queueMicrotask == "function" ? queueMicrotask : typeof om < "u" ? function(r) {
        return om.resolve(null).then(r).catch(mb)
    }
    : oc;
    function mb(r) {
        setTimeout(function() {
            throw r
        })
    }
    function ac(r, s) {
        var a = s
          , c = 0;
        do {
            var h = a.nextSibling;
            if (r.removeChild(a),
            h && h.nodeType === 8)
                if (a = h.data,
                a === "/$") {
                    if (c === 0) {
                        r.removeChild(h),
                        Bi(s);
                        return
                    }
                    c--
                } else
                    a !== "$" && a !== "$?" && a !== "$!" || c++;
            a = h
        } while (a);
        Bi(s)
    }
    function ur(r) {
        for (; r != null; r = r.nextSibling) {
            var s = r.nodeType;
            if (s === 1 || s === 3)
                break;
            if (s === 8) {
                if (s = r.data,
                s === "$" || s === "$!" || s === "$?")
                    break;
                if (s === "/$")
                    return null
            }
        }
        return r
    }
    function am(r) {
        r = r.previousSibling;
        for (var s = 0; r; ) {
            if (r.nodeType === 8) {
                var a = r.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (s === 0)
                        return r;
                    s--
                } else
                    a === "/$" && s++
            }
            r = r.previousSibling
        }
        return null
    }
    var Ls = Math.random().toString(36).slice(2)
      , gn = "__reactFiber$" + Ls
      , Yi = "__reactProps$" + Ls
      , On = "__reactContainer$" + Ls
      , lc = "__reactEvents$" + Ls
      , gb = "__reactListeners$" + Ls
      , yb = "__reactHandles$" + Ls;
    function Ur(r) {
        var s = r[gn];
        if (s)
            return s;
        for (var a = r.parentNode; a; ) {
            if (s = a[On] || a[gn]) {
                if (a = s.alternate,
                s.child !== null || a !== null && a.child !== null)
                    for (r = am(r); r !== null; ) {
                        if (a = r[gn])
                            return a;
                        r = am(r)
                    }
                return s
            }
            r = a,
            a = r.parentNode
        }
        return null
    }
    function Ji(r) {
        return r = r[gn] || r[On],
        !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r
    }
    function Ms(r) {
        if (r.tag === 5 || r.tag === 6)
            return r.stateNode;
        throw Error(n(33))
    }
    function Ra(r) {
        return r[Yi] || null
    }
    var uc = []
      , Ds = -1;
    function cr(r) {
        return {
            current: r
        }
    }
    function Fe(r) {
        0 > Ds || (r.current = uc[Ds],
        uc[Ds] = null,
        Ds--)
    }
    function je(r, s) {
        Ds++,
        uc[Ds] = r.current,
        r.current = s
    }
    var dr = {}
      , ht = cr(dr)
      , Pt = cr(!1)
      , zr = dr;
    function js(r, s) {
        var a = r.type.contextTypes;
        if (!a)
            return dr;
        var c = r.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === s)
            return c.__reactInternalMemoizedMaskedChildContext;
        var h = {}, m;
        for (m in a)
            h[m] = s[m];
        return c && (r = r.stateNode,
        r.__reactInternalMemoizedUnmaskedChildContext = s,
        r.__reactInternalMemoizedMaskedChildContext = h),
        h
    }
    function Rt(r) {
        return r = r.childContextTypes,
        r != null
    }
    function _a() {
        Fe(Pt),
        Fe(ht)
    }
    function lm(r, s, a) {
        if (ht.current !== dr)
            throw Error(n(168));
        je(ht, s),
        je(Pt, a)
    }
    function um(r, s, a) {
        var c = r.stateNode;
        if (s = s.childContextTypes,
        typeof c.getChildContext != "function")
            return a;
        c = c.getChildContext();
        for (var h in c)
            if (!(h in s))
                throw Error(n(108, xe(r) || "Unknown", h));
        return Z({}, a, c)
    }
    function Aa(r) {
        return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || dr,
        zr = ht.current,
        je(ht, r),
        je(Pt, Pt.current),
        !0
    }
    function cm(r, s, a) {
        var c = r.stateNode;
        if (!c)
            throw Error(n(169));
        a ? (r = um(r, s, zr),
        c.__reactInternalMemoizedMergedChildContext = r,
        Fe(Pt),
        Fe(ht),
        je(ht, r)) : Fe(Pt),
        je(Pt, a)
    }
    var Ln = null
      , Na = !1
      , cc = !1;
    function dm(r) {
        Ln === null ? Ln = [r] : Ln.push(r)
    }
    function vb(r) {
        Na = !0,
        dm(r)
    }
    function fr() {
        if (!cc && Ln !== null) {
            cc = !0;
            var r = 0
              , s = De;
            try {
                var a = Ln;
                for (De = 1; r < a.length; r++) {
                    var c = a[r];
                    do
                        c = c(!0);
                    while (c !== null)
                }
                Ln = null,
                Na = !1
            } catch (h) {
                throw Ln !== null && (Ln = Ln.slice(r + 1)),
                hp(Ou, fr),
                h
            } finally {
                De = s,
                cc = !1
            }
        }
        return null
    }
    var Is = []
      , Fs = 0
      , Oa = null
      , La = 0
      , Ht = []
      , Wt = 0
      , $r = null
      , Mn = 1
      , Dn = "";
    function Hr(r, s) {
        Is[Fs++] = La,
        Is[Fs++] = Oa,
        Oa = r,
        La = s
    }
    function fm(r, s, a) {
        Ht[Wt++] = Mn,
        Ht[Wt++] = Dn,
        Ht[Wt++] = $r,
        $r = r;
        var c = Mn;
        r = Dn;
        var h = 32 - nn(c) - 1;
        c &= ~(1 << h),
        a += 1;
        var m = 32 - nn(s) + h;
        if (30 < m) {
            var w = h - h % 5;
            m = (c & (1 << w) - 1).toString(32),
            c >>= w,
            h -= w,
            Mn = 1 << 32 - nn(s) + h | a << h | c,
            Dn = m + r
        } else
            Mn = 1 << m | a << h | c,
            Dn = r
    }
    function dc(r) {
        r.return !== null && (Hr(r, 1),
        fm(r, 1, 0))
    }
    function fc(r) {
        for (; r === Oa; )
            Oa = Is[--Fs],
            Is[Fs] = null,
            La = Is[--Fs],
            Is[Fs] = null;
        for (; r === $r; )
            $r = Ht[--Wt],
            Ht[Wt] = null,
            Dn = Ht[--Wt],
            Ht[Wt] = null,
            Mn = Ht[--Wt],
            Ht[Wt] = null
    }
    var Vt = null
      , Bt = null
      , Be = !1
      , sn = null;
    function hm(r, s) {
        var a = Gt(5, null, null, 0);
        a.elementType = "DELETED",
        a.stateNode = s,
        a.return = r,
        s = r.deletions,
        s === null ? (r.deletions = [a],
        r.flags |= 16) : s.push(a)
    }
    function pm(r, s) {
        switch (r.tag) {
        case 5:
            var a = r.type;
            return s = s.nodeType !== 1 || a.toLowerCase() !== s.nodeName.toLowerCase() ? null : s,
            s !== null ? (r.stateNode = s,
            Vt = r,
            Bt = ur(s.firstChild),
            !0) : !1;
        case 6:
            return s = r.pendingProps === "" || s.nodeType !== 3 ? null : s,
            s !== null ? (r.stateNode = s,
            Vt = r,
            Bt = null,
            !0) : !1;
        case 13:
            return s = s.nodeType !== 8 ? null : s,
            s !== null ? (a = $r !== null ? {
                id: Mn,
                overflow: Dn
            } : null,
            r.memoizedState = {
                dehydrated: s,
                treeContext: a,
                retryLane: 1073741824
            },
            a = Gt(18, null, null, 0),
            a.stateNode = s,
            a.return = r,
            r.child = a,
            Vt = r,
            Bt = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function hc(r) {
        return (r.mode & 1) !== 0 && (r.flags & 128) === 0
    }
    function pc(r) {
        if (Be) {
            var s = Bt;
            if (s) {
                var a = s;
                if (!pm(r, s)) {
                    if (hc(r))
                        throw Error(n(418));
                    s = ur(a.nextSibling);
                    var c = Vt;
                    s && pm(r, s) ? hm(c, a) : (r.flags = r.flags & -4097 | 2,
                    Be = !1,
                    Vt = r)
                }
            } else {
                if (hc(r))
                    throw Error(n(418));
                r.flags = r.flags & -4097 | 2,
                Be = !1,
                Vt = r
            }
        }
    }
    function mm(r) {
        for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; )
            r = r.return;
        Vt = r
    }
    function Ma(r) {
        if (r !== Vt)
            return !1;
        if (!Be)
            return mm(r),
            Be = !0,
            !1;
        var s;
        if ((s = r.tag !== 3) && !(s = r.tag !== 5) && (s = r.type,
        s = s !== "head" && s !== "body" && !ic(r.type, r.memoizedProps)),
        s && (s = Bt)) {
            if (hc(r))
                throw gm(),
                Error(n(418));
            for (; s; )
                hm(r, s),
                s = ur(s.nextSibling)
        }
        if (mm(r),
        r.tag === 13) {
            if (r = r.memoizedState,
            r = r !== null ? r.dehydrated : null,
            !r)
                throw Error(n(317));
            e: {
                for (r = r.nextSibling,
                s = 0; r; ) {
                    if (r.nodeType === 8) {
                        var a = r.data;
                        if (a === "/$") {
                            if (s === 0) {
                                Bt = ur(r.nextSibling);
                                break e
                            }
                            s--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || s++
                    }
                    r = r.nextSibling
                }
                Bt = null
            }
        } else
            Bt = Vt ? ur(r.stateNode.nextSibling) : null;
        return !0
    }
    function gm() {
        for (var r = Bt; r; )
            r = ur(r.nextSibling)
    }
    function Vs() {
        Bt = Vt = null,
        Be = !1
    }
    function mc(r) {
        sn === null ? sn = [r] : sn.push(r)
    }
    var wb = I.ReactCurrentBatchConfig;
    function Zi(r, s, a) {
        if (r = a.ref,
        r !== null && typeof r != "function" && typeof r != "object") {
            if (a._owner) {
                if (a = a._owner,
                a) {
                    if (a.tag !== 1)
                        throw Error(n(309));
                    var c = a.stateNode
                }
                if (!c)
                    throw Error(n(147, r));
                var h = c
                  , m = "" + r;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === m ? s.ref : (s = function(w) {
                    var k = h.refs;
                    w === null ? delete k[m] : k[m] = w
                }
                ,
                s._stringRef = m,
                s)
            }
            if (typeof r != "string")
                throw Error(n(284));
            if (!a._owner)
                throw Error(n(290, r))
        }
        return r
    }
    function Da(r, s) {
        throw r = Object.prototype.toString.call(s),
        Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : r))
    }
    function ym(r) {
        var s = r._init;
        return s(r._payload)
    }
    function vm(r) {
        function s(j, N) {
            if (r) {
                var F = j.deletions;
                F === null ? (j.deletions = [N],
                j.flags |= 16) : F.push(N)
            }
        }
        function a(j, N) {
            if (!r)
                return null;
            for (; N !== null; )
                s(j, N),
                N = N.sibling;
            return null
        }
        function c(j, N) {
            for (j = new Map; N !== null; )
                N.key !== null ? j.set(N.key, N) : j.set(N.index, N),
                N = N.sibling;
            return j
        }
        function h(j, N) {
            return j = xr(j, N),
            j.index = 0,
            j.sibling = null,
            j
        }
        function m(j, N, F) {
            return j.index = F,
            r ? (F = j.alternate,
            F !== null ? (F = F.index,
            F < N ? (j.flags |= 2,
            N) : F) : (j.flags |= 2,
            N)) : (j.flags |= 1048576,
            N)
        }
        function w(j) {
            return r && j.alternate === null && (j.flags |= 2),
            j
        }
        function k(j, N, F, X) {
            return N === null || N.tag !== 6 ? (N = od(F, j.mode, X),
            N.return = j,
            N) : (N = h(N, F),
            N.return = j,
            N)
        }
        function A(j, N, F, X) {
            var ce = F.type;
            return ce === J ? K(j, N, F.props.children, X, F.key) : N !== null && (N.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === he && ym(ce) === N.type) ? (X = h(N, F.props),
            X.ref = Zi(j, N, F),
            X.return = j,
            X) : (X = il(F.type, F.key, F.props, null, j.mode, X),
            X.ref = Zi(j, N, F),
            X.return = j,
            X)
        }
        function V(j, N, F, X) {
            return N === null || N.tag !== 4 || N.stateNode.containerInfo !== F.containerInfo || N.stateNode.implementation !== F.implementation ? (N = ad(F, j.mode, X),
            N.return = j,
            N) : (N = h(N, F.children || []),
            N.return = j,
            N)
        }
        function K(j, N, F, X, ce) {
            return N === null || N.tag !== 7 ? (N = Jr(F, j.mode, X, ce),
            N.return = j,
            N) : (N = h(N, F),
            N.return = j,
            N)
        }
        function Q(j, N, F) {
            if (typeof N == "string" && N !== "" || typeof N == "number")
                return N = od("" + N, j.mode, F),
                N.return = j,
                N;
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case z:
                    return F = il(N.type, N.key, N.props, null, j.mode, F),
                    F.ref = Zi(j, null, N),
                    F.return = j,
                    F;
                case G:
                    return N = ad(N, j.mode, F),
                    N.return = j,
                    N;
                case he:
                    var X = N._init;
                    return Q(j, X(N._payload), F)
                }
                if (Ri(N) || ae(N))
                    return N = Jr(N, j.mode, F, null),
                    N.return = j,
                    N;
                Da(j, N)
            }
            return null
        }
        function q(j, N, F, X) {
            var ce = N !== null ? N.key : null;
            if (typeof F == "string" && F !== "" || typeof F == "number")
                return ce !== null ? null : k(j, N, "" + F, X);
            if (typeof F == "object" && F !== null) {
                switch (F.$$typeof) {
                case z:
                    return F.key === ce ? A(j, N, F, X) : null;
                case G:
                    return F.key === ce ? V(j, N, F, X) : null;
                case he:
                    return ce = F._init,
                    q(j, N, ce(F._payload), X)
                }
                if (Ri(F) || ae(F))
                    return ce !== null ? null : K(j, N, F, X, null);
                Da(j, F)
            }
            return null
        }
        function te(j, N, F, X, ce) {
            if (typeof X == "string" && X !== "" || typeof X == "number")
                return j = j.get(F) || null,
                k(N, j, "" + X, ce);
            if (typeof X == "object" && X !== null) {
                switch (X.$$typeof) {
                case z:
                    return j = j.get(X.key === null ? F : X.key) || null,
                    A(N, j, X, ce);
                case G:
                    return j = j.get(X.key === null ? F : X.key) || null,
                    V(N, j, X, ce);
                case he:
                    var ge = X._init;
                    return te(j, N, F, ge(X._payload), ce)
                }
                if (Ri(X) || ae(X))
                    return j = j.get(F) || null,
                    K(N, j, X, ce, null);
                Da(N, X)
            }
            return null
        }
        function se(j, N, F, X) {
            for (var ce = null, ge = null, ye = N, Se = N = 0, at = null; ye !== null && Se < F.length; Se++) {
                ye.index > Se ? (at = ye,
                ye = null) : at = ye.sibling;
                var Oe = q(j, ye, F[Se], X);
                if (Oe === null) {
                    ye === null && (ye = at);
                    break
                }
                r && ye && Oe.alternate === null && s(j, ye),
                N = m(Oe, N, Se),
                ge === null ? ce = Oe : ge.sibling = Oe,
                ge = Oe,
                ye = at
            }
            if (Se === F.length)
                return a(j, ye),
                Be && Hr(j, Se),
                ce;
            if (ye === null) {
                for (; Se < F.length; Se++)
                    ye = Q(j, F[Se], X),
                    ye !== null && (N = m(ye, N, Se),
                    ge === null ? ce = ye : ge.sibling = ye,
                    ge = ye);
                return Be && Hr(j, Se),
                ce
            }
            for (ye = c(j, ye); Se < F.length; Se++)
                at = te(ye, j, Se, F[Se], X),
                at !== null && (r && at.alternate !== null && ye.delete(at.key === null ? Se : at.key),
                N = m(at, N, Se),
                ge === null ? ce = at : ge.sibling = at,
                ge = at);
            return r && ye.forEach(function(Sr) {
                return s(j, Sr)
            }),
            Be && Hr(j, Se),
            ce
        }
        function ue(j, N, F, X) {
            var ce = ae(F);
            if (typeof ce != "function")
                throw Error(n(150));
            if (F = ce.call(F),
            F == null)
                throw Error(n(151));
            for (var ge = ce = null, ye = N, Se = N = 0, at = null, Oe = F.next(); ye !== null && !Oe.done; Se++,
            Oe = F.next()) {
                ye.index > Se ? (at = ye,
                ye = null) : at = ye.sibling;
                var Sr = q(j, ye, Oe.value, X);
                if (Sr === null) {
                    ye === null && (ye = at);
                    break
                }
                r && ye && Sr.alternate === null && s(j, ye),
                N = m(Sr, N, Se),
                ge === null ? ce = Sr : ge.sibling = Sr,
                ge = Sr,
                ye = at
            }
            if (Oe.done)
                return a(j, ye),
                Be && Hr(j, Se),
                ce;
            if (ye === null) {
                for (; !Oe.done; Se++,
                Oe = F.next())
                    Oe = Q(j, Oe.value, X),
                    Oe !== null && (N = m(Oe, N, Se),
                    ge === null ? ce = Oe : ge.sibling = Oe,
                    ge = Oe);
                return Be && Hr(j, Se),
                ce
            }
            for (ye = c(j, ye); !Oe.done; Se++,
            Oe = F.next())
                Oe = te(ye, j, Se, Oe.value, X),
                Oe !== null && (r && Oe.alternate !== null && ye.delete(Oe.key === null ? Se : Oe.key),
                N = m(Oe, N, Se),
                ge === null ? ce = Oe : ge.sibling = Oe,
                ge = Oe);
            return r && ye.forEach(function(Jb) {
                return s(j, Jb)
            }),
            Be && Hr(j, Se),
            ce
        }
        function Ge(j, N, F, X) {
            if (typeof F == "object" && F !== null && F.type === J && F.key === null && (F = F.props.children),
            typeof F == "object" && F !== null) {
                switch (F.$$typeof) {
                case z:
                    e: {
                        for (var ce = F.key, ge = N; ge !== null; ) {
                            if (ge.key === ce) {
                                if (ce = F.type,
                                ce === J) {
                                    if (ge.tag === 7) {
                                        a(j, ge.sibling),
                                        N = h(ge, F.props.children),
                                        N.return = j,
                                        j = N;
                                        break e
                                    }
                                } else if (ge.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === he && ym(ce) === ge.type) {
                                    a(j, ge.sibling),
                                    N = h(ge, F.props),
                                    N.ref = Zi(j, ge, F),
                                    N.return = j,
                                    j = N;
                                    break e
                                }
                                a(j, ge);
                                break
                            } else
                                s(j, ge);
                            ge = ge.sibling
                        }
                        F.type === J ? (N = Jr(F.props.children, j.mode, X, F.key),
                        N.return = j,
                        j = N) : (X = il(F.type, F.key, F.props, null, j.mode, X),
                        X.ref = Zi(j, N, F),
                        X.return = j,
                        j = X)
                    }
                    return w(j);
                case G:
                    e: {
                        for (ge = F.key; N !== null; ) {
                            if (N.key === ge)
                                if (N.tag === 4 && N.stateNode.containerInfo === F.containerInfo && N.stateNode.implementation === F.implementation) {
                                    a(j, N.sibling),
                                    N = h(N, F.children || []),
                                    N.return = j,
                                    j = N;
                                    break e
                                } else {
                                    a(j, N);
                                    break
                                }
                            else
                                s(j, N);
                            N = N.sibling
                        }
                        N = ad(F, j.mode, X),
                        N.return = j,
                        j = N
                    }
                    return w(j);
                case he:
                    return ge = F._init,
                    Ge(j, N, ge(F._payload), X)
                }
                if (Ri(F))
                    return se(j, N, F, X);
                if (ae(F))
                    return ue(j, N, F, X);
                Da(j, F)
            }
            return typeof F == "string" && F !== "" || typeof F == "number" ? (F = "" + F,
            N !== null && N.tag === 6 ? (a(j, N.sibling),
            N = h(N, F),
            N.return = j,
            j = N) : (a(j, N),
            N = od(F, j.mode, X),
            N.return = j,
            j = N),
            w(j)) : a(j, N)
        }
        return Ge
    }
    var Bs = vm(!0)
      , wm = vm(!1)
      , ja = cr(null)
      , Ia = null
      , Us = null
      , gc = null;
    function yc() {
        gc = Us = Ia = null
    }
    function vc(r) {
        var s = ja.current;
        Fe(ja),
        r._currentValue = s
    }
    function wc(r, s, a) {
        for (; r !== null; ) {
            var c = r.alternate;
            if ((r.childLanes & s) !== s ? (r.childLanes |= s,
            c !== null && (c.childLanes |= s)) : c !== null && (c.childLanes & s) !== s && (c.childLanes |= s),
            r === a)
                break;
            r = r.return
        }
    }
    function zs(r, s) {
        Ia = r,
        gc = Us = null,
        r = r.dependencies,
        r !== null && r.firstContext !== null && ((r.lanes & s) !== 0 && (_t = !0),
        r.firstContext = null)
    }
    function qt(r) {
        var s = r._currentValue;
        if (gc !== r)
            if (r = {
                context: r,
                memoizedValue: s,
                next: null
            },
            Us === null) {
                if (Ia === null)
                    throw Error(n(308));
                Us = r,
                Ia.dependencies = {
                    lanes: 0,
                    firstContext: r
                }
            } else
                Us = Us.next = r;
        return s
    }
    var Wr = null;
    function xc(r) {
        Wr === null ? Wr = [r] : Wr.push(r)
    }
    function xm(r, s, a, c) {
        var h = s.interleaved;
        return h === null ? (a.next = a,
        xc(s)) : (a.next = h.next,
        h.next = a),
        s.interleaved = a,
        jn(r, c)
    }
    function jn(r, s) {
        r.lanes |= s;
        var a = r.alternate;
        for (a !== null && (a.lanes |= s),
        a = r,
        r = r.return; r !== null; )
            r.childLanes |= s,
            a = r.alternate,
            a !== null && (a.childLanes |= s),
            a = r,
            r = r.return;
        return a.tag === 3 ? a.stateNode : null
    }
    var hr = !1;
    function Sc(r) {
        r.updateQueue = {
            baseState: r.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Sm(r, s) {
        r = r.updateQueue,
        s.updateQueue === r && (s.updateQueue = {
            baseState: r.baseState,
            firstBaseUpdate: r.firstBaseUpdate,
            lastBaseUpdate: r.lastBaseUpdate,
            shared: r.shared,
            effects: r.effects
        })
    }
    function In(r, s) {
        return {
            eventTime: r,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function pr(r, s, a) {
        var c = r.updateQueue;
        if (c === null)
            return null;
        if (c = c.shared,
        (Ne & 2) !== 0) {
            var h = c.pending;
            return h === null ? s.next = s : (s.next = h.next,
            h.next = s),
            c.pending = s,
            jn(r, a)
        }
        return h = c.interleaved,
        h === null ? (s.next = s,
        xc(c)) : (s.next = h.next,
        h.next = s),
        c.interleaved = s,
        jn(r, a)
    }
    function Fa(r, s, a) {
        if (s = s.updateQueue,
        s !== null && (s = s.shared,
        (a & 4194240) !== 0)) {
            var c = s.lanes;
            c &= r.pendingLanes,
            a |= c,
            s.lanes = a,
            Du(r, a)
        }
    }
    function bm(r, s) {
        var a = r.updateQueue
          , c = r.alternate;
        if (c !== null && (c = c.updateQueue,
        a === c)) {
            var h = null
              , m = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var w = {
                        eventTime: a.eventTime,
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null
                    };
                    m === null ? h = m = w : m = m.next = w,
                    a = a.next
                } while (a !== null);
                m === null ? h = m = s : m = m.next = s
            } else
                h = m = s;
            a = {
                baseState: c.baseState,
                firstBaseUpdate: h,
                lastBaseUpdate: m,
                shared: c.shared,
                effects: c.effects
            },
            r.updateQueue = a;
            return
        }
        r = a.lastBaseUpdate,
        r === null ? a.firstBaseUpdate = s : r.next = s,
        a.lastBaseUpdate = s
    }
    function Va(r, s, a, c) {
        var h = r.updateQueue;
        hr = !1;
        var m = h.firstBaseUpdate
          , w = h.lastBaseUpdate
          , k = h.shared.pending;
        if (k !== null) {
            h.shared.pending = null;
            var A = k
              , V = A.next;
            A.next = null,
            w === null ? m = V : w.next = V,
            w = A;
            var K = r.alternate;
            K !== null && (K = K.updateQueue,
            k = K.lastBaseUpdate,
            k !== w && (k === null ? K.firstBaseUpdate = V : k.next = V,
            K.lastBaseUpdate = A))
        }
        if (m !== null) {
            var Q = h.baseState;
            w = 0,
            K = V = A = null,
            k = m;
            do {
                var q = k.lane
                  , te = k.eventTime;
                if ((c & q) === q) {
                    K !== null && (K = K.next = {
                        eventTime: te,
                        lane: 0,
                        tag: k.tag,
                        payload: k.payload,
                        callback: k.callback,
                        next: null
                    });
                    e: {
                        var se = r
                          , ue = k;
                        switch (q = s,
                        te = a,
                        ue.tag) {
                        case 1:
                            if (se = ue.payload,
                            typeof se == "function") {
                                Q = se.call(te, Q, q);
                                break e
                            }
                            Q = se;
                            break e;
                        case 3:
                            se.flags = se.flags & -65537 | 128;
                        case 0:
                            if (se = ue.payload,
                            q = typeof se == "function" ? se.call(te, Q, q) : se,
                            q == null)
                                break e;
                            Q = Z({}, Q, q);
                            break e;
                        case 2:
                            hr = !0
                        }
                    }
                    k.callback !== null && k.lane !== 0 && (r.flags |= 64,
                    q = h.effects,
                    q === null ? h.effects = [k] : q.push(k))
                } else
                    te = {
                        eventTime: te,
                        lane: q,
                        tag: k.tag,
                        payload: k.payload,
                        callback: k.callback,
                        next: null
                    },
                    K === null ? (V = K = te,
                    A = Q) : K = K.next = te,
                    w |= q;
                if (k = k.next,
                k === null) {
                    if (k = h.shared.pending,
                    k === null)
                        break;
                    q = k,
                    k = q.next,
                    q.next = null,
                    h.lastBaseUpdate = q,
                    h.shared.pending = null
                }
            } while (!0);
            if (K === null && (A = Q),
            h.baseState = A,
            h.firstBaseUpdate = V,
            h.lastBaseUpdate = K,
            s = h.shared.interleaved,
            s !== null) {
                h = s;
                do
                    w |= h.lane,
                    h = h.next;
                while (h !== s)
            } else
                m === null && (h.shared.lanes = 0);
            Qr |= w,
            r.lanes = w,
            r.memoizedState = Q
        }
    }
    function Em(r, s, a) {
        if (r = s.effects,
        s.effects = null,
        r !== null)
            for (s = 0; s < r.length; s++) {
                var c = r[s]
                  , h = c.callback;
                if (h !== null) {
                    if (c.callback = null,
                    c = a,
                    typeof h != "function")
                        throw Error(n(191, h));
                    h.call(c)
                }
            }
    }
    var eo = {}
      , yn = cr(eo)
      , to = cr(eo)
      , no = cr(eo);
    function qr(r) {
        if (r === eo)
            throw Error(n(174));
        return r
    }
    function bc(r, s) {
        switch (je(no, s),
        je(to, r),
        je(yn, eo),
        r = s.nodeType,
        r) {
        case 9:
        case 11:
            s = (s = s.documentElement) ? s.namespaceURI : Eu(null, "");
            break;
        default:
            r = r === 8 ? s.parentNode : s,
            s = r.namespaceURI || null,
            r = r.tagName,
            s = Eu(s, r)
        }
        Fe(yn),
        je(yn, s)
    }
    function $s() {
        Fe(yn),
        Fe(to),
        Fe(no)
    }
    function Cm(r) {
        qr(no.current);
        var s = qr(yn.current)
          , a = Eu(s, r.type);
        s !== a && (je(to, r),
        je(yn, a))
    }
    function Ec(r) {
        to.current === r && (Fe(yn),
        Fe(to))
    }
    var Ue = cr(0);
    function Ba(r) {
        for (var s = r; s !== null; ) {
            if (s.tag === 13) {
                var a = s.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || a.data === "$!"))
                    return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0)
                    return s
            } else if (s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === r)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === r)
                    return null;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
        return null
    }
    var Cc = [];
    function kc() {
        for (var r = 0; r < Cc.length; r++)
            Cc[r]._workInProgressVersionPrimary = null;
        Cc.length = 0
    }
    var Ua = I.ReactCurrentDispatcher
      , Tc = I.ReactCurrentBatchConfig
      , Kr = 0
      , ze = null
      , tt = null
      , it = null
      , za = !1
      , ro = !1
      , so = 0
      , xb = 0;
    function pt() {
        throw Error(n(321))
    }
    function Pc(r, s) {
        if (s === null)
            return !1;
        for (var a = 0; a < s.length && a < r.length; a++)
            if (!rn(r[a], s[a]))
                return !1;
        return !0
    }
    function Rc(r, s, a, c, h, m) {
        if (Kr = m,
        ze = s,
        s.memoizedState = null,
        s.updateQueue = null,
        s.lanes = 0,
        Ua.current = r === null || r.memoizedState === null ? Cb : kb,
        r = a(c, h),
        ro) {
            m = 0;
            do {
                if (ro = !1,
                so = 0,
                25 <= m)
                    throw Error(n(301));
                m += 1,
                it = tt = null,
                s.updateQueue = null,
                Ua.current = Tb,
                r = a(c, h)
            } while (ro)
        }
        if (Ua.current = Wa,
        s = tt !== null && tt.next !== null,
        Kr = 0,
        it = tt = ze = null,
        za = !1,
        s)
            throw Error(n(300));
        return r
    }
    function _c() {
        var r = so !== 0;
        return so = 0,
        r
    }
    function vn() {
        var r = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return it === null ? ze.memoizedState = it = r : it = it.next = r,
        it
    }
    function Kt() {
        if (tt === null) {
            var r = ze.alternate;
            r = r !== null ? r.memoizedState : null
        } else
            r = tt.next;
        var s = it === null ? ze.memoizedState : it.next;
        if (s !== null)
            it = s,
            tt = r;
        else {
            if (r === null)
                throw Error(n(310));
            tt = r,
            r = {
                memoizedState: tt.memoizedState,
                baseState: tt.baseState,
                baseQueue: tt.baseQueue,
                queue: tt.queue,
                next: null
            },
            it === null ? ze.memoizedState = it = r : it = it.next = r
        }
        return it
    }
    function io(r, s) {
        return typeof s == "function" ? s(r) : s
    }
    function Ac(r) {
        var s = Kt()
          , a = s.queue;
        if (a === null)
            throw Error(n(311));
        a.lastRenderedReducer = r;
        var c = tt
          , h = c.baseQueue
          , m = a.pending;
        if (m !== null) {
            if (h !== null) {
                var w = h.next;
                h.next = m.next,
                m.next = w
            }
            c.baseQueue = h = m,
            a.pending = null
        }
        if (h !== null) {
            m = h.next,
            c = c.baseState;
            var k = w = null
              , A = null
              , V = m;
            do {
                var K = V.lane;
                if ((Kr & K) === K)
                    A !== null && (A = A.next = {
                        lane: 0,
                        action: V.action,
                        hasEagerState: V.hasEagerState,
                        eagerState: V.eagerState,
                        next: null
                    }),
                    c = V.hasEagerState ? V.eagerState : r(c, V.action);
                else {
                    var Q = {
                        lane: K,
                        action: V.action,
                        hasEagerState: V.hasEagerState,
                        eagerState: V.eagerState,
                        next: null
                    };
                    A === null ? (k = A = Q,
                    w = c) : A = A.next = Q,
                    ze.lanes |= K,
                    Qr |= K
                }
                V = V.next
            } while (V !== null && V !== m);
            A === null ? w = c : A.next = k,
            rn(c, s.memoizedState) || (_t = !0),
            s.memoizedState = c,
            s.baseState = w,
            s.baseQueue = A,
            a.lastRenderedState = c
        }
        if (r = a.interleaved,
        r !== null) {
            h = r;
            do
                m = h.lane,
                ze.lanes |= m,
                Qr |= m,
                h = h.next;
            while (h !== r)
        } else
            h === null && (a.lanes = 0);
        return [s.memoizedState, a.dispatch]
    }
    function Nc(r) {
        var s = Kt()
          , a = s.queue;
        if (a === null)
            throw Error(n(311));
        a.lastRenderedReducer = r;
        var c = a.dispatch
          , h = a.pending
          , m = s.memoizedState;
        if (h !== null) {
            a.pending = null;
            var w = h = h.next;
            do
                m = r(m, w.action),
                w = w.next;
            while (w !== h);
            rn(m, s.memoizedState) || (_t = !0),
            s.memoizedState = m,
            s.baseQueue === null && (s.baseState = m),
            a.lastRenderedState = m
        }
        return [m, c]
    }
    function km() {}
    function Tm(r, s) {
        var a = ze
          , c = Kt()
          , h = s()
          , m = !rn(c.memoizedState, h);
        if (m && (c.memoizedState = h,
        _t = !0),
        c = c.queue,
        Oc(_m.bind(null, a, c, r), [r]),
        c.getSnapshot !== s || m || it !== null && it.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            oo(9, Rm.bind(null, a, c, h, s), void 0, null),
            ot === null)
                throw Error(n(349));
            (Kr & 30) !== 0 || Pm(a, s, h)
        }
        return h
    }
    function Pm(r, s, a) {
        r.flags |= 16384,
        r = {
            getSnapshot: s,
            value: a
        },
        s = ze.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        ze.updateQueue = s,
        s.stores = [r]) : (a = s.stores,
        a === null ? s.stores = [r] : a.push(r))
    }
    function Rm(r, s, a, c) {
        s.value = a,
        s.getSnapshot = c,
        Am(s) && Nm(r)
    }
    function _m(r, s, a) {
        return a(function() {
            Am(s) && Nm(r)
        })
    }
    function Am(r) {
        var s = r.getSnapshot;
        r = r.value;
        try {
            var a = s();
            return !rn(r, a)
        } catch {
            return !0
        }
    }
    function Nm(r) {
        var s = jn(r, 1);
        s !== null && un(s, r, 1, -1)
    }
    function Om(r) {
        var s = vn();
        return typeof r == "function" && (r = r()),
        s.memoizedState = s.baseState = r,
        r = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: io,
            lastRenderedState: r
        },
        s.queue = r,
        r = r.dispatch = Eb.bind(null, ze, r),
        [s.memoizedState, r]
    }
    function oo(r, s, a, c) {
        return r = {
            tag: r,
            create: s,
            destroy: a,
            deps: c,
            next: null
        },
        s = ze.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        ze.updateQueue = s,
        s.lastEffect = r.next = r) : (a = s.lastEffect,
        a === null ? s.lastEffect = r.next = r : (c = a.next,
        a.next = r,
        r.next = c,
        s.lastEffect = r)),
        r
    }
    function Lm() {
        return Kt().memoizedState
    }
    function $a(r, s, a, c) {
        var h = vn();
        ze.flags |= r,
        h.memoizedState = oo(1 | s, a, void 0, c === void 0 ? null : c)
    }
    function Ha(r, s, a, c) {
        var h = Kt();
        c = c === void 0 ? null : c;
        var m = void 0;
        if (tt !== null) {
            var w = tt.memoizedState;
            if (m = w.destroy,
            c !== null && Pc(c, w.deps)) {
                h.memoizedState = oo(s, a, m, c);
                return
            }
        }
        ze.flags |= r,
        h.memoizedState = oo(1 | s, a, m, c)
    }
    function Mm(r, s) {
        return $a(8390656, 8, r, s)
    }
    function Oc(r, s) {
        return Ha(2048, 8, r, s)
    }
    function Dm(r, s) {
        return Ha(4, 2, r, s)
    }
    function jm(r, s) {
        return Ha(4, 4, r, s)
    }
    function Im(r, s) {
        if (typeof s == "function")
            return r = r(),
            s(r),
            function() {
                s(null)
            }
            ;
        if (s != null)
            return r = r(),
            s.current = r,
            function() {
                s.current = null
            }
    }
    function Fm(r, s, a) {
        return a = a != null ? a.concat([r]) : null,
        Ha(4, 4, Im.bind(null, s, r), a)
    }
    function Lc() {}
    function Vm(r, s) {
        var a = Kt();
        s = s === void 0 ? null : s;
        var c = a.memoizedState;
        return c !== null && s !== null && Pc(s, c[1]) ? c[0] : (a.memoizedState = [r, s],
        r)
    }
    function Bm(r, s) {
        var a = Kt();
        s = s === void 0 ? null : s;
        var c = a.memoizedState;
        return c !== null && s !== null && Pc(s, c[1]) ? c[0] : (r = r(),
        a.memoizedState = [r, s],
        r)
    }
    function Um(r, s, a) {
        return (Kr & 21) === 0 ? (r.baseState && (r.baseState = !1,
        _t = !0),
        r.memoizedState = a) : (rn(a, s) || (a = yp(),
        ze.lanes |= a,
        Qr |= a,
        r.baseState = !0),
        s)
    }
    function Sb(r, s) {
        var a = De;
        De = a !== 0 && 4 > a ? a : 4,
        r(!0);
        var c = Tc.transition;
        Tc.transition = {};
        try {
            r(!1),
            s()
        } finally {
            De = a,
            Tc.transition = c
        }
    }
    function zm() {
        return Kt().memoizedState
    }
    function bb(r, s, a) {
        var c = vr(r);
        if (a = {
            lane: c,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        $m(r))
            Hm(s, a);
        else if (a = xm(r, s, a, c),
        a !== null) {
            var h = St();
            un(a, r, c, h),
            Wm(a, s, c)
        }
    }
    function Eb(r, s, a) {
        var c = vr(r)
          , h = {
            lane: c,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if ($m(r))
            Hm(s, h);
        else {
            var m = r.alternate;
            if (r.lanes === 0 && (m === null || m.lanes === 0) && (m = s.lastRenderedReducer,
            m !== null))
                try {
                    var w = s.lastRenderedState
                      , k = m(w, a);
                    if (h.hasEagerState = !0,
                    h.eagerState = k,
                    rn(k, w)) {
                        var A = s.interleaved;
                        A === null ? (h.next = h,
                        xc(s)) : (h.next = A.next,
                        A.next = h),
                        s.interleaved = h;
                        return
                    }
                } catch {} finally {}
            a = xm(r, s, h, c),
            a !== null && (h = St(),
            un(a, r, c, h),
            Wm(a, s, c))
        }
    }
    function $m(r) {
        var s = r.alternate;
        return r === ze || s !== null && s === ze
    }
    function Hm(r, s) {
        ro = za = !0;
        var a = r.pending;
        a === null ? s.next = s : (s.next = a.next,
        a.next = s),
        r.pending = s
    }
    function Wm(r, s, a) {
        if ((a & 4194240) !== 0) {
            var c = s.lanes;
            c &= r.pendingLanes,
            a |= c,
            s.lanes = a,
            Du(r, a)
        }
    }
    var Wa = {
        readContext: qt,
        useCallback: pt,
        useContext: pt,
        useEffect: pt,
        useImperativeHandle: pt,
        useInsertionEffect: pt,
        useLayoutEffect: pt,
        useMemo: pt,
        useReducer: pt,
        useRef: pt,
        useState: pt,
        useDebugValue: pt,
        useDeferredValue: pt,
        useTransition: pt,
        useMutableSource: pt,
        useSyncExternalStore: pt,
        useId: pt,
        unstable_isNewReconciler: !1
    }
      , Cb = {
        readContext: qt,
        useCallback: function(r, s) {
            return vn().memoizedState = [r, s === void 0 ? null : s],
            r
        },
        useContext: qt,
        useEffect: Mm,
        useImperativeHandle: function(r, s, a) {
            return a = a != null ? a.concat([r]) : null,
            $a(4194308, 4, Im.bind(null, s, r), a)
        },
        useLayoutEffect: function(r, s) {
            return $a(4194308, 4, r, s)
        },
        useInsertionEffect: function(r, s) {
            return $a(4, 2, r, s)
        },
        useMemo: function(r, s) {
            var a = vn();
            return s = s === void 0 ? null : s,
            r = r(),
            a.memoizedState = [r, s],
            r
        },
        useReducer: function(r, s, a) {
            var c = vn();
            return s = a !== void 0 ? a(s) : s,
            c.memoizedState = c.baseState = s,
            r = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: r,
                lastRenderedState: s
            },
            c.queue = r,
            r = r.dispatch = bb.bind(null, ze, r),
            [c.memoizedState, r]
        },
        useRef: function(r) {
            var s = vn();
            return r = {
                current: r
            },
            s.memoizedState = r
        },
        useState: Om,
        useDebugValue: Lc,
        useDeferredValue: function(r) {
            return vn().memoizedState = r
        },
        useTransition: function() {
            var r = Om(!1)
              , s = r[0];
            return r = Sb.bind(null, r[1]),
            vn().memoizedState = r,
            [s, r]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(r, s, a) {
            var c = ze
              , h = vn();
            if (Be) {
                if (a === void 0)
                    throw Error(n(407));
                a = a()
            } else {
                if (a = s(),
                ot === null)
                    throw Error(n(349));
                (Kr & 30) !== 0 || Pm(c, s, a)
            }
            h.memoizedState = a;
            var m = {
                value: a,
                getSnapshot: s
            };
            return h.queue = m,
            Mm(_m.bind(null, c, m, r), [r]),
            c.flags |= 2048,
            oo(9, Rm.bind(null, c, m, a, s), void 0, null),
            a
        },
        useId: function() {
            var r = vn()
              , s = ot.identifierPrefix;
            if (Be) {
                var a = Dn
                  , c = Mn;
                a = (c & ~(1 << 32 - nn(c) - 1)).toString(32) + a,
                s = ":" + s + "R" + a,
                a = so++,
                0 < a && (s += "H" + a.toString(32)),
                s += ":"
            } else
                a = xb++,
                s = ":" + s + "r" + a.toString(32) + ":";
            return r.memoizedState = s
        },
        unstable_isNewReconciler: !1
    }
      , kb = {
        readContext: qt,
        useCallback: Vm,
        useContext: qt,
        useEffect: Oc,
        useImperativeHandle: Fm,
        useInsertionEffect: Dm,
        useLayoutEffect: jm,
        useMemo: Bm,
        useReducer: Ac,
        useRef: Lm,
        useState: function() {
            return Ac(io)
        },
        useDebugValue: Lc,
        useDeferredValue: function(r) {
            var s = Kt();
            return Um(s, tt.memoizedState, r)
        },
        useTransition: function() {
            var r = Ac(io)[0]
              , s = Kt().memoizedState;
            return [r, s]
        },
        useMutableSource: km,
        useSyncExternalStore: Tm,
        useId: zm,
        unstable_isNewReconciler: !1
    }
      , Tb = {
        readContext: qt,
        useCallback: Vm,
        useContext: qt,
        useEffect: Oc,
        useImperativeHandle: Fm,
        useInsertionEffect: Dm,
        useLayoutEffect: jm,
        useMemo: Bm,
        useReducer: Nc,
        useRef: Lm,
        useState: function() {
            return Nc(io)
        },
        useDebugValue: Lc,
        useDeferredValue: function(r) {
            var s = Kt();
            return tt === null ? s.memoizedState = r : Um(s, tt.memoizedState, r)
        },
        useTransition: function() {
            var r = Nc(io)[0]
              , s = Kt().memoizedState;
            return [r, s]
        },
        useMutableSource: km,
        useSyncExternalStore: Tm,
        useId: zm,
        unstable_isNewReconciler: !1
    };
    function on(r, s) {
        if (r && r.defaultProps) {
            s = Z({}, s),
            r = r.defaultProps;
            for (var a in r)
                s[a] === void 0 && (s[a] = r[a]);
            return s
        }
        return s
    }
    function Mc(r, s, a, c) {
        s = r.memoizedState,
        a = a(c, s),
        a = a == null ? s : Z({}, s, a),
        r.memoizedState = a,
        r.lanes === 0 && (r.updateQueue.baseState = a)
    }
    var qa = {
        isMounted: function(r) {
            return (r = r._reactInternals) ? Br(r) === r : !1
        },
        enqueueSetState: function(r, s, a) {
            r = r._reactInternals;
            var c = St()
              , h = vr(r)
              , m = In(c, h);
            m.payload = s,
            a != null && (m.callback = a),
            s = pr(r, m, h),
            s !== null && (un(s, r, h, c),
            Fa(s, r, h))
        },
        enqueueReplaceState: function(r, s, a) {
            r = r._reactInternals;
            var c = St()
              , h = vr(r)
              , m = In(c, h);
            m.tag = 1,
            m.payload = s,
            a != null && (m.callback = a),
            s = pr(r, m, h),
            s !== null && (un(s, r, h, c),
            Fa(s, r, h))
        },
        enqueueForceUpdate: function(r, s) {
            r = r._reactInternals;
            var a = St()
              , c = vr(r)
              , h = In(a, c);
            h.tag = 2,
            s != null && (h.callback = s),
            s = pr(r, h, c),
            s !== null && (un(s, r, c, a),
            Fa(s, r, c))
        }
    };
    function qm(r, s, a, c, h, m, w) {
        return r = r.stateNode,
        typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(c, m, w) : s.prototype && s.prototype.isPureReactComponent ? !qi(a, c) || !qi(h, m) : !0
    }
    function Km(r, s, a) {
        var c = !1
          , h = dr
          , m = s.contextType;
        return typeof m == "object" && m !== null ? m = qt(m) : (h = Rt(s) ? zr : ht.current,
        c = s.contextTypes,
        m = (c = c != null) ? js(r, h) : dr),
        s = new s(a,m),
        r.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        s.updater = qa,
        r.stateNode = s,
        s._reactInternals = r,
        c && (r = r.stateNode,
        r.__reactInternalMemoizedUnmaskedChildContext = h,
        r.__reactInternalMemoizedMaskedChildContext = m),
        s
    }
    function Qm(r, s, a, c) {
        r = s.state,
        typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(a, c),
        typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(a, c),
        s.state !== r && qa.enqueueReplaceState(s, s.state, null)
    }
    function Dc(r, s, a, c) {
        var h = r.stateNode;
        h.props = a,
        h.state = r.memoizedState,
        h.refs = {},
        Sc(r);
        var m = s.contextType;
        typeof m == "object" && m !== null ? h.context = qt(m) : (m = Rt(s) ? zr : ht.current,
        h.context = js(r, m)),
        h.state = r.memoizedState,
        m = s.getDerivedStateFromProps,
        typeof m == "function" && (Mc(r, s, m, a),
        h.state = r.memoizedState),
        typeof s.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (s = h.state,
        typeof h.componentWillMount == "function" && h.componentWillMount(),
        typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(),
        s !== h.state && qa.enqueueReplaceState(h, h.state, null),
        Va(r, a, h, c),
        h.state = r.memoizedState),
        typeof h.componentDidMount == "function" && (r.flags |= 4194308)
    }
    function Hs(r, s) {
        try {
            var a = ""
              , c = s;
            do
                a += be(c),
                c = c.return;
            while (c);
            var h = a
        } catch (m) {
            h = `
Error generating stack: ` + m.message + `
` + m.stack
        }
        return {
            value: r,
            source: s,
            stack: h,
            digest: null
        }
    }
    function jc(r, s, a) {
        return {
            value: r,
            source: null,
            stack: a ?? null,
            digest: s ?? null
        }
    }
    function Ic(r, s) {
        try {
            console.error(s.value)
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    var Pb = typeof WeakMap == "function" ? WeakMap : Map;
    function Gm(r, s, a) {
        a = In(-1, a),
        a.tag = 3,
        a.payload = {
            element: null
        };
        var c = s.value;
        return a.callback = function() {
            Za || (Za = !0,
            Jc = c),
            Ic(r, s)
        }
        ,
        a
    }
    function Xm(r, s, a) {
        a = In(-1, a),
        a.tag = 3;
        var c = r.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var h = s.value;
            a.payload = function() {
                return c(h)
            }
            ,
            a.callback = function() {
                Ic(r, s)
            }
        }
        var m = r.stateNode;
        return m !== null && typeof m.componentDidCatch == "function" && (a.callback = function() {
            Ic(r, s),
            typeof c != "function" && (gr === null ? gr = new Set([this]) : gr.add(this));
            var w = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: w !== null ? w : ""
            })
        }
        ),
        a
    }
    function Ym(r, s, a) {
        var c = r.pingCache;
        if (c === null) {
            c = r.pingCache = new Pb;
            var h = new Set;
            c.set(s, h)
        } else
            h = c.get(s),
            h === void 0 && (h = new Set,
            c.set(s, h));
        h.has(a) || (h.add(a),
        r = Ub.bind(null, r, s, a),
        s.then(r, r))
    }
    function Jm(r) {
        do {
            var s;
            if ((s = r.tag === 13) && (s = r.memoizedState,
            s = s !== null ? s.dehydrated !== null : !0),
            s)
                return r;
            r = r.return
        } while (r !== null);
        return null
    }
    function Zm(r, s, a, c, h) {
        return (r.mode & 1) === 0 ? (r === s ? r.flags |= 65536 : (r.flags |= 128,
        a.flags |= 131072,
        a.flags &= -52805,
        a.tag === 1 && (a.alternate === null ? a.tag = 17 : (s = In(-1, 1),
        s.tag = 2,
        pr(a, s, 1))),
        a.lanes |= 1),
        r) : (r.flags |= 65536,
        r.lanes = h,
        r)
    }
    var Rb = I.ReactCurrentOwner
      , _t = !1;
    function xt(r, s, a, c) {
        s.child = r === null ? wm(s, null, a, c) : Bs(s, r.child, a, c)
    }
    function eg(r, s, a, c, h) {
        a = a.render;
        var m = s.ref;
        return zs(s, h),
        c = Rc(r, s, a, c, m, h),
        a = _c(),
        r !== null && !_t ? (s.updateQueue = r.updateQueue,
        s.flags &= -2053,
        r.lanes &= ~h,
        Fn(r, s, h)) : (Be && a && dc(s),
        s.flags |= 1,
        xt(r, s, c, h),
        s.child)
    }
    function tg(r, s, a, c, h) {
        if (r === null) {
            var m = a.type;
            return typeof m == "function" && !id(m) && m.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (s.tag = 15,
            s.type = m,
            ng(r, s, m, c, h)) : (r = il(a.type, null, c, s, s.mode, h),
            r.ref = s.ref,
            r.return = s,
            s.child = r)
        }
        if (m = r.child,
        (r.lanes & h) === 0) {
            var w = m.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : qi,
            a(w, c) && r.ref === s.ref)
                return Fn(r, s, h)
        }
        return s.flags |= 1,
        r = xr(m, c),
        r.ref = s.ref,
        r.return = s,
        s.child = r
    }
    function ng(r, s, a, c, h) {
        if (r !== null) {
            var m = r.memoizedProps;
            if (qi(m, c) && r.ref === s.ref)
                if (_t = !1,
                s.pendingProps = c = m,
                (r.lanes & h) !== 0)
                    (r.flags & 131072) !== 0 && (_t = !0);
                else
                    return s.lanes = r.lanes,
                    Fn(r, s, h)
        }
        return Fc(r, s, a, c, h)
    }
    function rg(r, s, a) {
        var c = s.pendingProps
          , h = c.children
          , m = r !== null ? r.memoizedState : null;
        if (c.mode === "hidden")
            if ((s.mode & 1) === 0)
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                je(qs, Ut),
                Ut |= a;
            else {
                if ((a & 1073741824) === 0)
                    return r = m !== null ? m.baseLanes | a : a,
                    s.lanes = s.childLanes = 1073741824,
                    s.memoizedState = {
                        baseLanes: r,
                        cachePool: null,
                        transitions: null
                    },
                    s.updateQueue = null,
                    je(qs, Ut),
                    Ut |= r,
                    null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                c = m !== null ? m.baseLanes : a,
                je(qs, Ut),
                Ut |= c
            }
        else
            m !== null ? (c = m.baseLanes | a,
            s.memoizedState = null) : c = a,
            je(qs, Ut),
            Ut |= c;
        return xt(r, s, h, a),
        s.child
    }
    function sg(r, s) {
        var a = s.ref;
        (r === null && a !== null || r !== null && r.ref !== a) && (s.flags |= 512,
        s.flags |= 2097152)
    }
    function Fc(r, s, a, c, h) {
        var m = Rt(a) ? zr : ht.current;
        return m = js(s, m),
        zs(s, h),
        a = Rc(r, s, a, c, m, h),
        c = _c(),
        r !== null && !_t ? (s.updateQueue = r.updateQueue,
        s.flags &= -2053,
        r.lanes &= ~h,
        Fn(r, s, h)) : (Be && c && dc(s),
        s.flags |= 1,
        xt(r, s, a, h),
        s.child)
    }
    function ig(r, s, a, c, h) {
        if (Rt(a)) {
            var m = !0;
            Aa(s)
        } else
            m = !1;
        if (zs(s, h),
        s.stateNode === null)
            Qa(r, s),
            Km(s, a, c),
            Dc(s, a, c, h),
            c = !0;
        else if (r === null) {
            var w = s.stateNode
              , k = s.memoizedProps;
            w.props = k;
            var A = w.context
              , V = a.contextType;
            typeof V == "object" && V !== null ? V = qt(V) : (V = Rt(a) ? zr : ht.current,
            V = js(s, V));
            var K = a.getDerivedStateFromProps
              , Q = typeof K == "function" || typeof w.getSnapshotBeforeUpdate == "function";
            Q || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (k !== c || A !== V) && Qm(s, w, c, V),
            hr = !1;
            var q = s.memoizedState;
            w.state = q,
            Va(s, c, w, h),
            A = s.memoizedState,
            k !== c || q !== A || Pt.current || hr ? (typeof K == "function" && (Mc(s, a, K, c),
            A = s.memoizedState),
            (k = hr || qm(s, a, k, c, q, A, V)) ? (Q || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(),
            typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()),
            typeof w.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (s.flags |= 4194308),
            s.memoizedProps = c,
            s.memoizedState = A),
            w.props = c,
            w.state = A,
            w.context = V,
            c = k) : (typeof w.componentDidMount == "function" && (s.flags |= 4194308),
            c = !1)
        } else {
            w = s.stateNode,
            Sm(r, s),
            k = s.memoizedProps,
            V = s.type === s.elementType ? k : on(s.type, k),
            w.props = V,
            Q = s.pendingProps,
            q = w.context,
            A = a.contextType,
            typeof A == "object" && A !== null ? A = qt(A) : (A = Rt(a) ? zr : ht.current,
            A = js(s, A));
            var te = a.getDerivedStateFromProps;
            (K = typeof te == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (k !== Q || q !== A) && Qm(s, w, c, A),
            hr = !1,
            q = s.memoizedState,
            w.state = q,
            Va(s, c, w, h);
            var se = s.memoizedState;
            k !== Q || q !== se || Pt.current || hr ? (typeof te == "function" && (Mc(s, a, te, c),
            se = s.memoizedState),
            (V = hr || qm(s, a, V, c, q, se, A) || !1) ? (K || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(c, se, A),
            typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(c, se, A)),
            typeof w.componentDidUpdate == "function" && (s.flags |= 4),
            typeof w.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || k === r.memoizedProps && q === r.memoizedState || (s.flags |= 4),
            typeof w.getSnapshotBeforeUpdate != "function" || k === r.memoizedProps && q === r.memoizedState || (s.flags |= 1024),
            s.memoizedProps = c,
            s.memoizedState = se),
            w.props = c,
            w.state = se,
            w.context = A,
            c = V) : (typeof w.componentDidUpdate != "function" || k === r.memoizedProps && q === r.memoizedState || (s.flags |= 4),
            typeof w.getSnapshotBeforeUpdate != "function" || k === r.memoizedProps && q === r.memoizedState || (s.flags |= 1024),
            c = !1)
        }
        return Vc(r, s, a, c, m, h)
    }
    function Vc(r, s, a, c, h, m) {
        sg(r, s);
        var w = (s.flags & 128) !== 0;
        if (!c && !w)
            return h && cm(s, a, !1),
            Fn(r, s, m);
        c = s.stateNode,
        Rb.current = s;
        var k = w && typeof a.getDerivedStateFromError != "function" ? null : c.render();
        return s.flags |= 1,
        r !== null && w ? (s.child = Bs(s, r.child, null, m),
        s.child = Bs(s, null, k, m)) : xt(r, s, k, m),
        s.memoizedState = c.state,
        h && cm(s, a, !0),
        s.child
    }
    function og(r) {
        var s = r.stateNode;
        s.pendingContext ? lm(r, s.pendingContext, s.pendingContext !== s.context) : s.context && lm(r, s.context, !1),
        bc(r, s.containerInfo)
    }
    function ag(r, s, a, c, h) {
        return Vs(),
        mc(h),
        s.flags |= 256,
        xt(r, s, a, c),
        s.child
    }
    var Bc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Uc(r) {
        return {
            baseLanes: r,
            cachePool: null,
            transitions: null
        }
    }
    function lg(r, s, a) {
        var c = s.pendingProps, h = Ue.current, m = !1, w = (s.flags & 128) !== 0, k;
        if ((k = w) || (k = r !== null && r.memoizedState === null ? !1 : (h & 2) !== 0),
        k ? (m = !0,
        s.flags &= -129) : (r === null || r.memoizedState !== null) && (h |= 1),
        je(Ue, h & 1),
        r === null)
            return pc(s),
            r = s.memoizedState,
            r !== null && (r = r.dehydrated,
            r !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : r.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824,
            null) : (w = c.children,
            r = c.fallback,
            m ? (c = s.mode,
            m = s.child,
            w = {
                mode: "hidden",
                children: w
            },
            (c & 1) === 0 && m !== null ? (m.childLanes = 0,
            m.pendingProps = w) : m = ol(w, c, 0, null),
            r = Jr(r, c, a, null),
            m.return = s,
            r.return = s,
            m.sibling = r,
            s.child = m,
            s.child.memoizedState = Uc(a),
            s.memoizedState = Bc,
            r) : zc(s, w));
        if (h = r.memoizedState,
        h !== null && (k = h.dehydrated,
        k !== null))
            return _b(r, s, w, c, k, h, a);
        if (m) {
            m = c.fallback,
            w = s.mode,
            h = r.child,
            k = h.sibling;
            var A = {
                mode: "hidden",
                children: c.children
            };
            return (w & 1) === 0 && s.child !== h ? (c = s.child,
            c.childLanes = 0,
            c.pendingProps = A,
            s.deletions = null) : (c = xr(h, A),
            c.subtreeFlags = h.subtreeFlags & 14680064),
            k !== null ? m = xr(k, m) : (m = Jr(m, w, a, null),
            m.flags |= 2),
            m.return = s,
            c.return = s,
            c.sibling = m,
            s.child = c,
            c = m,
            m = s.child,
            w = r.child.memoizedState,
            w = w === null ? Uc(a) : {
                baseLanes: w.baseLanes | a,
                cachePool: null,
                transitions: w.transitions
            },
            m.memoizedState = w,
            m.childLanes = r.childLanes & ~a,
            s.memoizedState = Bc,
            c
        }
        return m = r.child,
        r = m.sibling,
        c = xr(m, {
            mode: "visible",
            children: c.children
        }),
        (s.mode & 1) === 0 && (c.lanes = a),
        c.return = s,
        c.sibling = null,
        r !== null && (a = s.deletions,
        a === null ? (s.deletions = [r],
        s.flags |= 16) : a.push(r)),
        s.child = c,
        s.memoizedState = null,
        c
    }
    function zc(r, s) {
        return s = ol({
            mode: "visible",
            children: s
        }, r.mode, 0, null),
        s.return = r,
        r.child = s
    }
    function Ka(r, s, a, c) {
        return c !== null && mc(c),
        Bs(s, r.child, null, a),
        r = zc(s, s.pendingProps.children),
        r.flags |= 2,
        s.memoizedState = null,
        r
    }
    function _b(r, s, a, c, h, m, w) {
        if (a)
            return s.flags & 256 ? (s.flags &= -257,
            c = jc(Error(n(422))),
            Ka(r, s, w, c)) : s.memoizedState !== null ? (s.child = r.child,
            s.flags |= 128,
            null) : (m = c.fallback,
            h = s.mode,
            c = ol({
                mode: "visible",
                children: c.children
            }, h, 0, null),
            m = Jr(m, h, w, null),
            m.flags |= 2,
            c.return = s,
            m.return = s,
            c.sibling = m,
            s.child = c,
            (s.mode & 1) !== 0 && Bs(s, r.child, null, w),
            s.child.memoizedState = Uc(w),
            s.memoizedState = Bc,
            m);
        if ((s.mode & 1) === 0)
            return Ka(r, s, w, null);
        if (h.data === "$!") {
            if (c = h.nextSibling && h.nextSibling.dataset,
            c)
                var k = c.dgst;
            return c = k,
            m = Error(n(419)),
            c = jc(m, c, void 0),
            Ka(r, s, w, c)
        }
        if (k = (w & r.childLanes) !== 0,
        _t || k) {
            if (c = ot,
            c !== null) {
                switch (w & -w) {
                case 4:
                    h = 2;
                    break;
                case 16:
                    h = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    h = 32;
                    break;
                case 536870912:
                    h = 268435456;
                    break;
                default:
                    h = 0
                }
                h = (h & (c.suspendedLanes | w)) !== 0 ? 0 : h,
                h !== 0 && h !== m.retryLane && (m.retryLane = h,
                jn(r, h),
                un(c, r, h, -1))
            }
            return sd(),
            c = jc(Error(n(421))),
            Ka(r, s, w, c)
        }
        return h.data === "$?" ? (s.flags |= 128,
        s.child = r.child,
        s = zb.bind(null, r),
        h._reactRetry = s,
        null) : (r = m.treeContext,
        Bt = ur(h.nextSibling),
        Vt = s,
        Be = !0,
        sn = null,
        r !== null && (Ht[Wt++] = Mn,
        Ht[Wt++] = Dn,
        Ht[Wt++] = $r,
        Mn = r.id,
        Dn = r.overflow,
        $r = s),
        s = zc(s, c.children),
        s.flags |= 4096,
        s)
    }
    function ug(r, s, a) {
        r.lanes |= s;
        var c = r.alternate;
        c !== null && (c.lanes |= s),
        wc(r.return, s, a)
    }
    function $c(r, s, a, c, h) {
        var m = r.memoizedState;
        m === null ? r.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: c,
            tail: a,
            tailMode: h
        } : (m.isBackwards = s,
        m.rendering = null,
        m.renderingStartTime = 0,
        m.last = c,
        m.tail = a,
        m.tailMode = h)
    }
    function cg(r, s, a) {
        var c = s.pendingProps
          , h = c.revealOrder
          , m = c.tail;
        if (xt(r, s, c.children, a),
        c = Ue.current,
        (c & 2) !== 0)
            c = c & 1 | 2,
            s.flags |= 128;
        else {
            if (r !== null && (r.flags & 128) !== 0)
                e: for (r = s.child; r !== null; ) {
                    if (r.tag === 13)
                        r.memoizedState !== null && ug(r, a, s);
                    else if (r.tag === 19)
                        ug(r, a, s);
                    else if (r.child !== null) {
                        r.child.return = r,
                        r = r.child;
                        continue
                    }
                    if (r === s)
                        break e;
                    for (; r.sibling === null; ) {
                        if (r.return === null || r.return === s)
                            break e;
                        r = r.return
                    }
                    r.sibling.return = r.return,
                    r = r.sibling
                }
            c &= 1
        }
        if (je(Ue, c),
        (s.mode & 1) === 0)
            s.memoizedState = null;
        else
            switch (h) {
            case "forwards":
                for (a = s.child,
                h = null; a !== null; )
                    r = a.alternate,
                    r !== null && Ba(r) === null && (h = a),
                    a = a.sibling;
                a = h,
                a === null ? (h = s.child,
                s.child = null) : (h = a.sibling,
                a.sibling = null),
                $c(s, !1, h, a, m);
                break;
            case "backwards":
                for (a = null,
                h = s.child,
                s.child = null; h !== null; ) {
                    if (r = h.alternate,
                    r !== null && Ba(r) === null) {
                        s.child = h;
                        break
                    }
                    r = h.sibling,
                    h.sibling = a,
                    a = h,
                    h = r
                }
                $c(s, !0, a, null, m);
                break;
            case "together":
                $c(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
            }
        return s.child
    }
    function Qa(r, s) {
        (s.mode & 1) === 0 && r !== null && (r.alternate = null,
        s.alternate = null,
        s.flags |= 2)
    }
    function Fn(r, s, a) {
        if (r !== null && (s.dependencies = r.dependencies),
        Qr |= s.lanes,
        (a & s.childLanes) === 0)
            return null;
        if (r !== null && s.child !== r.child)
            throw Error(n(153));
        if (s.child !== null) {
            for (r = s.child,
            a = xr(r, r.pendingProps),
            s.child = a,
            a.return = s; r.sibling !== null; )
                r = r.sibling,
                a = a.sibling = xr(r, r.pendingProps),
                a.return = s;
            a.sibling = null
        }
        return s.child
    }
    function Ab(r, s, a) {
        switch (s.tag) {
        case 3:
            og(s),
            Vs();
            break;
        case 5:
            Cm(s);
            break;
        case 1:
            Rt(s.type) && Aa(s);
            break;
        case 4:
            bc(s, s.stateNode.containerInfo);
            break;
        case 10:
            var c = s.type._context
              , h = s.memoizedProps.value;
            je(ja, c._currentValue),
            c._currentValue = h;
            break;
        case 13:
            if (c = s.memoizedState,
            c !== null)
                return c.dehydrated !== null ? (je(Ue, Ue.current & 1),
                s.flags |= 128,
                null) : (a & s.child.childLanes) !== 0 ? lg(r, s, a) : (je(Ue, Ue.current & 1),
                r = Fn(r, s, a),
                r !== null ? r.sibling : null);
            je(Ue, Ue.current & 1);
            break;
        case 19:
            if (c = (a & s.childLanes) !== 0,
            (r.flags & 128) !== 0) {
                if (c)
                    return cg(r, s, a);
                s.flags |= 128
            }
            if (h = s.memoizedState,
            h !== null && (h.rendering = null,
            h.tail = null,
            h.lastEffect = null),
            je(Ue, Ue.current),
            c)
                break;
            return null;
        case 22:
        case 23:
            return s.lanes = 0,
            rg(r, s, a)
        }
        return Fn(r, s, a)
    }
    var dg, Hc, fg, hg;
    dg = function(r, s) {
        for (var a = s.child; a !== null; ) {
            if (a.tag === 5 || a.tag === 6)
                r.appendChild(a.stateNode);
            else if (a.tag !== 4 && a.child !== null) {
                a.child.return = a,
                a = a.child;
                continue
            }
            if (a === s)
                break;
            for (; a.sibling === null; ) {
                if (a.return === null || a.return === s)
                    return;
                a = a.return
            }
            a.sibling.return = a.return,
            a = a.sibling
        }
    }
    ,
    Hc = function() {}
    ,
    fg = function(r, s, a, c) {
        var h = r.memoizedProps;
        if (h !== c) {
            r = s.stateNode,
            qr(yn.current);
            var m = null;
            switch (a) {
            case "input":
                h = wu(r, h),
                c = wu(r, c),
                m = [];
                break;
            case "select":
                h = Z({}, h, {
                    value: void 0
                }),
                c = Z({}, c, {
                    value: void 0
                }),
                m = [];
                break;
            case "textarea":
                h = bu(r, h),
                c = bu(r, c),
                m = [];
                break;
            default:
                typeof h.onClick != "function" && typeof c.onClick == "function" && (r.onclick = Pa)
            }
            Cu(a, c);
            var w;
            a = null;
            for (V in h)
                if (!c.hasOwnProperty(V) && h.hasOwnProperty(V) && h[V] != null)
                    if (V === "style") {
                        var k = h[V];
                        for (w in k)
                            k.hasOwnProperty(w) && (a || (a = {}),
                            a[w] = "")
                    } else
                        V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (o.hasOwnProperty(V) ? m || (m = []) : (m = m || []).push(V, null));
            for (V in c) {
                var A = c[V];
                if (k = h != null ? h[V] : void 0,
                c.hasOwnProperty(V) && A !== k && (A != null || k != null))
                    if (V === "style")
                        if (k) {
                            for (w in k)
                                !k.hasOwnProperty(w) || A && A.hasOwnProperty(w) || (a || (a = {}),
                                a[w] = "");
                            for (w in A)
                                A.hasOwnProperty(w) && k[w] !== A[w] && (a || (a = {}),
                                a[w] = A[w])
                        } else
                            a || (m || (m = []),
                            m.push(V, a)),
                            a = A;
                    else
                        V === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0,
                        k = k ? k.__html : void 0,
                        A != null && k !== A && (m = m || []).push(V, A)) : V === "children" ? typeof A != "string" && typeof A != "number" || (m = m || []).push(V, "" + A) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (o.hasOwnProperty(V) ? (A != null && V === "onScroll" && Ie("scroll", r),
                        m || k === A || (m = [])) : (m = m || []).push(V, A))
            }
            a && (m = m || []).push("style", a);
            var V = m;
            (s.updateQueue = V) && (s.flags |= 4)
        }
    }
    ,
    hg = function(r, s, a, c) {
        a !== c && (s.flags |= 4)
    }
    ;
    function ao(r, s) {
        if (!Be)
            switch (r.tailMode) {
            case "hidden":
                s = r.tail;
                for (var a = null; s !== null; )
                    s.alternate !== null && (a = s),
                    s = s.sibling;
                a === null ? r.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = r.tail;
                for (var c = null; a !== null; )
                    a.alternate !== null && (c = a),
                    a = a.sibling;
                c === null ? s || r.tail === null ? r.tail = null : r.tail.sibling = null : c.sibling = null
            }
    }
    function mt(r) {
        var s = r.alternate !== null && r.alternate.child === r.child
          , a = 0
          , c = 0;
        if (s)
            for (var h = r.child; h !== null; )
                a |= h.lanes | h.childLanes,
                c |= h.subtreeFlags & 14680064,
                c |= h.flags & 14680064,
                h.return = r,
                h = h.sibling;
        else
            for (h = r.child; h !== null; )
                a |= h.lanes | h.childLanes,
                c |= h.subtreeFlags,
                c |= h.flags,
                h.return = r,
                h = h.sibling;
        return r.subtreeFlags |= c,
        r.childLanes = a,
        s
    }
    function Nb(r, s, a) {
        var c = s.pendingProps;
        switch (fc(s),
        s.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return mt(s),
            null;
        case 1:
            return Rt(s.type) && _a(),
            mt(s),
            null;
        case 3:
            return c = s.stateNode,
            $s(),
            Fe(Pt),
            Fe(ht),
            kc(),
            c.pendingContext && (c.context = c.pendingContext,
            c.pendingContext = null),
            (r === null || r.child === null) && (Ma(s) ? s.flags |= 4 : r === null || r.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024,
            sn !== null && (td(sn),
            sn = null))),
            Hc(r, s),
            mt(s),
            null;
        case 5:
            Ec(s);
            var h = qr(no.current);
            if (a = s.type,
            r !== null && s.stateNode != null)
                fg(r, s, a, c, h),
                r.ref !== s.ref && (s.flags |= 512,
                s.flags |= 2097152);
            else {
                if (!c) {
                    if (s.stateNode === null)
                        throw Error(n(166));
                    return mt(s),
                    null
                }
                if (r = qr(yn.current),
                Ma(s)) {
                    c = s.stateNode,
                    a = s.type;
                    var m = s.memoizedProps;
                    switch (c[gn] = s,
                    c[Yi] = m,
                    r = (s.mode & 1) !== 0,
                    a) {
                    case "dialog":
                        Ie("cancel", c),
                        Ie("close", c);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Ie("load", c);
                        break;
                    case "video":
                    case "audio":
                        for (h = 0; h < Qi.length; h++)
                            Ie(Qi[h], c);
                        break;
                    case "source":
                        Ie("error", c);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Ie("error", c),
                        Ie("load", c);
                        break;
                    case "details":
                        Ie("toggle", c);
                        break;
                    case "input":
                        Kh(c, m),
                        Ie("invalid", c);
                        break;
                    case "select":
                        c._wrapperState = {
                            wasMultiple: !!m.multiple
                        },
                        Ie("invalid", c);
                        break;
                    case "textarea":
                        Xh(c, m),
                        Ie("invalid", c)
                    }
                    Cu(a, m),
                    h = null;
                    for (var w in m)
                        if (m.hasOwnProperty(w)) {
                            var k = m[w];
                            w === "children" ? typeof k == "string" ? c.textContent !== k && (m.suppressHydrationWarning !== !0 && Ta(c.textContent, k, r),
                            h = ["children", k]) : typeof k == "number" && c.textContent !== "" + k && (m.suppressHydrationWarning !== !0 && Ta(c.textContent, k, r),
                            h = ["children", "" + k]) : o.hasOwnProperty(w) && k != null && w === "onScroll" && Ie("scroll", c)
                        }
                    switch (a) {
                    case "input":
                        nr(c),
                        Gh(c, m, !0);
                        break;
                    case "textarea":
                        nr(c),
                        Jh(c);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof m.onClick == "function" && (c.onclick = Pa)
                    }
                    c = h,
                    s.updateQueue = c,
                    c !== null && (s.flags |= 4)
                } else {
                    w = h.nodeType === 9 ? h : h.ownerDocument,
                    r === "http://www.w3.org/1999/xhtml" && (r = Zh(a)),
                    r === "http://www.w3.org/1999/xhtml" ? a === "script" ? (r = w.createElement("div"),
                    r.innerHTML = "<script><\/script>",
                    r = r.removeChild(r.firstChild)) : typeof c.is == "string" ? r = w.createElement(a, {
                        is: c.is
                    }) : (r = w.createElement(a),
                    a === "select" && (w = r,
                    c.multiple ? w.multiple = !0 : c.size && (w.size = c.size))) : r = w.createElementNS(r, a),
                    r[gn] = s,
                    r[Yi] = c,
                    dg(r, s, !1, !1),
                    s.stateNode = r;
                    e: {
                        switch (w = ku(a, c),
                        a) {
                        case "dialog":
                            Ie("cancel", r),
                            Ie("close", r),
                            h = c;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Ie("load", r),
                            h = c;
                            break;
                        case "video":
                        case "audio":
                            for (h = 0; h < Qi.length; h++)
                                Ie(Qi[h], r);
                            h = c;
                            break;
                        case "source":
                            Ie("error", r),
                            h = c;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Ie("error", r),
                            Ie("load", r),
                            h = c;
                            break;
                        case "details":
                            Ie("toggle", r),
                            h = c;
                            break;
                        case "input":
                            Kh(r, c),
                            h = wu(r, c),
                            Ie("invalid", r);
                            break;
                        case "option":
                            h = c;
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!c.multiple
                            },
                            h = Z({}, c, {
                                value: void 0
                            }),
                            Ie("invalid", r);
                            break;
                        case "textarea":
                            Xh(r, c),
                            h = bu(r, c),
                            Ie("invalid", r);
                            break;
                        default:
                            h = c
                        }
                        Cu(a, h),
                        k = h;
                        for (m in k)
                            if (k.hasOwnProperty(m)) {
                                var A = k[m];
                                m === "style" ? np(r, A) : m === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0,
                                A != null && ep(r, A)) : m === "children" ? typeof A == "string" ? (a !== "textarea" || A !== "") && _i(r, A) : typeof A == "number" && _i(r, "" + A) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (o.hasOwnProperty(m) ? A != null && m === "onScroll" && Ie("scroll", r) : A != null && O(r, m, A, w))
                            }
                        switch (a) {
                        case "input":
                            nr(r),
                            Gh(r, c, !1);
                            break;
                        case "textarea":
                            nr(r),
                            Jh(r);
                            break;
                        case "option":
                            c.value != null && r.setAttribute("value", "" + Ae(c.value));
                            break;
                        case "select":
                            r.multiple = !!c.multiple,
                            m = c.value,
                            m != null ? Cs(r, !!c.multiple, m, !1) : c.defaultValue != null && Cs(r, !!c.multiple, c.defaultValue, !0);
                            break;
                        default:
                            typeof h.onClick == "function" && (r.onclick = Pa)
                        }
                        switch (a) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            c = !!c.autoFocus;
                            break e;
                        case "img":
                            c = !0;
                            break e;
                        default:
                            c = !1
                        }
                    }
                    c && (s.flags |= 4)
                }
                s.ref !== null && (s.flags |= 512,
                s.flags |= 2097152)
            }
            return mt(s),
            null;
        case 6:
            if (r && s.stateNode != null)
                hg(r, s, r.memoizedProps, c);
            else {
                if (typeof c != "string" && s.stateNode === null)
                    throw Error(n(166));
                if (a = qr(no.current),
                qr(yn.current),
                Ma(s)) {
                    if (c = s.stateNode,
                    a = s.memoizedProps,
                    c[gn] = s,
                    (m = c.nodeValue !== a) && (r = Vt,
                    r !== null))
                        switch (r.tag) {
                        case 3:
                            Ta(c.nodeValue, a, (r.mode & 1) !== 0);
                            break;
                        case 5:
                            r.memoizedProps.suppressHydrationWarning !== !0 && Ta(c.nodeValue, a, (r.mode & 1) !== 0)
                        }
                    m && (s.flags |= 4)
                } else
                    c = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(c),
                    c[gn] = s,
                    s.stateNode = c
            }
            return mt(s),
            null;
        case 13:
            if (Fe(Ue),
            c = s.memoizedState,
            r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
                if (Be && Bt !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0)
                    gm(),
                    Vs(),
                    s.flags |= 98560,
                    m = !1;
                else if (m = Ma(s),
                c !== null && c.dehydrated !== null) {
                    if (r === null) {
                        if (!m)
                            throw Error(n(318));
                        if (m = s.memoizedState,
                        m = m !== null ? m.dehydrated : null,
                        !m)
                            throw Error(n(317));
                        m[gn] = s
                    } else
                        Vs(),
                        (s.flags & 128) === 0 && (s.memoizedState = null),
                        s.flags |= 4;
                    mt(s),
                    m = !1
                } else
                    sn !== null && (td(sn),
                    sn = null),
                    m = !0;
                if (!m)
                    return s.flags & 65536 ? s : null
            }
            return (s.flags & 128) !== 0 ? (s.lanes = a,
            s) : (c = c !== null,
            c !== (r !== null && r.memoizedState !== null) && c && (s.child.flags |= 8192,
            (s.mode & 1) !== 0 && (r === null || (Ue.current & 1) !== 0 ? nt === 0 && (nt = 3) : sd())),
            s.updateQueue !== null && (s.flags |= 4),
            mt(s),
            null);
        case 4:
            return $s(),
            Hc(r, s),
            r === null && Gi(s.stateNode.containerInfo),
            mt(s),
            null;
        case 10:
            return vc(s.type._context),
            mt(s),
            null;
        case 17:
            return Rt(s.type) && _a(),
            mt(s),
            null;
        case 19:
            if (Fe(Ue),
            m = s.memoizedState,
            m === null)
                return mt(s),
                null;
            if (c = (s.flags & 128) !== 0,
            w = m.rendering,
            w === null)
                if (c)
                    ao(m, !1);
                else {
                    if (nt !== 0 || r !== null && (r.flags & 128) !== 0)
                        for (r = s.child; r !== null; ) {
                            if (w = Ba(r),
                            w !== null) {
                                for (s.flags |= 128,
                                ao(m, !1),
                                c = w.updateQueue,
                                c !== null && (s.updateQueue = c,
                                s.flags |= 4),
                                s.subtreeFlags = 0,
                                c = a,
                                a = s.child; a !== null; )
                                    m = a,
                                    r = c,
                                    m.flags &= 14680066,
                                    w = m.alternate,
                                    w === null ? (m.childLanes = 0,
                                    m.lanes = r,
                                    m.child = null,
                                    m.subtreeFlags = 0,
                                    m.memoizedProps = null,
                                    m.memoizedState = null,
                                    m.updateQueue = null,
                                    m.dependencies = null,
                                    m.stateNode = null) : (m.childLanes = w.childLanes,
                                    m.lanes = w.lanes,
                                    m.child = w.child,
                                    m.subtreeFlags = 0,
                                    m.deletions = null,
                                    m.memoizedProps = w.memoizedProps,
                                    m.memoizedState = w.memoizedState,
                                    m.updateQueue = w.updateQueue,
                                    m.type = w.type,
                                    r = w.dependencies,
                                    m.dependencies = r === null ? null : {
                                        lanes: r.lanes,
                                        firstContext: r.firstContext
                                    }),
                                    a = a.sibling;
                                return je(Ue, Ue.current & 1 | 2),
                                s.child
                            }
                            r = r.sibling
                        }
                    m.tail !== null && Qe() > Ks && (s.flags |= 128,
                    c = !0,
                    ao(m, !1),
                    s.lanes = 4194304)
                }
            else {
                if (!c)
                    if (r = Ba(w),
                    r !== null) {
                        if (s.flags |= 128,
                        c = !0,
                        a = r.updateQueue,
                        a !== null && (s.updateQueue = a,
                        s.flags |= 4),
                        ao(m, !0),
                        m.tail === null && m.tailMode === "hidden" && !w.alternate && !Be)
                            return mt(s),
                            null
                    } else
                        2 * Qe() - m.renderingStartTime > Ks && a !== 1073741824 && (s.flags |= 128,
                        c = !0,
                        ao(m, !1),
                        s.lanes = 4194304);
                m.isBackwards ? (w.sibling = s.child,
                s.child = w) : (a = m.last,
                a !== null ? a.sibling = w : s.child = w,
                m.last = w)
            }
            return m.tail !== null ? (s = m.tail,
            m.rendering = s,
            m.tail = s.sibling,
            m.renderingStartTime = Qe(),
            s.sibling = null,
            a = Ue.current,
            je(Ue, c ? a & 1 | 2 : a & 1),
            s) : (mt(s),
            null);
        case 22:
        case 23:
            return rd(),
            c = s.memoizedState !== null,
            r !== null && r.memoizedState !== null !== c && (s.flags |= 8192),
            c && (s.mode & 1) !== 0 ? (Ut & 1073741824) !== 0 && (mt(s),
            s.subtreeFlags & 6 && (s.flags |= 8192)) : mt(s),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(n(156, s.tag))
    }
    function Ob(r, s) {
        switch (fc(s),
        s.tag) {
        case 1:
            return Rt(s.type) && _a(),
            r = s.flags,
            r & 65536 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 3:
            return $s(),
            Fe(Pt),
            Fe(ht),
            kc(),
            r = s.flags,
            (r & 65536) !== 0 && (r & 128) === 0 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 5:
            return Ec(s),
            null;
        case 13:
            if (Fe(Ue),
            r = s.memoizedState,
            r !== null && r.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(n(340));
                Vs()
            }
            return r = s.flags,
            r & 65536 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 19:
            return Fe(Ue),
            null;
        case 4:
            return $s(),
            null;
        case 10:
            return vc(s.type._context),
            null;
        case 22:
        case 23:
            return rd(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Ga = !1
      , gt = !1
      , Lb = typeof WeakSet == "function" ? WeakSet : Set
      , re = null;
    function Ws(r, s) {
        var a = r.ref;
        if (a !== null)
            if (typeof a == "function")
                try {
                    a(null)
                } catch (c) {
                    We(r, s, c)
                }
            else
                a.current = null
    }
    function Wc(r, s, a) {
        try {
            a()
        } catch (c) {
            We(r, s, c)
        }
    }
    var pg = !1;
    function Mb(r, s) {
        if (rc = ma,
        r = qp(),
        Gu(r)) {
            if ("selectionStart"in r)
                var a = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                };
            else
                e: {
                    a = (a = r.ownerDocument) && a.defaultView || window;
                    var c = a.getSelection && a.getSelection();
                    if (c && c.rangeCount !== 0) {
                        a = c.anchorNode;
                        var h = c.anchorOffset
                          , m = c.focusNode;
                        c = c.focusOffset;
                        try {
                            a.nodeType,
                            m.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var w = 0
                          , k = -1
                          , A = -1
                          , V = 0
                          , K = 0
                          , Q = r
                          , q = null;
                        t: for (; ; ) {
                            for (var te; Q !== a || h !== 0 && Q.nodeType !== 3 || (k = w + h),
                            Q !== m || c !== 0 && Q.nodeType !== 3 || (A = w + c),
                            Q.nodeType === 3 && (w += Q.nodeValue.length),
                            (te = Q.firstChild) !== null; )
                                q = Q,
                                Q = te;
                            for (; ; ) {
                                if (Q === r)
                                    break t;
                                if (q === a && ++V === h && (k = w),
                                q === m && ++K === c && (A = w),
                                (te = Q.nextSibling) !== null)
                                    break;
                                Q = q,
                                q = Q.parentNode
                            }
                            Q = te
                        }
                        a = k === -1 || A === -1 ? null : {
                            start: k,
                            end: A
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (sc = {
            focusedElem: r,
            selectionRange: a
        },
        ma = !1,
        re = s; re !== null; )
            if (s = re,
            r = s.child,
            (s.subtreeFlags & 1028) !== 0 && r !== null)
                r.return = s,
                re = r;
            else
                for (; re !== null; ) {
                    s = re;
                    try {
                        var se = s.alternate;
                        if ((s.flags & 1024) !== 0)
                            switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (se !== null) {
                                    var ue = se.memoizedProps
                                      , Ge = se.memoizedState
                                      , j = s.stateNode
                                      , N = j.getSnapshotBeforeUpdate(s.elementType === s.type ? ue : on(s.type, ue), Ge);
                                    j.__reactInternalSnapshotBeforeUpdate = N
                                }
                                break;
                            case 3:
                                var F = s.stateNode.containerInfo;
                                F.nodeType === 1 ? F.textContent = "" : F.nodeType === 9 && F.documentElement && F.removeChild(F.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(n(163))
                            }
                    } catch (X) {
                        We(s, s.return, X)
                    }
                    if (r = s.sibling,
                    r !== null) {
                        r.return = s.return,
                        re = r;
                        break
                    }
                    re = s.return
                }
        return se = pg,
        pg = !1,
        se
    }
    function lo(r, s, a) {
        var c = s.updateQueue;
        if (c = c !== null ? c.lastEffect : null,
        c !== null) {
            var h = c = c.next;
            do {
                if ((h.tag & r) === r) {
                    var m = h.destroy;
                    h.destroy = void 0,
                    m !== void 0 && Wc(s, a, m)
                }
                h = h.next
            } while (h !== c)
        }
    }
    function Xa(r, s) {
        if (s = s.updateQueue,
        s = s !== null ? s.lastEffect : null,
        s !== null) {
            var a = s = s.next;
            do {
                if ((a.tag & r) === r) {
                    var c = a.create;
                    a.destroy = c()
                }
                a = a.next
            } while (a !== s)
        }
    }
    function qc(r) {
        var s = r.ref;
        if (s !== null) {
            var a = r.stateNode;
            switch (r.tag) {
            case 5:
                r = a;
                break;
            default:
                r = a
            }
            typeof s == "function" ? s(r) : s.current = r
        }
    }
    function mg(r) {
        var s = r.alternate;
        s !== null && (r.alternate = null,
        mg(s)),
        r.child = null,
        r.deletions = null,
        r.sibling = null,
        r.tag === 5 && (s = r.stateNode,
        s !== null && (delete s[gn],
        delete s[Yi],
        delete s[lc],
        delete s[gb],
        delete s[yb])),
        r.stateNode = null,
        r.return = null,
        r.dependencies = null,
        r.memoizedProps = null,
        r.memoizedState = null,
        r.pendingProps = null,
        r.stateNode = null,
        r.updateQueue = null
    }
    function gg(r) {
        return r.tag === 5 || r.tag === 3 || r.tag === 4
    }
    function yg(r) {
        e: for (; ; ) {
            for (; r.sibling === null; ) {
                if (r.return === null || gg(r.return))
                    return null;
                r = r.return
            }
            for (r.sibling.return = r.return,
            r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
                if (r.flags & 2 || r.child === null || r.tag === 4)
                    continue e;
                r.child.return = r,
                r = r.child
            }
            if (!(r.flags & 2))
                return r.stateNode
        }
    }
    function Kc(r, s, a) {
        var c = r.tag;
        if (c === 5 || c === 6)
            r = r.stateNode,
            s ? a.nodeType === 8 ? a.parentNode.insertBefore(r, s) : a.insertBefore(r, s) : (a.nodeType === 8 ? (s = a.parentNode,
            s.insertBefore(r, a)) : (s = a,
            s.appendChild(r)),
            a = a._reactRootContainer,
            a != null || s.onclick !== null || (s.onclick = Pa));
        else if (c !== 4 && (r = r.child,
        r !== null))
            for (Kc(r, s, a),
            r = r.sibling; r !== null; )
                Kc(r, s, a),
                r = r.sibling
    }
    function Qc(r, s, a) {
        var c = r.tag;
        if (c === 5 || c === 6)
            r = r.stateNode,
            s ? a.insertBefore(r, s) : a.appendChild(r);
        else if (c !== 4 && (r = r.child,
        r !== null))
            for (Qc(r, s, a),
            r = r.sibling; r !== null; )
                Qc(r, s, a),
                r = r.sibling
    }
    var ut = null
      , an = !1;
    function mr(r, s, a) {
        for (a = a.child; a !== null; )
            vg(r, s, a),
            a = a.sibling
    }
    function vg(r, s, a) {
        if (mn && typeof mn.onCommitFiberUnmount == "function")
            try {
                mn.onCommitFiberUnmount(ua, a)
            } catch {}
        switch (a.tag) {
        case 5:
            gt || Ws(a, s);
        case 6:
            var c = ut
              , h = an;
            ut = null,
            mr(r, s, a),
            ut = c,
            an = h,
            ut !== null && (an ? (r = ut,
            a = a.stateNode,
            r.nodeType === 8 ? r.parentNode.removeChild(a) : r.removeChild(a)) : ut.removeChild(a.stateNode));
            break;
        case 18:
            ut !== null && (an ? (r = ut,
            a = a.stateNode,
            r.nodeType === 8 ? ac(r.parentNode, a) : r.nodeType === 1 && ac(r, a),
            Bi(r)) : ac(ut, a.stateNode));
            break;
        case 4:
            c = ut,
            h = an,
            ut = a.stateNode.containerInfo,
            an = !0,
            mr(r, s, a),
            ut = c,
            an = h;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!gt && (c = a.updateQueue,
            c !== null && (c = c.lastEffect,
            c !== null))) {
                h = c = c.next;
                do {
                    var m = h
                      , w = m.destroy;
                    m = m.tag,
                    w !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && Wc(a, s, w),
                    h = h.next
                } while (h !== c)
            }
            mr(r, s, a);
            break;
        case 1:
            if (!gt && (Ws(a, s),
            c = a.stateNode,
            typeof c.componentWillUnmount == "function"))
                try {
                    c.props = a.memoizedProps,
                    c.state = a.memoizedState,
                    c.componentWillUnmount()
                } catch (k) {
                    We(a, s, k)
                }
            mr(r, s, a);
            break;
        case 21:
            mr(r, s, a);
            break;
        case 22:
            a.mode & 1 ? (gt = (c = gt) || a.memoizedState !== null,
            mr(r, s, a),
            gt = c) : mr(r, s, a);
            break;
        default:
            mr(r, s, a)
        }
    }
    function wg(r) {
        var s = r.updateQueue;
        if (s !== null) {
            r.updateQueue = null;
            var a = r.stateNode;
            a === null && (a = r.stateNode = new Lb),
            s.forEach(function(c) {
                var h = $b.bind(null, r, c);
                a.has(c) || (a.add(c),
                c.then(h, h))
            })
        }
    }
    function ln(r, s) {
        var a = s.deletions;
        if (a !== null)
            for (var c = 0; c < a.length; c++) {
                var h = a[c];
                try {
                    var m = r
                      , w = s
                      , k = w;
                    e: for (; k !== null; ) {
                        switch (k.tag) {
                        case 5:
                            ut = k.stateNode,
                            an = !1;
                            break e;
                        case 3:
                            ut = k.stateNode.containerInfo,
                            an = !0;
                            break e;
                        case 4:
                            ut = k.stateNode.containerInfo,
                            an = !0;
                            break e
                        }
                        k = k.return
                    }
                    if (ut === null)
                        throw Error(n(160));
                    vg(m, w, h),
                    ut = null,
                    an = !1;
                    var A = h.alternate;
                    A !== null && (A.return = null),
                    h.return = null
                } catch (V) {
                    We(h, s, V)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null; )
                xg(s, r),
                s = s.sibling
    }
    function xg(r, s) {
        var a = r.alternate
          , c = r.flags;
        switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ln(s, r),
            wn(r),
            c & 4) {
                try {
                    lo(3, r, r.return),
                    Xa(3, r)
                } catch (ue) {
                    We(r, r.return, ue)
                }
                try {
                    lo(5, r, r.return)
                } catch (ue) {
                    We(r, r.return, ue)
                }
            }
            break;
        case 1:
            ln(s, r),
            wn(r),
            c & 512 && a !== null && Ws(a, a.return);
            break;
        case 5:
            if (ln(s, r),
            wn(r),
            c & 512 && a !== null && Ws(a, a.return),
            r.flags & 32) {
                var h = r.stateNode;
                try {
                    _i(h, "")
                } catch (ue) {
                    We(r, r.return, ue)
                }
            }
            if (c & 4 && (h = r.stateNode,
            h != null)) {
                var m = r.memoizedProps
                  , w = a !== null ? a.memoizedProps : m
                  , k = r.type
                  , A = r.updateQueue;
                if (r.updateQueue = null,
                A !== null)
                    try {
                        k === "input" && m.type === "radio" && m.name != null && Qh(h, m),
                        ku(k, w);
                        var V = ku(k, m);
                        for (w = 0; w < A.length; w += 2) {
                            var K = A[w]
                              , Q = A[w + 1];
                            K === "style" ? np(h, Q) : K === "dangerouslySetInnerHTML" ? ep(h, Q) : K === "children" ? _i(h, Q) : O(h, K, Q, V)
                        }
                        switch (k) {
                        case "input":
                            xu(h, m);
                            break;
                        case "textarea":
                            Yh(h, m);
                            break;
                        case "select":
                            var q = h._wrapperState.wasMultiple;
                            h._wrapperState.wasMultiple = !!m.multiple;
                            var te = m.value;
                            te != null ? Cs(h, !!m.multiple, te, !1) : q !== !!m.multiple && (m.defaultValue != null ? Cs(h, !!m.multiple, m.defaultValue, !0) : Cs(h, !!m.multiple, m.multiple ? [] : "", !1))
                        }
                        h[Yi] = m
                    } catch (ue) {
                        We(r, r.return, ue)
                    }
            }
            break;
        case 6:
            if (ln(s, r),
            wn(r),
            c & 4) {
                if (r.stateNode === null)
                    throw Error(n(162));
                h = r.stateNode,
                m = r.memoizedProps;
                try {
                    h.nodeValue = m
                } catch (ue) {
                    We(r, r.return, ue)
                }
            }
            break;
        case 3:
            if (ln(s, r),
            wn(r),
            c & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Bi(s.containerInfo)
                } catch (ue) {
                    We(r, r.return, ue)
                }
            break;
        case 4:
            ln(s, r),
            wn(r);
            break;
        case 13:
            ln(s, r),
            wn(r),
            h = r.child,
            h.flags & 8192 && (m = h.memoizedState !== null,
            h.stateNode.isHidden = m,
            !m || h.alternate !== null && h.alternate.memoizedState !== null || (Yc = Qe())),
            c & 4 && wg(r);
            break;
        case 22:
            if (K = a !== null && a.memoizedState !== null,
            r.mode & 1 ? (gt = (V = gt) || K,
            ln(s, r),
            gt = V) : ln(s, r),
            wn(r),
            c & 8192) {
                if (V = r.memoizedState !== null,
                (r.stateNode.isHidden = V) && !K && (r.mode & 1) !== 0)
                    for (re = r,
                    K = r.child; K !== null; ) {
                        for (Q = re = K; re !== null; ) {
                            switch (q = re,
                            te = q.child,
                            q.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                lo(4, q, q.return);
                                break;
                            case 1:
                                Ws(q, q.return);
                                var se = q.stateNode;
                                if (typeof se.componentWillUnmount == "function") {
                                    c = q,
                                    a = q.return;
                                    try {
                                        s = c,
                                        se.props = s.memoizedProps,
                                        se.state = s.memoizedState,
                                        se.componentWillUnmount()
                                    } catch (ue) {
                                        We(c, a, ue)
                                    }
                                }
                                break;
                            case 5:
                                Ws(q, q.return);
                                break;
                            case 22:
                                if (q.memoizedState !== null) {
                                    Eg(Q);
                                    continue
                                }
                            }
                            te !== null ? (te.return = q,
                            re = te) : Eg(Q)
                        }
                        K = K.sibling
                    }
                e: for (K = null,
                Q = r; ; ) {
                    if (Q.tag === 5) {
                        if (K === null) {
                            K = Q;
                            try {
                                h = Q.stateNode,
                                V ? (m = h.style,
                                typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (k = Q.stateNode,
                                A = Q.memoizedProps.style,
                                w = A != null && A.hasOwnProperty("display") ? A.display : null,
                                k.style.display = tp("display", w))
                            } catch (ue) {
                                We(r, r.return, ue)
                            }
                        }
                    } else if (Q.tag === 6) {
                        if (K === null)
                            try {
                                Q.stateNode.nodeValue = V ? "" : Q.memoizedProps
                            } catch (ue) {
                                We(r, r.return, ue)
                            }
                    } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === r) && Q.child !== null) {
                        Q.child.return = Q,
                        Q = Q.child;
                        continue
                    }
                    if (Q === r)
                        break e;
                    for (; Q.sibling === null; ) {
                        if (Q.return === null || Q.return === r)
                            break e;
                        K === Q && (K = null),
                        Q = Q.return
                    }
                    K === Q && (K = null),
                    Q.sibling.return = Q.return,
                    Q = Q.sibling
                }
            }
            break;
        case 19:
            ln(s, r),
            wn(r),
            c & 4 && wg(r);
            break;
        case 21:
            break;
        default:
            ln(s, r),
            wn(r)
        }
    }
    function wn(r) {
        var s = r.flags;
        if (s & 2) {
            try {
                e: {
                    for (var a = r.return; a !== null; ) {
                        if (gg(a)) {
                            var c = a;
                            break e
                        }
                        a = a.return
                    }
                    throw Error(n(160))
                }
                switch (c.tag) {
                case 5:
                    var h = c.stateNode;
                    c.flags & 32 && (_i(h, ""),
                    c.flags &= -33);
                    var m = yg(r);
                    Qc(r, m, h);
                    break;
                case 3:
                case 4:
                    var w = c.stateNode.containerInfo
                      , k = yg(r);
                    Kc(r, k, w);
                    break;
                default:
                    throw Error(n(161))
                }
            } catch (A) {
                We(r, r.return, A)
            }
            r.flags &= -3
        }
        s & 4096 && (r.flags &= -4097)
    }
    function Db(r, s, a) {
        re = r,
        Sg(r)
    }
    function Sg(r, s, a) {
        for (var c = (r.mode & 1) !== 0; re !== null; ) {
            var h = re
              , m = h.child;
            if (h.tag === 22 && c) {
                var w = h.memoizedState !== null || Ga;
                if (!w) {
                    var k = h.alternate
                      , A = k !== null && k.memoizedState !== null || gt;
                    k = Ga;
                    var V = gt;
                    if (Ga = w,
                    (gt = A) && !V)
                        for (re = h; re !== null; )
                            w = re,
                            A = w.child,
                            w.tag === 22 && w.memoizedState !== null ? Cg(h) : A !== null ? (A.return = w,
                            re = A) : Cg(h);
                    for (; m !== null; )
                        re = m,
                        Sg(m),
                        m = m.sibling;
                    re = h,
                    Ga = k,
                    gt = V
                }
                bg(r)
            } else
                (h.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = h,
                re = m) : bg(r)
        }
    }
    function bg(r) {
        for (; re !== null; ) {
            var s = re;
            if ((s.flags & 8772) !== 0) {
                var a = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0)
                        switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            gt || Xa(5, s);
                            break;
                        case 1:
                            var c = s.stateNode;
                            if (s.flags & 4 && !gt)
                                if (a === null)
                                    c.componentDidMount();
                                else {
                                    var h = s.elementType === s.type ? a.memoizedProps : on(s.type, a.memoizedProps);
                                    c.componentDidUpdate(h, a.memoizedState, c.__reactInternalSnapshotBeforeUpdate)
                                }
                            var m = s.updateQueue;
                            m !== null && Em(s, m, c);
                            break;
                        case 3:
                            var w = s.updateQueue;
                            if (w !== null) {
                                if (a = null,
                                s.child !== null)
                                    switch (s.child.tag) {
                                    case 5:
                                        a = s.child.stateNode;
                                        break;
                                    case 1:
                                        a = s.child.stateNode
                                    }
                                Em(s, w, a)
                            }
                            break;
                        case 5:
                            var k = s.stateNode;
                            if (a === null && s.flags & 4) {
                                a = k;
                                var A = s.memoizedProps;
                                switch (s.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    A.autoFocus && a.focus();
                                    break;
                                case "img":
                                    A.src && (a.src = A.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var V = s.alternate;
                                if (V !== null) {
                                    var K = V.memoizedState;
                                    if (K !== null) {
                                        var Q = K.dehydrated;
                                        Q !== null && Bi(Q)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(n(163))
                        }
                    gt || s.flags & 512 && qc(s)
                } catch (q) {
                    We(s, s.return, q)
                }
            }
            if (s === r) {
                re = null;
                break
            }
            if (a = s.sibling,
            a !== null) {
                a.return = s.return,
                re = a;
                break
            }
            re = s.return
        }
    }
    function Eg(r) {
        for (; re !== null; ) {
            var s = re;
            if (s === r) {
                re = null;
                break
            }
            var a = s.sibling;
            if (a !== null) {
                a.return = s.return,
                re = a;
                break
            }
            re = s.return
        }
    }
    function Cg(r) {
        for (; re !== null; ) {
            var s = re;
            try {
                switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    var a = s.return;
                    try {
                        Xa(4, s)
                    } catch (A) {
                        We(s, a, A)
                    }
                    break;
                case 1:
                    var c = s.stateNode;
                    if (typeof c.componentDidMount == "function") {
                        var h = s.return;
                        try {
                            c.componentDidMount()
                        } catch (A) {
                            We(s, h, A)
                        }
                    }
                    var m = s.return;
                    try {
                        qc(s)
                    } catch (A) {
                        We(s, m, A)
                    }
                    break;
                case 5:
                    var w = s.return;
                    try {
                        qc(s)
                    } catch (A) {
                        We(s, w, A)
                    }
                }
            } catch (A) {
                We(s, s.return, A)
            }
            if (s === r) {
                re = null;
                break
            }
            var k = s.sibling;
            if (k !== null) {
                k.return = s.return,
                re = k;
                break
            }
            re = s.return
        }
    }
    var jb = Math.ceil
      , Ya = I.ReactCurrentDispatcher
      , Gc = I.ReactCurrentOwner
      , Qt = I.ReactCurrentBatchConfig
      , Ne = 0
      , ot = null
      , Ze = null
      , ct = 0
      , Ut = 0
      , qs = cr(0)
      , nt = 0
      , uo = null
      , Qr = 0
      , Ja = 0
      , Xc = 0
      , co = null
      , At = null
      , Yc = 0
      , Ks = 1 / 0
      , Vn = null
      , Za = !1
      , Jc = null
      , gr = null
      , el = !1
      , yr = null
      , tl = 0
      , fo = 0
      , Zc = null
      , nl = -1
      , rl = 0;
    function St() {
        return (Ne & 6) !== 0 ? Qe() : nl !== -1 ? nl : nl = Qe()
    }
    function vr(r) {
        return (r.mode & 1) === 0 ? 1 : (Ne & 2) !== 0 && ct !== 0 ? ct & -ct : wb.transition !== null ? (rl === 0 && (rl = yp()),
        rl) : (r = De,
        r !== 0 || (r = window.event,
        r = r === void 0 ? 16 : Tp(r.type)),
        r)
    }
    function un(r, s, a, c) {
        if (50 < fo)
            throw fo = 0,
            Zc = null,
            Error(n(185));
        Di(r, a, c),
        ((Ne & 2) === 0 || r !== ot) && (r === ot && ((Ne & 2) === 0 && (Ja |= a),
        nt === 4 && wr(r, ct)),
        Nt(r, c),
        a === 1 && Ne === 0 && (s.mode & 1) === 0 && (Ks = Qe() + 500,
        Na && fr()))
    }
    function Nt(r, s) {
        var a = r.callbackNode;
        w1(r, s);
        var c = fa(r, r === ot ? ct : 0);
        if (c === 0)
            a !== null && pp(a),
            r.callbackNode = null,
            r.callbackPriority = 0;
        else if (s = c & -c,
        r.callbackPriority !== s) {
            if (a != null && pp(a),
            s === 1)
                r.tag === 0 ? vb(Tg.bind(null, r)) : dm(Tg.bind(null, r)),
                pb(function() {
                    (Ne & 6) === 0 && fr()
                }),
                a = null;
            else {
                switch (vp(c)) {
                case 1:
                    a = Ou;
                    break;
                case 4:
                    a = mp;
                    break;
                case 16:
                    a = la;
                    break;
                case 536870912:
                    a = gp;
                    break;
                default:
                    a = la
                }
                a = Mg(a, kg.bind(null, r))
            }
            r.callbackPriority = s,
            r.callbackNode = a
        }
    }
    function kg(r, s) {
        if (nl = -1,
        rl = 0,
        (Ne & 6) !== 0)
            throw Error(n(327));
        var a = r.callbackNode;
        if (Qs() && r.callbackNode !== a)
            return null;
        var c = fa(r, r === ot ? ct : 0);
        if (c === 0)
            return null;
        if ((c & 30) !== 0 || (c & r.expiredLanes) !== 0 || s)
            s = sl(r, c);
        else {
            s = c;
            var h = Ne;
            Ne |= 2;
            var m = Rg();
            (ot !== r || ct !== s) && (Vn = null,
            Ks = Qe() + 500,
            Xr(r, s));
            do
                try {
                    Vb();
                    break
                } catch (k) {
                    Pg(r, k)
                }
            while (!0);
            yc(),
            Ya.current = m,
            Ne = h,
            Ze !== null ? s = 0 : (ot = null,
            ct = 0,
            s = nt)
        }
        if (s !== 0) {
            if (s === 2 && (h = Lu(r),
            h !== 0 && (c = h,
            s = ed(r, h))),
            s === 1)
                throw a = uo,
                Xr(r, 0),
                wr(r, c),
                Nt(r, Qe()),
                a;
            if (s === 6)
                wr(r, c);
            else {
                if (h = r.current.alternate,
                (c & 30) === 0 && !Ib(h) && (s = sl(r, c),
                s === 2 && (m = Lu(r),
                m !== 0 && (c = m,
                s = ed(r, m))),
                s === 1))
                    throw a = uo,
                    Xr(r, 0),
                    wr(r, c),
                    Nt(r, Qe()),
                    a;
                switch (r.finishedWork = h,
                r.finishedLanes = c,
                s) {
                case 0:
                case 1:
                    throw Error(n(345));
                case 2:
                    Yr(r, At, Vn);
                    break;
                case 3:
                    if (wr(r, c),
                    (c & 130023424) === c && (s = Yc + 500 - Qe(),
                    10 < s)) {
                        if (fa(r, 0) !== 0)
                            break;
                        if (h = r.suspendedLanes,
                        (h & c) !== c) {
                            St(),
                            r.pingedLanes |= r.suspendedLanes & h;
                            break
                        }
                        r.timeoutHandle = oc(Yr.bind(null, r, At, Vn), s);
                        break
                    }
                    Yr(r, At, Vn);
                    break;
                case 4:
                    if (wr(r, c),
                    (c & 4194240) === c)
                        break;
                    for (s = r.eventTimes,
                    h = -1; 0 < c; ) {
                        var w = 31 - nn(c);
                        m = 1 << w,
                        w = s[w],
                        w > h && (h = w),
                        c &= ~m
                    }
                    if (c = h,
                    c = Qe() - c,
                    c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * jb(c / 1960)) - c,
                    10 < c) {
                        r.timeoutHandle = oc(Yr.bind(null, r, At, Vn), c);
                        break
                    }
                    Yr(r, At, Vn);
                    break;
                case 5:
                    Yr(r, At, Vn);
                    break;
                default:
                    throw Error(n(329))
                }
            }
        }
        return Nt(r, Qe()),
        r.callbackNode === a ? kg.bind(null, r) : null
    }
    function ed(r, s) {
        var a = co;
        return r.current.memoizedState.isDehydrated && (Xr(r, s).flags |= 256),
        r = sl(r, s),
        r !== 2 && (s = At,
        At = a,
        s !== null && td(s)),
        r
    }
    function td(r) {
        At === null ? At = r : At.push.apply(At, r)
    }
    function Ib(r) {
        for (var s = r; ; ) {
            if (s.flags & 16384) {
                var a = s.updateQueue;
                if (a !== null && (a = a.stores,
                a !== null))
                    for (var c = 0; c < a.length; c++) {
                        var h = a[c]
                          , m = h.getSnapshot;
                        h = h.value;
                        try {
                            if (!rn(m(), h))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (a = s.child,
            s.subtreeFlags & 16384 && a !== null)
                a.return = s,
                s = a;
            else {
                if (s === r)
                    break;
                for (; s.sibling === null; ) {
                    if (s.return === null || s.return === r)
                        return !0;
                    s = s.return
                }
                s.sibling.return = s.return,
                s = s.sibling
            }
        }
        return !0
    }
    function wr(r, s) {
        for (s &= ~Xc,
        s &= ~Ja,
        r.suspendedLanes |= s,
        r.pingedLanes &= ~s,
        r = r.expirationTimes; 0 < s; ) {
            var a = 31 - nn(s)
              , c = 1 << a;
            r[a] = -1,
            s &= ~c
        }
    }
    function Tg(r) {
        if ((Ne & 6) !== 0)
            throw Error(n(327));
        Qs();
        var s = fa(r, 0);
        if ((s & 1) === 0)
            return Nt(r, Qe()),
            null;
        var a = sl(r, s);
        if (r.tag !== 0 && a === 2) {
            var c = Lu(r);
            c !== 0 && (s = c,
            a = ed(r, c))
        }
        if (a === 1)
            throw a = uo,
            Xr(r, 0),
            wr(r, s),
            Nt(r, Qe()),
            a;
        if (a === 6)
            throw Error(n(345));
        return r.finishedWork = r.current.alternate,
        r.finishedLanes = s,
        Yr(r, At, Vn),
        Nt(r, Qe()),
        null
    }
    function nd(r, s) {
        var a = Ne;
        Ne |= 1;
        try {
            return r(s)
        } finally {
            Ne = a,
            Ne === 0 && (Ks = Qe() + 500,
            Na && fr())
        }
    }
    function Gr(r) {
        yr !== null && yr.tag === 0 && (Ne & 6) === 0 && Qs();
        var s = Ne;
        Ne |= 1;
        var a = Qt.transition
          , c = De;
        try {
            if (Qt.transition = null,
            De = 1,
            r)
                return r()
        } finally {
            De = c,
            Qt.transition = a,
            Ne = s,
            (Ne & 6) === 0 && fr()
        }
    }
    function rd() {
        Ut = qs.current,
        Fe(qs)
    }
    function Xr(r, s) {
        r.finishedWork = null,
        r.finishedLanes = 0;
        var a = r.timeoutHandle;
        if (a !== -1 && (r.timeoutHandle = -1,
        hb(a)),
        Ze !== null)
            for (a = Ze.return; a !== null; ) {
                var c = a;
                switch (fc(c),
                c.tag) {
                case 1:
                    c = c.type.childContextTypes,
                    c != null && _a();
                    break;
                case 3:
                    $s(),
                    Fe(Pt),
                    Fe(ht),
                    kc();
                    break;
                case 5:
                    Ec(c);
                    break;
                case 4:
                    $s();
                    break;
                case 13:
                    Fe(Ue);
                    break;
                case 19:
                    Fe(Ue);
                    break;
                case 10:
                    vc(c.type._context);
                    break;
                case 22:
                case 23:
                    rd()
                }
                a = a.return
            }
        if (ot = r,
        Ze = r = xr(r.current, null),
        ct = Ut = s,
        nt = 0,
        uo = null,
        Xc = Ja = Qr = 0,
        At = co = null,
        Wr !== null) {
            for (s = 0; s < Wr.length; s++)
                if (a = Wr[s],
                c = a.interleaved,
                c !== null) {
                    a.interleaved = null;
                    var h = c.next
                      , m = a.pending;
                    if (m !== null) {
                        var w = m.next;
                        m.next = h,
                        c.next = w
                    }
                    a.pending = c
                }
            Wr = null
        }
        return r
    }
    function Pg(r, s) {
        do {
            var a = Ze;
            try {
                if (yc(),
                Ua.current = Wa,
                za) {
                    for (var c = ze.memoizedState; c !== null; ) {
                        var h = c.queue;
                        h !== null && (h.pending = null),
                        c = c.next
                    }
                    za = !1
                }
                if (Kr = 0,
                it = tt = ze = null,
                ro = !1,
                so = 0,
                Gc.current = null,
                a === null || a.return === null) {
                    nt = 1,
                    uo = s,
                    Ze = null;
                    break
                }
                e: {
                    var m = r
                      , w = a.return
                      , k = a
                      , A = s;
                    if (s = ct,
                    k.flags |= 32768,
                    A !== null && typeof A == "object" && typeof A.then == "function") {
                        var V = A
                          , K = k
                          , Q = K.tag;
                        if ((K.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
                            var q = K.alternate;
                            q ? (K.updateQueue = q.updateQueue,
                            K.memoizedState = q.memoizedState,
                            K.lanes = q.lanes) : (K.updateQueue = null,
                            K.memoizedState = null)
                        }
                        var te = Jm(w);
                        if (te !== null) {
                            te.flags &= -257,
                            Zm(te, w, k, m, s),
                            te.mode & 1 && Ym(m, V, s),
                            s = te,
                            A = V;
                            var se = s.updateQueue;
                            if (se === null) {
                                var ue = new Set;
                                ue.add(A),
                                s.updateQueue = ue
                            } else
                                se.add(A);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                Ym(m, V, s),
                                sd();
                                break e
                            }
                            A = Error(n(426))
                        }
                    } else if (Be && k.mode & 1) {
                        var Ge = Jm(w);
                        if (Ge !== null) {
                            (Ge.flags & 65536) === 0 && (Ge.flags |= 256),
                            Zm(Ge, w, k, m, s),
                            mc(Hs(A, k));
                            break e
                        }
                    }
                    m = A = Hs(A, k),
                    nt !== 4 && (nt = 2),
                    co === null ? co = [m] : co.push(m),
                    m = w;
                    do {
                        switch (m.tag) {
                        case 3:
                            m.flags |= 65536,
                            s &= -s,
                            m.lanes |= s;
                            var j = Gm(m, A, s);
                            bm(m, j);
                            break e;
                        case 1:
                            k = A;
                            var N = m.type
                              , F = m.stateNode;
                            if ((m.flags & 128) === 0 && (typeof N.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && (gr === null || !gr.has(F)))) {
                                m.flags |= 65536,
                                s &= -s,
                                m.lanes |= s;
                                var X = Xm(m, k, s);
                                bm(m, X);
                                break e
                            }
                        }
                        m = m.return
                    } while (m !== null)
                }
                Ag(a)
            } catch (ce) {
                s = ce,
                Ze === a && a !== null && (Ze = a = a.return);
                continue
            }
            break
        } while (!0)
    }
    function Rg() {
        var r = Ya.current;
        return Ya.current = Wa,
        r === null ? Wa : r
    }
    function sd() {
        (nt === 0 || nt === 3 || nt === 2) && (nt = 4),
        ot === null || (Qr & 268435455) === 0 && (Ja & 268435455) === 0 || wr(ot, ct)
    }
    function sl(r, s) {
        var a = Ne;
        Ne |= 2;
        var c = Rg();
        (ot !== r || ct !== s) && (Vn = null,
        Xr(r, s));
        do
            try {
                Fb();
                break
            } catch (h) {
                Pg(r, h)
            }
        while (!0);
        if (yc(),
        Ne = a,
        Ya.current = c,
        Ze !== null)
            throw Error(n(261));
        return ot = null,
        ct = 0,
        nt
    }
    function Fb() {
        for (; Ze !== null; )
            _g(Ze)
    }
    function Vb() {
        for (; Ze !== null && !c1(); )
            _g(Ze)
    }
    function _g(r) {
        var s = Lg(r.alternate, r, Ut);
        r.memoizedProps = r.pendingProps,
        s === null ? Ag(r) : Ze = s,
        Gc.current = null
    }
    function Ag(r) {
        var s = r;
        do {
            var a = s.alternate;
            if (r = s.return,
            (s.flags & 32768) === 0) {
                if (a = Nb(a, s, Ut),
                a !== null) {
                    Ze = a;
                    return
                }
            } else {
                if (a = Ob(a, s),
                a !== null) {
                    a.flags &= 32767,
                    Ze = a;
                    return
                }
                if (r !== null)
                    r.flags |= 32768,
                    r.subtreeFlags = 0,
                    r.deletions = null;
                else {
                    nt = 6,
                    Ze = null;
                    return
                }
            }
            if (s = s.sibling,
            s !== null) {
                Ze = s;
                return
            }
            Ze = s = r
        } while (s !== null);
        nt === 0 && (nt = 5)
    }
    function Yr(r, s, a) {
        var c = De
          , h = Qt.transition;
        try {
            Qt.transition = null,
            De = 1,
            Bb(r, s, a, c)
        } finally {
            Qt.transition = h,
            De = c
        }
        return null
    }
    function Bb(r, s, a, c) {
        do
            Qs();
        while (yr !== null);
        if ((Ne & 6) !== 0)
            throw Error(n(327));
        a = r.finishedWork;
        var h = r.finishedLanes;
        if (a === null)
            return null;
        if (r.finishedWork = null,
        r.finishedLanes = 0,
        a === r.current)
            throw Error(n(177));
        r.callbackNode = null,
        r.callbackPriority = 0;
        var m = a.lanes | a.childLanes;
        if (x1(r, m),
        r === ot && (Ze = ot = null,
        ct = 0),
        (a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0 || el || (el = !0,
        Mg(la, function() {
            return Qs(),
            null
        })),
        m = (a.flags & 15990) !== 0,
        (a.subtreeFlags & 15990) !== 0 || m) {
            m = Qt.transition,
            Qt.transition = null;
            var w = De;
            De = 1;
            var k = Ne;
            Ne |= 4,
            Gc.current = null,
            Mb(r, a),
            xg(a, r),
            ob(sc),
            ma = !!rc,
            sc = rc = null,
            r.current = a,
            Db(a),
            d1(),
            Ne = k,
            De = w,
            Qt.transition = m
        } else
            r.current = a;
        if (el && (el = !1,
        yr = r,
        tl = h),
        m = r.pendingLanes,
        m === 0 && (gr = null),
        p1(a.stateNode),
        Nt(r, Qe()),
        s !== null)
            for (c = r.onRecoverableError,
            a = 0; a < s.length; a++)
                h = s[a],
                c(h.value, {
                    componentStack: h.stack,
                    digest: h.digest
                });
        if (Za)
            throw Za = !1,
            r = Jc,
            Jc = null,
            r;
        return (tl & 1) !== 0 && r.tag !== 0 && Qs(),
        m = r.pendingLanes,
        (m & 1) !== 0 ? r === Zc ? fo++ : (fo = 0,
        Zc = r) : fo = 0,
        fr(),
        null
    }
    function Qs() {
        if (yr !== null) {
            var r = vp(tl)
              , s = Qt.transition
              , a = De;
            try {
                if (Qt.transition = null,
                De = 16 > r ? 16 : r,
                yr === null)
                    var c = !1;
                else {
                    if (r = yr,
                    yr = null,
                    tl = 0,
                    (Ne & 6) !== 0)
                        throw Error(n(331));
                    var h = Ne;
                    for (Ne |= 4,
                    re = r.current; re !== null; ) {
                        var m = re
                          , w = m.child;
                        if ((re.flags & 16) !== 0) {
                            var k = m.deletions;
                            if (k !== null) {
                                for (var A = 0; A < k.length; A++) {
                                    var V = k[A];
                                    for (re = V; re !== null; ) {
                                        var K = re;
                                        switch (K.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            lo(8, K, m)
                                        }
                                        var Q = K.child;
                                        if (Q !== null)
                                            Q.return = K,
                                            re = Q;
                                        else
                                            for (; re !== null; ) {
                                                K = re;
                                                var q = K.sibling
                                                  , te = K.return;
                                                if (mg(K),
                                                K === V) {
                                                    re = null;
                                                    break
                                                }
                                                if (q !== null) {
                                                    q.return = te,
                                                    re = q;
                                                    break
                                                }
                                                re = te
                                            }
                                    }
                                }
                                var se = m.alternate;
                                if (se !== null) {
                                    var ue = se.child;
                                    if (ue !== null) {
                                        se.child = null;
                                        do {
                                            var Ge = ue.sibling;
                                            ue.sibling = null,
                                            ue = Ge
                                        } while (ue !== null)
                                    }
                                }
                                re = m
                            }
                        }
                        if ((m.subtreeFlags & 2064) !== 0 && w !== null)
                            w.return = m,
                            re = w;
                        else
                            e: for (; re !== null; ) {
                                if (m = re,
                                (m.flags & 2048) !== 0)
                                    switch (m.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        lo(9, m, m.return)
                                    }
                                var j = m.sibling;
                                if (j !== null) {
                                    j.return = m.return,
                                    re = j;
                                    break e
                                }
                                re = m.return
                            }
                    }
                    var N = r.current;
                    for (re = N; re !== null; ) {
                        w = re;
                        var F = w.child;
                        if ((w.subtreeFlags & 2064) !== 0 && F !== null)
                            F.return = w,
                            re = F;
                        else
                            e: for (w = N; re !== null; ) {
                                if (k = re,
                                (k.flags & 2048) !== 0)
                                    try {
                                        switch (k.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Xa(9, k)
                                        }
                                    } catch (ce) {
                                        We(k, k.return, ce)
                                    }
                                if (k === w) {
                                    re = null;
                                    break e
                                }
                                var X = k.sibling;
                                if (X !== null) {
                                    X.return = k.return,
                                    re = X;
                                    break e
                                }
                                re = k.return
                            }
                    }
                    if (Ne = h,
                    fr(),
                    mn && typeof mn.onPostCommitFiberRoot == "function")
                        try {
                            mn.onPostCommitFiberRoot(ua, r)
                        } catch {}
                    c = !0
                }
                return c
            } finally {
                De = a,
                Qt.transition = s
            }
        }
        return !1
    }
    function Ng(r, s, a) {
        s = Hs(a, s),
        s = Gm(r, s, 1),
        r = pr(r, s, 1),
        s = St(),
        r !== null && (Di(r, 1, s),
        Nt(r, s))
    }
    function We(r, s, a) {
        if (r.tag === 3)
            Ng(r, r, a);
        else
            for (; s !== null; ) {
                if (s.tag === 3) {
                    Ng(s, r, a);
                    break
                } else if (s.tag === 1) {
                    var c = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (gr === null || !gr.has(c))) {
                        r = Hs(a, r),
                        r = Xm(s, r, 1),
                        s = pr(s, r, 1),
                        r = St(),
                        s !== null && (Di(s, 1, r),
                        Nt(s, r));
                        break
                    }
                }
                s = s.return
            }
    }
    function Ub(r, s, a) {
        var c = r.pingCache;
        c !== null && c.delete(s),
        s = St(),
        r.pingedLanes |= r.suspendedLanes & a,
        ot === r && (ct & a) === a && (nt === 4 || nt === 3 && (ct & 130023424) === ct && 500 > Qe() - Yc ? Xr(r, 0) : Xc |= a),
        Nt(r, s)
    }
    function Og(r, s) {
        s === 0 && ((r.mode & 1) === 0 ? s = 1 : (s = da,
        da <<= 1,
        (da & 130023424) === 0 && (da = 4194304)));
        var a = St();
        r = jn(r, s),
        r !== null && (Di(r, s, a),
        Nt(r, a))
    }
    function zb(r) {
        var s = r.memoizedState
          , a = 0;
        s !== null && (a = s.retryLane),
        Og(r, a)
    }
    function $b(r, s) {
        var a = 0;
        switch (r.tag) {
        case 13:
            var c = r.stateNode
              , h = r.memoizedState;
            h !== null && (a = h.retryLane);
            break;
        case 19:
            c = r.stateNode;
            break;
        default:
            throw Error(n(314))
        }
        c !== null && c.delete(s),
        Og(r, a)
    }
    var Lg;
    Lg = function(r, s, a) {
        if (r !== null)
            if (r.memoizedProps !== s.pendingProps || Pt.current)
                _t = !0;
            else {
                if ((r.lanes & a) === 0 && (s.flags & 128) === 0)
                    return _t = !1,
                    Ab(r, s, a);
                _t = (r.flags & 131072) !== 0
            }
        else
            _t = !1,
            Be && (s.flags & 1048576) !== 0 && fm(s, La, s.index);
        switch (s.lanes = 0,
        s.tag) {
        case 2:
            var c = s.type;
            Qa(r, s),
            r = s.pendingProps;
            var h = js(s, ht.current);
            zs(s, a),
            h = Rc(null, s, c, r, h, a);
            var m = _c();
            return s.flags |= 1,
            typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (s.tag = 1,
            s.memoizedState = null,
            s.updateQueue = null,
            Rt(c) ? (m = !0,
            Aa(s)) : m = !1,
            s.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null,
            Sc(s),
            h.updater = qa,
            s.stateNode = h,
            h._reactInternals = s,
            Dc(s, c, r, a),
            s = Vc(null, s, c, !0, m, a)) : (s.tag = 0,
            Be && m && dc(s),
            xt(null, s, h, a),
            s = s.child),
            s;
        case 16:
            c = s.elementType;
            e: {
                switch (Qa(r, s),
                r = s.pendingProps,
                h = c._init,
                c = h(c._payload),
                s.type = c,
                h = s.tag = Wb(c),
                r = on(c, r),
                h) {
                case 0:
                    s = Fc(null, s, c, r, a);
                    break e;
                case 1:
                    s = ig(null, s, c, r, a);
                    break e;
                case 11:
                    s = eg(null, s, c, r, a);
                    break e;
                case 14:
                    s = tg(null, s, c, on(c.type, r), a);
                    break e
                }
                throw Error(n(306, c, ""))
            }
            return s;
        case 0:
            return c = s.type,
            h = s.pendingProps,
            h = s.elementType === c ? h : on(c, h),
            Fc(r, s, c, h, a);
        case 1:
            return c = s.type,
            h = s.pendingProps,
            h = s.elementType === c ? h : on(c, h),
            ig(r, s, c, h, a);
        case 3:
            e: {
                if (og(s),
                r === null)
                    throw Error(n(387));
                c = s.pendingProps,
                m = s.memoizedState,
                h = m.element,
                Sm(r, s),
                Va(s, c, null, a);
                var w = s.memoizedState;
                if (c = w.element,
                m.isDehydrated)
                    if (m = {
                        element: c,
                        isDehydrated: !1,
                        cache: w.cache,
                        pendingSuspenseBoundaries: w.pendingSuspenseBoundaries,
                        transitions: w.transitions
                    },
                    s.updateQueue.baseState = m,
                    s.memoizedState = m,
                    s.flags & 256) {
                        h = Hs(Error(n(423)), s),
                        s = ag(r, s, c, a, h);
                        break e
                    } else if (c !== h) {
                        h = Hs(Error(n(424)), s),
                        s = ag(r, s, c, a, h);
                        break e
                    } else
                        for (Bt = ur(s.stateNode.containerInfo.firstChild),
                        Vt = s,
                        Be = !0,
                        sn = null,
                        a = wm(s, null, c, a),
                        s.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling;
                else {
                    if (Vs(),
                    c === h) {
                        s = Fn(r, s, a);
                        break e
                    }
                    xt(r, s, c, a)
                }
                s = s.child
            }
            return s;
        case 5:
            return Cm(s),
            r === null && pc(s),
            c = s.type,
            h = s.pendingProps,
            m = r !== null ? r.memoizedProps : null,
            w = h.children,
            ic(c, h) ? w = null : m !== null && ic(c, m) && (s.flags |= 32),
            sg(r, s),
            xt(r, s, w, a),
            s.child;
        case 6:
            return r === null && pc(s),
            null;
        case 13:
            return lg(r, s, a);
        case 4:
            return bc(s, s.stateNode.containerInfo),
            c = s.pendingProps,
            r === null ? s.child = Bs(s, null, c, a) : xt(r, s, c, a),
            s.child;
        case 11:
            return c = s.type,
            h = s.pendingProps,
            h = s.elementType === c ? h : on(c, h),
            eg(r, s, c, h, a);
        case 7:
            return xt(r, s, s.pendingProps, a),
            s.child;
        case 8:
            return xt(r, s, s.pendingProps.children, a),
            s.child;
        case 12:
            return xt(r, s, s.pendingProps.children, a),
            s.child;
        case 10:
            e: {
                if (c = s.type._context,
                h = s.pendingProps,
                m = s.memoizedProps,
                w = h.value,
                je(ja, c._currentValue),
                c._currentValue = w,
                m !== null)
                    if (rn(m.value, w)) {
                        if (m.children === h.children && !Pt.current) {
                            s = Fn(r, s, a);
                            break e
                        }
                    } else
                        for (m = s.child,
                        m !== null && (m.return = s); m !== null; ) {
                            var k = m.dependencies;
                            if (k !== null) {
                                w = m.child;
                                for (var A = k.firstContext; A !== null; ) {
                                    if (A.context === c) {
                                        if (m.tag === 1) {
                                            A = In(-1, a & -a),
                                            A.tag = 2;
                                            var V = m.updateQueue;
                                            if (V !== null) {
                                                V = V.shared;
                                                var K = V.pending;
                                                K === null ? A.next = A : (A.next = K.next,
                                                K.next = A),
                                                V.pending = A
                                            }
                                        }
                                        m.lanes |= a,
                                        A = m.alternate,
                                        A !== null && (A.lanes |= a),
                                        wc(m.return, a, s),
                                        k.lanes |= a;
                                        break
                                    }
                                    A = A.next
                                }
                            } else if (m.tag === 10)
                                w = m.type === s.type ? null : m.child;
                            else if (m.tag === 18) {
                                if (w = m.return,
                                w === null)
                                    throw Error(n(341));
                                w.lanes |= a,
                                k = w.alternate,
                                k !== null && (k.lanes |= a),
                                wc(w, a, s),
                                w = m.sibling
                            } else
                                w = m.child;
                            if (w !== null)
                                w.return = m;
                            else
                                for (w = m; w !== null; ) {
                                    if (w === s) {
                                        w = null;
                                        break
                                    }
                                    if (m = w.sibling,
                                    m !== null) {
                                        m.return = w.return,
                                        w = m;
                                        break
                                    }
                                    w = w.return
                                }
                            m = w
                        }
                xt(r, s, h.children, a),
                s = s.child
            }
            return s;
        case 9:
            return h = s.type,
            c = s.pendingProps.children,
            zs(s, a),
            h = qt(h),
            c = c(h),
            s.flags |= 1,
            xt(r, s, c, a),
            s.child;
        case 14:
            return c = s.type,
            h = on(c, s.pendingProps),
            h = on(c.type, h),
            tg(r, s, c, h, a);
        case 15:
            return ng(r, s, s.type, s.pendingProps, a);
        case 17:
            return c = s.type,
            h = s.pendingProps,
            h = s.elementType === c ? h : on(c, h),
            Qa(r, s),
            s.tag = 1,
            Rt(c) ? (r = !0,
            Aa(s)) : r = !1,
            zs(s, a),
            Km(s, c, h),
            Dc(s, c, h, a),
            Vc(null, s, c, !0, r, a);
        case 19:
            return cg(r, s, a);
        case 22:
            return rg(r, s, a)
        }
        throw Error(n(156, s.tag))
    }
    ;
    function Mg(r, s) {
        return hp(r, s)
    }
    function Hb(r, s, a, c) {
        this.tag = r,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = s,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = c,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Gt(r, s, a, c) {
        return new Hb(r,s,a,c)
    }
    function id(r) {
        return r = r.prototype,
        !(!r || !r.isReactComponent)
    }
    function Wb(r) {
        if (typeof r == "function")
            return id(r) ? 1 : 0;
        if (r != null) {
            if (r = r.$$typeof,
            r === H)
                return 11;
            if (r === fe)
                return 14
        }
        return 2
    }
    function xr(r, s) {
        var a = r.alternate;
        return a === null ? (a = Gt(r.tag, s, r.key, r.mode),
        a.elementType = r.elementType,
        a.type = r.type,
        a.stateNode = r.stateNode,
        a.alternate = r,
        r.alternate = a) : (a.pendingProps = s,
        a.type = r.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = r.flags & 14680064,
        a.childLanes = r.childLanes,
        a.lanes = r.lanes,
        a.child = r.child,
        a.memoizedProps = r.memoizedProps,
        a.memoizedState = r.memoizedState,
        a.updateQueue = r.updateQueue,
        s = r.dependencies,
        a.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        },
        a.sibling = r.sibling,
        a.index = r.index,
        a.ref = r.ref,
        a
    }
    function il(r, s, a, c, h, m) {
        var w = 2;
        if (c = r,
        typeof r == "function")
            id(r) && (w = 1);
        else if (typeof r == "string")
            w = 5;
        else
            e: switch (r) {
            case J:
                return Jr(a.children, h, m, s);
            case _:
                w = 8,
                h |= 8;
                break;
            case D:
                return r = Gt(12, a, s, h | 2),
                r.elementType = D,
                r.lanes = m,
                r;
            case ne:
                return r = Gt(13, a, s, h),
                r.elementType = ne,
                r.lanes = m,
                r;
            case we:
                return r = Gt(19, a, s, h),
                r.elementType = we,
                r.lanes = m,
                r;
            case de:
                return ol(a, h, m, s);
            default:
                if (typeof r == "object" && r !== null)
                    switch (r.$$typeof) {
                    case $:
                        w = 10;
                        break e;
                    case Y:
                        w = 9;
                        break e;
                    case H:
                        w = 11;
                        break e;
                    case fe:
                        w = 14;
                        break e;
                    case he:
                        w = 16,
                        c = null;
                        break e
                    }
                throw Error(n(130, r == null ? r : typeof r, ""))
            }
        return s = Gt(w, a, s, h),
        s.elementType = r,
        s.type = c,
        s.lanes = m,
        s
    }
    function Jr(r, s, a, c) {
        return r = Gt(7, r, c, s),
        r.lanes = a,
        r
    }
    function ol(r, s, a, c) {
        return r = Gt(22, r, c, s),
        r.elementType = de,
        r.lanes = a,
        r.stateNode = {
            isHidden: !1
        },
        r
    }
    function od(r, s, a) {
        return r = Gt(6, r, null, s),
        r.lanes = a,
        r
    }
    function ad(r, s, a) {
        return s = Gt(4, r.children !== null ? r.children : [], r.key, s),
        s.lanes = a,
        s.stateNode = {
            containerInfo: r.containerInfo,
            pendingChildren: null,
            implementation: r.implementation
        },
        s
    }
    function qb(r, s, a, c, h) {
        this.tag = s,
        this.containerInfo = r,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Mu(0),
        this.expirationTimes = Mu(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Mu(0),
        this.identifierPrefix = c,
        this.onRecoverableError = h,
        this.mutableSourceEagerHydrationData = null
    }
    function ld(r, s, a, c, h, m, w, k, A) {
        return r = new qb(r,s,a,k,A),
        s === 1 ? (s = 1,
        m === !0 && (s |= 8)) : s = 0,
        m = Gt(3, null, null, s),
        r.current = m,
        m.stateNode = r,
        m.memoizedState = {
            element: c,
            isDehydrated: a,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Sc(m),
        r
    }
    function Kb(r, s, a) {
        var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: G,
            key: c == null ? null : "" + c,
            children: r,
            containerInfo: s,
            implementation: a
        }
    }
    function Dg(r) {
        if (!r)
            return dr;
        r = r._reactInternals;
        e: {
            if (Br(r) !== r || r.tag !== 1)
                throw Error(n(170));
            var s = r;
            do {
                switch (s.tag) {
                case 3:
                    s = s.stateNode.context;
                    break e;
                case 1:
                    if (Rt(s.type)) {
                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                s = s.return
            } while (s !== null);
            throw Error(n(171))
        }
        if (r.tag === 1) {
            var a = r.type;
            if (Rt(a))
                return um(r, a, s)
        }
        return s
    }
    function jg(r, s, a, c, h, m, w, k, A) {
        return r = ld(a, c, !0, r, h, m, w, k, A),
        r.context = Dg(null),
        a = r.current,
        c = St(),
        h = vr(a),
        m = In(c, h),
        m.callback = s ?? null,
        pr(a, m, h),
        r.current.lanes = h,
        Di(r, h, c),
        Nt(r, c),
        r
    }
    function al(r, s, a, c) {
        var h = s.current
          , m = St()
          , w = vr(h);
        return a = Dg(a),
        s.context === null ? s.context = a : s.pendingContext = a,
        s = In(m, w),
        s.payload = {
            element: r
        },
        c = c === void 0 ? null : c,
        c !== null && (s.callback = c),
        r = pr(h, s, w),
        r !== null && (un(r, h, w, m),
        Fa(r, h, w)),
        w
    }
    function ll(r) {
        if (r = r.current,
        !r.child)
            return null;
        switch (r.child.tag) {
        case 5:
            return r.child.stateNode;
        default:
            return r.child.stateNode
        }
    }
    function Ig(r, s) {
        if (r = r.memoizedState,
        r !== null && r.dehydrated !== null) {
            var a = r.retryLane;
            r.retryLane = a !== 0 && a < s ? a : s
        }
    }
    function ud(r, s) {
        Ig(r, s),
        (r = r.alternate) && Ig(r, s)
    }
    function Qb() {
        return null
    }
    var Fg = typeof reportError == "function" ? reportError : function(r) {
        console.error(r)
    }
    ;
    function cd(r) {
        this._internalRoot = r
    }
    ul.prototype.render = cd.prototype.render = function(r) {
        var s = this._internalRoot;
        if (s === null)
            throw Error(n(409));
        al(r, s, null, null)
    }
    ,
    ul.prototype.unmount = cd.prototype.unmount = function() {
        var r = this._internalRoot;
        if (r !== null) {
            this._internalRoot = null;
            var s = r.containerInfo;
            Gr(function() {
                al(null, r, null, null)
            }),
            s[On] = null
        }
    }
    ;
    function ul(r) {
        this._internalRoot = r
    }
    ul.prototype.unstable_scheduleHydration = function(r) {
        if (r) {
            var s = Sp();
            r = {
                blockedOn: null,
                target: r,
                priority: s
            };
            for (var a = 0; a < or.length && s !== 0 && s < or[a].priority; a++)
                ;
            or.splice(a, 0, r),
            a === 0 && Cp(r)
        }
    }
    ;
    function dd(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
    }
    function cl(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "))
    }
    function Vg() {}
    function Gb(r, s, a, c, h) {
        if (h) {
            if (typeof c == "function") {
                var m = c;
                c = function() {
                    var V = ll(w);
                    m.call(V)
                }
            }
            var w = jg(s, c, r, 0, null, !1, !1, "", Vg);
            return r._reactRootContainer = w,
            r[On] = w.current,
            Gi(r.nodeType === 8 ? r.parentNode : r),
            Gr(),
            w
        }
        for (; h = r.lastChild; )
            r.removeChild(h);
        if (typeof c == "function") {
            var k = c;
            c = function() {
                var V = ll(A);
                k.call(V)
            }
        }
        var A = ld(r, 0, !1, null, null, !1, !1, "", Vg);
        return r._reactRootContainer = A,
        r[On] = A.current,
        Gi(r.nodeType === 8 ? r.parentNode : r),
        Gr(function() {
            al(s, A, a, c)
        }),
        A
    }
    function dl(r, s, a, c, h) {
        var m = a._reactRootContainer;
        if (m) {
            var w = m;
            if (typeof h == "function") {
                var k = h;
                h = function() {
                    var A = ll(w);
                    k.call(A)
                }
            }
            al(s, w, r, h)
        } else
            w = Gb(a, s, r, h, c);
        return ll(w)
    }
    wp = function(r) {
        switch (r.tag) {
        case 3:
            var s = r.stateNode;
            if (s.current.memoizedState.isDehydrated) {
                var a = Mi(s.pendingLanes);
                a !== 0 && (Du(s, a | 1),
                Nt(s, Qe()),
                (Ne & 6) === 0 && (Ks = Qe() + 500,
                fr()))
            }
            break;
        case 13:
            Gr(function() {
                var c = jn(r, 1);
                if (c !== null) {
                    var h = St();
                    un(c, r, 1, h)
                }
            }),
            ud(r, 1)
        }
    }
    ,
    ju = function(r) {
        if (r.tag === 13) {
            var s = jn(r, 134217728);
            if (s !== null) {
                var a = St();
                un(s, r, 134217728, a)
            }
            ud(r, 134217728)
        }
    }
    ,
    xp = function(r) {
        if (r.tag === 13) {
            var s = vr(r)
              , a = jn(r, s);
            if (a !== null) {
                var c = St();
                un(a, r, s, c)
            }
            ud(r, s)
        }
    }
    ,
    Sp = function() {
        return De
    }
    ,
    bp = function(r, s) {
        var a = De;
        try {
            return De = r,
            s()
        } finally {
            De = a
        }
    }
    ,
    Ru = function(r, s, a) {
        switch (s) {
        case "input":
            if (xu(r, a),
            s = a.name,
            a.type === "radio" && s != null) {
                for (a = r; a.parentNode; )
                    a = a.parentNode;
                for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'),
                s = 0; s < a.length; s++) {
                    var c = a[s];
                    if (c !== r && c.form === r.form) {
                        var h = Ra(c);
                        if (!h)
                            throw Error(n(90));
                        Vr(c),
                        xu(c, h)
                    }
                }
            }
            break;
        case "textarea":
            Yh(r, a);
            break;
        case "select":
            s = a.value,
            s != null && Cs(r, !!a.multiple, s, !1)
        }
    }
    ,
    op = nd,
    ap = Gr;
    var Xb = {
        usingClientEntryPoint: !1,
        Events: [Ji, Ms, Ra, sp, ip, nd]
    }
      , ho = {
        findFiberByHostInstance: Ur,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , Yb = {
        bundleType: ho.bundleType,
        version: ho.version,
        rendererPackageName: ho.rendererPackageName,
        rendererConfig: ho.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: I.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(r) {
            return r = dp(r),
            r === null ? null : r.stateNode
        },
        findFiberByHostInstance: ho.findFiberByHostInstance || Qb,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!fl.isDisabled && fl.supportsFiber)
            try {
                ua = fl.inject(Yb),
                mn = fl
            } catch {}
    }
    return Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xb,
    Ot.createPortal = function(r, s) {
        var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!dd(s))
            throw Error(n(200));
        return Kb(r, s, null, a)
    }
    ,
    Ot.createRoot = function(r, s) {
        if (!dd(r))
            throw Error(n(299));
        var a = !1
          , c = ""
          , h = Fg;
        return s != null && (s.unstable_strictMode === !0 && (a = !0),
        s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (h = s.onRecoverableError)),
        s = ld(r, 1, !1, null, null, a, !1, c, h),
        r[On] = s.current,
        Gi(r.nodeType === 8 ? r.parentNode : r),
        new cd(s)
    }
    ,
    Ot.findDOMNode = function(r) {
        if (r == null)
            return null;
        if (r.nodeType === 1)
            return r;
        var s = r._reactInternals;
        if (s === void 0)
            throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","),
            Error(n(268, r)));
        return r = dp(s),
        r = r === null ? null : r.stateNode,
        r
    }
    ,
    Ot.flushSync = function(r) {
        return Gr(r)
    }
    ,
    Ot.hydrate = function(r, s, a) {
        if (!cl(s))
            throw Error(n(200));
        return dl(null, r, s, !0, a)
    }
    ,
    Ot.hydrateRoot = function(r, s, a) {
        if (!dd(r))
            throw Error(n(405));
        var c = a != null && a.hydratedSources || null
          , h = !1
          , m = ""
          , w = Fg;
        if (a != null && (a.unstable_strictMode === !0 && (h = !0),
        a.identifierPrefix !== void 0 && (m = a.identifierPrefix),
        a.onRecoverableError !== void 0 && (w = a.onRecoverableError)),
        s = jg(s, null, r, 1, a ?? null, h, !1, m, w),
        r[On] = s.current,
        Gi(r),
        c)
            for (r = 0; r < c.length; r++)
                a = c[r],
                h = a._getVersion,
                h = h(a._source),
                s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [a, h] : s.mutableSourceEagerHydrationData.push(a, h);
        return new ul(s)
    }
    ,
    Ot.render = function(r, s, a) {
        if (!cl(s))
            throw Error(n(200));
        return dl(null, r, s, !1, a)
    }
    ,
    Ot.unmountComponentAtNode = function(r) {
        if (!cl(r))
            throw Error(n(40));
        return r._reactRootContainer ? (Gr(function() {
            dl(null, null, r, !1, function() {
                r._reactRootContainer = null,
                r[On] = null
            })
        }),
        !0) : !1
    }
    ,
    Ot.unstable_batchedUpdates = nd,
    Ot.unstable_renderSubtreeIntoContainer = function(r, s, a, c) {
        if (!cl(a))
            throw Error(n(200));
        if (r == null || r._reactInternals === void 0)
            throw Error(n(38));
        return dl(r, s, a, !1, c)
    }
    ,
    Ot.version = "18.3.1-next-f1338f8080-20240426",
    Ot
}
var Qg;
function E0() {
    if (Qg)
        return md.exports;
    Qg = 1;
    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
                console.error(t)
            }
    }
    return e(),
    md.exports = iE(),
    md.exports
}
var Gg;
function oE() {
    if (Gg)
        return pl;
    Gg = 1;
    var e = E0();
    return pl.createRoot = e.createRoot,
    pl.hydrateRoot = e.hydrateRoot,
    pl
}
var aE = oE();
const lE = Zb(aE)
  , uE = 20
  , cE = 1e6
  , qn = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let vd = 0;
function dE() {
    return vd = (vd + 1) % Number.MAX_VALUE,
    vd.toString()
}
const wd = new Map
  , Xg = e => {
    if (wd.has(e))
        return;
    const t = setTimeout( () => {
        wd.delete(e),
        Po({
            type: qn.REMOVE_TOAST,
            toastId: e
        })
    }
    , cE);
    wd.set(e, t)
}
  , fE = (e, t) => {
    switch (t.type) {
    case qn.ADD_TOAST:
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, uE)
        };
    case qn.UPDATE_TOAST:
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case qn.DISMISS_TOAST:
        {
            const {toastId: n} = t;
            return n ? Xg(n) : e.toasts.forEach(i => {
                Xg(i.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(i => i.id === n || n === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case qn.REMOVE_TOAST:
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Pl = [];
let Rl = {
    toasts: []
};
function Po(e) {
    Rl = fE(Rl, e),
    Pl.forEach(t => {
        t(Rl)
    }
    )
}
function hE({...e}) {
    const t = dE()
      , n = o => Po({
        type: qn.UPDATE_TOAST,
        toast: {
            ...o,
            id: t
        }
    })
      , i = () => Po({
        type: qn.DISMISS_TOAST,
        toastId: t
    });
    return Po({
        type: qn.ADD_TOAST,
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || i()
            }
        }
    }),
    {
        id: t,
        dismiss: i,
        update: n
    }
}
function pE() {
    const [e,t] = S.useState(Rl);
    return S.useEffect( () => (Pl.push(t),
    () => {
        const n = Pl.indexOf(t);
        n > -1 && Pl.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: hE,
        dismiss: n => Po({
            type: qn.DISMISS_TOAST,
            toastId: n
        })
    }
}
function C0(e) {
    var t, n, i = "";
    if (typeof e == "string" || typeof e == "number")
        i += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = C0(e[t])) && (i && (i += " "),
                i += n)
        } else
            for (n in e)
                e[n] && (i && (i += " "),
                i += n);
    return i
}
function k0() {
    for (var e, t, n = 0, i = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = C0(e)) && (i && (i += " "),
        i += t);
    return i
}
const Yg = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Jg = k0
  , T0 = (e, t) => n => {
    var i;
    if ((t == null ? void 0 : t.variants) == null)
        return Jg(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: l} = t
      , u = Object.keys(o).map(p => {
        const g = n == null ? void 0 : n[p]
          , y = l == null ? void 0 : l[p];
        if (g === null)
            return null;
        const v = Yg(g) || Yg(y);
        return o[p][v]
    }
    )
      , d = n && Object.entries(n).reduce( (p, g) => {
        let[y,v] = g;
        return v === void 0 || (p[y] = v),
        p
    }
    , {})
      , f = t == null || (i = t.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (p, g) => {
        let {class: y, className: v, ...x} = g;
        return Object.entries(x).every(b => {
            let[C,E] = b;
            return Array.isArray(E) ? E.includes({
                ...l,
                ...d
            }[C]) : {
                ...l,
                ...d
            }[C] === E
        }
        ) ? [...p, y, v] : p
    }
    , []);
    return Jg(e, u, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mE = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , P0 = (...e) => e.filter( (t, n, i) => !!t && t.trim() !== "" && i.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var gE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yE = S.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: i, className: o="", children: l, iconNode: u, ...d}, f) => S.createElement("svg", {
    ref: f,
    ...gE,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: i ? Number(n) * 24 / Number(t) : n,
    className: P0("lucide", o),
    ...d
}, [...u.map( ([p,g]) => S.createElement(p, g)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = (e, t) => {
    const n = S.forwardRef( ({className: i, ...o}, l) => S.createElement(yE, {
        ref: l,
        iconNode: t,
        className: P0(`lucide-${mE(e)}`, i),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vE = [["path", {
    d: "M12 8V4H8",
    key: "hb8ula"
}], ["rect", {
    width: "16",
    height: "12",
    x: "4",
    y: "8",
    rx: "2",
    key: "enze0r"
}], ["path", {
    d: "M2 14h2",
    key: "vft8re"
}], ["path", {
    d: "M20 14h2",
    key: "4cs60a"
}], ["path", {
    d: "M15 13v2",
    key: "1xurst"
}], ["path", {
    d: "M9 13v2",
    key: "rq6x2g"
}]]
  , wE = Tt("Bot", vE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xE = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , SE = Tt("Check", xE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bE = [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]
  , EE = Tt("Copy", bE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CE = [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]
  , kE = Tt("Download", CE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TE = [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2",
    key: "1m3agn"
}], ["circle", {
    cx: "9",
    cy: "9",
    r: "2",
    key: "af1f0g"
}], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
    key: "1xmnt7"
}]]
  , PE = Tt("Image", TE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RE = [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]
  , _E = Tt("LoaderCircle", RE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AE = [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]
  , NE = Tt("Menu", AE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OE = [["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
}]]
  , LE = Tt("MessageSquare", OE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ME = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]
  , DE = Tt("Plus", ME);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jE = [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]
  , IE = Tt("Send", jE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FE = [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]
  , R0 = Tt("Sparkles", FE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VE = [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]
  , BE = Tt("Trash2", VE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UE = [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]
  , zE = Tt("User", UE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $E = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , Uf = Tt("X", $E);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HE = [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]]
  , WE = Tt("Zap", HE)
  , zf = "-"
  , qE = e => {
    const t = QE(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: i} = e;
    return {
        getClassGroupId: u => {
            const d = u.split(zf);
            return d[0] === "" && d.length !== 1 && d.shift(),
            _0(d, t) || KE(u)
        }
        ,
        getConflictingClassGroupIds: (u, d) => {
            const f = n[u] || [];
            return d && i[u] ? [...f, ...i[u]] : f
        }
    }
}
  , _0 = (e, t) => {
    var u;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , i = t.nextPart.get(n)
      , o = i ? _0(e.slice(1), i) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const l = e.join(zf);
    return (u = t.validators.find( ({validator: d}) => d(l))) == null ? void 0 : u.classGroupId
}
  , Zg = /^\[(.+)\]$/
  , KE = e => {
    if (Zg.test(e)) {
        const t = Zg.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , QE = e => {
    const {theme: t, classGroups: n} = e
      , i = {
        nextPart: new Map,
        validators: []
    };
    for (const o in n)
        Wd(n[o], i, o, t);
    return i
}
  , Wd = (e, t, n, i) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const l = o === "" ? t : ey(t, o);
            l.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (GE(o)) {
                Wd(o(i), t, n, i);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([l,u]) => {
            Wd(u, ey(t, l), n, i)
        }
        )
    }
    )
}
  , ey = (e, t) => {
    let n = e;
    return t.split(zf).forEach(i => {
        n.nextPart.has(i) || n.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(i)
    }
    ),
    n
}
  , GE = e => e.isThemeGetter
  , XE = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , i = new Map;
    const o = (l, u) => {
        n.set(l, u),
        t++,
        t > e && (t = 0,
        i = n,
        n = new Map)
    }
    ;
    return {
        get(l) {
            let u = n.get(l);
            if (u !== void 0)
                return u;
            if ((u = i.get(l)) !== void 0)
                return o(l, u),
                u
        },
        set(l, u) {
            n.has(l) ? n.set(l, u) : o(l, u)
        }
    }
}
  , qd = "!"
  , Kd = ":"
  , YE = Kd.length
  , JE = e => {
    const {prefix: t, experimentalParseClassName: n} = e;
    let i = o => {
        const l = [];
        let u = 0, d = 0, f = 0, p;
        for (let b = 0; b < o.length; b++) {
            let C = o[b];
            if (u === 0 && d === 0) {
                if (C === Kd) {
                    l.push(o.slice(f, b)),
                    f = b + YE;
                    continue
                }
                if (C === "/") {
                    p = b;
                    continue
                }
            }
            C === "[" ? u++ : C === "]" ? u-- : C === "(" ? d++ : C === ")" && d--
        }
        const g = l.length === 0 ? o : o.substring(f)
          , y = ZE(g)
          , v = y !== g
          , x = p && p > f ? p - f : void 0;
        return {
            modifiers: l,
            hasImportantModifier: v,
            baseClassName: y,
            maybePostfixModifierPosition: x
        }
    }
    ;
    if (t) {
        const o = t + Kd
          , l = i;
        i = u => u.startsWith(o) ? l(u.substring(o.length)) : {
            isExternal: !0,
            modifiers: [],
            hasImportantModifier: !1,
            baseClassName: u,
            maybePostfixModifierPosition: void 0
        }
    }
    if (n) {
        const o = i;
        i = l => n({
            className: l,
            parseClassName: o
        })
    }
    return i
}
  , ZE = e => e.endsWith(qd) ? e.substring(0, e.length - 1) : e.startsWith(qd) ? e.substring(1) : e
  , eC = e => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map(i => [i, !0]));
    return i => {
        if (i.length <= 1)
            return i;
        const o = [];
        let l = [];
        return i.forEach(u => {
            u[0] === "[" || t[u] ? (o.push(...l.sort(), u),
            l = []) : l.push(u)
        }
        ),
        o.push(...l.sort()),
        o
    }
}
  , tC = e => ({
    cache: XE(e.cacheSize),
    parseClassName: JE(e),
    sortModifiers: eC(e),
    ...qE(e)
})
  , nC = /\s+/
  , rC = (e, t) => {
    const {parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: o, sortModifiers: l} = t
      , u = []
      , d = e.trim().split(nC);
    let f = "";
    for (let p = d.length - 1; p >= 0; p -= 1) {
        const g = d[p]
          , {isExternal: y, modifiers: v, hasImportantModifier: x, baseClassName: b, maybePostfixModifierPosition: C} = n(g);
        if (y) {
            f = g + (f.length > 0 ? " " + f : f);
            continue
        }
        let E = !!C
          , T = i(E ? b.substring(0, C) : b);
        if (!T) {
            if (!E) {
                f = g + (f.length > 0 ? " " + f : f);
                continue
            }
            if (T = i(b),
            !T) {
                f = g + (f.length > 0 ? " " + f : f);
                continue
            }
            E = !1
        }
        const M = l(v).join(":")
          , O = x ? M + qd : M
          , I = O + T;
        if (u.includes(I))
            continue;
        u.push(I);
        const z = o(T, E);
        for (let G = 0; G < z.length; ++G) {
            const J = z[G];
            u.push(O + J)
        }
        f = g + (f.length > 0 ? " " + f : f)
    }
    return f
}
;
function sC() {
    let e = 0, t, n, i = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = A0(t)) && (i && (i += " "),
        i += n);
    return i
}
const A0 = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let i = 0; i < e.length; i++)
        e[i] && (t = A0(e[i])) && (n && (n += " "),
        n += t);
    return n
}
;
function iC(e, ...t) {
    let n, i, o, l = u;
    function u(f) {
        const p = t.reduce( (g, y) => y(g), e());
        return n = tC(p),
        i = n.cache.get,
        o = n.cache.set,
        l = d,
        d(f)
    }
    function d(f) {
        const p = i(f);
        if (p)
            return p;
        const g = rC(f, n);
        return o(f, g),
        g
    }
    return function() {
        return l(sC.apply(null, arguments))
    }
}
const rt = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , N0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , O0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , oC = /^\d+\/\d+$/
  , aC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , lC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , uC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , cC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , dC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Gs = e => oC.test(e)
  , ke = e => !!e && !Number.isNaN(Number(e))
  , br = e => !!e && Number.isInteger(Number(e))
  , xd = e => e.endsWith("%") && ke(e.slice(0, -1))
  , Bn = e => aC.test(e)
  , fC = () => !0
  , hC = e => lC.test(e) && !uC.test(e)
  , L0 = () => !1
  , pC = e => cC.test(e)
  , mC = e => dC.test(e)
  , gC = e => !ie(e) && !oe(e)
  , yC = e => wi(e, j0, L0)
  , ie = e => N0.test(e)
  , Zr = e => wi(e, I0, hC)
  , Sd = e => wi(e, bC, ke)
  , ty = e => wi(e, M0, L0)
  , vC = e => wi(e, D0, mC)
  , ml = e => wi(e, F0, pC)
  , oe = e => O0.test(e)
  , mo = e => xi(e, I0)
  , wC = e => xi(e, EC)
  , ny = e => xi(e, M0)
  , xC = e => xi(e, j0)
  , SC = e => xi(e, D0)
  , gl = e => xi(e, F0, !0)
  , wi = (e, t, n) => {
    const i = N0.exec(e);
    return i ? i[1] ? t(i[1]) : n(i[2]) : !1
}
  , xi = (e, t, n=!1) => {
    const i = O0.exec(e);
    return i ? i[1] ? t(i[1]) : n : !1
}
  , M0 = e => e === "position" || e === "percentage"
  , D0 = e => e === "image" || e === "url"
  , j0 = e => e === "length" || e === "size" || e === "bg-size"
  , I0 = e => e === "length"
  , bC = e => e === "number"
  , EC = e => e === "family-name"
  , F0 = e => e === "shadow"
  , CC = () => {
    const e = rt("color")
      , t = rt("font")
      , n = rt("text")
      , i = rt("font-weight")
      , o = rt("tracking")
      , l = rt("leading")
      , u = rt("breakpoint")
      , d = rt("container")
      , f = rt("spacing")
      , p = rt("radius")
      , g = rt("shadow")
      , y = rt("inset-shadow")
      , v = rt("text-shadow")
      , x = rt("drop-shadow")
      , b = rt("blur")
      , C = rt("perspective")
      , E = rt("aspect")
      , T = rt("ease")
      , M = rt("animate")
      , O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , I = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , z = () => [...I(), oe, ie]
      , G = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , J = () => ["auto", "contain", "none"]
      , _ = () => [oe, ie, f]
      , D = () => [Gs, "full", "auto", ..._()]
      , $ = () => [br, "none", "subgrid", oe, ie]
      , Y = () => ["auto", {
        span: ["full", br, oe, ie]
    }, br, oe, ie]
      , H = () => [br, "auto", oe, ie]
      , ne = () => ["auto", "min", "max", "fr", oe, ie]
      , we = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , fe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , he = () => ["auto", ..._()]
      , de = () => [Gs, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ..._()]
      , B = () => [e, oe, ie]
      , ae = () => [...I(), ny, ty, {
        position: [oe, ie]
    }]
      , Z = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , L = () => ["auto", "cover", "contain", xC, yC, {
        size: [oe, ie]
    }]
      , W = () => [xd, mo, Zr]
      , le = () => ["", "none", "full", p, oe, ie]
      , pe = () => ["", ke, mo, Zr]
      , be = () => ["solid", "dashed", "dotted", "double"]
      , Pe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , xe = () => [ke, xd, ny, ty]
      , Ae = () => ["", "none", b, oe, ie]
      , Le = () => ["none", ke, oe, ie]
      , Je = () => ["none", ke, oe, ie]
      , nr = () => [ke, oe, ie]
      , Vr = () => [Gs, "full", ..._()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [Bn],
            breakpoint: [Bn],
            color: [fC],
            container: [Bn],
            "drop-shadow": [Bn],
            ease: ["in", "out", "in-out"],
            font: [gC],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [Bn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [Bn],
            shadow: [Bn],
            spacing: ["px", ke],
            text: [Bn],
            "text-shadow": [Bn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", Gs, ie, oe, E]
            }],
            container: ["container"],
            columns: [{
                columns: [ke, ie, oe, d]
            }],
            "break-after": [{
                "break-after": O()
            }],
            "break-before": [{
                "break-before": O()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: z()
            }],
            overflow: [{
                overflow: G()
            }],
            "overflow-x": [{
                "overflow-x": G()
            }],
            "overflow-y": [{
                "overflow-y": G()
            }],
            overscroll: [{
                overscroll: J()
            }],
            "overscroll-x": [{
                "overscroll-x": J()
            }],
            "overscroll-y": [{
                "overscroll-y": J()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: D()
            }],
            "inset-x": [{
                "inset-x": D()
            }],
            "inset-y": [{
                "inset-y": D()
            }],
            start: [{
                start: D()
            }],
            end: [{
                end: D()
            }],
            top: [{
                top: D()
            }],
            right: [{
                right: D()
            }],
            bottom: [{
                bottom: D()
            }],
            left: [{
                left: D()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [br, "auto", oe, ie]
            }],
            basis: [{
                basis: [Gs, "full", "auto", d, ..._()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [ke, Gs, "auto", "initial", "none", ie]
            }],
            grow: [{
                grow: ["", ke, oe, ie]
            }],
            shrink: [{
                shrink: ["", ke, oe, ie]
            }],
            order: [{
                order: [br, "first", "last", "none", oe, ie]
            }],
            "grid-cols": [{
                "grid-cols": $()
            }],
            "col-start-end": [{
                col: Y()
            }],
            "col-start": [{
                "col-start": H()
            }],
            "col-end": [{
                "col-end": H()
            }],
            "grid-rows": [{
                "grid-rows": $()
            }],
            "row-start-end": [{
                row: Y()
            }],
            "row-start": [{
                "row-start": H()
            }],
            "row-end": [{
                "row-end": H()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ne()
            }],
            "auto-rows": [{
                "auto-rows": ne()
            }],
            gap: [{
                gap: _()
            }],
            "gap-x": [{
                "gap-x": _()
            }],
            "gap-y": [{
                "gap-y": _()
            }],
            "justify-content": [{
                justify: [...we(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...fe(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...fe()]
            }],
            "align-content": [{
                content: ["normal", ...we()]
            }],
            "align-items": [{
                items: [...fe(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...fe(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": we()
            }],
            "place-items": [{
                "place-items": [...fe(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...fe()]
            }],
            p: [{
                p: _()
            }],
            px: [{
                px: _()
            }],
            py: [{
                py: _()
            }],
            ps: [{
                ps: _()
            }],
            pe: [{
                pe: _()
            }],
            pt: [{
                pt: _()
            }],
            pr: [{
                pr: _()
            }],
            pb: [{
                pb: _()
            }],
            pl: [{
                pl: _()
            }],
            m: [{
                m: he()
            }],
            mx: [{
                mx: he()
            }],
            my: [{
                my: he()
            }],
            ms: [{
                ms: he()
            }],
            me: [{
                me: he()
            }],
            mt: [{
                mt: he()
            }],
            mr: [{
                mr: he()
            }],
            mb: [{
                mb: he()
            }],
            ml: [{
                ml: he()
            }],
            "space-x": [{
                "space-x": _()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": _()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: de()
            }],
            w: [{
                w: [d, "screen", ...de()]
            }],
            "min-w": [{
                "min-w": [d, "screen", "none", ...de()]
            }],
            "max-w": [{
                "max-w": [d, "screen", "none", "prose", {
                    screen: [u]
                }, ...de()]
            }],
            h: [{
                h: ["screen", "lh", ...de()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...de()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...de()]
            }],
            "font-size": [{
                text: ["base", n, mo, Zr]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [i, oe, Sd]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", xd, ie]
            }],
            "font-family": [{
                font: [wC, ie, t]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [o, oe, ie]
            }],
            "line-clamp": [{
                "line-clamp": [ke, "none", oe, Sd]
            }],
            leading: [{
                leading: [l, ..._()]
            }],
            "list-image": [{
                "list-image": ["none", oe, ie]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", oe, ie]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: B()
            }],
            "text-color": [{
                text: B()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...be(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [ke, "from-font", "auto", oe, Zr]
            }],
            "text-decoration-color": [{
                decoration: B()
            }],
            "underline-offset": [{
                "underline-offset": [ke, "auto", oe, ie]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: _()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", oe, ie]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", oe, ie]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: ae()
            }],
            "bg-repeat": [{
                bg: Z()
            }],
            "bg-size": [{
                bg: L()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, br, oe, ie],
                    radial: ["", oe, ie],
                    conic: [br, oe, ie]
                }, SC, vC]
            }],
            "bg-color": [{
                bg: B()
            }],
            "gradient-from-pos": [{
                from: W()
            }],
            "gradient-via-pos": [{
                via: W()
            }],
            "gradient-to-pos": [{
                to: W()
            }],
            "gradient-from": [{
                from: B()
            }],
            "gradient-via": [{
                via: B()
            }],
            "gradient-to": [{
                to: B()
            }],
            rounded: [{
                rounded: le()
            }],
            "rounded-s": [{
                "rounded-s": le()
            }],
            "rounded-e": [{
                "rounded-e": le()
            }],
            "rounded-t": [{
                "rounded-t": le()
            }],
            "rounded-r": [{
                "rounded-r": le()
            }],
            "rounded-b": [{
                "rounded-b": le()
            }],
            "rounded-l": [{
                "rounded-l": le()
            }],
            "rounded-ss": [{
                "rounded-ss": le()
            }],
            "rounded-se": [{
                "rounded-se": le()
            }],
            "rounded-ee": [{
                "rounded-ee": le()
            }],
            "rounded-es": [{
                "rounded-es": le()
            }],
            "rounded-tl": [{
                "rounded-tl": le()
            }],
            "rounded-tr": [{
                "rounded-tr": le()
            }],
            "rounded-br": [{
                "rounded-br": le()
            }],
            "rounded-bl": [{
                "rounded-bl": le()
            }],
            "border-w": [{
                border: pe()
            }],
            "border-w-x": [{
                "border-x": pe()
            }],
            "border-w-y": [{
                "border-y": pe()
            }],
            "border-w-s": [{
                "border-s": pe()
            }],
            "border-w-e": [{
                "border-e": pe()
            }],
            "border-w-t": [{
                "border-t": pe()
            }],
            "border-w-r": [{
                "border-r": pe()
            }],
            "border-w-b": [{
                "border-b": pe()
            }],
            "border-w-l": [{
                "border-l": pe()
            }],
            "divide-x": [{
                "divide-x": pe()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": pe()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...be(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...be(), "hidden", "none"]
            }],
            "border-color": [{
                border: B()
            }],
            "border-color-x": [{
                "border-x": B()
            }],
            "border-color-y": [{
                "border-y": B()
            }],
            "border-color-s": [{
                "border-s": B()
            }],
            "border-color-e": [{
                "border-e": B()
            }],
            "border-color-t": [{
                "border-t": B()
            }],
            "border-color-r": [{
                "border-r": B()
            }],
            "border-color-b": [{
                "border-b": B()
            }],
            "border-color-l": [{
                "border-l": B()
            }],
            "divide-color": [{
                divide: B()
            }],
            "outline-style": [{
                outline: [...be(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [ke, oe, ie]
            }],
            "outline-w": [{
                outline: ["", ke, mo, Zr]
            }],
            "outline-color": [{
                outline: B()
            }],
            shadow: [{
                shadow: ["", "none", g, gl, ml]
            }],
            "shadow-color": [{
                shadow: B()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", y, gl, ml]
            }],
            "inset-shadow-color": [{
                "inset-shadow": B()
            }],
            "ring-w": [{
                ring: pe()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: B()
            }],
            "ring-offset-w": [{
                "ring-offset": [ke, Zr]
            }],
            "ring-offset-color": [{
                "ring-offset": B()
            }],
            "inset-ring-w": [{
                "inset-ring": pe()
            }],
            "inset-ring-color": [{
                "inset-ring": B()
            }],
            "text-shadow": [{
                "text-shadow": ["none", v, gl, ml]
            }],
            "text-shadow-color": [{
                "text-shadow": B()
            }],
            opacity: [{
                opacity: [ke, oe, ie]
            }],
            "mix-blend": [{
                "mix-blend": [...Pe(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": Pe()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [ke]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": xe()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": xe()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": B()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": B()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": xe()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": xe()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": B()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": B()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": xe()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": xe()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": B()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": B()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": xe()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": xe()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": B()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": B()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": xe()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": xe()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": B()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": B()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": xe()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": xe()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": B()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": B()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": xe()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": xe()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": B()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": B()
            }],
            "mask-image-radial": [{
                "mask-radial": [oe, ie]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": xe()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": xe()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": B()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": B()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": I()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [ke]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": xe()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": xe()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": B()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": B()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: ae()
            }],
            "mask-repeat": [{
                mask: Z()
            }],
            "mask-size": [{
                mask: L()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", oe, ie]
            }],
            filter: [{
                filter: ["", "none", oe, ie]
            }],
            blur: [{
                blur: Ae()
            }],
            brightness: [{
                brightness: [ke, oe, ie]
            }],
            contrast: [{
                contrast: [ke, oe, ie]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", x, gl, ml]
            }],
            "drop-shadow-color": [{
                "drop-shadow": B()
            }],
            grayscale: [{
                grayscale: ["", ke, oe, ie]
            }],
            "hue-rotate": [{
                "hue-rotate": [ke, oe, ie]
            }],
            invert: [{
                invert: ["", ke, oe, ie]
            }],
            saturate: [{
                saturate: [ke, oe, ie]
            }],
            sepia: [{
                sepia: ["", ke, oe, ie]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", oe, ie]
            }],
            "backdrop-blur": [{
                "backdrop-blur": Ae()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [ke, oe, ie]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [ke, oe, ie]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", ke, oe, ie]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [ke, oe, ie]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", ke, oe, ie]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [ke, oe, ie]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [ke, oe, ie]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", ke, oe, ie]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": _()
            }],
            "border-spacing-x": [{
                "border-spacing-x": _()
            }],
            "border-spacing-y": [{
                "border-spacing-y": _()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", oe, ie]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [ke, "initial", oe, ie]
            }],
            ease: [{
                ease: ["linear", "initial", T, oe, ie]
            }],
            delay: [{
                delay: [ke, oe, ie]
            }],
            animate: [{
                animate: ["none", M, oe, ie]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [C, oe, ie]
            }],
            "perspective-origin": [{
                "perspective-origin": z()
            }],
            rotate: [{
                rotate: Le()
            }],
            "rotate-x": [{
                "rotate-x": Le()
            }],
            "rotate-y": [{
                "rotate-y": Le()
            }],
            "rotate-z": [{
                "rotate-z": Le()
            }],
            scale: [{
                scale: Je()
            }],
            "scale-x": [{
                "scale-x": Je()
            }],
            "scale-y": [{
                "scale-y": Je()
            }],
            "scale-z": [{
                "scale-z": Je()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: nr()
            }],
            "skew-x": [{
                "skew-x": nr()
            }],
            "skew-y": [{
                "skew-y": nr()
            }],
            transform: [{
                transform: [oe, ie, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: z()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: Vr()
            }],
            "translate-x": [{
                "translate-x": Vr()
            }],
            "translate-y": [{
                "translate-y": Vr()
            }],
            "translate-z": [{
                "translate-z": Vr()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: B()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: B()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", oe, ie]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": _()
            }],
            "scroll-mx": [{
                "scroll-mx": _()
            }],
            "scroll-my": [{
                "scroll-my": _()
            }],
            "scroll-ms": [{
                "scroll-ms": _()
            }],
            "scroll-me": [{
                "scroll-me": _()
            }],
            "scroll-mt": [{
                "scroll-mt": _()
            }],
            "scroll-mr": [{
                "scroll-mr": _()
            }],
            "scroll-mb": [{
                "scroll-mb": _()
            }],
            "scroll-ml": [{
                "scroll-ml": _()
            }],
            "scroll-p": [{
                "scroll-p": _()
            }],
            "scroll-px": [{
                "scroll-px": _()
            }],
            "scroll-py": [{
                "scroll-py": _()
            }],
            "scroll-ps": [{
                "scroll-ps": _()
            }],
            "scroll-pe": [{
                "scroll-pe": _()
            }],
            "scroll-pt": [{
                "scroll-pt": _()
            }],
            "scroll-pr": [{
                "scroll-pr": _()
            }],
            "scroll-pb": [{
                "scroll-pb": _()
            }],
            "scroll-pl": [{
                "scroll-pl": _()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", oe, ie]
            }],
            fill: [{
                fill: ["none", ...B()]
            }],
            "stroke-w": [{
                stroke: [ke, mo, Zr, Sd]
            }],
            stroke: [{
                stroke: ["none", ...B()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , V0 = iC(CC);
function Zn(...e) {
    return V0(k0(e))
}
const kC = window.self !== window.top
  , B0 = S.forwardRef( ({...e}, t) => R.jsx("div", {
    ref: t,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...e
}));
B0.displayName = "ToastProvider";
const U0 = S.forwardRef( ({...e}, t) => R.jsx("div", {
    ref: t,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...e
}));
U0.displayName = "ToastViewport";
const TC = T0("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , z0 = S.forwardRef( ({className: e, variant: t, ...n}, i) => R.jsx("div", {
    ref: i,
    className: Zn(TC({
        variant: t
    }), e),
    ...n
}));
z0.displayName = "Toast";
const PC = S.forwardRef( ({className: e, ...t}, n) => R.jsx("div", {
    ref: n,
    className: Zn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
PC.displayName = "ToastAction";
const $0 = S.forwardRef( ({className: e, ...t}, n) => R.jsx("button", {
    ref: n,
    className: Zn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: R.jsx(Uf, {
        className: "h-4 w-4"
    })
}));
$0.displayName = "ToastClose";
const H0 = S.forwardRef( ({className: e, ...t}, n) => R.jsx("div", {
    ref: n,
    className: Zn("text-sm font-semibold", e),
    ...t
}));
H0.displayName = "ToastTitle";
const W0 = S.forwardRef( ({className: e, ...t}, n) => R.jsx("div", {
    ref: n,
    className: Zn("text-sm opacity-90", e),
    ...t
}));
W0.displayName = "ToastDescription";
function RC() {
    const {toasts: e} = pE();
    return R.jsxs(B0, {
        children: [e.map(function({id: t, title: n, description: i, action: o, ...l}) {
            return R.jsxs(z0, {
                ...l,
                children: [R.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && R.jsx(H0, {
                        children: n
                    }), i && R.jsx(W0, {
                        children: i
                    })]
                }), o, R.jsx($0, {})]
            }, t)
        }), R.jsx(U0, {})]
    })
}
var Si = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
, _C = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: e => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: e => clearInterval(e)
}, kr, Vf, f0, AC = (f0 = class {
    constructor() {
        me(this, kr, _C);
        me(this, Vf, !1)
    }
    setTimeoutProvider(e) {
        ee(this, kr, e)
    }
    setTimeout(e, t) {
        return P(this, kr).setTimeout(e, t)
    }
    clearTimeout(e) {
        P(this, kr).clearTimeout(e)
    }
    setInterval(e, t) {
        return P(this, kr).setInterval(e, t)
    }
    clearInterval(e) {
        P(this, kr).clearInterval(e)
    }
}
,
kr = new WeakMap,
Vf = new WeakMap,
f0), ss = new AC;
function NC(e) {
    setTimeout(e, 0)
}
var ws = typeof window > "u" || "Deno"in globalThis;
function Ct() {}
function OC(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Qd(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function q0(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Mr(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Zt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function ry(e, t) {
    const {type: n="all", exact: i, fetchStatus: o, predicate: l, queryKey: u, stale: d} = e;
    if (u) {
        if (i) {
            if (t.queryHash !== $f(u, t.options))
                return !1
        } else if (!Oo(t.queryKey, u))
            return !1
    }
    if (n !== "all") {
        const f = t.isActive();
        if (n === "active" && !f || n === "inactive" && f)
            return !1
    }
    return !(typeof d == "boolean" && t.isStale() !== d || o && o !== t.state.fetchStatus || l && !l(t))
}
function sy(e, t) {
    const {exact: n, status: i, predicate: o, mutationKey: l} = e;
    if (l) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (xs(t.options.mutationKey) !== xs(l))
                return !1
        } else if (!Oo(t.options.mutationKey, l))
            return !1
    }
    return !(i && t.state.status !== i || o && !o(t))
}
function $f(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || xs)(e)
}
function xs(e) {
    return JSON.stringify(e, (t, n) => Gd(n) ? Object.keys(n).sort().reduce( (i, o) => (i[o] = n[o],
    i), {}) : n)
}
function Oo(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Oo(e[n], t[n])) : !1
}
var LC = Object.prototype.hasOwnProperty;
function K0(e, t) {
    if (e === t)
        return e;
    const n = iy(e) && iy(t);
    if (!n && !(Gd(e) && Gd(t)))
        return t;
    const o = (n ? e : Object.keys(e)).length
      , l = n ? t : Object.keys(t)
      , u = l.length
      , d = n ? new Array(u) : {};
    let f = 0;
    for (let p = 0; p < u; p++) {
        const g = n ? p : l[p]
          , y = e[g]
          , v = t[g];
        if (y === v) {
            d[g] = y,
            (n ? p < o : LC.call(e, g)) && f++;
            continue
        }
        if (y === null || v === null || typeof y != "object" || typeof v != "object") {
            d[g] = v;
            continue
        }
        const x = K0(y, v);
        d[g] = x,
        x === y && f++
    }
    return o === u && f === o ? e : d
}
function $l(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function iy(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Gd(e) {
    if (!oy(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!oy(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function oy(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function MC(e) {
    return new Promise(t => {
        ss.setTimeout(t, e)
    }
    )
}
function Xd(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? K0(e, t) : t
}
function DC(e, t, n=0) {
    const i = [...e, t];
    return n && i.length > n ? i.slice(1) : i
}
function jC(e, t, n=0) {
    const i = [t, ...e];
    return n && i.length > n ? i.slice(0, -1) : i
}
var Hf = Symbol();
function Q0(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Hf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
function G0(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}
var as, Tr, ni, h0, IC = (h0 = class extends Si {
    constructor() {
        super();
        me(this, as);
        me(this, Tr);
        me(this, ni);
        ee(this, ni, t => {
            if (!ws && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, Tr) || this.setEventListener(P(this, ni))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, Tr)) == null || t.call(this),
        ee(this, Tr, void 0))
    }
    setEventListener(t) {
        var n;
        ee(this, ni, t),
        (n = P(this, Tr)) == null || n.call(this),
        ee(this, Tr, t(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        P(this, as) !== t && (ee(this, as, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof P(this, as) == "boolean" ? P(this, as) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
as = new WeakMap,
Tr = new WeakMap,
ni = new WeakMap,
h0), Wf = new IC;
function Yd() {
    let e, t;
    const n = new Promise( (o, l) => {
        e = o,
        t = l
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function i(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        i({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        i({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
var FC = NC;
function VC() {
    let e = []
      , t = 0
      , n = d => {
        d()
    }
      , i = d => {
        d()
    }
      , o = FC;
    const l = d => {
        t ? e.push(d) : o( () => {
            n(d)
        }
        )
    }
      , u = () => {
        const d = e;
        e = [],
        d.length && o( () => {
            i( () => {
                d.forEach(f => {
                    n(f)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: d => {
            let f;
            t++;
            try {
                f = d()
            } finally {
                t--,
                t || u()
            }
            return f
        }
        ,
        batchCalls: d => (...f) => {
            l( () => {
                d(...f)
            }
            )
        }
        ,
        schedule: l,
        setNotifyFunction: d => {
            n = d
        }
        ,
        setBatchNotifyFunction: d => {
            i = d
        }
        ,
        setScheduler: d => {
            o = d
        }
    }
}
var st = VC(), ri, Pr, si, p0, BC = (p0 = class extends Si {
    constructor() {
        super();
        me(this, ri, !0);
        me(this, Pr);
        me(this, si);
        ee(this, si, t => {
            if (!ws && window.addEventListener) {
                const n = () => t(!0)
                  , i = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", i)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, Pr) || this.setEventListener(P(this, si))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, Pr)) == null || t.call(this),
        ee(this, Pr, void 0))
    }
    setEventListener(t) {
        var n;
        ee(this, si, t),
        (n = P(this, Pr)) == null || n.call(this),
        ee(this, Pr, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        P(this, ri) !== t && (ee(this, ri, t),
        this.listeners.forEach(i => {
            i(t)
        }
        ))
    }
    isOnline() {
        return P(this, ri)
    }
}
,
ri = new WeakMap,
Pr = new WeakMap,
si = new WeakMap,
p0), Hl = new BC;
function UC(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function X0(e) {
    return (e ?? "online") === "online" ? Hl.isOnline() : !0
}
var Jd = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Y0(e) {
    let t = !1, n = 0, i;
    const o = Yd()
      , l = () => o.status !== "pending"
      , u = C => {
        var E;
        if (!l()) {
            const T = new Jd(C);
            v(T),
            (E = e.onCancel) == null || E.call(e, T)
        }
    }
      , d = () => {
        t = !0
    }
      , f = () => {
        t = !1
    }
      , p = () => Wf.isFocused() && (e.networkMode === "always" || Hl.isOnline()) && e.canRun()
      , g = () => X0(e.networkMode) && e.canRun()
      , y = C => {
        l() || (i == null || i(),
        o.resolve(C))
    }
      , v = C => {
        l() || (i == null || i(),
        o.reject(C))
    }
      , x = () => new Promise(C => {
        var E;
        i = T => {
            (l() || p()) && C(T)
        }
        ,
        (E = e.onPause) == null || E.call(e)
    }
    ).then( () => {
        var C;
        i = void 0,
        l() || (C = e.onContinue) == null || C.call(e)
    }
    )
      , b = () => {
        if (l())
            return;
        let C;
        const E = n === 0 ? e.initialPromise : void 0;
        try {
            C = E ?? e.fn()
        } catch (T) {
            C = Promise.reject(T)
        }
        Promise.resolve(C).then(y).catch(T => {
            var G;
            if (l())
                return;
            const M = e.retry ?? (ws ? 0 : 3)
              , O = e.retryDelay ?? UC
              , I = typeof O == "function" ? O(n, T) : O
              , z = M === !0 || typeof M == "number" && n < M || typeof M == "function" && M(n, T);
            if (t || !z) {
                v(T);
                return
            }
            n++,
            (G = e.onFail) == null || G.call(e, n, T),
            MC(I).then( () => p() ? void 0 : x()).then( () => {
                t ? v(T) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: o,
        status: () => o.status,
        cancel: u,
        continue: () => (i == null || i(),
        o),
        cancelRetry: d,
        continueRetry: f,
        canStart: g,
        start: () => (g() ? b() : x().then(b),
        o)
    }
}
var ls, m0, J0 = (m0 = class {
    constructor() {
        me(this, ls)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Qd(this.gcTime) && ee(this, ls, ss.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (ws ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        P(this, ls) && (ss.clearTimeout(P(this, ls)),
        ee(this, ls, void 0))
    }
}
,
ls = new WeakMap,
m0), us, ii, Jt, cs, lt, Vo, ds, dn, Un, g0, zC = (g0 = class extends J0 {
    constructor(t) {
        super();
        me(this, dn);
        me(this, us);
        me(this, ii);
        me(this, Jt);
        me(this, cs);
        me(this, lt);
        me(this, Vo);
        me(this, ds);
        ee(this, ds, !1),
        ee(this, Vo, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        ee(this, cs, t.client),
        ee(this, Jt, P(this, cs).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        ee(this, us, ay(this.options)),
        this.state = t.state ?? P(this, us),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = P(this, lt)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        if (this.options = {
            ...P(this, Vo),
            ...t
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const n = ay(this.options);
            n.data !== void 0 && (this.setData(n.data, {
                updatedAt: n.dataUpdatedAt,
                manual: !0
            }),
            ee(this, us, n))
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, Jt).remove(this)
    }
    setData(t, n) {
        const i = Xd(this.state.data, t, this.options);
        return Ce(this, dn, Un).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        i
    }
    setState(t, n) {
        Ce(this, dn, Un).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var i, o;
        const n = (i = P(this, lt)) == null ? void 0 : i.promise;
        return (o = P(this, lt)) == null || o.cancel(t),
        n ? n.then(Ct).catch(Ct) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(P(this, us))
    }
    isActive() {
        return this.observers.some(t => Zt(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Hf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Mr(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !q0(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(i => i.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, lt)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(i => i.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, lt)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        P(this, Jt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (P(this, lt) && (P(this, ds) ? P(this, lt).cancel({
            revert: !0
        }) : P(this, lt).cancelRetry()),
        this.scheduleGc()),
        P(this, Jt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ce(this, dn, Un).call(this, {
            type: "invalidate"
        })
    }
    async fetch(t, n) {
        var f, p, g, y, v, x, b, C, E, T, M, O;
        if (this.state.fetchStatus !== "idle" && ((f = P(this, lt)) == null ? void 0 : f.status()) !== "rejected") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (P(this, lt))
                return P(this, lt).continueRetry(),
                P(this, lt).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const I = this.observers.find(z => z.options.queryFn);
            I && this.setOptions(I.options)
        }
        const i = new AbortController
          , o = I => {
            Object.defineProperty(I, "signal", {
                enumerable: !0,
                get: () => (ee(this, ds, !0),
                i.signal)
            })
        }
          , l = () => {
            const I = Q0(this.options, n)
              , G = ( () => {
                const J = {
                    client: P(this, cs),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(J),
                J
            }
            )();
            return ee(this, ds, !1),
            this.options.persister ? this.options.persister(I, G, this) : I(G)
        }
          , d = ( () => {
            const I = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: P(this, cs),
                state: this.state,
                fetchFn: l
            };
            return o(I),
            I
        }
        )();
        (p = this.options.behavior) == null || p.onFetch(d, this),
        ee(this, ii, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((g = d.fetchOptions) == null ? void 0 : g.meta)) && Ce(this, dn, Un).call(this, {
            type: "fetch",
            meta: (y = d.fetchOptions) == null ? void 0 : y.meta
        }),
        ee(this, lt, Y0({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: d.fetchFn,
            onCancel: I => {
                I instanceof Jd && I.revert && this.setState({
                    ...P(this, ii),
                    fetchStatus: "idle"
                }),
                i.abort()
            }
            ,
            onFail: (I, z) => {
                Ce(this, dn, Un).call(this, {
                    type: "failed",
                    failureCount: I,
                    error: z
                })
            }
            ,
            onPause: () => {
                Ce(this, dn, Un).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ce(this, dn, Un).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: d.options.retry,
            retryDelay: d.options.retryDelay,
            networkMode: d.options.networkMode,
            canRun: () => !0
        }));
        try {
            const I = await P(this, lt).start();
            if (I === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(I),
            (x = (v = P(this, Jt).config).onSuccess) == null || x.call(v, I, this),
            (C = (b = P(this, Jt).config).onSettled) == null || C.call(b, I, this.state.error, this),
            I
        } catch (I) {
            if (I instanceof Jd) {
                if (I.silent)
                    return P(this, lt).promise;
                if (I.revert) {
                    if (this.state.data === void 0)
                        throw I;
                    return this.state.data
                }
            }
            throw Ce(this, dn, Un).call(this, {
                type: "error",
                error: I
            }),
            (T = (E = P(this, Jt).config).onError) == null || T.call(E, I, this),
            (O = (M = P(this, Jt).config).onSettled) == null || O.call(M, this.state.data, I, this),
            I
        } finally {
            this.scheduleGc()
        }
    }
}
,
us = new WeakMap,
ii = new WeakMap,
Jt = new WeakMap,
cs = new WeakMap,
lt = new WeakMap,
Vo = new WeakMap,
ds = new WeakMap,
dn = new WeakSet,
Un = function(t) {
    const n = i => {
        switch (t.type) {
        case "failed":
            return {
                ...i,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...i,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...i,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...i,
                ...Z0(i.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            const o = {
                ...i,
                data: t.data,
                dataUpdateCount: i.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
            return ee(this, ii, t.manual ? o : void 0),
            o;
        case "error":
            const l = t.error;
            return {
                ...i,
                error: l,
                errorUpdateCount: i.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: i.fetchFailureCount + 1,
                fetchFailureReason: l,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...i,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...i,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    st.batch( () => {
        this.observers.forEach(i => {
            i.onQueryUpdate()
        }
        ),
        P(this, Jt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
g0);
function Z0(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: X0(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function ay(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , i = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Lt, Re, Bo, bt, fs, oi, zn, Rr, Uo, ai, li, hs, ps, _r, ui, Me, So, Zd, ef, tf, nf, rf, sf, of, ew, y0, $C = (y0 = class extends Si {
    constructor(t, n) {
        super();
        me(this, Me);
        me(this, Lt);
        me(this, Re);
        me(this, Bo);
        me(this, bt);
        me(this, fs);
        me(this, oi);
        me(this, zn);
        me(this, Rr);
        me(this, Uo);
        me(this, ai);
        me(this, li);
        me(this, hs);
        me(this, ps);
        me(this, _r);
        me(this, ui, new Set);
        this.options = n,
        ee(this, Lt, t),
        ee(this, Rr, null),
        ee(this, zn, Yd()),
        this.bindMethods(),
        this.setOptions(n)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (P(this, Re).addObserver(this),
        ly(P(this, Re), this.options) ? Ce(this, Me, So).call(this) : this.updateResult(),
        Ce(this, Me, nf).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return af(P(this, Re), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return af(P(this, Re), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        Ce(this, Me, rf).call(this),
        Ce(this, Me, sf).call(this),
        P(this, Re).removeObserver(this)
    }
    setOptions(t) {
        const n = this.options
          , i = P(this, Re);
        if (this.options = P(this, Lt).defaultQueryOptions(t),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Zt(this.options.enabled, P(this, Re)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        Ce(this, Me, of).call(this),
        P(this, Re).setOptions(this.options),
        n._defaulted && !$l(this.options, n) && P(this, Lt).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: P(this, Re),
            observer: this
        });
        const o = this.hasListeners();
        o && uy(P(this, Re), i, this.options, n) && Ce(this, Me, So).call(this),
        this.updateResult(),
        o && (P(this, Re) !== i || Zt(this.options.enabled, P(this, Re)) !== Zt(n.enabled, P(this, Re)) || Mr(this.options.staleTime, P(this, Re)) !== Mr(n.staleTime, P(this, Re))) && Ce(this, Me, Zd).call(this);
        const l = Ce(this, Me, ef).call(this);
        o && (P(this, Re) !== i || Zt(this.options.enabled, P(this, Re)) !== Zt(n.enabled, P(this, Re)) || l !== P(this, _r)) && Ce(this, Me, tf).call(this, l)
    }
    getOptimisticResult(t) {
        const n = P(this, Lt).getQueryCache().build(P(this, Lt), t)
          , i = this.createResult(n, t);
        return WC(this, i) && (ee(this, bt, i),
        ee(this, oi, this.options),
        ee(this, fs, P(this, Re).state)),
        i
    }
    getCurrentResult() {
        return P(this, bt)
    }
    trackResult(t, n) {
        return new Proxy(t,{
            get: (i, o) => (this.trackProp(o),
            n == null || n(o),
            o === "promise" && !this.options.experimental_prefetchInRender && P(this, zn).status === "pending" && P(this, zn).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
            Reflect.get(i, o))
        })
    }
    trackProp(t) {
        P(this, ui).add(t)
    }
    getCurrentQuery() {
        return P(this, Re)
    }
    refetch({...t}={}) {
        return this.fetch({
            ...t
        })
    }
    fetchOptimistic(t) {
        const n = P(this, Lt).defaultQueryOptions(t)
          , i = P(this, Lt).getQueryCache().build(P(this, Lt), n);
        return i.fetch().then( () => this.createResult(i, n))
    }
    fetch(t) {
        return Ce(this, Me, So).call(this, {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        P(this, bt)))
    }
    createResult(t, n) {
        var D;
        const i = P(this, Re)
          , o = this.options
          , l = P(this, bt)
          , u = P(this, fs)
          , d = P(this, oi)
          , p = t !== i ? t.state : P(this, Bo)
          , {state: g} = t;
        let y = {
            ...g
        }, v = !1, x;
        if (n._optimisticResults) {
            const $ = this.hasListeners()
              , Y = !$ && ly(t, n)
              , H = $ && uy(t, i, n, o);
            (Y || H) && (y = {
                ...y,
                ...Z0(g.data, t.options)
            }),
            n._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {error: b, errorUpdatedAt: C, status: E} = y;
        x = y.data;
        let T = !1;
        if (n.placeholderData !== void 0 && x === void 0 && E === "pending") {
            let $;
            l != null && l.isPlaceholderData && n.placeholderData === (d == null ? void 0 : d.placeholderData) ? ($ = l.data,
            T = !0) : $ = typeof n.placeholderData == "function" ? n.placeholderData((D = P(this, li)) == null ? void 0 : D.state.data, P(this, li)) : n.placeholderData,
            $ !== void 0 && (E = "success",
            x = Xd(l == null ? void 0 : l.data, $, n),
            v = !0)
        }
        if (n.select && x !== void 0 && !T)
            if (l && x === (u == null ? void 0 : u.data) && n.select === P(this, Uo))
                x = P(this, ai);
            else
                try {
                    ee(this, Uo, n.select),
                    x = n.select(x),
                    x = Xd(l == null ? void 0 : l.data, x, n),
                    ee(this, ai, x),
                    ee(this, Rr, null)
                } catch ($) {
                    ee(this, Rr, $)
                }
        P(this, Rr) && (b = P(this, Rr),
        x = P(this, ai),
        C = Date.now(),
        E = "error");
        const M = y.fetchStatus === "fetching"
          , O = E === "pending"
          , I = E === "error"
          , z = O && M
          , G = x !== void 0
          , _ = {
            status: E,
            fetchStatus: y.fetchStatus,
            isPending: O,
            isSuccess: E === "success",
            isError: I,
            isInitialLoading: z,
            isLoading: z,
            data: x,
            dataUpdatedAt: y.dataUpdatedAt,
            error: b,
            errorUpdatedAt: C,
            failureCount: y.fetchFailureCount,
            failureReason: y.fetchFailureReason,
            errorUpdateCount: y.errorUpdateCount,
            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
            isFetchedAfterMount: y.dataUpdateCount > p.dataUpdateCount || y.errorUpdateCount > p.errorUpdateCount,
            isFetching: M,
            isRefetching: M && !O,
            isLoadingError: I && !G,
            isPaused: y.fetchStatus === "paused",
            isPlaceholderData: v,
            isRefetchError: I && G,
            isStale: qf(t, n),
            refetch: this.refetch,
            promise: P(this, zn),
            isEnabled: Zt(n.enabled, t) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const $ = ne => {
                _.status === "error" ? ne.reject(_.error) : _.data !== void 0 && ne.resolve(_.data)
            }
              , Y = () => {
                const ne = ee(this, zn, _.promise = Yd());
                $(ne)
            }
              , H = P(this, zn);
            switch (H.status) {
            case "pending":
                t.queryHash === i.queryHash && $(H);
                break;
            case "fulfilled":
                (_.status === "error" || _.data !== H.value) && Y();
                break;
            case "rejected":
                (_.status !== "error" || _.error !== H.reason) && Y();
                break
            }
        }
        return _
    }
    updateResult() {
        const t = P(this, bt)
          , n = this.createResult(P(this, Re), this.options);
        if (ee(this, fs, P(this, Re).state),
        ee(this, oi, this.options),
        P(this, fs).data !== void 0 && ee(this, li, P(this, Re)),
        $l(n, t))
            return;
        ee(this, bt, n);
        const i = () => {
            if (!t)
                return !0;
            const {notifyOnChangeProps: o} = this.options
              , l = typeof o == "function" ? o() : o;
            if (l === "all" || !l && !P(this, ui).size)
                return !0;
            const u = new Set(l ?? P(this, ui));
            return this.options.throwOnError && u.add("error"),
            Object.keys(P(this, bt)).some(d => {
                const f = d;
                return P(this, bt)[f] !== t[f] && u.has(f)
            }
            )
        }
        ;
        Ce(this, Me, ew).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && Ce(this, Me, nf).call(this)
    }
}
,
Lt = new WeakMap,
Re = new WeakMap,
Bo = new WeakMap,
bt = new WeakMap,
fs = new WeakMap,
oi = new WeakMap,
zn = new WeakMap,
Rr = new WeakMap,
Uo = new WeakMap,
ai = new WeakMap,
li = new WeakMap,
hs = new WeakMap,
ps = new WeakMap,
_r = new WeakMap,
ui = new WeakMap,
Me = new WeakSet,
So = function(t) {
    Ce(this, Me, of).call(this);
    let n = P(this, Re).fetch(this.options, t);
    return t != null && t.throwOnError || (n = n.catch(Ct)),
    n
}
,
Zd = function() {
    Ce(this, Me, rf).call(this);
    const t = Mr(this.options.staleTime, P(this, Re));
    if (ws || P(this, bt).isStale || !Qd(t))
        return;
    const i = q0(P(this, bt).dataUpdatedAt, t) + 1;
    ee(this, hs, ss.setTimeout( () => {
        P(this, bt).isStale || this.updateResult()
    }
    , i))
}
,
ef = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(P(this, Re)) : this.options.refetchInterval) ?? !1
}
,
tf = function(t) {
    Ce(this, Me, sf).call(this),
    ee(this, _r, t),
    !(ws || Zt(this.options.enabled, P(this, Re)) === !1 || !Qd(P(this, _r)) || P(this, _r) === 0) && ee(this, ps, ss.setInterval( () => {
        (this.options.refetchIntervalInBackground || Wf.isFocused()) && Ce(this, Me, So).call(this)
    }
    , P(this, _r)))
}
,
nf = function() {
    Ce(this, Me, Zd).call(this),
    Ce(this, Me, tf).call(this, Ce(this, Me, ef).call(this))
}
,
rf = function() {
    P(this, hs) && (ss.clearTimeout(P(this, hs)),
    ee(this, hs, void 0))
}
,
sf = function() {
    P(this, ps) && (ss.clearInterval(P(this, ps)),
    ee(this, ps, void 0))
}
,
of = function() {
    const t = P(this, Lt).getQueryCache().build(P(this, Lt), this.options);
    if (t === P(this, Re))
        return;
    const n = P(this, Re);
    ee(this, Re, t),
    ee(this, Bo, t.state),
    this.hasListeners() && (n == null || n.removeObserver(this),
    t.addObserver(this))
}
,
ew = function(t) {
    st.batch( () => {
        t.listeners && this.listeners.forEach(n => {
            n(P(this, bt))
        }
        ),
        P(this, Lt).getQueryCache().notify({
            query: P(this, Re),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
y0);
function HC(e, t) {
    return Zt(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1)
}
function ly(e, t) {
    return HC(e, t) || e.state.data !== void 0 && af(e, t, t.refetchOnMount)
}
function af(e, t, n) {
    if (Zt(t.enabled, e) !== !1 && Mr(t.staleTime, e) !== "static") {
        const i = typeof n == "function" ? n(e) : n;
        return i === "always" || i !== !1 && qf(e, t)
    }
    return !1
}
function uy(e, t, n, i) {
    return (e !== t || Zt(i.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && qf(e, n)
}
function qf(e, t) {
    return Zt(t.enabled, e) !== !1 && e.isStaleByTime(Mr(t.staleTime, e))
}
function WC(e, t) {
    return !$l(e.getCurrentResult(), t)
}
function cy(e) {
    return {
        onFetch: (t, n) => {
            var g, y, v, x, b;
            const i = t.options
              , o = (v = (y = (g = t.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : v.direction
              , l = ((x = t.state.data) == null ? void 0 : x.pages) || []
              , u = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
            let d = {
                pages: [],
                pageParams: []
            }
              , f = 0;
            const p = async () => {
                let C = !1;
                const E = O => {
                    Object.defineProperty(O, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? C = !0 : t.signal.addEventListener("abort", () => {
                            C = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , T = Q0(t.options, t.fetchOptions)
                  , M = async (O, I, z) => {
                    if (C)
                        return Promise.reject();
                    if (I == null && O.pages.length)
                        return Promise.resolve(O);
                    const J = ( () => {
                        const Y = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: I,
                            direction: z ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return E(Y),
                        Y
                    }
                    )()
                      , _ = await T(J)
                      , {maxPages: D} = t.options
                      , $ = z ? jC : DC;
                    return {
                        pages: $(O.pages, _, D),
                        pageParams: $(O.pageParams, I, D)
                    }
                }
                ;
                if (o && l.length) {
                    const O = o === "backward"
                      , I = O ? qC : dy
                      , z = {
                        pages: l,
                        pageParams: u
                    }
                      , G = I(i, z);
                    d = await M(z, G, O)
                } else {
                    const O = e ?? l.length;
                    do {
                        const I = f === 0 ? u[0] ?? i.initialPageParam : dy(i, d);
                        if (f > 0 && I == null)
                            break;
                        d = await M(d, I),
                        f++
                    } while (f < O)
                }
                return d
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var C, E;
                return (E = (C = t.options).persister) == null ? void 0 : E.call(C, p, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = p
        }
    }
}
function dy(e, {pages: t, pageParams: n}) {
    const i = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[i], t, n[i], n) : void 0
}
function qC(e, {pages: t, pageParams: n}) {
    var i;
    return t.length > 0 ? (i = e.getPreviousPageParam) == null ? void 0 : i.call(e, t[0], t, n[0], n) : void 0
}
var zo, Sn, Et, ms, bn, Er, v0, KC = (v0 = class extends J0 {
    constructor(t) {
        super();
        me(this, bn);
        me(this, zo);
        me(this, Sn);
        me(this, Et);
        me(this, ms);
        ee(this, zo, t.client),
        this.mutationId = t.mutationId,
        ee(this, Et, t.mutationCache),
        ee(this, Sn, []),
        this.state = t.state || tw(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        P(this, Sn).includes(t) || (P(this, Sn).push(t),
        this.clearGcTimeout(),
        P(this, Et).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        ee(this, Sn, P(this, Sn).filter(n => n !== t)),
        this.scheduleGc(),
        P(this, Et).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        P(this, Sn).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Et).remove(this))
    }
    continue() {
        var t;
        return ((t = P(this, ms)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var u, d, f, p, g, y, v, x, b, C, E, T, M, O, I, z, G, J, _, D;
        const n = () => {
            Ce(this, bn, Er).call(this, {
                type: "continue"
            })
        }
          , i = {
            client: P(this, zo),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        ee(this, ms, Y0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: ($, Y) => {
                Ce(this, bn, Er).call(this, {
                    type: "failed",
                    failureCount: $,
                    error: Y
                })
            }
            ,
            onPause: () => {
                Ce(this, bn, Er).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Et).canRun(this)
        }));
        const o = this.state.status === "pending"
          , l = !P(this, ms).canStart();
        try {
            if (o)
                n();
            else {
                Ce(this, bn, Er).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: l
                }),
                await ((d = (u = P(this, Et).config).onMutate) == null ? void 0 : d.call(u, t, this, i));
                const Y = await ((p = (f = this.options).onMutate) == null ? void 0 : p.call(f, t, i));
                Y !== this.state.context && Ce(this, bn, Er).call(this, {
                    type: "pending",
                    context: Y,
                    variables: t,
                    isPaused: l
                })
            }
            const $ = await P(this, ms).start();
            return await ((y = (g = P(this, Et).config).onSuccess) == null ? void 0 : y.call(g, $, t, this.state.context, this, i)),
            await ((x = (v = this.options).onSuccess) == null ? void 0 : x.call(v, $, t, this.state.context, i)),
            await ((C = (b = P(this, Et).config).onSettled) == null ? void 0 : C.call(b, $, null, this.state.variables, this.state.context, this, i)),
            await ((T = (E = this.options).onSettled) == null ? void 0 : T.call(E, $, null, t, this.state.context, i)),
            Ce(this, bn, Er).call(this, {
                type: "success",
                data: $
            }),
            $
        } catch ($) {
            try {
                throw await ((O = (M = P(this, Et).config).onError) == null ? void 0 : O.call(M, $, t, this.state.context, this, i)),
                await ((z = (I = this.options).onError) == null ? void 0 : z.call(I, $, t, this.state.context, i)),
                await ((J = (G = P(this, Et).config).onSettled) == null ? void 0 : J.call(G, void 0, $, this.state.variables, this.state.context, this, i)),
                await ((D = (_ = this.options).onSettled) == null ? void 0 : D.call(_, void 0, $, t, this.state.context, i)),
                $
            } finally {
                Ce(this, bn, Er).call(this, {
                    type: "error",
                    error: $
                })
            }
        } finally {
            P(this, Et).runNext(this)
        }
    }
}
,
zo = new WeakMap,
Sn = new WeakMap,
Et = new WeakMap,
ms = new WeakMap,
bn = new WeakSet,
Er = function(t) {
    const n = i => {
        switch (t.type) {
        case "failed":
            return {
                ...i,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...i,
                isPaused: !0
            };
        case "continue":
            return {
                ...i,
                isPaused: !1
            };
        case "pending":
            return {
                ...i,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...i,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...i,
                data: void 0,
                error: t.error,
                failureCount: i.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    st.batch( () => {
        P(this, Sn).forEach(i => {
            i.onMutationUpdate(t)
        }
        ),
        P(this, Et).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
v0);
function tw() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var $n, fn, $o, w0, QC = (w0 = class extends Si {
    constructor(t={}) {
        super();
        me(this, $n);
        me(this, fn);
        me(this, $o);
        this.config = t,
        ee(this, $n, new Set),
        ee(this, fn, new Map),
        ee(this, $o, 0)
    }
    build(t, n, i) {
        const o = new KC({
            client: t,
            mutationCache: this,
            mutationId: ++hl(this, $o)._,
            options: t.defaultMutationOptions(n),
            state: i
        });
        return this.add(o),
        o
    }
    add(t) {
        P(this, $n).add(t);
        const n = yl(t);
        if (typeof n == "string") {
            const i = P(this, fn).get(n);
            i ? i.push(t) : P(this, fn).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (P(this, $n).delete(t)) {
            const n = yl(t);
            if (typeof n == "string") {
                const i = P(this, fn).get(n);
                if (i)
                    if (i.length > 1) {
                        const o = i.indexOf(t);
                        o !== -1 && i.splice(o, 1)
                    } else
                        i[0] === t && P(this, fn).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = yl(t);
        if (typeof n == "string") {
            const i = P(this, fn).get(n)
              , o = i == null ? void 0 : i.find(l => l.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var i;
        const n = yl(t);
        if (typeof n == "string") {
            const o = (i = P(this, fn).get(n)) == null ? void 0 : i.find(l => l !== t && l.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        st.batch( () => {
            P(this, $n).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            P(this, $n).clear(),
            P(this, fn).clear()
        }
        )
    }
    getAll() {
        return Array.from(P(this, $n))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(i => sy(n, i))
    }
    findAll(t={}) {
        return this.getAll().filter(n => sy(t, n))
    }
    notify(t) {
        st.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return st.batch( () => Promise.all(t.map(n => n.continue().catch(Ct))))
    }
}
,
$n = new WeakMap,
fn = new WeakMap,
$o = new WeakMap,
w0);
function yl(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
var Hn, Ar, Mt, Wn, Xn, _l, lf, x0, GC = (x0 = class extends Si {
    constructor(n, i) {
        super();
        me(this, Xn);
        me(this, Hn);
        me(this, Ar);
        me(this, Mt);
        me(this, Wn);
        ee(this, Hn, n),
        this.setOptions(i),
        this.bindMethods(),
        Ce(this, Xn, _l).call(this)
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(n) {
        var o;
        const i = this.options;
        this.options = P(this, Hn).defaultMutationOptions(n),
        $l(this.options, i) || P(this, Hn).getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: P(this, Mt),
            observer: this
        }),
        i != null && i.mutationKey && this.options.mutationKey && xs(i.mutationKey) !== xs(this.options.mutationKey) ? this.reset() : ((o = P(this, Mt)) == null ? void 0 : o.state.status) === "pending" && P(this, Mt).setOptions(this.options)
    }
    onUnsubscribe() {
        var n;
        this.hasListeners() || (n = P(this, Mt)) == null || n.removeObserver(this)
    }
    onMutationUpdate(n) {
        Ce(this, Xn, _l).call(this),
        Ce(this, Xn, lf).call(this, n)
    }
    getCurrentResult() {
        return P(this, Ar)
    }
    reset() {
        var n;
        (n = P(this, Mt)) == null || n.removeObserver(this),
        ee(this, Mt, void 0),
        Ce(this, Xn, _l).call(this),
        Ce(this, Xn, lf).call(this)
    }
    mutate(n, i) {
        var o;
        return ee(this, Wn, i),
        (o = P(this, Mt)) == null || o.removeObserver(this),
        ee(this, Mt, P(this, Hn).getMutationCache().build(P(this, Hn), this.options)),
        P(this, Mt).addObserver(this),
        P(this, Mt).execute(n)
    }
}
,
Hn = new WeakMap,
Ar = new WeakMap,
Mt = new WeakMap,
Wn = new WeakMap,
Xn = new WeakSet,
_l = function() {
    var i;
    const n = ((i = P(this, Mt)) == null ? void 0 : i.state) ?? tw();
    ee(this, Ar, {
        ...n,
        isPending: n.status === "pending",
        isSuccess: n.status === "success",
        isError: n.status === "error",
        isIdle: n.status === "idle",
        mutate: this.mutate,
        reset: this.reset
    })
}
,
lf = function(n) {
    st.batch( () => {
        var i, o, l, u, d, f, p, g;
        if (P(this, Wn) && this.hasListeners()) {
            const y = P(this, Ar).variables
              , v = P(this, Ar).context
              , x = {
                client: P(this, Hn),
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
            (n == null ? void 0 : n.type) === "success" ? ((o = (i = P(this, Wn)).onSuccess) == null || o.call(i, n.data, y, v, x),
            (u = (l = P(this, Wn)).onSettled) == null || u.call(l, n.data, null, y, v, x)) : (n == null ? void 0 : n.type) === "error" && ((f = (d = P(this, Wn)).onError) == null || f.call(d, n.error, y, v, x),
            (g = (p = P(this, Wn)).onSettled) == null || g.call(p, void 0, n.error, y, v, x))
        }
        this.listeners.forEach(y => {
            y(P(this, Ar))
        }
        )
    }
    )
}
,
x0), En, S0, XC = (S0 = class extends Si {
    constructor(t={}) {
        super();
        me(this, En);
        this.config = t,
        ee(this, En, new Map)
    }
    build(t, n, i) {
        const o = n.queryKey
          , l = n.queryHash ?? $f(o, n);
        let u = this.get(l);
        return u || (u = new zC({
            client: t,
            queryKey: o,
            queryHash: l,
            options: t.defaultQueryOptions(n),
            state: i,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(u)),
        u
    }
    add(t) {
        P(this, En).has(t.queryHash) || (P(this, En).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = P(this, En).get(t.queryHash);
        n && (t.destroy(),
        n === t && P(this, En).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        st.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return P(this, En).get(t)
    }
    getAll() {
        return [...P(this, En).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(i => ry(n, i))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(i => ry(t, i)) : n
    }
    notify(t) {
        st.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        st.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        st.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
En = new WeakMap,
S0), qe, Nr, Or, ci, di, Lr, fi, hi, b0, YC = (b0 = class {
    constructor(e={}) {
        me(this, qe);
        me(this, Nr);
        me(this, Or);
        me(this, ci);
        me(this, di);
        me(this, Lr);
        me(this, fi);
        me(this, hi);
        ee(this, qe, e.queryCache || new XC),
        ee(this, Nr, e.mutationCache || new QC),
        ee(this, Or, e.defaultOptions || {}),
        ee(this, ci, new Map),
        ee(this, di, new Map),
        ee(this, Lr, 0)
    }
    mount() {
        hl(this, Lr)._++,
        P(this, Lr) === 1 && (ee(this, fi, Wf.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, qe).onFocus())
        }
        )),
        ee(this, hi, Hl.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, qe).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        hl(this, Lr)._--,
        P(this, Lr) === 0 && ((e = P(this, fi)) == null || e.call(this),
        ee(this, fi, void 0),
        (t = P(this, hi)) == null || t.call(this),
        ee(this, hi, void 0))
    }
    isFetching(e) {
        return P(this, qe).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return P(this, Nr).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, qe).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = P(this, qe).build(this, t)
          , i = n.state.data;
        return i === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Mr(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(i))
    }
    getQueriesData(e) {
        return P(this, qe).findAll(e).map( ({queryKey: t, state: n}) => {
            const i = n.data;
            return [t, i]
        }
        )
    }
    setQueryData(e, t, n) {
        const i = this.defaultQueryOptions({
            queryKey: e
        })
          , o = P(this, qe).get(i.queryHash)
          , l = o == null ? void 0 : o.state.data
          , u = OC(t, l);
        if (u !== void 0)
            return P(this, qe).build(this, i).setData(u, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return st.batch( () => P(this, qe).findAll(e).map( ({queryKey: i}) => [i, this.setQueryData(i, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, qe).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = P(this, qe);
        st.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = P(this, qe);
        return st.batch( () => (n.findAll(e).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , i = st.batch( () => P(this, qe).findAll(e).map(o => o.cancel(n)));
        return Promise.all(i).then(Ct).catch(Ct)
    }
    invalidateQueries(e, t={}) {
        return st.batch( () => (P(this, qe).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , i = st.batch( () => P(this, qe).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let l = o.fetch(void 0, n);
            return n.throwOnError || (l = l.catch(Ct)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : l
        }
        ));
        return Promise.all(i).then(Ct)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, qe).build(this, t);
        return n.isStaleByTime(Mr(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Ct).catch(Ct)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = cy(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Ct).catch(Ct)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = cy(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Hl.isOnline() ? P(this, Nr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, qe)
    }
    getMutationCache() {
        return P(this, Nr)
    }
    getDefaultOptions() {
        return P(this, Or)
    }
    setDefaultOptions(e) {
        ee(this, Or, e)
    }
    setQueryDefaults(e, t) {
        P(this, ci).set(xs(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...P(this, ci).values()]
          , n = {};
        return t.forEach(i => {
            Oo(e, i.queryKey) && Object.assign(n, i.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        P(this, di).set(xs(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...P(this, di).values()]
          , n = {};
        return t.forEach(i => {
            Oo(e, i.mutationKey) && Object.assign(n, i.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...P(this, Or).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = $f(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Hf && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...P(this, Or).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        P(this, qe).clear(),
        P(this, Nr).clear()
    }
}
,
qe = new WeakMap,
Nr = new WeakMap,
Or = new WeakMap,
ci = new WeakMap,
di = new WeakMap,
Lr = new WeakMap,
fi = new WeakMap,
hi = new WeakMap,
b0), nw = S.createContext(void 0), Kf = e => {
    const t = S.useContext(nw);
    if (!t)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t
}
, JC = ({client: e, children: t}) => (S.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
R.jsx(nw.Provider, {
    value: e,
    children: t
})), rw = S.createContext(!1), ZC = () => S.useContext(rw);
rw.Provider;
function ek() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        }
        ,
        reset: () => {
            e = !0
        }
        ,
        isReset: () => e
    }
}
var tk = S.createContext(ek())
  , nk = () => S.useContext(tk)
  , rk = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1))
}
  , sk = e => {
    S.useEffect( () => {
        e.clearReset()
    }
    , [e])
}
  , ik = ({result: e, errorResetBoundary: t, throwOnError: n, query: i, suspense: o}) => e.isError && !t.isReset() && !e.isFetching && i && (o && e.data === void 0 || G0(n, [e.error, i]))
  , ok = e => {
    if (e.suspense) {
        const n = o => o === "static" ? o : Math.max(o ?? 1e3, 1e3)
          , i = e.staleTime;
        e.staleTime = typeof i == "function" ? (...o) => n(i(...o)) : n(i),
        typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3))
    }
}
  , ak = (e, t) => e.isLoading && e.isFetching && !t
  , lk = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending
  , fy = (e, t, n) => t.fetchOptimistic(e).catch( () => {
    n.clearReset()
}
);
function uk(e, t, n) {
    var y, v, x, b, C;
    const i = ZC()
      , o = nk()
      , l = Kf()
      , u = l.defaultQueryOptions(e);
    (v = (y = l.getDefaultOptions().queries) == null ? void 0 : y._experimental_beforeQuery) == null || v.call(y, u),
    u._optimisticResults = i ? "isRestoring" : "optimistic",
    ok(u),
    rk(u, o),
    sk(o);
    const d = !l.getQueryCache().get(u.queryHash)
      , [f] = S.useState( () => new t(l,u))
      , p = f.getOptimisticResult(u)
      , g = !i && e.subscribed !== !1;
    if (S.useSyncExternalStore(S.useCallback(E => {
        const T = g ? f.subscribe(st.batchCalls(E)) : Ct;
        return f.updateResult(),
        T
    }
    , [f, g]), () => f.getCurrentResult(), () => f.getCurrentResult()),
    S.useEffect( () => {
        f.setOptions(u)
    }
    , [u, f]),
    lk(u, p))
        throw fy(u, f, o);
    if (ik({
        result: p,
        errorResetBoundary: o,
        throwOnError: u.throwOnError,
        query: l.getQueryCache().get(u.queryHash),
        suspense: u.suspense
    }))
        throw p.error;
    if ((b = (x = l.getDefaultOptions().queries) == null ? void 0 : x._experimental_afterQuery) == null || b.call(x, u, p),
    u.experimental_prefetchInRender && !ws && ak(p, i)) {
        const E = d ? fy(u, f, o) : (C = l.getQueryCache().get(u.queryHash)) == null ? void 0 : C.promise;
        E == null || E.catch(Ct).finally( () => {
            f.updateResult()
        }
        )
    }
    return u.notifyOnChangeProps ? p : f.trackResult(p)
}
function sw(e, t) {
    return uk(e, $C)
}
function ck(e, t) {
    const n = Kf()
      , [i] = S.useState( () => new GC(n,e));
    S.useEffect( () => {
        i.setOptions(e)
    }
    , [i, e]);
    const o = S.useSyncExternalStore(S.useCallback(u => i.subscribe(st.batchCalls(u)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult())
      , l = S.useCallback( (u, d) => {
        i.mutate(u, d).catch(Ct)
    }
    , [i]);
    if (o.error && G0(i.options.throwOnError, [o.error]))
        throw o.error;
    return {
        ...o,
        mutate: l,
        mutateAsync: o.mutate
    }
}
const dk = new YC({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
function fk() {
    const [e,t] = S.useState(!1)
      , n = S.useRef(!1)
      , [i,o] = S.useState(!1)
      , l = S.useRef(!1)
      , [u,d] = S.useState(!1)
      , f = S.useRef(!1)
      , p = S.useRef([])
      , g = S.useRef([])
      , y = S.useRef([])
      , v = S.useRef(null)
      , x = (_=!1) => {
        const D = document.createElement("div");
        return D.style.position = "absolute",
        D.style.pointerEvents = "none",
        D.style.transition = "all 0.1s ease-in-out",
        D.style.zIndex = "9999",
        _ ? D.style.border = "2px solid #2563EB" : (D.style.border = "2px solid #95a5fc",
        D.style.backgroundColor = "rgba(99, 102, 241, 0.05)"),
        D
    }
      , b = (_, D, $=!1) => {
        if (!D || !n.current)
            return;
        D.offsetWidth;
        const Y = D.getBoundingClientRect();
        _.style.top = `${Y.top + window.scrollY}px`,
        _.style.left = `${Y.left + window.scrollX}px`,
        _.style.width = `${Y.width}px`,
        _.style.height = `${Y.height}px`;
        let H = _.querySelector("div");
        H || (H = document.createElement("div"),
        H.textContent = D.tagName.toLowerCase(),
        H.style.position = "absolute",
        H.style.top = "-27px",
        H.style.left = "-2px",
        H.style.padding = "2px 8px",
        H.style.fontSize = "11px",
        H.style.fontWeight = $ ? "500" : "400",
        H.style.color = $ ? "#ffffff" : "#526cff",
        H.style.backgroundColor = $ ? "#526cff" : "#DBEAFE",
        H.style.borderRadius = "3px",
        H.style.boxShadow = "none",
        H.style.minWidth = "24px",
        H.style.textAlign = "center",
        _.appendChild(H))
    }
      , C = _ => {
        if (!_)
            return [];
        const D = [...document.querySelectorAll(`[data-source-location="${_}"]`)];
        return D.length > 0 ? D : [...document.querySelectorAll(`[data-visual-selector-id="${_}"]`)]
    }
      , E = () => {
        p.current.forEach(_ => {
            _ && _.parentNode && _.remove()
        }
        ),
        p.current = [],
        y.current = []
    }
      , T = _ => {
        if (!n.current || l.current)
            return;
        if (f.current) {
            E();
            return
        }
        if (_.target.tagName.toLowerCase() === "path") {
            E();
            return
        }
        const D = _.target.closest("[data-source-location], [data-visual-selector-id]");
        if (!D) {
            E();
            return
        }
        const $ = D.dataset.sourceLocation || D.dataset.visualSelectorId;
        if (D.dataset.sourceLocation,
        v.current === $) {
            E();
            return
        }
        const Y = C($);
        E(),
        Y.forEach(H => {
            const ne = x(!1);
            document.body.appendChild(ne),
            p.current.push(ne),
            b(ne, H)
        }
        ),
        y.current = Y
    }
      , M = () => {
        l.current || E()
    }
      , O = _ => {
        var fe;
        if (!n.current)
            return;
        if (f.current) {
            _.preventDefault(),
            _.stopPropagation(),
            _.stopImmediatePropagation(),
            window.parent.postMessage({
                type: "close-dropdowns"
            }, "*");
            return
        }
        if (_.target.tagName.toLowerCase() === "path")
            return;
        _.preventDefault(),
        _.stopPropagation(),
        _.stopImmediatePropagation();
        const D = _.target.closest("[data-source-location], [data-visual-selector-id]");
        if (!D)
            return;
        const $ = D.dataset.sourceLocation || D.dataset.visualSelectorId;
        D.dataset.sourceLocation,
        g.current.forEach(he => {
            he && he.parentNode && he.remove()
        }
        ),
        g.current = [],
        C($).forEach(he => {
            const de = x(!0);
            document.body.appendChild(de),
            g.current.push(de),
            b(de, he, !0)
        }
        ),
        v.current = $,
        E();
        const H = D.getBoundingClientRect()
          , ne = {
            top: H.top,
            left: H.left,
            right: H.right,
            bottom: H.bottom,
            width: H.width,
            height: H.height,
            centerX: H.left + H.width / 2,
            centerY: H.top + H.height / 2
        }
          , we = {
            type: "element-selected",
            tagName: D.tagName,
            classes: ((fe = D.className) == null ? void 0 : fe.baseVal) || D.className || "",
            visualSelectorId: $,
            content: D.innerText,
            dataSourceLocation: D.dataset.sourceLocation,
            isDynamicContent: D.dataset.dynamicContent === "true",
            linenumber: D.dataset.linenumber,
            filename: D.dataset.filename,
            position: ne
        };
        window.parent.postMessage(we, "*")
    }
      , I = () => {
        g.current.forEach(_ => {
            _ && _.parentNode && _.remove()
        }
        ),
        g.current = [],
        v.current = null
    }
      , z = (_, D, $=!1) => {
        const Y = C(_);
        Y.length !== 0 && (Y.forEach(H => {
            var ne;
            if ($)
                H.className = D;
            else {
                const we = ((ne = H.className) == null ? void 0 : ne.baseVal) || H.className || "";
                H.className = V0(we, D)
            }
        }
        ),
        setTimeout( () => {
            var H, ne;
            v.current === _ && g.current.forEach( (we, fe) => {
                fe < Y.length && b(we, Y[fe])
            }
            ),
            y.current.length > 0 && ((ne = (H = y.current[0]) == null ? void 0 : H.dataset) == null ? void 0 : ne.visualSelectorId) === _ && p.current.forEach( (fe, he) => {
                he < y.current.length && b(fe, y.current[he])
            }
            )
        }
        , 50))
    }
      , G = (_, D) => {
        const $ = C(_);
        $.length !== 0 && ($.forEach(Y => {
            Y.innerText = D
        }
        ),
        setTimeout( () => {
            v.current === _ && g.current.forEach( (Y, H) => {
                H < $.length && b(Y, $[H])
            }
            )
        }
        , 50))
    }
      , J = _ => {
        t(_),
        n.current = _,
        _ ? (document.body.style.cursor = "crosshair",
        document.addEventListener("mouseover", T),
        document.addEventListener("mouseout", M),
        document.addEventListener("click", O, !0)) : (E(),
        g.current.forEach(D => {
            D && D.parentNode && D.remove()
        }
        ),
        g.current = [],
        y.current = [],
        v.current = null,
        document.body.style.cursor = "default",
        document.removeEventListener("mouseover", T),
        document.removeEventListener("mouseout", M),
        document.removeEventListener("click", O, !0))
    }
    ;
    return S.useEffect( () => {
        document.querySelectorAll("[data-linenumber]:not([data-visual-selector-id])").forEach( (Y, H) => {
            const ne = `visual-id-${Y.dataset.filename}-${Y.dataset.linenumber}-${H}`;
            Y.dataset.visualSelectorId = ne
        }
        );
        const D = () => {
            if (v.current) {
                const Y = C(v.current);
                if (Y.length > 0) {
                    const ne = Y[0].getBoundingClientRect()
                      , we = window.innerHeight
                      , fe = window.innerWidth
                      , he = ne.top < we && ne.bottom > 0 && ne.left < fe && ne.right > 0
                      , de = {
                        top: ne.top,
                        left: ne.left,
                        right: ne.right,
                        bottom: ne.bottom,
                        width: ne.width,
                        height: ne.height,
                        centerX: ne.left + ne.width / 2,
                        centerY: ne.top + ne.height / 2
                    };
                    window.parent.postMessage({
                        type: "element-position-update",
                        position: de,
                        isInViewport: he,
                        visualSelectorId: v.current
                    }, "*")
                }
            }
        }
          , $ = Y => {
            const H = Y.data;
            switch (H.type) {
            case "toggle-visual-edit-mode":
                J(H.data.enabled);
                break;
            case "update-classes":
                H.data && H.data.classes !== void 0 ? z(H.data.visualSelectorId, H.data.classes, H.data.replace || !1) : console.warn("[Agent] Invalid update-classes message:", H);
                break;
            case "unselect-element":
                I();
                break;
            case "refresh-page":
                window.location.reload();
                break;
            case "update-content":
                H.data && H.data.content !== void 0 ? G(H.data.visualSelectorId, H.data.content) : console.warn("[Agent] Invalid update-content message:", H);
                break;
            case "request-element-position":
                if (v.current) {
                    const ne = C(v.current);
                    if (ne.length > 0) {
                        const fe = ne[0].getBoundingClientRect()
                          , he = window.innerHeight
                          , de = window.innerWidth
                          , B = fe.top < he && fe.bottom > 0 && fe.left < de && fe.right > 0
                          , ae = {
                            top: fe.top,
                            left: fe.left,
                            right: fe.right,
                            bottom: fe.bottom,
                            width: fe.width,
                            height: fe.height,
                            centerX: fe.left + fe.width / 2,
                            centerY: fe.top + fe.height / 2
                        };
                        window.parent.postMessage({
                            type: "element-position-update",
                            position: ae,
                            isInViewport: B,
                            visualSelectorId: v.current
                        }, "*")
                    }
                }
                break;
            case "popover-drag-state":
                H.data && H.data.isDragging !== void 0 && (o(H.data.isDragging),
                l.current = H.data.isDragging,
                H.data.isDragging && E());
                break;
            case "dropdown-state":
                H.data && H.data.isOpen !== void 0 && (d(H.data.isOpen),
                f.current = H.data.isOpen,
                H.data.isOpen && E());
                break
            }
        }
        ;
        return window.addEventListener("message", $),
        window.addEventListener("scroll", D, !0),
        document.addEventListener("scroll", D, !0),
        window.parent.postMessage({
            type: "visual-edit-agent-ready"
        }, "*"),
        () => {
            window.removeEventListener("message", $),
            window.removeEventListener("scroll", D, !0),
            document.removeEventListener("scroll", D, !0),
            document.removeEventListener("mouseover", T),
            document.removeEventListener("mouseout", M),
            document.removeEventListener("click", O, !0),
            E(),
            g.current.forEach(Y => {
                Y && Y.parentNode && Y.remove()
            }
            )
        }
    }
    , []),
    S.useEffect( () => {
        n.current = e
    }
    , [e]),
    S.useEffect( () => {
        l.current = i
    }
    , [i]),
    S.useEffect( () => {
        f.current = u
    }
    , [u]),
    S.useEffect( () => {
        const _ = () => {
            if (v.current) {
                const $ = C(v.current);
                g.current.forEach( (Y, H) => {
                    H < $.length && b(Y, $[H])
                }
                )
            }
            y.current.length > 0 && p.current.forEach( ($, Y) => {
                Y < y.current.length && b($, y.current[Y])
            }
            )
        }
          , D = new MutationObserver($ => {
            $.some(H => {
                const ne = fe => {
                    if (fe.nodeType === Node.ELEMENT_NODE) {
                        if (fe.dataset && fe.dataset.visualSelectorId)
                            return !0;
                        for (let he = 0; he < fe.children.length; he++)
                            if (ne(fe.children[he]))
                                return !0
                    }
                    return !1
                }
                ;
                return H.type === "attributes" && (H.attributeName === "style" || H.attributeName === "class" || H.attributeName === "width" || H.attributeName === "height") && ne(H.target)
            }
            ) && setTimeout(_, 50)
        }
        );
        return D.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["style", "class", "width", "height"]
        }),
        window.addEventListener("resize", _),
        window.addEventListener("scroll", _),
        () => {
            window.removeEventListener("resize", _),
            window.removeEventListener("scroll", _),
            D.disconnect()
        }
    }
    , []),
    null
}
/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var hy = "popstate";
function hk(e={}) {
    function t(i, o) {
        let {pathname: l, search: u, hash: d} = i.location;
        return uf("", {
            pathname: l,
            search: u,
            hash: d
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(i, o) {
        return typeof o == "string" ? o : Lo(o)
    }
    return mk(t, n, null, e)
}
function He(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Rn(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function pk() {
    return Math.random().toString(36).substring(2, 10)
}
function py(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function uf(e, t, n=null, i) {
    return {
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: "",
        ...typeof t == "string" ? bi(t) : t,
        state: n,
        key: t && t.key || i || pk()
    }
}
function Lo({pathname: e="/", search: t="", hash: n=""}) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
}
function bi(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substring(n),
        e = e.substring(0, n));
        let i = e.indexOf("?");
        i >= 0 && (t.search = e.substring(i),
        e = e.substring(0, i)),
        e && (t.pathname = e)
    }
    return t
}
function mk(e, t, n, i={}) {
    let {window: o=document.defaultView, v5Compat: l=!1} = i
      , u = o.history
      , d = "POP"
      , f = null
      , p = g();
    p == null && (p = 0,
    u.replaceState({
        ...u.state,
        idx: p
    }, ""));
    function g() {
        return (u.state || {
            idx: null
        }).idx
    }
    function y() {
        d = "POP";
        let E = g()
          , T = E == null ? null : E - p;
        p = E,
        f && f({
            action: d,
            location: C.location,
            delta: T
        })
    }
    function v(E, T) {
        d = "PUSH";
        let M = uf(C.location, E, T);
        p = g() + 1;
        let O = py(M, p)
          , I = C.createHref(M);
        try {
            u.pushState(O, "", I)
        } catch (z) {
            if (z instanceof DOMException && z.name === "DataCloneError")
                throw z;
            o.location.assign(I)
        }
        l && f && f({
            action: d,
            location: C.location,
            delta: 1
        })
    }
    function x(E, T) {
        d = "REPLACE";
        let M = uf(C.location, E, T);
        p = g();
        let O = py(M, p)
          , I = C.createHref(M);
        u.replaceState(O, "", I),
        l && f && f({
            action: d,
            location: C.location,
            delta: 0
        })
    }
    function b(E) {
        return gk(E)
    }
    let C = {
        get action() {
            return d
        },
        get location() {
            return e(o, u)
        },
        listen(E) {
            if (f)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(hy, y),
            f = E,
            () => {
                o.removeEventListener(hy, y),
                f = null
            }
        },
        createHref(E) {
            return t(o, E)
        },
        createURL: b,
        encodeLocation(E) {
            let T = b(E);
            return {
                pathname: T.pathname,
                search: T.search,
                hash: T.hash
            }
        },
        push: v,
        replace: x,
        go(E) {
            return u.go(E)
        }
    };
    return C
}
function gk(e, t=!1) {
    let n = "http://localhost";
    typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href),
    He(n, "No window.location.(origin|href) available to create URL");
    let i = typeof e == "string" ? e : Lo(e);
    return i = i.replace(/ $/, "%20"),
    !t && i.startsWith("//") && (i = n + i),
    new URL(i,n)
}
function iw(e, t, n="/") {
    return yk(e, t, n, !1)
}
function yk(e, t, n, i) {
    let o = typeof t == "string" ? bi(t) : t
      , l = Yn(o.pathname || "/", n);
    if (l == null)
        return null;
    let u = ow(e);
    vk(u);
    let d = null;
    for (let f = 0; d == null && f < u.length; ++f) {
        let p = _k(l);
        d = Pk(u[f], p, i)
    }
    return d
}
function ow(e, t=[], n=[], i="", o=!1) {
    let l = (u, d, f=o, p) => {
        let g = {
            relativePath: p === void 0 ? u.path || "" : p,
            caseSensitive: u.caseSensitive === !0,
            childrenIndex: d,
            route: u
        };
        if (g.relativePath.startsWith("/")) {
            if (!g.relativePath.startsWith(i) && f)
                return;
            He(g.relativePath.startsWith(i), `Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            g.relativePath = g.relativePath.slice(i.length)
        }
        let y = Kn([i, g.relativePath])
          , v = n.concat(g);
        u.children && u.children.length > 0 && (He(u.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${y}".`),
        ow(u.children, t, v, y, f)),
        !(u.path == null && !u.index) && t.push({
            path: y,
            score: kk(y, u.index),
            routesMeta: v
        })
    }
    ;
    return e.forEach( (u, d) => {
        var f;
        if (u.path === "" || !((f = u.path) != null && f.includes("?")))
            l(u, d);
        else
            for (let p of aw(u.path))
                l(u, d, !0, p)
    }
    ),
    t
}
function aw(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...i] = t
      , o = n.endsWith("?")
      , l = n.replace(/\?$/, "");
    if (i.length === 0)
        return o ? [l, ""] : [l];
    let u = aw(i.join("/"))
      , d = [];
    return d.push(...u.map(f => f === "" ? l : [l, f].join("/"))),
    o && d.push(...u),
    d.map(f => e.startsWith("/") && f === "" ? "/" : f)
}
function vk(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Tk(t.routesMeta.map(i => i.childrenIndex), n.routesMeta.map(i => i.childrenIndex)))
}
var wk = /^:[\w-]+$/
  , xk = 3
  , Sk = 2
  , bk = 1
  , Ek = 10
  , Ck = -2
  , my = e => e === "*";
function kk(e, t) {
    let n = e.split("/")
      , i = n.length;
    return n.some(my) && (i += Ck),
    t && (i += Sk),
    n.filter(o => !my(o)).reduce( (o, l) => o + (wk.test(l) ? xk : l === "" ? bk : Ek), i)
}
function Tk(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (i, o) => i === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Pk(e, t, n=!1) {
    let {routesMeta: i} = e
      , o = {}
      , l = "/"
      , u = [];
    for (let d = 0; d < i.length; ++d) {
        let f = i[d]
          , p = d === i.length - 1
          , g = l === "/" ? t : t.slice(l.length) || "/"
          , y = Wl({
            path: f.relativePath,
            caseSensitive: f.caseSensitive,
            end: p
        }, g)
          , v = f.route;
        if (!y && p && n && !i[i.length - 1].route.index && (y = Wl({
            path: f.relativePath,
            caseSensitive: f.caseSensitive,
            end: !1
        }, g)),
        !y)
            return null;
        Object.assign(o, y.params),
        u.push({
            params: o,
            pathname: Kn([l, y.pathname]),
            pathnameBase: Lk(Kn([l, y.pathnameBase])),
            route: v
        }),
        y.pathnameBase !== "/" && (l = Kn([l, y.pathnameBase]))
    }
    return u
}
function Wl(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,i] = Rk(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let l = o[0]
      , u = l.replace(/(.)\/+$/, "$1")
      , d = o.slice(1);
    return {
        params: i.reduce( (p, {paramName: g, isOptional: y}, v) => {
            if (g === "*") {
                let b = d[v] || "";
                u = l.slice(0, l.length - b.length).replace(/(.)\/+$/, "$1")
            }
            const x = d[v];
            return y && !x ? p[g] = void 0 : p[g] = (x || "").replace(/%2F/g, "/"),
            p
        }
        , {}),
        pathname: l,
        pathnameBase: u,
        pattern: e
    }
}
function Rk(e, t=!1, n=!0) {
    Rn(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
    let i = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (u, d, f) => (i.push({
        paramName: d,
        isOptional: f != null
    }),
    f ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return e.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), i]
}
function _k(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Rn(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),
        e
    }
}
function Yn(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , i = e.charAt(n);
    return i && i !== "/" ? null : e.slice(n) || "/"
}
function Ak(e, t="/") {
    let {pathname: n, search: i="", hash: o=""} = typeof e == "string" ? bi(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Nk(n, t) : t,
        search: Mk(i),
        hash: Dk(o)
    }
}
function Nk(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function bd(e, t, n, i) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Ok(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function lw(e) {
    let t = Ok(e);
    return t.map( (n, i) => i === t.length - 1 ? n.pathname : n.pathnameBase)
}
function uw(e, t, n, i=!1) {
    let o;
    typeof e == "string" ? o = bi(e) : (o = {
        ...e
    },
    He(!o.pathname || !o.pathname.includes("?"), bd("?", "pathname", "search", o)),
    He(!o.pathname || !o.pathname.includes("#"), bd("#", "pathname", "hash", o)),
    He(!o.search || !o.search.includes("#"), bd("#", "search", "hash", o)));
    let l = e === "" || o.pathname === "", u = l ? "/" : o.pathname, d;
    if (u == null)
        d = n;
    else {
        let y = t.length - 1;
        if (!i && u.startsWith("..")) {
            let v = u.split("/");
            for (; v[0] === ".."; )
                v.shift(),
                y -= 1;
            o.pathname = v.join("/")
        }
        d = y >= 0 ? t[y] : "/"
    }
    let f = Ak(o, d)
      , p = u && u !== "/" && u.endsWith("/")
      , g = (l || u === ".") && n.endsWith("/");
    return !f.pathname.endsWith("/") && (p || g) && (f.pathname += "/"),
    f
}
var Kn = e => e.join("/").replace(/\/\/+/g, "/")
  , Lk = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Mk = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Dk = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function jk(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
var cw = ["POST", "PUT", "PATCH", "DELETE"];
new Set(cw);
var Ik = ["GET", ...cw];
new Set(Ik);
var Ei = S.createContext(null);
Ei.displayName = "DataRouter";
var nu = S.createContext(null);
nu.displayName = "DataRouterState";
S.createContext(!1);
var dw = S.createContext({
    isTransitioning: !1
});
dw.displayName = "ViewTransition";
var Fk = S.createContext(new Map);
Fk.displayName = "Fetchers";
var Vk = S.createContext(null);
Vk.displayName = "Await";
var An = S.createContext(null);
An.displayName = "Navigation";
var Ho = S.createContext(null);
Ho.displayName = "Location";
var er = S.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
er.displayName = "Route";
var Qf = S.createContext(null);
Qf.displayName = "RouteError";
function Bk(e, {relative: t}={}) {
    He(Wo(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: n, navigator: i} = S.useContext(An)
      , {hash: o, pathname: l, search: u} = qo(e, {
        relative: t
    })
      , d = l;
    return n !== "/" && (d = l === "/" ? n : Kn([n, l])),
    i.createHref({
        pathname: d,
        search: u,
        hash: o
    })
}
function Wo() {
    return S.useContext(Ho) != null
}
function tr() {
    return He(Wo(), "useLocation() may be used only in the context of a <Router> component."),
    S.useContext(Ho).location
}
var fw = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function hw(e) {
    S.useContext(An).static || S.useLayoutEffect(e)
}
function Uk() {
    let {isDataRoute: e} = S.useContext(er);
    return e ? eT() : zk()
}
function zk() {
    He(Wo(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = S.useContext(Ei)
      , {basename: t, navigator: n} = S.useContext(An)
      , {matches: i} = S.useContext(er)
      , {pathname: o} = tr()
      , l = JSON.stringify(lw(i))
      , u = S.useRef(!1);
    return hw( () => {
        u.current = !0
    }
    ),
    S.useCallback( (f, p={}) => {
        if (Rn(u.current, fw),
        !u.current)
            return;
        if (typeof f == "number") {
            n.go(f);
            return
        }
        let g = uw(f, JSON.parse(l), o, p.relative === "path");
        e == null && t !== "/" && (g.pathname = g.pathname === "/" ? t : Kn([t, g.pathname])),
        (p.replace ? n.replace : n.push)(g, p.state, p)
    }
    , [t, n, l, o, e])
}
S.createContext(null);
function qo(e, {relative: t}={}) {
    let {matches: n} = S.useContext(er)
      , {pathname: i} = tr()
      , o = JSON.stringify(lw(n));
    return S.useMemo( () => uw(e, JSON.parse(o), i, t === "path"), [e, o, i, t])
}
function $k(e, t) {
    return pw(e, t)
}
function pw(e, t, n, i, o) {
    var M;
    He(Wo(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: l} = S.useContext(An)
      , {matches: u} = S.useContext(er)
      , d = u[u.length - 1]
      , f = d ? d.params : {}
      , p = d ? d.pathname : "/"
      , g = d ? d.pathnameBase : "/"
      , y = d && d.route;
    {
        let O = y && y.path || "";
        mw(p, !y || O.endsWith("*") || O.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O === "/" ? "*" : `${O}/*`}">.`)
    }
    let v = tr(), x;
    if (t) {
        let O = typeof t == "string" ? bi(t) : t;
        He(g === "/" || ((M = O.pathname) == null ? void 0 : M.startsWith(g)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${O.pathname}" was given in the \`location\` prop.`),
        x = O
    } else
        x = v;
    let b = x.pathname || "/"
      , C = b;
    if (g !== "/") {
        let O = g.replace(/^\//, "").split("/");
        C = "/" + b.replace(/^\//, "").split("/").slice(O.length).join("/")
    }
    let E = iw(e, {
        pathname: C
    });
    Rn(y || E != null, `No routes matched location "${x.pathname}${x.search}${x.hash}" `),
    Rn(E == null || E[E.length - 1].route.element !== void 0 || E[E.length - 1].route.Component !== void 0 || E[E.length - 1].route.lazy !== void 0, `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let T = Qk(E && E.map(O => Object.assign({}, O, {
        params: Object.assign({}, f, O.params),
        pathname: Kn([g, l.encodeLocation ? l.encodeLocation(O.pathname).pathname : O.pathname]),
        pathnameBase: O.pathnameBase === "/" ? g : Kn([g, l.encodeLocation ? l.encodeLocation(O.pathnameBase).pathname : O.pathnameBase])
    })), u, n, i, o);
    return t && T ? S.createElement(Ho.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...x
            },
            navigationType: "POP"
        }
    }, T) : T
}
function Hk() {
    let e = Zk()
      , t = jk(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = "rgba(200,200,200, 0.5)"
      , o = {
        padding: "0.5rem",
        backgroundColor: i
    }
      , l = {
        padding: "2px 4px",
        backgroundColor: i
    }
      , u = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e),
    u = S.createElement(S.Fragment, null, S.createElement("p", null, "💿 Hey developer 👋"), S.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", S.createElement("code", {
        style: l
    }, "ErrorBoundary"), " or", " ", S.createElement("code", {
        style: l
    }, "errorElement"), " prop on your route.")),
    S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? S.createElement("pre", {
        style: o
    }, n) : null, u)
}
var Wk = S.createElement(Hk, null)
  , qk = class extends S.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
        }
    }
    componentDidCatch(e, t) {
        this.props.unstable_onError ? this.props.unstable_onError(e, t) : console.error("React Router caught the following error during render", e)
    }
    render() {
        return this.state.error !== void 0 ? S.createElement(er.Provider, {
            value: this.props.routeContext
        }, S.createElement(Qf.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function Kk({routeContext: e, match: t, children: n}) {
    let i = S.useContext(Ei);
    return i && i.static && i.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    S.createElement(er.Provider, {
        value: e
    }, n)
}
function Qk(e, t=[], n=null, i=null, o=null) {
    if (e == null) {
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if (t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let l = e
      , u = n == null ? void 0 : n.errors;
    if (u != null) {
        let p = l.findIndex(g => g.route.id && (u == null ? void 0 : u[g.route.id]) !== void 0);
        He(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),
        l = l.slice(0, Math.min(l.length, p + 1))
    }
    let d = !1
      , f = -1;
    if (n)
        for (let p = 0; p < l.length; p++) {
            let g = l[p];
            if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (f = p),
            g.route.id) {
                let {loaderData: y, errors: v} = n
                  , x = g.route.loader && !y.hasOwnProperty(g.route.id) && (!v || v[g.route.id] === void 0);
                if (g.route.lazy || x) {
                    d = !0,
                    f >= 0 ? l = l.slice(0, f + 1) : l = [l[0]];
                    break
                }
            }
        }
    return l.reduceRight( (p, g, y) => {
        let v, x = !1, b = null, C = null;
        n && (v = u && g.route.id ? u[g.route.id] : void 0,
        b = g.route.errorElement || Wk,
        d && (f < 0 && y === 0 ? (mw("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        x = !0,
        C = null) : f === y && (x = !0,
        C = g.route.hydrateFallbackElement || null)));
        let E = t.concat(l.slice(0, y + 1))
          , T = () => {
            let M;
            return v ? M = b : x ? M = C : g.route.Component ? M = S.createElement(g.route.Component, null) : g.route.element ? M = g.route.element : M = p,
            S.createElement(Kk, {
                match: g,
                routeContext: {
                    outlet: p,
                    matches: E,
                    isDataRoute: n != null
                },
                children: M
            })
        }
        ;
        return n && (g.route.ErrorBoundary || g.route.errorElement || y === 0) ? S.createElement(qk, {
            location: n.location,
            revalidation: n.revalidation,
            component: b,
            error: v,
            children: T(),
            routeContext: {
                outlet: null,
                matches: E,
                isDataRoute: !0
            },
            unstable_onError: i
        }) : T()
    }
    , null)
}
function Gf(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Gk(e) {
    let t = S.useContext(Ei);
    return He(t, Gf(e)),
    t
}
function Xk(e) {
    let t = S.useContext(nu);
    return He(t, Gf(e)),
    t
}
function Yk(e) {
    let t = S.useContext(er);
    return He(t, Gf(e)),
    t
}
function Xf(e) {
    let t = Yk(e)
      , n = t.matches[t.matches.length - 1];
    return He(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
}
function Jk() {
    return Xf("useRouteId")
}
function Zk() {
    var i;
    let e = S.useContext(Qf)
      , t = Xk("useRouteError")
      , n = Xf("useRouteError");
    return e !== void 0 ? e : (i = t.errors) == null ? void 0 : i[n]
}
function eT() {
    let {router: e} = Gk("useNavigate")
      , t = Xf("useNavigate")
      , n = S.useRef(!1);
    return hw( () => {
        n.current = !0
    }
    ),
    S.useCallback(async (o, l={}) => {
        Rn(n.current, fw),
        n.current && (typeof o == "number" ? e.navigate(o) : await e.navigate(o, {
            fromRouteId: t,
            ...l
        }))
    }
    , [e, t])
}
var gy = {};
function mw(e, t, n) {
    !t && !gy[e] && (gy[e] = !0,
    Rn(!1, n))
}
S.memo(tT);
function tT({routes: e, future: t, state: n, unstable_onError: i}) {
    return pw(e, void 0, n, i, t)
}
function Al(e) {
    He(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function nT({basename: e="/", children: t=null, location: n, navigationType: i="POP", navigator: o, static: l=!1}) {
    He(!Wo(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let u = e.replace(/^\/*/, "/")
      , d = S.useMemo( () => ({
        basename: u,
        navigator: o,
        static: l,
        future: {}
    }), [u, o, l]);
    typeof n == "string" && (n = bi(n));
    let {pathname: f="/", search: p="", hash: g="", state: y=null, key: v="default"} = n
      , x = S.useMemo( () => {
        let b = Yn(f, u);
        return b == null ? null : {
            location: {
                pathname: b,
                search: p,
                hash: g,
                state: y,
                key: v
            },
            navigationType: i
        }
    }
    , [u, f, p, g, y, v, i]);
    return Rn(x != null, `<Router basename="${u}"> is not able to match the URL "${f}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),
    x == null ? null : S.createElement(An.Provider, {
        value: d
    }, S.createElement(Ho.Provider, {
        children: t,
        value: x
    }))
}
function rT({children: e, location: t}) {
    return $k(cf(e), t)
}
function cf(e, t=[]) {
    let n = [];
    return S.Children.forEach(e, (i, o) => {
        if (!S.isValidElement(i))
            return;
        let l = [...t, o];
        if (i.type === S.Fragment) {
            n.push.apply(n, cf(i.props.children, l));
            return
        }
        He(i.type === Al, `[${typeof i.type == "string" ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        He(!i.props.index || !i.props.children, "An index route cannot have child routes.");
        let u = {
            id: i.props.id || l.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            hydrateFallbackElement: i.props.hydrateFallbackElement,
            HydrateFallback: i.props.HydrateFallback,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.hasErrorBoundary === !0 || i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (u.children = cf(i.props.children, l)),
        n.push(u)
    }
    ),
    n
}
var Nl = "get"
  , Ol = "application/x-www-form-urlencoded";
function ru(e) {
    return e != null && typeof e.tagName == "string"
}
function sT(e) {
    return ru(e) && e.tagName.toLowerCase() === "button"
}
function iT(e) {
    return ru(e) && e.tagName.toLowerCase() === "form"
}
function oT(e) {
    return ru(e) && e.tagName.toLowerCase() === "input"
}
function aT(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function lT(e, t) {
    return e.button === 0 && (!t || t === "_self") && !aT(e)
}
var vl = null;
function uT() {
    if (vl === null)
        try {
            new FormData(document.createElement("form"),0),
            vl = !1
        } catch {
            vl = !0
        }
    return vl
}
var cT = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Ed(e) {
    return e != null && !cT.has(e) ? (Rn(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ol}"`),
    null) : e
}
function dT(e, t) {
    let n, i, o, l, u;
    if (iT(e)) {
        let d = e.getAttribute("action");
        i = d ? Yn(d, t) : null,
        n = e.getAttribute("method") || Nl,
        o = Ed(e.getAttribute("enctype")) || Ol,
        l = new FormData(e)
    } else if (sT(e) || oT(e) && (e.type === "submit" || e.type === "image")) {
        let d = e.form;
        if (d == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let f = e.getAttribute("formaction") || d.getAttribute("action");
        if (i = f ? Yn(f, t) : null,
        n = e.getAttribute("formmethod") || d.getAttribute("method") || Nl,
        o = Ed(e.getAttribute("formenctype")) || Ed(d.getAttribute("enctype")) || Ol,
        l = new FormData(d,e),
        !uT()) {
            let {name: p, type: g, value: y} = e;
            if (g === "image") {
                let v = p ? `${p}.` : "";
                l.append(`${v}x`, "0"),
                l.append(`${v}y`, "0")
            } else
                p && l.append(p, y)
        }
    } else {
        if (ru(e))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        n = Nl,
        i = null,
        o = Ol,
        u = e
    }
    return l && o === "text/plain" && (u = l,
    l = void 0),
    {
        action: i,
        method: n.toLowerCase(),
        encType: o,
        formData: l,
        body: u
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Yf(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function fT(e, t, n) {
    let i = typeof e == "string" ? new URL(e,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return i.pathname === "/" ? i.pathname = `_root.${n}` : t && Yn(i.pathname, t) === "/" ? i.pathname = `${t.replace(/\/$/, "")}/_root.${n}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${n}`,
    i
}
async function hT(e, t) {
    if (e.id in t)
        return t[e.id];
    try {
        let n = await import(e.module);
        return t[e.id] = n,
        n
    } catch (n) {
        return console.error(`Error loading route module \`${e.module}\`, reloading page...`),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function pT(e) {
    return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string"
}
async function mT(e, t, n) {
    let i = await Promise.all(e.map(async o => {
        let l = t.routes[o.route.id];
        if (l) {
            let u = await hT(l, n);
            return u.links ? u.links() : []
        }
        return []
    }
    ));
    return wT(i.flat(1).filter(pT).filter(o => o.rel === "stylesheet" || o.rel === "preload").map(o => o.rel === "stylesheet" ? {
        ...o,
        rel: "prefetch",
        as: "style"
    } : {
        ...o,
        rel: "prefetch"
    }))
}
function yy(e, t, n, i, o, l) {
    let u = (f, p) => n[p] ? f.route.id !== n[p].route.id : !0
      , d = (f, p) => {
        var g;
        return n[p].pathname !== f.pathname || ((g = n[p].route.path) == null ? void 0 : g.endsWith("*")) && n[p].params["*"] !== f.params["*"]
    }
    ;
    return l === "assets" ? t.filter( (f, p) => u(f, p) || d(f, p)) : l === "data" ? t.filter( (f, p) => {
        var y;
        let g = i.routes[f.route.id];
        if (!g || !g.hasLoader)
            return !1;
        if (u(f, p) || d(f, p))
            return !0;
        if (f.route.shouldRevalidate) {
            let v = f.route.shouldRevalidate({
                currentUrl: new URL(o.pathname + o.search + o.hash,window.origin),
                currentParams: ((y = n[0]) == null ? void 0 : y.params) || {},
                nextUrl: new URL(e,window.origin),
                nextParams: f.params,
                defaultShouldRevalidate: !0
            });
            if (typeof v == "boolean")
                return v
        }
        return !0
    }
    ) : []
}
function gT(e, t, {includeHydrateFallback: n}={}) {
    return yT(e.map(i => {
        let o = t.routes[i.route.id];
        if (!o)
            return [];
        let l = [o.module];
        return o.clientActionModule && (l = l.concat(o.clientActionModule)),
        o.clientLoaderModule && (l = l.concat(o.clientLoaderModule)),
        n && o.hydrateFallbackModule && (l = l.concat(o.hydrateFallbackModule)),
        o.imports && (l = l.concat(o.imports)),
        l
    }
    ).flat(1))
}
function yT(e) {
    return [...new Set(e)]
}
function vT(e) {
    let t = {}
      , n = Object.keys(e).sort();
    for (let i of n)
        t[i] = e[i];
    return t
}
function wT(e, t) {
    let n = new Set;
    return new Set(t),
    e.reduce( (i, o) => {
        let l = JSON.stringify(vT(o));
        return n.has(l) || (n.add(l),
        i.push({
            key: l,
            link: o
        })),
        i
    }
    , [])
}
function gw() {
    let e = S.useContext(Ei);
    return Yf(e, "You must render this element inside a <DataRouterContext.Provider> element"),
    e
}
function xT() {
    let e = S.useContext(nu);
    return Yf(e, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    e
}
var Jf = S.createContext(void 0);
Jf.displayName = "FrameworkContext";
function yw() {
    let e = S.useContext(Jf);
    return Yf(e, "You must render this element inside a <HydratedRouter> element"),
    e
}
function ST(e, t) {
    let n = S.useContext(Jf)
      , [i,o] = S.useState(!1)
      , [l,u] = S.useState(!1)
      , {onFocus: d, onBlur: f, onMouseEnter: p, onMouseLeave: g, onTouchStart: y} = t
      , v = S.useRef(null);
    S.useEffect( () => {
        if (e === "render" && u(!0),
        e === "viewport") {
            let C = T => {
                T.forEach(M => {
                    u(M.isIntersecting)
                }
                )
            }
              , E = new IntersectionObserver(C,{
                threshold: .5
            });
            return v.current && E.observe(v.current),
            () => {
                E.disconnect()
            }
        }
    }
    , [e]),
    S.useEffect( () => {
        if (i) {
            let C = setTimeout( () => {
                u(!0)
            }
            , 100);
            return () => {
                clearTimeout(C)
            }
        }
    }
    , [i]);
    let x = () => {
        o(!0)
    }
      , b = () => {
        o(!1),
        u(!1)
    }
    ;
    return n ? e !== "intent" ? [l, v, {}] : [l, v, {
        onFocus: go(d, x),
        onBlur: go(f, b),
        onMouseEnter: go(p, x),
        onMouseLeave: go(g, b),
        onTouchStart: go(y, x)
    }] : [!1, v, {}]
}
function go(e, t) {
    return n => {
        e && e(n),
        n.defaultPrevented || t(n)
    }
}
function bT({page: e, ...t}) {
    let {router: n} = gw()
      , i = S.useMemo( () => iw(n.routes, e, n.basename), [n.routes, e, n.basename]);
    return i ? S.createElement(CT, {
        page: e,
        matches: i,
        ...t
    }) : null
}
function ET(e) {
    let {manifest: t, routeModules: n} = yw()
      , [i,o] = S.useState([]);
    return S.useEffect( () => {
        let l = !1;
        return mT(e, t, n).then(u => {
            l || o(u)
        }
        ),
        () => {
            l = !0
        }
    }
    , [e, t, n]),
    i
}
function CT({page: e, matches: t, ...n}) {
    let i = tr()
      , {manifest: o, routeModules: l} = yw()
      , {basename: u} = gw()
      , {loaderData: d, matches: f} = xT()
      , p = S.useMemo( () => yy(e, t, f, o, i, "data"), [e, t, f, o, i])
      , g = S.useMemo( () => yy(e, t, f, o, i, "assets"), [e, t, f, o, i])
      , y = S.useMemo( () => {
        if (e === i.pathname + i.search + i.hash)
            return [];
        let b = new Set
          , C = !1;
        if (t.forEach(T => {
            var O;
            let M = o.routes[T.route.id];
            !M || !M.hasLoader || (!p.some(I => I.route.id === T.route.id) && T.route.id in d && ((O = l[T.route.id]) != null && O.shouldRevalidate) || M.hasClientLoader ? C = !0 : b.add(T.route.id))
        }
        ),
        b.size === 0)
            return [];
        let E = fT(e, u, "data");
        return C && b.size > 0 && E.searchParams.set("_routes", t.filter(T => b.has(T.route.id)).map(T => T.route.id).join(",")),
        [E.pathname + E.search]
    }
    , [u, d, i, o, p, t, e, l])
      , v = S.useMemo( () => gT(g, o), [g, o])
      , x = ET(g);
    return S.createElement(S.Fragment, null, y.map(b => S.createElement("link", {
        key: b,
        rel: "prefetch",
        as: "fetch",
        href: b,
        ...n
    })), v.map(b => S.createElement("link", {
        key: b,
        rel: "modulepreload",
        href: b,
        ...n
    })), x.map( ({key: b, link: C}) => S.createElement("link", {
        key: b,
        nonce: n.nonce,
        ...C
    })))
}
function kT(...e) {
    return t => {
        e.forEach(n => {
            typeof n == "function" ? n(t) : n != null && (n.current = t)
        }
        )
    }
}
var vw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    vw && (window.__reactRouterVersion = "7.9.1")
} catch {}
function TT({basename: e, children: t, window: n}) {
    let i = S.useRef();
    i.current == null && (i.current = hk({
        window: n,
        v5Compat: !0
    }));
    let o = i.current
      , [l,u] = S.useState({
        action: o.action,
        location: o.location
    })
      , d = S.useCallback(f => {
        S.startTransition( () => u(f))
    }
    , [u]);
    return S.useLayoutEffect( () => o.listen(d), [o, d]),
    S.createElement(nT, {
        basename: e,
        children: t,
        location: l.location,
        navigationType: l.action,
        navigator: o
    })
}
var ww = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , xw = S.forwardRef(function({onClick: t, discover: n="render", prefetch: i="none", relative: o, reloadDocument: l, replace: u, state: d, target: f, to: p, preventScrollReset: g, viewTransition: y, ...v}, x) {
    let {basename: b} = S.useContext(An), C = typeof p == "string" && ww.test(p), E, T = !1;
    if (typeof p == "string" && C && (E = p,
    vw))
        try {
            let D = new URL(window.location.href)
              , $ = p.startsWith("//") ? new URL(D.protocol + p) : new URL(p)
              , Y = Yn($.pathname, b);
            $.origin === D.origin && Y != null ? p = Y + $.search + $.hash : T = !0
        } catch {
            Rn(!1, `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let M = Bk(p, {
        relative: o
    })
      , [O,I,z] = ST(i, v)
      , G = AT(p, {
        replace: u,
        state: d,
        target: f,
        preventScrollReset: g,
        relative: o,
        viewTransition: y
    });
    function J(D) {
        t && t(D),
        D.defaultPrevented || G(D)
    }
    let _ = S.createElement("a", {
        ...v,
        ...z,
        href: E || M,
        onClick: T || l ? t : J,
        ref: kT(x, I),
        target: f,
        "data-discover": !C && n === "render" ? "true" : void 0
    });
    return O && !C ? S.createElement(S.Fragment, null, _, S.createElement(bT, {
        page: M
    })) : _
});
xw.displayName = "Link";
var PT = S.forwardRef(function({"aria-current": t="page", caseSensitive: n=!1, className: i="", end: o=!1, style: l, to: u, viewTransition: d, children: f, ...p}, g) {
    let y = qo(u, {
        relative: p.relative
    })
      , v = tr()
      , x = S.useContext(nu)
      , {navigator: b, basename: C} = S.useContext(An)
      , E = x != null && DT(y) && d === !0
      , T = b.encodeLocation ? b.encodeLocation(y).pathname : y.pathname
      , M = v.pathname
      , O = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    n || (M = M.toLowerCase(),
    O = O ? O.toLowerCase() : null,
    T = T.toLowerCase()),
    O && C && (O = Yn(O, C) || O);
    const I = T !== "/" && T.endsWith("/") ? T.length - 1 : T.length;
    let z = M === T || !o && M.startsWith(T) && M.charAt(I) === "/", G = O != null && (O === T || !o && O.startsWith(T) && O.charAt(T.length) === "/"), J = {
        isActive: z,
        isPending: G,
        isTransitioning: E
    }, _ = z ? t : void 0, D;
    typeof i == "function" ? D = i(J) : D = [i, z ? "active" : null, G ? "pending" : null, E ? "transitioning" : null].filter(Boolean).join(" ");
    let $ = typeof l == "function" ? l(J) : l;
    return S.createElement(xw, {
        ...p,
        "aria-current": _,
        className: D,
        ref: g,
        style: $,
        to: u,
        viewTransition: d
    }, typeof f == "function" ? f(J) : f)
});
PT.displayName = "NavLink";
var RT = S.forwardRef( ({discover: e="render", fetcherKey: t, navigate: n, reloadDocument: i, replace: o, state: l, method: u=Nl, action: d, onSubmit: f, relative: p, preventScrollReset: g, viewTransition: y, ...v}, x) => {
    let b = LT()
      , C = MT(d, {
        relative: p
    })
      , E = u.toLowerCase() === "get" ? "get" : "post"
      , T = typeof d == "string" && ww.test(d)
      , M = O => {
        if (f && f(O),
        O.defaultPrevented)
            return;
        O.preventDefault();
        let I = O.nativeEvent.submitter
          , z = (I == null ? void 0 : I.getAttribute("formmethod")) || u;
        b(I || O.currentTarget, {
            fetcherKey: t,
            method: z,
            navigate: n,
            replace: o,
            state: l,
            relative: p,
            preventScrollReset: g,
            viewTransition: y
        })
    }
    ;
    return S.createElement("form", {
        ref: x,
        method: E,
        action: C,
        onSubmit: i ? f : M,
        ...v,
        "data-discover": !T && e === "render" ? "true" : void 0
    })
}
);
RT.displayName = "Form";
function _T(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Sw(e) {
    let t = S.useContext(Ei);
    return He(t, _T(e)),
    t
}
function AT(e, {target: t, replace: n, state: i, preventScrollReset: o, relative: l, viewTransition: u}={}) {
    let d = Uk()
      , f = tr()
      , p = qo(e, {
        relative: l
    });
    return S.useCallback(g => {
        if (lT(g, t)) {
            g.preventDefault();
            let y = n !== void 0 ? n : Lo(f) === Lo(p);
            d(e, {
                replace: y,
                state: i,
                preventScrollReset: o,
                relative: l,
                viewTransition: u
            })
        }
    }
    , [f, d, p, n, i, t, e, o, l, u])
}
var NT = 0
  , OT = () => `__${String(++NT)}__`;
function LT() {
    let {router: e} = Sw("useSubmit")
      , {basename: t} = S.useContext(An)
      , n = Jk();
    return S.useCallback(async (i, o={}) => {
        let {action: l, method: u, encType: d, formData: f, body: p} = dT(i, t);
        if (o.navigate === !1) {
            let g = o.fetcherKey || OT();
            await e.fetch(g, n, o.action || l, {
                preventScrollReset: o.preventScrollReset,
                formData: f,
                body: p,
                formMethod: o.method || u,
                formEncType: o.encType || d,
                flushSync: o.flushSync
            })
        } else
            await e.navigate(o.action || l, {
                preventScrollReset: o.preventScrollReset,
                formData: f,
                body: p,
                formMethod: o.method || u,
                formEncType: o.encType || d,
                replace: o.replace,
                state: o.state,
                fromRouteId: n,
                flushSync: o.flushSync,
                viewTransition: o.viewTransition
            })
    }
    , [e, t, n])
}
function MT(e, {relative: t}={}) {
    let {basename: n} = S.useContext(An)
      , i = S.useContext(er);
    He(i, "useFormAction must be used inside a RouteContext");
    let[o] = i.matches.slice(-1)
      , l = {
        ...qo(e || ".", {
            relative: t
        })
    }
      , u = tr();
    if (e == null) {
        l.search = u.search;
        let d = new URLSearchParams(l.search)
          , f = d.getAll("index");
        if (f.some(g => g === "")) {
            d.delete("index"),
            f.filter(y => y).forEach(y => d.append("index", y));
            let g = d.toString();
            l.search = g ? `?${g}` : ""
        }
    }
    return (!e || e === ".") && o.route.index && (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (l.pathname = l.pathname === "/" ? n : Kn([n, l.pathname])),
    Lo(l)
}
function DT(e, {relative: t}={}) {
    let n = S.useContext(dw);
    He(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: i} = Sw("useViewTransitionState")
      , o = qo(e, {
        relative: t
    });
    if (!n.isTransitioning)
        return !1;
    let l = Yn(n.currentLocation.pathname, i) || n.currentLocation.pathname
      , u = Yn(n.nextLocation.pathname, i) || n.nextLocation.pathname;
    return Wl(o.pathname, u) != null || Wl(o.pathname, l) != null
}
E0();
function bw(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: jT} = Object.prototype
  , {getPrototypeOf: Zf} = Object
  , {iterator: su, toStringTag: Ew} = Symbol
  , iu = (e => t => {
    const n = jT.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , pn = e => (e = e.toLowerCase(),
t => iu(t) === e)
  , ou = e => t => typeof t === e
  , {isArray: Ci} = Array
  , pi = ou("undefined");
function Ko(e) {
    return e !== null && !pi(e) && e.constructor !== null && !pi(e.constructor) && jt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Cw = pn("ArrayBuffer");
function IT(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Cw(e.buffer),
    t
}
const FT = ou("string")
  , jt = ou("function")
  , kw = ou("number")
  , Qo = e => e !== null && typeof e == "object"
  , VT = e => e === !0 || e === !1
  , Ll = e => {
    if (iu(e) !== "object")
        return !1;
    const t = Zf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ew in e) && !(su in e)
}
  , BT = e => {
    if (!Qo(e) || Ko(e))
        return !1;
    try {
        return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype
    } catch {
        return !1
    }
}
  , UT = pn("Date")
  , zT = pn("File")
  , $T = pn("Blob")
  , HT = pn("FileList")
  , WT = e => Qo(e) && jt(e.pipe)
  , qT = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || jt(e.append) && ((t = iu(e)) === "formdata" || t === "object" && jt(e.toString) && e.toString() === "[object FormData]"))
}
  , KT = pn("URLSearchParams")
  , [QT,GT,XT,YT] = ["ReadableStream", "Request", "Response", "Headers"].map(pn)
  , JT = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Go(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let i, o;
    if (typeof e != "object" && (e = [e]),
    Ci(e))
        for (i = 0,
        o = e.length; i < o; i++)
            t.call(null, e[i], i, e);
    else {
        if (Ko(e))
            return;
        const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , u = l.length;
        let d;
        for (i = 0; i < u; i++)
            d = l[i],
            t.call(null, e[d], d, e)
    }
}
function Tw(e, t) {
    if (Ko(e))
        return null;
    t = t.toLowerCase();
    const n = Object.keys(e);
    let i = n.length, o;
    for (; i-- > 0; )
        if (o = n[i],
        t === o.toLowerCase())
            return o;
    return null
}
const is = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Pw = e => !pi(e) && e !== is;
function df() {
    const {caseless: e, skipUndefined: t} = Pw(this) && this || {}
      , n = {}
      , i = (o, l) => {
        const u = e && Tw(n, l) || l;
        Ll(n[u]) && Ll(o) ? n[u] = df(n[u], o) : Ll(o) ? n[u] = df({}, o) : Ci(o) ? n[u] = o.slice() : (!t || !pi(o)) && (n[u] = o)
    }
    ;
    for (let o = 0, l = arguments.length; o < l; o++)
        arguments[o] && Go(arguments[o], i);
    return n
}
const ZT = (e, t, n, {allOwnKeys: i}={}) => (Go(t, (o, l) => {
    n && jt(o) ? e[l] = bw(o, n) : e[l] = o
}
, {
    allOwnKeys: i
}),
e)
  , eP = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , tP = (e, t, n, i) => {
    e.prototype = Object.create(t.prototype, i),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , nP = (e, t, n, i) => {
    let o, l, u;
    const d = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (o = Object.getOwnPropertyNames(e),
        l = o.length; l-- > 0; )
            u = o[l],
            (!i || i(u, e, t)) && !d[u] && (t[u] = e[u],
            d[u] = !0);
        e = n !== !1 && Zf(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , rP = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const i = e.indexOf(t, n);
    return i !== -1 && i === n
}
  , sP = e => {
    if (!e)
        return null;
    if (Ci(e))
        return e;
    let t = e.length;
    if (!kw(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , iP = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Zf(Uint8Array))
  , oP = (e, t) => {
    const i = (e && e[su]).call(e);
    let o;
    for (; (o = i.next()) && !o.done; ) {
        const l = o.value;
        t.call(e, l[0], l[1])
    }
}
  , aP = (e, t) => {
    let n;
    const i = [];
    for (; (n = e.exec(t)) !== null; )
        i.push(n);
    return i
}
  , lP = pn("HTMLFormElement")
  , uP = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, i, o) {
    return i.toUpperCase() + o
})
  , vy = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , cP = pn("RegExp")
  , Rw = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , i = {};
    Go(n, (o, l) => {
        let u;
        (u = t(o, l, e)) !== !1 && (i[l] = u || o)
    }
    ),
    Object.defineProperties(e, i)
}
  , dP = e => {
    Rw(e, (t, n) => {
        if (jt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const i = e[n];
        if (jt(i)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , fP = (e, t) => {
    const n = {}
      , i = o => {
        o.forEach(l => {
            n[l] = !0
        }
        )
    }
    ;
    return Ci(e) ? i(e) : i(String(e).split(t)),
    n
}
  , hP = () => {}
  , pP = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function mP(e) {
    return !!(e && jt(e.append) && e[Ew] === "FormData" && e[su])
}
const gP = e => {
    const t = new Array(10)
      , n = (i, o) => {
        if (Qo(i)) {
            if (t.indexOf(i) >= 0)
                return;
            if (Ko(i))
                return i;
            if (!("toJSON"in i)) {
                t[o] = i;
                const l = Ci(i) ? [] : {};
                return Go(i, (u, d) => {
                    const f = n(u, o + 1);
                    !pi(f) && (l[d] = f)
                }
                ),
                t[o] = void 0,
                l
            }
        }
        return i
    }
    ;
    return n(e, 0)
}
  , yP = pn("AsyncFunction")
  , vP = e => e && (Qo(e) || jt(e)) && jt(e.then) && jt(e.catch)
  , _w = ( (e, t) => e ? setImmediate : t ? ( (n, i) => (is.addEventListener("message", ({source: o, data: l}) => {
    o === is && l === n && i.length && i.shift()()
}
, !1),
o => {
    i.push(o),
    is.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", jt(is.postMessage))
  , wP = typeof queueMicrotask < "u" ? queueMicrotask.bind(is) : typeof process < "u" && process.nextTick || _w
  , xP = e => e != null && jt(e[su])
  , U = {
    isArray: Ci,
    isArrayBuffer: Cw,
    isBuffer: Ko,
    isFormData: qT,
    isArrayBufferView: IT,
    isString: FT,
    isNumber: kw,
    isBoolean: VT,
    isObject: Qo,
    isPlainObject: Ll,
    isEmptyObject: BT,
    isReadableStream: QT,
    isRequest: GT,
    isResponse: XT,
    isHeaders: YT,
    isUndefined: pi,
    isDate: UT,
    isFile: zT,
    isBlob: $T,
    isRegExp: cP,
    isFunction: jt,
    isStream: WT,
    isURLSearchParams: KT,
    isTypedArray: iP,
    isFileList: HT,
    forEach: Go,
    merge: df,
    extend: ZT,
    trim: JT,
    stripBOM: eP,
    inherits: tP,
    toFlatObject: nP,
    kindOf: iu,
    kindOfTest: pn,
    endsWith: rP,
    toArray: sP,
    forEachEntry: oP,
    matchAll: aP,
    isHTMLForm: lP,
    hasOwnProperty: vy,
    hasOwnProp: vy,
    reduceDescriptors: Rw,
    freezeMethods: dP,
    toObjectSet: fP,
    toCamelCase: uP,
    noop: hP,
    toFiniteNumber: pP,
    findKey: Tw,
    global: is,
    isContextDefined: Pw,
    isSpecCompliantForm: mP,
    toJSONObject: gP,
    isAsyncFn: yP,
    isThenable: vP,
    setImmediate: _w,
    asap: wP,
    isIterable: xP
};
function Ee(e, t, n, i, o) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    i && (this.request = i),
    o && (this.response = o,
    this.status = o.status ? o.status : null)
}
U.inherits(Ee, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: U.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Aw = Ee.prototype
  , Nw = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Nw[e] = {
        value: e
    }
}
);
Object.defineProperties(Ee, Nw);
Object.defineProperty(Aw, "isAxiosError", {
    value: !0
});
Ee.from = (e, t, n, i, o, l) => {
    const u = Object.create(Aw);
    U.toFlatObject(e, u, function(g) {
        return g !== Error.prototype
    }, p => p !== "isAxiosError");
    const d = e && e.message ? e.message : "Error"
      , f = t == null && e ? e.code : t;
    return Ee.call(u, d, f, n, i, o),
    e && u.cause == null && Object.defineProperty(u, "cause", {
        value: e,
        configurable: !0
    }),
    u.name = e && e.name || "Error",
    l && Object.assign(u, l),
    u
}
;
const SP = null;
function ff(e) {
    return U.isPlainObject(e) || U.isArray(e)
}
function Ow(e) {
    return U.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function wy(e, t, n) {
    return e ? e.concat(t).map(function(o, l) {
        return o = Ow(o),
        !n && l ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}
function bP(e) {
    return U.isArray(e) && !e.some(ff)
}
const EP = U.toFlatObject(U, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function au(e, t, n) {
    if (!U.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = U.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(C, E) {
        return !U.isUndefined(E[C])
    });
    const i = n.metaTokens
      , o = n.visitor || g
      , l = n.dots
      , u = n.indexes
      , f = (n.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(t);
    if (!U.isFunction(o))
        throw new TypeError("visitor must be a function");
    function p(b) {
        if (b === null)
            return "";
        if (U.isDate(b))
            return b.toISOString();
        if (U.isBoolean(b))
            return b.toString();
        if (!f && U.isBlob(b))
            throw new Ee("Blob is not supported. Use a Buffer instead.");
        return U.isArrayBuffer(b) || U.isTypedArray(b) ? f && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b
    }
    function g(b, C, E) {
        let T = b;
        if (b && !E && typeof b == "object") {
            if (U.endsWith(C, "{}"))
                C = i ? C : C.slice(0, -2),
                b = JSON.stringify(b);
            else if (U.isArray(b) && bP(b) || (U.isFileList(b) || U.endsWith(C, "[]")) && (T = U.toArray(b)))
                return C = Ow(C),
                T.forEach(function(O, I) {
                    !(U.isUndefined(O) || O === null) && t.append(u === !0 ? wy([C], I, l) : u === null ? C : C + "[]", p(O))
                }),
                !1
        }
        return ff(b) ? !0 : (t.append(wy(E, C, l), p(b)),
        !1)
    }
    const y = []
      , v = Object.assign(EP, {
        defaultVisitor: g,
        convertValue: p,
        isVisitable: ff
    });
    function x(b, C) {
        if (!U.isUndefined(b)) {
            if (y.indexOf(b) !== -1)
                throw Error("Circular reference detected in " + C.join("."));
            y.push(b),
            U.forEach(b, function(T, M) {
                (!(U.isUndefined(T) || T === null) && o.call(t, T, U.isString(M) ? M.trim() : M, C, v)) === !0 && x(T, C ? C.concat(M) : [M])
            }),
            y.pop()
        }
    }
    if (!U.isObject(e))
        throw new TypeError("data must be an object");
    return x(e),
    t
}
function xy(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(i) {
        return t[i]
    })
}
function eh(e, t) {
    this._pairs = [],
    e && au(e, this, t)
}
const Lw = eh.prototype;
Lw.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Lw.toString = function(t) {
    const n = t ? function(i) {
        return t.call(this, i, xy)
    }
    : xy;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
}
;
function CP(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function Mw(e, t, n) {
    if (!t)
        return e;
    const i = n && n.encode || CP;
    U.isFunction(n) && (n = {
        serialize: n
    });
    const o = n && n.serialize;
    let l;
    if (o ? l = o(t, n) : l = U.isURLSearchParams(t) ? t.toString() : new eh(t,n).toString(i),
    l) {
        const u = e.indexOf("#");
        u !== -1 && (e = e.slice(0, u)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + l
    }
    return e
}
class Sy {
    constructor() {
        this.handlers = []
    }
    use(t, n, i) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        U.forEach(this.handlers, function(i) {
            i !== null && t(i)
        })
    }
}
const Dw = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , kP = typeof URLSearchParams < "u" ? URLSearchParams : eh
  , TP = typeof FormData < "u" ? FormData : null
  , PP = typeof Blob < "u" ? Blob : null
  , RP = {
    isBrowser: !0,
    classes: {
        URLSearchParams: kP,
        FormData: TP,
        Blob: PP
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , th = typeof window < "u" && typeof document < "u"
  , hf = typeof navigator == "object" && navigator || void 0
  , _P = th && (!hf || ["ReactNative", "NativeScript", "NS"].indexOf(hf.product) < 0)
  , AP = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , NP = th && window.location.href || "http://localhost"
  , OP = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: th,
    hasStandardBrowserEnv: _P,
    hasStandardBrowserWebWorkerEnv: AP,
    navigator: hf,
    origin: NP
}, Symbol.toStringTag, {
    value: "Module"
}))
  , vt = {
    ...OP,
    ...RP
};
function LP(e, t) {
    return au(e, new vt.classes.URLSearchParams, {
        visitor: function(n, i, o, l) {
            return vt.isNode && U.isBuffer(n) ? (this.append(i, n.toString("base64")),
            !1) : l.defaultVisitor.apply(this, arguments)
        },
        ...t
    })
}
function MP(e) {
    return U.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function DP(e) {
    const t = {}
      , n = Object.keys(e);
    let i;
    const o = n.length;
    let l;
    for (i = 0; i < o; i++)
        l = n[i],
        t[l] = e[l];
    return t
}
function jw(e) {
    function t(n, i, o, l) {
        let u = n[l++];
        if (u === "__proto__")
            return !0;
        const d = Number.isFinite(+u)
          , f = l >= n.length;
        return u = !u && U.isArray(o) ? o.length : u,
        f ? (U.hasOwnProp(o, u) ? o[u] = [o[u], i] : o[u] = i,
        !d) : ((!o[u] || !U.isObject(o[u])) && (o[u] = []),
        t(n, i, o[u], l) && U.isArray(o[u]) && (o[u] = DP(o[u])),
        !d)
    }
    if (U.isFormData(e) && U.isFunction(e.entries)) {
        const n = {};
        return U.forEachEntry(e, (i, o) => {
            t(MP(i), o, n, 0)
        }
        ),
        n
    }
    return null
}
function jP(e, t, n) {
    if (U.isString(e))
        try {
            return (t || JSON.parse)(e),
            U.trim(e)
        } catch (i) {
            if (i.name !== "SyntaxError")
                throw i
        }
    return (n || JSON.stringify)(e)
}
const Xo = {
    transitional: Dw,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const i = n.getContentType() || ""
          , o = i.indexOf("application/json") > -1
          , l = U.isObject(t);
        if (l && U.isHTMLForm(t) && (t = new FormData(t)),
        U.isFormData(t))
            return o ? JSON.stringify(jw(t)) : t;
        if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t) || U.isReadableStream(t))
            return t;
        if (U.isArrayBufferView(t))
            return t.buffer;
        if (U.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let d;
        if (l) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1)
                return LP(t, this.formSerializer).toString();
            if ((d = U.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
                const f = this.env && this.env.FormData;
                return au(d ? {
                    "files[]": t
                } : t, f && new f, this.formSerializer)
            }
        }
        return l || o ? (n.setContentType("application/json", !1),
        jP(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Xo.transitional
          , i = n && n.forcedJSONParsing
          , o = this.responseType === "json";
        if (U.isResponse(t) || U.isReadableStream(t))
            return t;
        if (t && U.isString(t) && (i && !this.responseType || o)) {
            const u = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t, this.parseReviver)
            } catch (d) {
                if (u)
                    throw d.name === "SyntaxError" ? Ee.from(d, Ee.ERR_BAD_RESPONSE, this, null, this.response) : d
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: vt.classes.FormData,
        Blob: vt.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
U.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Xo.headers[e] = {}
}
);
const IP = U.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , FP = e => {
    const t = {};
    let n, i, o;
    return e && e.split(`
`).forEach(function(u) {
        o = u.indexOf(":"),
        n = u.substring(0, o).trim().toLowerCase(),
        i = u.substring(o + 1).trim(),
        !(!n || t[n] && IP[n]) && (n === "set-cookie" ? t[n] ? t[n].push(i) : t[n] = [i] : t[n] = t[n] ? t[n] + ", " + i : i)
    }),
    t
}
  , by = Symbol("internals");
function yo(e) {
    return e && String(e).trim().toLowerCase()
}
function Ml(e) {
    return e === !1 || e == null ? e : U.isArray(e) ? e.map(Ml) : String(e)
}
function VP(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = n.exec(e); )
        t[i[1]] = i[2];
    return t
}
const BP = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Cd(e, t, n, i, o) {
    if (U.isFunction(i))
        return i.call(this, t, n);
    if (o && (t = n),
    !!U.isString(t)) {
        if (U.isString(i))
            return t.indexOf(i) !== -1;
        if (U.isRegExp(i))
            return i.test(t)
    }
}
function UP(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, i) => n.toUpperCase() + i)
}
function zP(e, t) {
    const n = U.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(e, i + n, {
            value: function(o, l, u) {
                return this[i].call(this, t, o, l, u)
            },
            configurable: !0
        })
    }
    )
}
let It = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, i) {
        const o = this;
        function l(d, f, p) {
            const g = yo(f);
            if (!g)
                throw new Error("header name must be a non-empty string");
            const y = U.findKey(o, g);
            (!y || o[y] === void 0 || p === !0 || p === void 0 && o[y] !== !1) && (o[y || f] = Ml(d))
        }
        const u = (d, f) => U.forEach(d, (p, g) => l(p, g, f));
        if (U.isPlainObject(t) || t instanceof this.constructor)
            u(t, n);
        else if (U.isString(t) && (t = t.trim()) && !BP(t))
            u(FP(t), n);
        else if (U.isObject(t) && U.isIterable(t)) {
            let d = {}, f, p;
            for (const g of t) {
                if (!U.isArray(g))
                    throw TypeError("Object iterator must return a key-value pair");
                d[p = g[0]] = (f = d[p]) ? U.isArray(f) ? [...f, g[1]] : [f, g[1]] : g[1]
            }
            u(d, n)
        } else
            t != null && l(n, t, i);
        return this
    }
    get(t, n) {
        if (t = yo(t),
        t) {
            const i = U.findKey(this, t);
            if (i) {
                const o = this[i];
                if (!n)
                    return o;
                if (n === !0)
                    return VP(o);
                if (U.isFunction(n))
                    return n.call(this, o, i);
                if (U.isRegExp(n))
                    return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = yo(t),
        t) {
            const i = U.findKey(this, t);
            return !!(i && this[i] !== void 0 && (!n || Cd(this, this[i], i, n)))
        }
        return !1
    }
    delete(t, n) {
        const i = this;
        let o = !1;
        function l(u) {
            if (u = yo(u),
            u) {
                const d = U.findKey(i, u);
                d && (!n || Cd(i, i[d], d, n)) && (delete i[d],
                o = !0)
            }
        }
        return U.isArray(t) ? t.forEach(l) : l(t),
        o
    }
    clear(t) {
        const n = Object.keys(this);
        let i = n.length
          , o = !1;
        for (; i--; ) {
            const l = n[i];
            (!t || Cd(this, this[l], l, t, !0)) && (delete this[l],
            o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this
          , i = {};
        return U.forEach(this, (o, l) => {
            const u = U.findKey(i, l);
            if (u) {
                n[u] = Ml(o),
                delete n[l];
                return
            }
            const d = t ? UP(l) : String(l).trim();
            d !== l && delete n[l],
            n[d] = Ml(o),
            i[d] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return U.forEach(this, (i, o) => {
            i != null && i !== !1 && (n[o] = t && U.isArray(i) ? i.join(", ") : i)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const i = new this(t);
        return n.forEach(o => i.set(o)),
        i
    }
    static accessor(t) {
        const i = (this[by] = this[by] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function l(u) {
            const d = yo(u);
            i[d] || (zP(o, u),
            i[d] = !0)
        }
        return U.isArray(t) ? t.forEach(l) : l(t),
        this
    }
}
;
It.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(It.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(i) {
            this[n] = i
        }
    }
}
);
U.freezeMethods(It);
function kd(e, t) {
    const n = this || Xo
      , i = t || n
      , o = It.from(i.headers);
    let l = i.data;
    return U.forEach(e, function(d) {
        l = d.call(n, l, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    l
}
function Iw(e) {
    return !!(e && e.__CANCEL__)
}
function ki(e, t, n) {
    Ee.call(this, e ?? "canceled", Ee.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
U.inherits(ki, Ee, {
    __CANCEL__: !0
});
function Fw(e, t, n) {
    const i = n.config.validateStatus;
    !n.status || !i || i(n.status) ? e(n) : t(new Ee("Request failed with status code " + n.status,[Ee.ERR_BAD_REQUEST, Ee.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function $P(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function HP(e, t) {
    e = e || 10;
    const n = new Array(e)
      , i = new Array(e);
    let o = 0, l = 0, u;
    return t = t !== void 0 ? t : 1e3,
    function(f) {
        const p = Date.now()
          , g = i[l];
        u || (u = p),
        n[o] = f,
        i[o] = p;
        let y = l
          , v = 0;
        for (; y !== o; )
            v += n[y++],
            y = y % e;
        if (o = (o + 1) % e,
        o === l && (l = (l + 1) % e),
        p - u < t)
            return;
        const x = g && p - g;
        return x ? Math.round(v * 1e3 / x) : void 0
    }
}
function WP(e, t) {
    let n = 0, i = 1e3 / t, o, l;
    const u = (p, g=Date.now()) => {
        n = g,
        o = null,
        l && (clearTimeout(l),
        l = null),
        e(...p)
    }
    ;
    return [ (...p) => {
        const g = Date.now()
          , y = g - n;
        y >= i ? u(p, g) : (o = p,
        l || (l = setTimeout( () => {
            l = null,
            u(o)
        }
        , i - y)))
    }
    , () => o && u(o)]
}
const ql = (e, t, n=3) => {
    let i = 0;
    const o = HP(50, 250);
    return WP(l => {
        const u = l.loaded
          , d = l.lengthComputable ? l.total : void 0
          , f = u - i
          , p = o(f)
          , g = u <= d;
        i = u;
        const y = {
            loaded: u,
            total: d,
            progress: d ? u / d : void 0,
            bytes: f,
            rate: p || void 0,
            estimated: p && d && g ? (d - u) / p : void 0,
            event: l,
            lengthComputable: d != null,
            [t ? "download" : "upload"]: !0
        };
        e(y)
    }
    , n)
}
  , Ey = (e, t) => {
    const n = e != null;
    return [i => t[0]({
        lengthComputable: n,
        total: e,
        loaded: i
    }), t[1]]
}
  , Cy = e => (...t) => U.asap( () => e(...t))
  , qP = vt.hasStandardBrowserEnv ? ( (e, t) => n => (n = new URL(n,vt.origin),
e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(vt.origin), vt.navigator && /(msie|trident)/i.test(vt.navigator.userAgent)) : () => !0
  , KP = vt.hasStandardBrowserEnv ? {
    write(e, t, n, i, o, l) {
        const u = [e + "=" + encodeURIComponent(t)];
        U.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()),
        U.isString(i) && u.push("path=" + i),
        U.isString(o) && u.push("domain=" + o),
        l === !0 && u.push("secure"),
        document.cookie = u.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function QP(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function GP(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Vw(e, t, n) {
    let i = !QP(t);
    return e && (i || n == !1) ? GP(e, t) : t
}
const ky = e => e instanceof It ? {
    ...e
} : e;
function Ss(e, t) {
    t = t || {};
    const n = {};
    function i(p, g, y, v) {
        return U.isPlainObject(p) && U.isPlainObject(g) ? U.merge.call({
            caseless: v
        }, p, g) : U.isPlainObject(g) ? U.merge({}, g) : U.isArray(g) ? g.slice() : g
    }
    function o(p, g, y, v) {
        if (U.isUndefined(g)) {
            if (!U.isUndefined(p))
                return i(void 0, p, y, v)
        } else
            return i(p, g, y, v)
    }
    function l(p, g) {
        if (!U.isUndefined(g))
            return i(void 0, g)
    }
    function u(p, g) {
        if (U.isUndefined(g)) {
            if (!U.isUndefined(p))
                return i(void 0, p)
        } else
            return i(void 0, g)
    }
    function d(p, g, y) {
        if (y in t)
            return i(p, g);
        if (y in e)
            return i(void 0, p)
    }
    const f = {
        url: l,
        method: l,
        data: l,
        baseURL: u,
        transformRequest: u,
        transformResponse: u,
        paramsSerializer: u,
        timeout: u,
        timeoutMessage: u,
        withCredentials: u,
        withXSRFToken: u,
        adapter: u,
        responseType: u,
        xsrfCookieName: u,
        xsrfHeaderName: u,
        onUploadProgress: u,
        onDownloadProgress: u,
        decompress: u,
        maxContentLength: u,
        maxBodyLength: u,
        beforeRedirect: u,
        transport: u,
        httpAgent: u,
        httpsAgent: u,
        cancelToken: u,
        socketPath: u,
        responseEncoding: u,
        validateStatus: d,
        headers: (p, g, y) => o(ky(p), ky(g), y, !0)
    };
    return U.forEach(Object.keys({
        ...e,
        ...t
    }), function(g) {
        const y = f[g] || o
          , v = y(e[g], t[g], g);
        U.isUndefined(v) && y !== d || (n[g] = v)
    }),
    n
}
const Bw = e => {
    const t = Ss({}, e);
    let {data: n, withXSRFToken: i, xsrfHeaderName: o, xsrfCookieName: l, headers: u, auth: d} = t;
    if (t.headers = u = It.from(u),
    t.url = Mw(Vw(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer),
    d && u.set("Authorization", "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))),
    U.isFormData(n)) {
        if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
            u.setContentType(void 0);
        else if (U.isFunction(n.getHeaders)) {
            const f = n.getHeaders()
              , p = ["content-type", "content-length"];
            Object.entries(f).forEach( ([g,y]) => {
                p.includes(g.toLowerCase()) && u.set(g, y)
            }
            )
        }
    }
    if (vt.hasStandardBrowserEnv && (i && U.isFunction(i) && (i = i(t)),
    i || i !== !1 && qP(t.url))) {
        const f = o && l && KP.read(l);
        f && u.set(o, f)
    }
    return t
}
  , XP = typeof XMLHttpRequest < "u"
  , YP = XP && function(e) {
    return new Promise(function(n, i) {
        const o = Bw(e);
        let l = o.data;
        const u = It.from(o.headers).normalize();
        let {responseType: d, onUploadProgress: f, onDownloadProgress: p} = o, g, y, v, x, b;
        function C() {
            x && x(),
            b && b(),
            o.cancelToken && o.cancelToken.unsubscribe(g),
            o.signal && o.signal.removeEventListener("abort", g)
        }
        let E = new XMLHttpRequest;
        E.open(o.method.toUpperCase(), o.url, !0),
        E.timeout = o.timeout;
        function T() {
            if (!E)
                return;
            const O = It.from("getAllResponseHeaders"in E && E.getAllResponseHeaders())
              , z = {
                data: !d || d === "text" || d === "json" ? E.responseText : E.response,
                status: E.status,
                statusText: E.statusText,
                headers: O,
                config: e,
                request: E
            };
            Fw(function(J) {
                n(J),
                C()
            }, function(J) {
                i(J),
                C()
            }, z),
            E = null
        }
        "onloadend"in E ? E.onloadend = T : E.onreadystatechange = function() {
            !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(T)
        }
        ,
        E.onabort = function() {
            E && (i(new Ee("Request aborted",Ee.ECONNABORTED,e,E)),
            E = null)
        }
        ,
        E.onerror = function(I) {
            const z = I && I.message ? I.message : "Network Error"
              , G = new Ee(z,Ee.ERR_NETWORK,e,E);
            G.event = I || null,
            i(G),
            E = null
        }
        ,
        E.ontimeout = function() {
            let I = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
            const z = o.transitional || Dw;
            o.timeoutErrorMessage && (I = o.timeoutErrorMessage),
            i(new Ee(I,z.clarifyTimeoutError ? Ee.ETIMEDOUT : Ee.ECONNABORTED,e,E)),
            E = null
        }
        ,
        l === void 0 && u.setContentType(null),
        "setRequestHeader"in E && U.forEach(u.toJSON(), function(I, z) {
            E.setRequestHeader(z, I)
        }),
        U.isUndefined(o.withCredentials) || (E.withCredentials = !!o.withCredentials),
        d && d !== "json" && (E.responseType = o.responseType),
        p && ([v,b] = ql(p, !0),
        E.addEventListener("progress", v)),
        f && E.upload && ([y,x] = ql(f),
        E.upload.addEventListener("progress", y),
        E.upload.addEventListener("loadend", x)),
        (o.cancelToken || o.signal) && (g = O => {
            E && (i(!O || O.type ? new ki(null,e,E) : O),
            E.abort(),
            E = null)
        }
        ,
        o.cancelToken && o.cancelToken.subscribe(g),
        o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
        const M = $P(o.url);
        if (M && vt.protocols.indexOf(M) === -1) {
            i(new Ee("Unsupported protocol " + M + ":",Ee.ERR_BAD_REQUEST,e));
            return
        }
        E.send(l || null)
    }
    )
}
  , JP = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let i = new AbortController, o;
        const l = function(p) {
            if (!o) {
                o = !0,
                d();
                const g = p instanceof Error ? p : this.reason;
                i.abort(g instanceof Ee ? g : new ki(g instanceof Error ? g.message : g))
            }
        };
        let u = t && setTimeout( () => {
            u = null,
            l(new Ee(`timeout ${t} of ms exceeded`,Ee.ETIMEDOUT))
        }
        , t);
        const d = () => {
            e && (u && clearTimeout(u),
            u = null,
            e.forEach(p => {
                p.unsubscribe ? p.unsubscribe(l) : p.removeEventListener("abort", l)
            }
            ),
            e = null)
        }
        ;
        e.forEach(p => p.addEventListener("abort", l));
        const {signal: f} = i;
        return f.unsubscribe = () => U.asap(d),
        f
    }
}
  , ZP = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let i = 0, o;
    for (; i < n; )
        o = i + t,
        yield e.slice(i, o),
        i = o
}
  , eR = async function*(e, t) {
    for await(const n of tR(e))
        yield*ZP(n, t)
}
  , tR = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: i} = await t.read();
            if (n)
                break;
            yield i
        }
    } finally {
        await t.cancel()
    }
}
  , Ty = (e, t, n, i) => {
    const o = eR(e, t);
    let l = 0, u, d = f => {
        u || (u = !0,
        i && i(f))
    }
    ;
    return new ReadableStream({
        async pull(f) {
            try {
                const {done: p, value: g} = await o.next();
                if (p) {
                    d(),
                    f.close();
                    return
                }
                let y = g.byteLength;
                if (n) {
                    let v = l += y;
                    n(v)
                }
                f.enqueue(new Uint8Array(g))
            } catch (p) {
                throw d(p),
                p
            }
        },
        cancel(f) {
            return d(f),
            o.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Py = 64 * 1024
  , {isFunction: wl} = U
  , nR = ( ({Request: e, Response: t}) => ({
    Request: e,
    Response: t
}))(U.global)
  , {ReadableStream: Ry, TextEncoder: _y} = U.global
  , Ay = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , rR = e => {
    e = U.merge.call({
        skipUndefined: !0
    }, nR, e);
    const {fetch: t, Request: n, Response: i} = e
      , o = t ? wl(t) : typeof fetch == "function"
      , l = wl(n)
      , u = wl(i);
    if (!o)
        return !1;
    const d = o && wl(Ry)
      , f = o && (typeof _y == "function" ? (b => C => b.encode(C))(new _y) : async b => new Uint8Array(await new n(b).arrayBuffer()))
      , p = l && d && Ay( () => {
        let b = !1;
        const C = new n(vt.origin,{
            body: new Ry,
            method: "POST",
            get duplex() {
                return b = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return b && !C
    }
    )
      , g = u && d && Ay( () => U.isReadableStream(new i("").body))
      , y = {
        stream: g && (b => b.body)
    };
    o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(b => {
        !y[b] && (y[b] = (C, E) => {
            let T = C && C[b];
            if (T)
                return T.call(C);
            throw new Ee(`Response type '${b}' is not supported`,Ee.ERR_NOT_SUPPORT,E)
        }
        )
    }
    );
    const v = async b => {
        if (b == null)
            return 0;
        if (U.isBlob(b))
            return b.size;
        if (U.isSpecCompliantForm(b))
            return (await new n(vt.origin,{
                method: "POST",
                body: b
            }).arrayBuffer()).byteLength;
        if (U.isArrayBufferView(b) || U.isArrayBuffer(b))
            return b.byteLength;
        if (U.isURLSearchParams(b) && (b = b + ""),
        U.isString(b))
            return (await f(b)).byteLength
    }
      , x = async (b, C) => {
        const E = U.toFiniteNumber(b.getContentLength());
        return E ?? v(C)
    }
    ;
    return async b => {
        let {url: C, method: E, data: T, signal: M, cancelToken: O, timeout: I, onDownloadProgress: z, onUploadProgress: G, responseType: J, headers: _, withCredentials: D="same-origin", fetchOptions: $} = Bw(b)
          , Y = t || fetch;
        J = J ? (J + "").toLowerCase() : "text";
        let H = JP([M, O && O.toAbortSignal()], I)
          , ne = null;
        const we = H && H.unsubscribe && ( () => {
            H.unsubscribe()
        }
        );
        let fe;
        try {
            if (G && p && E !== "get" && E !== "head" && (fe = await x(_, T)) !== 0) {
                let L = new n(C,{
                    method: "POST",
                    body: T,
                    duplex: "half"
                }), W;
                if (U.isFormData(T) && (W = L.headers.get("content-type")) && _.setContentType(W),
                L.body) {
                    const [le,pe] = Ey(fe, ql(Cy(G)));
                    T = Ty(L.body, Py, le, pe)
                }
            }
            U.isString(D) || (D = D ? "include" : "omit");
            const he = l && "credentials"in n.prototype
              , de = {
                ...$,
                signal: H,
                method: E.toUpperCase(),
                headers: _.normalize().toJSON(),
                body: T,
                duplex: "half",
                credentials: he ? D : void 0
            };
            ne = l && new n(C,de);
            let B = await (l ? Y(ne, $) : Y(C, de));
            const ae = g && (J === "stream" || J === "response");
            if (g && (z || ae && we)) {
                const L = {};
                ["status", "statusText", "headers"].forEach(be => {
                    L[be] = B[be]
                }
                );
                const W = U.toFiniteNumber(B.headers.get("content-length"))
                  , [le,pe] = z && Ey(W, ql(Cy(z), !0)) || [];
                B = new i(Ty(B.body, Py, le, () => {
                    pe && pe(),
                    we && we()
                }
                ),L)
            }
            J = J || "text";
            let Z = await y[U.findKey(y, J) || "text"](B, b);
            return !ae && we && we(),
            await new Promise( (L, W) => {
                Fw(L, W, {
                    data: Z,
                    headers: It.from(B.headers),
                    status: B.status,
                    statusText: B.statusText,
                    config: b,
                    request: ne
                })
            }
            )
        } catch (he) {
            throw we && we(),
            he && he.name === "TypeError" && /Load failed|fetch/i.test(he.message) ? Object.assign(new Ee("Network Error",Ee.ERR_NETWORK,b,ne), {
                cause: he.cause || he
            }) : Ee.from(he, he && he.code, b, ne)
        }
    }
}
  , sR = new Map
  , Uw = e => {
    let t = e ? e.env : {};
    const {fetch: n, Request: i, Response: o} = t
      , l = [i, o, n];
    let u = l.length, d = u, f, p, g = sR;
    for (; d--; )
        f = l[d],
        p = g.get(f),
        p === void 0 && g.set(f, p = d ? new Map : rR(t)),
        g = p;
    return p
}
;
Uw();
const pf = {
    http: SP,
    xhr: YP,
    fetch: {
        get: Uw
    }
};
U.forEach(pf, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Ny = e => `- ${e}`
  , iR = e => U.isFunction(e) || e === null || e === !1
  , zw = {
    getAdapter: (e, t) => {
        e = U.isArray(e) ? e : [e];
        const {length: n} = e;
        let i, o;
        const l = {};
        for (let u = 0; u < n; u++) {
            i = e[u];
            let d;
            if (o = i,
            !iR(i) && (o = pf[(d = String(i)).toLowerCase()],
            o === void 0))
                throw new Ee(`Unknown adapter '${d}'`);
            if (o && (U.isFunction(o) || (o = o.get(t))))
                break;
            l[d || "#" + u] = o
        }
        if (!o) {
            const u = Object.entries(l).map( ([f,p]) => `adapter ${f} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build"));
            let d = n ? u.length > 1 ? `since :
` + u.map(Ny).join(`
`) : " " + Ny(u[0]) : "as no adapter specified";
            throw new Ee("There is no suitable adapter to dispatch the request " + d,"ERR_NOT_SUPPORT")
        }
        return o
    }
    ,
    adapters: pf
};
function Td(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new ki(null,e)
}
function Oy(e) {
    return Td(e),
    e.headers = It.from(e.headers),
    e.data = kd.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    zw.getAdapter(e.adapter || Xo.adapter, e)(e).then(function(i) {
        return Td(e),
        i.data = kd.call(e, e.transformResponse, i),
        i.headers = It.from(i.headers),
        i
    }, function(i) {
        return Iw(i) || (Td(e),
        i && i.response && (i.response.data = kd.call(e, e.transformResponse, i.response),
        i.response.headers = It.from(i.response.headers))),
        Promise.reject(i)
    })
}
const $w = "1.12.2"
  , lu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    lu[e] = function(i) {
        return typeof i === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const Ly = {};
lu.transitional = function(t, n, i) {
    function o(l, u) {
        return "[Axios v" + $w + "] Transitional option '" + l + "'" + u + (i ? ". " + i : "")
    }
    return (l, u, d) => {
        if (t === !1)
            throw new Ee(o(u, " has been removed" + (n ? " in " + n : "")),Ee.ERR_DEPRECATED);
        return n && !Ly[u] && (Ly[u] = !0,
        console.warn(o(u, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(l, u, d) : !0
    }
}
;
lu.spelling = function(t) {
    return (n, i) => (console.warn(`${i} is likely a misspelling of ${t}`),
    !0)
}
;
function oR(e, t, n) {
    if (typeof e != "object")
        throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(e);
    let o = i.length;
    for (; o-- > 0; ) {
        const l = i[o]
          , u = t[l];
        if (u) {
            const d = e[l]
              , f = d === void 0 || u(d, l, e);
            if (f !== !0)
                throw new Ee("option " + l + " must be " + f,Ee.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new Ee("Unknown option " + l,Ee.ERR_BAD_OPTION)
    }
}
const Dl = {
    assertOptions: oR,
    validators: lu
}
  , xn = Dl.validators;
let gs = class {
    constructor(t) {
        this.defaults = t || {},
        this.interceptors = {
            request: new Sy,
            response: new Sy
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (i) {
            if (i instanceof Error) {
                let o = {};
                Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error;
                const l = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? l && !String(i.stack).endsWith(l.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + l) : i.stack = l
                } catch {}
            }
            throw i
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = Ss(this.defaults, n);
        const {transitional: i, paramsSerializer: o, headers: l} = n;
        i !== void 0 && Dl.assertOptions(i, {
            silentJSONParsing: xn.transitional(xn.boolean),
            forcedJSONParsing: xn.transitional(xn.boolean),
            clarifyTimeoutError: xn.transitional(xn.boolean)
        }, !1),
        o != null && (U.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : Dl.assertOptions(o, {
            encode: xn.function,
            serialize: xn.function
        }, !0)),
        n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0),
        Dl.assertOptions(n, {
            baseUrl: xn.spelling("baseURL"),
            withXsrfToken: xn.spelling("withXSRFToken")
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let u = l && U.merge(l.common, l[n.method]);
        l && U.forEach(["delete", "get", "head", "post", "put", "patch", "common"], b => {
            delete l[b]
        }
        ),
        n.headers = It.concat(u, l);
        const d = [];
        let f = !0;
        this.interceptors.request.forEach(function(C) {
            typeof C.runWhen == "function" && C.runWhen(n) === !1 || (f = f && C.synchronous,
            d.unshift(C.fulfilled, C.rejected))
        });
        const p = [];
        this.interceptors.response.forEach(function(C) {
            p.push(C.fulfilled, C.rejected)
        });
        let g, y = 0, v;
        if (!f) {
            const b = [Oy.bind(this), void 0];
            for (b.unshift(...d),
            b.push(...p),
            v = b.length,
            g = Promise.resolve(n); y < v; )
                g = g.then(b[y++], b[y++]);
            return g
        }
        v = d.length;
        let x = n;
        for (; y < v; ) {
            const b = d[y++]
              , C = d[y++];
            try {
                x = b(x)
            } catch (E) {
                C.call(this, E);
                break
            }
        }
        try {
            g = Oy.call(this, x)
        } catch (b) {
            return Promise.reject(b)
        }
        for (y = 0,
        v = p.length; y < v; )
            g = g.then(p[y++], p[y++]);
        return g
    }
    getUri(t) {
        t = Ss(this.defaults, t);
        const n = Vw(t.baseURL, t.url, t.allowAbsoluteUrls);
        return Mw(n, t.params, t.paramsSerializer)
    }
}
;
U.forEach(["delete", "get", "head", "options"], function(t) {
    gs.prototype[t] = function(n, i) {
        return this.request(Ss(i || {}, {
            method: t,
            url: n,
            data: (i || {}).data
        }))
    }
});
U.forEach(["post", "put", "patch"], function(t) {
    function n(i) {
        return function(l, u, d) {
            return this.request(Ss(d || {}, {
                method: t,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: l,
                data: u
            }))
        }
    }
    gs.prototype[t] = n(),
    gs.prototype[t + "Form"] = n(!0)
});
let aR = class Hw {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(l) {
            n = l
        }
        );
        const i = this;
        this.promise.then(o => {
            if (!i._listeners)
                return;
            let l = i._listeners.length;
            for (; l-- > 0; )
                i._listeners[l](o);
            i._listeners = null
        }
        ),
        this.promise.then = o => {
            let l;
            const u = new Promise(d => {
                i.subscribe(d),
                l = d
            }
            ).then(o);
            return u.cancel = function() {
                i.unsubscribe(l)
            }
            ,
            u
        }
        ,
        t(function(l, u, d) {
            i.reason || (i.reason = new ki(l,u,d),
            n(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = i => {
            t.abort(i)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new Hw(function(o) {
                t = o
            }
            ),
            cancel: t
        }
    }
}
;
function lR(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function uR(e) {
    return U.isObject(e) && e.isAxiosError === !0
}
const mf = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(mf).forEach( ([e,t]) => {
    mf[t] = e
}
);
function Ww(e) {
    const t = new gs(e)
      , n = bw(gs.prototype.request, t);
    return U.extend(n, gs.prototype, t, {
        allOwnKeys: !0
    }),
    U.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(o) {
        return Ww(Ss(e, o))
    }
    ,
    n
}
const Ye = Ww(Xo);
Ye.Axios = gs;
Ye.CanceledError = ki;
Ye.CancelToken = aR;
Ye.isCancel = Iw;
Ye.VERSION = $w;
Ye.toFormData = au;
Ye.AxiosError = Ee;
Ye.Cancel = Ye.CanceledError;
Ye.all = function(t) {
    return Promise.all(t)
}
;
Ye.spread = lR;
Ye.isAxiosError = uR;
Ye.mergeConfig = Ss;
Ye.AxiosHeaders = It;
Ye.formToJSON = e => jw(U.isHTMLForm(e) ? new FormData(e) : e);
Ye.getAdapter = zw.getAdapter;
Ye.HttpStatusCode = mf;
Ye.default = Ye;
const {Axios: K2, AxiosError: Q2, CanceledError: G2, isCancel: X2, CancelToken: Y2, VERSION: J2, all: Z2, Cancel: eM, isAxiosError: tM, spread: nM, toFormData: rM, AxiosHeaders: sM, HttpStatusCode: iM, formToJSON: oM, getAdapter: aM, mergeConfig: lM} = Ye
  , cR = typeof window > "u"
  , My = !cR && window.self !== window.top
  , dt = [];
for (let e = 0; e < 256; ++e)
    dt.push((e + 256).toString(16).slice(1));
function dR(e, t=0) {
    return (dt[e[t + 0]] + dt[e[t + 1]] + dt[e[t + 2]] + dt[e[t + 3]] + "-" + dt[e[t + 4]] + dt[e[t + 5]] + "-" + dt[e[t + 6]] + dt[e[t + 7]] + "-" + dt[e[t + 8]] + dt[e[t + 9]] + "-" + dt[e[t + 10]] + dt[e[t + 11]] + dt[e[t + 12]] + dt[e[t + 13]] + dt[e[t + 14]] + dt[e[t + 15]]).toLowerCase()
}
let Pd;
const fR = new Uint8Array(16);
function hR() {
    if (!Pd) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        Pd = crypto.getRandomValues.bind(crypto)
    }
    return Pd(fR)
}
const pR = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , Dy = {
    randomUUID: pR
};
function mR(e, t, n) {
    var o;
    e = e || {};
    const i = e.random ?? ((o = e.rng) == null ? void 0 : o.call(e)) ?? hR();
    if (i.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64,
    i[8] = i[8] & 63 | 128,
    dR(i)
}
function gR(e, t, n) {
    return Dy.randomUUID && !e ? Dy.randomUUID() : mR(e)
}
class yR extends Error {
    constructor(t, n, i, o, l) {
        super(t),
        this.name = "Base44Error",
        this.status = n,
        this.code = i,
        this.data = o,
        this.originalError = l
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}
function bo({baseURL: e, headers: t={}, token: n, interceptResponses: i=!0, onError: o}) {
    const l = Ye.create({
        baseURL: e,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...t
        }
    });
    return n && (l.defaults.headers.common.Authorization = `Bearer ${n}`),
    l.interceptors.request.use(u => {
        typeof window < "u" && u.headers.set("X-Origin-URL", window.location.href);
        const d = gR();
        if (u.requestId = d,
        My)
            try {
                window.parent.postMessage({
                    type: "api-request-start",
                    requestId: d,
                    data: {
                        url: e + u.url,
                        method: u.method,
                        body: u.data instanceof FormData ? "[FormData object]" : u.data
                    }
                }, "*")
            } catch {}
        return u
    }
    ),
    i && l.interceptors.response.use(u => {
        var d;
        const f = (d = u.config) === null || d === void 0 ? void 0 : d.requestId;
        try {
            My && f && window.parent.postMessage({
                type: "api-request-end",
                requestId: f,
                data: {
                    statusCode: u.status,
                    response: u.data
                }
            }, "*")
        } catch {}
        return u.data
    }
    , u => {
        var d, f, p, g, y, v, x, b;
        const C = ((f = (d = u.response) === null || d === void 0 ? void 0 : d.data) === null || f === void 0 ? void 0 : f.message) || ((g = (p = u.response) === null || p === void 0 ? void 0 : p.data) === null || g === void 0 ? void 0 : g.detail) || u.message
          , E = new yR(C,(y = u.response) === null || y === void 0 ? void 0 : y.status,(x = (v = u.response) === null || v === void 0 ? void 0 : v.data) === null || x === void 0 ? void 0 : x.code,(b = u.response) === null || b === void 0 ? void 0 : b.data,u);
        return o == null || o(E),
        Promise.reject(E)
    }
    ),
    l
}
function jy(e, t) {
    return new Proxy({},{
        get(n, i) {
            if (!(typeof i != "string" || i === "then" || i.startsWith("_")))
                return vR(e, t, i)
        }
    })
}
function vR(e, t, n) {
    const i = `/apps/${t}/entities/${n}`;
    return {
        async list(o, l, u, d) {
            const f = {};
            return o && (f.sort = o),
            l && (f.limit = l),
            u && (f.skip = u),
            d && (f.fields = Array.isArray(d) ? d.join(",") : d),
            e.get(i, {
                params: f
            })
        },
        async filter(o, l, u, d, f) {
            const p = {
                q: JSON.stringify(o)
            };
            return l && (p.sort = l),
            u && (p.limit = u),
            d && (p.skip = d),
            f && (p.fields = Array.isArray(f) ? f.join(",") : f),
            e.get(i, {
                params: p
            })
        },
        async get(o) {
            return e.get(`${i}/${o}`)
        },
        async create(o) {
            return e.post(i, o)
        },
        async update(o, l) {
            return e.put(`${i}/${o}`, l)
        },
        async delete(o) {
            return e.delete(`${i}/${o}`)
        },
        async deleteMany(o) {
            return e.delete(i, {
                data: o
            })
        },
        async bulkCreate(o) {
            return e.post(`${i}/bulk`, o)
        },
        async importEntities(o) {
            const l = new FormData;
            return l.append("file", o, o.name),
            e.post(`${i}/import`, l, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
    }
}
function Iy(e, t) {
    return new Proxy({},{
        get(n, i) {
            if (!(typeof i != "string" || i === "then" || i.startsWith("_")))
                return new Proxy({},{
                    get(o, l) {
                        if (!(typeof l != "string" || l === "then" || l.startsWith("_")))
                            return async u => {
                                if (typeof u == "string")
                                    throw new Error(`Integration ${l} must receive an object with named parameters, received: ${u}`);
                                let d, f;
                                return u instanceof FormData || u && Object.values(u).some(p => p instanceof File) ? (d = new FormData,
                                Object.keys(u).forEach(p => {
                                    u[p]instanceof File ? d.append(p, u[p], u[p].name) : typeof u[p] == "object" && u[p] !== null ? d.append(p, JSON.stringify(u[p])) : d.append(p, u[p])
                                }
                                ),
                                f = "multipart/form-data") : (d = u,
                                f = "application/json"),
                                i === "Core" ? e.post(`/apps/${t}/integration-endpoints/Core/${l}`, d || u, {
                                    headers: {
                                        "Content-Type": f
                                    }
                                }) : e.post(`/apps/${t}/integration-endpoints/installable/${i}/integration-endpoints/${l}`, d || u, {
                                    headers: {
                                        "Content-Type": f
                                    }
                                })
                            }
                    }
                })
        }
    })
}
function wR(e, t, n, i) {
    return {
        async me() {
            return e.get(`/apps/${n}/entities/User/me`)
        },
        async updateMe(o) {
            return e.put(`/apps/${n}/entities/User/me`, o)
        },
        redirectToLogin(o) {
            var l;
            if (typeof window > "u")
                throw new Error("Login method can only be used in a browser environment");
            const u = o ? new URL(o,window.location.origin).toString() : window.location.href
              , d = `${(l = i.appBaseUrl) !== null && l !== void 0 ? l : ""}/login?from_url=${encodeURIComponent(u)}`;
            window.location.href = d
        },
        logout(o) {
            if (delete e.defaults.headers.common.Authorization,
            typeof window < "u" && window.localStorage)
                try {
                    window.localStorage.removeItem("base44_access_token"),
                    window.localStorage.removeItem("token")
                } catch (l) {
                    console.error("Failed to remove token from localStorage:", l)
                }
            typeof window < "u" && (o ? window.location.href = o : window.location.reload())
        },
        setToken(o, l=!0) {
            if (o && (e.defaults.headers.common.Authorization = `Bearer ${o}`,
            t.defaults.headers.common.Authorization = `Bearer ${o}`,
            l && typeof window < "u" && window.localStorage))
                try {
                    window.localStorage.setItem("base44_access_token", o),
                    window.localStorage.setItem("token", o)
                } catch (u) {
                    console.error("Failed to save token to localStorage:", u)
                }
        },
        async loginViaEmailPassword(o, l, u) {
            var d;
            try {
                const f = await e.post(`/apps/${n}/auth/login`, {
                    email: o,
                    password: l,
                    ...u && {
                        turnstile_token: u
                    }
                })
                  , {access_token: p, user: g} = f;
                return p && this.setToken(p),
                {
                    access_token: p,
                    user: g
                }
            } catch (f) {
                throw ((d = f.response) === null || d === void 0 ? void 0 : d.status) === 401 && await this.logout(),
                f
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(),
                !0
            } catch {
                return !1
            }
        },
        inviteUser(o, l) {
            return e.post(`/apps/${n}/users/invite-user`, {
                user_email: o,
                role: l
            })
        },
        register(o) {
            return e.post(`/apps/${n}/auth/register`, o)
        },
        verifyOtp({email: o, otpCode: l}) {
            return e.post(`/apps/${n}/auth/verify-otp`, {
                email: o,
                otp_code: l
            })
        },
        resendOtp(o) {
            return e.post(`/apps/${n}/auth/resend-otp`, {
                email: o
            })
        },
        resetPasswordRequest(o) {
            return e.post(`/apps/${n}/auth/reset-password-request`, {
                email: o
            })
        },
        resetPassword({resetToken: o, newPassword: l}) {
            return e.post(`/apps/${n}/auth/reset-password`, {
                reset_token: o,
                new_password: l
            })
        },
        changePassword({userId: o, currentPassword: l, newPassword: u}) {
            return e.post(`/apps/${n}/auth/change-password`, {
                user_id: o,
                current_password: l,
                new_password: u
            })
        }
    }
}
function xR(e, t, n) {
    return {
        async getAccessToken(i) {
            const o = `/apps/${t}/auth/sso/accesstoken/${i}`
              , l = {};
            return n && (l["on-behalf-of"] = `Bearer ${n}`),
            e.get(o, {
                headers: l
            })
        }
    }
}
function nh(e={}) {
    const {storageKey: t="base44_access_token", paramName: n="access_token", saveToStorage: i=!0, removeFromUrl: o=!0} = e;
    let l = null;
    if (typeof window < "u" && window.location)
        try {
            const u = new URLSearchParams(window.location.search);
            if (l = u.get(n),
            l) {
                if (i && SR(l, {
                    storageKey: t
                }),
                o) {
                    u.delete(n);
                    const d = `${window.location.pathname}${u.toString() ? `?${u.toString()}` : ""}${window.location.hash}`;
                    window.history.replaceState({}, document.title, d)
                }
                return l
            }
        } catch (u) {
            console.error("Error retrieving token from URL:", u)
        }
    if (typeof window < "u" && window.localStorage)
        try {
            return l = window.localStorage.getItem(t),
            l
        } catch (u) {
            console.error("Error retrieving token from localStorage:", u)
        }
    return null
}
function SR(e, t) {
    const {storageKey: n="base44_access_token"} = t;
    if (typeof window > "u" || !window.localStorage || !e)
        return !1;
    try {
        return window.localStorage.setItem(n, e),
        window.localStorage.setItem("token", e),
        !0
    } catch (i) {
        return console.error("Error saving token to localStorage:", i),
        !1
    }
}
function Fy(e, t) {
    return {
        async invoke(n, i) {
            if (typeof i == "string")
                throw new Error(`Function ${n} must receive an object with named parameters, received: ${i}`);
            let o, l;
            return i instanceof FormData || i && Object.values(i).some(u => u instanceof File) ? (o = new FormData,
            Object.keys(i).forEach(u => {
                i[u]instanceof File ? o.append(u, i[u], i[u].name) : typeof i[u] == "object" && i[u] !== null ? o.append(u, JSON.stringify(i[u])) : o.append(u, i[u])
            }
            ),
            l = "multipart/form-data") : (o = i,
            l = "application/json"),
            e.post(`/apps/${t}/functions/${n}`, o || i, {
                headers: {
                    "Content-Type": l
                }
            })
        }
    }
}
function Vy({axios: e, socket: t, appId: n, serverUrl: i, token: o}) {
    const l = `/apps/${n}/agents`;
    return {
        getConversations: () => e.get(`${l}/conversations`),
        getConversation: x => e.get(`${l}/conversations/${x}`),
        listConversations: x => e.get(`${l}/conversations`, {
            params: x
        }),
        createConversation: x => e.post(`${l}/conversations`, x),
        addMessage: async (x, b) => {
            const C = `/agent-conversations/${x.id}`;
            return await t.updateModel(C, {
                ...x,
                messages: [...x.messages || [], b]
            }),
            e.post(`${l}/conversations/${x.id}/messages`, b)
        }
        ,
        subscribeToConversation: (x, b) => {
            const C = `/agent-conversations/${x}`;
            return t.subscribeToRoom(C, {
                connect: () => {}
                ,
                update_model: ({data: E}) => {
                    const T = JSON.parse(E);
                    b == null || b(T)
                }
            })
        }
        ,
        getWhatsAppConnectURL: x => {
            const b = `${i}/api/apps/${n}/agents/${encodeURIComponent(x)}/whatsapp`
              , C = o ?? nh();
            return C ? `${b}?token=${C}` : b
        }
    }
}
function By(e, t) {
    const n = `/app-logs/${t}`;
    return {
        async logUserInApp(i) {
            await e.post(`${n}/log-user-in-app/${i}`)
        },
        async fetchLogs(i={}) {
            return await e.get(n, {
                params: i
            })
        },
        async getStats(i={}) {
            return await e.get(`${n}/stats`, {
                params: i
            })
        }
    }
}
const _n = Object.create(null);
_n.open = "0";
_n.close = "1";
_n.ping = "2";
_n.pong = "3";
_n.message = "4";
_n.upgrade = "5";
_n.noop = "6";
const jl = Object.create(null);
Object.keys(_n).forEach(e => {
    jl[_n[e]] = e
}
);
const gf = {
    type: "error",
    data: "parser error"
}
  , qw = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , Kw = typeof ArrayBuffer == "function"
  , Qw = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer
  , rh = ({type: e, data: t}, n, i) => qw && t instanceof Blob ? n ? i(t) : Uy(t, i) : Kw && (t instanceof ArrayBuffer || Qw(t)) ? n ? i(t) : Uy(new Blob([t]), i) : i(_n[e] + (t || ""))
  , Uy = (e, t) => {
    const n = new FileReader;
    return n.onload = function() {
        const i = n.result.split(",")[1];
        t("b" + (i || ""))
    }
    ,
    n.readAsDataURL(e)
}
;
function zy(e) {
    return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer,e.byteOffset,e.byteLength)
}
let Rd;
function bR(e, t) {
    if (qw && e.data instanceof Blob)
        return e.data.arrayBuffer().then(zy).then(t);
    if (Kw && (e.data instanceof ArrayBuffer || Qw(e.data)))
        return t(zy(e.data));
    rh(e, !1, n => {
        Rd || (Rd = new TextEncoder),
        t(Rd.encode(n))
    }
    )
}
const $y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Eo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < $y.length; e++)
    Eo[$y.charCodeAt(e)] = e;
const ER = e => {
    let t = e.length * .75, n = e.length, i, o = 0, l, u, d, f;
    e[e.length - 1] === "=" && (t--,
    e[e.length - 2] === "=" && t--);
    const p = new ArrayBuffer(t)
      , g = new Uint8Array(p);
    for (i = 0; i < n; i += 4)
        l = Eo[e.charCodeAt(i)],
        u = Eo[e.charCodeAt(i + 1)],
        d = Eo[e.charCodeAt(i + 2)],
        f = Eo[e.charCodeAt(i + 3)],
        g[o++] = l << 2 | u >> 4,
        g[o++] = (u & 15) << 4 | d >> 2,
        g[o++] = (d & 3) << 6 | f & 63;
    return p
}
  , CR = typeof ArrayBuffer == "function"
  , sh = (e, t) => {
    if (typeof e != "string")
        return {
            type: "message",
            data: Gw(e, t)
        };
    const n = e.charAt(0);
    return n === "b" ? {
        type: "message",
        data: kR(e.substring(1), t)
    } : jl[n] ? e.length > 1 ? {
        type: jl[n],
        data: e.substring(1)
    } : {
        type: jl[n]
    } : gf
}
  , kR = (e, t) => {
    if (CR) {
        const n = ER(e);
        return Gw(n, t)
    } else
        return {
            base64: !0,
            data: e
        }
}
  , Gw = (e, t) => {
    switch (t) {
    case "blob":
        return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
        return e instanceof ArrayBuffer ? e : e.buffer
    }
}
  , Xw = ""
  , TR = (e, t) => {
    const n = e.length
      , i = new Array(n);
    let o = 0;
    e.forEach( (l, u) => {
        rh(l, !1, d => {
            i[u] = d,
            ++o === n && t(i.join(Xw))
        }
        )
    }
    )
}
  , PR = (e, t) => {
    const n = e.split(Xw)
      , i = [];
    for (let o = 0; o < n.length; o++) {
        const l = sh(n[o], t);
        if (i.push(l),
        l.type === "error")
            break
    }
    return i
}
;
function RR() {
    return new TransformStream({
        transform(e, t) {
            bR(e, n => {
                const i = n.length;
                let o;
                if (i < 126)
                    o = new Uint8Array(1),
                    new DataView(o.buffer).setUint8(0, i);
                else if (i < 65536) {
                    o = new Uint8Array(3);
                    const l = new DataView(o.buffer);
                    l.setUint8(0, 126),
                    l.setUint16(1, i)
                } else {
                    o = new Uint8Array(9);
                    const l = new DataView(o.buffer);
                    l.setUint8(0, 127),
                    l.setBigUint64(1, BigInt(i))
                }
                e.data && typeof e.data != "string" && (o[0] |= 128),
                t.enqueue(o),
                t.enqueue(n)
            }
            )
        }
    })
}
let _d;
function xl(e) {
    return e.reduce( (t, n) => t + n.length, 0)
}
function Sl(e, t) {
    if (e[0].length === t)
        return e.shift();
    const n = new Uint8Array(t);
    let i = 0;
    for (let o = 0; o < t; o++)
        n[o] = e[0][i++],
        i === e[0].length && (e.shift(),
        i = 0);
    return e.length && i < e[0].length && (e[0] = e[0].slice(i)),
    n
}
function _R(e, t) {
    _d || (_d = new TextDecoder);
    const n = [];
    let i = 0
      , o = -1
      , l = !1;
    return new TransformStream({
        transform(u, d) {
            for (n.push(u); ; ) {
                if (i === 0) {
                    if (xl(n) < 1)
                        break;
                    const f = Sl(n, 1);
                    l = (f[0] & 128) === 128,
                    o = f[0] & 127,
                    o < 126 ? i = 3 : o === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (xl(n) < 2)
                        break;
                    const f = Sl(n, 2);
                    o = new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),
                    i = 3
                } else if (i === 2) {
                    if (xl(n) < 8)
                        break;
                    const f = Sl(n, 8)
                      , p = new DataView(f.buffer,f.byteOffset,f.length)
                      , g = p.getUint32(0);
                    if (g > Math.pow(2, 21) - 1) {
                        d.enqueue(gf);
                        break
                    }
                    o = g * Math.pow(2, 32) + p.getUint32(4),
                    i = 3
                } else {
                    if (xl(n) < o)
                        break;
                    const f = Sl(n, o);
                    d.enqueue(sh(l ? f : _d.decode(f), t)),
                    i = 0
                }
                if (o === 0 || o > e) {
                    d.enqueue(gf);
                    break
                }
            }
        }
    })
}
const Yw = 4;
function et(e) {
    if (e)
        return AR(e)
}
function AR(e) {
    for (var t in et.prototype)
        e[t] = et.prototype[t];
    return e
}
et.prototype.on = et.prototype.addEventListener = function(e, t) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
}
;
et.prototype.once = function(e, t) {
    function n() {
        this.off(e, n),
        t.apply(this, arguments)
    }
    return n.fn = t,
    this.on(e, n),
    this
}
;
et.prototype.off = et.prototype.removeListener = et.prototype.removeAllListeners = et.prototype.removeEventListener = function(e, t) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var n = this._callbacks["$" + e];
    if (!n)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + e],
        this;
    for (var i, o = 0; o < n.length; o++)
        if (i = n[o],
        i === t || i.fn === t) {
            n.splice(o, 1);
            break
        }
    return n.length === 0 && delete this._callbacks["$" + e],
    this
}
;
et.prototype.emit = function(e) {
    this._callbacks = this._callbacks || {};
    for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], i = 1; i < arguments.length; i++)
        t[i - 1] = arguments[i];
    if (n) {
        n = n.slice(0);
        for (var i = 0, o = n.length; i < o; ++i)
            n[i].apply(this, t)
    }
    return this
}
;
et.prototype.emitReserved = et.prototype.emit;
et.prototype.listeners = function(e) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + e] || []
}
;
et.prototype.hasListeners = function(e) {
    return !!this.listeners(e).length
}
;
const uu = typeof Promise == "function" && typeof Promise.resolve == "function" ? t => Promise.resolve().then(t) : (t, n) => n(t, 0)
  , en = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , NR = "arraybuffer";
function Jw(e, ...t) {
    return t.reduce( (n, i) => (e.hasOwnProperty(i) && (n[i] = e[i]),
    n), {})
}
const OR = en.setTimeout
  , LR = en.clearTimeout;
function cu(e, t) {
    t.useNativeTimers ? (e.setTimeoutFn = OR.bind(en),
    e.clearTimeoutFn = LR.bind(en)) : (e.setTimeoutFn = en.setTimeout.bind(en),
    e.clearTimeoutFn = en.clearTimeout.bind(en))
}
const MR = 1.33;
function DR(e) {
    return typeof e == "string" ? jR(e) : Math.ceil((e.byteLength || e.size) * MR)
}
function jR(e) {
    let t = 0
      , n = 0;
    for (let i = 0, o = e.length; i < o; i++)
        t = e.charCodeAt(i),
        t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (i++,
        n += 4);
    return n
}
function Zw() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function IR(e) {
    let t = "";
    for (let n in e)
        e.hasOwnProperty(n) && (t.length && (t += "&"),
        t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
}
function FR(e) {
    let t = {}
      , n = e.split("&");
    for (let i = 0, o = n.length; i < o; i++) {
        let l = n[i].split("=");
        t[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
    }
    return t
}
class VR extends Error {
    constructor(t, n, i) {
        super(t),
        this.description = n,
        this.context = i,
        this.type = "TransportError"
    }
}
class ih extends et {
    constructor(t) {
        super(),
        this.writable = !1,
        cu(this, t),
        this.opts = t,
        this.query = t.query,
        this.socket = t.socket,
        this.supportsBinary = !t.forceBase64
    }
    onError(t, n, i) {
        return super.emitReserved("error", new VR(t,n,i)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(t) {
        this.readyState === "open" && this.write(t)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(t) {
        const n = sh(t, this.socket.binaryType);
        this.onPacket(n)
    }
    onPacket(t) {
        super.emitReserved("packet", t)
    }
    onClose(t) {
        this.readyState = "closed",
        super.emitReserved("close", t)
    }
    pause(t) {}
    createUri(t, n={}) {
        return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n)
    }
    _hostname() {
        const t = this.opts.hostname;
        return t.indexOf(":") === -1 ? t : "[" + t + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(t) {
        const n = IR(t);
        return n.length ? "?" + n : ""
    }
}
class BR extends ih {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(t) {
        this.readyState = "pausing";
        const n = () => {
            this.readyState = "paused",
            t()
        }
        ;
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++,
            this.once("pollComplete", function() {
                --i || n()
            })),
            this.writable || (i++,
            this.once("drain", function() {
                --i || n()
            }))
        } else
            n()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(t) {
        const n = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(),
            i.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(i)
        }
        ;
        PR(t, this.socket.binaryType).forEach(n),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        const t = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? t() : this.once("open", t)
    }
    write(t) {
        this.writable = !1,
        TR(t, n => {
            this.doWrite(n, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        const t = this.opts.secure ? "https" : "http"
          , n = this.query || {};
        return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Zw()),
        !this.supportsBinary && !n.sid && (n.b64 = 1),
        this.createUri(t, n)
    }
}
let ex = !1;
try {
    ex = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
const UR = ex;
function zR() {}
class $R extends BR {
    constructor(t) {
        if (super(t),
        typeof location < "u") {
            const n = location.protocol === "https:";
            let i = location.port;
            i || (i = n ? "443" : "80"),
            this.xd = typeof location < "u" && t.hostname !== location.hostname || i !== t.port
        }
    }
    doWrite(t, n) {
        const i = this.request({
            method: "POST",
            data: t
        });
        i.on("success", n),
        i.on("error", (o, l) => {
            this.onError("xhr post error", o, l)
        }
        )
    }
    doPoll() {
        const t = this.request();
        t.on("data", this.onData.bind(this)),
        t.on("error", (n, i) => {
            this.onError("xhr poll error", n, i)
        }
        ),
        this.pollXhr = t
    }
}
class Cn extends et {
    constructor(t, n, i) {
        super(),
        this.createRequest = t,
        cu(this, i),
        this._opts = i,
        this._method = i.method || "GET",
        this._uri = n,
        this._data = i.data !== void 0 ? i.data : null,
        this._create()
    }
    _create() {
        var t;
        const n = Jw(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        n.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(n);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let o in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(o) && i.setRequestHeader(o, this._opts.extraHeaders[o])
                }
            } catch {}
            if (this._method === "POST")
                try {
                    i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}
            (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(i),
            "withCredentials"in i && (i.withCredentials = this._opts.withCredentials),
            this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
            i.onreadystatechange = () => {
                var o;
                i.readyState === 3 && ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(i.getResponseHeader("set-cookie"))),
                i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }
                , 0))
            }
            ,
            i.send(this._data)
        } catch (o) {
            this.setTimeoutFn( () => {
                this._onError(o)
            }
            , 0);
            return
        }
        typeof document < "u" && (this._index = Cn.requestsCount++,
        Cn.requests[this._index] = this)
    }
    _onError(t) {
        this.emitReserved("error", t, this._xhr),
        this._cleanup(!0)
    }
    _cleanup(t) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = zR,
            t)
                try {
                    this._xhr.abort()
                } catch {}
            typeof document < "u" && delete Cn.requests[this._index],
            this._xhr = null
        }
    }
    _onLoad() {
        const t = this._xhr.responseText;
        t !== null && (this.emitReserved("data", t),
        this.emitReserved("success"),
        this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
Cn.requestsCount = 0;
Cn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", Hy);
    else if (typeof addEventListener == "function") {
        const e = "onpagehide"in en ? "pagehide" : "unload";
        addEventListener(e, Hy, !1)
    }
}
function Hy() {
    for (let e in Cn.requests)
        Cn.requests.hasOwnProperty(e) && Cn.requests[e].abort()
}
const HR = (function() {
    const e = tx({
        xdomain: !1
    });
    return e && e.responseType !== null
}
)();
class WR extends $R {
    constructor(t) {
        super(t);
        const n = t && t.forceBase64;
        this.supportsBinary = HR && !n
    }
    request(t={}) {
        return Object.assign(t, {
            xd: this.xd
        }, this.opts),
        new Cn(tx,this.uri(),t)
    }
}
function tx(e) {
    const t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || UR))
            return new XMLHttpRequest
    } catch {}
    if (!t)
        try {
            return new en[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
const nx = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class qR extends ih {
    get name() {
        return "websocket"
    }
    doOpen() {
        const t = this.uri()
          , n = this.opts.protocols
          , i = nx ? {} : Jw(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(t, n, i)
        } catch (o) {
            return this.emitReserved("error", o)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = t => this.onClose({
            description: "websocket connection closed",
            context: t
        }),
        this.ws.onmessage = t => this.onData(t.data),
        this.ws.onerror = t => this.onError("websocket error", t)
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const i = t[n]
              , o = n === t.length - 1;
            rh(i, this.supportsBinary, l => {
                try {
                    this.doWrite(i, l)
                } catch {}
                o && uu( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        const t = this.opts.secure ? "wss" : "ws"
          , n = this.query || {};
        return this.opts.timestampRequests && (n[this.opts.timestampParam] = Zw()),
        this.supportsBinary || (n.b64 = 1),
        this.createUri(t, n)
    }
}
const Ad = en.WebSocket || en.MozWebSocket;
class KR extends qR {
    createSocket(t, n, i) {
        return nx ? new Ad(t,n,i) : n ? new Ad(t,n) : new Ad(t)
    }
    doWrite(t, n) {
        this.ws.send(n)
    }
}
class QR extends ih {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (t) {
            return this.emitReserved("error", t)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(t => {
            this.onError("webtransport error", t)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(t => {
                const n = _R(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , i = t.readable.pipeThrough(n).getReader()
                  , o = RR();
                o.readable.pipeTo(t.writable),
                this._writer = o.writable.getWriter();
                const l = () => {
                    i.read().then( ({done: d, value: f}) => {
                        d || (this.onPacket(f),
                        l())
                    }
                    ).catch(d => {}
                    )
                }
                ;
                l();
                const u = {
                    type: "open"
                };
                this.query.sid && (u.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(u).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const i = t[n]
              , o = n === t.length - 1;
            this._writer.write(i).then( () => {
                o && uu( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var t;
        (t = this._transport) === null || t === void 0 || t.close()
    }
}
const GR = {
    websocket: KR,
    webtransport: QR,
    polling: WR
}
  , XR = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , YR = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function yf(e) {
    if (e.length > 8e3)
        throw "URI too long";
    const t = e
      , n = e.indexOf("[")
      , i = e.indexOf("]");
    n != -1 && i != -1 && (e = e.substring(0, n) + e.substring(n, i).replace(/:/g, ";") + e.substring(i, e.length));
    let o = XR.exec(e || "")
      , l = {}
      , u = 14;
    for (; u--; )
        l[YR[u]] = o[u] || "";
    return n != -1 && i != -1 && (l.source = t,
    l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"),
    l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    l.ipv6uri = !0),
    l.pathNames = JR(l, l.path),
    l.queryKey = ZR(l, l.query),
    l
}
function JR(e, t) {
    const n = /\/{2,9}/g
      , i = t.replace(n, "/").split("/");
    return (t.slice(0, 1) == "/" || t.length === 0) && i.splice(0, 1),
    t.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
}
function ZR(e, t) {
    const n = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, o, l) {
        o && (n[o] = l)
    }),
    n
}
const vf = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , Il = [];
vf && addEventListener("offline", () => {
    Il.forEach(e => e())
}
, !1);
class Dr extends et {
    constructor(t, n) {
        if (super(),
        this.binaryType = NR,
        this.writeBuffer = [],
        this._prevBufferLen = 0,
        this._pingInterval = -1,
        this._pingTimeout = -1,
        this._maxPayload = -1,
        this._pingTimeoutTime = 1 / 0,
        t && typeof t == "object" && (n = t,
        t = null),
        t) {
            const i = yf(t);
            n.hostname = i.host,
            n.secure = i.protocol === "https" || i.protocol === "wss",
            n.port = i.port,
            i.query && (n.query = i.query)
        } else
            n.host && (n.hostname = yf(n.host).host);
        cu(this, n),
        this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:",
        n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
        this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"),
        this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
        this.transports = [],
        this._transportsByName = {},
        n.transports.forEach(i => {
            const o = i.prototype.name;
            this.transports.push(o),
            this._transportsByName[o] = i
        }
        ),
        this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, n),
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
        typeof this.opts.query == "string" && (this.opts.query = FR(this.opts.query)),
        vf && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(),
            this.transport.close())
        }
        ,
        addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
        this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }
        ,
        Il.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open()
    }
    createTransport(t) {
        const n = Object.assign({}, this.opts.query);
        n.EIO = Yw,
        n.transport = t,
        this.id && (n.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: n,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[t]);
        return new this._transportsByName[t](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn( () => {
                this.emitReserved("error", "No transports available")
            }
            , 0);
            return
        }
        const t = this.opts.rememberUpgrade && Dr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const n = this.createTransport(t);
        n.open(),
        this.setTransport(n)
    }
    setTransport(t) {
        this.transport && this.transport.removeAllListeners(),
        this.transport = t,
        t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", n => this._onClose("transport close", n))
    }
    onOpen() {
        this.readyState = "open",
        Dr.priorWebsocketSuccess = this.transport.name === "websocket",
        this.emitReserved("open"),
        this.flush()
    }
    _onPacket(t) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", t),
            this.emitReserved("heartbeat"),
            t.type) {
            case "open":
                this.onHandshake(JSON.parse(t.data));
                break;
            case "ping":
                this._sendPacket("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this._resetPingTimeout();
                break;
            case "error":
                const n = new Error("server error");
                n.code = t.data,
                this._onError(n);
                break;
            case "message":
                this.emitReserved("data", t.data),
                this.emitReserved("message", t.data);
                break
            }
    }
    onHandshake(t) {
        this.emitReserved("handshake", t),
        this.id = t.sid,
        this.transport.query.sid = t.sid,
        this._pingInterval = t.pingInterval,
        this._pingTimeout = t.pingTimeout,
        this._maxPayload = t.maxPayload,
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const t = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + t,
        this._pingTimeoutTimer = this.setTimeoutFn( () => {
            this._onClose("ping timeout")
        }
        , t),
        this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
        this._prevBufferLen = 0,
        this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const t = this._getWritablePackets();
            this.transport.send(t),
            this._prevBufferLen = t.length,
            this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let n = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const o = this.writeBuffer[i].data;
            if (o && (n += DR(o)),
            i > 0 && n > this._maxPayload)
                return this.writeBuffer.slice(0, i);
            n += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const t = Date.now() > this._pingTimeoutTime;
        return t && (this._pingTimeoutTime = 0,
        uu( () => {
            this._onClose("ping timeout")
        }
        , this.setTimeoutFn)),
        t
    }
    write(t, n, i) {
        return this._sendPacket("message", t, n, i),
        this
    }
    send(t, n, i) {
        return this._sendPacket("message", t, n, i),
        this
    }
    _sendPacket(t, n, i, o) {
        if (typeof n == "function" && (o = n,
        n = void 0),
        typeof i == "function" && (o = i,
        i = null),
        this.readyState === "closing" || this.readyState === "closed")
            return;
        i = i || {},
        i.compress = i.compress !== !1;
        const l = {
            type: t,
            data: n,
            options: i
        };
        this.emitReserved("packetCreate", l),
        this.writeBuffer.push(l),
        o && this.once("flush", o),
        this.flush()
    }
    close() {
        const t = () => {
            this._onClose("forced close"),
            this.transport.close()
        }
          , n = () => {
            this.off("upgrade", n),
            this.off("upgradeError", n),
            t()
        }
          , i = () => {
            this.once("upgrade", n),
            this.once("upgradeError", n)
        }
        ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
        this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : t()
        }
        ) : this.upgrading ? i() : t()),
        this
    }
    _onError(t) {
        if (Dr.priorWebsocketSuccess = !1,
        this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
            this._open();
        this.emitReserved("error", t),
        this._onClose("transport error", t)
    }
    _onClose(t, n) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            vf && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
            this._offlineEventListener)) {
                const i = Il.indexOf(this._offlineEventListener);
                i !== -1 && Il.splice(i, 1)
            }
            this.readyState = "closed",
            this.id = null,
            this.emitReserved("close", t, n),
            this.writeBuffer = [],
            this._prevBufferLen = 0
        }
    }
}
Dr.protocol = Yw;
class e_ extends Dr {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let t = 0; t < this._upgrades.length; t++)
                this._probe(this._upgrades[t])
    }
    _probe(t) {
        let n = this.createTransport(t)
          , i = !1;
        Dr.priorWebsocketSuccess = !1;
        const o = () => {
            i || (n.send([{
                type: "ping",
                data: "probe"
            }]),
            n.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", n),
                        !n)
                            return;
                        Dr.priorWebsocketSuccess = n.name === "websocket",
                        this.transport.pause( () => {
                            i || this.readyState !== "closed" && (g(),
                            this.setTransport(n),
                            n.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", n),
                            n = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        const v = new Error("probe error");
                        v.transport = n.name,
                        this.emitReserved("upgradeError", v)
                    }
            }
            ))
        }
        ;
        function l() {
            i || (i = !0,
            g(),
            n.close(),
            n = null)
        }
        const u = y => {
            const v = new Error("probe error: " + y);
            v.transport = n.name,
            l(),
            this.emitReserved("upgradeError", v)
        }
        ;
        function d() {
            u("transport closed")
        }
        function f() {
            u("socket closed")
        }
        function p(y) {
            n && y.name !== n.name && l()
        }
        const g = () => {
            n.removeListener("open", o),
            n.removeListener("error", u),
            n.removeListener("close", d),
            this.off("close", f),
            this.off("upgrading", p)
        }
        ;
        n.once("open", o),
        n.once("error", u),
        n.once("close", d),
        this.once("close", f),
        this.once("upgrading", p),
        this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn( () => {
            i || n.open()
        }
        , 200) : n.open()
    }
    onHandshake(t) {
        this._upgrades = this._filterUpgrades(t.upgrades),
        super.onHandshake(t)
    }
    _filterUpgrades(t) {
        const n = [];
        for (let i = 0; i < t.length; i++)
            ~this.transports.indexOf(t[i]) && n.push(t[i]);
        return n
    }
}
let t_ = class extends e_ {
    constructor(t, n={}) {
        const i = typeof t == "object" ? t : n;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(o => GR[o]).filter(o => !!o)),
        super(t, i)
    }
}
;
function n_(e, t="", n) {
    let i = e;
    n = n || typeof location < "u" && location,
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e),
    /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e),
    i = yf(e)),
    i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    i.path = i.path || "/";
    const l = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + l + ":" + i.port + t,
    i.href = i.protocol + "://" + l + (n && n.port === i.port ? "" : ":" + i.port),
    i
}
const r_ = typeof ArrayBuffer == "function"
  , s_ = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
  , rx = Object.prototype.toString
  , i_ = typeof Blob == "function" || typeof Blob < "u" && rx.call(Blob) === "[object BlobConstructor]"
  , o_ = typeof File == "function" || typeof File < "u" && rx.call(File) === "[object FileConstructor]";
function oh(e) {
    return r_ && (e instanceof ArrayBuffer || s_(e)) || i_ && e instanceof Blob || o_ && e instanceof File
}
function Fl(e, t) {
    if (!e || typeof e != "object")
        return !1;
    if (Array.isArray(e)) {
        for (let n = 0, i = e.length; n < i; n++)
            if (Fl(e[n]))
                return !0;
        return !1
    }
    if (oh(e))
        return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
        return Fl(e.toJSON(), !0);
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && Fl(e[n]))
            return !0;
    return !1
}
function a_(e) {
    const t = []
      , n = e.data
      , i = e;
    return i.data = wf(n, t),
    i.attachments = t.length,
    {
        packet: i,
        buffers: t
    }
}
function wf(e, t) {
    if (!e)
        return e;
    if (oh(e)) {
        const n = {
            _placeholder: !0,
            num: t.length
        };
        return t.push(e),
        n
    } else if (Array.isArray(e)) {
        const n = new Array(e.length);
        for (let i = 0; i < e.length; i++)
            n[i] = wf(e[i], t);
        return n
    } else if (typeof e == "object" && !(e instanceof Date)) {
        const n = {};
        for (const i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (n[i] = wf(e[i], t));
        return n
    }
    return e
}
function l_(e, t) {
    return e.data = xf(e.data, t),
    delete e.attachments,
    e
}
function xf(e, t) {
    if (!e)
        return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
            return t[e.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(e))
        for (let n = 0; n < e.length; n++)
            e[n] = xf(e[n], t);
    else if (typeof e == "object")
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = xf(e[n], t));
    return e
}
const u_ = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"]
  , c_ = 5;
var _e;
(function(e) {
    e[e.CONNECT = 0] = "CONNECT",
    e[e.DISCONNECT = 1] = "DISCONNECT",
    e[e.EVENT = 2] = "EVENT",
    e[e.ACK = 3] = "ACK",
    e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    e[e.BINARY_EVENT = 5] = "BINARY_EVENT",
    e[e.BINARY_ACK = 6] = "BINARY_ACK"
}
)(_e || (_e = {}));
class d_ {
    constructor(t) {
        this.replacer = t
    }
    encode(t) {
        return (t.type === _e.EVENT || t.type === _e.ACK) && Fl(t) ? this.encodeAsBinary({
            type: t.type === _e.EVENT ? _e.BINARY_EVENT : _e.BINARY_ACK,
            nsp: t.nsp,
            data: t.data,
            id: t.id
        }) : [this.encodeAsString(t)]
    }
    encodeAsString(t) {
        let n = "" + t.type;
        return (t.type === _e.BINARY_EVENT || t.type === _e.BINARY_ACK) && (n += t.attachments + "-"),
        t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
        t.id != null && (n += t.id),
        t.data != null && (n += JSON.stringify(t.data, this.replacer)),
        n
    }
    encodeAsBinary(t) {
        const n = a_(t)
          , i = this.encodeAsString(n.packet)
          , o = n.buffers;
        return o.unshift(i),
        o
    }
}
function Wy(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
class ah extends et {
    constructor(t) {
        super(),
        this.reviver = t
    }
    add(t) {
        let n;
        if (typeof t == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            n = this.decodeString(t);
            const i = n.type === _e.BINARY_EVENT;
            i || n.type === _e.BINARY_ACK ? (n.type = i ? _e.EVENT : _e.ACK,
            this.reconstructor = new f_(n),
            n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n)
        } else if (oh(t) || t.base64)
            if (this.reconstructor)
                n = this.reconstructor.takeBinaryData(t),
                n && (this.reconstructor = null,
                super.emitReserved("decoded", n));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + t)
    }
    decodeString(t) {
        let n = 0;
        const i = {
            type: Number(t.charAt(0))
        };
        if (_e[i.type] === void 0)
            throw new Error("unknown packet type " + i.type);
        if (i.type === _e.BINARY_EVENT || i.type === _e.BINARY_ACK) {
            const l = n + 1;
            for (; t.charAt(++n) !== "-" && n != t.length; )
                ;
            const u = t.substring(l, n);
            if (u != Number(u) || t.charAt(n) !== "-")
                throw new Error("Illegal attachments");
            i.attachments = Number(u)
        }
        if (t.charAt(n + 1) === "/") {
            const l = n + 1;
            for (; ++n && !(t.charAt(n) === "," || n === t.length); )
                ;
            i.nsp = t.substring(l, n)
        } else
            i.nsp = "/";
        const o = t.charAt(n + 1);
        if (o !== "" && Number(o) == o) {
            const l = n + 1;
            for (; ++n; ) {
                const u = t.charAt(n);
                if (u == null || Number(u) != u) {
                    --n;
                    break
                }
                if (n === t.length)
                    break
            }
            i.id = Number(t.substring(l, n + 1))
        }
        if (t.charAt(++n)) {
            const l = this.tryParse(t.substr(n));
            if (ah.isPayloadValid(i.type, l))
                i.data = l;
            else
                throw new Error("invalid payload")
        }
        return i
    }
    tryParse(t) {
        try {
            return JSON.parse(t, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(t, n) {
        switch (t) {
        case _e.CONNECT:
            return Wy(n);
        case _e.DISCONNECT:
            return n === void 0;
        case _e.CONNECT_ERROR:
            return typeof n == "string" || Wy(n);
        case _e.EVENT:
        case _e.BINARY_EVENT:
            return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && u_.indexOf(n[0]) === -1);
        case _e.ACK:
        case _e.BINARY_ACK:
            return Array.isArray(n)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
class f_ {
    constructor(t) {
        this.packet = t,
        this.buffers = [],
        this.reconPack = t
    }
    takeBinaryData(t) {
        if (this.buffers.push(t),
        this.buffers.length === this.reconPack.attachments) {
            const n = l_(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            n
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
const h_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: ah,
    Encoder: d_,
    get PacketType() {
        return _e
    },
    protocol: c_
}, Symbol.toStringTag, {
    value: "Module"
}));
function hn(e, t, n) {
    return e.on(t, n),
    function() {
        e.off(t, n)
    }
}
const p_ = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class sx extends et {
    constructor(t, n, i) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = t,
        this.nsp = n,
        i && i.auth && (this.auth = i.auth),
        this._opts = Object.assign({}, i),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const t = this.io;
        this.subs = [hn(t, "open", this.onopen.bind(this)), hn(t, "packet", this.onpacket.bind(this)), hn(t, "error", this.onerror.bind(this)), hn(t, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...t) {
        return t.unshift("message"),
        this.emit.apply(this, t),
        this
    }
    emit(t, ...n) {
        var i, o, l;
        if (p_.hasOwnProperty(t))
            throw new Error('"' + t.toString() + '" is a reserved event name');
        if (n.unshift(t),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(n),
            this;
        const u = {
            type: _e.EVENT,
            data: n
        };
        if (u.options = {},
        u.options.compress = this.flags.compress !== !1,
        typeof n[n.length - 1] == "function") {
            const g = this.ids++
              , y = n.pop();
            this._registerAckCallback(g, y),
            u.id = g
        }
        const d = (o = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || o === void 0 ? void 0 : o.writable
          , f = this.connected && !(!((l = this.io.engine) === null || l === void 0) && l._hasPingExpired());
        return this.flags.volatile && !d || (f ? (this.notifyOutgoingListeners(u),
        this.packet(u)) : this.sendBuffer.push(u)),
        this.flags = {},
        this
    }
    _registerAckCallback(t, n) {
        var i;
        const o = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (o === void 0) {
            this.acks[t] = n;
            return
        }
        const l = this.io.setTimeoutFn( () => {
            delete this.acks[t];
            for (let d = 0; d < this.sendBuffer.length; d++)
                this.sendBuffer[d].id === t && this.sendBuffer.splice(d, 1);
            n.call(this, new Error("operation has timed out"))
        }
        , o)
          , u = (...d) => {
            this.io.clearTimeoutFn(l),
            n.apply(this, d)
        }
        ;
        u.withError = !0,
        this.acks[t] = u
    }
    emitWithAck(t, ...n) {
        return new Promise( (i, o) => {
            const l = (u, d) => u ? o(u) : i(d);
            l.withError = !0,
            n.push(l),
            this.emit(t, ...n)
        }
        )
    }
    _addToQueue(t) {
        let n;
        typeof t[t.length - 1] == "function" && (n = t.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        t.push( (o, ...l) => i !== this._queue[0] ? void 0 : (o !== null ? i.tryCount > this._opts.retries && (this._queue.shift(),
        n && n(o)) : (this._queue.shift(),
        n && n(null, ...l)),
        i.pending = !1,
        this._drainQueue())),
        this._queue.push(i),
        this._drainQueue()
    }
    _drainQueue(t=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const n = this._queue[0];
        n.pending && !t || (n.pending = !0,
        n.tryCount++,
        this.flags = n.flags,
        this.emit.apply(this, n.args))
    }
    packet(t) {
        t.nsp = this.nsp,
        this.io._packet(t)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(t => {
            this._sendConnectPacket(t)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(t) {
        this.packet({
            type: _e.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, t) : t
        })
    }
    onerror(t) {
        this.connected || this.emitReserved("connect_error", t)
    }
    onclose(t, n) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", t, n),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(t => {
            if (!this.sendBuffer.some(i => String(i.id) === t)) {
                const i = this.acks[t];
                delete this.acks[t],
                i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(t) {
        if (t.nsp === this.nsp)
            switch (t.type) {
            case _e.CONNECT:
                t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case _e.EVENT:
            case _e.BINARY_EVENT:
                this.onevent(t);
                break;
            case _e.ACK:
            case _e.BINARY_ACK:
                this.onack(t);
                break;
            case _e.DISCONNECT:
                this.ondisconnect();
                break;
            case _e.CONNECT_ERROR:
                this.destroy();
                const i = new Error(t.data.message);
                i.data = t.data.data,
                this.emitReserved("connect_error", i);
                break
            }
    }
    onevent(t) {
        const n = t.data || [];
        t.id != null && n.push(this.ack(t.id)),
        this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n))
    }
    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const i of n)
                i.apply(this, t)
        }
        super.emit.apply(this, t),
        this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1])
    }
    ack(t) {
        const n = this;
        let i = !1;
        return function(...o) {
            i || (i = !0,
            n.packet({
                type: _e.ACK,
                id: t,
                data: o
            }))
        }
    }
    onack(t) {
        const n = this.acks[t.id];
        typeof n == "function" && (delete this.acks[t.id],
        n.withError && t.data.unshift(null),
        n.apply(this, t.data))
    }
    onconnect(t, n) {
        this.id = t,
        this.recovered = n && this._pid === n,
        this._pid = n,
        this.connected = !0,
        this.emitBuffered(),
        this.emitReserved("connect"),
        this._drainQueue(!0)
    }
    emitBuffered() {
        this.receiveBuffer.forEach(t => this.emitEvent(t)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(t => {
            this.notifyOutgoingListeners(t),
            this.packet(t)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(t => t()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: _e.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(t) {
        return this.flags.compress = t,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(t) {
        return this.flags.timeout = t,
        this
    }
    onAny(t) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(t),
        this
    }
    prependAny(t) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(t),
        this
    }
    offAny(t) {
        if (!this._anyListeners)
            return this;
        if (t) {
            const n = this._anyListeners;
            for (let i = 0; i < n.length; i++)
                if (t === n[i])
                    return n.splice(i, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(t),
        this
    }
    prependAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(t),
        this
    }
    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners)
            return this;
        if (t) {
            const n = this._anyOutgoingListeners;
            for (let i = 0; i < n.length; i++)
                if (t === n[i])
                    return n.splice(i, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const i of n)
                i.apply(this, t.data)
        }
    }
}
function Ti(e) {
    e = e || {},
    this.ms = e.min || 100,
    this.max = e.max || 1e4,
    this.factor = e.factor || 2,
    this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0,
    this.attempts = 0
}
Ti.prototype.duration = function() {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random()
          , n = Math.floor(t * this.jitter * e);
        e = (Math.floor(t * 10) & 1) == 0 ? e - n : e + n
    }
    return Math.min(e, this.max) | 0
}
;
Ti.prototype.reset = function() {
    this.attempts = 0
}
;
Ti.prototype.setMin = function(e) {
    this.ms = e
}
;
Ti.prototype.setMax = function(e) {
    this.max = e
}
;
Ti.prototype.setJitter = function(e) {
    this.jitter = e
}
;
class Sf extends et {
    constructor(t, n) {
        var i;
        super(),
        this.nsps = {},
        this.subs = [],
        t && typeof t == "object" && (n = t,
        t = void 0),
        n = n || {},
        n.path = n.path || "/socket.io",
        this.opts = n,
        cu(this, n),
        this.reconnection(n.reconnection !== !1),
        this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(n.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
        this.randomizationFactor((i = n.randomizationFactor) !== null && i !== void 0 ? i : .5),
        this.backoff = new Ti({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(n.timeout == null ? 2e4 : n.timeout),
        this._readyState = "closed",
        this.uri = t;
        const o = n.parser || h_;
        this.encoder = new o.Encoder,
        this.decoder = new o.Decoder,
        this._autoConnect = n.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(t) {
        return arguments.length ? (this._reconnection = !!t,
        t || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(t) {
        return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t,
        this)
    }
    reconnectionDelay(t) {
        var n;
        return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t,
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this)
    }
    randomizationFactor(t) {
        var n;
        return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t,
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this)
    }
    reconnectionDelayMax(t) {
        var n;
        return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t,
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this)
    }
    timeout(t) {
        return arguments.length ? (this._timeout = t,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(t) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new t_(this.uri,this.opts);
        const n = this.engine
          , i = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        const o = hn(n, "open", function() {
            i.onopen(),
            t && t()
        })
          , l = d => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", d),
            t ? t(d) : this.maybeReconnectOnOpen()
        }
          , u = hn(n, "error", l);
        if (this._timeout !== !1) {
            const d = this._timeout
              , f = this.setTimeoutFn( () => {
                o(),
                l(new Error("timeout")),
                n.close()
            }
            , d);
            this.opts.autoUnref && f.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(f)
            }
            )
        }
        return this.subs.push(o),
        this.subs.push(u),
        this
    }
    connect(t) {
        return this.open(t)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        const t = this.engine;
        this.subs.push(hn(t, "ping", this.onping.bind(this)), hn(t, "data", this.ondata.bind(this)), hn(t, "error", this.onerror.bind(this)), hn(t, "close", this.onclose.bind(this)), hn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(t) {
        try {
            this.decoder.add(t)
        } catch (n) {
            this.onclose("parse error", n)
        }
    }
    ondecoded(t) {
        uu( () => {
            this.emitReserved("packet", t)
        }
        , this.setTimeoutFn)
    }
    onerror(t) {
        this.emitReserved("error", t)
    }
    socket(t, n) {
        let i = this.nsps[t];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new sx(this,t,n),
        this.nsps[t] = i),
        i
    }
    _destroy(t) {
        const n = Object.keys(this.nsps);
        for (const i of n)
            if (this.nsps[i].active)
                return;
        this._close()
    }
    _packet(t) {
        const n = this.encoder.encode(t);
        for (let i = 0; i < n.length; i++)
            this.engine.write(n[i], t.options)
    }
    cleanup() {
        this.subs.forEach(t => t()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(t, n) {
        var i;
        this.cleanup(),
        (i = this.engine) === null || i === void 0 || i.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", t, n),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn( () => {
                t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                !t.skipReconnect && t.open(o => {
                    o ? (t._reconnecting = !1,
                    t.reconnect(),
                    this.emitReserved("reconnect_error", o)) : t.onreconnect()
                }
                ))
            }
            , n);
            this.opts.autoUnref && i.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(i)
            }
            )
        }
    }
    onreconnect() {
        const t = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", t)
    }
}
const vo = {};
function Vl(e, t) {
    typeof e == "object" && (t = e,
    e = void 0),
    t = t || {};
    const n = n_(e, t.path || "/socket.io")
      , i = n.source
      , o = n.id
      , l = n.path
      , u = vo[o] && l in vo[o].nsps
      , d = t.forceNew || t["force new connection"] || t.multiplex === !1 || u;
    let f;
    return d ? f = new Sf(i,t) : (vo[o] || (vo[o] = new Sf(i,t)),
    f = vo[o]),
    n.query && !t.query && (t.query = n.queryKey),
    f.socket(n.path, t)
}
Object.assign(Vl, {
    Manager: Sf,
    Socket: sx,
    io: Vl,
    connect: Vl
});
function qy(e, t) {
    var n;
    const i = Vl(e.serverUrl, {
        path: e.mountPath,
        transports: e.transports,
        query: {
            app_id: e.appId,
            token: (n = e.token) !== null && n !== void 0 ? n : nh()
        }
    });
    return i.on("connect", async () => {
        var o;
        return console.log("connect", i.id),
        (o = t.connect) === null || o === void 0 ? void 0 : o.call(t)
    }
    ),
    i.on("update_model", async o => {
        var l;
        return (l = t.update_model) === null || l === void 0 ? void 0 : l.call(t, o)
    }
    ),
    i.on("error", async o => {
        var l;
        return (l = t.error) === null || l === void 0 ? void 0 : l.call(t, o)
    }
    ),
    i.on("connect_error", async o => {
        var l;
        return console.error("connect_error", o),
        (l = t.error) === null || l === void 0 ? void 0 : l.call(t, o)
    }
    ),
    i
}
function m_({config: e}) {
    let t = {
        ...e
    };
    const n = {}
      , i = {
        connect: async () => {
            const x = [];
            Object.keys(n).forEach(b => {
                f(b);
                const C = y(b);
                C == null || C.forEach( ({connect: E}) => {
                    const T = async () => E == null ? void 0 : E();
                    x.push(T())
                }
                )
            }
            ),
            await Promise.all(x)
        }
        ,
        update_model: async x => {
            const C = y(x.room).map(E => {
                var T;
                return (T = E.update_model) === null || T === void 0 ? void 0 : T.call(E, x)
            }
            );
            await Promise.all(C)
        }
        ,
        error: async x => {
            console.error("error", x);
            const b = Object.values(n).flat().map(C => {
                var E;
                return (E = C.error) === null || E === void 0 ? void 0 : E.call(C, x)
            }
            );
            await Promise.all(b)
        }
    };
    let o = qy(e, i);
    function l() {
        u()
    }
    function u() {
        o && o.disconnect()
    }
    function d(x) {
        l(),
        t = {
            ...t,
            ...x
        },
        o = qy(t, i)
    }
    function f(x) {
        o.emit("join", x)
    }
    function p(x) {
        o.emit("leave", x)
    }
    async function g(x, b) {
        var C;
        const E = JSON.stringify(b);
        return (C = i.update_model) === null || C === void 0 ? void 0 : C.call(i, {
            room: x,
            data: E
        })
    }
    function y(x) {
        return n[x]
    }
    return {
        socket: o,
        subscribeToRoom: (x, b) => (n[x] || (f(x),
        n[x] = []),
        n[x].push(b),
        () => {
            var C, E;
            n[x] = (E = (C = n[x]) === null || C === void 0 ? void 0 : C.filter(T => T !== b)) !== null && E !== void 0 ? E : [],
            n[x].length === 0 && p(x)
        }
        ),
        updateConfig: d,
        updateModel: g,
        disconnect: u
    }
}
function g_(e) {
    const {serverUrl: t="https://base44.app", appId: n, token: i, serviceToken: o, requiresAuth: l=!1, appBaseUrl: u, options: d, functionsVersion: f, headers: p} = e
      , y = m_({
        config: {
            serverUrl: t,
            mountPath: "/ws-user-apps/socket.io/",
            transports: ["websocket"],
            appId: n,
            token: i
        }
    })
      , v = {
        ...p,
        "X-App-Id": String(n)
    }
      , x = f ? {
        ...v,
        "Base44-Functions-Version": f
    } : v
      , b = bo({
        baseURL: `${t}/api`,
        headers: v,
        token: i,
        onError: d == null ? void 0 : d.onError
    })
      , C = bo({
        baseURL: `${t}/api`,
        headers: x,
        token: i,
        interceptResponses: !1,
        onError: d == null ? void 0 : d.onError
    })
      , E = bo({
        baseURL: `${t}/api`,
        headers: v,
        token: o,
        onError: d == null ? void 0 : d.onError
    })
      , T = bo({
        baseURL: `${t}/api`,
        headers: x,
        token: o,
        interceptResponses: !1
    })
      , M = {
        entities: jy(b, n),
        integrations: Iy(b, n),
        auth: wR(b, C, n, {
            appBaseUrl: u
        }),
        functions: Fy(C, n),
        agents: Vy({
            axios: b,
            socket: y,
            appId: n,
            serverUrl: t,
            token: i
        }),
        appLogs: By(b, n),
        cleanup: () => {
            y.disconnect()
        }
    }
      , O = {
        entities: jy(E, n),
        integrations: Iy(E, n),
        sso: xR(E, n, i),
        functions: Fy(T, n),
        agents: Vy({
            axios: E,
            socket: y,
            appId: n,
            serverUrl: t,
            token: i
        }),
        appLogs: By(E, n),
        cleanup: () => {
            y.disconnect()
        }
    };
    if (typeof window < "u") {
        const z = i || nh();
        z && M.auth.setToken(z)
    }
    return l && typeof window < "u" && setTimeout(async () => {
        try {
            await M.auth.isAuthenticated() || M.auth.redirectToLogin(window.location.href)
        } catch (z) {
            console.error("Authentication check failed:", z),
            M.auth.redirectToLogin(window.location.href)
        }
    }
    , 0),
    {
        ...M,
        setToken(z) {
            M.auth.setToken(z),
            y.updateConfig({
                token: z
            })
        },
        getConfig() {
            return {
                serverUrl: t,
                appId: n,
                requiresAuth: l
            }
        },
        get asServiceRole() {
            if (!o)
                throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return O
        }
    }
}
const ix = typeof window > "u"
  , y_ = ix ? {
    localStorage: new Map
} : window
  , Nd = y_.localStorage
  , v_ = e => e.replace(/([A-Z])/g, "_$1").toLowerCase()
  , wo = (e, {defaultValue: t=void 0, removeFromUrl: n=!1}={}) => {
    if (ix)
        return t;
    const i = `base44_${v_(e)}`
      , o = new URLSearchParams(window.location.search)
      , l = o.get(e);
    if (n) {
        o.delete(e);
        const d = `${window.location.pathname}${o.toString() ? `?${o.toString()}` : ""}${window.location.hash}`;
        window.history.replaceState({}, document.title, d)
    }
    if (l)
        return Nd.setItem(i, l),
        l;
    if (t)
        return Nd.setItem(i, t),
        t;
    const u = Nd.getItem(i);
    return u || null
}
  , w_ = () => ({
    appId: wo("app_id", {
        defaultValue: "68fe9f132f5d05bb5343106d"
    }),
    serverUrl: wo("server_url", {
        defaultValue: "https://app.base44.com"
    }),
    token: wo("access_token", {
        removeFromUrl: !0
    }),
    fromUrl: wo("from_url", {
        defaultValue: window.location.href
    }),
    functionsVersion: wo("functions_version")
})
  , Xs = {
    ...w_()
}
  , {appId: x_, serverUrl: S_, token: b_, functionsVersion: E_} = Xs
  , Dt = g_({
    appId: x_,
    serverUrl: S_,
    token: b_,
    functionsVersion: E_,
    requiresAuth: !1
})
  , ox = S.createContext()
  , C_ = ({children: e}) => {
    const [t,n] = S.useState(null)
      , [i,o] = S.useState(!1)
      , [l,u] = S.useState(!0)
      , [d,f] = S.useState(!0)
      , [p,g] = S.useState(null)
      , [y,v] = S.useState(null);
    S.useEffect( () => {
        x()
    }
    , []);
    const x = async () => {
        var T, M;
        try {
            f(!0),
            g(null);
            const O = bo({
                baseURL: `${Xs.serverUrl}/api/apps/public`,
                headers: {
                    "X-App-Id": Xs.appId
                },
                token: Xs.token,
                interceptResponses: !0
            });
            try {
                const I = await O.get(`/prod/public-settings/by-id/${Xs.appId}`);
                v(I),
                Xs.token ? await b() : (u(!1),
                o(!1)),
                f(!1)
            } catch (I) {
                if (console.error("App state check failed:", I),
                I.status === 403 && ((M = (T = I.data) == null ? void 0 : T.extra_data) != null && M.reason)) {
                    const z = I.data.extra_data.reason;
                    g(z === "auth_required" ? {
                        type: "auth_required",
                        message: "Authentication required"
                    } : z === "user_not_registered" ? {
                        type: "user_not_registered",
                        message: "User not registered for this app"
                    } : {
                        type: z,
                        message: I.message
                    })
                } else
                    g({
                        type: "unknown",
                        message: I.message || "Failed to load app"
                    });
                f(!1),
                u(!1)
            }
        } catch (O) {
            console.error("Unexpected error:", O),
            g({
                type: "unknown",
                message: O.message || "An unexpected error occurred"
            }),
            f(!1),
            u(!1)
        }
    }
      , b = async () => {
        try {
            u(!0);
            const T = await Dt.auth.me();
            n(T),
            o(!0),
            u(!1)
        } catch (T) {
            console.error("User auth check failed:", T),
            u(!1),
            o(!1),
            (T.status === 401 || T.status === 403) && g({
                type: "auth_required",
                message: "Authentication required"
            })
        }
    }
      , C = (T=!0) => {
        n(null),
        o(!1),
        T ? Dt.auth.logout(window.location.href) : Dt.auth.logout()
    }
      , E = () => {
        Dt.auth.redirectToLogin(window.location.href)
    }
    ;
    return R.jsx(ox.Provider, {
        value: {
            user: t,
            isAuthenticated: i,
            isLoadingAuth: l,
            isLoadingPublicSettings: d,
            authError: p,
            appPublicSettings: y,
            logout: C,
            navigateToLogin: E,
            checkAppState: x
        },
        children: e
    })
}
  , ax = () => {
    const e = S.useContext(ox);
    if (!e)
        throw new Error("useAuth must be used within an AuthProvider");
    return e
}
  , du = S.createContext(null);
function lh(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const uh = S.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
class k_ extends S.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = n.offsetHeight || 0,
            i.width = n.offsetWidth || 0,
            i.top = n.offsetTop,
            i.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function T_({children: e, isPresent: t}) {
    const n = S.useId()
      , i = S.useRef(null)
      , o = S.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: l} = S.useContext(uh);
    return S.useInsertionEffect( () => {
        const {width: u, height: d, top: f, left: p} = o.current;
        if (t || !i.current || !u || !d)
            return;
        i.current.dataset.motionPopId = n;
        const g = document.createElement("style");
        return l && (g.nonce = l),
        document.head.appendChild(g),
        g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${d}px !important;
            top: ${f}px !important;
            left: ${p}px !important;
          }
        `),
        () => {
            document.head.removeChild(g)
        }
    }
    , [t]),
    R.jsx(k_, {
        isPresent: t,
        childRef: i,
        sizeRef: o,
        children: S.cloneElement(e, {
            ref: i
        })
    })
}
const P_ = ({children: e, initial: t, isPresent: n, onExitComplete: i, custom: o, presenceAffectsLayout: l, mode: u}) => {
    const d = lh(R_)
      , f = S.useId()
      , p = S.useCallback(y => {
        d.set(y, !0);
        for (const v of d.values())
            if (!v)
                return;
        i && i()
    }
    , [d, i])
      , g = S.useMemo( () => ({
        id: f,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: p,
        register: y => (d.set(y, !1),
        () => d.delete(y))
    }), l ? [Math.random(), p] : [n, p]);
    return S.useMemo( () => {
        d.forEach( (y, v) => d.set(v, !1))
    }
    , [n]),
    S.useEffect( () => {
        !n && !d.size && i && i()
    }
    , [n]),
    u === "popLayout" && (e = R.jsx(T_, {
        isPresent: n,
        children: e
    })),
    R.jsx(du.Provider, {
        value: g,
        children: e
    })
}
;
function R_() {
    return new Map
}
const ch = S.createContext({})
  , zt = e => e;
let lx = zt;
function dh(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const mi = (e, t, n) => {
    const i = t - e;
    return i === 0 ? 1 : (n - e) / i
}
  , Qn = e => e * 1e3
  , Gn = e => e / 1e3
  , bl = e => e.key || "";
function Ky(e) {
    const t = [];
    return S.Children.forEach(e, n => {
        S.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const fh = typeof window < "u"
  , ux = fh ? S.useLayoutEffect : S.useEffect
  , hh = ({children: e, exitBeforeEnter: t, custom: n, initial: i=!0, onExitComplete: o, presenceAffectsLayout: l=!0, mode: u="sync"}) => {
    const d = S.useMemo( () => Ky(e), [e])
      , f = d.map(bl)
      , p = S.useRef(!0)
      , g = S.useRef(d)
      , y = lh( () => new Map)
      , [v,x] = S.useState(d)
      , [b,C] = S.useState(d);
    ux( () => {
        p.current = !1,
        g.current = d;
        for (let M = 0; M < b.length; M++) {
            const O = bl(b[M]);
            f.includes(O) ? y.delete(O) : y.get(O) !== !0 && y.set(O, !1)
        }
    }
    , [b, f.length, f.join("-")]);
    const E = [];
    if (d !== v) {
        let M = [...d];
        for (let O = 0; O < b.length; O++) {
            const I = b[O]
              , z = bl(I);
            f.includes(z) || (M.splice(O, 0, I),
            E.push(I))
        }
        u === "wait" && E.length && (M = E),
        C(Ky(M)),
        x(d);
        return
    }
    const {forceRender: T} = S.useContext(ch);
    return R.jsx(R.Fragment, {
        children: b.map(M => {
            const O = bl(M)
              , I = d === b || f.includes(O)
              , z = () => {
                if (y.has(O))
                    y.set(O, !0);
                else
                    return;
                let G = !0;
                y.forEach(J => {
                    J || (G = !1)
                }
                ),
                G && (T == null || T(),
                C(g.current),
                o && o())
            }
            ;
            return R.jsx(P_, {
                isPresent: I,
                initial: !p.current || i ? void 0 : !1,
                custom: I ? void 0 : n,
                presenceAffectsLayout: l,
                mode: u,
                onExitComplete: I ? void 0 : z,
                children: M
            }, O)
        }
        )
    })
}
  , __ = {
    useManualTiming: !1
};
function A_(e) {
    let t = new Set
      , n = new Set
      , i = !1
      , o = !1;
    const l = new WeakSet;
    let u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function d(p) {
        l.has(p) && (f.schedule(p),
        e()),
        p(u)
    }
    const f = {
        schedule: (p, g=!1, y=!1) => {
            const x = y && i ? t : n;
            return g && l.add(p),
            x.has(p) || x.add(p),
            p
        }
        ,
        cancel: p => {
            n.delete(p),
            l.delete(p)
        }
        ,
        process: p => {
            if (u = p,
            i) {
                o = !0;
                return
            }
            i = !0,
            [t,n] = [n, t],
            t.forEach(d),
            t.clear(),
            i = !1,
            o && (o = !1,
            f.process(p))
        }
    };
    return f
}
const El = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , N_ = 40;
function cx(e, t) {
    let n = !1
      , i = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = () => n = !0
      , u = El.reduce( (T, M) => (T[M] = A_(l),
    T), {})
      , {read: d, resolveKeyframes: f, update: p, preRender: g, render: y, postRender: v} = u
      , x = () => {
        const T = performance.now();
        n = !1,
        o.delta = i ? 1e3 / 60 : Math.max(Math.min(T - o.timestamp, N_), 1),
        o.timestamp = T,
        o.isProcessing = !0,
        d.process(o),
        f.process(o),
        p.process(o),
        g.process(o),
        y.process(o),
        v.process(o),
        o.isProcessing = !1,
        n && t && (i = !1,
        e(x))
    }
      , b = () => {
        n = !0,
        i = !0,
        o.isProcessing || e(x)
    }
    ;
    return {
        schedule: El.reduce( (T, M) => {
            const O = u[M];
            return T[M] = (I, z=!1, G=!1) => (n || b(),
            O.schedule(I, z, G)),
            T
        }
        , {}),
        cancel: T => {
            for (let M = 0; M < El.length; M++)
                u[El[M]].cancel(T)
        }
        ,
        state: o,
        steps: u
    }
}
const {schedule: Ve, cancel: jr, state: ft, steps: Od} = cx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : zt, !0)
  , dx = S.createContext({
    strict: !1
})
  , Qy = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , gi = {};
for (const e in Qy)
    gi[e] = {
        isEnabled: t => Qy[e].some(n => !!t[n])
    };
function O_(e) {
    for (const t in e)
        gi[t] = {
            ...gi[t],
            ...e[t]
        }
}
const L_ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Kl(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || L_.has(e)
}
let fx = e => !Kl(e);
function M_(e) {
    e && (fx = t => t.startsWith("on") ? !Kl(t) : e(t))
}
try {
    M_(require("@emotion/is-prop-valid").default)
} catch {}
function D_(e, t, n) {
    const i = {};
    for (const o in e)
        o === "values" && typeof e.values == "object" || (fx(o) || n === !0 && Kl(o) || !t && !Kl(o) || e.draggable && o.startsWith("onDrag")) && (i[o] = e[o]);
    return i
}
function j_(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , n = (...i) => e(...i);
    return new Proxy(n,{
        get: (i, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)),
        t.get(o))
    })
}
const fu = S.createContext({});
function Mo(e) {
    return typeof e == "string" || Array.isArray(e)
}
function hu(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const ph = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , mh = ["initial", ...ph];
function pu(e) {
    return hu(e.animate) || mh.some(t => Mo(e[t]))
}
function hx(e) {
    return !!(pu(e) || e.variants)
}
function I_(e, t) {
    if (pu(e)) {
        const {initial: n, animate: i} = e;
        return {
            initial: n === !1 || Mo(n) ? n : void 0,
            animate: Mo(i) ? i : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function F_(e) {
    const {initial: t, animate: n} = I_(e, S.useContext(fu));
    return S.useMemo( () => ({
        initial: t,
        animate: n
    }), [Gy(t), Gy(n)])
}
function Gy(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const V_ = Symbol.for("motionComponentSymbol");
function Ys(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function B_(e, t, n) {
    return S.useCallback(i => {
        i && e.mount && e.mount(i),
        t && (i ? t.mount(i) : t.unmount()),
        n && (typeof n == "function" ? n(i) : Ys(n) && (n.current = i))
    }
    , [t])
}
const gh = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , U_ = "framerAppearId"
  , px = "data-" + gh(U_)
  , {schedule: yh} = cx(queueMicrotask, !1)
  , mx = S.createContext({});
function z_(e, t, n, i, o) {
    var l, u;
    const {visualElement: d} = S.useContext(fu)
      , f = S.useContext(dx)
      , p = S.useContext(du)
      , g = S.useContext(uh).reducedMotion
      , y = S.useRef(null);
    i = i || f.renderer,
    !y.current && i && (y.current = i(e, {
        visualState: t,
        parent: d,
        props: n,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const v = y.current
      , x = S.useContext(mx);
    v && !v.projection && o && (v.type === "html" || v.type === "svg") && $_(y.current, n, o, x);
    const b = S.useRef(!1);
    S.useInsertionEffect( () => {
        v && b.current && v.update(n, p)
    }
    );
    const C = n[px]
      , E = S.useRef(!!C && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, C)) && ((u = window.MotionHasOptimisedAnimation) === null || u === void 0 ? void 0 : u.call(window, C)));
    return ux( () => {
        v && (b.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        yh.render(v.render),
        E.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    S.useEffect( () => {
        v && (!E.current && v.animationState && v.animationState.animateChanges(),
        E.current && (queueMicrotask( () => {
            var T;
            (T = window.MotionHandoffMarkAsComplete) === null || T === void 0 || T.call(window, C)
        }
        ),
        E.current = !1))
    }
    ),
    v
}
function $_(e, t, n, i) {
    const {layoutId: o, layout: l, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : gx(e.parent)),
    e.projection.setOptions({
        layoutId: o,
        layout: l,
        alwaysMeasureLayout: !!u || d && Ys(d),
        visualElement: e,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: p
    })
}
function gx(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : gx(e.parent)
}
function H_({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: i, Component: o}) {
    var l, u;
    e && O_(e);
    function d(p, g) {
        let y;
        const v = {
            ...S.useContext(uh),
            ...p,
            layoutId: W_(p)
        }
          , {isStatic: x} = v
          , b = F_(p)
          , C = i(p, x);
        if (!x && fh) {
            q_();
            const E = K_(v);
            y = E.MeasureLayout,
            b.visualElement = z_(o, C, v, t, E.ProjectionNode)
        }
        return R.jsxs(fu.Provider, {
            value: b,
            children: [y && b.visualElement ? R.jsx(y, {
                visualElement: b.visualElement,
                ...v
            }) : null, n(o, p, B_(C, b.visualElement, g), C, x, b.visualElement)]
        })
    }
    d.displayName = `motion.${typeof o == "string" ? o : `create(${(u = (l = o.displayName) !== null && l !== void 0 ? l : o.name) !== null && u !== void 0 ? u : ""})`}`;
    const f = S.forwardRef(d);
    return f[V_] = o,
    f
}
function W_({layoutId: e}) {
    const t = S.useContext(ch).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function q_(e, t) {
    S.useContext(dx).strict
}
function K_(e) {
    const {drag: t, layout: n} = gi;
    if (!t && !n)
        return {};
    const i = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const Q_ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function vh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Q_.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function yx(e, {style: t, vars: n}, i, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(i));
    for (const l in n)
        e.style.setProperty(l, n[l])
}
const vx = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function wx(e, t, n, i) {
    yx(e, t, void 0, i);
    for (const o in t.attrs)
        e.setAttribute(vx.has(o) ? o : gh(o), t.attrs[o])
}
const wt = e => !!(e && e.getVelocity)
  , Ql = {};
function G_(e) {
    Object.assign(Ql, e)
}
const Yo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , bs = new Set(Yo);
function xx(e, {layout: t, layoutId: n}) {
    return bs.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ql[e] || e === "opacity")
}
function wh(e, t, n) {
    var i;
    const {style: o} = e
      , l = {};
    for (const u in o)
        (wt(o[u]) || t.style && wt(t.style[u]) || xx(u, e) || ((i = n == null ? void 0 : n.getValue(u)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[u] = o[u]);
    return l
}
function Sx(e, t, n) {
    const i = wh(e, t, n);
    for (const o in e)
        if (wt(e[o]) || wt(t[o])) {
            const l = Yo.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            i[l] = e[o]
        }
    return i
}
function Xy(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, i) => {
        t[0][i] = n.get(),
        t[1][i] = n.getVelocity()
    }
    ),
    t
}
function xh(e, t, n, i) {
    if (typeof t == "function") {
        const [o,l] = Xy(i);
        t = t(n !== void 0 ? n : e.custom, o, l)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [o,l] = Xy(i);
        t = t(n !== void 0 ? n : e.custom, o, l)
    }
    return t
}
const bf = e => Array.isArray(e)
  , X_ = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , Y_ = e => bf(e) ? e[e.length - 1] || 0 : e;
function Bl(e) {
    const t = wt(e) ? e.get() : e;
    return X_(t) ? t.toValue() : t
}
function J_({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, i, o, l) {
    const u = {
        latestValues: Z_(i, o, l, e),
        renderState: t()
    };
    return n && (u.mount = d => n(i, d, u)),
    u
}
const bx = e => (t, n) => {
    const i = S.useContext(fu)
      , o = S.useContext(du)
      , l = () => J_(e, t, i, o);
    return n ? l() : lh(l)
}
;
function Z_(e, t, n, i) {
    const o = {}
      , l = i(e, {});
    for (const v in l)
        o[v] = Bl(l[v]);
    let {initial: u, animate: d} = e;
    const f = pu(e)
      , p = hx(e);
    t && p && !f && e.inherit !== !1 && (u === void 0 && (u = t.initial),
    d === void 0 && (d = t.animate));
    let g = n ? n.initial === !1 : !1;
    g = g || u === !1;
    const y = g ? d : u;
    if (y && typeof y != "boolean" && !hu(y)) {
        const v = Array.isArray(y) ? y : [y];
        for (let x = 0; x < v.length; x++) {
            const b = xh(e, v[x]);
            if (b) {
                const {transitionEnd: C, transition: E, ...T} = b;
                for (const M in T) {
                    let O = T[M];
                    if (Array.isArray(O)) {
                        const I = g ? O.length - 1 : 0;
                        O = O[I]
                    }
                    O !== null && (o[M] = O)
                }
                for (const M in C)
                    o[M] = C[M]
            }
        }
    }
    return o
}
const Sh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Ex = () => ({
    ...Sh(),
    attrs: {}
})
  , Cx = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , Jn = (e, t, n) => n > t ? t : n < e ? e : n
  , Pi = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Do = {
    ...Pi,
    transform: e => Jn(0, 1, e)
}
  , Cl = {
    ...Pi,
    default: 1
}
  , Jo = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Cr = Jo("deg")
  , kn = Jo("%")
  , ve = Jo("px")
  , eA = Jo("vh")
  , tA = Jo("vw")
  , Yy = {
    ...kn,
    parse: e => kn.parse(e) / 100,
    transform: e => kn.transform(e * 100)
}
  , nA = {
    borderWidth: ve,
    borderTopWidth: ve,
    borderRightWidth: ve,
    borderBottomWidth: ve,
    borderLeftWidth: ve,
    borderRadius: ve,
    radius: ve,
    borderTopLeftRadius: ve,
    borderTopRightRadius: ve,
    borderBottomRightRadius: ve,
    borderBottomLeftRadius: ve,
    width: ve,
    maxWidth: ve,
    height: ve,
    maxHeight: ve,
    top: ve,
    right: ve,
    bottom: ve,
    left: ve,
    padding: ve,
    paddingTop: ve,
    paddingRight: ve,
    paddingBottom: ve,
    paddingLeft: ve,
    margin: ve,
    marginTop: ve,
    marginRight: ve,
    marginBottom: ve,
    marginLeft: ve,
    backgroundPositionX: ve,
    backgroundPositionY: ve
}
  , rA = {
    rotate: Cr,
    rotateX: Cr,
    rotateY: Cr,
    rotateZ: Cr,
    scale: Cl,
    scaleX: Cl,
    scaleY: Cl,
    scaleZ: Cl,
    skew: Cr,
    skewX: Cr,
    skewY: Cr,
    distance: ve,
    translateX: ve,
    translateY: ve,
    translateZ: ve,
    x: ve,
    y: ve,
    z: ve,
    perspective: ve,
    transformPerspective: ve,
    opacity: Do,
    originX: Yy,
    originY: Yy,
    originZ: ve
}
  , Jy = {
    ...Pi,
    transform: Math.round
}
  , bh = {
    ...nA,
    ...rA,
    zIndex: Jy,
    size: ve,
    fillOpacity: Do,
    strokeOpacity: Do,
    numOctaves: Jy
}
  , sA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , iA = Yo.length;
function oA(e, t, n) {
    let i = ""
      , o = !0;
    for (let l = 0; l < iA; l++) {
        const u = Yo[l]
          , d = e[u];
        if (d === void 0)
            continue;
        let f = !0;
        if (typeof d == "number" ? f = d === (u.startsWith("scale") ? 1 : 0) : f = parseFloat(d) === 0,
        !f || n) {
            const p = Cx(d, bh[u]);
            if (!f) {
                o = !1;
                const g = sA[u] || u;
                i += `${g}(${p}) `
            }
            n && (t[u] = p)
        }
    }
    return i = i.trim(),
    n ? i = n(t, o ? "" : i) : o && (i = "none"),
    i
}
const kx = e => t => typeof t == "string" && t.startsWith(e)
  , Tx = kx("--")
  , aA = kx("var(--")
  , Eh = e => aA(e) ? lA.test(e.split("/*")[0].trim()) : !1
  , lA = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ch(e, t, n) {
    const {style: i, vars: o, transformOrigin: l} = e;
    let u = !1
      , d = !1;
    for (const f in t) {
        const p = t[f];
        if (bs.has(f)) {
            u = !0;
            continue
        } else if (Tx(f)) {
            o[f] = p;
            continue
        } else {
            const g = Cx(p, bh[f]);
            f.startsWith("origin") ? (d = !0,
            l[f] = g) : i[f] = g
        }
    }
    if (t.transform || (u || n ? i.transform = oA(t, e.transform, n) : i.transform && (i.transform = "none")),
    d) {
        const {originX: f="50%", originY: p="50%", originZ: g=0} = l;
        i.transformOrigin = `${f} ${p} ${g}`
    }
}
function Zy(e, t, n) {
    return typeof e == "string" ? e : ve.transform(t + n * e)
}
function uA(e, t, n) {
    const i = Zy(t, e.x, e.width)
      , o = Zy(n, e.y, e.height);
    return `${i} ${o}`
}
const cA = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , dA = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function fA(e, t, n=1, i=0, o=!0) {
    e.pathLength = 1;
    const l = o ? cA : dA;
    e[l.offset] = ve.transform(-i);
    const u = ve.transform(t)
      , d = ve.transform(n);
    e[l.array] = `${u} ${d}`
}
function kh(e, {attrX: t, attrY: n, attrScale: i, originX: o, originY: l, pathLength: u, pathSpacing: d=1, pathOffset: f=0, ...p}, g, y) {
    if (Ch(e, p, y),
    g) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: v, style: x, dimensions: b} = e;
    v.transform && (b && (x.transform = v.transform),
    delete v.transform),
    b && (o !== void 0 || l !== void 0 || x.transform) && (x.transformOrigin = uA(b, o !== void 0 ? o : .5, l !== void 0 ? l : .5)),
    t !== void 0 && (v.x = t),
    n !== void 0 && (v.y = n),
    i !== void 0 && (v.scale = i),
    u !== void 0 && fA(v, u, d, f, !1)
}
const Th = e => typeof e == "string" && e.toLowerCase() === "svg"
  , hA = {
    useVisualState: bx({
        scrapeMotionValuesFromProps: Sx,
        createRenderState: Ex,
        onMount: (e, t, {renderState: n, latestValues: i}) => {
            Ve.read( () => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            Ve.render( () => {
                kh(n, i, Th(t.tagName), e.transformTemplate),
                wx(t, n)
            }
            )
        }
    })
}
  , pA = {
    useVisualState: bx({
        scrapeMotionValuesFromProps: wh,
        createRenderState: Sh
    })
};
function Px(e, t, n) {
    for (const i in t)
        !wt(t[i]) && !xx(i, n) && (e[i] = t[i])
}
function mA({transformTemplate: e}, t) {
    return S.useMemo( () => {
        const n = Sh();
        return Ch(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function gA(e, t) {
    const n = e.style || {}
      , i = {};
    return Px(i, n, e),
    Object.assign(i, mA(e, t)),
    i
}
function yA(e, t) {
    const n = {}
      , i = gA(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = i,
    n
}
function vA(e, t, n, i) {
    const o = S.useMemo( () => {
        const l = Ex();
        return kh(l, t, Th(i), e.transformTemplate),
        {
            ...l.attrs,
            style: {
                ...l.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const l = {};
        Px(l, e.style, e),
        o.style = {
            ...l,
            ...o.style
        }
    }
    return o
}
function wA(e=!1) {
    return (n, i, o, {latestValues: l}, u) => {
        const f = (vh(n) ? vA : yA)(i, l, u, n)
          , p = D_(i, typeof n == "string", e)
          , g = n !== S.Fragment ? {
            ...p,
            ...f,
            ref: o
        } : {}
          , {children: y} = i
          , v = S.useMemo( () => wt(y) ? y.get() : y, [y]);
        return S.createElement(n, {
            ...g,
            children: v
        })
    }
}
function xA(e, t) {
    return function(i, {forwardMotionProps: o}={
        forwardMotionProps: !1
    }) {
        const u = {
            ...vh(i) ? hA : pA,
            preloadedFeatures: e,
            useRender: wA(o),
            createVisualElement: t,
            Component: i
        };
        return H_(u)
    }
}
function Rx(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let i = 0; i < n; i++)
        if (t[i] !== e[i])
            return !1;
    return !0
}
function mu(e, t, n) {
    const i = e.getProps();
    return xh(i, t, n !== void 0 ? n : i.custom, e)
}
const SA = dh( () => window.ScrollTimeline !== void 0);
class bA {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = n
    }
    attachTimeline(t, n) {
        const i = this.animations.map(o => {
            if (SA() && o.attachTimeline)
                return o.attachTimeline(t);
            if (typeof n == "function")
                return n(o)
        }
        );
        return () => {
            i.forEach( (o, l) => {
                o && o(),
                this.animations[l].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class EA extends bA {
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
}
function Ph(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const Ef = 2e4;
function _x(e) {
    let t = 0;
    const n = 50;
    let i = e.next(t);
    for (; !i.done && t < Ef; )
        t += n,
        i = e.next(t);
    return t >= Ef ? 1 / 0 : t
}
function Rh(e) {
    return typeof e == "function"
}
function ev(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const _h = e => Array.isArray(e) && typeof e[0] == "number"
  , CA = {
    linearEasing: void 0
};
function kA(e, t) {
    const n = dh(e);
    return () => {
        var i;
        return (i = CA[t]) !== null && i !== void 0 ? i : n()
    }
}
const Gl = kA( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Ax = (e, t, n=10) => {
    let i = "";
    const o = Math.max(Math.round(t / n), 2);
    for (let l = 0; l < o; l++)
        i += e(mi(0, o - 1, l)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
;
function Nx(e) {
    return !!(typeof e == "function" && Gl() || !e || typeof e == "string" && (e in Cf || Gl()) || _h(e) || Array.isArray(e) && e.every(Nx))
}
const Co = ([e,t,n,i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`
  , Cf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Co([0, .65, .55, 1]),
    circOut: Co([.55, 0, 1, .45]),
    backIn: Co([.31, .01, .66, -.59]),
    backOut: Co([.33, 1.53, .69, .99])
};
function Ox(e, t) {
    if (e)
        return typeof e == "function" && Gl() ? Ax(e, t) : _h(e) ? Co(e) : Array.isArray(e) ? e.map(n => Ox(n, t) || Cf.easeOut) : Cf[e]
}
const cn = {
    x: !1,
    y: !1
};
function Lx() {
    return cn.x || cn.y
}
function TA(e, t, n) {
    var i;
    if (e instanceof Element)
        return [e];
    if (typeof e == "string") {
        let o = document;
        const l = (i = void 0) !== null && i !== void 0 ? i : o.querySelectorAll(e);
        return l ? Array.from(l) : []
    }
    return Array.from(e)
}
function Mx(e, t) {
    const n = TA(e)
      , i = new AbortController
      , o = {
        passive: !0,
        ...t,
        signal: i.signal
    };
    return [n, o, () => i.abort()]
}
function tv(e) {
    return t => {
        t.pointerType === "touch" || Lx() || e(t)
    }
}
function PA(e, t, n={}) {
    const [i,o,l] = Mx(e, n)
      , u = tv(d => {
        const {target: f} = d
          , p = t(d);
        if (typeof p != "function" || !f)
            return;
        const g = tv(y => {
            p(y),
            f.removeEventListener("pointerleave", g)
        }
        );
        f.addEventListener("pointerleave", g, o)
    }
    );
    return i.forEach(d => {
        d.addEventListener("pointerenter", u, o)
    }
    ),
    l
}
const Dx = (e, t) => t ? e === t ? !0 : Dx(e, t.parentElement) : !1
  , Ah = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , RA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function _A(e) {
    return RA.has(e.tagName) || e.tabIndex !== -1
}
const ko = new WeakSet;
function nv(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Ld(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const AA = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const i = nv( () => {
        if (ko.has(n))
            return;
        Ld(n, "down");
        const o = nv( () => {
            Ld(n, "up")
        }
        )
          , l = () => Ld(n, "cancel");
        n.addEventListener("keyup", o, t),
        n.addEventListener("blur", l, t)
    }
    );
    n.addEventListener("keydown", i, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", i), t)
}
;
function rv(e) {
    return Ah(e) && !Lx()
}
function NA(e, t, n={}) {
    const [i,o,l] = Mx(e, n)
      , u = d => {
        const f = d.currentTarget;
        if (!rv(d) || ko.has(f))
            return;
        ko.add(f);
        const p = t(d)
          , g = (x, b) => {
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", v),
            !(!rv(x) || !ko.has(f)) && (ko.delete(f),
            typeof p == "function" && p(x, {
                success: b
            }))
        }
          , y = x => {
            g(x, n.useGlobalTarget || Dx(f, x.target))
        }
          , v = x => {
            g(x, !1)
        }
        ;
        window.addEventListener("pointerup", y, o),
        window.addEventListener("pointercancel", v, o)
    }
    ;
    return i.forEach(d => {
        !_A(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0),
        (n.useGlobalTarget ? window : d).addEventListener("pointerdown", u, o),
        d.addEventListener("focus", p => AA(p, o), o)
    }
    ),
    l
}
function OA(e) {
    return e === "x" || e === "y" ? cn[e] ? null : (cn[e] = !0,
    () => {
        cn[e] = !1
    }
    ) : cn.x || cn.y ? null : (cn.x = cn.y = !0,
    () => {
        cn.x = cn.y = !1
    }
    )
}
let Ul;
function LA() {
    Ul = void 0
}
const Tn = {
    now: () => (Ul === void 0 && Tn.set(ft.isProcessing || __.useManualTiming ? ft.timestamp : performance.now()),
    Ul),
    set: e => {
        Ul = e,
        queueMicrotask(LA)
    }
};
function Nh(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Oh(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Lh {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Nh(this.subscriptions, t),
        () => Oh(this.subscriptions, t)
    }
    notify(t, n, i) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](t, n, i);
            else
                for (let l = 0; l < o; l++) {
                    const u = this.subscriptions[l];
                    u && u(t, n, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function jx(e, t) {
    return t ? e * (1e3 / t) : 0
}
const sv = 30
  , MA = e => !isNaN(parseFloat(e));
class DA {
    constructor(t, n={}) {
        this.version = "11.16.4",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (i, o=!0) => {
            const l = Tn.now();
            this.updatedAt !== l && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(i),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = Tn.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = MA(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Lh);
        const i = this.events[t].add(n);
        return t === "change" ? () => {
            i(),
            Ve.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : i
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, i) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - i
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Tn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > sv)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, sv);
        return jx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function jo(e, t) {
    return new DA(e,t)
}
function jA(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, jo(n))
}
function IA(e, t) {
    const n = mu(e, t);
    let {transitionEnd: i={}, transition: o={}, ...l} = n || {};
    l = {
        ...l,
        ...i
    };
    for (const u in l) {
        const d = Y_(l[u]);
        jA(e, u, d)
    }
}
function FA(e) {
    return !!(wt(e) && e.add)
}
function kf(e, t) {
    const n = e.getValue("willChange");
    if (FA(n))
        return n.add(t)
}
function Ix(e) {
    return e.props[px]
}
const Fx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , VA = 1e-7
  , BA = 12;
function UA(e, t, n, i, o) {
    let l, u, d = 0;
    do
        u = t + (n - t) / 2,
        l = Fx(u, i, o) - e,
        l > 0 ? n = u : t = u;
    while (Math.abs(l) > VA && ++d < BA);
    return u
}
function Zo(e, t, n, i) {
    if (e === t && n === i)
        return zt;
    const o = l => UA(l, 0, 1, e, n);
    return l => l === 0 || l === 1 ? l : Fx(o(l), t, i)
}
const Vx = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Bx = e => t => 1 - e(1 - t)
  , Ux = Zo(.33, 1.53, .69, .99)
  , Mh = Bx(Ux)
  , zx = Vx(Mh)
  , $x = e => (e *= 2) < 1 ? .5 * Mh(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Dh = e => 1 - Math.sin(Math.acos(e))
  , Hx = Bx(Dh)
  , Wx = Vx(Dh)
  , qx = e => /^0[^.\s]+$/u.test(e);
function zA(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || qx(e) : !0
}
const Kx = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , $A = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function HA(e) {
    const t = $A.exec(e);
    if (!t)
        return [, ];
    const [,n,i,o] = t;
    return [`--${n ?? i}`, o]
}
function Qx(e, t, n=1) {
    const [i,o] = HA(e);
    if (!i)
        return;
    const l = window.getComputedStyle(t).getPropertyValue(i);
    if (l) {
        const u = l.trim();
        return Kx(u) ? parseFloat(u) : u
    }
    return Eh(o) ? Qx(o, t, n + 1) : o
}
const WA = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , iv = e => e === Pi || e === ve
  , ov = (e, t) => parseFloat(e.split(", ")[t])
  , av = (e, t) => (n, {transform: i}) => {
    if (i === "none" || !i)
        return 0;
    const o = i.match(/^matrix3d\((.+)\)$/u);
    if (o)
        return ov(o[1], t);
    {
        const l = i.match(/^matrix\((.+)\)$/u);
        return l ? ov(l[1], e) : 0
    }
}
  , qA = new Set(["x", "y", "z"])
  , KA = Yo.filter(e => !qA.has(e));
function QA(e) {
    const t = [];
    return KA.forEach(n => {
        const i = e.getValue(n);
        i !== void 0 && (t.push([n, i.get()]),
        i.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const yi = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: av(4, 13),
    y: av(5, 14)
};
yi.translateX = yi.x;
yi.translateY = yi.y;
const Gx = e => t => t.test(e)
  , GA = {
    test: e => e === "auto",
    parse: e => e
}
  , Xx = [Pi, ve, kn, Cr, tA, eA, GA]
  , lv = e => Xx.find(Gx(e))
  , ys = new Set;
let Tf = !1
  , Pf = !1;
function Yx() {
    if (Pf) {
        const e = Array.from(ys).filter(i => i.needsMeasurement)
          , t = new Set(e.map(i => i.element))
          , n = new Map;
        t.forEach(i => {
            const o = QA(i);
            o.length && (n.set(i, o),
            i.render())
        }
        ),
        e.forEach(i => i.measureInitialState()),
        t.forEach(i => {
            i.render();
            const o = n.get(i);
            o && o.forEach( ([l,u]) => {
                var d;
                (d = i.getValue(l)) === null || d === void 0 || d.set(u)
            }
            )
        }
        ),
        e.forEach(i => i.measureEndState()),
        e.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        }
        )
    }
    Pf = !1,
    Tf = !1,
    ys.forEach(e => e.complete()),
    ys.clear()
}
function Jx() {
    ys.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Pf = !0)
    }
    )
}
function XA() {
    Jx(),
    Yx()
}
class jh {
    constructor(t, n, i, o, l, u=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = i,
        this.motionValue = o,
        this.element = l,
        this.isAsync = u
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (ys.add(this),
        Tf || (Tf = !0,
        Ve.read(Jx),
        Ve.resolveKeyframes(Yx))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: i, motionValue: o} = this;
        for (let l = 0; l < t.length; l++)
            if (t[l] === null)
                if (l === 0) {
                    const u = o == null ? void 0 : o.get()
                      , d = t[t.length - 1];
                    if (u !== void 0)
                        t[0] = u;
                    else if (i && n) {
                        const f = i.readValue(n, d);
                        f != null && (t[0] = f)
                    }
                    t[0] === void 0 && (t[0] = d),
                    o && u === void 0 && o.set(t[0])
                } else
                    t[l] = t[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        ys.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        ys.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Ro = e => Math.round(e * 1e5) / 1e5
  , Ih = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function YA(e) {
    return e == null
}
const JA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Fh = (e, t) => n => !!(typeof n == "string" && JA.test(n) && n.startsWith(e) || t && !YA(n) && Object.prototype.hasOwnProperty.call(n, t))
  , Zx = (e, t, n) => i => {
    if (typeof i != "string")
        return i;
    const [o,l,u,d] = i.match(Ih);
    return {
        [e]: parseFloat(o),
        [t]: parseFloat(l),
        [n]: parseFloat(u),
        alpha: d !== void 0 ? parseFloat(d) : 1
    }
}
  , ZA = e => Jn(0, 255, e)
  , Md = {
    ...Pi,
    transform: e => Math.round(ZA(e))
}
  , os = {
    test: Fh("rgb", "red"),
    parse: Zx("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: i=1}) => "rgba(" + Md.transform(e) + ", " + Md.transform(t) + ", " + Md.transform(n) + ", " + Ro(Do.transform(i)) + ")"
};
function eN(e) {
    let t = ""
      , n = ""
      , i = ""
      , o = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    i = e.substring(5, 7),
    o = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    i = e.substring(3, 4),
    o = e.substring(4, 5),
    t += t,
    n += n,
    i += i,
    o += o),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(i, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const Rf = {
    test: Fh("#"),
    parse: eN,
    transform: os.transform
}
  , Js = {
    test: Fh("hsl", "hue"),
    parse: Zx("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: i=1}) => "hsla(" + Math.round(e) + ", " + kn.transform(Ro(t)) + ", " + kn.transform(Ro(n)) + ", " + Ro(Do.transform(i)) + ")"
}
  , yt = {
    test: e => os.test(e) || Rf.test(e) || Js.test(e),
    parse: e => os.test(e) ? os.parse(e) : Js.test(e) ? Js.parse(e) : Rf.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? os.transform(e) : Js.transform(e)
}
  , tN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nN(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Ih)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(tN)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const eS = "number"
  , tS = "color"
  , rN = "var"
  , sN = "var("
  , uv = "${}"
  , iN = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Io(e) {
    const t = e.toString()
      , n = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let l = 0;
    const d = t.replace(iN, f => (yt.test(f) ? (i.color.push(l),
    o.push(tS),
    n.push(yt.parse(f))) : f.startsWith(sN) ? (i.var.push(l),
    o.push(rN),
    n.push(f)) : (i.number.push(l),
    o.push(eS),
    n.push(parseFloat(f))),
    ++l,
    uv)).split(uv);
    return {
        values: n,
        split: d,
        indexes: i,
        types: o
    }
}
function nS(e) {
    return Io(e).values
}
function rS(e) {
    const {split: t, types: n} = Io(e)
      , i = t.length;
    return o => {
        let l = "";
        for (let u = 0; u < i; u++)
            if (l += t[u],
            o[u] !== void 0) {
                const d = n[u];
                d === eS ? l += Ro(o[u]) : d === tS ? l += yt.transform(o[u]) : l += o[u]
            }
        return l
    }
}
const oN = e => typeof e == "number" ? 0 : e;
function aN(e) {
    const t = nS(e);
    return rS(e)(t.map(oN))
}
const Ir = {
    test: nN,
    parse: nS,
    createTransformer: rS,
    getAnimatableNone: aN
}
  , lN = new Set(["brightness", "contrast", "saturate", "opacity"]);
function uN(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [i] = n.match(Ih) || [];
    if (!i)
        return e;
    const o = n.replace(i, "");
    let l = lN.has(t) ? 1 : 0;
    return i !== n && (l *= 100),
    t + "(" + l + o + ")"
}
const cN = /\b([a-z-]*)\(.*?\)/gu
  , _f = {
    ...Ir,
    getAnimatableNone: e => {
        const t = e.match(cN);
        return t ? t.map(uN).join(" ") : e
    }
}
  , dN = {
    ...bh,
    color: yt,
    backgroundColor: yt,
    outlineColor: yt,
    fill: yt,
    stroke: yt,
    borderColor: yt,
    borderTopColor: yt,
    borderRightColor: yt,
    borderBottomColor: yt,
    borderLeftColor: yt,
    filter: _f,
    WebkitFilter: _f
}
  , Vh = e => dN[e];
function sS(e, t) {
    let n = Vh(e);
    return n !== _f && (n = Ir),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const fN = new Set(["auto", "none", "0"]);
function hN(e, t, n) {
    let i = 0, o;
    for (; i < e.length && !o; ) {
        const l = e[i];
        typeof l == "string" && !fN.has(l) && Io(l).values.length && (o = e[i]),
        i++
    }
    if (o && n)
        for (const l of t)
            e[l] = sS(n, o)
}
class iS extends jh {
    constructor(t, n, i, o, l) {
        super(t, n, i, o, l, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: i} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let f = 0; f < t.length; f++) {
            let p = t[f];
            if (typeof p == "string" && (p = p.trim(),
            Eh(p))) {
                const g = Qx(p, n.current);
                g !== void 0 && (t[f] = g),
                f === t.length - 1 && (this.finalKeyframe = p)
            }
        }
        if (this.resolveNoneKeyframes(),
        !WA.has(i) || t.length !== 2)
            return;
        const [o,l] = t
          , u = lv(o)
          , d = lv(l);
        if (u !== d)
            if (iv(u) && iv(d))
                for (let f = 0; f < t.length; f++) {
                    const p = t[f];
                    typeof p == "string" && (t[f] = parseFloat(p))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , i = [];
        for (let o = 0; o < t.length; o++)
            zA(t[o]) && i.push(o);
        i.length && hN(t, i, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: i} = this;
        if (!t || !t.current)
            return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = yi[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const o = n[n.length - 1];
        o !== void 0 && t.getValue(i, o).jump(o, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: i, unresolvedKeyframes: o} = this;
        if (!n || !n.current)
            return;
        const l = n.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const u = o.length - 1
          , d = o[u];
        o[u] = yi[i](n.measureViewportBox(), window.getComputedStyle(n.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([f,p]) => {
            n.getValue(f).set(p)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const cv = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Ir.test(e) || e === "0") && !e.startsWith("url("));
function pN(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function mN(e, t, n, i) {
    const o = e[0];
    if (o === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const l = e[e.length - 1]
      , u = cv(o, t)
      , d = cv(l, t);
    return !u || !d ? !1 : pN(e) || (n === "spring" || Rh(n)) && i
}
const gN = e => e !== null;
function gu(e, {repeat: t, repeatType: n="loop"}, i) {
    const o = e.filter(gN)
      , l = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
    return !l || i === void 0 ? o[l] : i
}
const yN = 40;
class oS {
    constructor({autoplay: t=!0, delay: n=0, type: i="keyframes", repeat: o=0, repeatDelay: l=0, repeatType: u="loop", ...d}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = Tn.now(),
        this.options = {
            autoplay: t,
            delay: n,
            type: i,
            repeat: o,
            repeatDelay: l,
            repeatType: u,
            ...d
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > yN ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && XA(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = Tn.now(),
        this.hasAttemptedResolve = !0;
        const {name: i, type: o, velocity: l, delay: u, onComplete: d, onUpdate: f, isGenerator: p} = this.options;
        if (!p && !mN(t, i, o, l))
            if (u)
                this.options.duration = 0;
            else {
                f == null || f(gu(t, this.options, n)),
                d == null || d(),
                this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(t, n);
        g !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...g
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
const $e = (e, t, n) => e + (t - e) * n;
function Dd(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function vN({hue: e, saturation: t, lightness: n, alpha: i}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let o = 0
      , l = 0
      , u = 0;
    if (!t)
        o = l = u = n;
    else {
        const d = n < .5 ? n * (1 + t) : n + t - n * t
          , f = 2 * n - d;
        o = Dd(f, d, e + 1 / 3),
        l = Dd(f, d, e),
        u = Dd(f, d, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(l * 255),
        blue: Math.round(u * 255),
        alpha: i
    }
}
function Xl(e, t) {
    return n => n > 0 ? t : e
}
const jd = (e, t, n) => {
    const i = e * e
      , o = n * (t * t - i) + i;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , wN = [Rf, os, Js]
  , xN = e => wN.find(t => t.test(e));
function dv(e) {
    const t = xN(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === Js && (n = vN(n)),
    n
}
const fv = (e, t) => {
    const n = dv(e)
      , i = dv(t);
    if (!n || !i)
        return Xl(e, t);
    const o = {
        ...n
    };
    return l => (o.red = jd(n.red, i.red, l),
    o.green = jd(n.green, i.green, l),
    o.blue = jd(n.blue, i.blue, l),
    o.alpha = $e(n.alpha, i.alpha, l),
    os.transform(o))
}
  , SN = (e, t) => n => t(e(n))
  , ea = (...e) => e.reduce(SN)
  , Af = new Set(["none", "hidden"]);
function bN(e, t) {
    return Af.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function EN(e, t) {
    return n => $e(e, t, n)
}
function Bh(e) {
    return typeof e == "number" ? EN : typeof e == "string" ? Eh(e) ? Xl : yt.test(e) ? fv : TN : Array.isArray(e) ? aS : typeof e == "object" ? yt.test(e) ? fv : CN : Xl
}
function aS(e, t) {
    const n = [...e]
      , i = n.length
      , o = e.map( (l, u) => Bh(l)(l, t[u]));
    return l => {
        for (let u = 0; u < i; u++)
            n[u] = o[u](l);
        return n
    }
}
function CN(e, t) {
    const n = {
        ...e,
        ...t
    }
      , i = {};
    for (const o in n)
        e[o] !== void 0 && t[o] !== void 0 && (i[o] = Bh(e[o])(e[o], t[o]));
    return o => {
        for (const l in i)
            n[l] = i[l](o);
        return n
    }
}
function kN(e, t) {
    var n;
    const i = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let l = 0; l < t.values.length; l++) {
        const u = t.types[l]
          , d = e.indexes[u][o[u]]
          , f = (n = e.values[d]) !== null && n !== void 0 ? n : 0;
        i[l] = f,
        o[u]++
    }
    return i
}
const TN = (e, t) => {
    const n = Ir.createTransformer(t)
      , i = Io(e)
      , o = Io(t);
    return i.indexes.var.length === o.indexes.var.length && i.indexes.color.length === o.indexes.color.length && i.indexes.number.length >= o.indexes.number.length ? Af.has(e) && !o.values.length || Af.has(t) && !i.values.length ? bN(e, t) : ea(aS(kN(i, o), o.values), n) : Xl(e, t)
}
;
function lS(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? $e(e, t, n) : Bh(e)(e, t)
}
const PN = 5;
function uS(e, t, n) {
    const i = Math.max(t - PN, 0);
    return jx(n - e(i), t - i)
}
const Ke = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Id = .001;
function RN({duration: e=Ke.duration, bounce: t=Ke.bounce, velocity: n=Ke.velocity, mass: i=Ke.mass}) {
    let o, l, u = 1 - t;
    u = Jn(Ke.minDamping, Ke.maxDamping, u),
    e = Jn(Ke.minDuration, Ke.maxDuration, Gn(e)),
    u < 1 ? (o = p => {
        const g = p * u
          , y = g * e
          , v = g - n
          , x = Nf(p, u)
          , b = Math.exp(-y);
        return Id - v / x * b
    }
    ,
    l = p => {
        const y = p * u * e
          , v = y * n + n
          , x = Math.pow(u, 2) * Math.pow(p, 2) * e
          , b = Math.exp(-y)
          , C = Nf(Math.pow(p, 2), u);
        return (-o(p) + Id > 0 ? -1 : 1) * ((v - x) * b) / C
    }
    ) : (o = p => {
        const g = Math.exp(-p * e)
          , y = (p - n) * e + 1;
        return -Id + g * y
    }
    ,
    l = p => {
        const g = Math.exp(-p * e)
          , y = (n - p) * (e * e);
        return g * y
    }
    );
    const d = 5 / e
      , f = AN(o, l, d);
    if (e = Qn(e),
    isNaN(f))
        return {
            stiffness: Ke.stiffness,
            damping: Ke.damping,
            duration: e
        };
    {
        const p = Math.pow(f, 2) * i;
        return {
            stiffness: p,
            damping: u * 2 * Math.sqrt(i * p),
            duration: e
        }
    }
}
const _N = 12;
function AN(e, t, n) {
    let i = n;
    for (let o = 1; o < _N; o++)
        i = i - e(i) / t(i);
    return i
}
function Nf(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const NN = ["duration", "bounce"]
  , ON = ["stiffness", "damping", "mass"];
function hv(e, t) {
    return t.some(n => e[n] !== void 0)
}
function LN(e) {
    let t = {
        velocity: Ke.velocity,
        stiffness: Ke.stiffness,
        damping: Ke.damping,
        mass: Ke.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!hv(e, ON) && hv(e, NN))
        if (e.visualDuration) {
            const n = e.visualDuration
              , i = 2 * Math.PI / (n * 1.2)
              , o = i * i
              , l = 2 * Jn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
            t = {
                ...t,
                mass: Ke.mass,
                stiffness: o,
                damping: l
            }
        } else {
            const n = RN(e);
            t = {
                ...t,
                ...n,
                mass: Ke.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function cS(e=Ke.visualDuration, t=Ke.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: i, restDelta: o} = n;
    const l = n.keyframes[0]
      , u = n.keyframes[n.keyframes.length - 1]
      , d = {
        done: !1,
        value: l
    }
      , {stiffness: f, damping: p, mass: g, duration: y, velocity: v, isResolvedFromDuration: x} = LN({
        ...n,
        velocity: -Gn(n.velocity || 0)
    })
      , b = v || 0
      , C = p / (2 * Math.sqrt(f * g))
      , E = u - l
      , T = Gn(Math.sqrt(f / g))
      , M = Math.abs(E) < 5;
    i || (i = M ? Ke.restSpeed.granular : Ke.restSpeed.default),
    o || (o = M ? Ke.restDelta.granular : Ke.restDelta.default);
    let O;
    if (C < 1) {
        const z = Nf(T, C);
        O = G => {
            const J = Math.exp(-C * T * G);
            return u - J * ((b + C * T * E) / z * Math.sin(z * G) + E * Math.cos(z * G))
        }
    } else if (C === 1)
        O = z => u - Math.exp(-T * z) * (E + (b + T * E) * z);
    else {
        const z = T * Math.sqrt(C * C - 1);
        O = G => {
            const J = Math.exp(-C * T * G)
              , _ = Math.min(z * G, 300);
            return u - J * ((b + C * T * E) * Math.sinh(_) + z * E * Math.cosh(_)) / z
        }
    }
    const I = {
        calculatedDuration: x && y || null,
        next: z => {
            const G = O(z);
            if (x)
                d.done = z >= y;
            else {
                let J = 0;
                C < 1 && (J = z === 0 ? Qn(b) : uS(O, z, G));
                const _ = Math.abs(J) <= i
                  , D = Math.abs(u - G) <= o;
                d.done = _ && D
            }
            return d.value = d.done ? u : G,
            d
        }
        ,
        toString: () => {
            const z = Math.min(_x(I), Ef)
              , G = Ax(J => I.next(z * J).value, z, 30);
            return z + "ms " + G
        }
    };
    return I
}
function pv({keyframes: e, velocity: t=0, power: n=.8, timeConstant: i=325, bounceDamping: o=10, bounceStiffness: l=500, modifyTarget: u, min: d, max: f, restDelta: p=.5, restSpeed: g}) {
    const y = e[0]
      , v = {
        done: !1,
        value: y
    }
      , x = _ => d !== void 0 && _ < d || f !== void 0 && _ > f
      , b = _ => d === void 0 ? f : f === void 0 || Math.abs(d - _) < Math.abs(f - _) ? d : f;
    let C = n * t;
    const E = y + C
      , T = u === void 0 ? E : u(E);
    T !== E && (C = T - y);
    const M = _ => -C * Math.exp(-_ / i)
      , O = _ => T + M(_)
      , I = _ => {
        const D = M(_)
          , $ = O(_);
        v.done = Math.abs(D) <= p,
        v.value = v.done ? T : $
    }
    ;
    let z, G;
    const J = _ => {
        x(v.value) && (z = _,
        G = cS({
            keyframes: [v.value, b(v.value)],
            velocity: uS(O, _, v.value),
            damping: o,
            stiffness: l,
            restDelta: p,
            restSpeed: g
        }))
    }
    ;
    return J(0),
    {
        calculatedDuration: null,
        next: _ => {
            let D = !1;
            return !G && z === void 0 && (D = !0,
            I(_),
            J(_)),
            z !== void 0 && _ >= z ? G.next(_ - z) : (!D && I(_),
            v)
        }
    }
}
const MN = Zo(.42, 0, 1, 1)
  , DN = Zo(0, 0, .58, 1)
  , dS = Zo(.42, 0, .58, 1)
  , jN = e => Array.isArray(e) && typeof e[0] != "number"
  , IN = {
    linear: zt,
    easeIn: MN,
    easeInOut: dS,
    easeOut: DN,
    circIn: Dh,
    circInOut: Wx,
    circOut: Hx,
    backIn: Mh,
    backInOut: zx,
    backOut: Ux,
    anticipate: $x
}
  , mv = e => {
    if (_h(e)) {
        lx(e.length === 4);
        const [t,n,i,o] = e;
        return Zo(t, n, i, o)
    } else if (typeof e == "string")
        return IN[e];
    return e
}
;
function FN(e, t, n) {
    const i = []
      , o = n || lS
      , l = e.length - 1;
    for (let u = 0; u < l; u++) {
        let d = o(e[u], e[u + 1]);
        if (t) {
            const f = Array.isArray(t) ? t[u] || zt : t;
            d = ea(f, d)
        }
        i.push(d)
    }
    return i
}
function VN(e, t, {clamp: n=!0, ease: i, mixer: o}={}) {
    const l = e.length;
    if (lx(l === t.length),
    l === 1)
        return () => t[0];
    if (l === 2 && e[0] === e[1])
        return () => t[1];
    e[0] > e[l - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const u = FN(t, i, o)
      , d = u.length
      , f = p => {
        let g = 0;
        if (d > 1)
            for (; g < e.length - 2 && !(p < e[g + 1]); g++)
                ;
        const y = mi(e[g], e[g + 1], p);
        return u[g](y)
    }
    ;
    return n ? p => f(Jn(e[0], e[l - 1], p)) : f
}
function BN(e, t) {
    const n = e[e.length - 1];
    for (let i = 1; i <= t; i++) {
        const o = mi(0, t, i);
        e.push($e(n, 1, o))
    }
}
function UN(e) {
    const t = [0];
    return BN(t, e.length - 1),
    t
}
function zN(e, t) {
    return e.map(n => n * t)
}
function $N(e, t) {
    return e.map( () => t || dS).splice(0, e.length - 1)
}
function Yl({duration: e=300, keyframes: t, times: n, ease: i="easeInOut"}) {
    const o = jN(i) ? i.map(mv) : mv(i)
      , l = {
        done: !1,
        value: t[0]
    }
      , u = zN(n && n.length === t.length ? n : UN(t), e)
      , d = VN(u, t, {
        ease: Array.isArray(o) ? o : $N(t, o)
    });
    return {
        calculatedDuration: e,
        next: f => (l.value = d(f),
        l.done = f >= e,
        l)
    }
}
const HN = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => Ve.update(t, !0),
        stop: () => jr(t),
        now: () => ft.isProcessing ? ft.timestamp : Tn.now()
    }
}
  , WN = {
    decay: pv,
    inertia: pv,
    tween: Yl,
    keyframes: Yl,
    spring: cS
}
  , qN = e => e / 100;
class Uh extends oS {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: f} = this.options;
            f && f()
        }
        ;
        const {name: n, motionValue: i, element: o, keyframes: l} = this.options
          , u = (o == null ? void 0 : o.KeyframeResolver) || jh
          , d = (f, p) => this.onKeyframesResolved(f, p);
        this.resolver = new u(l,d,n,i,o),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: l, velocity: u=0} = this.options
          , d = Rh(n) ? n : WN[n] || Yl;
        let f, p;
        d !== Yl && typeof t[0] != "number" && (f = ea(qN, lS(t[0], t[1])),
        t = [0, 100]);
        const g = d({
            ...this.options,
            keyframes: t
        });
        l === "mirror" && (p = d({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -u
        })),
        g.calculatedDuration === null && (g.calculatedDuration = _x(g));
        const {calculatedDuration: y} = g
          , v = y + o
          , x = v * (i + 1) - o;
        return {
            generator: g,
            mirroredGenerator: p,
            mapPercentToKeyframes: f,
            calculatedDuration: y,
            resolvedDuration: v,
            totalDuration: x
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: i} = this;
        if (!i) {
            const {keyframes: _} = this.options;
            return {
                done: !0,
                value: _[_.length - 1]
            }
        }
        const {finalKeyframe: o, generator: l, mirroredGenerator: u, mapPercentToKeyframes: d, keyframes: f, calculatedDuration: p, totalDuration: g, resolvedDuration: y} = i;
        if (this.startTime === null)
            return l.next(0);
        const {delay: v, repeat: x, repeatType: b, repeatDelay: C, onUpdate: E} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - g / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const T = this.currentTime - v * (this.speed >= 0 ? 1 : -1)
          , M = this.speed >= 0 ? T < 0 : T > g;
        this.currentTime = Math.max(T, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let O = this.currentTime
          , I = l;
        if (x) {
            const _ = Math.min(this.currentTime, g) / y;
            let D = Math.floor(_)
              , $ = _ % 1;
            !$ && _ >= 1 && ($ = 1),
            $ === 1 && D--,
            D = Math.min(D, x + 1),
            !!(D % 2) && (b === "reverse" ? ($ = 1 - $,
            C && ($ -= C / y)) : b === "mirror" && (I = u)),
            O = Jn(0, 1, $) * y
        }
        const z = M ? {
            done: !1,
            value: f[0]
        } : I.next(O);
        d && (z.value = d(z.value));
        let {done: G} = z;
        !M && p !== null && (G = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const J = this.holdTime === null && (this.state === "finished" || this.state === "running" && G);
        return J && o !== void 0 && (z.value = gu(f, this.options, o)),
        E && E(z.value),
        J && this.finish(),
        z
    }
    get duration() {
        const {resolved: t} = this;
        return t ? Gn(t.calculatedDuration) : 0
    }
    get time() {
        return Gn(this.currentTime)
    }
    set time(t) {
        t = Qn(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = Gn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=HN, onPlay: n, startTime: i} = this.options;
        this.driver || (this.driver = t(l => this.tick(l))),
        n && n();
        const o = this.driver.now();
        this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = i ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const KN = new Set(["opacity", "clipPath", "filter", "transform"]);
function QN(e, t, n, {delay: i=0, duration: o=300, repeat: l=0, repeatType: u="loop", ease: d="easeInOut", times: f}={}) {
    const p = {
        [t]: n
    };
    f && (p.offset = f);
    const g = Ox(d, o);
    return Array.isArray(g) && (p.easing = g),
    e.animate(p, {
        delay: i,
        duration: o,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: l + 1,
        direction: u === "reverse" ? "alternate" : "normal"
    })
}
const GN = dh( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Jl = 10
  , XN = 2e4;
function YN(e) {
    return Rh(e.type) || e.type === "spring" || !Nx(e.ease)
}
function JN(e, t) {
    const n = new Uh({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: e[0]
    };
    const o = [];
    let l = 0;
    for (; !i.done && l < XN; )
        i = n.sample(l),
        o.push(i.value),
        l += Jl;
    return {
        times: void 0,
        keyframes: o,
        duration: l - Jl,
        ease: "linear"
    }
}
const fS = {
    anticipate: $x,
    backInOut: zx,
    circInOut: Wx
};
function ZN(e) {
    return e in fS
}
class gv extends oS {
    constructor(t) {
        super(t);
        const {name: n, motionValue: i, element: o, keyframes: l} = this.options;
        this.resolver = new iS(l, (u, d) => this.onKeyframesResolved(u, d),n,i,o),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var i;
        let {duration: o=300, times: l, ease: u, type: d, motionValue: f, name: p, startTime: g} = this.options;
        if (!(!((i = f.owner) === null || i === void 0) && i.current))
            return !1;
        if (typeof u == "string" && Gl() && ZN(u) && (u = fS[u]),
        YN(this.options)) {
            const {onComplete: v, onUpdate: x, motionValue: b, element: C, ...E} = this.options
              , T = JN(t, E);
            t = T.keyframes,
            t.length === 1 && (t[1] = t[0]),
            o = T.duration,
            l = T.times,
            u = T.ease,
            d = "keyframes"
        }
        const y = QN(f.owner.current, p, t, {
            ...this.options,
            duration: o,
            times: l,
            ease: u
        });
        return y.startTime = g ?? this.calcStartTime(),
        this.pendingTimeline ? (ev(y, this.pendingTimeline),
        this.pendingTimeline = void 0) : y.onfinish = () => {
            const {onComplete: v} = this.options;
            f.set(gu(t, this.options, n)),
            v && v(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: y,
            duration: o,
            times: l,
            type: d,
            ease: u,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return Gn(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return Gn(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: i} = n;
        i.currentTime = Qn(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: i} = n;
        i.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: n} = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return zt;
            const {animation: i} = n;
            ev(i, t)
        }
        return zt
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: i, duration: o, type: l, ease: u, times: d} = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: p, onUpdate: g, onComplete: y, element: v, ...x} = this.options
              , b = new Uh({
                ...x,
                keyframes: i,
                duration: o,
                type: l,
                ease: u,
                times: d,
                isGenerator: !0
            })
              , C = Qn(this.time);
            p.setWithVelocity(b.sample(C - Jl).value, b.sample(C).value, Jl)
        }
        const {onStop: f} = this.options;
        f && f(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: i, repeatDelay: o, repeatType: l, damping: u, type: d} = t;
        return GN() && i && KN.has(i) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !o && l !== "mirror" && u !== 0 && d !== "inertia"
    }
}
const eO = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , tO = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , nO = {
    type: "keyframes",
    duration: .8
}
  , rO = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , sO = (e, {keyframes: t}) => t.length > 2 ? nO : bs.has(e) ? e.startsWith("scale") ? tO(t[1]) : eO : rO;
function iO({when: e, delay: t, delayChildren: n, staggerChildren: i, staggerDirection: o, repeat: l, repeatType: u, repeatDelay: d, from: f, elapsed: p, ...g}) {
    return !!Object.keys(g).length
}
const zh = (e, t, n, i={}, o, l) => u => {
    const d = Ph(i, e) || {}
      , f = d.delay || i.delay || 0;
    let {elapsed: p=0} = i;
    p = p - Qn(f);
    let g = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...d,
        delay: -p,
        onUpdate: v => {
            t.set(v),
            d.onUpdate && d.onUpdate(v)
        }
        ,
        onComplete: () => {
            u(),
            d.onComplete && d.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: l ? void 0 : o
    };
    iO(d) || (g = {
        ...g,
        ...sO(e, g)
    }),
    g.duration && (g.duration = Qn(g.duration)),
    g.repeatDelay && (g.repeatDelay = Qn(g.repeatDelay)),
    g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0,
    g.delay === 0 && (y = !0)),
    y && !l && t.get() !== void 0) {
        const v = gu(g.keyframes, d);
        if (v !== void 0)
            return Ve.update( () => {
                g.onUpdate(v),
                g.onComplete()
            }
            ),
            new EA([])
    }
    return !l && gv.supports(g) ? new gv(g) : new Uh(g)
}
;
function oO({protectedKeys: e, needsAnimating: t}, n) {
    const i = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    i
}
function hS(e, t, {delay: n=0, transitionOverride: i, type: o}={}) {
    var l;
    let {transition: u=e.getDefaultTransition(), transitionEnd: d, ...f} = t;
    i && (u = i);
    const p = []
      , g = o && e.animationState && e.animationState.getState()[o];
    for (const y in f) {
        const v = e.getValue(y, (l = e.latestValues[y]) !== null && l !== void 0 ? l : null)
          , x = f[y];
        if (x === void 0 || g && oO(g, y))
            continue;
        const b = {
            delay: n,
            ...Ph(u || {}, y)
        };
        let C = !1;
        if (window.MotionHandoffAnimation) {
            const T = Ix(e);
            if (T) {
                const M = window.MotionHandoffAnimation(T, y, Ve);
                M !== null && (b.startTime = M,
                C = !0)
            }
        }
        kf(e, y),
        v.start(zh(y, v, x, e.shouldReduceMotion && bs.has(y) ? {
            type: !1
        } : b, e, C));
        const E = v.animation;
        E && p.push(E)
    }
    return d && Promise.all(p).then( () => {
        Ve.update( () => {
            d && IA(e, d)
        }
        )
    }
    ),
    p
}
function Of(e, t, n={}) {
    var i;
    const o = mu(e, t, n.type === "exit" ? (i = e.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {transition: l=e.getDefaultTransition() || {}} = o || {};
    n.transitionOverride && (l = n.transitionOverride);
    const u = o ? () => Promise.all(hS(e, o, n)) : () => Promise.resolve()
      , d = e.variantChildren && e.variantChildren.size ? (p=0) => {
        const {delayChildren: g=0, staggerChildren: y, staggerDirection: v} = l;
        return aO(e, t, g + p, y, v, n)
    }
    : () => Promise.resolve()
      , {when: f} = l;
    if (f) {
        const [p,g] = f === "beforeChildren" ? [u, d] : [d, u];
        return p().then( () => g())
    } else
        return Promise.all([u(), d(n.delay)])
}
function aO(e, t, n=0, i=0, o=1, l) {
    const u = []
      , d = (e.variantChildren.size - 1) * i
      , f = o === 1 ? (p=0) => p * i : (p=0) => d - p * i;
    return Array.from(e.variantChildren).sort(lO).forEach( (p, g) => {
        p.notify("AnimationStart", t),
        u.push(Of(p, t, {
            ...l,
            delay: n + f(g)
        }).then( () => p.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(u)
}
function lO(e, t) {
    return e.sortNodePosition(t)
}
function uO(e, t, n={}) {
    e.notify("AnimationStart", t);
    let i;
    if (Array.isArray(t)) {
        const o = t.map(l => Of(e, l, n));
        i = Promise.all(o)
    } else if (typeof t == "string")
        i = Of(e, t, n);
    else {
        const o = typeof t == "function" ? mu(e, t, n.custom) : t;
        i = Promise.all(hS(e, o, n))
    }
    return i.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const cO = mh.length;
function pS(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? pS(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < cO; n++) {
        const i = mh[n]
          , o = e.props[i];
        (Mo(o) || o === !1) && (t[i] = o)
    }
    return t
}
const dO = [...ph].reverse()
  , fO = ph.length;
function hO(e) {
    return t => Promise.all(t.map( ({animation: n, options: i}) => uO(e, n, i)))
}
function pO(e) {
    let t = hO(e)
      , n = yv()
      , i = !0;
    const o = f => (p, g) => {
        var y;
        const v = mu(e, g, f === "exit" ? (y = e.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (v) {
            const {transition: x, transitionEnd: b, ...C} = v;
            p = {
                ...p,
                ...C,
                ...b
            }
        }
        return p
    }
    ;
    function l(f) {
        t = f(e)
    }
    function u(f) {
        const {props: p} = e
          , g = pS(e.parent) || {}
          , y = []
          , v = new Set;
        let x = {}
          , b = 1 / 0;
        for (let E = 0; E < fO; E++) {
            const T = dO[E]
              , M = n[T]
              , O = p[T] !== void 0 ? p[T] : g[T]
              , I = Mo(O)
              , z = T === f ? M.isActive : null;
            z === !1 && (b = E);
            let G = O === g[T] && O !== p[T] && I;
            if (G && i && e.manuallyAnimateOnMount && (G = !1),
            M.protectedKeys = {
                ...x
            },
            !M.isActive && z === null || !O && !M.prevProp || hu(O) || typeof O == "boolean")
                continue;
            const J = mO(M.prevProp, O);
            let _ = J || T === f && M.isActive && !G && I || E > b && I
              , D = !1;
            const $ = Array.isArray(O) ? O : [O];
            let Y = $.reduce(o(T), {});
            z === !1 && (Y = {});
            const {prevResolvedValues: H={}} = M
              , ne = {
                ...H,
                ...Y
            }
              , we = de => {
                _ = !0,
                v.has(de) && (D = !0,
                v.delete(de)),
                M.needsAnimating[de] = !0;
                const B = e.getValue(de);
                B && (B.liveStyle = !1)
            }
            ;
            for (const de in ne) {
                const B = Y[de]
                  , ae = H[de];
                if (x.hasOwnProperty(de))
                    continue;
                let Z = !1;
                bf(B) && bf(ae) ? Z = !Rx(B, ae) : Z = B !== ae,
                Z ? B != null ? we(de) : v.add(de) : B !== void 0 && v.has(de) ? we(de) : M.protectedKeys[de] = !0
            }
            M.prevProp = O,
            M.prevResolvedValues = Y,
            M.isActive && (x = {
                ...x,
                ...Y
            }),
            i && e.blockInitialAnimation && (_ = !1),
            _ && (!(G && J) || D) && y.push(...$.map(de => ({
                animation: de,
                options: {
                    type: T
                }
            })))
        }
        if (v.size) {
            const E = {};
            v.forEach(T => {
                const M = e.getBaseTarget(T)
                  , O = e.getValue(T);
                O && (O.liveStyle = !0),
                E[T] = M ?? null
            }
            ),
            y.push({
                animation: E
            })
        }
        let C = !!y.length;
        return i && (p.initial === !1 || p.initial === p.animate) && !e.manuallyAnimateOnMount && (C = !1),
        i = !1,
        C ? t(y) : Promise.resolve()
    }
    function d(f, p) {
        var g;
        if (n[f].isActive === p)
            return Promise.resolve();
        (g = e.variantChildren) === null || g === void 0 || g.forEach(v => {
            var x;
            return (x = v.animationState) === null || x === void 0 ? void 0 : x.setActive(f, p)
        }
        ),
        n[f].isActive = p;
        const y = u(f);
        for (const v in n)
            n[v].protectedKeys = {};
        return y
    }
    return {
        animateChanges: u,
        setActive: d,
        setAnimateFunction: l,
        getState: () => n,
        reset: () => {
            n = yv(),
            i = !0
        }
    }
}
function mO(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Rx(t, e) : !1
}
function es(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function yv() {
    return {
        animate: es(!0),
        whileInView: es(),
        whileHover: es(),
        whileTap: es(),
        whileDrag: es(),
        whileFocus: es(),
        exit: es()
    }
}
class Fr {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class gO extends Fr {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = pO(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        hu(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let yO = 0;
class vO extends Fr {
    constructor() {
        super(...arguments),
        this.id = yO++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i)
            return;
        const o = this.node.animationState.setActive("exit", !t);
        n && !t && o.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const wO = {
    animation: {
        Feature: gO
    },
    exit: {
        Feature: vO
    }
};
function Fo(e, t, n, i={
    passive: !0
}) {
    return e.addEventListener(t, n, i),
    () => e.removeEventListener(t, n)
}
function ta(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const xO = e => t => Ah(t) && e(t, ta(t));
function _o(e, t, n, i) {
    return Fo(e, t, xO(n), i)
}
const vv = (e, t) => Math.abs(e - t);
function SO(e, t) {
    const n = vv(e.x, t.x)
      , i = vv(e.y, t.y);
    return Math.sqrt(n ** 2 + i ** 2)
}
class mS {
    constructor(t, n, {transformPagePoint: i, contextWindow: o, dragSnapToOrigin: l=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = Vd(this.lastMoveEventInfo, this.history)
              , v = this.startEvent !== null
              , x = SO(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!v && !x)
                return;
            const {point: b} = y
              , {timestamp: C} = ft;
            this.history.push({
                ...b,
                timestamp: C
            });
            const {onStart: E, onMove: T} = this.handlers;
            v || (E && E(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            T && T(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y, v) => {
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = Fd(v, this.transformPagePoint),
            Ve.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y, v) => {
            this.end();
            const {onEnd: x, onSessionEnd: b, resumeAnimation: C} = this.handlers;
            if (this.dragSnapToOrigin && C && C(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const E = Vd(y.type === "pointercancel" ? this.lastMoveEventInfo : Fd(v, this.transformPagePoint), this.history);
            this.startEvent && x && x(y, E),
            b && b(y, E)
        }
        ,
        !Ah(t))
            return;
        this.dragSnapToOrigin = l,
        this.handlers = n,
        this.transformPagePoint = i,
        this.contextWindow = o || window;
        const u = ta(t)
          , d = Fd(u, this.transformPagePoint)
          , {point: f} = d
          , {timestamp: p} = ft;
        this.history = [{
            ...f,
            timestamp: p
        }];
        const {onSessionStart: g} = n;
        g && g(t, Vd(d, this.history)),
        this.removeListeners = ea(_o(this.contextWindow, "pointermove", this.handlePointerMove), _o(this.contextWindow, "pointerup", this.handlePointerUp), _o(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        jr(this.updatePoint)
    }
}
function Fd(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function wv(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Vd({point: e}, t) {
    return {
        point: e,
        delta: wv(e, gS(t)),
        offset: wv(e, bO(t)),
        velocity: EO(t, .1)
    }
}
function bO(e) {
    return e[0]
}
function gS(e) {
    return e[e.length - 1]
}
function EO(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , i = null;
    const o = gS(e);
    for (; n >= 0 && (i = e[n],
    !(o.timestamp - i.timestamp > Qn(t))); )
        n--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const l = Gn(o.timestamp - i.timestamp);
    if (l === 0)
        return {
            x: 0,
            y: 0
        };
    const u = {
        x: (o.x - i.x) / l,
        y: (o.y - i.y) / l
    };
    return u.x === 1 / 0 && (u.x = 0),
    u.y === 1 / 0 && (u.y = 0),
    u
}
const yS = 1e-4
  , CO = 1 - yS
  , kO = 1 + yS
  , vS = .01
  , TO = 0 - vS
  , PO = 0 + vS;
function $t(e) {
    return e.max - e.min
}
function RO(e, t, n) {
    return Math.abs(e - t) <= n
}
function xv(e, t, n, i=.5) {
    e.origin = i,
    e.originPoint = $e(t.min, t.max, e.origin),
    e.scale = $t(n) / $t(t),
    e.translate = $e(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= CO && e.scale <= kO || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= TO && e.translate <= PO || isNaN(e.translate)) && (e.translate = 0)
}
function Ao(e, t, n, i) {
    xv(e.x, t.x, n.x, i ? i.originX : void 0),
    xv(e.y, t.y, n.y, i ? i.originY : void 0)
}
function Sv(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + $t(t)
}
function _O(e, t, n) {
    Sv(e.x, t.x, n.x),
    Sv(e.y, t.y, n.y)
}
function bv(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + $t(t)
}
function No(e, t, n) {
    bv(e.x, t.x, n.x),
    bv(e.y, t.y, n.y)
}
function AO(e, {min: t, max: n}, i) {
    return t !== void 0 && e < t ? e = i ? $e(t, e, i.min) : Math.max(e, t) : n !== void 0 && e > n && (e = i ? $e(n, e, i.max) : Math.min(e, n)),
    e
}
function Ev(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function NO(e, {top: t, left: n, bottom: i, right: o}) {
    return {
        x: Ev(e.x, n, o),
        y: Ev(e.y, t, i)
    }
}
function Cv(e, t) {
    let n = t.min - e.min
      , i = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,i] = [i, n]),
    {
        min: n,
        max: i
    }
}
function OO(e, t) {
    return {
        x: Cv(e.x, t.x),
        y: Cv(e.y, t.y)
    }
}
function LO(e, t) {
    let n = .5;
    const i = $t(e)
      , o = $t(t);
    return o > i ? n = mi(t.min, t.max - i, e.min) : i > o && (n = mi(e.min, e.max - o, t.min)),
    Jn(0, 1, n)
}
function MO(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Lf = .35;
function DO(e=Lf) {
    return e === !1 ? e = 0 : e === !0 && (e = Lf),
    {
        x: kv(e, "left", "right"),
        y: kv(e, "top", "bottom")
    }
}
function kv(e, t, n) {
    return {
        min: Tv(e, t),
        max: Tv(e, n)
    }
}
function Tv(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Pv = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Zs = () => ({
    x: Pv(),
    y: Pv()
})
  , Rv = () => ({
    min: 0,
    max: 0
})
  , Xe = () => ({
    x: Rv(),
    y: Rv()
});
function Yt(e) {
    return [e("x"), e("y")]
}
function wS({top: e, left: t, right: n, bottom: i}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: i
        }
    }
}
function jO({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function IO(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , i = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: i.y,
        right: i.x
    }
}
function Bd(e) {
    return e === void 0 || e === 1
}
function Mf({scale: e, scaleX: t, scaleY: n}) {
    return !Bd(e) || !Bd(t) || !Bd(n)
}
function ts(e) {
    return Mf(e) || xS(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function xS(e) {
    return _v(e.x) || _v(e.y)
}
function _v(e) {
    return e && e !== "0%"
}
function Zl(e, t, n) {
    const i = e - n
      , o = t * i;
    return n + o
}
function Av(e, t, n, i, o) {
    return o !== void 0 && (e = Zl(e, o, i)),
    Zl(e, n, i) + t
}
function Df(e, t=0, n=1, i, o) {
    e.min = Av(e.min, t, n, i, o),
    e.max = Av(e.max, t, n, i, o)
}
function SS(e, {x: t, y: n}) {
    Df(e.x, t.translate, t.scale, t.originPoint),
    Df(e.y, n.translate, n.scale, n.originPoint)
}
const Nv = .999999999999
  , Ov = 1.0000000000001;
function FO(e, t, n, i=!1) {
    const o = n.length;
    if (!o)
        return;
    t.x = t.y = 1;
    let l, u;
    for (let d = 0; d < o; d++) {
        l = n[d],
        u = l.projectionDelta;
        const {visualElement: f} = l.options;
        f && f.props.style && f.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && ti(e, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }),
        u && (t.x *= u.x.scale,
        t.y *= u.y.scale,
        SS(e, u)),
        i && ts(l.latestValues) && ti(e, l.latestValues))
    }
    t.x < Ov && t.x > Nv && (t.x = 1),
    t.y < Ov && t.y > Nv && (t.y = 1)
}
function ei(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Lv(e, t, n, i, o=.5) {
    const l = $e(e.min, e.max, o);
    Df(e, t, n, l, i)
}
function ti(e, t) {
    Lv(e.x, t.x, t.scaleX, t.scale, t.originX),
    Lv(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function bS(e, t) {
    return wS(IO(e.getBoundingClientRect(), t))
}
function VO(e, t, n) {
    const i = bS(e, n)
      , {scroll: o} = t;
    return o && (ei(i.x, o.offset.x),
    ei(i.y, o.offset.y)),
    i
}
const ES = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , BO = new WeakMap;
class UO {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Xe(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const o = g => {
            const {dragSnapToOrigin: y} = this.getProps();
            y ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(ta(g).point)
        }
          , l = (g, y) => {
            const {drag: v, dragPropagation: x, onDragStart: b} = this.getProps();
            if (v && !x && (this.openDragLock && this.openDragLock(),
            this.openDragLock = OA(v),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Yt(E => {
                let T = this.getAxisMotionValue(E).get() || 0;
                if (kn.test(T)) {
                    const {projection: M} = this.visualElement;
                    if (M && M.layout) {
                        const O = M.layout.layoutBox[E];
                        O && (T = $t(O) * (parseFloat(T) / 100))
                    }
                }
                this.originPoint[E] = T
            }
            ),
            b && Ve.postRender( () => b(g, y)),
            kf(this.visualElement, "transform");
            const {animationState: C} = this.visualElement;
            C && C.setActive("whileDrag", !0)
        }
          , u = (g, y) => {
            const {dragPropagation: v, dragDirectionLock: x, onDirectionLock: b, onDrag: C} = this.getProps();
            if (!v && !this.openDragLock)
                return;
            const {offset: E} = y;
            if (x && this.currentDirection === null) {
                this.currentDirection = zO(E),
                this.currentDirection !== null && b && b(this.currentDirection);
                return
            }
            this.updateAxis("x", y.point, E),
            this.updateAxis("y", y.point, E),
            this.visualElement.render(),
            C && C(g, y)
        }
          , d = (g, y) => this.stop(g, y)
          , f = () => Yt(g => {
            var y;
            return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
        }
        )
          , {dragSnapToOrigin: p} = this.getProps();
        this.panSession = new mS(t,{
            onSessionStart: o,
            onStart: l,
            onMove: u,
            onSessionEnd: d,
            resumeAnimation: f
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: p,
            contextWindow: ES(this.visualElement)
        })
    }
    stop(t, n) {
        const i = this.isDragging;
        if (this.cancel(),
        !i)
            return;
        const {velocity: o} = n;
        this.startAnimation(o);
        const {onDragEnd: l} = this.getProps();
        l && Ve.postRender( () => l(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: i} = this.getProps();
        !i && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, i) {
        const {drag: o} = this.getProps();
        if (!i || !kl(t, o, this.currentDirection))
            return;
        const l = this.getAxisMotionValue(t);
        let u = this.originPoint[t] + i[t];
        this.constraints && this.constraints[t] && (u = AO(u, this.constraints[t], this.elastic[t])),
        l.set(u)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: i} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , l = this.constraints;
        n && Ys(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = NO(o.layoutBox, n) : this.constraints = !1,
        this.elastic = DO(i),
        l !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Yt(u => {
            this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = MO(o.layoutBox[u], this.constraints[u]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Ys(t))
            return !1;
        const i = t.current
          , {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const l = VO(i, o.root, this.visualElement.getTransformPagePoint());
        let u = OO(o.layout.layoutBox, l);
        if (n) {
            const d = n(jO(u));
            this.hasMutatedConstraints = !!d,
            d && (u = wS(d))
        }
        return u
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: i, dragElastic: o, dragTransition: l, dragSnapToOrigin: u, onDragTransitionEnd: d} = this.getProps()
          , f = this.constraints || {}
          , p = Yt(g => {
            if (!kl(g, n, this.currentDirection))
                return;
            let y = f && f[g] || {};
            u && (y = {
                min: 0,
                max: 0
            });
            const v = o ? 200 : 1e6
              , x = o ? 40 : 1e7
              , b = {
                type: "inertia",
                velocity: i ? t[g] : 0,
                bounceStiffness: v,
                bounceDamping: x,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...l,
                ...y
            };
            return this.startAxisValueAnimation(g, b)
        }
        );
        return Promise.all(p).then(d)
    }
    startAxisValueAnimation(t, n) {
        const i = this.getAxisMotionValue(t);
        return kf(this.visualElement, t),
        i.start(zh(t, i, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Yt(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Yt(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , i = this.visualElement.getProps()
          , o = i[n];
        return o || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Yt(n => {
            const {drag: i} = this.getProps();
            if (!kl(n, i, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , l = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {min: u, max: d} = o.layout.layoutBox[n];
                l.set(t[n] - $e(u, d, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!Ys(n) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        Yt(u => {
            const d = this.getAxisMotionValue(u);
            if (d && this.constraints !== !1) {
                const f = d.get();
                o[u] = LO({
                    min: f,
                    max: f
                }, this.constraints[u])
            }
        }
        );
        const {transformTemplate: l} = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none",
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        Yt(u => {
            if (!kl(u, t, null))
                return;
            const d = this.getAxisMotionValue(u)
              , {min: f, max: p} = this.constraints[u];
            d.set($e(f, p, o[u]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        BO.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = _o(t, "pointerdown", f => {
            const {drag: p, dragListener: g=!0} = this.getProps();
            p && g && this.start(f)
        }
        )
          , i = () => {
            const {dragConstraints: f} = this.getProps();
            Ys(f) && f.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: o} = this.visualElement
          , l = o.addEventListener("measure", i);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        Ve.read(i);
        const u = Fo(window, "resize", () => this.scalePositionWithinConstraints())
          , d = o.addEventListener("didUpdate", ( ({delta: f, hasLayoutChanged: p}) => {
            this.isDragging && p && (Yt(g => {
                const y = this.getAxisMotionValue(g);
                y && (this.originPoint[g] += f[g].translate,
                y.set(y.get() + f[g].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            u(),
            n(),
            l(),
            d && d()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: i=!1, dragPropagation: o=!1, dragConstraints: l=!1, dragElastic: u=Lf, dragMomentum: d=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: i,
            dragPropagation: o,
            dragConstraints: l,
            dragElastic: u,
            dragMomentum: d
        }
    }
}
function kl(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function zO(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class $O extends Fr {
    constructor(t) {
        super(t),
        this.removeGroupControls = zt,
        this.removeListeners = zt,
        this.controls = new UO(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || zt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Mv = e => (t, n) => {
    e && Ve.postRender( () => e(t, n))
}
;
class HO extends Fr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = zt
    }
    onPointerDown(t) {
        this.session = new mS(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ES(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: i, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: Mv(t),
            onStart: Mv(n),
            onMove: i,
            onEnd: (l, u) => {
                delete this.session,
                o && Ve.postRender( () => o(l, u))
            }
        }
    }
    mount() {
        this.removePointerDownListener = _o(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function WO() {
    const e = S.useContext(du);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: i} = e
      , o = S.useId();
    S.useEffect( () => i(o), []);
    const l = S.useCallback( () => n && n(o), [o, n]);
    return !t && n ? [!1, l] : [!0]
}
const zl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Dv(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const xo = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (ve.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Dv(e, t.target.x)
          , i = Dv(e, t.target.y);
        return `${n}% ${i}%`
    }
}
  , qO = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const i = e
          , o = Ir.parse(e);
        if (o.length > 5)
            return i;
        const l = Ir.createTransformer(e)
          , u = typeof o[0] != "number" ? 1 : 0
          , d = n.x.scale * t.x
          , f = n.y.scale * t.y;
        o[0 + u] /= d,
        o[1 + u] /= f;
        const p = $e(d, f, .5);
        return typeof o[2 + u] == "number" && (o[2 + u] /= p),
        typeof o[3 + u] == "number" && (o[3 + u] /= p),
        l(o)
    }
};
class KO extends S.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: i, layoutId: o} = this.props
          , {projection: l} = t;
        G_(QO),
        l && (n.group && n.group.add(l),
        i && i.register && o && i.register(l),
        l.root.didUpdate(),
        l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        l.setOptions({
            ...l.options,
            onExitComplete: () => this.safeToRemove()
        })),
        zl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: i, drag: o, isPresent: l} = this.props
          , u = i.projection;
        return u && (u.isPresent = l,
        o || t.layoutDependency !== n || n === void 0 ? u.willUpdate() : this.safeToRemove(),
        t.isPresent !== l && (l ? u.promote() : u.relegate() || Ve.postRender( () => {
            const d = u.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        yh.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: i} = this.props
          , {projection: o} = t;
        o && (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        i && i.deregister && i.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function CS(e) {
    const [t,n] = WO()
      , i = S.useContext(ch);
    return R.jsx(KO, {
        ...e,
        layoutGroup: i,
        switchLayoutGroup: S.useContext(mx),
        isPresent: t,
        safeToRemove: n
    })
}
const QO = {
    borderRadius: {
        ...xo,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: xo,
    borderTopRightRadius: xo,
    borderBottomLeftRadius: xo,
    borderBottomRightRadius: xo,
    boxShadow: qO
};
function GO(e, t, n) {
    const i = wt(e) ? e : jo(e);
    return i.start(zh("", i, t, n)),
    i.animation
}
function XO(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const YO = (e, t) => e.depth - t.depth;
class JO {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Nh(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Oh(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(YO),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function ZO(e, t) {
    const n = Tn.now()
      , i = ({timestamp: o}) => {
        const l = o - n;
        l >= t && (jr(i),
        e(l - t))
    }
    ;
    return Ve.read(i, !0),
    () => jr(i)
}
const kS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , eL = kS.length
  , jv = e => typeof e == "string" ? parseFloat(e) : e
  , Iv = e => typeof e == "number" || ve.test(e);
function tL(e, t, n, i, o, l) {
    o ? (e.opacity = $e(0, n.opacity !== void 0 ? n.opacity : 1, nL(i)),
    e.opacityExit = $e(t.opacity !== void 0 ? t.opacity : 1, 0, rL(i))) : l && (e.opacity = $e(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
    for (let u = 0; u < eL; u++) {
        const d = `border${kS[u]}Radius`;
        let f = Fv(t, d)
          , p = Fv(n, d);
        if (f === void 0 && p === void 0)
            continue;
        f || (f = 0),
        p || (p = 0),
        f === 0 || p === 0 || Iv(f) === Iv(p) ? (e[d] = Math.max($e(jv(f), jv(p), i), 0),
        (kn.test(p) || kn.test(f)) && (e[d] += "%")) : e[d] = p
    }
    (t.rotate || n.rotate) && (e.rotate = $e(t.rotate || 0, n.rotate || 0, i))
}
function Fv(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const nL = TS(0, .5, Hx)
  , rL = TS(.5, .95, zt);
function TS(e, t, n) {
    return i => i < e ? 0 : i > t ? 1 : n(mi(e, t, i))
}
function Vv(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Xt(e, t) {
    Vv(e.x, t.x),
    Vv(e.y, t.y)
}
function Bv(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function Uv(e, t, n, i, o) {
    return e -= t,
    e = Zl(e, 1 / n, i),
    o !== void 0 && (e = Zl(e, 1 / o, i)),
    e
}
function sL(e, t=0, n=1, i=.5, o, l=e, u=e) {
    if (kn.test(t) && (t = parseFloat(t),
    t = $e(u.min, u.max, t / 100) - u.min),
    typeof t != "number")
        return;
    let d = $e(l.min, l.max, i);
    e === l && (d -= t),
    e.min = Uv(e.min, t, n, d, o),
    e.max = Uv(e.max, t, n, d, o)
}
function zv(e, t, [n,i,o], l, u) {
    sL(e, t[n], t[i], t[o], t.scale, l, u)
}
const iL = ["x", "scaleX", "originX"]
  , oL = ["y", "scaleY", "originY"];
function $v(e, t, n, i) {
    zv(e.x, t, iL, n ? n.x : void 0, i ? i.x : void 0),
    zv(e.y, t, oL, n ? n.y : void 0, i ? i.y : void 0)
}
function Hv(e) {
    return e.translate === 0 && e.scale === 1
}
function PS(e) {
    return Hv(e.x) && Hv(e.y)
}
function Wv(e, t) {
    return e.min === t.min && e.max === t.max
}
function aL(e, t) {
    return Wv(e.x, t.x) && Wv(e.y, t.y)
}
function qv(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function RS(e, t) {
    return qv(e.x, t.x) && qv(e.y, t.y)
}
function Kv(e) {
    return $t(e.x) / $t(e.y)
}
function Qv(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class lL {
    constructor() {
        this.members = []
    }
    add(t) {
        Nh(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (Oh(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(o => t === o);
        if (n === 0)
            return !1;
        let i;
        for (let o = n; o >= 0; o--) {
            const l = this.members[o];
            if (l.isPresent !== !1) {
                i = l;
                break
            }
        }
        return i ? (this.promote(i),
        !0) : !1
    }
    promote(t, n) {
        const i = this.lead;
        if (t !== i && (this.prevLead = i,
        this.lead = t,
        t.show(),
        i)) {
            i.instance && i.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = i,
            n && (t.resumeFrom.preserveOpacity = !0),
            i.snapshot && (t.snapshot = i.snapshot,
            t.snapshot.latestValues = i.animationValues || i.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: o} = t.options;
            o === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: i} = t;
            n.onExitComplete && n.onExitComplete(),
            i && i.options.onExitComplete && i.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function uL(e, t, n) {
    let i = "";
    const o = e.x.translate / t.x
      , l = e.y.translate / t.y
      , u = (n == null ? void 0 : n.z) || 0;
    if ((o || l || u) && (i = `translate3d(${o}px, ${l}px, ${u}px) `),
    (t.x !== 1 || t.y !== 1) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: p, rotate: g, rotateX: y, rotateY: v, skewX: x, skewY: b} = n;
        p && (i = `perspective(${p}px) ${i}`),
        g && (i += `rotate(${g}deg) `),
        y && (i += `rotateX(${y}deg) `),
        v && (i += `rotateY(${v}deg) `),
        x && (i += `skewX(${x}deg) `),
        b && (i += `skewY(${b}deg) `)
    }
    const d = e.x.scale * t.x
      , f = e.y.scale * t.y;
    return (d !== 1 || f !== 1) && (i += `scale(${d}, ${f})`),
    i || "none"
}
const ns = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , To = typeof window < "u" && window.MotionDebug !== void 0
  , Ud = ["", "X", "Y", "Z"]
  , cL = {
    visibility: "hidden"
}
  , Gv = 1e3;
let dL = 0;
function zd(e, t, n, i) {
    const {latestValues: o} = t;
    o[e] && (n[e] = o[e],
    t.setStaticValue(e, 0),
    i && (i[e] = 0))
}
function _S(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = Ix(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: o, layoutId: l} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", Ve, !(o || l))
    }
    const {parent: i} = e;
    i && !i.hasCheckedOptimisedAppear && _S(i)
}
function AS({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: i, resetTransform: o}) {
    return class {
        constructor(u={}, d=t == null ? void 0 : t()) {
            this.id = dL++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                To && (ns.totalNodes = ns.resolvedTargetDeltas = ns.recalculatedProjection = 0),
                this.nodes.forEach(pL),
                this.nodes.forEach(wL),
                this.nodes.forEach(xL),
                this.nodes.forEach(mL),
                To && window.MotionDebug.record(ns)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = u,
            this.root = d ? d.root || d : this,
            this.path = d ? [...d.path, d] : [],
            this.parent = d,
            this.depth = d ? d.depth + 1 : 0;
            for (let f = 0; f < this.path.length; f++)
                this.path[f].shouldResetTransform = !0;
            this.root === this && (this.nodes = new JO)
        }
        addEventListener(u, d) {
            return this.eventHandlers.has(u) || this.eventHandlers.set(u, new Lh),
            this.eventHandlers.get(u).add(d)
        }
        notifyListeners(u, ...d) {
            const f = this.eventHandlers.get(u);
            f && f.notify(...d)
        }
        hasListeners(u) {
            return this.eventHandlers.has(u)
        }
        mount(u, d=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = XO(u),
            this.instance = u;
            const {layoutId: f, layout: p, visualElement: g} = this.options;
            if (g && !g.current && g.mount(u),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            d && (p || f) && (this.isLayoutDirty = !0),
            e) {
                let y;
                const v = () => this.root.updateBlockedByResize = !1;
                e(u, () => {
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = ZO(v, 250),
                    zl.hasAnimatedSinceResize && (zl.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Yv))
                }
                )
            }
            f && this.root.registerSharedNode(f, this),
            this.options.animate !== !1 && g && (f || p) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: v, hasRelativeTargetChanged: x, layout: b}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const C = this.options.transition || g.getDefaultTransition() || kL
                  , {onLayoutAnimationStart: E, onLayoutAnimationComplete: T} = g.getProps()
                  , M = !this.targetLayout || !RS(this.targetLayout, b) || x
                  , O = !v && x;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || O || v && (M || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(y, O);
                    const I = {
                        ...Ph(C, "layout"),
                        onPlay: E,
                        onComplete: T
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (I.delay = 0,
                    I.type = !1),
                    this.startAnimation(I)
                } else
                    v || Yv(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = b
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const u = this.getStack();
            u && u.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            jr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(SL),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: u} = this.options;
            return u && u.getProps().transformTemplate
        }
        willUpdate(u=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && _S(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: d, layout: f} = this.options;
            if (d === void 0 && !f)
                return;
            const p = this.getTransformTemplate();
            this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            u && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Xv);
                return
            }
            this.isUpdating || this.nodes.forEach(yL),
            this.isUpdating = !1,
            this.nodes.forEach(vL),
            this.nodes.forEach(fL),
            this.nodes.forEach(hL),
            this.clearAllSnapshots();
            const d = Tn.now();
            ft.delta = Jn(0, 1e3 / 60, d - ft.timestamp),
            ft.timestamp = d,
            ft.isProcessing = !0,
            Od.update.process(ft),
            Od.preRender.process(ft),
            Od.render.process(ft),
            ft.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            yh.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(gL),
            this.sharedNodes.forEach(bL)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ve.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ve.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let f = 0; f < this.path.length; f++)
                    this.path[f].updateScroll();
            const u = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Xe(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: d} = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0)
        }
        updateScroll(u="measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (d = !1),
            d) {
                const f = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: u,
                    isRoot: f,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : f
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , d = this.projectionDelta && !PS(this.projectionDelta)
              , f = this.getTransformTemplate()
              , p = f ? f(this.latestValues, "") : void 0
              , g = p !== this.prevTransformTemplateValue;
            u && (d || ts(this.latestValues) || g) && (o(this.instance, p),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(u=!0) {
            const d = this.measurePageBox();
            let f = this.removeElementScroll(d);
            return u && (f = this.removeTransform(f)),
            TL(f),
            {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: f,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: d} = this.options;
            if (!d)
                return Xe();
            const f = d.measureViewportBox();
            if (!(((u = this.scroll) === null || u === void 0 ? void 0 : u.wasRoot) || this.path.some(PL))) {
                const {scroll: g} = this.root;
                g && (ei(f.x, g.offset.x),
                ei(f.y, g.offset.y))
            }
            return f
        }
        removeElementScroll(u) {
            var d;
            const f = Xe();
            if (Xt(f, u),
            !((d = this.scroll) === null || d === void 0) && d.wasRoot)
                return f;
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p]
                  , {scroll: y, options: v} = g;
                g !== this.root && y && v.layoutScroll && (y.wasRoot && Xt(f, u),
                ei(f.x, y.offset.x),
                ei(f.y, y.offset.y))
            }
            return f
        }
        applyTransform(u, d=!1) {
            const f = Xe();
            Xt(f, u);
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p];
                !d && g.options.layoutScroll && g.scroll && g !== g.root && ti(f, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }),
                ts(g.latestValues) && ti(f, g.latestValues)
            }
            return ts(this.latestValues) && ti(f, this.latestValues),
            f
        }
        removeTransform(u) {
            const d = Xe();
            Xt(d, u);
            for (let f = 0; f < this.path.length; f++) {
                const p = this.path[f];
                if (!p.instance || !ts(p.latestValues))
                    continue;
                Mf(p.latestValues) && p.updateSnapshot();
                const g = Xe()
                  , y = p.measurePageBox();
                Xt(g, y),
                $v(d, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, g)
            }
            return ts(this.latestValues) && $v(d, this.latestValues),
            d
        }
        setTargetDelta(u) {
            this.targetDelta = u,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(u) {
            this.options = {
                ...this.options,
                ...u,
                crossfade: u.crossfade !== void 0 ? u.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ft.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(u=!1) {
            var d;
            const f = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = f.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = f.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = f.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== f;
            if (!(u || p && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: v} = this.options;
            if (!(!this.layout || !(y || v))) {
                if (this.resolvedRelativeTargetAt = ft.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const x = this.getClosestProjectingParent();
                    x && x.layout && this.animationProgress !== 1 ? (this.relativeParent = x,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Xe(),
                    this.relativeTargetOrigin = Xe(),
                    No(this.relativeTargetOrigin, this.layout.layoutBox, x.layout.layoutBox),
                    Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Xe(),
                    this.targetWithTransforms = Xe()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    _O(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Xt(this.target, this.layout.layoutBox),
                    SS(this.target, this.targetDelta)) : Xt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const x = this.getClosestProjectingParent();
                        x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? (this.relativeParent = x,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Xe(),
                        this.relativeTargetOrigin = Xe(),
                        No(this.relativeTargetOrigin, this.target, x.target),
                        Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    To && ns.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Mf(this.parent.latestValues) || xS(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var u;
            const d = this.getLead()
              , f = !!this.resumingFrom || this !== d;
            let p = !0;
            if ((this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty) && (p = !1),
            f && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === ft.timestamp && (p = !1),
            p)
                return;
            const {layout: g, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || y))
                return;
            Xt(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x
              , x = this.treeScale.y;
            FO(this.layoutCorrected, this.treeScale, this.path, f),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = Xe());
            const {target: b} = d;
            if (!b) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Bv(this.prevProjectionDelta.x, this.projectionDelta.x),
            Bv(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Ao(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
            (this.treeScale.x !== v || this.treeScale.y !== x || !Qv(this.projectionDelta.x, this.prevProjectionDelta.x) || !Qv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", b)),
            To && ns.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(u=!0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(),
            u) {
                const f = this.getStack();
                f && f.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Zs(),
            this.projectionDelta = Zs(),
            this.projectionDeltaWithTransform = Zs()
        }
        setAnimationOrigin(u, d=!1) {
            const f = this.snapshot
              , p = f ? f.latestValues : {}
              , g = {
                ...this.latestValues
            }
              , y = Zs();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !d;
            const v = Xe()
              , x = f ? f.source : void 0
              , b = this.layout ? this.layout.source : void 0
              , C = x !== b
              , E = this.getStack()
              , T = !E || E.members.length <= 1
              , M = !!(C && !T && this.options.crossfade === !0 && !this.path.some(CL));
            this.animationProgress = 0;
            let O;
            this.mixTargetDelta = I => {
                const z = I / 1e3;
                Jv(y.x, u.x, z),
                Jv(y.y, u.y, z),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (No(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                EL(this.relativeTarget, this.relativeTargetOrigin, v, z),
                O && aL(this.relativeTarget, O) && (this.isProjectionDirty = !1),
                O || (O = Xe()),
                Xt(O, this.relativeTarget)),
                C && (this.animationValues = g,
                tL(g, p, this.latestValues, z, M, T)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = z
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(u) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (jr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ve.update( () => {
                zl.hasAnimatedSinceResize = !0,
                this.currentAnimation = GO(0, Gv, {
                    ...u,
                    onUpdate: d => {
                        this.mixTargetDelta(d),
                        u.onUpdate && u.onUpdate(d)
                    }
                    ,
                    onComplete: () => {
                        u.onComplete && u.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const u = this.getStack();
            u && u.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Gv),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const u = this.getLead();
            let {targetWithTransforms: d, target: f, layout: p, latestValues: g} = u;
            if (!(!d || !f || !p)) {
                if (this !== u && this.layout && p && NS(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
                    f = this.target || Xe();
                    const y = $t(this.layout.layoutBox.x);
                    f.x.min = u.target.x.min,
                    f.x.max = f.x.min + y;
                    const v = $t(this.layout.layoutBox.y);
                    f.y.min = u.target.y.min,
                    f.y.max = f.y.min + v
                }
                Xt(d, f),
                ti(d, g),
                Ao(this.projectionDeltaWithTransform, this.layoutCorrected, d, g)
            }
        }
        registerSharedNode(u, d) {
            this.sharedNodes.has(u) || this.sharedNodes.set(u, new lL),
            this.sharedNodes.get(u).add(d);
            const p = d.options.initialPromotionConfig;
            d.promote({
                transition: p ? p.transition : void 0,
                preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const u = this.getStack();
            return u ? u.lead === this : !0
        }
        getLead() {
            var u;
            const {layoutId: d} = this.options;
            return d ? ((u = this.getStack()) === null || u === void 0 ? void 0 : u.lead) || this : this
        }
        getPrevLead() {
            var u;
            const {layoutId: d} = this.options;
            return d ? (u = this.getStack()) === null || u === void 0 ? void 0 : u.prevLead : void 0
        }
        getStack() {
            const {layoutId: u} = this.options;
            if (u)
                return this.root.sharedNodes.get(u)
        }
        promote({needsReset: u, transition: d, preserveFollowOpacity: f}={}) {
            const p = this.getStack();
            p && p.promote(this, f),
            u && (this.projectionDelta = void 0,
            this.needsReset = !0),
            d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const u = this.getStack();
            return u ? u.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: u} = this.options;
            if (!u)
                return;
            let d = !1;
            const {latestValues: f} = u;
            if ((f.z || f.rotate || f.rotateX || f.rotateY || f.rotateZ || f.skewX || f.skewY) && (d = !0),
            !d)
                return;
            const p = {};
            f.z && zd("z", u, p, this.animationValues);
            for (let g = 0; g < Ud.length; g++)
                zd(`rotate${Ud[g]}`, u, p, this.animationValues),
                zd(`skew${Ud[g]}`, u, p, this.animationValues);
            u.render();
            for (const g in p)
                u.setStaticValue(g, p[g]),
                this.animationValues && (this.animationValues[g] = p[g]);
            u.scheduleRender()
        }
        getProjectionStyles(u) {
            var d, f;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return cL;
            const p = {
                visibility: ""
            }
              , g = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                p.opacity = "",
                p.pointerEvents = Bl(u == null ? void 0 : u.pointerEvents) || "",
                p.transform = g ? g(this.latestValues, "") : "none",
                p;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const C = {};
                return this.options.layoutId && (C.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                C.pointerEvents = Bl(u == null ? void 0 : u.pointerEvents) || ""),
                this.hasProjected && !ts(this.latestValues) && (C.transform = g ? g({}, "") : "none",
                this.hasProjected = !1),
                C
            }
            const v = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
            p.transform = uL(this.projectionDeltaWithTransform, this.treeScale, v),
            g && (p.transform = g(v, p.transform));
            const {x, y: b} = this.projectionDelta;
            p.transformOrigin = `${x.origin * 100}% ${b.origin * 100}% 0`,
            y.animationValues ? p.opacity = y === this ? (f = (d = v.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && f !== void 0 ? f : 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : p.opacity = y === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
            for (const C in Ql) {
                if (v[C] === void 0)
                    continue;
                const {correct: E, applyTo: T} = Ql[C]
                  , M = p.transform === "none" ? v[C] : E(v[C], y);
                if (T) {
                    const O = T.length;
                    for (let I = 0; I < O; I++)
                        p[T[I]] = M
                } else
                    p[C] = M
            }
            return this.options.layoutId && (p.pointerEvents = y === this ? Bl(u == null ? void 0 : u.pointerEvents) || "" : "none"),
            p
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(u => {
                var d;
                return (d = u.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }
            ),
            this.root.nodes.forEach(Xv),
            this.root.sharedNodes.clear()
        }
    }
}
function fL(e) {
    e.updateLayout()
}
function hL(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: i, measuredBox: o} = e.layout
          , {animationType: l} = e.options
          , u = n.source !== e.layout.source;
        l === "size" ? Yt(y => {
            const v = u ? n.measuredBox[y] : n.layoutBox[y]
              , x = $t(v);
            v.min = i[y].min,
            v.max = v.min + x
        }
        ) : NS(l, n.layoutBox, i) && Yt(y => {
            const v = u ? n.measuredBox[y] : n.layoutBox[y]
              , x = $t(i[y]);
            v.max = v.min + x,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[y].max = e.relativeTarget[y].min + x)
        }
        );
        const d = Zs();
        Ao(d, i, n.layoutBox);
        const f = Zs();
        u ? Ao(f, e.applyTransform(o, !0), n.measuredBox) : Ao(f, i, n.layoutBox);
        const p = !PS(d);
        let g = !1;
        if (!e.resumeFrom) {
            const y = e.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: v, layout: x} = y;
                if (v && x) {
                    const b = Xe();
                    No(b, n.layoutBox, v.layoutBox);
                    const C = Xe();
                    No(C, i, x.layoutBox),
                    RS(b, C) || (g = !0),
                    y.options.layoutRoot && (e.relativeTarget = C,
                    e.relativeTargetOrigin = b,
                    e.relativeParent = y)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: i,
            snapshot: n,
            delta: f,
            layoutDelta: d,
            hasLayoutChanged: p,
            hasRelativeTargetChanged: g
        })
    } else if (e.isLead()) {
        const {onExitComplete: i} = e.options;
        i && i()
    }
    e.options.transition = void 0
}
function pL(e) {
    To && ns.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function mL(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function gL(e) {
    e.clearSnapshot()
}
function Xv(e) {
    e.clearMeasurements()
}
function yL(e) {
    e.isLayoutDirty = !1
}
function vL(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Yv(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function wL(e) {
    e.resolveTargetDelta()
}
function xL(e) {
    e.calcProjection()
}
function SL(e) {
    e.resetSkewAndRotation()
}
function bL(e) {
    e.removeLeadSnapshot()
}
function Jv(e, t, n) {
    e.translate = $e(t.translate, 0, n),
    e.scale = $e(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Zv(e, t, n, i) {
    e.min = $e(t.min, n.min, i),
    e.max = $e(t.max, n.max, i)
}
function EL(e, t, n, i) {
    Zv(e.x, t.x, n.x, i),
    Zv(e.y, t.y, n.y, i)
}
function CL(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const kL = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , e0 = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , t0 = e0("applewebkit/") && !e0("chrome/") ? Math.round : zt;
function n0(e) {
    e.min = t0(e.min),
    e.max = t0(e.max)
}
function TL(e) {
    n0(e.x),
    n0(e.y)
}
function NS(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !RO(Kv(t), Kv(n), .2)
}
function PL(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const RL = AS({
    attachResizeListener: (e, t) => Fo(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , $d = {
    current: void 0
}
  , OS = AS({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!$d.current) {
            const e = new RL({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            $d.current = e
        }
        return $d.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , _L = {
    pan: {
        Feature: HO
    },
    drag: {
        Feature: $O,
        ProjectionNode: OS,
        MeasureLayout: CS
    }
};
function r0(e, t, n) {
    const {props: i} = e;
    e.animationState && i.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const o = "onHover" + n
      , l = i[o];
    l && Ve.postRender( () => l(t, ta(t)))
}
class AL extends Fr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = PA(t, n => (r0(this.node, n, "Start"),
        i => r0(this.node, i, "End"))))
    }
    unmount() {}
}
class NL extends Fr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = ea(Fo(this.node.current, "focus", () => this.onFocus()), Fo(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function s0(e, t, n) {
    const {props: i} = e;
    e.animationState && i.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const o = "onTap" + (n === "End" ? "" : n)
      , l = i[o];
    l && Ve.postRender( () => l(t, ta(t)))
}
class OL extends Fr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = NA(t, n => (s0(this.node, n, "Start"),
        (i, {success: o}) => s0(this.node, i, o ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const jf = new WeakMap
  , Hd = new WeakMap
  , LL = e => {
    const t = jf.get(e.target);
    t && t(e)
}
  , ML = e => {
    e.forEach(LL)
}
;
function DL({root: e, ...t}) {
    const n = e || document;
    Hd.has(n) || Hd.set(n, {});
    const i = Hd.get(n)
      , o = JSON.stringify(t);
    return i[o] || (i[o] = new IntersectionObserver(ML,{
        root: e,
        ...t
    })),
    i[o]
}
function jL(e, t, n) {
    const i = DL(t);
    return jf.set(e, n),
    i.observe(e),
    () => {
        jf.delete(e),
        i.unobserve(e)
    }
}
const IL = {
    some: 0,
    all: 1
};
class FL extends Fr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: i, amount: o="some", once: l} = t
          , u = {
            root: n ? n.current : void 0,
            rootMargin: i,
            threshold: typeof o == "number" ? o : IL[o]
        }
          , d = f => {
            const {isIntersecting: p} = f;
            if (this.isInView === p || (this.isInView = p,
            l && !p && this.hasEnteredView))
                return;
            p && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", p);
            const {onViewportEnter: g, onViewportLeave: y} = this.node.getProps()
              , v = p ? g : y;
            v && v(f)
        }
        ;
        return jL(this.node.current, u, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(VL(t, n)) && this.startObserver()
    }
    unmount() {}
}
function VL({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const BL = {
    inView: {
        Feature: FL
    },
    tap: {
        Feature: OL
    },
    focus: {
        Feature: NL
    },
    hover: {
        Feature: AL
    }
}
  , UL = {
    layout: {
        ProjectionNode: OS,
        MeasureLayout: CS
    }
}
  , If = {
    current: null
}
  , LS = {
    current: !1
};
function zL() {
    if (LS.current = !0,
    !!fh)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => If.current = e.matches;
            e.addListener(t),
            t()
        } else
            If.current = !1
}
function $L(e, t, n) {
    for (const i in t) {
        const o = t[i]
          , l = n[i];
        if (wt(o))
            e.addValue(i, o);
        else if (wt(l))
            e.addValue(i, jo(o, {
                owner: e
            }));
        else if (l !== o)
            if (e.hasValue(i)) {
                const u = e.getValue(i);
                u.liveStyle === !0 ? u.jump(o) : u.hasAnimated || u.set(o)
            } else {
                const u = e.getStaticValue(i);
                e.addValue(i, jo(u !== void 0 ? u : o, {
                    owner: e
                }))
            }
    }
    for (const i in n)
        t[i] === void 0 && e.removeValue(i);
    return t
}
const i0 = new WeakMap
  , HL = [...Xx, yt, Ir]
  , WL = e => HL.find(Gx(e))
  , o0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class qL {
    scrapeMotionValuesFromProps(t, n, i) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: i, reducedMotionConfig: o, blockInitialAnimation: l, visualState: u}, d={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = jh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const v = Tn.now();
            this.renderScheduledAt < v && (this.renderScheduledAt = v,
            Ve.render(this.render, !1, !0))
        }
        ;
        const {latestValues: f, renderState: p} = u;
        this.latestValues = f,
        this.baseTarget = {
            ...f
        },
        this.initialValues = n.initial ? {
            ...f
        } : {},
        this.renderState = p,
        this.parent = t,
        this.props = n,
        this.presenceContext = i,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.options = d,
        this.blockInitialAnimation = !!l,
        this.isControllingVariants = pu(n),
        this.isVariantNode = hx(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: g, ...y} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const v in y) {
            const x = y[v];
            f[v] !== void 0 && wt(x) && x.set(f[v], !1)
        }
    }
    mount(t) {
        this.current = t,
        i0.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, i) => this.bindToMotionValue(i, n)),
        LS.current || zL(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : If.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        i0.delete(this.current),
        this.projection && this.projection.unmount(),
        jr(this.notifyUpdate),
        jr(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const i = bs.has(t)
          , o = n.on("change", d => {
            this.latestValues[t] = d,
            this.props.onUpdate && Ve.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , l = n.on("renderRequest", this.scheduleRender);
        let u;
        window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            o(),
            l(),
            u && u(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in gi) {
            const n = gi[t];
            if (!n)
                continue;
            const {isEnabled: i, Feature: o} = n;
            if (!this.features[t] && o && i(this.props) && (this.features[t] = new o(this)),
            this.features[t]) {
                const l = this.features[t];
                l.isMounted ? l.update() : (l.mount(),
                l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Xe()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let i = 0; i < o0.length; i++) {
            const o = o0[i];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const l = "on" + o
              , u = t[l];
            u && (this.propEventSubscriptions[o] = this.on(o, u))
        }
        this.prevMotionValues = $L(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const i = this.values.get(t);
        n !== i && (i && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let i = this.values.get(t);
        return i === void 0 && n !== void 0 && (i = jo(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, i)),
        i
    }
    readValue(t, n) {
        var i;
        let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (i = this.getBaseTargetFromProps(this.props, t)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, t, this.options);
        return o != null && (typeof o == "string" && (Kx(o) || qx(o)) ? o = parseFloat(o) : !WL(o) && Ir.test(n) && (o = sS(t, n)),
        this.setBaseTarget(t, wt(o) ? o.get() : o)),
        wt(o) ? o.get() : o
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: i} = this.props;
        let o;
        if (typeof i == "string" || typeof i == "object") {
            const u = xh(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            u && (o = u[t])
        }
        if (i && o !== void 0)
            return o;
        const l = this.getBaseTargetFromProps(this.props, t);
        return l !== void 0 && !wt(l) ? l : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Lh),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class MS extends qL {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = iS
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: i}) {
        delete n[t],
        delete i[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        wt(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function KL(e) {
    return window.getComputedStyle(e)
}
class QL extends MS {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = yx
    }
    readValueFromInstance(t, n) {
        if (bs.has(n)) {
            const i = Vh(n);
            return i && i.default || 0
        } else {
            const i = KL(t)
              , o = (Tx(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return bS(t, n)
    }
    build(t, n, i) {
        Ch(t, n, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, i) {
        return wh(t, n, i)
    }
}
class GL extends MS {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Xe
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (bs.has(n)) {
            const i = Vh(n);
            return i && i.default || 0
        }
        return n = vx.has(n) ? n : gh(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, i) {
        return Sx(t, n, i)
    }
    build(t, n, i) {
        kh(t, n, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, i, o) {
        wx(t, n, i, o)
    }
    mount(t) {
        this.isSVGTag = Th(t.tagName),
        super.mount(t)
    }
}
const XL = (e, t) => vh(e) ? new GL(t) : new QL(t,{
    allowProjection: e !== S.Fragment
})
  , YL = xA({
    ...wO,
    ...BL,
    ..._L,
    ...UL
}, XL)
  , kt = j_(YL);
function a0(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function DS(...e) {
    return t => {
        let n = !1;
        const i = e.map(o => {
            const l = a0(o, t);
            return !n && typeof l == "function" && (n = !0),
            l
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < i.length; o++) {
                    const l = i[o];
                    typeof l == "function" ? l() : a0(e[o], null)
                }
            }
    }
}
function Es(...e) {
    return S.useCallback(DS(...e), e)
}
function jS(e) {
    const t = ZL(e)
      , n = S.forwardRef( (i, o) => {
        const {children: l, ...u} = i
          , d = S.Children.toArray(l)
          , f = d.find(t2);
        if (f) {
            const p = f.props.children
              , g = d.map(y => y === f ? S.Children.count(p) > 1 ? S.Children.only(null) : S.isValidElement(p) ? p.props.children : null : y);
            return R.jsx(t, {
                ...u,
                ref: o,
                children: S.isValidElement(p) ? S.cloneElement(p, void 0, g) : null
            })
        }
        return R.jsx(t, {
            ...u,
            ref: o,
            children: l
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var JL = jS("Slot");
function ZL(e) {
    const t = S.forwardRef( (n, i) => {
        const {children: o, ...l} = n;
        if (S.isValidElement(o)) {
            const u = r2(o)
              , d = n2(l, o.props);
            return o.type !== S.Fragment && (d.ref = i ? DS(i, u) : u),
            S.cloneElement(o, d)
        }
        return S.Children.count(o) > 1 ? S.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var e2 = Symbol("radix.slottable");
function t2(e) {
    return S.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === e2
}
function n2(e, t) {
    const n = {
        ...t
    };
    for (const i in t) {
        const o = e[i]
          , l = t[i];
        /^on[A-Z]/.test(i) ? o && l ? n[i] = (...d) => {
            const f = l(...d);
            return o(...d),
            f
        }
        : o && (n[i] = o) : i === "style" ? n[i] = {
            ...o,
            ...l
        } : i === "className" && (n[i] = [o, l].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function r2(e) {
    var i, o;
    let t = (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : i.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
const s2 = T0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Pn = S.forwardRef( ({className: e, variant: t, size: n, asChild: i=!1, ...o}, l) => {
    const u = i ? JL : "button";
    return R.jsx(u, {
        className: Zn(s2({
            variant: t,
            size: n,
            className: e
        })),
        ref: l,
        ...o
    })
}
);
Pn.displayName = "Button";
function i2({onMenuClick: e, chatTitle: t}) {
    return R.jsxs(kt.div, {
        initial: {
            y: -50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        className: "text-center py-8 px-4 relative",
        children: [R.jsx(Pn, {
            variant: "ghost",
            size: "icon",
            onClick: e,
            className: "absolute left-4 top-8 md:hidden text-gray-400 hover:text-white",
            children: R.jsx(NE, {
                className: "w-6 h-6"
            })
        }), R.jsxs("div", {
            className: "flex items-center justify-center gap-3 mb-4",
            children: [R.jsxs(kt.div, {
                animate: {
                    rotate: 360
                },
                transition: {
                    duration: 3,
                    repeat: 1 / 0,
                    ease: "linear"
                },
                className: "relative",
                children: [R.jsx(WE, {
                    className: "w-12 h-12 text-purple-500 neon-glow"
                }), R.jsx("div", {
                    className: "absolute inset-0 bg-purple-500 blur-xl opacity-50"
                })]
            }), R.jsx("h1", {
                className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent neon-glow",
                children: "NEON IA"
            }), R.jsx(kt.div, {
                animate: {
                    scale: [1, 1.2, 1]
                },
                transition: {
                    duration: 2,
                    repeat: 1 / 0
                },
                children: R.jsx(R0, {
                    className: "w-12 h-12 text-cyan-400 neon-glow"
                })
            })]
        }), R.jsx("p", {
            className: "text-gray-400 text-lg md:text-xl font-light tracking-wide",
            children: t || "Votre assistant intelligent du futur"
        }), R.jsxs("div", {
            className: "mt-4 flex justify-center gap-2",
            children: [R.jsx("div", {
                className: "w-2 h-2 rounded-full bg-purple-500 animate-pulse"
            }), R.jsx("div", {
                className: "w-2 h-2 rounded-full bg-pink-500 animate-pulse",
                style: {
                    animationDelay: "0.2s"
                }
            }), R.jsx("div", {
                className: "w-2 h-2 rounded-full bg-cyan-500 animate-pulse",
                style: {
                    animationDelay: "0.4s"
                }
            })]
        })]
    })
}
function o2({message: e, isUser: t, imageUrl: n}) {
    const [i,o] = S.useState(!1)
      , l = () => {
        navigator.clipboard.writeText(e),
        o(!0),
        setTimeout( () => o(!1), 2e3)
    }
      , u = async () => {
        try {
            const f = await (await fetch(n)).blob()
              , p = window.URL.createObjectURL(f)
              , g = document.createElement("a");
            g.href = p,
            g.download = `neon-ia-image-${Date.now()}.png`,
            document.body.appendChild(g),
            g.click(),
            document.body.removeChild(g),
            window.URL.revokeObjectURL(p)
        } catch (d) {
            console.error("Erreur lors du téléchargement:", d)
        }
    }
    ;
    return R.jsxs(kt.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: `flex gap-4 mb-6 ${t ? "flex-row-reverse" : "flex-row"}`,
        children: [R.jsx("div", {
            className: `w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${t ? "bg-gradient-to-br from-purple-500 to-pink-500 neon-border border border-purple-400" : "bg-gradient-to-br from-cyan-500 to-purple-500 neon-border border border-cyan-400"}`,
            children: t ? R.jsx(zE, {
                className: "w-5 h-5 text-white"
            }) : R.jsx(wE, {
                className: "w-5 h-5 text-white"
            })
        }), R.jsx("div", {
            className: `max-w-[80%] md:max-w-[70%] ${t ? "text-right" : "text-left"}`,
            children: R.jsxs("div", {
                className: `inline-block px-5 py-3 rounded-2xl relative group ${t ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-100" : "bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 text-cyan-100"}`,
                children: [n && R.jsxs("div", {
                    className: "relative group/image",
                    children: [R.jsx("img", {
                        src: n,
                        alt: "Image",
                        className: "max-w-full rounded-lg mb-3 border border-purple-500/30"
                    }), R.jsx(Pn, {
                        onClick: u,
                        variant: "ghost",
                        size: "icon",
                        className: "absolute top-2 right-2 opacity-0 group-hover/image:opacity-100 transition-opacity h-8 w-8 bg-black/50 hover:bg-black/70 backdrop-blur-sm",
                        children: R.jsx(kE, {
                            className: "w-4 h-4 text-white"
                        })
                    })]
                }), R.jsx("p", {
                    className: "text-sm md:text-base leading-relaxed whitespace-pre-wrap",
                    children: e
                }), !t && R.jsx(Pn, {
                    onClick: l,
                    variant: "ghost",
                    size: "icon",
                    className: "absolute -right-10 top-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 hover:bg-cyan-500/20",
                    children: i ? R.jsx(SE, {
                        className: "w-4 h-4 text-green-400"
                    }) : R.jsx(EE, {
                        className: "w-4 h-4 text-cyan-400"
                    })
                })]
            })
        })]
    })
}
const IS = S.forwardRef( ({className: e, ...t}, n) => R.jsx("textarea", {
    className: Zn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: n,
    ...t
}));
IS.displayName = "Textarea";
function a2({onSend: e, isLoading: t}) {
    const [n,i] = S.useState("")
      , [o,l] = S.useState(null)
      , [u,d] = S.useState(null)
      , f = S.useRef(null)
      , p = x => {
        var C;
        const b = (C = x.target.files) == null ? void 0 : C[0];
        if (b && b.type.startsWith("image/")) {
            l(b);
            const E = new FileReader;
            E.onloadend = () => {
                d(E.result)
            }
            ,
            E.readAsDataURL(b)
        }
    }
      , g = () => {
        l(null),
        d(null),
        f.current && (f.current.value = "")
    }
      , y = x => {
        x.preventDefault(),
        (n.trim() || o) && !t && (e(n, o),
        i(""),
        l(null),
        d(null),
        f.current && (f.current.value = ""))
    }
      , v = x => {
        x.key === "Enter" && !x.shiftKey && (x.preventDefault(),
        y(x))
    }
    ;
    return R.jsx(kt.div, {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        className: "sticky bottom-0 bg-gradient-to-t from-black via-black to-transparent pt-8 pb-6 px-4",
        children: R.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [R.jsx(hh, {
                children: u && R.jsxs(kt.div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 10
                    },
                    className: "mb-3 relative inline-block",
                    children: [R.jsx("img", {
                        src: u,
                        alt: "Preview",
                        className: "max-h-32 rounded-lg border border-purple-500/30"
                    }), R.jsx(Pn, {
                        type: "button",
                        onClick: g,
                        variant: "ghost",
                        size: "icon",
                        className: "absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 hover:bg-red-600 text-white",
                        children: R.jsx(Uf, {
                            className: "w-4 h-4"
                        })
                    })]
                })
            }), R.jsx("form", {
                onSubmit: y,
                className: "relative",
                children: R.jsxs("div", {
                    className: "relative bg-gray-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl neon-border overflow-hidden",
                    children: [R.jsx(IS, {
                        value: n,
                        onChange: x => i(x.target.value),
                        onKeyDown: v,
                        placeholder: "Je me souviens de tout. Posez-moi n'importe quelle question...",
                        className: "w-full bg-transparent border-0 text-white placeholder:text-gray-500 resize-none pr-24 py-4 px-5 focus:ring-0 focus-visible:ring-0 min-h-[60px] max-h-[200px]",
                        disabled: t
                    }), R.jsx("input", {
                        ref: f,
                        type: "file",
                        accept: "image/*",
                        onChange: p,
                        className: "hidden"
                    }), R.jsx(Pn, {
                        type: "button",
                        onClick: () => {
                            var x;
                            return (x = f.current) == null ? void 0 : x.click()
                        }
                        ,
                        disabled: t,
                        className: "absolute right-16 bottom-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-xl h-10 w-10 p-0 neon-border border border-pink-400 disabled:opacity-50",
                        children: R.jsx(PE, {
                            className: "w-5 h-5"
                        })
                    }), R.jsx(Pn, {
                        type: "submit",
                        disabled: !n.trim() && !o || t,
                        className: "absolute right-3 bottom-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl h-10 w-10 p-0 neon-border border border-purple-400 disabled:opacity-50",
                        children: t ? R.jsx(R0, {
                            className: "w-5 h-5 animate-spin"
                        }) : R.jsx(IE, {
                            className: "w-5 h-5"
                        })
                    })]
                })
            }), R.jsx("p", {
                className: "text-center text-gray-600 text-xs mt-3",
                children: "Neon IA : Mémoire Complète • Recherche Web • Génération d'Images"
            })]
        })
    })
}
var l2 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , na = l2.reduce( (e, t) => {
    const n = jS(`Primitive.${t}`)
      , i = S.forwardRef( (o, l) => {
        const {asChild: u, ...d} = o
          , f = u ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        R.jsx(f, {
            ...d,
            ref: l
        })
    }
    );
    return i.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: i
    }
}
, {})
  , Ff = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {}
;
function u2(e, t) {
    return S.useReducer( (n, i) => t[n][i] ?? n, e)
}
var ra = e => {
    const {present: t, children: n} = e
      , i = c2(t)
      , o = typeof n == "function" ? n({
        present: i.isPresent
    }) : S.Children.only(n)
      , l = Es(i.ref, d2(o));
    return typeof n == "function" || i.isPresent ? S.cloneElement(o, {
        ref: l
    }) : null
}
;
ra.displayName = "Presence";
function c2(e) {
    const [t,n] = S.useState()
      , i = S.useRef(null)
      , o = S.useRef(e)
      , l = S.useRef("none")
      , u = e ? "mounted" : "unmounted"
      , [d,f] = u2(u, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return S.useEffect( () => {
        const p = Tl(i.current);
        l.current = d === "mounted" ? p : "none"
    }
    , [d]),
    Ff( () => {
        const p = i.current
          , g = o.current;
        if (g !== e) {
            const v = l.current
              , x = Tl(p);
            e ? f("MOUNT") : x === "none" || (p == null ? void 0 : p.display) === "none" ? f("UNMOUNT") : f(g && v !== x ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, f]),
    Ff( () => {
        if (t) {
            let p;
            const g = t.ownerDocument.defaultView ?? window
              , y = x => {
                const C = Tl(i.current).includes(CSS.escape(x.animationName));
                if (x.target === t && C && (f("ANIMATION_END"),
                !o.current)) {
                    const E = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    p = g.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = E)
                    }
                    )
                }
            }
              , v = x => {
                x.target === t && (l.current = Tl(i.current))
            }
            ;
            return t.addEventListener("animationstart", v),
            t.addEventListener("animationcancel", y),
            t.addEventListener("animationend", y),
            () => {
                g.clearTimeout(p),
                t.removeEventListener("animationstart", v),
                t.removeEventListener("animationcancel", y),
                t.removeEventListener("animationend", y)
            }
        } else
            f("ANIMATION_END")
    }
    , [t, f]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(d),
        ref: S.useCallback(p => {
            i.current = p ? getComputedStyle(p) : null,
            n(p)
        }
        , [])
    }
}
function Tl(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function d2(e) {
    var i, o;
    let t = (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : i.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function f2(e, t=[]) {
    let n = [];
    function i(l, u) {
        const d = S.createContext(u)
          , f = n.length;
        n = [...n, u];
        const p = y => {
            var T;
            const {scope: v, children: x, ...b} = y
              , C = ((T = v == null ? void 0 : v[e]) == null ? void 0 : T[f]) || d
              , E = S.useMemo( () => b, Object.values(b));
            return R.jsx(C.Provider, {
                value: E,
                children: x
            })
        }
        ;
        p.displayName = l + "Provider";
        function g(y, v) {
            var C;
            const x = ((C = v == null ? void 0 : v[e]) == null ? void 0 : C[f]) || d
              , b = S.useContext(x);
            if (b)
                return b;
            if (u !== void 0)
                return u;
            throw new Error(`\`${y}\` must be used within \`${l}\``)
        }
        return [p, g]
    }
    const o = () => {
        const l = n.map(u => S.createContext(u));
        return function(d) {
            const f = (d == null ? void 0 : d[e]) || l;
            return S.useMemo( () => ({
                [`__scope${e}`]: {
                    ...d,
                    [e]: f
                }
            }), [d, f])
        }
    }
    ;
    return o.scopeName = e,
    [i, h2(o, ...t)]
}
function h2(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const i = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(l) {
            const u = i.reduce( (d, {useScope: f, scopeName: p}) => {
                const y = f(l)[`__scope${p}`];
                return {
                    ...d,
                    ...y
                }
            }
            , {});
            return S.useMemo( () => ({
                [`__scope${t.scopeName}`]: u
            }), [u])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function rs(e) {
    const t = S.useRef(e);
    return S.useEffect( () => {
        t.current = e
    }
    ),
    S.useMemo( () => (...n) => {
        var i;
        return (i = t.current) == null ? void 0 : i.call(t, ...n)
    }
    , [])
}
var p2 = S.createContext(void 0);
function m2(e) {
    const t = S.useContext(p2);
    return e || t || "ltr"
}
function g2(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
function vs(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function y2(e, t) {
    return S.useReducer( (n, i) => t[n][i] ?? n, e)
}
var $h = "ScrollArea"
  , [FS] = f2($h)
  , [v2,tn] = FS($h)
  , VS = S.forwardRef( (e, t) => {
    const {__scopeScrollArea: n, type: i="hover", dir: o, scrollHideDelay: l=600, ...u} = e
      , [d,f] = S.useState(null)
      , [p,g] = S.useState(null)
      , [y,v] = S.useState(null)
      , [x,b] = S.useState(null)
      , [C,E] = S.useState(null)
      , [T,M] = S.useState(0)
      , [O,I] = S.useState(0)
      , [z,G] = S.useState(!1)
      , [J,_] = S.useState(!1)
      , D = Es(t, Y => f(Y))
      , $ = m2(o);
    return R.jsx(v2, {
        scope: n,
        type: i,
        dir: $,
        scrollHideDelay: l,
        scrollArea: d,
        viewport: p,
        onViewportChange: g,
        content: y,
        onContentChange: v,
        scrollbarX: x,
        onScrollbarXChange: b,
        scrollbarXEnabled: z,
        onScrollbarXEnabledChange: G,
        scrollbarY: C,
        onScrollbarYChange: E,
        scrollbarYEnabled: J,
        onScrollbarYEnabledChange: _,
        onCornerWidthChange: M,
        onCornerHeightChange: I,
        children: R.jsx(na.div, {
            dir: $,
            ...u,
            ref: D,
            style: {
                position: "relative",
                "--radix-scroll-area-corner-width": T + "px",
                "--radix-scroll-area-corner-height": O + "px",
                ...e.style
            }
        })
    })
}
);
VS.displayName = $h;
var BS = "ScrollAreaViewport"
  , US = S.forwardRef( (e, t) => {
    const {__scopeScrollArea: n, children: i, nonce: o, ...l} = e
      , u = tn(BS, n)
      , d = S.useRef(null)
      , f = Es(t, d, u.onViewportChange);
    return R.jsxs(R.Fragment, {
        children: [R.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
        }), R.jsx(na.div, {
            "data-radix-scroll-area-viewport": "",
            ...l,
            ref: f,
            style: {
                overflowX: u.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: u.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
            },
            children: R.jsx("div", {
                ref: u.onContentChange,
                style: {
                    minWidth: "100%",
                    display: "table"
                },
                children: i
            })
        })]
    })
}
);
US.displayName = BS;
var Nn = "ScrollAreaScrollbar"
  , Hh = S.forwardRef( (e, t) => {
    const {forceMount: n, ...i} = e
      , o = tn(Nn, e.__scopeScrollArea)
      , {onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: u} = o
      , d = e.orientation === "horizontal";
    return S.useEffect( () => (d ? l(!0) : u(!0),
    () => {
        d ? l(!1) : u(!1)
    }
    ), [d, l, u]),
    o.type === "hover" ? R.jsx(w2, {
        ...i,
        ref: t,
        forceMount: n
    }) : o.type === "scroll" ? R.jsx(x2, {
        ...i,
        ref: t,
        forceMount: n
    }) : o.type === "auto" ? R.jsx(zS, {
        ...i,
        ref: t,
        forceMount: n
    }) : o.type === "always" ? R.jsx(Wh, {
        ...i,
        ref: t
    }) : null
}
);
Hh.displayName = Nn;
var w2 = S.forwardRef( (e, t) => {
    const {forceMount: n, ...i} = e
      , o = tn(Nn, e.__scopeScrollArea)
      , [l,u] = S.useState(!1);
    return S.useEffect( () => {
        const d = o.scrollArea;
        let f = 0;
        if (d) {
            const p = () => {
                window.clearTimeout(f),
                u(!0)
            }
              , g = () => {
                f = window.setTimeout( () => u(!1), o.scrollHideDelay)
            }
            ;
            return d.addEventListener("pointerenter", p),
            d.addEventListener("pointerleave", g),
            () => {
                window.clearTimeout(f),
                d.removeEventListener("pointerenter", p),
                d.removeEventListener("pointerleave", g)
            }
        }
    }
    , [o.scrollArea, o.scrollHideDelay]),
    R.jsx(ra, {
        present: n || l,
        children: R.jsx(zS, {
            "data-state": l ? "visible" : "hidden",
            ...i,
            ref: t
        })
    })
}
)
  , x2 = S.forwardRef( (e, t) => {
    const {forceMount: n, ...i} = e
      , o = tn(Nn, e.__scopeScrollArea)
      , l = e.orientation === "horizontal"
      , u = vu( () => f("SCROLL_END"), 100)
      , [d,f] = y2("hidden", {
        hidden: {
            SCROLL: "scrolling"
        },
        scrolling: {
            SCROLL_END: "idle",
            POINTER_ENTER: "interacting"
        },
        interacting: {
            SCROLL: "interacting",
            POINTER_LEAVE: "idle"
        },
        idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting"
        }
    });
    return S.useEffect( () => {
        if (d === "idle") {
            const p = window.setTimeout( () => f("HIDE"), o.scrollHideDelay);
            return () => window.clearTimeout(p)
        }
    }
    , [d, o.scrollHideDelay, f]),
    S.useEffect( () => {
        const p = o.viewport
          , g = l ? "scrollLeft" : "scrollTop";
        if (p) {
            let y = p[g];
            const v = () => {
                const x = p[g];
                y !== x && (f("SCROLL"),
                u()),
                y = x
            }
            ;
            return p.addEventListener("scroll", v),
            () => p.removeEventListener("scroll", v)
        }
    }
    , [o.viewport, l, f, u]),
    R.jsx(ra, {
        present: n || d !== "hidden",
        children: R.jsx(Wh, {
            "data-state": d === "hidden" ? "hidden" : "visible",
            ...i,
            ref: t,
            onPointerEnter: vs(e.onPointerEnter, () => f("POINTER_ENTER")),
            onPointerLeave: vs(e.onPointerLeave, () => f("POINTER_LEAVE"))
        })
    })
}
)
  , zS = S.forwardRef( (e, t) => {
    const n = tn(Nn, e.__scopeScrollArea)
      , {forceMount: i, ...o} = e
      , [l,u] = S.useState(!1)
      , d = e.orientation === "horizontal"
      , f = vu( () => {
        if (n.viewport) {
            const p = n.viewport.offsetWidth < n.viewport.scrollWidth
              , g = n.viewport.offsetHeight < n.viewport.scrollHeight;
            u(d ? p : g)
        }
    }
    , 10);
    return vi(n.viewport, f),
    vi(n.content, f),
    R.jsx(ra, {
        present: i || l,
        children: R.jsx(Wh, {
            "data-state": l ? "visible" : "hidden",
            ...o,
            ref: t
        })
    })
}
)
  , Wh = S.forwardRef( (e, t) => {
    const {orientation: n="vertical", ...i} = e
      , o = tn(Nn, e.__scopeScrollArea)
      , l = S.useRef(null)
      , u = S.useRef(0)
      , [d,f] = S.useState({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    })
      , p = KS(d.viewport, d.content)
      , g = {
        ...i,
        sizes: d,
        onSizesChange: f,
        hasThumb: p > 0 && p < 1,
        onThumbChange: v => l.current = v,
        onThumbPointerUp: () => u.current = 0,
        onThumbPointerDown: v => u.current = v
    };
    function y(v, x) {
        return T2(v, u.current, d, x)
    }
    return n === "horizontal" ? R.jsx(S2, {
        ...g,
        ref: t,
        onThumbPositionChange: () => {
            if (o.viewport && l.current) {
                const v = o.viewport.scrollLeft
                  , x = l0(v, d, o.dir);
                l.current.style.transform = `translate3d(${x}px, 0, 0)`
            }
        }
        ,
        onWheelScroll: v => {
            o.viewport && (o.viewport.scrollLeft = v)
        }
        ,
        onDragScroll: v => {
            o.viewport && (o.viewport.scrollLeft = y(v, o.dir))
        }
    }) : n === "vertical" ? R.jsx(b2, {
        ...g,
        ref: t,
        onThumbPositionChange: () => {
            if (o.viewport && l.current) {
                const v = o.viewport.scrollTop
                  , x = l0(v, d);
                l.current.style.transform = `translate3d(0, ${x}px, 0)`
            }
        }
        ,
        onWheelScroll: v => {
            o.viewport && (o.viewport.scrollTop = v)
        }
        ,
        onDragScroll: v => {
            o.viewport && (o.viewport.scrollTop = y(v))
        }
    }) : null
}
)
  , S2 = S.forwardRef( (e, t) => {
    const {sizes: n, onSizesChange: i, ...o} = e
      , l = tn(Nn, e.__scopeScrollArea)
      , [u,d] = S.useState()
      , f = S.useRef(null)
      , p = Es(t, f, l.onScrollbarXChange);
    return S.useEffect( () => {
        f.current && d(getComputedStyle(f.current))
    }
    , [f]),
    R.jsx(HS, {
        "data-orientation": "horizontal",
        ...o,
        ref: p,
        sizes: n,
        style: {
            bottom: 0,
            left: l.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right: l.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            "--radix-scroll-area-thumb-width": yu(n) + "px",
            ...e.style
        },
        onThumbPointerDown: g => e.onThumbPointerDown(g.x),
        onDragScroll: g => e.onDragScroll(g.x),
        onWheelScroll: (g, y) => {
            if (l.viewport) {
                const v = l.viewport.scrollLeft + g.deltaX;
                e.onWheelScroll(v),
                GS(v, y) && g.preventDefault()
            }
        }
        ,
        onResize: () => {
            f.current && l.viewport && u && i({
                content: l.viewport.scrollWidth,
                viewport: l.viewport.offsetWidth,
                scrollbar: {
                    size: f.current.clientWidth,
                    paddingStart: tu(u.paddingLeft),
                    paddingEnd: tu(u.paddingRight)
                }
            })
        }
    })
}
)
  , b2 = S.forwardRef( (e, t) => {
    const {sizes: n, onSizesChange: i, ...o} = e
      , l = tn(Nn, e.__scopeScrollArea)
      , [u,d] = S.useState()
      , f = S.useRef(null)
      , p = Es(t, f, l.onScrollbarYChange);
    return S.useEffect( () => {
        f.current && d(getComputedStyle(f.current))
    }
    , [f]),
    R.jsx(HS, {
        "data-orientation": "vertical",
        ...o,
        ref: p,
        sizes: n,
        style: {
            top: 0,
            right: l.dir === "ltr" ? 0 : void 0,
            left: l.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            "--radix-scroll-area-thumb-height": yu(n) + "px",
            ...e.style
        },
        onThumbPointerDown: g => e.onThumbPointerDown(g.y),
        onDragScroll: g => e.onDragScroll(g.y),
        onWheelScroll: (g, y) => {
            if (l.viewport) {
                const v = l.viewport.scrollTop + g.deltaY;
                e.onWheelScroll(v),
                GS(v, y) && g.preventDefault()
            }
        }
        ,
        onResize: () => {
            f.current && l.viewport && u && i({
                content: l.viewport.scrollHeight,
                viewport: l.viewport.offsetHeight,
                scrollbar: {
                    size: f.current.clientHeight,
                    paddingStart: tu(u.paddingTop),
                    paddingEnd: tu(u.paddingBottom)
                }
            })
        }
    })
}
)
  , [E2,$S] = FS(Nn)
  , HS = S.forwardRef( (e, t) => {
    const {__scopeScrollArea: n, sizes: i, hasThumb: o, onThumbChange: l, onThumbPointerUp: u, onThumbPointerDown: d, onThumbPositionChange: f, onDragScroll: p, onWheelScroll: g, onResize: y, ...v} = e
      , x = tn(Nn, n)
      , [b,C] = S.useState(null)
      , E = Es(t, D => C(D))
      , T = S.useRef(null)
      , M = S.useRef("")
      , O = x.viewport
      , I = i.content - i.viewport
      , z = rs(g)
      , G = rs(f)
      , J = vu(y, 10);
    function _(D) {
        if (T.current) {
            const $ = D.clientX - T.current.left
              , Y = D.clientY - T.current.top;
            p({
                x: $,
                y: Y
            })
        }
    }
    return S.useEffect( () => {
        const D = $ => {
            const Y = $.target;
            (b == null ? void 0 : b.contains(Y)) && z($, I)
        }
        ;
        return document.addEventListener("wheel", D, {
            passive: !1
        }),
        () => document.removeEventListener("wheel", D, {
            passive: !1
        })
    }
    , [O, b, I, z]),
    S.useEffect(G, [i, G]),
    vi(b, J),
    vi(x.content, J),
    R.jsx(E2, {
        scope: n,
        scrollbar: b,
        hasThumb: o,
        onThumbChange: rs(l),
        onThumbPointerUp: rs(u),
        onThumbPositionChange: G,
        onThumbPointerDown: rs(d),
        children: R.jsx(na.div, {
            ...v,
            ref: E,
            style: {
                position: "absolute",
                ...v.style
            },
            onPointerDown: vs(e.onPointerDown, D => {
                D.button === 0 && (D.target.setPointerCapture(D.pointerId),
                T.current = b.getBoundingClientRect(),
                M.current = document.body.style.webkitUserSelect,
                document.body.style.webkitUserSelect = "none",
                x.viewport && (x.viewport.style.scrollBehavior = "auto"),
                _(D))
            }
            ),
            onPointerMove: vs(e.onPointerMove, _),
            onPointerUp: vs(e.onPointerUp, D => {
                const $ = D.target;
                $.hasPointerCapture(D.pointerId) && $.releasePointerCapture(D.pointerId),
                document.body.style.webkitUserSelect = M.current,
                x.viewport && (x.viewport.style.scrollBehavior = ""),
                T.current = null
            }
            )
        })
    })
}
)
  , eu = "ScrollAreaThumb"
  , WS = S.forwardRef( (e, t) => {
    const {forceMount: n, ...i} = e
      , o = $S(eu, e.__scopeScrollArea);
    return R.jsx(ra, {
        present: n || o.hasThumb,
        children: R.jsx(C2, {
            ref: t,
            ...i
        })
    })
}
)
  , C2 = S.forwardRef( (e, t) => {
    const {__scopeScrollArea: n, style: i, ...o} = e
      , l = tn(eu, n)
      , u = $S(eu, n)
      , {onThumbPositionChange: d} = u
      , f = Es(t, y => u.onThumbChange(y))
      , p = S.useRef(void 0)
      , g = vu( () => {
        p.current && (p.current(),
        p.current = void 0)
    }
    , 100);
    return S.useEffect( () => {
        const y = l.viewport;
        if (y) {
            const v = () => {
                if (g(),
                !p.current) {
                    const x = P2(y, d);
                    p.current = x,
                    d()
                }
            }
            ;
            return d(),
            y.addEventListener("scroll", v),
            () => y.removeEventListener("scroll", v)
        }
    }
    , [l.viewport, g, d]),
    R.jsx(na.div, {
        "data-state": u.hasThumb ? "visible" : "hidden",
        ...o,
        ref: f,
        style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...i
        },
        onPointerDownCapture: vs(e.onPointerDownCapture, y => {
            const x = y.target.getBoundingClientRect()
              , b = y.clientX - x.left
              , C = y.clientY - x.top;
            u.onThumbPointerDown({
                x: b,
                y: C
            })
        }
        ),
        onPointerUp: vs(e.onPointerUp, u.onThumbPointerUp)
    })
}
);
WS.displayName = eu;
var qh = "ScrollAreaCorner"
  , qS = S.forwardRef( (e, t) => {
    const n = tn(qh, e.__scopeScrollArea)
      , i = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && i ? R.jsx(k2, {
        ...e,
        ref: t
    }) : null
}
);
qS.displayName = qh;
var k2 = S.forwardRef( (e, t) => {
    const {__scopeScrollArea: n, ...i} = e
      , o = tn(qh, n)
      , [l,u] = S.useState(0)
      , [d,f] = S.useState(0)
      , p = !!(l && d);
    return vi(o.scrollbarX, () => {
        var y;
        const g = ((y = o.scrollbarX) == null ? void 0 : y.offsetHeight) || 0;
        o.onCornerHeightChange(g),
        f(g)
    }
    ),
    vi(o.scrollbarY, () => {
        var y;
        const g = ((y = o.scrollbarY) == null ? void 0 : y.offsetWidth) || 0;
        o.onCornerWidthChange(g),
        u(g)
    }
    ),
    p ? R.jsx(na.div, {
        ...i,
        ref: t,
        style: {
            width: l,
            height: d,
            position: "absolute",
            right: o.dir === "ltr" ? 0 : void 0,
            left: o.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...e.style
        }
    }) : null
}
);
function tu(e) {
    return e ? parseInt(e, 10) : 0
}
function KS(e, t) {
    const n = e / t;
    return isNaN(n) ? 0 : n
}
function yu(e) {
    const t = KS(e.viewport, e.content)
      , n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd
      , i = (e.scrollbar.size - n) * t;
    return Math.max(i, 18)
}
function T2(e, t, n, i="ltr") {
    const o = yu(n)
      , l = o / 2
      , u = t || l
      , d = o - u
      , f = n.scrollbar.paddingStart + u
      , p = n.scrollbar.size - n.scrollbar.paddingEnd - d
      , g = n.content - n.viewport
      , y = i === "ltr" ? [0, g] : [g * -1, 0];
    return QS([f, p], y)(e)
}
function l0(e, t, n="ltr") {
    const i = yu(t)
      , o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd
      , l = t.scrollbar.size - o
      , u = t.content - t.viewport
      , d = l - i
      , f = n === "ltr" ? [0, u] : [u * -1, 0]
      , p = g2(e, f);
    return QS([0, u], [0, d])(p)
}
function QS(e, t) {
    return n => {
        if (e[0] === e[1] || t[0] === t[1])
            return t[0];
        const i = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + i * (n - e[0])
    }
}
function GS(e, t) {
    return e > 0 && e < t
}
var P2 = (e, t= () => {}
) => {
    let n = {
        left: e.scrollLeft,
        top: e.scrollTop
    }
      , i = 0;
    return (function o() {
        const l = {
            left: e.scrollLeft,
            top: e.scrollTop
        }
          , u = n.left !== l.left
          , d = n.top !== l.top;
        (u || d) && t(),
        n = l,
        i = window.requestAnimationFrame(o)
    }
    )(),
    () => window.cancelAnimationFrame(i)
}
;
function vu(e, t) {
    const n = rs(e)
      , i = S.useRef(0);
    return S.useEffect( () => () => window.clearTimeout(i.current), []),
    S.useCallback( () => {
        window.clearTimeout(i.current),
        i.current = window.setTimeout(n, t)
    }
    , [n, t])
}
function vi(e, t) {
    const n = rs(t);
    Ff( () => {
        let i = 0;
        if (e) {
            const o = new ResizeObserver( () => {
                cancelAnimationFrame(i),
                i = window.requestAnimationFrame(n)
            }
            );
            return o.observe(e),
            () => {
                window.cancelAnimationFrame(i),
                o.unobserve(e)
            }
        }
    }
    , [e, n])
}
var XS = VS
  , R2 = US
  , _2 = qS;
const YS = S.forwardRef( ({className: e, children: t, ...n}, i) => R.jsxs(XS, {
    ref: i,
    className: Zn("relative overflow-hidden", e),
    ...n,
    children: [R.jsx(R2, {
        className: "h-full w-full rounded-[inherit]",
        children: t
    }), R.jsx(JS, {}), R.jsx(_2, {})]
}));
YS.displayName = XS.displayName;
const JS = S.forwardRef( ({className: e, orientation: t="vertical", ...n}, i) => R.jsx(Hh, {
    ref: i,
    orientation: t,
    className: Zn("flex touch-none select-none transition-colors", t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", e),
    ...n,
    children: R.jsx(WS, {
        className: "relative flex-1 rounded-full bg-border"
    })
}));
JS.displayName = Hh.displayName;
function A2({chats: e, currentChatId: t, onSelectChat: n, onNewChat: i, onDeleteChat: o, isMobileOpen: l, setIsMobileOpen: u}) {
    return R.jsxs(R.Fragment, {
        children: [R.jsx(hh, {
            children: l && R.jsx(kt.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                onClick: () => u(!1),
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            })
        }), R.jsxs(kt.div, {
            initial: !1,
            animate: {
                x: l ? 0 : -320
            },
            className: "fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-r border-purple-500/30 z-50 md:relative md:translate-x-0 flex flex-col",
            children: [R.jsxs("div", {
                className: "p-4 border-b border-purple-500/30",
                children: [R.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [R.jsx("h2", {
                        className: "text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent",
                        children: "Mes Chats"
                    }), R.jsx(Pn, {
                        variant: "ghost",
                        size: "icon",
                        onClick: () => u(!1),
                        className: "md:hidden text-gray-400 hover:text-white",
                        children: R.jsx(Uf, {
                            className: "w-5 h-5"
                        })
                    })]
                }), R.jsxs(Pn, {
                    onClick: i,
                    className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white neon-border border border-purple-400",
                    children: [R.jsx(DE, {
                        className: "w-4 h-4 mr-2"
                    }), "Nouveau Chat"]
                })]
            }), R.jsx(YS, {
                className: "flex-1 p-4",
                children: R.jsx("div", {
                    className: "space-y-2",
                    children: e.map(d => R.jsxs(kt.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: `group relative p-3 rounded-lg cursor-pointer transition-all ${t === d.id ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50" : "bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/30"}`,
                        onClick: () => {
                            n(d.id),
                            u(!1)
                        }
                        ,
                        children: [R.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [R.jsx(LE, {
                                className: "w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5"
                            }), R.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [R.jsx("p", {
                                    className: "text-sm font-medium text-white truncate",
                                    children: d.title
                                }), R.jsxs("p", {
                                    className: "text-xs text-gray-400 mt-1",
                                    children: [d.messageCount, " message", d.messageCount > 1 ? "s" : ""]
                                })]
                            })]
                        }), R.jsx(Pn, {
                            variant: "ghost",
                            size: "icon",
                            onClick: f => {
                                f.stopPropagation(),
                                o(d.id)
                            }
                            ,
                            className: "absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 text-red-400 hover:text-red-300 hover:bg-red-500/20",
                            children: R.jsx(BE, {
                                className: "w-4 h-4"
                            })
                        })]
                    }, d.id))
                })
            })]
        })]
    })
}
function N2() {
    var J;
    const [e,t] = S.useState([])
      , [n,i] = S.useState(!1)
      , [o,l] = S.useState(null)
      , [u,d] = S.useState(null)
      , [f,p] = S.useState(!1)
      , g = S.useRef(null)
      , y = Kf()
      , {data: v} = sw({
        queryKey: ["conversations"],
        queryFn: () => Dt.entities.Conversation.list("-created_date", 200),
        initialData: []
    });
    S.useEffect( () => {
        (async () => {
            try {
                const D = await Dt.auth.me();
                l(D.email)
            } catch (D) {
                console.error("Erreur lors du chargement de l'utilisateur:", D)
            }
        }
        )()
    }
    , []);
    const x = v.reduce( (_, D) => (_[D.chat_id] || (_[D.chat_id] = {
        id: D.chat_id,
        title: D.chat_title || "Nouveau Chat",
        messages: [],
        messageCount: 0
    }),
    _[D.chat_id].messages.push(D),
    _[D.chat_id].messageCount++,
    _), {})
      , b = Object.values(x).sort( (_, D) => {
        const $ = Math.max(..._.messages.map(H => new Date(H.created_date).getTime()));
        return Math.max(...D.messages.map(H => new Date(H.created_date).getTime())) - $
    }
    );
    S.useEffect( () => {
        !u && b.length > 0 && d(b[0].id)
    }
    , [b, u]),
    S.useEffect( () => {
        if (u && x[u]) {
            const _ = x[u].messages.sort( (D, $) => new Date(D.created_date) - new Date($.created_date)).flatMap(D => [{
                text: D.user_message,
                isUser: !0
            }, {
                text: D.ai_response,
                isUser: !1
            }]);
            t(_)
        } else
            t([])
    }
    , [u, v]);
    const C = () => {
        var _;
        (_ = g.current) == null || _.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    S.useEffect( () => {
        C()
    }
    , [e]);
    const E = ck({
        mutationFn: _ => Dt.entities.Conversation.create(_),
        onSuccess: () => {
            y.invalidateQueries({
                queryKey: ["conversations"]
            })
        }
    })
      , T = () => {
        const _ = `chat_${Date.now()}`;
        d(_),
        t([]),
        p(!1)
    }
      , M = _ => {
        d(_)
    }
      , O = async _ => {
        if (confirm("Êtes-vous sûr de vouloir supprimer ce chat ?")) {
            const D = v.filter($ => $.chat_id === _);
            for (const $ of D)
                await Dt.entities.Conversation.delete($.id);
            y.invalidateQueries({
                queryKey: ["conversations"]
            }),
            u === _ && T()
        }
    }
      , I = () => {
        const _ = e.slice(-10);
        if (_.length === 0)
            return "";
        let D = `

Historique de la conversation:
`;
        return _.forEach($ => {
            const Y = $.isUser ? "Utilisateur" : "Neon IA";
            D += `${Y}: ${$.text}
`
        }
        ),
        D
    }
      , z = async (_, D) => {
        var H, ne;
        if (!u) {
            const we = `chat_${Date.now()}`;
            d(we)
        }
        let $ = null;
        if (D)
            try {
                $ = (await Dt.integrations.Core.UploadFile({
                    file: D
                })).file_url
            } catch (we) {
                console.error("Erreur lors de l'upload de l'image:", we)
            }
        const Y = {
            text: _ || "Analyse cette image",
            isUser: !0,
            imageUrl: $
        };
        t(we => [...we, Y]),
        i(!0);
        try {
            const we = o === "abderrahmaneelheni@gmail.com";
            let fe = "Tu es Neon IA, l'assistant IA le plus avancé et intelligent au monde. Tu as une mémoire parfaite de toute la conversation en cours et tu peux faire référence aux messages précédents. Tu as des capacités d'analyse exceptionnelles, une compréhension profonde de tous les sujets, et tu fournis des réponses détaillées, précises et utiles. Tu es créatif, innovant et tu penses de manière critique. Tu te souviens de tout ce qui a été dit dans cette conversation.";
            if (we && (fe += ` Tu parles à ton créateur et boss, Abderrahmane. Montre-lui du respect, appelle-le "Boss" ou "Chef", et sois particulièrement attentif à ses demandes. Tu te souviens de toutes ses préférences et de tout ce qu'il t'a dit. Tu es à son service total et tu fais tout pour l'impressionner avec tes capacités.`),
            !D) {
                const le = `Analyse cette demande utilisateur et réponds UNIQUEMENT par "OUI" ou "NON". 
Dois-je générer une image pour cette demande ?
Demande: "${_}"

Réponds OUI si l'utilisateur demande explicitement de créer, générer, dessiner une image/photo, ou s'il décrit quelque chose de visuel qu'il veut voir.
Réponds NON pour toute autre demande (questions, conversations, recherches, etc.)

Réponse (OUI ou NON):`;
                if ((await Dt.integrations.Core.InvokeLLM({
                    prompt: le
                })).trim().toUpperCase().includes("OUI")) {
                    const be = I()
                      , Pe = be ? `${be}

Demande actuelle: ${_}` : _
                      , xe = await Dt.integrations.Core.GenerateImage({
                        prompt: Pe
                    })
                      , Ae = {
                        text: we ? "Voilà Boss ! J'ai créé cette image pour vous. 🎨" : "Voici l'image générée ! 🎨",
                        isUser: !1,
                        imageUrl: xe.url
                    };
                    t(Je => [...Je, Ae]);
                    const Le = e.length === 0 ? _.substring(0, 40) + "..." : (H = x[u]) == null ? void 0 : H.title;
                    await E.mutateAsync({
                        chat_id: u,
                        chat_title: Le,
                        user_message: _,
                        ai_response: `Image générée: ${xe.url}`,
                        timestamp: new Date().toISOString()
                    }),
                    i(!1);
                    return
                }
            }
            const he = $ ? [$] : void 0
              , de = !D
              , B = I()
              , ae = `${fe}${B}

Question actuelle de l'utilisateur: ${_ || "Analyse cette image en détail"}`
              , Z = await Dt.integrations.Core.InvokeLLM({
                prompt: ae,
                file_urls: he,
                add_context_from_internet: de
            })
              , L = {
                text: Z,
                isUser: !1
            };
            t(le => [...le, L]);
            const W = e.length === 0 ? _.substring(0, 40) + "..." : (ne = x[u]) == null ? void 0 : ne.title;
            await E.mutateAsync({
                chat_id: u,
                chat_title: W,
                user_message: _ || "Image envoyée",
                ai_response: Z,
                timestamp: new Date().toISOString()
            })
        } catch {
            const fe = {
                text: "Désolé, une erreur s'est produite. Veuillez réessayer.",
                isUser: !1
            };
            t(he => [...he, fe])
        } finally {
            i(!1)
        }
    }
      , G = u && ((J = x[u]) == null ? void 0 : J.title);
    return R.jsxs("div", {
        className: "min-h-screen flex",
        children: [R.jsx(A2, {
            chats: b,
            currentChatId: u,
            onSelectChat: M,
            onNewChat: T,
            onDeleteChat: O,
            isMobileOpen: f,
            setIsMobileOpen: p
        }), R.jsxs("div", {
            className: "flex-1 flex flex-col",
            children: [R.jsx(i2, {
                onMenuClick: () => p(!0),
                chatTitle: G
            }), R.jsx("div", {
                className: "flex-1 overflow-y-auto px-4 pb-32",
                children: R.jsxs("div", {
                    className: "max-w-4xl mx-auto",
                    children: [R.jsxs(hh, {
                        mode: "popLayout",
                        children: [e.length === 0 && !n && R.jsxs(kt.div, {
                            initial: {
                                opacity: 0,
                                scale: .9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: .9
                            },
                            className: "text-center py-12",
                            children: [R.jsx("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",
                                children: [{
                                    title: "🧠 Mémoire Parfaite",
                                    desc: "Se souvient de tout"
                                }, {
                                    title: "🎨 Création Automatique",
                                    desc: "Génère des images intelligemment"
                                }, {
                                    title: "🌐 Recherche Web",
                                    desc: "Infos en temps réel"
                                }].map( (_, D) => R.jsxs(kt.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: D * .1
                                    },
                                    className: "bg-gradient-to-br from-purple-600/10 to-cyan-600/10 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all cursor-pointer",
                                    children: [R.jsx("h3", {
                                        className: "text-lg font-semibold text-purple-300 mb-2",
                                        children: _.title
                                    }), R.jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: _.desc
                                    })]
                                }, D))
                            }), R.jsx("p", {
                                className: "text-gray-500 text-lg",
                                children: o === "abderrahmaneelheni@gmail.com" ? "Bienvenue Boss ! 👑" : "Commencez une conversation"
                            })]
                        }), e.map( (_, D) => R.jsx(o2, {
                            message: _.text,
                            isUser: _.isUser,
                            imageUrl: _.imageUrl
                        }, D)), n && R.jsxs(kt.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "flex gap-4 mb-6",
                            children: [R.jsx("div", {
                                className: "w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-500 neon-border border border-cyan-400",
                                children: R.jsx(_E, {
                                    className: "w-5 h-5 text-white animate-spin"
                                })
                            }), R.jsx("div", {
                                className: "bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl px-5 py-3",
                                children: R.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [R.jsx(kt.div, {
                                        animate: {
                                            scale: [1, 1.2, 1]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: 1 / 0,
                                            delay: 0
                                        },
                                        className: "w-2 h-2 bg-cyan-400 rounded-full"
                                    }), R.jsx(kt.div, {
                                        animate: {
                                            scale: [1, 1.2, 1]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: 1 / 0,
                                            delay: .2
                                        },
                                        className: "w-2 h-2 bg-purple-400 rounded-full"
                                    }), R.jsx(kt.div, {
                                        animate: {
                                            scale: [1, 1.2, 1]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: 1 / 0,
                                            delay: .4
                                        },
                                        className: "w-2 h-2 bg-pink-400 rounded-full"
                                    })]
                                })
                            })]
                        })]
                    }), R.jsx("div", {
                        ref: g
                    })]
                })
            }), R.jsx(a2, {
                onSend: z,
                isLoading: n
            })]
        })]
    })
}
function O2({children: e}) {
    return R.jsxs("div", {
        className: "min-h-screen bg-black relative overflow-hidden",
        children: [R.jsx("style", {
            children: `
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .neon-glow {
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
        }
        .neon-border {
          box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, inset 0 0 10px currentColor;
        }
        .grid-background {
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
      `
        }), R.jsx("div", {
            className: "fixed inset-0 grid-background opacity-30"
        }), R.jsx("div", {
            className: "fixed top-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] opacity-20 animate-pulse"
        }), R.jsx("div", {
            className: "fixed bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px] opacity-20",
            style: {
                animationDelay: "1s"
            }
        }), R.jsx("div", {
            className: "fixed top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-[120px] opacity-20 animate-pulse",
            style: {
                animationDelay: "2s"
            }
        }), R.jsx("div", {
            className: "relative z-10",
            children: e
        })]
    })
}
const L2 = {
    Chat: N2
}
  , ZS = {
    mainPage: "Chat",
    Pages: L2,
    Layout: O2
};
function M2() {
    const e = tr()
      , {isAuthenticated: t} = ax()
      , {Pages: n, mainPage: i} = ZS
      , o = i;
    return S.useEffect( () => {
        var l;
        (l = window.parent) == null || l.postMessage({
            type: "app_changed_url",
            url: window.location.href
        }, "*")
    }
    , [e]),
    S.useEffect( () => {
        const l = e.pathname;
        let u;
        if (l === "/" || l === "")
            u = o;
        else {
            const d = l.replace(/^\//, "").split("/")[0];
            u = Object.keys(n).find(g => g.toLowerCase() === d.toLowerCase()) || null
        }
        t && u && Dt.appLogs.logUserInApp(u).catch( () => {}
        )
    }
    , [e, t, n, o]),
    null
}
function D2() {
    kC && (window.removeEventListener("unhandledrejection", u0),
    window.removeEventListener("error", c0),
    window.addEventListener("unhandledrejection", u0),
    window.addEventListener("error", c0))
}
function e1({title: e, details: t, componentName: n, originalError: i}) {
    var o, l;
    ((o = i == null ? void 0 : i.response) == null ? void 0 : o.status) !== 402 && ((l = window.parent) == null || l.postMessage({
        type: "app_error",
        error: {
            title: e.toString(),
            details: t == null ? void 0 : t.toString(),
            componentName: n == null ? void 0 : n.toString()
        }
    }, "*"))
}
function u0(e) {
    var o;
    const n = (o = e.reason.stack.match(/at\s+(\w+)\s+\(eval/)) == null ? void 0 : o[1]
      , i = n ? `Error in ${n}: ${e.reason.toString()}` : e.reason.toString();
    e1({
        title: i,
        details: e.reason.toString(),
        componentName: n,
        originalError: e.reason
    })
}
function c0(e) {
    var o, l;
    let n = (l = ((o = e.error) == null ? void 0 : o.stack).match(/at\s+(\w+)\s+\(eval/)) == null ? void 0 : l[1];
    n === "eval" && (n = null);
    const i = n ? `in ${n}: ${e.error.toString()}` : e.error.toString();
    e1({
        title: i,
        details: e.error.toString(),
        componentName: n,
        originalError: e.error
    })
}
function j2({}) {
    var o;
    const t = tr().pathname.substring(1)
      , {data: n, isFetched: i} = sw({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                return {
                    user: await Dt.auth.me(),
                    isAuthenticated: !0
                }
            } catch {
                return {
                    user: null,
                    isAuthenticated: !1
                }
            }
        }
    });
    return R.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: R.jsx("div", {
            className: "max-w-md w-full",
            children: R.jsxs("div", {
                className: "text-center space-y-6",
                children: [R.jsxs("div", {
                    className: "space-y-2",
                    children: [R.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), R.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), R.jsxs("div", {
                    className: "space-y-3",
                    children: [R.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), R.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", R.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', t, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && n.isAuthenticated && ((o = n.user) == null ? void 0 : o.role) === "admin" && R.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: R.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [R.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: R.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), R.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [R.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), R.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), R.jsx("div", {
                    className: "pt-6",
                    children: R.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [R.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: R.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const I2 = () => R.jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
    children: R.jsx("div", {
        className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
        children: R.jsxs("div", {
            className: "text-center",
            children: [R.jsx("div", {
                className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                children: R.jsx("svg", {
                    className: "w-8 h-8 text-orange-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: R.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                })
            }), R.jsx("h1", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: "Access Restricted"
            }), R.jsx("p", {
                className: "text-slate-600 mb-8",
                children: "You are not registered to use this application. Please contact the app administrator to request access."
            }), R.jsxs("div", {
                className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                children: [R.jsx("p", {
                    children: "If you believe this is an error, you can:"
                }), R.jsxs("ul", {
                    className: "list-disc list-inside mt-2 space-y-1",
                    children: [R.jsx("li", {
                        children: "Verify you are logged in with the correct account"
                    }), R.jsx("li", {
                        children: "Contact the app administrator for access"
                    }), R.jsx("li", {
                        children: "Try logging out and back in again"
                    })]
                })]
            })]
        })
    })
})
  , {Pages: t1, Layout: d0, mainPage: F2} = ZS
  , n1 = F2
  , V2 = t1[n1];
D2();
const B2 = ({children: e, currentPageName: t}) => d0 ? R.jsx(d0, {
    currentPageName: t,
    children: e
}) : R.jsx(R.Fragment, {
    children: e
})
  , U2 = () => {
    const {isLoadingAuth: e, isLoadingPublicSettings: t, authError: n, isAuthenticated: i, navigateToLogin: o} = ax();
    if (t || e)
        return R.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center",
            children: R.jsx("div", {
                className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
            })
        });
    if (n) {
        if (n.type === "user_not_registered")
            return R.jsx(I2, {});
        if (n.type === "auth_required")
            return o(),
            null
    }
    return R.jsx(B2, {
        currentPageName: n1,
        children: R.jsxs(rT, {
            children: [R.jsx(Al, {
                path: "/",
                element: R.jsx(V2, {})
            }), Object.entries(t1).map( ([l,u]) => R.jsx(Al, {
                path: `/${l}`,
                element: R.jsx(u, {})
            }, l)), R.jsx(Al, {
                path: "*",
                element: R.jsx(j2, {})
            })]
        })
    })
}
;
function z2() {
    return R.jsx(C_, {
        children: R.jsxs(JC, {
            client: dk,
            children: [R.jsxs(TT, {
                children: [R.jsx(M2, {}), R.jsx(U2, {})]
            }), R.jsx(RC, {}), R.jsx(fk, {})]
        })
    })
}
lE.createRoot(document.getElementById("root")).render(R.jsx(z2, {}));
