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
})({"ha8hf":[function(require,module,exports) {
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
var _mapCanvas = require("./scripts/mapCanvas");
var _districts = require("./geo-data/districts");
var _d3 = require("d3");
var _multiAttrsStyles = require("./scripts/multiAttrsStyles");
var _projections = require("./scripts/projections");
var _kpPunjab77 = require("./locs-data/kpPunjab-77");
var _kpPunjab77Default = parcelHelpers.interopDefault(_kpPunjab77);
var _locs77 = require("./locs-data/locs77");
var _locs77Default = parcelHelpers.interopDefault(_locs77);
const locsArr = [];
const pakDistFeatures = (0, _mapCanvas.getFeatures)({
    topoJSON: (0, _districts.districtsTopo),
    topoObjKey: "pakistan_districts"
}).filter((feature)=>![
        "Azad Jammu & Kashmir",
        "Gilgit-Baltistan"
    ].includes(feature.properties.province_territory));
console.log(new Set(pakDistFeatures.map((d)=>d.properties.province_territory)));
const pakMapCanvas = new (0, _mapCanvas.MapCanvas)({
    parentRef: document.querySelector("div#my-map"),
    containerClassName: "map-container",
    containerWidth: 2000,
    viewBoxWidth: 2000,
    viewBoxHeight: 2000,
    topoFeatures: pakDistFeatures,
    primaryID: "objectid"
});
pakMapCanvas.appendRegionPaths();
// const circs = pakMapCanvas.svg.selectAll("circle")
//   .attr("class", "const-loc")
//   .data(locs77)
//   .enter()
//   .append("circle")
//   .attr("cx", d => projection(d.location)[0])
//   .attr("cy", d => projection(d.location)[1])
//   .attr("r", 3)
//   .attr("fill", "#212121")
//   .attr("fill-opacity", 0.5);
pakMapCanvas.event("regionPaths", "click", (e)=>{
    const { scrollTop, scrollLeft } = document.documentElement;
    const locId = locsArr.length + 1;
    console.log(scrollLeft, scrollTop);
    pakMapCanvas.addPoint(e.clientX + scrollLeft, e.clientY + scrollTop, locId);
    locsArr.push({
        id: locId,
        location: (0, _projections.projection).invert([
            e.clientX + scrollLeft,
            e.clientY + scrollTop
        ])
    });
    console.log(locsArr);
    console.log(JSON.stringify(locsArr));
    (0, _d3.select)("h1#na-prog").html(`${locsArr.length}`);
}).event("regionPaths", "mouseover", function(e) {
    pakMapCanvas.svg.append("title").text((0, _d3.select)(this).datum().properties.districts);
}).event("regionPaths", "mouseout", function(e) {
    pakMapCanvas.svg.select("title").remove();
});
(0, _d3.select)("h1#na-prog").on("click", (e)=>{
    (0, _d3.select)(`circle#point-${locsArr.length}`).remove();
    locsArr.pop();
    (0, _d3.select)("h1#na-prog").html(`${locsArr.length}`);
}); // .event("regionPaths", "mouseover", function (e) {
 //   select(this).attr("fill", "black");
 // })
 // .event("regionPaths", "mouseout", function (e) {
 //   select(this).attr("fill", "grey");
 // });

},{"./scripts/mapCanvas":"1hgRh","./geo-data/districts":"dbdeE","d3":"17XFv","./scripts/multiAttrsStyles":"6aN1P","./scripts/projections":"dllZd","./locs-data/kpPunjab-77":"fdR0F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./locs-data/locs77":"2D72j"}],"1hgRh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFeatures", ()=>getFeatures);
parcelHelpers.export(exports, "MapCanvas", ()=>MapCanvas);
var _d3 = require("d3");
var _multiAttrsStyles = require("./multiAttrsStyles");
var _projections = require("./projections");
var _topojson = require("topojson");
// utilty to extract an array of features from a TopoJSON JSON
// the features array is a required input for the MapCanvas construcotr
const getFeatures = ({ topoJSON, topoObjKey })=>(0, _topojson.feature)(topoJSON, topoJSON.objects[topoObjKey]).features;
// Class for MapCanvas
// Template for generating instances
class MapCanvas {
    constructor({ parentRef, containerClassName = "map-container", containerWidth, viewBoxWidth, viewBoxHeight, topoFeatures, primaryID = "ADM1_PCODE" }){
        const root = (0, _d3.select)(parentRef);
        const container = root.append("div").attr("class", containerClassName).style("width", containerWidth);
        const svg = container.append("svg").style("width", "100%").attr("viewBox", `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
        Object.assign(this, {
            root,
            svg,
            topoFeatures,
            primaryID,
            geoPath: (0, _projections.geoPathGen)
        });
    }
    addFeatureProp(propName, callback) {
        this.topoFeatures.forEach((feature)=>feature[propName] = callback(feature));
    }
    addCentroids() {
        const { geoPath } = this;
        this.addFeatureProp("centroid", (feature)=>geoPath.centroid(feature));
    }
    remove() {
        this.root.selectAll("*").remove();
        this.svg = null; // what about other additions (map parts?)
    }
    appendRegionPaths({ groupId = null } = {}, attrsObj = {}, stylesObj = {}) {
        const { svg, topoFeatures, primaryID, geoPath } = this;
        const mapG = svg.append("g");
        if (groupId) mapG.attr("id", groupId);
        const regionPaths = mapG.selectAll(`path.region`).data(topoFeatures).join("path").attr("d", (d)=>geoPath(d)).attr("class", "region").attr("id", (d)=>d.properties[primaryID]).attr("fill", "grey").attr("transform-origin", (d)=>`${geoPath.centroid(d.geometry)[0]} ${geoPath.centroid(d.geometry)[1]}`).call((0, _multiAttrsStyles.attrs), attrsObj).call((0, _multiAttrsStyles.styles), stylesObj);
        this.regionPaths = regionPaths; // is there needs to be a better way? This will overwrite everytime we call this method. What about multiple layers
        return this;
    }
    appendRegionPoints({ groupId = null, pointRadius = (d)=>Math.random() * 12 } = {}, attrsObj = {}, stylesObj = {}) {
        const { svg, topoFeatures, primaryID } = this;
        this.addCentroids();
        const mapPointsG = svg.append("g");
        if (groupId) mapPointsG.attr("id", groupId);
        const regionPoints = mapPointsG.selectAll(`circle.mapCircle`).data(topoFeatures).join("circle").attr("cx", (d)=>d.centroid[0]).attr("cy", (d)=>d.centroid[1]).attr("r", pointRadius).attr("class", "mapCircle").attr("id", (d)=>d.properties[primaryID]).attr("fill", "white").call((0, _multiAttrsStyles.attrs), attrsObj).call((0, _multiAttrsStyles.styles), stylesObj);
        this.regionPoints = regionPoints;
        return this;
    }
    addPoint(x, y, id) {
        this.svg.append("circle").attr("id", `point-${id}`).attr("cx", x).attr("cy", y).attr("r", 2).attr("fill", "black");
    }
    event(selectionId, eventType, callback) {
        this[selectionId].on(eventType, callback);
        return this;
    }
}

},{"d3":"17XFv","./multiAttrsStyles":"6aN1P","./projections":"dllZd","topojson":"2tg3w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17XFv":[function(require,module,exports) {
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

},{"d3-array":false,"d3-axis":false,"d3-brush":"7TG1H","d3-chord":false,"d3-color":false,"d3-contour":false,"d3-delaunay":false,"d3-dispatch":false,"d3-drag":false,"d3-dsv":false,"d3-ease":false,"d3-fetch":false,"d3-force":false,"d3-format":false,"d3-geo":"01Z75","d3-hierarchy":false,"d3-interpolate":false,"d3-path":false,"d3-polygon":false,"d3-quadtree":false,"d3-random":false,"d3-scale":false,"d3-scale-chromatic":false,"d3-selection":"gn9gd","d3-shape":false,"d3-time":false,"d3-time-format":false,"d3-timer":false,"d3-transition":"4lorl","d3-zoom":"hQoq0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yX2W":[function(require,module,exports) {
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

},{"./bisect.js":false,"./ascending.js":false,"./bisector.js":false,"./blur.js":false,"./count.js":false,"./cross.js":false,"./cumsum.js":false,"./descending.js":false,"./deviation.js":false,"./extent.js":false,"./fsum.js":"7NEFi","./group.js":false,"./groupSort.js":false,"./bin.js":false,"./threshold/freedmanDiaconis.js":false,"./threshold/scott.js":false,"./threshold/sturges.js":false,"./max.js":false,"./maxIndex.js":false,"./mean.js":false,"./median.js":false,"./merge.js":"hviMC","./min.js":false,"./minIndex.js":false,"./mode.js":false,"./nice.js":false,"./pairs.js":false,"./permute.js":false,"./quantile.js":false,"./quickselect.js":false,"./range.js":false,"./rank.js":false,"./least.js":false,"./leastIndex.js":false,"./greatest.js":false,"./greatestIndex.js":false,"./scan.js":false,"./shuffle.js":false,"./sum.js":false,"./ticks.js":false,"./transpose.js":false,"./variance.js":false,"./zip.js":false,"./every.js":false,"./some.js":false,"./filter.js":false,"./map.js":false,"./reduce.js":false,"./reverse.js":false,"./sort.js":false,"./difference.js":false,"./disjoint.js":false,"./intersection.js":false,"./subset.js":false,"./superset.js":false,"./union.js":false,"internmap":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NEFi":[function(require,module,exports) {
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Adder", ()=>Adder);
parcelHelpers.export(exports, "fsum", ()=>fsum);
parcelHelpers.export(exports, "fcumsum", ()=>fcumsum);
class Adder {
    constructor(){
        this._partials = new Float64Array(32);
        this._n = 0;
    }
    add(x) {
        const p = this._partials;
        let i = 0;
        for(let j = 0; j < this._n && j < 32; j++){
            const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
            if (lo) p[i++] = lo;
            x = hi;
        }
        p[i] = x;
        this._n = i + 1;
        return this;
    }
    valueOf() {
        const p = this._partials;
        let n = this._n, x, y, lo, hi = 0;
        if (n > 0) {
            hi = p[--n];
            while(n > 0){
                x = hi;
                y = p[--n];
                hi = x + y;
                lo = y - (hi - x);
                if (lo) break;
            }
            if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
                y = lo * 2;
                x = hi + y;
                if (y == x - hi) hi = x;
            }
        }
        return hi;
    }
}
function fsum(values, valueof) {
    const adder = new Adder();
    if (valueof === undefined) {
        for (let value of values)if (value = +value) adder.add(value);
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) adder.add(value);
    }
    return +adder;
}
function fcumsum(values, valueof) {
    const adder = new Adder();
    let index = -1;
    return Float64Array.from(values, valueof === undefined ? (v)=>adder.add(+v || 0) : (v)=>adder.add(+valueof(v, ++index, values) || 0));
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

},{}],"hviMC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>merge);
function* flatten(arrays) {
    for (const array of arrays)yield* array;
}
function merge(arrays) {
    return Array.from(flatten(arrays));
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01Z75":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "geoArea", ()=>(0, _areaJsDefault.default));
parcelHelpers.export(exports, "geoBounds", ()=>(0, _boundsJsDefault.default));
parcelHelpers.export(exports, "geoCentroid", ()=>(0, _centroidJsDefault.default));
parcelHelpers.export(exports, "geoCircle", ()=>(0, _circleJsDefault.default));
parcelHelpers.export(exports, "geoClipAntimeridian", ()=>(0, _antimeridianJsDefault.default));
parcelHelpers.export(exports, "geoClipCircle", ()=>(0, _circleJsDefault1.default));
parcelHelpers.export(exports, "geoClipExtent", ()=>(0, _extentJsDefault.default)) // DEPRECATED! Use d3.geoIdentity().clipExtent(…).
;
parcelHelpers.export(exports, "geoClipRectangle", ()=>(0, _rectangleJsDefault.default));
parcelHelpers.export(exports, "geoContains", ()=>(0, _containsJsDefault.default));
parcelHelpers.export(exports, "geoDistance", ()=>(0, _distanceJsDefault.default));
parcelHelpers.export(exports, "geoGraticule", ()=>(0, _graticuleJsDefault.default));
parcelHelpers.export(exports, "geoGraticule10", ()=>(0, _graticuleJs.graticule10));
parcelHelpers.export(exports, "geoInterpolate", ()=>(0, _interpolateJsDefault.default));
parcelHelpers.export(exports, "geoLength", ()=>(0, _lengthJsDefault.default));
parcelHelpers.export(exports, "geoPath", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "geoAlbers", ()=>(0, _albersJsDefault.default));
parcelHelpers.export(exports, "geoAlbersUsa", ()=>(0, _albersUsaJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEqualArea", ()=>(0, _azimuthalEqualAreaJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEqualAreaRaw", ()=>(0, _azimuthalEqualAreaJs.azimuthalEqualAreaRaw));
parcelHelpers.export(exports, "geoAzimuthalEquidistant", ()=>(0, _azimuthalEquidistantJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEquidistantRaw", ()=>(0, _azimuthalEquidistantJs.azimuthalEquidistantRaw));
parcelHelpers.export(exports, "geoConicConformal", ()=>(0, _conicConformalJsDefault.default));
parcelHelpers.export(exports, "geoConicConformalRaw", ()=>(0, _conicConformalJs.conicConformalRaw));
parcelHelpers.export(exports, "geoConicEqualArea", ()=>(0, _conicEqualAreaJsDefault.default));
parcelHelpers.export(exports, "geoConicEqualAreaRaw", ()=>(0, _conicEqualAreaJs.conicEqualAreaRaw));
parcelHelpers.export(exports, "geoConicEquidistant", ()=>(0, _conicEquidistantJsDefault.default));
parcelHelpers.export(exports, "geoConicEquidistantRaw", ()=>(0, _conicEquidistantJs.conicEquidistantRaw));
parcelHelpers.export(exports, "geoEqualEarth", ()=>(0, _equalEarthJsDefault.default));
parcelHelpers.export(exports, "geoEqualEarthRaw", ()=>(0, _equalEarthJs.equalEarthRaw));
parcelHelpers.export(exports, "geoEquirectangular", ()=>(0, _equirectangularJsDefault.default));
parcelHelpers.export(exports, "geoEquirectangularRaw", ()=>(0, _equirectangularJs.equirectangularRaw));
parcelHelpers.export(exports, "geoGnomonic", ()=>(0, _gnomonicJsDefault.default));
parcelHelpers.export(exports, "geoGnomonicRaw", ()=>(0, _gnomonicJs.gnomonicRaw));
parcelHelpers.export(exports, "geoIdentity", ()=>(0, _identityJsDefault.default));
parcelHelpers.export(exports, "geoProjection", ()=>(0, _indexJsDefault1.default));
parcelHelpers.export(exports, "geoProjectionMutator", ()=>(0, _indexJs1.projectionMutator));
parcelHelpers.export(exports, "geoMercator", ()=>(0, _mercatorJsDefault.default));
parcelHelpers.export(exports, "geoMercatorRaw", ()=>(0, _mercatorJs.mercatorRaw));
parcelHelpers.export(exports, "geoNaturalEarth1", ()=>(0, _naturalEarth1JsDefault.default));
parcelHelpers.export(exports, "geoNaturalEarth1Raw", ()=>(0, _naturalEarth1Js.naturalEarth1Raw));
parcelHelpers.export(exports, "geoOrthographic", ()=>(0, _orthographicJsDefault.default));
parcelHelpers.export(exports, "geoOrthographicRaw", ()=>(0, _orthographicJs.orthographicRaw));
parcelHelpers.export(exports, "geoStereographic", ()=>(0, _stereographicJsDefault.default));
parcelHelpers.export(exports, "geoStereographicRaw", ()=>(0, _stereographicJs.stereographicRaw));
parcelHelpers.export(exports, "geoTransverseMercator", ()=>(0, _transverseMercatorJsDefault.default));
parcelHelpers.export(exports, "geoTransverseMercatorRaw", ()=>(0, _transverseMercatorJs.transverseMercatorRaw));
parcelHelpers.export(exports, "geoRotation", ()=>(0, _rotationJsDefault.default));
parcelHelpers.export(exports, "geoStream", ()=>(0, _streamJsDefault.default));
parcelHelpers.export(exports, "geoTransform", ()=>(0, _transformJsDefault.default));
var _areaJs = require("./area.js");
var _areaJsDefault = parcelHelpers.interopDefault(_areaJs);
var _boundsJs = require("./bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
var _centroidJs = require("./centroid.js");
var _centroidJsDefault = parcelHelpers.interopDefault(_centroidJs);
var _circleJs = require("./circle.js");
var _circleJsDefault = parcelHelpers.interopDefault(_circleJs);
var _antimeridianJs = require("./clip/antimeridian.js");
var _antimeridianJsDefault = parcelHelpers.interopDefault(_antimeridianJs);
var _circleJs1 = require("./clip/circle.js");
var _circleJsDefault1 = parcelHelpers.interopDefault(_circleJs1);
var _extentJs = require("./clip/extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _rectangleJs = require("./clip/rectangle.js");
var _rectangleJsDefault = parcelHelpers.interopDefault(_rectangleJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _distanceJs = require("./distance.js");
var _distanceJsDefault = parcelHelpers.interopDefault(_distanceJs);
var _graticuleJs = require("./graticule.js");
var _graticuleJsDefault = parcelHelpers.interopDefault(_graticuleJs);
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
var _lengthJs = require("./length.js");
var _lengthJsDefault = parcelHelpers.interopDefault(_lengthJs);
var _indexJs = require("./path/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _albersJs = require("./projection/albers.js");
var _albersJsDefault = parcelHelpers.interopDefault(_albersJs);
var _albersUsaJs = require("./projection/albersUsa.js");
var _albersUsaJsDefault = parcelHelpers.interopDefault(_albersUsaJs);
var _azimuthalEqualAreaJs = require("./projection/azimuthalEqualArea.js");
var _azimuthalEqualAreaJsDefault = parcelHelpers.interopDefault(_azimuthalEqualAreaJs);
var _azimuthalEquidistantJs = require("./projection/azimuthalEquidistant.js");
var _azimuthalEquidistantJsDefault = parcelHelpers.interopDefault(_azimuthalEquidistantJs);
var _conicConformalJs = require("./projection/conicConformal.js");
var _conicConformalJsDefault = parcelHelpers.interopDefault(_conicConformalJs);
var _conicEqualAreaJs = require("./projection/conicEqualArea.js");
var _conicEqualAreaJsDefault = parcelHelpers.interopDefault(_conicEqualAreaJs);
var _conicEquidistantJs = require("./projection/conicEquidistant.js");
var _conicEquidistantJsDefault = parcelHelpers.interopDefault(_conicEquidistantJs);
var _equalEarthJs = require("./projection/equalEarth.js");
var _equalEarthJsDefault = parcelHelpers.interopDefault(_equalEarthJs);
var _equirectangularJs = require("./projection/equirectangular.js");
var _equirectangularJsDefault = parcelHelpers.interopDefault(_equirectangularJs);
var _gnomonicJs = require("./projection/gnomonic.js");
var _gnomonicJsDefault = parcelHelpers.interopDefault(_gnomonicJs);
var _identityJs = require("./projection/identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _indexJs1 = require("./projection/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _mercatorJs = require("./projection/mercator.js");
var _mercatorJsDefault = parcelHelpers.interopDefault(_mercatorJs);
var _naturalEarth1Js = require("./projection/naturalEarth1.js");
var _naturalEarth1JsDefault = parcelHelpers.interopDefault(_naturalEarth1Js);
var _orthographicJs = require("./projection/orthographic.js");
var _orthographicJsDefault = parcelHelpers.interopDefault(_orthographicJs);
var _stereographicJs = require("./projection/stereographic.js");
var _stereographicJsDefault = parcelHelpers.interopDefault(_stereographicJs);
var _transverseMercatorJs = require("./projection/transverseMercator.js");
var _transverseMercatorJsDefault = parcelHelpers.interopDefault(_transverseMercatorJs);
var _rotationJs = require("./rotation.js");
var _rotationJsDefault = parcelHelpers.interopDefault(_rotationJs);
var _streamJs = require("./stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);

},{"./area.js":false,"./bounds.js":false,"./centroid.js":false,"./circle.js":false,"./clip/antimeridian.js":false,"./clip/circle.js":false,"./clip/extent.js":false,"./clip/rectangle.js":false,"./contains.js":false,"./distance.js":false,"./graticule.js":false,"./interpolate.js":false,"./length.js":false,"./path/index.js":"lnhfi","./projection/albers.js":false,"./projection/albersUsa.js":false,"./projection/azimuthalEqualArea.js":false,"./projection/azimuthalEquidistant.js":false,"./projection/conicConformal.js":false,"./projection/conicEqualArea.js":false,"./projection/conicEquidistant.js":false,"./projection/equalEarth.js":false,"./projection/equirectangular.js":false,"./projection/gnomonic.js":false,"./projection/identity.js":false,"./projection/index.js":false,"./projection/mercator.js":"eCRDH","./projection/naturalEarth1.js":false,"./projection/orthographic.js":false,"./projection/stereographic.js":false,"./projection/transverseMercator.js":false,"./rotation.js":false,"./stream.js":false,"./transform.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6BNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Generates a circle centered at [0°, 0°], with a given radius and precision.
parcelHelpers.export(exports, "circleStream", ()=>circleStream);
parcelHelpers.export(exports, "default", ()=>function() {
        var center = (0, _constantJsDefault.default)([
            0,
            0
        ]), radius = (0, _constantJsDefault.default)(90), precision = (0, _constantJsDefault.default)(6), ring, rotate, stream = {
            point: point
        };
        function point(x, y) {
            ring.push(x = rotate(x, y));
            x[0] *= (0, _mathJs.degrees), x[1] *= (0, _mathJs.degrees);
        }
        function circle() {
            var c = center.apply(this, arguments), r = radius.apply(this, arguments) * (0, _mathJs.radians), p = precision.apply(this, arguments) * (0, _mathJs.radians);
            ring = [];
            rotate = (0, _rotationJs.rotateRadians)(-c[0] * (0, _mathJs.radians), -c[1] * (0, _mathJs.radians), 0).invert;
            circleStream(stream, r, p, 1);
            c = {
                type: "Polygon",
                coordinates: [
                    ring
                ]
            };
            ring = rotate = null;
            return c;
        }
        circle.center = function(_) {
            return arguments.length ? (center = typeof _ === "function" ? _ : (0, _constantJsDefault.default)([
                +_[0],
                +_[1]
            ]), circle) : center;
        };
        circle.radius = function(_) {
            return arguments.length ? (radius = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), circle) : radius;
        };
        circle.precision = function(_) {
            return arguments.length ? (precision = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), circle) : precision;
        };
        return circle;
    });
var _cartesianJs = require("./cartesian.js");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _mathJs = require("./math.js");
var _rotationJs = require("./rotation.js");
function circleStream(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = (0, _mathJs.cos)(radius), sinRadius = (0, _mathJs.sin)(radius), step = direction * delta;
    if (t0 == null) {
        t0 = radius + direction * (0, _mathJs.tau);
        t1 = radius - step / 2;
    } else {
        t0 = circleRadius(cosRadius, t0);
        t1 = circleRadius(cosRadius, t1);
        if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * (0, _mathJs.tau);
    }
    for(var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step){
        point = (0, _cartesianJs.spherical)([
            cosRadius,
            -sinRadius * (0, _mathJs.cos)(t),
            -sinRadius * (0, _mathJs.sin)(t)
        ]);
        stream.point(point[0], point[1]);
    }
}
// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
    point = (0, _cartesianJs.cartesian)(point), point[0] -= cosRadius;
    (0, _cartesianJs.cartesianNormalizeInPlace)(point);
    var radius = (0, _mathJs.acos)(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + (0, _mathJs.tau) - (0, _mathJs.epsilon)) % (0, _mathJs.tau);
}

},{"./cartesian.js":"4Lw8W","./constant.js":"1uZ9u","./math.js":"8TMeU","./rotation.js":"g2pLL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lw8W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spherical", ()=>spherical);
parcelHelpers.export(exports, "cartesian", ()=>cartesian);
parcelHelpers.export(exports, "cartesianDot", ()=>cartesianDot);
parcelHelpers.export(exports, "cartesianCross", ()=>cartesianCross);
// TODO return a
parcelHelpers.export(exports, "cartesianAddInPlace", ()=>cartesianAddInPlace);
parcelHelpers.export(exports, "cartesianScale", ()=>cartesianScale);
// TODO return d
parcelHelpers.export(exports, "cartesianNormalizeInPlace", ()=>cartesianNormalizeInPlace);
var _mathJs = require("./math.js");
function spherical(cartesian) {
    return [
        (0, _mathJs.atan2)(cartesian[1], cartesian[0]),
        (0, _mathJs.asin)(cartesian[2])
    ];
}
function cartesian(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = (0, _mathJs.cos)(phi);
    return [
        cosPhi * (0, _mathJs.cos)(lambda),
        cosPhi * (0, _mathJs.sin)(lambda),
        (0, _mathJs.sin)(phi)
    ];
}
function cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}
function cartesianAddInPlace(a, b) {
    a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k) {
    return [
        vector[0] * k,
        vector[1] * k,
        vector[2] * k
    ];
}
function cartesianNormalizeInPlace(d) {
    var l = (0, _mathJs.sqrt)(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
}

},{"./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8TMeU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "epsilon", ()=>epsilon);
parcelHelpers.export(exports, "epsilon2", ()=>epsilon2);
parcelHelpers.export(exports, "pi", ()=>pi);
parcelHelpers.export(exports, "halfPi", ()=>halfPi);
parcelHelpers.export(exports, "quarterPi", ()=>quarterPi);
parcelHelpers.export(exports, "tau", ()=>tau);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "radians", ()=>radians);
parcelHelpers.export(exports, "abs", ()=>abs);
parcelHelpers.export(exports, "atan", ()=>atan);
parcelHelpers.export(exports, "atan2", ()=>atan2);
parcelHelpers.export(exports, "cos", ()=>cos);
parcelHelpers.export(exports, "ceil", ()=>ceil);
parcelHelpers.export(exports, "exp", ()=>exp);
parcelHelpers.export(exports, "floor", ()=>floor);
parcelHelpers.export(exports, "hypot", ()=>hypot);
parcelHelpers.export(exports, "log", ()=>log);
parcelHelpers.export(exports, "pow", ()=>pow);
parcelHelpers.export(exports, "sin", ()=>sin);
parcelHelpers.export(exports, "sign", ()=>sign);
parcelHelpers.export(exports, "sqrt", ()=>sqrt);
parcelHelpers.export(exports, "tan", ()=>tan);
parcelHelpers.export(exports, "acos", ()=>acos);
parcelHelpers.export(exports, "asin", ()=>asin);
parcelHelpers.export(exports, "haversin", ()=>haversin);
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var hypot = Math.hypot;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
function haversin(x) {
    return (x = sin(x / 2)) * x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1uZ9u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return function() {
            return x;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2pLL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rotateRadians", ()=>rotateRadians);
parcelHelpers.export(exports, "default", ()=>function(rotate) {
        rotate = rotateRadians(rotate[0] * (0, _mathJs.radians), rotate[1] * (0, _mathJs.radians), rotate.length > 2 ? rotate[2] * (0, _mathJs.radians) : 0);
        function forward(coordinates) {
            coordinates = rotate(coordinates[0] * (0, _mathJs.radians), coordinates[1] * (0, _mathJs.radians));
            return coordinates[0] *= (0, _mathJs.degrees), coordinates[1] *= (0, _mathJs.degrees), coordinates;
        }
        forward.invert = function(coordinates) {
            coordinates = rotate.invert(coordinates[0] * (0, _mathJs.radians), coordinates[1] * (0, _mathJs.radians));
            return coordinates[0] *= (0, _mathJs.degrees), coordinates[1] *= (0, _mathJs.degrees), coordinates;
        };
        return forward;
    });
var _composeJs = require("./compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _mathJs = require("./math.js");
function rotationIdentity(lambda, phi) {
    if ((0, _mathJs.abs)(lambda) > (0, _mathJs.pi)) lambda -= Math.round(lambda / (0, _mathJs.tau)) * (0, _mathJs.tau);
    return [
        lambda,
        phi
    ];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= (0, _mathJs.tau)) ? deltaPhi || deltaGamma ? (0, _composeJsDefault.default)(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
        lambda += deltaLambda;
        if ((0, _mathJs.abs)(lambda) > (0, _mathJs.pi)) lambda -= Math.round(lambda / (0, _mathJs.tau)) * (0, _mathJs.tau);
        return [
            lambda,
            phi
        ];
    };
}
function rotationLambda(deltaLambda) {
    var rotation = forwardRotationLambda(deltaLambda);
    rotation.invert = forwardRotationLambda(-deltaLambda);
    return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = (0, _mathJs.cos)(deltaPhi), sinDeltaPhi = (0, _mathJs.sin)(deltaPhi), cosDeltaGamma = (0, _mathJs.cos)(deltaGamma), sinDeltaGamma = (0, _mathJs.sin)(deltaGamma);
    function rotation(lambda, phi) {
        var cosPhi = (0, _mathJs.cos)(phi), x = (0, _mathJs.cos)(lambda) * cosPhi, y = (0, _mathJs.sin)(lambda) * cosPhi, z = (0, _mathJs.sin)(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
        return [
            (0, _mathJs.atan2)(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
            (0, _mathJs.asin)(k * cosDeltaGamma + y * sinDeltaGamma)
        ];
    }
    rotation.invert = function(lambda, phi) {
        var cosPhi = (0, _mathJs.cos)(phi), x = (0, _mathJs.cos)(lambda) * cosPhi, y = (0, _mathJs.sin)(lambda) * cosPhi, z = (0, _mathJs.sin)(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
        return [
            (0, _mathJs.atan2)(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
            (0, _mathJs.asin)(k * cosDeltaPhi - x * sinDeltaPhi)
        ];
    };
    return rotation;
}

},{"./compose.js":"lJD5n","./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJD5n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        function compose(x, y) {
            return x = a(x, y), b(x[0], x[1]);
        }
        if (a.invert && b.invert) compose.invert = function(x, y) {
            return x = b.invert(x, y), x && a.invert(x[0], x[1]);
        };
        return compose;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Pn7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mathJs = require("../math.js");
exports.default = (0, _indexJsDefault.default)(function() {
    return true;
}, clipAntimeridianLine, clipAntimeridianInterpolate, [
    -(0, _mathJs.pi),
    -(0, _mathJs.halfPi)
]);
// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
    var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean; // no intersections
    return {
        lineStart: function() {
            stream.lineStart();
            clean = 1;
        },
        point: function(lambda1, phi1) {
            var sign1 = lambda1 > 0 ? (0, _mathJs.pi) : -(0, _mathJs.pi), delta = (0, _mathJs.abs)(lambda1 - lambda0);
            if ((0, _mathJs.abs)(delta - (0, _mathJs.pi)) < (0, _mathJs.epsilon)) {
                stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? (0, _mathJs.halfPi) : -(0, _mathJs.halfPi));
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                stream.point(lambda1, phi0);
                clean = 0;
            } else if (sign0 !== sign1 && delta >= (0, _mathJs.pi)) {
                if ((0, _mathJs.abs)(lambda0 - sign0) < (0, _mathJs.epsilon)) lambda0 -= sign0 * (0, _mathJs.epsilon); // handle degeneracies
                if ((0, _mathJs.abs)(lambda1 - sign1) < (0, _mathJs.epsilon)) lambda1 -= sign1 * (0, _mathJs.epsilon);
                phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                clean = 0;
            }
            stream.point(lambda0 = lambda1, phi0 = phi1);
            sign0 = sign1;
        },
        lineEnd: function() {
            stream.lineEnd();
            lambda0 = phi0 = NaN;
        },
        clean: function() {
            return 2 - clean; // if intersections, rejoin first and last segments
        }
    };
}
function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0, cosPhi1, sinLambda0Lambda1 = (0, _mathJs.sin)(lambda0 - lambda1);
    return (0, _mathJs.abs)(sinLambda0Lambda1) > (0, _mathJs.epsilon) ? (0, _mathJs.atan)(((0, _mathJs.sin)(phi0) * (cosPhi1 = (0, _mathJs.cos)(phi1)) * (0, _mathJs.sin)(lambda1) - (0, _mathJs.sin)(phi1) * (cosPhi0 = (0, _mathJs.cos)(phi0)) * (0, _mathJs.sin)(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
        phi = direction * (0, _mathJs.halfPi);
        stream.point(-(0, _mathJs.pi), phi);
        stream.point(0, phi);
        stream.point((0, _mathJs.pi), phi);
        stream.point((0, _mathJs.pi), 0);
        stream.point((0, _mathJs.pi), -phi);
        stream.point(0, -phi);
        stream.point(-(0, _mathJs.pi), -phi);
        stream.point(-(0, _mathJs.pi), 0);
        stream.point(-(0, _mathJs.pi), phi);
    } else if ((0, _mathJs.abs)(from[0] - to[0]) > (0, _mathJs.epsilon)) {
        var lambda = from[0] < to[0] ? (0, _mathJs.pi) : -(0, _mathJs.pi);
        phi = direction * lambda / 2;
        stream.point(-lambda, phi);
        stream.point(0, phi);
        stream.point(lambda, phi);
    } else stream.point(to[0], to[1]);
}

},{"./index.js":"bCtcN","../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCtcN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(pointVisible, clipLine, interpolate, start) {
        return function(sink) {
            var line = clipLine(sink), ringBuffer = (0, _bufferJsDefault.default)(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
            var clip = {
                point: point,
                lineStart: lineStart,
                lineEnd: lineEnd,
                polygonStart: function() {
                    clip.point = pointRing;
                    clip.lineStart = ringStart;
                    clip.lineEnd = ringEnd;
                    segments = [];
                    polygon = [];
                },
                polygonEnd: function() {
                    clip.point = point;
                    clip.lineStart = lineStart;
                    clip.lineEnd = lineEnd;
                    segments = (0, _d3Array.merge)(segments);
                    var startInside = (0, _polygonContainsJsDefault.default)(polygon, start);
                    if (segments.length) {
                        if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                        (0, _rejoinJsDefault.default)(segments, compareIntersection, startInside, interpolate, sink);
                    } else if (startInside) {
                        if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                        sink.lineStart();
                        interpolate(null, null, 1, sink);
                        sink.lineEnd();
                    }
                    if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
                    segments = polygon = null;
                },
                sphere: function() {
                    sink.polygonStart();
                    sink.lineStart();
                    interpolate(null, null, 1, sink);
                    sink.lineEnd();
                    sink.polygonEnd();
                }
            };
            function point(lambda, phi) {
                if (pointVisible(lambda, phi)) sink.point(lambda, phi);
            }
            function pointLine(lambda, phi) {
                line.point(lambda, phi);
            }
            function lineStart() {
                clip.point = pointLine;
                line.lineStart();
            }
            function lineEnd() {
                clip.point = point;
                line.lineEnd();
            }
            function pointRing(lambda, phi) {
                ring.push([
                    lambda,
                    phi
                ]);
                ringSink.point(lambda, phi);
            }
            function ringStart() {
                ringSink.lineStart();
                ring = [];
            }
            function ringEnd() {
                pointRing(ring[0][0], ring[0][1]);
                ringSink.lineEnd();
                var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point;
                ring.pop();
                polygon.push(ring);
                ring = null;
                if (!n) return;
                // No intersections.
                if (clean & 1) {
                    segment = ringSegments[0];
                    if ((m = segment.length - 1) > 0) {
                        if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                        sink.lineStart();
                        for(i = 0; i < m; ++i)sink.point((point = segment[i])[0], point[1]);
                        sink.lineEnd();
                    }
                    return;
                }
                // Rejoin connected segments.
                // TODO reuse ringBuffer.rejoin()?
                if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
                segments.push(ringSegments.filter(validSegment));
            }
            return clip;
        };
    });
var _bufferJs = require("./buffer.js");
var _bufferJsDefault = parcelHelpers.interopDefault(_bufferJs);
var _rejoinJs = require("./rejoin.js");
var _rejoinJsDefault = parcelHelpers.interopDefault(_rejoinJs);
var _mathJs = require("../math.js");
var _polygonContainsJs = require("../polygonContains.js");
var _polygonContainsJsDefault = parcelHelpers.interopDefault(_polygonContainsJs);
var _d3Array = require("d3-array");
function validSegment(segment) {
    return segment.length > 1;
}
// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - (0, _mathJs.halfPi) - (0, _mathJs.epsilon) : (0, _mathJs.halfPi) - a[1]) - ((b = b.x)[0] < 0 ? b[1] - (0, _mathJs.halfPi) - (0, _mathJs.epsilon) : (0, _mathJs.halfPi) - b[1]);
}

},{"./buffer.js":"6MwC2","./rejoin.js":"4Cpqb","../math.js":"8TMeU","../polygonContains.js":"k8u1G","d3-array":"1yX2W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MwC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var lines = [], line;
        return {
            point: function(x, y, m) {
                line.push([
                    x,
                    y,
                    m
                ]);
            },
            lineStart: function() {
                lines.push(line = []);
            },
            lineEnd: (0, _noopJsDefault.default),
            rejoin: function() {
                if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
            },
            result: function() {
                var result = lines;
                lines = [];
                line = null;
                return result;
            }
        };
    });
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);

},{"../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bROOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>noop);
function noop() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Cpqb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
parcelHelpers.export(exports, "default", ()=>function(segments, compareIntersection, startInside, interpolate, stream) {
        var subject = [], clip = [], i, n;
        segments.forEach(function(segment) {
            if ((n = segment.length - 1) <= 0) return;
            var n, p0 = segment[0], p1 = segment[n], x;
            if ((0, _pointEqualJsDefault.default)(p0, p1)) {
                if (!p0[2] && !p1[2]) {
                    stream.lineStart();
                    for(i = 0; i < n; ++i)stream.point((p0 = segment[i])[0], p0[1]);
                    stream.lineEnd();
                    return;
                }
                // handle degenerate cases by moving the point
                p1[0] += 2 * (0, _mathJs.epsilon);
            }
            subject.push(x = new Intersection(p0, segment, null, true));
            clip.push(x.o = new Intersection(p0, null, x, false));
            subject.push(x = new Intersection(p1, segment, null, false));
            clip.push(x.o = new Intersection(p1, null, x, true));
        });
        if (!subject.length) return;
        clip.sort(compareIntersection);
        link(subject);
        link(clip);
        for(i = 0, n = clip.length; i < n; ++i)clip[i].e = startInside = !startInside;
        var start = subject[0], points, point;
        while(true){
            // Find first unvisited intersection.
            var current = start, isSubject = true;
            while(current.v)if ((current = current.n) === start) return;
            points = current.z;
            stream.lineStart();
            do {
                current.v = current.o.v = true;
                if (current.e) {
                    if (isSubject) for(i = 0, n = points.length; i < n; ++i)stream.point((point = points[i])[0], point[1]);
                    else interpolate(current.x, current.n.x, 1, stream);
                    current = current.n;
                } else {
                    if (isSubject) {
                        points = current.p.z;
                        for(i = points.length - 1; i >= 0; --i)stream.point((point = points[i])[0], point[1]);
                    } else interpolate(current.x, current.p.x, -1, stream);
                    current = current.p;
                }
                current = current.o;
                points = current.z;
                isSubject = !isSubject;
            }while (!current.v);
            stream.lineEnd();
        }
    });
var _pointEqualJs = require("../pointEqual.js");
var _pointEqualJsDefault = parcelHelpers.interopDefault(_pointEqualJs);
var _mathJs = require("../math.js");
function Intersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other; // another intersection
    this.e = entry; // is an entry?
    this.v = false; // visited
    this.n = this.p = null; // next & previous
}
function link(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while(++i < n){
        a.n = b = array[i];
        b.p = a;
        a = b;
    }
    a.n = b = array[0];
    b.p = a;
}

},{"../pointEqual.js":"5FEbl","../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FEbl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        return (0, _mathJs.abs)(a[0] - b[0]) < (0, _mathJs.epsilon) && (0, _mathJs.abs)(a[1] - b[1]) < (0, _mathJs.epsilon);
    });
var _mathJs = require("./math.js");

},{"./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8u1G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(polygon, point) {
        var lambda = longitude(point), phi = point[1], sinPhi = (0, _mathJs.sin)(phi), normal = [
            (0, _mathJs.sin)(lambda),
            -(0, _mathJs.cos)(lambda),
            0
        ], angle = 0, winding = 0;
        var sum = new (0, _d3Array.Adder)();
        if (sinPhi === 1) phi = (0, _mathJs.halfPi) + (0, _mathJs.epsilon);
        else if (sinPhi === -1) phi = -(0, _mathJs.halfPi) - (0, _mathJs.epsilon);
        for(var i = 0, n = polygon.length; i < n; ++i){
            if (!(m = (ring = polygon[i]).length)) continue;
            var ring, m, point0 = ring[m - 1], lambda0 = longitude(point0), phi0 = point0[1] / 2 + (0, _mathJs.quarterPi), sinPhi0 = (0, _mathJs.sin)(phi0), cosPhi0 = (0, _mathJs.cos)(phi0);
            for(var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1){
                var point1 = ring[j], lambda1 = longitude(point1), phi1 = point1[1] / 2 + (0, _mathJs.quarterPi), sinPhi1 = (0, _mathJs.sin)(phi1), cosPhi1 = (0, _mathJs.cos)(phi1), delta = lambda1 - lambda0, sign = delta >= 0 ? 1 : -1, absDelta = sign * delta, antimeridian = absDelta > (0, _mathJs.pi), k = sinPhi0 * sinPhi1;
                sum.add((0, _mathJs.atan2)(k * sign * (0, _mathJs.sin)(absDelta), cosPhi0 * cosPhi1 + k * (0, _mathJs.cos)(absDelta)));
                angle += antimeridian ? delta + sign * (0, _mathJs.tau) : delta;
                // Are the longitudes either side of the point’s meridian (lambda),
                // and are the latitudes smaller than the parallel (phi)?
                if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
                    var arc = (0, _cartesianJs.cartesianCross)((0, _cartesianJs.cartesian)(point0), (0, _cartesianJs.cartesian)(point1));
                    (0, _cartesianJs.cartesianNormalizeInPlace)(arc);
                    var intersection = (0, _cartesianJs.cartesianCross)(normal, arc);
                    (0, _cartesianJs.cartesianNormalizeInPlace)(intersection);
                    var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * (0, _mathJs.asin)(intersection[2]);
                    if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) winding += antimeridian ^ delta >= 0 ? 1 : -1;
                }
            }
        }
        // First, determine whether the South pole is inside or outside:
        //
        // It is inside if:
        // * the polygon winds around it in a clockwise direction.
        // * the polygon does not (cumulatively) wind around it, but has a negative
        //   (counter-clockwise) area.
        //
        // Second, count the (signed) number of times a segment crosses a lambda
        // from the point to the South pole.  If it is zero, then the point is the
        // same side as the South pole.
        return (angle < -(0, _mathJs.epsilon) || angle < (0, _mathJs.epsilon) && sum < -(0, _mathJs.epsilon2)) ^ winding & 1;
    });
var _d3Array = require("d3-array");
var _cartesianJs = require("./cartesian.js");
var _mathJs = require("./math.js");
function longitude(point) {
    return (0, _mathJs.abs)(point[0]) <= (0, _mathJs.pi) ? point[0] : (0, _mathJs.sign)(point[0]) * (((0, _mathJs.abs)(point[0]) + (0, _mathJs.pi)) % (0, _mathJs.tau) - (0, _mathJs.pi));
}

},{"d3-array":"1yX2W","./cartesian.js":"4Lw8W","./math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6JGCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(radius) {
        var cr = (0, _mathJs.cos)(radius), delta = 6 * (0, _mathJs.radians), smallRadius = cr > 0, notHemisphere = (0, _mathJs.abs)(cr) > (0, _mathJs.epsilon); // TODO optimise for this common case
        function interpolate(from, to, direction, stream) {
            (0, _circleJs.circleStream)(stream, radius, delta, direction, from, to);
        }
        function visible(lambda, phi) {
            return (0, _mathJs.cos)(lambda) * (0, _mathJs.cos)(phi) > cr;
        }
        // Takes a line and cuts into visible segments. Return values used for polygon
        // clipping: 0 - there were intersections or the line was empty; 1 - no
        // intersections 2 - there were intersections, and the first and last segments
        // should be rejoined.
        function clipLine(stream) {
            var point0, c0, v0, v00, clean; // no intersections
            return {
                lineStart: function() {
                    v00 = v0 = false;
                    clean = 1;
                },
                point: function(lambda, phi) {
                    var point1 = [
                        lambda,
                        phi
                    ], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? (0, _mathJs.pi) : -(0, _mathJs.pi)), phi) : 0;
                    if (!point0 && (v00 = v0 = v)) stream.lineStart();
                    if (v !== v0) {
                        point2 = intersect(point0, point1);
                        if (!point2 || (0, _pointEqualJsDefault.default)(point0, point2) || (0, _pointEqualJsDefault.default)(point1, point2)) point1[2] = 1;
                    }
                    if (v !== v0) {
                        clean = 0;
                        if (v) {
                            // outside going in
                            stream.lineStart();
                            point2 = intersect(point1, point0);
                            stream.point(point2[0], point2[1]);
                        } else {
                            // inside going out
                            point2 = intersect(point0, point1);
                            stream.point(point2[0], point2[1], 2);
                            stream.lineEnd();
                        }
                        point0 = point2;
                    } else if (notHemisphere && point0 && smallRadius ^ v) {
                        var t;
                        // If the codes for two points are different, or are both zero,
                        // and there this segment intersects with the small circle.
                        if (!(c & c0) && (t = intersect(point1, point0, true))) {
                            clean = 0;
                            if (smallRadius) {
                                stream.lineStart();
                                stream.point(t[0][0], t[0][1]);
                                stream.point(t[1][0], t[1][1]);
                                stream.lineEnd();
                            } else {
                                stream.point(t[1][0], t[1][1]);
                                stream.lineEnd();
                                stream.lineStart();
                                stream.point(t[0][0], t[0][1], 3);
                            }
                        }
                    }
                    if (v && (!point0 || !(0, _pointEqualJsDefault.default)(point0, point1))) stream.point(point1[0], point1[1]);
                    point0 = point1, v0 = v, c0 = c;
                },
                lineEnd: function() {
                    if (v0) stream.lineEnd();
                    point0 = null;
                },
                // Rejoin first and last segments if there were intersections and the first
                // and last points were visible.
                clean: function() {
                    return clean | (v00 && v0) << 1;
                }
            };
        }
        // Intersects the great circle between a and b with the clip circle.
        function intersect(a, b, two) {
            var pa = (0, _cartesianJs.cartesian)(a), pb = (0, _cartesianJs.cartesian)(b);
            // We have two planes, n1.p = d1 and n2.p = d2.
            // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
            var n1 = [
                1,
                0,
                0
            ], n2 = (0, _cartesianJs.cartesianCross)(pa, pb), n2n2 = (0, _cartesianJs.cartesianDot)(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
            // Two polar points.
            if (!determinant) return !two && a;
            var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = (0, _cartesianJs.cartesianCross)(n1, n2), A = (0, _cartesianJs.cartesianScale)(n1, c1), B = (0, _cartesianJs.cartesianScale)(n2, c2);
            (0, _cartesianJs.cartesianAddInPlace)(A, B);
            // Solve |p(t)|^2 = 1.
            var u = n1xn2, w = (0, _cartesianJs.cartesianDot)(A, u), uu = (0, _cartesianJs.cartesianDot)(u, u), t2 = w * w - uu * ((0, _cartesianJs.cartesianDot)(A, A) - 1);
            if (t2 < 0) return;
            var t = (0, _mathJs.sqrt)(t2), q = (0, _cartesianJs.cartesianScale)(u, (-w - t) / uu);
            (0, _cartesianJs.cartesianAddInPlace)(q, A);
            q = (0, _cartesianJs.spherical)(q);
            if (!two) return q;
            // Two intersection points.
            var lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
            if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
            var delta = lambda1 - lambda0, polar = (0, _mathJs.abs)(delta - (0, _mathJs.pi)) < (0, _mathJs.epsilon), meridian = polar || delta < (0, _mathJs.epsilon);
            if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
            // Check that the first point is between a and b.
            if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < ((0, _mathJs.abs)(q[0] - lambda0) < (0, _mathJs.epsilon) ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > (0, _mathJs.pi) ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
                var q1 = (0, _cartesianJs.cartesianScale)(u, (-w + t) / uu);
                (0, _cartesianJs.cartesianAddInPlace)(q1, A);
                return [
                    q,
                    (0, _cartesianJs.spherical)(q1)
                ];
            }
        }
        // Generates a 4-bit vector representing the location of a point relative to
        // the small circle's bounding box.
        function code(lambda, phi) {
            var r = smallRadius ? radius : (0, _mathJs.pi) - radius, code = 0;
            if (lambda < -r) code |= 1; // left
            else if (lambda > r) code |= 2; // right
            if (phi < -r) code |= 4; // below
            else if (phi > r) code |= 8; // above
            return code;
        }
        return (0, _indexJsDefault.default)(visible, clipLine, interpolate, smallRadius ? [
            0,
            -radius
        ] : [
            -(0, _mathJs.pi),
            radius - (0, _mathJs.pi)
        ]);
    });
var _cartesianJs = require("../cartesian.js");
var _circleJs = require("../circle.js");
var _mathJs = require("../math.js");
var _pointEqualJs = require("../pointEqual.js");
var _pointEqualJsDefault = parcelHelpers.interopDefault(_pointEqualJs);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);

},{"../cartesian.js":"4Lw8W","../circle.js":"b6BNx","../math.js":"8TMeU","../pointEqual.js":"5FEbl","./index.js":"bCtcN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5auAi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>clipRectangle);
var _mathJs = require("../math.js");
var _bufferJs = require("./buffer.js");
var _bufferJsDefault = parcelHelpers.interopDefault(_bufferJs);
var _lineJs = require("./line.js");
var _lineJsDefault = parcelHelpers.interopDefault(_lineJs);
var _rejoinJs = require("./rejoin.js");
var _rejoinJsDefault = parcelHelpers.interopDefault(_rejoinJs);
var _d3Array = require("d3-array");
var clipMax = 1e9, clipMin = -clipMax;
function clipRectangle(x0, y0, x1, y1) {
    function visible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
    }
    function interpolate(from, to, direction, stream) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
        while ((a = (a + direction + 4) % 4) !== a1);
        else stream.point(to[0], to[1]);
    }
    function corner(p, direction) {
        return (0, _mathJs.abs)(p[0] - x0) < (0, _mathJs.epsilon) ? direction > 0 ? 0 : 3 : (0, _mathJs.abs)(p[0] - x1) < (0, _mathJs.epsilon) ? direction > 0 ? 2 : 1 : (0, _mathJs.abs)(p[1] - y0) < (0, _mathJs.epsilon) ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
    }
    function compareIntersection(a, b) {
        return comparePoint(a.x, b.x);
    }
    function comparePoint(a, b) {
        var ca = corner(a, 1), cb = corner(b, 1);
        return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
    return function(stream) {
        var activeStream = stream, bufferStream = (0, _bufferJsDefault.default)(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
        var clipStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: polygonStart,
            polygonEnd: polygonEnd
        };
        function point(x, y) {
            if (visible(x, y)) activeStream.point(x, y);
        }
        function polygonInside() {
            var winding = 0;
            for(var i = 0, n = polygon.length; i < n; ++i)for(var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j){
                a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
                if (a1 <= y1) {
                    if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
                } else if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
            }
            return winding;
        }
        // Buffer geometry within a polygon and then clip it en masse.
        function polygonStart() {
            activeStream = bufferStream, segments = [], polygon = [], clean = true;
        }
        function polygonEnd() {
            var startInside = polygonInside(), cleanInside = clean && startInside, visible = (segments = (0, _d3Array.merge)(segments)).length;
            if (cleanInside || visible) {
                stream.polygonStart();
                if (cleanInside) {
                    stream.lineStart();
                    interpolate(null, null, 1, stream);
                    stream.lineEnd();
                }
                if (visible) (0, _rejoinJsDefault.default)(segments, compareIntersection, startInside, interpolate, stream);
                stream.polygonEnd();
            }
            activeStream = stream, segments = polygon = ring = null;
        }
        function lineStart() {
            clipStream.point = linePoint;
            if (polygon) polygon.push(ring = []);
            first = true;
            v_ = false;
            x_ = y_ = NaN;
        }
        // TODO rather than special-case polygons, simply handle them separately.
        // Ideally, coincident intersection points should be jittered to avoid
        // clipping issues.
        function lineEnd() {
            if (segments) {
                linePoint(x__, y__);
                if (v__ && v_) bufferStream.rejoin();
                segments.push(bufferStream.result());
            }
            clipStream.point = point;
            if (v_) activeStream.lineEnd();
        }
        function linePoint(x, y) {
            var v = visible(x, y);
            if (polygon) ring.push([
                x,
                y
            ]);
            if (first) {
                x__ = x, y__ = y, v__ = v;
                first = false;
                if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                }
            } else if (v && v_) activeStream.point(x, y);
            else {
                var a = [
                    x_ = Math.max(clipMin, Math.min(clipMax, x_)),
                    y_ = Math.max(clipMin, Math.min(clipMax, y_))
                ], b = [
                    x = Math.max(clipMin, Math.min(clipMax, x)),
                    y = Math.max(clipMin, Math.min(clipMax, y))
                ];
                if ((0, _lineJsDefault.default)(a, b, x0, y0, x1, y1)) {
                    if (!v_) {
                        activeStream.lineStart();
                        activeStream.point(a[0], a[1]);
                    }
                    activeStream.point(b[0], b[1]);
                    if (!v) activeStream.lineEnd();
                    clean = false;
                } else if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                    clean = false;
                }
            }
            x_ = x, y_ = y, v_ = v;
        }
        return clipStream;
    };
}

},{"../math.js":"8TMeU","./buffer.js":"6MwC2","./line.js":"kBMdG","./rejoin.js":"4Cpqb","d3-array":"1yX2W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBMdG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b, x0, y0, x1, y1) {
        var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
        r = x0 - ax;
        if (!dx && r > 0) return;
        r /= dx;
        if (dx < 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
        } else if (dx > 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
        }
        r = x1 - ax;
        if (!dx && r < 0) return;
        r /= dx;
        if (dx < 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
        } else if (dx > 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
        }
        r = y0 - ay;
        if (!dy && r > 0) return;
        r /= dy;
        if (dy < 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
        } else if (dy > 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
        }
        r = y1 - ay;
        if (!dy && r < 0) return;
        r /= dy;
        if (dy < 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
        } else if (dy > 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
        }
        if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
        if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
        return true;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnhfi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(projection, context) {
        let digits = 3, pointRadius = 4.5, projectionStream, contextStream;
        function path(object) {
            if (object) {
                if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
                (0, _streamJsDefault.default)(object, projectionStream(contextStream));
            }
            return contextStream.result();
        }
        path.area = function(object) {
            (0, _streamJsDefault.default)(object, projectionStream((0, _areaJsDefault.default)));
            return (0, _areaJsDefault.default).result();
        };
        path.measure = function(object) {
            (0, _streamJsDefault.default)(object, projectionStream((0, _measureJsDefault.default)));
            return (0, _measureJsDefault.default).result();
        };
        path.bounds = function(object) {
            (0, _streamJsDefault.default)(object, projectionStream((0, _boundsJsDefault.default)));
            return (0, _boundsJsDefault.default).result();
        };
        path.centroid = function(object) {
            (0, _streamJsDefault.default)(object, projectionStream((0, _centroidJsDefault.default)));
            return (0, _centroidJsDefault.default).result();
        };
        path.projection = function(_) {
            if (!arguments.length) return projection;
            projectionStream = _ == null ? (projection = null, _identityJsDefault.default) : (projection = _).stream;
            return path;
        };
        path.context = function(_) {
            if (!arguments.length) return context;
            contextStream = _ == null ? (context = null, new (0, _stringJsDefault.default)(digits)) : new (0, _contextJsDefault.default)(context = _);
            if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
            return path;
        };
        path.pointRadius = function(_) {
            if (!arguments.length) return pointRadius;
            pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
            return path;
        };
        path.digits = function(_) {
            if (!arguments.length) return digits;
            if (_ == null) digits = null;
            else {
                const d = Math.floor(_);
                if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
                digits = d;
            }
            if (context === null) contextStream = new (0, _stringJsDefault.default)(digits);
            return path;
        };
        return path.projection(projection).digits(digits).context(context);
    });
var _identityJs = require("../identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _streamJs = require("../stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _areaJs = require("./area.js");
var _areaJsDefault = parcelHelpers.interopDefault(_areaJs);
var _boundsJs = require("./bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
var _centroidJs = require("./centroid.js");
var _centroidJsDefault = parcelHelpers.interopDefault(_centroidJs);
var _contextJs = require("./context.js");
var _contextJsDefault = parcelHelpers.interopDefault(_contextJs);
var _measureJs = require("./measure.js");
var _measureJsDefault = parcelHelpers.interopDefault(_measureJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);

},{"../identity.js":"buAWG","../stream.js":"lpKxD","./area.js":"esEys","./bounds.js":"6inQS","./centroid.js":"hWsH1","./context.js":"bBEPS","./measure.js":"kxo1f","./string.js":"7QFxp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"buAWG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpKxD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(object, stream) {
        if (object && streamObjectType.hasOwnProperty(object.type)) streamObjectType[object.type](object, stream);
        else streamGeometry(object, stream);
    });
function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) streamGeometryType[geometry.type](geometry, stream);
}
var streamObjectType = {
    Feature: function(object, stream) {
        streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
        var features = object.features, i = -1, n = features.length;
        while(++i < n)streamGeometry(features[i].geometry, stream);
    }
};
var streamGeometryType = {
    Sphere: function(object, stream) {
        stream.sphere();
    },
    Point: function(object, stream) {
        object = object.coordinates;
        stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
        streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)streamLine(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
        streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while(++i < n)streamGeometry(geometries[i], stream);
    }
};
function streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while(++i < n)coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while(++i < n)streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esEys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var areaSum = new (0, _d3Array.Adder)(), areaRingSum = new (0, _d3Array.Adder)(), x00, y00, x0, y0;
var areaStream = {
    point: (0, _noopJsDefault.default),
    lineStart: (0, _noopJsDefault.default),
    lineEnd: (0, _noopJsDefault.default),
    polygonStart: function() {
        areaStream.lineStart = areaRingStart;
        areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function() {
        areaStream.lineStart = areaStream.lineEnd = areaStream.point = (0, _noopJsDefault.default);
        areaSum.add((0, _mathJs.abs)(areaRingSum));
        areaRingSum = new (0, _d3Array.Adder)();
    },
    result: function() {
        var area = areaSum / 2;
        areaSum = new (0, _d3Array.Adder)();
        return area;
    }
};
function areaRingStart() {
    areaStream.point = areaPointFirst;
}
function areaPointFirst(x, y) {
    areaStream.point = areaPoint;
    x00 = x0 = x, y00 = y0 = y;
}
function areaPoint(x, y) {
    areaRingSum.add(y0 * x - x0 * y);
    x0 = x, y0 = y;
}
function areaRingEnd() {
    areaPoint(x00, y00);
}
exports.default = areaStream;

},{"d3-array":"1yX2W","../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6inQS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var x0 = Infinity, y0 = x0, x1 = -x0, y1 = x1;
var boundsStream = {
    point: boundsPoint,
    lineStart: (0, _noopJsDefault.default),
    lineEnd: (0, _noopJsDefault.default),
    polygonStart: (0, _noopJsDefault.default),
    polygonEnd: (0, _noopJsDefault.default),
    result: function() {
        var bounds = [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
        x1 = y1 = -(y0 = x0 = Infinity);
        return bounds;
    }
};
function boundsPoint(x, y) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
}
exports.default = boundsStream;

},{"../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWsH1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("../math.js");
// TODO Enforce positive area for exterior, negative area for interior?
var X0 = 0, Y0 = 0, Z0 = 0, X1 = 0, Y1 = 0, Z1 = 0, X2 = 0, Y2 = 0, Z2 = 0, x00, y00, x0, y0;
var centroidStream = {
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function() {
        centroidStream.lineStart = centroidRingStart;
        centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function() {
        centroidStream.point = centroidPoint;
        centroidStream.lineStart = centroidLineStart;
        centroidStream.lineEnd = centroidLineEnd;
    },
    result: function() {
        var centroid = Z2 ? [
            X2 / Z2,
            Y2 / Z2
        ] : Z1 ? [
            X1 / Z1,
            Y1 / Z1
        ] : Z0 ? [
            X0 / Z0,
            Y0 / Z0
        ] : [
            NaN,
            NaN
        ];
        X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
        return centroid;
    }
};
function centroidPoint(x, y) {
    X0 += x;
    Y0 += y;
    ++Z0;
}
function centroidLineStart() {
    centroidStream.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x, y) {
    centroidStream.point = centroidPointLine;
    centroidPoint(x0 = x, y0 = y);
}
function centroidPointLine(x, y) {
    var dx = x - x0, dy = y - y0, z = (0, _mathJs.sqrt)(dx * dx + dy * dy);
    X1 += z * (x0 + x) / 2;
    Y1 += z * (y0 + y) / 2;
    Z1 += z;
    centroidPoint(x0 = x, y0 = y);
}
function centroidLineEnd() {
    centroidStream.point = centroidPoint;
}
function centroidRingStart() {
    centroidStream.point = centroidPointFirstRing;
}
function centroidRingEnd() {
    centroidPointRing(x00, y00);
}
function centroidPointFirstRing(x, y) {
    centroidStream.point = centroidPointRing;
    centroidPoint(x00 = x0 = x, y00 = y0 = y);
}
function centroidPointRing(x, y) {
    var dx = x - x0, dy = y - y0, z = (0, _mathJs.sqrt)(dx * dx + dy * dy);
    X1 += z * (x0 + x) / 2;
    Y1 += z * (y0 + y) / 2;
    Z1 += z;
    z = y0 * x - x0 * y;
    X2 += z * (x0 + x);
    Y2 += z * (y0 + y);
    Z2 += z * 3;
    centroidPoint(x0 = x, y0 = y);
}
exports.default = centroidStream;

},{"../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBEPS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PathContext);
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
function PathContext(context) {
    this._context = context;
}
PathContext.prototype = {
    _radius: 4.5,
    pointRadius: function(_) {
        return this._radius = _, this;
    },
    polygonStart: function() {
        this._line = 0;
    },
    polygonEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line === 0) this._context.closePath();
        this._point = NaN;
    },
    point: function(x, y) {
        switch(this._point){
            case 0:
                this._context.moveTo(x, y);
                this._point = 1;
                break;
            case 1:
                this._context.lineTo(x, y);
                break;
            default:
                this._context.moveTo(x + this._radius, y);
                this._context.arc(x, y, this._radius, 0, (0, _mathJs.tau));
                break;
        }
    },
    result: (0, _noopJsDefault.default)
};

},{"../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxo1f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var lengthSum = new (0, _d3Array.Adder)(), lengthRing, x00, y00, x0, y0;
var lengthStream = {
    point: (0, _noopJsDefault.default),
    lineStart: function() {
        lengthStream.point = lengthPointFirst;
    },
    lineEnd: function() {
        if (lengthRing) lengthPoint(x00, y00);
        lengthStream.point = (0, _noopJsDefault.default);
    },
    polygonStart: function() {
        lengthRing = true;
    },
    polygonEnd: function() {
        lengthRing = null;
    },
    result: function() {
        var length = +lengthSum;
        lengthSum = new (0, _d3Array.Adder)();
        return length;
    }
};
function lengthPointFirst(x, y) {
    lengthStream.point = lengthPoint;
    x00 = x0 = x, y00 = y0 = y;
}
function lengthPoint(x, y) {
    x0 -= x, y0 -= y;
    lengthSum.add((0, _mathJs.sqrt)(x0 * x0 + y0 * y0));
    x0 = x, y0 = y;
}
exports.default = lengthStream;

},{"d3-array":"1yX2W","../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7QFxp":[function(require,module,exports) {
// Simple caching for constant-radius points.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let cacheDigits, cacheAppend, cacheRadius, cacheCircle;
class PathString {
    constructor(digits){
        this._append = digits == null ? append : appendRound(digits);
        this._radius = 4.5;
        this._ = "";
    }
    pointRadius(_) {
        this._radius = +_;
        return this;
    }
    polygonStart() {
        this._line = 0;
    }
    polygonEnd() {
        this._line = NaN;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {
        if (this._line === 0) this._ += "Z";
        this._point = NaN;
    }
    point(x, y) {
        switch(this._point){
            case 0:
                this._append`M${x},${y}`;
                this._point = 1;
                break;
            case 1:
                this._append`L${x},${y}`;
                break;
            default:
                this._append`M${x},${y}`;
                if (this._radius !== cacheRadius || this._append !== cacheAppend) {
                    const r = this._radius;
                    const s = this._;
                    this._ = ""; // stash the old string so we can cache the circle path fragment
                    this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
                    cacheRadius = r;
                    cacheAppend = this._append;
                    cacheCircle = this._;
                    this._ = s;
                }
                this._ += cacheCircle;
                break;
        }
    }
    result() {
        const result = this._;
        this._ = "";
        return result.length ? result : null;
    }
}
exports.default = PathString;
function append(strings) {
    let i = 1;
    this._ += strings[0];
    for(const j = strings.length; i < j; ++i)this._ += arguments[i] + strings[i];
}
function appendRound(digits) {
    const d = Math.floor(digits);
    if (!(d >= 0)) throw new RangeError(`invalid digits: ${digits}`);
    if (d > 15) return append;
    if (d !== cacheDigits) {
        const k = 10 ** d;
        cacheDigits = d;
        cacheAppend = function append(strings) {
            let i = 1;
            this._ += strings[0];
            for(const j = strings.length; i < j; ++i)this._ += Math.round(arguments[i] * k) / k + strings[i];
        };
    }
    return cacheAppend;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSlbx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>projection);
parcelHelpers.export(exports, "projectionMutator", ()=>projectionMutator);
var _antimeridianJs = require("../clip/antimeridian.js");
var _antimeridianJsDefault = parcelHelpers.interopDefault(_antimeridianJs);
var _circleJs = require("../clip/circle.js");
var _circleJsDefault = parcelHelpers.interopDefault(_circleJs);
var _rectangleJs = require("../clip/rectangle.js");
var _rectangleJsDefault = parcelHelpers.interopDefault(_rectangleJs);
var _composeJs = require("../compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _identityJs = require("../identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _mathJs = require("../math.js");
var _rotationJs = require("../rotation.js");
var _transformJs = require("../transform.js");
var _fitJs = require("./fit.js");
var _resampleJs = require("./resample.js");
var _resampleJsDefault = parcelHelpers.interopDefault(_resampleJs);
var transformRadians = (0, _transformJs.transformer)({
    point: function(x, y) {
        this.stream.point(x * (0, _mathJs.radians), y * (0, _mathJs.radians));
    }
});
function transformRotate(rotate) {
    return (0, _transformJs.transformer)({
        point: function(x, y) {
            var r = rotate(x, y);
            return this.stream.point(r[0], r[1]);
        }
    });
}
function scaleTranslate(k, dx, dy, sx, sy) {
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            dx + k * x,
            dy - k * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            (x - dx) / k * sx,
            (dy - y) / k * sy
        ];
    };
    return transform;
}
function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
    if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
    var cosAlpha = (0, _mathJs.cos)(alpha), sinAlpha = (0, _mathJs.sin)(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            a * x - b * y + dx,
            dy - b * x - a * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            sx * (ai * x - bi * y + ci),
            sy * (fi - bi * x - ai * y)
        ];
    };
    return transform;
}
function projection(project) {
    return projectionMutator(function() {
        return project;
    })();
}
function projectionMutator(projectAt) {
    var project, k = 150, x = 480, y = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = (0, _antimeridianJsDefault.default), x0 = null, y0, x1, y1, postclip = (0, _identityJsDefault.default), delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
    function projection(point) {
        return projectRotateTransform(point[0] * (0, _mathJs.radians), point[1] * (0, _mathJs.radians));
    }
    function invert(point) {
        point = projectRotateTransform.invert(point[0], point[1]);
        return point && [
            point[0] * (0, _mathJs.degrees),
            point[1] * (0, _mathJs.degrees)
        ];
    }
    projection.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };
    projection.preclip = function(_) {
        return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
    };
    projection.postclip = function(_) {
        return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipAngle = function(_) {
        return arguments.length ? (preclip = +_ ? (0, _circleJsDefault.default)(theta = _ * (0, _mathJs.radians)) : (theta = null, _antimeridianJsDefault.default), reset()) : theta * (0, _mathJs.degrees);
    };
    projection.clipExtent = function(_) {
        return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identityJsDefault.default) : (0, _rectangleJsDefault.default)(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    projection.scale = function(_) {
        return arguments.length ? (k = +_, recenter()) : k;
    };
    projection.translate = function(_) {
        return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [
            x,
            y
        ];
    };
    projection.center = function(_) {
        return arguments.length ? (lambda = _[0] % 360 * (0, _mathJs.radians), phi = _[1] % 360 * (0, _mathJs.radians), recenter()) : [
            lambda * (0, _mathJs.degrees),
            phi * (0, _mathJs.degrees)
        ];
    };
    projection.rotate = function(_) {
        return arguments.length ? (deltaLambda = _[0] % 360 * (0, _mathJs.radians), deltaPhi = _[1] % 360 * (0, _mathJs.radians), deltaGamma = _.length > 2 ? _[2] % 360 * (0, _mathJs.radians) : 0, recenter()) : [
            deltaLambda * (0, _mathJs.degrees),
            deltaPhi * (0, _mathJs.degrees),
            deltaGamma * (0, _mathJs.degrees)
        ];
    };
    projection.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * (0, _mathJs.radians), recenter()) : alpha * (0, _mathJs.degrees);
    };
    projection.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };
    projection.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };
    projection.precision = function(_) {
        return arguments.length ? (projectResample = (0, _resampleJsDefault.default)(projectTransform, delta2 = _ * _), reset()) : (0, _mathJs.sqrt)(delta2);
    };
    projection.fitExtent = function(extent, object) {
        return (0, _fitJs.fitExtent)(projection, extent, object);
    };
    projection.fitSize = function(size, object) {
        return (0, _fitJs.fitSize)(projection, size, object);
    };
    projection.fitWidth = function(width, object) {
        return (0, _fitJs.fitWidth)(projection, width, object);
    };
    projection.fitHeight = function(height, object) {
        return (0, _fitJs.fitHeight)(projection, height, object);
    };
    function recenter() {
        var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
        rotate = (0, _rotationJs.rotateRadians)(deltaLambda, deltaPhi, deltaGamma);
        projectTransform = (0, _composeJsDefault.default)(project, transform);
        projectRotateTransform = (0, _composeJsDefault.default)(rotate, projectTransform);
        projectResample = (0, _resampleJsDefault.default)(projectTransform, delta2);
        return reset();
    }
    function reset() {
        cache = cacheStream = null;
        return projection;
    }
    return function() {
        project = projectAt.apply(this, arguments);
        projection.invert = project.invert && invert;
        return recenter();
    };
}

},{"../clip/antimeridian.js":"5Pn7h","../clip/circle.js":"6JGCr","../clip/rectangle.js":"5auAi","../compose.js":"lJD5n","../identity.js":"buAWG","../math.js":"8TMeU","../rotation.js":"g2pLL","../transform.js":"AaiPA","./fit.js":"fNXsS","./resample.js":"l8WqU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"AaiPA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(methods) {
        return {
            stream: transformer(methods)
        };
    });
parcelHelpers.export(exports, "transformer", ()=>transformer);
function transformer(methods) {
    return function(stream) {
        var s = new TransformStream;
        for(var key in methods)s[key] = methods[key];
        s.stream = stream;
        return s;
    };
}
function TransformStream() {}
TransformStream.prototype = {
    constructor: TransformStream,
    point: function(x, y) {
        this.stream.point(x, y);
    },
    sphere: function() {
        this.stream.sphere();
    },
    lineStart: function() {
        this.stream.lineStart();
    },
    lineEnd: function() {
        this.stream.lineEnd();
    },
    polygonStart: function() {
        this.stream.polygonStart();
    },
    polygonEnd: function() {
        this.stream.polygonEnd();
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNXsS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fitExtent", ()=>fitExtent);
parcelHelpers.export(exports, "fitSize", ()=>fitSize);
parcelHelpers.export(exports, "fitWidth", ()=>fitWidth);
parcelHelpers.export(exports, "fitHeight", ()=>fitHeight);
var _streamJs = require("../stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _boundsJs = require("../path/bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
function fit(projection, fitBounds, object) {
    var clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([
        0,
        0
    ]);
    if (clip != null) projection.clipExtent(null);
    (0, _streamJsDefault.default)(object, projection.stream((0, _boundsJsDefault.default)));
    fitBounds((0, _boundsJsDefault.default).result());
    if (clip != null) projection.clipExtent(clip);
    return projection;
}
function fitExtent(projection, extent, object) {
    return fit(projection, function(b) {
        var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function fitSize(projection, size, object) {
    return fitExtent(projection, [
        [
            0,
            0
        ],
        size
    ], object);
}
function fitWidth(projection, width, object) {
    return fit(projection, function(b) {
        var w = +width, k = w / (b[1][0] - b[0][0]), x = (w - k * (b[1][0] + b[0][0])) / 2, y = -k * b[0][1];
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function fitHeight(projection, height, object) {
    return fit(projection, function(b) {
        var h = +height, k = h / (b[1][1] - b[0][1]), x = -k * b[0][0], y = (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}

},{"../stream.js":"lpKxD","../path/bounds.js":"6inQS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8WqU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(project, delta2) {
        return +delta2 ? resample(project, delta2) : resampleNone(project);
    });
var _cartesianJs = require("../cartesian.js");
var _mathJs = require("../math.js");
var _transformJs = require("../transform.js");
var maxDepth = 16, cosMinDistance = (0, _mathJs.cos)(30 * (0, _mathJs.radians)); // cos(minimum angular distance)
function resampleNone(project) {
    return (0, _transformJs.transformer)({
        point: function(x, y) {
            x = project(x, y);
            this.stream.point(x[0], x[1]);
        }
    });
}
function resample(project, delta2) {
    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
        var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
        if (d2 > 4 * delta2 && depth--) {
            var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = (0, _mathJs.sqrt)(a * a + b * b + c * c), phi2 = (0, _mathJs.asin)(c /= m), lambda2 = (0, _mathJs.abs)((0, _mathJs.abs)(c) - 1) < (0, _mathJs.epsilon) || (0, _mathJs.abs)(lambda0 - lambda1) < (0, _mathJs.epsilon) ? (lambda0 + lambda1) / 2 : (0, _mathJs.atan2)(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
            if (dz * dz / d2 > delta2 // perpendicular projected distance
             || (0, _mathJs.abs)((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
             || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
                resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
                stream.point(x2, y2);
                resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
            }
        }
    }
    return function(stream) {
        var lambda00, x00, y00, a00, b00, c00, lambda0, x0, y0, a0, b0, c0; // previous point
        var resampleStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
                stream.polygonStart();
                resampleStream.lineStart = ringStart;
            },
            polygonEnd: function() {
                stream.polygonEnd();
                resampleStream.lineStart = lineStart;
            }
        };
        function point(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
        }
        function lineStart() {
            x0 = NaN;
            resampleStream.point = linePoint;
            stream.lineStart();
        }
        function linePoint(lambda, phi) {
            var c = (0, _cartesianJs.cartesian)([
                lambda,
                phi
            ]), p = project(lambda, phi);
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
            stream.point(x0, y0);
        }
        function lineEnd() {
            resampleStream.point = point;
            stream.lineEnd();
        }
        function ringStart() {
            lineStart();
            resampleStream.point = ringPoint;
            resampleStream.lineEnd = ringEnd;
        }
        function ringPoint(lambda, phi) {
            linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
            resampleStream.point = linePoint;
        }
        function ringEnd() {
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
            resampleStream.lineEnd = lineEnd;
            lineEnd();
        }
        return resampleStream;
    };
}

},{"../cartesian.js":"4Lw8W","../math.js":"8TMeU","../transform.js":"AaiPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eCRDH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mercatorRaw", ()=>mercatorRaw);
parcelHelpers.export(exports, "default", ()=>function() {
        return mercatorProjection(mercatorRaw).scale(961 / (0, _mathJs.tau));
    });
parcelHelpers.export(exports, "mercatorProjection", ()=>mercatorProjection);
var _mathJs = require("../math.js");
var _rotationJs = require("../rotation.js");
var _rotationJsDefault = parcelHelpers.interopDefault(_rotationJs);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function mercatorRaw(lambda, phi) {
    return [
        lambda,
        (0, _mathJs.log)((0, _mathJs.tan)(((0, _mathJs.halfPi) + phi) / 2))
    ];
}
mercatorRaw.invert = function(x, y) {
    return [
        x,
        2 * (0, _mathJs.atan)((0, _mathJs.exp)(y)) - (0, _mathJs.halfPi)
    ];
};
function mercatorProjection(project) {
    var m = (0, _indexJsDefault.default)(project), center = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x0 = null, y0, x1, y1; // clip extent
    m.scale = function(_) {
        return arguments.length ? (scale(_), reclip()) : scale();
    };
    m.translate = function(_) {
        return arguments.length ? (translate(_), reclip()) : translate();
    };
    m.center = function(_) {
        return arguments.length ? (center(_), reclip()) : center();
    };
    m.clipExtent = function(_) {
        return arguments.length ? (_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    function reclip() {
        var k = (0, _mathJs.pi) * scale(), t = m((0, _rotationJsDefault.default)(m.rotate()).invert([
            0,
            0
        ]));
        return clipExtent(x0 == null ? [
            [
                t[0] - k,
                t[1] - k
            ],
            [
                t[0] + k,
                t[1] + k
            ]
        ] : project === mercatorRaw ? [
            [
                Math.max(t[0] - k, x0),
                y0
            ],
            [
                Math.min(t[0] + k, x1),
                y1
            ]
        ] : [
            [
                x0,
                Math.max(t[1] - k, y0)
            ],
            [
                x1,
                Math.min(t[1] + k, y1)
            ]
        ]);
    }
    return reclip();
}

},{"../math.js":"8TMeU","../rotation.js":"g2pLL","./index.js":"gSlbx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hQoq0":[function(require,module,exports) {
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
}
function styles(selection, stylesObj) {
    if (!stylesObj) return;
    const stylesList = Object.entries(stylesObj);
    stylesList.forEach(([attr, value])=>{
        selection.style(attr, value); // error handling? how does d3 throw errors here
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dllZd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projection", ()=>projection);
parcelHelpers.export(exports, "geoPathGen", ()=>geoPathGen);
var _d3 = require("d3");
var _districts = require("../geo-data/districts");
/*projections
  you will have to adjust projection parameters (center and scale) 
  depending on the map you are creating
*/ const projection = (0, _d3.geoMercator)().center([
    65,
    35.5
]).scale([
    5250
]);
// geoPath functions computed from projections
const geoPathGen = (0, _d3.geoPath)(projection);

},{"d3":"17XFv","../geo-data/districts":"dbdeE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbdeE":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2tg3w":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hVcmB":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdR0F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const kpPunjab77 = [
    {
        "id": 1,
        "location": [
            71.56991605083344,
            33.93020341316633
        ]
    },
    {
        "id": 2,
        "location": [
            71.70087783257763,
            33.730758142010195
        ]
    },
    {
        "id": 3,
        "location": [
            72.05010925056213,
            33.875855404272166
        ]
    },
    {
        "id": 4,
        "location": [
            71.89732050519392,
            34.0207063953064
        ]
    },
    {
        "id": 5,
        "location": [
            71.51534864177336,
            34.111112979857026
        ]
    },
    {
        "id": 6,
        "location": [
            71.71179131438966,
            34.309667545895685
        ]
    },
    {
        "id": 7,
        "location": [
            72.06102273237414,
            34.219473464556636
        ]
    },
    {
        "id": 8,
        "location": [
            72.33385977767455,
            34.0568806037035
        ]
    },
    {
        "id": 9,
        "location": [
            72.57395637753889,
            34.111112979857026
        ]
    },
    {
        "id": 10,
        "location": [
            71.46078123271329,
            33.476246891207346
        ]
    },
    {
        "id": 11,
        "location": [
            71.15520374197685,
            33.184458903934264
        ]
    },
    {
        "id": 12,
        "location": [
            73.13054394995169,
            34.15628008481456
        ]
    },
    {
        "id": 13,
        "location": [
            73.32698662256797,
            34.0568806037035
        ]
    },
    {
        "id": 14,
        "location": [
            72.8577069046513,
            34.02975139367738
        ]
    },
    {
        "id": 15,
        "location": [
            73.03232261364354,
            34.417772677223006
        ]
    },
    {
        "id": 16,
        "location": [
            73.29424617713192,
            34.54371890909378
        ]
    },
    {
        "id": 17,
        "location": [
            73.42520795887611,
            35.17058930890378
        ]
    },
    {
        "id": 18,
        "location": [
            70.62044313318808,
            31.748112351003318
        ]
    },
    {
        "id": 19,
        "location": [
            70.65318357862412,
            32.9375041746417
        ]
    },
    {
        "id": 20,
        "location": [
            70.87145321486443,
            32.52437757748257
        ]
    },
    {
        "id": 21,
        "location": [
            72.3011193322385,
            34.66049859369444
        ]
    },
    {
        "id": 22,
        "location": [
            72.3775137049226,
            35.0545320285276
        ]
    },
    {
        "id": 23,
        "location": [
            72.54121593210284,
            35.34881588524639
        ]
    },
    {
        "id": 24,
        "location": [
            71.95188791425399,
            36.075433479504625
        ]
    },
    {
        "id": 25,
        "location": [
            71.87549354156988,
            34.57966860798122
        ]
    },
    {
        "id": 26,
        "location": [
            71.87549354156988,
            35.09025956485558
        ]
    },
    {
        "id": 27,
        "location": [
            71.3298194509691,
            34.453776714423306
        ]
    },
    {
        "id": 28,
        "location": [
            70.38034653332373,
            33.6672007799282
        ]
    },
    {
        "id": 29,
        "location": [
            70.79505884218034,
            33.430719467922316
        ]
    },
    {
        "id": 30,
        "location": [
            70.03111511533923,
            32.919183689814716
        ]
    },
    {
        "id": 31,
        "location": [
            69.71462414279078,
            32.40467405931361
        ]
    },
    {
        "id": 32,
        "location": [
            71.54808908720942,
            34.79504016060387
        ]
    },
    {
        "id": 33,
        "location": [
            71.1224632965408,
            33.9573644222421
        ]
    },
    {
        "id": 34,
        "location": [
            70.26029823339157,
            32.42310033882809
        ]
    },
    {
        "id": 35,
        "location": [
            73.10871698632766,
            33.730758142010195
        ]
    },
    {
        "id": 36,
        "location": [
            73.41429447706409,
            33.621773888398955
        ]
    },
    {
        "id": 37,
        "location": [
            73.39246751344005,
            33.34870990352477
        ]
    },
    {
        "id": 38,
        "location": [
            73.05414957726758,
            33.58541512193113
        ]
    },
    {
        "id": 39,
        "location": [
            72.77039905015516,
            33.76705551754888
        ]
    },
    {
        "id": 40,
        "location": [
            73.04323609545557,
            33.31223638309692
        ]
    },
    {
        "id": 41,
        "location": [
            72.34477325948656,
            33.748908750271546
        ]
    },
    {
        "id": 42,
        "location": [
            72.49756200485477,
            33.430719467922316
        ]
    },
    {
        "id": 43,
        "location": [
            72.06102273237414,
            33.29399389793064
        ]
    },
    {
        "id": 44,
        "location": [
            73.50160233156022,
            32.946662994229655
        ]
    },
    {
        "id": 45,
        "location": [
            73.23967876807184,
            32.68067259548857
        ]
    },
    {
        "id": 46,
        "location": [
            72.68309119565905,
            32.9375041746417
        ]
    },
    {
        "id": 47,
        "location": [
            74.27645954021334,
            32.689857924028075
        ]
    },
    {
        "id": 48,
        "location": [
            73.95996856766489,
            32.533578947775766
        ]
    },
    {
        "id": 49,
        "location": [
            73.95996856766489,
            32.73577039063373
        ]
    },
    {
        "id": 50,
        "location": [
            73.44703492250014,
            32.35859190373456
        ]
    },
    {
        "id": 51,
        "location": [
            73.46886188612417,
            32.58876737187009
        ]
    },
    {
        "id": 52,
        "location": [
            73.78535285867262,
            32.88253134136494
        ]
    },
    {
        "id": 53,
        "location": [
            72.89044735008734,
            32.413887669407266
        ]
    },
    {
        "id": 54,
        "location": [
            73.01049565001951,
            32.10934271735582
        ]
    },
    {
        "id": 55,
        "location": [
            72.62852378659896,
            32.22020453599707
        ]
    },
    {
        "id": 56,
        "location": [
            72.57395637753889,
            31.896481073897725
        ]
    },
    {
        "id": 57,
        "location": [
            71.99554184150205,
            31.952057830433095
        ]
    },
    {
        "id": 58,
        "location": [
            72.02828228693811,
            32.22943692953025
        ]
    },
    {
        "id": 59,
        "location": [
            72.22472495955438,
            32.478356593272224
        ]
    },
    {
        "id": 60,
        "location": [
            71.49352167814934,
            32.78165921772949
        ]
    },
    {
        "id": 61,
        "location": [
            71.5371756053974,
            32.34015246177971
        ]
    },
    {
        "id": 62,
        "location": [
            71.28616552372102,
            31.692412657371783
        ]
    },
    {
        "id": 63,
        "location": [
            72.97775520458346,
            31.766671475987057
        ]
    },
    {
        "id": 64,
        "location": [
            72.70491815928307,
            31.515809755188148
        ]
    },
    {
        "id": 65,
        "location": [
            72.26837888680244,
            31.422726471762562
        ]
    },
    {
        "id": 66,
        "location": [
            72.12650362324625,
            31.133581262113438
        ]
    },
    {
        "id": 67,
        "location": [
            71.88640702338189,
            30.834181507540915
        ]
    },
    {
        "id": 68,
        "location": [
            73.22876528625982,
            31.599505511445912
        ]
    },
    {
        "id": 69,
        "location": [
            73.45794840431215,
            31.32955070668092
        ]
    },
    {
        "id": 70,
        "location": [
            73.2833326953199,
            31.189613994829887
        ]
    },
    {
        "id": 71,
        "location": [
            73.11963046813966,
            30.99335460782569
        ]
    },
    {
        "id": 72,
        "location": [
            72.8577069046513,
            30.834181507540915
        ]
    },
    {
        "id": 73,
        "location": [
            72.55212941391486,
            30.69351505848763
        ]
    },
    {
        "id": 74,
        "location": [
            72.39934066854664,
            30.871657817817987
        ]
    },
    {
        "id": 75,
        "location": [
            72.60669682297494,
            30.983998817437502
        ]
    },
    {
        "id": 76,
        "location": [
            72.9341012773354,
            31.189613994829887
        ]
    },
    {
        "id": 77,
        "location": [
            72.92318779552339,
            31.39478344579162
        ]
    },
    {
        "id": 78,
        "location": [
            73.06506305907959,
            31.35751313759214
        ]
    },
    {
        "id": 79,
        "location": [
            73.11963046813966,
            31.348193250816877
        ]
    },
    {
        "id": 80,
        "location": [
            73.06506305907959,
            31.301579966342555
        ]
    },
    {
        "id": 81,
        "location": [
            74.35285391289744,
            31.608800403314593
        ]
    },
    {
        "id": 82,
        "location": [
            74.33102694927341,
            31.590209691850163
        ]
    },
    {
        "id": 83,
        "location": [
            74.38559435833349,
            31.608800403314593
        ]
    },
    {
        "id": 84,
        "location": [
            74.38559435833349,
            31.57161527008608
        ]
    },
    {
        "id": 85,
        "location": [
            74.34194043108543,
            31.57161527008608
        ]
    },
    {
        "id": 86,
        "location": [
            74.35285391289744,
            31.55301713924068
        ]
    },
    {
        "id": 87,
        "location": [
            74.29828650383736,
            31.385467254886645
        ]
    },
    {
        "id": 88,
        "location": [
            74.51655614007767,
            31.45997089156086
        ]
    },
    {
        "id": 89,
        "location": [
            74.41833480376953,
            31.217617930797786
        ]
    },
    {
        "id": 90,
        "location": [
            74.3965078401455,
            31.021416472727935
        ]
    },
    {
        "id": 91,
        "location": [
            74.14549775846913,
            30.8529214930796
        ]
    },
    {
        "id": 92,
        "location": [
            73.86174723135674,
            31.09620770521789
        ]
    },
    {
        "id": 93,
        "location": [
            74.50564265826567,
            31.887215016403196
        ]
    },
    {
        "id": 94,
        "location": [
            74.1891516857172,
            31.748112351003318
        ]
    },
    {
        "id": 95,
        "location": [
            73.7089584859885,
            31.813053003020602
        ]
    },
    {
        "id": 96,
        "location": [
            73.87266071316874,
            31.487894489897982
        ]
    },
    {
        "id": 97,
        "location": [
            73.76352589504859,
            31.301579966342555
        ]
    },
    {
        "id": 98,
        "location": [
            74.06910338578504,
            32.275584827206416
        ]
    },
    {
        "id": 99,
        "location": [
            74.35285391289744,
            32.09085263790973
        ]
    },
    {
        "id": 100,
        "location": [
            74.09093034940906,
            32.11858635327171
        ]
    },
    {
        "id": 101,
        "location": [
            73.99270901310092,
            31.970575950130947
        ]
    },
    {
        "id": 102,
        "location": [
            73.77443937686061,
            32.201736936087805
        ]
    },
    {
        "id": 103,
        "location": [
            73.46886188612417,
            32.00760098371495
        ]
    },
    {
        "id": 104,
        "location": [
            74.50564265826567,
            32.616348850531864
        ]
    },
    {
        "id": 105,
        "location": [
            74.36376739470946,
            32.505972009924264
        ]
    },
    {
        "id": 106,
        "location": [
            74.36376739470946,
            32.31248625271658
        ]
    },
    {
        "id": 107,
        "location": [
            74.56021006732574,
            32.201736936087805
        ]
    },
    {
        "id": 108,
        "location": [
            74.70208533088194,
            32.42310033882809
        ]
    },
    {
        "id": 109,
        "location": [
            75.12771112155055,
            32.26635712415046
        ]
    },
    {
        "id": 110,
        "location": [
            74.8112201490021,
            32.09085263790973
        ]
    },
    {
        "id": 111,
        "location": [
            71.54808908720942,
            30.32682287194665
        ]
    },
    {
        "id": 112,
        "location": [
            71.4716947145253,
            30.109921899206956
        ]
    },
    {
        "id": 113,
        "location": [
            71.36255989640514,
            29.88308169079235
        ]
    },
    {
        "id": 114,
        "location": [
            71.17703070560087,
            29.598804335870945
        ]
    },
    {
        "id": 115,
        "location": [
            71.68996435076562,
            29.608293219049923
        ]
    },
    {
        "id": 116,
        "location": [
            71.74453175982569,
            29.778940253462665
        ]
    },
    {
        "id": 117,
        "location": [
            71.71179131438966,
            29.91146505266575
        ]
    },
    {
        "id": 118,
        "location": [
            71.94097443244198,
            30.232576870824534
        ]
    },
    {
        "id": 119,
        "location": [
            72.27929236861446,
            30.430388823985254
        ]
    },
    {
        "id": 120,
        "location": [
            71.83183961432182,
            30.5244443727876
        ]
    },
    {
        "id": 121,
        "location": [
            72.80313949559121,
            30.166550853117972
        ]
    },
    {
        "id": 122,
        "location": [
            72.39934066854664,
            30.006017829094848
        ]
    },
    {
        "id": 123,
        "location": [
            72.10467665962221,
            29.902004830329556
        ]
    },
    {
        "id": 124,
        "location": [
            70.47856786963187,
            30.862290113129365
        ]
    },
    {
        "id": 125,
        "location": [
            70.36943305151172,
            30.147678145877958
        ]
    },
    {
        "id": 126,
        "location": [
            70.0092881517152,
            29.132758908618605
        ]
    },
    {
        "id": 127,
        "location": [
            70.94784758754855,
            30.55264330987712
        ]
    },
    {
        "id": 128,
        "location": [
            71.07880936929273,
            30.166550853117972
        ]
    },
    {
        "id": 129,
        "location": [
            70.9805880329846,
            29.854690246916558
        ]
    },
    {
        "id": 130,
        "location": [
            70.84962625124041,
            29.608293219049923
        ]
    },
    {
        "id": 131,
        "location": [
            70.75140491493227,
            29.33275379227691
        ]
    },
    {
        "id": 132,
        "location": [
            73.52342929518426,
            30.918482605214177
        ]
    },
    {
        "id": 133,
        "location": [
            73.67621804055247,
            30.75918498320828
        ]
    },
    {
        "id": 134,
        "location": [
            73.80717982229666,
            30.5244443727876
        ]
    },
    {
        "id": 135,
        "location": [
            73.40338099525208,
            30.580834057093572
        ]
    },
    {
        "id": 136,
        "location": [
            73.04323609545557,
            30.665357115110954
        ]
    },
    {
        "id": 137,
        "location": [
            73.37064054981603,
            30.307980914343773
        ]
    },
    {
        "id": 138,
        "location": [
            72.8577069046513,
            30.505640533663843
        ]
    },
    {
        "id": 139,
        "location": [
            72.60669682297494,
            30.40215444902347
        ]
    },
    {
        "id": 140,
        "location": [
            71.28616552372102,
            29.189940156760972
        ]
    },
    {
        "id": 141,
        "location": [
            71.6790508689536,
            29.31372350211185
        ]
    },
    {
        "id": 142,
        "location": [
            72.22472495955438,
            29.47536767743418
        ]
    },
    {
        "id": 143,
        "location": [
            71.74453175982569,
            28.597537969276694
        ]
    },
    {
        "id": 144,
        "location": [
            73.46886188612417,
            30.072151218678776
        ]
    },
    {
        "id": 145,
        "location": [
            73.03232261364354,
            29.73156737892347
        ]
    },
    {
        "id": 146,
        "location": [
            72.80313949559121,
            29.22804328975811
        ]
    },
    {
        "id": 147,
        "location": [
            70.7732318785563,
            28.91326965972254
        ]
    },
    {
        "id": 148,
        "location": [
            70.50039483325591,
            28.54002979665281
        ]
    },
    {
        "id": 149,
        "location": [
            70.78414536036831,
            28.126971200525617
        ]
    },
    {
        "id": 150,
        "location": [
            70.10750948802334,
            28.242404774759624
        ]
    }
];
exports.default = kpPunjab77;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2D72j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const locs77 = [
    {
        id: 1,
        location: [
            71.56991605083344,
            33.93020341316633
        ]
    },
    {
        id: 2,
        location: [
            71.70087783257763,
            33.730758142010195
        ]
    },
    {
        id: 3,
        location: [
            72.05010925056213,
            33.875855404272166
        ]
    },
    {
        id: 4,
        location: [
            71.89732050519392,
            34.0207063953064
        ]
    },
    {
        id: 5,
        location: [
            71.51534864177336,
            34.111112979857026
        ]
    },
    {
        id: 6,
        location: [
            71.71179131438966,
            34.309667545895685
        ]
    },
    {
        id: 7,
        location: [
            72.06102273237414,
            34.219473464556636
        ]
    },
    {
        id: 8,
        location: [
            72.33385977767455,
            34.0568806037035
        ]
    },
    {
        id: 9,
        location: [
            72.57395637753889,
            34.111112979857026
        ]
    },
    {
        id: 10,
        location: [
            71.46078123271329,
            33.476246891207346
        ]
    },
    {
        id: 11,
        location: [
            71.15520374197685,
            33.184458903934264
        ]
    },
    {
        id: 12,
        location: [
            73.13054394995169,
            34.15628008481456
        ]
    },
    {
        id: 13,
        location: [
            73.32698662256797,
            34.0568806037035
        ]
    },
    {
        id: 14,
        location: [
            72.8577069046513,
            34.02975139367738
        ]
    },
    {
        id: 15,
        location: [
            73.03232261364354,
            34.417772677223006
        ]
    },
    {
        id: 16,
        location: [
            73.29424617713192,
            34.54371890909378
        ]
    },
    {
        id: 17,
        location: [
            73.42520795887611,
            35.17058930890378
        ]
    },
    {
        id: 18,
        location: [
            70.62044313318808,
            31.748112351003318
        ]
    },
    {
        id: 19,
        location: [
            70.65318357862412,
            32.9375041746417
        ]
    },
    {
        id: 20,
        location: [
            70.87145321486443,
            32.52437757748257
        ]
    },
    {
        id: 21,
        location: [
            72.3011193322385,
            34.66049859369444
        ]
    },
    {
        id: 22,
        location: [
            72.3775137049226,
            35.0545320285276
        ]
    },
    {
        id: 23,
        location: [
            72.54121593210284,
            35.34881588524639
        ]
    },
    {
        id: 24,
        location: [
            71.95188791425399,
            36.075433479504625
        ]
    },
    {
        id: 25,
        location: [
            71.87549354156988,
            34.57966860798122
        ]
    },
    {
        id: 26,
        location: [
            71.87549354156988,
            35.09025956485558
        ]
    },
    {
        id: 27,
        location: [
            71.3298194509691,
            34.453776714423306
        ]
    },
    {
        id: 28,
        location: [
            70.38034653332373,
            33.6672007799282
        ]
    },
    {
        id: 29,
        location: [
            70.79505884218034,
            33.430719467922316
        ]
    },
    {
        id: 30,
        location: [
            70.03111511533923,
            32.919183689814716
        ]
    },
    {
        id: 31,
        location: [
            69.71462414279078,
            32.40467405931361
        ]
    },
    {
        id: 32,
        location: [
            71.54808908720942,
            34.79504016060387
        ]
    },
    {
        id: 33,
        location: [
            71.1224632965408,
            33.9573644222421
        ]
    },
    {
        id: 34,
        location: [
            70.26029823339157,
            32.42310033882809
        ]
    },
    {
        id: 35,
        location: [
            73.10871698632766,
            33.730758142010195
        ]
    },
    {
        id: 36,
        location: [
            73.41429447706409,
            33.621773888398955
        ]
    },
    {
        id: 37,
        location: [
            73.39246751344005,
            33.34870990352477
        ]
    },
    {
        id: 38,
        location: [
            73.05414957726758,
            33.58541512193113
        ]
    },
    {
        id: 39,
        location: [
            72.77039905015516,
            33.76705551754888
        ]
    },
    {
        id: 40,
        location: [
            73.04323609545557,
            33.31223638309692
        ]
    },
    {
        id: 41,
        location: [
            72.34477325948656,
            33.748908750271546
        ]
    },
    {
        id: 42,
        location: [
            72.49756200485477,
            33.430719467922316
        ]
    },
    {
        id: 43,
        location: [
            72.06102273237414,
            33.29399389793064
        ]
    },
    {
        id: 44,
        location: [
            73.50160233156022,
            32.946662994229655
        ]
    },
    {
        id: 45,
        location: [
            73.23967876807184,
            32.68067259548857
        ]
    },
    {
        id: 46,
        location: [
            72.68309119565905,
            32.9375041746417
        ]
    },
    {
        id: 47,
        location: [
            74.27645954021334,
            32.689857924028075
        ]
    },
    {
        id: 48,
        location: [
            73.95996856766489,
            32.533578947775766
        ]
    },
    {
        id: 49,
        location: [
            73.95996856766489,
            32.73577039063373
        ]
    },
    {
        id: 50,
        location: [
            73.44703492250014,
            32.35859190373456
        ]
    },
    {
        id: 51,
        location: [
            73.46886188612417,
            32.58876737187009
        ]
    },
    {
        id: 52,
        location: [
            73.78535285867262,
            32.88253134136494
        ]
    },
    {
        id: 53,
        location: [
            72.89044735008734,
            32.413887669407266
        ]
    },
    {
        id: 54,
        location: [
            73.01049565001951,
            32.10934271735582
        ]
    },
    {
        id: 55,
        location: [
            72.62852378659896,
            32.22020453599707
        ]
    },
    {
        id: 56,
        location: [
            72.57395637753889,
            31.896481073897725
        ]
    },
    {
        id: 57,
        location: [
            71.99554184150205,
            31.952057830433095
        ]
    },
    {
        id: 58,
        location: [
            72.02828228693811,
            32.22943692953025
        ]
    },
    {
        id: 59,
        location: [
            72.22472495955438,
            32.478356593272224
        ]
    },
    {
        id: 60,
        location: [
            71.49352167814934,
            32.78165921772949
        ]
    },
    {
        id: 61,
        location: [
            71.5371756053974,
            32.34015246177971
        ]
    },
    {
        id: 62,
        location: [
            71.28616552372102,
            31.692412657371783
        ]
    },
    {
        id: 63,
        location: [
            72.97775520458346,
            31.766671475987057
        ]
    },
    {
        id: 64,
        location: [
            72.70491815928307,
            31.515809755188148
        ]
    },
    {
        id: 65,
        location: [
            72.26837888680244,
            31.422726471762562
        ]
    },
    {
        id: 66,
        location: [
            72.12650362324625,
            31.133581262113438
        ]
    },
    {
        id: 67,
        location: [
            71.88640702338189,
            30.834181507540915
        ]
    },
    {
        id: 68,
        location: [
            73.22876528625982,
            31.599505511445912
        ]
    },
    {
        id: 69,
        location: [
            73.45794840431215,
            31.32955070668092
        ]
    },
    {
        id: 70,
        location: [
            73.2833326953199,
            31.189613994829887
        ]
    },
    {
        id: 71,
        location: [
            73.11963046813966,
            30.99335460782569
        ]
    },
    {
        id: 72,
        location: [
            72.8577069046513,
            30.834181507540915
        ]
    },
    {
        id: 73,
        location: [
            72.55212941391486,
            30.69351505848763
        ]
    },
    {
        id: 74,
        location: [
            72.39934066854664,
            30.871657817817987
        ]
    },
    {
        id: 75,
        location: [
            72.60669682297494,
            30.983998817437502
        ]
    },
    {
        id: 76,
        location: [
            72.9341012773354,
            31.189613994829887
        ]
    },
    {
        id: 77,
        location: [
            72.92318779552339,
            31.39478344579162
        ]
    },
    {
        id: 78,
        location: [
            73.06506305907959,
            31.35751313759214
        ]
    },
    {
        id: 79,
        location: [
            73.11963046813966,
            31.348193250816877
        ]
    },
    {
        id: 80,
        location: [
            73.06506305907959,
            31.301579966342555
        ]
    },
    {
        id: 81,
        location: [
            74.35285391289744,
            31.608800403314593
        ]
    },
    {
        id: 82,
        location: [
            74.33102694927341,
            31.590209691850163
        ]
    },
    {
        id: 83,
        location: [
            74.38559435833349,
            31.608800403314593
        ]
    },
    {
        id: 84,
        location: [
            74.38559435833349,
            31.57161527008608
        ]
    },
    {
        id: 85,
        location: [
            74.34194043108543,
            31.57161527008608
        ]
    },
    {
        id: 86,
        location: [
            74.35285391289744,
            31.55301713924068
        ]
    },
    {
        id: 87,
        location: [
            74.29828650383736,
            31.385467254886645
        ]
    },
    {
        id: 88,
        location: [
            74.51655614007767,
            31.45997089156086
        ]
    },
    {
        id: 89,
        location: [
            74.41833480376953,
            31.217617930797786
        ]
    },
    {
        id: 90,
        location: [
            74.3965078401455,
            31.021416472727935
        ]
    },
    {
        id: 91,
        location: [
            74.14549775846913,
            30.8529214930796
        ]
    },
    {
        id: 92,
        location: [
            73.86174723135674,
            31.09620770521789
        ]
    },
    {
        id: 93,
        location: [
            74.50564265826567,
            31.887215016403196
        ]
    },
    {
        id: 94,
        location: [
            74.1891516857172,
            31.748112351003318
        ]
    },
    {
        id: 95,
        location: [
            73.7089584859885,
            31.813053003020602
        ]
    },
    {
        id: 96,
        location: [
            73.87266071316874,
            31.487894489897982
        ]
    },
    {
        id: 97,
        location: [
            73.76352589504859,
            31.301579966342555
        ]
    },
    {
        id: 98,
        location: [
            74.06910338578504,
            32.275584827206416
        ]
    },
    {
        id: 99,
        location: [
            74.35285391289744,
            32.09085263790973
        ]
    },
    {
        id: 100,
        location: [
            74.09093034940906,
            32.11858635327171
        ]
    },
    {
        id: 101,
        location: [
            73.99270901310092,
            31.970575950130947
        ]
    },
    {
        id: 102,
        location: [
            73.77443937686061,
            32.201736936087805
        ]
    },
    {
        id: 103,
        location: [
            73.46886188612417,
            32.00760098371495
        ]
    },
    {
        id: 104,
        location: [
            74.50564265826567,
            32.616348850531864
        ]
    },
    {
        id: 105,
        location: [
            74.36376739470946,
            32.505972009924264
        ]
    },
    {
        id: 106,
        location: [
            74.36376739470946,
            32.31248625271658
        ]
    },
    {
        id: 107,
        location: [
            74.56021006732574,
            32.201736936087805
        ]
    },
    {
        id: 108,
        location: [
            74.70208533088194,
            32.42310033882809
        ]
    },
    {
        id: 109,
        location: [
            75.12771112155055,
            32.26635712415046
        ]
    },
    {
        id: 110,
        location: [
            74.8112201490021,
            32.09085263790973
        ]
    },
    {
        id: 111,
        location: [
            71.54808908720942,
            30.32682287194665
        ]
    },
    {
        id: 112,
        location: [
            71.4716947145253,
            30.109921899206956
        ]
    },
    {
        id: 113,
        location: [
            71.36255989640514,
            29.88308169079235
        ]
    },
    {
        id: 114,
        location: [
            71.17703070560087,
            29.598804335870945
        ]
    },
    {
        id: 115,
        location: [
            71.68996435076562,
            29.608293219049923
        ]
    },
    {
        id: 116,
        location: [
            71.74453175982569,
            29.778940253462665
        ]
    },
    {
        id: 117,
        location: [
            71.71179131438966,
            29.91146505266575
        ]
    },
    {
        id: 118,
        location: [
            71.94097443244198,
            30.232576870824534
        ]
    },
    {
        id: 119,
        location: [
            72.27929236861446,
            30.430388823985254
        ]
    },
    {
        id: 120,
        location: [
            71.83183961432182,
            30.5244443727876
        ]
    },
    {
        id: 121,
        location: [
            72.80313949559121,
            30.166550853117972
        ]
    },
    {
        id: 122,
        location: [
            72.39934066854664,
            30.006017829094848
        ]
    },
    {
        id: 123,
        location: [
            72.10467665962221,
            29.902004830329556
        ]
    },
    {
        id: 124,
        location: [
            70.47856786963187,
            30.862290113129365
        ]
    },
    {
        id: 125,
        location: [
            70.36943305151172,
            30.147678145877958
        ]
    },
    {
        id: 126,
        location: [
            70.0092881517152,
            29.132758908618605
        ]
    },
    {
        id: 127,
        location: [
            70.94784758754855,
            30.55264330987712
        ]
    },
    {
        id: 128,
        location: [
            71.07880936929273,
            30.166550853117972
        ]
    },
    {
        id: 129,
        location: [
            70.9805880329846,
            29.854690246916558
        ]
    },
    {
        id: 130,
        location: [
            70.84962625124041,
            29.608293219049923
        ]
    },
    {
        id: 131,
        location: [
            70.75140491493227,
            29.33275379227691
        ]
    },
    {
        id: 132,
        location: [
            73.52342929518426,
            30.918482605214177
        ]
    },
    {
        id: 133,
        location: [
            73.67621804055247,
            30.75918498320828
        ]
    },
    {
        id: 134,
        location: [
            73.80717982229666,
            30.5244443727876
        ]
    },
    {
        id: 135,
        location: [
            73.40338099525208,
            30.580834057093572
        ]
    },
    {
        id: 136,
        location: [
            73.04323609545557,
            30.665357115110954
        ]
    },
    {
        id: 137,
        location: [
            73.37064054981603,
            30.307980914343773
        ]
    },
    {
        id: 138,
        location: [
            72.8577069046513,
            30.505640533663843
        ]
    },
    {
        id: 139,
        location: [
            72.60669682297494,
            30.40215444902347
        ]
    },
    {
        id: 140,
        location: [
            71.28616552372102,
            29.189940156760972
        ]
    },
    {
        id: 141,
        location: [
            71.6790508689536,
            29.31372350211185
        ]
    },
    {
        id: 142,
        location: [
            72.22472495955438,
            29.47536767743418
        ]
    },
    {
        id: 143,
        location: [
            71.74453175982569,
            28.597537969276694
        ]
    },
    {
        id: 144,
        location: [
            73.46886188612417,
            30.072151218678776
        ]
    },
    {
        id: 145,
        location: [
            73.03232261364354,
            29.73156737892347
        ]
    },
    {
        id: 146,
        location: [
            72.80313949559121,
            29.22804328975811
        ]
    },
    {
        id: 147,
        location: [
            70.7732318785563,
            28.91326965972254
        ]
    },
    {
        id: 148,
        location: [
            70.50039483325591,
            28.54002979665281
        ]
    },
    {
        id: 149,
        location: [
            70.78414536036831,
            28.126971200525617
        ]
    },
    {
        id: 150,
        location: [
            70.10750948802334,
            28.242404774759624
        ]
    },
    {
        id: 151,
        location: [
            69.00524782500976,
            27.634994173285843
        ]
    },
    {
        id: 152,
        location: [
            68.63418944340123,
            27.94394698652987
        ]
    },
    {
        id: 153,
        location: [
            69.64914325191869,
            27.760612116834274
        ]
    },
    {
        id: 154,
        location: [
            69.33265227937024,
            27.315470527368948
        ]
    },
    {
        id: 155,
        location: [
            68.47048721622099,
            28.252018611163187
        ]
    },
    {
        id: 156,
        location: [
            69.17986353400201,
            28.261631580802753
        ]
    },
    {
        id: 157,
        location: [
            68.18673668910859,
            26.985299074659487
        ]
    },
    {
        id: 158,
        location: [
            68.08851535280044,
            26.624891057266954
        ]
    },
    {
        id: 159,
        location: [
            68.15399624367254,
            26.22418883200801
        ]
    },
    {
        id: 160,
        location: [
            68.52505462528107,
            26.458915283726412
        ]
    },
    {
        id: 161,
        location: [
            68.56870855252913,
            27.286377045943603
        ]
    },
    {
        id: 162,
        location: [
            69.04890175225782,
            26.751651366309346
        ]
    },
    {
        id: 163,
        location: [
            68.25221757998068,
            27.65432941802855
        ]
    },
    {
        id: 164,
        location: [
            68.12125579823649,
            27.334861944232657
        ]
    },
    {
        id: 165,
        location: [
            67.6410625985078,
            27.615655511705786
        ]
    },
    {
        id: 166,
        location: [
            68.4050063253489,
            25.812277261354417
        ]
    },
    {
        id: 167,
        location: [
            68.45957373440898,
            25.36934887192262
        ]
    },
    {
        id: 168,
        location: [
            68.80880515239348,
            25.458065576958752
        ]
    },
    {
        id: 169,
        location: [
            68.83063211601751,
            25.132452757667323
        ]
    },
    {
        id: 170,
        location: [
            68.48140069803301,
            24.934687508671743
        ]
    },
    {
        id: 171,
        location: [
            68.68875685246131,
            24.597758063125013
        ]
    },
    {
        id: 172,
        location: [
            69.03798827044581,
            24.79606258979426
        ]
    },
    {
        id: 173,
        location: [
            69.55092191561054,
            25.320033636497392
        ]
    },
    {
        id: 174,
        location: [
            70.23847126976753,
            25.44821138944352
        ]
    },
    {
        id: 175,
        location: [
            70.2166443061435,
            24.597758063125013
        ]
    },
    {
        id: 176,
        location: [
            67.4991873349516,
            26.99502390877344
        ]
    },
    {
        id: 177,
        location: [
            67.4337064440795,
            26.537051444791764
        ]
    },
    {
        id: 178,
        location: [
            67.79385134387601,
            25.78279981207398
        ]
    },
    {
        id: 179,
        location: [
            68.9615938977617,
            26.03802696484825
        ]
    },
    {
        id: 180,
        location: [
            69.63822977010666,
            25.959554386278906
        ]
    },
    {
        id: 181,
        location: [
            67.76111089843997,
            24.736604387008615
        ]
    },
    {
        id: 182,
        location: [
            68.25221757998068,
            24.07073414162761
        ]
    },
    {
        id: 183,
        location: [
            66.83346494441864,
            24.924790886673314
        ]
    },
    {
        id: 184,
        location: [
            66.92077279891477,
            24.904995259546173
        ]
    },
    {
        id: 185,
        location: [
            66.94259976253879,
            24.91489347022095
        ]
    },
    {
        id: 186,
        location: [
            66.90985931710276,
            24.944583335984717
        ]
    },
    {
        id: 187,
        location: [
            66.93168628072678,
            24.974266047497995
        ]
    },
    {
        id: 188,
        location: [
            66.95351324435082,
            25.01383185656328
        ]
    },
    {
        id: 189,
        location: [
            66.97534020797484,
            25.00394159852012
        ]
    },
    {
        id: 190,
        location: [
            66.96442672616283,
            24.984158693756736
        ]
    },
    {
        id: 191,
        location: [
            66.99716717159887,
            24.954478368380897
        ]
    },
    {
        id: 192,
        location: [
            66.98625368978685,
            24.904995259546173
        ]
    },
    {
        id: 193,
        location: [
            67.20452332602717,
            25.102808307329543
        ]
    },
    {
        id: 194,
        location: [
            65.68754935415699,
            29.427851947537494
        ]
    },
    {
        id: 195,
        location: [
            67.14995591696709,
            30.768562747992377
        ]
    },
    {
        id: 196,
        location: [
            69.22351746125007,
            31.310904469466028
        ]
    },
    {
        id: 197,
        location: [
            68.95068041594968,
            29.58931455992912
        ]
    },
    {
        id: 198,
        location: [
            68.04486142555238,
            28.884606268337805
        ]
    },
    {
        id: 199,
        location: [
            66.6042818263663,
            27.412393677076476
        ]
    },
    {
        id: 200,
        location: [
            64.26879671859496,
            26.09684696950968
        ]
    }
];
exports.default = locs77;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ha8hf","bB7Pu"], "bB7Pu", "parcelRequire7ea9")

//# sourceMappingURL=index.3d214d75.js.map
