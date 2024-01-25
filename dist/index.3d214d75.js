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
var _topojson = require("topojson");
var _districts = require("./geo-data/districts");
const getFeatures = ({ topoJSON, topoObjKey })=>(0, _topojson.feature)(topoJSON, topoJSON.objects[topoObjKey]).features;
const pakDistFeatures = getFeatures({
    topoJSON: (0, _districts.districtsTopo),
    topoObjKey: "pakistan_districts"
});
console.log(pakDistFeatures);

},{"topojson":"2tg3w","./geo-data/districts":"dbdeE"}],"2tg3w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _topojsonClient = require("topojson-client");
parcelHelpers.exportAll(_topojsonClient, exports);
var _topojsonServer = require("topojson-server");
parcelHelpers.exportAll(_topojsonServer, exports);
var _topojsonSimplify = require("topojson-simplify");
parcelHelpers.exportAll(_topojsonSimplify, exports);

},{"topojson-client":"9KNJH","topojson-server":"lC7Pc","topojson-simplify":"iFGUZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9KNJH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bbox", ()=>(0, _bboxDefault.default));
parcelHelpers.export(exports, "feature", ()=>(0, _featureDefault.default));
parcelHelpers.export(exports, "mesh", ()=>(0, _meshDefault.default));
parcelHelpers.export(exports, "meshArcs", ()=>(0, _mesh.meshArcs));
parcelHelpers.export(exports, "merge", ()=>(0, _mergeDefault.default));
parcelHelpers.export(exports, "mergeArcs", ()=>(0, _merge.mergeArcs));
parcelHelpers.export(exports, "neighbors", ()=>(0, _neighborsDefault.default));
parcelHelpers.export(exports, "quantize", ()=>(0, _quantizeDefault.default));
parcelHelpers.export(exports, "transform", ()=>(0, _transformDefault.default));
parcelHelpers.export(exports, "untransform", ()=>(0, _untransformDefault.default));
var _bbox = require("./src/bbox");
var _bboxDefault = parcelHelpers.interopDefault(_bbox);
var _feature = require("./src/feature");
var _featureDefault = parcelHelpers.interopDefault(_feature);
var _mesh = require("./src/mesh");
var _meshDefault = parcelHelpers.interopDefault(_mesh);
var _merge = require("./src/merge");
var _mergeDefault = parcelHelpers.interopDefault(_merge);
var _neighbors = require("./src/neighbors");
var _neighborsDefault = parcelHelpers.interopDefault(_neighbors);
var _quantize = require("./src/quantize");
var _quantizeDefault = parcelHelpers.interopDefault(_quantize);
var _transform = require("./src/transform");
var _transformDefault = parcelHelpers.interopDefault(_transform);
var _untransform = require("./src/untransform");
var _untransformDefault = parcelHelpers.interopDefault(_untransform);

},{"./src/bbox":"uhxVo","./src/feature":"hVcmB","./src/mesh":"7csN8","./src/merge":"gZehY","./src/neighbors":"ggIrQ","./src/quantize":"dZnMF","./src/transform":"hDrZC","./src/untransform":"ioj0t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"uhxVo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology) {
        var t = (0, _transformDefault.default)(topology.transform), key, x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;
        function bboxPoint(p) {
            p = t(p);
            if (p[0] < x0) x0 = p[0];
            if (p[0] > x1) x1 = p[0];
            if (p[1] < y0) y0 = p[1];
            if (p[1] > y1) y1 = p[1];
        }
        function bboxGeometry(o) {
            switch(o.type){
                case "GeometryCollection":
                    o.geometries.forEach(bboxGeometry);
                    break;
                case "Point":
                    bboxPoint(o.coordinates);
                    break;
                case "MultiPoint":
                    o.coordinates.forEach(bboxPoint);
                    break;
            }
        }
        topology.arcs.forEach(function(arc) {
            var i = -1, n = arc.length, p;
            while(++i < n){
                p = t(arc[i], i);
                if (p[0] < x0) x0 = p[0];
                if (p[0] > x1) x1 = p[0];
                if (p[1] < y0) y0 = p[1];
                if (p[1] > y1) y1 = p[1];
            }
        });
        for(key in topology.objects)bboxGeometry(topology.objects[key]);
        return [
            x0,
            y0,
            x1,
            y1
        ];
    });
var _transform = require("./transform");
var _transformDefault = parcelHelpers.interopDefault(_transform);

},{"./transform":"hDrZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hDrZC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(transform) {
        if (transform == null) return 0, _identityDefault.default;
        var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
        return function(input, i) {
            if (!i) x0 = y0 = 0;
            var j = 2, n = input.length, output = new Array(n);
            output[0] = (x0 += input[0]) * kx + dx;
            output[1] = (y0 += input[1]) * ky + dy;
            while(j < n)output[j] = input[j], ++j;
            return output;
        };
    });
var _identity = require("./identity");
var _identityDefault = parcelHelpers.interopDefault(_identity);

},{"./identity":"2mfyf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2mfyf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return x;
    });

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

},{}],"hVcmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, o) {
        return o.type === "GeometryCollection" ? {
            type: "FeatureCollection",
            features: o.geometries.map(function(o) {
                return feature(topology, o);
            })
        } : feature(topology, o);
    });
parcelHelpers.export(exports, "feature", ()=>feature);
parcelHelpers.export(exports, "object", ()=>object);
var _reverse = require("./reverse");
var _reverseDefault = parcelHelpers.interopDefault(_reverse);
var _transform = require("./transform");
var _transformDefault = parcelHelpers.interopDefault(_transform);
function feature(topology, o) {
    var id = o.id, bbox = o.bbox, properties = o.properties == null ? {} : o.properties, geometry = object(topology, o);
    return id == null && bbox == null ? {
        type: "Feature",
        properties: properties,
        geometry: geometry
    } : bbox == null ? {
        type: "Feature",
        id: id,
        properties: properties,
        geometry: geometry
    } : {
        type: "Feature",
        id: id,
        bbox: bbox,
        properties: properties,
        geometry: geometry
    };
}
function object(topology, o) {
    var transformPoint = (0, _transformDefault.default)(topology.transform), arcs = topology.arcs;
    function arc(i, points) {
        if (points.length) points.pop();
        for(var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k)points.push(transformPoint(a[k], k));
        if (i < 0) (0, _reverseDefault.default)(points, n);
    }
    function point(p) {
        return transformPoint(p);
    }
    function line(arcs) {
        var points = [];
        for(var i = 0, n = arcs.length; i < n; ++i)arc(arcs[i], points);
        if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
        return points;
    }
    function ring(arcs) {
        var points = line(arcs);
        while(points.length < 4)points.push(points[0]); // This may happen if an arc has only two points.
        return points;
    }
    function polygon(arcs) {
        return arcs.map(ring);
    }
    function geometry(o) {
        var type = o.type, coordinates;
        switch(type){
            case "GeometryCollection":
                return {
                    type: type,
                    geometries: o.geometries.map(geometry)
                };
            case "Point":
                coordinates = point(o.coordinates);
                break;
            case "MultiPoint":
                coordinates = o.coordinates.map(point);
                break;
            case "LineString":
                coordinates = line(o.arcs);
                break;
            case "MultiLineString":
                coordinates = o.arcs.map(line);
                break;
            case "Polygon":
                coordinates = polygon(o.arcs);
                break;
            case "MultiPolygon":
                coordinates = o.arcs.map(polygon);
                break;
            default:
                return null;
        }
        return {
            type: type,
            coordinates: coordinates
        };
    }
    return geometry(o);
}

},{"./reverse":"eTq9J","./transform":"hDrZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTq9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, n) {
        var t, j = array.length, i = j - n;
        while(i < --j)t = array[i], array[i++] = array[j], array[j] = t;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7csN8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology) {
        return (0, _feature.object)(topology, meshArcs.apply(this, arguments));
    });
parcelHelpers.export(exports, "meshArcs", ()=>meshArcs);
var _feature = require("./feature");
var _stitch = require("./stitch");
var _stitchDefault = parcelHelpers.interopDefault(_stitch);
function meshArcs(topology, object, filter) {
    var arcs, i, n;
    if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
    else for(i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i)arcs[i] = i;
    return {
        type: "MultiLineString",
        arcs: (0, _stitchDefault.default)(topology, arcs)
    };
}
function extractArcs(topology, object, filter) {
    var arcs = [], geomsByArc = [], geom;
    function extract0(i) {
        var j = i < 0 ? ~i : i;
        (geomsByArc[j] || (geomsByArc[j] = [])).push({
            i: i,
            g: geom
        });
    }
    function extract1(arcs) {
        arcs.forEach(extract0);
    }
    function extract2(arcs) {
        arcs.forEach(extract1);
    }
    function extract3(arcs) {
        arcs.forEach(extract2);
    }
    function geometry(o) {
        switch(geom = o, o.type){
            case "GeometryCollection":
                o.geometries.forEach(geometry);
                break;
            case "LineString":
                extract1(o.arcs);
                break;
            case "MultiLineString":
            case "Polygon":
                extract2(o.arcs);
                break;
            case "MultiPolygon":
                extract3(o.arcs);
                break;
        }
    }
    geometry(object);
    geomsByArc.forEach(filter == null ? function(geoms) {
        arcs.push(geoms[0].i);
    } : function(geoms) {
        if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i);
    });
    return arcs;
}

},{"./feature":"hVcmB","./stitch":"k5MKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5MKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, arcs) {
        var stitchedArcs = {}, fragmentByStart = {}, fragmentByEnd = {}, fragments = [], emptyIndex = -1;
        // Stitch empty arcs first, since they may be subsumed by other arcs.
        arcs.forEach(function(i, j) {
            var arc = topology.arcs[i < 0 ? ~i : i], t;
            if (arc.length < 3 && !arc[1][0] && !arc[1][1]) t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
        });
        arcs.forEach(function(i) {
            var e = ends(i), start = e[0], end = e[1], f, g;
            if (f = fragmentByEnd[start]) {
                delete fragmentByEnd[f.end];
                f.push(i);
                f.end = end;
                if (g = fragmentByStart[end]) {
                    delete fragmentByStart[g.start];
                    var fg = g === f ? f : f.concat(g);
                    fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
                } else fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
            } else if (f = fragmentByStart[end]) {
                delete fragmentByStart[f.start];
                f.unshift(i);
                f.start = start;
                if (g = fragmentByEnd[start]) {
                    delete fragmentByEnd[g.end];
                    var gf = g === f ? f : g.concat(f);
                    fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
                } else fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
            } else {
                f = [
                    i
                ];
                fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
            }
        });
        function ends(i) {
            var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
            if (topology.transform) p1 = [
                0,
                0
            ], arc.forEach(function(dp) {
                p1[0] += dp[0], p1[1] += dp[1];
            });
            else p1 = arc[arc.length - 1];
            return i < 0 ? [
                p1,
                p0
            ] : [
                p0,
                p1
            ];
        }
        function flush(fragmentByEnd, fragmentByStart) {
            for(var k in fragmentByEnd){
                var f = fragmentByEnd[k];
                delete fragmentByStart[f.start];
                delete f.start;
                delete f.end;
                f.forEach(function(i) {
                    stitchedArcs[i < 0 ? ~i : i] = 1;
                });
                fragments.push(f);
            }
        }
        flush(fragmentByEnd, fragmentByStart);
        flush(fragmentByStart, fragmentByEnd);
        arcs.forEach(function(i) {
            if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([
                i
            ]);
        });
        return fragments;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gZehY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology) {
        return (0, _feature.object)(topology, mergeArcs.apply(this, arguments));
    });
parcelHelpers.export(exports, "mergeArcs", ()=>mergeArcs);
var _feature = require("./feature");
var _stitch = require("./stitch");
var _stitchDefault = parcelHelpers.interopDefault(_stitch);
function planarRingArea(ring) {
    var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
    while(++i < n)a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
    return Math.abs(area); // Note: doubled area!
}
function mergeArcs(topology, objects) {
    var polygonsByArc = {}, polygons = [], groups = [];
    objects.forEach(geometry);
    function geometry(o) {
        switch(o.type){
            case "GeometryCollection":
                o.geometries.forEach(geometry);
                break;
            case "Polygon":
                extract(o.arcs);
                break;
            case "MultiPolygon":
                o.arcs.forEach(extract);
                break;
        }
    }
    function extract(polygon) {
        polygon.forEach(function(ring) {
            ring.forEach(function(arc) {
                (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
            });
        });
        polygons.push(polygon);
    }
    function area(ring) {
        return planarRingArea((0, _feature.object)(topology, {
            type: "Polygon",
            arcs: [
                ring
            ]
        }).coordinates[0]);
    }
    polygons.forEach(function(polygon) {
        if (!polygon._) {
            var group = [], neighbors = [
                polygon
            ];
            polygon._ = 1;
            groups.push(group);
            while(polygon = neighbors.pop()){
                group.push(polygon);
                polygon.forEach(function(ring) {
                    ring.forEach(function(arc) {
                        polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
                            if (!polygon._) {
                                polygon._ = 1;
                                neighbors.push(polygon);
                            }
                        });
                    });
                });
            }
        }
    });
    polygons.forEach(function(polygon) {
        delete polygon._;
    });
    return {
        type: "MultiPolygon",
        arcs: groups.map(function(polygons) {
            var arcs = [], n;
            // Extract the exterior (unique) arcs.
            polygons.forEach(function(polygon) {
                polygon.forEach(function(ring) {
                    ring.forEach(function(arc) {
                        if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) arcs.push(arc);
                    });
                });
            });
            // Stitch the arcs into one or more rings.
            arcs = (0, _stitchDefault.default)(topology, arcs);
            // If more than one ring is returned,
            // at most one of these rings can be the exterior;
            // choose the one with the greatest absolute area.
            if ((n = arcs.length) > 1) {
                for(var i = 1, k = area(arcs[0]), ki, t; i < n; ++i)if ((ki = area(arcs[i])) > k) t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
            }
            return arcs;
        })
    };
}

},{"./feature":"hVcmB","./stitch":"k5MKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggIrQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(objects) {
        var indexesByArc = {}, neighbors = objects.map(function() {
            return [];
        });
        function line(arcs, i) {
            arcs.forEach(function(a) {
                if (a < 0) a = ~a;
                var o = indexesByArc[a];
                if (o) o.push(i);
                else indexesByArc[a] = [
                    i
                ];
            });
        }
        function polygon(arcs, i) {
            arcs.forEach(function(arc) {
                line(arc, i);
            });
        }
        function geometry(o, i) {
            if (o.type === "GeometryCollection") o.geometries.forEach(function(o) {
                geometry(o, i);
            });
            else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
        }
        var geometryType = {
            LineString: line,
            MultiLineString: polygon,
            Polygon: polygon,
            MultiPolygon: function(arcs, i) {
                arcs.forEach(function(arc) {
                    polygon(arc, i);
                });
            }
        };
        objects.forEach(geometry);
        for(var i in indexesByArc){
            for(var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j)for(var k = j + 1; k < m; ++k){
                var ij = indexes[j], ik = indexes[k], n;
                if ((n = neighbors[ij])[i = (0, _bisectDefault.default)(n, ik)] !== ik) n.splice(i, 0, ik);
                if ((n = neighbors[ik])[i = (0, _bisectDefault.default)(n, ij)] !== ij) n.splice(i, 0, ij);
            }
        }
        return neighbors;
    });
var _bisect = require("./bisect");
var _bisectDefault = parcelHelpers.interopDefault(_bisect);

},{"./bisect":"dgF2n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dgF2n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, x) {
        var lo = 0, hi = a.length;
        while(lo < hi){
            var mid = lo + hi >>> 1;
            if (a[mid] < x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZnMF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, transform) {
        if (topology.transform) throw new Error("already quantized");
        if (!transform || !transform.scale) {
            if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be \u22652");
            box = topology.bbox || (0, _bboxDefault.default)(topology);
            var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
            transform = {
                scale: [
                    x1 - x0 ? (x1 - x0) / (n - 1) : 1,
                    y1 - y0 ? (y1 - y0) / (n - 1) : 1
                ],
                translate: [
                    x0,
                    y0
                ]
            };
        } else box = topology.bbox;
        var t = (0, _untransformDefault.default)(transform), box, key, inputs = topology.objects, outputs = {};
        function quantizePoint(point) {
            return t(point);
        }
        function quantizeGeometry(input) {
            var output;
            switch(input.type){
                case "GeometryCollection":
                    output = {
                        type: "GeometryCollection",
                        geometries: input.geometries.map(quantizeGeometry)
                    };
                    break;
                case "Point":
                    output = {
                        type: "Point",
                        coordinates: quantizePoint(input.coordinates)
                    };
                    break;
                case "MultiPoint":
                    output = {
                        type: "MultiPoint",
                        coordinates: input.coordinates.map(quantizePoint)
                    };
                    break;
                default:
                    return input;
            }
            if (input.id != null) output.id = input.id;
            if (input.bbox != null) output.bbox = input.bbox;
            if (input.properties != null) output.properties = input.properties;
            return output;
        }
        function quantizeArc(input) {
            var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
            output[0] = t(input[0], 0);
            while(++i < n)if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
            if (j === 1) output[j++] = [
                0,
                0
            ]; // an arc must have at least two points
            output.length = j;
            return output;
        }
        for(key in inputs)outputs[key] = quantizeGeometry(inputs[key]);
        return {
            type: "Topology",
            bbox: box,
            transform: transform,
            objects: outputs,
            arcs: topology.arcs.map(quantizeArc)
        };
    });
var _bbox = require("./bbox");
var _bboxDefault = parcelHelpers.interopDefault(_bbox);
var _untransform = require("./untransform");
var _untransformDefault = parcelHelpers.interopDefault(_untransform);

},{"./bbox":"uhxVo","./untransform":"ioj0t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioj0t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(transform) {
        if (transform == null) return 0, _identityDefault.default;
        var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
        return function(input, i) {
            if (!i) x0 = y0 = 0;
            var j = 2, n = input.length, output = new Array(n), x1 = Math.round((input[0] - dx) / kx), y1 = Math.round((input[1] - dy) / ky);
            output[0] = x1 - x0, x0 = x1;
            output[1] = y1 - y0, y0 = y1;
            while(j < n)output[j] = input[j], ++j;
            return output;
        };
    });
var _identity = require("./identity");
var _identityDefault = parcelHelpers.interopDefault(_identity);

},{"./identity":"2mfyf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lC7Pc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "topology", ()=>(0, _topologyDefault.default));
var _topology = require("./src/topology");
var _topologyDefault = parcelHelpers.interopDefault(_topology);

},{"./src/topology":"btGjR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"btGjR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Constructs the TopoJSON Topology for the specified hash of features.
// Each object in the specified hash must be a GeoJSON object,
// meaning FeatureCollection, a Feature or a geometry object.
parcelHelpers.export(exports, "default", ()=>function(objects, quantization) {
        var bbox = (0, _boundsDefault.default)(objects = (0, _geometryDefault.default)(objects)), transform = quantization > 0 && bbox && (0, _prequantizeDefault.default)(objects, bbox, quantization), topology = (0, _dedupDefault.default)((0, _cutDefault.default)((0, _extractDefault.default)(objects))), coordinates = topology.coordinates, indexByArc = (0, _hashmapDefault.default)(topology.arcs.length * 1.4, hashArc, equalArc);
        objects = topology.objects; // for garbage collection
        topology.bbox = bbox;
        topology.arcs = topology.arcs.map(function(arc, i) {
            indexByArc.set(arc, i);
            return coordinates.slice(arc[0], arc[1] + 1);
        });
        delete topology.coordinates;
        coordinates = null;
        function indexGeometry(geometry) {
            if (geometry && indexGeometryType.hasOwnProperty(geometry.type)) indexGeometryType[geometry.type](geometry);
        }
        var indexGeometryType = {
            GeometryCollection: function(o) {
                o.geometries.forEach(indexGeometry);
            },
            LineString: function(o) {
                o.arcs = indexArcs(o.arcs);
            },
            MultiLineString: function(o) {
                o.arcs = o.arcs.map(indexArcs);
            },
            Polygon: function(o) {
                o.arcs = o.arcs.map(indexArcs);
            },
            MultiPolygon: function(o) {
                o.arcs = o.arcs.map(indexMultiArcs);
            }
        };
        function indexArcs(arc) {
            var indexes = [];
            do {
                var index = indexByArc.get(arc);
                indexes.push(arc[0] < arc[1] ? index : ~index);
            }while (arc = arc.next);
            return indexes;
        }
        function indexMultiArcs(arcs) {
            return arcs.map(indexArcs);
        }
        for(var key in objects)indexGeometry(objects[key]);
        if (transform) {
            topology.transform = transform;
            topology.arcs = (0, _deltaDefault.default)(topology.arcs);
        }
        return topology;
    });
var _bounds = require("./bounds");
var _boundsDefault = parcelHelpers.interopDefault(_bounds);
var _cut = require("./cut");
var _cutDefault = parcelHelpers.interopDefault(_cut);
var _dedup = require("./dedup");
var _dedupDefault = parcelHelpers.interopDefault(_dedup);
var _delta = require("./delta");
var _deltaDefault = parcelHelpers.interopDefault(_delta);
var _extract = require("./extract");
var _extractDefault = parcelHelpers.interopDefault(_extract);
var _geometry = require("./geometry");
var _geometryDefault = parcelHelpers.interopDefault(_geometry);
var _hashmap = require("./hash/hashmap");
var _hashmapDefault = parcelHelpers.interopDefault(_hashmap);
var _prequantize = require("./prequantize");
var _prequantizeDefault = parcelHelpers.interopDefault(_prequantize);
function hashArc(arc) {
    var i = arc[0], j = arc[1], t;
    if (j < i) t = i, i = j, j = t;
    return i + 31 * j;
}
function equalArc(arcA, arcB) {
    var ia = arcA[0], ja = arcA[1], ib = arcB[0], jb = arcB[1], t;
    if (ja < ia) t = ia, ia = ja, ja = t;
    if (jb < ib) t = ib, ib = jb, jb = t;
    return ia === ib && ja === jb;
}

},{"./bounds":"02Obw","./cut":"bkU9W","./dedup":"03MaD","./delta":"bF27A","./extract":"56jlO","./geometry":"gLIDd","./hash/hashmap":"jrDnt","./prequantize":"g3rXQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"02Obw":[function(require,module,exports) {
// Computes the bounding box of the specified hash of GeoJSON objects.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(objects) {
        var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        function boundGeometry(geometry) {
            if (geometry != null && boundGeometryType.hasOwnProperty(geometry.type)) boundGeometryType[geometry.type](geometry);
        }
        var boundGeometryType = {
            GeometryCollection: function(o) {
                o.geometries.forEach(boundGeometry);
            },
            Point: function(o) {
                boundPoint(o.coordinates);
            },
            MultiPoint: function(o) {
                o.coordinates.forEach(boundPoint);
            },
            LineString: function(o) {
                boundLine(o.arcs);
            },
            MultiLineString: function(o) {
                o.arcs.forEach(boundLine);
            },
            Polygon: function(o) {
                o.arcs.forEach(boundLine);
            },
            MultiPolygon: function(o) {
                o.arcs.forEach(boundMultiLine);
            }
        };
        function boundPoint(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            if (x < x0) x0 = x;
            if (x > x1) x1 = x;
            if (y < y0) y0 = y;
            if (y > y1) y1 = y;
        }
        function boundLine(coordinates) {
            coordinates.forEach(boundPoint);
        }
        function boundMultiLine(coordinates) {
            coordinates.forEach(boundLine);
        }
        for(var key in objects)boundGeometry(objects[key]);
        return x1 >= x0 && y1 >= y0 ? [
            x0,
            y0,
            x1,
            y1
        ] : undefined;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkU9W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Given an extracted (pre-)topology, cuts (or rotates) arcs so that all shared
// point sequences are identified. The topology can then be subsequently deduped
// to remove exact duplicate arcs.
parcelHelpers.export(exports, "default", ()=>function(topology) {
        var junctions = (0, _joinDefault.default)(topology), coordinates = topology.coordinates, lines = topology.lines, rings = topology.rings, next, i, n;
        for(i = 0, n = lines.length; i < n; ++i){
            var line = lines[i], lineMid = line[0], lineEnd = line[1];
            while(++lineMid < lineEnd)if (junctions.has(coordinates[lineMid])) {
                next = {
                    0: lineMid,
                    1: line[1]
                };
                line[1] = lineMid;
                line = line.next = next;
            }
        }
        for(i = 0, n = rings.length; i < n; ++i){
            var ring = rings[i], ringStart = ring[0], ringMid = ringStart, ringEnd = ring[1], ringFixed = junctions.has(coordinates[ringStart]);
            while(++ringMid < ringEnd)if (junctions.has(coordinates[ringMid])) {
                if (ringFixed) {
                    next = {
                        0: ringMid,
                        1: ring[1]
                    };
                    ring[1] = ringMid;
                    ring = ring.next = next;
                } else {
                    rotateArray(coordinates, ringStart, ringEnd, ringEnd - ringMid);
                    coordinates[ringEnd] = coordinates[ringStart];
                    ringFixed = true;
                    ringMid = ringStart; // restart; we may have skipped junctions
                }
            }
        }
        return topology;
    });
var _join = require("./join");
var _joinDefault = parcelHelpers.interopDefault(_join);
function rotateArray(array, start, end, offset) {
    reverse(array, start, end);
    reverse(array, start, start + offset);
    reverse(array, start + offset, end);
}
function reverse(array, start, end) {
    for(var mid = start + (end-- - start >> 1), t; start < mid; ++start, --end)t = array[start], array[start] = array[end], array[end] = t;
}

},{"./join":"6rcOZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6rcOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Given an extracted (pre-)topology, identifies all of the junctions. These are
// the points at which arcs (lines or rings) will need to be cut so that each
// arc is represented uniquely.
//
// A junction is a point where at least one arc deviates from another arc going
// through the same point. For example, consider the point B. If there is a arc
// through ABC and another arc through CBA, then B is not a junction because in
// both cases the adjacent point pairs are {A,C}. However, if there is an
// additional arc ABD, then {A,D} != {A,C}, and thus B becomes a junction.
//
// For a closed ring ABCA, the first point A’s adjacent points are the second
// and last point {B,C}. For a line, the first and last point are always
// considered junctions, even if the line is closed; this ensures that a closed
// line is never rotated.
parcelHelpers.export(exports, "default", ()=>function(topology) {
        var coordinates = topology.coordinates, lines = topology.lines, rings = topology.rings, indexes = index(), visitedByIndex = new Int32Array(coordinates.length), leftByIndex = new Int32Array(coordinates.length), rightByIndex = new Int32Array(coordinates.length), junctionByIndex = new Int8Array(coordinates.length), junctionCount = 0, i, n, previousIndex, currentIndex, nextIndex;
        for(i = 0, n = coordinates.length; i < n; ++i)visitedByIndex[i] = leftByIndex[i] = rightByIndex[i] = -1;
        for(i = 0, n = lines.length; i < n; ++i){
            var line = lines[i], lineStart = line[0], lineEnd = line[1];
            currentIndex = indexes[lineStart];
            nextIndex = indexes[++lineStart];
            ++junctionCount, junctionByIndex[currentIndex] = 1; // start
            while(++lineStart <= lineEnd)sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[lineStart]);
            ++junctionCount, junctionByIndex[nextIndex] = 1; // end
        }
        for(i = 0, n = coordinates.length; i < n; ++i)visitedByIndex[i] = -1;
        for(i = 0, n = rings.length; i < n; ++i){
            var ring = rings[i], ringStart = ring[0] + 1, ringEnd = ring[1];
            previousIndex = indexes[ringEnd - 1];
            currentIndex = indexes[ringStart - 1];
            nextIndex = indexes[ringStart];
            sequence(i, previousIndex, currentIndex, nextIndex);
            while(++ringStart <= ringEnd)sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[ringStart]);
        }
        function sequence(i, previousIndex, currentIndex, nextIndex) {
            if (visitedByIndex[currentIndex] === i) return; // ignore self-intersection
            visitedByIndex[currentIndex] = i;
            var leftIndex = leftByIndex[currentIndex];
            if (leftIndex >= 0) {
                var rightIndex = rightByIndex[currentIndex];
                if ((leftIndex !== previousIndex || rightIndex !== nextIndex) && (leftIndex !== nextIndex || rightIndex !== previousIndex)) ++junctionCount, junctionByIndex[currentIndex] = 1;
            } else {
                leftByIndex[currentIndex] = previousIndex;
                rightByIndex[currentIndex] = nextIndex;
            }
        }
        function index() {
            var indexByPoint = (0, _hashmapDefault.default)(coordinates.length * 1.4, hashIndex, equalIndex, Int32Array, -1, Int32Array), indexes = new Int32Array(coordinates.length);
            for(var i = 0, n = coordinates.length; i < n; ++i)indexes[i] = indexByPoint.maybeSet(i, i);
            return indexes;
        }
        function hashIndex(i) {
            return (0, _pointHashDefault.default)(coordinates[i]);
        }
        function equalIndex(i, j) {
            return (0, _pointEqualDefault.default)(coordinates[i], coordinates[j]);
        }
        visitedByIndex = leftByIndex = rightByIndex = null;
        var junctionByPoint = (0, _hashsetDefault.default)(junctionCount * 1.4, (0, _pointHashDefault.default), (0, _pointEqualDefault.default)), j;
        // Convert back to a standard hashset by point for caller convenience.
        for(i = 0, n = coordinates.length; i < n; ++i)if (junctionByIndex[j = indexes[i]]) junctionByPoint.add(coordinates[j]);
        return junctionByPoint;
    });
var _hashset = require("./hash/hashset");
var _hashsetDefault = parcelHelpers.interopDefault(_hashset);
var _hashmap = require("./hash/hashmap");
var _hashmapDefault = parcelHelpers.interopDefault(_hashmap);
var _pointEqual = require("./hash/point-equal");
var _pointEqualDefault = parcelHelpers.interopDefault(_pointEqual);
var _pointHash = require("./hash/point-hash");
var _pointHashDefault = parcelHelpers.interopDefault(_pointHash);

},{"./hash/hashset":"29C9y","./hash/hashmap":"jrDnt","./hash/point-equal":"hSZ0p","./hash/point-hash":"88TaK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29C9y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(size, hash, equal, type, empty) {
        if (arguments.length === 3) {
            type = Array;
            empty = null;
        }
        var store = new type(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))), mask = size - 1;
        for(var i = 0; i < size; ++i)store[i] = empty;
        function add(value) {
            var index = hash(value) & mask, match = store[index], collisions = 0;
            while(match != empty){
                if (equal(match, value)) return true;
                if (++collisions >= size) throw new Error("full hashset");
                match = store[index = index + 1 & mask];
            }
            store[index] = value;
            return true;
        }
        function has(value) {
            var index = hash(value) & mask, match = store[index], collisions = 0;
            while(match != empty){
                if (equal(match, value)) return true;
                if (++collisions >= size) break;
                match = store[index = index + 1 & mask];
            }
            return false;
        }
        function values() {
            var values = [];
            for(var i = 0, n = store.length; i < n; ++i){
                var match = store[i];
                if (match != empty) values.push(match);
            }
            return values;
        }
        return {
            add: add,
            has: has,
            values: values
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jrDnt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(size, hash, equal, keyType, keyEmpty, valueType) {
        if (arguments.length === 3) {
            keyType = valueType = Array;
            keyEmpty = null;
        }
        var keystore = new keyType(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))), valstore = new valueType(size), mask = size - 1;
        for(var i = 0; i < size; ++i)keystore[i] = keyEmpty;
        function set(key, value) {
            var index = hash(key) & mask, matchKey = keystore[index], collisions = 0;
            while(matchKey != keyEmpty){
                if (equal(matchKey, key)) return valstore[index] = value;
                if (++collisions >= size) throw new Error("full hashmap");
                matchKey = keystore[index = index + 1 & mask];
            }
            keystore[index] = key;
            valstore[index] = value;
            return value;
        }
        function maybeSet(key, value) {
            var index = hash(key) & mask, matchKey = keystore[index], collisions = 0;
            while(matchKey != keyEmpty){
                if (equal(matchKey, key)) return valstore[index];
                if (++collisions >= size) throw new Error("full hashmap");
                matchKey = keystore[index = index + 1 & mask];
            }
            keystore[index] = key;
            valstore[index] = value;
            return value;
        }
        function get(key, missingValue) {
            var index = hash(key) & mask, matchKey = keystore[index], collisions = 0;
            while(matchKey != keyEmpty){
                if (equal(matchKey, key)) return valstore[index];
                if (++collisions >= size) break;
                matchKey = keystore[index = index + 1 & mask];
            }
            return missingValue;
        }
        function keys() {
            var keys = [];
            for(var i = 0, n = keystore.length; i < n; ++i){
                var matchKey = keystore[i];
                if (matchKey != keyEmpty) keys.push(matchKey);
            }
            return keys;
        }
        return {
            set: set,
            maybeSet: maybeSet,
            get: get,
            keys: keys
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSZ0p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(pointA, pointB) {
        return pointA[0] === pointB[0] && pointA[1] === pointB[1];
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"88TaK":[function(require,module,exports) {
// TODO if quantized, use simpler Int32 hashing?
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(point) {
        floats[0] = point[0];
        floats[1] = point[1];
        var hash = uints[0] ^ uints[1];
        hash = hash << 5 ^ hash >> 7 ^ uints[2] ^ uints[3];
        return hash & 0x7fffffff;
    });
var buffer = new ArrayBuffer(16), floats = new Float64Array(buffer), uints = new Uint32Array(buffer);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03MaD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Given a cut topology, combines duplicate arcs.
parcelHelpers.export(exports, "default", ()=>function(topology) {
        var coordinates = topology.coordinates, lines = topology.lines, line, rings = topology.rings, ring, arcCount = lines.length + rings.length, i, n;
        delete topology.lines;
        delete topology.rings;
        // Count the number of (non-unique) arcs to initialize the hashmap safely.
        for(i = 0, n = lines.length; i < n; ++i){
            line = lines[i];
            while(line = line.next)++arcCount;
        }
        for(i = 0, n = rings.length; i < n; ++i){
            ring = rings[i];
            while(ring = ring.next)++arcCount;
        }
        var arcsByEnd = (0, _hashmapDefault.default)(arcCount * 2.8, (0, _pointHashDefault.default), (0, _pointEqualDefault.default)), arcs = topology.arcs = [];
        for(i = 0, n = lines.length; i < n; ++i){
            line = lines[i];
            do dedupLine(line);
            while (line = line.next);
        }
        for(i = 0, n = rings.length; i < n; ++i){
            ring = rings[i];
            if (ring.next) do dedupLine(ring);
            while (ring = ring.next);
            else dedupRing(ring);
        }
        function dedupLine(arc) {
            var startPoint, endPoint, startArcs, startArc, endArcs, endArc, i, n;
            // Does this arc match an existing arc in order?
            if (startArcs = arcsByEnd.get(startPoint = coordinates[arc[0]])) for(i = 0, n = startArcs.length; i < n; ++i){
                startArc = startArcs[i];
                if (equalLine(startArc, arc)) {
                    arc[0] = startArc[0];
                    arc[1] = startArc[1];
                    return;
                }
            }
            // Does this arc match an existing arc in reverse order?
            if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[1]])) for(i = 0, n = endArcs.length; i < n; ++i){
                endArc = endArcs[i];
                if (reverseEqualLine(endArc, arc)) {
                    arc[1] = endArc[0];
                    arc[0] = endArc[1];
                    return;
                }
            }
            if (startArcs) startArcs.push(arc);
            else arcsByEnd.set(startPoint, [
                arc
            ]);
            if (endArcs) endArcs.push(arc);
            else arcsByEnd.set(endPoint, [
                arc
            ]);
            arcs.push(arc);
        }
        function dedupRing(arc) {
            var endPoint, endArcs, endArc, i, n;
            // Does this arc match an existing line in order, or reverse order?
            // Rings are closed, so their start point and end point is the same.
            if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0]])) for(i = 0, n = endArcs.length; i < n; ++i){
                endArc = endArcs[i];
                if (equalRing(endArc, arc)) {
                    arc[0] = endArc[0];
                    arc[1] = endArc[1];
                    return;
                }
                if (reverseEqualRing(endArc, arc)) {
                    arc[0] = endArc[1];
                    arc[1] = endArc[0];
                    return;
                }
            }
            // Otherwise, does this arc match an existing ring in order, or reverse order?
            if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0] + findMinimumOffset(arc)])) for(i = 0, n = endArcs.length; i < n; ++i){
                endArc = endArcs[i];
                if (equalRing(endArc, arc)) {
                    arc[0] = endArc[0];
                    arc[1] = endArc[1];
                    return;
                }
                if (reverseEqualRing(endArc, arc)) {
                    arc[0] = endArc[1];
                    arc[1] = endArc[0];
                    return;
                }
            }
            if (endArcs) endArcs.push(arc);
            else arcsByEnd.set(endPoint, [
                arc
            ]);
            arcs.push(arc);
        }
        function equalLine(arcA, arcB) {
            var ia = arcA[0], ib = arcB[0], ja = arcA[1], jb = arcB[1];
            if (ia - ja !== ib - jb) return false;
            for(; ia <= ja; ++ia, ++ib)if (!(0, _pointEqualDefault.default)(coordinates[ia], coordinates[ib])) return false;
            return true;
        }
        function reverseEqualLine(arcA, arcB) {
            var ia = arcA[0], ib = arcB[0], ja = arcA[1], jb = arcB[1];
            if (ia - ja !== ib - jb) return false;
            for(; ia <= ja; ++ia, --jb)if (!(0, _pointEqualDefault.default)(coordinates[ia], coordinates[jb])) return false;
            return true;
        }
        function equalRing(arcA, arcB) {
            var ia = arcA[0], ib = arcB[0], ja = arcA[1], jb = arcB[1], n = ja - ia;
            if (n !== jb - ib) return false;
            var ka = findMinimumOffset(arcA), kb = findMinimumOffset(arcB);
            for(var i = 0; i < n; ++i){
                if (!(0, _pointEqualDefault.default)(coordinates[ia + (i + ka) % n], coordinates[ib + (i + kb) % n])) return false;
            }
            return true;
        }
        function reverseEqualRing(arcA, arcB) {
            var ia = arcA[0], ib = arcB[0], ja = arcA[1], jb = arcB[1], n = ja - ia;
            if (n !== jb - ib) return false;
            var ka = findMinimumOffset(arcA), kb = n - findMinimumOffset(arcB);
            for(var i = 0; i < n; ++i){
                if (!(0, _pointEqualDefault.default)(coordinates[ia + (i + ka) % n], coordinates[jb - (i + kb) % n])) return false;
            }
            return true;
        }
        // Rings are rotated to a consistent, but arbitrary, start point.
        // This is necessary to detect when a ring and a rotated copy are dupes.
        function findMinimumOffset(arc) {
            var start = arc[0], end = arc[1], mid = start, minimum = mid, minimumPoint = coordinates[mid];
            while(++mid < end){
                var point = coordinates[mid];
                if (point[0] < minimumPoint[0] || point[0] === minimumPoint[0] && point[1] < minimumPoint[1]) {
                    minimum = mid;
                    minimumPoint = point;
                }
            }
            return minimum - start;
        }
        return topology;
    });
var _hashmap = require("./hash/hashmap");
var _hashmapDefault = parcelHelpers.interopDefault(_hashmap);
var _pointEqual = require("./hash/point-equal");
var _pointEqualDefault = parcelHelpers.interopDefault(_pointEqual);
var _pointHash = require("./hash/point-hash");
var _pointHashDefault = parcelHelpers.interopDefault(_pointHash);

},{"./hash/hashmap":"jrDnt","./hash/point-equal":"hSZ0p","./hash/point-hash":"88TaK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bF27A":[function(require,module,exports) {
// Given an array of arcs in absolute (but already quantized!) coordinates,
// converts to fixed-point delta encoding.
// This is a destructive operation that modifies the given arcs!
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(arcs) {
        var i = -1, n = arcs.length;
        while(++i < n){
            var arc = arcs[i], j = 0, k = 1, m = arc.length, point = arc[0], x0 = point[0], y0 = point[1], x1, y1;
            while(++j < m){
                point = arc[j], x1 = point[0], y1 = point[1];
                if (x1 !== x0 || y1 !== y0) arc[k++] = [
                    x1 - x0,
                    y1 - y0
                ], x0 = x1, y0 = y1;
            }
            if (k === 1) arc[k++] = [
                0,
                0
            ]; // Each arc must be an array of two or more positions.
            arc.length = k;
        }
        return arcs;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56jlO":[function(require,module,exports) {
// Extracts the lines and rings from the specified hash of geometry objects.
//
// Returns an object with three properties:
//
// * coordinates - shared buffer of [x, y] coordinates
// * lines - lines extracted from the hash, of the form [start, end]
// * rings - rings extracted from the hash, of the form [start, end]
//
// For each ring or line, start and end represent inclusive indexes into the
// coordinates buffer. For rings (and closed lines), coordinates[start] equals
// coordinates[end].
//
// For each line or polygon geometry in the input hash, including nested
// geometries as in geometry collections, the `coordinates` array is replaced
// with an equivalent `arcs` array that, for each line (for line string
// geometries) or ring (for polygon geometries), points to one of the above
// lines or rings.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(objects) {
        var index = -1, lines = [], rings = [], coordinates = [];
        function extractGeometry(geometry) {
            if (geometry && extractGeometryType.hasOwnProperty(geometry.type)) extractGeometryType[geometry.type](geometry);
        }
        var extractGeometryType = {
            GeometryCollection: function(o) {
                o.geometries.forEach(extractGeometry);
            },
            LineString: function(o) {
                o.arcs = extractLine(o.arcs);
            },
            MultiLineString: function(o) {
                o.arcs = o.arcs.map(extractLine);
            },
            Polygon: function(o) {
                o.arcs = o.arcs.map(extractRing);
            },
            MultiPolygon: function(o) {
                o.arcs = o.arcs.map(extractMultiRing);
            }
        };
        function extractLine(line) {
            for(var i = 0, n = line.length; i < n; ++i)coordinates[++index] = line[i];
            var arc = {
                0: index - n + 1,
                1: index
            };
            lines.push(arc);
            return arc;
        }
        function extractRing(ring) {
            for(var i = 0, n = ring.length; i < n; ++i)coordinates[++index] = ring[i];
            var arc = {
                0: index - n + 1,
                1: index
            };
            rings.push(arc);
            return arc;
        }
        function extractMultiRing(rings) {
            return rings.map(extractRing);
        }
        for(var key in objects)extractGeometry(objects[key]);
        return {
            type: "Topology",
            coordinates: coordinates,
            lines: lines,
            rings: rings,
            objects: objects
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLIDd":[function(require,module,exports) {
// Given a hash of GeoJSON objects, returns a hash of GeoJSON geometry objects.
// Any null input geometry objects are represented as {type: null} in the output.
// Any feature.{id,properties,bbox} are transferred to the output geometry object.
// Each output geometry object is a shallow copy of the input (e.g., properties, coordinates)!
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(inputs) {
        var outputs = {}, key;
        for(key in inputs)outputs[key] = geomifyObject(inputs[key]);
        return outputs;
    });
function geomifyObject(input) {
    return input == null ? {
        type: null
    } : (input.type === "FeatureCollection" ? geomifyFeatureCollection : input.type === "Feature" ? geomifyFeature : geomifyGeometry)(input);
}
function geomifyFeatureCollection(input) {
    var output = {
        type: "GeometryCollection",
        geometries: input.features.map(geomifyFeature)
    };
    if (input.bbox != null) output.bbox = input.bbox;
    return output;
}
function geomifyFeature(input) {
    var output = geomifyGeometry(input.geometry), key; // eslint-disable-line no-unused-vars
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    for(key in input.properties){
        output.properties = input.properties;
        break;
    }
    return output;
}
function geomifyGeometry(input) {
    if (input == null) return {
        type: null
    };
    var output = input.type === "GeometryCollection" ? {
        type: "GeometryCollection",
        geometries: input.geometries.map(geomifyGeometry)
    } : input.type === "Point" || input.type === "MultiPoint" ? {
        type: input.type,
        coordinates: input.coordinates
    } : {
        type: input.type,
        arcs: input.coordinates
    }; // TODO Check for unknown types?
    if (input.bbox != null) output.bbox = input.bbox;
    return output;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g3rXQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(objects, bbox, n) {
        var x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3], kx = x1 - x0 ? (n - 1) / (x1 - x0) : 1, ky = y1 - y0 ? (n - 1) / (y1 - y0) : 1;
        function quantizePoint(input) {
            return [
                Math.round((input[0] - x0) * kx),
                Math.round((input[1] - y0) * ky)
            ];
        }
        function quantizePoints(input, m) {
            var i = -1, j = 0, n = input.length, output = new Array(n), pi, px, py, x, y;
            while(++i < n){
                pi = input[i];
                x = Math.round((pi[0] - x0) * kx);
                y = Math.round((pi[1] - y0) * ky);
                if (x !== px || y !== py) output[j++] = [
                    px = x,
                    py = y
                ]; // non-coincident points
            }
            output.length = j;
            while(j < m)j = output.push([
                output[0][0],
                output[0][1]
            ]);
            return output;
        }
        function quantizeLine(input) {
            return quantizePoints(input, 2);
        }
        function quantizeRing(input) {
            return quantizePoints(input, 4);
        }
        function quantizePolygon(input) {
            return input.map(quantizeRing);
        }
        function quantizeGeometry(o) {
            if (o != null && quantizeGeometryType.hasOwnProperty(o.type)) quantizeGeometryType[o.type](o);
        }
        var quantizeGeometryType = {
            GeometryCollection: function(o) {
                o.geometries.forEach(quantizeGeometry);
            },
            Point: function(o) {
                o.coordinates = quantizePoint(o.coordinates);
            },
            MultiPoint: function(o) {
                o.coordinates = o.coordinates.map(quantizePoint);
            },
            LineString: function(o) {
                o.arcs = quantizeLine(o.arcs);
            },
            MultiLineString: function(o) {
                o.arcs = o.arcs.map(quantizeLine);
            },
            Polygon: function(o) {
                o.arcs = quantizePolygon(o.arcs);
            },
            MultiPolygon: function(o) {
                o.arcs = o.arcs.map(quantizePolygon);
            }
        };
        for(var key in objects)quantizeGeometry(objects[key]);
        return {
            scale: [
                1 / kx,
                1 / ky
            ],
            translate: [
                x0,
                y0
            ]
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFGUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filter", ()=>(0, _filterDefault.default));
parcelHelpers.export(exports, "filterAttached", ()=>(0, _filterAttachedDefault.default));
parcelHelpers.export(exports, "filterAttachedWeight", ()=>(0, _filterAttachedWeightDefault.default));
parcelHelpers.export(exports, "filterWeight", ()=>(0, _filterWeightDefault.default));
parcelHelpers.export(exports, "planarRingArea", ()=>(0, _planar.planarRingArea));
parcelHelpers.export(exports, "planarTriangleArea", ()=>(0, _planar.planarTriangleArea));
parcelHelpers.export(exports, "presimplify", ()=>(0, _presimplifyDefault.default));
parcelHelpers.export(exports, "quantile", ()=>(0, _quantileDefault.default));
parcelHelpers.export(exports, "simplify", ()=>(0, _simplifyDefault.default));
parcelHelpers.export(exports, "sphericalRingArea", ()=>(0, _spherical.sphericalRingArea));
parcelHelpers.export(exports, "sphericalTriangleArea", ()=>(0, _spherical.sphericalTriangleArea));
var _filter = require("./src/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
var _filterAttached = require("./src/filterAttached");
var _filterAttachedDefault = parcelHelpers.interopDefault(_filterAttached);
var _filterAttachedWeight = require("./src/filterAttachedWeight");
var _filterAttachedWeightDefault = parcelHelpers.interopDefault(_filterAttachedWeight);
var _filterWeight = require("./src/filterWeight");
var _filterWeightDefault = parcelHelpers.interopDefault(_filterWeight);
var _planar = require("./src/planar");
var _presimplify = require("./src/presimplify");
var _presimplifyDefault = parcelHelpers.interopDefault(_presimplify);
var _quantile = require("./src/quantile");
var _quantileDefault = parcelHelpers.interopDefault(_quantile);
var _simplify = require("./src/simplify");
var _simplifyDefault = parcelHelpers.interopDefault(_simplify);
var _spherical = require("./src/spherical");

},{"./src/filter":"3WCgJ","./src/filterAttached":"7wao6","./src/filterAttachedWeight":"28aj1","./src/filterWeight":"4TXWg","./src/planar":"1aRTA","./src/presimplify":"qE55k","./src/quantile":"6cvoo","./src/simplify":"hRfGf","./src/spherical":"kO5HO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3WCgJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, filter) {
        var oldObjects = topology.objects, newObjects = {}, key;
        if (filter == null) filter = filterTrue;
        function filterGeometry(input) {
            var output, arcs;
            switch(input.type){
                case "Polygon":
                    arcs = filterRings(input.arcs);
                    output = arcs ? {
                        type: "Polygon",
                        arcs: arcs
                    } : {
                        type: null
                    };
                    break;
                case "MultiPolygon":
                    arcs = input.arcs.map(filterRings).filter(filterIdentity);
                    output = arcs.length ? {
                        type: "MultiPolygon",
                        arcs: arcs
                    } : {
                        type: null
                    };
                    break;
                case "GeometryCollection":
                    arcs = input.geometries.map(filterGeometry).filter(filterNotNull);
                    output = arcs.length ? {
                        type: "GeometryCollection",
                        geometries: arcs
                    } : {
                        type: null
                    };
                    break;
                default:
                    return input;
            }
            if (input.id != null) output.id = input.id;
            if (input.bbox != null) output.bbox = input.bbox;
            if (input.properties != null) output.properties = input.properties;
            return output;
        }
        function filterRings(arcs) {
            return arcs.length && filterExteriorRing(arcs[0]) // if the exterior is small, ignore any holes
             ? [
                arcs[0]
            ].concat(arcs.slice(1).filter(filterInteriorRing)) : null;
        }
        function filterExteriorRing(ring) {
            return filter(ring, false);
        }
        function filterInteriorRing(ring) {
            return filter(ring, true);
        }
        for(key in oldObjects)newObjects[key] = filterGeometry(oldObjects[key]);
        return (0, _pruneDefault.default)({
            type: "Topology",
            bbox: topology.bbox,
            transform: topology.transform,
            objects: newObjects,
            arcs: topology.arcs
        });
    });
var _prune = require("./prune");
var _pruneDefault = parcelHelpers.interopDefault(_prune);
function filterTrue() {
    return true;
}
function filterIdentity(x) {
    return x;
}
function filterNotNull(geometry) {
    return geometry.type != null;
}

},{"./prune":"4xaGx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xaGx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology) {
        var oldObjects = topology.objects, newObjects = {}, oldArcs = topology.arcs, oldArcsLength = oldArcs.length, oldIndex = -1, newIndexByOldIndex = new Array(oldArcsLength), newArcsLength = 0, newArcs, newIndex = -1, key;
        function scanGeometry(input) {
            switch(input.type){
                case "GeometryCollection":
                    input.geometries.forEach(scanGeometry);
                    break;
                case "LineString":
                    scanArcs(input.arcs);
                    break;
                case "MultiLineString":
                    input.arcs.forEach(scanArcs);
                    break;
                case "Polygon":
                    input.arcs.forEach(scanArcs);
                    break;
                case "MultiPolygon":
                    input.arcs.forEach(scanMultiArcs);
                    break;
            }
        }
        function scanArc(index) {
            if (index < 0) index = ~index;
            if (!newIndexByOldIndex[index]) newIndexByOldIndex[index] = 1, ++newArcsLength;
        }
        function scanArcs(arcs) {
            arcs.forEach(scanArc);
        }
        function scanMultiArcs(arcs) {
            arcs.forEach(scanArcs);
        }
        function reindexGeometry(input) {
            var output;
            switch(input.type){
                case "GeometryCollection":
                    output = {
                        type: "GeometryCollection",
                        geometries: input.geometries.map(reindexGeometry)
                    };
                    break;
                case "LineString":
                    output = {
                        type: "LineString",
                        arcs: reindexArcs(input.arcs)
                    };
                    break;
                case "MultiLineString":
                    output = {
                        type: "MultiLineString",
                        arcs: input.arcs.map(reindexArcs)
                    };
                    break;
                case "Polygon":
                    output = {
                        type: "Polygon",
                        arcs: input.arcs.map(reindexArcs)
                    };
                    break;
                case "MultiPolygon":
                    output = {
                        type: "MultiPolygon",
                        arcs: input.arcs.map(reindexMultiArcs)
                    };
                    break;
                default:
                    return input;
            }
            if (input.id != null) output.id = input.id;
            if (input.bbox != null) output.bbox = input.bbox;
            if (input.properties != null) output.properties = input.properties;
            return output;
        }
        function reindexArc(oldIndex) {
            return oldIndex < 0 ? ~newIndexByOldIndex[~oldIndex] : newIndexByOldIndex[oldIndex];
        }
        function reindexArcs(arcs) {
            return arcs.map(reindexArc);
        }
        function reindexMultiArcs(arcs) {
            return arcs.map(reindexArcs);
        }
        for(key in oldObjects)scanGeometry(oldObjects[key]);
        newArcs = new Array(newArcsLength);
        while(++oldIndex < oldArcsLength)if (newIndexByOldIndex[oldIndex]) {
            newIndexByOldIndex[oldIndex] = ++newIndex;
            newArcs[newIndex] = oldArcs[oldIndex];
        }
        for(key in oldObjects)newObjects[key] = reindexGeometry(oldObjects[key]);
        return {
            type: "Topology",
            bbox: topology.bbox,
            transform: topology.transform,
            objects: newObjects,
            arcs: newArcs
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wao6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology) {
        var ownerByArc = new Array(topology.arcs.length), ownerIndex = 0, key;
        function testGeometry(o) {
            switch(o.type){
                case "GeometryCollection":
                    o.geometries.forEach(testGeometry);
                    break;
                case "Polygon":
                    testArcs(o.arcs);
                    break;
                case "MultiPolygon":
                    o.arcs.forEach(testArcs);
                    break;
            }
        }
        function testArcs(arcs) {
            for(var i = 0, n = arcs.length; i < n; ++i, ++ownerIndex)for(var ring = arcs[i], j = 0, m = ring.length; j < m; ++j){
                var arc = ring[j];
                if (arc < 0) arc = ~arc;
                var owner = ownerByArc[arc];
                if (owner == null) ownerByArc[arc] = ownerIndex;
                else if (owner !== ownerIndex) ownerByArc[arc] = -1;
            }
        }
        for(key in topology.objects)testGeometry(topology.objects[key]);
        return function(ring) {
            for(var j = 0, m = ring.length, arc; j < m; ++j){
                if (ownerByArc[(arc = ring[j]) < 0 ? ~arc : arc] === -1) return true;
            }
            return false;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28aj1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, minWeight, weight) {
        var a = (0, _filterAttachedDefault.default)(topology), w = (0, _filterWeightDefault.default)(topology, minWeight, weight);
        return function(ring, interior) {
            return a(ring, interior) || w(ring, interior);
        };
    });
var _filterAttached = require("./filterAttached");
var _filterAttachedDefault = parcelHelpers.interopDefault(_filterAttached);
var _filterWeight = require("./filterWeight");
var _filterWeightDefault = parcelHelpers.interopDefault(_filterWeight);

},{"./filterAttached":"7wao6","./filterWeight":"4TXWg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4TXWg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, minWeight, weight) {
        minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;
        if (weight == null) weight = (0, _planar.planarRingArea);
        return function(ring, interior) {
            return weight((0, _topojsonClient.feature)(topology, {
                type: "Polygon",
                arcs: [
                    ring
                ]
            }).geometry.coordinates[0], interior) >= minWeight;
        };
    });
var _topojsonClient = require("topojson-client");
var _planar = require("./planar");

},{"topojson-client":"9KNJH","./planar":"1aRTA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1aRTA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "planarTriangleArea", ()=>planarTriangleArea);
parcelHelpers.export(exports, "planarRingArea", ()=>planarRingArea);
function planarTriangleArea(triangle) {
    var a = triangle[0], b = triangle[1], c = triangle[2];
    return Math.abs((a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1])) / 2;
}
function planarRingArea(ring) {
    var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
    while(++i < n)a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
    return Math.abs(area) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"qE55k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, weight) {
        var point = topology.transform ? (0, _topojsonClient.transform)(topology.transform) : copy, heap = (0, _heapDefault.default)();
        if (weight == null) weight = (0, _planar.planarTriangleArea);
        var arcs = topology.arcs.map(function(arc) {
            var triangles = [], maxWeight = 0, triangle, i, n;
            arc = arc.map(point);
            for(i = 1, n = arc.length - 1; i < n; ++i){
                triangle = [
                    arc[i - 1],
                    arc[i],
                    arc[i + 1]
                ];
                triangle[1][2] = weight(triangle);
                triangles.push(triangle);
                heap.push(triangle);
            }
            // Always keep the arc endpoints!
            arc[0][2] = arc[n][2] = Infinity;
            for(i = 0, n = triangles.length; i < n; ++i){
                triangle = triangles[i];
                triangle.previous = triangles[i - 1];
                triangle.next = triangles[i + 1];
            }
            while(triangle = heap.pop()){
                var previous = triangle.previous, next = triangle.next;
                // If the weight of the current point is less than that of the previous
                // point to be eliminated, use the latter’s weight instead. This ensures
                // that the current point cannot be eliminated without eliminating
                // previously- eliminated points.
                if (triangle[1][2] < maxWeight) triangle[1][2] = maxWeight;
                else maxWeight = triangle[1][2];
                if (previous) {
                    previous.next = next;
                    previous[2] = triangle[2];
                    update(previous);
                }
                if (next) {
                    next.previous = previous;
                    next[0] = triangle[0];
                    update(next);
                }
            }
            return arc;
        });
        function update(triangle) {
            heap.remove(triangle);
            triangle[1][2] = weight(triangle);
            heap.push(triangle);
        }
        return {
            type: "Topology",
            bbox: topology.bbox,
            objects: topology.objects,
            arcs: arcs
        };
    });
var _topojsonClient = require("topojson-client");
var _heap = require("./heap");
var _heapDefault = parcelHelpers.interopDefault(_heap);
var _planar = require("./planar");
function copy(point) {
    return [
        point[0],
        point[1],
        0
    ];
}

},{"topojson-client":"9KNJH","./heap":"kkHlK","./planar":"1aRTA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkHlK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var heap = {}, array = [], size = 0;
        heap.push = function(object) {
            up(array[object._ = size] = object, size++);
            return size;
        };
        heap.pop = function() {
            if (size <= 0) return;
            var removed = array[0], object;
            if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
            return removed;
        };
        heap.remove = function(removed) {
            var i = removed._, object;
            if (array[i] !== removed) return; // invalid request
            if (i !== --size) object = array[size], (compare(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
            return i;
        };
        function up(object, i) {
            while(i > 0){
                var j = (i + 1 >> 1) - 1, parent = array[j];
                if (compare(object, parent) >= 0) break;
                array[parent._ = i] = parent;
                array[object._ = i = j] = object;
            }
        }
        function down(object, i) {
            while(true){
                var r = i + 1 << 1, l = r - 1, j = i, child = array[j];
                if (l < size && compare(array[l], child) < 0) child = array[j = l];
                if (r < size && compare(array[r], child) < 0) child = array[j = r];
                if (j === i) break;
                array[child._ = i] = child;
                array[object._ = i = j] = object;
            }
        }
        return heap;
    });
function compare(a, b) {
    return a[1][2] - b[1][2];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6cvoo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, p) {
        var array = [];
        topology.arcs.forEach(function(arc) {
            arc.forEach(function(point) {
                if (isFinite(point[2])) array.push(point[2]);
            });
        });
        return array.length && quantile(array.sort(descending), p);
    });
function quantile(array, p) {
    if (!(n = array.length)) return;
    if ((p = +p) <= 0 || n < 2) return array[0];
    if (p >= 1) return array[n - 1];
    var n, h = (n - 1) * p, i = Math.floor(h), a = array[i], b = array[i + 1];
    return a + (b - a) * (h - i);
}
function descending(a, b) {
    return b - a;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRfGf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, minWeight) {
        minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;
        // Remove points whose weight is less than the minimum weight.
        var arcs = topology.arcs.map(function(input) {
            var i = -1, j = 0, n = input.length, output = new Array(n), point;
            while(++i < n)if ((point = input[i])[2] >= minWeight) output[j++] = [
                point[0],
                point[1]
            ];
            output.length = j;
            return output;
        });
        return {
            type: "Topology",
            transform: topology.transform,
            bbox: topology.bbox,
            objects: topology.objects,
            arcs: arcs
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kO5HO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sphericalRingArea", ()=>sphericalRingArea);
parcelHelpers.export(exports, "sphericalTriangleArea", ()=>sphericalTriangleArea);
var pi = Math.PI, tau = 2 * pi, quarterPi = pi / 4, radians = pi / 180, abs = Math.abs, atan2 = Math.atan2, cos = Math.cos, sin = Math.sin;
function halfArea(ring, closed) {
    var i = 0, n = ring.length, sum = 0, point = ring[closed ? i++ : n - 1], lambda0, lambda1 = point[0] * radians, phi1 = point[1] * radians / 2 + quarterPi, cosPhi0, cosPhi1 = cos(phi1), sinPhi0, sinPhi1 = sin(phi1);
    for(; i < n; ++i){
        point = ring[i];
        lambda0 = lambda1, lambda1 = point[0] * radians;
        phi1 = point[1] * radians / 2 + quarterPi;
        cosPhi0 = cosPhi1, cosPhi1 = cos(phi1);
        sinPhi0 = sinPhi1, sinPhi1 = sin(phi1);
        // Spherical excess E for a spherical triangle with vertices: south pole,
        // previous point, current point.  Uses a formula derived from Cagnoli’s
        // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
        // See https://github.com/d3/d3-geo/blob/master/README.md#geoArea
        var dLambda = lambda1 - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, k = sinPhi0 * sinPhi1, u = cosPhi0 * cosPhi1 + k * cos(adLambda), v = k * sdLambda * sin(adLambda);
        sum += atan2(v, u);
    }
    return sum;
}
function sphericalRingArea(ring, interior) {
    var sum = halfArea(ring, true);
    if (interior) sum *= -1;
    return (sum < 0 ? tau + sum : sum) * 2;
}
function sphericalTriangleArea(t) {
    return abs(halfArea(t, false)) * 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbdeE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "districtsTopo", ()=>districtsTopo);
const districtsTopo = {
    type: "Topology",
    objects: {
        pakistan_districts: {
            type: "GeometryCollection",
            geometries: [
                {
                    type: "Polygon",
                    properties: {
                        objectid: 67,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Bannu",
                        shape_leng: 2.103026,
                        shape_area: 0.116758,
                        district_agency: "Bannu",
                        status: "District",
                        cartodb_id: 65,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 10,
                        province_territory: "Azad Jammu & Kashmir",
                        districts: "Sudhnutti",
                        shape_leng: 1.255622,
                        shape_area: 0.055225,
                        district_agency: "Sudhnutti",
                        status: "District",
                        cartodb_id: 10,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            5,
                            6,
                            7
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 27,
                        province_territory: "Balochistan",
                        districts: "Killa Abdullah",
                        shape_leng: 4.293911,
                        shape_area: 0.436281,
                        district_agency: "Killa Abdullah",
                        status: "District",
                        cartodb_id: 25,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            8,
                            9,
                            10
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 51,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "FR Tank",
                        shape_leng: 1.812708,
                        shape_area: 0.109204,
                        district_agency: "FR Tank",
                        status: "FR",
                        cartodb_id: 49,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            11,
                            12,
                            13,
                            14
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 73,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Hangu",
                        shape_leng: 2.352585,
                        shape_area: 0.133021,
                        district_agency: "Hangu",
                        status: "District",
                        cartodb_id: 71,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            15,
                            16,
                            17,
                            18,
                            19,
                            20
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 96,
                        province_territory: "Punjab",
                        districts: "Chiniot",
                        shape_leng: 2.746435,
                        shape_area: 0.247447,
                        district_agency: "Chiniot",
                        status: "District",
                        cartodb_id: 94,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            21,
                            22,
                            23,
                            24
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 107,
                        province_territory: "Punjab",
                        districts: "Lahore",
                        shape_leng: 2.304896,
                        shape_area: 0.164167,
                        district_agency: "Lahore",
                        status: "District",
                        cartodb_id: 105,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            25,
                            26,
                            27,
                            28
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 65,
                        province_territory: "Islamabad Capital Territory",
                        districts: "Islamabad",
                        shape_leng: 1.74531,
                        shape_area: 0.087645,
                        district_agency: "Islamabad",
                        status: "District",
                        cartodb_id: 63,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            29,
                            30
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 70,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Charsadda",
                        shape_leng: 1.576697,
                        shape_area: 0.097777,
                        district_agency: "Charsadda",
                        status: "District",
                        cartodb_id: 68,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            31,
                            32,
                            33,
                            34,
                            35
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 82,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Mardan",
                        shape_leng: 2.086856,
                        shape_area: 0.160276,
                        district_agency: "Mardan",
                        status: "District",
                        cartodb_id: 80,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            36,
                            37,
                            38,
                            -32,
                            39
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 1,
                        province_territory: "Azad Jammu & Kashmir",
                        districts: "Bagh",
                        shape_leng: 1.594116,
                        shape_area: 0.067758,
                        district_agency: "Bagh",
                        status: "District",
                        cartodb_id: 1,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            40,
                            41,
                            42,
                            43,
                            44,
                            45
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 2,
                        province_territory: "Azad Jammu & Kashmir",
                        districts: "Bhimber",
                        shape_leng: 1.987888,
                        shape_area: 0.117047,
                        district_agency: "Bhimber",
                        status: "District",
                        cartodb_id: 2,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            46,
                            47,
                            48,
                            49,
                            50
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 3,
                        province_territory: "Azad Jammu & Kashmir",
                        districts: "Hattian",
                        shape_leng: 1.300416,
                        shape_area: 0.066683,
                        district_agency: "Hattian",
                        status: "District",
                        cartodb_id: 3,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -41,
                            51,
                            52
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 4,
                        province_territory: "Azad Jammu & Kashmir",
                        districts: "Haveli",
                        shape_leng: 1.001545,
                        shape_area: 0.053722,
                        district_agency: "Haveli",
                        status: "District",
                        cartodb_id: 4,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            53,
                            -42,
                            54
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 6,
                        province_territory: "Azad Jammu & Kashmir",
                        districts: "Mirpur",
                        shape_leng: 1.477625,
                        shape_area: 0.086768,
                        district_agency: "Mirpur",
                        status: "District",
                        cartodb_id: 6,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -50,
                            55,
                            56,
                            57,
                            58
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 18,
                        province_territory: "Balochistan",
                        districts: "Sohbatpur",
                        shape_leng: 1.808907,
                        shape_area: 0.072524,
                        district_agency: "Sohbatpur",
                        status: "District",
                        cartodb_id: 18,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            59,
                            60,
                            61,
                            62,
                            63
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 39,
                        province_territory: "Balochistan",
                        districts: "Sherani",
                        shape_leng: 2.81312,
                        shape_area: 0.290015,
                        district_agency: "Sherani",
                        status: "District",
                        cartodb_id: 37,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            64,
                            65,
                            66,
                            67
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 56,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "Orakzai Agency",
                        shape_leng: 2.578255,
                        shape_area: 0.133221,
                        district_agency: "Orakzai Agency",
                        status: "Agency",
                        cartodb_id: 54,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            68,
                            69,
                            -20,
                            70,
                            71
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 40,
                        province_territory: "Balochistan",
                        districts: "Lehri",
                        shape_leng: 3.241817,
                        shape_area: 0.304225,
                        district_agency: "Lehri",
                        status: "District",
                        cartodb_id: 38,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            72,
                            73,
                            74,
                            75,
                            76,
                            77
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 5,
                        province_territory: "Azad Jammu & Kashmir",
                        districts: "Kotli",
                        shape_leng: 2.017824,
                        shape_area: 0.155069,
                        district_agency: "Kotli",
                        status: "District",
                        cartodb_id: 5,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            78,
                            79,
                            -51,
                            -59,
                            80,
                            -6
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 7,
                        province_territory: "Azad Jammu & Kashmir",
                        districts: "Muzaffarabad",
                        shape_leng: 1.998935,
                        shape_area: 0.133357,
                        district_agency: "Muzaffarabad",
                        status: "District",
                        cartodb_id: 7,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            81,
                            82,
                            -52,
                            -46,
                            83,
                            84
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 8,
                        province_territory: "Azad Jammu & Kashmir",
                        districts: "Neelum",
                        shape_leng: 3.913392,
                        shape_area: 0.309119,
                        district_agency: "Neelum",
                        status: "District",
                        cartodb_id: 8,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            85,
                            -82,
                            86,
                            87,
                            88
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 9,
                        province_territory: "Azad Jammu & Kashmir",
                        districts: "Poonch",
                        shape_leng: 1.882087,
                        shape_area: 0.070072,
                        district_agency: "Poonch",
                        status: "District",
                        cartodb_id: 9,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -54,
                            89,
                            -79,
                            -8,
                            90,
                            -43
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 11,
                        province_territory: "Balochistan",
                        districts: "Awaran",
                        shape_leng: 8.775564,
                        shape_area: 2.256718,
                        district_agency: "Awaran",
                        status: "District",
                        cartodb_id: 11,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            91,
                            92,
                            93,
                            94,
                            95,
                            96
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 12,
                        province_territory: "Balochistan",
                        districts: "Barkhan",
                        shape_leng: 3.330464,
                        shape_area: 0.328535,
                        district_agency: "Barkhan",
                        status: "District",
                        cartodb_id: 12,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            97,
                            98,
                            99,
                            100,
                            101
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 13,
                        province_territory: "Balochistan",
                        districts: "Chaghi",
                        shape_leng: 11.373019,
                        shape_area: 4.117601,
                        district_agency: "Chaghi",
                        status: "District",
                        cartodb_id: 13,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            102,
                            103,
                            104,
                            105,
                            106
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 14,
                        province_territory: "Balochistan",
                        districts: "Dera Bugti",
                        shape_leng: 5.132102,
                        shape_area: 0.952769,
                        district_agency: "Dera Bugti",
                        status: "District",
                        cartodb_id: 14,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            107,
                            -64,
                            108,
                            -74,
                            109,
                            110
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 15,
                        province_territory: "Balochistan",
                        districts: "Gwadar",
                        shape_leng: 11.684637,
                        shape_area: 1.038382,
                        district_agency: "Gwadar",
                        status: "District",
                        cartodb_id: 15,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            111,
                            -93,
                            112,
                            113
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 16,
                        province_territory: "Balochistan",
                        districts: "Harnai",
                        shape_leng: 3.724538,
                        shape_area: 0.286749,
                        district_agency: "Harnai",
                        status: "District",
                        cartodb_id: 16,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            114,
                            115,
                            116,
                            117,
                            118
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 17,
                        province_territory: "Balochistan",
                        districts: "Jaffarabad",
                        shape_leng: 2.348028,
                        shape_area: 0.156419,
                        district_agency: "Jaffarabad",
                        status: "District",
                        cartodb_id: 17,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            119,
                            120,
                            121,
                            122,
                            -62
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 20,
                        province_territory: "Balochistan",
                        districts: "Jhal Magsi",
                        shape_leng: 3.030243,
                        shape_area: 0.35544,
                        district_agency: "Jhal Magsi",
                        status: "District",
                        cartodb_id: 19,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -76,
                            123,
                            -122,
                            124,
                            125,
                            126
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 22,
                        province_territory: "Balochistan",
                        districts: "Kachhi",
                        shape_leng: 4.676993,
                        shape_area: 0.498322,
                        district_agency: "Kachhi",
                        status: "District",
                        cartodb_id: 20,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            127,
                            -77,
                            -127,
                            128,
                            129,
                            130,
                            131
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 23,
                        province_territory: "Balochistan",
                        districts: "Kalat",
                        shape_leng: 6.384437,
                        shape_area: 1.284512,
                        district_agency: "Kalat",
                        status: "District",
                        cartodb_id: 21,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -130,
                            132,
                            133,
                            134,
                            135,
                            136
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 24,
                        province_territory: "Balochistan",
                        districts: "Kech",
                        shape_leng: 8.328577,
                        shape_area: 2.201555,
                        district_agency: "Kech",
                        status: "District",
                        cartodb_id: 22,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            137,
                            -94,
                            -112,
                            138
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 25,
                        province_territory: "Balochistan",
                        districts: "Kharan",
                        shape_leng: 4.274836,
                        shape_area: 0.758576,
                        district_agency: "Kharan",
                        status: "District",
                        cartodb_id: 23,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -135,
                            139,
                            140,
                            -104,
                            141
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 31,
                        province_territory: "Balochistan",
                        districts: "Loralai",
                        shape_leng: 6.269535,
                        shape_area: 0.762726,
                        district_agency: "Loralai",
                        status: "District",
                        cartodb_id: 29,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            142,
                            -101,
                            143,
                            -115,
                            144,
                            145,
                            146,
                            147
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 26,
                        province_territory: "Balochistan",
                        districts: "Khuzdar",
                        shape_leng: 9.862301,
                        shape_area: 2.82625,
                        district_agency: "Khuzdar",
                        status: "District",
                        cartodb_id: 24,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -126,
                            148,
                            149,
                            150,
                            -97,
                            151,
                            -133,
                            -129
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 28,
                        province_territory: "Balochistan",
                        districts: "Killa Saifullah",
                        shape_leng: 6.910679,
                        shape_area: 1.171068,
                        district_agency: "Killa Saifullah",
                        status: "District",
                        cartodb_id: 26,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -147,
                            152,
                            153,
                            154
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 29,
                        province_territory: "Balochistan",
                        districts: "Kohlu",
                        shape_leng: 5.494929,
                        shape_area: 0.71964,
                        district_agency: "Kohlu",
                        status: "District",
                        cartodb_id: 27,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            155,
                            -110,
                            -73,
                            156,
                            -116,
                            -144,
                            -100
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 30,
                        province_territory: "Balochistan",
                        districts: "Lasbela",
                        shape_leng: 11.873281,
                        shape_area: 1.265273,
                        district_agency: "Lasbela",
                        status: "District",
                        cartodb_id: 28,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            157,
                            158,
                            -113,
                            -92,
                            -151,
                            159,
                            160
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 47,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "FR DI Khan",
                        shape_leng: 2.418239,
                        shape_area: 0.157607,
                        district_agency: "FR DI Khan",
                        status: "FR",
                        cartodb_id: 45,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            161,
                            162,
                            163,
                            -65,
                            164
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 32,
                        province_territory: "Balochistan",
                        districts: "Mastung",
                        shape_leng: 4.080624,
                        shape_area: 0.439416,
                        district_agency: "Mastung",
                        status: "District",
                        cartodb_id: 30,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -131,
                            -137,
                            165,
                            166,
                            167
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 33,
                        province_territory: "Balochistan",
                        districts: "Musakhail",
                        shape_leng: 3.867313,
                        shape_area: 0.556523,
                        district_agency: "Musakhail",
                        status: "District",
                        cartodb_id: 31,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            168,
                            -102,
                            -143,
                            169,
                            -66,
                            -164
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 34,
                        province_territory: "Balochistan",
                        districts: "Nasirabad",
                        shape_leng: 2.84252,
                        shape_area: 0.29747,
                        district_agency: "Nasirabad",
                        status: "District",
                        cartodb_id: 32,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -63,
                            -123,
                            -124,
                            -75,
                            -109
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 35,
                        province_territory: "Balochistan",
                        districts: "Nushki",
                        shape_leng: 3.308125,
                        shape_area: 0.545267,
                        district_agency: "Nushki",
                        status: "District",
                        cartodb_id: 33,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -142,
                            -103,
                            170,
                            -166,
                            -136
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 36,
                        province_territory: "Balochistan",
                        districts: "Panjgur",
                        shape_leng: 7.207113,
                        shape_area: 1.595175,
                        district_agency: "Panjgur",
                        status: "District",
                        cartodb_id: 34,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -95,
                            -138,
                            171,
                            172
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 37,
                        province_territory: "Balochistan",
                        districts: "Pishin",
                        shape_leng: 5.15591,
                        shape_area: 0.573222,
                        district_agency: "Pishin",
                        status: "District",
                        cartodb_id: 35,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -146,
                            173,
                            174,
                            -9,
                            175,
                            -153
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 38,
                        province_territory: "Balochistan",
                        districts: "Quetta",
                        shape_leng: 4.383484,
                        shape_area: 0.351984,
                        district_agency: "Quetta",
                        status: "District",
                        cartodb_id: 36,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            176,
                            -118,
                            177,
                            -132,
                            -168,
                            178,
                            -10,
                            -175
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 41,
                        province_territory: "Balochistan",
                        districts: "Sibi",
                        shape_leng: 4.250401,
                        shape_area: 0.463205,
                        district_agency: "Sibi",
                        status: "District",
                        cartodb_id: 39,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -157,
                            -78,
                            -128,
                            -178,
                            -117
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 42,
                        province_territory: "Balochistan",
                        districts: "Washuk",
                        shape_leng: 10.025232,
                        shape_area: 3.573732,
                        district_agency: "Washuk",
                        status: "District",
                        cartodb_id: 40,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            179,
                            -106,
                            180,
                            -140,
                            -134,
                            -152,
                            -96,
                            -173
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 43,
                        province_territory: "Balochistan",
                        districts: "Zhob",
                        shape_leng: 7.769499,
                        shape_area: 1.131691,
                        district_agency: "Zhob",
                        status: "District",
                        cartodb_id: 41,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -67,
                            -170,
                            -148,
                            -155,
                            181,
                            182
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 44,
                        province_territory: "Balochistan",
                        districts: "Ziarat",
                        shape_leng: 3.664366,
                        shape_area: 0.30705,
                        district_agency: "Ziarat",
                        status: "District",
                        cartodb_id: 42,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -145,
                            -119,
                            -177,
                            -174
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 45,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "Bajaur Agency",
                        shape_leng: 2.060383,
                        shape_area: 0.134514,
                        district_agency: "Bajaur Agency",
                        status: "Agency",
                        cartodb_id: 43,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            183,
                            184,
                            185,
                            186
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 46,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "FR Bannu",
                        shape_leng: 2.145786,
                        shape_area: 0.078854,
                        district_agency: "FR Bannu",
                        status: "FR",
                        cartodb_id: 44,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            187,
                            -4,
                            188,
                            189,
                            -17
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 48,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "FR Kohat",
                        shape_leng: 1.709675,
                        shape_area: 0.044033,
                        district_agency: "FR Kohat",
                        status: "FR",
                        cartodb_id: 46,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            190,
                            191,
                            192,
                            -69,
                            193
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 49,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "FR Lakki Marwat",
                        shape_leng: 0.601421,
                        shape_area: 0.017931,
                        district_agency: "FR Lakki Marwat",
                        status: "FR",
                        cartodb_id: 47,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -12,
                            194,
                            -2,
                            195
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 50,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "FR Peshawar",
                        shape_leng: 0.987925,
                        shape_area: 0.025283,
                        district_agency: "FR Peshawar",
                        status: "FR",
                        cartodb_id: 48,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            196,
                            197,
                            -192,
                            198
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 52,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "Khyber Agency",
                        shape_leng: 3.448591,
                        shape_area: 0.267982,
                        district_agency: "Khyber Agency",
                        status: "Agency",
                        cartodb_id: 50,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            199,
                            -194,
                            -72,
                            200,
                            201,
                            202
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 53,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "Kurram Agency",
                        shape_leng: 3.049083,
                        shape_area: 0.330521,
                        district_agency: "Kurram Agency",
                        status: "Agency",
                        cartodb_id: 51,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -201,
                            -71,
                            -19,
                            203,
                            204
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 54,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "Mohmand Agency",
                        shape_leng: 2.519534,
                        shape_area: 0.221933,
                        district_agency: "Mohmand Agency",
                        status: "Agency",
                        cartodb_id: 52,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            205,
                            -35,
                            206,
                            -203,
                            207,
                            -185
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 94,
                        province_territory: "Punjab",
                        districts: "Bhakkar",
                        shape_leng: 4.689864,
                        shape_area: 0.805751,
                        district_agency: "Bhakkar",
                        status: "District",
                        cartodb_id: 92,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            208,
                            209,
                            210,
                            211,
                            212
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 55,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "North Waziristan Agency",
                        shape_leng: 3.885018,
                        shape_area: 0.475396,
                        district_agency: "North Waziristan Agency",
                        status: "Agency",
                        cartodb_id: 53,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -18,
                            -190,
                            213,
                            214,
                            -204
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 57,
                        province_territory: "Federally Administered Tribal Areas",
                        districts: "South Waziristan Agency",
                        shape_leng: 4.831869,
                        shape_area: 0.596064,
                        district_agency: "South Waziristan Agency",
                        status: "Agency",
                        cartodb_id: 55,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -3,
                            -195,
                            -15,
                            215,
                            216,
                            -165,
                            -68,
                            -183,
                            217,
                            -214,
                            -189
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 58,
                        province_territory: "Gilgit-Baltistan",
                        districts: "Astor",
                        shape_leng: 4.400488,
                        shape_area: 0.507672,
                        district_agency: "Astor",
                        status: "District",
                        cartodb_id: 56,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            218,
                            219,
                            -89,
                            220,
                            221
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 59,
                        province_territory: "Gilgit-Baltistan",
                        districts: "Skardu",
                        shape_leng: 9.022782,
                        shape_area: 1.834008,
                        district_agency: "Skardu",
                        status: "District",
                        cartodb_id: 57,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            222,
                            223,
                            224,
                            -219,
                            225,
                            226
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 60,
                        province_territory: "Gilgit-Baltistan",
                        districts: "Diamir",
                        shape_leng: 4.906035,
                        shape_area: 0.692399,
                        district_agency: "Diamir",
                        status: "District",
                        cartodb_id: 58,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            227,
                            -221,
                            -88,
                            228,
                            229,
                            230
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 61,
                        province_territory: "Gilgit-Baltistan",
                        districts: "Ghanchi",
                        shape_leng: 5.130986,
                        shape_area: 0.859157,
                        district_agency: "Ghanchi",
                        status: "District",
                        cartodb_id: 59,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            231,
                            -224
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 62,
                        province_territory: "Gilgit-Baltistan",
                        districts: "Ghizer",
                        shape_leng: 6.224834,
                        shape_area: 1.208744,
                        district_agency: "Ghizer",
                        status: "District",
                        cartodb_id: 60,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            232,
                            233,
                            -231,
                            234,
                            235,
                            236,
                            237
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 63,
                        province_territory: "Gilgit-Baltistan",
                        districts: "Gilgit",
                        shape_leng: 3.826429,
                        shape_area: 0.400978,
                        district_agency: "Gilgit",
                        status: "District",
                        cartodb_id: 61,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -226,
                            -222,
                            -228,
                            -234,
                            238
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 64,
                        province_territory: "Gilgit-Baltistan",
                        districts: "Hunza Nagar",
                        shape_leng: 6.910112,
                        shape_area: 1.452916,
                        district_agency: "Hunza Nagar",
                        status: "District",
                        cartodb_id: 62,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -227,
                            -239,
                            -233,
                            239
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 66,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Abbottabad",
                        shape_leng: 2.52451,
                        shape_area: 0.160185,
                        district_agency: "Abbottabad",
                        status: "District",
                        cartodb_id: 64,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -45,
                            240,
                            241,
                            242,
                            -84
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 68,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Batagram",
                        shape_leng: 2.27903,
                        shape_area: 0.146275,
                        district_agency: "Batagram",
                        status: "District",
                        cartodb_id: 66,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            243,
                            244,
                            245,
                            246
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 69,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Buner",
                        shape_leng: 2.344769,
                        shape_area: 0.170621,
                        district_agency: "Buner",
                        status: "District",
                        cartodb_id: 67,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            247,
                            248,
                            249,
                            250,
                            251,
                            252,
                            253,
                            -37,
                            254,
                            255
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 71,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Chitral",
                        shape_leng: 8.32914,
                        shape_area: 1.472802,
                        district_agency: "Chitral",
                        status: "District",
                        cartodb_id: 69,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            256,
                            257,
                            258,
                            -237
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 100,
                        province_territory: "Punjab",
                        districts: "Gujrat",
                        shape_leng: 2.574443,
                        shape_area: 0.30476,
                        district_agency: "Gujrat",
                        status: "District",
                        cartodb_id: 98,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            259,
                            260,
                            261,
                            262,
                            -56,
                            -49
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 72,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Dera Ismail Khan",
                        shape_leng: 4.671693,
                        shape_area: 0.702401,
                        district_agency: "Dera Ismail Khan",
                        status: "District",
                        cartodb_id: 70,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -212,
                            263,
                            264,
                            -162,
                            -217,
                            265,
                            266,
                            267
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 74,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Haripur",
                        shape_leng: 3.286533,
                        shape_area: 0.194115,
                        district_agency: "Haripur",
                        status: "District",
                        cartodb_id: 72,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -242,
                            268,
                            -31,
                            269,
                            270,
                            271,
                            272,
                            -252,
                            273,
                            274,
                            275
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 75,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Karak",
                        shape_leng: 2.843576,
                        shape_area: 0.255925,
                        district_agency: "Karak",
                        status: "District",
                        cartodb_id: 73,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            276,
                            277,
                            -5,
                            -188,
                            -16,
                            278
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 76,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Kohat",
                        shape_leng: 4.332318,
                        shape_area: 0.289535,
                        district_agency: "Kohat",
                        status: "District",
                        cartodb_id: 74,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -193,
                            -198,
                            279,
                            280,
                            281,
                            -279,
                            -21,
                            -70
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 77,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Kohistan",
                        shape_leng: 4.834159,
                        shape_area: 0.747198,
                        district_agency: "Kohistan",
                        status: "District",
                        cartodb_id: 75,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            282,
                            -247,
                            283,
                            284,
                            -235,
                            -230
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 78,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Lakki Marwat",
                        shape_leng: 2.932319,
                        shape_area: 0.302895,
                        district_agency: "Lakki Marwat",
                        status: "District",
                        cartodb_id: 76,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -278,
                            285,
                            -267,
                            286,
                            -13,
                            -196,
                            -1
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 79,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Lower Dir",
                        shape_leng: 2.100559,
                        shape_area: 0.15815,
                        district_agency: "Lower Dir",
                        status: "District",
                        cartodb_id: 77,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            287,
                            288,
                            -187,
                            289,
                            290
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 80,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Malakand",
                        shape_leng: 1.842116,
                        shape_area: 0.088939,
                        district_agency: "Malakand",
                        status: "District",
                        cartodb_id: 78,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -255,
                            -40,
                            -36,
                            -206,
                            -184,
                            -289,
                            291
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 110,
                        province_territory: "Punjab",
                        districts: "Mandi Bahauddin",
                        shape_leng: 2.680468,
                        shape_area: 0.262889,
                        district_agency: "Mandi Bahauddin",
                        status: "District",
                        cartodb_id: 108,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            292,
                            293,
                            294,
                            295,
                            -262
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 81,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Mansehra",
                        shape_leng: 4.441027,
                        shape_area: 0.396497,
                        district_agency: "Mansehra",
                        status: "District",
                        cartodb_id: 79,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -87,
                            -85,
                            -243,
                            -276,
                            296,
                            -244,
                            -283,
                            -229
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 83,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Nowshera",
                        shape_leng: 2.344644,
                        shape_area: 0.168261,
                        district_agency: "Nowshera",
                        status: "District",
                        cartodb_id: 81,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            297,
                            298,
                            -280,
                            -197,
                            299,
                            -33,
                            -39
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 84,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Peshawar",
                        shape_leng: 1.73088,
                        shape_area: 0.124787,
                        district_agency: "Peshawar",
                        status: "District",
                        cartodb_id: 82,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -300,
                            -199,
                            -191,
                            -200,
                            -207,
                            -34
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 85,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Shangla",
                        shape_leng: 2.266357,
                        shape_area: 0.136431,
                        district_agency: "Shangla",
                        status: "District",
                        cartodb_id: 83,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -246,
                            300,
                            -249,
                            301,
                            302,
                            -284
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 86,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Swabi",
                        shape_leng: 2.406221,
                        shape_area: 0.144698,
                        district_agency: "Swabi",
                        status: "District",
                        cartodb_id: 84,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            303,
                            -272,
                            304,
                            -298,
                            -38,
                            -254
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 101,
                        province_territory: "Punjab",
                        districts: "Hafizabad",
                        shape_leng: 2.187459,
                        shape_area: 0.217407,
                        district_agency: "Hafizabad",
                        status: "District",
                        cartodb_id: 99,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            305,
                            306,
                            307,
                            -22,
                            308,
                            -294,
                            309
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 87,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Swat",
                        shape_leng: 4.617585,
                        shape_area: 0.529658,
                        district_agency: "Swat",
                        status: "District",
                        cartodb_id: 85,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -285,
                            -303,
                            310,
                            -256,
                            -292,
                            -288,
                            311,
                            -257,
                            -236
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 88,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Tank",
                        shape_leng: 2.056924,
                        shape_area: 0.160773,
                        district_agency: "Tank",
                        status: "District",
                        cartodb_id: 86,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -287,
                            -266,
                            -216,
                            -14
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 89,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Tor Ghar",
                        shape_leng: 1.325066,
                        shape_area: 0.04463,
                        district_agency: "Tor Ghar",
                        status: "District",
                        cartodb_id: 87,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -245,
                            -297,
                            -275,
                            312,
                            -250,
                            -301
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 90,
                        province_territory: "Khyber Pakhtunkhwa",
                        districts: "Upper Dir",
                        shape_leng: 3.608329,
                        shape_area: 0.369738,
                        district_agency: "Upper Dir",
                        status: "District",
                        cartodb_id: 88,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -312,
                            -291,
                            313,
                            -258
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 91,
                        province_territory: "Punjab",
                        districts: "Attock",
                        shape_leng: 5.198711,
                        shape_area: 0.670373,
                        district_agency: "Attock",
                        status: "District",
                        cartodb_id: 89,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -271,
                            314,
                            315,
                            316,
                            -281,
                            -299,
                            -305
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 102,
                        province_territory: "Punjab",
                        districts: "Jhang",
                        shape_leng: 5.240132,
                        shape_area: 0.600341,
                        district_agency: "Jhang",
                        status: "District",
                        cartodb_id: 100,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -24,
                            317,
                            318,
                            319,
                            320,
                            321,
                            -210,
                            322,
                            323
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 92,
                        province_territory: "Punjab",
                        districts: "Bahawalnagar",
                        shape_leng: 7.205736,
                        shape_area: 0.798843,
                        district_agency: "Bahawalnagar",
                        status: "District",
                        cartodb_id: 90,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            324,
                            325,
                            326,
                            327,
                            328
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 93,
                        province_territory: "Punjab",
                        districts: "Bahawalpur",
                        shape_leng: 9.36768,
                        shape_area: 2.215686,
                        district_agency: "Bahawalpur",
                        status: "District",
                        cartodb_id: 91,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -326,
                            329,
                            330,
                            331,
                            332,
                            333,
                            334
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 95,
                        province_territory: "Punjab",
                        districts: "Chakwal",
                        shape_leng: 5.047478,
                        shape_area: 0.625231,
                        district_agency: "Chakwal",
                        status: "District",
                        cartodb_id: 93,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            335,
                            336,
                            337,
                            338,
                            -316
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 97,
                        province_territory: "Punjab",
                        districts: "Dera Ghazi Khan",
                        shape_leng: 5.677864,
                        shape_area: 1.104619,
                        district_agency: "Dera Ghazi Khan",
                        status: "District",
                        cartodb_id: 95,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            339,
                            340,
                            341,
                            -98,
                            -169,
                            -163,
                            -265
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 98,
                        province_territory: "Punjab",
                        districts: "Faisalabad",
                        shape_leng: 4.712262,
                        shape_area: 0.563082,
                        district_agency: "Faisalabad",
                        status: "District",
                        cartodb_id: 96,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            342,
                            343,
                            344,
                            345,
                            -318,
                            -23,
                            -308
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 99,
                        province_territory: "Punjab",
                        districts: "Gujranwala",
                        shape_leng: 3.163331,
                        shape_area: 0.345989,
                        district_agency: "Gujranwala",
                        status: "District",
                        cartodb_id: 97,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            346,
                            -310,
                            -293,
                            -261,
                            347
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 103,
                        province_territory: "Punjab",
                        districts: "Jhelum",
                        shape_leng: 4.149911,
                        shape_area: 0.343704,
                        district_agency: "Jhelum",
                        status: "District",
                        cartodb_id: 101,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -263,
                            -296,
                            348,
                            349,
                            -337,
                            350,
                            -57
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 104,
                        province_territory: "Punjab",
                        districts: "Kasur",
                        shape_leng: 3.492153,
                        shape_area: 0.376719,
                        district_agency: "Kasur",
                        status: "District",
                        cartodb_id: 102,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            351,
                            352,
                            353,
                            -26
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 105,
                        province_territory: "Punjab",
                        districts: "Khanewal",
                        shape_leng: 4.341348,
                        shape_area: 0.408744,
                        district_agency: "Khanewal",
                        status: "District",
                        cartodb_id: 103,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            354,
                            355,
                            356,
                            357,
                            358,
                            359,
                            -320
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 106,
                        province_territory: "Punjab",
                        districts: "Khushab",
                        shape_leng: 4.260851,
                        shape_area: 0.631147,
                        district_agency: "Khushab",
                        status: "District",
                        cartodb_id: 104,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -350,
                            360,
                            -323,
                            -209,
                            361,
                            -338
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 108,
                        province_territory: "Punjab",
                        districts: "Layyah",
                        shape_leng: 4.112288,
                        shape_area: 0.605496,
                        district_agency: "Layyah",
                        status: "District",
                        cartodb_id: 106,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -322,
                            362,
                            -340,
                            -264,
                            -211
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 109,
                        province_territory: "Punjab",
                        districts: "Lodhran",
                        shape_leng: 3.694975,
                        shape_area: 0.248495,
                        district_agency: "Lodhran",
                        status: "District",
                        cartodb_id: 107,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            363,
                            -334,
                            364,
                            -358
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 111,
                        province_territory: "Punjab",
                        districts: "Mianwali",
                        shape_leng: 4.506156,
                        shape_area: 0.572989,
                        district_agency: "Mianwali",
                        status: "District",
                        cartodb_id: 109,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -317,
                            -339,
                            -362,
                            -213,
                            -268,
                            -286,
                            -277,
                            -282
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 112,
                        province_territory: "Punjab",
                        districts: "Multan",
                        shape_leng: 4.226099,
                        shape_area: 0.340893,
                        district_agency: "Multan",
                        status: "District",
                        cartodb_id: 110,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -359,
                            -365,
                            -333,
                            365
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 113,
                        province_territory: "Punjab",
                        districts: "Muzaffargarh",
                        shape_leng: 6.292793,
                        shape_area: 0.719198,
                        district_agency: "Muzaffargarh",
                        status: "District",
                        cartodb_id: 111,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -321,
                            -360,
                            -366,
                            -332,
                            366,
                            367,
                            -341,
                            -363
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 114,
                        province_territory: "Punjab",
                        districts: "Nankana Sahib",
                        shape_leng: 4.179815,
                        shape_area: 0.208192,
                        district_agency: "Nankana Sahib",
                        status: "District",
                        cartodb_id: 112,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -27,
                            -354,
                            368,
                            -343,
                            -307,
                            369
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 115,
                        province_territory: "Punjab",
                        districts: "Narowal",
                        shape_leng: 2.490748,
                        shape_area: 0.227294,
                        district_agency: "Narowal",
                        status: "District",
                        cartodb_id: 113,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            370,
                            371,
                            372
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 116,
                        province_territory: "Punjab",
                        districts: "Okara",
                        shape_leng: 4.235141,
                        shape_area: 0.417819,
                        district_agency: "Okara",
                        status: "District",
                        cartodb_id: 114,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            373,
                            -329,
                            374,
                            375,
                            -344,
                            -369,
                            -353
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 117,
                        province_territory: "Punjab",
                        districts: "Pakpattan",
                        shape_leng: 4.06506,
                        shape_area: 0.270477,
                        district_agency: "Pakpattan",
                        status: "District",
                        cartodb_id: 115,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -328,
                            376,
                            377,
                            -375
                        ]
                    ]
                },
                {
                    type: "MultiPolygon",
                    properties: {
                        objectid: 118,
                        province_territory: "Punjab",
                        districts: "Rahim Yar Khan",
                        shape_leng: 7.231248,
                        shape_area: 1.183237,
                        district_agency: "Rahim Yar Khan",
                        status: "District",
                        cartodb_id: 116,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            [
                                378,
                                379,
                                380
                            ]
                        ],
                        [
                            [
                                381,
                                382,
                                383,
                                -367,
                                -331
                            ]
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 119,
                        province_territory: "Punjab",
                        districts: "Rajanpur",
                        shape_leng: 6.405749,
                        shape_area: 1.16711,
                        district_agency: "Rajanpur",
                        status: "District",
                        cartodb_id: 117,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -368,
                            -384,
                            384,
                            385,
                            -111,
                            -156,
                            -99,
                            -342
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 120,
                        province_territory: "Punjab",
                        districts: "Rawalpindi",
                        shape_leng: 6.211592,
                        shape_area: 0.506857,
                        district_agency: "Rawalpindi",
                        status: "District",
                        cartodb_id: 118,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -44,
                            -91,
                            -7,
                            -81,
                            -58,
                            -351,
                            -336,
                            -315,
                            -270,
                            -30,
                            -269,
                            -241
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 121,
                        province_territory: "Punjab",
                        districts: "Sahiwal",
                        shape_leng: 5.071174,
                        shape_area: 0.303529,
                        district_agency: "Sahiwal",
                        status: "District",
                        cartodb_id: 119,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -378,
                            386,
                            -356,
                            387,
                            -345,
                            -376
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 122,
                        province_territory: "Punjab",
                        districts: "Sargodha",
                        shape_leng: 4.953184,
                        shape_area: 0.558525,
                        district_agency: "Sargodha",
                        status: "District",
                        cartodb_id: 120,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -295,
                            -309,
                            -25,
                            -324,
                            -361,
                            -349
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 123,
                        province_territory: "Punjab",
                        districts: "Sheikhupura",
                        shape_leng: 4.742158,
                        shape_area: 0.345331,
                        district_agency: "Sheikhupura",
                        status: "District",
                        cartodb_id: 121,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            388,
                            -28,
                            -370,
                            -306,
                            -347,
                            389,
                            -371
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 124,
                        province_territory: "Punjab",
                        districts: "Sialkot",
                        shape_leng: 3.121247,
                        shape_area: 0.294125,
                        district_agency: "Sialkot",
                        status: "District",
                        cartodb_id: 122,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -372,
                            -390,
                            -348,
                            -260,
                            -48,
                            390
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 125,
                        province_territory: "Punjab",
                        districts: "Toba Tek Singh",
                        shape_leng: 4.066464,
                        shape_area: 0.290667,
                        district_agency: "Toba Tek Singh",
                        status: "District",
                        cartodb_id: 123,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -388,
                            -355,
                            -319,
                            -346
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 126,
                        province_territory: "Punjab",
                        districts: "Vehari",
                        shape_leng: 5.242434,
                        shape_area: 0.420731,
                        district_agency: "Vehari",
                        status: "District",
                        cartodb_id: 124,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -327,
                            -335,
                            -364,
                            -357,
                            -387,
                            -377
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 127,
                        province_territory: "Sindh",
                        districts: "Badin",
                        shape_leng: 5.007686,
                        shape_area: 0.586687,
                        district_agency: "Badin",
                        status: "District",
                        cartodb_id: 125,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            391,
                            392,
                            393,
                            394,
                            395,
                            396
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 128,
                        province_territory: "Sindh",
                        districts: "Dadu",
                        shape_leng: 4.366533,
                        shape_area: 0.728184,
                        district_agency: "Dadu",
                        status: "District",
                        cartodb_id: 126,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            397,
                            398,
                            399,
                            -160,
                            -150,
                            400
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 129,
                        province_territory: "Sindh",
                        districts: "Ghotki",
                        shape_leng: 4.126686,
                        shape_area: 0.583194,
                        district_agency: "Ghotki",
                        status: "District",
                        cartodb_id: 127,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            401,
                            402,
                            403,
                            -380,
                            404,
                            405,
                            406,
                            -383
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 130,
                        province_territory: "Sindh",
                        districts: "Hyderabad",
                        shape_leng: 1.526741,
                        shape_area: 0.091366,
                        district_agency: "Hyderabad",
                        status: "District",
                        cartodb_id: 128,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            407,
                            408,
                            409,
                            410,
                            411
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 131,
                        province_territory: "Sindh",
                        districts: "Jacobabad",
                        shape_leng: 3.019249,
                        shape_area: 0.247358,
                        district_agency: "Jacobabad",
                        status: "District",
                        cartodb_id: 129,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            412,
                            413,
                            414,
                            415,
                            -120,
                            -61
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 139,
                        province_territory: "Sindh",
                        districts: "Mirpurkhas",
                        shape_leng: 3.506961,
                        shape_area: 0.310544,
                        district_agency: "Mirpurkhas",
                        status: "District",
                        cartodb_id: 137,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            416,
                            417,
                            418,
                            -397,
                            419,
                            420
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 132,
                        province_territory: "Sindh",
                        districts: "Jamshoro",
                        shape_leng: 5.594898,
                        shape_area: 1.010348,
                        district_agency: "Jamshoro",
                        status: "District",
                        cartodb_id: 130,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            421,
                            422,
                            -410,
                            423,
                            424,
                            -161,
                            -400,
                            425
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 133,
                        province_territory: "Sindh",
                        districts: "Kambar-Shahdadkot",
                        shape_leng: 3.255755,
                        shape_area: 0.511803,
                        district_agency: "Kambar-Shahdadkot",
                        status: "District",
                        cartodb_id: 131,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            426,
                            -401,
                            -149,
                            -125,
                            -121,
                            -416
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 134,
                        province_territory: "Sindh",
                        districts: "Karachi",
                        shape_leng: 5.688215,
                        shape_area: 0.344323,
                        district_agency: "Karachi",
                        status: "District",
                        cartodb_id: 132,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            427,
                            428,
                            -158,
                            -425
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 135,
                        province_territory: "Sindh",
                        districts: "Kashmore",
                        shape_leng: 2.880124,
                        shape_area: 0.240492,
                        district_agency: "Kashmore",
                        status: "District",
                        cartodb_id: 133,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            429,
                            -406,
                            430,
                            -381,
                            -404,
                            431,
                            432,
                            -413,
                            -60,
                            -108,
                            -386
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 136,
                        province_territory: "Sindh",
                        districts: "Khairpur",
                        shape_leng: 7.183996,
                        shape_area: 1.453221,
                        district_agency: "Khairpur",
                        status: "District",
                        cartodb_id: 134,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            433,
                            434,
                            435,
                            436,
                            437,
                            438,
                            439
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 137,
                        province_territory: "Sindh",
                        districts: "Larkana",
                        shape_leng: 2.857692,
                        shape_area: 0.175483,
                        district_agency: "Larkana",
                        status: "District",
                        cartodb_id: 135,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            440,
                            -439,
                            441,
                            -398,
                            -427,
                            -415
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 138,
                        province_territory: "Sindh",
                        districts: "Matiari",
                        shape_leng: 2.353773,
                        shape_area: 0.131188,
                        district_agency: "Matiari",
                        status: "District",
                        cartodb_id: 136,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            442,
                            -411,
                            -423,
                            443,
                            444
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 140,
                        province_territory: "Sindh",
                        districts: "Naushehro Feroze",
                        shape_leng: 2.756205,
                        shape_area: 0.275845,
                        district_agency: "Naushehro Feroze",
                        status: "District",
                        cartodb_id: 138,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            445,
                            -426,
                            -399,
                            -442,
                            -438
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 141,
                        province_territory: "Sindh",
                        districts: "Sanghar",
                        shape_leng: 6.550566,
                        shape_area: 0.915531,
                        district_agency: "Sanghar",
                        status: "District",
                        cartodb_id: 139,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            446,
                            447,
                            448,
                            -421,
                            449,
                            -445,
                            450,
                            -436
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 142,
                        province_territory: "Sindh",
                        districts: "Shaheed Benazirabad",
                        shape_leng: 3.235958,
                        shape_area: 0.414373,
                        district_agency: "Shaheed Benazirabad",
                        status: "District",
                        cartodb_id: 140,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -451,
                            -444,
                            -422,
                            -446,
                            -437
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 143,
                        province_territory: "Sindh",
                        districts: "Shikarpur",
                        shape_leng: 2.311923,
                        shape_area: 0.233996,
                        district_agency: "Shikarpur",
                        status: "District",
                        cartodb_id: 141,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -433,
                            451,
                            -440,
                            -441,
                            -414
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 144,
                        province_territory: "Sindh",
                        districts: "Sukkur",
                        shape_leng: 3.889808,
                        shape_area: 0.472977,
                        district_agency: "Sukkur",
                        status: "District",
                        cartodb_id: 142,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -403,
                            452,
                            -434,
                            -452,
                            -432
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 145,
                        province_territory: "Sindh",
                        districts: "Tando Allah Yar",
                        shape_leng: 1.792012,
                        shape_area: 0.138611,
                        district_agency: "Tando Allah Yar",
                        status: "District",
                        cartodb_id: 143,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -420,
                            -396,
                            453,
                            -412,
                            -443,
                            -450
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 146,
                        province_territory: "Sindh",
                        districts: "Tando Muhammad Khan",
                        shape_leng: 2.961682,
                        shape_area: 0.149958,
                        district_agency: "Tando Muhammad Khan",
                        status: "District",
                        cartodb_id: 144,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -395,
                            454,
                            455,
                            -408,
                            -454
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 147,
                        province_territory: "Sindh",
                        districts: "Tharparkar",
                        shape_leng: 8.072219,
                        shape_area: 1.757143,
                        district_agency: "Tharparkar",
                        status: "District",
                        cartodb_id: 145,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -392,
                            -419,
                            456,
                            457
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 148,
                        province_territory: "Sindh",
                        districts: "Thatta",
                        shape_leng: 11.229195,
                        shape_area: 0.680928,
                        district_agency: "Thatta",
                        status: "District",
                        cartodb_id: 146,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            -409,
                            -456,
                            458,
                            459,
                            -428,
                            -424
                        ]
                    ]
                },
                {
                    type: "MultiPolygon",
                    properties: {
                        objectid: 151,
                        province_territory: "Sindh",
                        districts: "Sajawal",
                        shape_leng: 6.703949,
                        shape_area: 0.772314,
                        district_agency: "Sajawal",
                        status: "District",
                        cartodb_id: 147,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            [
                                460
                            ]
                        ],
                        [
                            [
                                -394,
                                461,
                                -459,
                                -455
                            ]
                        ]
                    ]
                },
                {
                    type: "Polygon",
                    properties: {
                        objectid: 155,
                        province_territory: "Sindh",
                        districts: "Umerkot",
                        shape_leng: 4.812043,
                        shape_area: 0.492425,
                        district_agency: "Umerkot",
                        status: "District",
                        cartodb_id: 148,
                        created_at: "2015-07-06T09:49:19Z",
                        updated_at: "2015-07-06T09:49:19Z"
                    },
                    arcs: [
                        [
                            462,
                            -457,
                            -418,
                            463,
                            -448
                        ]
                    ]
                }
            ]
        }
    },
    arcs: [
        [
            [
                5994,
                6852
            ],
            [
                -48,
                5
            ],
            [
                -84,
                -61
            ],
            [
                -28,
                34
            ],
            [
                -90,
                -27
            ],
            [
                -9,
                -34
            ],
            [
                -71,
                -24
            ]
        ],
        [
            [
                5664,
                6745
            ],
            [
                -17,
                -16
            ]
        ],
        [
            [
                5647,
                6729
            ],
            [
                8,
                44
            ]
        ],
        [
            [
                5655,
                6773
            ],
            [
                14,
                77
            ],
            [
                1,
                3
            ],
            [
                68,
                136
            ],
            [
                122,
                3
            ],
            [
                39,
                27
            ]
        ],
        [
            [
                5899,
                7019
            ],
            [
                27,
                -51
            ],
            [
                44,
                -10
            ],
            [
                24,
                -106
            ]
        ],
        [
            [
                7749,
                7397
            ],
            [
                -22,
                -13
            ],
            [
                -144,
                49
            ],
            [
                -18,
                27
            ]
        ],
        [
            [
                7565,
                7460
            ],
            [
                -15,
                103
            ]
        ],
        [
            [
                7550,
                7563
            ],
            [
                98,
                -15
            ],
            [
                131,
                -105
            ],
            [
                -30,
                -46
            ]
        ],
        [
            [
                3797,
                5608
            ],
            [
                -23,
                -129
            ],
            [
                -92,
                -71
            ],
            [
                -45,
                26
            ],
            [
                -43,
                -39
            ],
            [
                -40,
                24
            ],
            [
                -11,
                -72
            ],
            [
                -40,
                -81
            ],
            [
                48,
                -125
            ],
            [
                -170,
                1
            ],
            [
                6,
                -75
            ],
            [
                -35,
                -155
            ],
            [
                6,
                -39
            ]
        ],
        [
            [
                3358,
                4873
            ],
            [
                -33,
                -48
            ],
            [
                -70,
                21
            ],
            [
                -66,
                -75
            ]
        ],
        [
            [
                3189,
                4771
            ],
            [
                46,
                117
            ],
            [
                22,
                138
            ],
            [
                -43,
                106
            ],
            [
                62,
                273
            ],
            [
                105,
                32
            ],
            [
                72,
                73
            ],
            [
                28,
                103
            ],
            [
                142,
                74
            ],
            [
                45,
                -6
            ],
            [
                7,
                -55
            ],
            [
                65,
                10
            ],
            [
                57,
                -28
            ]
        ],
        [
            [
                5595,
                6678
            ],
            [
                43,
                -48
            ],
            [
                85,
                21
            ]
        ],
        [
            [
                5723,
                6651
            ],
            [
                62,
                -95
            ]
        ],
        [
            [
                5785,
                6556
            ],
            [
                -72,
                29
            ],
            [
                -108,
                -159
            ],
            [
                -54,
                11
            ],
            [
                -68,
                -75
            ]
        ],
        [
            [
                5483,
                6362
            ],
            [
                -22,
                17
            ],
            [
                31,
                214
            ],
            [
                53,
                75
            ],
            [
                50,
                10
            ]
        ],
        [
            [
                6058,
                7243
            ],
            [
                -13,
                -25
            ],
            [
                -81,
                -6
            ],
            [
                -13,
                -34
            ],
            [
                -62,
                22
            ],
            [
                -17,
                -90
            ]
        ],
        [
            [
                5872,
                7110
            ],
            [
                -73,
                32
            ]
        ],
        [
            [
                5799,
                7142
            ],
            [
                -51,
                66
            ]
        ],
        [
            [
                5748,
                7208
            ],
            [
                -25,
                49
            ],
            [
                77,
                46
            ],
            [
                67,
                6
            ],
            [
                5,
                75
            ]
        ],
        [
            [
                5872,
                7384
            ],
            [
                154,
                -26
            ],
            [
                72,
                36
            ]
        ],
        [
            [
                6098,
                7394
            ],
            [
                12,
                -66
            ],
            [
                -52,
                -85
            ]
        ],
        [
            [
                7310,
                6120
            ],
            [
                37,
                -78
            ]
        ],
        [
            [
                7347,
                6042
            ],
            [
                -57,
                -61
            ],
            [
                -48,
                -87
            ],
            [
                -100,
                -72
            ],
            [
                -44,
                -88
            ]
        ],
        [
            [
                7098,
                5734
            ],
            [
                -62,
                -7
            ],
            [
                -147,
                131
            ],
            [
                -15,
                91
            ]
        ],
        [
            [
                6874,
                5949
            ],
            [
                74,
                73
            ],
            [
                62,
                16
            ],
            [
                138,
                69
            ],
            [
                60,
                68
            ],
            [
                102,
                -55
            ]
        ],
        [
            [
                8145,
                5711
            ],
            [
                -71,
                5
            ],
            [
                -12,
                -43
            ],
            [
                -213,
                -14
            ],
            [
                -23,
                28
            ]
        ],
        [
            [
                7826,
                5687
            ],
            [
                -10,
                45
            ]
        ],
        [
            [
                7816,
                5732
            ],
            [
                32,
                0
            ],
            [
                103,
                147
            ],
            [
                28,
                74
            ],
            [
                67,
                -19
            ],
            [
                69,
                55
            ]
        ],
        [
            [
                8115,
                5989
            ],
            [
                72,
                -188
            ],
            [
                -42,
                -90
            ]
        ],
        [
            [
                7311,
                7549
            ],
            [
                58,
                -22
            ],
            [
                51,
                -51
            ],
            [
                -34,
                -89
            ],
            [
                -57,
                -73
            ],
            [
                -66,
                130
            ],
            [
                -104,
                -68
            ],
            [
                -59,
                96
            ],
            [
                61,
                21
            ]
        ],
        [
            [
                7161,
                7493
            ],
            [
                124,
                47
            ],
            [
                3,
                5
            ],
            [
                23,
                4
            ]
        ],
        [
            [
                6516,
                7967
            ],
            [
                66,
                -167
            ]
        ],
        [
            [
                6582,
                7800
            ],
            [
                -76,
                -49
            ],
            [
                -56,
                13
            ]
        ],
        [
            [
                6450,
                7764
            ],
            [
                -138,
                97
            ]
        ],
        [
            [
                6312,
                7861
            ],
            [
                26,
                64
            ],
            [
                103,
                103
            ]
        ],
        [
            [
                6441,
                8028
            ],
            [
                30,
                7
            ],
            [
                45,
                -68
            ]
        ],
        [
            [
                6736,
                8078
            ],
            [
                13,
                -44
            ],
            [
                68,
                -11
            ],
            [
                1,
                -1
            ],
            [
                43,
                -21
            ],
            [
                1,
                0
            ],
            [
                9,
                -20
            ],
            [
                1,
                -1
            ],
            [
                0,
                -1
            ]
        ],
        [
            [
                6872,
                7979
            ],
            [
                -134,
                -131
            ],
            [
                -4,
                -85
            ]
        ],
        [
            [
                6734,
                7763
            ],
            [
                -98,
                -8
            ],
            [
                -54,
                45
            ]
        ],
        [
            [
                6516,
                7967
            ],
            [
                71,
                56
            ],
            [
                39,
                67
            ],
            [
                43,
                -27
            ],
            [
                67,
                15
            ]
        ],
        [
            [
                7625,
                7755
            ],
            [
                67,
                3
            ],
            [
                36,
                -50
            ],
            [
                40,
                11
            ]
        ],
        [
            [
                7768,
                7719
            ],
            [
                38,
                -43
            ],
            [
                -15,
                -40
            ]
        ],
        [
            [
                7791,
                7636
            ],
            [
                -33,
                -26
            ],
            [
                -99,
                1
            ],
            [
                -67,
                68
            ],
            [
                -40,
                -52
            ]
        ],
        [
            [
                7552,
                7627
            ],
            [
                -37,
                81
            ]
        ],
        [
            [
                7515,
                7708
            ],
            [
                -11,
                67
            ]
        ],
        [
            [
                7504,
                7775
            ],
            [
                104,
                -35
            ],
            [
                17,
                15
            ]
        ],
        [
            [
                7813,
                7134
            ],
            [
                1,
                -38
            ],
            [
                96,
                -68
            ],
            [
                17,
                -48
            ],
            [
                79,
                -13
            ],
            [
                -12,
                -79
            ],
            [
                57,
                -12
            ],
            [
                29,
                -84
            ]
        ],
        [
            [
                8080,
                6792
            ],
            [
                -12,
                0
            ]
        ],
        [
            [
                8068,
                6792
            ],
            [
                -42,
                -15
            ],
            [
                -33,
                36
            ],
            [
                -196,
                106
            ],
            [
                -26,
                45
            ],
            [
                -70,
                -6
            ]
        ],
        [
            [
                7701,
                6958
            ],
            [
                55,
                125
            ],
            [
                -6,
                37
            ]
        ],
        [
            [
                7750,
                7120
            ],
            [
                63,
                14
            ]
        ],
        [
            [
                7625,
                7755
            ],
            [
                -44,
                91
            ],
            [
                54,
                10
            ],
            [
                22,
                86
            ],
            [
                41,
                14
            ]
        ],
        [
            [
                7698,
                7956
            ],
            [
                47,
                8
            ],
            [
                46,
                -111
            ],
            [
                -55,
                -121
            ],
            [
                32,
                -13
            ]
        ],
        [
            [
                7839,
                7556
            ],
            [
                -48,
                80
            ]
        ],
        [
            [
                7768,
                7719
            ],
            [
                106,
                16
            ],
            [
                79,
                -30
            ],
            [
                8,
                -66
            ],
            [
                -55,
                -64
            ],
            [
                -67,
                -19
            ]
        ],
        [
            [
                7701,
                6958
            ],
            [
                -11,
                -4
            ]
        ],
        [
            [
                7690,
                6954
            ],
            [
                -106,
                65
            ],
            [
                23,
                90
            ],
            [
                -26,
                29
            ]
        ],
        [
            [
                7581,
                7138
            ],
            [
                -31,
                88
            ],
            [
                33,
                66
            ]
        ],
        [
            [
                7583,
                7292
            ],
            [
                44,
                -1
            ],
            [
                39,
                -83
            ],
            [
                84,
                -88
            ]
        ],
        [
            [
                4907,
                3542
            ],
            [
                -124,
                -8
            ]
        ],
        [
            [
                4783,
                3534
            ],
            [
                -47,
                1
            ],
            [
                -8,
                0
            ],
            [
                -61,
                -1
            ],
            [
                -9,
                0
            ],
            [
                -114,
                1
            ],
            [
                -8,
                0
            ],
            [
                -42,
                -17
            ]
        ],
        [
            [
                4494,
                3518
            ],
            [
                -30,
                115
            ]
        ],
        [
            [
                4464,
                3633
            ],
            [
                -1,
                58
            ],
            [
                2,
                3
            ],
            [
                38,
                22
            ]
        ],
        [
            [
                4503,
                3716
            ],
            [
                12,
                -20
            ],
            [
                184,
                -122
            ],
            [
                208,
                -32
            ]
        ],
        [
            [
                5400,
                6122
            ],
            [
                -10,
                -261
            ],
            [
                47,
                -28
            ],
            [
                20,
                -82
            ]
        ],
        [
            [
                5457,
                5751
            ],
            [
                -14,
                -70
            ],
            [
                -59,
                -42
            ],
            [
                -63,
                34
            ],
            [
                -62,
                -15
            ]
        ],
        [
            [
                5259,
                5658
            ],
            [
                2,
                39
            ],
            [
                -91,
                23
            ],
            [
                -23,
                123
            ],
            [
                54,
                239
            ],
            [
                -45,
                86
            ]
        ],
        [
            [
                5156,
                6168
            ],
            [
                79,
                87
            ],
            [
                103,
                21
            ],
            [
                -31,
                -58
            ],
            [
                48,
                -31
            ],
            [
                -15,
                -67
            ],
            [
                60,
                2
            ]
        ],
        [
            [
                6229,
                7519
            ],
            [
                27,
                -85
            ]
        ],
        [
            [
                6256,
                7434
            ],
            [
                -38,
                -19
            ],
            [
                -71,
                72
            ],
            [
                -53,
                11
            ],
            [
                4,
                -104
            ]
        ],
        [
            [
                5872,
                7384
            ],
            [
                0,
                46
            ],
            [
                -78,
                30
            ],
            [
                -6,
                67
            ]
        ],
        [
            [
                5788,
                7527
            ],
            [
                53,
                -27
            ],
            [
                170,
                42
            ],
            [
                -7,
                30
            ],
            [
                141,
                0
            ],
            [
                84,
                -53
            ]
        ],
        [
            [
                4342,
                4240
            ],
            [
                98,
                -83
            ],
            [
                86,
                -35
            ]
        ],
        [
            [
                4526,
                4122
            ],
            [
                -113,
                7
            ],
            [
                -5,
                -49
            ],
            [
                56,
                -83
            ]
        ],
        [
            [
                4464,
                3997
            ],
            [
                -74,
                -49
            ],
            [
                -12,
                -93
            ],
            [
                -128,
                -61
            ],
            [
                0,
                -42
            ],
            [
                -94,
                -42
            ],
            [
                3,
                -42
            ],
            [
                -56,
                -1
            ]
        ],
        [
            [
                4103,
                3667
            ],
            [
                -54,
                172
            ]
        ],
        [
            [
                4049,
                3839
            ],
            [
                -21,
                51
            ],
            [
                54,
                138
            ],
            [
                -4,
                42
            ],
            [
                134,
                -43
            ],
            [
                14,
                42
            ],
            [
                1,
                171
            ]
        ],
        [
            [
                4227,
                4240
            ],
            [
                61,
                -25
            ],
            [
                54,
                25
            ]
        ],
        [
            [
                7749,
                7397
            ],
            [
                66,
                -5
            ]
        ],
        [
            [
                7815,
                7392
            ],
            [
                43,
                -16
            ],
            [
                53,
                -68
            ],
            [
                4,
                -74
            ],
            [
                -49,
                -84
            ],
            [
                -53,
                -16
            ]
        ],
        [
            [
                7583,
                7292
            ],
            [
                0,
                81
            ],
            [
                -34,
                41
            ],
            [
                16,
                46
            ]
        ],
        [
            [
                7594,
                8121
            ],
            [
                70,
                -42
            ],
            [
                4,
                -95
            ]
        ],
        [
            [
                7668,
                7984
            ],
            [
                30,
                -28
            ]
        ],
        [
            [
                7504,
                7775
            ],
            [
                -17,
                125
            ],
            [
                -40,
                74
            ]
        ],
        [
            [
                7447,
                7974
            ],
            [
                27,
                135
            ],
            [
                82,
                25
            ],
            [
                38,
                -13
            ]
        ],
        [
            [
                8320,
                8203
            ],
            [
                -115,
                15
            ],
            [
                -55,
                52
            ],
            [
                -165,
                21
            ],
            [
                -91,
                -77
            ],
            [
                -112,
                1
            ],
            [
                -8,
                -92
            ],
            [
                -29,
                -58
            ],
            [
                -77,
                -81
            ]
        ],
        [
            [
                7594,
                8121
            ],
            [
                10,
                85
            ],
            [
                59,
                86
            ],
            [
                134,
                53
            ],
            [
                61,
                115
            ],
            [
                16,
                74
            ]
        ],
        [
            [
                7874,
                8534
            ],
            [
                79,
                -63
            ],
            [
                75,
                16
            ],
            [
                38,
                53
            ]
        ],
        [
            [
                8066,
                8540
            ],
            [
                81,
                -84
            ],
            [
                17,
                -75
            ],
            [
                71,
                -43
            ],
            [
                85,
                -135
            ]
        ],
        [
            [
                7839,
                7556
            ],
            [
                -60,
                -70
            ],
            [
                36,
                -94
            ]
        ],
        [
            [
                7550,
                7563
            ],
            [
                2,
                64
            ]
        ],
        [
            [
                3196,
                2078
            ],
            [
                -53,
                -153
            ],
            [
                23,
                -86
            ],
            [
                35,
                -232
            ],
            [
                -37,
                -118
            ],
            [
                -76,
                -161
            ],
            [
                -30,
                -17
            ],
            [
                -65,
                32
            ],
            [
                -96,
                14
            ],
            [
                -121,
                -61
            ],
            [
                -4,
                92
            ],
            [
                -43,
                79
            ],
            [
                -76,
                -53
            ],
            [
                -81,
                -26
            ]
        ],
        [
            [
                2572,
                1388
            ],
            [
                -18,
                34
            ],
            [
                -82,
                -25
            ],
            [
                -331,
                -57
            ],
            [
                -72,
                -45
            ],
            [
                -44,
                23
            ],
            [
                -85,
                3
            ],
            [
                18,
                69
            ]
        ],
        [
            [
                1958,
                1390
            ],
            [
                22,
                36
            ],
            [
                86,
                24
            ],
            [
                -45,
                83
            ],
            [
                59,
                188
            ],
            [
                75,
                47
            ],
            [
                -2,
                83
            ],
            [
                -32,
                40
            ]
        ],
        [
            [
                2121,
                1891
            ],
            [
                1,
                101
            ],
            [
                281,
                2
            ],
            [
                -2,
                62
            ],
            [
                127,
                134
            ],
            [
                101,
                129
            ],
            [
                23,
                69
            ]
        ],
        [
            [
                2652,
                2388
            ],
            [
                6,
                66
            ],
            [
                114,
                205
            ],
            [
                32,
                119
            ]
        ],
        [
            [
                2804,
                2778
            ],
            [
                111,
                -45
            ],
            [
                29,
                -37
            ],
            [
                50,
                -126
            ],
            [
                52,
                5
            ],
            [
                31,
                -35
            ],
            [
                -30,
                -196
            ],
            [
                -42,
                -168
            ],
            [
                2,
                -52
            ],
            [
                65,
                -125
            ],
            [
                23,
                -5
            ],
            [
                14,
                89
            ],
            [
                49,
                62
            ],
            [
                38,
                -67
            ]
        ],
        [
            [
                5403,
                4948
            ],
            [
                68,
                -45
            ],
            [
                -47,
                -62
            ],
            [
                -10,
                -77
            ],
            [
                -61,
                -133
            ]
        ],
        [
            [
                5353,
                4631
            ],
            [
                -53,
                -97
            ],
            [
                -85,
                -62
            ]
        ],
        [
            [
                5215,
                4472
            ],
            [
                -60,
                15
            ],
            [
                -172,
                -70
            ],
            [
                -98,
                55
            ],
            [
                -18,
                31
            ],
            [
                80,
                69
            ],
            [
                115,
                57
            ],
            [
                53,
                81
            ],
            [
                -44,
                30
            ]
        ],
        [
            [
                5071,
                4740
            ],
            [
                20,
                42
            ],
            [
                93,
                28
            ],
            [
                87,
                165
            ]
        ],
        [
            [
                5271,
                4975
            ],
            [
                37,
                -51
            ],
            [
                95,
                24
            ]
        ],
        [
            [
                2529,
                4372
            ],
            [
                78,
                -103
            ],
            [
                128,
                -284
            ]
        ],
        [
            [
                2735,
                3985
            ],
            [
                -50,
                -37
            ],
            [
                -14,
                -12
            ],
            [
                -124,
                -115
            ],
            [
                -71,
                -14
            ],
            [
                -76,
                -84
            ]
        ],
        [
            [
                2400,
                3723
            ],
            [
                -1,
                0
            ]
        ],
        [
            [
                2399,
                3723
            ],
            [
                -60,
                9
            ],
            [
                -186,
                -62
            ],
            [
                -54,
                -66
            ],
            [
                -167,
                -42
            ],
            [
                -71,
                -63
            ],
            [
                -50,
                -3
            ],
            [
                -59,
                -55
            ],
            [
                -335,
                -21
            ],
            [
                -33,
                -70
            ],
            [
                -83,
                -55
            ],
            [
                -5,
                -6
            ],
            [
                -15,
                -14
            ],
            [
                -7,
                -7
            ],
            [
                -3,
                -3
            ],
            [
                -9,
                -10
            ],
            [
                -39,
                -41
            ],
            [
                -21,
                -30
            ],
            [
                -1,
                0
            ],
            [
                -6,
                -9
            ],
            [
                -11,
                -14
            ],
            [
                -40,
                -31
            ]
        ],
        [
            [
                1144,
                3130
            ],
            [
                -20,
                107
            ],
            [
                11,
                186
            ],
            [
                -116,
                -19
            ],
            [
                -90,
                113
            ],
            [
                -86,
                42
            ],
            [
                -107,
                16
            ],
            [
                -94,
                48
            ],
            [
                -91,
                68
            ],
            [
                -74,
                98
            ],
            [
                -105,
                177
            ],
            [
                -45,
                139
            ],
            [
                -42,
                66
            ],
            [
                9,
                49
            ],
            [
                -107,
                115
            ],
            [
                -187,
                269
            ],
            [
                460,
                -177
            ],
            [
                478,
                -177
            ],
            [
                541,
                66
            ],
            [
                134,
                10
            ],
            [
                263,
                -54
            ],
            [
                43,
                -30
            ],
            [
                28,
                54
            ],
            [
                68,
                55
            ],
            [
                132,
                36
            ],
            [
                86,
                7
            ],
            [
                258,
                -34
            ],
            [
                38,
                12
            ]
        ],
        [
            [
                5047,
                3546
            ],
            [
                -140,
                -4
            ]
        ],
        [
            [
                4503,
                3716
            ],
            [
                -20,
                218
            ],
            [
                -19,
                63
            ]
        ],
        [
            [
                4526,
                4122
            ],
            [
                103,
                35
            ],
            [
                155,
                -31
            ],
            [
                57,
                29
            ],
            [
                102,
                -1
            ],
            [
                51,
                64
            ],
            [
                114,
                76
            ],
            [
                18,
                51
            ],
            [
                -42,
                21
            ],
            [
                54,
                88
            ],
            [
                67,
                5
            ]
        ],
        [
            [
                5205,
                4459
            ],
            [
                -22,
                -31
            ],
            [
                -17,
                -125
            ],
            [
                62,
                -72
            ],
            [
                -17,
                -33
            ],
            [
                63,
                -61
            ],
            [
                -23,
                -110
            ],
            [
                -33,
                -18
            ],
            [
                -45,
                -83
            ],
            [
                -51,
                -47
            ],
            [
                26,
                -89
            ],
            [
                -67,
                -131
            ],
            [
                -57,
                -32
            ],
            [
                23,
                -81
            ]
        ],
        [
            [
                536,
                1583
            ],
            [
                16,
                -87
            ],
            [
                91,
                -30
            ],
            [
                31,
                39
            ],
            [
                38,
                -26
            ],
            [
                22,
                -77
            ],
            [
                -35,
                -50
            ],
            [
                42,
                -26
            ],
            [
                167,
                60
            ],
            [
                237,
                9
            ],
            [
                107,
                23
            ],
            [
                31,
                -50
            ],
            [
                190,
                -29
            ],
            [
                67,
                -63
            ],
            [
                186,
                113
            ],
            [
                130,
                40
            ],
            [
                102,
                -39
            ]
        ],
        [
            [
                2572,
                1388
            ],
            [
                1,
                -117
            ],
            [
                20,
                -42
            ]
        ],
        [
            [
                2593,
                1229
            ],
            [
                -48,
                -28
            ],
            [
                -96,
                14
            ],
            [
                -146,
                -3
            ],
            [
                -86,
                -68
            ],
            [
                -37,
                30
            ],
            [
                -85,
                -23
            ],
            [
                -105,
                59
            ],
            [
                -165,
                13
            ],
            [
                -162,
                35
            ],
            [
                -82,
                -28
            ],
            [
                -37,
                -59
            ],
            [
                5,
                -51
            ],
            [
                -204,
                45
            ],
            [
                -79,
                -36
            ],
            [
                -208,
                38
            ],
            [
                -97,
                -6
            ],
            [
                -82,
                -62
            ],
            [
                -83,
                34
            ],
            [
                -78,
                -20
            ],
            [
                8,
                -69
            ],
            [
                -133,
                5
            ],
            [
                -18,
                -44
            ],
            [
                -72,
                7
            ],
            [
                36,
                77
            ],
            [
                -51,
                36
            ],
            [
                -53,
                -7
            ],
            [
                27,
                76
            ],
            [
                20,
                375
            ],
            [
                54,
                14
            ]
        ],
        [
            [
                4360,
                4837
            ],
            [
                120,
                -118
            ]
        ],
        [
            [
                4480,
                4719
            ],
            [
                -7,
                -60
            ]
        ],
        [
            [
                4473,
                4659
            ],
            [
                -75,
                -3
            ],
            [
                -124,
                -32
            ],
            [
                -21,
                -54
            ],
            [
                -31,
                17
            ],
            [
                21,
                90
            ],
            [
                -23,
                46
            ],
            [
                -116,
                -3
            ],
            [
                8,
                34
            ],
            [
                -70,
                47
            ],
            [
                -66,
                -25
            ],
            [
                -26,
                -46
            ],
            [
                -52,
                16
            ]
        ],
        [
            [
                3898,
                4746
            ],
            [
                -11,
                93
            ],
            [
                -80,
                23
            ],
            [
                1,
                94
            ]
        ],
        [
            [
                3808,
                4956
            ],
            [
                125,
                -14
            ],
            [
                55,
                -28
            ],
            [
                104,
                59
            ],
            [
                66,
                -9
            ],
            [
                137,
                -62
            ],
            [
                65,
                -65
            ]
        ],
        [
            [
                4494,
                3518
            ],
            [
                -30,
                -51
            ],
            [
                -5,
                -12
            ],
            [
                -38,
                -39
            ],
            [
                -10,
                -3
            ],
            [
                -51,
                -19
            ],
            [
                -80,
                -79
            ],
            [
                -12,
                -12
            ],
            [
                -20,
                -20
            ],
            [
                -1,
                -1
            ],
            [
                -63,
                -73
            ]
        ],
        [
            [
                4184,
                3209
            ],
            [
                -144,
                -45
            ]
        ],
        [
            [
                4040,
                3164
            ],
            [
                -25,
                160
            ],
            [
                104,
                41
            ]
        ],
        [
            [
                4119,
                3365
            ],
            [
                88,
                26
            ],
            [
                71,
                76
            ],
            [
                5,
                35
            ],
            [
                74,
                40
            ],
            [
                106,
                8
            ],
            [
                1,
                83
            ]
        ],
        [
            [
                4103,
                3667
            ],
            [
                7,
                -40
            ],
            [
                -27,
                -95
            ],
            [
                36,
                -167
            ]
        ],
        [
            [
                4040,
                3164
            ],
            [
                -145,
                -31
            ],
            [
                -19,
                13
            ]
        ],
        [
            [
                3876,
                3146
            ],
            [
                -1,
                238
            ],
            [
                -39,
                132
            ],
            [
                -70,
                67
            ],
            [
                16,
                165
            ]
        ],
        [
            [
                3782,
                3748
            ],
            [
                57,
                -7
            ],
            [
                65,
                39
            ],
            [
                35,
                -35
            ],
            [
                20,
                83
            ],
            [
                90,
                11
            ]
        ],
        [
            [
                3865,
                4648
            ],
            [
                38,
                -17
            ],
            [
                41,
                -137
            ],
            [
                161,
                -88
            ],
            [
                19,
                -101
            ],
            [
                38,
                -24
            ],
            [
                0,
                -73
            ],
            [
                65,
                32
            ]
        ],
        [
            [
                3782,
                3748
            ],
            [
                23,
                105
            ]
        ],
        [
            [
                3805,
                3853
            ],
            [
                28,
                19
            ],
            [
                42,
                146
            ],
            [
                43,
                101
            ],
            [
                -13,
                124
            ],
            [
                -56,
                53
            ],
            [
                -12,
                57
            ],
            [
                -122,
                -11
            ]
        ],
        [
            [
                3715,
                4342
            ],
            [
                90,
                143
            ],
            [
                -77,
                73
            ],
            [
                -13,
                107
            ]
        ],
        [
            [
                3715,
                4665
            ],
            [
                68,
                25
            ],
            [
                23,
                -37
            ],
            [
                59,
                -5
            ]
        ],
        [
            [
                3805,
                3853
            ],
            [
                -298,
                -31
            ],
            [
                -87,
                -173
            ],
            [
                -66,
                -25
            ],
            [
                -52,
                -91
            ],
            [
                53,
                -107
            ],
            [
                -11,
                -88
            ],
            [
                -144,
                -86
            ],
            [
                -76,
                -68
            ],
            [
                -101,
                -17
            ]
        ],
        [
            [
                3023,
                3167
            ],
            [
                2,
                77
            ],
            [
                -47,
                20
            ],
            [
                11,
                78
            ],
            [
                -43,
                31
            ],
            [
                35,
                107
            ]
        ],
        [
            [
                2981,
                3480
            ],
            [
                60,
                88
            ],
            [
                56,
                119
            ],
            [
                4,
                66
            ],
            [
                -46,
                7
            ],
            [
                64,
                155
            ],
            [
                14,
                102
            ],
            [
                -23,
                75
            ],
            [
                33,
                114
            ]
        ],
        [
            [
                3143,
                4206
            ],
            [
                18,
                41
            ]
        ],
        [
            [
                3161,
                4247
            ],
            [
                89,
                -35
            ],
            [
                111,
                187
            ],
            [
                63,
                21
            ],
            [
                -11,
                -115
            ],
            [
                28,
                -11
            ],
            [
                74,
                85
            ],
            [
                42,
                -9
            ],
            [
                -25,
                -88
            ],
            [
                146,
                1
            ],
            [
                37,
                59
            ]
        ],
        [
            [
                1304,
                2198
            ],
            [
                35,
                -46
            ],
            [
                -23,
                -44
            ],
            [
                62,
                -61
            ],
            [
                128,
                49
            ],
            [
                108,
                -110
            ],
            [
                8,
                -70
            ],
            [
                123,
                38
            ],
            [
                45,
                -9
            ],
            [
                110,
                -115
            ],
            [
                102,
                15
            ],
            [
                72,
                73
            ],
            [
                47,
                -27
            ]
        ],
        [
            [
                536,
                1583
            ],
            [
                32,
                264
            ],
            [
                22,
                56
            ],
            [
                113,
                52
            ],
            [
                40,
                48
            ],
            [
                92,
                -16
            ],
            [
                -15,
                65
            ],
            [
                34,
                62
            ],
            [
                72,
                29
            ],
            [
                103,
                13
            ],
            [
                101,
                50
            ],
            [
                174,
                -8
            ]
        ],
        [
            [
                2981,
                3480
            ],
            [
                -87,
                -31
            ],
            [
                -3,
                -1
            ],
            [
                -3,
                -1
            ],
            [
                -167,
                -99
            ],
            [
                -56,
                -52
            ],
            [
                -46,
                72
            ],
            [
                -2,
                148
            ],
            [
                -40,
                77
            ],
            [
                -88,
                -33
            ],
            [
                -38,
                -12
            ],
            [
                -22,
                127
            ],
            [
                -13,
                28
            ],
            [
                -9,
                13
            ],
            [
                -8,
                7
            ],
            [
                1,
                0
            ]
        ],
        [
            [
                2400,
                3723
            ],
            [
                0,
                0
            ]
        ],
        [
            [
                2735,
                3985
            ],
            [
                67,
                -2
            ],
            [
                93,
                85
            ],
            [
                72,
                -12
            ],
            [
                85,
                51
            ],
            [
                53,
                114
            ],
            [
                38,
                -15
            ]
        ],
        [
            [
                5165,
                5042
            ],
            [
                106,
                -67
            ]
        ],
        [
            [
                5071,
                4740
            ],
            [
                -41,
                -27
            ],
            [
                -92,
                0
            ],
            [
                -83,
                -24
            ],
            [
                -57,
                39
            ],
            [
                -83,
                -59
            ],
            [
                -148,
                -25
            ],
            [
                -87,
                75
            ]
        ],
        [
            [
                4360,
                4837
            ],
            [
                74,
                -8
            ],
            [
                77,
                19
            ],
            [
                62,
                77
            ],
            [
                -193,
                124
            ],
            [
                -9,
                53
            ],
            [
                -115,
                10
            ],
            [
                -50,
                -41
            ],
            [
                -101,
                12
            ],
            [
                -47,
                67
            ]
        ],
        [
            [
                4058,
                5150
            ],
            [
                -1,
                19
            ]
        ],
        [
            [
                4057,
                5169
            ],
            [
                68,
                -2
            ],
            [
                74,
                30
            ],
            [
                12,
                -40
            ],
            [
                113,
                7
            ],
            [
                63,
                -49
            ],
            [
                66,
                29
            ],
            [
                58,
                -38
            ],
            [
                108,
                30
            ],
            [
                74,
                -48
            ],
            [
                150,
                62
            ],
            [
                72,
                73
            ]
        ],
        [
            [
                4915,
                5223
            ],
            [
                50,
                -48
            ],
            [
                60,
                -4
            ],
            [
                140,
                -129
            ]
        ],
        [
            [
                3876,
                3146
            ],
            [
                -34,
                -138
            ],
            [
                -53,
                -58
            ],
            [
                -39,
                -86
            ],
            [
                -5,
                -64
            ]
        ],
        [
            [
                3745,
                2800
            ],
            [
                -28,
                -132
            ],
            [
                20,
                -153
            ],
            [
                -16,
                -140
            ],
            [
                7,
                -82
            ],
            [
                -13,
                -86
            ]
        ],
        [
            [
                3715,
                2207
            ],
            [
                -86,
                -51
            ],
            [
                4,
                -59
            ],
            [
                96,
                -173
            ],
            [
                -17,
                -211
            ],
            [
                9,
                -104
            ],
            [
                -24,
                -80
            ],
            [
                -57,
                -8
            ],
            [
                -57,
                189
            ],
            [
                -43,
                198
            ],
            [
                -30,
                58
            ],
            [
                -15,
                102
            ],
            [
                -168,
                -30
            ],
            [
                -131,
                40
            ]
        ],
        [
            [
                2804,
                2778
            ],
            [
                70,
                83
            ],
            [
                -11,
                40
            ],
            [
                70,
                172
            ],
            [
                90,
                94
            ]
        ],
        [
            [
                4057,
                5169
            ],
            [
                -22,
                53
            ],
            [
                -103,
                -14
            ],
            [
                -11,
                150
            ],
            [
                61,
                20
            ],
            [
                99,
                95
            ],
            [
                45,
                69
            ],
            [
                -136,
                34
            ],
            [
                -84,
                52
            ]
        ],
        [
            [
                3906,
                5628
            ],
            [
                104,
                32
            ],
            [
                101,
                60
            ],
            [
                -29,
                44
            ],
            [
                -64,
                -11
            ],
            [
                -38,
                100
            ],
            [
                78,
                -11
            ],
            [
                70,
                58
            ]
        ],
        [
            [
                4128,
                5900
            ],
            [
                120,
                -76
            ],
            [
                130,
                -126
            ],
            [
                85,
                -32
            ],
            [
                127,
                54
            ],
            [
                36,
                -18
            ],
            [
                6,
                -107
            ],
            [
                23,
                -68
            ],
            [
                58,
                41
            ],
            [
                184,
                -7
            ],
            [
                62,
                -41
            ],
            [
                53,
                -77
            ],
            [
                -31,
                -109
            ],
            [
                -116,
                -62
            ],
            [
                50,
                -49
            ]
        ],
        [
            [
                5215,
                4472
            ],
            [
                -10,
                -13
            ]
        ],
        [
            [
                4342,
                4240
            ],
            [
                -47,
                33
            ],
            [
                56,
                124
            ],
            [
                43,
                32
            ],
            [
                99,
                -3
            ],
            [
                84,
                81
            ],
            [
                -3,
                72
            ],
            [
                -98,
                57
            ],
            [
                -3,
                23
            ]
        ],
        [
            [
                3832,
                1450
            ],
            [
                -46,
                -87
            ],
            [
                -48,
                -53
            ],
            [
                0,
                -43
            ],
            [
                -43,
                -115
            ],
            [
                -49,
                -59
            ],
            [
                0,
                -46
            ],
            [
                -55,
                -65
            ],
            [
                -75,
                -33
            ],
            [
                -51,
                -57
            ]
        ],
        [
            [
                3465,
                892
            ],
            [
                0,
                142
            ],
            [
                20,
                85
            ],
            [
                -35,
                56
            ],
            [
                -69,
                59
            ],
            [
                19,
                56
            ],
            [
                -21,
                79
            ],
            [
                -64,
                57
            ],
            [
                -31,
                -18
            ],
            [
                -59,
                30
            ],
            [
                -53,
                -16
            ],
            [
                -47,
                -48
            ],
            [
                -6,
                -48
            ],
            [
                131,
                58
            ],
            [
                92,
                -69
            ],
            [
                5,
                -40
            ],
            [
                -109,
                46
            ],
            [
                -117,
                -12
            ],
            [
                -101,
                -28
            ],
            [
                -83,
                0
            ],
            [
                -104,
                -47
            ],
            [
                -161,
                30
            ],
            [
                -61,
                -4
            ],
            [
                -18,
                -31
            ]
        ],
        [
            [
                3715,
                2207
            ],
            [
                32,
                -136
            ],
            [
                52,
                -93
            ],
            [
                56,
                -147
            ],
            [
                32,
                -47
            ]
        ],
        [
            [
                3887,
                1784
            ],
            [
                -6,
                -220
            ],
            [
                -49,
                -114
            ]
        ],
        [
            [
                5552,
                6063
            ],
            [
                -4,
                -52
            ],
            [
                43,
                -50
            ],
            [
                71,
                -313
            ],
            [
                15,
                -11
            ]
        ],
        [
            [
                5677,
                5637
            ],
            [
                -11,
                -34
            ],
            [
                -69,
                -26
            ]
        ],
        [
            [
                5597,
                5577
            ],
            [
                -15,
                27
            ],
            [
                10,
                147
            ],
            [
                -11,
                82
            ],
            [
                -124,
                -82
            ]
        ],
        [
            [
                5400,
                6122
            ],
            [
                152,
                -59
            ]
        ],
        [
            [
                3161,
                4247
            ],
            [
                71,
                185
            ],
            [
                -20,
                86
            ],
            [
                15,
                74
            ],
            [
                -27,
                11
            ]
        ],
        [
            [
                3200,
                4603
            ],
            [
                6,
                9
            ]
        ],
        [
            [
                3206,
                4612
            ],
            [
                98,
                -14
            ],
            [
                43,
                -33
            ],
            [
                106,
                246
            ],
            [
                28,
                7
            ],
            [
                62,
                -59
            ],
            [
                67,
                -17
            ],
            [
                8,
                -50
            ],
            [
                97,
                -27
            ]
        ],
        [
            [
                5597,
                5577
            ],
            [
                -21,
                -211
            ],
            [
                -22,
                -69
            ],
            [
                -75,
                -69
            ],
            [
                -2,
                -78
            ],
            [
                -52,
                -110
            ],
            [
                -22,
                -92
            ]
        ],
        [
            [
                5165,
                5042
            ],
            [
                -20,
                67
            ],
            [
                -35,
                2
            ],
            [
                36,
                91
            ],
            [
                1,
                64
            ],
            [
                62,
                73
            ],
            [
                49,
                104
            ],
            [
                -13,
                146
            ],
            [
                14,
                69
            ]
        ],
        [
            [
                2529,
                4372
            ],
            [
                387,
                129
            ],
            [
                284,
                102
            ]
        ],
        [
            [
                1304,
                2198
            ],
            [
                59,
                5
            ],
            [
                13,
                146
            ],
            [
                50,
                16
            ],
            [
                -12,
                163
            ],
            [
                37,
                42
            ],
            [
                -41,
                52
            ]
        ],
        [
            [
                1410,
                2622
            ],
            [
                101,
                -10
            ],
            [
                182,
                30
            ],
            [
                6,
                1
            ],
            [
                5,
                1
            ],
            [
                49,
                13
            ],
            [
                46,
                -80
            ],
            [
                56,
                -45
            ],
            [
                76,
                -13
            ],
            [
                121,
                125
            ],
            [
                58,
                37
            ],
            [
                35,
                -65
            ],
            [
                9,
                -26
            ],
            [
                1,
                -8
            ],
            [
                -1,
                -2
            ],
            [
                -3,
                -30
            ],
            [
                118,
                -81
            ],
            [
                191,
                133
            ],
            [
                42,
                -112
            ],
            [
                57,
                -7
            ],
            [
                60,
                -100
            ],
            [
                33,
                5
            ]
        ],
        [
            [
                4058,
                5150
            ],
            [
                -66,
                -4
            ],
            [
                -37,
                -53
            ],
            [
                -46,
                51
            ],
            [
                -49,
                1
            ],
            [
                -55,
                -41
            ],
            [
                -34,
                -66
            ]
        ],
        [
            [
                3771,
                5038
            ],
            [
                -55,
                -4
            ],
            [
                -46,
                -48
            ],
            [
                -50,
                15
            ],
            [
                -28,
                60
            ],
            [
                -34,
                -4
            ],
            [
                -94,
                -209
            ],
            [
                -31,
                -12
            ],
            [
                -75,
                37
            ]
        ],
        [
            [
                3797,
                5608
            ],
            [
                109,
                20
            ]
        ],
        [
            [
                3771,
                5038
            ],
            [
                -15,
                -56
            ],
            [
                52,
                -26
            ]
        ],
        [
            [
                3898,
                4746
            ],
            [
                -46,
                -36
            ],
            [
                13,
                -62
            ]
        ],
        [
            [
                3206,
                4612
            ],
            [
                54,
                76
            ],
            [
                -71,
                83
            ]
        ],
        [
            [
                1410,
                2622
            ],
            [
                -39,
                24
            ],
            [
                -74,
                -6
            ],
            [
                -49,
                -28
            ],
            [
                -92,
                13
            ],
            [
                -24,
                29
            ],
            [
                44,
                159
            ],
            [
                -32,
                317
            ]
        ],
        [
            [
                2399,
                3723
            ],
            [
                1,
                0
            ]
        ],
        [
            [
                4128,
                5900
            ],
            [
                78,
                27
            ],
            [
                68,
                49
            ],
            [
                68,
                86
            ],
            [
                65,
                -43
            ],
            [
                105,
                -6
            ],
            [
                63,
                59
            ],
            [
                79,
                -43
            ],
            [
                9,
                -55
            ],
            [
                52,
                -64
            ],
            [
                57,
                -7
            ],
            [
                129,
                76
            ],
            [
                48,
                109
            ],
            [
                73,
                77
            ]
        ],
        [
            [
                5022,
                6165
            ],
            [
                120,
                18
            ],
            [
                14,
                -15
            ]
        ],
        [
            [
                6473,
                8185
            ],
            [
                -48,
                -28
            ],
            [
                -23,
                -62
            ]
        ],
        [
            [
                6402,
                8095
            ],
            [
                -58,
                6
            ],
            [
                -11,
                100
            ],
            [
                -152,
                -17
            ],
            [
                -58,
                57
            ]
        ],
        [
            [
                6123,
                8241
            ],
            [
                64,
                55
            ],
            [
                18,
                55
            ],
            [
                119,
                80
            ]
        ],
        [
            [
                6324,
                8431
            ],
            [
                61,
                -120
            ],
            [
                89,
                -29
            ],
            [
                -1,
                -97
            ]
        ],
        [
            [
                5872,
                7110
            ],
            [
                76,
                -26
            ],
            [
                -49,
                -65
            ]
        ],
        [
            [
                5655,
                6773
            ],
            [
                -74,
                -27
            ]
        ],
        [
            [
                5581,
                6746
            ],
            [
                36,
                42
            ],
            [
                56,
                203
            ],
            [
                62,
                100
            ],
            [
                64,
                51
            ]
        ],
        [
            [
                6320,
                7509
            ],
            [
                24,
                -17
            ]
        ],
        [
            [
                6344,
                7492
            ],
            [
                24,
                -37
            ],
            [
                63,
                -16
            ],
            [
                53,
                17
            ]
        ],
        [
            [
                6484,
                7456
            ],
            [
                32,
                -53
            ],
            [
                -136,
                -51
            ],
            [
                -1,
                47
            ],
            [
                -123,
                35
            ]
        ],
        [
            [
                6229,
                7519
            ],
            [
                91,
                -10
            ]
        ],
        [
            [
                5595,
                6678
            ],
            [
                52,
                51
            ]
        ],
        [
            [
                5664,
                6745
            ],
            [
                59,
                -94
            ]
        ],
        [
            [
                6468,
                7584
            ],
            [
                64,
                -77
            ],
            [
                -28,
                -38
            ]
        ],
        [
            [
                6504,
                7469
            ],
            [
                -20,
                -13
            ]
        ],
        [
            [
                6344,
                7492
            ],
            [
                97,
                45
            ],
            [
                27,
                47
            ]
        ],
        [
            [
                6266,
                7819
            ],
            [
                -25,
                -59
            ],
            [
                38,
                -159
            ],
            [
                50,
                -49
            ],
            [
                -9,
                -43
            ]
        ],
        [
            [
                5788,
                7527
            ],
            [
                -23,
                50
            ],
            [
                -44,
                8
            ],
            [
                -31,
                74
            ]
        ],
        [
            [
                5690,
                7659
            ],
            [
                193,
                2
            ],
            [
                183,
                80
            ],
            [
                30,
                75
            ],
            [
                -3,
                78
            ],
            [
                28,
                52
            ]
        ],
        [
            [
                6121,
                7946
            ],
            [
                44,
                -6
            ],
            [
                43,
                -51
            ],
            [
                -5,
                -69
            ],
            [
                63,
                -1
            ]
        ],
        [
            [
                5748,
                7208
            ],
            [
                -129,
                -12
            ]
        ],
        [
            [
                5619,
                7196
            ],
            [
                -6,
                47
            ],
            [
                -84,
                97
            ],
            [
                14,
                81
            ],
            [
                -36,
                61
            ],
            [
                -78,
                14
            ],
            [
                -83,
                144
            ],
            [
                28,
                83
            ],
            [
                79,
                -1
            ],
            [
                115,
                -47
            ],
            [
                122,
                -16
            ]
        ],
        [
            [
                6402,
                8095
            ],
            [
                39,
                -67
            ]
        ],
        [
            [
                6312,
                7861
            ],
            [
                -46,
                -42
            ]
        ],
        [
            [
                6121,
                7946
            ],
            [
                -96,
                93
            ],
            [
                -7,
                70
            ],
            [
                54,
                27
            ],
            [
                17,
                89
            ],
            [
                34,
                16
            ]
        ],
        [
            [
                6454,
                6349
            ],
            [
                30,
                -45
            ],
            [
                -6,
                -68
            ],
            [
                -86,
                -147
            ],
            [
                54,
                -28
            ],
            [
                23,
                -87
            ],
            [
                140,
                -123
            ]
        ],
        [
            [
                6609,
                5851
            ],
            [
                21,
                -150
            ],
            [
                -20,
                -58
            ],
            [
                -71,
                8
            ],
            [
                -64,
                -80
            ]
        ],
        [
            [
                6475,
                5571
            ],
            [
                -134,
                64
            ],
            [
                -56,
                -67
            ],
            [
                -83,
                -2
            ],
            [
                -67,
                121
            ],
            [
                3,
                38
            ],
            [
                -62,
                14
            ],
            [
                -153,
                1
            ]
        ],
        [
            [
                5923,
                5740
            ],
            [
                34,
                41
            ],
            [
                -6,
                149
            ],
            [
                106,
                183
            ],
            [
                30,
                208
            ],
            [
                37,
                33
            ]
        ],
        [
            [
                6124,
                6354
            ],
            [
                88,
                -23
            ],
            [
                8,
                21
            ],
            [
                112,
                14
            ],
            [
                122,
                -17
            ]
        ],
        [
            [
                5581,
                6746
            ],
            [
                -68,
                1
            ],
            [
                -57,
                -47
            ],
            [
                -42,
                26
            ],
            [
                -82,
                -34
            ],
            [
                -74,
                42
            ],
            [
                -69,
                -54
            ],
            [
                5,
                -38
            ],
            [
                -63,
                -23
            ],
            [
                -56,
                35
            ]
        ],
        [
            [
                5075,
                6654
            ],
            [
                24,
                42
            ],
            [
                -33,
                89
            ],
            [
                81,
                59
            ],
            [
                -23,
                61
            ],
            [
                9,
                64
            ],
            [
                43,
                52
            ],
            [
                84,
                -4
            ],
            [
                39,
                26
            ],
            [
                53,
                -24
            ],
            [
                88,
                36
            ],
            [
                26,
                52
            ],
            [
                52,
                6
            ],
            [
                101,
                83
            ]
        ],
        [
            [
                5483,
                6362
            ],
            [
                17,
                -143
            ],
            [
                35,
                -13
            ]
        ],
        [
            [
                5535,
                6206
            ],
            [
                17,
                -143
            ]
        ],
        [
            [
                5022,
                6165
            ],
            [
                -29,
                149
            ],
            [
                5,
                153
            ],
            [
                -24,
                78
            ],
            [
                27,
                54
            ],
            [
                74,
                55
            ]
        ],
        [
            [
                8245,
                8980
            ],
            [
                77,
                -16
            ],
            [
                -20,
                -73
            ],
            [
                197,
                -199
            ],
            [
                2,
                -81
            ],
            [
                25,
                -27
            ],
            [
                0,
                -179
            ],
            [
                -64,
                -37
            ],
            [
                78,
                -73
            ],
            [
                13,
                -86
            ],
            [
                -30,
                -31
            ]
        ],
        [
            [
                8523,
                8178
            ],
            [
                -112,
                -4
            ],
            [
                -91,
                29
            ]
        ],
        [
            [
                8066,
                8540
            ],
            [
                28,
                64
            ],
            [
                91,
                31
            ],
            [
                55,
                94
            ],
            [
                -16,
                70
            ],
            [
                -52,
                109
            ]
        ],
        [
            [
                8172,
                8908
            ],
            [
                18,
                63
            ],
            [
                -14,
                62
            ],
            [
                68,
                46
            ],
            [
                1,
                -99
            ]
        ],
        [
            [
                8965,
                9244
            ],
            [
                18,
                -31
            ],
            [
                72,
                -10
            ],
            [
                36,
                -82
            ],
            [
                -10,
                -56
            ],
            [
                169,
                13
            ],
            [
                70,
                51
            ],
            [
                29,
                -17
            ],
            [
                -2,
                -93
            ],
            [
                59,
                -18
            ],
            [
                40,
                -69
            ],
            [
                52,
                9
            ],
            [
                32,
                -37
            ]
        ],
        [
            [
                9530,
                8904
            ],
            [
                -33,
                -25
            ],
            [
                -68,
                -122
            ],
            [
                -45,
                80
            ],
            [
                -124,
                118
            ],
            [
                -129,
                -70
            ],
            [
                -43,
                -53
            ],
            [
                -83,
                -44
            ],
            [
                -12,
                -78
            ],
            [
                -49,
                -100
            ],
            [
                44,
                -56
            ],
            [
                242,
                -102
            ],
            [
                53,
                -165
            ]
        ],
        [
            [
                9283,
                8287
            ],
            [
                -100,
                -46
            ],
            [
                -94,
                -66
            ],
            [
                -72,
                20
            ],
            [
                -171,
                -115
            ],
            [
                -211,
                25
            ],
            [
                -112,
                73
            ]
        ],
        [
            [
                8245,
                8980
            ],
            [
                54,
                28
            ],
            [
                81,
                80
            ],
            [
                -43,
                104
            ]
        ],
        [
            [
                8337,
                9192
            ],
            [
                13,
                27
            ],
            [
                136,
                21
            ],
            [
                29,
                92
            ],
            [
                83,
                40
            ],
            [
                91,
                -78
            ],
            [
                117,
                -1
            ],
            [
                57,
                -92
            ],
            [
                52,
                2
            ],
            [
                50,
                41
            ]
        ],
        [
            [
                7773,
                9076
            ],
            [
                133,
                -101
            ],
            [
                38,
                -63
            ],
            [
                89,
                -43
            ],
            [
                91,
                1
            ],
            [
                48,
                38
            ]
        ],
        [
            [
                7874,
                8534
            ],
            [
                -93,
                44
            ]
        ],
        [
            [
                7781,
                8578
            ],
            [
                -106,
                43
            ],
            [
                -30,
                -15
            ],
            [
                -17,
                131
            ],
            [
                2,
                7
            ],
            [
                58,
                73
            ],
            [
                -152,
                38
            ],
            [
                -8,
                0
            ],
            [
                -142,
                41
            ],
            [
                -106,
                97
            ],
            [
                4,
                74
            ]
        ],
        [
            [
                7284,
                9067
            ],
            [
                77,
                19
            ],
            [
                8,
                58
            ],
            [
                37,
                5
            ],
            [
                46,
                -47
            ],
            [
                66,
                -19
            ],
            [
                188,
                15
            ],
            [
                67,
                -22
            ]
        ],
        [
            [
                9530,
                8904
            ],
            [
                96,
                -17
            ],
            [
                79,
                -57
            ],
            [
                66,
                16
            ],
            [
                43,
                -47
            ],
            [
                83,
                4
            ],
            [
                102,
                -26
            ],
            [
                -334,
                -303
            ],
            [
                -67,
                -6
            ],
            [
                -2,
                -59
            ],
            [
                -88,
                11
            ],
            [
                -67,
                -33
            ],
            [
                -3,
                -61
            ],
            [
                -44,
                -65
            ],
            [
                -111,
                26
            ]
        ],
        [
            [
                7832,
                9808
            ],
            [
                94,
                -114
            ],
            [
                68,
                -37
            ],
            [
                -113,
                -78
            ],
            [
                -28,
                -108
            ]
        ],
        [
            [
                7853,
                9471
            ],
            [
                -29,
                -88
            ],
            [
                52,
                -93
            ],
            [
                -22,
                -130
            ],
            [
                -45,
                -11
            ],
            [
                -36,
                -73
            ]
        ],
        [
            [
                7284,
                9067
            ],
            [
                -186,
                15
            ],
            [
                -47,
                -19
            ]
        ],
        [
            [
                7051,
                9063
            ],
            [
                -96,
                13
            ],
            [
                -32,
                36
            ],
            [
                -1,
                1
            ]
        ],
        [
            [
                6922,
                9113
            ],
            [
                31,
                81
            ],
            [
                -27,
                49
            ],
            [
                10,
                85
            ],
            [
                0,
                7
            ],
            [
                17,
                39
            ],
            [
                57,
                8
            ],
            [
                49,
                45
            ],
            [
                5,
                2
            ],
            [
                58,
                40
            ],
            [
                14,
                58
            ],
            [
                48,
                12
            ],
            [
                70,
                102
            ],
            [
                -15,
                49
            ],
            [
                56,
                36
            ],
            [
                52,
                -7
            ],
            [
                84,
                29
            ],
            [
                288,
                -26
            ],
            [
                -9,
                58
            ],
            [
                -85,
                41
            ],
            [
                -34,
                42
            ]
        ],
        [
            [
                7591,
                9863
            ],
            [
                123,
                -3
            ],
            [
                118,
                -52
            ]
        ],
        [
            [
                7853,
                9471
            ],
            [
                82,
                -150
            ],
            [
                81,
                -6
            ],
            [
                44,
                -72
            ],
            [
                40,
                53
            ],
            [
                67,
                0
            ],
            [
                42,
                -36
            ],
            [
                2,
                -1
            ],
            [
                3,
                -1
            ],
            [
                3,
                -1
            ],
            [
                120,
                -65
            ]
        ],
        [
            [
                7832,
                9808
            ],
            [
                49,
                14
            ],
            [
                15,
                46
            ],
            [
                66,
                -4
            ],
            [
                98,
                70
            ],
            [
                53,
                1
            ],
            [
                112,
                64
            ],
            [
                18,
                -42
            ],
            [
                112,
                -37
            ],
            [
                146,
                26
            ],
            [
                43,
                -38
            ],
            [
                100,
                -6
            ],
            [
                7,
                -131
            ],
            [
                20,
                -43
            ],
            [
                47,
                39
            ],
            [
                111,
                -17
            ],
            [
                130,
                -112
            ],
            [
                55,
                -143
            ],
            [
                -26,
                -43
            ],
            [
                38,
                -74
            ],
            [
                -23,
                -65
            ],
            [
                -48,
                -23
            ],
            [
                10,
                -46
            ]
        ],
        [
            [
                7515,
                7708
            ],
            [
                -65,
                -31
            ],
            [
                -61,
                -98
            ],
            [
                -54,
                -22
            ]
        ],
        [
            [
                7335,
                7557
            ],
            [
                -8,
                28
            ],
            [
                0,
                1
            ],
            [
                -7,
                35
            ],
            [
                -52,
                -6
            ],
            [
                -1,
                0
            ],
            [
                2,
                34
            ],
            [
                0,
                1
            ],
            [
                19,
                16
            ],
            [
                0,
                1
            ],
            [
                -28,
                49
            ],
            [
                -1,
                1
            ],
            [
                -5,
                2
            ],
            [
                -1,
                0
            ],
            [
                -2,
                60
            ],
            [
                0,
                1
            ],
            [
                -57,
                51
            ],
            [
                -1,
                1
            ],
            [
                11,
                20
            ]
        ],
        [
            [
                7204,
                7852
            ],
            [
                123,
                19
            ],
            [
                120,
                103
            ]
        ],
        [
            [
                7502,
                8364
            ],
            [
                -62,
                -79
            ],
            [
                -40,
                -99
            ],
            [
                -59,
                61
            ],
            [
                -65,
                -71
            ],
            [
                -13,
                -58
            ],
            [
                -89,
                -1
            ]
        ],
        [
            [
                7174,
                8117
            ],
            [
                -20,
                23
            ],
            [
                -17,
                126
            ]
        ],
        [
            [
                7137,
                8266
            ],
            [
                72,
                62
            ],
            [
                -71,
                53
            ]
        ],
        [
            [
                7138,
                8381
            ],
            [
                4,
                -2
            ],
            [
                2,
                -1
            ],
            [
                97,
                39
            ],
            [
                35,
                -29
            ],
            [
                172,
                -1
            ],
            [
                54,
                -23
            ]
        ],
        [
            [
                6931,
                8222
            ],
            [
                0,
                -2
            ]
        ],
        [
            [
                6931,
                8220
            ],
            [
                33,
                -50
            ],
            [
                1,
                1
            ],
            [
                33,
                7
            ],
            [
                1,
                0
            ],
            [
                31,
                -19
            ],
            [
                0,
                -1
            ],
            [
                20,
                -62
            ]
        ],
        [
            [
                7050,
                8096
            ],
            [
                -7,
                -58
            ],
            [
                -1,
                -1
            ],
            [
                14,
                -75
            ]
        ],
        [
            [
                7056,
                7962
            ],
            [
                1,
                -1
            ]
        ],
        [
            [
                7057,
                7961
            ],
            [
                -21,
                -41
            ]
        ],
        [
            [
                7036,
                7920
            ],
            [
                0,
                0
            ]
        ],
        [
            [
                7036,
                7920
            ],
            [
                -12,
                -1
            ],
            [
                -1,
                0
            ],
            [
                -68,
                -65
            ],
            [
                1,
                -1
            ],
            [
                -19,
                -46
            ],
            [
                -75,
                27
            ],
            [
                14,
                44
            ],
            [
                1,
                1
            ],
            [
                17,
                55
            ],
            [
                1,
                0
            ],
            [
                9,
                18
            ],
            [
                0,
                1
            ],
            [
                -32,
                26
            ]
        ],
        [
            [
                6736,
                8078
            ],
            [
                8,
                41
            ]
        ],
        [
            [
                6744,
                8119
            ],
            [
                79,
                41
            ],
            [
                45,
                50
            ],
            [
                28,
                -11
            ],
            [
                17,
                27
            ],
            [
                11,
                -4
            ],
            [
                4,
                0
            ],
            [
                3,
                0
            ]
        ],
        [
            [
                6922,
                9113
            ],
            [
                -91,
                -104
            ],
            [
                -42,
                4
            ]
        ],
        [
            [
                6789,
                9013
            ],
            [
                -100,
                16
            ],
            [
                -10,
                -74
            ],
            [
                -94,
                -81
            ],
            [
                0,
                -2
            ],
            [
                -19,
                -29
            ],
            [
                0,
                -1
            ],
            [
                -32,
                -129
            ],
            [
                0,
                -1
            ],
            [
                -32,
                1
            ],
            [
                -35,
                -86
            ],
            [
                -46,
                -24
            ]
        ],
        [
            [
                6421,
                8603
            ],
            [
                -70,
                72
            ],
            [
                56,
                105
            ],
            [
                -33,
                33
            ],
            [
                11,
                57
            ],
            [
                -67,
                40
            ],
            [
                28,
                70
            ],
            [
                -101,
                176
            ],
            [
                -105,
                59
            ],
            [
                27,
                65
            ],
            [
                60,
                38
            ],
            [
                56,
                72
            ],
            [
                76,
                45
            ],
            [
                -7,
                29
            ],
            [
                59,
                82
            ],
            [
                83,
                -58
            ],
            [
                22,
                78
            ],
            [
                61,
                42
            ],
            [
                102,
                33
            ],
            [
                -2,
                32
            ],
            [
                66,
                12
            ],
            [
                16,
                67
            ],
            [
                151,
                18
            ],
            [
                96,
                54
            ],
            [
                135,
                -7
            ],
            [
                112,
                36
            ],
            [
                338,
                10
            ]
        ],
        [
            [
                8068,
                6792
            ],
            [
                8,
                -88
            ],
            [
                -71,
                -61
            ],
            [
                -75,
                -29
            ]
        ],
        [
            [
                7930,
                6614
            ],
            [
                -90,
                -51
            ],
            [
                -37,
                -45
            ],
            [
                -59,
                -20
            ]
        ],
        [
            [
                7744,
                6498
            ],
            [
                -182,
                261
            ]
        ],
        [
            [
                7562,
                6759
            ],
            [
                25,
                71
            ],
            [
                103,
                124
            ]
        ],
        [
            [
                5923,
                5740
            ],
            [
                -36,
                -58
            ]
        ],
        [
            [
                5887,
                5682
            ],
            [
                -42,
                24
            ],
            [
                -87,
                2
            ],
            [
                -81,
                -71
            ]
        ],
        [
            [
                5535,
                6206
            ],
            [
                52,
                60
            ],
            [
                75,
                -8
            ],
            [
                103,
                44
            ],
            [
                13,
                71
            ],
            [
                48,
                33
            ]
        ],
        [
            [
                5826,
                6406
            ],
            [
                172,
                61
            ],
            [
                127,
                66
            ],
            [
                34,
                50
            ]
        ],
        [
            [
                6159,
                6583
            ],
            [
                54,
                17
            ],
            [
                2,
                -97
            ],
            [
                -91,
                -114
            ],
            [
                0,
                -35
            ]
        ],
        [
            [
                7335,
                7557
            ],
            [
                -24,
                -8
            ]
        ],
        [
            [
                7161,
                7493
            ],
            [
                -18,
                22
            ],
            [
                1,
                2
            ],
            [
                -11,
                41
            ],
            [
                1,
                7
            ],
            [
                -30,
                2
            ]
        ],
        [
            [
                7104,
                7567
            ],
            [
                7,
                34
            ],
            [
                0,
                3
            ],
            [
                0,
                7
            ],
            [
                -10,
                0
            ],
            [
                -4,
                1
            ],
            [
                -2,
                -3
            ],
            [
                -20,
                47
            ],
            [
                -2,
                1
            ],
            [
                -74,
                -69
            ],
            [
                -18,
                70
            ],
            [
                -4,
                2
            ],
            [
                -35,
                30
            ]
        ],
        [
            [
                6942,
                7690
            ],
            [
                41,
                12
            ],
            [
                1,
                0
            ],
            [
                33,
                35
            ],
            [
                4,
                4
            ],
            [
                9,
                15
            ],
            [
                1,
                2
            ],
            [
                31,
                39
            ],
            [
                1,
                4
            ],
            [
                -2,
                111
            ],
            [
                0,
                3
            ],
            [
                -25,
                5
            ]
        ],
        [
            [
                7036,
                7920
            ],
            [
                0,
                0
            ]
        ],
        [
            [
                7057,
                7961
            ],
            [
                0,
                0
            ]
        ],
        [
            [
                7057,
                7961
            ],
            [
                47,
                8
            ]
        ],
        [
            [
                7104,
                7969
            ],
            [
                2,
                -4
            ],
            [
                0,
                -1
            ],
            [
                16,
                -43
            ],
            [
                0,
                -1
            ],
            [
                5,
                -8
            ],
            [
                1,
                0
            ],
            [
                76,
                -60
            ]
        ],
        [
            [
                6285,
                7127
            ],
            [
                -22,
                -34
            ],
            [
                37,
                -107
            ],
            [
                -22,
                -35
            ],
            [
                -68,
                9
            ],
            [
                -91,
                -42
            ],
            [
                -33,
                -112
            ]
        ],
        [
            [
                6086,
                6806
            ],
            [
                -65,
                3
            ],
            [
                -27,
                43
            ]
        ],
        [
            [
                6058,
                7243
            ],
            [
                27,
                -20
            ],
            [
                122,
                -19
            ],
            [
                80,
                -33
            ],
            [
                -2,
                -44
            ]
        ],
        [
            [
                6504,
                7469
            ],
            [
                80,
                27
            ],
            [
                37,
                -14
            ]
        ],
        [
            [
                6621,
                7482
            ],
            [
                -25,
                -133
            ],
            [
                -80,
                -96
            ],
            [
                -58,
                -32
            ],
            [
                -18,
                -60
            ],
            [
                34,
                -75
            ],
            [
                -26,
                -94
            ]
        ],
        [
            [
                6448,
                6992
            ],
            [
                -48,
                20
            ],
            [
                -49,
                106
            ],
            [
                -66,
                9
            ]
        ],
        [
            [
                7781,
                8578
            ],
            [
                -28,
                -63
            ],
            [
                -39,
                -9
            ],
            [
                -17,
                -62
            ],
            [
                -64,
                18
            ],
            [
                -29,
                -35
            ],
            [
                -59,
                0
            ],
            [
                -43,
                -63
            ]
        ],
        [
            [
                7138,
                8381
            ],
            [
                16,
                39
            ],
            [
                -57,
                18
            ],
            [
                -8,
                86
            ],
            [
                -43,
                36
            ]
        ],
        [
            [
                7046,
                8560
            ],
            [
                -21,
                25
            ],
            [
                0,
                1
            ],
            [
                37,
                50
            ],
            [
                21,
                87
            ],
            [
                -35,
                19
            ],
            [
                -1,
                0
            ],
            [
                -3,
                12
            ],
            [
                1,
                0
            ],
            [
                55,
                120
            ],
            [
                -8,
                72
            ],
            [
                -55,
                65
            ],
            [
                14,
                52
            ]
        ],
        [
            [
                6086,
                6806
            ],
            [
                32,
                -158
            ],
            [
                41,
                -65
            ]
        ],
        [
            [
                5826,
                6406
            ],
            [
                23,
                56
            ],
            [
                -68,
                64
            ],
            [
                4,
                30
            ]
        ],
        [
            [
                6692,
                8342
            ],
            [
                26,
                -26
            ],
            [
                12,
                -22
            ],
            [
                0,
                -1
            ],
            [
                -3,
                -9
            ],
            [
                -56,
                -89
            ]
        ],
        [
            [
                6671,
                8195
            ],
            [
                -49,
                -36
            ],
            [
                -105,
                -6
            ],
            [
                -44,
                32
            ]
        ],
        [
            [
                6324,
                8431
            ],
            [
                27,
                33
            ]
        ],
        [
            [
                6351,
                8464
            ],
            [
                101,
                -2
            ],
            [
                57,
                31
            ],
            [
                63,
                -61
            ],
            [
                -5,
                -46
            ],
            [
                89,
                -69
            ],
            [
                36,
                25
            ]
        ],
        [
            [
                6671,
                8195
            ],
            [
                25,
                -4
            ],
            [
                -1,
                -1
            ],
            [
                11,
                -67
            ],
            [
                38,
                -4
            ]
        ],
        [
            [
                7744,
                6498
            ],
            [
                -131,
                -43
            ]
        ],
        [
            [
                7613,
                6455
            ],
            [
                -97,
                -56
            ],
            [
                -47,
                -60
            ],
            [
                -75,
                -47
            ]
        ],
        [
            [
                7394,
                6292
            ],
            [
                -55,
                106
            ],
            [
                -35,
                -19
            ],
            [
                -49,
                161
            ],
            [
                40,
                3
            ],
            [
                31,
                87
            ]
        ],
        [
            [
                7326,
                6630
            ],
            [
                177,
                71
            ],
            [
                59,
                58
            ]
        ],
        [
            [
                7104,
                7969
            ],
            [
                70,
                148
            ]
        ],
        [
            [
                6734,
                7763
            ],
            [
                28,
                -3
            ],
            [
                -22,
                -81
            ],
            [
                15,
                -59
            ]
        ],
        [
            [
                6755,
                7620
            ],
            [
                0,
                -85
            ],
            [
                -82,
                -1
            ],
            [
                -52,
                -52
            ]
        ],
        [
            [
                6468,
                7584
            ],
            [
                -18,
                180
            ]
        ],
        [
            [
                7137,
                8266
            ],
            [
                -39,
                -18
            ],
            [
                -15,
                -153
            ],
            [
                -33,
                1
            ]
        ],
        [
            [
                6931,
                8220
            ],
            [
                0,
                2
            ]
        ],
        [
            [
                6931,
                8222
            ],
            [
                29,
                69
            ],
            [
                1,
                1
            ],
            [
                6,
                77
            ],
            [
                -1,
                2
            ],
            [
                -1,
                14
            ],
            [
                0,
                2
            ],
            [
                -7,
                46
            ],
            [
                1,
                1
            ],
            [
                0,
                16
            ],
            [
                1,
                0
            ],
            [
                27,
                37
            ],
            [
                59,
                73
            ]
        ],
        [
            [
                7036,
                7920
            ],
            [
                0,
                0
            ]
        ],
        [
            [
                6942,
                7690
            ],
            [
                -35,
                6
            ],
            [
                -152,
                -76
            ]
        ],
        [
            [
                7690,
                6189
            ],
            [
                -68,
                -69
            ],
            [
                -123,
                -47
            ]
        ],
        [
            [
                7499,
                6073
            ],
            [
                -115,
                -47
            ]
        ],
        [
            [
                7384,
                6026
            ],
            [
                -37,
                16
            ]
        ],
        [
            [
                7310,
                6120
            ],
            [
                36,
                103
            ],
            [
                48,
                69
            ]
        ],
        [
            [
                7613,
                6455
            ],
            [
                30,
                -98
            ],
            [
                45,
                -53
            ],
            [
                2,
                -115
            ]
        ],
        [
            [
                6931,
                8222
            ],
            [
                0,
                0
            ]
        ],
        [
            [
                6692,
                8342
            ],
            [
                14,
                27
            ],
            [
                1,
                0
            ],
            [
                16,
                74
            ],
            [
                18,
                27
            ],
            [
                -12,
                52
            ],
            [
                45,
                35
            ],
            [
                11,
                19
            ],
            [
                1,
                0
            ],
            [
                20,
                27
            ],
            [
                -1,
                0
            ],
            [
                -22,
                34
            ],
            [
                47,
                65
            ],
            [
                5,
                15
            ],
            [
                0,
                1
            ],
            [
                0,
                97
            ],
            [
                -96,
                92
            ],
            [
                50,
                106
            ]
        ],
        [
            [
                7057,
                7961
            ],
            [
                -1,
                1
            ]
        ],
        [
            [
                6351,
                8464
            ],
            [
                -15,
                32
            ],
            [
                85,
                107
            ]
        ],
        [
            [
                7104,
                7567
            ],
            [
                -43,
                27
            ],
            [
                -38,
                -42
            ],
            [
                35,
                -129
            ],
            [
                105,
                -112
            ],
            [
                -87,
                -33
            ],
            [
                -66,
                -125
            ],
            [
                -16,
                -63
            ]
        ],
        [
            [
                6994,
                7090
            ],
            [
                -58,
                17
            ],
            [
                -40,
                -52
            ],
            [
                -225,
                -15
            ],
            [
                -76,
                -20
            ],
            [
                -96,
                -69
            ]
        ],
        [
            [
                6499,
                6951
            ],
            [
                -51,
                41
            ]
        ],
        [
            [
                7098,
                5734
            ],
            [
                -4,
                -32
            ]
        ],
        [
            [
                7094,
                5702
            ],
            [
                -73,
                -71
            ],
            [
                -110,
                -10
            ],
            [
                -8,
                -73
            ],
            [
                -62,
                -78
            ],
            [
                -15,
                -55
            ],
            [
                -65,
                -75
            ],
            [
                57,
                -39
            ],
            [
                -1,
                -61
            ],
            [
                -66,
                2
            ]
        ],
        [
            [
                6751,
                5242
            ],
            [
                -104,
                2
            ],
            [
                -36,
                -38
            ],
            [
                -69,
                10
            ],
            [
                -89,
                -77
            ]
        ],
        [
            [
                6453,
                5139
            ],
            [
                -42,
                31
            ]
        ],
        [
            [
                6411,
                5170
            ],
            [
                7,
                47
            ],
            [
                68,
                81
            ],
            [
                25,
                103
            ],
            [
                -29,
                30
            ],
            [
                24,
                64
            ],
            [
                -31,
                76
            ]
        ],
        [
            [
                6609,
                5851
            ],
            [
                93,
                163
            ],
            [
                39,
                7
            ]
        ],
        [
            [
                6741,
                6021
            ],
            [
                88,
                -34
            ],
            [
                -69,
                -89
            ],
            [
                9,
                -21
            ],
            [
                105,
                72
            ]
        ],
        [
            [
                7760,
                4953
            ],
            [
                25,
                -103
            ],
            [
                -96,
                -91
            ],
            [
                -135,
                -45
            ],
            [
                -108,
                -53
            ],
            [
                -72,
                -286
            ],
            [
                -106,
                -224
            ],
            [
                -54,
                -74
            ],
            [
                -37,
                -92
            ],
            [
                -127,
                -62
            ],
            [
                -143,
                -102
            ]
        ],
        [
            [
                6907,
                3821
            ],
            [
                -38,
                129
            ],
            [
                -39,
                76
            ],
            [
                -51,
                5
            ],
            [
                3,
                93
            ],
            [
                110,
                -13
            ],
            [
                88,
                29
            ],
            [
                42,
                -27
            ],
            [
                -28,
                152
            ],
            [
                54,
                43
            ],
            [
                -5,
                72
            ],
            [
                -45,
                91
            ],
            [
                -44,
                36
            ],
            [
                -4,
                57
            ]
        ],
        [
            [
                6950,
                4564
            ],
            [
                129,
                127
            ],
            [
                45,
                -22
            ],
            [
                19,
                35
            ],
            [
                50,
                -25
            ]
        ],
        [
            [
                7193,
                4679
            ],
            [
                29,
                56
            ],
            [
                38,
                -10
            ],
            [
                47,
                40
            ],
            [
                113,
                20
            ],
            [
                54,
                40
            ],
            [
                12,
                48
            ],
            [
                96,
                42
            ]
        ],
        [
            [
                7582,
                4915
            ],
            [
                64,
                -9
            ],
            [
                25,
                37
            ],
            [
                89,
                10
            ]
        ],
        [
            [
                6907,
                3821
            ],
            [
                -47,
                -21
            ],
            [
                -65,
                -90
            ],
            [
                -70,
                -230
            ],
            [
                -114,
                -115
            ],
            [
                -42,
                -67
            ],
            [
                -13,
                -112
            ],
            [
                -134,
                -59
            ],
            [
                -192,
                -14
            ],
            [
                -146,
                -55
            ]
        ],
        [
            [
                6084,
                3058
            ],
            [
                -9,
                82
            ],
            [
                -74,
                288
            ],
            [
                -9,
                216
            ],
            [
                56,
                181
            ],
            [
                -2,
                130
            ],
            [
                27,
                56
            ],
            [
                -81,
                27
            ],
            [
                -22,
                102
            ]
        ],
        [
            [
                5970,
                4140
            ],
            [
                12,
                80
            ],
            [
                61,
                29
            ],
            [
                14,
                42
            ]
        ],
        [
            [
                6057,
                4291
            ],
            [
                101,
                27
            ],
            [
                74,
                -42
            ]
        ],
        [
            [
                6232,
                4276
            ],
            [
                73,
                -19
            ],
            [
                90,
                55
            ],
            [
                113,
                47
            ],
            [
                151,
                17
            ],
            [
                12,
                33
            ]
        ],
        [
            [
                6671,
                4409
            ],
            [
                42,
                15
            ],
            [
                27,
                103
            ],
            [
                111,
                78
            ],
            [
                99,
                -41
            ]
        ],
        [
            [
                6994,
                7090
            ],
            [
                44,
                17
            ],
            [
                61,
                -41
            ],
            [
                69,
                6
            ],
            [
                58,
                -75
            ],
            [
                36,
                29
            ],
            [
                73,
                -9
            ]
        ],
        [
            [
                7335,
                7017
            ],
            [
                3,
                -80
            ],
            [
                -55,
                -121
            ],
            [
                59,
                -6
            ],
            [
                16,
                -42
            ],
            [
                -54,
                -15
            ],
            [
                -52,
                -50
            ],
            [
                -125,
                -23
            ],
            [
                -50,
                40
            ],
            [
                -20,
                -56
            ],
            [
                -53,
                -19
            ]
        ],
        [
            [
                7004,
                6645
            ],
            [
                -51,
                50
            ],
            [
                -54,
                2
            ],
            [
                -36,
                -36
            ],
            [
                -45,
                59
            ],
            [
                -105,
                6
            ],
            [
                -26,
                -52
            ],
            [
                -80,
                -40
            ],
            [
                -21,
                -34
            ]
        ],
        [
            [
                6586,
                6600
            ],
            [
                -34,
                95
            ],
            [
                0,
                71
            ],
            [
                48,
                36
            ],
            [
                -34,
                40
            ],
            [
                -23,
                93
            ],
            [
                -44,
                16
            ]
        ],
        [
            [
                5887,
                5682
            ],
            [
                9,
                -113
            ],
            [
                -1,
                -206
            ],
            [
                -27,
                -76
            ],
            [
                31,
                -17
            ],
            [
                0,
                -75
            ]
        ],
        [
            [
                5899,
                5195
            ],
            [
                -2,
                -121
            ],
            [
                24,
                -71
            ],
            [
                -17,
                -118
            ],
            [
                49,
                -137
            ],
            [
                -12,
                -31
            ],
            [
                1,
                -4
            ],
            [
                -15,
                -124
            ],
            [
                -72,
                -131
            ]
        ],
        [
            [
                5855,
                4458
            ],
            [
                -22,
                91
            ],
            [
                -45,
                11
            ],
            [
                -42,
                -99
            ],
            [
                -62,
                -38
            ],
            [
                -52,
                85
            ],
            [
                -110,
                14
            ],
            [
                -60,
                54
            ],
            [
                -91,
                28
            ],
            [
                -18,
                27
            ]
        ],
        [
            [
                7384,
                6026
            ],
            [
                49,
                -80
            ],
            [
                42,
                -20
            ],
            [
                39,
                -152
            ],
            [
                85,
                23
            ],
            [
                16,
                -54
            ],
            [
                -21,
                -79
            ],
            [
                -75,
                -72
            ],
            [
                -40,
                -12
            ],
            [
                -37,
                -109
            ]
        ],
        [
            [
                7442,
                5471
            ],
            [
                -72,
                -63
            ]
        ],
        [
            [
                7370,
                5408
            ],
            [
                -56,
                -30
            ],
            [
                -21,
                -52
            ],
            [
                -116,
                -54
            ],
            [
                -22,
                -61
            ],
            [
                -73,
                4
            ]
        ],
        [
            [
                7082,
                5215
            ],
            [
                -27,
                47
            ],
            [
                20,
                72
            ],
            [
                -41,
                28
            ],
            [
                39,
                50
            ],
            [
                29,
                92
            ],
            [
                -30,
                25
            ],
            [
                4,
                72
            ],
            [
                47,
                68
            ],
            [
                -29,
                33
            ]
        ],
        [
            [
                8138,
                6234
            ],
            [
                -50,
                -32
            ],
            [
                -70,
                -84
            ],
            [
                -91,
                -3
            ],
            [
                -42,
                -47
            ],
            [
                -142,
                15
            ],
            [
                -53,
                106
            ]
        ],
        [
            [
                7930,
                6614
            ],
            [
                -7,
                -72
            ],
            [
                35,
                -145
            ],
            [
                39,
                -12
            ],
            [
                34,
                -60
            ],
            [
                55,
                -10
            ],
            [
                2,
                1
            ],
            [
                50,
                -82
            ]
        ],
        [
            [
                7326,
                6630
            ],
            [
                -65,
                2
            ],
            [
                -125,
                -55
            ],
            [
                -16,
                -30
            ],
            [
                -112,
                -29
            ]
        ],
        [
            [
                7008,
                6518
            ],
            [
                -4,
                127
            ]
        ],
        [
            [
                7335,
                7017
            ],
            [
                79,
                14
            ],
            [
                69,
                101
            ],
            [
                48,
                -18
            ],
            [
                50,
                24
            ]
        ],
        [
            [
                8145,
                5711
            ],
            [
                -15,
                -157
            ],
            [
                75,
                -25
            ],
            [
                -14,
                -55
            ],
            [
                -57,
                27
            ],
            [
                -3,
                -52
            ],
            [
                -46,
                -21
            ],
            [
                -90,
                -91
            ],
            [
                -22,
                -81
            ],
            [
                -72,
                -70
            ]
        ],
        [
            [
                7901,
                5186
            ],
            [
                -55,
                113
            ],
            [
                -74,
                46
            ],
            [
                -51,
                6
            ],
            [
                -57,
                97
            ],
            [
                -60,
                66
            ],
            [
                0,
                1
            ],
            [
                -5,
                42
            ]
        ],
        [
            [
                7599,
                5557
            ],
            [
                53,
                43
            ],
            [
                96,
                29
            ],
            [
                20,
                43
            ],
            [
                58,
                15
            ]
        ],
        [
            [
                6751,
                5242
            ],
            [
                -45,
                -107
            ],
            [
                91,
                -28
            ],
            [
                18,
                28
            ],
            [
                96,
                4
            ]
        ],
        [
            [
                6911,
                5139
            ],
            [
                -61,
                -213
            ],
            [
                3,
                -56
            ]
        ],
        [
            [
                6853,
                4870
            ],
            [
                -46,
                -2
            ],
            [
                -80,
                -42
            ],
            [
                -51,
                -69
            ],
            [
                -66,
                18
            ],
            [
                -154,
                -104
            ]
        ],
        [
            [
                6456,
                4671
            ],
            [
                -58,
                -33
            ],
            [
                -28,
                41
            ]
        ],
        [
            [
                6370,
                4679
            ],
            [
                77,
                65
            ],
            [
                70,
                151
            ],
            [
                -34,
                38
            ],
            [
                -76,
                24
            ],
            [
                1,
                2
            ],
            [
                -24,
                56
            ],
            [
                -48,
                16
            ]
        ],
        [
            [
                6336,
                5031
            ],
            [
                117,
                108
            ]
        ],
        [
            [
                7008,
                6518
            ],
            [
                -188,
                -145
            ],
            [
                -10,
                -126
            ],
            [
                -34,
                -67
            ],
            [
                -35,
                -159
            ]
        ],
        [
            [
                6454,
                6349
            ],
            [
                -2,
                57
            ],
            [
                71,
                98
            ],
            [
                -34,
                40
            ],
            [
                56,
                63
            ],
            [
                41,
                -7
            ]
        ],
        [
            [
                6411,
                5170
            ],
            [
                -74,
                -27
            ],
            [
                -64,
                43
            ],
            [
                -66,
                77
            ],
            [
                -84,
                16
            ],
            [
                -11,
                -66
            ],
            [
                -69,
                -27
            ],
            [
                -49,
                23
            ],
            [
                -95,
                -14
            ]
        ],
        [
            [
                6456,
                4671
            ],
            [
                91,
                -34
            ],
            [
                49,
                -89
            ],
            [
                -22,
                -22
            ],
            [
                97,
                -117
            ]
        ],
        [
            [
                6232,
                4276
            ],
            [
                19,
                40
            ],
            [
                -18,
                60
            ],
            [
                38,
                43
            ],
            [
                5,
                145
            ],
            [
                70,
                52
            ],
            [
                24,
                63
            ]
        ],
        [
            [
                6057,
                4291
            ],
            [
                -33,
                78
            ],
            [
                35,
                93
            ],
            [
                69,
                22
            ],
            [
                -5,
                132
            ],
            [
                23,
                76
            ],
            [
                39,
                17
            ],
            [
                12,
                124
            ],
            [
                58,
                82
            ],
            [
                12,
                49
            ],
            [
                69,
                67
            ]
        ],
        [
            [
                5970,
                4140
            ],
            [
                -74,
                6
            ],
            [
                -24,
                -67
            ],
            [
                -121,
                -106
            ]
        ],
        [
            [
                5751,
                3973
            ],
            [
                44,
                201
            ],
            [
                1,
                78
            ],
            [
                59,
                206
            ]
        ],
        [
            [
                7599,
                5557
            ],
            [
                -25,
                -30
            ],
            [
                -78,
                -6
            ],
            [
                -54,
                -50
            ]
        ],
        [
            [
                7499,
                6073
            ],
            [
                -9,
                -39
            ],
            [
                30,
                -102
            ],
            [
                35,
                43
            ],
            [
                53,
                -64
            ],
            [
                192,
                -43
            ],
            [
                -28,
                -61
            ],
            [
                46,
                -14
            ],
            [
                -2,
                -61
            ]
        ],
        [
            [
                8218,
                6140
            ],
            [
                -63,
                106
            ]
        ],
        [
            [
                8155,
                6246
            ],
            [
                99,
                75
            ],
            [
                15,
                102
            ],
            [
                42,
                4
            ],
            [
                51,
                121
            ]
        ],
        [
            [
                8362,
                6548
            ],
            [
                87,
                11
            ],
            [
                148,
                -110
            ],
            [
                26,
                -81
            ],
            [
                -81,
                -102
            ],
            [
                -143,
                -44
            ],
            [
                -39,
                24
            ],
            [
                -74,
                -83
            ],
            [
                -68,
                -23
            ]
        ],
        [
            [
                7901,
                5186
            ],
            [
                -134,
                -133
            ],
            [
                -38,
                -71
            ],
            [
                31,
                -29
            ]
        ],
        [
            [
                7582,
                4915
            ],
            [
                7,
                148
            ],
            [
                -101,
                55
            ],
            [
                -96,
                -7
            ]
        ],
        [
            [
                7392,
                5111
            ],
            [
                40,
                71
            ],
            [
                -6,
                102
            ],
            [
                -42,
                6
            ],
            [
                -14,
                118
            ]
        ],
        [
            [
                7193,
                4679
            ],
            [
                -19,
                67
            ],
            [
                14,
                161
            ],
            [
                -68,
                35
            ],
            [
                -2,
                44
            ]
        ],
        [
            [
                7118,
                4986
            ],
            [
                76,
                51
            ],
            [
                23,
                -30
            ],
            [
                135,
                105
            ],
            [
                40,
                -1
            ]
        ],
        [
            [
                5218,
                3472
            ],
            [
                6,
                -7
            ]
        ],
        [
            [
                5224,
                3465
            ],
            [
                6,
                -5
            ],
            [
                2,
                -4
            ],
            [
                3,
                -3
            ],
            [
                24,
                -21
            ],
            [
                -34,
                -54
            ],
            [
                -39,
                18
            ]
        ],
        [
            [
                5186,
                3396
            ],
            [
                -5,
                78
            ],
            [
                37,
                -2
            ]
        ],
        [
            [
                6084,
                3058
            ],
            [
                -119,
                -61
            ],
            [
                -88,
                5
            ],
            [
                -48,
                91
            ],
            [
                -3,
                56
            ],
            [
                -65,
                79
            ],
            [
                -117,
                -9
            ],
            [
                -111,
                -114
            ]
        ],
        [
            [
                5533,
                3105
            ],
            [
                -107,
                61
            ],
            [
                -93,
                148
            ],
            [
                8,
                46
            ],
            [
                -58,
                145
            ],
            [
                -3,
                5
            ],
            [
                -2,
                4
            ]
        ],
        [
            [
                5278,
                3514
            ],
            [
                69,
                40
            ],
            [
                57,
                -1
            ],
            [
                145,
                161
            ],
            [
                48,
                107
            ],
            [
                73,
                39
            ],
            [
                81,
                113
            ]
        ],
        [
            [
                5278,
                3514
            ],
            [
                -2,
                2
            ]
        ],
        [
            [
                5276,
                3516
            ],
            [
                -135,
                59
            ],
            [
                -94,
                -29
            ]
        ],
        [
            [
                7118,
                4986
            ],
            [
                -107,
                -48
            ],
            [
                -38,
                -47
            ],
            [
                -35,
                18
            ],
            [
                -48,
                -81
            ],
            [
                -37,
                42
            ]
        ],
        [
            [
                6911,
                5139
            ],
            [
                130,
                0
            ],
            [
                41,
                76
            ]
        ],
        [
            [
                8218,
                6140
            ],
            [
                -89,
                -72
            ],
            [
                -14,
                -79
            ]
        ],
        [
            [
                8138,
                6234
            ],
            [
                17,
                12
            ]
        ],
        [
            [
                8080,
                6792
            ],
            [
                41,
                -38
            ],
            [
                71,
                -17
            ],
            [
                -5,
                -80
            ],
            [
                27,
                -88
            ],
            [
                101,
                0
            ],
            [
                47,
                -21
            ]
        ],
        [
            [
                5024,
                823
            ],
            [
                -46,
                -39
            ],
            [
                -35,
                -155
            ],
            [
                -64,
                -59
            ],
            [
                -16,
                -71
            ],
            [
                10,
                -80
            ]
        ],
        [
            [
                4873,
                419
            ],
            [
                -60,
                -16
            ],
            [
                -18,
                39
            ],
            [
                -104,
                -5
            ]
        ],
        [
            [
                4691,
                437
            ],
            [
                -22,
                70
            ],
            [
                -99,
                -11
            ],
            [
                -69,
                24
            ],
            [
                -23,
                37
            ],
            [
                -31,
                234
            ]
        ],
        [
            [
                4447,
                791
            ],
            [
                103,
                97
            ],
            [
                31,
                -15
            ],
            [
                63,
                40
            ],
            [
                13,
                -68
            ],
            [
                67,
                2
            ],
            [
                16,
                29
            ],
            [
                -37,
                67
            ],
            [
                -127,
                91
            ],
            [
                27,
                61
            ],
            [
                69,
                69
            ]
        ],
        [
            [
                4672,
                1164
            ],
            [
                23,
                -35
            ],
            [
                68,
                14
            ],
            [
                48,
                52
            ]
        ],
        [
            [
                4811,
                1195
            ],
            [
                5,
                -110
            ],
            [
                58,
                -54
            ],
            [
                59,
                -93
            ],
            [
                60,
                3
            ],
            [
                32,
                -55
            ],
            [
                -1,
                -63
            ]
        ],
        [
            [
                4233,
                2684
            ],
            [
                -26,
                -71
            ],
            [
                0,
                -1
            ],
            [
                58,
                -50
            ]
        ],
        [
            [
                4265,
                2562
            ],
            [
                -26,
                -44
            ],
            [
                -56,
                -20
            ],
            [
                6,
                -90
            ],
            [
                -52,
                -50
            ],
            [
                21,
                -145
            ],
            [
                -36,
                -48
            ]
        ],
        [
            [
                4122,
                2165
            ],
            [
                -105,
                -31
            ],
            [
                -4,
                -97
            ],
            [
                0,
                -2
            ],
            [
                -32,
                -69
            ],
            [
                -43,
                6
            ],
            [
                -10,
                -131
            ],
            [
                -41,
                -57
            ]
        ],
        [
            [
                3745,
                2800
            ],
            [
                83,
                -60
            ],
            [
                37,
                12
            ],
            [
                74,
                -48
            ],
            [
                94,
                -12
            ],
            [
                125,
                11
            ],
            [
                75,
                -19
            ]
        ],
        [
            [
                5533,
                3105
            ],
            [
                -43,
                -66
            ],
            [
                -54,
                -158
            ],
            [
                -48,
                -40
            ],
            [
                -99,
                -129
            ]
        ],
        [
            [
                5289,
                2712
            ],
            [
                -192,
                137
            ],
            [
                -64,
                20
            ],
            [
                -59,
                80
            ],
            [
                21,
                47
            ],
            [
                -55,
                153
            ],
            [
                2,
                59
            ]
        ],
        [
            [
                4942,
                3208
            ],
            [
                24,
                74
            ],
            [
                150,
                83
            ],
            [
                21,
                28
            ],
            [
                49,
                3
            ]
        ],
        [
            [
                5224,
                3465
            ],
            [
                -6,
                6
            ]
        ],
        [
            [
                5218,
                3471
            ],
            [
                4,
                2
            ],
            [
                5,
                0
            ],
            [
                5,
                3
            ],
            [
                12,
                23
            ],
            [
                33,
                16
            ]
        ],
        [
            [
                5277,
                3515
            ],
            [
                1,
                -1
            ]
        ],
        [
            [
                4603,
                1190
            ],
            [
                -15,
                -84
            ],
            [
                -62,
                -15
            ],
            [
                -73,
                17
            ],
            [
                -12,
                28
            ]
        ],
        [
            [
                4441,
                1136
            ],
            [
                -1,
                56
            ]
        ],
        [
            [
                4440,
                1192
            ],
            [
                -7,
                22
            ],
            [
                -1,
                1
            ],
            [
                -14,
                89
            ],
            [
                0,
                3
            ],
            [
                44,
                78
            ]
        ],
        [
            [
                4462,
                1385
            ],
            [
                123,
                -87
            ]
        ],
        [
            [
                4585,
                1298
            ],
            [
                18,
                -108
            ]
        ],
        [
            [
                4783,
                3534
            ],
            [
                6,
                -87
            ],
            [
                -15,
                -93
            ],
            [
                15,
                -75
            ]
        ],
        [
            [
                4789,
                3279
            ],
            [
                -28,
                -4
            ],
            [
                -125,
                46
            ],
            [
                -2,
                1
            ],
            [
                -3,
                1
            ],
            [
                -1,
                1
            ],
            [
                -76,
                9
            ],
            [
                -79,
                -35
            ],
            [
                -46,
                5
            ],
            [
                -8,
                -142
            ],
            [
                -39,
                -5
            ]
        ],
        [
            [
                4382,
                3156
            ],
            [
                -74,
                8
            ]
        ],
        [
            [
                4308,
                3164
            ],
            [
                -21,
                35
            ],
            [
                -103,
                10
            ]
        ],
        [
            [
                5006,
                1380
            ],
            [
                -2,
                0
            ]
        ],
        [
            [
                5004,
                1380
            ],
            [
                -63,
                15
            ],
            [
                -1,
                -82
            ],
            [
                75,
                -66
            ],
            [
                30,
                -49
            ],
            [
                25,
                -187
            ],
            [
                36,
                -49
            ],
            [
                10,
                -78
            ]
        ],
        [
            [
                5116,
                884
            ],
            [
                -92,
                -61
            ]
        ],
        [
            [
                4811,
                1195
            ],
            [
                -5,
                74
            ],
            [
                -44,
                109
            ],
            [
                -2,
                119
            ]
        ],
        [
            [
                4760,
                1497
            ],
            [
                25,
                36
            ],
            [
                35,
                -34
            ],
            [
                68,
                37
            ],
            [
                3,
                43
            ],
            [
                79,
                -8
            ],
            [
                42,
                -31
            ],
            [
                11,
                -108
            ],
            [
                -17,
                -52
            ]
        ],
        [
            [
                4183,
                2129
            ],
            [
                -17,
                -206
            ],
            [
                83,
                -63
            ],
            [
                6,
                -36
            ],
            [
                84,
                -104
            ],
            [
                62,
                -6
            ]
        ],
        [
            [
                4401,
                1714
            ],
            [
                -25,
                -50
            ],
            [
                50,
                -53
            ],
            [
                -2,
                -91
            ],
            [
                87,
                -44
            ],
            [
                -65,
                -57
            ],
            [
                16,
                -34
            ]
        ],
        [
            [
                4440,
                1192
            ],
            [
                -102,
                5
            ],
            [
                -39,
                71
            ],
            [
                -65,
                36
            ],
            [
                -53,
                -63
            ],
            [
                -1,
                -44
            ],
            [
                -51,
                -65
            ],
            [
                -8,
                -89
            ],
            [
                -56,
                -67
            ],
            [
                -116,
                -15
            ]
        ],
        [
            [
                3949,
                961
            ],
            [
                -32,
                85
            ],
            [
                -113,
                65
            ],
            [
                51,
                92
            ],
            [
                32,
                109
            ],
            [
                -21,
                140
            ],
            [
                -34,
                -2
            ]
        ],
        [
            [
                4122,
                2165
            ],
            [
                61,
                -36
            ]
        ],
        [
            [
                4308,
                3164
            ],
            [
                40,
                -84
            ],
            [
                4,
                -74
            ],
            [
                -106,
                -217
            ],
            [
                -1,
                -3
            ],
            [
                -12,
                -102
            ]
        ],
        [
            [
                3949,
                961
            ],
            [
                32,
                -147
            ],
            [
                -76,
                -5
            ]
        ],
        [
            [
                3905,
                809
            ],
            [
                -205,
                -1
            ],
            [
                -81,
                33
            ],
            [
                -5,
                27
            ],
            [
                -180,
                -23
            ],
            [
                31,
                47
            ]
        ],
        [
            [
                5276,
                3516
            ],
            [
                1,
                -1
            ]
        ],
        [
            [
                5218,
                3471
            ],
            [
                0,
                1
            ]
        ],
        [
            [
                4942,
                3208
            ],
            [
                -73,
                24
            ]
        ],
        [
            [
                4869,
                3232
            ],
            [
                -34,
                45
            ],
            [
                -46,
                2
            ]
        ],
        [
            [
                4646,
                3046
            ],
            [
                51,
                -36
            ],
            [
                33,
                -83
            ],
            [
                -19,
                -81
            ],
            [
                56,
                -71
            ],
            [
                -33,
                -90
            ],
            [
                102,
                -68
            ],
            [
                58,
                5
            ],
            [
                132,
                -39
            ],
            [
                124,
                -68
            ]
        ],
        [
            [
                5150,
                2515
            ],
            [
                -31,
                -194
            ],
            [
                23,
                -52
            ],
            [
                198,
                -115
            ],
            [
                101,
                12
            ],
            [
                85,
                -36
            ],
            [
                9,
                -47
            ],
            [
                -6,
                -181
            ],
            [
                -28,
                -78
            ]
        ],
        [
            [
                5501,
                1824
            ],
            [
                -172,
                49
            ],
            [
                -159,
                -4
            ],
            [
                -199,
                28
            ],
            [
                -71,
                -12
            ],
            [
                -97,
                112
            ],
            [
                -20,
                73
            ],
            [
                -43,
                -25
            ]
        ],
        [
            [
                4740,
                2045
            ],
            [
                -26,
                94
            ],
            [
                -27,
                18
            ],
            [
                -239,
                33
            ]
        ],
        [
            [
                4448,
                2190
            ],
            [
                -40,
                19
            ],
            [
                23,
                163
            ],
            [
                70,
                121
            ],
            [
                -4,
                39
            ],
            [
                -60,
                88
            ],
            [
                -89,
                17
            ]
        ],
        [
            [
                4348,
                2637
            ],
            [
                21,
                78
            ],
            [
                74,
                34
            ],
            [
                -45,
                85
            ],
            [
                38,
                24
            ],
            [
                9,
                63
            ],
            [
                87,
                24
            ],
            [
                -21,
                33
            ]
        ],
        [
            [
                4511,
                2978
            ],
            [
                135,
                68
            ]
        ],
        [
            [
                4382,
                3156
            ],
            [
                59,
                -130
            ],
            [
                70,
                -48
            ]
        ],
        [
            [
                4348,
                2637
            ],
            [
                -53,
                -26
            ],
            [
                -30,
                -49
            ]
        ],
        [
            [
                4633,
                1472
            ],
            [
                0,
                -59
            ],
            [
                -39,
                -44
            ],
            [
                -9,
                -71
            ]
        ],
        [
            [
                4401,
                1714
            ],
            [
                36,
                48
            ],
            [
                0,
                2
            ],
            [
                57,
                8
            ]
        ],
        [
            [
                4494,
                1772
            ],
            [
                41,
                -30
            ],
            [
                -35,
                -91
            ],
            [
                58,
                -102
            ],
            [
                75,
                -77
            ]
        ],
        [
            [
                4448,
                2190
            ],
            [
                -121,
                -24
            ],
            [
                -28,
                -22
            ],
            [
                -46,
                26
            ],
            [
                -70,
                -41
            ]
        ],
        [
            [
                5501,
                1824
            ],
            [
                -27,
                -61
            ],
            [
                6,
                -70
            ],
            [
                84,
                -136
            ]
        ],
        [
            [
                5564,
                1557
            ],
            [
                -83,
                -11
            ],
            [
                -68,
                -34
            ],
            [
                -33,
                21
            ],
            [
                -80,
                -79
            ],
            [
                -36,
                -73
            ],
            [
                -61,
                -43
            ],
            [
                -44,
                11
            ],
            [
                -20,
                54
            ],
            [
                -43,
                -26
            ],
            [
                -87,
                4
            ]
        ],
        [
            [
                5009,
                1381
            ],
            [
                -3,
                -1
            ]
        ],
        [
            [
                4760,
                1497
            ],
            [
                -86,
                37
            ],
            [
                -41,
                -62
            ]
        ],
        [
            [
                4494,
                1772
            ],
            [
                5,
                66
            ],
            [
                76,
                19
            ],
            [
                46,
                -12
            ],
            [
                -4,
                97
            ],
            [
                64,
                12
            ],
            [
                59,
                91
            ]
        ],
        [
            [
                4869,
                3232
            ],
            [
                -122,
                -107
            ],
            [
                -26,
                -64
            ],
            [
                -75,
                -15
            ]
        ],
        [
            [
                5289,
                2712
            ],
            [
                -109,
                -113
            ],
            [
                -30,
                -84
            ]
        ],
        [
            [
                4672,
                1164
            ],
            [
                -69,
                26
            ]
        ],
        [
            [
                4447,
                791
            ],
            [
                -55,
                96
            ],
            [
                29,
                39
            ],
            [
                -31,
                38
            ]
        ],
        [
            [
                4390,
                964
            ],
            [
                17,
                103
            ],
            [
                30,
                -1
            ],
            [
                4,
                70
            ]
        ],
        [
            [
                5116,
                884
            ],
            [
                91,
                122
            ],
            [
                64,
                -29
            ],
            [
                -7,
                116
            ],
            [
                97,
                61
            ],
            [
                61,
                -34
            ],
            [
                164,
                21
            ],
            [
                21,
                33
            ],
            [
                -44,
                123
            ],
            [
                36,
                89
            ],
            [
                -1,
                1
            ],
            [
                -80,
                69
            ],
            [
                66,
                57
            ]
        ],
        [
            [
                5584,
                1513
            ],
            [
                65,
                -32
            ],
            [
                158,
                25
            ],
            [
                19,
                -40
            ],
            [
                -4,
                -198
            ],
            [
                51,
                -93
            ],
            [
                77,
                -94
            ],
            [
                48,
                -193
            ],
            [
                74,
                -145
            ],
            [
                -58,
                -67
            ],
            [
                7,
                -116
            ],
            [
                64,
                -11
            ],
            [
                -34,
                -53
            ],
            [
                -42,
                1
            ],
            [
                -64,
                -44
            ],
            [
                19,
                -30
            ],
            [
                -59,
                -32
            ],
            [
                -89,
                2
            ],
            [
                -50,
                30
            ],
            [
                2,
                116
            ],
            [
                -277,
                -101
            ],
            [
                -51,
                -86
            ],
            [
                -178,
                4
            ],
            [
                -80,
                83
            ],
            [
                -51,
                -17
            ],
            [
                -115,
                10
            ],
            [
                -72,
                -31
            ],
            [
                -71,
                18
            ]
        ],
        [
            [
                4390,
                964
            ],
            [
                -79,
                -21
            ],
            [
                -57,
                -93
            ],
            [
                -1,
                -52
            ],
            [
                -39,
                -72
            ],
            [
                20,
                -87
            ],
            [
                -29,
                -51
            ],
            [
                10,
                -50
            ],
            [
                -73,
                -3
            ],
            [
                13,
                -41
            ],
            [
                -84,
                -143
            ],
            [
                -110,
                -11
            ],
            [
                16,
                -71
            ],
            [
                -46,
                -22
            ],
            [
                -1,
                -42
            ]
        ],
        [
            [
                3930,
                205
            ],
            [
                -30,
                7
            ],
            [
                -80,
                226
            ],
            [
                58,
                102
            ],
            [
                -17,
                81
            ],
            [
                -32,
                34
            ],
            [
                54,
                45
            ],
            [
                22,
                109
            ]
        ],
        [
            [
                4347,
                104
            ],
            [
                -22,
                -104
            ],
            [
                -68,
                17
            ],
            [
                49,
                82
            ],
            [
                41,
                5
            ]
        ],
        [
            [
                4691,
                437
            ],
            [
                -9,
                -240
            ],
            [
                -247,
                2
            ],
            [
                -86,
                -86
            ],
            [
                -68,
                -12
            ],
            [
                -47,
                -35
            ],
            [
                -74,
                54
            ],
            [
                -22,
                -30
            ],
            [
                -109,
                -18
            ],
            [
                -11,
                29
            ],
            [
                -83,
                49
            ],
            [
                -5,
                55
            ]
        ],
        [
            [
                5564,
                1557
            ],
            [
                20,
                -44
            ]
        ],
        [
            [
                5004,
                1380
            ],
            [
                5,
                1
            ]
        ]
    ],
    transform: {
        scale: [
            0.0016811059105910583,
            0.0013387508750875088
        ],
        translate: [
            60.878597,
            23.698627
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3QC3y","bB7Pu"], "bB7Pu", "parcelRequire7ea9")

//# sourceMappingURL=index.3d214d75.js.map
