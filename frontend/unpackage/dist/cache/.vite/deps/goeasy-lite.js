var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// browser-external:os
var require_os = __commonJS({
  "browser-external:os"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "os" has been externalized for browser compatibility. Cannot access "os.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// F:/DuyuyangWork/Dome/AI-generated/frontend/node_modules/goeasy-lite/goeasy-lite.esm.min.js
var e;
var t;
!function(e5) {
  e5.UNIAPP = "uniapp", e5.REACT_NATIVE = "rn", e5.COCOS = "cocos", e5.UNKNOWN = "unknown";
}(e || (e = {}));
var n = class _n2 {
  constructor() {
    this.framework = null, this.methods = { [e.UNIAPP]: this.isUniApp, [e.REACT_NATIVE]: this.isReactNative, [e.COCOS]: this.isCocos };
    const t2 = this.methods, n2 = Object.keys(t2);
    for (const e5 of n2) {
      if ((0, t2[e5])()) {
        this.framework = e5;
        break;
      }
    }
    this.framework = this.framework || e.UNKNOWN, this.framework;
  }
  static currentFramework() {
    return this.instance || (this.instance = new _n2()), this.instance.framework;
  }
  isUniApp() {
    try {
      return "function" == typeof uni.getSystemInfoSync;
    } catch (e5) {
      return false;
    }
  }
  isReactNative() {
    try {
      return "object" == typeof navigator && "ReactNative" === navigator.product;
    } catch (e5) {
      return false;
    }
  }
  isTaro() {
    try {
      return void 0 !== process.env.TARO_ENV;
    } catch (e5) {
      return false;
    }
  }
  isCocos() {
    try {
      return void 0 !== cc.sys.localStorage;
    } catch (e5) {
      return false;
    }
  }
};
var s = class {
  static init(t2) {
    if (n.currentFramework() === e.REACT_NATIVE) {
      if (!t2)
        throw new Error("'reactNativeOptions' is missing when calling GoEasy.getInstance()");
      this.platform = t2.platform, this.asyncStorage = t2.asyncStorage;
    }
  }
};
!function(e5) {
  e5.DISCONNECTED = "disconnected", e5.DISCONNECTING = "disconnecting", e5.CONNECTING = "connecting", e5.CONNECTED = "connected", e5.RECONNECTING = "reconnecting", e5.RECONNECTED = "reconnected", e5.EXPIRED_RECONNECTED = "reconnected", e5.CONNECT_FAILED = "connect_failed";
}(t || (t = {}));
var i = new class {
  isDef(e5) {
    return !this.isUndef(e5);
  }
  isUndef(e5) {
    return null == e5;
  }
  isPrimitive(e5) {
    return "string" == typeof e5 || "number" == typeof e5 || "symbol" == typeof e5 || "boolean" == typeof e5;
  }
  isObject(e5) {
    return null !== e5 && "object" == typeof e5;
  }
  isPlainObject(e5) {
    return "[object Object]" === Object.prototype.toString.call(e5);
  }
  isRegExp(e5) {
    return "[object RegExp]" === Object.prototype.toString.call(e5);
  }
  isValidArrayIndex(e5) {
    let t2 = parseFloat(String(e5));
    return t2 >= 0 && Math.floor(t2) === t2 && isFinite(e5);
  }
  isString(e5) {
    return "string" == typeof e5;
  }
  isNumber(e5) {
    return "number" == typeof e5;
  }
  isStringOrNumber(e5) {
    return this.isString(e5) || this.isNumber(e5);
  }
  isArray(e5) {
    return "[object Array]" === Object.prototype.toString.call(e5);
  }
  isEmpty(e5) {
    return this.isArray(e5) ? 0 === e5.length : this.isObject(e5) ? !this.isDef(e5) : !this.isNumber(e5) && (this.isString(e5) ? "" === e5.trim() : !this.isDef(e5));
  }
  isNative(e5) {
    return "function" == typeof e5 && /native code/.test(e5.toString());
  }
  isFunction(e5) {
    return "function" == typeof e5;
  }
  isBoolean(e5) {
    return "boolean" == typeof e5;
  }
  isTrue(e5) {
    return true === e5;
  }
  isFalse(e5) {
    return false === e5;
  }
  isNull(e5) {
    return null === e5;
  }
}();
var o;
!function(e5) {
  e5.MP_WX = "mp-wx", e5.MP_WGAME = "mp-wgame", e5.MP_BYTE = "mp-byte", e5.MP_BAIDU = "mp-baidu", e5.MP_ALI = "mp-ali", e5.BROWSER = "browser", e5.NODE = "node", e5.UNI_IOS = "uni-ios", e5.UNI_ANDROID = "uni-android", e5.UNI_HARMONY = "uni-harmony", e5.COCOS_IOS = "cocos-ios", e5.COCOS_ANDROID = "cocos-android", e5.RN_IOS = "rn-ios", e5.RN_ANDROID = "rn-android", e5.UNKNOWN = "unknown";
}(o || (o = {}));
var r = class _r {
  constructor() {
    this.platform = null, this.methods = { [o.BROWSER]: this.isBrowser, [o.MP_WX]: this.isMPWX, [o.MP_WGAME]: this.isMPWeGame, [o.MP_BYTE]: this.isMPByte, [o.MP_BAIDU]: this.isMPBaidu, [o.MP_ALI]: this.isMPAli, [o.NODE]: this.isNode, [o.UNI_IOS]: this.isUniAppIOS, [o.UNI_ANDROID]: this.isUniAppAndroid, [o.UNI_HARMONY]: this.isUniAppHarmony, [o.COCOS_IOS]: this.isCocosIOS, [o.COCOS_ANDROID]: this.isCocosAndroid, [o.RN_IOS]: this.isRNiOS, [o.RN_ANDROID]: this.isRNAndroid };
    const e5 = this.methods, t2 = Object.keys(e5);
    for (const n2 of t2) {
      if ((0, e5[n2])()) {
        this.platform = n2;
        break;
      }
    }
    this.platform = this.platform || o.UNKNOWN, this.platform;
  }
  static currentPlatform() {
    return this.instance || (this.instance = new _r()), _r.instance.platform;
  }
  isBrowser() {
    return "undefined" != typeof navigator && "Taro" !== navigator.product && "ReactNative" !== navigator.product && "undefined" == typeof GameGlobal && ("undefined" == typeof cc || null !== cc.sys.browserType) && "undefined" == typeof my && "undefined" == typeof tt && "undefined" == typeof swan;
  }
  isMPWX() {
    return "object" == typeof wx && "function" == typeof wx.getSystemInfoSync && "undefined" == typeof WebSocket && "undefined" == typeof XMLHttpRequest && "undefined" == typeof plus && "undefined" == typeof tt;
  }
  isMPWeGame() {
    return "object" == typeof GameGlobal;
  }
  isMPByte() {
    return "object" == typeof tt && "function" == typeof tt.getSystemInfoSync;
  }
  isMPBaidu() {
    return "object" == typeof swan && "function" == typeof swan.getSystemInfoSync;
  }
  isMPAli() {
    return "object" == typeof my && "function" == typeof my.getSystemInfoSync;
  }
  isNode() {
    try {
      return "node" === process.release.name;
    } catch (e5) {
      return false;
    }
  }
  isUniAppIOS() {
    try {
      return "ios" === uni.getSystemInfoSync().platform && "app" === uni.getSystemInfoSync().uniPlatform;
    } catch (e5) {
      return false;
    }
  }
  isUniAppAndroid() {
    try {
      return "android" === uni.getSystemInfoSync().platform && "app" === uni.getSystemInfoSync().uniPlatform;
    } catch (e5) {
      return false;
    }
  }
  isUniAppHarmony() {
    try {
      return "harmonyos" === uni.getSystemInfoSync().platform && "app" === uni.getSystemInfoSync().uniPlatform;
    } catch (e5) {
      return false;
    }
  }
  isCocosIOS() {
    try {
      return "iOS" === cc.sys.os;
    } catch (e5) {
      return false;
    }
  }
  isCocosAndroid() {
    try {
      return "Android" === cc.sys.os;
    } catch (e5) {
      return false;
    }
  }
  isRNiOS() {
    try {
      return "ios" === s.platform.OS;
    } catch (e5) {
      return false;
    }
  }
  isRNAndroid() {
    try {
      return "android" === s.platform.OS;
    } catch (e5) {
      return false;
    }
  }
};
var a = class {
};
a.type = o, a.current = r.currentPlatform();
var c = class {
  onFrontend(e5) {
    this.onFrontendCallback = e5;
  }
};
var u = class extends c {
  constructor() {
    super(...arguments), this.runningBackend = false;
  }
  startCheck() {
    "object" == typeof plus && (plus.globalEvent.addEventListener("resume", () => {
      this.runningBackend = false, this.runningBackend, this.onFrontendCallback && this.onFrontendCallback();
    }, false), plus.globalEvent.addEventListener("pause", () => {
      this.runningBackend = true, this.runningBackend;
    }, false));
  }
  isBackend() {
    return this.runningBackend;
  }
  support() {
    const e5 = r.currentPlatform();
    return [o.UNI_IOS, o.UNI_ANDROID].includes(e5);
  }
};
var p = class extends c {
  constructor() {
    super(...arguments), this.runningBackend = false;
  }
  startCheck() {
    wx.onAppShow(() => {
      this.runningBackend = false;
    }), wx.onAppHide(() => {
      this.runningBackend = true;
    });
  }
  isBackend() {
    return this.runningBackend;
  }
  support() {
    return r.currentPlatform() === o.MP_WX;
  }
};
var h = new class {
  constructor() {
    [new u(), new p()].forEach((e5) => {
      if (e5.support())
        return this.checker = e5, void this.checker.startCheck();
    });
  }
  isBackend() {
    return this.checker && this.checker.isBackend();
  }
  onFrontend(e5) {
    this.checker.onFrontend(e5);
  }
}();
var l;
var d;
var f = Object.freeze({ __proto__: null, runStatus: h });
!function(e5) {
  e5.authorize = "authorize", e5.manualDisconnect = "manualDisconnect", e5.subscribe = "subscribe", e5.unsubscribe = "unsubscribe", e5.publish = "publish", e5.ack = "ack", e5.historyMessages = "historyMessages", e5.hereNow = "hereNow", e5.hereNowByUserIds = "hereNowByUserIds", e5.PUBSUB_PRESENCE_SUBSCRIBE = "PUBSUB_PRESENCE_SUBSCRIBE", e5.PUBSUB_PRESENCE_UNSUBSCRIBE = "PUBSUB_PRESENCE_UNSUBSCRIBE", e5.PUBSUB_PRESENCE_HERENOW = "PUBSUB_PRESENCE_HERENOW", e5.imLastConversations = "imLastConversations", e5.markPrivateMessageAsRead = "markPrivateMessageAsRead", e5.markGroupMessageAsRead = "markGroupMessageAsRead", e5.imGroupOnlineCount = "imGroupOnlineCount", e5.imHereNow = "imHereNow", e5.imGroupHereNow = "imGroupHereNow", e5.publishIM = "publishIM", e5.subscribeUserPresence = "subscribeUserPresence", e5.unsubscribeUserPresence = "unsubscribeUserPresence", e5.subscribeGroupPresence = "subscribeGroupPresence", e5.unsubscribeGroupPresence = "unsubscribeGroupPresence", e5.removeConversation = "removeConversation", e5.topConversation = "topConversation", e5.imData = "imData", e5.subscribeGroups = "subscribeGroups", e5.unsubscribeGroup = "unsubscribeGroup", e5.IM_DELETE_MESSAGE = "IM_DELETE_MESSAGE", e5.IM_HISTORY = "IM_HISTORY", e5.IM_HISTORY_CHANGE = "IM_HISTORY_CHANGE", e5.IM_RECALL_MESSAGE = "IM_RECALL_MESSAGE", e5.IM_MARK_AS_READ = "IM_MARK_AS_READ", e5.CS_PENDING_CONVERSATION = "CS_PENDING_CONVERSATION", e5.CS_ACCEPT = "CS_ACCEPT", e5.CS_END = "CS_END", e5.CS_TRANSFER = "CS_TRANSFER", e5.CS_AGENTS = "CS_AGENTS", e5.CS_CUSTOMER_STATUS = "CS_CUSTOMER_STATUS", e5.CS_MY_TEAMS = "CS_MY_TEAMS", e5.CS_ONLINE = "CS_ONLINE", e5.CS_OFFLINE = "CS_OFFLINE", e5.CS_LIVE_SESSION = "CS_LIVE_SESSION", e5.CS_QUIT_LIVE = "CS_QUIT_LIVE", e5.SET_IOS_BADGE = "SET_IOS_BADGE", e5.MD_CMD = "MD_CMD";
}(l || (l = {})), function(e5) {
  e5[e5.connect = 3e3] = "connect", e5[e5.reconnectionDelayMax = 3e3] = "reconnectionDelayMax", e5[e5.commonQuerySingle = 2500] = "commonQuerySingle", e5[e5.commonQueryTotal = 12e3] = "commonQueryTotal", e5[e5.commonRequestSingle = 1700] = "commonRequestSingle", e5[e5.commonRequestTotal = 12e3] = "commonRequestTotal", e5[e5.commonInfiniteSingle = 1700] = "commonInfiniteSingle", e5[e5.commonInfiniteTotal = 864e5] = "commonInfiniteTotal";
}(d || (d = {}));
var m = class {
  static onSuccess(e5, t2) {
    i.isFunction(e5.onSuccess) && e5.onSuccess(t2);
  }
  static onFailed(e5, t2) {
    if (!i.isObject(e5) || !i.isFunction(e5.onFailed))
      throw t2;
    e5.onFailed(t2);
  }
};
function y(e5, t2, n2, s2) {
  return new (n2 || (n2 = Promise))(function(i2, o2) {
    function r2(e6) {
      try {
        c2(s2.next(e6));
      } catch (e7) {
        o2(e7);
      }
    }
    function a2(e6) {
      try {
        c2(s2.throw(e6));
      } catch (e7) {
        o2(e7);
      }
    }
    function c2(e6) {
      var t3;
      e6.done ? i2(e6.value) : (t3 = e6.value, t3 instanceof n2 ? t3 : new n2(function(e7) {
        e7(t3);
      })).then(r2, a2);
    }
    c2((s2 = s2.apply(e5, t2 || [])).next());
  });
}
var g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function b(e5) {
  if (e5.__esModule)
    return e5;
  var t2 = Object.defineProperty({}, "__esModule", { value: true });
  return Object.keys(e5).forEach(function(n2) {
    var s2 = Object.getOwnPropertyDescriptor(e5, n2);
    Object.defineProperty(t2, n2, s2.get ? s2 : { enumerable: true, get: function() {
      return e5[n2];
    } });
  }), t2;
}
var v = { exports: {} };
!function(e5) {
  function t2(e6) {
    if (e6)
      return function(e7) {
        for (var n2 in t2.prototype)
          e7[n2] = t2.prototype[n2];
        return e7;
      }(e6);
  }
  v.exports = t2, t2.prototype.on = t2.prototype.addEventListener = function(e6, t3) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e6] = this._callbacks["$" + e6] || []).push(t3), this;
  }, t2.prototype.once = function(e6, t3) {
    function n2() {
      this.off(e6, n2), t3.apply(this, arguments);
    }
    return n2.fn = t3, this.on(e6, n2), this;
  }, t2.prototype.off = t2.prototype.removeListener = t2.prototype.removeAllListeners = t2.prototype.removeEventListener = function(e6, t3) {
    if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
      return this._callbacks = {}, this;
    var n2, s2 = this._callbacks["$" + e6];
    if (!s2)
      return this;
    if (1 == arguments.length)
      return delete this._callbacks["$" + e6], this;
    for (var i2 = 0; i2 < s2.length; i2++)
      if ((n2 = s2[i2]) === t3 || n2.fn === t3) {
        s2.splice(i2, 1);
        break;
      }
    return this;
  }, t2.prototype.emit = function(e6) {
    this._callbacks = this._callbacks || {};
    var t3 = [].slice.call(arguments, 1), n2 = this._callbacks["$" + e6];
    if (n2)
      for (var s2 = 0, i2 = (n2 = n2.slice(0)).length; s2 < i2; ++s2)
        n2[s2].apply(this, t3);
    return this;
  }, t2.prototype.listeners = function(e6) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + e6] || [];
  }, t2.prototype.hasListeners = function(e6) {
    return !!this.listeners(e6).length;
  };
}();
var S = v.exports;
var E = { exports: {} };
var C = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
if (C) {
  N = new Uint8Array(16);
  E.exports = function() {
    return C(N), N;
  };
} else {
  w = new Array(16);
  E.exports = function() {
    for (var e5, t2 = 0; t2 < 16; t2++)
      0 == (3 & t2) && (e5 = 4294967296 * Math.random()), w[t2] = e5 >>> ((3 & t2) << 3) & 255;
    return w;
  };
}
var N;
var w;
for (k = [], I = 0; I < 256; ++I)
  k[I] = (I + 256).toString(16).substr(1);
var k;
var I;
var O;
var T;
var R = function(e5, t2) {
  var n2 = t2 || 0, s2 = k;
  return [s2[e5[n2++]], s2[e5[n2++]], s2[e5[n2++]], s2[e5[n2++]], "-", s2[e5[n2++]], s2[e5[n2++]], "-", s2[e5[n2++]], s2[e5[n2++]], "-", s2[e5[n2++]], s2[e5[n2++]], "-", s2[e5[n2++]], s2[e5[n2++]], s2[e5[n2++]], s2[e5[n2++]], s2[e5[n2++]], s2[e5[n2++]]].join("");
};
var P = E.exports;
var A = R;
var _ = 0;
var D = 0;
var x = function(e5, t2, n2) {
  var s2 = t2 && n2 || 0, i2 = t2 || [], o2 = (e5 = e5 || {}).node || O, r2 = void 0 !== e5.clockseq ? e5.clockseq : T;
  if (null == o2 || null == r2) {
    var a2 = P();
    null == o2 && (o2 = O = [1 | a2[0], a2[1], a2[2], a2[3], a2[4], a2[5]]), null == r2 && (r2 = T = 16383 & (a2[6] << 8 | a2[7]));
  }
  var c2 = void 0 !== e5.msecs ? e5.msecs : (/* @__PURE__ */ new Date()).getTime(), u2 = void 0 !== e5.nsecs ? e5.nsecs : D + 1, p2 = c2 - _ + (u2 - D) / 1e4;
  if (p2 < 0 && void 0 === e5.clockseq && (r2 = r2 + 1 & 16383), (p2 < 0 || c2 > _) && void 0 === e5.nsecs && (u2 = 0), u2 >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  _ = c2, D = u2, T = r2;
  var h2 = (1e4 * (268435455 & (c2 += 122192928e5)) + u2) % 4294967296;
  i2[s2++] = h2 >>> 24 & 255, i2[s2++] = h2 >>> 16 & 255, i2[s2++] = h2 >>> 8 & 255, i2[s2++] = 255 & h2;
  var l2 = c2 / 4294967296 * 1e4 & 268435455;
  i2[s2++] = l2 >>> 8 & 255, i2[s2++] = 255 & l2, i2[s2++] = l2 >>> 24 & 15 | 16, i2[s2++] = l2 >>> 16 & 255, i2[s2++] = r2 >>> 8 | 128, i2[s2++] = 255 & r2;
  for (var d2 = 0; d2 < 6; ++d2)
    i2[s2 + d2] = o2[d2];
  return t2 || A(i2);
};
var M = E.exports;
var B = R;
var F = function(e5, t2, n2) {
  var s2 = t2 && n2 || 0;
  "string" == typeof e5 && (t2 = "binary" === e5 ? new Array(16) : null, e5 = null);
  var i2 = (e5 = e5 || {}).random || (e5.rng || M)();
  if (i2[6] = 15 & i2[6] | 64, i2[8] = 63 & i2[8] | 128, t2)
    for (var o2 = 0; o2 < 16; ++o2)
      t2[s2 + o2] = i2[o2];
  return t2 || B(i2);
};
var U = x;
var j = F;
var G = j;
G.v1 = U, G.v4 = j;
var q = G;
var L = class {
  support() {
    return true;
  }
  getParams() {
    return this.params;
  }
  setData(e5) {
    this.active = e5.a, this.data = e5.d;
  }
  preConnect(e5) {
  }
  postConnect() {
  }
};
var W = class {
  static initModule(e5) {
    e5.support() && this.modules.set(e5.name, e5);
  }
  static getParams() {
    return y(this, void 0, void 0, function* () {
      let e5 = {};
      for (const [t2, n2] of this.modules)
        e5[t2] = (yield n2.getParams()) || null;
      return e5;
    });
  }
  static setDatas(e5) {
    Object.keys(e5).forEach((t2) => {
      this.modules.get(t2).setData(e5[t2]);
    });
  }
  static preConnect(e5) {
    this.modules.forEach((t2, n2) => {
      t2.preConnect(e5);
    });
  }
  static postConnect() {
    this.modules.forEach((e5, t2) => {
      e5.postConnect();
    });
  }
};
W.Module = L, W.modules = /* @__PURE__ */ new Map();
var V = S;
var $ = class {
  constructor() {
    this.emitter = new V();
  }
  on(e5, t2) {
    return this.emitter.on(e5, t2), this;
  }
  once(e5, t2) {
    return this.emitter.once(e5, t2), this;
  }
  off(e5, t2) {
    return this.emitter.off(e5, t2), this;
  }
  fire(e5, t2) {
    return this.emitter.emit(e5, t2), this;
  }
};
var z = class {
  constructor() {
    this.eventDriver = new $();
  }
  on(e5, t2) {
    this.eventDriver.on(e5, t2);
  }
  off(e5, t2) {
    this.eventDriver.off(e5, t2);
  }
  fire(e5, t2) {
    this.eventDriver.fire(e5, t2);
  }
};
var H = class {
  static init(e5, t2, n2, s2, i2, o2) {
    this.Socket = e5, this.N = t2, this.Member = n2, this.v = s2, this.Platform = i2, this.GModules = o2;
  }
};
var J = q;
var X = class {
  static get() {
    return J.v1().replace(/-/g, "");
  }
};
var Y;
var K;
(K = Y || (Y = {})).WRITE = "WRITE", K.READ = "READ", K.NONE = "NONE";
var Q = class {
  constructor(e5) {
    this.permission = Y.NONE, this.singleTimeout = 0, this.totalTimeout = 0, this.startTime = 0, this.complete = false, this.retried = 0, this.unique = false, this.uuid = X.get(), this.name = e5.name, this.params = e5.params, this.permission = e5.permission, this.totalTimeout = e5.totalTimeout, this.singleTimeout = e5.singleTimeout, e5.unique && (this.unique = e5.unique), this.success = (t2) => {
      this.complete || (this.end(), e5.success(t2));
    }, this.fail = (t2) => {
      this.complete || (this.end(), e5.fail(t2));
    };
  }
  start() {
    this.startTime = Date.now(), this.initAutoTimeout();
  }
  end() {
    this.complete = true, clearTimeout(this.timeoutHandler);
  }
  initAutoTimeout() {
    this.timeoutHandler = setTimeout(() => {
      this.complete || this.fail({ resultCode: 408, content: "Host unreachable or timeout" });
    }, this.totalTimeout);
  }
};
var Z = class _Z extends L {
  static init() {
    return this.module = new _Z(), this.module.name = this.GN_MODULE_NAME, this.module;
  }
  static setRegId(e5, t2) {
    if (e5) {
      this.module.regIdPromise = e5;
      let n2 = t2;
      this.module.params = { v: { npv: n2 } };
    }
  }
  preConnect(e5) {
    this.wxmpId = e5.wxmpId;
  }
  getParams() {
    return y(this, void 0, void 0, function* () {
      if (this.params = this.params || {}, this.regIdPromise)
        try {
          const e5 = new Promise((e6, t2) => {
            setTimeout(() => t2("timeout"), 1e3);
          });
          this.params.regId = yield Promise.race([this.regIdPromise, e5]);
        } catch (e5) {
          console.warn("Failed to register the Manufacturers Push service:" + JSON.stringify(e5));
        }
      return this.params.wxmpId = this.wxmpId, this.params;
    });
  }
};
Z.GN_MODULE_NAME = "GN";
var ee = class _ee {
  static init(e5) {
    this.allowNotification = true === e5;
    let t2 = Z.init();
    W.initModule(t2), this.supportAppNotification() && (this.uniappPlugin = uni.requireNativePlugin("GoEasy-Uniapp"), this.uniappPlugin ? (this.regIdPromise = this.askRegId(), this.v = this.uniappPlugin.v(), Z.setRegId(this.regIdPromise, this.v)) : console.warn("No GoEasy-Uniapp Native Plugin."), this.setClientBadge(0));
  }
  static addAssembler(e5) {
    this.payloadAssemblers.push(e5);
  }
  static assemblePayload(e5) {
    let t2 = this.payloadAssemblers.find((t3) => t3.support(e5));
    return t2 ? t2.assemble(e5) : e5;
  }
  static createLocalNotification(e5, t2, n2, s2, i2) {
    h.isBackend() && (n2.g = 1, "undefined" != typeof plus && (s2 ? (this.uniappPlugin && this.uniappPlugin.playSound(s2), plus.push.createMessage(t2, JSON.stringify(n2), { title: e5, sound: "none" })) : plus.push.createMessage(t2, JSON.stringify(n2), { title: e5 }), "+1" === i2 && this.setClientBadge(_ee.badge + 1)));
  }
  static setBadge(e5) {
    if (!Number.isInteger(e5.badge) || e5.badge < 0)
      m.onFailed(e5, "badge must be an integer greater than or equal to 0.");
    else if (_ee.supportAppNotification())
      if (this.uniappPlugin && r.currentPlatform() === o.UNI_IOS) {
        let t2 = new Q({ name: l.SET_IOS_BADGE, params: { badge: e5.badge }, unique: true, singleTimeout: d.commonRequestSingle, totalTimeout: d.commonRequestTotal, permission: Y.WRITE, success: () => {
          m.onSuccess(e5), this.setClientBadge(e5.badge);
        }, fail: (t3) => {
          m.onFailed(e5, t3.content);
        } });
        H.Socket.e(t2);
      } else
        m.onSuccess(e5), this.setClientBadge(e5.badge);
  }
  static setClientBadge(e5) {
    "vivo" !== plus.device.vendor && (_ee.badge = e5, plus.runtime.setBadgeNumber(e5));
  }
  static askRegId() {
    let e5 = null, t2 = 0;
    const n2 = () => new Promise((s2, i2) => {
      this.uniappPlugin.regId((e6) => {
        s2(e6);
      }, (s3) => {
        if (!(1e6 === s3.data.code && t2 <= 10))
          return clearTimeout(e5), i2(s3);
        e5 = setTimeout(() => {
          t2++, this.regIdPromise = n2();
        }, 3500);
      });
    });
    return n2();
  }
  static getRegIdPromise() {
    return this.regIdPromise;
  }
  static supportAppNotification() {
    const e5 = r.currentPlatform();
    return this.allowNotification && (e5 === o.UNI_ANDROID || e5 === o.UNI_IOS);
  }
  static listenPlusClickNotification() {
    plus.push.addEventListener("click", (e5) => {
      try {
        if (e5) {
          const t2 = "string" == typeof e5.payload ? JSON.parse(e5.payload) : e5.payload;
          if (this.availableIntent(t2)) {
            let e6 = this.assemblePayload(t2);
            plus.push.clear(), this.onClickNotificationCallback(e6);
          }
        }
      } catch (e6) {
      }
    });
  }
  static availableIntent(e5) {
    return e5 && Object.keys(e5).length && e5.g && 1 === parseInt(e5.g);
  }
  static getIntentData() {
    this.uniappPlugin.getIntentData((e5) => {
      if (!this.availableIntent(e5))
        return;
      let t2 = this.assemblePayload(e5);
      const n2 = r.currentPlatform();
      plus.push.clear(), n2 === o.UNI_ANDROID && this.uniappPlugin.clearAll(), this.onClickNotificationCallback(t2);
    });
  }
  static listenClick() {
    this.listenPlusClickNotification();
    const e5 = r.currentPlatform();
    this.uniappPlugin && e5 === o.UNI_ANDROID && (this.getIntentData(), h.onFrontend(() => {
      this.getIntentData();
    }));
  }
  static onClickNotification(e5) {
    if (_ee.supportAppNotification()) {
      if (!i.isFunction(e5))
        throw new Error("The arguments must be a function.");
      null === this.onClickNotificationCallback ? (this.onClickNotificationCallback = e5, this.listenClick()) : console.warn("The onClickNotification event has been listened on. Please do not listen to it more than once.");
    } else
      console.warn("The current environment doesn't support or allowNotification is false.");
  }
};
ee.uniappPlugin = null, ee.v = null, ee.regIdPromise = null, ee.onClickNotificationCallback = null, ee.payloadAssemblers = new Array();
var te = "2.13.24";
var ne;
var se;
var ie;
var oe;
var re;
var ae;
function ce(e5) {
  if (null === e5 || "object" != typeof e5 || "isActiveClone" in e5)
    return e5;
  let t2 = e5 instanceof Array ? [] : {};
  for (let n2 in e5)
    "object" == typeof e5[n2] ? t2[n2] = ce(e5[n2]) : t2[n2] = e5[n2];
  return t2;
}
function ue(e5) {
  return { lang: (e5 == null ? void 0 : e5.lang) ?? (ie == null ? void 0 : ie.lang), message: e5 == null ? void 0 : e5.message, abortEarly: (e5 == null ? void 0 : e5.abortEarly) ?? (ie == null ? void 0 : ie.abortEarly), abortPipeEarly: (e5 == null ? void 0 : e5.abortPipeEarly) ?? (ie == null ? void 0 : ie.abortPipeEarly) };
}
function pe(e5) {
  var _a, _b;
  const t2 = typeof e5;
  return "string" === t2 ? `"${e5}"` : "number" === t2 || "bigint" === t2 || "boolean" === t2 ? `${e5}` : "object" === t2 || "function" === t2 ? (e5 && ((_b = (_a = Object.getPrototypeOf(e5)) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name)) ?? "null" : t2;
}
function he(e5, t2, n2, s2, i2) {
  var _a;
  const o2 = i2 && "input" in i2 ? i2.input : n2.value, r2 = (i2 == null ? void 0 : i2.expected) ?? e5.expects ?? null, a2 = (i2 == null ? void 0 : i2.received) ?? pe(o2), c2 = { kind: e5.kind, type: e5.type, input: o2, expected: r2, received: a2, message: `Invalid ${t2}: ${r2 ? `Expected ${r2} but r` : "R"}eceived ${a2}`, requirement: e5.requirement, path: i2 == null ? void 0 : i2.path, issues: i2 == null ? void 0 : i2.issues, lang: s2.lang, abortEarly: s2.abortEarly, abortPipeEarly: s2.abortPipeEarly }, u2 = "schema" === e5.kind, p2 = (i2 == null ? void 0 : i2.message) ?? e5.message ?? (h2 = e5.reference, l2 = c2.lang, (_a = ae == null ? void 0 : ae.get(h2)) == null ? void 0 : _a.get(l2)) ?? (u2 ? function(e6) {
    return re == null ? void 0 : re.get(e6);
  }(c2.lang) : null) ?? s2.message ?? function(e6) {
    return oe == null ? void 0 : oe.get(e6);
  }(c2.lang);
  var h2, l2;
  void 0 !== p2 && (c2.message = "function" == typeof p2 ? p2(c2) : p2), u2 && (n2.typed = false), n2.issues ? n2.issues.push(c2) : n2.issues = [c2];
}
function le(e5) {
  return { version: 1, vendor: "valibot", validate: (t2) => e5["~run"]({ value: t2 }, ue()) };
}
function de(e5, t2) {
  const n2 = [...new Set(e5)];
  return n2.length > 1 ? `(${n2.join(` ${t2} `)})` : n2[0] ?? "never";
}
!function(e5) {
  e5.PRIVATE = "private", e5.GROUP = "group", e5.SYSTEM = "system", e5.CS = "cs";
}(ne || (ne = {})), function(e5) {
  e5.NEW = "new", e5.SENDING = "sending", e5.SUCCESS = "success", e5.FAIL = "fail";
}(se || (se = {}));
var fe;
var me = class extends Error {
  constructor(e5) {
    super(e5[0].message), this.name = "ValiError", this.issues = e5;
  }
};
function ye(e5, t2) {
  return { kind: "validation", type: "max_length", reference: ye, async: false, expects: `<=${e5}`, requirement: e5, message: t2, "~run"(e6, t3) {
    return e6.typed && e6.value.length > this.requirement && he(this, "length", e6, t3, { received: `${e6.value.length}` }), e6;
  } };
}
function ge(e5) {
  return { kind: "validation", type: "non_empty", reference: ge, async: false, expects: "!0", message: e5, "~run"(e6, t2) {
    return e6.typed && 0 === e6.value.length && he(this, "length", e6, t2, { received: "0" }), e6;
  } };
}
function be(e5, t2, n2) {
  return { kind: "validation", type: "partial_check", reference: be, async: false, expects: null, paths: e5, requirement: t2, message: n2, "~run"(t3, n3) {
    return !t3.typed && !function(e6, t4) {
      var _a;
      if (e6.issues)
        for (const n4 of t4)
          for (const t5 of e6.issues) {
            let e7 = false;
            const s2 = Math.min(n4.length, ((_a = t5.path) == null ? void 0 : _a.length) ?? 0);
            for (let i2 = 0; i2 < s2; i2++)
              if (n4[i2] !== t5.path[i2].key && ("$" !== n4[i2] || "array" !== t5.path[i2].type)) {
                e7 = true;
                break;
              }
            if (!e7)
              return false;
          }
      return true;
    }(t3, e5) || this.requirement(t3.value) || he(this, "input", t3, n3), t3;
  } };
}
function ve(e5, t2, n2) {
  return "function" == typeof e5.fallback ? e5.fallback(t2, n2) : e5.fallback;
}
function Se(e5, t2) {
  return { ...e5, "~run"(n2, s2) {
    const i2 = n2.issues && [...n2.issues];
    if ((n2 = e5["~run"](n2, s2)).issues) {
      for (const e6 of n2.issues)
        if (!(i2 == null ? void 0 : i2.includes(e6))) {
          let s3 = n2.value;
          for (const n3 of t2) {
            const t3 = s3[n3], i3 = { type: "unknown", origin: "value", input: s3, key: n3, value: t3 };
            if (e6.path ? e6.path.push(i3) : e6.path = [i3], !t3)
              break;
            s3 = t3;
          }
        }
    }
    return n2;
  } };
}
function Ee(e5, t2, n2) {
  return "function" == typeof e5.default ? e5.default(t2, n2) : e5.default;
}
function Ce() {
  return { kind: "schema", type: "any", reference: Ce, expects: "any", async: false, get "~standard"() {
    return le(this);
  }, "~run": (e5) => (e5.typed = true, e5) };
}
function Ne(e5, t2) {
  return { kind: "schema", type: "array", reference: Ne, expects: "Array", async: false, item: e5, message: t2, get "~standard"() {
    return le(this);
  }, "~run"(e6, t3) {
    var _a;
    const n2 = e6.value;
    if (Array.isArray(n2)) {
      e6.typed = true, e6.value = [];
      for (let s2 = 0; s2 < n2.length; s2++) {
        const i2 = n2[s2], o2 = this.item["~run"]({ value: i2 }, t3);
        if (o2.issues) {
          const r2 = { type: "array", origin: "value", input: n2, key: s2, value: i2 };
          for (const t4 of o2.issues)
            t4.path ? t4.path.unshift(r2) : t4.path = [r2], (_a = e6.issues) == null ? void 0 : _a.push(t4);
          if (e6.issues || (e6.issues = o2.issues), t3.abortEarly) {
            e6.typed = false;
            break;
          }
        }
        o2.typed || (e6.typed = false), e6.value.push(o2.value);
      }
    } else
      he(this, "type", e6, t3);
    return e6;
  } };
}
function we(e5) {
  return { kind: "schema", type: "boolean", reference: we, expects: "boolean", async: false, message: e5, get "~standard"() {
    return le(this);
  }, "~run"(e6, t2) {
    return "boolean" == typeof e6.value ? e6.typed = true : he(this, "type", e6, t2), e6;
  } };
}
function ke(e5, t2) {
  return { kind: "schema", type: "custom", reference: ke, expects: "unknown", async: false, check: e5, message: t2, get "~standard"() {
    return le(this);
  }, "~run"(e6, t3) {
    return this.check(e6.value) ? e6.typed = true : he(this, "type", e6, t3), e6;
  } };
}
function Ie(e5) {
  return { kind: "schema", type: "function", reference: Ie, expects: "Function", async: false, message: e5, get "~standard"() {
    return le(this);
  }, "~run"(e6, t2) {
    return "function" == typeof e6.value ? e6.typed = true : he(this, "type", e6, t2), e6;
  } };
}
function Oe(e5, t2) {
  return { kind: "schema", type: "instance", reference: Oe, expects: e5.name, async: false, class: e5, message: t2, get "~standard"() {
    return le(this);
  }, "~run"(e6, t3) {
    return e6.value instanceof this.class ? e6.typed = true : he(this, "type", e6, t3), e6;
  } };
}
function Te(e5, t2) {
  return { kind: "schema", type: "literal", reference: Te, expects: pe(e5), async: false, literal: e5, message: t2, get "~standard"() {
    return le(this);
  }, "~run"(e6, t3) {
    return e6.value === this.literal ? e6.typed = true : he(this, "type", e6, t3), e6;
  } };
}
function Re(e5) {
  return { kind: "schema", type: "number", reference: Re, expects: "number", async: false, message: e5, get "~standard"() {
    return le(this);
  }, "~run"(e6, t2) {
    return "number" != typeof e6.value || isNaN(e6.value) ? he(this, "type", e6, t2) : e6.typed = true, e6;
  } };
}
function Pe(e5, t2) {
  return { kind: "schema", type: "object", reference: Pe, expects: "Object", async: false, entries: e5, message: t2, get "~standard"() {
    return le(this);
  }, "~run"(e6, t3) {
    var _a;
    const n2 = e6.value;
    if (n2 && "object" == typeof n2) {
      e6.typed = true, e6.value = {};
      for (const s2 in this.entries) {
        const i2 = this.entries[s2];
        if (s2 in n2 || ("exact_optional" === i2.type || "optional" === i2.type || "nullish" === i2.type) && void 0 !== i2.default) {
          const o2 = s2 in n2 ? n2[s2] : Ee(i2), r2 = i2["~run"]({ value: o2 }, t3);
          if (r2.issues) {
            const i3 = { type: "object", origin: "value", input: n2, key: s2, value: o2 };
            for (const t4 of r2.issues)
              t4.path ? t4.path.unshift(i3) : t4.path = [i3], (_a = e6.issues) == null ? void 0 : _a.push(t4);
            if (e6.issues || (e6.issues = r2.issues), t3.abortEarly) {
              e6.typed = false;
              break;
            }
          }
          r2.typed || (e6.typed = false), e6.value[s2] = r2.value;
        } else if (void 0 !== i2.fallback)
          e6.value[s2] = ve(i2);
        else if ("exact_optional" !== i2.type && "optional" !== i2.type && "nullish" !== i2.type && (he(this, "key", e6, t3, { input: void 0, expected: `"${s2}"`, path: [{ type: "object", origin: "key", input: n2, key: s2, value: n2[s2] }] }), t3.abortEarly))
          break;
      }
    } else
      he(this, "type", e6, t3);
    return e6;
  } };
}
function Ae(e5, t2) {
  return { kind: "schema", type: "optional", reference: Ae, expects: `(${e5.expects} | undefined)`, async: false, wrapped: e5, default: t2, get "~standard"() {
    return le(this);
  }, "~run"(e6, t3) {
    return void 0 === e6.value && (void 0 !== this.default && (e6.value = Ee(this, e6, t3)), void 0 === e6.value) ? (e6.typed = true, e6) : this.wrapped["~run"](e6, t3);
  } };
}
function _e(e5, t2) {
  return { kind: "schema", type: "picklist", reference: _e, expects: de(e5.map(pe), "|"), async: false, options: e5, message: t2, get "~standard"() {
    return le(this);
  }, "~run"(e6, t3) {
    return this.options.includes(e6.value) ? e6.typed = true : he(this, "type", e6, t3), e6;
  } };
}
function De(e5) {
  return { kind: "schema", type: "string", reference: De, expects: "string", async: false, message: e5, get "~standard"() {
    return le(this);
  }, "~run"(e6, t2) {
    return "string" == typeof e6.value ? e6.typed = true : he(this, "type", e6, t2), e6;
  } };
}
function xe(e5) {
  let t2;
  if (e5)
    for (const n2 of e5)
      t2 ? t2.push(...n2.issues) : t2 = n2.issues;
  return t2;
}
function Me(e5, t2) {
  return { kind: "schema", type: "union", reference: Me, expects: de(e5.map((e6) => e6.expects), "|"), async: false, options: e5, message: t2, get "~standard"() {
    return le(this);
  }, "~run"(e6, t3) {
    let n2, s2, i2;
    for (const o2 of this.options) {
      const r2 = o2["~run"]({ value: e6.value }, t3);
      if (r2.typed) {
        if (!r2.issues) {
          n2 = r2;
          break;
        }
        s2 ? s2.push(r2) : s2 = [r2];
      } else
        i2 ? i2.push(r2) : i2 = [r2];
    }
    if (n2)
      return n2;
    if (s2) {
      if (1 === s2.length)
        return s2[0];
      he(this, "type", e6, t3, { issues: xe(s2) }), e6.typed = true;
    } else {
      if (1 === (i2 == null ? void 0 : i2.length))
        return i2[0];
      he(this, "type", e6, t3, { issues: xe(i2) });
    }
    return e6;
  } };
}
function Be(...e5) {
  return { ...e5[0], pipe: e5, get "~standard"() {
    return le(this);
  }, "~run"(t2, n2) {
    for (const s2 of e5)
      if ("metadata" !== s2.kind) {
        if (t2.issues && ("schema" === s2.kind || "transformation" === s2.kind)) {
          t2.typed = false;
          break;
        }
        t2.issues && (n2.abortEarly || n2.abortPipeEarly) || (t2 = s2["~run"](t2, n2));
      }
    return t2;
  } };
}
!function(e5) {
  e5.TEXT = "text", e5.IMAGE = "image", e5.FILE = "file", e5.VIDEO = "video", e5.AUDIO = "audio";
}(fe || (fe = {}));
var Fe = class _Fe {
  constructor(e5, t2, n2) {
    this.scene = e5, this.id = t2, i.isDef(n2) && (this.teamId = n2);
  }
  toString() {
    return ne.PRIVATE === this.scene || ne.GROUP === this.scene ? this.scene + "#" + this.id : this.scene + "#" + this.id + "#" + this.teamId;
  }
  customerId() {
    if (ne.CS === this.scene)
      return this.id === this.teamId ? H.Socket.user().id : this.id;
  }
  static byScene(e5, t2, n2) {
    return new _Fe(e5, t2, n2);
  }
  static byIMMessage(e5) {
    let t2, n2, s2 = e5.scene();
    if (s2 === ne.PRIVATE) {
      let t3 = e5.senderId, s3 = e5.targetId();
      n2 = H.Socket.user().id === t3 ? s3 : t3;
    } else if (s2 === ne.GROUP)
      n2 = e5.targetId();
    else {
      if (s2 !== ne.CS)
        throw { code: 400, content: `scene ${s2} not exists` };
      n2 = e5.targetId(), t2 = e5.teamId;
    }
    return new _Fe(s2, n2, t2);
  }
  static byMessageReadRemoteEvent(e5) {
    let t2, n2 = e5.scene, s2 = e5.targetId, i2 = e5.markerId, o2 = e5.teamId;
    return n2 === ne.PRIVATE ? t2 = H.Socket.user().id === i2 ? s2 : i2 : n2 === ne.GROUP ? t2 = s2 : n2 === ne.CS && (t2 = s2 === o2 ? i2 === H.Socket.user().id ? o2 : i2 : i2 === H.Socket.user().id ? s2 : o2), new _Fe(n2, t2, o2);
  }
  static byIMMessageDeletedEvent(e5) {
    let t2 = e5.scene, n2 = e5.deleterId;
    if (t2 === ne.PRIVATE) {
      let s2 = H.Socket.user().id === n2 ? e5.targetId : n2;
      return new _Fe(t2, s2);
    }
    if (t2 === ne.GROUP)
      return new _Fe(t2, e5.targetId);
  }
  static byConversationDTO(e5) {
    let t2 = e5.lastMessage;
    return this.byIMMessage(t2);
  }
  static byConversationId(e5, t2) {
    let n2;
    if (e5 === ne.PRIVATE) {
      let e6 = t2.split(":", 2);
      n2 = e6[0] === H.Socket.user().id ? e6[1] : e6[0];
    } else
      n2 = t2;
    return new _Fe(e5, n2);
  }
};
var Ue = class {
  clearUseLessAttribute() {
    delete this.buildOptions;
  }
  isOtherSent() {
    return this.senderId !== H.Socket.user().id;
  }
};
var je = class extends Ue {
  constructor() {
    super(...arguments), this.read = false;
  }
  scene() {
    return ne.PRIVATE;
  }
  targetId() {
    return this.receiverId;
  }
};
var Ge = class extends Ue {
  scene() {
    return ne.GROUP;
  }
  targetId() {
    return this.groupId;
  }
};
var qe = { maxString: (e5) => Be(De(), ge(), ye(e5)), nonEmptyString: Be(De(), ge()), object: ke((e5) => "object" == typeof e5 && null !== e5 && !Array.isArray(e5), "must be an object."), userId: Be(De(), ge(), ye(60), ke((e5) => {
  if (H.Socket.user().id === e5)
    throw new Error("id can not be the same as your id");
  return e5;
})), sceneType: Be(De(), _e([ne.PRIVATE, ne.GROUP, ne.CS])) };
var Le = { onSuccess: Ae(Ie()), onFailed: Ae(Ie()) };
var We = Pe({ appkey: qe.nonEmptyString, host: qe.nonEmptyString, modules: Ne(qe.nonEmptyString), allowNotification: Ae(we()), forceTLS: Ae(we()), supportOldBrowser: Ae(we()), reactNativeOptions: Ae(Pe({ platform: Ce(), asyncStorage: Ce() })), customProvider: Ae(Pe({ loadConversations: Ie(), loadHistory: Ie() })) });
var Ve = Be(Pe(Object.assign({ id: Ae(qe.nonEmptyString), data: Ae(qe.object), otp: Ae(qe.nonEmptyString), wxmpId: Ae(Pe({ appid: qe.nonEmptyString, openid: qe.nonEmptyString })), onProgress: Ae(Ie()) }, Le)), Se(be([["id"], ["data"]], (e5) => !W.modules.get("GIM") || e5.id && e5.data, "id and data are required for IM module"), ["data"]));
var $e = Pe({ id: qe.userId, data: qe.object });
var ze = Be(Me([Pe({ type: qe.sceneType, id: qe.userId, data: qe.object }), Pe({ type: qe.sceneType, receivers: Ne($e) })]), ke((e5) => {
  if (!e5.receivers)
    return true;
  const t2 = e5.receivers.map((e6) => e6.id);
  if (Array.from(new Set(t2)).length < t2.length)
    throw new Error("receivers cannot have duplicate ids");
  if (e5.type === ne.PRIVATE && e5.receivers.length > 200)
    throw new Error("private message cannot have more than 200 receivers");
  if (e5.type === ne.GROUP && e5.receivers.length > 3)
    throw new Error("group message cannot have more than 3 receivers");
  return true;
}));
var He = Ae(Pe({ template_id: De(), url: Ae(De()), miniprogram: Ae(Pe({ appid: De(), pagepath: De() })), data: qe.object }));
var Je = Be(Pe({ channel_id: Ae(De()), category: Ae(De()) }), ke((e5) => {
  if (!e5.channel_id && !e5.category)
    throw { code: 400, content: "Must provide at least one of channel_id or category." };
  return true;
}));
var Xe = Ae(Pe({ title: qe.maxString(32), body: qe.maxString(50), sound: Ae(De()), badge: Ae(De()), vendorOptions: Ae(Pe({ huawei: Ae(Pe({ category: De() })), xiaomi: Ae(Pe({ channel_id: De() })), oppo: Ae(Je), vivo: Ae(Pe({ classification: Re(), category: De() })) })) }));
var Ye = { image: ["gif", "jpg", "png", "jpeg"], video: ["avi", "mov", "rmvb", "rm", "flv", "mp4", "3gp", "quicktime"], audio: ["mp3", "ogg", "wav", "wma", "ape", "acc", "mpeg"] };
var Ke = (e5 = 30, t2) => Be(Ce(), ge(), ke((n2) => {
  var s2;
  if (n2.size && n2.size > 1024 * e5 * 1024)
    throw new Error(`File size must be <= ${e5}MB.`);
  if (t2) {
    const e6 = n2.type || n2.tempFile && n2.tempFile.type;
    if (!e6)
      return true;
    const i2 = null === (s2 = e6.split("/")[1]) || void 0 === s2 ? void 0 : s2.toLowerCase();
    if (i2 && !Ye[t2].includes(i2))
      throw new Error(`Only ${Ye[t2].join(",")} is supported for ${t2}.`);
  }
  return true;
}));
function Qe(e5) {
  return Pe(Object.assign(Object.assign(Object.assign({}, e5), { to: ze, notification: Xe, wxmpTemplateMsg: He, beforeSend: Ae(Ie()), onProgress: Ae(Ie()) }), Le));
}
!/* @__PURE__ */ function e2(t2, n2, s2) {
  return { kind: "schema", type: "variant", reference: e2, expects: "Object", async: false, key: t2, options: n2, message: s2, get "~standard"() {
    return le(this);
  }, "~run"(e5, t3) {
    const n3 = e5.value;
    if (n3 && "object" == typeof n3) {
      let s3, i2 = 0, o2 = this.key, r2 = [];
      const a2 = (e6, c2) => {
        for (const u2 of e6.options) {
          if ("variant" === u2.type)
            a2(u2, new Set(c2).add(u2.key));
          else {
            let e7 = true, a3 = 0;
            for (const s4 of c2) {
              const c3 = u2.entries[s4];
              if (s4 in n3 ? c3["~run"]({ typed: false, value: n3[s4] }, t3).issues : "exact_optional" !== c3.type && "optional" !== c3.type && "nullish" !== c3.type) {
                e7 = false, o2 !== s4 && (i2 < a3 || i2 === a3 && s4 in n3 && !(o2 in n3)) && (i2 = a3, o2 = s4, r2 = []), o2 === s4 && r2.push(u2.entries[s4].expects);
                break;
              }
              a3++;
            }
            if (e7) {
              const e8 = u2["~run"]({ value: n3 }, t3);
              (!s3 || !s3.typed && e8.typed) && (s3 = e8);
            }
          }
          if (s3 && !s3.issues)
            break;
        }
      };
      if (a2(this, /* @__PURE__ */ new Set([this.key])), s3)
        return s3;
      he(this, "type", e5, t3, { input: n3[o2], expected: de(r2, "|"), path: [{ type: "object", origin: "value", input: n3, key: o2, value: n3[o2] }] });
    } else
      he(this, "type", e5, t3);
    return e5;
  } };
}("type", [Qe({ type: Te(fe.TEXT), text: qe.maxString(2500) }), Qe({ type: Te(fe.IMAGE), file: Ke(30, "image") }), Qe({ type: Te(fe.VIDEO), file: Ke(30, "video") }), Qe({ type: Te(fe.AUDIO), file: Ke(30, "audio") }), Qe({ type: Te(fe.FILE), file: Ke(500) }), Qe({ type: De(), payload: Me([qe.maxString(2500), qe.object]) })]), Pe(Object.assign({ messages: Be(Ne(Me([Oe(je), Oe(Ge)])), ge(), ye(20), ke((e5) => {
  const t2 = Fe.byIMMessage(e5[0]);
  for (let n2 = 1; n2 < e5.length; n2++) {
    const s2 = Fe.byIMMessage(e5[n2]);
    if (s2.scene !== t2.scene || s2.id !== t2.id)
      throw new Error("each message must be from the same friend or group");
    const i2 = e5[n2];
    if (i2.status !== se.SUCCESS)
      throw new Error(`message[${n2}] is '${i2.status}' and cannot be recalled`);
    if (i2.recalled)
      throw new Error(`message[${n2}] has been recalled`);
    if (i2.senderId !== H.Socket.user().id)
      throw new Error("it is not allowed to recall messages sent by others");
  }
  return true;
})) }, Le)), Pe(Object.assign({ messages: Be(Ne(Me([Oe(je), Oe(Ge), Oe(class extends Ue {
  constructor() {
    super(...arguments), this.accepted = false;
  }
  scene() {
    return ne.CS;
  }
  targetId() {
    return H.Socket.user().id === this.customerId() ? this.teamId : this.customerId();
  }
  sendByCustomer() {
    return this.to === this.teamId;
  }
  customerId() {
    return this.sendByCustomer() ? this.senderId : this.to;
  }
  isOtherSent() {
    return H.Socket.user().id === this.customerId() ? this.senderId !== H.Socket.user().id : this.senderId === this.customerId();
  }
})])), ge(), ye(20), ke((e5) => {
  const t2 = Fe.byIMMessage(e5[0]);
  for (let n2 = 1; n2 < e5.length; n2++) {
    const s2 = Fe.byIMMessage(e5[n2]);
    if (s2.scene !== t2.scene || s2.id !== t2.id)
      throw new Error("each message must be from the same friend or group");
    const i2 = e5[n2];
    if (i2.status === se.SENDING)
      throw new Error(`message[${n2}] is '${i2.status}' and cannot be deleted`);
  }
  return true;
})) }, Le));
var Ze = (e5) => Be(De(), ge(), ke((t2) => {
  if (!t2)
    throw new Error(`${e5} is required.`);
  return t2;
}));
Ze("customId"), Ze("id");
Me([Pe({ userId: qe.nonEmptyString }), Pe({ groupId: qe.nonEmptyString }), Pe({ type: qe.sceneType, id: qe.nonEmptyString })]);
var et = Be(Me([De(), Re()]), ke((e5) => {
  if (!e5 && 0 !== e5)
    throw new Error("param require string or number.");
  return true;
}));
var nt = (e5 = 100) => Be(Ne(et), ge(), ye(e5), ke((e6) => {
  if (e6.some((e7) => 0 === e7.length))
    throw new Error("array has empty item.");
  if (Array.from(new Set(e6)).length < e6.length)
    throw new Error("Duplicate element found in array");
  return true;
}));
var st = Pe(Object.assign({ channel: et, message: qe.maxString(2500), qos: Ae(_e([-1, 0, 1])), notification: Xe, wxmpTemplateMsg: He, accessToken: Ae(De()) }, Le));
var it = Be(Pe({ channel: Ae(et), channels: Ae(nt(100)), presence: Ae(Pe({ enable: we() })), accessToken: Ae(De()), onMessage: Ie() }), Se(be([["channel"], ["channels"]], (e5) => !e5.channel != !e5.channels, "Must provide either channel or channels, but not both or neither"), ["channels"]), Se(be([["channel"], ["presence"]], (e5) => {
  var t2;
  return !(null === (t2 = e5.presence) || void 0 === t2 ? void 0 : t2.enable) || !!H.Socket.user().id;
}, "Subscription failed. If presence is enable, the id must be specified when calling the connect method"), ["presence"]));
Pe({ userIds: nt(100) }), Pe({ groupIds: nt(100) });
var ot = Pe({ channel: et });
var rt = Pe({ channel: et, membersLimit: Ae(Be(Re(), function e3(t2, n2) {
  return { kind: "validation", type: "max_value", reference: e3, async: false, expects: `<=${t2 instanceof Date ? t2.toJSON() : pe(t2)}`, requirement: t2, message: n2, "~run"(e5, t3) {
    return !e5.typed || e5.value <= this.requirement || he(this, "value", e5, t3, { received: e5.value instanceof Date ? e5.value.toJSON() : pe(e5.value) }), e5;
  } };
}(100))), onPresence: Ie() });
function at(e5, t2) {
  var n2;
  try {
    return function(e6, t3, n3) {
      const s2 = e6["~run"]({ value: t3 }, ue(n3));
      if (s2.issues)
        throw new me(s2.issues);
      return s2.value;
    }(e5, t2);
  } catch (e6) {
    if (e6 instanceof me) {
      const t3 = e6.issues[0], s2 = null === (n2 = t3.path) || void 0 === n2 ? void 0 : n2.map((e7) => e7.key).filter(Boolean), i2 = (null == s2 ? void 0 : s2.join(".")) || "value";
      throw { code: 400, content: { string: `TypeError: ${i2} must be a string.`, number: `TypeError: ${i2} must be a number.`, non_empty: `${i2} cannot be empty.`, max_length: `${i2} over max length.`, picklist: `${i2} has invalid value.` }[t3.type] || `${i2}: ${t3.message}` };
    }
    throw e6;
  }
}
var ct = (e5) => at(ot, e5);
var ut = class {
  publish(e5) {
    at(st, e5), e5.channel = e5.channel.toString();
    let t2 = { channel: e5.channel, content: e5.message, nt: e5.notification, at: e5.accessToken, guid: X.get(), q: e5.qos };
    e5.wxmpTemplateMsg && (t2.wxmpTemplateMsg = ce(e5.wxmpTemplateMsg), t2.wxmpTemplateMsg.data = JSON.stringify(t2.wxmpTemplateMsg.data));
    let n2 = new Q({ name: l.publish, params: t2, unique: true, singleTimeout: d.commonRequestSingle, totalTimeout: d.commonRequestTotal, permission: Y.WRITE, success: function(t3) {
      m.onSuccess(e5, { code: 200, content: "ok" });
    }, fail: function(t3) {
      m.onFailed(e5, { code: t3.resultCode, content: t3.content });
    } });
    H.Socket.e(n2);
  }
};
var pt = class {
  constructor(e5) {
    if (this.options = e5, this.channels = e5.channels || [e5.channel], !i.isEmpty(e5.channel)) {
      let t2 = e5.channel.toString();
      this.channels = [t2];
    }
    i.isEmpty(e5.channels) || (this.channels = e5.channels.toString().split(","));
  }
};
var ht;
var lt;
!function(e5) {
  e5.message = "message", e5.imMessage = "imMessage", e5.IM_MSG_SYNC = "im:msg:sync", e5.IM_MSG_NEW = "im:msg:new", e5.userPresence = "userPresence", e5.groupPresence = "groupPresence", e5.PS_PRESENCE_EVENT = "PS_PRESENCE_EVENT", e5.IM_MSG_READ = "IM_MSG_READ", e5.IM_MSG_DELETED = "IM_MSG_DELETED", e5.IM_MSG_RECALLED = "IM_MSG_RECALLED", e5.CS_ONLINE_CHANGED = "CS_ONLINE_CHANGED";
}(ht || (ht = {})), function(e5) {
  e5.CONNECTED = "CONNECTED", e5.RECONNECTED = "RECONNECTED", e5.DISCONNECTED = "DISCONNECTED", e5.LOST = "LOST", e5.EXPIRED_RECONNECTED = "EXPIRED_RECONNECTED", e5.NEW_MESSAGE = "NEW_MESSAGE", e5.CONNECTING = "CONNECTING";
}(lt || (lt = {}));
var dt = class {
  constructor() {
    this.subscriptions = [], H.Socket.onMessage(ht.message, this.onNewMessage.bind(this)), H.Socket.on(lt.EXPIRED_RECONNECTED, this.expiredResubscribe.bind(this)), H.Socket.on(lt.RECONNECTED, this.resubscribePresenceChannel.bind(this));
  }
  expiredResubscribe() {
    this.subscriptions.forEach((e5) => {
      this.doSubscribe(e5, false);
    });
  }
  resubscribePresenceChannel() {
    this.subscriptions.forEach((e5) => {
      let t2 = e5.options;
      t2.presence && t2.presence.enable && this.doSubscribe(e5, true);
    });
  }
  onNewMessage(e5) {
    if (e5.n.indexOf("_presence") > -1)
      return;
    e5.a && H.Socket.sendAck("ack", { i: e5.i, c: e5.n });
    let t2 = { time: e5.t, channel: e5.n, content: e5.c };
    this.createNotification(e5);
    let n2 = this.findSubscriptionByChannel(t2.channel);
    null == n2 || n2.options.onMessage(t2);
  }
  createNotification(e5) {
    const t2 = H.N.supportAppNotification();
    if (!i.isObject(e5.nt) || !t2)
      return;
    const n2 = { ch: e5.n, ctt: e5.c };
    H.N.createLocalNotification(e5.nt.t, e5.nt.c, n2, e5.nt.sound, e5.nt.badge);
  }
  subscribe(e5) {
    at(it, e5);
    let t2 = new pt(e5);
    this.doSubscribe(t2, false).then(() => {
      this.subscriptions.push(t2), m.onSuccess(e5, { code: 200, content: "ok" });
    }).catch((t3) => {
      m.onFailed(e5, { code: t3.resultCode, content: t3.content });
    });
  }
  doSubscribe(e5, t2) {
    let n2 = e5.options;
    return new Promise((s2, i2) => {
      let o2 = new Q({ name: l.subscribe, permission: Y.READ, singleTimeout: d.commonRequestSingle, totalTimeout: d.commonRequestTotal, params: { channels: e5.channels, accessToken: n2.accessToken, presence: n2.presence, resubscribe: t2 }, success: () => {
        s2();
      }, fail: (e6) => {
        i2(e6);
      } });
      H.Socket.e(o2);
    });
  }
  unsubscribe(e5) {
    ct(e5), e5.channel = e5.channel.toString();
    const t2 = this.findSubscriptionByChannel(e5.channel);
    if (!t2)
      return void e5.onFailed({ code: 400, content: "channel[" + e5.channel + "] is not subscribed" });
    let n2 = new Q({ name: l.unsubscribe, params: { channel: e5.channel, presence: t2.options.presence }, permission: Y.READ, singleTimeout: d.commonRequestSingle, totalTimeout: d.commonRequestTotal, success: () => {
      e5.onSuccess({ code: 200, content: "ok" }), this.removeChannel(e5.channel);
    }, fail: function(t3) {
      e5.onFailed({ code: t3.resultCode, content: t3.content });
    } });
    H.Socket.e(n2);
  }
  removeChannel(e5) {
    for (let t2 = this.subscriptions.length - 1; t2 >= 0; t2--) {
      const n2 = this.subscriptions[t2].channels, s2 = n2.indexOf(e5);
      if (s2 > -1) {
        n2.splice(s2, 1), 0 === n2.length && this.subscriptions.splice(t2, 1);
        break;
      }
    }
  }
  findSubscriptionByChannel(e5) {
    let t2 = false, n2 = null;
    for (let s2 = this.subscriptions.length - 1; s2 >= 0; s2--) {
      let i2 = this.subscriptions[s2].channels;
      for (let o2 = 0; o2 < i2.length; o2++)
        if (i2[o2] == e5) {
          t2 = true, n2 = this.subscriptions[s2];
          break;
        }
      if (t2)
        break;
    }
    return n2;
  }
};
var ft = class {
  get(e5) {
    ct(e5), e5.channel = e5.channel.toString();
    let t2 = new Q({ name: l.historyMessages, permission: Y.READ, params: e5, singleTimeout: d.commonQuerySingle, totalTimeout: d.commonQueryTotal, success: (t3) => {
      m.onSuccess(e5, { code: t3.resultCode || t3.code || 200, content: t3.content });
    }, fail: (t3) => {
      m.onFailed(e5, { code: t3.resultCode || t3.code, content: t3.content });
    } });
    H.Socket.e(t2);
  }
};
var mt = class {
  constructor() {
    this.channelPresenceMap = /* @__PURE__ */ new Map(), this.onPresenceEvent = (e5) => {
      let t2 = this.channelPresenceMap.get(e5.channel);
      null == t2 || t2.onPresence(e5);
    }, this.expireAllChannelPresences = () => {
      this.channelPresenceMap.forEach((e5, t2) => {
        e5.expire();
      });
    }, this.resubscribe = () => {
      this.channelPresenceMap.forEach((e5, t2) => {
        e5.subscribed() && e5.doSubscribe();
      });
    }, H.Socket.on(lt.LOST, this.expireAllChannelPresences), H.Socket.on(lt.RECONNECTED, this.resubscribe), H.Socket.onMessage(ht.PS_PRESENCE_EVENT, this.onPresenceEvent);
  }
  hereNow(e5) {
    ct(e5);
    let t2, n2 = this.channelPresenceMap.get(e5.channel.toString());
    n2 && n2.queryPromise ? (e5.limit && e5.limit > n2.membersLimit && n2.doQuery(e5.limit), t2 = n2.queryPromise) : t2 = gt(e5.channel, e5.limit), t2.then((t3) => {
      e5.onSuccess(t3);
    }).catch((t3) => {
      e5.onFailed(t3);
    });
  }
  subscribe(e5) {
    at(rt, e5);
    let t2 = e5.channel.toString(), n2 = this.channelPresenceMap.get(t2);
    n2 || (n2 = new yt(t2), this.channelPresenceMap.set(t2, n2)), n2.subscribe(e5);
  }
  unsubscribe(e5) {
    ct(e5);
    let t2 = e5.channel.toString();
    if (this.channelPresenceMap.get(t2)) {
      let n2 = new Q({ name: l.PUBSUB_PRESENCE_UNSUBSCRIBE, permission: Y.READ, singleTimeout: d.commonRequestSingle, totalTimeout: d.commonRequestTotal, params: { channel: t2 }, success: (n3) => {
        this.channelPresenceMap.delete(t2), e5.onSuccess();
      }, fail: (t3) => {
        e5.onFailed(t3);
      } });
      H.Socket.e(n2);
    } else
      e5.onSuccess();
  }
};
var yt = class {
  constructor(e5) {
    this.membersLimit = 10, this.queried = false, this.channel = e5;
  }
  onPresence(e5) {
    return y(this, void 0, void 0, function* () {
      this.queried ? this.update(e5) : yield this.queryPromise, this.on({ channel: this.channel, action: e5.action, member: e5.member, time: e5.time, amount: this.amount, members: this.membersByLimit() });
    });
  }
  membersByLimit() {
    return this.members.slice(0, this.membersLimit);
  }
  subscribe(e5) {
    return y(this, void 0, void 0, function* () {
      if (e5.membersLimit && (this.membersLimit = Math.min(e5.membersLimit, 300)), !this.subscribed())
        try {
          yield this.doSubscribe();
        } catch (t2) {
          return void e5.onFailed(t2);
        }
      this.on = e5.onPresence, e5.onSuccess();
    });
  }
  doSubscribe() {
    return this.doQuery(this.membersLimit), new Promise((e5, t2) => {
      let n2 = new Q({ name: l.PUBSUB_PRESENCE_SUBSCRIBE, permission: Y.READ, params: { channel: this.channel }, singleTimeout: d.commonRequestSingle, totalTimeout: d.commonRequestTotal, success: (t3) => {
        e5();
      }, fail: (e6) => {
        t2(e6);
      } });
      H.Socket.e(n2);
    });
  }
  doQuery(e5) {
    this.queryPromise = gt(this.channel, e5), this.queryPromise.then((e6) => {
      this.members = e6.content.members, this.amount = e6.content.amount, this.queried = true;
    }).catch((e6) => {
      throw e6;
    });
  }
  update(e5) {
    if (["join", "back"].includes(e5.action))
      this.members.unshift(e5.member);
    else if (["leave", "timeout"].includes(e5.action)) {
      let t2 = this.members.findIndex((t3) => t3.id === e5.member.id);
      t2 > -1 && this.members.splice(t2, 1);
    }
    this.amount = e5.amount;
  }
  expire() {
    this.queried = false, this.queryPromise = null;
  }
  subscribed() {
    return void 0 !== this.on;
  }
};
function gt(e5, t2) {
  return t2 || (t2 = 10), new Promise((n2, s2) => {
    let i2 = { channel: e5, limit: t2 }, o2 = new Q({ name: l.PUBSUB_PRESENCE_HERENOW, permission: Y.READ, params: i2, singleTimeout: d.commonQuerySingle, totalTimeout: d.commonQueryTotal, success: (e6) => {
      n2(e6);
    }, fail: (e6) => {
      s2(e6);
    } });
    H.Socket.e(o2);
  });
}
var bt = class _bt {
  constructor() {
    this.publisher = new ut(), this.subscriber = new dt(), this.presence2 = new mt(), this.histories = new ft();
  }
  static init() {
    this.instance = new _bt();
  }
  publish(e5) {
    this.publisher.publish(e5);
  }
  subscribe(e5) {
    this.subscriber.subscribe(e5);
  }
  unsubscribe(e5) {
    this.subscriber.unsubscribe(e5);
  }
  subscribePresence(e5) {
    this.presence2.subscribe(e5);
  }
  unsubscribePresence(e5) {
    this.presence2.unsubscribe(e5);
  }
  history(e5) {
    this.histories.get(e5);
  }
  hereNow(e5) {
    this.presence2.hereNow(e5);
  }
};
var vt = class _vt extends L {
  static init() {
    return this.module = new _vt(), this.module.name = this.GWS_MODULE_NAME, this.initGN(), this.module;
  }
  static initGN() {
    ee.addAssembler(new class {
      assemble(e5) {
        return { channel: e5.ch, content: e5.ctt };
      }
      support(e5) {
        return !!e5.ch;
      }
    }());
  }
  postConnect() {
    bt.init();
  }
  static check() {
    if (!this.module)
      throw { code: 400, content: "PubSub not initialized. Please include 'PUBSUB' in the 'modules' during GoEasy initialization." };
  }
};
vt.GWS_MODULE_NAME = "GWS";
var St = { exports: {} };
var Et = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var Ct = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
var Nt = function(e5) {
  var t2 = e5, n2 = e5.indexOf("["), s2 = e5.indexOf("]");
  -1 != n2 && -1 != s2 && (e5 = e5.substring(0, n2) + e5.substring(n2, s2).replace(/:/g, ";") + e5.substring(s2, e5.length));
  for (var i2 = Et.exec(e5 || ""), o2 = {}, r2 = 14; r2--; )
    o2[Ct[r2]] = i2[r2] || "";
  return -1 != n2 && -1 != s2 && (o2.source = t2, o2.host = o2.host.substring(1, o2.host.length - 1).replace(/;/g, ":"), o2.authority = o2.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o2.ipv6uri = true), o2;
};
var wt = { exports: {} };
var kt = { exports: {} };
var It = 1e3;
var Ot = 60 * It;
var Tt = 60 * Ot;
var Rt = 24 * Tt;
var Pt = 365.25 * Rt;
var At = function(e5, t2) {
  t2 = t2 || {};
  var n2 = typeof e5;
  if ("string" === n2 && e5.length > 0)
    return function(e6) {
      if ((e6 = String(e6)).length > 100)
        return;
      var t3 = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e6);
      if (!t3)
        return;
      var n3 = parseFloat(t3[1]);
      switch ((t3[2] || "ms").toLowerCase()) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n3 * Pt;
        case "days":
        case "day":
        case "d":
          return n3 * Rt;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n3 * Tt;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n3 * Ot;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n3 * It;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n3;
        default:
          return;
      }
    }(e5);
  if ("number" === n2 && false === isNaN(e5))
    return t2.long ? function(e6) {
      return _t(e6, Rt, "day") || _t(e6, Tt, "hour") || _t(e6, Ot, "minute") || _t(e6, It, "second") || e6 + " ms";
    }(e5) : function(e6) {
      if (e6 >= Rt)
        return Math.round(e6 / Rt) + "d";
      if (e6 >= Tt)
        return Math.round(e6 / Tt) + "h";
      if (e6 >= Ot)
        return Math.round(e6 / Ot) + "m";
      if (e6 >= It)
        return Math.round(e6 / It) + "s";
      return e6 + "ms";
    }(e5);
  throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e5));
};
function _t(e5, t2, n2) {
  if (!(e5 < t2))
    return e5 < 1.5 * t2 ? Math.floor(e5 / t2) + " " + n2 : Math.ceil(e5 / t2) + " " + n2 + "s";
}
!function(e5, t2) {
  function n2(e6) {
    var n3;
    function i2() {
      if (i2.enabled) {
        var e7 = i2, s3 = +/* @__PURE__ */ new Date(), o2 = s3 - (n3 || s3);
        e7.diff = o2, e7.prev = n3, e7.curr = s3, n3 = s3;
        for (var r2 = new Array(arguments.length), a2 = 0; a2 < r2.length; a2++)
          r2[a2] = arguments[a2];
        r2[0] = t2.coerce(r2[0]), "string" != typeof r2[0] && r2.unshift("%O");
        var c2 = 0;
        r2[0] = r2[0].replace(/%([a-zA-Z%])/g, function(n4, s4) {
          if ("%%" === n4)
            return n4;
          c2++;
          var i3 = t2.formatters[s4];
          if ("function" == typeof i3) {
            var o3 = r2[c2];
            n4 = i3.call(e7, o3), r2.splice(c2, 1), c2--;
          }
          return n4;
        }), t2.formatArgs.call(e7, r2), (i2.log || t2.log || console.log.bind(console)).apply(e7, r2);
      }
    }
    return i2.namespace = e6, i2.enabled = t2.enabled(e6), i2.useColors = t2.useColors(), i2.color = function(e7) {
      var n4, s3 = 0;
      for (n4 in e7)
        s3 = (s3 << 5) - s3 + e7.charCodeAt(n4), s3 |= 0;
      return t2.colors[Math.abs(s3) % t2.colors.length];
    }(e6), i2.destroy = s2, "function" == typeof t2.init && t2.init(i2), t2.instances.push(i2), i2;
  }
  function s2() {
    var e6 = t2.instances.indexOf(this);
    return -1 !== e6 && (t2.instances.splice(e6, 1), true);
  }
  (t2 = kt.exports = n2.debug = n2.default = n2).coerce = function(e6) {
    return e6 instanceof Error ? e6.stack || e6.message : e6;
  }, t2.disable = function() {
    t2.enable("");
  }, t2.enable = function(e6) {
    var n3;
    t2.save(e6), t2.names = [], t2.skips = [];
    var s3 = ("string" == typeof e6 ? e6 : "").split(/[\s,]+/), i2 = s3.length;
    for (n3 = 0; n3 < i2; n3++)
      s3[n3] && ("-" === (e6 = s3[n3].replace(/\*/g, ".*?"))[0] ? t2.skips.push(new RegExp("^" + e6.substr(1) + "$")) : t2.names.push(new RegExp("^" + e6 + "$")));
    for (n3 = 0; n3 < t2.instances.length; n3++) {
      var o2 = t2.instances[n3];
      o2.enabled = t2.enabled(o2.namespace);
    }
  }, t2.enabled = function(e6) {
    if ("*" === e6[e6.length - 1])
      return true;
    var n3, s3;
    for (n3 = 0, s3 = t2.skips.length; n3 < s3; n3++)
      if (t2.skips[n3].test(e6))
        return false;
    for (n3 = 0, s3 = t2.names.length; n3 < s3; n3++)
      if (t2.names[n3].test(e6))
        return true;
    return false;
  }, t2.humanize = At, t2.instances = [], t2.names = [], t2.skips = [], t2.formatters = {};
}(0, kt.exports), function(e5, t2) {
  function n2() {
    var e6;
    try {
      e6 = t2.storage.debug;
    } catch (e7) {
    }
    return !e6 && "undefined" != typeof process && "env" in process && (e6 = process.env.DEBUG), e6;
  }
  (t2 = e5.exports = kt.exports).log = function() {
    return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }, t2.formatArgs = function(e6) {
    var n3 = this.useColors;
    if (e6[0] = (n3 ? "%c" : "") + this.namespace + (n3 ? " %c" : " ") + e6[0] + (n3 ? "%c " : " ") + "+" + t2.humanize(this.diff), !n3)
      return;
    var s2 = "color: " + this.color;
    e6.splice(1, 0, s2, "color: inherit");
    var i2 = 0, o2 = 0;
    e6[0].replace(/%[a-zA-Z%]/g, function(e7) {
      "%%" !== e7 && (i2++, "%c" === e7 && (o2 = i2));
    }), e6.splice(o2, 0, s2);
  }, t2.save = function(e6) {
    try {
      null == e6 ? t2.storage.removeItem("debug") : t2.storage.debug = e6;
    } catch (e7) {
    }
  }, t2.load = n2, t2.useColors = function() {
    if ("undefined" != typeof window && window.process && "renderer" === window.process.type)
      return true;
    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
      return false;
    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }, t2.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
    try {
      return window.localStorage;
    } catch (e6) {
    }
  }(), t2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t2.formatters.j = function(e6) {
    try {
      return JSON.stringify(e6);
    } catch (e7) {
      return "[UnexpectedJSONParseError]: " + e7.message;
    }
  }, t2.enable(n2());
}(wt, wt.exports);
var Dt = Nt;
var xt = wt.exports("socket.io-client:url");
var Mt = function(e5, t2) {
  var n2 = e5;
  t2 = t2 || "undefined" != typeof location && location, null == e5 && (e5 = t2.protocol + "//" + t2.host);
  "string" == typeof e5 && ("/" === e5.charAt(0) && (e5 = "/" === e5.charAt(1) ? t2.protocol + e5 : t2.host + e5), /^(https?|wss?):\/\//.test(e5) || (xt("protocol-less url %s", e5), e5 = void 0 !== t2 ? t2.protocol + "//" + e5 : "https://" + e5), xt("parse %s", e5), n2 = Dt(e5));
  n2.port || (/^(http|ws)$/.test(n2.protocol) ? n2.port = "80" : /^(http|ws)s$/.test(n2.protocol) && (n2.port = "443"));
  n2.path = n2.path || "/";
  var s2 = -1 !== n2.host.indexOf(":") ? "[" + n2.host + "]" : n2.host;
  return n2.id = n2.protocol + "://" + s2 + ":" + n2.port, n2.href = n2.protocol + "://" + s2 + (t2 && t2.port === n2.port ? "" : ":" + n2.port), n2;
};
var Bt = {};
var Ft = {}.toString;
var Ut = Array.isArray || function(e5) {
  return "[object Array]" == Ft.call(e5);
};
!function(e5) {
  wt.exports("socket.io-parser");
  var t2 = v.exports, n2 = Ut;
  function s2() {
  }
  e5.protocol = 4, e5.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e5.CONNECT = 0, e5.DISCONNECT = 1, e5.EVENT = 2, e5.ACK = 3, e5.ERROR = 4, e5.BINARY_EVENT = 5, e5.BINARY_ACK = 6, e5.Encoder = s2, e5.Decoder = o2;
  var i2 = e5.ERROR + '"encode error"';
  function o2() {
    this.reconstructor = null;
  }
  function r2(t3) {
    return { type: e5.ERROR, data: "parser error: " + t3 };
  }
  s2.prototype.encode = function(t3, n3) {
    var s3 = function(t4) {
      var n4 = "" + t4.type;
      e5.BINARY_EVENT !== t4.type && e5.BINARY_ACK !== t4.type || (n4 += t4.attachments + "-");
      t4.nsp && "/" !== t4.nsp && (n4 += t4.nsp + ",");
      null != t4.id && (n4 += t4.id);
      if (null != t4.data) {
        var s4 = function(e6) {
          try {
            return JSON.stringify(e6);
          } catch (e7) {
            return false;
          }
        }(t4.data);
        if (false === s4)
          return i2;
        n4 += s4;
      }
      return n4;
    }(t3);
    n3([s3]);
  }, t2(o2.prototype), o2.prototype.add = function(t3) {
    var s3;
    if ("string" != typeof t3)
      throw new Error("Unknown type: " + t3);
    s3 = function(t4) {
      var s4 = 0, i3 = { type: Number(t4.charAt(0)) };
      if (null == e5.types[i3.type])
        return r2("unknown packet type " + i3.type);
      if (e5.BINARY_EVENT === i3.type || e5.BINARY_ACK === i3.type) {
        for (var o3 = ""; "-" !== t4.charAt(++s4) && (o3 += t4.charAt(s4), s4 != t4.length); )
          ;
        if (o3 != Number(o3) || "-" !== t4.charAt(s4))
          throw new Error("Illegal attachments");
        i3.attachments = Number(o3);
      }
      if ("/" === t4.charAt(s4 + 1))
        for (i3.nsp = ""; ++s4; ) {
          if ("," === (c2 = t4.charAt(s4)))
            break;
          if (i3.nsp += c2, s4 === t4.length)
            break;
        }
      else
        i3.nsp = "/";
      var a2 = t4.charAt(s4 + 1);
      if ("" !== a2 && Number(a2) == a2) {
        for (i3.id = ""; ++s4; ) {
          var c2;
          if (null == (c2 = t4.charAt(s4)) || Number(c2) != c2) {
            --s4;
            break;
          }
          if (i3.id += t4.charAt(s4), s4 === t4.length)
            break;
        }
        i3.id = Number(i3.id);
      }
      if (t4.charAt(++s4)) {
        var u2 = function(e6) {
          try {
            return JSON.parse(e6);
          } catch (e7) {
            return false;
          }
        }(t4.substr(s4));
        if (!(false !== u2 && (i3.type === e5.ERROR || n2(u2))))
          return r2("invalid payload");
        i3.data = u2;
      }
      return i3;
    }(t3), this.emit("decoded", s3);
  }, o2.prototype.destroy = function() {
    this.reconstructor && this.reconstructor.finishedReconstruction();
  };
}(Bt);
var jt = { exports: {} };
var Gt = {};
var qt = {};
var Lt = Object.keys || function(e5) {
  var t2 = [], n2 = Object.prototype.hasOwnProperty;
  for (var s2 in e5)
    n2.call(e5, s2) && t2.push(s2);
  return t2;
};
var Wt = Ut;
var Vt = Object.prototype.toString;
var $t = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Vt.call(Blob);
var zt = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === Vt.call(File);
var Ht = function e4(t2) {
  if (!t2 || "object" != typeof t2)
    return false;
  if (Wt(t2)) {
    for (var n2 = 0, s2 = t2.length; n2 < s2; n2++)
      if (e4(t2[n2]))
        return true;
    return false;
  }
  if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(t2) || "function" == typeof ArrayBuffer && t2 instanceof ArrayBuffer || $t && t2 instanceof Blob || zt && t2 instanceof File)
    return true;
  if (t2.toJSON && "function" == typeof t2.toJSON && 1 === arguments.length)
    return e4(t2.toJSON(), true);
  for (var i2 in t2)
    if (Object.prototype.hasOwnProperty.call(t2, i2) && e4(t2[i2]))
      return true;
  return false;
};
var Jt = function(e5, t2, n2) {
  var s2 = false;
  return n2 = n2 || Xt, i2.count = e5, 0 === e5 ? t2() : i2;
  function i2(e6, o2) {
    if (i2.count <= 0)
      throw new Error("after called too many times");
    --i2.count, e6 ? (s2 = true, t2(e6), t2 = n2) : 0 !== i2.count || s2 || t2(null, o2);
  }
};
function Xt() {
}
var Yt;
var Kt;
var Qt;
var Zt = String.fromCharCode;
function en(e5) {
  for (var t2, n2, s2 = [], i2 = 0, o2 = e5.length; i2 < o2; )
    (t2 = e5.charCodeAt(i2++)) >= 55296 && t2 <= 56319 && i2 < o2 ? 56320 == (64512 & (n2 = e5.charCodeAt(i2++))) ? s2.push(((1023 & t2) << 10) + (1023 & n2) + 65536) : (s2.push(t2), i2--) : s2.push(t2);
  return s2;
}
function tn(e5, t2) {
  if (e5 >= 55296 && e5 <= 57343) {
    if (t2)
      throw Error("Lone surrogate U+" + e5.toString(16).toUpperCase() + " is not a scalar value");
    return false;
  }
  return true;
}
function nn(e5, t2) {
  return Zt(e5 >> t2 & 63 | 128);
}
function sn(e5, t2) {
  if (0 == (4294967168 & e5))
    return Zt(e5);
  var n2 = "";
  return 0 == (4294965248 & e5) ? n2 = Zt(e5 >> 6 & 31 | 192) : 0 == (4294901760 & e5) ? (tn(e5, t2) || (e5 = 65533), n2 = Zt(e5 >> 12 & 15 | 224), n2 += nn(e5, 6)) : 0 == (4292870144 & e5) && (n2 = Zt(e5 >> 18 & 7 | 240), n2 += nn(e5, 12), n2 += nn(e5, 6)), n2 += Zt(63 & e5 | 128);
}
function on() {
  if (Qt >= Kt)
    throw Error("Invalid byte index");
  var e5 = 255 & Yt[Qt];
  if (Qt++, 128 == (192 & e5))
    return 63 & e5;
  throw Error("Invalid continuation byte");
}
function rn(e5) {
  var t2, n2;
  if (Qt > Kt)
    throw Error("Invalid byte index");
  if (Qt == Kt)
    return false;
  if (t2 = 255 & Yt[Qt], Qt++, 0 == (128 & t2))
    return t2;
  if (192 == (224 & t2)) {
    if ((n2 = (31 & t2) << 6 | on()) >= 128)
      return n2;
    throw Error("Invalid continuation byte");
  }
  if (224 == (240 & t2)) {
    if ((n2 = (15 & t2) << 12 | on() << 6 | on()) >= 2048)
      return tn(n2, e5) ? n2 : 65533;
    throw Error("Invalid continuation byte");
  }
  if (240 == (248 & t2) && (n2 = (7 & t2) << 18 | on() << 12 | on() << 6 | on()) >= 65536 && n2 <= 1114111)
    return n2;
  throw Error("Invalid UTF-8 detected");
}
var an = { version: "2.1.2", encode: function(e5, t2) {
  for (var n2 = false !== (t2 = t2 || {}).strict, s2 = en(e5), i2 = s2.length, o2 = -1, r2 = ""; ++o2 < i2; )
    r2 += sn(s2[o2], n2);
  return r2;
}, decode: function(e5, t2) {
  var n2 = false !== (t2 = t2 || {}).strict;
  Yt = en(e5), Kt = Yt.length, Qt = 0;
  for (var s2, i2 = []; false !== (s2 = rn(n2)); )
    i2.push(s2);
  return function(e6) {
    for (var t3, n3 = e6.length, s3 = -1, i3 = ""; ++s3 < n3; )
      (t3 = e6[s3]) > 65535 && (i3 += Zt((t3 -= 65536) >>> 10 & 1023 | 55296), t3 = 56320 | 1023 & t3), i3 += Zt(t3);
    return i3;
  }(i2);
} };
var cn = void 0 !== cn ? cn : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder;
var un = function() {
  try {
    return 2 === new Blob(["hi"]).size;
  } catch (e5) {
    return false;
  }
}();
var pn = un && function() {
  try {
    return 2 === new Blob([new Uint8Array([1, 2])]).size;
  } catch (e5) {
    return false;
  }
}();
var hn = cn && cn.prototype.append && cn.prototype.getBlob;
function ln(e5) {
  return e5.map(function(e6) {
    if (e6.buffer instanceof ArrayBuffer) {
      var t2 = e6.buffer;
      if (e6.byteLength !== t2.byteLength) {
        var n2 = new Uint8Array(e6.byteLength);
        n2.set(new Uint8Array(t2, e6.byteOffset, e6.byteLength)), t2 = n2.buffer;
      }
      return t2;
    }
    return e6;
  });
}
function dn(e5, t2) {
  t2 = t2 || {};
  var n2 = new cn();
  return ln(e5).forEach(function(e6) {
    n2.append(e6);
  }), t2.type ? n2.getBlob(t2.type) : n2.getBlob();
}
function fn(e5, t2) {
  return new Blob(ln(e5), t2 || {});
}
"undefined" != typeof Blob && (dn.prototype = Blob.prototype, fn.prototype = Blob.prototype);
var mn = un ? pn ? Blob : fn : hn ? dn : void 0;
!function(e5) {
  var t2 = Lt, n2 = Ht, s2 = Jt, i2 = an;
  "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), e5.protocol = 3;
  var o2 = e5.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 }, r2 = t2(o2), a2 = { type: "error", data: "parser error" }, c2 = mn;
  e5.encodePacket = function(e6, t3, n3, s3) {
    "function" == typeof t3 && (s3 = t3, t3 = false), "function" == typeof n3 && (s3 = n3, n3 = null), void 0 === e6.data || e6.data.buffer || e6.data;
    var r3 = o2[e6.type];
    return void 0 !== e6.data && (r3 += n3 ? i2.encode(String(e6.data), { strict: false }) : String(e6.data)), s3("" + r3);
  }, e5.decodePacket = function(e6, t3, n3) {
    if (void 0 === e6)
      return a2;
    if ("string" == typeof e6) {
      if (n3 && false === (e6 = function(e7) {
        try {
          e7 = i2.decode(e7, { strict: false });
        } catch (e8) {
          return false;
        }
        return e7;
      }(e6)))
        return a2;
      var s3 = e6.charAt(0);
      return Number(s3) == s3 && r2[s3] ? e6.length > 1 ? { type: r2[s3], data: e6.substring(1) } : { type: r2[s3] } : a2;
    }
    s3 = new Uint8Array(e6)[0];
    var o3 = sliceBuffer(e6, 1);
    return c2 && "blob" === t3 && (o3 = new c2([o3])), { type: r2[s3], data: o3 };
  }, e5.encodePayload = function(t3, i3, o3) {
    "function" == typeof i3 && (o3 = i3, i3 = null);
    var r3 = n2(t3);
    if (!t3.length)
      return o3("0:");
    !function(e6, t4, n3) {
      for (var i4 = new Array(e6.length), o4 = s2(e6.length, n3), r4 = function(e7, n4, s3) {
        t4(n4, function(t5, n5) {
          i4[e7] = n5, s3(t5, i4);
        });
      }, a3 = 0; a3 < e6.length; a3++)
        r4(a3, e6[a3], o4);
    }(t3, function(t4, n3) {
      e5.encodePacket(t4, !!r3 && i3, true, function(e6) {
        n3(null, function(e7) {
          return e7.length + ":" + e7;
        }(e6));
      });
    }, function(e6, t4) {
      return o3(t4.join(""));
    });
  }, e5.decodePayload = function(t3, n3, s3) {
    var i3;
    if ("function" == typeof n3 && (s3 = n3, n3 = null), "" === t3)
      return s3(a2, 0, 1);
    for (var o3, r3, c3 = "", u2 = 0, p2 = t3.length; u2 < p2; u2++) {
      var h2 = t3.charAt(u2);
      if (":" === h2) {
        if ("" === c3 || c3 != (o3 = Number(c3)))
          return s3(a2, 0, 1);
        if (c3 != (r3 = t3.substr(u2 + 1, o3)).length)
          return s3(a2, 0, 1);
        if (r3.length) {
          if (i3 = e5.decodePacket(r3, n3, true), a2.type === i3.type && a2.data === i3.data)
            return s3(a2, 0, 1);
          if (false === s3(i3, u2 + o3, p2))
            return;
        }
        u2 += o3, c3 = "";
      } else
        c3 += h2;
    }
    return "" !== c3 ? s3(a2, 0, 1) : void 0;
  };
}(qt);
var yn = qt;
var gn = bn;
function bn(e5) {
  this.path = e5.path, this.hostname = e5.hostname, this.port = e5.port, this.secure = e5.secure, this.query = e5.query, this.timestampParam = e5.timestampParam, this.timestampRequests = e5.timestampRequests, this.readyState = "", this.agent = e5.agent || false, this.socket = e5.socket, this.enablesXDR = e5.enablesXDR, this.pfx = e5.pfx, this.key = e5.key, this.passphrase = e5.passphrase, this.cert = e5.cert, this.ca = e5.ca, this.ciphers = e5.ciphers, this.rejectUnauthorized = e5.rejectUnauthorized, this.forceNode = e5.forceNode, this.isReactNative = e5.isReactNative, this.extraHeaders = e5.extraHeaders, this.localAddress = e5.localAddress;
}
(0, v.exports)(bn.prototype), bn.prototype.onError = function(e5, t2) {
  var n2 = new Error(e5);
  return n2.type = "TransportError", n2.description = t2, this.emit("error", n2), this;
}, bn.prototype.open = function() {
  return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
}, bn.prototype.close = function() {
  return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
}, bn.prototype.send = function(e5) {
  if ("open" !== this.readyState)
    throw new Error("Transport not open");
  this.write(e5);
}, bn.prototype.onOpen = function() {
  this.readyState = "open", this.writable = true, this.emit("open");
}, bn.prototype.onData = function(e5) {
  var t2 = yn.decodePacket(e5, this.socket.binaryType);
  this.onPacket(t2);
}, bn.prototype.onPacket = function(e5) {
  this.emit("packet", e5);
}, bn.prototype.onClose = function() {
  this.readyState = "closed", this.emit("close");
};
var vn;
var Sn = { encode: function(e5) {
  var t2 = "";
  for (var n2 in e5)
    e5.hasOwnProperty(n2) && (t2.length && (t2 += "&"), t2 += encodeURIComponent(n2) + "=" + encodeURIComponent(e5[n2]));
  return t2;
}, decode: function(e5) {
  for (var t2 = {}, n2 = e5.split("&"), s2 = 0, i2 = n2.length; s2 < i2; s2++) {
    var o2 = n2[s2].split("=");
    t2[decodeURIComponent(o2[0])] = decodeURIComponent(o2[1]);
  }
  return t2;
} };
var En = function(e5, t2) {
  var n2 = function() {
  };
  n2.prototype = t2.prototype, e5.prototype = new n2(), e5.prototype.constructor = e5;
};
var Cn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
var Nn = 64;
var wn = {};
var kn = 0;
var In = 0;
function On(e5) {
  var t2 = "";
  do {
    t2 = Cn[e5 % Nn] + t2, e5 = Math.floor(e5 / Nn);
  } while (e5 > 0);
  return t2;
}
function Tn() {
  var e5 = On(+/* @__PURE__ */ new Date());
  return e5 !== vn ? (kn = 0, vn = e5) : e5 + "." + On(kn++);
}
for (; In < Nn; In++)
  wn[Cn[In]] = In;
Tn.encode = On, Tn.decode = function(e5) {
  var t2 = 0;
  for (In = 0; In < e5.length; In++)
    t2 = t2 * Nn + wn[e5.charAt(In)];
  return t2;
};
var Rn = Tn;
var Pn = { exports: {} };
try {
  Pn.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
} catch (e5) {
  Pn.exports = false;
}
var An = Pn.exports;
var _n = function(e5) {
  var t2 = e5.xdomain, n2 = e5.xscheme, s2 = e5.enablesXDR;
  try {
    if ("undefined" != typeof XMLHttpRequest && (!t2 || An))
      return new XMLHttpRequest();
  } catch (e6) {
  }
  try {
    if ("undefined" != typeof XDomainRequest && !n2 && s2)
      return new XDomainRequest();
  } catch (e6) {
  }
  if (!t2)
    try {
      return new self[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e6) {
    }
};
var Dn = gn;
var xn = Sn;
var Mn = qt;
var Bn = En;
var Fn = Rn;
var Un = wt.exports("engine.io-client:polling");
var jn = qn;
var Gn = null != new _n({ xdomain: false }).responseType;
function qn(e5) {
  var t2 = e5 && e5.forceBase64;
  Gn && !t2 || (this.supportsBinary = false), Dn.call(this, e5);
}
Bn(qn, Dn), qn.prototype.name = "polling", qn.prototype.doOpen = function() {
  this.poll();
}, qn.prototype.pause = function(e5) {
  var t2 = this;
  function n2() {
    Un("paused"), t2.readyState = "paused", e5();
  }
  if (this.readyState = "pausing", this.polling || !this.writable) {
    var s2 = 0;
    this.polling && (Un("we are currently polling - waiting to pause"), s2++, this.once("pollComplete", function() {
      Un("pre-pause polling complete"), --s2 || n2();
    })), this.writable || (Un("we are currently writing - waiting to pause"), s2++, this.once("drain", function() {
      Un("pre-pause writing complete"), --s2 || n2();
    }));
  } else
    n2();
}, qn.prototype.poll = function() {
  Un("polling"), this.polling = true, this.doPoll(), this.emit("poll");
}, qn.prototype.onData = function(e5) {
  var t2 = this;
  Un("polling got data %s", e5);
  Mn.decodePayload(e5, this.socket.binaryType, function(e6, n2, s2) {
    if ("opening" === t2.readyState && t2.onOpen(), "close" === e6.type)
      return t2.onClose(), false;
    t2.onPacket(e6);
  }), "closed" !== this.readyState && (this.polling = false, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : Un('ignoring poll - transport state "%s"', this.readyState));
}, qn.prototype.doClose = function() {
  var e5 = this;
  function t2() {
    Un("writing close packet"), e5.write([{ type: "close" }]);
  }
  "open" === this.readyState ? (Un("transport open - closing"), t2()) : (Un("transport not open - deferring close"), this.once("open", t2));
}, qn.prototype.write = function(e5) {
  var t2 = this;
  this.writable = false;
  var n2 = function() {
    t2.writable = true, t2.emit("drain");
  };
  Mn.encodePayload(e5, this.supportsBinary, function(e6) {
    t2.doWrite(e6, n2);
  });
}, qn.prototype.uri = function() {
  var e5 = this.query || {}, t2 = this.secure ? "https" : "http", n2 = "";
  return false !== this.timestampRequests && (e5[this.timestampParam] = Fn()), this.supportsBinary || e5.sid || (e5.b64 = 1), e5 = xn.encode(e5), this.port && ("https" === t2 && 443 !== Number(this.port) || "http" === t2 && 80 !== Number(this.port)) && (n2 = ":" + this.port), e5.length && (e5 = "?" + e5), t2 + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n2 + this.path + e5;
};
var Ln;
var Wn = jn;
var Vn = Xn;
var $n = /\n/g;
var zn = /\\n/g;
function Hn() {
}
function Jn() {
  return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== g ? g : {};
}
function Xn(e5) {
  if (Wn.call(this, e5), this.query = this.query || {}, !Ln) {
    var t2 = Jn();
    Ln = t2.___eio = t2.___eio || [];
  }
  this.index = Ln.length;
  var n2 = this;
  Ln.push(function(e6) {
    n2.onData(e6);
  }), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", function() {
    n2.script && (n2.script.onerror = Hn);
  }, false);
}
En(Xn, Wn), Xn.prototype.supportsBinary = false, Xn.prototype.doClose = function() {
  this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), Wn.prototype.doClose.call(this);
}, Xn.prototype.doPoll = function() {
  var e5 = this, t2 = document.createElement("script");
  this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t2.async = true, t2.src = this.uri(), t2.onerror = function(t3) {
    e5.onError("jsonp poll error", t3);
  };
  var n2 = document.getElementsByTagName("script")[0];
  n2 ? n2.parentNode.insertBefore(t2, n2) : (document.head || document.body).appendChild(t2), this.script = t2, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
    var e6 = document.createElement("iframe");
    document.body.appendChild(e6), document.body.removeChild(e6);
  }, 100);
}, Xn.prototype.doWrite = function(e5, t2) {
  var n2 = this;
  if (!this.form) {
    var s2, i2 = document.createElement("form"), o2 = document.createElement("textarea"), r2 = this.iframeId = "eio_iframe_" + this.index;
    i2.className = "socketio", i2.style.position = "absolute", i2.style.top = "-1000px", i2.style.left = "-1000px", i2.target = r2, i2.method = "POST", i2.setAttribute("accept-charset", "utf-8"), o2.name = "d", i2.appendChild(o2), document.body.appendChild(i2), this.form = i2, this.area = o2;
  }
  function a2() {
    c2(), t2();
  }
  function c2() {
    if (n2.iframe)
      try {
        n2.form.removeChild(n2.iframe);
      } catch (e7) {
        n2.onError("jsonp polling iframe removal error", e7);
      }
    try {
      var e6 = '<iframe src="javascript:0" name="' + n2.iframeId + '">';
      s2 = document.createElement(e6);
    } catch (e7) {
      (s2 = document.createElement("iframe")).name = n2.iframeId, s2.src = "javascript:0";
    }
    s2.id = n2.iframeId, n2.form.appendChild(s2), n2.iframe = s2;
  }
  this.form.action = this.uri(), c2(), e5 = e5.replace(zn, "\\\n"), this.area.value = e5.replace($n, "\\n");
  try {
    this.form.submit();
  } catch (e6) {
  }
  this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
    "complete" === n2.iframe.readyState && a2();
  } : this.iframe.onload = a2;
};
var Yn;
var Kn;
var Qn = gn;
var Zn = qt;
var es = Sn;
var ts = En;
var ns = Rn;
var ss = wt.exports("engine.io-client:websocket");
("undefined" == typeof uni && "undefined" == typeof wx && "undefined" == typeof my && "undefined" == typeof swan || "undefined" != typeof WebSocket) && ("undefined" != typeof WebSocket ? Yn = WebSocket : "undefined" != typeof self ? Yn = self.WebSocket || self.MozWebSocket : function() {
  try {
    Kn = __require("ws");
  } catch (e5) {
  }
}());
var is = Yn || Kn;
var os = "undefined" != typeof uni && "harmonyos" === uni.getSystemInfoSync().platform;
(("undefined" != typeof uni || "undefined" != typeof wx || "undefined" != typeof my || "undefined" != typeof swan) && "undefined" == typeof WebSocket || "undefined" != typeof GameGlobal || os) && (is = function(e5) {
  var t2 = this;
  if (t2.onopen = function() {
  }, t2.onclose = function() {
  }, t2.onmessage = function(e6) {
  }, t2.onerror = function(e6) {
  }, "object" == typeof tt && tt.getSystemInfo) {
    let n3 = tt.connectSocket({ url: e5 });
    t2.send = function(e6) {
      n3.send({ data: e6 });
    }, t2.close = function() {
      n3.close();
    }, n3.onOpen(function() {
      t2.onopen();
    }), n3.onError(function(e6) {
      t2.onerror(e6);
    }), n3.onMessage(function(e6) {
      t2.onmessage(e6);
    }), n3.onClose(function() {
      t2.onclose();
    });
  } else if ("undefined" != typeof my)
    my.connectSocket({ url: e5 }), t2.send = function(e6) {
      my.sendSocketMessage({ data: e6 });
    }, t2.close = function(e6) {
      my.closeSocket();
    }, my.onSocketOpen(function(e6) {
      t2.onopen();
    }), my.onSocketError(function(e6) {
      t2.onerror(e6);
    }), my.onSocketMessage(function(e6) {
      t2.onmessage(e6);
    }), my.onSocketClose((e6) => {
      t2.onclose(e6);
    });
  else if ("undefined" != typeof swan)
    swan.connectSocket({ url: e5 }), t2.send = function(e6) {
      swan.sendSocketMessage({ data: e6 });
    }, t2.close = function(e6) {
      swan.closeSocket();
    }, swan.onSocketOpen(function(e6) {
      t2.onopen();
    }), swan.onSocketError(function(e6) {
      t2.onerror(e6);
    }), swan.onSocketMessage(function(e6) {
      t2.onmessage(e6);
    }), swan.onSocketClose((e6) => {
      t2.onclose(e6);
    });
  else if ("undefined" != typeof uni) {
    var n2 = uni.connectSocket({ url: e5, complete: () => {
    } });
    t2.send = function(e6) {
      n2.send({ data: e6 });
    }, t2.close = function() {
      n2.close();
    }, n2.onOpen(function(e6) {
      t2.onopen();
    }), n2.onError(function(e6) {
      t2.onerror(e6);
    }), n2.onMessage(function(e6) {
      t2.onmessage(e6);
    }), n2.onClose(function(e6) {
      t2.onclose();
    });
  } else {
    var s2 = wx.connectSocket({ url: e5 });
    t2.send = function(e6) {
      s2.send({ data: e6 });
    }, t2.close = function(e6) {
      s2.close({ code: 1e3 });
    }, s2.onOpen(function() {
      t2.onopen();
    }), s2.onError(function(e6) {
      t2.onerror(e6);
    }), s2.onMessage(function(e6) {
      t2.onmessage(e6);
    }), s2.onClose(function(e6) {
      t2.onclose(e6);
    });
  }
});
var rs = as;
function as(e5) {
  e5 && e5.forceBase64 && (this.supportsBinary = false), ("undefined" == typeof uni && "undefined" == typeof wx && "undefined" == typeof my && "undefined" == typeof swan || "undefined" != typeof WebSocket) && (this.perMessageDeflate = e5.perMessageDeflate, this.usingBrowserWebSocket = Yn && !e5.forceNode, this.protocols = e5.protocols, this.usingBrowserWebSocket || (is = Kn)), Qn.call(this, e5);
}
ts(as, Qn), as.prototype.name = "websocket", as.prototype.supportsBinary = false, as.prototype.doOpen = function() {
  if (this.check()) {
    var e5, t2, n2 = this.uri();
    if (("undefined" == typeof uni && "undefined" == typeof wx && "undefined" == typeof my && "undefined" == typeof swan || "undefined" != typeof WebSocket) && (e5 = this.protocols), (t2 = ("undefined" != typeof uni || "undefined" != typeof wx || "undefined" != typeof my || "undefined" != typeof swan) && "undefined" == typeof WebSocket || os ? { agent: this.agent } : { agent: this.agent, perMessageDeflate: this.perMessageDeflate }).pfx = this.pfx, t2.key = this.key, t2.passphrase = this.passphrase, t2.cert = this.cert, t2.ca = this.ca, t2.ciphers = this.ciphers, t2.rejectUnauthorized = this.rejectUnauthorized, "object" == typeof navigator && "ReactNative" === navigator.product && (t2 = {}), this.extraHeaders && (t2.headers = this.extraHeaders), this.localAddress && (t2.localAddress = this.localAddress), "undefined" != typeof cc && "Windows" === cc.sys.os)
      cc.resources.load("cacert", (e6, t3) => {
        const s2 = t3.nativeUrl;
        this.ws = new is(n2, [], s2), this.ws.binaryType = "arraybuffer", this.addEventListeners();
      });
    else {
      try {
        ("undefined" != typeof uni || "undefined" != typeof wx || "undefined" != typeof my || "undefined" != typeof swan) && "undefined" == typeof WebSocket || os ? this.ws = new is(n2) : this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e5 ? new is(n2, e5) : new is(n2) : new is(n2, e5, t2);
      } catch (e6) {
        return this.emit("error", e6);
      }
      void 0 === this.ws.binaryType && (this.supportsBinary = false), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = true, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
    }
  }
}, as.prototype.addEventListeners = function() {
  var e5 = this;
  this.ws.onopen = function() {
    e5.onOpen();
  }, this.ws.onclose = function() {
    e5.onClose();
  }, this.ws.onmessage = function(t2) {
    e5.onData(t2.data);
  }, this.ws.onerror = function(t2) {
    e5.onError("websocket error", t2);
  };
}, as.prototype.write = function(e5) {
  var t2 = this;
  this.writable = false;
  for (var n2 = e5.length, s2 = 0, i2 = n2; s2 < i2; s2++)
    !function(e6) {
      Zn.encodePacket(e6, t2.supportsBinary, function(s3) {
        if (("undefined" != typeof uni || "undefined" != typeof wx || "undefined" != typeof my || "undefined" != typeof swan) && "undefined" == typeof WebSocket || os)
          try {
            t2.ws.send(s3);
          } catch (e7) {
            ss("websocket closed before onclose event");
          }
        else {
          if (!t2.usingBrowserWebSocket) {
            var i3 = {};
            if (e6.options && (i3.compress = e6.options.compress), t2.perMessageDeflate)
              ("string" == typeof s3 ? Buffer.byteLength(s3) : s3.length) < t2.perMessageDeflate.threshold && (i3.compress = false);
          }
          try {
            t2.usingBrowserWebSocket ? t2.ws.send(s3) : t2.ws.send(s3, i3);
          } catch (e7) {
            ss("websocket closed before onclose event");
          }
        }
        --n2 || o2();
      });
    }(e5[s2]);
  function o2() {
    t2.emit("flush"), setTimeout(function() {
      t2.writable = true, t2.emit("drain");
    }, 0);
  }
}, as.prototype.onClose = function() {
  Qn.prototype.onClose.call(this);
}, as.prototype.doClose = function() {
  void 0 !== this.ws && this.ws.close();
}, as.prototype.uri = function() {
  var e5 = this.query || {}, t2 = this.secure ? "wss" : "ws", n2 = "";
  return this.port && ("wss" === t2 && 443 !== Number(this.port) || "ws" === t2 && 80 !== Number(this.port)) && (n2 = ":" + this.port), this.timestampRequests && (e5[this.timestampParam] = ns()), this.supportsBinary || (e5.b64 = 1), (e5 = es.encode(e5)).length && (e5 = "?" + e5), t2 + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n2 + this.path + e5;
}, as.prototype.check = function() {
  return !(!is || "__initialize" in is && this.name === as.prototype.name);
};
var cs = Vn;
var us = rs;
Gt.polling = function(e5) {
  var t2 = false, n2 = false;
  if (e5.jsonp, "undefined" != typeof location) {
    var s2 = "https:" === location.protocol, i2 = location.port;
    i2 || (i2 = s2 ? 443 : 80), t2 = e5.hostname !== location.hostname || i2 !== e5.port, n2 = e5.secure !== s2;
  }
  return e5.xdomain = t2, e5.xscheme = n2, new cs(e5);
}, Gt.websocket = us;
var ps = [].indexOf;
var hs = function(e5, t2) {
  if (ps)
    return e5.indexOf(t2);
  for (var n2 = 0; n2 < e5.length; ++n2)
    if (e5[n2] === t2)
      return n2;
  return -1;
};
var ls = Gt;
var ds = v.exports;
var fs = wt.exports("engine.io-client:socket");
var ms = hs;
var ys = qt;
var gs = Nt;
var bs = Sn;
var vs = Ss;
function Ss(e5, t2) {
  if (!(this instanceof Ss))
    return new Ss(e5, t2);
  t2 = t2 || {}, e5 && "object" == typeof e5 && (t2 = e5, e5 = null), e5 ? (e5 = gs(e5), t2.hostname = e5.host, t2.secure = "https" === e5.protocol || "wss" === e5.protocol, t2.port = e5.port, e5.query && (t2.query = e5.query)) : t2.host && (t2.hostname = gs(t2.host).host), this.secure = null != t2.secure ? t2.secure : "undefined" != typeof location && "https:" === location.protocol, t2.hostname && !t2.port && (t2.port = this.secure ? "443" : "80"), this.agent = t2.agent || false, this.hostname = t2.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t2.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = t2.query || {}, "string" == typeof this.query && (this.query = bs.decode(this.query)), this.upgrade = false !== t2.upgrade, this.path = (t2.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t2.forceJSONP, this.jsonp = false !== t2.jsonp, this.forceBase64 = !!t2.forceBase64, this.enablesXDR = !!t2.enablesXDR, this.timestampParam = t2.timestampParam || "t", this.timestampRequests = t2.timestampRequests, this.transports = t2.transports || ["polling", "websocket"], this.transportOptions = t2.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t2.policyPort || 843, this.rememberUpgrade = t2.rememberUpgrade || false, this.binaryType = null, this.onlyBinaryUpgrades = t2.onlyBinaryUpgrades, this.perMessageDeflate = false !== t2.perMessageDeflate && (t2.perMessageDeflate || {}), true === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t2.pfx || null, this.key = t2.key || null, this.passphrase = t2.passphrase || null, this.cert = t2.cert || null, this.ca = t2.ca || null, this.ciphers = t2.ciphers || null, this.rejectUnauthorized = void 0 === t2.rejectUnauthorized || t2.rejectUnauthorized, this.forceNode = !!t2.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (t2.extraHeaders && Object.keys(t2.extraHeaders).length > 0 && (this.extraHeaders = t2.extraHeaders), t2.localAddress && (this.localAddress = t2.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
}
Ss.priorWebsocketSuccess = false, ds(Ss.prototype), Ss.protocol = ys.protocol, Ss.Socket = Ss, Ss.Transport = gn, Ss.transports = Gt, Ss.parser = qt, Ss.prototype.createTransport = function(e5) {
  fs('creating transport "%s"', e5);
  var t2 = function(e6) {
    var t3 = {};
    for (var n3 in e6)
      e6.hasOwnProperty(n3) && (t3[n3] = e6[n3]);
    return t3;
  }(this.query);
  t2.EIO = ys.protocol, t2.transport = e5;
  var n2 = this.transportOptions[e5] || {};
  return this.id && (t2.sid = this.id), new ls[e5]({ query: t2, socket: this, agent: n2.agent || this.agent, hostname: n2.hostname || this.hostname, port: n2.port || this.port, secure: n2.secure || this.secure, path: n2.path || this.path, forceJSONP: n2.forceJSONP || this.forceJSONP, jsonp: n2.jsonp || this.jsonp, forceBase64: n2.forceBase64 || this.forceBase64, enablesXDR: n2.enablesXDR || this.enablesXDR, timestampRequests: n2.timestampRequests || this.timestampRequests, timestampParam: n2.timestampParam || this.timestampParam, policyPort: n2.policyPort || this.policyPort, pfx: n2.pfx || this.pfx, key: n2.key || this.key, passphrase: n2.passphrase || this.passphrase, cert: n2.cert || this.cert, ca: n2.ca || this.ca, ciphers: n2.ciphers || this.ciphers, rejectUnauthorized: n2.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: n2.perMessageDeflate || this.perMessageDeflate, extraHeaders: n2.extraHeaders || this.extraHeaders, forceNode: n2.forceNode || this.forceNode, localAddress: n2.localAddress || this.localAddress, requestTimeout: n2.requestTimeout || this.requestTimeout, protocols: n2.protocols || void 0, isReactNative: this.isReactNative });
}, Ss.prototype.open = function() {
  var e5;
  if (this.rememberUpgrade && Ss.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
    e5 = "websocket";
  else {
    if (0 === this.transports.length) {
      var t2 = this;
      return void setTimeout(function() {
        t2.emit("error", "No transports available");
      }, 0);
    }
    e5 = this.transports[0];
  }
  this.readyState = "opening";
  try {
    e5 = this.createTransport(e5);
  } catch (e6) {
    return this.transports.shift(), void this.open();
  }
  e5.open(), this.setTransport(e5);
}, Ss.prototype.setTransport = function(e5) {
  fs("setting transport %s", e5.name);
  var t2 = this;
  this.transport && (fs("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e5, e5.on("drain", function() {
    t2.onDrain();
  }).on("packet", function(e6) {
    t2.onPacket(e6);
  }).on("error", function(e6) {
    t2.onError(e6);
  }).on("close", function() {
    t2.onClose("transport close");
  });
}, Ss.prototype.probe = function(e5) {
  fs('probing transport "%s"', e5);
  var t2 = this.createTransport(e5, { probe: 1 }), n2 = false, s2 = this;
  function i2() {
    if (s2.onlyBinaryUpgrades) {
      var i3 = !this.supportsBinary && s2.transport.supportsBinary;
      n2 = n2 || i3;
    }
    n2 || (fs('probe transport "%s" opened', e5), t2.send([{ type: "ping", data: "probe" }]), t2.once("packet", function(i4) {
      if (!n2)
        if ("pong" === i4.type && "probe" === i4.data) {
          if (fs('probe transport "%s" pong', e5), s2.upgrading = true, s2.emit("upgrading", t2), !t2)
            return;
          Ss.priorWebsocketSuccess = "websocket" === t2.name, fs('pausing current transport "%s"', s2.transport.name), s2.transport.pause(function() {
            n2 || "closed" !== s2.readyState && (fs("changing transport and sending upgrade packet"), p2(), s2.setTransport(t2), t2.send([{ type: "upgrade" }]), s2.emit("upgrade", t2), t2 = null, s2.upgrading = false, s2.flush());
          });
        } else {
          fs('probe transport "%s" failed', e5);
          var o3 = new Error("probe error");
          o3.transport = t2.name, s2.emit("upgradeError", o3);
        }
    }));
  }
  function o2() {
    n2 || (n2 = true, p2(), t2.close(), t2 = null);
  }
  function r2(n3) {
    var i3 = new Error("probe error: " + n3);
    i3.transport = t2.name, o2(), fs('probe transport "%s" failed because of error: %s', e5, n3), s2.emit("upgradeError", i3);
  }
  function a2() {
    r2("transport closed");
  }
  function c2() {
    r2("socket closed");
  }
  function u2(e6) {
    t2 && e6.name !== t2.name && (fs('"%s" works - aborting "%s"', e6.name, t2.name), o2());
  }
  function p2() {
    t2.removeListener("open", i2), t2.removeListener("error", r2), t2.removeListener("close", a2), s2.removeListener("close", c2), s2.removeListener("upgrading", u2);
  }
  Ss.priorWebsocketSuccess = false, t2.once("open", i2), t2.once("error", r2), t2.once("close", a2), this.once("close", c2), this.once("upgrading", u2), t2.open();
}, Ss.prototype.onOpen = function() {
  if (fs("socket open"), this.readyState = "open", Ss.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
    fs("starting upgrade probes");
    for (var e5 = 0, t2 = this.upgrades.length; e5 < t2; e5++)
      this.probe(this.upgrades[e5]);
  }
}, Ss.prototype.onPacket = function(e5) {
  if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
    switch (fs('socket receive: type "%s", data "%s"', e5.type, e5.data), this.emit("packet", e5), this.emit("heartbeat"), e5.type) {
      case "open":
        this.onHandshake(JSON.parse(e5.data));
        break;
      case "pong":
        this.setPing(), this.emit("pong");
        break;
      case "error":
        var t2 = new Error("server error");
        t2.code = e5.data, this.onError(t2);
        break;
      case "message":
        this.emit("data", e5.data), this.emit("message", e5.data);
    }
  else
    fs('packet received with socket readyState "%s"', this.readyState);
}, Ss.prototype.onHandshake = function(e5) {
  this.emit("handshake", e5), this.id = e5.sid, this.transport.query.sid = e5.sid, this.upgrades = this.filterUpgrades(e5.upgrades), this.pingInterval = e5.pingInterval, this.pingTimeout = e5.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
}, Ss.prototype.onHeartbeat = function(e5) {
  clearTimeout(this.pingTimeoutTimer);
  var t2 = this;
  t2.pingTimeoutTimer = setTimeout(function() {
    "closed" !== t2.readyState && t2.onClose("ping timeout");
  }, e5 || t2.pingInterval + t2.pingTimeout);
}, Ss.prototype.setPing = function() {
  var e5 = this;
  clearTimeout(e5.pingIntervalTimer), e5.pingIntervalTimer = setTimeout(function() {
    fs("writing ping packet - expecting pong within %sms", e5.pingTimeout), e5.ping(), e5.onHeartbeat(e5.pingTimeout);
  }, e5.pingInterval);
}, Ss.prototype.ping = function() {
  var e5 = this;
  this.sendPacket("ping", function() {
    e5.emit("ping");
  });
}, Ss.prototype.onDrain = function() {
  this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
}, Ss.prototype.flush = function() {
  "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (fs("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
}, Ss.prototype.write = Ss.prototype.send = function(e5, t2, n2) {
  return this.sendPacket("message", e5, t2, n2), this;
}, Ss.prototype.sendPacket = function(e5, t2, n2, s2) {
  if ("function" == typeof t2 && (s2 = t2, t2 = void 0), "function" == typeof n2 && (s2 = n2, n2 = null), "closing" !== this.readyState && "closed" !== this.readyState) {
    (n2 = n2 || {}).compress = false !== n2.compress;
    var i2 = { type: e5, data: t2, options: n2 };
    this.emit("packetCreate", i2), this.writeBuffer.push(i2), s2 && this.once("flush", s2), this.flush();
  }
}, Ss.prototype.close = function() {
  if ("opening" === this.readyState || "open" === this.readyState) {
    this.readyState = "closing";
    var e5 = this;
    this.writeBuffer.length ? this.once("drain", function() {
      this.upgrading ? s2() : t2();
    }) : this.upgrading ? s2() : t2();
  }
  function t2() {
    e5.onClose("forced close"), fs("socket closing - telling transport to close"), e5.transport.close();
  }
  function n2() {
    e5.removeListener("upgrade", n2), e5.removeListener("upgradeError", n2), t2();
  }
  function s2() {
    e5.once("upgrade", n2), e5.once("upgradeError", n2);
  }
  return this;
}, Ss.prototype.onError = function(e5) {
  fs("socket error %j", e5), Ss.priorWebsocketSuccess = false, this.emit("error", e5), this.onClose("transport error", e5);
}, Ss.prototype.onClose = function(e5, t2) {
  if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
    fs('socket close with reason: "%s"', e5);
    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e5, t2), this.writeBuffer = [], this.prevBufferLen = 0;
  }
}, Ss.prototype.filterUpgrades = function(e5) {
  for (var t2 = [], n2 = 0, s2 = e5.length; n2 < s2; n2++)
    ~ms(this.transports, e5[n2]) && t2.push(e5[n2]);
  return t2;
}, jt.exports = vs, jt.exports.parser = qt;
var Es = { exports: {} };
var Cs = function(e5, t2) {
  for (var n2 = [], s2 = (t2 = t2 || 0) || 0; s2 < e5.length; s2++)
    n2[s2 - t2] = e5[s2];
  return n2;
};
var Ns = function(e5, t2, n2) {
  return e5.on(t2, n2), { destroy: function() {
    e5.removeListener(t2, n2);
  } };
};
var ws = [].slice;
var ks = function(e5, t2) {
  if ("string" == typeof t2 && (t2 = e5[t2]), "function" != typeof t2)
    throw new Error("bind() requires a function");
  var n2 = ws.call(arguments, 2);
  return function() {
    return t2.apply(e5, n2.concat(ws.call(arguments)));
  };
};
!function(e5, t2) {
  var n2 = Bt, s2 = v.exports, i2 = Cs, o2 = Ns, r2 = ks, a2 = (wt.exports("socket.io-client:socket"), Sn), c2 = Ht;
  e5.exports = h2;
  var u2 = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 }, p2 = s2.prototype.emit;
  function h2(e6, t3, n3) {
    this.io = e6, this.nsp = t3, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = false, this.disconnected = true, this.flags = {}, n3 && n3.query && (this.query = n3.query), this.io.autoConnect && this.open();
  }
  s2(h2.prototype), h2.prototype.subEvents = function() {
    if (!this.subs) {
      var e6 = this.io;
      this.subs = [o2(e6, "open", r2(this, "onopen")), o2(e6, "packet", r2(this, "onpacket")), o2(e6, "close", r2(this, "onclose"))];
    }
  }, h2.prototype.open = h2.prototype.connect = function() {
    return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this;
  }, h2.prototype.send = function() {
    var e6 = i2(arguments);
    return e6.unshift("message"), this.emit.apply(this, e6), this;
  }, h2.prototype.emit = function(e6) {
    if (u2.hasOwnProperty(e6))
      return p2.apply(this, arguments), this;
    var t3 = i2(arguments), s3 = { type: (void 0 !== this.flags.binary ? this.flags.binary : c2(t3)) ? n2.BINARY_EVENT : n2.EVENT, data: t3, options: {} };
    return s3.options.compress = !this.flags || false !== this.flags.compress, "function" == typeof t3[t3.length - 1] && (this.ids, this.acks[this.ids] = t3.pop(), s3.id = this.ids++), this.connected ? this.packet(s3) : this.sendBuffer.push(s3), this.flags = {}, this;
  }, h2.prototype.packet = function(e6) {
    e6.nsp = this.nsp, this.io.packet(e6);
  }, h2.prototype.onopen = function() {
    if ("/" !== this.nsp)
      if (this.query) {
        var e6 = "object" == typeof this.query ? a2.encode(this.query) : this.query;
        this.packet({ type: n2.CONNECT, query: e6 });
      } else
        this.packet({ type: n2.CONNECT });
  }, h2.prototype.onclose = function(e6) {
    this.connected = false, this.disconnected = true, delete this.id, this.emit("disconnect", e6);
  }, h2.prototype.onpacket = function(e6) {
    var t3 = e6.nsp === this.nsp, s3 = e6.type === n2.ERROR && "/" === e6.nsp;
    if (t3 || s3)
      switch (e6.type) {
        case n2.CONNECT:
          this.onconnect();
          break;
        case n2.EVENT:
        case n2.BINARY_EVENT:
          this.onevent(e6);
          break;
        case n2.ACK:
        case n2.BINARY_ACK:
          this.onack(e6);
          break;
        case n2.DISCONNECT:
          this.ondisconnect();
          break;
        case n2.ERROR:
          this.emit("error", e6.data);
      }
  }, h2.prototype.onevent = function(e6) {
    var t3 = e6.data || [];
    null != e6.id && t3.push(this.ack(e6.id)), this.connected ? p2.apply(this, t3) : this.receiveBuffer.push(t3);
  }, h2.prototype.ack = function(e6) {
    var t3 = this, s3 = false;
    return function() {
      if (!s3) {
        s3 = true;
        var o3 = i2(arguments);
        t3.packet({ type: c2(o3) ? n2.BINARY_ACK : n2.ACK, id: e6, data: o3 });
      }
    };
  }, h2.prototype.onack = function(e6) {
    var t3 = this.acks[e6.id];
    "function" == typeof t3 ? (e6.id, e6.data, t3.apply(this, e6.data), delete this.acks[e6.id]) : e6.id;
  }, h2.prototype.onconnect = function() {
    this.connected = true, this.disconnected = false, this.emit("connect"), this.emitBuffered();
  }, h2.prototype.emitBuffered = function() {
    var e6;
    for (e6 = 0; e6 < this.receiveBuffer.length; e6++)
      p2.apply(this, this.receiveBuffer[e6]);
    for (this.receiveBuffer = [], e6 = 0; e6 < this.sendBuffer.length; e6++)
      this.packet(this.sendBuffer[e6]);
    this.sendBuffer = [];
  }, h2.prototype.ondisconnect = function() {
    this.nsp, this.destroy(), this.onclose("io server disconnect");
  }, h2.prototype.destroy = function() {
    if (this.subs) {
      for (var e6 = 0; e6 < this.subs.length; e6++)
        this.subs[e6].destroy();
      this.subs = null;
    }
    this.io.destroy(this);
  }, h2.prototype.close = h2.prototype.disconnect = function() {
    return this.connected && (this.nsp, this.packet({ type: n2.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }, h2.prototype.compress = function(e6) {
    return this.flags.compress = e6, this;
  }, h2.prototype.binary = function(e6) {
    return this.flags.binary = e6, this;
  };
}(Es);
var Is = Os;
function Os(e5) {
  e5 = e5 || {}, this.ms = e5.min || 100, this.max = e5.max || 1e4, this.factor = e5.factor || 2, this.jitter = e5.jitter > 0 && e5.jitter <= 1 ? e5.jitter : 0, this.attempts = 0;
}
Os.prototype.duration = function() {
  var e5 = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t2 = Math.random(), n2 = Math.floor(t2 * this.jitter * e5);
    e5 = 0 == (1 & Math.floor(10 * t2)) ? e5 - n2 : e5 + n2;
  }
  return 0 | Math.min(e5, this.max);
}, Os.prototype.reset = function() {
  this.attempts = 0;
}, Os.prototype.setMin = function(e5) {
  this.ms = e5;
}, Os.prototype.setMax = function(e5) {
  this.max = e5;
}, Os.prototype.setJitter = function(e5) {
  this.jitter = e5;
};
var Ts = class {
  static init(e5, t2, n2) {
    this.host = e5, (void 0 !== t2 && false === t2 || true === n2) && (this.https = false);
  }
  static isMP() {
    return [o.MP_WX, o.MP_ALI, o.MP_BYTE, o.MP_WGAME, o.MP_BAIDU].includes(r.currentPlatform());
  }
  static uri() {
    let e5 = "http";
    return this.https && (e5 += "s"), e5 + "://" + this.index() + this.host;
  }
  static index() {
    return 0 == this.i ? this.i = Math.floor(Math.random() * this.max) + 1 : this.i = this.i % this.max + 1, this.i;
  }
};
Ts.i = 0, Ts.max = 5, Ts.https = true;
var Rs = b(Object.freeze({ __proto__: null, URIResolver: Ts }));
var Ps = b(f);
var As = jt.exports;
var _s = Es.exports;
var Ds = v.exports;
var xs = Bt;
var Ms = Ns;
var Bs = ks;
var Fs = (wt.exports("socket.io-client:manager"), hs);
var Us = Is;
var { URIResolver: js } = Rs;
var Gs = Ps.runStatus;
var qs = Object.prototype.hasOwnProperty;
var Ls = Ws;
function Ws(e5, t2) {
  if (!(this instanceof Ws))
    return new Ws(e5, t2);
  e5 && "object" == typeof e5 && (t2 = e5, e5 = void 0), (t2 = t2 || {}).path = t2.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t2, this.reconnection(false !== t2.reconnection), this.reconnectionAttempts(t2.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t2.reconnectionDelay || 1e3), this.reconnectionDelayMax(t2.reconnectionDelayMax || 5e3), this.randomizationFactor(t2.randomizationFactor || 0.5), this.backoff = new Us({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == t2.timeout ? 2e4 : t2.timeout), this.readyState = "closed", this.uri = e5, this.connecting = [], this.lastPing = null, this.encoding = false, this.packetBuffer = [];
  var n2 = t2.parser || xs;
  this.encoder = new n2.Encoder(), this.decoder = new n2.Decoder(), this.autoConnect = false !== t2.autoConnect, this.autoConnect && this.open();
}
Ws.prototype.emitAll = function() {
  for (var e5 in this.emit.apply(this, arguments), this.nsps)
    qs.call(this.nsps, e5) && this.nsps[e5].emit.apply(this.nsps[e5], arguments);
}, Ws.prototype.updateSocketIds = function() {
  for (var e5 in this.nsps)
    qs.call(this.nsps, e5) && (this.nsps[e5].id = this.generateId(e5));
}, Ws.prototype.generateId = function(e5) {
  return ("/" === e5 ? "" : e5 + "#") + this.engine.id;
}, Ds(Ws.prototype), Ws.prototype.reconnection = function(e5) {
  return arguments.length ? (this._reconnection = !!e5, this) : this._reconnection;
}, Ws.prototype.reconnectionAttempts = function(e5) {
  return arguments.length ? (this._reconnectionAttempts = e5, this) : this._reconnectionAttempts;
}, Ws.prototype.reconnectionDelay = function(e5) {
  return arguments.length ? (this._reconnectionDelay = e5, this.backoff && this.backoff.setMin(e5), this) : this._reconnectionDelay;
}, Ws.prototype.randomizationFactor = function(e5) {
  return arguments.length ? (this._randomizationFactor = e5, this.backoff && this.backoff.setJitter(e5), this) : this._randomizationFactor;
}, Ws.prototype.reconnectionDelayMax = function(e5) {
  return arguments.length ? (this._reconnectionDelayMax = e5, this.backoff && this.backoff.setMax(e5), this) : this._reconnectionDelayMax;
}, Ws.prototype.timeout = function(e5) {
  return arguments.length ? (this._timeout = e5, this) : this._timeout;
}, Ws.prototype.maybeReconnectOnOpen = function() {
  !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
}, Ws.prototype.open = Ws.prototype.connect = function(e5, t2) {
  if (this.readyState, ~this.readyState.indexOf("open"))
    return this;
  this.uri, this.engine = As(this.uri, this.opts);
  var n2 = this.engine, s2 = this;
  this.readyState = "opening", this.skipReconnect = false;
  var i2 = Ms(n2, "open", function() {
    s2.onopen(), e5 && e5();
  }), o2 = Ms(n2, "error", async function(t3) {
    if (s2.uri = js.uri(), s2.cleanup(), s2.readyState = "closed", s2.emitAll("connect_error", t3), e5) {
      var n3 = new Error("Connection error");
      n3.data = t3, e5(n3);
    } else
      s2.maybeReconnectOnOpen();
  });
  if (false !== this._timeout) {
    var r2 = this._timeout, a2 = setTimeout(function() {
      i2.destroy(), n2.close(), n2.emit("error", "timeout"), s2.emitAll("connect_timeout", r2);
    }, r2);
    this.subs.push({ destroy: function() {
      clearTimeout(a2);
    } });
  }
  return this.subs.push(i2), this.subs.push(o2), this;
}, Ws.prototype.onopen = function() {
  this.cleanup(), this.readyState = "open", this.emit("open");
  var e5 = this.engine;
  this.subs.push(Ms(e5, "data", Bs(this, "ondata"))), this.subs.push(Ms(e5, "ping", Bs(this, "onping"))), this.subs.push(Ms(e5, "pong", Bs(this, "onpong"))), this.subs.push(Ms(e5, "error", Bs(this, "onerror"))), this.subs.push(Ms(e5, "close", Bs(this, "onclose"))), this.subs.push(Ms(this.decoder, "decoded", Bs(this, "ondecoded")));
}, Ws.prototype.onping = function() {
  this.lastPing = /* @__PURE__ */ new Date(), this.emitAll("ping");
}, Ws.prototype.onpong = function() {
  this.emitAll("pong", /* @__PURE__ */ new Date() - this.lastPing);
}, Ws.prototype.ondata = function(e5) {
  this.decoder.add(e5);
}, Ws.prototype.ondecoded = function(e5) {
  this.emit("packet", e5);
}, Ws.prototype.onerror = function(e5) {
  this.emitAll("error", e5);
}, Ws.prototype.socket = function(e5, t2) {
  var n2 = this.nsps[e5];
  if (!n2) {
    n2 = new _s(this, e5, t2), this.nsps[e5] = n2;
    var s2 = this;
    n2.on("connecting", i2), n2.on("connect", function() {
      n2.id = s2.generateId(e5);
    }), this.autoConnect && i2();
  }
  function i2() {
    ~Fs(s2.connecting, n2) || s2.connecting.push(n2);
  }
  return n2;
}, Ws.prototype.destroy = function(e5) {
  var t2 = Fs(this.connecting, e5);
  ~t2 && this.connecting.splice(t2, 1), this.connecting.length || this.close();
}, Ws.prototype.packet = function(e5) {
  var t2 = this;
  e5.query && 0 === e5.type && (e5.nsp += "?" + e5.query), t2.encoding ? t2.packetBuffer.push(e5) : (t2.encoding = true, this.encoder.encode(e5, function(n2) {
    for (var s2 = 0; s2 < n2.length; s2++)
      t2.engine.write(n2[s2], e5.options);
    t2.encoding = false, t2.processPacketQueue();
  }));
}, Ws.prototype.processPacketQueue = function() {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var e5 = this.packetBuffer.shift();
    this.packet(e5);
  }
}, Ws.prototype.cleanup = function() {
  for (var e5 = this.subs.length, t2 = 0; t2 < e5; t2++) {
    this.subs.shift().destroy();
  }
  this.packetBuffer = [], this.encoding = false, this.lastPing = null, this.decoder.destroy();
}, Ws.prototype.close = Ws.prototype.disconnect = function() {
  this.skipReconnect = true, this.reconnecting = false, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
}, Ws.prototype.onclose = function(e5) {
  this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e5), this._reconnection && !this.skipReconnect && this.reconnect();
}, Ws.prototype.reconnect = function() {
  if (Gs.isBackend(), this.reconnecting || this.skipReconnect)
    return this;
  var e5 = this;
  if (this.backoff.attempts >= this._reconnectionAttempts)
    this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = false;
  else {
    var t2 = this.backoff.duration();
    this.reconnecting = true;
    var n2 = setTimeout(function() {
      if (Gs.isBackend())
        return e5.reconnecting = false, e5.reconnect(), void e5.emitAll("reconnect_error", "Uniapp running backend, skipped reconnect...");
      e5.skipReconnect || (e5.emitAll("reconnect_attempt", e5.backoff.attempts), e5.emitAll("reconnecting", e5.backoff.attempts), e5.skipReconnect || e5.open(function(t3) {
        t3 ? (e5.reconnecting = false, e5.reconnect(), e5.emitAll("reconnect_error", t3.data)) : e5.onreconnect();
      }));
    }, t2);
    this.subs.push({ destroy: function() {
      clearTimeout(n2);
    } });
  }
}, Ws.prototype.onreconnect = function() {
  var e5 = this.backoff.attempts;
  this.reconnecting = false, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e5);
}, function(e5, t2) {
  var n2 = Mt, s2 = Bt, i2 = Ls;
  wt.exports("socket.io-client");
  e5.exports = t2 = r2;
  var o2 = t2.managers = {};
  function r2(e6, t3) {
    "object" == typeof e6 && (t3 = e6, e6 = void 0), t3 = t3 || {};
    var s3, r3 = n2(e6), a2 = r3.source, c2 = r3.id, u2 = r3.path, p2 = o2[c2] && u2 in o2[c2].nsps;
    return t3.forceNew || t3["force new connection"] || false === t3.multiplex || p2 ? s3 = i2(a2, t3) : (o2[c2] || (o2[c2] = i2(a2, t3)), s3 = o2[c2]), r3.query && !t3.query && (t3.query = r3.query), s3.socket(r3.path, t3);
  }
  t2.protocol = s2.protocol, t2.connect = r2, t2.Manager = Ls, t2.Socket = Es.exports;
}(St, St.exports);
var Vs = St.exports;
var $s = class {
  constructor() {
    this.io = Vs, this.status = t.DISCONNECTED, this.permissions = [Y.NONE], this.connectedObservers = [], this.disconnectedObservers = [];
  }
  connect() {
    this.status = t.CONNECTING;
  }
  socketio() {
    return this.io;
  }
  on(e5, t2) {
    this.io.on(e5, t2);
  }
  disconnect() {
    this.io.disconnect();
  }
  getStatus() {
    return this.status;
  }
  addConnectedObserver(e5) {
    i.isFunction(e5) && this.connectedObservers.push(e5);
  }
  addDisconnectedObserver(e5) {
    i.isFunction(e5) && this.disconnectedObservers.push(e5);
  }
  notify(e5, t2) {
    for (let n2 = 0; n2 < e5.length; n2++)
      e5[n2](t2);
  }
};
var zs = class extends $s {
  constructor(e5) {
    super(), this.reconnectingObservers = [], this.addReconnectingObserver(e5.onReconnecting), this.addDisconnectedObserver(e5.onDisconnected);
  }
  connect(e5) {
    super.connect(), this.io = this.io.connect(e5.uri, e5.opts), this.initListener();
  }
  initListener() {
    this.io.on("connect", () => {
      this.status = t.CONNECTED, this.notify(this.connectedObservers);
    }), this.io.on("reconnecting", (e5) => {
      this.status = t.CONNECTING, this.notify(this.reconnectingObservers, e5);
    }), this.io.on("disconnect", () => {
      this.status = t.DISCONNECTED, this.notify(this.disconnectedObservers);
    }), this.io.on("connect_error", function(e5) {
    });
  }
  addReconnectingObserver(e5) {
    this.reconnectingObservers.push(e5);
  }
};
var Hs = class _Hs {
  static get(e5) {
    const t2 = encodeURIComponent(e5) + "=", n2 = document.cookie.split("; ");
    for (const e6 of n2)
      if (e6.startsWith(t2))
        return decodeURIComponent(e6.substring(t2.length));
    return null;
  }
  static set(e5, t2, n2, s2, i2 = "/", o2 = false) {
    let r2 = encodeURIComponent(e5) + "=" + encodeURIComponent(t2);
    n2 instanceof Date && (r2 += "; expires=" + n2.toGMTString()), i2 && (r2 += "; path=" + i2), s2 && (r2 += "; domain=" + s2), o2 && (r2 += "; secure"), document.cookie = r2;
  }
  static remove(e5, t2, n2 = "/", s2 = false) {
    _Hs.set(e5, "", /* @__PURE__ */ new Date(0), t2, n2, s2);
  }
};
var Js = class {
  asyncGet(e5) {
    let t2 = this.get(e5);
    return Promise.resolve(t2);
  }
  asyncPut(e5, t2) {
    return this.put(e5, t2), Promise.resolve();
  }
  get(e5) {
    let t2 = this.doGet(e5);
    return t2 = JSON.parse(t2), t2;
  }
  put(e5, t2) {
    this.doPut(e5, JSON.stringify(t2));
  }
};
var Xs = class extends Js {
  constructor() {
    super(), this.domain = null;
    this.domain = "undefined" != typeof location && /^(?:[A-za-z0-9-]+\.)+[A-za-z]{2,4}(?:[\/\?#][\/=\?%\-&~`@[\]\':+!\.#\w]*)?$/.test(location.host) ? location.host.split(".").slice(-2).join(".") : null;
  }
  doGet(e5) {
    return Hs.get(e5) || null;
  }
  doPut(e5, t2) {
    const n2 = new Date(2030, 12, 31, 0, 0, 0, 0), s2 = this.domain;
    Hs.set(e5, t2, n2, s2);
  }
  remove(e5) {
    const t2 = this.domain;
    Hs.remove(e5, t2);
  }
  support() {
    return "undefined" != typeof navigator && true === navigator.cookieEnabled;
  }
};
var Ys = class extends Js {
  doGet(e5) {
    return localStorage.getItem(e5) || null;
  }
  doPut(e5, t2) {
    localStorage.setItem(e5, t2);
  }
  remove(e5) {
    localStorage.removeItem(e5);
  }
  support() {
    return !("undefined" != typeof GameGlobal || "undefined" == typeof localStorage || !localStorage.setItem);
  }
};
var Ks = class extends Js {
  doGet(e5) {
    return uni.getStorageSync(e5) || null;
  }
  doPut(e5, t2) {
    uni.setStorageSync(e5, t2);
  }
  remove(e5) {
    uni.removeStorageSync(e5);
  }
  support() {
    return !("object" != typeof uni || !uni.getStorageSync);
  }
};
var Qs = class extends Js {
  doGet(e5) {
    return cc.sys.localStorage.getItem(e5) || null;
  }
  doPut(e5, t2) {
    cc.sys.localStorage.setItem(e5, t2);
  }
  remove(e5) {
    cc.sys.localStorage.removeItem(e5);
  }
  support() {
    return "undefined" != typeof cc && void 0 !== cc.sys.localStorage;
  }
};
var Zs = class extends Js {
  doGet(e5) {
    return wx.getStorageSync(e5) || null;
  }
  doPut(e5, t2) {
    wx.setStorageSync(e5, t2);
  }
  remove(e5) {
    wx.removeStorageSync(e5);
  }
  support() {
    return !("object" != typeof wx || !wx.getStorageSync || "undefined" != typeof tt);
  }
};
var ei = class extends Js {
  asyncGet(e5) {
    return y(this, void 0, void 0, function* () {
      const t2 = yield s.asyncStorage.getItem(e5);
      return JSON.parse(t2);
    });
  }
  asyncPut(e5, t2) {
    return s.asyncStorage.setItem(e5, JSON.stringify(t2));
  }
  doPut(e5, t2) {
    throw new Error("Method not implemented.");
  }
  remove(e5) {
    s.asyncStorage.removeItem(e5);
  }
  support() {
    return n.currentFramework() === e.REACT_NATIVE;
  }
  doGet(e5) {
    throw new Error("Method not implemented.");
  }
};
var ti = class extends Js {
  doGet(e5) {
    const t2 = my.getStorageSync({ key: e5 }).data || null;
    return "string" == typeof JSON.parse(t2) ? JSON.parse(t2) : t2;
  }
  doPut(e5, t2) {
    my.setStorageSync({ key: e5, data: JSON.stringify(t2) });
  }
  remove(e5) {
    my.removeStorageSync({ key: e5 });
  }
  support() {
    return !("undefined" == typeof my || !my.getStorageSync);
  }
};
var ni = class extends Js {
  doGet(e5) {
    return tt.getStorageSync(e5) || null;
  }
  doPut(e5, t2) {
    tt.setStorageSync(e5, t2);
  }
  remove(e5) {
    tt.removeStorageSync(e5);
  }
  support() {
    return !("object" != typeof tt || !tt.getStorageSync);
  }
};
var si = class extends Js {
  doGet(e5) {
    return swan.getStorageSync(e5) || null;
  }
  doPut(e5, t2) {
    swan.setStorageSync(e5, t2);
  }
  remove(e5) {
    swan.removeStorageSync(e5);
  }
  support() {
    return !("undefined" == typeof swan || !swan.getStorageSync);
  }
};
var ii = class _ii {
  constructor() {
    this.supportedStorage = null;
    const e5 = _ii.storages;
    e5.push(new Ks()), e5.push(new Qs()), e5.push(new Ys()), e5.push(new Zs()), e5.push(new ei()), e5.push(new ti()), e5.push(new si()), e5.push(new ni()), e5.push(new Xs()), this.dispatch(), this.supportedStorage;
  }
  static localStorage() {
    return this.instance.supportedStorage;
  }
  dispatch() {
    for (let e5 of _ii.storages)
      if (e5.support()) {
        this.supportedStorage = e5;
        break;
      }
  }
};
ii.storages = new Array(), ii.instance = new ii();
var oi = class _oi {
  static get() {
    return y(this, void 0, void 0, function* () {
      let e5, t2 = ii.localStorage();
      return null !== t2 && (e5 = yield t2.asyncGet(_oi.SM_KEY)), e5;
    });
  }
  static put(e5) {
    return y(this, void 0, void 0, function* () {
      var t2 = ii.localStorage();
      let n2 = e5.sm;
      null !== t2 && n2 && t2.asyncPut(_oi.SM_KEY, n2);
    });
  }
};
oi.SM_KEY = "GE-SM";
var ri = class {
  static e(e5, t2) {
    function n2(e6) {
      return function(e7) {
        return e7 >= 32 && e7 <= 126;
      }(e6) ? String.fromCharCode(function(e7) {
        let n3 = e7 + t2;
        return n3 > 126 ? n3 - 126 + 32 : n3;
      }(e6)) : String.fromCharCode(e6);
    }
    let s2 = "";
    for (let t3 = 0; t3 < e5.length; t3++) {
      s2 += n2(e5.charCodeAt(t3));
    }
    return s2;
  }
};
function ai() {
  try {
    return require_os();
  } catch (e5) {
  }
}
var ci = class {
  static initRNUniqueId() {
    if (n.currentFramework() === e.REACT_NATIVE) {
      let e5 = s.platform, t2 = e5.constants, n2 = { os: e5.OS };
      return "android" === n2.os ? n2.f = t2.Fingerprint : n2.v = e5.Version, JSON.stringify(n2);
    }
    return null;
  }
  static initPlusDeviceId() {
    return new Promise((e5, t2) => {
      "undefined" != typeof plus ? plus.device.getInfo({ success: (t3) => {
        e5(t3.uuid);
      }, fail: (e6) => {
        t2(e6);
      } }) : e5(null);
    });
  }
  static getVideoCard() {
    var e5;
    if (r.currentPlatform() === o.BROWSER && "undefined" != typeof document) {
      const t2 = document.createElement("canvas"), n2 = null !== (e5 = t2.getContext("webgl")) && void 0 !== e5 ? e5 : t2.getContext("experimental-webgl");
      if (n2 && "getExtension" in n2) {
        let e6 = 0, t3 = 0;
        if (navigator.userAgent.indexOf("Firefox") > -1)
          t3 = n2.VENDOR, e6 = n2.RENDERER;
        else {
          let s3 = n2.getExtension("WEBGL_debug_renderer_info");
          if (!s3)
            return null;
          t3 = s3.UNMASKED_VENDOR_WEBGL, e6 = s3.UNMASKED_RENDERER_WEBGL;
        }
        const s2 = { vendor: (n2.getParameter(t3) || "").toString(), renderer: (n2.getParameter(e6) || "").toString() };
        return JSON.stringify(s2);
      }
    }
    return null;
  }
  static z() {
    return y(this, void 0, void 0, function* () {
      const e5 = { p: r.currentPlatform(), f: n.currentFramework(), vc: this.getVideoCard(), rfp: this.initRNUniqueId() };
      return function(e6) {
        if (r.currentPlatform() === o.NODE) {
          const t2 = ai().networkInterfaces();
          for (const n2 in t2) {
            let s2 = t2[n2].find((e7) => "undefined" !== e7.mac && "00:00:00:00:00:00" !== e7.mac);
            s2 && (e6.mc = s2.mac);
          }
        }
      }(e5), ri.e(JSON.stringify(e5), 5);
    });
  }
};
var ui = class {
  constructor(e5) {
    this.rocketsBuffer = /* @__PURE__ */ new Set(), this.socket = e5, this.socket.addConnectedObserver(this.onSocketConnected.bind(this));
  }
  emit(e5) {
    this.socket.status !== t.DISCONNECTED ? (e5.start(), this.doEmit(e5)) : e5.fail({ resultCode: "409", content: "Please connect first" });
  }
  doEmit(e5) {
    if (!e5.complete)
      if (this.socket.status !== t.CONNECT_FAILED)
        if (this.isConnected())
          if (this.hasPermission(e5)) {
            let t2 = setTimeout(() => {
              this.doEmit(e5);
            }, e5.singleTimeout);
            e5.unique && (e5.params.retried = e5.retried), this.socket.socketio().emit(e5.name, e5.params, (n2) => {
              clearTimeout(t2), 200 === n2.resultCode || 200 == n2.code ? e5.success(n2) : e5.fail(n2);
            }), e5.retried++;
          } else
            e5.fail({ resultCode: 401, content: "No permission" });
        else
          this.isConnecting() && this.rocketsBuffer.add(e5);
      else
        e5.fail({ resultCode: 408, content: "Failed to connect GoEasy." });
  }
  hasPermission(e5) {
    return !!this.socket.permissions.find((t2) => t2 === e5.permission);
  }
  isConnected() {
    return [t.CONNECTED, t.RECONNECTED, t.EXPIRED_RECONNECTED, t.DISCONNECTING].includes(this.socket.status);
  }
  isConnecting() {
    return [t.CONNECTING, t.RECONNECTING].includes(this.socket.status);
  }
  onSocketConnected() {
    this.emitBuffer();
  }
  emitBuffer() {
    Array.from(this.rocketsBuffer).forEach((e5) => {
      this.rocketsBuffer.delete(e5), this.doEmit(e5);
    });
  }
};
var pi = class _pi extends z {
  static init() {
    _pi.i = new _pi();
  }
  static fire(e5, t2) {
    this.i.fire(e5, t2);
  }
  static on(e5, t2) {
    this.i.on(e5, t2);
  }
  static off(e5, t2) {
    this.i.off(e5, t2);
  }
};
var hi = class extends $s {
  constructor(e5, t2) {
    super(), this.ioSocket = null, this.sid = null, this.anonymous = false, this.userId = null, this.artifactVersion = te, this.vname = null, this.uri = null, this.ioOpts = null, this.reconnectingTimes = 0, this.messageObservers = /* @__PURE__ */ new Map(), this.connectFailedObservers = [], this.connectingObservers = [], this.expiredReconnectedObservers = [], this.options = e5, this.ioSocket = new zs({ onDisconnected: this.onIoDisconnected.bind(this), onReconnecting: this.onIoReconnecting.bind(this) }), this.ioSocketEmitter = new ui(this.ioSocket), this.ioSocket.addConnectedObserver(this.onIoReconnected.bind(this)), this.initOptions(t2), this.connect();
  }
  initUserId() {
    let e5 = this.connectOptions.id;
    i.isEmpty(e5) ? this.anonymous = true : this.userId = e5.toString();
  }
  socketio() {
    return this.ioSocket.socketio();
  }
  extendOptions() {
    let e5 = this.connectOptions;
    if (i.isNull(e5.data) || i.isDef(e5.data) && !i.isObject(e5.data))
      throw { code: 400, content: "TypeError: data requires an object." };
    if ((i.isDef(e5.data) ? String(e5.data).length : 0) > 300 && i.isObject(e5) && i.isFunction(e5.onFailed))
      throw { code: 400, content: "user.data-length limit 300 byte." };
    if (i.isObject(e5.wxmpId)) {
      if (i.isEmpty(e5.wxmpId.appid))
        throw { code: 400, content: "wxmpId.appid is required." };
      if (i.isEmpty(e5.wxmpId.openid))
        throw { code: 400, content: "wxmpId.openid is required. requires string." };
    } else if (i.isPrimitive(e5.wxmpId))
      throw { code: 400, content: "TypeError: wxmpId requires an object." };
  }
  initUriAndOpts() {
    let e5 = this.options;
    Ts.init(e5.host, e5.forceTLS, e5.supportOldBrowser), this.uri = Ts.uri();
    let t2 = ["websocket"];
    true === e5.supportOldBrowser && t2.push("polling"), this.ioOpts = { transports: t2, timeout: d.connect, reconnectionDelayMax: d.reconnectionDelayMax }, function(e6) {
      if (r.currentPlatform() === o.NODE) {
        let t3 = ai();
        const n2 = `Nodejs/${process.version} (${t3.platform()} ${t3.release()} ${t3.arch()})`;
        e6.extraHeaders = { "User-Agent": n2 };
      }
    }(this.ioOpts);
  }
  onIoReconnected() {
    this.status === t.RECONNECTING && this.authorize();
  }
  sendAck(e5, t2) {
    this.ioSocket.io.emit(e5, t2);
  }
  initOptions(e5) {
    this.connectOptions = e5, this.addConnectedObserver(e5.onSuccess), this.addConnectFailedObserver(e5.onFailed), this.addConnectingObserver(e5.onProgress), this.initUserId();
  }
  connect() {
    this.initUriAndOpts(), this.extendOptions(), super.connect(), this.onConnecting(), this.ioSocket.connect({ uri: this.uri, opts: this.ioOpts }), this.authorize();
  }
  disconnect() {
    return new Promise((e5, n2) => {
      this.status = t.DISCONNECTING;
      let s2 = () => {
        this.ioSocket.disconnect(), this.status = t.DISCONNECTED, pi.fire(lt.DISCONNECTED), e5();
      };
      const i2 = W.modules.get("GN");
      if (i2 && (i2.params.regId || this.connectOptions.wxmpId)) {
        let e6 = (e7) => {
          n2(e7);
        }, t2 = new Q({ name: l.manualDisconnect, params: {}, permission: Y.READ, singleTimeout: d.commonRequestSingle, totalTimeout: d.commonRequestTotal, fail: e6, success: s2 });
        H.Socket.e(t2);
      } else
        s2();
    });
  }
  authorize() {
    return y(this, void 0, void 0, function* () {
      let e5 = this.connectOptions, t2 = { appkey: this.options.appkey, userId: this.userId, userData: JSON.stringify(e5.data), otp: e5.otp, artifactVersion: this.artifactVersion, sid: this.sid, mP: yield W.getParams(), a: this.anonymous, z: yield ci.z(), sm: yield oi.get(), c: { n: this.vname, v: this.artifactVersion } };
      JSON.stringify(t2);
      let n2 = new Q({ name: l.authorize, params: t2, permission: Y.NONE, singleTimeout: d.commonInfiniteSingle, totalTimeout: d.commonInfiniteTotal, success: (e6) => {
        this.onAuthorizeSuccess(e6);
      }, fail: (e6) => {
        this.onAuthorizeFailed(e6);
      } });
      this.ioSocketEmitter.emit(n2);
    });
  }
  onConnecting() {
    pi.fire(lt.CONNECTING, this.reconnectingTimes), this.notify(this.connectingObservers, this.reconnectingTimes);
  }
  onIoReconnecting() {
    this.reconnectingTimes++, this.status == t.CONNECTED || this.status == t.EXPIRED_RECONNECTED || this.status == t.RECONNECTING ? this.status = t.RECONNECTING : this.status = t.CONNECTING, this.onConnecting();
  }
  onIoDisconnected() {
    this.status !== t.DISCONNECTING && (this.status = t.RECONNECTING, pi.fire(lt.LOST), this.notify(this.disconnectedObservers));
  }
  onAuthorizeSuccess(e5) {
    if (oi.put(e5), W.setDatas(e5.mD), this.status === t.RECONNECTING) {
      this.sid !== e5.sid ? (this.status = t.EXPIRED_RECONNECTED, this.sid = e5.sid, pi.fire(lt.EXPIRED_RECONNECTED), this.notify(this.expiredReconnectedObservers)) : (this.status = t.RECONNECTED, pi.fire(lt.RECONNECTED));
    } else
      this.status = t.CONNECTED, this.sid = e5.sid;
    e5.enablePublish && (this.permissions.find((e6) => e6 == Y.WRITE) || this.permissions.push(Y.WRITE)), e5.enableSubscribe && (this.permissions.find((e6) => e6 == Y.READ) || this.permissions.push(Y.READ)), this.reconnectingTimes = 0, pi.fire(lt.CONNECTED), this.notify(this.connectedObservers);
  }
  onAuthorizeFailed(e5) {
    this.ioSocket.disconnect(), this.status = t.CONNECT_FAILED;
    let n2 = { code: e5.resultCode || 408, content: e5.content || "Host unreachable or timeout" };
    this.notify(this.connectFailedObservers, n2);
  }
  addConnectingObserver(e5) {
    i.isFunction(e5) && this.connectingObservers.push(e5);
  }
  addConnectFailedObserver(e5) {
    i.isFunction(e5) && this.connectFailedObservers.push(e5);
  }
  addExpiredReconnectedObserver(e5) {
    i.isFunction(e5) && this.expiredReconnectedObservers.push(e5);
  }
  onMessage(e5, t2) {
    this.ioSocket.io._callbacks.hasOwnProperty("$" + e5) || this.ioSocket.io.on(e5, t2);
  }
  user() {
    let e5 = this.connectOptions;
    return e5 ? { id: e5.id, data: e5.data } : null;
  }
};
var li = class {
  constructor(e5) {
    this.guidList = [], this.socket = e5;
  }
  offMessage(e5, t2) {
    pi.off(lt.NEW_MESSAGE + "_" + e5, t2);
  }
  onMessage(e5, t2) {
    pi.on(lt.NEW_MESSAGE + "_" + e5, t2), this.socket.onMessage(e5, (t3) => {
      this.fire(e5, t3);
    });
  }
  fire(e5, t2) {
    let n2 = this.filter(t2);
    n2 && pi.fire(lt.NEW_MESSAGE + "_" + e5, n2);
  }
  filter(e5) {
    if ("string" == typeof e5 && (e5 = JSON.parse(e5)), e5.i) {
      const t2 = `${e5.i}_${e5.r}`;
      if (this.guidList.findIndex((e6) => e6 === t2) > -1)
        return;
      this.guidList.unshift(t2), this.guidList.length > 300 && this.guidList.pop();
    }
    return e5;
  }
};
var di = class _di {
  static init(e5) {
    this.i = new _di(e5);
  }
  constructor(e5) {
    this.goeasyOptions = e5;
  }
  static connect(e5, n2) {
    if (this.status() !== t.DISCONNECTED && i.isObject(e5) && i.isFunction(e5.onFailed))
      return void e5.onFailed({ code: 408, content: "It is already connected, don't try again until disconnect() is called. " });
    at(Ve, e5), pi.init();
    let s2 = this.i;
    W.preConnect(e5), s2.socket = new hi(s2.goeasyOptions, e5), s2.socket.vname = n2, s2.emitter = new ui(s2.socket), s2.messageListener = new li(s2.socket), W.postConnect();
  }
  static e(e5) {
    this.i.emitter.emit(e5);
  }
  static sendAck(e5, t2) {
    this.i.socket.sendAck(e5, t2);
  }
  static status() {
    return this.i && this.i.socket ? this.i.socket.getStatus() : t.DISCONNECTED;
  }
  static on(e5, t2) {
    pi.on(e5, t2);
  }
  static off(e5, t2) {
    pi.off(e5, t2);
  }
  static offMessage(e5, t2) {
    this.i.messageListener.offMessage(e5, t2);
  }
  static onMessage(e5, t2) {
    this.i.messageListener.onMessage(e5, t2);
  }
  static disconnect(e5) {
    this.status() === t.CONNECTED || this.status() === t.RECONNECTED ? this.i.socket.disconnect().then(() => {
      m.onSuccess(e5);
    }).catch((t2) => {
      m.onFailed(e5, t2);
    }) : m.onFailed(e5, { code: 408, content: "Host unreachable or timeout" });
  }
  static user() {
    return this.i.socket.user();
  }
};
di.EVENT = lt;
var fi = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  getData(e5) {
    return this.map.get(e5);
  }
  setData(e5, t2) {
    this.map.set(e5, t2);
  }
};
var mi = class _mi {
  constructor() {
    this.dataCache = new fi();
  }
  static init() {
    this.i = new _mi();
  }
  getData(...e5) {
    return y(this, void 0, void 0, function* () {
      let t2 = [], n2 = /* @__PURE__ */ new Map();
      return e5.forEach((e6) => {
        let s2 = this.dataCache.getData(e6);
        s2 ? n2.set(e6, s2) : t2.push(e6);
      }), 0 === t2.length || (yield this.fetchData(...t2)).forEach((e6, t3) => {
        this.dataCache.setData(t3, e6), n2.set(t3, e6);
      }), Promise.resolve(n2);
    });
  }
  fetchData(...e5) {
    return new Promise((t2, n2) => {
      let s2 = new Q({ name: l.MD_CMD, permission: Y.READ, singleTimeout: d.commonRequestSingle, totalTimeout: d.commonRequestTotal, params: { name: "GET", data: { ids: e5 } }, success: (e6) => {
        if (200 === e6.code) {
          const n3 = /* @__PURE__ */ new Map();
          e6.content.forEach((e7) => {
            n3.set(e7.id, e7.data);
          }), t2(n3);
        } else
          n2(e6);
      }, fail: (e6) => {
        n2(e6);
      } });
      H.Socket.e(s2);
    });
  }
  setData(e5, t2) {
    this.dataCache.setData(e5, t2);
  }
};
var yi = class _yi {
  static getInstance(e5) {
    return this.init(e5), _yi;
  }
  static init(e5) {
    if (this.getConnectionStatus() !== t.DISCONNECTED)
      throw new Error("Initialization failed. Please disconnect and try again.");
    at(We, e5), e5.modules = e5.modules.map((e6) => e6.toUpperCase()), s.init(e5.reactNativeOptions), this.options = e5, di.init(e5), e5.allowNotification && ee.init(e5.allowNotification), e5.modules && e5.modules.includes("PUBSUB") && W.initModule(vt.init()), H.init(di, ee, mi, te, a, W);
  }
  static setBadge(e5) {
    ee.setBadge(e5);
  }
  static connect(e5) {
    di.connect(e5, "JS-L");
  }
  static disconnect(e5) {
    di.disconnect(e5);
  }
  static getConnectionStatus() {
    return di.status();
  }
  static onClickNotification(e5) {
    ee.onClickNotification(e5);
  }
};
yi.version = te, yi.pubsub = class {
  static publish(e5) {
    this.catch(() => {
      bt.instance.publish(e5);
    }, e5);
  }
  static subscribe(e5) {
    this.catch(() => {
      bt.instance.subscribe(e5);
    }, e5);
  }
  static unsubscribe(e5) {
    this.catch(() => {
      bt.instance.unsubscribe(e5);
    }, e5);
  }
  static subscribePresence(e5) {
    this.catch(() => {
      bt.instance.subscribePresence(e5);
    }, e5);
  }
  static unsubscribePresence(e5) {
    this.catch(() => {
      bt.instance.unsubscribePresence(e5);
    }, e5);
  }
  static history(e5) {
    this.catch(() => {
      bt.instance.history(e5);
    }, e5);
  }
  static hereNow(e5) {
    this.catch(() => {
      bt.instance.hereNow(e5);
    }, e5);
  }
  static catch(e5, n2) {
    try {
      if (vt.check(), [t.DISCONNECTED, t.DISCONNECTING, t.CONNECT_FAILED].includes(H.Socket.status()))
        throw new Error("Please call connect() first.");
      e5();
    } catch (e6) {
      m.onFailed(n2, e6);
    }
  }
};
export {
  yi as default
};
//# sourceMappingURL=goeasy-lite.js.map
