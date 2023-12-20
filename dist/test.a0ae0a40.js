// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "* {\n    box-sizing: border-box;margin: 0;padding: 0;\n  }\n *:before,*:after {\n    box-sizing: border-box;\n  }\n#html {\n    background: #FFFF00;\n    font-size: 100px;\n}\n#pikachu {\n    position: absolute;\n    width: 4.2em;\n    height: 2.35em;\n    left:50%;\n    top:50%;\n -webkit-transform:translateY(-50%) translateX(-50%);\n -moz-transform:translateY(-50%) translateX(-50%);\n -ms-transform:translateY(-50%) translateX(-50%);\n transform:translateY(-50%) translateX(-50%);\n}\n.eye {\n    width: .57em;\n    height: .57em;\n    border: .03em solid black;\n    background: #2e2e2e;\n    border-radius: 100%;\n    position: absolute;\n    margin-left: .6em;\n}\n.eye:after {\n    width: .25em;\n    height: .25em;\n    border: .03em solid black;\n    background: #fff;\n    content: '';\n    display: block;\n    position: absolute;\n    border-radius: 100%;\n    margin-left: .07em;\n    margin-top: -.02em;\n}\n.eye.right {\n    right: .6em;\n}\n.nose {\n    position: absolute;\n    margin: .3em calc(50% - .11em);\n    margin-top: .38em;\n    width: 0;\n    height: 0;\n    z-index: 1; \n    border-top:.09em solid black;\n    border-left:.11em solid transparent;\n    border-right:.11em solid transparent;\n    box-shadow: 0 -.01em 0 black;\n}\n.nose:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: .22em;\n    height: .05em;\n    background: black;\n    border-top-left-radius: .11em .05em;\n    border-top-right-radius: .11em .05em;\n    margin-top: -.14em;\n    margin-left: -.11em;\n}\n.nose:hover {\n-webkit-animation:nose .23s infinite linear;\n-moz-animation:nose .23s infinite;\n-ms-animation:nose .23s infinite;\nanimation:nose .23s infinite linear;\n}\n.Mouth {\n    position: absolute;\n    width: 2.28em;\n    height: 1.8em;\n    margin-top: .65em;\n    margin-left: calc(50% - 1.18em);\n    overflow: hidden;\n}\n.Mouth:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: .8em;\n    height: .25em;\n    background: #FFFF00;\n    border: .03em solid black;\n    border-top: none;\n    border-left: none;\n    right: .25em;\n    top: -.05em;\n    -webkit-transform:rotate(25deg);\n    -moz-transform:rotate(25deg);\n    -ms-transform:rotate(25deg);\n    transform:rotate(25deg);\n    border-bottom-right-radius: .6em .3em;\n    box-shadow: 0 -.1em 0 #FFFF00, -.05em -.03em 0 #FFFF00;\n}\n.Mouth:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: .8em;\n    height: .25em;\n    background: #FFFF00;\n    border: .03em solid black;\n    border-top: none;\n    border-right: none;\n    left: .35em;\n    top: -.05em;\n    -webkit-transform:rotate(-25deg);\n    -moz-transform:rotate(-25deg);\n    -ms-transform:rotate(-25deg);\n    transform:rotate(-25deg);\n    border-bottom-left-radius: .6em .3em;\n    box-shadow: 0 -.1em 0 #FFFF00, .05em -.03em 0 #FFFF00;\n    z-index: 1;\n}\n.Mouth > div {\n    position: absolute;\n    background: #FF485F;\n    width: 2.28em;\n    height: 8em;\n    border: .04em solid black;\n    border-bottom-left-radius: 1.18em 8em;\n    border-bottom-right-radius: 1.18em 8em;\n    margin-top: -6.37em;\n    overflow: hidden;\n}\n.Mouth > div:after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 1.3em;\n    height: 1em;\n    box-shadow: 0 -.7em 0 #9B000A;\n    bottom: .35em;\n    margin-left: .49em;\n    border-top-left-radius: 100%;\n    border-top-right-radius: 100%;\n}\n.cheek {\n    width: .82em;\n    height: .82em;\n    border: .03em solid black;\n    border-radius: 100%;\n    position: absolute;\n    margin-top: 1.1em;\n    background: #F00;\n}\n.cheek.right {\n    right: 0;\n}\n\n@-webkit-keyframes nose {\n0% { -webkit-transform:rotate(0deg); }\n33% { -webkit-transform:rotate(-5deg); }\n67% { -webkit-transform:rotate(5deg); }\n100% { -webkit-transform:rotate(0deg); }\n}\n@-moz-keyframes nose {\n0% { -moz-transform:rotate(0deg); }\n33% { -moz-transform:rotate(-5deg); }\n67% { -moz-transform:rotate(5deg); }\n100% { -moz-transform:rotate(0deg); }\n}\n@-ms-keyframes nose {\n0% { -ms-transform:rotate(0deg); }\n33% { -ms-transform:rotate(-5deg); }\n67% { -ms-transform:rotate(5deg); }\n100% { -ms-transform:rotate(0deg); }\n}\n@keyframes nose {\n0% { transform:rotate(0deg); }\n33% { transform:rotate(-5deg); }\n67% { transform:rotate(5deg); }\n100% { transform:rotate(0deg); }\n}";

exports.default = string;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  id: undefined,
  time: 40,
  ui: {
    demoHTML: document.querySelector("#demoHTML"),
    demoText: document.querySelector("#demoText")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    player.ui.demoText.innerText = _css2.default.substring(0, player.n);
    player.ui.demoHTML.innerHTML = _css2.default.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n == _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demoText.innerText = _css2.default.substring(0, player.n);
    player.ui.demoHTML.innerHTML = _css2.default.substring(0, player.n);
    player.ui.demoText.scrollTop = player.ui.demoText.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 150;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 40;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};

player.init();
},{"./css.js":"css.js"}],"..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '64788' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.a0ae0a40.map