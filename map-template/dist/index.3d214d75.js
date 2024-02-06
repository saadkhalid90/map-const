// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3QC3y":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gridCanvas = require("./scripts/gridCanvas");
var _d3 = require("d3");
var _elections2018Json = require("./translatedGrids/elections2018_.json");
var _elections2018JsonDefault = parcelHelpers.interopDefault(_elections2018Json);
var _contrastRatio = require("./scripts/contrastRatio");
var _contrastRatioDefault = parcelHelpers.interopDefault(_contrastRatio);
const partyScale = (0, _d3.scaleOrdinal)().domain([
    "PML-Q",
    "PPP",
    "PNA",
    "Ind",
    "IJI",
    "PDA",
    "MQM",
    "PML-N",
    "MMA",
    "PTI",
    "AL"
]).range([
    "#4CD0E0",
    "#757575",
    "#66BB6A",
    "#FBC02C",
    "#66BB6A",
    "#757575",
    "#F48FB1",
    "#66BB6A",
    "#4DB6AC",
    "#9D27B0",
    "#F48FB1"
]);
const getWord = (sentence, index)=>sentence.split(" ")[index];
const elecGridCanvas = new (0, _gridCanvas.GridCanvas)({
    parentRef: document.querySelector("div#my-map"),
    containerClassName: "map-container",
    containerWidth: 1000,
    viewBoxWidth: 1280,
    viewBoxHeight: 1400,
    gridData: (0, _elections2018JsonDefault.default),
    cellSize: 40,
    cellMargin: 1
});
const getWinColor = (d)=>d.result.length === 0 ? "#eeeeee" : partyScale.domain().includes(d.result[0].party) ? partyScale(d.result[0].party) : "#dddddd";
const gridGrps = elecGridCanvas.appendGridGrps({}, {
    id: (d)=>`const-${d.id}`
}).appendGridRects({
    fill: getWinColor
}).appendPropRects({
    fill: getWinColor
}).appendGridLabels({}, {
    fill: (d)=>(0, _contrastRatioDefault.default)(getWinColor(d), "#000000") > 6 ? "black" : "#ddd",
    dx: 19.5,
    dy: 25,
    "font-family": "sans-serif"
}, {
    "user-select": "none"
}).event("gridGrps", "mouseover", (canvas)=>function() {
        const { mode } = canvas;
        const rectGrp = (0, _d3.select)(this);
        rectGrp.raise();
        rectGrp.append("title").text((d)=>d.desc);
        const rect = rectGrp.select("rect.grid-rect");
        rect.attr("stroke", mode === "party" ? "#212121" : "grey").attr("stroke-width", mode === "party" ? 5 : 4).attr("rx", 1).attr("ry", 1);
    }).event("gridGrps", "mouseout", (canvas)=>function() {
        const rect = (0, _d3.select)(this).select("rect.grid-rect");
        (0, _d3.select)("title").remove();
        rect.attr("stroke", "none").attr("rx", 0).attr("ry", 0);
    });
//.updateMode("party");
(0, _d3.select)("button#mode-switch").on("click", function() {
    gridGrps.mode === "party" ? gridGrps.updateMode("turnout") : gridGrps.updateMode("party");
});
(0, _d3.select)("button#filter").on("click", function() {
    gridGrps.applyFilter({
        winnerArr: [],
        runnerUpArr: []
    });
});

},{"./scripts/gridCanvas":"aRfhM","d3":"17XFv","./translatedGrids/elections2018_.json":"9zBaP","./scripts/contrastRatio":"hRDXo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRfhM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GridCanvas", ()=>GridCanvas);
var _d3 = require("d3");
var _multiAttrsStyles = require("./multiAttrsStyles");
var _contrastRatio = require("./contrastRatio");
var _contrastRatioDefault = parcelHelpers.interopDefault(_contrastRatio);
const partyScale = (0, _d3.scaleOrdinal)().domain([
    "PML-Q",
    "PPP",
    "PNA",
    "Ind",
    "IJI",
    "PDA",
    "MQM",
    "PML-N",
    "MMA",
    "PTI",
    "AL"
]).range([
    "#4CD0E0",
    "#757575",
    "#66BB6A",
    "#FBC02C",
    "#66BB6A",
    "#757575",
    "#F48FB1",
    "#66BB6A",
    "#4DB6AC",
    "#9D27B0",
    "#F48FB1"
]);
const getWinColor = (d)=>d.result.length === 0 ? "#eeeeee" : partyScale.domain().includes(d.result[0].party) ? partyScale(d.result[0].party) : "#dddddd";
// Class for GridCanvas
// Template for generating instances
class GridCanvas {
    constructor({ parentRef, containerClassName = "grid-container", containerWidth, viewBoxWidth, viewBoxHeight, gridData, cellSize, cellMargin }){
        const root = (0, _d3.select)(parentRef);
        const container = root.append("div").attr("class", containerClassName).style("width", containerWidth);
        const svg = container.append("svg").style("width", "100%").attr("viewBox", `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
        const cellWidth = cellSize - cellMargin;
        const mode = "party";
        Object.assign(this, {
            root,
            svg,
            gridData,
            cellSize,
            cellWidth,
            viewBoxWidth,
            viewBoxHeight,
            mode
        });
    }
    addFeature(propName, callback) {
        // this can be generalized to vizCanvas (something like addDataProp - features are essentially data);
        this.gridData.forEach((grid)=>grid[propName] = callback(grid));
    }
    remove() {
        // this can also be generalized to Viz canvas
        this.root.selectAll("*").remove();
        this.svg = null; // what about other additions (map parts?)
    }
    appendGridGrps({ groupId = "grid-grps" } = {}, attrsObj = {}, stylesObj = {}) {
        const { svg, gridData, cellSize, viewBoxWidth } = this;
        const maxXY = minMaxGrid(gridData);
        const maxX = maxXY.x[1];
        const maxY = maxXY.y[1];
        const grpWidth = (maxX + 1) * 40;
        const grpHeight = (maxY + 1) * 40;
        const transX = (viewBoxWidth - grpWidth) / 2;
        const transY = 40;
        const gridG = svg.append("g").attr("transform", `translate(${transX}, ${transY})`);
        if (groupId) gridG.attr("id", groupId);
        const gridGrps = gridG.selectAll("g.grid-grp").data(gridData).enter().append("g").attr("class", "grid-grp").attr("transform", (d, i)=>`translate(${d.xGrid * cellSize} ${d.yGrid * cellSize})`).call((0, _multiAttrsStyles.attrs), attrsObj).call((0, _multiAttrsStyles.styles), stylesObj);
        this.gridGrps = gridGrps;
        return this;
    }
    appendGridRects(attrsObj = {}, stylesObj = {}) {
        const { gridGrps, cellWidth } = this;
        const gridRects = gridGrps.append("rect").attr("class", "grid-rect").attr("rx", 0).attr("ry", 0).attr("width", cellWidth).attr("height", cellWidth).attr("fill-opacity", 1).attr("transform", "scale(0 0)").call((0, _multiAttrsStyles.attrs), attrsObj).call((0, _multiAttrsStyles.styles), stylesObj);
        gridRects.transition().duration(500).delay((d)=>d.id * 1).attr("transform", "scale(1 1)");
        this.gridRects = gridRects;
        return this;
    }
    appendPropRects(attrsObj = {}, stylesObj = {}) {
        const { gridGrps, cellWidth } = this;
        const propRects = gridGrps.append("rect").attr("class", "prop-rect").attr("rx", 0).attr("ry", 0).attr("width", cellWidth).attr("height", 0).attr("transform", (d)=>`translate(0 ${cellWidth})`).call((0, _multiAttrsStyles.attrs), attrsObj).call((0, _multiAttrsStyles.styles), stylesObj);
        this.propRects = propRects;
        return this;
    }
    appendGridLabels({ textFunc = (d)=>getWord(d.desc, 2).slice(0, 2) } = {}, attrsObj = {}, stylesObj = {}) {
        const { gridGrps } = this;
        const gridLabels = gridGrps.append("text").text(textFunc).attr("x", 0).attr("y", 0).attr("text-anchor", "middle").attr("font-size", "15px").call((0, _multiAttrsStyles.attrs), attrsObj).call((0, _multiAttrsStyles.styles), stylesObj);
        this.gridLabels = gridLabels;
        return this;
    }
    updateMode(mode, durMs = 400) {
        const { gridRects, propRects, gridLabels, cellWidth } = this;
        this.mode = mode;
        gridRects.transition().duration(durMs).call((0, _multiAttrsStyles.attrs), {
            "fill-opacity": mode === "party" ? 1 : 0.1,
            fill: mode === "turnout" ? "#bbb" : getWinColor
        });
        propRects.transition().duration(durMs).call((0, _multiAttrsStyles.attrs), {
            height: mode === "party" ? 0 : (d)=>cellWidth * (mode === "margin" ? voteMargin(d.result, d.totalVotes) : d.voterTurnout / 100),
            transform: (d)=>`translate(0 ${mode === "party" ? cellWidth : cellWidth - cellWidth * (mode === "margin" ? voteMargin(d.result, d.totalVotes) : d.voterTurnout / 100)})`,
            fill: mode === "turnout" ? "#bbb" : getWinColor
        });
        gridLabels.transition().duration(durMs).call((0, _multiAttrsStyles.attrs), {
            fill: (d)=>mode === "party" ? (0, _contrastRatioDefault.default)(getWinColor(d), "#000000") > 6 ? "black" : "#ddd" : "black"
        });
        return this;
    }
    event(selectionId, eventType, callbackGen) {
        const canvasObj = this;
        canvasObj[selectionId].on(eventType, callbackGen(canvasObj));
        return this;
    }
    applyFilter(filterObj) {
        const { gridGrps } = this;
        gridGrps.attr("opacity", (d)=>filterConstit(d, filterObj) ? 1 : 0.2).style("pointer-events", (d)=>filterConstit(d, filterObj) ? "auto" : "none");
    }
}
function voteMargin(result, totalVotes) {
    if (result.length === 1 | totalVotes === 0) return 1;
    else {
        const winnerVotes = Number(result[0].votes);
        const runnerupVotes = Number(result[1].votes);
        const margin = (winnerVotes - runnerupVotes) / totalVotes;
        if (margin < 0) console.log(result);
        return margin;
    }
}
function getWord(sentence, index) {
    return sentence.split(" ")[index];
}
function minMaxGrid(electionData) {
    const xGridArr = electionData.map((d)=>d.xGrid);
    const yGridArr = electionData.map((d)=>d.yGrid);
    return {
        x: [
            (0, _d3.min)(xGridArr),
            (0, _d3.max)(xGridArr)
        ],
        y: [
            (0, _d3.min)(yGridArr),
            (0, _d3.max)(yGridArr)
        ]
    };
}
function filterConstit(entry, filterObj) {
    const { winnerArr, runnerUpArr, turnoutArr } = filterObj;
    const winner = entry.result[0].party;
    const runnerUpObj = entry.result[1];
    const runnerUp = runnerUpObj ? runnerUpObj.party : undefined;
    const winnerLog = winnerArr.length === 0 ? true : winnerArr.includes(winner);
    const runnerUpLog = runnerUpArr.length === 0 ? true : runnerUpArr.includes(runnerUp);
    const turnoutLog = turnoutArr === undefined ? true : entry.voterTurnout >= turnoutArr[0] && entry.voterTurnout <= turnoutArr[1];
    return winnerLog && runnerUpLog && turnoutLog;
}

},{"d3":"17XFv","./multiAttrsStyles":"6aN1P","./contrastRatio":"hRDXo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17XFv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
parcelHelpers.exportAll(_d3Array, exports);
var _d3Axis = require("d3-axis");
parcelHelpers.exportAll(_d3Axis, exports);
var _d3Brush = require("d3-brush");
parcelHelpers.exportAll(_d3Brush, exports);
var _d3Chord = require("d3-chord");
parcelHelpers.exportAll(_d3Chord, exports);
var _d3Color = require("d3-color");
parcelHelpers.exportAll(_d3Color, exports);
var _d3Contour = require("d3-contour");
parcelHelpers.exportAll(_d3Contour, exports);
var _d3Delaunay = require("d3-delaunay");
parcelHelpers.exportAll(_d3Delaunay, exports);
var _d3Dispatch = require("d3-dispatch");
parcelHelpers.exportAll(_d3Dispatch, exports);
var _d3Drag = require("d3-drag");
parcelHelpers.exportAll(_d3Drag, exports);
var _d3Dsv = require("d3-dsv");
parcelHelpers.exportAll(_d3Dsv, exports);
var _d3Ease = require("d3-ease");
parcelHelpers.exportAll(_d3Ease, exports);
var _d3Fetch = require("d3-fetch");
parcelHelpers.exportAll(_d3Fetch, exports);
var _d3Force = require("d3-force");
parcelHelpers.exportAll(_d3Force, exports);
var _d3Format = require("d3-format");
parcelHelpers.exportAll(_d3Format, exports);
var _d3Geo = require("d3-geo");
parcelHelpers.exportAll(_d3Geo, exports);
var _d3Hierarchy = require("d3-hierarchy");
parcelHelpers.exportAll(_d3Hierarchy, exports);
var _d3Interpolate = require("d3-interpolate");
parcelHelpers.exportAll(_d3Interpolate, exports);
var _d3Path = require("d3-path");
parcelHelpers.exportAll(_d3Path, exports);
var _d3Polygon = require("d3-polygon");
parcelHelpers.exportAll(_d3Polygon, exports);
var _d3Quadtree = require("d3-quadtree");
parcelHelpers.exportAll(_d3Quadtree, exports);
var _d3Random = require("d3-random");
parcelHelpers.exportAll(_d3Random, exports);
var _d3Scale = require("d3-scale");
parcelHelpers.exportAll(_d3Scale, exports);
var _d3ScaleChromatic = require("d3-scale-chromatic");
parcelHelpers.exportAll(_d3ScaleChromatic, exports);
var _d3Selection = require("d3-selection");
parcelHelpers.exportAll(_d3Selection, exports);
var _d3Shape = require("d3-shape");
parcelHelpers.exportAll(_d3Shape, exports);
var _d3Time = require("d3-time");
parcelHelpers.exportAll(_d3Time, exports);
var _d3TimeFormat = require("d3-time-format");
parcelHelpers.exportAll(_d3TimeFormat, exports);
var _d3Timer = require("d3-timer");
parcelHelpers.exportAll(_d3Timer, exports);
var _d3Transition = require("d3-transition");
parcelHelpers.exportAll(_d3Transition, exports);
var _d3Zoom = require("d3-zoom");
parcelHelpers.exportAll(_d3Zoom, exports);

},{"d3-array":"1yX2W","d3-axis":false,"d3-brush":"7TG1H","d3-chord":false,"d3-color":false,"d3-contour":false,"d3-delaunay":false,"d3-dispatch":false,"d3-drag":false,"d3-dsv":false,"d3-ease":false,"d3-fetch":false,"d3-force":false,"d3-format":false,"d3-geo":false,"d3-hierarchy":false,"d3-interpolate":false,"d3-path":false,"d3-polygon":false,"d3-quadtree":false,"d3-random":false,"d3-scale":"UQ8g3","d3-scale-chromatic":false,"d3-selection":"gn9gd","d3-shape":false,"d3-time":false,"d3-time-format":false,"d3-timer":false,"d3-transition":"4lorl","d3-zoom":"hQoq0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yX2W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisect", ()=>(0, _bisectJsDefault.default));
parcelHelpers.export(exports, "bisectRight", ()=>(0, _bisectJs.bisectRight));
parcelHelpers.export(exports, "bisectLeft", ()=>(0, _bisectJs.bisectLeft));
parcelHelpers.export(exports, "bisectCenter", ()=>(0, _bisectJs.bisectCenter));
parcelHelpers.export(exports, "ascending", ()=>(0, _ascendingJsDefault.default));
parcelHelpers.export(exports, "bisector", ()=>(0, _bisectorJsDefault.default));
parcelHelpers.export(exports, "blur", ()=>(0, _blurJs.blur));
parcelHelpers.export(exports, "blur2", ()=>(0, _blurJs.blur2));
parcelHelpers.export(exports, "blurImage", ()=>(0, _blurJs.blurImage));
parcelHelpers.export(exports, "count", ()=>(0, _countJsDefault.default));
parcelHelpers.export(exports, "cross", ()=>(0, _crossJsDefault.default));
parcelHelpers.export(exports, "cumsum", ()=>(0, _cumsumJsDefault.default));
parcelHelpers.export(exports, "descending", ()=>(0, _descendingJsDefault.default));
parcelHelpers.export(exports, "deviation", ()=>(0, _deviationJsDefault.default));
parcelHelpers.export(exports, "extent", ()=>(0, _extentJsDefault.default));
parcelHelpers.export(exports, "Adder", ()=>(0, _fsumJs.Adder));
parcelHelpers.export(exports, "fsum", ()=>(0, _fsumJs.fsum));
parcelHelpers.export(exports, "fcumsum", ()=>(0, _fsumJs.fcumsum));
parcelHelpers.export(exports, "group", ()=>(0, _groupJsDefault.default));
parcelHelpers.export(exports, "flatGroup", ()=>(0, _groupJs.flatGroup));
parcelHelpers.export(exports, "flatRollup", ()=>(0, _groupJs.flatRollup));
parcelHelpers.export(exports, "groups", ()=>(0, _groupJs.groups));
parcelHelpers.export(exports, "index", ()=>(0, _groupJs.index));
parcelHelpers.export(exports, "indexes", ()=>(0, _groupJs.indexes));
parcelHelpers.export(exports, "rollup", ()=>(0, _groupJs.rollup));
parcelHelpers.export(exports, "rollups", ()=>(0, _groupJs.rollups));
parcelHelpers.export(exports, "groupSort", ()=>(0, _groupSortJsDefault.default));
parcelHelpers.export(exports, "bin", ()=>(0, _binJsDefault.default)) // Deprecated; use bin.
;
parcelHelpers.export(exports, "histogram", ()=>(0, _binJsDefault.default));
parcelHelpers.export(exports, "thresholdFreedmanDiaconis", ()=>(0, _freedmanDiaconisJsDefault.default));
parcelHelpers.export(exports, "thresholdScott", ()=>(0, _scottJsDefault.default));
parcelHelpers.export(exports, "thresholdSturges", ()=>(0, _sturgesJsDefault.default));
parcelHelpers.export(exports, "max", ()=>(0, _maxJsDefault.default));
parcelHelpers.export(exports, "maxIndex", ()=>(0, _maxIndexJsDefault.default));
parcelHelpers.export(exports, "mean", ()=>(0, _meanJsDefault.default));
parcelHelpers.export(exports, "median", ()=>(0, _medianJsDefault.default));
parcelHelpers.export(exports, "medianIndex", ()=>(0, _medianJs.medianIndex));
parcelHelpers.export(exports, "merge", ()=>(0, _mergeJsDefault.default));
parcelHelpers.export(exports, "min", ()=>(0, _minJsDefault.default));
parcelHelpers.export(exports, "minIndex", ()=>(0, _minIndexJsDefault.default));
parcelHelpers.export(exports, "mode", ()=>(0, _modeJsDefault.default));
parcelHelpers.export(exports, "nice", ()=>(0, _niceJsDefault.default));
parcelHelpers.export(exports, "pairs", ()=>(0, _pairsJsDefault.default));
parcelHelpers.export(exports, "permute", ()=>(0, _permuteJsDefault.default));
parcelHelpers.export(exports, "quantile", ()=>(0, _quantileJsDefault.default));
parcelHelpers.export(exports, "quantileIndex", ()=>(0, _quantileJs.quantileIndex));
parcelHelpers.export(exports, "quantileSorted", ()=>(0, _quantileJs.quantileSorted));
parcelHelpers.export(exports, "quickselect", ()=>(0, _quickselectJsDefault.default));
parcelHelpers.export(exports, "range", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "rank", ()=>(0, _rankJsDefault.default));
parcelHelpers.export(exports, "least", ()=>(0, _leastJsDefault.default));
parcelHelpers.export(exports, "leastIndex", ()=>(0, _leastIndexJsDefault.default));
parcelHelpers.export(exports, "greatest", ()=>(0, _greatestJsDefault.default));
parcelHelpers.export(exports, "greatestIndex", ()=>(0, _greatestIndexJsDefault.default));
parcelHelpers.export(exports, "scan", ()=>(0, _scanJsDefault.default)) // Deprecated; use leastIndex.
;
parcelHelpers.export(exports, "shuffle", ()=>(0, _shuffleJsDefault.default));
parcelHelpers.export(exports, "shuffler", ()=>(0, _shuffleJs.shuffler));
parcelHelpers.export(exports, "sum", ()=>(0, _sumJsDefault.default));
parcelHelpers.export(exports, "ticks", ()=>(0, _ticksJsDefault.default));
parcelHelpers.export(exports, "tickIncrement", ()=>(0, _ticksJs.tickIncrement));
parcelHelpers.export(exports, "tickStep", ()=>(0, _ticksJs.tickStep));
parcelHelpers.export(exports, "transpose", ()=>(0, _transposeJsDefault.default));
parcelHelpers.export(exports, "variance", ()=>(0, _varianceJsDefault.default));
parcelHelpers.export(exports, "zip", ()=>(0, _zipJsDefault.default));
parcelHelpers.export(exports, "every", ()=>(0, _everyJsDefault.default));
parcelHelpers.export(exports, "some", ()=>(0, _someJsDefault.default));
parcelHelpers.export(exports, "filter", ()=>(0, _filterJsDefault.default));
parcelHelpers.export(exports, "map", ()=>(0, _mapJsDefault.default));
parcelHelpers.export(exports, "reduce", ()=>(0, _reduceJsDefault.default));
parcelHelpers.export(exports, "reverse", ()=>(0, _reverseJsDefault.default));
parcelHelpers.export(exports, "sort", ()=>(0, _sortJsDefault.default));
parcelHelpers.export(exports, "difference", ()=>(0, _differenceJsDefault.default));
parcelHelpers.export(exports, "disjoint", ()=>(0, _disjointJsDefault.default));
parcelHelpers.export(exports, "intersection", ()=>(0, _intersectionJsDefault.default));
parcelHelpers.export(exports, "subset", ()=>(0, _subsetJsDefault.default));
parcelHelpers.export(exports, "superset", ()=>(0, _supersetJsDefault.default));
parcelHelpers.export(exports, "union", ()=>(0, _unionJsDefault.default));
parcelHelpers.export(exports, "InternMap", ()=>(0, _internmap.InternMap));
parcelHelpers.export(exports, "InternSet", ()=>(0, _internmap.InternSet));
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _blurJs = require("./blur.js");
var _countJs = require("./count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _crossJs = require("./cross.js");
var _crossJsDefault = parcelHelpers.interopDefault(_crossJs);
var _cumsumJs = require("./cumsum.js");
var _cumsumJsDefault = parcelHelpers.interopDefault(_cumsumJs);
var _descendingJs = require("./descending.js");
var _descendingJsDefault = parcelHelpers.interopDefault(_descendingJs);
var _deviationJs = require("./deviation.js");
var _deviationJsDefault = parcelHelpers.interopDefault(_deviationJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _fsumJs = require("./fsum.js");
var _groupJs = require("./group.js");
var _groupJsDefault = parcelHelpers.interopDefault(_groupJs);
var _groupSortJs = require("./groupSort.js");
var _groupSortJsDefault = parcelHelpers.interopDefault(_groupSortJs);
var _binJs = require("./bin.js");
var _binJsDefault = parcelHelpers.interopDefault(_binJs);
var _freedmanDiaconisJs = require("./threshold/freedmanDiaconis.js");
var _freedmanDiaconisJsDefault = parcelHelpers.interopDefault(_freedmanDiaconisJs);
var _scottJs = require("./threshold/scott.js");
var _scottJsDefault = parcelHelpers.interopDefault(_scottJs);
var _sturgesJs = require("./threshold/sturges.js");
var _sturgesJsDefault = parcelHelpers.interopDefault(_sturgesJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _maxIndexJs = require("./maxIndex.js");
var _maxIndexJsDefault = parcelHelpers.interopDefault(_maxIndexJs);
var _meanJs = require("./mean.js");
var _meanJsDefault = parcelHelpers.interopDefault(_meanJs);
var _medianJs = require("./median.js");
var _medianJsDefault = parcelHelpers.interopDefault(_medianJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _minIndexJs = require("./minIndex.js");
var _minIndexJsDefault = parcelHelpers.interopDefault(_minIndexJs);
var _modeJs = require("./mode.js");
var _modeJsDefault = parcelHelpers.interopDefault(_modeJs);
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _pairsJs = require("./pairs.js");
var _pairsJsDefault = parcelHelpers.interopDefault(_pairsJs);
var _permuteJs = require("./permute.js");
var _permuteJsDefault = parcelHelpers.interopDefault(_permuteJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quickselectJs = require("./quickselect.js");
var _quickselectJsDefault = parcelHelpers.interopDefault(_quickselectJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _rankJs = require("./rank.js");
var _rankJsDefault = parcelHelpers.interopDefault(_rankJs);
var _leastJs = require("./least.js");
var _leastJsDefault = parcelHelpers.interopDefault(_leastJs);
var _leastIndexJs = require("./leastIndex.js");
var _leastIndexJsDefault = parcelHelpers.interopDefault(_leastIndexJs);
var _greatestJs = require("./greatest.js");
var _greatestJsDefault = parcelHelpers.interopDefault(_greatestJs);
var _greatestIndexJs = require("./greatestIndex.js");
var _greatestIndexJsDefault = parcelHelpers.interopDefault(_greatestIndexJs);
var _scanJs = require("./scan.js");
var _scanJsDefault = parcelHelpers.interopDefault(_scanJs);
var _shuffleJs = require("./shuffle.js");
var _shuffleJsDefault = parcelHelpers.interopDefault(_shuffleJs);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
var _ticksJs = require("./ticks.js");
var _ticksJsDefault = parcelHelpers.interopDefault(_ticksJs);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
var _varianceJs = require("./variance.js");
var _varianceJsDefault = parcelHelpers.interopDefault(_varianceJs);
var _zipJs = require("./zip.js");
var _zipJsDefault = parcelHelpers.interopDefault(_zipJs);
var _everyJs = require("./every.js");
var _everyJsDefault = parcelHelpers.interopDefault(_everyJs);
var _someJs = require("./some.js");
var _someJsDefault = parcelHelpers.interopDefault(_someJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _differenceJs = require("./difference.js");
var _differenceJsDefault = parcelHelpers.interopDefault(_differenceJs);
var _disjointJs = require("./disjoint.js");
var _disjointJsDefault = parcelHelpers.interopDefault(_disjointJs);
var _intersectionJs = require("./intersection.js");
var _intersectionJsDefault = parcelHelpers.interopDefault(_intersectionJs);
var _subsetJs = require("./subset.js");
var _subsetJsDefault = parcelHelpers.interopDefault(_subsetJs);
var _supersetJs = require("./superset.js");
var _supersetJsDefault = parcelHelpers.interopDefault(_supersetJs);
var _unionJs = require("./union.js");
var _unionJsDefault = parcelHelpers.interopDefault(_unionJs);
var _internmap = require("internmap");

},{"./bisect.js":false,"./ascending.js":false,"./bisector.js":false,"./blur.js":false,"./count.js":false,"./cross.js":false,"./cumsum.js":false,"./descending.js":false,"./deviation.js":false,"./extent.js":false,"./fsum.js":false,"./group.js":false,"./groupSort.js":false,"./bin.js":false,"./threshold/freedmanDiaconis.js":false,"./threshold/scott.js":false,"./threshold/sturges.js":false,"./max.js":"6b1uv","./maxIndex.js":false,"./mean.js":false,"./median.js":false,"./merge.js":false,"./min.js":"1KKa7","./minIndex.js":false,"./mode.js":false,"./nice.js":false,"./pairs.js":false,"./permute.js":false,"./quantile.js":false,"./quickselect.js":false,"./range.js":false,"./rank.js":false,"./least.js":false,"./leastIndex.js":false,"./greatest.js":false,"./greatestIndex.js":false,"./scan.js":false,"./shuffle.js":false,"./sum.js":false,"./ticks.js":false,"./transpose.js":false,"./variance.js":false,"./zip.js":false,"./every.js":false,"./some.js":false,"./filter.js":false,"./map.js":false,"./reduce.js":false,"./reverse.js":false,"./sort.js":false,"./difference.js":false,"./disjoint.js":false,"./intersection.js":false,"./subset.js":false,"./superset.js":false,"./union.js":false,"internmap":"a6b0X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6b1uv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>max);
function max(values, valueof) {
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (max < value || max === undefined && value >= value)) max = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value;
    }
    return max;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1KKa7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>min);
function min(values, valueof) {
    let min;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (min > value || min === undefined && value >= value)) min = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) min = value;
    }
    return min;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6b0X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InternMap", ()=>InternMap);
parcelHelpers.export(exports, "InternSet", ()=>InternSet);
class InternMap extends Map {
    constructor(entries, key = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (entries != null) for (const [key, value] of entries)this.set(key, value);
    }
    get(key) {
        return super.get(intern_get(this, key));
    }
    has(key) {
        return super.has(intern_get(this, key));
    }
    set(key, value) {
        return super.set(intern_set(this, key), value);
    }
    delete(key) {
        return super.delete(intern_delete(this, key));
    }
}
class InternSet extends Set {
    constructor(values, key = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (values != null) for (const value of values)this.add(value);
    }
    has(value) {
        return super.has(intern_get(this, value));
    }
    add(value) {
        return super.add(intern_set(this, value));
    }
    delete(value) {
        return super.delete(intern_delete(this, value));
    }
}
function intern_get({ _intern, _key }, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) return _intern.get(key);
    _intern.set(key, value);
    return value;
}
function intern_delete({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) {
        value = _intern.get(key);
        _intern.delete(key);
    }
    return value;
}
function keyof(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7TG1H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "brush", ()=>(0, _brushJsDefault.default));
parcelHelpers.export(exports, "brushX", ()=>(0, _brushJs.brushX));
parcelHelpers.export(exports, "brushY", ()=>(0, _brushJs.brushY));
parcelHelpers.export(exports, "brushSelection", ()=>(0, _brushJs.brushSelection));
var _brushJs = require("./brush.js");
var _brushJsDefault = parcelHelpers.interopDefault(_brushJs);

},{"./brush.js":"7XkAB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XkAB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "brushSelection", ()=>brushSelection);
parcelHelpers.export(exports, "brushX", ()=>brushX);
parcelHelpers.export(exports, "brushY", ()=>brushY);
parcelHelpers.export(exports, "default", ()=>function() {
        return brush(XY);
    });
var _d3Dispatch = require("d3-dispatch");
var _d3Drag = require("d3-drag");
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _d3Transition = require("d3-transition");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _eventJs = require("./event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _noeventJs = require("./noevent.js");
var _noeventJsDefault = parcelHelpers.interopDefault(_noeventJs);
var MODE_DRAG = {
    name: "drag"
}, MODE_SPACE = {
    name: "space"
}, MODE_HANDLE = {
    name: "handle"
}, MODE_CENTER = {
    name: "center"
};
const { abs, max, min } = Math;
function number1(e) {
    return [
        +e[0],
        +e[1]
    ];
}
function number2(e) {
    return [
        number1(e[0]),
        number1(e[1])
    ];
}
var X = {
    name: "x",
    handles: [
        "w",
        "e"
    ].map(type),
    input: function(x, e) {
        return x == null ? null : [
            [
                +x[0],
                e[0][1]
            ],
            [
                +x[1],
                e[1][1]
            ]
        ];
    },
    output: function(xy) {
        return xy && [
            xy[0][0],
            xy[1][0]
        ];
    }
};
var Y = {
    name: "y",
    handles: [
        "n",
        "s"
    ].map(type),
    input: function(y, e) {
        return y == null ? null : [
            [
                e[0][0],
                +y[0]
            ],
            [
                e[1][0],
                +y[1]
            ]
        ];
    },
    output: function(xy) {
        return xy && [
            xy[0][1],
            xy[1][1]
        ];
    }
};
var XY = {
    name: "xy",
    handles: [
        "n",
        "w",
        "e",
        "s",
        "nw",
        "ne",
        "sw",
        "se"
    ].map(type),
    input: function(xy) {
        return xy == null ? null : number2(xy);
    },
    output: function(xy) {
        return xy;
    }
};
var cursors = {
    overlay: "crosshair",
    selection: "move",
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
};
var flipX = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
};
var flipY = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
};
var signsX = {
    overlay: 1,
    selection: 1,
    n: null,
    e: 1,
    s: null,
    w: -1,
    nw: -1,
    ne: 1,
    se: 1,
    sw: -1
};
var signsY = {
    overlay: 1,
    selection: 1,
    n: -1,
    e: null,
    s: 1,
    w: null,
    nw: -1,
    ne: -1,
    se: 1,
    sw: 1
};
function type(t) {
    return {
        type: t
    };
}
// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
}
function defaultExtent() {
    var svg = this.ownerSVGElement || this;
    if (svg.hasAttribute("viewBox")) {
        svg = svg.viewBox.baseVal;
        return [
            [
                svg.x,
                svg.y
            ],
            [
                svg.x + svg.width,
                svg.y + svg.height
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            svg.width.baseVal.value,
            svg.height.baseVal.value
        ]
    ];
}
function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
    while(!node.__brush)if (!(node = node.parentNode)) return;
    return node.__brush;
}
function empty(extent) {
    return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
}
function brushSelection(node) {
    var state = node.__brush;
    return state ? state.dim.output(state.selection) : null;
}
function brushX() {
    return brush(X);
}
function brushY() {
    return brush(Y);
}
function brush(dim) {
    var extent = defaultExtent, filter = defaultFilter, touchable = defaultTouchable, keys = true, listeners = (0, _d3Dispatch.dispatch)("start", "brush", "end"), handleSize = 6, touchending;
    function brush(group) {
        var overlay = group.property("__brush", initialize).selectAll(".overlay").data([
            type("overlay")
        ]);
        overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", cursors.overlay).merge(overlay).each(function() {
            var extent = local(this).extent;
            (0, _d3Selection.select)(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
        });
        group.selectAll(".selection").data([
            type("selection")
        ]).enter().append("rect").attr("class", "selection").attr("cursor", cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var handle = group.selectAll(".handle").data(dim.handles, function(d) {
            return d.type;
        });
        handle.exit().remove();
        handle.enter().append("rect").attr("class", function(d) {
            return "handle handle--" + d.type;
        }).attr("cursor", function(d) {
            return cursors[d.type];
        });
        group.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    brush.move = function(group, selection, event) {
        if (group.tween) group.on("start.brush", function(event) {
            emitter(this, arguments).beforestart().start(event);
        }).on("interrupt.brush end.brush", function(event) {
            emitter(this, arguments).end(event);
        }).tween("brush", function() {
            var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent), i = (0, _d3Interpolate.interpolate)(selection0, selection1);
            function tween(t) {
                state.selection = t === 1 && selection1 === null ? null : i(t);
                redraw.call(that);
                emit.brush();
            }
            return selection0 !== null && selection1 !== null ? tween : tween(1);
        });
        else group.each(function() {
            var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent), emit = emitter(that, args).beforestart();
            (0, _d3Transition.interrupt)(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event).brush(event).end(event);
        });
    };
    brush.clear = function(group, event) {
        brush.move(group, null, event);
    };
    function redraw() {
        var group = (0, _d3Selection.select)(this), selection = local(this).selection;
        if (selection) {
            group.selectAll(".selection").style("display", null).attr("x", selection[0][0]).attr("y", selection[0][1]).attr("width", selection[1][0] - selection[0][0]).attr("height", selection[1][1] - selection[0][1]);
            group.selectAll(".handle").style("display", null).attr("x", function(d) {
                return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2;
            }).attr("y", function(d) {
                return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2;
            }).attr("width", function(d) {
                return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize;
            }).attr("height", function(d) {
                return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize;
            });
        } else group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }
    function emitter(that, args, clean) {
        var emit = that.__brush.emitter;
        return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
    }
    function Emitter(that, args, clean) {
        this.that = that;
        this.args = args;
        this.state = that.__brush;
        this.active = 0;
        this.clean = clean;
    }
    Emitter.prototype = {
        beforestart: function() {
            if (++this.active === 1) this.state.emitter = this, this.starting = true;
            return this;
        },
        start: function(event, mode) {
            if (this.starting) this.starting = false, this.emit("start", event, mode);
            else this.emit("brush", event);
            return this;
        },
        brush: function(event, mode) {
            this.emit("brush", event, mode);
            return this;
        },
        end: function(event, mode) {
            if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
            return this;
        },
        emit: function(type, event, mode) {
            var d = (0, _d3Selection.select)(this.that).datum();
            listeners.call(type, this.that, new (0, _eventJsDefault.default)(type, {
                sourceEvent: event,
                target: brush,
                selection: dim.output(this.state.selection),
                mode,
                dispatch: listeners
            }), d);
        }
    };
    function started(event) {
        if (touchending && !event.touches) return;
        if (!filter.apply(this, arguments)) return;
        var that = this, type = event.target.__data__.type, mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : keys && event.altKey ? MODE_CENTER : MODE_HANDLE, signX = dim === Y ? null : signsX[type], signY = dim === X ? null : signsY[type], state = local(that), extent = state.extent, selection = state.selection, W = extent[0][0], w0, w1, N = extent[0][1], n0, n1, E = extent[1][0], e0, e1, S = extent[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && event.shiftKey, lockX, lockY, points = Array.from(event.touches || [
            event
        ], (t)=>{
            const i = t.identifier;
            t = (0, _d3Selection.pointer)(t, that);
            t.point0 = t.slice();
            t.identifier = i;
            return t;
        });
        (0, _d3Transition.interrupt)(that);
        var emit = emitter(that, arguments, true).beforestart();
        if (type === "overlay") {
            if (selection) moving = true;
            const pts = [
                points[0],
                points[1] || points[0]
            ];
            state.selection = selection = [
                [
                    w0 = dim === Y ? W : min(pts[0][0], pts[1][0]),
                    n0 = dim === X ? N : min(pts[0][1], pts[1][1])
                ],
                [
                    e0 = dim === Y ? E : max(pts[0][0], pts[1][0]),
                    s0 = dim === X ? S : max(pts[0][1], pts[1][1])
                ]
            ];
            if (points.length > 1) move(event);
        } else {
            w0 = selection[0][0];
            n0 = selection[0][1];
            e0 = selection[1][0];
            s0 = selection[1][1];
        }
        w1 = w0;
        n1 = n0;
        e1 = e0;
        s1 = s0;
        var group = (0, _d3Selection.select)(that).attr("pointer-events", "none");
        var overlay = group.selectAll(".overlay").attr("cursor", cursors[type]);
        if (event.touches) {
            emit.moved = moved;
            emit.ended = ended;
        } else {
            var view = (0, _d3Selection.select)(event.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
            if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
            (0, _d3Drag.dragDisable)(event.view);
        }
        redraw.call(that);
        emit.start(event, mode.name);
        function moved(event) {
            for (const p of event.changedTouches || [
                event
            ]){
                for (const d of points)if (d.identifier === p.identifier) d.cur = (0, _d3Selection.pointer)(p, that);
            }
            if (shifting && !lockX && !lockY && points.length === 1) {
                const point = points[0];
                if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1])) lockY = true;
                else lockX = true;
            }
            for (const point of points)if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
            moving = true;
            (0, _noeventJsDefault.default)(event);
            move(event);
        }
        function move(event) {
            const point = points[0], point0 = point.point0;
            var t;
            dx = point[0] - point0[0];
            dy = point[1] - point0[1];
            switch(mode){
                case MODE_SPACE:
                case MODE_DRAG:
                    if (signX) dx = max(W - w0, min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
                    if (signY) dy = max(N - n0, min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
                    break;
                case MODE_HANDLE:
                    if (points[1]) {
                        if (signX) w1 = max(W, min(E, points[0][0])), e1 = max(W, min(E, points[1][0])), signX = 1;
                        if (signY) n1 = max(N, min(S, points[0][1])), s1 = max(N, min(S, points[1][1])), signY = 1;
                    } else {
                        if (signX < 0) dx = max(W - w0, min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
                        else if (signX > 0) dx = max(W - e0, min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
                        if (signY < 0) dy = max(N - n0, min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
                        else if (signY > 0) dy = max(N - s0, min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
                    }
                    break;
                case MODE_CENTER:
                    if (signX) w1 = max(W, min(E, w0 - dx * signX)), e1 = max(W, min(E, e0 + dx * signX));
                    if (signY) n1 = max(N, min(S, n0 - dy * signY)), s1 = max(N, min(S, s0 + dy * signY));
                    break;
            }
            if (e1 < w1) {
                signX *= -1;
                t = w0, w0 = e0, e0 = t;
                t = w1, w1 = e1, e1 = t;
                if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
            }
            if (s1 < n1) {
                signY *= -1;
                t = n0, n0 = s0, s0 = t;
                t = n1, n1 = s1, s1 = t;
                if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
            }
            if (state.selection) selection = state.selection; // May be set by brush.move!
            if (lockX) w1 = selection[0][0], e1 = selection[1][0];
            if (lockY) n1 = selection[0][1], s1 = selection[1][1];
            if (selection[0][0] !== w1 || selection[0][1] !== n1 || selection[1][0] !== e1 || selection[1][1] !== s1) {
                state.selection = [
                    [
                        w1,
                        n1
                    ],
                    [
                        e1,
                        s1
                    ]
                ];
                redraw.call(that);
                emit.brush(event, mode.name);
            }
        }
        function ended(event) {
            (0, _noeventJs.nopropagation)(event);
            if (event.touches) {
                if (event.touches.length) return;
                if (touchending) clearTimeout(touchending);
                touchending = setTimeout(function() {
                    touchending = null;
                }, 500); // Ghost clicks are delayed!
            } else {
                (0, _d3Drag.dragEnable)(event.view, moving);
                view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
            }
            group.attr("pointer-events", "all");
            overlay.attr("cursor", cursors.overlay);
            if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
            if (empty(selection)) state.selection = null, redraw.call(that);
            emit.end(event, mode.name);
        }
        function keydowned(event) {
            switch(event.keyCode){
                case 16:
                    shifting = signX && signY;
                    break;
                case 18:
                    if (mode === MODE_HANDLE) {
                        if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                        if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                        mode = MODE_CENTER;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === MODE_HANDLE || mode === MODE_CENTER) {
                        if (signX < 0) e0 = e1 - dx;
                        else if (signX > 0) w0 = w1 - dx;
                        if (signY < 0) s0 = s1 - dy;
                        else if (signY > 0) n0 = n1 - dy;
                        mode = MODE_SPACE;
                        overlay.attr("cursor", cursors.selection);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            (0, _noeventJsDefault.default)(event);
        }
        function keyupped(event) {
            switch(event.keyCode){
                case 16:
                    if (shifting) {
                        lockX = lockY = shifting = false;
                        move(event);
                    }
                    break;
                case 18:
                    if (mode === MODE_CENTER) {
                        if (signX < 0) e0 = e1;
                        else if (signX > 0) w0 = w1;
                        if (signY < 0) s0 = s1;
                        else if (signY > 0) n0 = n1;
                        mode = MODE_HANDLE;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === MODE_SPACE) {
                        if (event.altKey) {
                            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                            mode = MODE_CENTER;
                        } else {
                            if (signX < 0) e0 = e1;
                            else if (signX > 0) w0 = w1;
                            if (signY < 0) s0 = s1;
                            else if (signY > 0) n0 = n1;
                            mode = MODE_HANDLE;
                        }
                        overlay.attr("cursor", cursors[type]);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            (0, _noeventJsDefault.default)(event);
        }
    }
    function touchmoved(event) {
        emitter(this, arguments).moved(event);
    }
    function touchended(event) {
        emitter(this, arguments).ended(event);
    }
    function initialize() {
        var state = this.__brush || {
            selection: null
        };
        state.extent = number2(extent.apply(this, arguments));
        state.dim = dim;
        return state;
    }
    brush.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(number2(_)), brush) : extent;
    };
    brush.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(!!_), brush) : filter;
    };
    brush.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(!!_), brush) : touchable;
    };
    brush.handleSize = function(_) {
        return arguments.length ? (handleSize = +_, brush) : handleSize;
    };
    brush.keyModifiers = function(_) {
        return arguments.length ? (keys = !!_, brush) : keys;
    };
    brush.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? brush : value;
    };
    return brush;
}

},{"d3-dispatch":"5WtHO","d3-drag":"hGy7N","d3-interpolate":"6jJyi","d3-selection":"gn9gd","d3-transition":"4lorl","./constant.js":"fmgIQ","./event.js":"6f6C1","./noevent.js":"cozwm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5WtHO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dispatch", ()=>(0, _dispatchJsDefault.default));
var _dispatchJs = require("./dispatch.js");
var _dispatchJsDefault = parcelHelpers.interopDefault(_dispatchJs);

},{"./dispatch.js":"8Hmyd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Hmyd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var noop = {
    value: ()=>{}
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
exports.default = dispatch;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGy7N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drag", ()=>(0, _dragJsDefault.default));
parcelHelpers.export(exports, "dragDisable", ()=>(0, _nodragJsDefault.default));
parcelHelpers.export(exports, "dragEnable", ()=>(0, _nodragJs.yesdrag));
var _dragJs = require("./drag.js");
var _dragJsDefault = parcelHelpers.interopDefault(_dragJs);
var _nodragJs = require("./nodrag.js");
var _nodragJsDefault = parcelHelpers.interopDefault(_nodragJs);

},{"./drag.js":false,"./nodrag.js":"la87z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"la87z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(view) {
        var root = view.document.documentElement, selection = (0, _d3Selection.select)(view).on("dragstart.drag", (0, _noeventJsDefault.default), (0, _noeventJs.nonpassivecapture));
        if ("onselectstart" in root) selection.on("selectstart.drag", (0, _noeventJsDefault.default), (0, _noeventJs.nonpassivecapture));
        else {
            root.__noselect = root.style.MozUserSelect;
            root.style.MozUserSelect = "none";
        }
    });
parcelHelpers.export(exports, "yesdrag", ()=>yesdrag);
var _d3Selection = require("d3-selection");
var _noeventJs = require("./noevent.js");
var _noeventJsDefault = parcelHelpers.interopDefault(_noeventJs);
function yesdrag(view, noclick) {
    var root = view.document.documentElement, selection = (0, _d3Selection.select)(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", (0, _noeventJsDefault.default), (0, _noeventJs.nonpassivecapture));
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) selection.on("selectstart.drag", null);
    else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}

},{"d3-selection":"gn9gd","./noevent.js":"chHoc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gn9gd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>(0, _createJsDefault.default));
parcelHelpers.export(exports, "creator", ()=>(0, _creatorJsDefault.default));
parcelHelpers.export(exports, "local", ()=>(0, _localJsDefault.default));
parcelHelpers.export(exports, "matcher", ()=>(0, _matcherJsDefault.default));
parcelHelpers.export(exports, "namespace", ()=>(0, _namespaceJsDefault.default));
parcelHelpers.export(exports, "namespaces", ()=>(0, _namespacesJsDefault.default));
parcelHelpers.export(exports, "pointer", ()=>(0, _pointerJsDefault.default));
parcelHelpers.export(exports, "pointers", ()=>(0, _pointersJsDefault.default));
parcelHelpers.export(exports, "select", ()=>(0, _selectJsDefault.default));
parcelHelpers.export(exports, "selectAll", ()=>(0, _selectAllJsDefault.default));
parcelHelpers.export(exports, "selection", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "selector", ()=>(0, _selectorJsDefault.default));
parcelHelpers.export(exports, "selectorAll", ()=>(0, _selectorAllJsDefault.default));
parcelHelpers.export(exports, "style", ()=>(0, _styleJs.styleValue));
parcelHelpers.export(exports, "window", ()=>(0, _windowJsDefault.default));
var _createJs = require("./create.js");
var _createJsDefault = parcelHelpers.interopDefault(_createJs);
var _creatorJs = require("./creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _localJs = require("./local.js");
var _localJsDefault = parcelHelpers.interopDefault(_localJs);
var _matcherJs = require("./matcher.js");
var _matcherJsDefault = parcelHelpers.interopDefault(_matcherJs);
var _namespaceJs = require("./namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
var _namespacesJs = require("./namespaces.js");
var _namespacesJsDefault = parcelHelpers.interopDefault(_namespacesJs);
var _pointerJs = require("./pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _pointersJs = require("./pointers.js");
var _pointersJsDefault = parcelHelpers.interopDefault(_pointersJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _indexJs = require("./selection/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _selectorJs = require("./selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
var _selectorAllJs = require("./selectorAll.js");
var _selectorAllJsDefault = parcelHelpers.interopDefault(_selectorAllJs);
var _styleJs = require("./selection/style.js");
var _windowJs = require("./window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);

},{"./create.js":false,"./creator.js":false,"./local.js":false,"./matcher.js":"hovSo","./namespace.js":"a23xG","./namespaces.js":false,"./pointer.js":"bs1Eh","./pointers.js":false,"./select.js":"4pqgd","./selectAll.js":false,"./selection/index.js":"fK3Dl","./selector.js":"7VF9r","./selectorAll.js":"2SKTE","./selection/style.js":"GUHZ1","./window.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6062":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var fullname = (0, _namespaceJsDefault.default)(name);
        return (fullname.local ? creatorFixed : creatorInherit)(fullname);
    });
var _namespaceJs = require("./namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
var _namespacesJs = require("./namespaces.js");
function creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === (0, _namespacesJs.xhtml) && document.documentElement.namespaceURI === (0, _namespacesJs.xhtml) ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}

},{"./namespace.js":"a23xG","./namespaces.js":"dDfgS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a23xG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var prefix = name += "", i = prefix.indexOf(":");
        if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
        return (0, _namespacesJsDefault.default).hasOwnProperty(prefix) ? {
            space: (0, _namespacesJsDefault.default)[prefix],
            local: name
        } : name; // eslint-disable-line no-prototype-builtins
    });
var _namespacesJs = require("./namespaces.js");
var _namespacesJsDefault = parcelHelpers.interopDefault(_namespacesJs);

},{"./namespaces.js":"dDfgS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDfgS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xhtml", ()=>xhtml);
var xhtml = "http://www.w3.org/1999/xhtml";
exports.default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hovSo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return function() {
            return this.matches(selector);
        };
    });
parcelHelpers.export(exports, "childMatcher", ()=>childMatcher);
function childMatcher(selector) {
    return function(node) {
        return node.matches(selector);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bs1Eh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(event, node) {
        event = (0, _sourceEventJsDefault.default)(event);
        if (node === undefined) node = event.currentTarget;
        if (node) {
            var svg = node.ownerSVGElement || node;
            if (svg.createSVGPoint) {
                var point = svg.createSVGPoint();
                point.x = event.clientX, point.y = event.clientY;
                point = point.matrixTransform(node.getScreenCTM().inverse());
                return [
                    point.x,
                    point.y
                ];
            }
            if (node.getBoundingClientRect) {
                var rect = node.getBoundingClientRect();
                return [
                    event.clientX - rect.left - node.clientLeft,
                    event.clientY - rect.top - node.clientTop
                ];
            }
        }
        return [
            event.pageX,
            event.pageY
        ];
    });
var _sourceEventJs = require("./sourceEvent.js");
var _sourceEventJsDefault = parcelHelpers.interopDefault(_sourceEventJs);

},{"./sourceEvent.js":"cDi5d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDi5d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(event) {
        let sourceEvent;
        while(sourceEvent = event.sourceEvent)event = sourceEvent;
        return event;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4pqgd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return typeof selector === "string" ? new (0, _indexJs.Selection)([
            [
                document.querySelector(selector)
            ]
        ], [
            document.documentElement
        ]) : new (0, _indexJs.Selection)([
            [
                selector
            ]
        ], (0, _indexJs.root));
    });
var _indexJs = require("./selection/index.js");

},{"./selection/index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fK3Dl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "root", ()=>root);
parcelHelpers.export(exports, "Selection", ()=>Selection);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _selectChildJs = require("./selectChild.js");
var _selectChildJsDefault = parcelHelpers.interopDefault(_selectChildJs);
var _selectChildrenJs = require("./selectChildren.js");
var _selectChildrenJsDefault = parcelHelpers.interopDefault(_selectChildrenJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _dataJs = require("./data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _enterJs = require("./enter.js");
var _enterJsDefault = parcelHelpers.interopDefault(_enterJs);
var _exitJs = require("./exit.js");
var _exitJsDefault = parcelHelpers.interopDefault(_exitJs);
var _joinJs = require("./join.js");
var _joinJsDefault = parcelHelpers.interopDefault(_joinJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _orderJs = require("./order.js");
var _orderJsDefault = parcelHelpers.interopDefault(_orderJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _callJs = require("./call.js");
var _callJsDefault = parcelHelpers.interopDefault(_callJs);
var _nodesJs = require("./nodes.js");
var _nodesJsDefault = parcelHelpers.interopDefault(_nodesJs);
var _nodeJs = require("./node.js");
var _nodeJsDefault = parcelHelpers.interopDefault(_nodeJs);
var _sizeJs = require("./size.js");
var _sizeJsDefault = parcelHelpers.interopDefault(_sizeJs);
var _emptyJs = require("./empty.js");
var _emptyJsDefault = parcelHelpers.interopDefault(_emptyJs);
var _eachJs = require("./each.js");
var _eachJsDefault = parcelHelpers.interopDefault(_eachJs);
var _attrJs = require("./attr.js");
var _attrJsDefault = parcelHelpers.interopDefault(_attrJs);
var _styleJs = require("./style.js");
var _styleJsDefault = parcelHelpers.interopDefault(_styleJs);
var _propertyJs = require("./property.js");
var _propertyJsDefault = parcelHelpers.interopDefault(_propertyJs);
var _classedJs = require("./classed.js");
var _classedJsDefault = parcelHelpers.interopDefault(_classedJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _htmlJs = require("./html.js");
var _htmlJsDefault = parcelHelpers.interopDefault(_htmlJs);
var _raiseJs = require("./raise.js");
var _raiseJsDefault = parcelHelpers.interopDefault(_raiseJs);
var _lowerJs = require("./lower.js");
var _lowerJsDefault = parcelHelpers.interopDefault(_lowerJs);
var _appendJs = require("./append.js");
var _appendJsDefault = parcelHelpers.interopDefault(_appendJs);
var _insertJs = require("./insert.js");
var _insertJsDefault = parcelHelpers.interopDefault(_insertJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _cloneJs = require("./clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _datumJs = require("./datum.js");
var _datumJsDefault = parcelHelpers.interopDefault(_datumJs);
var _onJs = require("./on.js");
var _onJsDefault = parcelHelpers.interopDefault(_onJs);
var _dispatchJs = require("./dispatch.js");
var _dispatchJsDefault = parcelHelpers.interopDefault(_dispatchJs);
var _iteratorJs = require("./iterator.js");
var _iteratorJsDefault = parcelHelpers.interopDefault(_iteratorJs);
var root = [
    null
];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([
        [
            document.documentElement
        ]
    ], root);
}
function selection_selection() {
    return this;
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: (0, _selectJsDefault.default),
    selectAll: (0, _selectAllJsDefault.default),
    selectChild: (0, _selectChildJsDefault.default),
    selectChildren: (0, _selectChildrenJsDefault.default),
    filter: (0, _filterJsDefault.default),
    data: (0, _dataJsDefault.default),
    enter: (0, _enterJsDefault.default),
    exit: (0, _exitJsDefault.default),
    join: (0, _joinJsDefault.default),
    merge: (0, _mergeJsDefault.default),
    selection: selection_selection,
    order: (0, _orderJsDefault.default),
    sort: (0, _sortJsDefault.default),
    call: (0, _callJsDefault.default),
    nodes: (0, _nodesJsDefault.default),
    node: (0, _nodeJsDefault.default),
    size: (0, _sizeJsDefault.default),
    empty: (0, _emptyJsDefault.default),
    each: (0, _eachJsDefault.default),
    attr: (0, _attrJsDefault.default),
    style: (0, _styleJsDefault.default),
    property: (0, _propertyJsDefault.default),
    classed: (0, _classedJsDefault.default),
    text: (0, _textJsDefault.default),
    html: (0, _htmlJsDefault.default),
    raise: (0, _raiseJsDefault.default),
    lower: (0, _lowerJsDefault.default),
    append: (0, _appendJsDefault.default),
    insert: (0, _insertJsDefault.default),
    remove: (0, _removeJsDefault.default),
    clone: (0, _cloneJsDefault.default),
    datum: (0, _datumJsDefault.default),
    on: (0, _onJsDefault.default),
    dispatch: (0, _dispatchJsDefault.default),
    [Symbol.iterator]: (0, _iteratorJsDefault.default)
};
exports.default = selection;

},{"./select.js":"aK9lB","./selectAll.js":"8U28K","./selectChild.js":"hBGg0","./selectChildren.js":"hnJ1V","./filter.js":"i1GfU","./data.js":"jIP7J","./enter.js":"27tIy","./exit.js":"6ubri","./join.js":"g7QcH","./merge.js":"fXm9Z","./order.js":"cmxvd","./sort.js":"4UUI2","./call.js":"bsAaT","./nodes.js":"jjFrN","./node.js":"gPGkg","./size.js":"coOTw","./empty.js":"8ybxO","./each.js":"9Y1px","./attr.js":"k8cb1","./style.js":"GUHZ1","./property.js":"f4q4V","./classed.js":"jd3ig","./text.js":"dVAdB","./html.js":"egFAg","./raise.js":"4Xi1m","./lower.js":"l1I8n","./append.js":"1GNgv","./insert.js":"3Xphl","./remove.js":"iNsSa","./clone.js":"jfNc9","./datum.js":"lMowl","./on.js":"ktlxw","./dispatch.js":"eZMTj","./iterator.js":"32Fgr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aK9lB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        if (typeof select !== "function") select = (0, _selectorJsDefault.default)(select);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
            }
        }
        return new (0, _indexJs.Selection)(subgroups, this._parents);
    });
var _indexJs = require("./index.js");
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);

},{"./index.js":"fK3Dl","../selector.js":"7VF9r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7VF9r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return selector == null ? none : function() {
            return this.querySelector(selector);
        };
    });
function none() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8U28K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        if (typeof select === "function") select = arrayAll(select);
        else select = (0, _selectorAllJsDefault.default)(select);
        for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
            }
        }
        return new (0, _indexJs.Selection)(subgroups, parents);
    });
var _indexJs = require("./index.js");
var _arrayJs = require("../array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _selectorAllJs = require("../selectorAll.js");
var _selectorAllJsDefault = parcelHelpers.interopDefault(_selectorAllJs);
function arrayAll(select) {
    return function() {
        return (0, _arrayJsDefault.default)(select.apply(this, arguments));
    };
}

},{"./index.js":"fK3Dl","../array.js":"9WejU","../selectorAll.js":"2SKTE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9WejU":[function(require,module,exports) {
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>array);
function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SKTE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return selector == null ? empty : function() {
            return this.querySelectorAll(selector);
        };
    });
function empty() {
    return [];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBGg0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(match) {
        return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : (0, _matcherJs.childMatcher)(match)));
    });
var _matcherJs = require("../matcher.js");
var find = Array.prototype.find;
function childFind(match) {
    return function() {
        return find.call(this.children, match);
    };
}
function childFirst() {
    return this.firstElementChild;
}

},{"../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnJ1V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(match) {
        return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : (0, _matcherJs.childMatcher)(match)));
    });
var _matcherJs = require("../matcher.js");
var filter = Array.prototype.filter;
function children() {
    return Array.from(this.children);
}
function childrenFilter(match) {
    return function() {
        return filter.call(this.children, match);
    };
}

},{"../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1GfU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(match) {
        if (typeof match !== "function") match = (0, _matcherJsDefault.default)(match);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
        }
        return new (0, _indexJs.Selection)(subgroups, this._parents);
    });
var _indexJs = require("./index.js");
var _matcherJs = require("../matcher.js");
var _matcherJsDefault = parcelHelpers.interopDefault(_matcherJs);

},{"./index.js":"fK3Dl","../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jIP7J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value, key) {
        if (!arguments.length) return Array.from(this, datum);
        var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
        if (typeof value !== "function") value = (0, _constantJsDefault.default)(value);
        for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
            var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
            bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
            // Now connect the enter nodes to their following update node, such that
            // appendChild can insert the materialized enter node before this node,
            // rather than at the end of the parent node.
            for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
                if (i0 >= i1) i1 = i0 + 1;
                while(!(next = updateGroup[i1]) && ++i1 < dataLength);
                previous._next = next || null;
            }
        }
        update = new (0, _indexJs.Selection)(update, parents);
        update._enter = enter;
        update._exit = exit;
        return update;
    });
var _indexJs = require("./index.js");
var _enterJs = require("./enter.js");
var _constantJs = require("../constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new (0, _enterJs.EnterNode)(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node;
        else nodeByKeyValue.set(keyValue, node);
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else enter[i] = new (0, _enterJs.EnterNode)(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function datum(node) {
    return node.__data__;
}
// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}

},{"./index.js":"fK3Dl","./enter.js":"27tIy","../constant.js":"1wZol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"27tIy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return new (0, _indexJs.Selection)(this._enter || this._groups.map((0, _sparseJsDefault.default)), this._parents);
    });
parcelHelpers.export(exports, "EnterNode", ()=>EnterNode);
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};

},{"./sparse.js":"juhNo","./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juhNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(update) {
        return new Array(update.length);
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wZol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return function() {
            return x;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ubri":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return new (0, _indexJs.Selection)(this._exit || this._groups.map((0, _sparseJsDefault.default)), this._parents);
    });
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");

},{"./sparse.js":"juhNo","./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7QcH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(onenter, onupdate, onexit) {
        var enter = this.enter(), update = this, exit = this.exit();
        if (typeof onenter === "function") {
            enter = onenter(enter);
            if (enter) enter = enter.selection();
        } else enter = enter.append(onenter + "");
        if (onupdate != null) {
            update = onupdate(update);
            if (update) update = update.selection();
        }
        if (onexit == null) exit.remove();
        else onexit(exit);
        return enter && update ? enter.merge(update).order() : update;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fXm9Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(context) {
        var selection = context.selection ? context.selection() : context;
        for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
            for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
        }
        for(; j < m0; ++j)merges[j] = groups0[j];
        return new (0, _indexJs.Selection)(merges, this._parents);
    });
var _indexJs = require("./index.js");

},{"./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmxvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
            for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
                if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
                next = node;
            }
        }
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4UUI2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(compare) {
        if (!compare) compare = ascending;
        function compareNode(a, b) {
            return a && b ? compare(a.__data__, b.__data__) : !a - !b;
        }
        for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
            sortgroup.sort(compareNode);
        }
        return new (0, _indexJs.Selection)(sortgroups, this._parents).order();
    });
var _indexJs = require("./index.js");
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

},{"./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsAaT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var callback = arguments[0];
        arguments[0] = this;
        callback.apply(null, arguments);
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jjFrN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return Array.from(this);
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPGkg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
            var node = group[i];
            if (node) return node;
        }
        return null;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"coOTw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        let size = 0;
        for (const node of this)++size; // eslint-disable-line no-unused-vars
        return size;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ybxO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return !this.node();
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Y1px":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(callback) {
        for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
            for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
        }
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8cb1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var fullname = (0, _namespaceJsDefault.default)(name);
        if (arguments.length < 2) {
            var node = this.node();
            return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
        }
        return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
    });
var _namespaceJs = require("../namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}

},{"../namespace.js":"a23xG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GUHZ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value, priority) {
        return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
    });
parcelHelpers.export(exports, "styleValue", ()=>styleValue);
var _windowJs = require("../window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function styleValue(node, name) {
    return node.style.getPropertyValue(name) || (0, _windowJsDefault.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}

},{"../window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6di7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(node) {
        return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
         || node.document && node // node is a Window
         || node.defaultView; // node is a Document
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4q4V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
    });
function propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jd3ig":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var names = classArray(name + "");
        if (arguments.length < 2) {
            var list = classList(this.node()), i = -1, n = names.length;
            while(++i < n)if (!list.contains(names[i])) return false;
            return true;
        }
        return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
    });
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function classedTrue(names) {
    return function() {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function() {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVAdB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
    });
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"egFAg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
    });
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Xi1m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(raise);
    });
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1I8n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(lower);
    });
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GNgv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var create = typeof name === "function" ? name : (0, _creatorJsDefault.default)(name);
        return this.select(function() {
            return this.appendChild(create.apply(this, arguments));
        });
    });
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);

},{"../creator.js":"a6062","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Xphl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, before) {
        var create = typeof name === "function" ? name : (0, _creatorJsDefault.default)(name), select = before == null ? constantNull : typeof before === "function" ? before : (0, _selectorJsDefault.default)(before);
        return this.select(function() {
            return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
        });
    });
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
function constantNull() {
    return null;
}

},{"../creator.js":"a6062","../selector.js":"7VF9r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNsSa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(remove);
    });
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jfNc9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(deep) {
        return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
    });
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMowl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.property("__data__", value) : this.node().__data__;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktlxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(typename, value, options) {
        var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
        if (arguments.length < 2) {
            var on = this.node().__on;
            if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
                if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
            }
            return;
        }
        on = value ? onAdd : onRemove;
        for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
        return this;
    });
function contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = contextListener(value);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZMTj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(type, params) {
        return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
    });
var _windowJs = require("../window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);
function dispatchEvent(node, type, params) {
    var window = (0, _windowJsDefault.default)(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function() {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}

},{"../window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32Fgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function*() {
        for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
            for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
        }
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chHoc":[function(require,module,exports) {
// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nonpassive", ()=>nonpassive);
parcelHelpers.export(exports, "nonpassivecapture", ()=>nonpassivecapture);
parcelHelpers.export(exports, "nopropagation", ()=>nopropagation);
parcelHelpers.export(exports, "default", ()=>function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    });
const nonpassive = {
    passive: false
};
const nonpassivecapture = {
    capture: true,
    passive: false
};
function nopropagation(event) {
    event.stopImmediatePropagation();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6jJyi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>(0, _valueJsDefault.default));
parcelHelpers.export(exports, "interpolateArray", ()=>(0, _arrayJsDefault.default));
parcelHelpers.export(exports, "interpolateBasis", ()=>(0, _basisJsDefault.default));
parcelHelpers.export(exports, "interpolateBasisClosed", ()=>(0, _basisClosedJsDefault.default));
parcelHelpers.export(exports, "interpolateDate", ()=>(0, _dateJsDefault.default));
parcelHelpers.export(exports, "interpolateDiscrete", ()=>(0, _discreteJsDefault.default));
parcelHelpers.export(exports, "interpolateHue", ()=>(0, _hueJsDefault.default));
parcelHelpers.export(exports, "interpolateNumber", ()=>(0, _numberJsDefault.default));
parcelHelpers.export(exports, "interpolateNumberArray", ()=>(0, _numberArrayJsDefault.default));
parcelHelpers.export(exports, "interpolateObject", ()=>(0, _objectJsDefault.default));
parcelHelpers.export(exports, "interpolateRound", ()=>(0, _roundJsDefault.default));
parcelHelpers.export(exports, "interpolateString", ()=>(0, _stringJsDefault.default));
parcelHelpers.export(exports, "interpolateTransformCss", ()=>(0, _indexJs.interpolateTransformCss));
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>(0, _indexJs.interpolateTransformSvg));
parcelHelpers.export(exports, "interpolateZoom", ()=>(0, _zoomJsDefault.default));
parcelHelpers.export(exports, "interpolateRgb", ()=>(0, _rgbJsDefault.default));
parcelHelpers.export(exports, "interpolateRgbBasis", ()=>(0, _rgbJs.rgbBasis));
parcelHelpers.export(exports, "interpolateRgbBasisClosed", ()=>(0, _rgbJs.rgbBasisClosed));
parcelHelpers.export(exports, "interpolateHsl", ()=>(0, _hslJsDefault.default));
parcelHelpers.export(exports, "interpolateHslLong", ()=>(0, _hslJs.hslLong));
parcelHelpers.export(exports, "interpolateLab", ()=>(0, _labJsDefault.default));
parcelHelpers.export(exports, "interpolateHcl", ()=>(0, _hclJsDefault.default));
parcelHelpers.export(exports, "interpolateHclLong", ()=>(0, _hclJs.hclLong));
parcelHelpers.export(exports, "interpolateCubehelix", ()=>(0, _cubehelixJsDefault.default));
parcelHelpers.export(exports, "interpolateCubehelixLong", ()=>(0, _cubehelixJs.cubehelixLong));
parcelHelpers.export(exports, "piecewise", ()=>(0, _piecewiseJsDefault.default));
parcelHelpers.export(exports, "quantize", ()=>(0, _quantizeJsDefault.default));
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _arrayJs = require("./array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _discreteJs = require("./discrete.js");
var _discreteJsDefault = parcelHelpers.interopDefault(_discreteJs);
var _hueJs = require("./hue.js");
var _hueJsDefault = parcelHelpers.interopDefault(_hueJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _roundJs = require("./round.js");
var _roundJsDefault = parcelHelpers.interopDefault(_roundJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _indexJs = require("./transform/index.js");
var _zoomJs = require("./zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _hslJs = require("./hsl.js");
var _hslJsDefault = parcelHelpers.interopDefault(_hslJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _hclJs = require("./hcl.js");
var _hclJsDefault = parcelHelpers.interopDefault(_hclJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);
var _piecewiseJs = require("./piecewise.js");
var _piecewiseJsDefault = parcelHelpers.interopDefault(_piecewiseJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);

},{"./value.js":"2GpMq","./array.js":false,"./basis.js":false,"./basisClosed.js":false,"./date.js":false,"./discrete.js":false,"./hue.js":false,"./number.js":"fZAq5","./numberArray.js":false,"./object.js":false,"./round.js":false,"./string.js":"Qre8m","./transform/index.js":"jDBQO","./zoom.js":"7nRsd","./rgb.js":"gHrgo","./hsl.js":false,"./lab.js":false,"./hcl.js":false,"./cubehelix.js":false,"./piecewise.js":false,"./quantize.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2GpMq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        var t = typeof b, c;
        return b == null || t === "boolean" ? (0, _constantJsDefault.default)(b) : (t === "number" ? (0, _numberJsDefault.default) : t === "string" ? (c = (0, _d3Color.color)(b)) ? (b = c, _rgbJsDefault.default) : (0, _stringJsDefault.default) : b instanceof (0, _d3Color.color) ? (0, _rgbJsDefault.default) : b instanceof Date ? (0, _dateJsDefault.default) : (0, _numberArrayJs.isNumberArray)(b) ? (0, _numberArrayJsDefault.default) : Array.isArray(b) ? (0, _arrayJs.genericArray) : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? (0, _objectJsDefault.default) : (0, _numberJsDefault.default))(a, b);
    });
var _d3Color = require("d3-color");
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _arrayJs = require("./array.js");
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);

},{"d3-color":"grhaa","./rgb.js":"gHrgo","./array.js":"bQXK0","./date.js":"cCKgJ","./number.js":"fZAq5","./object.js":"hdyKg","./string.js":"Qre8m","./constant.js":"aXv76","./numberArray.js":"l29YZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"grhaa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>(0, _colorJsDefault.default));
parcelHelpers.export(exports, "rgb", ()=>(0, _colorJs.rgb));
parcelHelpers.export(exports, "hsl", ()=>(0, _colorJs.hsl));
parcelHelpers.export(exports, "lab", ()=>(0, _labJsDefault.default));
parcelHelpers.export(exports, "hcl", ()=>(0, _labJs.hcl));
parcelHelpers.export(exports, "lch", ()=>(0, _labJs.lch));
parcelHelpers.export(exports, "gray", ()=>(0, _labJs.gray));
parcelHelpers.export(exports, "cubehelix", ()=>(0, _cubehelixJsDefault.default));
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);

},{"./color.js":"cNCyv","./lab.js":false,"./cubehelix.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cNCyv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color);
parcelHelpers.export(exports, "darker", ()=>darker);
parcelHelpers.export(exports, "brighter", ()=>brighter);
parcelHelpers.export(exports, "default", ()=>color);
parcelHelpers.export(exports, "rgbConvert", ()=>rgbConvert);
parcelHelpers.export(exports, "rgb", ()=>rgb);
parcelHelpers.export(exports, "Rgb", ()=>Rgb);
parcelHelpers.export(exports, "hslConvert", ()=>hslConvert);
parcelHelpers.export(exports, "hsl", ()=>hsl);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, _defineJsDefault.default)(Color, color, {
    copy (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHex8() {
    return this.rgb().formatHex8();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Rgb, rgb, (0, _defineJs.extend)(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Hsl, hsl, (0, _defineJs.extend)(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp () {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
}));
function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

},{"./define.js":"avQOe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"avQOe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(constructor, factory, prototype) {
        constructor.prototype = factory.prototype = prototype;
        prototype.constructor = constructor;
    });
parcelHelpers.export(exports, "extend", ()=>extend);
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHrgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbBasis", ()=>rgbBasis);
parcelHelpers.export(exports, "rgbBasisClosed", ()=>rgbBasisClosed);
var _d3Color = require("d3-color");
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
exports.default = function rgbGamma(y) {
    var color = (0, _colorJs.gamma)(y);
    function rgb(start, end) {
        var r = color((start = (0, _d3Color.rgb)(start)).r, (end = (0, _d3Color.rgb)(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, _colorJsDefault.default)(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, _d3Color.rgb)(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline((0, _basisJsDefault.default));
var rgbBasisClosed = rgbSpline((0, _basisClosedJsDefault.default));

},{"d3-color":"grhaa","./basis.js":"enhcL","./basisClosed.js":"gdZAO","./color.js":"1eZq9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"enhcL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "basis", ()=>basis);
parcelHelpers.export(exports, "default", ()=>function(values) {
        var n = values.length - 1;
        return function(t) {
            var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
            return basis((t - i / n) * n, v0, v1, v2, v3);
        };
    });
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdZAO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(values) {
        var n = values.length;
        return function(t) {
            var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
            return (0, _basisJs.basis)((t - i / n) * n, v0, v1, v2, v3);
        };
    });
var _basisJs = require("./basis.js");

},{"./basis.js":"enhcL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1eZq9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hue", ()=>hue);
parcelHelpers.export(exports, "gamma", ()=>gamma);
parcelHelpers.export(exports, "default", ()=>nogamma);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
function linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
}

},{"./constant.js":"aXv76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXv76":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQXK0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        return ((0, _numberArrayJs.isNumberArray)(b) ? (0, _numberArrayJsDefault.default) : genericArray)(a, b);
    });
parcelHelpers.export(exports, "genericArray", ()=>genericArray);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = (0, _valueJsDefault.default)(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}

},{"./value.js":"2GpMq","./numberArray.js":"l29YZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l29YZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        if (!b) b = [];
        var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
        return function(t) {
            for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
            return c;
        };
    });
parcelHelpers.export(exports, "isNumberArray", ()=>isNumberArray);
function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCKgJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        var d = new Date;
        return a = +a, b = +b, function(t) {
            return d.setTime(a * (1 - t) + b * t), d;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        return a = +a, b = +b, function(t) {
            return a * (1 - t) + b * t;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hdyKg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        var i = {}, c = {}, k;
        if (a === null || typeof a !== "object") a = {};
        if (b === null || typeof b !== "object") b = {};
        for(k in b)if (k in a) i[k] = (0, _valueJsDefault.default)(a[k], b[k]);
        else c[k] = b[k];
        return function(t) {
            for(k in i)c[k] = i[k](t);
            return c;
        };
    });
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);

},{"./value.js":"2GpMq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Qre8m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
        // Coerce inputs to strings.
        a = a + "", b = b + "";
        // Interpolate pairs of numbers in a & b.
        while((am = reA.exec(a)) && (bm = reB.exec(b))){
            if ((bs = bm.index) > bi) {
                bs = b.slice(bi, bs);
                if (s[i]) s[i] += bs; // coalesce with previous string
                else s[++i] = bs;
            }
            if ((am = am[0]) === (bm = bm[0])) {
                if (s[i]) s[i] += bm; // coalesce with previous string
                else s[++i] = bm;
            } else {
                s[++i] = null;
                q.push({
                    i: i,
                    x: (0, _numberJsDefault.default)(am, bm)
                });
            }
            bi = reB.lastIndex;
        }
        // Add remains of b.
        if (bi < b.length) {
            bs = b.slice(bi);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        // Special optimization for only a single match.
        // Otherwise, interpolate each of the numbers and rejoin the string.
        return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
            for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        });
    });
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function() {
        return b;
    };
}
function one(b) {
    return function(t) {
        return b(t) + "";
    };
}

},{"./number.js":"fZAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDBQO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolateTransformCss", ()=>interpolateTransformCss);
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>interpolateTransformSvg);
var _numberJs = require("../number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _parseJs = require("./parse.js");
function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: (0, _numberJsDefault.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, _numberJsDefault.default)(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: (0, _numberJsDefault.default)(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: (0, _numberJsDefault.default)(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: (0, _numberJsDefault.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, _numberJsDefault.default)(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var interpolateTransformCss = interpolateTransform((0, _parseJs.parseCss), "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform((0, _parseJs.parseSvg), ", ", ")", ")");

},{"../number.js":"fZAq5","./parse.js":"dwvtF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwvtF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable no-undef */ parcelHelpers.export(exports, "parseCss", ()=>parseCss);
parcelHelpers.export(exports, "parseSvg", ()=>parseSvg);
var _decomposeJs = require("./decompose.js");
var _decomposeJsDefault = parcelHelpers.interopDefault(_decomposeJs);
var svgNode;
function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? (0, _decomposeJs.identity) : (0, _decomposeJsDefault.default)(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
    if (value == null) return 0, _decomposeJs.identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return 0, _decomposeJs.identity;
    value = value.matrix;
    return (0, _decomposeJsDefault.default)(value.a, value.b, value.c, value.d, value.e, value.f);
}

},{"./decompose.js":"7Ejbr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Ejbr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity);
parcelHelpers.export(exports, "default", ()=>function(a, b, c, d, e, f) {
        var scaleX, scaleY, skewX;
        if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
        if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
        if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
        if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
        return {
            translateX: e,
            translateY: f,
            rotate: Math.atan2(b, a) * degrees,
            skewX: Math.atan(skewX) * degrees,
            scaleX: scaleX,
            scaleY: scaleY
        };
    });
var degrees = 180 / Math.PI;
var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7nRsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var epsilon2 = 1e-12;
function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
exports.default = function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
                var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function(_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
}(Math.SQRT2, 2, 4);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4lorl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transition", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "active", ()=>(0, _activeJsDefault.default));
parcelHelpers.export(exports, "interrupt", ()=>(0, _interruptJsDefault.default));
var _indexJs = require("./selection/index.js");
var _indexJs1 = require("./transition/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _activeJs = require("./active.js");
var _activeJsDefault = parcelHelpers.interopDefault(_activeJs);
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);

},{"./selection/index.js":"heX1u","./transition/index.js":false,"./active.js":false,"./interrupt.js":"j3g05","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"heX1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _d3Selection = require("d3-selection");
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);
var _transitionJs = require("./transition.js");
var _transitionJsDefault = parcelHelpers.interopDefault(_transitionJs);
(0, _d3Selection.selection).prototype.interrupt = (0, _interruptJsDefault.default);
(0, _d3Selection.selection).prototype.transition = (0, _transitionJsDefault.default);

},{"d3-selection":"gn9gd","./interrupt.js":"ecsW0","./transition.js":"aZzEX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ecsW0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        return this.each(function() {
            (0, _interruptJsDefault.default)(this, name);
        });
    });
var _interruptJs = require("../interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);

},{"../interrupt.js":"j3g05","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3g05":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(node, name) {
        var schedules = node.__transition, schedule, active, empty = true, i;
        if (!schedules) return;
        name = name == null ? null : name + "";
        for(i in schedules){
            if ((schedule = schedules[i]).name !== name) {
                empty = false;
                continue;
            }
            active = schedule.state > (0, _scheduleJs.STARTING) && schedule.state < (0, _scheduleJs.ENDING);
            schedule.state = (0, _scheduleJs.ENDED);
            schedule.timer.stop();
            schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
            delete schedules[i];
        }
        if (empty) delete node.__transition;
    });
var _scheduleJs = require("./transition/schedule.js");

},{"./transition/schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"de74c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CREATED", ()=>CREATED);
parcelHelpers.export(exports, "SCHEDULED", ()=>SCHEDULED);
parcelHelpers.export(exports, "STARTING", ()=>STARTING);
parcelHelpers.export(exports, "STARTED", ()=>STARTED);
parcelHelpers.export(exports, "RUNNING", ()=>RUNNING);
parcelHelpers.export(exports, "ENDING", ()=>ENDING);
parcelHelpers.export(exports, "ENDED", ()=>ENDED);
parcelHelpers.export(exports, "default", ()=>function(node, name, id, index, group, timing) {
        var schedules = node.__transition;
        if (!schedules) node.__transition = {};
        else if (id in schedules) return;
        create(node, id, {
            name: name,
            index: index,
            group: group,
            on: emptyOn,
            tween: emptyTween,
            time: timing.time,
            delay: timing.delay,
            duration: timing.duration,
            ease: timing.ease,
            timer: null,
            state: CREATED
        });
    });
parcelHelpers.export(exports, "init", ()=>init);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "get", ()=>get);
var _d3Dispatch = require("d3-dispatch");
var _d3Timer = require("d3-timer");
var emptyOn = (0, _d3Dispatch.dispatch)("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
}
function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
}
function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = (0, _d3Timer.timer)(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== SCHEDULED) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === STARTED) return (0, _d3Timer.timeout)(start);
            // Interrupt the active transition, if any.
            if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        (0, _d3Timer.timeout)(function() {
            if (self.state === STARTED) {
                self.state = RUNNING;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING) return; // interrupted
        self.state = STARTED;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}

},{"d3-dispatch":"5WtHO","d3-timer":"7TEss","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7TEss":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>(0, _timerJs.now));
parcelHelpers.export(exports, "timer", ()=>(0, _timerJs.timer));
parcelHelpers.export(exports, "timerFlush", ()=>(0, _timerJs.timerFlush));
parcelHelpers.export(exports, "timeout", ()=>(0, _timeoutJsDefault.default));
parcelHelpers.export(exports, "interval", ()=>(0, _intervalJsDefault.default));
var _timerJs = require("./timer.js");
var _timeoutJs = require("./timeout.js");
var _timeoutJsDefault = parcelHelpers.interopDefault(_timeoutJs);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);

},{"./timer.js":"bfF2F","./timeout.js":"ioM7O","./interval.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfF2F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "Timer", ()=>Timer);
parcelHelpers.export(exports, "timer", ()=>timer);
parcelHelpers.export(exports, "timerFlush", ()=>timerFlush);
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while(t){
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    } finally{
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
    } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioM7O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(callback, delay, time) {
        var t = new (0, _timerJs.Timer);
        delay = delay == null ? 0 : +delay;
        t.restart((elapsed)=>{
            t.stop();
            callback(elapsed + delay);
        }, delay, time);
        return t;
    });
var _timerJs = require("./timer.js");

},{"./timer.js":"bfF2F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZzEX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var id, timing;
        if (name instanceof (0, _indexJs.Transition)) id = name._id, name = name._name;
        else id = (0, _indexJs.newId)(), (timing = defaultTiming).time = (0, _d3Timer.now)(), name = name == null ? null : name + "";
        for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) (0, _scheduleJsDefault.default)(node, name, id, i, group, timing || inherit(node, id));
        }
        return new (0, _indexJs.Transition)(groups, this._parents, name, id);
    });
var _indexJs = require("../transition/index.js");
var _scheduleJs = require("../transition/schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
var _d3Ease = require("d3-ease");
var _d3Timer = require("d3-timer");
var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: (0, _d3Ease.easeCubicInOut)
};
function inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
    }
    return timing;
}

},{"../transition/index.js":"h2Srb","../transition/schedule.js":"de74c","d3-ease":"8sCNl","d3-timer":"7TEss","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2Srb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition);
parcelHelpers.export(exports, "default", ()=>transition);
parcelHelpers.export(exports, "newId", ()=>newId);
var _d3Selection = require("d3-selection");
var _attrJs = require("./attr.js");
var _attrJsDefault = parcelHelpers.interopDefault(_attrJs);
var _attrTweenJs = require("./attrTween.js");
var _attrTweenJsDefault = parcelHelpers.interopDefault(_attrTweenJs);
var _delayJs = require("./delay.js");
var _delayJsDefault = parcelHelpers.interopDefault(_delayJs);
var _durationJs = require("./duration.js");
var _durationJsDefault = parcelHelpers.interopDefault(_durationJs);
var _easeJs = require("./ease.js");
var _easeJsDefault = parcelHelpers.interopDefault(_easeJs);
var _easeVaryingJs = require("./easeVarying.js");
var _easeVaryingJsDefault = parcelHelpers.interopDefault(_easeVaryingJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _onJs = require("./on.js");
var _onJsDefault = parcelHelpers.interopDefault(_onJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _selectionJs = require("./selection.js");
var _selectionJsDefault = parcelHelpers.interopDefault(_selectionJs);
var _styleJs = require("./style.js");
var _styleJsDefault = parcelHelpers.interopDefault(_styleJs);
var _styleTweenJs = require("./styleTween.js");
var _styleTweenJsDefault = parcelHelpers.interopDefault(_styleTweenJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _textTweenJs = require("./textTween.js");
var _textTweenJsDefault = parcelHelpers.interopDefault(_textTweenJs);
var _transitionJs = require("./transition.js");
var _transitionJsDefault = parcelHelpers.interopDefault(_transitionJs);
var _tweenJs = require("./tween.js");
var _tweenJsDefault = parcelHelpers.interopDefault(_tweenJs);
var _endJs = require("./end.js");
var _endJsDefault = parcelHelpers.interopDefault(_endJs);
var id = 0;
function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function transition(name) {
    return (0, _d3Selection.selection)().transition(name);
}
function newId() {
    return ++id;
}
var selection_prototype = (0, _d3Selection.selection).prototype;
Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: (0, _selectJsDefault.default),
    selectAll: (0, _selectAllJsDefault.default),
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: (0, _filterJsDefault.default),
    merge: (0, _mergeJsDefault.default),
    selection: (0, _selectionJsDefault.default),
    transition: (0, _transitionJsDefault.default),
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: (0, _onJsDefault.default),
    attr: (0, _attrJsDefault.default),
    attrTween: (0, _attrTweenJsDefault.default),
    style: (0, _styleJsDefault.default),
    styleTween: (0, _styleTweenJsDefault.default),
    text: (0, _textJsDefault.default),
    textTween: (0, _textTweenJsDefault.default),
    remove: (0, _removeJsDefault.default),
    tween: (0, _tweenJsDefault.default),
    delay: (0, _delayJsDefault.default),
    duration: (0, _durationJsDefault.default),
    ease: (0, _easeJsDefault.default),
    easeVarying: (0, _easeVaryingJsDefault.default),
    end: (0, _endJsDefault.default),
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

},{"d3-selection":"gn9gd","./attr.js":"9UgA3","./attrTween.js":"1hMpn","./delay.js":"2BzOF","./duration.js":"ei298","./ease.js":"lCGHM","./easeVarying.js":"aju4f","./filter.js":"d3Uia","./merge.js":"9odBi","./on.js":"3XrBC","./remove.js":"aZLkz","./select.js":"bgUUX","./selectAll.js":"lqPi4","./selection.js":"iWTRA","./style.js":"44QDP","./styleTween.js":"42AvL","./text.js":"6mGEx","./textTween.js":"kqC5z","./transition.js":"50tVR","./tween.js":"1Kbbg","./end.js":"ev0ir","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UgA3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var fullname = (0, _d3Selection.namespace)(name), i = fullname === "transform" ? (0, _d3Interpolate.interpolateTransformSvg) : (0, _interpolateJsDefault.default);
        return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, _tweenJs.tweenValue)(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
    });
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _tweenJs = require("./tween.js");
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}

},{"d3-interpolate":"6jJyi","d3-selection":"gn9gd","./tween.js":"1Kbbg","./interpolate.js":"69lgs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Kbbg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var id = this._id;
        name += "";
        if (arguments.length < 2) {
            var tween = (0, _scheduleJs.get)(this.node(), id).tween;
            for(var i = 0, n = tween.length, t; i < n; ++i){
                if ((t = tween[i]).name === name) return t.value;
            }
            return null;
        }
        return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
    });
parcelHelpers.export(exports, "tweenValue", ()=>tweenValue);
var _scheduleJs = require("./schedule.js");
function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
            }
        }
        schedule.tween = tween1;
    };
}
function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1[i] = t;
                break;
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = (0, _scheduleJs.set)(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return (0, _scheduleJs.get)(node, id).value[name];
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69lgs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        var c;
        return (typeof b === "number" ? (0, _d3Interpolate.interpolateNumber) : b instanceof (0, _d3Color.color) ? (0, _d3Interpolate.interpolateRgb) : (c = (0, _d3Color.color)(b)) ? (b = c, _d3Interpolate.interpolateRgb) : (0, _d3Interpolate.interpolateString))(a, b);
    });
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");

},{"d3-color":"grhaa","d3-interpolate":"6jJyi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hMpn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var key = "attr." + name;
        if (arguments.length < 2) return (key = this.tween(key)) && key._value;
        if (value == null) return this.tween(key, null);
        if (typeof value !== "function") throw new Error;
        var fullname = (0, _d3Selection.namespace)(name);
        return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
    });
var _d3Selection = require("d3-selection");
function attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}

},{"d3-selection":"gn9gd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BzOF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        var id = this._id;
        return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, _scheduleJs.get)(this.node(), id).delay;
    });
var _scheduleJs = require("./schedule.js");
function delayFunction(id, value) {
    return function() {
        (0, _scheduleJs.init)(this, id).delay = +value.apply(this, arguments);
    };
}
function delayConstant(id, value) {
    return value = +value, function() {
        (0, _scheduleJs.init)(this, id).delay = value;
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ei298":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        var id = this._id;
        return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, _scheduleJs.get)(this.node(), id).duration;
    });
var _scheduleJs = require("./schedule.js");
function durationFunction(id, value) {
    return function() {
        (0, _scheduleJs.set)(this, id).duration = +value.apply(this, arguments);
    };
}
function durationConstant(id, value) {
    return value = +value, function() {
        (0, _scheduleJs.set)(this, id).duration = value;
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCGHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        var id = this._id;
        return arguments.length ? this.each(easeConstant(id, value)) : (0, _scheduleJs.get)(this.node(), id).ease;
    });
var _scheduleJs = require("./schedule.js");
function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        (0, _scheduleJs.set)(this, id).ease = value;
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aju4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        if (typeof value !== "function") throw new Error;
        return this.each(easeVarying(this._id, value));
    });
var _scheduleJs = require("./schedule.js");
function easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        (0, _scheduleJs.set)(this, id).ease = v;
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3Uia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(match) {
        if (typeof match !== "function") match = (0, _d3Selection.matcher)(match);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
        }
        return new (0, _indexJs.Transition)(subgroups, this._parents, this._name, this._id);
    });
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");

},{"d3-selection":"gn9gd","./index.js":"h2Srb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9odBi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(transition) {
        if (transition._id !== this._id) throw new Error;
        for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
            for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
        }
        for(; j < m0; ++j)merges[j] = groups0[j];
        return new (0, _indexJs.Transition)(merges, this._parents, this._name, this._id);
    });
var _indexJs = require("./index.js");

},{"./index.js":"h2Srb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XrBC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, listener) {
        var id = this._id;
        return arguments.length < 2 ? (0, _scheduleJs.get)(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
    });
var _scheduleJs = require("./schedule.js");
function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? (0, _scheduleJs.init) : (0, _scheduleJs.set);
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZLkz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.on("end.remove", removeFunction(this._id));
    });
function removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bgUUX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        var name = this._name, id = this._id;
        if (typeof select !== "function") select = (0, _d3Selection.selector)(select);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
                (0, _scheduleJsDefault.default)(subgroup[i], name, id, i, subgroup, (0, _scheduleJs.get)(node, id));
            }
        }
        return new (0, _indexJs.Transition)(subgroups, this._parents, name, id);
    });
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);

},{"d3-selection":"gn9gd","./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqPi4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        var name = this._name, id = this._id;
        if (typeof select !== "function") select = (0, _d3Selection.selectorAll)(select);
        for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
                for(var children = select.call(node, node.__data__, i, group), child, inherit = (0, _scheduleJs.get)(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) (0, _scheduleJsDefault.default)(child, name, id, k, children, inherit);
                subgroups.push(children);
                parents.push(node);
            }
        }
        return new (0, _indexJs.Transition)(subgroups, parents, name, id);
    });
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);

},{"d3-selection":"gn9gd","./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iWTRA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return new Selection(this._groups, this._parents);
    });
var _d3Selection = require("d3-selection");
var Selection = (0, _d3Selection.selection).prototype.constructor;

},{"d3-selection":"gn9gd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44QDP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value, priority) {
        var i = (name += "") === "transform" ? (0, _d3Interpolate.interpolateTransformCss) : (0, _interpolateJsDefault.default);
        return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, (0, _tweenJs.tweenValue)(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
    });
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _scheduleJs = require("./schedule.js");
var _tweenJs = require("./tween.js");
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name), string1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}

},{"d3-interpolate":"6jJyi","d3-selection":"gn9gd","./schedule.js":"de74c","./tween.js":"1Kbbg","./interpolate.js":"69lgs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"42AvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value, priority) {
        var key = "style." + (name += "");
        if (arguments.length < 2) return (key = this.tween(key)) && key._value;
        if (value == null) return this.tween(key, null);
        if (typeof value !== "function") throw new Error;
        return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
    });
function styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mGEx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return this.tween("text", typeof value === "function" ? textFunction((0, _tweenJs.tweenValue)(this, "text", value)) : textConstant(value == null ? "" : value + ""));
    });
var _tweenJs = require("./tween.js");
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}

},{"./tween.js":"1Kbbg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqC5z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        var key = "text";
        if (arguments.length < 1) return (key = this.tween(key)) && key._value;
        if (value == null) return this.tween(key, null);
        if (typeof value !== "function") throw new Error;
        return this.tween(key, textTween(value));
    });
function textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50tVR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var name = this._name, id0 = this._id, id1 = (0, _indexJs.newId)();
        for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
                var inherit = (0, _scheduleJs.get)(node, id0);
                (0, _scheduleJsDefault.default)(node, name, id1, i, group, {
                    time: inherit.time + inherit.delay + inherit.duration,
                    delay: 0,
                    duration: inherit.duration,
                    ease: inherit.ease
                });
            }
        }
        return new (0, _indexJs.Transition)(groups, this._parents, name, id1);
    });
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);

},{"./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ev0ir":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var on0, on1, that = this, id = that._id, size = that.size();
        return new Promise(function(resolve, reject) {
            var cancel = {
                value: reject
            }, end = {
                value: function() {
                    if (--size === 0) resolve();
                }
            };
            that.each(function() {
                var schedule = (0, _scheduleJs.set)(this, id), on = schedule.on;
                // If this node shared a dispatch with the previous node,
                // just assign the updated shared dispatch and we’re done!
                // Otherwise, copy-on-write.
                if (on !== on0) {
                    on1 = (on0 = on).copy();
                    on1._.cancel.push(cancel);
                    on1._.interrupt.push(cancel);
                    on1._.end.push(end);
                }
                schedule.on = on1;
            });
            // The selection was empty, resolve end immediately
            if (size === 0) resolve();
        });
    });
var _scheduleJs = require("./schedule.js");

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8sCNl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeLinear", ()=>(0, _linearJs.linear));
parcelHelpers.export(exports, "easeQuad", ()=>(0, _quadJs.quadInOut));
parcelHelpers.export(exports, "easeQuadIn", ()=>(0, _quadJs.quadIn));
parcelHelpers.export(exports, "easeQuadOut", ()=>(0, _quadJs.quadOut));
parcelHelpers.export(exports, "easeQuadInOut", ()=>(0, _quadJs.quadInOut));
parcelHelpers.export(exports, "easeCubic", ()=>(0, _cubicJs.cubicInOut));
parcelHelpers.export(exports, "easeCubicIn", ()=>(0, _cubicJs.cubicIn));
parcelHelpers.export(exports, "easeCubicOut", ()=>(0, _cubicJs.cubicOut));
parcelHelpers.export(exports, "easeCubicInOut", ()=>(0, _cubicJs.cubicInOut));
parcelHelpers.export(exports, "easePoly", ()=>(0, _polyJs.polyInOut));
parcelHelpers.export(exports, "easePolyIn", ()=>(0, _polyJs.polyIn));
parcelHelpers.export(exports, "easePolyOut", ()=>(0, _polyJs.polyOut));
parcelHelpers.export(exports, "easePolyInOut", ()=>(0, _polyJs.polyInOut));
parcelHelpers.export(exports, "easeSin", ()=>(0, _sinJs.sinInOut));
parcelHelpers.export(exports, "easeSinIn", ()=>(0, _sinJs.sinIn));
parcelHelpers.export(exports, "easeSinOut", ()=>(0, _sinJs.sinOut));
parcelHelpers.export(exports, "easeSinInOut", ()=>(0, _sinJs.sinInOut));
parcelHelpers.export(exports, "easeExp", ()=>(0, _expJs.expInOut));
parcelHelpers.export(exports, "easeExpIn", ()=>(0, _expJs.expIn));
parcelHelpers.export(exports, "easeExpOut", ()=>(0, _expJs.expOut));
parcelHelpers.export(exports, "easeExpInOut", ()=>(0, _expJs.expInOut));
parcelHelpers.export(exports, "easeCircle", ()=>(0, _circleJs.circleInOut));
parcelHelpers.export(exports, "easeCircleIn", ()=>(0, _circleJs.circleIn));
parcelHelpers.export(exports, "easeCircleOut", ()=>(0, _circleJs.circleOut));
parcelHelpers.export(exports, "easeCircleInOut", ()=>(0, _circleJs.circleInOut));
parcelHelpers.export(exports, "easeBounce", ()=>(0, _bounceJs.bounceOut));
parcelHelpers.export(exports, "easeBounceIn", ()=>(0, _bounceJs.bounceIn));
parcelHelpers.export(exports, "easeBounceOut", ()=>(0, _bounceJs.bounceOut));
parcelHelpers.export(exports, "easeBounceInOut", ()=>(0, _bounceJs.bounceInOut));
parcelHelpers.export(exports, "easeBack", ()=>(0, _backJs.backInOut));
parcelHelpers.export(exports, "easeBackIn", ()=>(0, _backJs.backIn));
parcelHelpers.export(exports, "easeBackOut", ()=>(0, _backJs.backOut));
parcelHelpers.export(exports, "easeBackInOut", ()=>(0, _backJs.backInOut));
parcelHelpers.export(exports, "easeElastic", ()=>(0, _elasticJs.elasticOut));
parcelHelpers.export(exports, "easeElasticIn", ()=>(0, _elasticJs.elasticIn));
parcelHelpers.export(exports, "easeElasticOut", ()=>(0, _elasticJs.elasticOut));
parcelHelpers.export(exports, "easeElasticInOut", ()=>(0, _elasticJs.elasticInOut));
var _linearJs = require("./linear.js");
var _quadJs = require("./quad.js");
var _cubicJs = require("./cubic.js");
var _polyJs = require("./poly.js");
var _sinJs = require("./sin.js");
var _expJs = require("./exp.js");
var _circleJs = require("./circle.js");
var _bounceJs = require("./bounce.js");
var _backJs = require("./back.js");
var _elasticJs = require("./elastic.js");

},{"./linear.js":false,"./quad.js":false,"./cubic.js":"cGjk7","./poly.js":false,"./sin.js":false,"./exp.js":false,"./circle.js":false,"./bounce.js":false,"./back.js":false,"./elastic.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cGjk7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicIn", ()=>cubicIn);
parcelHelpers.export(exports, "cubicOut", ()=>cubicOut);
parcelHelpers.export(exports, "cubicInOut", ()=>cubicInOut);
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    return --t * t * t + 1;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fmgIQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6f6C1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>BrushEvent);
function BrushEvent(type, { sourceEvent, target, selection, mode, dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        selection: {
            value: selection,
            enumerable: true,
            configurable: true
        },
        mode: {
            value: mode,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cozwm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nopropagation", ()=>nopropagation);
parcelHelpers.export(exports, "default", ()=>function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    });
function nopropagation(event) {
    event.stopImmediatePropagation();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"UQ8g3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scaleBand", ()=>(0, _bandJsDefault.default));
parcelHelpers.export(exports, "scalePoint", ()=>(0, _bandJs.point));
parcelHelpers.export(exports, "scaleIdentity", ()=>(0, _identityJsDefault.default));
parcelHelpers.export(exports, "scaleLinear", ()=>(0, _linearJsDefault.default));
parcelHelpers.export(exports, "scaleLog", ()=>(0, _logJsDefault.default));
parcelHelpers.export(exports, "scaleSymlog", ()=>(0, _symlogJsDefault.default));
parcelHelpers.export(exports, "scaleOrdinal", ()=>(0, _ordinalJsDefault.default));
parcelHelpers.export(exports, "scaleImplicit", ()=>(0, _ordinalJs.implicit));
parcelHelpers.export(exports, "scalePow", ()=>(0, _powJsDefault.default));
parcelHelpers.export(exports, "scaleSqrt", ()=>(0, _powJs.sqrt));
parcelHelpers.export(exports, "scaleRadial", ()=>(0, _radialJsDefault.default));
parcelHelpers.export(exports, "scaleQuantile", ()=>(0, _quantileJsDefault.default));
parcelHelpers.export(exports, "scaleQuantize", ()=>(0, _quantizeJsDefault.default));
parcelHelpers.export(exports, "scaleThreshold", ()=>(0, _thresholdJsDefault.default));
parcelHelpers.export(exports, "scaleTime", ()=>(0, _timeJsDefault.default));
parcelHelpers.export(exports, "scaleUtc", ()=>(0, _utcTimeJsDefault.default));
parcelHelpers.export(exports, "scaleSequential", ()=>(0, _sequentialJsDefault.default));
parcelHelpers.export(exports, "scaleSequentialLog", ()=>(0, _sequentialJs.sequentialLog));
parcelHelpers.export(exports, "scaleSequentialPow", ()=>(0, _sequentialJs.sequentialPow));
parcelHelpers.export(exports, "scaleSequentialSqrt", ()=>(0, _sequentialJs.sequentialSqrt));
parcelHelpers.export(exports, "scaleSequentialSymlog", ()=>(0, _sequentialJs.sequentialSymlog));
parcelHelpers.export(exports, "scaleSequentialQuantile", ()=>(0, _sequentialQuantileJsDefault.default));
parcelHelpers.export(exports, "scaleDiverging", ()=>(0, _divergingJsDefault.default));
parcelHelpers.export(exports, "scaleDivergingLog", ()=>(0, _divergingJs.divergingLog));
parcelHelpers.export(exports, "scaleDivergingPow", ()=>(0, _divergingJs.divergingPow));
parcelHelpers.export(exports, "scaleDivergingSqrt", ()=>(0, _divergingJs.divergingSqrt));
parcelHelpers.export(exports, "scaleDivergingSymlog", ()=>(0, _divergingJs.divergingSymlog));
parcelHelpers.export(exports, "tickFormat", ()=>(0, _tickFormatJsDefault.default));
var _bandJs = require("./band.js");
var _bandJsDefault = parcelHelpers.interopDefault(_bandJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _linearJs = require("./linear.js");
var _linearJsDefault = parcelHelpers.interopDefault(_linearJs);
var _logJs = require("./log.js");
var _logJsDefault = parcelHelpers.interopDefault(_logJs);
var _symlogJs = require("./symlog.js");
var _symlogJsDefault = parcelHelpers.interopDefault(_symlogJs);
var _ordinalJs = require("./ordinal.js");
var _ordinalJsDefault = parcelHelpers.interopDefault(_ordinalJs);
var _powJs = require("./pow.js");
var _powJsDefault = parcelHelpers.interopDefault(_powJs);
var _radialJs = require("./radial.js");
var _radialJsDefault = parcelHelpers.interopDefault(_radialJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);
var _thresholdJs = require("./threshold.js");
var _thresholdJsDefault = parcelHelpers.interopDefault(_thresholdJs);
var _timeJs = require("./time.js");
var _timeJsDefault = parcelHelpers.interopDefault(_timeJs);
var _utcTimeJs = require("./utcTime.js");
var _utcTimeJsDefault = parcelHelpers.interopDefault(_utcTimeJs);
var _sequentialJs = require("./sequential.js");
var _sequentialJsDefault = parcelHelpers.interopDefault(_sequentialJs);
var _sequentialQuantileJs = require("./sequentialQuantile.js");
var _sequentialQuantileJsDefault = parcelHelpers.interopDefault(_sequentialQuantileJs);
var _divergingJs = require("./diverging.js");
var _divergingJsDefault = parcelHelpers.interopDefault(_divergingJs);
var _tickFormatJs = require("./tickFormat.js");
var _tickFormatJsDefault = parcelHelpers.interopDefault(_tickFormatJs);

},{"./band.js":false,"./identity.js":false,"./linear.js":false,"./log.js":false,"./symlog.js":false,"./ordinal.js":"hNjKg","./pow.js":false,"./radial.js":false,"./quantile.js":false,"./quantize.js":false,"./threshold.js":false,"./time.js":false,"./utcTime.js":false,"./sequential.js":false,"./sequentialQuantile.js":false,"./diverging.js":false,"./tickFormat.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hNjKg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "implicit", ()=>implicit);
parcelHelpers.export(exports, "default", ()=>ordinal);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
const implicit = Symbol("implicit");
function ordinal() {
    var index = new (0, _d3Array.InternMap)(), domain = [], range = [], unknown = implicit;
    function scale(d) {
        let i = index.get(d);
        if (i === undefined) {
            if (unknown !== implicit) return unknown;
            index.set(d, i = domain.push(d) - 1);
        }
        return range[i % range.length];
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [], index = new (0, _d3Array.InternMap)();
        for (const value of _){
            if (index.has(value)) continue;
            index.set(value, domain.push(value) - 1);
        }
        return scale;
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return ordinal(domain, range).unknown(unknown);
    };
    (0, _initJs.initRange).apply(scale, arguments);
    return scale;
}

},{"d3-array":"1yX2W","./init.js":"kp8lc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kp8lc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRange", ()=>initRange);
parcelHelpers.export(exports, "initInterpolator", ()=>initInterpolator);
function initRange(domain, range) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
function initInterpolator(domain, interpolator) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            if (typeof domain === "function") this.interpolator(domain);
            else this.range(domain);
            break;
        default:
            this.domain(domain);
            if (typeof interpolator === "function") this.interpolator(interpolator);
            else this.range(interpolator);
            break;
    }
    return this;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hQoq0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zoom", ()=>(0, _zoomJsDefault.default));
parcelHelpers.export(exports, "zoomTransform", ()=>(0, _transformJsDefault.default));
parcelHelpers.export(exports, "zoomIdentity", ()=>(0, _transformJs.identity));
parcelHelpers.export(exports, "ZoomTransform", ()=>(0, _transformJs.Transform));
var _zoomJs = require("./zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);

},{"./zoom.js":"2QYtg","./transform.js":"2Dxqg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2QYtg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [
            0,
            Infinity
        ], translateExtent = [
            [
                -Infinity,
                -Infinity
            ],
            [
                Infinity,
                Infinity
            ]
        ], duration = 250, interpolate = (0, _d3Interpolate.interpolateZoom), listeners = (0, _d3Dispatch.dispatch)("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
        function zoom(selection) {
            selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, {
                passive: false
            }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        zoom.transform = function(collection, transform, point, event) {
            var selection = collection.selection ? collection.selection() : collection;
            selection.property("__zoom", defaultTransform);
            if (collection !== selection) schedule(collection, transform, point, event);
            else selection.interrupt().each(function() {
                gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
            });
        };
        zoom.scaleBy = function(selection, k, p, event) {
            zoom.scaleTo(selection, function() {
                var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
                return k0 * k1;
            }, p, event);
        };
        zoom.scaleTo = function(selection, k, p, event) {
            zoom.transform(selection, function() {
                var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
                return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
            }, p, event);
        };
        zoom.translateBy = function(selection, x, y, event) {
            zoom.transform(selection, function() {
                return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
            }, null, event);
        };
        zoom.translateTo = function(selection, x, y, p, event) {
            zoom.transform(selection, function() {
                var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
                return constrain((0, _transformJs.identity).translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
            }, p, event);
        };
        function scale(transform, k) {
            k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
            return k === transform.k ? transform : new (0, _transformJs.Transform)(k, transform.x, transform.y);
        }
        function translate(transform, p0, p1) {
            var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
            return x === transform.x && y === transform.y ? transform : new (0, _transformJs.Transform)(transform.k, x, y);
        }
        function centroid(extent) {
            return [
                (+extent[0][0] + +extent[1][0]) / 2,
                (+extent[0][1] + +extent[1][1]) / 2
            ];
        }
        function schedule(transition, transform, point, event) {
            transition.on("start.zoom", function() {
                gesture(this, arguments).event(event).start();
            }).on("interrupt.zoom end.zoom", function() {
                gesture(this, arguments).event(event).end();
            }).tween("zoom", function() {
                var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
                return function(t) {
                    if (t === 1) t = b; // Avoid rounding error on end.
                    else {
                        var l = i(t), k = w / l[2];
                        t = new (0, _transformJs.Transform)(k, p[0] - l[0] * k, p[1] - l[1] * k);
                    }
                    g.zoom(null, t);
                };
            });
        }
        function gesture(that, args, clean) {
            return !clean && that.__zooming || new Gesture(that, args);
        }
        function Gesture(that, args) {
            this.that = that;
            this.args = args;
            this.active = 0;
            this.sourceEvent = null;
            this.extent = extent.apply(that, args);
            this.taps = 0;
        }
        Gesture.prototype = {
            event: function(event) {
                if (event) this.sourceEvent = event;
                return this;
            },
            start: function() {
                if (++this.active === 1) {
                    this.that.__zooming = this;
                    this.emit("start");
                }
                return this;
            },
            zoom: function(key, transform) {
                if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
                if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
                if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
                this.that.__zoom = transform;
                this.emit("zoom");
                return this;
            },
            end: function() {
                if (--this.active === 0) {
                    delete this.that.__zooming;
                    this.emit("end");
                }
                return this;
            },
            emit: function(type) {
                var d = (0, _d3Selection.select)(this.that).datum();
                listeners.call(type, this.that, new (0, _eventJsDefault.default)(type, {
                    sourceEvent: this.sourceEvent,
                    target: zoom,
                    type,
                    transform: this.that.__zoom,
                    dispatch: listeners
                }), d);
            }
        };
        function wheeled(event, ...args) {
            if (!filter.apply(this, arguments)) return;
            var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = (0, _d3Selection.pointer)(event);
            // If the mouse is in the same location as before, reuse it.
            // If there were recent wheel events, reset the wheel idle timeout.
            if (g.wheel) {
                if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) g.mouse[1] = t.invert(g.mouse[0] = p);
                clearTimeout(g.wheel);
            } else if (t.k === k) return;
            else {
                g.mouse = [
                    p,
                    t.invert(p)
                ];
                (0, _d3Transition.interrupt)(this);
                g.start();
            }
            (0, _noeventJsDefault.default)(event);
            g.wheel = setTimeout(wheelidled, wheelDelay);
            g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
            function wheelidled() {
                g.wheel = null;
                g.end();
            }
        }
        function mousedowned(event, ...args) {
            if (touchending || !filter.apply(this, arguments)) return;
            var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = (0, _d3Selection.select)(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = (0, _d3Selection.pointer)(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
            (0, _d3Drag.dragDisable)(event.view);
            (0, _noeventJs.nopropagation)(event);
            g.mouse = [
                p,
                this.__zoom.invert(p)
            ];
            (0, _d3Transition.interrupt)(this);
            g.start();
            function mousemoved(event) {
                (0, _noeventJsDefault.default)(event);
                if (!g.moved) {
                    var dx = event.clientX - x0, dy = event.clientY - y0;
                    g.moved = dx * dx + dy * dy > clickDistance2;
                }
                g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0, _d3Selection.pointer)(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
            }
            function mouseupped(event) {
                v.on("mousemove.zoom mouseup.zoom", null);
                (0, _d3Drag.dragEnable)(event.view, g.moved);
                (0, _noeventJsDefault.default)(event);
                g.event(event).end();
            }
        }
        function dblclicked(event, ...args) {
            if (!filter.apply(this, arguments)) return;
            var t0 = this.__zoom, p0 = (0, _d3Selection.pointer)(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
            (0, _noeventJsDefault.default)(event);
            if (duration > 0) (0, _d3Selection.select)(this).transition().duration(duration).call(schedule, t1, p0, event);
            else (0, _d3Selection.select)(this).call(zoom.transform, t1, p0, event);
        }
        function touchstarted(event, ...args) {
            if (!filter.apply(this, arguments)) return;
            var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
            (0, _noeventJs.nopropagation)(event);
            for(i = 0; i < n; ++i){
                t = touches[i], p = (0, _d3Selection.pointer)(t, this);
                p = [
                    p,
                    this.__zoom.invert(p),
                    t.identifier
                ];
                if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
                else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
            }
            if (touchstarting) touchstarting = clearTimeout(touchstarting);
            if (started) {
                if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
                    touchstarting = null;
                }, touchDelay);
                (0, _d3Transition.interrupt)(this);
                g.start();
            }
        }
        function touchmoved(event, ...args) {
            if (!this.__zooming) return;
            var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
            (0, _noeventJsDefault.default)(event);
            for(i = 0; i < n; ++i){
                t = touches[i], p = (0, _d3Selection.pointer)(t, this);
                if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
                else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
            }
            t = g.that.__zoom;
            if (g.touch1) {
                var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
                t = scale(t, Math.sqrt(dp / dl));
                p = [
                    (p0[0] + p1[0]) / 2,
                    (p0[1] + p1[1]) / 2
                ];
                l = [
                    (l0[0] + l1[0]) / 2,
                    (l0[1] + l1[1]) / 2
                ];
            } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
            else return;
            g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
        }
        function touchended(event, ...args) {
            if (!this.__zooming) return;
            var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
            (0, _noeventJs.nopropagation)(event);
            if (touchending) clearTimeout(touchending);
            touchending = setTimeout(function() {
                touchending = null;
            }, touchDelay);
            for(i = 0; i < n; ++i){
                t = touches[i];
                if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
                else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
            }
            if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
            if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
            else {
                g.end();
                // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
                if (g.taps === 2) {
                    t = (0, _d3Selection.pointer)(t, this);
                    if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                        var p = (0, _d3Selection.select)(this).on("dblclick.zoom");
                        if (p) p.apply(this, arguments);
                    }
                }
            }
        }
        zoom.wheelDelta = function(_) {
            return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), zoom) : wheelDelta;
        };
        zoom.filter = function(_) {
            return arguments.length ? (filter = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(!!_), zoom) : filter;
        };
        zoom.touchable = function(_) {
            return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(!!_), zoom) : touchable;
        };
        zoom.extent = function(_) {
            return arguments.length ? (extent = typeof _ === "function" ? _ : (0, _constantJsDefault.default)([
                [
                    +_[0][0],
                    +_[0][1]
                ],
                [
                    +_[1][0],
                    +_[1][1]
                ]
            ]), zoom) : extent;
        };
        zoom.scaleExtent = function(_) {
            return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
                scaleExtent[0],
                scaleExtent[1]
            ];
        };
        zoom.translateExtent = function(_) {
            return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
                [
                    translateExtent[0][0],
                    translateExtent[0][1]
                ],
                [
                    translateExtent[1][0],
                    translateExtent[1][1]
                ]
            ];
        };
        zoom.constrain = function(_) {
            return arguments.length ? (constrain = _, zoom) : constrain;
        };
        zoom.duration = function(_) {
            return arguments.length ? (duration = +_, zoom) : duration;
        };
        zoom.interpolate = function(_) {
            return arguments.length ? (interpolate = _, zoom) : interpolate;
        };
        zoom.on = function() {
            var value = listeners.on.apply(listeners, arguments);
            return value === listeners ? zoom : value;
        };
        zoom.clickDistance = function(_) {
            return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
        };
        zoom.tapDistance = function(_) {
            return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
        };
        return zoom;
    });
var _d3Dispatch = require("d3-dispatch");
var _d3Drag = require("d3-drag");
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _d3Transition = require("d3-transition");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _eventJs = require("./event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _transformJs = require("./transform.js");
var _noeventJs = require("./noevent.js");
var _noeventJsDefault = parcelHelpers.interopDefault(_noeventJs);
// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
    return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function defaultTransform() {
    return this.__zoom || (0, _transformJs.identity);
}
function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}

},{"d3-dispatch":"5WtHO","d3-drag":"hGy7N","d3-interpolate":"6jJyi","d3-selection":"gn9gd","d3-transition":"4lorl","./constant.js":"84Lz7","./event.js":"8AEix","./transform.js":"2Dxqg","./noevent.js":"jokv0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"84Lz7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8AEix":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ZoomEvent);
function ZoomEvent(type, { sourceEvent, target, transform, dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        transform: {
            value: transform,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Dxqg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transform", ()=>Transform);
parcelHelpers.export(exports, "identity", ()=>identity);
parcelHelpers.export(exports, "default", ()=>transform);
function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
        return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return identity;
    return node.__zoom;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jokv0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nopropagation", ()=>nopropagation);
parcelHelpers.export(exports, "default", ()=>function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    });
function nopropagation(event) {
    event.stopImmediatePropagation();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6aN1P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attrs", ()=>attrs);
parcelHelpers.export(exports, "styles", ()=>styles);
function attrs(selection, attrsObj) {
    if (!attrsObj) return;
    const attrsList = Object.entries(attrsObj);
    attrsList.forEach(([attr, value])=>{
        selection.attr(attr, value);
    });
    return selection;
}
function styles(selection, stylesObj) {
    if (!stylesObj) return;
    const stylesList = Object.entries(stylesObj);
    stylesList.forEach(([attr, value])=>{
        selection.style(attr, value); // error handling? how does d3 throw errors here
    });
    return selection;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRDXo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const RED = 0.2126;
const GREEN = 0.7152;
const BLUE = 0.0722;
const GAMMA = 2.4;
function luminance(r, g, b) {
    var a = [
        r,
        g,
        b
    ].map((v)=>{
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, GAMMA);
    });
    return a[0] * RED + a[1] * GREEN + a[2] * BLUE;
}
function contrast(rgb1, rgb2) {
    var lum1 = luminance(...hexToRgbArr(rgb1));
    var lum2 = luminance(...hexToRgbArr(rgb2));
    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}
function hexToRgbArr(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}
// console.log(contrast("#ffffff", "#ffff00")); // 1.074 for yellow
// console.log(contrast("#ffffff", "#ffffff")); // 8.592 for blue
exports.default = contrast;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9zBaP":[function(require,module,exports) {
module.exports = JSON.parse('[{"desc":"NA 1 Chitral General Election 2018 Result","voterTurnout":60.97,"totalVotes":158925,"result":[{"candidate":"Moulana Abdul Akbar Chitrali","party":"MMA","votes":48616},{"candidate":"Abdul Latif","party":"PTI","votes":38481}],"id":1,"xGrid":20,"yGrid":0},{"desc":"NA 2 Swat General Election 2018 Result","voterTurnout":43.29,"totalVotes":157060,"result":[{"candidate":"Haider Ali Khan","party":"PTI","votes":61687},{"candidate":"Amir Muqam","party":"PML-N","votes":41125}],"id":2,"xGrid":21,"yGrid":2},{"desc":"NA 3 Swat General Election 2018 Result","voterTurnout":40.35,"totalVotes":155420,"result":[{"candidate":"Saleem Rehman","party":"PTI","votes":68162},{"candidate":"Mian Muhammad Shahbaz Sharif","party":"PML-N","votes":22756}],"id":3,"xGrid":21,"yGrid":5},{"desc":"NA 4 Swat General Election 2018 Result","voterTurnout":39.22,"totalVotes":153909,"result":[{"candidate":"Murad Saeed","party":"PTI","votes":71600},{"candidate":"Muhammad Salim Khan","party":"ANP","votes":30975}],"id":4,"xGrid":20,"yGrid":3},{"desc":"NA 5 Upper Dir General Election 2018 Result","voterTurnout":48.26,"totalVotes":207664,"result":[{"candidate":"SAHIBZADA SIBGHATULLAH","party":"PTI","votes":66545},{"candidate":"SAHIBZADA TARIQULLAH","party":"MMA","votes":57657}],"id":5,"xGrid":21,"yGrid":3},{"desc":"NA 6 Lower Dir General Election 2018 Result","voterTurnout":48.9,"totalVotes":166820,"result":[{"candidate":"Mehboob Shah","party":"PTI","votes":63440},{"candidate":"Asad Ullah","party":"MMA","votes":36665}],"id":6,"xGrid":19,"yGrid":4},{"desc":"NA 7 Lower Dir General Election 2018 Result","voterTurnout":44.22,"totalVotes":141723,"result":[{"candidate":"Muhammad Bashir Khan","party":"PTI","votes":63017},{"candidate":"Siraj Ul Haq","party":"MMA","votes":46040}],"id":7,"xGrid":19,"yGrid":3},{"desc":"NA 8 Malakand Protected Area General Election 2018 Result","voterTurnout":48.24,"totalVotes":180838,"result":[{"candidate":"Junaid Akbar","party":"PTI","votes":81310},{"candidate":"Bilawal Bhutto Zardari","party":"PPP","votes":43724}],"id":8,"xGrid":22,"yGrid":5},{"desc":"NA 9 Buner General Election 2018 Result","voterTurnout":40.62,"totalVotes":173336,"result":[{"candidate":"SHER AKBAR KHAN","party":"PTI","votes":58037},{"candidate":"KAMRAN KHAN","party":"PML-N","votes":38358}],"id":9,"xGrid":20,"yGrid":5},{"desc":"NA 10 Shangla General Election 2018 Result","voterTurnout":34.27,"totalVotes":123670,"result":[{"candidate":"Ibadullah Khan","party":"PML-N","votes":34070},{"candidate":"Sadeed ur Rahman","party":"ANP","votes":32665}],"id":10,"xGrid":22,"yGrid":4},{"desc":"NA 11 Kohistan Lower Kohistan Kolai Pallas Kohistan General Election 2018 Result","voterTurnout":40.89,"totalVotes":61700,"result":[{"candidate":"Afreen Khan","party":"MMA","votes":15859},{"candidate":"Dost Muhammad Shakir","party":"Ind","votes":14148}],"id":11,"xGrid":23,"yGrid":3},{"desc":"NA 12 Battagram General Election 2018 Result","voterTurnout":35.5,"totalVotes":88188,"result":[{"candidate":"Muhammad Nawaz Khan","party":"PTI","votes":34270},{"candidate":"Muhammad Yousaf","party":"MMA","votes":23881}],"id":12,"xGrid":23,"yGrid":4},{"desc":"NA 13 Mansehra General Election 2018 Result","voterTurnout":59.66,"totalVotes":253535,"result":[{"candidate":"Saleh Muhammad","party":"Ind","votes":109262},{"candidate":"Sardar Shah JehanYousaf","party":"PML-N","votes":107808}],"id":13,"xGrid":24,"yGrid":4},{"desc":"NA 14 Mansehra Torghar General Election 2018 Result","voterTurnout":41.49,"totalVotes":203976,"result":[{"candidate":"Muhammad Sajjad","party":"PML-N","votes":74889},{"candidate":"Zar Gul Khan","party":"PTI","votes":59638}],"id":14,"xGrid":23,"yGrid":6},{"desc":"NA 15 Abbottabad General Election 2018 Result","voterTurnout":50.56,"totalVotes":234157,"result":[{"candidate":"Murtaza Javed Abbasi","party":"PML-N","votes":95340},{"candidate":"Ali Asghar Khan","party":"PTI","votes":81845}],"id":15,"xGrid":24,"yGrid":6},{"desc":"NA 16 Abbottabad General Election 2018 Result","voterTurnout":49.84,"totalVotes":175228,"result":[{"candidate":"Ali Khan Jadoon","party":"PTI","votes":85203},{"candidate":"Mohabbat Khan","party":"PML-N","votes":54879}],"id":16,"xGrid":22,"yGrid":7},{"desc":"NA 17 Haripur General Election 2018 Result","voterTurnout":52.22,"totalVotes":334580,"result":[{"candidate":"Omar Ayub Khan","party":"PTI","votes":172609},{"candidate":"Babar Nawaz Khan","party":"PML-N","votes":132756}],"id":17,"xGrid":24,"yGrid":7},{"desc":"NA 18 Swabi General Election 2018 Result","voterTurnout":43.39,"totalVotes":187543,"result":[{"candidate":"Asad Qaiser","party":"PTI","votes":78970},{"candidate":"FAZAL ALI","party":"MMA","votes":34217}],"id":18,"xGrid":24,"yGrid":5},{"desc":"NA 19 Swabi General Election 2018 Result","voterTurnout":45.67,"totalVotes":203707,"result":[{"candidate":"Usman Khan","party":"PTI","votes":83903},{"candidate":"Waris Khan","party":"ANP","votes":53286}],"id":19,"xGrid":19,"yGrid":6},{"desc":"NA 20 Mardan General Election 2018 Result","voterTurnout":45.16,"totalVotes":187360,"result":[{"candidate":"Mujahid Ali","party":"PTI","votes":78140},{"candidate":"Gul Nawaz Khan","party":"ANP","votes":38713}],"id":20,"xGrid":20,"yGrid":4},{"desc":"NA 21 Mardan General Election 2018 Result","voterTurnout":45.89,"totalVotes":185898,"result":[{"candidate":"Amir Haider Azam Khan","party":"ANP","votes":78911},{"candidate":"Muhammad Atif","party":"PTI","votes":78878}],"id":21,"xGrid":21,"yGrid":6},{"desc":"NA 22 Mardan General Election 2018 Result","voterTurnout":51.59,"totalVotes":195463,"result":[{"candidate":"Ali Muhammad","party":"PTI","votes":58577},{"candidate":"Muhammad Qasam","party":"MMA","votes":56318}],"id":22,"xGrid":18,"yGrid":4},{"desc":"NA 23 Charsadda General Election 2018 Result","voterTurnout":42.18,"totalVotes":169290,"result":[{"candidate":"Anwar Taj","party":"PTI","votes":59371},{"candidate":"Haji Zafar Ali Khan","party":"MMA","votes":41391}],"id":23,"xGrid":18,"yGrid":5},{"desc":"NA 24 Charsadda General Election 2018 Result","voterTurnout":45.29,"totalVotes":202073,"result":[{"candidate":"Fazal Muhammad Khan","party":"PTI","votes":83495},{"candidate":"Asfandyar Wali Khan","party":"ANP","votes":59483}],"id":24,"xGrid":20,"yGrid":6},{"desc":"NA 25 Nowshera General Election 2018 Result","voterTurnout":48.79,"totalVotes":179039,"result":[{"candidate":"Pervez Khattak","party":"PTI","votes":82118},{"candidate":"Khan Pervez","party":"PPP","votes":35658}],"id":25,"xGrid":20,"yGrid":7},{"desc":"NA 26 Nowshera General Election 2018 Result","voterTurnout":49.87,"totalVotes":182523,"result":[{"candidate":"Imran Khattak","party":"PTI","votes":90256},{"candidate":"Jamal Khan Khattak","party":"ANP","votes":47132}],"id":26,"xGrid":21,"yGrid":7},{"desc":"NA 27 Peshawar General Election 2018 Result","voterTurnout":45.83,"totalVotes":149161,"result":[{"candidate":"Noor Alam Khan","party":"PTI","votes":71158},{"candidate":"Haji Ghulam Ali","party":"MMA","votes":39310}],"id":27,"xGrid":18,"yGrid":6},{"desc":"NA 28 Peshawar General Election 2018 Result","voterTurnout":44.71,"totalVotes":145382,"result":[{"candidate":"Arbab Amir Ayub","party":"PTI","votes":74414},{"candidate":"Sabir Hussain Awan","party":"MMA","votes":27292}],"id":28,"xGrid":19,"yGrid":8},{"desc":"NA 29 Peshawar General Election 2018 Result","voterTurnout":40.62,"totalVotes":125540,"result":[{"candidate":"Nasir Khan","party":"PTI","votes":49762},{"candidate":"Naeem Jan","party":"MMA","votes":29357}],"id":29,"xGrid":18,"yGrid":7},{"desc":"NA 30 Peshawar General Election 2018 Result","voterTurnout":40.64,"totalVotes":122412,"result":[{"candidate":"Sher Ali Arbab","party":"PTI","votes":73781},{"candidate":"Arbab Najeeb Ullah Khan","party":"MMA","votes":18111}],"id":30,"xGrid":18,"yGrid":8},{"desc":"NA 31 Peshawar General Election 2018 Result","voterTurnout":42.2,"totalVotes":160984,"result":[{"candidate":"Shaukat Ali S o Liaqat Ali","party":"PTI","votes":87895},{"candidate":"Haji Ghulam Ahmad Bilour","party":"ANP","votes":42476}],"id":31,"xGrid":19,"yGrid":7},{"desc":"NA 32 Kohat General Election 2018 Result","voterTurnout":38.95,"totalVotes":190658,"result":[{"candidate":"Shehryar Afridi","party":"PTI","votes":82248},{"candidate":"Gohar Muhammad Khan Bangash","party":"MMA","votes":47412}],"id":32,"xGrid":17,"yGrid":8},{"desc":"NA 33 Hangu General Election 2018 Result","voterTurnout":28.47,"totalVotes":77891,"result":[{"candidate":"Khial Zaman","party":"PTI","votes":28819},{"candidate":"Atiq Ur Rehman","party":"MMA","votes":27968}],"id":33,"xGrid":17,"yGrid":9},{"desc":"NA 34 Karak General Election 2018 Result","voterTurnout":49.69,"totalVotes":194588,"result":[{"candidate":"Shahid Ahmad","party":"PTI","votes":77181},{"candidate":"Mir Zakim Khan","party":"MMA","votes":28534}],"id":34,"xGrid":18,"yGrid":9},{"desc":"NA 35 Bannu General Election 2018 Result","voterTurnout":42.55,"totalVotes":238962,"result":[{"candidate":"Imran Ahmed Khan Niazi","party":"PTI","votes":113822},{"candidate":"Akram Khan Durrani","party":"MMA","votes":106820}],"id":35,"xGrid":16,"yGrid":11},{"desc":"NA 36 Lakki Marwat General Election 2018 Result","voterTurnout":50.06,"totalVotes":201699,"result":[{"candidate":"Muhammad Anwar","party":"MMA","votes":91065},{"candidate":"Ishfaq Ahmad Khan","party":"PTI","votes":81849}],"id":36,"xGrid":18,"yGrid":10},{"desc":"NA 37 Tank General Election 2018 Result","voterTurnout":43.7,"totalVotes":76472,"result":[{"candidate":"Asad Mehmood","party":"MMA","votes":28504},{"candidate":"Habibullah Khan","party":"PTI","votes":16599}],"id":37,"xGrid":16,"yGrid":10},{"desc":"NA 38 Dera Ismail Khan General Election 2018 Result","voterTurnout":54.82,"totalVotes":186887,"result":[{"candidate":"Ali Amin Khan","party":"PTI","votes":80236},{"candidate":"Fazl ur Rehman","party":"MMA","votes":45457}],"id":38,"xGrid":18,"yGrid":12},{"desc":"NA 39 Dera Ismail Khan General Election 2018 Result","voterTurnout":3.44,"totalVotes":159064,"result":[{"candidate":"Muhammad Yaqoob Sheikh","party":"PTI","votes":79334},{"candidate":"Fazl ur Rehman","party":"MMA","votes":52031}],"id":39,"xGrid":17,"yGrid":13},{"desc":"NA 40 Bajur Agency General Election 2018 Result","voterTurnout":40.9,"totalVotes":102689,"result":[{"candidate":"Gul Dad khan","party":"PTI","votes":34616},{"candidate":"Sardar Khan","party":"Ind","votes":17850}],"id":40,"xGrid":19,"yGrid":5},{"desc":"NA 41 Bajur Agency General Election 2018 Result","voterTurnout":38.17,"totalVotes":88439,"result":[{"candidate":"Gul Zafar Khan","party":"PTI","votes":22730},{"candidate":"Abdul Majeed","party":"Ind","votes":14792}],"id":41,"xGrid":18,"yGrid":3},{"desc":"NA 42 Mohmand Agency General Election 2018 Result","voterTurnout":0,"totalVotes":83359,"result":[{"candidate":"Sajid Khan","party":"PTI","votes":22717},{"candidate":"Bilal Rahman","party":"Ind","votes":21076}],"id":42,"xGrid":17,"yGrid":5},{"desc":"NA 43 Khyber Agency General Election 2018 Result","voterTurnout":37.9,"totalVotes":84335,"result":[{"candidate":"Noor Ul Haq AlQadri","party":"PTI","votes":33243},{"candidate":"Alhaj Shah Jee Gul Afridi","party":"Ind","votes":30151}],"id":43,"xGrid":17,"yGrid":6},{"desc":"NA 44 Khyber Agency General Election 2018 Result","voterTurnout":25.32,"totalVotes":66023,"result":[{"candidate":"Mohammad Iqbal Khan","party":"PTI","votes":12537},{"candidate":"Hameed Ullah Jan Arfidi","party":"Ind","votes":9042}],"id":44,"xGrid":16,"yGrid":7},{"desc":"NA 45 Kurram Agency General Election 2018 Result","voterTurnout":35.01,"totalVotes":56357,"result":[{"candidate":"Munir Khan Orakzai","party":"MMA","votes":16353},{"candidate":"Said Jamal","party":"PTI","votes":13601}],"id":45,"xGrid":17,"yGrid":7},{"desc":"NA 46 Kurram Agency General Election 2018 Result","voterTurnout":43.17,"totalVotes":73341,"result":[{"candidate":"Sajid Hussain Turi","party":"PPP","votes":21461},{"candidate":"Syed Iqbal Mian","party":"PTI","votes":16938}],"id":46,"xGrid":15,"yGrid":7},{"desc":"NA 47 Orakzai Agency General Election 2018 Result","voterTurnout":32.87,"totalVotes":53790,"result":[{"candidate":"Jawad Hussain","party":"PTI","votes":11102},{"candidate":"Qasim gul","party":"MMA","votes":6898}],"id":47,"xGrid":16,"yGrid":6},{"desc":"NA 48 North Waziristan Agency General Election 2018 Result","voterTurnout":23.32,"totalVotes":63343,"result":[{"candidate":"Mohsin Javed","party":"Ind","votes":16496},{"candidate":"Misbah Uddin","party":"MMA","votes":15352}],"id":48,"xGrid":15,"yGrid":9},{"desc":"NA 49 South Waziristan Agency General Election 2018 Result","voterTurnout":20.71,"totalVotes":36429,"result":[{"candidate":"Muhammad Jamal Ud Din","party":"MMA","votes":7794},{"candidate":"Dost Muhammad Khan","party":"PTI","votes":6606}],"id":49,"xGrid":15,"yGrid":10},{"desc":"NA 50 South Waziristan Agency General Election 2018 Result","voterTurnout":33,"totalVotes":46673,"result":[{"candidate":"Muhammad Ali","party":"Ind","votes":23530},{"candidate":"Syed Tariq Gillani","party":"Ind","votes":8250}],"id":50,"xGrid":17,"yGrid":11},{"desc":"NA 51 F R Tribal Area General Election 2018 Result","voterTurnout":41.89,"totalVotes":68780,"result":[{"candidate":"Abdul Shakoor","party":"MMA","votes":21896},{"candidate":"Qaiser Jamal","party":"PTI","votes":18689}],"id":51,"xGrid":16,"yGrid":12},{"desc":"NA 52 ICT General Election 2018 Result","voterTurnout":64.26,"totalVotes":148162,"result":[{"candidate":"Raja Khurram Shahzad Nawaz","party":"PTI","votes":64690},{"candidate":"Muhammad Afzal Khokhar","party":"PPP","votes":34072}],"id":52,"xGrid":24,"yGrid":8},{"desc":"NA 53 ICT General Election 2018 Result","voterTurnout":56.53,"totalVotes":174976,"result":[{"candidate":"Imran Ahmed Khan Niazi","party":"PTI","votes":92891},{"candidate":"Shahid Khaqan Abbasi","party":"PML-N","votes":44314}],"id":53,"xGrid":23,"yGrid":5},{"desc":"NA 54 ICT General Election 2018 Result","voterTurnout":54.24,"totalVotes":117747,"result":[{"candidate":"Asad Umer","party":"PTI","votes":56945},{"candidate":"Anjum Aqeel Khan","party":"PML-N","votes":32991}],"id":54,"xGrid":20,"yGrid":8},{"desc":"NA 55 Attock General Election 2018 Result","voterTurnout":53.47,"totalVotes":297411,"result":[{"candidate":"TAHIR SADIQ","party":"PTI","votes":145168},{"candidate":"SHEIKH AFTAB AHMED","party":"PML-N","votes":101773}],"id":55,"xGrid":21,"yGrid":4},{"desc":"NA 56 Attock General Election 2018 Result","voterTurnout":52.5,"totalVotes":389595,"result":[{"candidate":"Tahir Sadiq","party":"PTI","votes":163325},{"candidate":"MALIK SOHAIL KHAN","party":"PML-N","votes":99404}],"id":56,"xGrid":21,"yGrid":9},{"desc":"NA 57 Rawalpindi General Election 2018 Result","voterTurnout":55.32,"totalVotes":322692,"result":[{"candidate":"SADAQAT ALI KHAN","party":"PTI","votes":136249},{"candidate":"Shahid Khaqan Abbasi","party":"PML-N","votes":124703}],"id":57,"xGrid":23,"yGrid":8},{"desc":"NA 58 Rawalpindi General Election 2018 Result","voterTurnout":53.82,"totalVotes":328150,"result":[{"candidate":"Raja Pervaiz Ashraf","party":"PPP","votes":125090},{"candidate":"Choudhary Muhammad Azeem","party":"PTI","votes":96574}],"id":58,"xGrid":22,"yGrid":8},{"desc":"NA 59 Rawalpindi General Election 2018 Result","voterTurnout":58.78,"totalVotes":202313,"result":[{"candidate":"Ghulam Sarwar Khan","party":"PTI","votes":89055},{"candidate":"CH NISAR ALI KHAN","party":"Ind","votes":66369}],"id":59,"xGrid":23,"yGrid":7},{"desc":"NA 60 Rawalpindi General Election 2018 Result","voterTurnout":50,"totalVotes":92450,"result":[{"candidate":"Shaikh Rashid Shafiq","party":"PTI","votes":44483},{"candidate":"Sajjad Khan","party":"PML-N","votes":43836}],"id":60,"xGrid":22,"yGrid":6},{"desc":"NA 61 Rawalpindi General Election 2018 Result","voterTurnout":51.38,"totalVotes":186057,"result":[{"candidate":"Aamir Mehmood Kiani","party":"PTI","votes":105000},{"candidate":"Ibrar Ahmed","party":"PML-N","votes":60125}],"id":61,"xGrid":25,"yGrid":7},{"desc":"NA 62 Rawalpindi General Election 2018 Result","voterTurnout":52.01,"totalVotes":231685,"result":[{"candidate":"SHEIKH RASHID AHMED","party":"AML","votes":117719},{"candidate":"DANYAL CHAUDHRY","party":"PML-N","votes":91312}],"id":62,"xGrid":25,"yGrid":6},{"desc":"NA 63 Rawalpindi General Election 2018 Result","voterTurnout":58.14,"totalVotes":211826,"result":[{"candidate":"Ghulam Sarwar Khan","party":"PTI","votes":100986},{"candidate":"CH NISAR ALI KHAN","party":"Ind","votes":65767}],"id":63,"xGrid":21,"yGrid":8},{"desc":"NA 64 Chakwal General Election 2018 Result","voterTurnout":58.15,"totalVotes":311355,"result":[{"candidate":"ZULFIQAR ALI KHAN","party":"PTI","votes":155214},{"candidate":"TAHIR IQBAL","party":"PML-N","votes":130051}],"id":64,"xGrid":22,"yGrid":9},{"desc":"NA 65 Chakwal General Election 2018 Result","voterTurnout":57.35,"totalVotes":306975,"result":[{"candidate":"Parvez Elahi","party":"PML-Q","votes":157497},{"candidate":"Muhammad Faez Malik","party":"PML-N","votes":106081}],"id":65,"xGrid":20,"yGrid":9},{"desc":"NA 66 Jhelum General Election 2018 Result","voterTurnout":51.94,"totalVotes":269646,"result":[{"candidate":"CHAUDHARY FARRUKH ALTAF","party":"PTI","votes":112356},{"candidate":"CHAUDHARY NADEEM KHADIM","party":"PML-N","votes":92912}],"id":66,"xGrid":25,"yGrid":8},{"desc":"NA 67 Jhelum General Election 2018 Result","voterTurnout":51.87,"totalVotes":205262,"result":[{"candidate":"Fawad Ahmed","party":"PTI","votes":93102},{"candidate":"Raja Matloob Mehdi","party":"PML-N","votes":82475}],"id":67,"xGrid":21,"yGrid":11},{"desc":"NA 68 Gujrat General Election 2018 Result","voterTurnout":53.01,"totalVotes":234318,"result":[{"candidate":"Hussain Elahi","party":"PML-Q","votes":104678},{"candidate":"Nawabzada Ghazanfar Ali Gul","party":"PML-N","votes":68810}],"id":68,"xGrid":26,"yGrid":8},{"desc":"NA 69 Gujrat General Election 2018 Result","voterTurnout":46.6,"totalVotes":212770,"result":[{"candidate":"Parvez Elahi","party":"PML-Q","votes":122336},{"candidate":"Ch Mubasher Hussain","party":"PML-N","votes":49295}],"id":69,"xGrid":25,"yGrid":9},{"desc":"NA 70 Gujrat General Election 2018 Result","voterTurnout":49.74,"totalVotes":235525,"result":[{"candidate":"Syed Faiz ul Hassan","party":"PTI","votes":95168},{"candidate":"Jaffar Iqbal","party":"PML-N","votes":67233}],"id":70,"xGrid":23,"yGrid":9},{"desc":"NA 71 Gujrat General Election 2018 Result","voterTurnout":50.87,"totalVotes":246756,"result":[{"candidate":"Chaudhry Abid Raza","party":"PML-N","votes":88588},{"candidate":"Muhammad Ilyas Choudhary","party":"PTI","votes":81538}],"id":71,"xGrid":26,"yGrid":9},{"desc":"NA 72 Sialkot General Election 2018 Result","voterTurnout":58.11,"totalVotes":252907,"result":[{"candidate":"CHAUDHRY ARMGHAN SUBHANI","party":"PML-N","votes":129041},{"candidate":"FIRDOUS ASHIQ","party":"PTI","votes":91393}],"id":72,"xGrid":27,"yGrid":12},{"desc":"NA 73 Sialkot General Election 2018 Result","voterTurnout":51.99,"totalVotes":246716,"result":[{"candidate":"Khawaja Muhammad Asif","party":"PML-N","votes":117002},{"candidate":"Muhammad Usman Dar","party":"PTI","votes":115596}],"id":73,"xGrid":28,"yGrid":11},{"desc":"NA 74 Sialkot General Election 2018 Result","voterTurnout":55.4,"totalVotes":254678,"result":[{"candidate":"Ali Zahid","party":"PML-N","votes":97235},{"candidate":"GHULAM ABBAS","party":"PTI","votes":93734}],"id":74,"xGrid":29,"yGrid":11},{"desc":"NA 75 Sialkot General Election 2018 Result","voterTurnout":55.84,"totalVotes":245754,"result":[{"candidate":"Syed Iftikhar Ul Hassan","party":"PML-N","votes":101617},{"candidate":"Ali Asjad Malhi","party":"PTI","votes":61432}],"id":75,"xGrid":24,"yGrid":10},{"desc":"NA 76 Sialkot General Election 2018 Result","voterTurnout":57.68,"totalVotes":264954,"result":[{"candidate":"Rana Shamim Ahmed Khan","party":"PML-N","votes":133664},{"candidate":"Muhammad Aslam","party":"PTI","votes":93190}],"id":76,"xGrid":27,"yGrid":9},{"desc":"NA 77 Narowal General Election 2018 Result","voterTurnout":54.86,"totalVotes":267585,"result":[{"candidate":"Mehnaz Akber Aziz","party":"PML-N","votes":106366},{"candidate":"Muhammad Tariq Anees","party":"Ind","votes":70596}],"id":77,"xGrid":29,"yGrid":10},{"desc":"NA 78 Narowal General Election 2018 Result","voterTurnout":55.06,"totalVotes":277817,"result":[{"candidate":"Ahsan Iqbal Chaudhary","party":"PML-N","votes":159651},{"candidate":"Abrar Ul Haq","party":"PTI","votes":88250}],"id":78,"xGrid":29,"yGrid":12},{"desc":"NA 79 Gujranwala General Election 2018 Result","voterTurnout":54.66,"totalVotes":291205,"result":[{"candidate":"NISAR AHMED CHEEMA","party":"PML-N","votes":142545},{"candidate":"MUHAMMAD AHMED CHATTHA","party":"PTI","votes":118709}],"id":79,"xGrid":24,"yGrid":9},{"desc":"NA 80 Gujranwala General Election 2018 Result","voterTurnout":53.36,"totalVotes":209655,"result":[{"candidate":"CH MEHMOOD BASHIR VIRK","party":"PML-N","votes":108653},{"candidate":"TARIQ MEHMOOD","party":"PTI","votes":71937}],"id":80,"xGrid":25,"yGrid":12},{"desc":"NA 81 Gujranwala General Election 2018 Result","voterTurnout":50.58,"totalVotes":247206,"result":[{"candidate":"Khurram Dastgir Khan","party":"PML-N","votes":130837},{"candidate":"Ch Muhammad Siddique","party":"PTI","votes":88166}],"id":81,"xGrid":25,"yGrid":10},{"desc":"NA 82 Gujranwala General Election 2018 Result","voterTurnout":52.26,"totalVotes":224670,"result":[{"candidate":"Usman Ibrahim S O Muhammad Ibrahim","party":"PML-N","votes":117520},{"candidate":"Ali Ashraf","party":"PTI","votes":67400}],"id":82,"xGrid":27,"yGrid":10},{"desc":"NA 83 Gujranwala General Election 2018 Result","voterTurnout":55.07,"totalVotes":241378,"result":[{"candidate":"ZULIFIQAR AHMAD","party":"PML-N","votes":139235},{"candidate":"RANA NAZIR AHMAD KHAN","party":"PTI","votes":75940}],"id":83,"xGrid":27,"yGrid":11},{"desc":"NA 84 Gujranwala General Election 2018 Result","voterTurnout":57.36,"totalVotes":243640,"result":[{"candidate":"Azhar Qayyum Nahra","party":"PML-N","votes":119612},{"candidate":"Ch Bilal Ejaz","party":"PTI","votes":89728}],"id":84,"xGrid":24,"yGrid":14},{"desc":"NA 85 M.B.Din General Election 2018 Result","voterTurnout":53.45,"totalVotes":260546,"result":[{"candidate":"Haji Imtiaz Ahmed Choudhary","party":"PTI","votes":99996},{"candidate":"Mushahid Raza","party":"PML-N","votes":80367}],"id":85,"xGrid":25,"yGrid":11},{"desc":"NA 86 M.B.Din General Election 2018 Result","voterTurnout":55.05,"totalVotes":266722,"result":[{"candidate":"Nasir Iqbal Bosal","party":"PML-N","votes":147105},{"candidate":"Nazar Muhammad Gondal","party":"PTI","votes":80637}],"id":86,"xGrid":22,"yGrid":11},{"desc":"NA 87 Hafizabad General Election 2018 Result","voterTurnout":59.13,"totalVotes":395158,"result":[{"candidate":"Ch Shoukat Ali Bhatti","party":"PTI","votes":165618},{"candidate":"Saira Tarar","party":"PML-N","votes":157453}],"id":87,"xGrid":23,"yGrid":10},{"desc":"NA 88 Sargodha General Election 2018 Result","voterTurnout":57.11,"totalVotes":275884,"result":[{"candidate":"MUKHTAR AHMAD MALIK","party":"PML-N","votes":129615},{"candidate":"Nadeem Afzal Gondal","party":"PTI","votes":115622}],"id":88,"xGrid":22,"yGrid":10},{"desc":"NA 89 Sargodha General Election 2018 Result","voterTurnout":58.93,"totalVotes":254572,"result":[{"candidate":"Mohsin Nawaz Ranjha","party":"PML-N","votes":114245},{"candidate":"Usama Ahmad Mela","party":"PTI","votes":113422}],"id":89,"xGrid":20,"yGrid":10},{"desc":"NA 90 Sargodha General Election 2018 Result","voterTurnout":52.97,"totalVotes":219686,"result":[{"candidate":"Ch Muhammad Hamid Hameed","party":"PML-N","votes":93948},{"candidate":"Nadia Aziz","party":"PTI","votes":85220}],"id":90,"xGrid":23,"yGrid":11},{"desc":"NA 91 Sargodha General Election 2018 Result","voterTurnout":59.45,"totalVotes":265560,"result":[{"candidate":"Zulfiqar Ali Bhatti","party":"PML-N","votes":110525},{"candidate":"CHOUDHARY AMIR SULTAN CHEEMA","party":"PTI","votes":110246}],"id":91,"xGrid":20,"yGrid":11},{"desc":"NA 92 Sargodha General Election 2018 Result","voterTurnout":56.81,"totalVotes":254312,"result":[{"candidate":"SYED JAVED HUSNAIN","party":"PML-N","votes":97013},{"candidate":"SAHIBZADA NAEEM UD DIN SIALVI","party":"PTI","votes":65406}],"id":92,"xGrid":21,"yGrid":10},{"desc":"NA 93 Khushab General Election 2018 Result","voterTurnout":57.86,"totalVotes":240123,"result":[{"candidate":"Umar Aslam Khan","party":"PTI","votes":100448},{"candidate":"Sumaira Malik","party":"PML-N","votes":70401}],"id":93,"xGrid":19,"yGrid":11},{"desc":"NA 94 Khushab General Election 2018 Result","voterTurnout":59.49,"totalVotes":229094,"result":[{"candidate":"MALIK MUHAMMAD EHSAN ULLAH TIWANA","party":"PTI","votes":93864},{"candidate":"MALIK SHAKIR BASHIR AWAN","party":"PML-N","votes":85109}],"id":94,"xGrid":19,"yGrid":12},{"desc":"NA 95 Mianwali General Election 2018 Result","voterTurnout":54.29,"totalVotes":244695,"result":[{"candidate":"Imran Ahmed Khan Niazi","party":"PTI","votes":163538},{"candidate":"OBAID ULLAH KHAN","party":"PML-N","votes":50015}],"id":95,"xGrid":19,"yGrid":10},{"desc":"NA 96 Mianwali General Election 2018 Result","voterTurnout":57.95,"totalVotes":254673,"result":[{"candidate":"AMJID ALI KHAN","party":"PTI","votes":157422},{"candidate":"MUHAMMAD HUMAIR HAYAT KHAN NIAZI","party":"PML-N","votes":54909}],"id":96,"xGrid":18,"yGrid":11},{"desc":"NA 97 Bhakkar General Election 2018 Result","voterTurnout":65.97,"totalVotes":277996,"result":[{"candidate":"MUHAMMAD SANA ULLAH KHAN MASTI KHEL","party":"Ind","votes":120729},{"candidate":"ABDUL MAJEED KHAN","party":"PML-N","votes":91607}],"id":97,"xGrid":17,"yGrid":12},{"desc":"NA 98 Bhakkar General Election 2018 Result","voterTurnout":67.98,"totalVotes":287382,"result":[{"candidate":"Muhammad Afzal Khan","party":"PTI","votes":138307},{"candidate":"Rashid Akbar Khan","party":"Ind","votes":133679}],"id":98,"xGrid":18,"yGrid":13},{"desc":"NA 99 Chiniot General Election 2018 Result","voterTurnout":55.56,"totalVotes":206792,"result":[{"candidate":"GHULAM MUHAMMAD","party":"PTI","votes":81330},{"candidate":"GHULAM ABBAS","party":"Ind","votes":64307}],"id":99,"xGrid":19,"yGrid":13},{"desc":"NA 100 Chiniot General Election 2018 Result","voterTurnout":61.68,"totalVotes":216487,"result":[{"candidate":"QAISER AHMED SHEIKH","party":"PML-N","votes":76415},{"candidate":"ZULFIQAR ALI SHAH","party":"PTI","votes":75559}],"id":100,"xGrid":24,"yGrid":13},{"desc":"NA 101 Faisalabad General Election 2018 Result","voterTurnout":58.19,"totalVotes":260844,"result":[{"candidate":"Muhammad Asim Nazir","party":"Ind","votes":147812},{"candidate":"Zafar Zulqarnain Sahi","party":"PTI","votes":86575}],"id":101,"xGrid":22,"yGrid":14},{"desc":"NA 102 Faisalabad General Election 2018 Result","voterTurnout":54.67,"totalVotes":266192,"result":[{"candidate":"NAWAB SHER","party":"PTI","votes":109708},{"candidate":"MUHAMMAD TALLAL BADAR","party":"PML-N","votes":97869}],"id":102,"xGrid":23,"yGrid":15},{"desc":"NA 103 Faisalabad General Election 2018 Result","voterTurnout":50,"totalVotes":203888,"result":[{"candidate":"Ali Gohar Khan Baloch","party":"PML-N","votes":77539},{"candidate":"Muhammad Saad Ullah Baloch","party":"PTI","votes":66627}],"id":103,"xGrid":24,"yGrid":15},{"desc":"NA 104 Faisalabad General Election 2018 Result","voterTurnout":55.88,"totalVotes":267809,"result":[{"candidate":"Ch Muhammad Shahbaz Babar","party":"PML-N","votes":95099},{"candidate":"Sardar Dildar Ahmad Cheema","party":"PTI","votes":73320}],"id":104,"xGrid":22,"yGrid":16},{"desc":"NA 105 Faisalabad General Election 2018 Result","voterTurnout":56.84,"totalVotes":240501,"result":[{"candidate":"Raza Nasrullah","party":"PTI","votes":77862},{"candidate":"Muhammad Masood Nazir","party":"Ind","votes":69211}],"id":105,"xGrid":20,"yGrid":13},{"desc":"NA 106 Faisalabad General Election 2018 Result","voterTurnout":58.92,"totalVotes":239441,"result":[{"candidate":"Rana Sana Ullah Khan","party":"PML-N","votes":106319},{"candidate":"Nisar Ahmad","party":"PTI","votes":103799}],"id":106,"xGrid":21,"yGrid":13},{"desc":"NA 107 Faisalabad General Election 2018 Result","voterTurnout":57.52,"totalVotes":245950,"result":[{"candidate":"Khurram Shahzad","party":"PTI","votes":126441},{"candidate":"Haji Muhammad Akram Ansari","party":"PML-N","votes":102159}],"id":107,"xGrid":23,"yGrid":13},{"desc":"NA 108 Faisalabad General Election 2018 Result","voterTurnout":57.01,"totalVotes":242582,"result":[{"candidate":"FARRUKH HABIB","party":"PTI","votes":112740},{"candidate":"ABID SHER ALI","party":"PML-N","votes":111529}],"id":108,"xGrid":25,"yGrid":13},{"desc":"NA 109 Faisalabad General Election 2018 Result","voterTurnout":58.05,"totalVotes":239769,"result":[{"candidate":"FAIZ ULLAH","party":"PTI","votes":122905},{"candidate":"MIAN ABDUL MANNAN","party":"PML-N","votes":94476}],"id":109,"xGrid":22,"yGrid":13},{"desc":"NA 110 Faisalabad General Election 2018 Result","voterTurnout":57.01,"totalVotes":249613,"result":[{"candidate":"Raja Riaz Ahmad","party":"PTI","votes":114215},{"candidate":"Muhammad Afzal Khan","party":"PML-N","votes":108172}],"id":110,"xGrid":21,"yGrid":12},{"desc":"NA 111 Toba Tek Singh General Election 2018 Result","voterTurnout":58.32,"totalVotes":246568,"result":[{"candidate":"CHAUDHARY KHALID JAVED","party":"PML-N","votes":110556},{"candidate":"USAMA HAMZA","party":"PTI","votes":85448}],"id":111,"xGrid":20,"yGrid":12},{"desc":"NA 112 Toba Tek Singh General Election 2018 Result","voterTurnout":59.22,"totalVotes":272751,"result":[{"candidate":"MUHAMMAD JUNAID ANWAR CHAUDHRY","party":"PML-N","votes":125303},{"candidate":"MUHAMMAD ASHFAQ","party":"PTI","votes":121031}],"id":112,"xGrid":22,"yGrid":15},{"desc":"NA 113 Toba Tek Singh General Election 2018 Result","voterTurnout":59.9,"totalVotes":254969,"result":[{"candidate":"MUHAMMAD RIAZ KHAN","party":"PTI","votes":128274},{"candidate":"CHAUDHARY ASAD UR REHMAN","party":"PML-N","votes":106018}],"id":113,"xGrid":20,"yGrid":14},{"desc":"NA 114 Jhang General Election 2018 Result","voterTurnout":62.45,"totalVotes":294749,"result":[{"candidate":"SAHIBZADA MUHAMMAD MEHBOOB SULTAN","party":"PTI","votes":106043},{"candidate":"MAKHDOOM SYED FAISAL SALEH HAYAT","party":"PPP","votes":105454}],"id":114,"xGrid":21,"yGrid":14},{"desc":"NA 115 Jhang General Election 2018 Result","voterTurnout":57.39,"totalVotes":253830,"result":[{"candidate":"GHULAM BIBI","party":"PTI","votes":91434},{"candidate":"MUHAMMAD AHMAD","party":"Ind","votes":68515}],"id":115,"xGrid":21,"yGrid":16},{"desc":"NA 116 Jhang General Election 2018 Result","voterTurnout":62.15,"totalVotes":282368,"result":[{"candidate":"Muhammad Ameer Sultan","party":"PTI","votes":90649},{"candidate":"MUHAMMAD ASIF MUAVIA","party":"Ind","votes":70842}],"id":116,"xGrid":19,"yGrid":14},{"desc":"NA 117 Nankana Sahib General Election 2018 Result","voterTurnout":58.4,"totalVotes":233870,"result":[{"candidate":"CH MUHAMMAD BARJEES TAHIR","party":"PML-N","votes":71891},{"candidate":"TARIQ MEHMOOD BAJWA","party":"Ind","votes":68995}],"id":117,"xGrid":24,"yGrid":12},{"desc":"NA 118 Nankana Sahib General Election 2018 Result","voterTurnout":58.64,"totalVotes":208702,"result":[{"candidate":"Ijaz Ahmad Shah","party":"PTI","votes":63818},{"candidate":"Shezra Mansab Ali Khan Kharal","party":"PML-N","votes":61413}],"id":118,"xGrid":24,"yGrid":11},{"desc":"NA 119 Sheikhupura General Election 2018 Result","voterTurnout":56.04,"totalVotes":229687,"result":[{"candidate":"RAHAT AMAN ULLAH BHATTI","party":"PTI","votes":110231},{"candidate":"RANA AFZAAL HUSSAIN","party":"PML-N","votes":94072}],"id":119,"xGrid":28,"yGrid":14},{"desc":"NA 120 Sheikhupura General Election 2018 Result","voterTurnout":59.35,"totalVotes":216295,"result":[{"candidate":"Rana Tanveer Hussain","party":"PML-N","votes":99674},{"candidate":"Ali Asghar Chaudhary","party":"PTI","votes":74165}],"id":120,"xGrid":22,"yGrid":12},{"desc":"NA 121 Sheikhupura General Election 2018 Result","voterTurnout":56.16,"totalVotes":240240,"result":[{"candidate":"Javed Latif","party":"PML-N","votes":101622},{"candidate":"Muhammad Saeed Virk","party":"PTI","votes":71308}],"id":121,"xGrid":26,"yGrid":10},{"desc":"NA 122 Sheikhupura General Election 2018 Result","voterTurnout":57.83,"totalVotes":263515,"result":[{"candidate":"Sardar Muhammad Arfan Dogar","party":"PML-N","votes":96000},{"candidate":"Ali Salaman","party":"PTI","votes":64616}],"id":122,"xGrid":25,"yGrid":14},{"desc":"NA 123 Lahore General Election 2018 Result","voterTurnout":51.13,"totalVotes":203871,"result":[{"candidate":"muhammad Riaz","party":"PML-N","votes":97193},{"candidate":"wajid azeem","party":"PTI","votes":72535}],"id":123,"xGrid":23,"yGrid":12},{"desc":"NA 124 Lahore General Election 2018 Result","voterTurnout":48.5,"totalVotes":254901,"result":[{"candidate":"Muhammad Hamza Shehbaz Sharif","party":"PML-N","votes":146294},{"candidate":"Muhammad Nauman Qaiser","party":"PTI","votes":80981}],"id":124,"xGrid":29,"yGrid":14},{"desc":"NA 125 Lahore General Election 2018 Result","voterTurnout":0,"totalVotes":251251,"result":[{"candidate":"Waheed Alam Khan","party":"PML-N","votes":122327},{"candidate":"Yasmin Raashid","party":"PTI","votes":106857}],"id":125,"xGrid":26,"yGrid":14},{"desc":"NA 126 Lahore General Election 2018 Result","voterTurnout":52.26,"totalVotes":228368,"result":[{"candidate":"Muhammad Hammad Azhar","party":"PTI","votes":105734},{"candidate":"Mehr Ishtiaq Ahmad Anwar","party":"PML-N","votes":102677}],"id":126,"xGrid":26,"yGrid":12},{"desc":"NA 127 Lahore General Election 2018 Result","voterTurnout":50.75,"totalVotes":209135,"result":[{"candidate":"ALI PERVAIZ","party":"PML-N","votes":113265},{"candidate":"JAMSHED IQBAL","party":"PTI","votes":66818}],"id":127,"xGrid":28,"yGrid":15},{"desc":"NA 128 Lahore General Election 2018 Result","voterTurnout":55.21,"totalVotes":187080,"result":[{"candidate":"Sh Rohale Asghar","party":"PML-N","votes":98199},{"candidate":"Ijaz Ahmad","party":"PTI","votes":52774}],"id":128,"xGrid":26,"yGrid":11},{"desc":"NA 129 Lahore General Election 2018 Result","voterTurnout":53.96,"totalVotes":214705,"result":[{"candidate":"Sardar Ayaz Sadiq","party":"PML-N","votes":103021},{"candidate":"Abdul Aleem Khan","party":"PTI","votes":94879}],"id":129,"xGrid":28,"yGrid":12},{"desc":"NA 130 Lahore General Election 2018 Result","voterTurnout":52.99,"totalVotes":252258,"result":[{"candidate":"Shafqat Mahmood","party":"PTI","votes":127405},{"candidate":"Khawaja Ahmad Hasan","party":"PML-N","votes":104625}],"id":130,"xGrid":27,"yGrid":16},{"desc":"NA 131 Lahore General Election 2018 Result","voterTurnout":52.59,"totalVotes":188711,"result":[{"candidate":"Imran Ahmed Khan Niazi","party":"PTI","votes":84313},{"candidate":"Khawaja Saad Rafique","party":"PML-N","votes":83633}],"id":131,"xGrid":27,"yGrid":13},{"desc":"NA 132 Lahore General Election 2018 Result","voterTurnout":60.45,"totalVotes":186927,"result":[{"candidate":"Mian Muhammad Shehbaz Sharif","party":"PML-N","votes":95834},{"candidate":"Ch Muhammad Mansha Sindhu","party":"PTI","votes":49093}],"id":132,"xGrid":29,"yGrid":13},{"desc":"NA 133 Lahore General Election 2018 Result","voterTurnout":51.89,"totalVotes":190531,"result":[{"candidate":"Mohammad pervaiz malik","party":"PML-N","votes":89678},{"candidate":"Ejaz ahmad chaudary","party":"PTI","votes":77231}],"id":133,"xGrid":27,"yGrid":14},{"desc":"NA 134 Lahore General Election 2018 Result","voterTurnout":53.4,"totalVotes":141597,"result":[{"candidate":"Rana Mubashir Iqbal","party":"PML-N","votes":76291},{"candidate":"Malik Zaheer Abbas","party":"PTI","votes":45991}],"id":134,"xGrid":28,"yGrid":13},{"desc":"NA 135 Lahore General Election 2018 Result","voterTurnout":53.94,"totalVotes":136375,"result":[{"candidate":"MALIK KARAMAT ALI","party":"PTI","votes":64765},{"candidate":"MALIK SAIF UL MALOOK KHOKHAR","party":"PML-N","votes":55431}],"id":135,"xGrid":26,"yGrid":15},{"desc":"NA 136 Lahore General Election 2018 Result","voterTurnout":56.08,"totalVotes":162841,"result":[{"candidate":"MUHAMMAD AFZAL","party":"PML-N","votes":88831},{"candidate":"MALIK ASAD ALI","party":"PTI","votes":44669}],"id":136,"xGrid":27,"yGrid":15},{"desc":"NA 137 Kasur General Election 2018 Result","voterTurnout":58.91,"totalVotes":265668,"result":[{"candidate":"Saad Waseem","party":"PML-N","votes":121207},{"candidate":"Sardar Asif Ali Daula","party":"PTI","votes":42930}],"id":137,"xGrid":29,"yGrid":15},{"desc":"NA 138 Kasur General Election 2018 Result","voterTurnout":62.38,"totalVotes":259091,"result":[{"candidate":"RASHEED AHMAD KHAN","party":"PML-N","votes":109385},{"candidate":"RASHID TUFAIL","party":"PTI","votes":78458}],"id":138,"xGrid":26,"yGrid":16},{"desc":"NA 139 Kasur General Election 2018 Result","voterTurnout":59.99,"totalVotes":281027,"result":[{"candidate":"RANA MUHAMMAD ISHAQ KHAN","party":"PML-N","votes":121767},{"candidate":"AZEEM UD DIN ZAHID","party":"PTI","votes":112893}],"id":139,"xGrid":26,"yGrid":13},{"desc":"NA 140 Kasur General Election 2018 Result","voterTurnout":60.65,"totalVotes":281981,"result":[{"candidate":"SARDAR TALIB HASSAN NAKAI","party":"PTI","votes":124621},{"candidate":"RANA MUHAMMAD HAYAT KHAN","party":"PML-N","votes":124385}],"id":140,"xGrid":24,"yGrid":16},{"desc":"NA 141 Okara General Election 2018 Result","voterTurnout":60.23,"totalVotes":262877,"result":[{"candidate":"NADEEM ABBAS","party":"PML-N","votes":92841},{"candidate":"SYED SUMSAM ALI SHAH BUKHARI","party":"PTI","votes":60217}],"id":141,"xGrid":25,"yGrid":15},{"desc":"NA 142 Okara General Election 2018 Result","voterTurnout":56.81,"totalVotes":235192,"result":[{"candidate":"Riaz ul Haq","party":"PML-N","votes":140733},{"candidate":"Rao Hassan Sikandar","party":"PTI","votes":76592}],"id":142,"xGrid":25,"yGrid":16},{"desc":"NA 143 Okara General Election 2018 Result","voterTurnout":58.22,"totalVotes":246272,"result":[{"candidate":"RAO MUHAMMAD AJMAL KHAN","party":"PML-N","votes":142988},{"candidate":"SYED GULZAR SIBTAIN SHAH","party":"PTI","votes":89177}],"id":143,"xGrid":23,"yGrid":17},{"desc":"NA 144 Okara General Election 2018 Result","voterTurnout":57.42,"totalVotes":241463,"result":[{"candidate":"Muhammad Mueen Wattoo","party":"PML-N","votes":118670},{"candidate":"MIAN MANZOOR AHMAD KHAN WATTOO","party":"Ind","votes":105585}],"id":144,"xGrid":23,"yGrid":16},{"desc":"NA 145 Pakpattan General Election 2018 Result","voterTurnout":57.62,"totalVotes":280086,"result":[{"candidate":"Ahmad Raza Maneka","party":"PML-N","votes":118581},{"candidate":"Muhammad Shah Khagga","party":"PTI","votes":90683}],"id":145,"xGrid":24,"yGrid":18},{"desc":"NA 146 Pakpattan General Election 2018 Result","voterTurnout":59.55,"totalVotes":298980,"result":[{"candidate":"rana iradat sharif khan","party":"PML-N","votes":138789},{"candidate":"MIAN MUHAMMAD AMJAD JOIYA","party":"PTI","votes":101509}],"id":146,"xGrid":22,"yGrid":18},{"desc":"NA 147 Sahiwal General Election 2018 Result","voterTurnout":56.04,"totalVotes":260514,"result":[{"candidate":"SYED IMRAN AHMAD SHAH","party":"PML-N","votes":120697},{"candidate":"CHAUDHRY NOURAIZ SHAKOOR KHAN","party":"PTI","votes":86462}],"id":147,"xGrid":23,"yGrid":14},{"desc":"NA 148 Sahiwal General Election 2018 Result","voterTurnout":56.1,"totalVotes":269177,"result":[{"candidate":"Chaudry Muhammad Ashraf","party":"PML-N","votes":128880},{"candidate":"Malik Muhammad Yar Dhakoo","party":"PTI","votes":87557}],"id":148,"xGrid":23,"yGrid":18},{"desc":"NA 149 Sahiwal General Election 2018 Result","voterTurnout":56.92,"totalVotes":278627,"result":[{"candidate":"RAI MUHAMMAD MURTAZA IQBAL","party":"PTI","votes":137632},{"candidate":"MUHAMMAD TUFAIL","party":"PML-N","votes":111999}],"id":149,"xGrid":20,"yGrid":15},{"desc":"NA 150 Khanewal General Election 2018 Result","voterTurnout":59.87,"totalVotes":222475,"result":[{"candidate":"Syed Fakhar Imam","party":"Ind","votes":101396},{"candidate":"Muhammad Raza Hayat Hiraj","party":"PTI","votes":91812}],"id":150,"xGrid":19,"yGrid":15},{"desc":"NA 151 Khanewal General Election 2018 Result","voterTurnout":58.62,"totalVotes":233754,"result":[{"candidate":"Muhammad Khan Daha","party":"PML-N","votes":111198},{"candidate":"Ahmad Yar Hiraj","party":"PTI","votes":109520}],"id":151,"xGrid":18,"yGrid":16},{"desc":"NA 152 Khanewal General Election 2018 Result","voterTurnout":58.62,"totalVotes":231252,"result":[{"candidate":"Zahoor Hussain Qureshi","party":"PTI","votes":108707},{"candidate":"Pir M Aslam Bodla Siddiqui","party":"PML-N","votes":98938}],"id":152,"xGrid":19,"yGrid":16},{"desc":"NA 153 Khanewal General Election 2018 Result","voterTurnout":61.29,"totalVotes":247328,"result":[{"candidate":"Chaudhry Iftikhar Nazir","party":"PML-N","votes":106291},{"candidate":"Malik Ghulam Murtaza","party":"PTI","votes":76920}],"id":153,"xGrid":21,"yGrid":17},{"desc":"NA 154 Multan General Election 2018 Result","voterTurnout":57.04,"totalVotes":214634,"result":[{"candidate":"AHMAD HUSSAIN","party":"PTI","votes":74220},{"candidate":"SYED ABDUL QADIR GILLANI","party":"PPP","votes":64257}],"id":154,"xGrid":19,"yGrid":17},{"desc":"NA 155 Multan General Election 2018 Result","voterTurnout":49.27,"totalVotes":236624,"result":[{"candidate":"Malik Muhammad Amir Doger","party":"PTI","votes":135726},{"candidate":"Muhammad Tariq Rasheed","party":"PML-N","votes":80993}],"id":155,"xGrid":17,"yGrid":16},{"desc":"NA 156 Multan General Election 2018 Result","voterTurnout":49.87,"totalVotes":218738,"result":[{"candidate":"Makhdoom Shah Mahmood Hussain Qureshi","party":"PTI","votes":116272},{"candidate":"Amir Saeed Ansari","party":"PML-N","votes":84940}],"id":156,"xGrid":20,"yGrid":18},{"desc":"NA 157 Multan General Election 2018 Result","voterTurnout":57.27,"totalVotes":219522,"result":[{"candidate":"MAKHDOOM ZAIN HUSSAIN QURESHI","party":"PTI","votes":77371},{"candidate":"SAYED ALI MOOSA GILANI","party":"PPP","votes":70830}],"id":157,"xGrid":19,"yGrid":19},{"desc":"NA 158 Multan General Election 2018 Result","voterTurnout":56.76,"totalVotes":241985,"result":[{"candidate":"Muhammad ibrahim khan","party":"PTI","votes":83304},{"candidate":"Syed Yousaf Raza Gilani","party":"PPP","votes":74443}],"id":158,"xGrid":20,"yGrid":17},{"desc":"NA 159 Multan General Election 2018 Result","voterTurnout":56.48,"totalVotes":226785,"result":[{"candidate":"Rana Muhammad Qasim Noon","party":"PTI","votes":102606},{"candidate":"Muhammad Zulqarnain Bukhari","party":"PML-N","votes":99374}],"id":159,"xGrid":19,"yGrid":20},{"desc":"NA 160 Lodhran General Election 2018 Result","voterTurnout":60.2,"totalVotes":267535,"result":[{"candidate":"ABDUL REHMAN KHAN KANJU","party":"PML-N","votes":125740},{"candidate":"MUHAMMAD AKHTAR KHAN KANJU","party":"PTI","votes":115321}],"id":160,"xGrid":18,"yGrid":19},{"desc":"NA 161 Lodhran General Election 2018 Result","voterTurnout":57.73,"totalVotes":258848,"result":[{"candidate":"MIAN MUHAMMAD SHAFIQ","party":"PTI","votes":121300},{"candidate":"KHAN MUHAMMAD SIDDIQUE KHAN BALOOCH","party":"PML-N","votes":116093}],"id":161,"xGrid":20,"yGrid":19},{"desc":"NA 162 Vehari General Election 2018 Result","voterTurnout":55.91,"totalVotes":230227,"result":[{"candidate":"Choudhary Faqir Ahmad","party":"PML-N","votes":81956},{"candidate":"Ayesha Nazir","party":"Ind","votes":64766}],"id":162,"xGrid":22,"yGrid":17},{"desc":"NA 163 Vehari General Election 2018 Result","voterTurnout":57.87,"totalVotes":211965,"result":[{"candidate":"Sajid Mehdi","party":"PML-N","votes":70325},{"candidate":"Muhammad Ishaq Khan Khakwani","party":"PTI","votes":56873}],"id":163,"xGrid":24,"yGrid":17},{"desc":"NA 164 Vehari General Election 2018 Result","voterTurnout":57.58,"totalVotes":229456,"result":[{"candidate":"Tahir Iqbal","party":"PTI","votes":82084},{"candidate":"Begum Tehmina Doultana","party":"PML-N","votes":68198}],"id":164,"xGrid":21,"yGrid":19},{"desc":"NA 165 Vehari General Election 2018 Result","voterTurnout":56.39,"totalVotes":213842,"result":[{"candidate":"Aurangzeb Khan Khichi","party":"PTI","votes":99287},{"candidate":"Saeed Ahmad Khan Manais","party":"PML-N","votes":65536}],"id":165,"xGrid":18,"yGrid":17},{"desc":"NA 166 Bahawalnagar General Election 2018 Result","voterTurnout":62.92,"totalVotes":219458,"result":[{"candidate":"Muhammad Abdul Ghafar Wattoo","party":"Ind","votes":101811},{"candidate":"Syed Muhammad Asghar","party":"PTI","votes":93020}],"id":166,"xGrid":25,"yGrid":17},{"desc":"NA 167 Bahawalnagar General Election 2018 Result","voterTurnout":56.81,"totalVotes":209306,"result":[{"candidate":"Alam Dad Laleka","party":"PML-N","votes":91349},{"candidate":"Mian Mumtaz Ahmad Mutayana","party":"PTI","votes":49772}],"id":167,"xGrid":21,"yGrid":18},{"desc":"NA 168 Bahawalnagar General Election 2018 Result","voterTurnout":56.51,"totalVotes":227221,"result":[{"candidate":"Ehsan Ul Haq Bajwa","party":"PML-N","votes":124218},{"candidate":"Fatima Tahir Cheema","party":"PTI","votes":74517}],"id":168,"xGrid":23,"yGrid":19},{"desc":"NA 169 Bahawalnagar General Election 2018 Result","voterTurnout":60.34,"totalVotes":242832,"result":[{"candidate":"NOOR UL HASSAN TANVIR","party":"PML-N","votes":91763},{"candidate":"Muhammad Ijaz Ul Haq","party":"PML-F","votes":72461}],"id":169,"xGrid":22,"yGrid":20},{"desc":"NA 170 Bahawalpur General Election 2018 Result","voterTurnout":52.29,"totalVotes":185464,"result":[{"candidate":"MUHAMMAD FAROOQ AZAM MALIK","party":"PTI","votes":84495},{"candidate":"MUHAMMAD BALIGH UR REHMAN","party":"PML-N","votes":74694}],"id":170,"xGrid":17,"yGrid":19},{"desc":"NA 171 Bahawalpur General Election 2018 Result","voterTurnout":59.95,"totalVotes":236422,"result":[{"candidate":"Mian Riaz Hussain Pirzada","party":"PML-N","votes":99202},{"candidate":"choudhary Naeem ud Din Warraich","party":"PTI","votes":88297}],"id":171,"xGrid":22,"yGrid":19},{"desc":"NA 172 Bahawalpur General Election 2018 Result","voterTurnout":64.08,"totalVotes":224681,"result":[{"candidate":"Chaudhary Tariq Bashir Cheema","party":"PML-Q","votes":106383},{"candidate":"Saud Majeed","party":"PML-N","votes":101971}],"id":172,"xGrid":19,"yGrid":21},{"desc":"NA 173 Bahawalpur General Election 2018 Result","voterTurnout":56.02,"totalVotes":210049,"result":[{"candidate":"MIAN NAJEEB UD DIN AWAISI","party":"PML-N","votes":86142},{"candidate":"KHADEEJA AAMIR","party":"PTI","votes":60211}],"id":173,"xGrid":18,"yGrid":18},{"desc":"NA 174 Bahawalpur General Election 2018 Result","voterTurnout":52.68,"totalVotes":187100,"result":[{"candidate":"Makhdoom Syed Sami ul Hassan Gillani","party":"PTI","votes":63884},{"candidate":"PRINCE BAHAWAL ABBAS ABBASI","party":"Ind","votes":58092}],"id":174,"xGrid":18,"yGrid":21},{"desc":"NA 175 Rahim Yar Khan General Election 2018 Result","voterTurnout":56.49,"totalVotes":236534,"result":[{"candidate":"Syed Mobeen Ahmed","party":"PTI","votes":96967},{"candidate":"Khawaja Ghulam Rasool Kureja","party":"PPP","votes":89113}],"id":175,"xGrid":17,"yGrid":20},{"desc":"NA 176 Rahim Yar Khan General Election 2018 Result","voterTurnout":54.84,"totalVotes":211149,"result":[{"candidate":"SHEIKH FAYYAZ UD DIN","party":"PML-N","votes":78536},{"candidate":"MIAN GHOUS MUHAMMAD","party":"PTI","votes":59860}],"id":176,"xGrid":17,"yGrid":22},{"desc":"NA 177 Rahim Yar Khan General Election 2018 Result","voterTurnout":54.71,"totalVotes":216718,"result":[{"candidate":"Makhdoom Khusro Bukhtyar","party":"PTI","votes":100768},{"candidate":"Makhdoom Shahab ud Din","party":"PPP","votes":64645}],"id":177,"xGrid":16,"yGrid":20},{"desc":"NA 178 Rahim Yar Khan General Election 2018 Result","voterTurnout":56.2,"totalVotes":197373,"result":[{"candidate":"SYED MUSTAFA MAHMUD","party":"PPP","votes":93044},{"candidate":"MUHAMMAD TARIQ","party":"PML-N","votes":50723}],"id":178,"xGrid":16,"yGrid":21},{"desc":"NA 179 Rahim Yar Khan General Election 2018 Result","voterTurnout":57.25,"totalVotes":249334,"result":[{"candidate":"JAVED IQBAL","party":"PTI","votes":110827},{"candidate":"MIAN IMTIAZ AHMAD","party":"PML-N","votes":88795}],"id":179,"xGrid":17,"yGrid":21},{"desc":"NA 180 Rahim Yar Khan General Election 2018 Result","voterTurnout":58.86,"totalVotes":220665,"result":[{"candidate":"Syed Murtaza Mahmud","party":"PPP","votes":71988},{"candidate":"MUHAMMAD ARSHAD KHAN LEGHARI","party":"PML-N","votes":54990}],"id":180,"xGrid":16,"yGrid":22},{"desc":"NA 181 Muzaffargarh General Election 2018 Result","voterTurnout":62.56,"totalVotes":197827,"result":[{"candidate":"Muhammad Shabbir Ali","party":"Ind","votes":64012},{"candidate":"Malik Sulatan Mehmood","party":"Ind","votes":54253}],"id":181,"xGrid":18,"yGrid":15},{"desc":"NA 182 Muzaffargarh General Election 2018 Result","voterTurnout":60.99,"totalVotes":197599,"result":[{"candidate":"Mahar Irshad Ahmad Khan","party":"PPP","votes":53054},{"candidate":"Jamshed Ahmed","party":"PAR","votes":50566}],"id":182,"xGrid":20,"yGrid":16},{"desc":"NA 183 Muzaffargarh General Election 2018 Result","voterTurnout":63.22,"totalVotes":204329,"result":[{"candidate":"Raza Rabani Khar","party":"PPP","votes":54922},{"candidate":"Fiaz Hussain","party":"Ind","votes":39922}],"id":183,"xGrid":17,"yGrid":17},{"desc":"NA 184 Muzaffargarh General Election 2018 Result","voterTurnout":58.52,"totalVotes":198505,"result":[{"candidate":"Nawabzada Iftakhar Ahmed Khan Babar","party":"PPP","votes":54778},{"candidate":"Malik Ahmed Kareem Qaswer Langrial","party":"Ind","votes":41673}],"id":184,"xGrid":19,"yGrid":18},{"desc":"NA 185 Muzaffargarh General Election 2018 Result","voterTurnout":68,"totalVotes":196031,"result":[{"candidate":"Makhdom Zada Sayed Basit Ahmad Sultan","party":"Ind","votes":94282},{"candidate":"Muhammad Mazzam Ali Khan","party":"PTI","votes":72822}],"id":185,"xGrid":18,"yGrid":20},{"desc":"NA 186 Muzaffargarh General Election 2018 Result","voterTurnout":60.12,"totalVotes":190540,"result":[{"candidate":"Aamir Talal Khan","party":"PTI","votes":62915},{"candidate":"Muhammad Dawood Khan","party":"PPP","votes":52790}],"id":186,"xGrid":16,"yGrid":19},{"desc":"NA 187 Layyah General Election 2018 Result","voterTurnout":63.45,"totalVotes":280772,"result":[{"candidate":"Abdul Majeed Khan","party":"PTI","votes":93903},{"candidate":"Sardar Bahadur Ahmed Khan","party":"Ind","votes":88225}],"id":187,"xGrid":21,"yGrid":15},{"desc":"NA 188 Layyah General Election 2018 Result","voterTurnout":64.02,"totalVotes":279417,"result":[{"candidate":"Niaz Ahmed","party":"PTI","votes":109420},{"candidate":"Syed Muhammad Saqlain Bukhari","party":"PML-N","votes":102943}],"id":188,"xGrid":17,"yGrid":15},{"desc":"NA 189 Dera Ghazi Khan General Election 2018 Result","voterTurnout":52.35,"totalVotes":166880,"result":[{"candidate":"Khawja Sheraz Mehmood","party":"PTI","votes":78596},{"candidate":"Sardar Meer Badshah Khan Qaisrani","party":"Ind","votes":39522}],"id":189,"xGrid":16,"yGrid":14},{"desc":"NA 190 Dera Ghazi Khan General Election 2018 Result","voterTurnout":51.66,"totalVotes":157766,"result":[{"candidate":"MUHAMMAD AMJAD FAROOQ KHAN KHOSA","party":"Ind","votes":72159},{"candidate":"SARDAR ZULFIQAR ALI KHAN KHOSA","party":"PTI","votes":71964}],"id":190,"xGrid":16,"yGrid":17},{"desc":"NA 191 Dera Ghazi Khan General Election 2018 Result","voterTurnout":50.54,"totalVotes":185872,"result":[{"candidate":"Zartaj Gul","party":"PTI","votes":79817},{"candidate":"Sardar Awais Ahmed Khan Leghari","party":"PML-N","votes":54548}],"id":191,"xGrid":15,"yGrid":17},{"desc":"NA 192 Dera Ghazi Khan General Election 2018 Result","voterTurnout":54.88,"totalVotes":160360,"result":[{"candidate":"Sirdar Muhammad Khan Laghari","party":"PTI","votes":80522},{"candidate":"Mian Muhammad Shehbaz Sharif","party":"PML-N","votes":67608}],"id":192,"xGrid":17,"yGrid":18},{"desc":"NA 193 Rajanpur General Election 2018 Result","voterTurnout":55.68,"totalVotes":166506,"result":[{"candidate":"SARDAR MUHAMMAD JAFFAR KHAN LEGHARI","party":"PTI","votes":81149},{"candidate":"SARDAR SHER ALI GURCHANI","party":"Ind","votes":46693}],"id":193,"xGrid":16,"yGrid":18},{"desc":"NA 194 Rajanpur General Election 2018 Result","voterTurnout":59.9,"totalVotes":173585,"result":[{"candidate":"SARDAR NASRULLAH KHAN DRESHAK","party":"PTI","votes":73225},{"candidate":"Hafeez Ur Rehman Khan Dreshak","party":"Ind","votes":64565}],"id":194,"xGrid":15,"yGrid":19},{"desc":"NA 195 Rajanpur General Election 2018 Result","voterTurnout":63.52,"totalVotes":167541,"result":[{"candidate":"Sardar Riaz Mehmood Khan Mazari","party":"PTI","votes":89796},{"candidate":"Khizar Hussain Mazari","party":"PML-N","votes":68872}],"id":195,"xGrid":15,"yGrid":20},{"desc":"NA 196 Jacobabad General Election 2018 Result","voterTurnout":44.59,"totalVotes":203066,"result":[{"candidate":"Muhammad Mian Soomro","party":"PTI","votes":92274},{"candidate":"Aijaz Hussain Jakhrani","party":"PPP","votes":86876}],"id":196,"xGrid":12,"yGrid":21},{"desc":"NA 197 Kashmore General Election 2018 Result","voterTurnout":36.37,"totalVotes":150033,"result":[{"candidate":"Ehsan ur Rehman Mazari","party":"PPP","votes":84742},{"candidate":"Shamsher Ali Mazari","party":"MMA","votes":47326}],"id":197,"xGrid":14,"yGrid":22},{"desc":"NA 198 Shikarpur General Election 2018 Result","voterTurnout":50.13,"totalVotes":145781,"result":[{"candidate":"Abid Hussain Bhayo","party":"PPP","votes":64187},{"candidate":"Muhammad Ibrahim Jatoi","party":"Ind","votes":44829}],"id":198,"xGrid":12,"yGrid":22},{"desc":"NA 199 Shikarpur General Election 2018 Result","voterTurnout":49.75,"totalVotes":137036,"result":[{"candidate":"Ghous Bux Khan Mahar","party":"GDA","votes":62785},{"candidate":"Zulfiqar Ali Kamario","party":"PPP","votes":55987}],"id":199,"xGrid":11,"yGrid":23},{"desc":"NA 200 Larkana General Election 2018 Result","voterTurnout":48.25,"totalVotes":152407,"result":[{"candidate":"Bilawal Bhutto Zardari","party":"PPP","votes":84426},{"candidate":"Rashid Mehmood Soomro","party":"MMA","votes":50200}],"id":200,"xGrid":12,"yGrid":23},{"desc":"NA 201 Larkana General Election 2018 Result","voterTurnout":52.71,"totalVotes":183130,"result":[{"candidate":"Khursheed Ahmed Junejo","party":"PPP","votes":97051},{"candidate":"Allah Bux Unar","party":"GDA","votes":69111}],"id":201,"xGrid":11,"yGrid":24},{"desc":"NA 202 Kamber Shahdadkot General Election 2018 Result","voterTurnout":42.73,"totalVotes":127881,"result":[{"candidate":"Aftab Shahban Mirani","party":"PPP","votes":72159},{"candidate":"Nasir Mahmood","party":"MMA","votes":36046}],"id":202,"xGrid":10,"yGrid":23},{"desc":"NA 203 Kamber Shahdadkot General Election 2018 Result","voterTurnout":35.93,"totalVotes":105327,"result":[{"candidate":"Mir Amer Ali Khan Magsi","party":"PPP","votes":80026},{"candidate":"Sakhawat Ali","party":"PTI","votes":12982}],"id":203,"xGrid":10,"yGrid":24},{"desc":"NA 204 Ghotki General Election 2018 Result","voterTurnout":58.37,"totalVotes":204069,"result":[{"candidate":"Khalid Ahmed Khan Lund","party":"PPP","votes":99878},{"candidate":"Abdul Haque alias Mian Mitha","party":"Ind","votes":91739}],"id":204,"xGrid":15,"yGrid":22},{"desc":"NA 205 Ghotki General Election 2018 Result","voterTurnout":50.37,"totalVotes":157632,"result":[{"candidate":"Ali Muhammad Khan Mahar","party":"Ind","votes":71943},{"candidate":"Ahsanullah","party":"PPP","votes":41843}],"id":205,"xGrid":14,"yGrid":23},{"desc":"NA 206 Sukkur General Election 2018 Result","voterTurnout":58.14,"totalVotes":162784,"result":[{"candidate":"Syed Khursheed Ahmed Shah","party":"PPP","votes":84726},{"candidate":"Syed Tahir Hussain Shah","party":"PTI","votes":58805}],"id":206,"xGrid":14,"yGrid":24},{"desc":"NA 207 Sukkur General Election 2018 Result","voterTurnout":46.47,"totalVotes":166622,"result":[{"candidate":"NAUMAN ISLAM SHAIKH","party":"PPP","votes":69379},{"candidate":"MUBEEN AHMED","party":"PTI","votes":60089}],"id":207,"xGrid":13,"yGrid":23},{"desc":"NA 208 Khairpur General Election 2018 Result","voterTurnout":50.87,"totalVotes":172473,"result":[{"candidate":"Nafisa Shah","party":"PPP","votes":107847},{"candidate":"Syed Ghous Ali Shah","party":"GDA","votes":57477}],"id":208,"xGrid":13,"yGrid":24},{"desc":"NA 209 Khairpur General Election 2018 Result","voterTurnout":55.94,"totalVotes":177514,"result":[{"candidate":"Pir Syed Fazal Ali Shah Jillani","party":"PPP","votes":95921},{"candidate":"Pir Sadruddin Shah","party":"GDA","votes":76046}],"id":209,"xGrid":14,"yGrid":26},{"desc":"NA 210 Khairpur General Election 2018 Result","voterTurnout":50.21,"totalVotes":182441,"result":[{"candidate":"Syed Javed Ali Shah Jillani","party":"PPP","votes":90718},{"candidate":"Syed Kazim Ali Shah","party":"GDA","votes":78525}],"id":210,"xGrid":12,"yGrid":24},{"desc":"NA 211 Naushahro Feroze General Election 2018 Result","voterTurnout":55.49,"totalVotes":206810,"result":[{"candidate":"Syed Abrar Ali Shah","party":"PPP","votes":110914},{"candidate":"Allalahando Shah Alias Zafar Ali Shah","party":"GDA","votes":80485}],"id":211,"xGrid":12,"yGrid":25},{"desc":"NA 212 Naushahro Feroze General Election 2018 Result","voterTurnout":54.68,"totalVotes":194091,"result":[{"candidate":"Zulfiqar Ali Behan","party":"PPP","votes":90266},{"candidate":"Ghulam Murtaza Khan Jatoi","party":"GDA","votes":84361}],"id":212,"xGrid":11,"yGrid":26},{"desc":"NA 213 Shaheed Benazirabad General Election 2018 Result","voterTurnout":46.86,"totalVotes":188009,"result":[{"candidate":"Asif Ali Zardari","party":"PPP","votes":101362},{"candidate":"Sardar Sher Muhammad Rind Baloch","party":"GDA","votes":54344}],"id":213,"xGrid":12,"yGrid":26},{"desc":"NA 214 Shaheed Benazirabad General Election 2018 Result","voterTurnout":55.79,"totalVotes":187993,"result":[{"candidate":"Syed Ghulam Mustafa Shah","party":"PPP","votes":110902},{"candidate":"Syed Zain Ul Abdin","party":"SUP","votes":54676}],"id":214,"xGrid":11,"yGrid":27},{"desc":"NA 215 Sanghar General Election 2018 Result","voterTurnout":54.86,"totalVotes":164479,"result":[{"candidate":"Naveed Dero","party":"PPP","votes":77812},{"candidate":"HAJI KHUDA BAKSH","party":"GDA","votes":77227}],"id":215,"xGrid":13,"yGrid":27},{"desc":"NA 216 Sanghar General Election 2018 Result","voterTurnout":57.62,"totalVotes":158571,"result":[{"candidate":"Shazia Jant Marri","party":"PPP","votes":80752},{"candidate":"Kishin Chand Parwani","party":"GDA","votes":70436}],"id":216,"xGrid":14,"yGrid":28},{"desc":"NA 217 Sanghar General Election 2018 Result","voterTurnout":47.59,"totalVotes":157968,"result":[{"candidate":"Roshanuddin Junejo","party":"PPP","votes":102361},{"candidate":"Mehar Ali Alias Mahi Khan","party":"GDA","votes":43757}],"id":217,"xGrid":12,"yGrid":28},{"desc":"NA 218 Mirpurkhas General Election 2018 Result","voterTurnout":50.63,"totalVotes":170739,"result":[{"candidate":"Ali Nawaz Shah","party":"Ind","votes":75795},{"candidate":"Pir Hassan Ali Shah","party":"PPP","votes":67552}],"id":218,"xGrid":14,"yGrid":29},{"desc":"NA 219 Mirpurkhas General Election 2018 Result","voterTurnout":53.39,"totalVotes":175605,"result":[{"candidate":"Mir Munwar Ali Talpur","party":"PPP","votes":105823},{"candidate":"Arbab Ghulam Rahim","party":"GDA","votes":51145}],"id":219,"xGrid":14,"yGrid":30},{"desc":"NA 220 Umerkot General Election 2018 Result","voterTurnout":61.96,"totalVotes":274686,"result":[{"candidate":"Nawab Muhammad Yousuf Talpur","party":"PPP","votes":162979},{"candidate":"Makhdoom Shah Mahmood Hussain Qureshi","party":"PTI","votes":104267}],"id":220,"xGrid":15,"yGrid":29},{"desc":"NA 221 Tharparkar General Election 2018 Result","voterTurnout":68.68,"totalVotes":157186,"result":[{"candidate":"Pir Noor Muhammad Shah Jeelani","party":"PPP","votes":79098},{"candidate":"Makhdoom Shah Mahmood Hussain Qureshi","party":"PTI","votes":72127}],"id":221,"xGrid":17,"yGrid":30},{"desc":"NA 222 Tharparkar General Election 2018 Result","voterTurnout":70.91,"totalVotes":222577,"result":[{"candidate":"Mahesh Kumar Malani","party":"PPP","votes":106630},{"candidate":"Arbab Zakaullah","party":"GDA","votes":87251}],"id":222,"xGrid":15,"yGrid":31},{"desc":"NA 223 Matiari General Election 2018 Result","voterTurnout":54.06,"totalVotes":179259,"result":[{"candidate":"Makhdoom Jameel Uz Zaman","party":"PPP","votes":109960},{"candidate":"Makhdoom Fazal Hussain Qureshi","party":"GDA","votes":50366}],"id":223,"xGrid":12,"yGrid":27},{"desc":"NA 224 Tando Allahyar General Election 2018 Result","voterTurnout":54.05,"totalVotes":189523,"result":[{"candidate":"Zulfiqar Bachani","party":"PPP","votes":97147},{"candidate":"Mohammad Mohsin","party":"GDA","votes":70914}],"id":224,"xGrid":13,"yGrid":29},{"desc":"NA 225 Hyderabad General Election 2018 Result","voterTurnout":48.1,"totalVotes":140421,"result":[{"candidate":"Syed Hussain Tariq","party":"PPP","votes":81983},{"candidate":"Khawand Bux Ghulam Muhammad","party":"PTI","votes":50968}],"id":225,"xGrid":13,"yGrid":28},{"desc":"NA 226 Hyderabad General Election 2018 Result","voterTurnout":39.59,"totalVotes":145709,"result":[{"candidate":"Sabir Hussain","party":"MQM","votes":46646},{"candidate":"Jamshed Ali Shaikh","party":"PTI","votes":38672}],"id":226,"xGrid":12,"yGrid":30},{"desc":"NA 227 Hyderabad General Election 2018 Result","voterTurnout":39.89,"totalVotes":145203,"result":[{"candidate":"Salahuddin son of Shaikh Rahimuddin","party":"MQM","votes":52053},{"candidate":"Q Muhammad Hakam","party":"PTI","votes":41513}],"id":227,"xGrid":11,"yGrid":29},{"desc":"NA 228 Tando Muhammad Khan General Election 2018 Result","voterTurnout":53.51,"totalVotes":140076,"result":[{"candidate":"Syed Naveed Qamar","party":"PPP","votes":76067},{"candidate":"Mir Ali Nawaz Talpur","party":"GDA","votes":45159}],"id":228,"xGrid":12,"yGrid":29},{"desc":"NA 229 Badin General Election 2018 Result","voterTurnout":52.96,"totalVotes":195265,"result":[{"candidate":"Mir Ghulam Ali Talpur","party":"PPP","votes":96977},{"candidate":"Muhammad Hasam Mirza","party":"GDA","votes":81828}],"id":229,"xGrid":13,"yGrid":30},{"desc":"NA 230 Badin General Election 2018 Result","voterTurnout":58.17,"totalVotes":206056,"result":[{"candidate":"Fehmida Mirza","party":"GDA","votes":96875},{"candidate":"Haji Rasool Bux Chandio","party":"PPP","votes":96015}],"id":230,"xGrid":13,"yGrid":31},{"desc":"NA 231 Sujawal General Election 2018 Result","voterTurnout":45.89,"totalVotes":152824,"result":[{"candidate":"Syed Ayaz Ali Shah Serazi","party":"PPP","votes":129980},{"candidate":"Molvi Muhammad Saleh Alhadad","party":"MMA","votes":11177}],"id":231,"xGrid":11,"yGrid":32},{"desc":"NA 232 Thatta General Election 2018 Result","voterTurnout":43.41,"totalVotes":182484,"result":[{"candidate":"Shams un Nisa","party":"PPP","votes":152691},{"candidate":"Arslan Bux Brohi","party":"PTI","votes":18900}],"id":232,"xGrid":10,"yGrid":30},{"desc":"NA 233 Jamshoro General Election 2018 Result","voterTurnout":56.35,"totalVotes":229406,"result":[{"candidate":"SIKANDAR ALI RAHOUPOTO","party":"PPP","votes":133492},{"candidate":"SAYED JALAL MEHMOOD","party":"SUP","votes":81289}],"id":233,"xGrid":11,"yGrid":28},{"desc":"NA 234 Dadu General Election 2018 Result","voterTurnout":50.41,"totalVotes":181763,"result":[{"candidate":"Irfan Ali Leghari","party":"PPP","votes":96038},{"candidate":"Liaquat Ali Jatoi","party":"PTI","votes":82730}],"id":234,"xGrid":10,"yGrid":25},{"desc":"NA 235 Dadu General Election 2018 Result","voterTurnout":49.67,"totalVotes":168393,"result":[{"candidate":"Rafique Ahmed Jamali","party":"PPP","votes":81200},{"candidate":"Karim Ali Jatoi","party":"PTI","votes":63008}],"id":235,"xGrid":10,"yGrid":26},{"desc":"NA 236 Malir General Election 2018 Result","voterTurnout":50.4,"totalVotes":115459,"result":[{"candidate":"JAM ABDUL KARIM BIJAR","party":"PPP","votes":66623},{"candidate":"MASROOR ALI","party":"PTI","votes":26456}],"id":236,"xGrid":9,"yGrid":28},{"desc":"NA 237 Malir General Election 2018 Result","voterTurnout":42.23,"totalVotes":126763,"result":[{"candidate":"Jamil Ahmed Khan","party":"PTI","votes":33280},{"candidate":"Abdul Hakeem Baloch","party":"PPP","votes":31907}],"id":237,"xGrid":9,"yGrid":32},{"desc":"NA 238 Malir General Election 2018 Result","voterTurnout":44,"totalVotes":100408,"result":[{"candidate":"Syed Rafiullah","party":"PPP","votes":29598},{"candidate":"Hafiz Aurangzaib","party":"PRP","votes":19463}],"id":238,"xGrid":11,"yGrid":30},{"desc":"NA 239 Korangi Karachi General Election 2018 Result","voterTurnout":42.41,"totalVotes":220937,"result":[{"candidate":"MUHAMMAD AKRAM","party":"PTI","votes":69147},{"candidate":"SOHAIL MANSOOR KHAWAJA","party":"MQM","votes":68811}],"id":239,"xGrid":10,"yGrid":29},{"desc":"NA 240 Korangi Karachi General Election 2018 Result","voterTurnout":37.38,"totalVotes":174958,"result":[{"candidate":"IQBAL MUHAMMAD ALI KHAN","party":"MQM","votes":61165},{"candidate":"MUHAMMAD ASIF","party":"TLP","votes":30535}],"id":240,"xGrid":7,"yGrid":32},{"desc":"NA 241 Korangi Karachi General Election 2018 Result","voterTurnout":36.28,"totalVotes":111812,"result":[{"candidate":"Faheem Khan","party":"PTI","votes":26706},{"candidate":"Muhammad Moin Aamer Pirzada","party":"MQM","votes":23873}],"id":241,"xGrid":9,"yGrid":30},{"desc":"NA 242 Karachi East General Election 2018 Result","voterTurnout":38.56,"totalVotes":68849,"result":[{"candidate":"Saif Ur Rehman","party":"PTI","votes":27333},{"candidate":"Muhammad Iqbal","party":"PPP","votes":11823}],"id":242,"xGrid":10,"yGrid":31},{"desc":"NA 243 Karachi East General Election 2018 Result","voterTurnout":41.14,"totalVotes":163018,"result":[{"candidate":"Imran Ahmed Khan Niazi","party":"PTI","votes":91358},{"candidate":"Syed Ali Raza","party":"MQM","votes":24082}],"id":243,"xGrid":8,"yGrid":30},{"desc":"NA 244 Karachi East General Election 2018 Result","voterTurnout":41.91,"totalVotes":167995,"result":[{"candidate":"Syed Ali Haider Zaidi","party":"PTI","votes":69475},{"candidate":"Miftah Ismail Ahmed","party":"PML-N","votes":31247}],"id":244,"xGrid":9,"yGrid":29},{"desc":"NA 245 Karachi East General Election 2018 Result","voterTurnout":37.49,"totalVotes":163439,"result":[{"candidate":"Aamir Hussain","party":"PTI","votes":56615},{"candidate":"Muhammad Farooq Sattar","party":"MQM","votes":35247}],"id":245,"xGrid":8,"yGrid":32},{"desc":"NA 246 Karachi South General Election 2018 Result","voterTurnout":38.49,"totalVotes":203109,"result":[{"candidate":"Abdul Shakoor Shad","party":"PTI","votes":52750},{"candidate":"Ahmed Bakhsh","party":"TLP","votes":42345}],"id":246,"xGrid":8,"yGrid":29},{"desc":"NA 247 Karachi South General Election 2018 Result","voterTurnout":40.27,"totalVotes":216446,"result":[{"candidate":"ARIF UR REHMAN ALVI","party":"PTI","votes":91020},{"candidate":"SYED ZAMAN ALI JAFRI","party":"TLP","votes":24680}],"id":247,"xGrid":11,"yGrid":31},{"desc":"NA 248 Karachi West General Election 2018 Result","voterTurnout":41.11,"totalVotes":121592,"result":[{"candidate":"Abdul Qadir Patel","party":"PPP","votes":35124},{"candidate":"Sardar Aziz","party":"PTI","votes":34101}],"id":248,"xGrid":8,"yGrid":31},{"desc":"NA 249 Karachi West General Election 2018 Result","voterTurnout":39.58,"totalVotes":128501,"result":[{"candidate":"Muhammad Faisal Vawda","party":"PTI","votes":35344},{"candidate":"Mian Muhammad Shehbaz Sharif","party":"PML-N","votes":34626}],"id":249,"xGrid":7,"yGrid":29},{"desc":"NA 250 Karachi West General Election 2018 Result","voterTurnout":37.4,"totalVotes":146717,"result":[{"candidate":"Attaullah","party":"PTI","votes":36049},{"candidate":"Fayyaz Kaim Khani","party":"MQM","votes":29086}],"id":250,"xGrid":9,"yGrid":33},{"desc":"NA 251 Karachi West General Election 2018 Result","voterTurnout":43.81,"totalVotes":174404,"result":[{"candidate":"SYED AMIN UL HAQUE","party":"MQM","votes":56888},{"candidate":"MOHAMMAD ASLAM","party":"PTI","votes":33462}],"id":251,"xGrid":7,"yGrid":30},{"desc":"NA 252 Karachi West General Election 2018 Result","voterTurnout":39.61,"totalVotes":84542,"result":[{"candidate":"Aftab Jehangir","party":"PTI","votes":21065},{"candidate":"Abdul Qadir Khanzada","party":"MQM","votes":17858}],"id":252,"xGrid":10,"yGrid":28},{"desc":"NA 253 Karachi Central General Election 2018 Result","voterTurnout":38.12,"totalVotes":152046,"result":[{"candidate":"Usama Qadri","party":"MQM","votes":52426},{"candidate":"Muhammmad Ashraf Jabbar","party":"PTI","votes":39145}],"id":253,"xGrid":9,"yGrid":31},{"desc":"NA 254 Karachi Central General Election 2018 Result","voterTurnout":39.2,"totalVotes":196063,"result":[{"candidate":"Muhammad Aslam Khan","party":"PTI","votes":75702},{"candidate":"Sheikh Salahud din","party":"MQM","votes":48813}],"id":254,"xGrid":7,"yGrid":28},{"desc":"NA 255 Karachi Central General Election 2018 Result","voterTurnout":37.91,"totalVotes":172253,"result":[{"candidate":"KHALID MAQBOOL SIDDIQUI","party":"MQM","votes":59807},{"candidate":"MEHMOOD BAQI MOULVI","party":"PTI","votes":50352}],"id":255,"xGrid":10,"yGrid":32},{"desc":"NA 256 Karachi Central General Election 2018 Result","voterTurnout":41.25,"totalVotes":198866,"result":[{"candidate":"Muhammad Najeeb Haroon","party":"PTI","votes":89850},{"candidate":"Amir Wali uddin Chishti","party":"MQM","votes":45575}],"id":256,"xGrid":7,"yGrid":31},{"desc":"NA 257 Killa Saifullah Zhob Sherani General Election 2018 Result","voterTurnout":46.86,"totalVotes":117972,"result":[{"candidate":"Abdul Wasay","party":"MMA","votes":43851},{"candidate":"Allah Noor","party":"PKMAP","votes":22446}],"id":257,"xGrid":13,"yGrid":14},{"desc":"NA 258 Loralai Musa Khel Ziarat Dukki Harnai General Election 2018 Result","voterTurnout":52.68,"totalVotes":158673,"result":[{"candidate":"Muhammad Israr Tareen","party":"BAP","votes":42938},{"candidate":"Amir Zaman","party":"MMA","votes":38457}],"id":258,"xGrid":13,"yGrid":16},{"desc":"NA 259 Dera Bugti Kohlu Barkhan Sibi Lehri General Election 2018 Result","voterTurnout":44.79,"totalVotes":147641,"result":[{"candidate":"Nawabzada Shahzain Bugtti","party":"JWP","votes":22787},{"candidate":"Mir Tariq Mehmood Kethran","party":"Ind","votes":21213}],"id":259,"xGrid":13,"yGrid":19},{"desc":"NA 260 Nasirabad General Election 2018 Result","voterTurnout":39.14,"totalVotes":130510,"result":[{"candidate":"Khalid Hussain Magsi","party":"BAP","votes":53330},{"candidate":"Sardar Yar Muhammad Rind","party":"PTI","votes":40188}],"id":260,"xGrid":10,"yGrid":20},{"desc":"NA 261 Jafarabad Sohbatpur General Election 2018 Result","voterTurnout":38.89,"totalVotes":110593,"result":[{"candidate":"Mir Khan Muhammad Jamali","party":"PTI","votes":45222},{"candidate":"Mir Changez Khan Jamali","party":"PPP","votes":27563}],"id":261,"xGrid":11,"yGrid":22},{"desc":"NA 262 Pishin General Election 2018 Result","voterTurnout":47.87,"totalVotes":117336,"result":[{"candidate":"Kamal Uddin","party":"MMA","votes":50258},{"candidate":"Muhammad Essa Khan","party":"PKMAP","votes":28344}],"id":262,"xGrid":9,"yGrid":15},{"desc":"NA 263 Pishin General Election 2018 Result","voterTurnout":41.03,"totalVotes":92032,"result":[{"candidate":"Salahuddin","party":"MMA","votes":37971},{"candidate":"Asghar Khan","party":"ANP","votes":21417}],"id":263,"xGrid":8,"yGrid":15},{"desc":"NA 264 Killa Abdullah General Election 2018 Result","voterTurnout":39.77,"totalVotes":67291,"result":[{"candidate":"Asmatullah","party":"MMA","votes":14887},{"candidate":"Malik Abdul Wali Kakar","party":"BNP","votes":10071}],"id":264,"xGrid":8,"yGrid":17},{"desc":"NA 265 Quetta General Election 2018 Result","voterTurnout":36.79,"totalVotes":114731,"result":[{"candidate":"Qasim Khan Soori","party":"PTI","votes":25973},{"candidate":"Mir Lashkari Raisani","party":"BNP","votes":20389}],"id":265,"xGrid":8,"yGrid":16},{"desc":"NA 266 Quetta General Election 2018 Result","voterTurnout":34.3,"totalVotes":61541,"result":[{"candidate":"Agha Hassan Baloch","party":"BNP","votes":20034},{"candidate":"Hafiz hussain ahmed","party":"MMA","votes":11057}],"id":266,"xGrid":9,"yGrid":17},{"desc":"NA 267 Mastung Kalat General Election 2018 Result","voterTurnout":48.66,"totalVotes":110840,"result":[{"candidate":"Syed Mehmood Shah","party":"MMA","votes":26645},{"candidate":"Manzoor Ahmed Baloch","party":"BNP","votes":25738}],"id":267,"xGrid":8,"yGrid":19},{"desc":"NA 268 Chaghai Nushki General Election 2018 Result","voterTurnout":1.76,"totalVotes":3973,"result":[{"candidate":"Muhammad Usman Badini","party":"MMA","votes":1210},{"candidate":"Muhammad Hashim","party":"BNP","votes":1137}],"id":268,"xGrid":2,"yGrid":20},{"desc":"NA 269 Khuzdar General Election 2018 Result","voterTurnout":54.32,"totalVotes":113650,"result":[{"candidate":"Muhammad Akhtar Mengal","party":"BNP","votes":52875},{"candidate":"Mohammad Khalid Bizenjo","party":"BAP","votes":19720}],"id":269,"xGrid":8,"yGrid":24},{"desc":"NA 270 Panjgur Washuk Kharan Awaran General Election 2018 Result","voterTurnout":40.48,"totalVotes":87644,"result":[{"candidate":"Ehsanullah Reki","party":"BAP","votes":18568},{"candidate":"Mohammad Hanif","party":"BNP-A","votes":16040}],"id":270,"xGrid":3,"yGrid":25},{"desc":"NA 271 Kech General Election 2018 Result","voterTurnout":39.51,"totalVotes":85305,"result":[{"candidate":"Zubaida Jalal","party":"BAP","votes":32866},{"candidate":"Syed Ahsan Shah","party":"BNP-A","votes":20583}],"id":271,"xGrid":0,"yGrid":28},{"desc":"NA 272 Lasbela Gawadar General Election 2018 Result","voterTurnout":56.02,"totalVotes":189427,"result":[{"candidate":"Mohammad Aslam Bhootani","party":"Ind","votes":68804},{"candidate":"Jam Kamal Khan","party":"BAP","votes":63275}],"id":272,"xGrid":4,"yGrid":29}]');

},{}]},["3QC3y","bB7Pu"], "bB7Pu", "parcelRequire7ea9")

//# sourceMappingURL=index.3d214d75.js.map
