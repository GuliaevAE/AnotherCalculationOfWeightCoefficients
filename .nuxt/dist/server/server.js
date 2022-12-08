module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/comps-item-weight2","2":"components/comps-item-weight3","3":"components/comps-item-weight4","4":"components/nuxt-logo","5":"components/tutorial","6":"pages/index","7":"pages/index/catalog","8":"pages/index/weightcoefficients2"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/AnotherCalculationOfWeightCoefficients/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@iconify/vue2");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3d8de15e", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6439d180", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("335f6253", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("31b2ea5e", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-vue");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(40);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("71f83a6d", content, true)

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Bootstrap v4.6.2 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(.focus-visible),[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit;text-align:-webkit-match-parent}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus:not(.focus-visible),button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem}.display-1,.display-2{font-weight:300;line-height:1.2}.display-2{font-size:5.5rem}.display-3{font-size:4.5rem}.display-3,.display-4{font-weight:300;line-height:1.2}.display-4{font-size:3.5rem}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:.875em;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:.875em;color:#6c757d}.blockquote-footer:before{content:\"\\2014\\00A0\"}.img-fluid,.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.333333%;max-width:8.333333%}.col-2{flex:0 0 16.666667%;max-width:16.666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.333333%;max-width:33.333333%}.col-5{flex:0 0 41.666667%;max-width:41.666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.333333%;max-width:58.333333%}.col-8{flex:0 0 66.666667%;max-width:66.666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.333333%;max-width:83.333333%}.col-11{flex:0 0 91.666667%;max-width:91.666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark td,.table-dark th,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:hsla(0,0%,100%,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}select.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size],textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#28a745}.valid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.form-row>.col>.valid-tooltip,.form-row>[class*=col-]>.valid-tooltip{left:5px}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:calc(1.5em + .75rem)!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated select.form-control:valid,select.form-control.is-valid{padding-right:3rem!important;background-position:right 1.5rem center}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:calc(.75em + 2.3125rem)!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{border-color:#28a745}.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.form-row>.col>.invalid-tooltip,.form-row>[class*=col-]>.invalid-tooltip{left:5px}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem)!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated select.form-control:invalid,select.form-control.is-invalid{padding-right:3rem!important;background-position:right 1.5rem center}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem)!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{border-color:#dc3545}.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{justify-content:center}.form-inline .form-group,.form-inline label{display:flex;align-items:center;margin-bottom:0}.form-inline .form-group{flex:0 0 auto;flex-flow:row wrap}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary.focus,.btn-primary:focus,.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary.focus,.btn-secondary:focus,.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success.focus,.btn-success:focus,.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info.focus,.btn-info:focus,.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning.focus,.btn-warning:focus,.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger.focus,.btn-danger:focus,.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light.focus,.btn-light:focus,.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark.focus,.btn-dark:focus,.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3}.btn-link.focus,.btn-link:focus,.btn-link:hover{text-decoration:underline}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.width{width:0;height:auto;transition:width .35s ease}@media (prefers-reduced-motion:reduce){.collapsing.width{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#e9ecef}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#adb5bd;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropleft .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label:after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label,.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label:after,.input-group.has-validation>.custom-select:nth-last-child(n+3),.input-group.has-validation>.form-control:nth-last-child(n+3),.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label,.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label:after,.input-group:not(.has-validation)>.custom-select:not(:last-child),.input-group:not(.has-validation)>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.btn,.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.input-group-text,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.btn,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;z-index:1;display:block;min-height:1.5rem;padding-left:1.5rem;-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label:before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label:before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label:before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label:before,.custom-control-input[disabled]~.custom-control-label:before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label:before{pointer-events:none;background-color:#fff;border:1px solid #adb5bd}.custom-control-label:after,.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\"}.custom-control-label:after{background:50%/50% 50% no-repeat}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label:before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label:after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label:after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label:after{background-color:#fff;transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{display:inline-block;margin-bottom:0}.custom-file,.custom-file-input{position:relative;width:100%;height:calc(1.5em + .75rem + 2px)}.custom-file-input{z-index:2;margin:0;overflow:hidden;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label:after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]:after{content:attr(data-browse)}.custom-file-label{left:0;z-index:1;height:calc(1.5em + .75rem + 2px);overflow:hidden;font-weight:400;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label,.custom-file-label:after{position:absolute;top:0;right:0;padding:.375rem .75rem;line-height:1.5;color:#495057}.custom-file-label:after{bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label:before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label:before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;background-color:transparent;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{isolation:isolate;border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{background:none;border:0;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;padding:.5rem 1rem}.navbar,.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:50%/100% 100% no-repeat}.navbar-nav-scroll{max-height:75vh;overflow-y:auto}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.5);border-color:hsla(0,0%,100%,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-bottom:-.75rem;border-bottom:0}.card-header-pills,.card-header-tabs{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;grid-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion{overflow-anchor:none}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item:before{float:left;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:underline;text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;z-index:2;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress{height:1rem;line-height:0;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress,.progress-bar{display:flex;overflow:hidden}.progress-bar{flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{flex-basis:350px;max-width:350px;font-size:.875rem;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered:before{display:block;height:calc(100vh - 1rem);height:-moz-min-content;height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable:before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered:before{height:calc(100vh - 3.5rem);height:-moz-min-content;height:min-content}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}[dir=ltr] .tooltip{text-align:left}[dir=rtl] .tooltip{text-align:right}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow:before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}[dir=ltr] .popover{text-align:left}[dir=rtl] .popover{text-align:right}.popover{top:0;left:0;z-index:1060;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover,.popover .arrow{position:absolute;display:block}.popover .arrow{width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow:after,.popover .arrow:before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow:before,.bs-popover-top>.arrow:before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow:after,.bs-popover-top>.arrow:after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow:before,.bs-popover-right>.arrow:before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow:after,.bs-popover-right>.arrow:after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow:before,.bs-popover-bottom>.arrow:before{top:0;border-width:0 .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow:after,.bs-popover-bottom>.arrow:after{top:1px;border-width:0 .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow:before,.bs-popover-left>.arrow:before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow:after,.bs-popover-left>.arrow:after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner:after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:none;border:0;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:50%/100% 100% no-repeat}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;border:.25em solid;border-right:.25em solid transparent;border-radius:50%;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;background-color:currentcolor;border-radius:50%;opacity:0;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{animation-duration:1.5s}}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important}.rounded-right,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-right{border-bottom-right-radius:.25rem!important}.rounded-bottom,.rounded-left{border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix:after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9:before{padding-top:42.857143%}.embed-responsive-16by9:before{padding-top:56.25%}.embed-responsive-4by3:before{padding-top:75%}.embed-responsive-1by1:before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.fixed-top{top:0}.fixed-bottom,.fixed-top{position:fixed;right:0;left:0;z-index:1030}.fixed-bottom{bottom:0}@supports (position:sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.stretched-link:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:transparent}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:hsla(0,0%,100%,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;word-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,:after,:before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]:after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd}blockquote,img,pre,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("32df6d42", content, true)

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/*!\n * BootstrapVue Custom CSS (https://bootstrap-vue.org)\n */.bv-no-focus-ring:focus{outline:none}@media (max-width:575.98px){.bv-d-xs-down-none{display:none!important}}@media (max-width:767.98px){.bv-d-sm-down-none{display:none!important}}@media (max-width:991.98px){.bv-d-md-down-none{display:none!important}}@media (max-width:1199.98px){.bv-d-lg-down-none{display:none!important}}.bv-d-xl-down-none{display:none!important}.form-control.focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control.focus.is-valid{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-control.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-avatar{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;flex-shrink:0;width:2.5rem;height:2.5rem;font-size:inherit;font-weight:400;line-height:1;max-width:100%;max-height:auto;text-align:center;overflow:visible;position:relative;transition:color .15s ease-in-out,background-color .15s ease-in-out,box-shadow .15s ease-in-out}.b-avatar:focus{outline:0}.b-avatar.btn,.b-avatar[href]{padding:0;border:0}.b-avatar.btn .b-avatar-img img,.b-avatar[href] .b-avatar-img img{transition:transform .15s ease-in-out}.b-avatar.btn:not(:disabled):not(.disabled),.b-avatar[href]:not(:disabled):not(.disabled){cursor:pointer}.b-avatar.btn:not(:disabled):not(.disabled):hover .b-avatar-img img,.b-avatar[href]:not(:disabled):not(.disabled):hover .b-avatar-img img{transform:scale(1.15)}.b-avatar.disabled,.b-avatar:disabled,.b-avatar[disabled]{opacity:.65;pointer-events:none}.b-avatar .b-avatar-custom,.b-avatar .b-avatar-img,.b-avatar .b-avatar-text{border-radius:inherit;width:100%;height:100%;overflow:hidden;display:flex;justify-content:center;align-items:center;-webkit-mask-image:radial-gradient(#fff,#000);mask-image:radial-gradient(#fff,#000)}.b-avatar .b-avatar-text{text-transform:uppercase;white-space:nowrap}.b-avatar[href]{text-decoration:none}.b-avatar>.b-icon{width:60%;height:auto;max-width:100%}.b-avatar .b-avatar-img img{width:100%;height:100%;max-height:auto;border-radius:inherit;-o-object-fit:cover;object-fit:cover}.b-avatar .b-avatar-badge{position:absolute;min-height:1.5em;min-width:1.5em;padding:.25em;line-height:1;border-radius:10em;font-size:70%;font-weight:700;z-index:1}.b-avatar-sm{width:1.5rem;height:1.5rem}.b-avatar-sm .b-avatar-text{font-size:.6rem}.b-avatar-sm .b-avatar-badge{font-size:.42rem}.b-avatar-lg{width:3.5rem;height:3.5rem}.b-avatar-lg .b-avatar-text{font-size:1.4rem}.b-avatar-lg .b-avatar-badge{font-size:.98rem}.b-avatar-group .b-avatar-group-inner{display:flex;flex-wrap:wrap}.b-avatar-group .b-avatar{border:1px solid #dee2e6}.b-avatar-group .btn.b-avatar:hover:not(.disabled):not(disabled),.b-avatar-group a.b-avatar:hover:not(.disabled):not(disabled){z-index:1}.b-calendar{display:inline-flex}.b-calendar .b-calendar-inner{min-width:250px}.b-calendar .b-calendar-header,.b-calendar .b-calendar-nav{margin-bottom:.25rem}.b-calendar .b-calendar-nav .btn{padding:.25rem}.b-calendar output{padding:.25rem;font-size:80%}.b-calendar output.readonly{background-color:#e9ecef;opacity:1}.b-calendar .b-calendar-footer{margin-top:.5rem}.b-calendar .b-calendar-grid{padding:0;margin:0;overflow:hidden}.b-calendar .b-calendar-grid .row{flex-wrap:nowrap}.b-calendar .b-calendar-grid-caption{padding:.25rem}.b-calendar .b-calendar-grid-body .col[data-date] .btn{width:32px;height:32px;font-size:14px;line-height:1;margin:3px auto;padding:9px 0}.b-calendar .btn.disabled,.b-calendar .btn:disabled,.b-calendar .btn[aria-disabled=true]{cursor:default;pointer-events:none}.card-img-left{border-top-left-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-img-right{border-top-right-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.dropdown.dropleft .dropdown-toggle.dropdown-toggle-no-caret:before,.dropdown:not(.dropleft) .dropdown-toggle.dropdown-toggle-no-caret:after{display:none!important}.dropdown .dropdown-menu:focus{outline:none}.b-dropdown-form{display:inline-block;padding:.25rem 1.5rem;width:100%;clear:both;font-weight:400}.b-dropdown-form:focus{outline:1px dotted!important;outline:5px auto -webkit-focus-ring-color!important}.b-dropdown-form.disabled,.b-dropdown-form:disabled{outline:0!important;color:#adb5bd;pointer-events:none}.b-dropdown-text{display:inline-block;padding:.25rem 1.5rem;margin-bottom:0;width:100%;clear:both;font-weight:lighter}.custom-checkbox.b-custom-control-lg,.input-group-lg .custom-checkbox{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-checkbox.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-checkbox .custom-control-label:before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:.3rem}.custom-checkbox.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-checkbox .custom-control-label:after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background-size:50% 50%}.custom-checkbox.b-custom-control-sm,.input-group-sm .custom-checkbox{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-checkbox.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-checkbox .custom-control-label:before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:.2rem}.custom-checkbox.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-checkbox .custom-control-label:after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background-size:50% 50%}.custom-switch.b-custom-control-lg,.input-group-lg .custom-switch{padding-left:2.8125rem}.custom-switch.b-custom-control-lg .custom-control-label,.input-group-lg .custom-switch .custom-control-label{font-size:1.25rem;line-height:1.5}.custom-switch.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-switch .custom-control-label:before{top:.3125rem;height:1.25rem;left:-2.8125rem;width:2.1875rem;border-radius:.625rem}.custom-switch.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-switch .custom-control-label:after{top:calc(.3125rem + 2px);left:calc(-2.8125rem + 2px);width:calc(1.25rem - 4px);height:calc(1.25rem - 4px);border-radius:.625rem;background-size:50% 50%}.custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label:after,.input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label:after{transform:translateX(.9375rem)}.custom-switch.b-custom-control-sm,.input-group-sm .custom-switch{padding-left:1.96875rem}.custom-switch.b-custom-control-sm .custom-control-label,.input-group-sm .custom-switch .custom-control-label{font-size:.875rem;line-height:1.5}.custom-switch.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-switch .custom-control-label:before{top:.21875rem;left:-1.96875rem;width:1.53125rem;height:.875rem;border-radius:.4375rem}.custom-switch.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-switch .custom-control-label:after{top:calc(.21875rem + 2px);left:calc(-1.96875rem + 2px);width:calc(.875rem - 4px);height:calc(.875rem - 4px);border-radius:.4375rem;background-size:50% 50%}.custom-switch.b-custom-control-sm .custom-control-input:checked~.custom-control-label:after,.input-group-sm .custom-switch .custom-control-input:checked~.custom-control-label:after{transform:translateX(.65625rem)}.input-group>.input-group-append:last-child>.btn-group:not(:last-child):not(.dropdown-toggle)>.btn,.input-group>.input-group-append:not(:last-child)>.btn-group>.btn,.input-group>.input-group-prepend>.btn-group>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn-group>.btn,.input-group>.input-group-prepend:first-child>.btn-group:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.btn-group>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.b-form-btn-label-control.form-control{display:flex;align-items:stretch;height:auto;padding:0;background-image:none}.input-group .b-form-btn-label-control.form-control{padding:0}.b-form-btn-label-control.form-control[dir=rtl],[dir=rtl] .b-form-btn-label-control.form-control{flex-direction:row-reverse}.b-form-btn-label-control.form-control[dir=rtl]>label,[dir=rtl] .b-form-btn-label-control.form-control>label{text-align:right}.b-form-btn-label-control.form-control>.btn{line-height:1;font-size:inherit;box-shadow:none!important;border:0}.b-form-btn-label-control.form-control>.btn:disabled{pointer-events:none}.b-form-btn-label-control.form-control.is-valid>.btn{color:#28a745}.b-form-btn-label-control.form-control.is-invalid>.btn{color:#dc3545}.b-form-btn-label-control.form-control>.dropdown-menu{padding:.5rem}.b-form-btn-label-control.form-control>.form-control{height:auto;min-height:calc(1.5em + .75rem);padding-left:.25rem;margin:0;border:0;outline:0;background:transparent;word-break:break-word;font-size:inherit;white-space:normal;cursor:pointer}.b-form-btn-label-control.form-control>.form-control.form-control-sm{min-height:calc(1.5em + .5rem)}.b-form-btn-label-control.form-control>.form-control.form-control-lg{min-height:calc(1.5em + 1rem)}.input-group.input-group-sm .b-form-btn-label-control.form-control>.form-control{min-height:calc(1.5em + .5rem);padding-top:.25rem;padding-bottom:.25rem}.input-group.input-group-lg .b-form-btn-label-control.form-control>.form-control{min-height:calc(1.5em + 1rem);padding-top:.5rem;padding-bottom:.5rem}.b-form-btn-label-control.form-control[aria-disabled=true],.b-form-btn-label-control.form-control[aria-readonly=true]{background-color:#e9ecef;opacity:1}.b-form-btn-label-control.form-control[aria-disabled=true]{pointer-events:none}.b-form-btn-label-control.form-control[aria-disabled=true]>label{cursor:default}.b-form-btn-label-control.btn-group>.dropdown-menu{padding:.5rem}.custom-file-label{white-space:nowrap;overflow-x:hidden}.b-custom-control-lg.custom-file,.b-custom-control-lg .custom-file-input,.b-custom-control-lg .custom-file-label,.input-group-lg.custom-file,.input-group-lg .custom-file-input,.input-group-lg .custom-file-label{font-size:1.25rem;height:calc(1.5em + 1rem + 2px)}.b-custom-control-lg .custom-file-label,.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label,.input-group-lg .custom-file-label:after{padding:.5rem 1rem;line-height:1.5}.b-custom-control-lg .custom-file-label,.input-group-lg .custom-file-label{border-radius:.3rem}.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label:after{font-size:inherit;height:calc(1.5em + 1rem);border-radius:0 .3rem .3rem 0}.b-custom-control-sm.custom-file,.b-custom-control-sm .custom-file-input,.b-custom-control-sm .custom-file-label,.input-group-sm.custom-file,.input-group-sm .custom-file-input,.input-group-sm .custom-file-label{font-size:.875rem;height:calc(1.5em + .5rem + 2px)}.b-custom-control-sm .custom-file-label,.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label,.input-group-sm .custom-file-label:after{padding:.25rem .5rem;line-height:1.5}.b-custom-control-sm .custom-file-label,.input-group-sm .custom-file-label{border-radius:.2rem}.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label:after{font-size:inherit;height:calc(1.5em + .5rem);border-radius:0 .2rem .2rem 0}.form-control.is-invalid,.form-control.is-valid,.was-validated .form-control:invalid,.was-validated .form-control:valid{background-position:right calc(.375em + .1875rem) center}input[type=color].form-control{height:calc(1.5em + .75rem + 2px);padding:.125rem .25rem}.input-group-sm input[type=color].form-control,input[type=color].form-control.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.125rem .25rem}.input-group-lg input[type=color].form-control,input[type=color].form-control.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.125rem .25rem}input[type=color].form-control:disabled{background-color:#adb5bd;opacity:.65}.input-group>.custom-range{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file+.custom-range,.input-group>.custom-range+.custom-file,.input-group>.custom-range+.custom-range,.input-group>.custom-range+.custom-select,.input-group>.custom-range+.form-control,.input-group>.custom-range+.form-control-plaintext,.input-group>.custom-select+.custom-range,.input-group>.form-control+.custom-range,.input-group>.form-control-plaintext+.custom-range{margin-left:-1px}.input-group>.custom-range:focus{z-index:3}.input-group>.custom-range:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-range:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-range{padding:0 .75rem;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;height:calc(1.5em + .75rem + 2px);border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.input-group>.custom-range{transition:none}}.input-group>.custom-range:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.input-group>.custom-range:disabled,.input-group>.custom-range[readonly]{background-color:#e9ecef}.input-group-lg>.custom-range{height:calc(1.5em + 1rem + 2px);padding:0 1rem;border-radius:.3rem}.input-group-sm>.custom-range{height:calc(1.5em + .5rem + 2px);padding:0 .5rem;border-radius:.2rem}.input-group .custom-range.is-valid,.was-validated .input-group .custom-range:valid{border-color:#28a745}.input-group .custom-range.is-valid:focus,.was-validated .input-group .custom-range:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-range.is-valid:focus::-webkit-slider-thumb,.was-validated .custom-range:valid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid:focus::-moz-range-thumb,.was-validated .custom-range:valid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid:focus::-ms-thumb,.was-validated .custom-range:valid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid::-webkit-slider-thumb,.was-validated .custom-range:valid::-webkit-slider-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-webkit-slider-thumb:active,.was-validated .custom-range:valid::-webkit-slider-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-webkit-slider-runnable-track,.was-validated .custom-range:valid::-webkit-slider-runnable-track{background-color:rgba(40,167,69,.35)}.custom-range.is-valid::-moz-range-thumb,.was-validated .custom-range:valid::-moz-range-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-moz-range-thumb:active,.was-validated .custom-range:valid::-moz-range-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-moz-range-track,.was-validated .custom-range:valid::-moz-range-track{background:rgba(40,167,69,.35)}.custom-range.is-valid~.valid-feedback,.custom-range.is-valid~.valid-tooltip,.was-validated .custom-range:valid~.valid-feedback,.was-validated .custom-range:valid~.valid-tooltip{display:block}.custom-range.is-valid::-ms-thumb,.was-validated .custom-range:valid::-ms-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-ms-thumb:active,.was-validated .custom-range:valid::-ms-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-ms-track-lower,.custom-range.is-valid::-ms-track-upper,.was-validated .custom-range:valid::-ms-track-lower,.was-validated .custom-range:valid::-ms-track-upper{background:rgba(40,167,69,.35)}.input-group .custom-range.is-invalid,.was-validated .input-group .custom-range:invalid{border-color:#dc3545}.input-group .custom-range.is-invalid:focus,.was-validated .input-group .custom-range:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-range.is-invalid:focus::-webkit-slider-thumb,.was-validated .custom-range:invalid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid:focus::-moz-range-thumb,.was-validated .custom-range:invalid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid:focus::-ms-thumb,.was-validated .custom-range:invalid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid::-webkit-slider-thumb,.was-validated .custom-range:invalid::-webkit-slider-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-webkit-slider-thumb:active,.was-validated .custom-range:invalid::-webkit-slider-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-webkit-slider-runnable-track,.was-validated .custom-range:invalid::-webkit-slider-runnable-track{background-color:rgba(220,53,69,.35)}.custom-range.is-invalid::-moz-range-thumb,.was-validated .custom-range:invalid::-moz-range-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-moz-range-thumb:active,.was-validated .custom-range:invalid::-moz-range-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-moz-range-track,.was-validated .custom-range:invalid::-moz-range-track{background:rgba(220,53,69,.35)}.custom-range.is-invalid~.invalid-feedback,.custom-range.is-invalid~.invalid-tooltip,.was-validated .custom-range:invalid~.invalid-feedback,.was-validated .custom-range:invalid~.invalid-tooltip{display:block}.custom-range.is-invalid::-ms-thumb,.was-validated .custom-range:invalid::-ms-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-ms-thumb:active,.was-validated .custom-range:invalid::-ms-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-ms-track-lower,.custom-range.is-invalid::-ms-track-upper,.was-validated .custom-range:invalid::-ms-track-lower,.was-validated .custom-range:invalid::-ms-track-upper{background:rgba(220,53,69,.35)}.custom-radio.b-custom-control-lg,.input-group-lg .custom-radio{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-radio.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-radio .custom-control-label:before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:50%}.custom-radio.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-radio .custom-control-label:after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background:no-repeat 50%/50% 50%}.custom-radio.b-custom-control-sm,.input-group-sm .custom-radio{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-radio.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-radio .custom-control-label:before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:50%}.custom-radio.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-radio .custom-control-label:after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background:no-repeat 50%/50% 50%}.b-rating{text-align:center}.b-rating.d-inline-flex{width:auto}.b-rating .b-rating-star,.b-rating .b-rating-value{padding:0 .25em}.b-rating .b-rating-value{min-width:2.5em}.b-rating .b-rating-star{display:inline-flex;justify-content:center;outline:0}.b-rating .b-rating-star .b-rating-icon{display:inline-flex;transition:all .15s ease-in-out}.b-rating.disabled,.b-rating:disabled{background-color:#e9ecef;color:#6c757d}.b-rating:not(.disabled):not(.readonly) .b-rating-star{cursor:pointer}.b-rating:not(.disabled):not(.readonly) .b-rating-star:hover .b-rating-icon,.b-rating:not(.disabled):not(.readonly):focus:not(:hover) .b-rating-star.focused .b-rating-icon{transform:scale(1.5)}.b-rating[dir=rtl] .b-rating-star-half{transform:scaleX(-1)}.b-form-spinbutton{text-align:center;overflow:hidden;background-image:none;padding:0}.b-form-spinbutton[dir=rtl]:not(.flex-column),[dir=rtl] .b-form-spinbutton:not(.flex-column){flex-direction:row-reverse}.b-form-spinbutton output{font-size:inherit;outline:0;border:0;background-color:transparent;width:auto;margin:0;padding:0 .25rem}.b-form-spinbutton output>bdi,.b-form-spinbutton output>div{display:block;min-width:2.25em;height:1.5em}.b-form-spinbutton.flex-column{height:auto;width:auto}.b-form-spinbutton.flex-column output{margin:0 .25rem;padding:.25rem 0}.b-form-spinbutton:not(.d-inline-flex):not(.flex-column){output-width:100%}.b-form-spinbutton.d-inline-flex:not(.flex-column){width:auto}.b-form-spinbutton .btn{line-height:1;box-shadow:none!important}.b-form-spinbutton .btn:disabled{pointer-events:none}.b-form-spinbutton .btn:hover:not(:disabled)>div>.b-icon{transform:scale(1.25)}.b-form-spinbutton.disabled,.b-form-spinbutton.readonly{background-color:#e9ecef}.b-form-spinbutton.disabled{pointer-events:none}.b-form-tags.focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.b-form-tags.focus.is-valid{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.b-form-tags.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-form-tags.disabled{background-color:#e9ecef}.b-form-tags-list{margin-top:-.25rem}.b-form-tags-list .b-form-tag,.b-form-tags-list .b-form-tags-field{margin-top:.25rem}.b-form-tags-input{color:#495057}.b-form-tag{font-size:75%;font-weight:400;line-height:1.5;margin-right:.25rem}.b-form-tag.disabled{opacity:.75}.b-form-tag>button.b-form-tag-remove{color:inherit;font-size:125%;line-height:1;float:none;margin-left:.25rem}.form-control-lg .b-form-tag,.form-control-sm .b-form-tag{line-height:1.5}.media-aside{display:flex;margin-right:1rem}.media-aside-right{margin-right:0;margin-left:1rem}.modal-backdrop{opacity:.5}.b-pagination-pills .page-item .page-link{border-radius:50rem!important;margin-left:.25rem;line-height:1}.b-pagination-pills .page-item:first-child .page-link{margin-left:0}.popover.b-popover{display:block;opacity:1;outline:0}.popover.b-popover.fade:not(.show){opacity:0}.popover.b-popover.show{opacity:1}.b-popover-primary.popover{background-color:#cce5ff;border-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-primary.bs-popover-top>.arrow:before{border-top-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-primary.bs-popover-top>.arrow:after{border-top-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-primary.bs-popover-right>.arrow:before{border-right-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-primary.bs-popover-right>.arrow:after{border-right-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-primary.bs-popover-bottom>.arrow:before{border-bottom-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-primary.bs-popover-bottom .popover-header:before,.b-popover-primary.bs-popover-bottom>.arrow:after{border-bottom-color:#bdddff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-primary.bs-popover-left>.arrow:before{border-left-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-primary.bs-popover-left>.arrow:after{border-left-color:#cce5ff}.b-popover-primary .popover-header{color:#212529;background-color:#bdddff;border-bottom-color:#a3d0ff}.b-popover-primary .popover-body{color:#004085}.b-popover-secondary.popover{background-color:#e2e3e5;border-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-secondary.bs-popover-top>.arrow:before{border-top-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-secondary.bs-popover-top>.arrow:after{border-top-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-secondary.bs-popover-right>.arrow:before{border-right-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-secondary.bs-popover-right>.arrow:after{border-right-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-secondary.bs-popover-bottom>.arrow:before{border-bottom-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-secondary.bs-popover-bottom .popover-header:before,.b-popover-secondary.bs-popover-bottom>.arrow:after{border-bottom-color:#dadbde}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-secondary.bs-popover-left>.arrow:before{border-left-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-secondary.bs-popover-left>.arrow:after{border-left-color:#e2e3e5}.b-popover-secondary .popover-header{color:#212529;background-color:#dadbde;border-bottom-color:#ccced2}.b-popover-secondary .popover-body{color:#383d41}.b-popover-success.popover{background-color:#d4edda;border-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-success.bs-popover-top>.arrow:before{border-top-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-success.bs-popover-top>.arrow:after{border-top-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-success.bs-popover-right>.arrow:before{border-right-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-success.bs-popover-right>.arrow:after{border-right-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-success.bs-popover-bottom>.arrow:before{border-bottom-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-success.bs-popover-bottom .popover-header:before,.b-popover-success.bs-popover-bottom>.arrow:after{border-bottom-color:#c9e8d1}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-success.bs-popover-left>.arrow:before{border-left-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-success.bs-popover-left>.arrow:after{border-left-color:#d4edda}.b-popover-success .popover-header{color:#212529;background-color:#c9e8d1;border-bottom-color:#b7e1c1}.b-popover-success .popover-body{color:#155724}.b-popover-info.popover{background-color:#d1ecf1;border-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-info.bs-popover-top>.arrow:before{border-top-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-info.bs-popover-top>.arrow:after{border-top-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-info.bs-popover-right>.arrow:before{border-right-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-info.bs-popover-right>.arrow:after{border-right-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-info.bs-popover-bottom>.arrow:before{border-bottom-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-info.bs-popover-bottom .popover-header:before,.b-popover-info.bs-popover-bottom>.arrow:after{border-bottom-color:#c5e7ed}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-info.bs-popover-left>.arrow:before{border-left-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-info.bs-popover-left>.arrow:after{border-left-color:#d1ecf1}.b-popover-info .popover-header{color:#212529;background-color:#c5e7ed;border-bottom-color:#b2dfe7}.b-popover-info .popover-body{color:#0c5460}.b-popover-warning.popover{background-color:#fff3cd;border-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-warning.bs-popover-top>.arrow:before{border-top-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-warning.bs-popover-top>.arrow:after{border-top-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-warning.bs-popover-right>.arrow:before{border-right-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-warning.bs-popover-right>.arrow:after{border-right-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-warning.bs-popover-bottom>.arrow:before{border-bottom-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-warning.bs-popover-bottom .popover-header:before,.b-popover-warning.bs-popover-bottom>.arrow:after{border-bottom-color:#ffefbe}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-warning.bs-popover-left>.arrow:before{border-left-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-warning.bs-popover-left>.arrow:after{border-left-color:#fff3cd}.b-popover-warning .popover-header{color:#212529;background-color:#ffefbe;border-bottom-color:#ffe9a4}.b-popover-warning .popover-body{color:#856404}.b-popover-danger.popover{background-color:#f8d7da;border-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-danger.bs-popover-top>.arrow:before{border-top-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-danger.bs-popover-top>.arrow:after{border-top-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-danger.bs-popover-right>.arrow:before{border-right-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-danger.bs-popover-right>.arrow:after{border-right-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-danger.bs-popover-bottom>.arrow:before{border-bottom-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-danger.bs-popover-bottom .popover-header:before,.b-popover-danger.bs-popover-bottom>.arrow:after{border-bottom-color:#f6cace}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-danger.bs-popover-left>.arrow:before{border-left-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-danger.bs-popover-left>.arrow:after{border-left-color:#f8d7da}.b-popover-danger .popover-header{color:#212529;background-color:#f6cace;border-bottom-color:#f2b4ba}.b-popover-danger .popover-body{color:#721c24}.b-popover-light.popover{background-color:#fefefe;border-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-light.bs-popover-top>.arrow:before{border-top-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-light.bs-popover-top>.arrow:after{border-top-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-light.bs-popover-right>.arrow:before{border-right-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-light.bs-popover-right>.arrow:after{border-right-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-light.bs-popover-bottom>.arrow:before{border-bottom-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-light.bs-popover-bottom .popover-header:before,.b-popover-light.bs-popover-bottom>.arrow:after{border-bottom-color:#f6f6f6}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-light.bs-popover-left>.arrow:before{border-left-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-light.bs-popover-left>.arrow:after{border-left-color:#fefefe}.b-popover-light .popover-header{color:#212529;background-color:#f6f6f6;border-bottom-color:#eaeaea}.b-popover-light .popover-body{color:#818182}.b-popover-dark.popover{background-color:#d6d8d9;border-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-dark.bs-popover-top>.arrow:before{border-top-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-dark.bs-popover-top>.arrow:after{border-top-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-dark.bs-popover-right>.arrow:before{border-right-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-dark.bs-popover-right>.arrow:after{border-right-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-dark.bs-popover-bottom>.arrow:before{border-bottom-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-dark.bs-popover-bottom .popover-header:before,.b-popover-dark.bs-popover-bottom>.arrow:after{border-bottom-color:#ced0d2}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-dark.bs-popover-left>.arrow:before{border-left-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-dark.bs-popover-left>.arrow:after{border-left-color:#d6d8d9}.b-popover-dark .popover-header{color:#212529;background-color:#ced0d2;border-bottom-color:#c1c4c5}.b-popover-dark .popover-body{color:#1b1e21}.b-sidebar-outer{position:fixed;top:0;left:0;right:0;height:0;overflow:visible;z-index:1035}.b-sidebar-backdrop{left:0;z-index:-1;width:100vw;opacity:.6}.b-sidebar,.b-sidebar-backdrop{position:fixed;top:0;height:100vh}.b-sidebar{display:flex;flex-direction:column;width:320px;max-width:100%;max-height:100%;margin:0;outline:0;transform:translateX(0)}.b-sidebar.slide{transition:transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.b-sidebar.slide{transition:none}}.b-sidebar:not(.b-sidebar-right){left:0;right:auto}.b-sidebar:not(.b-sidebar-right).slide:not(.show){transform:translateX(-100%)}.b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close{margin-left:auto}.b-sidebar.b-sidebar-right{left:auto;right:0}.b-sidebar.b-sidebar-right.slide:not(.show){transform:translateX(100%)}.b-sidebar.b-sidebar-right>.b-sidebar-header .close{margin-right:auto}.b-sidebar>.b-sidebar-header{font-size:1.5rem;padding:.5rem 1rem;display:flex;flex-direction:row;flex-grow:0;align-items:center}[dir=rtl] .b-sidebar>.b-sidebar-header{flex-direction:row-reverse}.b-sidebar>.b-sidebar-header .close{float:none;font-size:1.5rem}.b-sidebar>.b-sidebar-body{flex-grow:1;height:100%;overflow-y:auto}.b-sidebar>.b-sidebar-footer{flex-grow:0}.b-skeleton-wrapper{cursor:wait}.b-skeleton{position:relative;overflow:hidden;background-color:rgba(0,0,0,.12);cursor:wait;-webkit-mask-image:radial-gradient(#fff,#000);mask-image:radial-gradient(#fff,#000)}.b-skeleton:before{content:\" \"}.b-skeleton-text{height:1rem;margin-bottom:.25rem;border-radius:.25rem}.b-skeleton-button{width:75px;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem}.b-skeleton-avatar{width:2.5em;height:2.5em;border-radius:50%}.b-skeleton-input{height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;line-height:1.5;border:1px solid #ced4da;border-radius:.25rem}.b-skeleton-icon-wrapper svg{color:rgba(0,0,0,.12)}.b-skeleton-img{height:100%;width:100%}.b-skeleton-animate-wave:after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.4),transparent);animation:b-skeleton-animate-wave 1.75s linear infinite}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-wave:after{background:none;animation:none}}@keyframes b-skeleton-animate-wave{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}.b-skeleton-animate-fade{animation:b-skeleton-animate-fade .875s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-fade{animation:none}}@keyframes b-skeleton-animate-fade{0%{opacity:1}to{opacity:.4}}.b-skeleton-animate-throb{animation:b-skeleton-animate-throb .875s ease-in infinite alternate}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-throb{animation:none}}@keyframes b-skeleton-animate-throb{0%{transform:scale(1)}to{transform:scale(.975)}}.table.b-table.b-table-fixed{table-layout:fixed}.table.b-table.b-table-no-border-collapse{border-collapse:separate;border-spacing:0}.table.b-table[aria-busy=true]{opacity:.55}.table.b-table>tbody>tr.b-table-details>td{border-top:none!important}.table.b-table>caption{caption-side:bottom}.table.b-table.b-table-caption-top>caption{caption-side:top!important}.table.b-table>tbody>.table-active,.table.b-table>tbody>.table-active>td,.table.b-table>tbody>.table-active>th{background-color:rgba(0,0,0,.075)}.table.b-table.table-hover>tbody>tr.table-active:hover td,.table.b-table.table-hover>tbody>tr.table-active:hover th{color:#212529;background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table>tbody>.bg-active,.table.b-table>tbody>.bg-active>td,.table.b-table>tbody>.bg-active>th{background-color:hsla(0,0%,100%,.075)!important}.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover td,.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover th{color:#fff;background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}.b-table-sticky-header,.table-responsive,[class*=table-responsive-]{margin-bottom:1rem}.b-table-sticky-header>.table,.table-responsive>.table,[class*=table-responsive-]>.table{margin-bottom:0}.b-table-sticky-header{overflow-y:auto;max-height:300px}@media print{.b-table-sticky-header{overflow-y:visible!important;max-height:none!important}}@supports (position:sticky){.b-table-sticky-header>.table.b-table>thead>tr>th{position:sticky;top:0;z-index:2}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{position:sticky;left:0}.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{z-index:5}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column{z-index:2}.table.b-table>tbody>tr>.table-b-table-default,.table.b-table>tfoot>tr>.table-b-table-default,.table.b-table>thead>tr>.table-b-table-default{color:#212529;background-color:#fff}.table.b-table.table-dark>tbody>tr>.bg-b-table-default,.table.b-table.table-dark>tfoot>tr>.bg-b-table-default,.table.b-table.table-dark>thead>tr>.bg-b-table-default{color:#fff;background-color:#343a40}.table.b-table.table-striped>tbody>tr:nth-of-type(odd)>.table-b-table-default{background-image:linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05));background-repeat:no-repeat}.table.b-table.table-striped.table-dark>tbody>tr:nth-of-type(odd)>.bg-b-table-default{background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,.05));background-repeat:no-repeat}.table.b-table.table-hover>tbody>tr:hover>.table-b-table-default{color:#212529;background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table.table-hover.table-dark>tbody>tr:hover>.bg-b-table-default{color:#fff;background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}}.table.b-table>tfoot>tr>[aria-sort],.table.b-table>thead>tr>[aria-sort]{cursor:pointer;background-image:none;background-repeat:no-repeat;background-size:.65em 1em}.table.b-table>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right .375rem center;padding-right:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table>thead>tr>[aria-sort].b-table-sort-icon-left{background-position:left .375rem center;padding-left:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort=none],.table.b-table>thead>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=ascending],.table.b-table>thead>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=descending],.table.b-table>thead>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=none],.table.b-table.table-dark>thead>tr>[aria-sort=none],.table.b-table>.thead-dark>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=ascending],.table.b-table.table-dark>thead>tr>[aria-sort=ascending],.table.b-table>.thead-dark>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=descending],.table.b-table.table-dark>thead>tr>[aria-sort=descending],.table.b-table>.thead-dark>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=none],.table.b-table>thead>tr>.table-dark[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=ascending],.table.b-table>thead>tr>.table-dark[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=descending],.table.b-table>thead>tr>.table-dark[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-sm>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table.table-sm>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right .15rem center;padding-right:calc(.3rem + .65em)}.table.b-table.table-sm>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table.table-sm>thead>tr>[aria-sort].b-table-sort-icon-left{background-position:left .15rem center;padding-left:calc(.3rem + .65em)}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click)>tbody>tr{cursor:pointer}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click).b-table-selecting.b-table-select-range>tbody>tr{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (max-width:575.98px){.table.b-table.b-table-stacked-sm{display:block;width:100%}.table.b-table.b-table-stacked-sm>caption,.table.b-table.b-table-stacked-sm>tbody,.table.b-table.b-table-stacked-sm>tbody>tr,.table.b-table.b-table-stacked-sm>tbody>tr>td,.table.b-table.b-table-stacked-sm>tbody>tr>th{display:block}.table.b-table.b-table-stacked-sm>tfoot,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-sm>thead,.table.b-table.b-table-stacked-sm>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-sm>caption{caption-side:top!important}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr.bottom-row,.table.b-table.b-table-stacked-sm>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-sm>tbody>tr>:first-child,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:767.98px){.table.b-table.b-table-stacked-md{display:block;width:100%}.table.b-table.b-table-stacked-md>caption,.table.b-table.b-table-stacked-md>tbody,.table.b-table.b-table-stacked-md>tbody>tr,.table.b-table.b-table-stacked-md>tbody>tr>td,.table.b-table.b-table-stacked-md>tbody>tr>th{display:block}.table.b-table.b-table-stacked-md>tfoot,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-md>thead,.table.b-table.b-table-stacked-md>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-md>caption{caption-side:top!important}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-md>tbody>tr.bottom-row,.table.b-table.b-table-stacked-md>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-md>tbody>tr>:first-child,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:991.98px){.table.b-table.b-table-stacked-lg{display:block;width:100%}.table.b-table.b-table-stacked-lg>caption,.table.b-table.b-table-stacked-lg>tbody,.table.b-table.b-table-stacked-lg>tbody>tr,.table.b-table.b-table-stacked-lg>tbody>tr>td,.table.b-table.b-table-stacked-lg>tbody>tr>th{display:block}.table.b-table.b-table-stacked-lg>tfoot,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-lg>thead,.table.b-table.b-table-stacked-lg>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-lg>caption{caption-side:top!important}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr.bottom-row,.table.b-table.b-table-stacked-lg>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-lg>tbody>tr>:first-child,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:1199.98px){.table.b-table.b-table-stacked-xl{display:block;width:100%}.table.b-table.b-table-stacked-xl>caption,.table.b-table.b-table-stacked-xl>tbody,.table.b-table.b-table-stacked-xl>tbody>tr,.table.b-table.b-table-stacked-xl>tbody>tr>td,.table.b-table.b-table-stacked-xl>tbody>tr>th{display:block}.table.b-table.b-table-stacked-xl>tfoot,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-xl>thead,.table.b-table.b-table-stacked-xl>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-xl>caption{caption-side:top!important}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr.bottom-row,.table.b-table.b-table-stacked-xl>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-xl>tbody>tr>:first-child,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+th{border-top-width:3px}}.table.b-table.b-table-stacked{display:block;width:100%}.table.b-table.b-table-stacked>caption,.table.b-table.b-table-stacked>tbody,.table.b-table.b-table-stacked>tbody>tr,.table.b-table.b-table-stacked>tbody>tr>td,.table.b-table.b-table-stacked>tbody>tr>th{display:block}.table.b-table.b-table-stacked>tfoot,.table.b-table.b-table-stacked>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked>thead,.table.b-table.b-table-stacked>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked>caption{caption-side:top!important}.table.b-table.b-table-stacked>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked>tbody>tr.bottom-row,.table.b-table.b-table-stacked>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked>tbody>tr>:first-child,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+th{border-top-width:3px}.b-time{min-width:150px}.b-time[aria-disabled=true] output,.b-time[aria-readonly=true] output,.b-time output.disabled{background-color:#e9ecef;opacity:1}.b-time[aria-disabled=true] output{pointer-events:none}[dir=rtl] .b-time>.d-flex:not(.flex-column){flex-direction:row-reverse}.b-time .b-time-header{margin-bottom:.5rem}.b-time .b-time-header output{padding:.25rem;font-size:80%}.b-time .b-time-footer{margin-top:.5rem}.b-time .b-time-ampm{margin-left:.5rem}.b-toast{display:block;position:relative;max-width:350px;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-clip:padding-box;z-index:1;border-radius:.25rem}.b-toast .toast{background-color:hsla(0,0%,100%,.85)}.b-toast:not(:last-child){margin-bottom:.75rem}.b-toast.b-toast-solid .toast{background-color:#fff}.b-toast .toast{opacity:1}.b-toast .toast.fade:not(.show){opacity:0}.b-toast .toast .toast-body{display:block}.b-toast-primary .toast{background-color:rgba(230,242,255,.85);border-color:rgba(184,218,255,.85);color:#004085}.b-toast-primary .toast .toast-header{color:#004085;background-color:rgba(204,229,255,.85);border-bottom-color:rgba(184,218,255,.85)}.b-toast-primary.b-toast-solid .toast{background-color:#e6f2ff}.b-toast-secondary .toast{background-color:rgba(239,240,241,.85);border-color:rgba(214,216,219,.85);color:#383d41}.b-toast-secondary .toast .toast-header{color:#383d41;background-color:rgba(226,227,229,.85);border-bottom-color:rgba(214,216,219,.85)}.b-toast-secondary.b-toast-solid .toast{background-color:#eff0f1}.b-toast-success .toast{background-color:rgba(230,245,233,.85);border-color:rgba(195,230,203,.85);color:#155724}.b-toast-success .toast .toast-header{color:#155724;background-color:rgba(212,237,218,.85);border-bottom-color:rgba(195,230,203,.85)}.b-toast-success.b-toast-solid .toast{background-color:#e6f5e9}.b-toast-info .toast{background-color:rgba(229,244,247,.85);border-color:rgba(190,229,235,.85);color:#0c5460}.b-toast-info .toast .toast-header{color:#0c5460;background-color:rgba(209,236,241,.85);border-bottom-color:rgba(190,229,235,.85)}.b-toast-info.b-toast-solid .toast{background-color:#e5f4f7}.b-toast-warning .toast{background-color:rgba(255,249,231,.85);border-color:rgba(255,238,186,.85);color:#856404}.b-toast-warning .toast .toast-header{color:#856404;background-color:rgba(255,243,205,.85);border-bottom-color:rgba(255,238,186,.85)}.b-toast-warning.b-toast-solid .toast{background-color:#fff9e7}.b-toast-danger .toast{background-color:rgba(252,237,238,.85);border-color:rgba(245,198,203,.85);color:#721c24}.b-toast-danger .toast .toast-header{color:#721c24;background-color:rgba(248,215,218,.85);border-bottom-color:rgba(245,198,203,.85)}.b-toast-danger.b-toast-solid .toast{background-color:#fcedee}.b-toast-light .toast{background-color:hsla(0,0%,100%,.85);border-color:rgba(253,253,254,.85);color:#818182}.b-toast-light .toast .toast-header{color:#818182;background-color:hsla(0,0%,99.6%,.85);border-bottom-color:rgba(253,253,254,.85)}.b-toast-light.b-toast-solid .toast{background-color:#fff}.b-toast-dark .toast{background-color:rgba(227,229,229,.85);border-color:rgba(198,200,202,.85);color:#1b1e21}.b-toast-dark .toast .toast-header{color:#1b1e21;background-color:rgba(214,216,217,.85);border-bottom-color:rgba(198,200,202,.85)}.b-toast-dark.b-toast-solid .toast{background-color:#e3e5e5}.b-toaster{z-index:1100}.b-toaster .b-toaster-slot{position:relative;display:block}.b-toaster .b-toaster-slot:empty{display:none!important}.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right,.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{position:fixed;left:.5rem;right:.5rem;margin:0;padding:0;height:0;overflow:visible}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{position:absolute;max-width:350px;width:100%;left:0;right:0;padding:0;margin:0}.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-bottom-full .b-toaster-slot .toast,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-top-full .b-toaster-slot .toast{width:100%;max-width:100%}.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{top:0}.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{top:.5rem}.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right{bottom:0}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot{bottom:.5rem}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{margin-left:auto}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot{margin-right:auto}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-move,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-move,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-move,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-move{transition:transform .175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-to .toast.fade{transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active{position:absolute;transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active .toast.fade{transition-delay:0s}.tooltip.b-tooltip{display:block;opacity:.9;outline:0}.tooltip.b-tooltip.fade:not(.show){opacity:0}.tooltip.b-tooltip.show{opacity:.9}.tooltip.b-tooltip.noninteractive{pointer-events:none}.tooltip.b-tooltip .arrow{margin:0 .25rem}.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.bs-tooltip-left .arrow,.tooltip.b-tooltip.bs-tooltip-right .arrow{margin:.25rem 0}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-top .arrow:before{border-top-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-right .arrow:before{border-right-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-bottom .arrow:before{border-bottom-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-left .arrow:before{border-left-color:#007bff}.tooltip.b-tooltip-primary .tooltip-inner{color:#fff;background-color:#007bff}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-top .arrow:before{border-top-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-right .arrow:before{border-right-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-bottom .arrow:before{border-bottom-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-left .arrow:before{border-left-color:#6c757d}.tooltip.b-tooltip-secondary .tooltip-inner{color:#fff;background-color:#6c757d}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-top .arrow:before{border-top-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-right .arrow:before{border-right-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-bottom .arrow:before{border-bottom-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-left .arrow:before{border-left-color:#28a745}.tooltip.b-tooltip-success .tooltip-inner{color:#fff;background-color:#28a745}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-top .arrow:before{border-top-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-right .arrow:before{border-right-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-bottom .arrow:before{border-bottom-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-left .arrow:before{border-left-color:#17a2b8}.tooltip.b-tooltip-info .tooltip-inner{color:#fff;background-color:#17a2b8}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-top .arrow:before{border-top-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-right .arrow:before{border-right-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-bottom .arrow:before{border-bottom-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-left .arrow:before{border-left-color:#ffc107}.tooltip.b-tooltip-warning .tooltip-inner{color:#212529;background-color:#ffc107}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-top .arrow:before{border-top-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-right .arrow:before{border-right-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-bottom .arrow:before{border-bottom-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-left .arrow:before{border-left-color:#dc3545}.tooltip.b-tooltip-danger .tooltip-inner{color:#fff;background-color:#dc3545}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-top .arrow:before{border-top-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-right .arrow:before{border-right-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-bottom .arrow:before{border-bottom-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-left .arrow:before{border-left-color:#f8f9fa}.tooltip.b-tooltip-light .tooltip-inner{color:#212529;background-color:#f8f9fa}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-top .arrow:before{border-top-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-right .arrow:before{border-right-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-bottom .arrow:before{border-bottom-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-left .arrow:before{border-left-color:#343a40}.tooltip.b-tooltip-dark .tooltip-inner{color:#fff;background-color:#343a40}.b-icon.bi{display:inline-block;overflow:visible;vertical-align:-.15em}.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{transform-origin:center;animation:b-icon-animation-cylon .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{animation:none}}.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{transform-origin:center;animation:b-icon-animation-cylon-vertical .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{animation:none}}.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{transform-origin:center;animation:b-icon-animation-fade .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{animation:none}}.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{transform-origin:center;animation:b-icon-animation-spin 2s linear infinite normal}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{animation:none}}.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{transform-origin:center;animation:b-icon-animation-spin 2s linear infinite reverse}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{animation:none}}.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{transform-origin:center;animation:b-icon-animation-spin 1s steps(8) infinite normal}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{animation:none}}.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{transform-origin:center;animation:b-icon-animation-spin 1s steps(8) infinite reverse}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{animation:none}}.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{transform-origin:center;animation:b-icon-animation-throb .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{animation:none}}@keyframes b-icon-animation-cylon{0%{transform:translateX(-25%)}to{transform:translateX(25%)}}@keyframes b-icon-animation-cylon-vertical{0%{transform:translateY(25%)}to{transform:translateY(-25%)}}@keyframes b-icon-animation-fade{0%{opacity:.1}to{opacity:1}}@keyframes b-icon-animation-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes b-icon-animation-throb{0%{opacity:.5;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.btn .b-icon.bi,.dropdown-item .b-icon.bi,.dropdown-toggle .b-icon.bi,.input-group-text .b-icon.bi,.nav-link .b-icon.bi{font-size:125%;vertical-align:text-bottom}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("0e4797cc", content, true)

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(35);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body,html{margin:0;padding:0;background:#444}html::-webkit-scrollbar{width:0}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}@font-face{font-family:\"CurrentRegular\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"ErmilovBold\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"AktivGroteskCorp\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"UncutSansRegular\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Current-Regular.884ab3f.otf";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Ermilov-bold.245403f.otf";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/AktivGroteskCorp-Medium.e49b187.ttf";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/ua-BRAND-regular.bfcad13.otf";

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lay1_vue_vue_type_style_index_0_id_57d5caba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lay1_vue_vue_type_style_index_0_id_57d5caba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lay1_vue_vue_type_style_index_0_id_57d5caba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lay1_vue_vue_type_style_index_0_id_57d5caba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lay1_vue_vue_type_style_index_0_id_57d5caba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".toTop[data-v-57d5caba]{position:fixed;color:#06ffb4;bottom:10px;right:10px;background:#5c5c5c;border-radius:10px;font-size:20px;font-family:\"CurrentRegular\";padding:10px;z-index:3}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_4de53ae2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_4de53ae2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_4de53ae2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_4de53ae2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_4de53ae2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slide-enter-active[data-v-4de53ae2],.slide-leave-active[data-v-4de53ae2]{transition:all .8s ease}.slide-enter[data-v-4de53ae2],.slide-leave-to[data-v-4de53ae2]{transform:translateY(-100vh)}.minicont[data-v-4de53ae2]{display:flex;flex-direction:column}.minicont span[data-v-4de53ae2]{color:#000;font-size:18px;margin-bottom:10px;transition:text-shadow .5s}.minicont span[data-v-4de53ae2],input[data-v-4de53ae2]{font-family:\"ErmilovBold\";width:100%}input[data-v-4de53ae2]{border:2px solid #000;box-shadow:inset 0 0 1px 1px #01d495;border-radius:5px;font-size:12px;background:#a5a3a3}.menu[data-v-4de53ae2]{position:absolute;left:auto;right:auto;top:100px;width:90%;border:2px solid #06ffb4;border-radius:10px;padding:15px}.header[data-v-4de53ae2],.menu[data-v-4de53ae2]{background:#515151;display:flex}.header[data-v-4de53ae2]{width:100%;justify-content:space-around;align-items:center;box-sizing:border-box;position:fixed;z-index:10;border-bottom-left-radius:25%;border-bottom-right-radius:25%;box-shadow:0 3px 5px #272727}.header[data-v-4de53ae2],.row[data-v-4de53ae2]{height:45px}.mainminibox[data-v-4de53ae2]{display:flex;width:100%;background:red}@keyframes moveGradient-4de53ae2{0%{text-shadow:0 0 3px #2962ff}12.5%{text-shadow:0 0 3px #8b1fff}25%{text-shadow:0 0 3px #ff24cc}37.5%{text-shadow:0 0 3px #ff1418}50%{text-shadow:0 0 3px #ffc21a}62.5%{text-shadow:0 0 3px #90ff1a}75%{text-shadow:0 0 3px #1aff4f}to{text-shadow:0 0 3px #1ffffb}}a[data-v-4de53ae2]{text-decoration:none;color:#c3c3c3;font-size:20px;font-family:\"CurrentRegular\";transition:all .3s}.act[data-v-4de53ae2]{color:#06ffb4}a[data-v-4de53ae2]:hover{color:#fff;transform:scale(1.02);animation:moveGradient-4de53ae2 4s infinite alternate}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "CompsItemWeight2", function() { return CompsItemWeight2; });
__webpack_require__.d(components_namespaceObject, "CompsItemWeight3", function() { return CompsItemWeight3; });
__webpack_require__.d(components_namespaceObject, "CompsItemWeight4", function() { return CompsItemWeight4; });
__webpack_require__.d(components_namespaceObject, "HelloWorld", function() { return HelloWorld; });
__webpack_require__.d(components_namespaceObject, "NuxtLogo", function() { return NuxtLogo; });
__webpack_require__.d(components_namespaceObject, "Tutorial", function() { return Tutorial; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(15);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(16);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(8);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(7);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(9);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _0712242c = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 6).then(__webpack_require__.bind(null, 75)));
const _5b0c839f = () => interopDefault(__webpack_require__.e(/* import() | pages/index/catalog */ 7).then(__webpack_require__.bind(null, 70)));
const _500a33a2 = () => interopDefault(__webpack_require__.e(/* import() | pages/index/weightcoefficients2 */ 8).then(__webpack_require__.bind(null, 71)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/AnotherCalculationOfWeightCoefficients/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _0712242c,
    name: "index",
    children: [{
      path: "catalog",
      component: _5b0c839f,
      name: "index-catalog"
    }, {
      path: "weightcoefficients2",
      component: _500a33a2,
      name: "index-weightcoefficients2"
    }]
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(21)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "06757c26"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "56d377e1"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__(27);

// EXTERNAL MODULE: ./css/global.css
var css_global = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/lay1.vue?vue&type=template&id=57d5caba&scoped=true&
var lay1vue_type_template_id_57d5caba_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('HelloWorld'), _vm._ssrNode(" "), _c('Nuxt', {
    staticStyle: {
      "width": "100%"
    }
  }), _vm._ssrNode(" " + (_vm.viewButton ? "<div onclick=\"window.scroll({left:0, top:0, behavior: 'smooth'})\" class=\"toTop\" data-v-57d5caba>Top</div>" : "<!---->"))], 2);
};
var lay1vue_type_template_id_57d5caba_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/lay1.vue?vue&type=template&id=57d5caba&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/lay1.vue?vue&type=script&lang=js&
/* harmony default export */ var lay1vue_type_script_lang_js_ = ({
  data() {
    return {
      viewButton: false
    };
  },
  methods: {
    scrollHandle: function (e) {
      let top = e.srcElement.scrollingElement.scrollTop;
      if (top > 100) {
        this.viewButton = true;
      } else {
        this.viewButton = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandle);
  }
});
// CONCATENATED MODULE: ./layouts/lay1.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_lay1vue_type_script_lang_js_ = (lay1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/lay1.vue



function lay1_injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var lay1_component = Object(componentNormalizer["a" /* default */])(
  layouts_lay1vue_type_script_lang_js_,
  lay1vue_type_template_id_57d5caba_scoped_true_render,
  lay1vue_type_template_id_57d5caba_scoped_true_staticRenderFns,
  false,
  lay1_injectStyles,
  "57d5caba",
  "5ea2f49c"
  
)

/* harmony default export */ var lay1 = (lay1_component.exports);

/* nuxt-component-imports */
installComponents(lay1_component, {HelloWorld: __webpack_require__(41).default})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&
var defaultvue_type_template_id_0040005c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Nuxt');
};
var defaultvue_type_template_id_0040005c_staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "8064d352"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js










const layouts = {
  "_lay1": sanitizeComponent(lay1),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(page => {
        const p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};
(function updateModules() {
  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(42), 'datas.js');

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData;
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath);

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    });

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = moduleName === 'index';
  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }
  const storeModule = getStoreModule(store_store, namespaces);
  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }
  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}
function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }
  return normalizeModule(moduleData, filePath);
}
function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }
  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}
function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }
  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const CompsItemWeight2 = () => __webpack_require__.e(/* import() | components/comps-item-weight2 */ 1).then(__webpack_require__.bind(null, 72)).then(c => wrapFunctional(c.default || c));
const CompsItemWeight3 = () => __webpack_require__.e(/* import() | components/comps-item-weight3 */ 2).then(__webpack_require__.bind(null, 73)).then(c => wrapFunctional(c.default || c));
const CompsItemWeight4 = () => __webpack_require__.e(/* import() | components/comps-item-weight4 */ 3).then(__webpack_require__.bind(null, 49)).then(c => wrapFunctional(c.default || c));
const HelloWorld = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 41)).then(c => wrapFunctional(c.default || c));
const NuxtLogo = () => __webpack_require__.e(/* import() | components/nuxt-logo */ 4).then(__webpack_require__.bind(null, 59)).then(c => wrapFunctional(c.default || c));
const Tutorial = () => __webpack_require__.e(/* import() | components/tutorial */ 5).then(__webpack_require__.bind(null, 74)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(17);

// CONCATENATED MODULE: ./.nuxt/bootstrap-vue.js


external_vue_default.a.use(external_bootstrap_vue_["BootstrapVue"], {});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(18);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupProgress(axios);
  return axios;
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')
 // Source: .\\bootstrap-vue.js (mode: 'all')
 // Source: .\\axios.js (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext);
  // Add this.$router into store actions/mutations
  store.$router = router;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Подбор пк",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/AnotherCalculationOfWeightCoefficients/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HelloWorld.vue?vue&type=template&id=4de53ae2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "header"
  }, [_c('nuxt-link', {
    attrs: {
      "to": "/catalog",
      "active-class": "act"
    }
  }, [_vm._v("Compilation")]), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": "/weightcoefficients2",
      "active-class": "act"
    }
  }, [_vm._v("Weight")]), _vm._ssrNode(" "), _c('Transition', {
    attrs: {
      "name": "slide"
    }
  }, [_vm.isMenu ? _c('div', {
    staticClass: "menu"
  }, [_c('div', {
    staticClass: "minicont"
  }, [_c('span', [_vm._v("Видеокарта")]), _vm._v(" "), _c('form', [_c('label', [_vm._v("Название")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtVidName,
      expression: "filtVidName"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.filtVidName
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.filtVidName = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v("Память")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtVidMemory,
      expression: "filtVidMemory"
    }],
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": _vm.filtVidMemory
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.filtVidMemory = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "submit",
      "value": "Применить"
    },
    on: {
      "click": _vm.submit
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "minicont"
  }, [_c('span', [_vm._v("Процессор")]), _vm._v(" "), _c('form', [_c('label', [_vm._v("Название")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filtProcName,
      expression: "filtProcName"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.filtProcName
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.filtProcName = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "submit",
      "value": "Применить"
    },
    on: {
      "click": _vm.submit
    }
  })])]) : _vm._e()])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HelloWorld.vue?vue&type=template&id=4de53ae2&scoped=true&

// EXTERNAL MODULE: external "@iconify/vue2"
var vue2_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HelloWorld.vue?vue&type=script&lang=js&

/* harmony default export */ var HelloWorldvue_type_script_lang_js_ = ({
  components: {
    Icon: vue2_["Icon"]
  },
  data() {
    return {
      isMenu: false,
      filtVidName: '',
      filtVidMemory: '',
      filtProcName: ''
    };
  },
  methods: {
    submit() {
      console.log(this.$store.state.datas.filtVidName);
      this.$store.commit('datas/uploadfiltVidName', this.filtVidName);
      this.$store.commit('datas/uploadfiltVidMemory', this.filtVidMemory);
      this.$store.commit('datas/uploadfiltProcName', this.filtProcName);
    }
  }
});
// CONCATENATED MODULE: ./components/HelloWorld.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HelloWorldvue_type_script_lang_js_ = (HelloWorldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HelloWorld.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HelloWorldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4de53ae2",
  "55506d1a"
  
)

/* harmony default export */ var HelloWorld = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "state", function() { return /* binding */ state; });
__webpack_require__.d(__webpack_exports__, "mutations", function() { return /* binding */ mutations; });
__webpack_require__.d(__webpack_exports__, "getters", function() { return /* binding */ getters; });
__webpack_require__.d(__webpack_exports__, "actions", function() { return /* binding */ actions; });

// CONCATENATED MODULE: ./mixins.js/Mixin.js
const mix = {
  data: function () {
    return {
      allItems: [
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 2060SUPER, PA-RTX2060SUPER DUAL 8G no LED', 'price': '32190', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-pa-rtx2060super-dual-8g-no-led-nv-rtx2060super-1489448/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 2060SUPER, 1470 МГц (1650 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/hihHK5xjxE5pTy0m84vA6ahy3zG2c7w5ye_3NKGmHQ0/fit/400/400/ce/false/plain/items/1489448_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 3060, PA-RTX3060 DUAL 12G', 'price': '38990', 'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-rtx-3060-pa-rtx3060-dual-12g-12gb-gddr-1469005/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3060, 1320 МГц (1777 МГц, в режиме Boost)', 'par2': '12', 'par8': ' 15000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/wzu5XdoWgc1rrkXlo48vzMMRrYonw6BQ295mTUq8eI0/fit/400/400/ce/false/plain/items/1469005_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 3050, PA-RTX3050 DUAL', 'price': '25990', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-pa-rtx3050-dual-nv-rtx3050-8192mb-128-gddr6-155-1658278/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3050, 1552 МГц (1777 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/Bte4bfc3wO7Wrlvihy9b7qhHzhP-0vkhXbRrYj94wsE/fit/400/400/ce/false/plain/items/1658278_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 3060Ti, PA-RTX3060Ti DUAL 8G V1 LHR', 'price': '39990', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3060ti-dual-8g-v1-lhr-nv-rtx3060ti-81-1542015/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3060Ti, 1410 МГц (1665 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/bvh1Ucq4--ayXNPVeOymcoQD6t9kWA1hCPielBdcxDw/fit/400/400/ce/false/plain/items/1542015_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GTX 1660TI, PA-GTX1660Ti DUAL 6G', 'price': '25590', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-pa-gtx1660ti-dual-6g-nv-gtx1660ti-6144mb-192-gd-1537454/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1660TI, 1500 МГц (1770 МГц, в режиме Boost)', 'par2': '6', 'par8': ' 12000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/pO-q-lpND_cj1tZkQAjV8uVDcHfBNf4Qx_YyHT1dZS8/fit/400/400/ce/false/plain/items/1537454_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 3060Ti, PA-RTX3060Ti DUAL OC 8G V1 LHR', 'price': '40990', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3060ti-dual-oc-8g-v1-lhr-nv-rtx3060ti-1542005/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3060Ti, 1410 МГц (1695 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/LwhkwqNdkRlFMfrTxR0-7DvRIer8c48G0cOuK7TgCDk/fit/400/400/ce/false/plain/items/1542005_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GTX 1660SUPER, PA-GTX1660SUPER GP OC 6G', 'price': '23990', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-pa-gtx1660super-gp-oc-6g-nv-gtx1660super-6144mb-1496878/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1660SUPER, 1530 МГц (1830 МГц, в режиме Boost)', 'par2': '6', 'par8': ' 14000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/60MDBpufESIskQLLa9ou62yvGcGpkaLR2nD63rkshu4/fit/400/400/ce/false/plain/items/1496878_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GTX 1660SUPER, PA-GTX1660SUPER STORMX 6G', 'price': '24990', 'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1660super-pa-gtx1660super-stormx-6-1459415/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1660SUPER, 1530 МГц (1785 МГц, в режиме Boost)', 'par2': '6', 'par8': ' 14000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/J59REDfbmVWGDw2LHc0zHkDWH6W2iKnUY4i_QjOFhiE/fit/400/400/ce/false/plain/items/1459415_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'MSI NVIDIA GeForce RTX 3050, RTX 3050 VENTUS 2X 8G OC', 'price': '29590', 'link': 'https://www.citilink.ru/product/videokarta-msi-pci-e-4-0-rtx-3050-ventus-2x-8g-oc-nv-rtx3050-8192mb-64-1680442/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3050, 1807 МГц', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/6osmRkOXqdMAWE80Y5AnXxuVgb0NcKg5JvYf2RdjTl8/fit/400/400/ce/false/plain/items/1680442_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GTX 1650, PA-GTX1650 GP OC 4G D6', 'price': '15590', 'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1650-pa-gtx1650-gp-oc-4g-d6-4gb-gd-1468993/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1650, 1410 МГц (1725 МГц, в режиме Boost)', 'par2': '4', 'par8': ' 12000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/7dOxmaqoEsx13NkEXHNR0XvDJRg_w1EFbwchKSgJZdo/fit/400/400/ce/false/plain/items/1468993_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GTX 1050TI, PA-GTX1050Ti StormX 4G', 'price': '13590', 'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1050ti-pa-gtx1050ti-stormx-4g-4gb-401997/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1050TI, 1290 МГц (1392 МГц, в режиме Boost)', 'par2': '4', 'par8': ' 7000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/AseYozsvGrDaDzUUqe0XcD1u1plYdCAGTH8bmBbU268/fit/400/400/ce/false/plain/items/401997_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'MSI NVIDIA GeForce RTX 2060SUPER, RTX 2060 SUPER VENTUS GP OC', 'price': '36990', 'link': 'https://www.citilink.ru/product/videokarta-msi-nvidia-geforce-rtx-2060super-rtx-2060-super-ventus-gp-o-1185986/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 2060SUPER, (1665 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/Xigv9VfmUphiS4zum1B8rCMbNxeAzPDPkHZpZ_GLeSI/fit/400/400/ce/false/plain/items/1185986_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GTX 1650, PA-GTX1650 GP 4G D6', 'price': '15990', 'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1650-pa-gtx1650-gp-4g-d6-4gb-gddr6-1472471/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1650, 1410 МГц (1590 МГц, в режиме Boost)', 'par2': '4', 'par8': ' 12000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/cpD51fGmKUDat3xnx0dSMRIhJOtWQP2Mhv7gqgKPBes/fit/400/400/ce/false/plain/items/1472471_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 3060, RTX3060 DUAL OC 12G', 'price': '37990', 'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-rtx-3060-rtx3060-dual-oc-12g-12gb-gddr-1469028/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3060, 1320 МГц (1837 МГц, в режиме Boost)', 'par2': '12', 'par8': ' 15000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/97a6p0qXohOn-1zu-xAJ45CJ2-ZedVFGkX0vF6Nxj4w/fit/400/400/ce/false/plain/items/1469028_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'MSI NVIDIA GeForce RTX 3060, RTX 3060 GAMING X 12G', 'price': '39990', 'link': 'https://www.citilink.ru/product/videokarta-msi-nvidia-geforce-rtx-3060-rtx-3060-gaming-x-12g-12gb-gddr-1476984/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3060, 1837 МГц', 'par2': '12', 'par8': ' 15000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/UHM53dPy9BP7U46RbBQJ7gKn3Ku6opM9VowVSrr02BE/fit/400/400/ce/false/plain/items/1476984_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GTX 1660SUPER, PA-GTX1660SUPER GP 6G', 'price': '24990', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-pa-gtx1660super-gp-6g-nv-gtx1660super-6144mb-19-1496891/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1660SUPER, 1530 МГц (1785 МГц, в режиме Boost)', 'par2': '6', 'par8': ' 14000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/xH3nbqRRFFt-1S_ZkiNRI7_FC0GxBTFozfF-ZpJprSA/fit/400/400/ce/false/plain/items/1496891_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce RTX 3060, GV-N3060VISION OC-12GD 2.0 LHR', 'price': '39990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n3060vision-oc-12gd-2-0-nv-rtx3060-12-1535676/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3060, 1837 МГц', 'par2': '12', 'par8': ' 15000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/B7w2644-FnYfDZmmvL6Fyr-rUlZfctXQpXZ_xZUgYSs/fit/400/400/ce/false/plain/items/1535676_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GTX 1650, PA-GTX1650 GP 4G D6 BULK', 'price': '16990', 'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1650-pa-gtx1650-gp-4g-d6-bulk-4gb-1459400/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1650, 1410 МГц (1590 МГц, в режиме Boost)', 'par2': '4', 'par8': ' 12000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/koG2PP0tU_sLCYHEKJ2o9qzDRmEjbswsLlepE0FKqT4/fit/400/400/ce/false/plain/items/1459400_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'MSI NVIDIA GeForce 210, N210-1GD3/LP', 'price': '3490', 'link': 'https://www.citilink.ru/product/videokarta-msi-pci-e-n210-1gd3-lp-nv-gf210-1024mb-64-ddr3-460-800-dvix-1562985/', 'cpu': { 'par1': 'NVIDIA GeForce 210, 460 МГц', 'par2': '1', 'par8': ' 800', 'par3': 'PCI-E' }, 'image': 'https://cdn.citilink.ru/4EMd5wLFLUzKlggS_85vP0103xYe-eqsuxngA5PvZFk/fit/400/400/ce/false/plain/items/1562985_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce RTX 3050, GV-N3050GAMING OC-8GD', 'price': '29490', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n3050gaming-oc-8gd-nv-rtx3050-8192mb-1670348/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3050, 1822 МГц', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/sUgnoZ2kRb6KphDOytEhchx6CMZb3lXcsyPryWhlIZ0/fit/400/400/ce/false/plain/items/1670348_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce GTX 1660TI, GV-N166TOC-6GD', 'price': '30990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-nvidia-geforce-gtx-1660ti-gv-n166toc-6gd-6gb-gddr6-1124050/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1660TI, 1536 МГц', 'par2': '6', 'par8': ' 12000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/34tjfJ6vOeefbvyUxvdyp2jpvo2qZPLcSIAFAM2r_kA/fit/400/400/ce/false/plain/items/1124050_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 3070TI, PA-RTX3070TI GAMINGPRO 8G', 'price': '57990', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3070ti-gamingpro-8g-nv-rtx3070ti-8192-1528277/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3070TI, 1575 МГц (1770 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 19000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/j0zSH2lfweXPz9suRO0N9HudHDzY8p668_fK8M7tUuQ/fit/400/400/ce/false/plain/items/1528277_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce RTX 3050, GV-N3050EAGLE OC-8GD', 'price': '26990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n3050eagle-oc-8gd-nv-rtx3050-8192mb-1-1671917/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3050, 1792 МГц', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/xb8vnDJm1FQnUa-GxQOfnBZVb0E5uddZBSyv00SMKjE/fit/400/400/ce/false/plain/items/1671917_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce RTX 2060, GV-N2060D6-6GD', 'price': '27990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-gv-n2060d6-6gd-nv-rtx2060-6144mb-192b-gddr6-1382637/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 2060, 1680 МГц', 'par2': '6', 'par8': ' 14000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/ckcAECAgxEmCXNSIgI0e9YEpVRirMkDEs7MkUdKKI1U/fit/400/400/ce/false/plain/items/1382637_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 3070, PA-RTX3070 GAMINGPRO 8G V1 LHR', 'price': '47590', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3070-gamingpro-8g-v1-nv-rtx3070-8192m-1535821/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3070, 1500 МГц (1725 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/CMikfzTryUR1qWVbbHNM7KC39YwC7h1pdimtgIVGu-4/fit/400/400/ce/false/plain/items/1535821_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce RTX 3070TI, GV-N307TGAMING OC-8GD', 'price': '58990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n307tgaming-oc-8gd-nv-rtx3070ti-8192m-1535681/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3070TI, 1830 МГц', 'par2': '8', 'par8': ' 19000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/tyr7oauv1w6lQqTvFXYAl0bL1UNfkKPNWiPL1bJQMQI/fit/400/400/ce/false/plain/items/1535681_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 3070, PA-RTX3070 JETSTREAM 8G V1 LHR', 'price': '46990', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3070-jetstream-8g-v1-lhr-nv-rtx3070-8-1542016/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3070, 1500 МГц (1725 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/UaH3kf6B0lBXjTIvyql9dpvfd9V1WmbgVt5x7kjlI_g/fit/400/400/ce/false/plain/items/1542016_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce RTX 3060Ti, GV-N306TGAMING OC-8GD 2.0 LHR', 'price': '43990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n306tgaming-oc-8gd-2-0-lhr-nv-rtx3060-1558222/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3060Ti, 1740 МГц', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/Urlg7tjN11wAmFRDiyg0DQPQr8nIzqsww-QPaRrhnQQ/fit/400/400/ce/false/plain/items/1558222_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE AMD Radeon RX 6500XT, GV-R65XTGAMING OC-4GD', 'price': '18990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-gv-r65xtgaming-oc-4gd-amd-rx6500xt-4096mb-64-1654728/', 'cpu': { 'par1': 'AMD Radeon RX 6500XT, 2685 МГц (2825 МГц, в режиме Boost)', 'par2': '4', 'par8': ' 18000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/zZPGor7f0IC58cFNF1HIEaKRSvKmib7kBt1dL9uRGAE/fit/400/400/ce/false/plain/items/1654728_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GTX 1660SUPER, PA-GTX1660SUPER STORMX 6G', 'price': '22990', 'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1660super-pa-gtx1660super-stormx-6-1185833/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1660SUPER, 1530 МГц (1785 МГц, в режиме Boost)', 'par2': '6', 'par8': ' 14000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/4K8kDgnvOmaDA5noYR49f44L8rqnZn60wXs59WUZvsk/fit/400/400/ce/false/plain/items/1185833_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE AMD Radeon RX 6650XT, GV-R665XTGAMING OC-8GD', 'price': '35990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-gv-r665xtgaming-oc-8gd-amd-radeon-rx-6650xt-1738844/', 'cpu': { 'par1': 'AMD Radeon RX 6650XT, 2523 МГц (2694 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 17500', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/7o7g9b68iCIelFqdOlphz9HNFSdEhHtKJ9t6_Vi3Z2Q/fit/400/400/ce/false/plain/items/1738844_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GT 710, PA-GT710-2GD3H', 'price': '3490', 'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gt-710-pa-gt710-2gd3h-2gb-ddr3-ret-nea-1358776/', 'cpu': { 'par1': 'NVIDIA GeForce GT 710, 954 МГц', 'par2': '2', 'par8': ' 1600', 'par3': 'PCI-E 2.0' }, 'image': 'https://cdn.citilink.ru/I7d9ck-DsC1FNx5AYTvHgYpR9fNr0oKK5fkoFgmyJBI/fit/400/400/ce/false/plain/items/1358776_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'MSI NVIDIA GeForce RTX 3060, RTX 3060 VENTUS 2X 12G OC', 'price': '39990', 'link': 'https://www.citilink.ru/product/videokarta-msi-nvidia-geforce-rtx-3060-rtx-3060-ventus-2x-12g-oc-12gb-1475891/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3060, 1680 МГц (1807 МГц, в режиме Boost)', 'par2': '12', 'par8': ' 15000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/AgDImMUP9KvOURgAyJQghCcTGolrr-D4c5FopvxA5CM/fit/400/400/ce/false/plain/items/1475891_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'MSI NVIDIA GeForce GTX 1660SUPER, GTX 1660 SUPER VENTUS XS OC', 'price': '26990', 'link': 'https://www.citilink.ru/product/videokarta-msi-nvidia-geforce-gtx-1660super-gtx-1660-super-ventus-xs-o-1188206/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1660SUPER, 1530 МГц (1815 МГц, в режиме Boost)', 'par2': '6', 'par8': ' 14000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/NNa12GgtVSD72fh6t5hMbgzLHTbDRPcZUvcgfZuY8TM/fit/400/400/ce/false/plain/items/1188206_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce RTX 3080, GV-N3080GAMING OC-10GD 2.0 LHR', 'price': '69990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n3080gaming-oc-10gd-2-0-lhr-nv-rtx308-1548845/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3080, 1800 МГц', 'par2': '10', 'par8': ' 19000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/D6U3F77_Bu15nLddpOB9Rt071ye5hvAFl4enYSa3TjU/fit/400/400/ce/false/plain/items/1548845_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 3070, PA-RTX3070 GAMINGPRO OC 8G V1 LHR', 'price': '54990', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3070-gamingpro-oc-8g-v1-nv-rtx3070-81-1535818/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3070, 1500 МГц (1770 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/98L4CR2BmeM4neFkTq9ApTyGE2WdWmjMIdUJWnm6Yzs/fit/400/400/ce/false/plain/items/1535818_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce RTX 3060Ti, GV-N306TVISION OC-8GD 2.0 LHR', 'price': '47990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n306tvision-oc-8gd-2-0-lhr-nv-rtx3060-1543697/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3060Ti, 1755 МГц', 'par2': '8', 'par8': ' 14000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/H5eoXdCv5sSJig-K_XNLRN7msZLgd0GmApGive_laxc/fit/400/400/ce/false/plain/items/1543697_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE AMD Radeon RX 6650XT, GV-R665XTEAGLE-8GD', 'price': '33990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-gv-r665xteagle-8gd-amd-radeon-rx-6650xt-8192-1738847/', 'cpu': { 'par1': 'AMD Radeon RX 6650XT, 2410 МГц (2635 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 17500', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/i735mgG0UdIJdrSQcZ59-eoFlFPuh3hVk4S8iE_KWSQ/fit/400/400/ce/false/plain/items/1738847_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce RTX 3080TI, GV-N308TGAMING OC-12GD', 'price': '104990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n308tgaming-oc-12gd-nv-rtx3080ti-1228-1517128/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3080TI, 1710 МГц', 'par2': '12', 'par8': ' 19000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/tu6xDKaeN43y_l7N00bXI7t845Zq5tnRWbxxnhzHcEY/fit/400/400/ce/false/plain/items/1517128_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce GTX 1650, GV-N1650OC-4GD', 'price': '16690', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-nvidia-geforce-gtx-1650-gv-n1650oc-4gd-4gb-gddr5-o-1138954/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1650, 1665 МГц (1710 МГц, в режиме Boost)', 'par2': '4', 'par8': ' 8002', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/DUo5YB99cv-AlhgkY_Klb6PHZk6824doZsAh7DrDGWg/fit/400/400/ce/false/plain/items/1138954_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 3070TI, PA-RTX3070TI GAMEROCK OC 8G', 'price': '58990', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3070ti-gamerock-oc-8g-nv-rtx3070ti-81-1528272/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3070TI, 1575 МГц (1845 МГц, в режиме Boost)', 'par2': '8', 'par8': ' 19000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/X8ujBH-r1C0ATSZ_urZmycIqd9HDb3qqP1yrX0Utpm8/fit/400/400/ce/false/plain/items/1528272_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce GT 1030, GV-N1030D5-2GL', 'price': '7790', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-nvidia-geforce-gt-1030-gv-n1030d5-2gl-2gb-gddr5-re-479389/', 'cpu': { 'par1': 'NVIDIA GeForce GT 1030, 1227 МГц (1506 МГц, в режиме Boost)', 'par2': '2', 'par8': ' 6008', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/nfAVGr2t1GkJ1WIBECFq22PxwydTU_hxrGw1AZX8VYU/fit/400/400/ce/false/plain/items/479389_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GT 1030, PA-GT1030 2GD4', 'price': '5990', 'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gt-1030-pa-gt1030-2gd4-2gb-ddr4-low-pr-1054296/', 'cpu': { 'par1': 'NVIDIA GeForce GT 1030, 1151 МГц (1379 МГц, в режиме Boost)', 'par2': '2', 'par8': ' 2100', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/mugb92S8ewIyLhspunyFqrkfhb6tl8gTQ_mxBwh_6RY/fit/400/400/ce/false/plain/items/1054296_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce RTX 3080, PA-RTX3080 GAMINGPRO 10G V1 LHR', 'price': '67990', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3080-gamingpro-10g-v1-nv-rtx3080-1024-1535781/', 'cpu': { 'par1': 'NVIDIA GeForce RTX 3080, 1440 МГц (1710 МГц, в режиме Boost)', 'par2': '10', 'par8': ' 19000', 'par3': 'PCI-E 4.0' }, 'image': 'https://cdn.citilink.ru/SbdZkcL-NjRZI6ICqqQKSC8XgvpOHq0mipElfPXu1qM/fit/400/400/ce/false/plain/items/1535781_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'MSI NVIDIA GeForce GTX 1650, GTX 1650 D6 VENTUS XS OC', 'price': '16590', 'link': 'https://www.citilink.ru/product/videokarta-msi-pci-e-gtx-1650-d6-ventus-xs-oc-nv-gtx1650-4096mb-128b-g-1366048/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1650, 1485 МГц (1620 МГц, в режиме Boost)', 'par2': '4', 'par8': ' 12000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/A6x4_v5T5Gf_yDvRUwcE5S1_ar4lzqZ18HrbMug52jw/fit/400/400/ce/false/plain/items/1366048_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce GT 1030, GV-N1030OC-2GI', 'price': '7790', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-nvidia-geforce-gt-1030-gv-n1030oc-2gi-2gb-gddr5-oc-479391/', 'cpu': { 'par1': 'NVIDIA GeForce GT 1030, 1265 МГц (1544 МГц, в режиме Boost)', 'par2': '2', 'par8': ' 6008', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/hPM8TEMTeshJuXOcT51GsrKtzBdBXO8oRR1fnqLBBVs/fit/400/400/ce/false/plain/items/479391_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'Palit NVIDIA GeForce GTX 1630, PA-GTX1630 DUAL 4G', 'price': '11990', 'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-pa-gtx1630-dual-4g-nv-geforce-gtx-1630-4096mb-6-1776565/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1630, 1740 МГц (1785 МГц, в режиме Boost)', 'par2': '4', 'par8': ' 12000', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/RkRoUm926rdIU4aXOld9jlA81D_n9659eVA5vRbzWdg/fit/400/400/ce/false/plain/items/1776565_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Видеокарта', 'name': 'GIGABYTE NVIDIA GeForce GTX 1660, GV-N1660OC-6GD', 'price': '22990', 'link': 'https://www.citilink.ru/product/videokarta-gigabyte-nvidia-geforce-gtx-1660-gv-n1660oc-6gd-6gb-gddr5-o-1131548/', 'cpu': { 'par1': 'NVIDIA GeForce GTX 1660, 1785 МГц (1830 МГц, в режиме Boost)', 'par2': '6', 'par8': ' 8002', 'par3': 'PCI-E 3.0' }, 'image': 'https://cdn.citilink.ru/Pbwd6Tyu-Ax6vIozDF2PnNOOqAzO-2IHEpnzqv24vjM/fit/400/400/ce/false/plain/items/1131548_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 5 3600, OEM', 'price': '10890', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-5-3600-socketam4-oem-100-000000031-1151445/', 'cpu': { 'par1': 'Matisse', 'par2': '3.6 ', 'par3': 'SocketAM4', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/f4E91-HRg_XHGbd4Ovc8WhK9JfVGKK9ZSaDsRvzuI5Y/fit/400/400/ce/false/plain/items/1151445_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 11400F, OEM', 'price': '11690', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-11400f-soc-1200-2-6ghz-oem-1722999/', 'cpu': { 'par1': 'Rocket Lake', 'par2': '2.6 ', 'par3': 'LGA 1200', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/ZBg-u8ysLY1aB1yWMN_WxffuKsAF9nRVSAqbxZvkrq0/fit/400/400/ce/false/plain/items/1722999_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 10400F, BOX', 'price': '11990', 'link': 'https://www.citilink.ru/product/processor-intel-original-core-i5-10400f-soc-1200-bx8070110400f-s-rh3d-1369041/', 'cpu': { 'par1': 'Comet Lake', 'par2': '2.9 ', 'par3': 'LGA 1200', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/zFoXkh44eQWR-1rqnBmcT82ACk2o7AnG9dnQuV-j9Eo/fit/400/400/ce/false/plain/items/1369041_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 5 5600G, OEM', 'price': '13790', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-5-5600g-am4-100-000000252-3-9ghz-amd-radeon-oem-1628392/', 'cpu': { 'par1': 'Cezanne', 'par2': '3.9 ', 'par3': 'SocketAM4', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/Pp2cGjSHWhXxS03zVL2wBXc4rPvVUVVDRKZEBpWIEeA/fit/400/400/ce/false/plain/items/1628392_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 12400F, OEM', 'price': '12390', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-12400f-soc-1700-2-5ghz-oem-1782240/', 'cpu': { 'par1': 'Alder Lake', 'par2': '2.5 ', 'par3': 'LGA 1700', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/ErYw1OblQxTEH3C3-7JXn1WsX403h8IW6s3cv2kvlaU/fit/400/400/ce/false/plain/items/1782240_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i3 10105, OEM', 'price': '7790', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-10105-soc-1200-3-7ghz-iuhdg630-oem-1722987/', 'cpu': { 'par1': 'Comet Lake Refresh', 'par2': '3.7 ', 'par3': 'LGA 1200', 'par4': '8', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/C9xbXAMOWAe4gAVAEIbV1xHbBTfzrub1kQg1dNsv6wU/fit/400/400/ce/false/plain/items/1722987_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i3 10100F, OEM', 'price': '5590', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-10100f-soc-1200-3-6ghz-oem-1723000/', 'cpu': { 'par1': 'Comet Lake', 'par2': '3.6 ', 'par3': 'LGA 1200', 'par4': '8', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/tln-J_HEkcbUjPehzzpIYxz4N0-le7VJtbWcQkMOBy0/fit/400/400/ce/false/plain/items/1723000_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 7 5800X, OEM', 'price': '23990', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-7-5800x-socketam4-oem-100-100000063-1431182/', 'cpu': { 'par1': 'Vermeer', 'par2': '3.8 ', 'par3': 'SocketAM4', 'par4': '16', 'par5': '105Вт' }, 'image': 'https://cdn.citilink.ru/kWPP1Xyt4vLkQRT5mK0RzwxClMx9eVva4E890OawTOI/fit/400/400/ce/false/plain/items/1431182_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i3 10105F, OEM', 'price': '6290', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-10105f-soc-1200-3-7ghz-oem-1795649/', 'cpu': { 'par1': 'Comet Lake Refresh', 'par2': '3.7 ', 'par3': 'LGA 1200', 'par4': '8', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/dePbc9qfcQIya110ZrrFUgBIJ22aSzod4Fu0UHVi-Hg/fit/400/400/ce/false/plain/items/1795649_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD A8 9600, OEM', 'price': '4090', 'link': 'https://www.citilink.ru/product/processor-amd-a8-9600-socketam4-oem-ad9600agm44ab-499917/', 'cpu': { 'par1': 'Bristol Ridge', 'par2': '3.1 ', 'par3': 'SocketAM4', 'par4': '4', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/0tnObaKUA56F4lElRuZjDqdyeQ0uThwXK6FnRpaAppM/fit/400/400/ce/false/plain/items/499917_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 12600K, OEM', 'price': '23290', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-12600k-soc-1700-3-7ghz-iuhdg770-oem-1723032/', 'cpu': { 'par1': 'Alder Lake', 'par2': '3.7 ', 'par3': 'LGA 1700', 'par4': '16', 'par5': '125Вт' }, 'image': 'https://cdn.citilink.ru/U-Oi2u3t1W9ELf5_i_oql3KsJP5TITyiXAYWNKD7PCk/fit/400/400/ce/false/plain/items/1723032_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i3 12100F, OEM', 'price': '7190', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-12100f-soc-1700-3-3ghz-oem-1779456/', 'cpu': { 'par1': 'Alder Lake', 'par2': '3.3 ', 'par3': 'LGA 1700', 'par4': '8', 'par5': '58Вт' }, 'image': 'https://cdn.citilink.ru/o3bDjum6bHmklhv-EAL5jcNitzG5rSl4hahbnUTZi3o/fit/400/400/ce/false/plain/items/1779456_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 9 5900X, OEM', 'price': '31290', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-9-5900x-socketam4-oem-100-100000061-1431169/', 'cpu': { 'par1': 'Vermeer', 'par2': '3.7 ', 'par3': 'SocketAM4', 'par4': '24', 'par5': '105Вт' }, 'image': 'https://cdn.citilink.ru/yK41nvXPJQ1I3bi4XkhJC-IodvNXtduMic0wTn3XDR0/fit/400/400/ce/false/plain/items/1431169_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 5 5600X, BOX', 'price': '15990', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-5-5600x-socketam4-box-100-100000065box-1431184/', 'cpu': { 'par1': 'Vermeer', 'par2': '3.7 ', 'par3': 'SocketAM4', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/d0QDW9A5JVI9Onh1jB0FMJKXqqBf20Sx0fyTDGNY2h8/fit/400/400/ce/false/plain/items/1431184_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Athlon 3000G, OEM', 'price': '4490', 'link': 'https://www.citilink.ru/product/processor-amd-athlon-3000g-am4-yd3000c6m2ofb-3-5ghz-100mhz-vega-3-oem-1545197/', 'cpu': { 'par1': 'Raven Ridge', 'par2': '3.5 ', 'par3': 'SocketAM4', 'par4': '4', 'par5': '35Вт' }, 'image': 'https://cdn.citilink.ru/_APJ-aEANtQ73FgULdZ_rb5QrP60dUO2BCkYT7Txq84/fit/400/400/ce/false/plain/items/1545197_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 11400F, BOX', 'price': '12590', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-11400f-soc-1200-2-6ghz-box-1828733/', 'cpu': { 'par1': 'Rocket Lake', 'par2': '2.6 ', 'par3': 'LGA 1200', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/UeuFvGVCIglpXaX6wKMkU-WoUxdq0n32b-IN1N3YtlE/fit/400/400/ce/false/plain/items/1828733_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i3 10100, OEM', 'price': '7690', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-10100-soc-1200-3-6ghz-iuhdg630-oem-1722986/', 'cpu': { 'par1': 'Comet Lake', 'par2': '3.6 ', 'par3': 'LGA 1200', 'par4': '8', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/b0eZAVbtmjmkXWsQN6YofHlhWP1ewA5AmEL1KQHI27I/fit/400/400/ce/false/plain/items/1722986_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 11400, OEM', 'price': '13990', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-11400-soc-1200-2-6ghz-iuhdg730-oem-1723003/', 'cpu': { 'par1': 'Rocket Lake', 'par2': '2.6 ', 'par3': 'LGA 1200', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/clCroWp25uxSTxNQ2i5lqN0uMSuFCJArRqsuz0StIt0/fit/400/400/ce/false/plain/items/1723003_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Athlon 200GE, OEM', 'price': '4690', 'link': 'https://www.citilink.ru/product/processor-amd-athlon-200ge-socketam4-tray-yd200gc6m2ofb-1089583/', 'cpu': { 'par1': 'Raven Ridge', 'par2': '3.2 ', 'par3': 'SocketAM4', 'par4': '4', 'par5': 'OEM' }, 'image': 'https://cdn.citilink.ru/Lc8Aj5Pok8B8G_VkxC0-xJMVqewlQUplh26eg66qYxo/fit/400/400/ce/false/plain/items/1089583_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Pentium Gold G6405, OEM', 'price': '4490', 'link': 'https://www.citilink.ru/product/processor-intel-s-pentium-gold-g6405-soc-1200-4-1ghz-iuhdg610-oem-1722989/', 'cpu': { 'par1': 'Comet Lake Refresh', 'par2': '4.1 ', 'par3': 'LGA 1200', 'par4': '4', 'par5': '58Вт' }, 'image': 'https://cdn.citilink.ru/LLXYCSumXoIxIREQmEL71368u6m4G7e9muPWBJY4ZCg/fit/400/400/ce/false/plain/items/1722989_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 9 5900X, BOX (без кулера)', 'price': '32990', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-9-5900x-socketam4-box-bez-kulera-100-100000061wof-1431164/', 'cpu': { 'par1': 'Vermeer', 'par2': '3.7 ', 'par3': 'SocketAM4', 'par4': '24', 'par5': '105Вт' }, 'image': 'https://cdn.citilink.ru/hZspoId9pfORqpqAktbV1pJi84LVy5EJV2V2Q5jdoUc/fit/400/400/ce/false/plain/items/1431164_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i3 12100, OEM', 'price': '8590', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-12100-soc-1700-3-3ghz-iuhdg730-oem-1779455/', 'cpu': { 'par1': 'Alder Lake', 'par2': '3.3 ', 'par3': 'LGA 1700', 'par4': '8', 'par5': '60Вт' }, 'image': 'https://cdn.citilink.ru/DMLbiuAgKlzU4scSgHNrgr5_p68jKfwS4O3TyZXpeRQ/fit/400/400/ce/false/plain/items/1779455_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 10400, OEM', 'price': '12790', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-10400-soc-1200-2-9ghz-iuhdg630-oem-1722993/', 'cpu': { 'par1': 'Comet Lake', 'par2': '2.9 ', 'par3': 'LGA 1200', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/hZsz2H6y8y92-LIXZ3H3p8yRfakY28IYSZe2OPcgYAI/fit/400/400/ce/false/plain/items/1722993_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD A10 8770 PRO, OEM', 'price': '4890', 'link': 'https://www.citilink.ru/product/processor-amd-a10-8770-am4-ad877bagm44ab-3-5ghz-100mhz-r7-oem-1522047/', 'cpu': { 'par1': 'Carrizo', 'par2': '3.5 ', 'par3': 'SocketAM4', 'par4': '4', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/-E_kCEVYw-7cZP5NWQLFvIJtWUGvXz9uH4hHMeTrnCI/fit/400/400/ce/false/plain/items/1522047_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD A6 9500, OEM', 'price': '2590', 'link': 'https://www.citilink.ru/product/processor-amd-a6-9500-socketam4-oem-ad9500agm23ab-499895/', 'cpu': { 'par1': 'Excavator', 'par2': '3.5 ', 'par3': 'SocketAM4', 'par4': '2', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/d0LliY-gugUJ7QEj1KQkaKS1ofYSQbJmvpeFX0vztfc/fit/400/400/ce/false/plain/items/499895_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 10400F, BOX', 'price': '11990', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-10400f-soc-1200-bx8070110400f-s-rh3d-2-9ghz-1724062/', 'cpu': { 'par1': 'Comet Lake', 'par2': '2.9 ', 'par3': 'LGA 1200', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/-x514BZtpk9xtZB5ect5NDm4Bt8HCWvOYsuOSIF2Wb0/fit/400/400/ce/false/plain/items/1724062_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Pentium Gold G6400, OEM', 'price': '4490', 'link': 'https://www.citilink.ru/product/processor-intel-s-pentium-gold-g6400-soc-1200-4ghz-iuhdg610-oem-1722991/', 'cpu': { 'par1': 'Comet Lake', 'par2': '4 ', 'par3': 'LGA 1200', 'par4': '4', 'par5': '58Вт' }, 'image': 'https://cdn.citilink.ru/jZDNliPffm1-tMK-jJ7gc7TmnqZpOBPzVNYjPWkmnJQ/fit/400/400/ce/false/plain/items/1722991_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 11500, OEM', 'price': '15590', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-11500-soc-1200-2-7ghz-iuhdg750-oem-1723038/', 'cpu': { 'par1': 'Rocket Lake', 'par2': '2.7 ', 'par3': 'LGA 1200', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/wnCy9q_eQcp1gUO4ImI6iEKxpGBc78f40plcOmzQyYI/fit/400/400/ce/false/plain/items/1723038_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 7 5700G, BOX', 'price': '21390', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-7-5700g-am4-100-100000263box-3-8ghz-amd-radeon-box-1579727/', 'cpu': { 'par1': 'Cezanne', 'par2': '3.8 ', 'par3': 'SocketAM4', 'par4': '16', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/OyR_H_U66Du9Jm6cz5HstCDzIiXqoAlVkCtO1Gk7xdo/fit/400/400/ce/false/plain/items/1579727_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 7 5800X, OEM', 'price': '20690', 'link': 'https://www.citilink.ru/product/processor-amd-s-ryzen-7-5800x-am4-100-000000063-3-8ghz-oem-1773839/', 'cpu': { 'par1': 'Vermeer', 'par2': '3.8 ', 'par3': 'SocketAM4', 'par4': '16', 'par5': '105Вт' }, 'image': 'https://cdn.citilink.ru/oABmBrSW20mkCsyo2FQNC55P3CEkUOuyOnrVUFh7KrQ/fit/400/400/ce/false/plain/items/1773839_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 5 PRO 4650G, OEM', 'price': '11490', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-5-pro-4650g-am4-100-000000143-3-7ghz-tray-1408978/', 'cpu': { 'par1': 'Renoir', 'par2': '3.7 ', 'par3': 'SocketAM4', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/_XVHNJynkdF6Iagg-amPmiDl7Z8YB-ED3P3qqb49Zn8/fit/400/400/ce/false/plain/items/1408978_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 5 5600X, OEM', 'price': '14890', 'link': 'https://www.citilink.ru/product/processor-amd-s-ryzen-5-5600x-am4-100-000000065-3-7ghz-oem-1773829/', 'cpu': { 'par1': 'Vermeer', 'par2': '3.7 ', 'par3': 'SocketAM4', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/LUNaE0V8xiu6-QR7h7cVVpormjOOnURS4qEUsa_3Oek/fit/400/400/ce/false/plain/items/1773829_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Pentium Dual-Core G4400, OEM', 'price': '4390', 'link': 'https://www.citilink.ru/product/processor-intel-pentium-dual-core-g4400-lga-1151-oem-384750/', 'cpu': { 'par1': 'Skylake', 'par2': '3.3 ', 'par3': 'LGA 1151', 'par4': '2', 'par5': '54Вт' }, 'image': 'https://cdn.citilink.ru/A82Gpx9MwMj_16hcDb4wtUs2N7zgWKlZRNkTf0Q1lb0/fit/400/400/ce/false/plain/items/384750_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 5 2600, OEM', 'price': '13990', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-5-2600-socketam4-oem-yd2600bbm6iaf-1068556/', 'cpu': { 'par1': 'Pinnacle Ridge', 'par2': '3.4 ', 'par3': 'SocketAM4', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/Y5zSgweKVj8-UXb8XC6mI8ig-FOp_4qJlqHAXzG6Xu4/fit/400/400/ce/false/plain/items/1068556_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 5 1600, OEM', 'price': '9990', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-5-1600-socketam4-oem-yd1600bbm6iae-461596/', 'cpu': { 'par1': 'Summit Ridge', 'par2': '3.2 ', 'par3': 'SocketAM4', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/AReHodrSpIIDpWxpkcdEblWuuapbZpEBrq6QiDwmoXo/fit/400/400/ce/false/plain/items/461596_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 9 5950X, BOX (без кулера)', 'price': '45990', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-9-5950x-socketam4-box-bez-kulera-100-100000059wof-1431151/', 'cpu': { 'par1': 'Vermeer', 'par2': '3.4 ', 'par3': 'SocketAM4', 'par4': '32', 'par5': '105Вт' }, 'image': 'https://cdn.citilink.ru/UuIVvvDZ27mvarbHhBPGGOiozrYYSzKp8l7Qk1kPIGk/fit/400/400/ce/false/plain/items/1431151_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 10400F, OEM', 'price': '10990', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-10400f-soc-1200-2-9ghz-oem-1723001/', 'cpu': { 'par1': 'Comet Lake', 'par2': '2.9 ', 'par3': 'LGA 1200', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/CSGdvfiu3QQwbD4kSAcWKqDCS1qmql1rvq2bKNtqjvM/fit/400/400/ce/false/plain/items/1723001_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 10400, OEM', 'price': '12790', 'link': 'https://www.citilink.ru/product/processor-intel-core-i5-10400-soc-1200-2-9ghz-iuhdg630-oem-1409480/', 'cpu': { 'par1': 'Comet Lake', 'par2': '2.9 ', 'par3': 'LGA 1200', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/4gJ1s-7qHbMm3Y_ocUL7kZ1cMfQZmriX1cBsT7uh6es/fit/400/400/ce/false/plain/items/1409480_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i7 12700F, OEM', 'price': '26990', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i7-12700f-soc-1700-2-1ghz-oem-1723065/', 'cpu': { 'par1': 'Alder Lake', 'par2': '2.1 ', 'par3': 'LGA 1700', 'par4': '20', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/Hi47HFp2a0ltN060Pn5HefJ4UzvEfMIibMB_sONopiM/fit/400/400/ce/false/plain/items/1723065_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i7 11700K, OEM', 'price': '28790', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i7-11700k-soc-1200-3-6ghz-iuhdg750-oem-1723020/', 'cpu': { 'par1': 'Rocket Lake', 'par2': '3.6 ', 'par3': 'LGA 1200', 'par4': '16', 'par5': '125Вт' }, 'image': 'https://cdn.citilink.ru/vVSa-fADIFz_U6lE0BFOJXyQHVuVwZ2qvShGtmDbUis/fit/400/400/ce/false/plain/items/1723020_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i3 10105, BOX', 'price': '8990', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i7-11700f-soc-1200-bx8070811700f-s-rknr-2-5ghz-1769586/', 'cpu': { 'par1': 'Comet Lake Refresh', 'par2': '3.7 ', 'par3': 'LGA 1200', 'par4': '8', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/Mng2m0tkRa5kb6hGzYZI8Aa1JNHSM-UYkXzWgDqe7oI/fit/400/400/ce/false/plain/items/1769586_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 7 3700X, OEM', 'price': '15890', 'link': 'https://www.citilink.ru/product/processor-amd-s-ryzen-7-3700x-am4-100-000000071-3-6ghz-oem-1804883/', 'cpu': { 'par1': 'Matisse', 'par2': '3.6 ', 'par3': 'SocketAM4', 'par4': '16', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/5dIEUNZJ-91vlZUj-ljIlDhdycvGlLtPHUuQ89KCRLU/fit/400/400/ce/false/plain/items/1804883_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i5 12500, OEM', 'price': '15290', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-12500-soc-1700-3-0ghz-iuhdg770-oem-1779475/', 'cpu': { 'par1': 'Alder Lake', 'par2': '3.0 ', 'par3': 'LGA 1700', 'par4': '12', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/2-PWqaJYY6zzRPTc5XK5OSgbbAbjz6jfNUNTYQyRT0U/fit/400/400/ce/false/plain/items/1779475_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i7 11700F, OEM', 'price': '22490', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i7-11700f-soc-1200-2-5ghz-oem-1723017/', 'cpu': { 'par1': 'Rocket Lake', 'par2': '2.5 ', 'par3': 'LGA 1200', 'par4': '16', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/dqeQl53QRn5MVHimwiQ2HW-bTgpbupIqULNoOhp-pA4/fit/400/400/ce/false/plain/items/1723017_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'Intel Core i7 12700, OEM', 'price': '28590', 'link': 'https://www.citilink.ru/product/processor-intel-s-core-i7-12700-soc-1700-2-1ghz-iuhdg770-oem-1795642/', 'cpu': { 'par1': 'Alder Lake', 'par2': '2.1 ', 'par3': 'LGA 1700', 'par4': '20', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/VgJQTbCxZN_Z6RLOkPNHsHQCD6T0qNufinFY1V00mpA/fit/400/400/ce/false/plain/items/1795642_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 3 PRO 2100GE, OEM', 'price': '8190', 'link': 'https://www.citilink.ru/product/processor-amd-ryzen-3-2100ge-am4-yd210bc6m2ofb-3-2ghz-vega-8-oem-1625193/', 'cpu': { 'par1': 'Raven Ridge', 'par2': '3.2 ', 'par3': 'SocketAM4', 'par4': '4', 'par5': '35Вт' }, 'image': 'https://cdn.citilink.ru/V3ygHbijYRSrWtiOVczJDGsR5T9DVcJbNegnrjjluSs/fit/400/400/ce/false/plain/items/1625193_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD Ryzen 3 PRO 4350G, OEM', 'price': '8990', 'link': 'https://www.citilink.ru/product/processor-amd-s-ryzen-3-pro-4350g-am4-100-000000148-3-8ghz-amd-radeon-1773851/', 'cpu': { 'par1': 'Renoir', 'par2': '3.8 ', 'par3': 'SocketAM4', 'par4': '8', 'par5': '65Вт' }, 'image': 'https://cdn.citilink.ru/l26ffGXucHg4nc4j0sRz5Qf7YTktZghh6Pf9dFgzwxI/fit/400/400/ce/false/plain/items/1773851_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Процессор', 'name': 'AMD A6 9500E, OEM', 'price': '1590', 'link': 'https://www.citilink.ru/product/processor-amd-s-a6-9500e-am4-ad9500ahm23ab-3ghz-100mhz-r5-oem-1824658/', 'cpu': { 'par1': 'Excavator', 'par2': '3 ', 'par3': 'SocketAM4', 'par4': '2', 'par5': '35Вт' }, 'image': 'https://cdn.citilink.ru/9_Hasu5qtd1sg4Hqe_IE55P5gyxjEFBpGoo36tnc-7U/fit/400/400/ce/false/plain/items/1824658_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot Signature PSD48G266681 DDR4 - 8ГБ', 'price': '1690', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-signature-psd48g266681-ddr4-8gb-2666-dimm-ret-1083963/', 'cpu': { 'par1': '1* 8', 'par2': '2666', 'par3': 'CL19', 'par4': '19-19-19-43', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/n6uqTI8buFzpe5S7cKyuK24ZLktICh-HHJpijZN1bdM/fit/400/400/ce/false/plain/items/1083963_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot PSD34G16002 DDR3 - 4ГБ', 'price': '1090', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd34g16002-ddr3-4gb-1600-dimm-ret-740727/', 'cpu': { 'par1': '1* 4', 'par2': '1600', 'par3': 'CL11', 'par4': '11-11-11', 'par5': 'DIMM, 240-pin' }, 'image': 'https://cdn.citilink.ru/zh0lDPTxM3eBYUbKfEpjS1xHS5k5LnRfBXxZ802TtTY/fit/400/400/ce/false/plain/items/740727_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot Signature PSD48G266681S DDR4 - 8ГБ', 'price': '1790', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-signature-psd48g266681s-ddr4-8gb-2666-so-dimm-re-1147804/', 'cpu': { 'par1': '1* 8', 'par2': '2666', 'par3': 'CL19', 'par4': '19-19-19-43', 'par5': 'SO-DIMM, 260-pin' }, 'image': 'https://cdn.citilink.ru/jS_qeIfn152EtTItugj2v3invaWptMWEUkAPfw5nNDw/fit/400/400/ce/false/plain/items/1147804_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'A-Data AD4S32008G22-SGN DDR4 - 8ГБ', 'price': '1790', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-a-data-ad4s32008g22-sgn-rtl-pc4-25600-cl22-so-1738815/', 'cpu': { 'par1': '1* 8', 'par2': '3200', 'par3': 'CL22', 'par4': '22-22-22', 'par5': 'SO-DIMM, 260-pin' }, 'image': 'https://cdn.citilink.ru/5dcPM3yW1jl67QgTpRdBBri4_qGAj32C5hwARzfl_U0/fit/400/400/ce/false/plain/items/1738815_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'AMD Radeon R7 Performance Series R748G2606U2S-U DDR4 - 8ГБ', 'price': '1690', 'link': 'https://www.citilink.ru/product/modul-pamyati-amd-radeon-r7-performance-series-r748g2606u2s-uo-ddr4-8g-333705/', 'cpu': { 'par1': '1* 8', 'par2': '2666', 'par3': 'CL16', 'par4': '16-18-18-35', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/HYpVTeTp9sE-0JC1qq_yIOyUeY8fcgT0vVCQnBuJtyI/fit/400/400/ce/false/plain/items/333705_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'A-Data AD4U32008G22-SGN DDR4 - 8ГБ', 'price': '1890', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-a-data-ad4u32008g22-sgn-rtl-pc4-25600-cl22-dim-1738816/', 'cpu': { 'par1': '1* 8', 'par2': '3200', 'par3': 'CL22', 'par4': '22-22-22', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/NAGACvHw5GSW0E0xQPr1swY8Faxmiukun0Bg9RWEacs/fit/400/400/ce/false/plain/items/1738816_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot PSD34G16002S DDR3 - 4ГБ', 'price': '1090', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd34g16002s-ddr3-4gb-1600-so-dimm-ret-889868/', 'cpu': { 'par1': '1* 4', 'par2': '1600', 'par3': 'CL11', 'par4': '11-11-11', 'par5': 'SO-DIMM, 204-pin' }, 'image': 'https://cdn.citilink.ru/BUEXO0qzoT93AgqK-_-1YXbkazMa19BQxoebHxguwRk/fit/400/400/ce/false/plain/items/889868_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingston VALUERAM KVR16LS11/8WP DDR3L - 8ГБ', 'price': '3290', 'link': 'https://www.citilink.ru/product/pamyat-ddr3l-8gb-1600mhz-kingston-kvr16ls11-8wp-rtl-pc3-12800-cl11-so-1520961/', 'cpu': { 'par1': '1* 8', 'par2': '1600', 'par3': 'CL11', 'par4': '11-11-11', 'par5': 'SO-DIMM, 204-pin' }, 'image': 'https://cdn.citilink.ru/NHA6oDy-poqW7y7JTaY2KlATDXFDOU74aSxZdb-jKu8/fit/400/400/ce/false/plain/items/1520961_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot PSD34G160081S DDR3 - 4ГБ', 'price': '1050', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd34g160081s-ddr3-4gb-1600-so-dimm-ret-352757/', 'cpu': { 'par1': '1* 4', 'par2': '1600', 'par3': 'CL11', 'par4': '11-11-11', 'par5': 'SO-DIMM, 204-pin' }, 'image': 'https://cdn.citilink.ru/y7La546DIyfdjLMMqOHOANwyTyiPbdcVVl_6DDx0TkM/fit/400/400/ce/false/plain/items/352757_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot Signature PSD48G240081 DDR4 - 8ГБ', 'price': '1790', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-signature-psd48g240081-ddr4-8gb-2400-dimm-ret-389002/', 'cpu': { 'par1': '1* 8', 'par2': '2400', 'par3': 'CL17', 'par4': 'DIMM, 288-pin', 'par5': 'Ret' }, 'image': 'https://cdn.citilink.ru/tXu_zIfY6Iwbd_tXeoIXMgZYz1VBMMWwW0th9PAFvt8/fit/400/400/ce/false/plain/items/389002_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot PSD34G1600L2S DDR3L - 4ГБ', 'price': '1090', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd34g1600l2s-ddr3l-4gb-1600-so-dimm-ret-425890/', 'cpu': { 'par1': '1* 4', 'par2': '1600', 'par3': 'CL11', 'par4': 'SO-DIMM, 204-pin', 'par5': 'Ret' }, 'image': 'https://cdn.citilink.ru/5u1zc_Tc4RJeyhXWit3RCOgnVM5EGj2PGQLYovxU8xw/fit/400/400/ce/false/plain/items/425890_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot Signature PSD48G320081 DDR4 - 8ГБ', 'price': '1790', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-patriot-psd48g320081-rtl-pc4-23400-cl19-dimm-2-1422046/', 'cpu': { 'par1': '1* 8', 'par2': '3200', 'par3': 'CL22', 'par4': '22-22-22-52', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/iKxTGj-kXN-D7KcxjYZTYD2iW356VXZsxu3Qw2cjnV8/fit/400/400/ce/false/plain/items/1422046_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingmax KM-LD4-3200-8GS DDR4 - 8ГБ', 'price': '2390', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-kingmax-km-ld4-3200-8gs-oem-pc4-25600-cl22-dim-1702063/', 'cpu': { 'par1': '1* 8', 'par2': '3200', 'par3': 'CL22', 'par4': 'DIMM, 288-pin', 'par5': 'OEM' }, 'image': 'https://cdn.citilink.ru/nn3pWJYSNaYPR5phkJ-S2e3lkn9g7yJHNfzlp34KIdc/fit/400/400/ce/false/plain/items/1702063_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot PSD22G8002S DDR2 - 2ГБ', 'price': '890', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd22g8002s-ddr2-2gb-800-so-dimm-ret-505550/', 'cpu': { 'par1': '1* 2', 'par2': '800', 'par3': 'CL6', 'par4': '6-6-6', 'par5': 'SO-DIMM, 200-pin' }, 'image': 'https://cdn.citilink.ru/O-0CkHTjI86PnuvP9ezuaO-ajJkc7s_s4EHbigsySE0/fit/400/400/ce/false/plain/items/505550_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingston Fury Beast Black KF432C16BB/8 DDR4 - 8ГБ', 'price': '2690', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-kingston-kf432c16bb-8-rtl-pc4-25600-cl16-dimm-1560197/', 'cpu': { 'par1': '1* 8', 'par2': '3200', 'par3': 'CL16', 'par4': '16-18-18', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/aWx08CGV28SIlwc-zpDBWKQbH-JAK4eAI4SYgX4KbpE/fit/400/400/ce/false/plain/items/1560197_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Crucial Basics CB8GU2666 DDR4 - 8ГБ', 'price': '2190', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-2666mhz-crucial-cb8gu2666-oem-pc4-21300-cl16-dimm-288-1430542/', 'cpu': { 'par1': '1* 8', 'par2': '2666', 'par3': 'CL19', 'par4': '19-19-19', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/KqYyMdNboHFFjxtXMOUoKE950zgbwdEkqey3uRd3e1c/fit/400/400/ce/false/plain/items/1430542_p01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'NETAC Basic NTBSD4P32SP-08 DDR4 - 8ГБ', 'price': '1790', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-netac-ntbsd4p32sp-08-basic-rtl-pc4-25600-cl6-d-1740123/', 'cpu': { 'par1': '1* 8', 'par2': '3200', 'par3': 'CL16', 'par4': '16-20-20-40', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/ipC2qrGFS6j7deIPxvtvWIN2Gfb5dEaWNqPlQiZaDYg/fit/400/400/ce/false/plain/items/1740123_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot PSD34G133381 DDR3 - 4ГБ', 'price': '1090', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd34g133381-ddr3-4gb-1333-dimm-ret-867169/', 'cpu': { 'par1': '1* 4', 'par2': '1333', 'par3': 'CL9', 'par4': '9-9-9', 'par5': 'DIMM, 240-pin' }, 'image': 'https://cdn.citilink.ru/jmpzm28aHkOrpzCFm2h78Af1E6mYxCHI_AP6gSovTeo/fit/400/400/ce/false/plain/items/867169_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingston VALUERAM KVR16LS11/4WP DDR3L - 4ГБ', 'price': '1990', 'link': 'https://www.citilink.ru/product/pamyat-ddr3l-4gb-1600mhz-kingston-kvr16ls11-4wp-rtl-pc3-12800-cl11-so-1520889/', 'cpu': { 'par1': '1* 4', 'par2': '1600', 'par3': 'CL11', 'par4': '11-11-11', 'par5': 'SO-DIMM, 204-pin' }, 'image': 'https://cdn.citilink.ru/Y-C3fc3msGWLr0q65yXIMK7m7QgSF9RoabIRL7tuwKI/fit/400/400/ce/false/plain/items/1520889_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingston VALUERAM KVR26N19S8/8 DDR4 - 8ГБ', 'price': '2290', 'link': 'https://www.citilink.ru/product/modul-pamyati-kingston-valueram-kvr26n19s8-8-ddr4-8gb-2666-dimm-ret-1107375/', 'cpu': { 'par1': '1* 8', 'par2': '2666', 'par3': 'CL19', 'par4': '19-19-19', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/lApBTbTq8p3JhFoYLgegjvgEJgD6yPgepnOdcsrJ2uk/fit/400/400/ce/false/plain/items/1107375_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot Signature PSD44G266681 DDR4 - 4ГБ', 'price': '1090', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-signature-psd44g266681-ddr4-4gb-2666-dimm-ret-1147805/', 'cpu': { 'par1': '1* 4', 'par2': '2666', 'par3': 'CL19', 'par4': '19-19-19-43', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/9zI-inqLzs-XiVw_vroNGXvmGv3rPDNX7ztUzUuNKaw/fit/400/400/ce/false/plain/items/1147805_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingston VALUERAM KVR32N22S6/8 DDR4 - 8ГБ', 'price': '2150', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-kingston-kvr32n22s6-8-rtl-pc4-25600-cl22-dimm-1430233/', 'cpu': { 'par1': '1* 8', 'par2': '3200', 'par3': 'CL22', 'par4': '22-22-22', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/0zBTfUqOjcEr6ZYnoZFtzhaJri69xaEcyoo6hZ2hzp8/fit/400/400/ce/false/plain/items/1430233_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot Signature PSD48G213381 DDR4 - 8ГБ', 'price': '1990', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-signature-psd48g213381-ddr4-8gb-2133-dimm-ret-389001/', 'cpu': { 'par1': '1* 8', 'par2': '2133', 'par3': 'CL15', 'par4': 'DIMM, 288-pin', 'par5': 'Ret' }, 'image': 'https://cdn.citilink.ru/SDWshvufg8JSbc1EwouIdIhuIGIN9VUikFz_ZhmJNeM/fit/400/400/ce/false/plain/items/389001_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Crucial Basics CB8GS2666 DDR4 - 8ГБ', 'price': '2390', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-2666mhz-crucial-cb8gs2666-oem-pc3-21300-cl16-so-dimm-2-1430543/', 'cpu': { 'par1': '1* 8', 'par2': '2666', 'par3': 'CL19', 'par4': '19-19-19', 'par5': 'SO-DIMM, 260-pin' }, 'image': 'https://cdn.citilink.ru/c6VX_Nw6pybYf_GeaV2ghrx4U0F10r2eyE0SZFjiV9U/fit/400/400/ce/false/plain/items/1430543_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Crucial CT8G4DFS6266 DDR4 - 8ГБ', 'price': '2190', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-2666mhz-crucial-ct8g4dfs6266-rtl-pc4-21300-cl19-dimm-2-1691133/', 'cpu': { 'par1': '1* 8', 'par2': '2666', 'par3': 'CL19', 'par4': 'DIMM, 288-pin', 'par5': 'Ret' }, 'image': 'https://cdn.citilink.ru/QrZKguMCsSMdsNZL97q-ZIAC05xbIDVWeMuGyquPkNI/fit/400/400/ce/false/plain/items/1691133_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot PSD22G80026 DDR2 - 2ГБ', 'price': '890', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd22g80026-ddr2-2gb-800-dimm-ret-62890/', 'cpu': { 'par1': '1* 2', 'par2': '800', 'par3': 'CL6', 'par4': '6-6-6', 'par5': 'DIMM, 240-pin' }, 'image': 'https://cdn.citilink.ru/N4Y5fa1FspXnCXc3VtkUpxa0g1tW5GjySO5R4G7neQo/fit/400/400/ce/false/plain/items/62890_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot PSD38G16002S DDR3 - 8ГБ', 'price': '1890', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd38g16002s-ddr3-8gb-1600-so-dimm-ret-352745/', 'cpu': { 'par1': '1* 8', 'par2': '1600', 'par3': 'CL11', 'par4': '11-11-11', 'par5': 'SO-DIMM, 204-pin' }, 'image': 'https://cdn.citilink.ru/QODSJv6cDwHCsbuAlW2FVs7QejnJLln2rLfyS9QSiqg/fit/400/400/ce/false/plain/items/352745_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingston VALUERAM KVR26S19S8/8 DDR4 - 8ГБ', 'price': '2150', 'link': 'https://www.citilink.ru/product/modul-pamyati-kingston-valueram-kvr26s19s8-8-ddr4-8gb-2666-so-dimm-ret-1107382/', 'cpu': { 'par1': '1* 8', 'par2': '2666', 'par3': 'CL19', 'par4': '19-19-19', 'par5': 'SO-DIMM, 260-pin' }, 'image': 'https://cdn.citilink.ru/7JuWg9hmdev0KqGkKEKV5qrrA1QJ6Lsn3FzeZEHt0Fg/fit/400/400/ce/false/plain/items/1107382_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingston Fury Beast Black RGB KF436C17BBAK2/16 DDR4 - 2x 8ГБ', 'price': '6290', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-2x8gb-3600mhz-kingston-kf436c17bbak2-16-fury-beast-black-r-1633457/', 'cpu': { 'par1': '2* 8', 'par2': '3600', 'par3': 'CL17', 'par4': '17-21-21', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/cl8rZkXklNLZh1jz7ymyiopUCEUzWaDWvwr2S7GpxKw/fit/400/400/ce/false/plain/items/1633457_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingston KVR16S11/8WP DDR3 - 8ГБ', 'price': '2990', 'link': 'https://www.citilink.ru/product/pamyat-ddr3-8gb-1600mhz-kingston-kvr16s11-8wp-rtl-pc3-12800-cl11-so-di-1520960/', 'cpu': { 'par1': '1* 8', 'par2': '1600', 'par3': 'CL11', 'par4': '11-11-11', 'par5': 'SO-DIMM, 204-pin' }, 'image': 'https://cdn.citilink.ru/leomOvF33u_6zUuGVRz_jwoRULEXCW2rvfsomKoUYd8/fit/400/400/ce/false/plain/items/1520960_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'A-Data AD4U32008G22-BGN DDR4 - 8ГБ', 'price': '1890', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-a-data-ad4u32008g22-bgn-rtl-cl22-dimm-288-pin-1731685/', 'cpu': { 'par1': '1* 8', 'par2': '3200', 'par3': 'CL22', 'par4': 'DIMM, 288-pin', 'par5': 'OEM' }, 'image': 'https://cdn.citilink.ru/8l5A-A4K3WK4Z149s0sq52RAOKTHrp7Xnw5pnfF7HrE/fit/400/400/ce/false/plain/items/1731685_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot PSD34G160081 DDR3 - 4ГБ', 'price': '1050', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd34g160081-ddr3-4gb-1600-dimm-ret-422564/', 'cpu': { 'par1': '1* 4', 'par2': '1600', 'par3': 'CL11', 'par4': 'DIMM, 240-pin', 'par5': 'Ret' }, 'image': 'https://cdn.citilink.ru/MZ3Vdqz9-cEqWaHuAZlva1BWscS-o5I0ZvmS8ghc5wU/fit/400/400/ce/false/plain/items/422564_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Corsair Vengeance LPX CMK8GX4M1A2666C16 DDR4 - 8ГБ', 'price': '2790', 'link': 'https://www.citilink.ru/product/modul-pamyati-corsair-vengeance-lpx-cmk8gx4m1a2666c16-ddr4-8gb-2666-di-330655/', 'cpu': { 'par1': '1* 8', 'par2': '2666', 'par3': 'CL16', 'par4': '16-18-18-35', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/lUSD-XM4qGWAV2kOYHmivfLdbZzZcCD4knI2aK8rULw/fit/400/400/ce/false/plain/items/330655_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingston VALUERAM KVR16S11S8/4WP DDR3 - 4ГБ', 'price': '1690', 'link': 'https://www.citilink.ru/product/pamyat-ddr3-4gb-1600mhz-kingston-kvr16s11s8-4wp-rtl-pc3-12800-cl11-204-1508035/', 'cpu': { 'par1': '1* 4', 'par2': '1600', 'par3': 'CL11', 'par4': '11-11-11', 'par5': 'SO-DIMM, 204-pin' }, 'image': 'https://cdn.citilink.ru/QxqS7-2yUmwYVyVTZZoKqDEQ8bMmZwRsV9k80nC5JDo/fit/400/400/ce/false/plain/items/1508035_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot PSD38G13332 DDR3 - 8ГБ', 'price': '1990', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd38g13332-ddr3-8gb-1333-dimm-ret-762798/', 'cpu': { 'par1': '1* 8', 'par2': '1333', 'par3': 'CL9', 'par4': 'DIMM, 240-pin', 'par5': 'Ret' }, 'image': 'https://cdn.citilink.ru/Mv7LUL3X6A3UwvcmSBRRBblUCnhJY_d4gI1aJ1CIdls/fit/400/400/ce/false/plain/items/762798_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'AMD Radeon R7 Performance Series R748G2400U2S-UO DDR4 - 8ГБ', 'price': '1690', 'link': 'https://www.citilink.ru/product/modul-pamyati-amd-radeon-r7-performance-series-r748g2400u2s-uo-ddr4-8g-1007258/', 'cpu': { 'par1': '1* 8', 'par2': '2400', 'par3': 'CL16', 'par4': '16-16-16-36', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/aIdu8Bmlt5d5Ehe41kt7TPZ5bJjaxdCPNHyKhu_bgqM/fit/400/400/ce/false/plain/items/1007258_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'NETAC Basic NTBSD4P26SP-16 DDR4 - 16ГБ', 'price': '3090', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-16gb-2666mhz-netac-ntbsd4p26sp-16-basic-rtl-cl19-dimm-288-1740122/', 'cpu': { 'par1': '1* 16', 'par2': '2666', 'par3': 'CL19', 'par4': '19-19-19-43', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/4h26Z9hNL4a2sVRwayNTnSzBhLZ6P-00MDI5D9Jj_A0/fit/400/400/ce/false/plain/items/1740122_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Patriot Viper Steel PVS416G400C9K DDR4 - 2x 8ГБ', 'price': '7190', 'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-viper-steel-pvs416g400c9k-ddr4-2x-8gb-4000-dimm-1118408/', 'cpu': { 'par1': '2* 8', 'par2': '4000', 'par3': 'CL19', 'par4': '19-19-19-39', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/FIclQImAQGAAuhcAeakEI7FmrBNV-sDlsfHBVgPOtsI/fit/400/400/ce/false/plain/items/1118408_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'A-Data AD4U320016G22-RGN DDR4 - 16ГБ', 'price': '3390', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-16gb-3200mhz-a-data-ad4u320016g22-rgn-rtl-cl22-dimm-288-pi-1769527/', 'cpu': { 'par1': '1* 16', 'par2': '3200', 'par3': 'CL22', 'par4': '22-22-22', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/ViittQ1wcqmo4u7kHIOHOBhSUxL5rBS7U7MIZoMZMb4/fit/400/400/ce/false/plain/items/1769527_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingston VALUERAM KVR26N19S6/8 DDR4 - 8ГБ', 'price': '2290', 'link': 'https://www.citilink.ru/product/modul-pamyati-kingston-valueram-kvr26n19s6-8-ddr4-8gb-2666-dimm-ret-1421635/', 'cpu': { 'par1': '1* 8', 'par2': '2666', 'par3': 'CL19', 'par4': '19-19-19', 'par5': 'DIMM, 288-pin' }, 'image': 'https://cdn.citilink.ru/8kLj4DN7s47MNf2YnoLPayPmJfVYP6mf7ykNUStfK40/fit/400/400/ce/false/plain/items/1421635_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'Kingston VALUERAM KVR16N11/8WP DDR3 - 8ГБ', 'price': '3190', 'link': 'https://www.citilink.ru/product/pamyat-ddr3-8gb-1600mhz-kingston-kvr16n11-8wp-rtl-pc3-12800-cl11-dimm-1520958/', 'cpu': { 'par1': '1* 8', 'par2': '1600', 'par3': 'CL11', 'par4': '11-11-11', 'par5': 'DIMM, 240-pin' }, 'image': 'https://cdn.citilink.ru/74gf_9v03oJs-TBYKdErKFFE8oM8gSiUXf4pgPPi9bA/fit/400/400/ce/false/plain/items/1520958_v01_m.jpg' },
      // { 'store': 'Ситилинк', 'type': 'Оперативная память', 'name': 'AMD Radeon R7 Performance Series R7416G2606S2S-U DDR4 - 16ГБ', 'price': '2990', 'link': 'https://www.citilink.ru/product/pamyat-ddr4-16gb-2666mhz-amd-r7416g2606s2s-u-rtl-pc4-21300-cl16-so-dim-1517486/', 'cpu': { 'par1': '1* 16', 'par2': '2666', 'par3': 'CL16', 'par4': '16-18-18-35', 'par5': 'SO-DIMM, 260-pin' }, 'image': 'https://cdn.citilink.ru/Eim4frJ0RzPP17hdVhM1Qm-cHWEl9sVdlq7EilSax30/fit/400/400/ce/false/plain/items/1517486_v01_m.jpg' },
      {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce RTX 2060SUPER, PA-RTX2060SUPER DUAL 8G no LED',
        'price': '29990',
        'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-pa-rtx2060super-dual-8g-no-led-nv-rtx2060super-1489448/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 2060SUPER',
          'par2': '8',
          'par8': '1470 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/hihHK5xjxE5pTy0m84vA6ahy3zG2c7w5ye_3NKGmHQ0/fit/400/400/ce/false/plain/items/1489448_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce RTX 3060Ti, PA-RTX3060Ti DUAL 8G V1 LHR',
        'price': '37990',
        'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3060ti-dual-8g-v1-lhr-nv-rtx3060ti-81-1542015/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060Ti',
          'par2': '8',
          'par8': '1410 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/bvh1Ucq4--ayXNPVeOymcoQD6t9kWA1hCPielBdcxDw/fit/400/400/ce/false/plain/items/1542015_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce RTX 3060, RTX3060 DUAL OC 12G',
        'price': '32990',
        'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-rtx-3060-rtx3060-dual-oc-12g-12gb-gddr-1469028/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060',
          'par2': '12',
          'par8': '1320 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '15000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/97a6p0qXohOn-1zu-xAJ45CJ2-ZedVFGkX0vF6Nxj4w/fit/400/400/ce/false/plain/items/1469028_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce RTX 3060Ti, PA-RTX3060Ti DUAL OC 8G V1 LHR',
        'price': '38590',
        'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3060ti-dual-oc-8g-v1-lhr-nv-rtx3060ti-1542005/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060Ti',
          'par2': '8',
          'par8': '1410 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/LwhkwqNdkRlFMfrTxR0-7DvRIer8c48G0cOuK7TgCDk/fit/400/400/ce/false/plain/items/1542005_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce GTX 1660SUPER, PA-GTX1660SUPER GP OC 6G',
        'price': '22390',
        'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-pa-gtx1660super-gp-oc-6g-nv-gtx1660super-6144mb-1496878/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1660SUPER',
          'par2': '6',
          'par8': '1530 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/60MDBpufESIskQLLa9ou62yvGcGpkaLR2nD63rkshu4/fit/400/400/ce/false/plain/items/1496878_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'MSI NVIDIA GeForce RTX 3050, RTX 3050 GAMING X 8G',
        'price': '28590',
        'link': 'https://www.citilink.ru/product/videokarta-msi-pci-e-4-0-rtx-3050-gaming-x-8g-nv-rtx3050-8192mb-64-gdd-1680443/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3050',
          'par2': '8',
          'par8': '1845 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/R7utBi1LbTavbSvfFktZm0AXCdUiQiFBOE30iCm-S-s/fit/400/400/ce/false/plain/items/1680443_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce GTX 1650, PA-GTX1650 GP OC 4G D6',
        'price': '15690',
        'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1650-pa-gtx1650-gp-oc-4g-d6-4gb-gd-1468993/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1650',
          'par2': '4',
          'par8': '1410 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '12000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/7dOxmaqoEsx13NkEXHNR0XvDJRg_w1EFbwchKSgJZdo/fit/400/400/ce/false/plain/items/1468993_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce GTX 1660TI, PA-GTX1660Ti DUAL 6G',
        'price': '23990',
        'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-pa-gtx1660ti-dual-6g-nv-gtx1660ti-6144mb-192-gd-1537454/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1660TI',
          'par2': '6',
          'par8': '1500 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '12000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/pO-q-lpND_cj1tZkQAjV8uVDcHfBNf4Qx_YyHT1dZS8/fit/400/400/ce/false/plain/items/1537454_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce GTX 1050TI, PA-GTX1050Ti StormX 4G',
        'price': '13490',
        'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1050ti-pa-gtx1050ti-stormx-4g-4gb-401997/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1050TI',
          'par2': '4',
          'par8': '1290 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '7000',
          'Техпроцесс': '14',
          'ТипПамяти': 'GDDR5',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/AseYozsvGrDaDzUUqe0XcD1u1plYdCAGTH8bmBbU268/fit/400/400/ce/false/plain/items/401997_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'MSI NVIDIA GeForce RTX 2060SUPER, RTX 2060 SUPER VENTUS GP OC',
        'price': '36990',
        'link': 'https://www.citilink.ru/product/videokarta-msi-nvidia-geforce-rtx-2060super-rtx-2060-super-ventus-gp-o-1185986/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 2060SUPER',
          'par2': '8',
          'par8': '1665 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/Xigv9VfmUphiS4zum1B8rCMbNxeAzPDPkHZpZ_GLeSI/fit/400/400/ce/false/plain/items/1185986_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce GTX 1660SUPER, PA-GTX1660SUPER STORMX 6G',
        'price': '21990',
        'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1660super-pa-gtx1660super-stormx-6-1459415/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1660SUPER',
          'par2': '6',
          'par8': '1530 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/J59REDfbmVWGDw2LHc0zHkDWH6W2iKnUY4i_QjOFhiE/fit/400/400/ce/false/plain/items/1459415_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce RTX 3060, GV-N3060GAMING OC-12GD 2.0 LHR',
        'price': '37990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n3060gaming-oc-12gd-v2-0-lhr-nv-rtx30-1531394/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060',
          'par2': '12',
          'par8': '1837 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '15000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/GIE_mN8j9FkL5SVS2cIgvGjPF4ZrLpRn8i2-8EGtgnY/fit/400/400/ce/false/plain/items/1531394_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce GTX 1650, PA-GTX1650 GP 4G D6',
        'price': '14290',
        'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1650-pa-gtx1650-gp-4g-d6-4gb-gddr6-1472471/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1650',
          'par2': '4',
          'par8': '1410 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '12000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/cpD51fGmKUDat3xnx0dSMRIhJOtWQP2Mhv7gqgKPBes/fit/400/400/ce/false/plain/items/1472471_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'MSI NVIDIA GeForce RTX 3050, RTX 3050 VENTUS 2X 8G OC',
        'price': '26990',
        'link': 'https://www.citilink.ru/product/videokarta-msi-pci-e-4-0-rtx-3050-ventus-2x-8g-oc-nv-rtx3050-8192mb-64-1680442/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3050',
          'par2': '8',
          'par8': '1807 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/6osmRkOXqdMAWE80Y5AnXxuVgb0NcKg5JvYf2RdjTl8/fit/400/400/ce/false/plain/items/1680442_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce RTX 3060, PA-RTX3060 DUAL 12G',
        'price': '35990',
        'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3060-dual-12g-nv-rtx3060-12288mb-192-1680290/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060',
          'par2': '12',
          'par8': '1320 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '15000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/6Irkk1NekEI-fRYOJkdJZ9dSgMdIBK8y1Wed13mtk7g/fit/400/400/ce/false/plain/items/1680290_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce RTX 3060, GV-N3060VISION OC-12GD 2.0 LHR',
        'price': '33990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n3060vision-oc-12gd-2-0-nv-rtx3060-12-1535676/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060',
          'par2': '12',
          'par8': '1837 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '15000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/B7w2644-FnYfDZmmvL6Fyr-rUlZfctXQpXZ_xZUgYSs/fit/400/400/ce/false/plain/items/1535676_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce RTX 3070TI, PA-RTX3070TI GAMINGPRO 8G',
        'price': '53590',
        'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3070ti-gamingpro-8g-nv-rtx3070ti-8192-1528277/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3070TI',
          'par2': '8',
          'par8': '1575 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '19000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6X',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/j0zSH2lfweXPz9suRO0N9HudHDzY8p668_fK8M7tUuQ/fit/400/400/ce/false/plain/items/1528277_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce RTX 3050, GV-N3050EAGLE OC-8GD',
        'price': '26990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n3050eagle-oc-8gd-nv-rtx3050-8192mb-1-1671917/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3050',
          'par2': '8',
          'par8': '1792 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/xb8vnDJm1FQnUa-GxQOfnBZVb0E5uddZBSyv00SMKjE/fit/400/400/ce/false/plain/items/1671917_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce GTX 1660SUPER, PA-GTX1660SUPER GP 6G',
        'price': '22990',
        'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-pa-gtx1660super-gp-6g-nv-gtx1660super-6144mb-19-1496891/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1660SUPER',
          'par2': '6',
          'par8': '1530 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/xH3nbqRRFFt-1S_ZkiNRI7_FC0GxBTFozfF-ZpJprSA/fit/400/400/ce/false/plain/items/1496891_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'MSI NVIDIA GeForce 210, N210-1GD3/LP',
        'price': '3590',
        'link': 'https://www.citilink.ru/product/videokarta-msi-pci-e-n210-1gd3-lp-nv-gf210-1024mb-64-ddr3-460-800-dvix-1562985/',
        'cpu': {
          'par1': 'NVIDIA GeForce 210',
          'par2': '1',
          'par8': '460 ',
          'par3': 'PCI-E',
          'ЧастотаПамяти': '800',
          'Техпроцесс': '28',
          'ТипПамяти': 'DDR3',
          'РазрядностьШиныПамяти': '64'
        },
        'image': 'https://cdn.citilink.ru/4EMd5wLFLUzKlggS_85vP0103xYe-eqsuxngA5PvZFk/fit/400/400/ce/false/plain/items/1562985_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce RTX 3070TI, GV-N307TGAMING OC-8GD',
        'price': '56990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n307tgaming-oc-8gd-nv-rtx3070ti-8192m-1535681/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3070TI',
          'par2': '8',
          'par8': '1830 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '19000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6X',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/tyr7oauv1w6lQqTvFXYAl0bL1UNfkKPNWiPL1bJQMQI/fit/400/400/ce/false/plain/items/1535681_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE AMD Radeon RX 6600, GV-R66EAGLE-8GD',
        'price': '26590',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-gv-r66eagle-8gd-amd-rx6600-8192mb-128-gddr6-1610423/',
        'cpu': {
          'par1': 'AMD Radeon RX 6600',
          'par2': '8',
          'par8': '2044 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '7',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/VujTKK_y5rUlszJFMcmZ0TzOffnb1BLkGLzlMD1jRWo/fit/400/400/ce/false/plain/items/1610423_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce GTX 1650, PA-GTX1650 GP 4G D6 BULK',
        'price': '14290',
        'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1650-pa-gtx1650-gp-4g-d6-bulk-4gb-1459400/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1650',
          'par2': '4',
          'par8': '1410 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '12000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/koG2PP0tU_sLCYHEKJ2o9qzDRmEjbswsLlepE0FKqT4/fit/400/400/ce/false/plain/items/1459400_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce RTX 3070, PA-RTX3070 JETSTREAM 8G V1 LHR',
        'price': '47990',
        'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3070-jetstream-8g-v1-lhr-nv-rtx3070-8-1542016/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3070',
          'par2': '8',
          'par8': '1500 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/UaH3kf6B0lBXjTIvyql9dpvfd9V1WmbgVt5x7kjlI_g/fit/400/400/ce/false/plain/items/1542016_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce RTX 3060, GV-N3060EAGLE OC-12GD 2.0 LHR',
        'price': '35990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n3060eagle-oc-12gd-v2-0-lhr-nv-rtx306-1531397/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060',
          'par2': '12',
          'par8': '1807 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '15000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/XI_ymrjv_zVXEQ0IoAUe0ObJ_aJWcTD_CzBDqVaQg-4/fit/400/400/ce/false/plain/items/1531397_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce RTX 2060, GV-N2060D6-6GD',
        'price': '27990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-gv-n2060d6-6gd-nv-rtx2060-6144mb-192b-gddr6-1382637/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 2060',
          'par2': '6',
          'par8': '1680 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/ckcAECAgxEmCXNSIgI0e9YEpVRirMkDEs7MkUdKKI1U/fit/400/400/ce/false/plain/items/1382637_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce RTX 3060Ti, GV-N306TGAMING OC-8GD 2.0 LHR',
        'price': '41590',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n306tgaming-oc-8gd-2-0-lhr-nv-rtx3060-1558222/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060Ti',
          'par2': '8',
          'par8': '1740 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/Urlg7tjN11wAmFRDiyg0DQPQr8nIzqsww-QPaRrhnQQ/fit/400/400/ce/false/plain/items/1558222_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'MSI NVIDIA GeForce RTX 3060, RTX 3060 VENTUS 2X 12G OC',
        'price': '36590',
        'link': 'https://www.citilink.ru/product/videokarta-msi-nvidia-geforce-rtx-3060-rtx-3060-ventus-2x-12g-oc-12gb-1475891/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060',
          'par2': '12',
          'par8': '1680 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '15000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/AgDImMUP9KvOURgAyJQghCcTGolrr-D4c5FopvxA5CM/fit/400/400/ce/false/plain/items/1475891_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE AMD Radeon RX 6650XT, GV-R665XTGAMING OC-8GD',
        'price': '30990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-gv-r665xtgaming-oc-8gd-amd-radeon-rx-6650xt-1738844/',
        'cpu': {
          'par1': 'AMD Radeon RX 6650XT',
          'par2': '8',
          'par8': '2523 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '17500',
          'Техпроцесс': '7',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/7o7g9b68iCIelFqdOlphz9HNFSdEhHtKJ9t6_Vi3Z2Q/fit/400/400/ce/false/plain/items/1738844_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce GTX 1660SUPER, PA-GTX1660SUPER STORMX 6G',
        'price': '22990',
        'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1660super-pa-gtx1660super-stormx-6-1185833/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1660SUPER',
          'par2': '6',
          'par8': '1530 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/4K8kDgnvOmaDA5noYR49f44L8rqnZn60wXs59WUZvsk/fit/400/400/ce/false/plain/items/1185833_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce GTX 1660TI, GV-N166TOC-6GD',
        'price': '30990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-nvidia-geforce-gtx-1660ti-gv-n166toc-6gd-6gb-gddr6-1124050/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1660TI',
          'par2': '6',
          'par8': '1536 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '12000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/34tjfJ6vOeefbvyUxvdyp2jpvo2qZPLcSIAFAM2r_kA/fit/400/400/ce/false/plain/items/1124050_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE AMD Radeon RX 6500XT, GV-R65XTGAMING OC-4GD',
        'price': '18990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-gv-r65xtgaming-oc-4gd-amd-rx6500xt-4096mb-64-1654728/',
        'cpu': {
          'par1': 'AMD Radeon RX 6500XT',
          'par2': '4',
          'par8': '2685 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '18000',
          'Техпроцесс': '6',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '64'
        },
        'image': 'https://cdn.citilink.ru/zZPGor7f0IC58cFNF1HIEaKRSvKmib7kBt1dL9uRGAE/fit/400/400/ce/false/plain/items/1654728_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce RTX 3070, PA-RTX3070 GAMINGPRO OC 8G V1 LHR',
        'price': '48990',
        'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3070-gamingpro-oc-8g-v1-nv-rtx3070-81-1535818/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3070',
          'par2': '8',
          'par8': '1500 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/98L4CR2BmeM4neFkTq9ApTyGE2WdWmjMIdUJWnm6Yzs/fit/400/400/ce/false/plain/items/1535818_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce RTX 3060Ti, GV-N306TVISION OC-8GD 2.0 LHR',
        'price': '41990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n306tvision-oc-8gd-2-0-lhr-nv-rtx3060-1543697/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060Ti',
          'par2': '8',
          'par8': '1755 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/H5eoXdCv5sSJig-K_XNLRN7msZLgd0GmApGive_laxc/fit/400/400/ce/false/plain/items/1543697_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce RTX 3080, GV-N3080GAMING OC-10GD 2.0 LHR',
        'price': '69990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n3080gaming-oc-10gd-2-0-lhr-nv-rtx308-1548845/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3080',
          'par2': '10',
          'par8': '1800 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '19000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6X',
          'РазрядностьШиныПамяти': '320'
        },
        'image': 'https://cdn.citilink.ru/D6U3F77_Bu15nLddpOB9Rt071ye5hvAFl4enYSa3TjU/fit/400/400/ce/false/plain/items/1548845_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'MSI NVIDIA GeForce RTX 3060Ti, RTX 3060 Ti GAMING X 8G LHR',
        'price': '40990',
        'link': 'https://www.citilink.ru/product/videokarta-msi-pci-e-4-0-rtx-3060-ti-gaming-x-8g-lhr-nv-rtx3060ti-8192-1561343/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060Ti',
          'par2': '8',
          'par8': '1770 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/qPYG92UdkYdPviOu8yrlikoAcwZHbY95qBeQRT5B9bs/fit/400/400/ce/false/plain/items/1561343_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce RTX 3070TI, PA-RTX3070TI GAMEROCK OC 8G',
        'price': '55590',
        'link': 'https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx3070ti-gamerock-oc-8g-nv-rtx3070ti-81-1528272/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3070TI',
          'par2': '8',
          'par8': '1575 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '19000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6X',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/X8ujBH-r1C0ATSZ_urZmycIqd9HDb3qqP1yrX0Utpm8/fit/400/400/ce/false/plain/items/1528272_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'MSI NVIDIA GeForce GTX 1660SUPER, GTX 1660 SUPER VENTUS XS OC',
        'price': '22990',
        'link': 'https://www.citilink.ru/product/videokarta-msi-nvidia-geforce-gtx-1660super-gtx-1660-super-ventus-xs-o-1188206/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1660SUPER',
          'par2': '6',
          'par8': '1530 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/NNa12GgtVSD72fh6t5hMbgzLHTbDRPcZUvcgfZuY8TM/fit/400/400/ce/false/plain/items/1188206_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE AMD Radeon RX 6650XT, GV-R665XTEAGLE-8GD',
        'price': '32990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-gv-r665xteagle-8gd-amd-radeon-rx-6650xt-8192-1738847/',
        'cpu': {
          'par1': 'AMD Radeon RX 6650XT',
          'par2': '8',
          'par8': '2410 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '17500',
          'Техпроцесс': '7',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/i735mgG0UdIJdrSQcZ59-eoFlFPuh3hVk4S8iE_KWSQ/fit/400/400/ce/false/plain/items/1738847_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce GTX 1650, GV-N1650OC-4GD',
        'price': '15990',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-nvidia-geforce-gtx-1650-gv-n1650oc-4gd-4gb-gddr5-o-1138954/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1650',
          'par2': '4',
          'par8': '1665 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '8002',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR5',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/DUo5YB99cv-AlhgkY_Klb6PHZk6824doZsAh7DrDGWg/fit/400/400/ce/false/plain/items/1138954_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'MSI NVIDIA GeForce GTX 1650, GTX 1650 D6 VENTUS XS OC',
        'price': '16390',
        'link': 'https://www.citilink.ru/product/videokarta-msi-pci-e-gtx-1650-d6-ventus-xs-oc-nv-gtx1650-4096mb-128b-g-1366048/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1650',
          'par2': '4',
          'par8': '1485 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '12000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://cdn.citilink.ru/A6x4_v5T5Gf_yDvRUwcE5S1_ar4lzqZ18HrbMug52jw/fit/400/400/ce/false/plain/items/1366048_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce RTX 3070, PA-RTX3070 GAMINGPRO 8G',
        'price': '48790',
        'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-rtx-3070-pa-rtx3070-gamingpro-8g-8gb-g-1421448/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3070',
          'par2': '8',
          'par8': '1500 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/1Bh82oDice6o-fFSJdKI05z-HqspyeT6DCAg4Oa-FY0/fit/400/400/ce/false/plain/items/1421448_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'MSI NVIDIA GeForce RTX 3060, RTX 3060 VENTUS 3X 12G OC',
        'price': '37990',
        'link': 'https://www.citilink.ru/product/videokarta-oc-rtx-3060-ventus-3x-12g-oc-1475894/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3060',
          'par2': '12',
          'par8': '1680 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '15000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/x3nuS45eL4zRHbKaQ9JL-S7r5CFcUziffbbMhsUek9k/fit/400/400/ce/false/plain/items/1475894_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce GT 1030, GV-N1030OC-2GI',
        'price': '7790',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-nvidia-geforce-gt-1030-gv-n1030oc-2gi-2gb-gddr5-oc-479391/',
        'cpu': {
          'par1': 'NVIDIA GeForce GT 1030',
          'par2': '2',
          'par8': '1265 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '6008',
          'Техпроцесс': '0',
          'ТипПамяти': 'GDDR5',
          'РазрядностьШиныПамяти': '64'
        },
        'image': 'https://cdn.citilink.ru/hPM8TEMTeshJuXOcT51GsrKtzBdBXO8oRR1fnqLBBVs/fit/400/400/ce/false/plain/items/479391_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce GT 1030, PA-GT1030 2GD4',
        'price': '6290',
        'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gt-1030-pa-gt1030-2gd4-2gb-ddr4-low-pr-1054296/',
        'cpu': {
          'par1': 'NVIDIA GeForce GT 1030',
          'par2': '2',
          'par8': '1151 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '2100',
          'Техпроцесс': '0',
          'ТипПамяти': 'DDR4',
          'РазрядностьШиныПамяти': '64'
        },
        'image': 'https://cdn.citilink.ru/mugb92S8ewIyLhspunyFqrkfhb6tl8gTQ_mxBwh_6RY/fit/400/400/ce/false/plain/items/1054296_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'Palit NVIDIA GeForce GTX 1660TI, PA-GTX1660Ti STORMX 6G',
        'price': '25990',
        'link': 'https://www.citilink.ru/product/videokarta-palit-nvidia-geforce-gtx-1660ti-pa-gtx1660ti-stormx-6g-6gb-1118911/',
        'cpu': {
          'par1': 'NVIDIA GeForce GTX 1660TI',
          'par2': '6',
          'par8': '1500 ',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '12000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://cdn.citilink.ru/p1biIqLCoEFKiTgXC49khKAKhvkCoT-zgpkIoTXkzeI/fit/400/400/ce/false/plain/items/1118911_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE AMD Radeon RX 6400, GV-R64EAGLE-4GD',
        'price': '13690',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-gv-r64eagle-4gd-amd-rx6400-4096mb-64-gddr6-2-1743177/',
        'cpu': {
          'par1': 'AMD Radeon RX 6400',
          'par2': '4',
          'par8': '2039 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '16000',
          'Техпроцесс': '6',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '64'
        },
        'image': 'https://cdn.citilink.ru/s2e5mzJjChdwE4uS17F7I7x279Sg6AG2EJNrO79NVes/fit/400/400/ce/false/plain/items/1743177_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Видеокарта',
        'name': 'GIGABYTE NVIDIA GeForce RTX 3070, GV-N3070GAMING OC-8GD 2.0 LHR',
        'price': '51590',
        'link': 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-n3070gaming-oc-8gd-2-0-lhr-nv-rtx3070-1546196/',
        'cpu': {
          'par1': 'NVIDIA GeForce RTX 3070',
          'par2': '8',
          'par8': '1815 ',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://cdn.citilink.ru/Nf45sBrE3sobUphJ0UPBdXuUAyEU5vpx1GeC5TdzilI/fit/400/400/ce/false/plain/items/1546196_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i5 11400F, OEM',
        'price': '12490',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-11400f-soc-1200-2-6ghz-oem-1722999/',
        'cpu': {
          'par1': 'Rocket Lake',
          'par2': '2.6',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/ZBg-u8ysLY1aB1yWMN_WxffuKsAF9nRVSAqbxZvkrq0/fit/400/400/ce/false/plain/items/1722999_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i3 10100F, OEM',
        'price': '5590',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-10100f-soc-1200-3-6ghz-oem-1723000/',
        'cpu': {
          'par1': 'Comet Lake',
          'par2': '3.6',
          'par3': 'LGA 1200',
          'par4': '8',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/tln-J_HEkcbUjPehzzpIYxz4N0-le7VJtbWcQkMOBy0/fit/400/400/ce/false/plain/items/1723000_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i3 10105, OEM',
        'price': '8390',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-10105-soc-1200-3-7ghz-iuhdg630-oem-1722987/',
        'cpu': {
          'par1': 'Comet Lake Refresh',
          'par2': '3.7',
          'par3': 'LGA 1200',
          'par4': '8',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '350 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 630',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/C9xbXAMOWAe4gAVAEIbV1xHbBTfzrub1kQg1dNsv6wU/fit/400/400/ce/false/plain/items/1722987_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i3 10105F, OEM',
        'price': '6090',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-10105f-soc-1200-3-7ghz-oem-1795649/',
        'cpu': {
          'par1': 'Comet Lake Refresh',
          'par2': '3.7',
          'par3': 'LGA 1200',
          'par4': '8',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/dePbc9qfcQIya110ZrrFUgBIJ22aSzod4Fu0UHVi-Hg/fit/400/400/ce/false/plain/items/1795649_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i3 12100F, OEM',
        'price': '7990',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-12100f-soc-1700-3-3ghz-oem-1779456/',
        'cpu': {
          'par1': 'Alder Lake',
          'par2': '3.3',
          'par3': 'LGA 1700',
          'par4': '8',
          'par5': '58',
          'ТипПамяти': 'DDR5/ DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '10',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': 'DDR5 4800 МГц; DDR4 3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/o3bDjum6bHmklhv-EAL5jcNitzG5rSl4hahbnUTZi3o/fit/400/400/ce/false/plain/items/1779456_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i5 12600K, OEM',
        'price': '24590',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-12600k-soc-1700-3-7ghz-iuhdg770-oem-1723032/',
        'cpu': {
          'par1': 'Alder Lake',
          'par2': '3.7',
          'par3': 'LGA 1700',
          'par4': '16',
          'par5': '125',
          'ТипПамяти': 'DDR5/ DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '10',
          'КоличествоКаналов': '2',
          'Техпроцесс': '10',
          'ЧастотаГрафическогоЯдра': '300 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 770',
          'ЧастотаПамяти': 'DDR5 4800 МГц; DDR4 3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/U-Oi2u3t1W9ELf5_i_oql3KsJP5TITyiXAYWNKD7PCk/fit/400/400/ce/false/plain/items/1723032_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i3 10100, OEM',
        'price': '8390',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-10100-soc-1200-3-6ghz-iuhdg630-oem-1722986/',
        'cpu': {
          'par1': 'Comet Lake',
          'par2': '3.6',
          'par3': 'LGA 1200',
          'par4': '8',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '350 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 630',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/b0eZAVbtmjmkXWsQN6YofHlhWP1ewA5AmEL1KQHI27I/fit/400/400/ce/false/plain/items/1722986_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i5 11400F, BOX',
        'price': '13990',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-11400f-soc-1200-2-6ghz-box-1828733/',
        'cpu': {
          'par1': 'Rocket Lake',
          'par2': '2.6',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/UeuFvGVCIglpXaX6wKMkU-WoUxdq0n32b-IN1N3YtlE/fit/400/400/ce/false/plain/items/1828733_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i5 11400, OEM',
        'price': '13990',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-11400-soc-1200-2-6ghz-iuhdg730-oem-1723003/',
        'cpu': {
          'par1': 'Rocket Lake',
          'par2': '2.6',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '350 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 730',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/clCroWp25uxSTxNQ2i5lqN0uMSuFCJArRqsuz0StIt0/fit/400/400/ce/false/plain/items/1723003_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i3 12100, OEM',
        'price': '8990',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-12100-soc-1700-3-3ghz-iuhdg730-oem-1779455/',
        'cpu': {
          'par1': 'Alder Lake',
          'par2': '3.3',
          'par3': 'LGA 1700',
          'par4': '8',
          'par5': '60',
          'ТипПамяти': 'DDR5/ DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '10',
          'ЧастотаГрафическогоЯдра': '300 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 730',
          'ЧастотаПамяти': 'DDR5 4800 МГц; DDR4 3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/DMLbiuAgKlzU4scSgHNrgr5_p68jKfwS4O3TyZXpeRQ/fit/400/400/ce/false/plain/items/1779455_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD Ryzen 7 5800X, OEM',
        'price': '21990',
        'link': 'https://www.citilink.ru/product/processor-amd-s-ryzen-7-5800x-am4-100-000000063-3-8ghz-oem-1773839/',
        'cpu': {
          'par1': 'Vermeer',
          'par2': '3.8',
          'par3': 'SocketAM4',
          'par4': '16',
          'par5': '105',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '8',
          'КоличествоКаналов': '2',
          'Техпроцесс': '7',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/oABmBrSW20mkCsyo2FQNC55P3CEkUOuyOnrVUFh7KrQ/fit/400/400/ce/false/plain/items/1773839_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Pentium Gold G6405, OEM',
        'price': '4990',
        'link': 'https://www.citilink.ru/product/processor-intel-s-pentium-gold-g6405-soc-1200-4-1ghz-iuhdg610-oem-1722989/',
        'cpu': {
          'par1': 'Comet Lake',
          'par2': '4.1',
          'par3': 'LGA 1200',
          'par4': '4',
          'par5': '58',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '2',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '350 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 610',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/LLXYCSumXoIxIREQmEL71368u6m4G7e9muPWBJY4ZCg/fit/400/400/ce/false/plain/items/1722989_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i5 10400, OEM',
        'price': '12290',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-10400-soc-1200-2-9ghz-iuhdg630-oem-1722993/',
        'cpu': {
          'par1': 'Comet Lake',
          'par2': '2.9',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '350 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 630',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/hZsz2H6y8y92-LIXZ3H3p8yRfakY28IYSZe2OPcgYAI/fit/400/400/ce/false/plain/items/1722993_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD A6 9500E, OEM',
        'price': '1690',
        'link': 'https://www.citilink.ru/product/processor-amd-a6-9500e-socketam4-oem-ad9500ahm23ab-499912/',
        'cpu': {
          'par1': 'Excavator',
          'par2': '3',
          'par3': 'SocketAM4',
          'par4': '2',
          'par5': '35',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '2',
          'КоличествоКаналов': '2',
          'Техпроцесс': '28',
          'ЧастотаГрафическогоЯдра': '800 ',
          'МодельГрафическогоЯдра': 'AMD Radeon R5',
          'ЧастотаПамяти': '2400 МГц'
        },
        'image': 'https://cdn.citilink.ru/gYX-tCI3y3p5cWxOqgQYtP_kjM031U_qK54dH0LLhm0/fit/400/400/ce/false/plain/items/499912_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD Athlon 200GE, OEM',
        'price': '4690',
        'link': 'https://www.citilink.ru/product/processor-amd-athlon-200ge-socketam4-tray-yd200gc6m2ofb-1089583/',
        'cpu': {
          'par1': 'Raven Ridge',
          'par2': '3.2',
          'par3': 'SocketAM4',
          'par4': '4',
          'par5': '35',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '2',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '1000 ',
          'МодельГрафическогоЯдра': 'Radeon Vega 3',
          'ЧастотаПамяти': '2667 МГц'
        },
        'image': 'https://cdn.citilink.ru/Lc8Aj5Pok8B8G_VkxC0-xJMVqewlQUplh26eg66qYxo/fit/400/400/ce/false/plain/items/1089583_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i5 10400F, BOX',
        'price': '11490',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-10400f-soc-1200-bx8070110400f-s-rh3d-2-9ghz-1724062/',
        'cpu': {
          'par1': 'Comet Lake',
          'par2': '2.9',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/-x514BZtpk9xtZB5ect5NDm4Bt8HCWvOYsuOSIF2Wb0/fit/400/400/ce/false/plain/items/1724062_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Pentium Gold G6400, OEM',
        'price': '4990',
        'link': 'https://www.citilink.ru/product/processor-intel-s-pentium-gold-g6400-soc-1200-4ghz-iuhdg610-oem-1722991/',
        'cpu': {
          'par1': 'Comet Lake',
          'par2': '4',
          'par3': 'LGA 1200',
          'par4': '4',
          'par5': '58',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '2',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '350 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 610',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/jZDNliPffm1-tMK-jJ7gc7TmnqZpOBPzVNYjPWkmnJQ/fit/400/400/ce/false/plain/items/1722991_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD A10 8770 PRO, OEM',
        'price': '4990',
        'link': 'https://www.citilink.ru/product/processor-amd-a10-8770-am4-ad877bagm44ab-3-5ghz-100mhz-r7-oem-1522047/',
        'cpu': {
          'par1': 'Carrizo',
          'par2': '3.5',
          'par3': 'SocketAM4',
          'par4': '4',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '28',
          'ЧастотаГрафическогоЯдра': '1029 ',
          'МодельГрафическогоЯдра': 'AMD Radeon R7',
          'ЧастотаПамяти': '2400 МГц'
        },
        'image': 'https://cdn.citilink.ru/-E_kCEVYw-7cZP5NWQLFvIJtWUGvXz9uH4hHMeTrnCI/fit/400/400/ce/false/plain/items/1522047_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i5 10400F, OEM',
        'price': '10990',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-10400f-soc-1200-2-9ghz-oem-1723001/',
        'cpu': {
          'par1': 'Comet Lake',
          'par2': '2.9',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/CSGdvfiu3QQwbD4kSAcWKqDCS1qmql1rvq2bKNtqjvM/fit/400/400/ce/false/plain/items/1723001_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i5 11500, OEM',
        'price': '15590',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-11500-soc-1200-2-7ghz-iuhdg750-oem-1723038/',
        'cpu': {
          'par1': 'Rocket Lake',
          'par2': '2.7',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '350 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 750',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/wnCy9q_eQcp1gUO4ImI6iEKxpGBc78f40plcOmzQyYI/fit/400/400/ce/false/plain/items/1723038_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i7 12700F, OEM',
        'price': '27990',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i7-12700f-soc-1700-2-1ghz-oem-1723065/',
        'cpu': {
          'par1': 'Alder Lake',
          'par2': '2.1',
          'par3': 'LGA 1700',
          'par4': '20',
          'par5': '65',
          'ТипПамяти': 'DDR5/ DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '12',
          'КоличествоКаналов': '2',
          'Техпроцесс': '10',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': 'DDR5 4800 МГц; DDR4 3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/Hi47HFp2a0ltN060Pn5HefJ4UzvEfMIibMB_sONopiM/fit/400/400/ce/false/plain/items/1723065_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i5 12500, OEM',
        'price': '16790',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-12500-soc-1700-3-0ghz-iuhdg770-oem-1779475/',
        'cpu': {
          'par1': 'Alder Lake',
          'par2': '3.0',
          'par3': 'LGA 1700',
          'par4': '12',
          'par5': '65',
          'ТипПамяти': 'DDR5/ DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '10',
          'ЧастотаГрафическогоЯдра': '300 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 770',
          'ЧастотаПамяти': 'DDR5 4800 МГц; DDR4 3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/2-PWqaJYY6zzRPTc5XK5OSgbbAbjz6jfNUNTYQyRT0U/fit/400/400/ce/false/plain/items/1779475_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD A6 9500, OEM',
        'price': '2590',
        'link': 'https://www.citilink.ru/product/processor-amd-a6-9500-socketam4-oem-ad9500agm23ab-499895/',
        'cpu': {
          'par1': 'Excavator',
          'par2': '3.5',
          'par3': 'SocketAM4',
          'par4': '2',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '2',
          'КоличествоКаналов': '2',
          'Техпроцесс': '28',
          'ЧастотаГрафическогоЯдра': '1029 ',
          'МодельГрафическогоЯдра': 'AMD Radeon R5',
          'ЧастотаПамяти': '2400 МГц'
        },
        'image': 'https://cdn.citilink.ru/d0LliY-gugUJ7QEj1KQkaKS1ofYSQbJmvpeFX0vztfc/fit/400/400/ce/false/plain/items/499895_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD Ryzen 7 3700X, OEM',
        'price': '15290',
        'link': 'https://www.citilink.ru/product/processor-amd-s-ryzen-7-3700x-am4-100-000000071-3-6ghz-oem-1804883/',
        'cpu': {
          'par1': 'Matisse',
          'par2': '3.6',
          'par3': 'SocketAM4',
          'par4': '16',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '8',
          'КоличествоКаналов': '2',
          'Техпроцесс': '7',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/5dIEUNZJ-91vlZUj-ljIlDhdycvGlLtPHUuQ89KCRLU/fit/400/400/ce/false/plain/items/1804883_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD Ryzen 5 2600, OEM',
        'price': '14590',
        'link': 'https://www.citilink.ru/product/processor-amd-ryzen-5-2600-socketam4-oem-yd2600bbm6iaf-1068556/',
        'cpu': {
          'par1': 'Pinnacle Ridge',
          'par2': '3.4',
          'par3': 'SocketAM4',
          'par4': '12',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '12',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '2933 МГц'
        },
        'image': 'https://cdn.citilink.ru/Y5zSgweKVj8-UXb8XC6mI8ig-FOp_4qJlqHAXzG6Xu4/fit/400/400/ce/false/plain/items/1068556_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i3 10100F, BOX',
        'price': '5990',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i3-10100f-soc-1200-3-6ghz-box-1827071/',
        'cpu': {
          'par1': 'Comet Lake',
          'par2': '3.6',
          'par3': 'LGA 1200',
          'par4': '8',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/89JPhzDjPXalYCt4B1DYbXLlr9OR3Xruz4gW1TM7_F8/fit/400/400/ce/false/plain/items/1827071_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i7 11700F, OEM',
        'price': '23590',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i7-11700f-soc-1200-2-5ghz-oem-1723017/',
        'cpu': {
          'par1': 'Rocket Lake',
          'par2': '2.5',
          'par3': 'LGA 1200',
          'par4': '16',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '8',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/dqeQl53QRn5MVHimwiQ2HW-bTgpbupIqULNoOhp-pA4/fit/400/400/ce/false/plain/items/1723017_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i7 11700K, OEM',
        'price': '28790',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i7-11700k-soc-1200-3-6ghz-iuhdg750-oem-1723020/',
        'cpu': {
          'par1': 'Rocket Lake',
          'par2': '3.6',
          'par3': 'LGA 1200',
          'par4': '16',
          'par5': '125',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '8',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '350 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 750',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/vVSa-fADIFz_U6lE0BFOJXyQHVuVwZ2qvShGtmDbUis/fit/400/400/ce/false/plain/items/1723020_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i7 12700, OEM',
        'price': '26290',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i7-12700-soc-1700-2-1ghz-iuhdg770-oem-1795642/',
        'cpu': {
          'par1': 'Alder Lake',
          'par2': '2.1',
          'par3': 'LGA 1700',
          'par4': '20',
          'par5': '65',
          'ТипПамяти': 'DDR5/ DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '12',
          'КоличествоКаналов': '2',
          'Техпроцесс': '10',
          'ЧастотаГрафическогоЯдра': '300 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 770',
          'ЧастотаПамяти': 'DDR5 4800 МГц; DDR4 3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/VgJQTbCxZN_Z6RLOkPNHsHQCD6T0qNufinFY1V00mpA/fit/400/400/ce/false/plain/items/1795642_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD Ryzen 5 5600G, OEM',
        'price': '12690',
        'link': 'https://www.citilink.ru/product/processor-amd-s-ryzen-5-5600g-am4-100-000000252-3-9ghz-amd-radeon-oem-1773831/',
        'cpu': {
          'par1': 'Cezanne',
          'par2': '3.9',
          'par3': 'SocketAM4',
          'par4': '12',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '7',
          'ЧастотаГрафическогоЯдра': '1900 ',
          'МодельГрафическогоЯдра': 'AMD Radeon',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/XXG5wpxL2s1OL0JYaqEF8hQh3lij1MgdqAmstM0elpA/fit/400/400/ce/false/plain/items/1773831_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Pentium Dual-Core G4400, OEM',
        'price': '4390',
        'link': 'https://www.citilink.ru/product/processor-intel-pentium-dual-core-g4400-lga-1151-oem-384750/',
        'cpu': {
          'par1': 'Skylake',
          'par2': '3.3',
          'par3': 'LGA 1151',
          'par4': '2',
          'par5': '54',
          'ТипПамяти': 'DDR4/ DDR3L',
          'МаксимальныйОбъемПамяти': '64',
          'КоличествоЯдер': '2',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '350 ',
          'МодельГрафическогоЯдра': 'Intel HD Graphics 510',
          'ЧастотаПамяти': 'DDR4 1866/2133 МГц; DDR3L 1333/1600 МГц'
        },
        'image': 'https://cdn.citilink.ru/A82Gpx9MwMj_16hcDb4wtUs2N7zgWKlZRNkTf0Q1lb0/fit/400/400/ce/false/plain/items/384750_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD A6 9500E, OEM',
        'price': '1690',
        'link': 'https://www.citilink.ru/product/processor-amd-s-a6-9500e-am4-ad9500ahm23ab-3ghz-100mhz-r5-oem-1824658/',
        'cpu': {
          'par1': 'Excavator',
          'par2': '3',
          'par3': 'SocketAM4',
          'par4': '2',
          'par5': '35',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '2',
          'КоличествоКаналов': '2',
          'Техпроцесс': '28',
          'ЧастотаГрафическогоЯдра': '800 ',
          'МодельГрафическогоЯдра': 'AMD Radeon R5',
          'ЧастотаПамяти': '2400 МГц'
        },
        'image': 'https://cdn.citilink.ru/9_Hasu5qtd1sg4Hqe_IE55P5gyxjEFBpGoo36tnc-7U/fit/400/400/ce/false/plain/items/1824658_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i5 12600KF, OEM',
        'price': '22490',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-12600kf-soc-1700-3-7ghz-oem-1782229/',
        'cpu': {
          'par1': 'Alder Lake',
          'par2': '3.7',
          'par3': 'LGA 1700',
          'par4': '16',
          'par5': '125',
          'ТипПамяти': 'DDR5/ DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '10',
          'КоличествоКаналов': '2',
          'Техпроцесс': '10',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': 'DDR5 4800 МГц; DDR4 3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/hzoGE-036mzm7gK142IpUBd61bHQxJrOa3KikfONA8A/fit/400/400/ce/false/plain/items/1782229_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD Ryzen 3 3200G, OEM',
        'price': '9990',
        'link': 'https://www.citilink.ru/product/processor-amd-s-ryzen-3-3200g-am4-yd3200c5m4mfh-3-6ghz-vega-8-oem-1804874/',
        'cpu': {
          'par1': 'Picasso',
          'par2': '3.6',
          'par3': 'SocketAM4',
          'par4': '4',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '12',
          'ЧастотаГрафическогоЯдра': '1250 ',
          'МодельГрафическогоЯдра': 'Radeon Vega 8',
          'ЧастотаПамяти': '2933 МГц'
        },
        'image': 'https://cdn.citilink.ru/AgqjtaCeTVoDs2wA8zXyED__qij82UzeBIjmY-DMMA8/fit/400/400/ce/false/plain/items/1804874_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD Athlon 3000G, OEM',
        'price': '4490',
        'link': 'https://www.citilink.ru/product/processor-amd-s-athlon-3000g-am4-yd3000c6m2ofh-3-5ghz-100mhz-vega-3-oe-1804915/',
        'cpu': {
          'par1': 'Picasso',
          'par2': '3.5',
          'par3': 'SocketAM4',
          'par4': '4',
          'par5': '35',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '2',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '1100 ',
          'МодельГрафическогоЯдра': 'Radeon Vega 3',
          'ЧастотаПамяти': '2667 МГц'
        },
        'image': 'https://cdn.citilink.ru/pfiHBIuEIDZxL6FJ5zi-bSmpZBVgRDFVkjrXc37N8Rc/fit/400/400/ce/false/plain/items/1804915_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD Ryzen 7 5700G, OEM',
        'price': '18290',
        'link': 'https://www.citilink.ru/product/processor-amd-s-ryzen-7-5700g-am4-100-000000263-3-8ghz-vega-8-oem-1773852/',
        'cpu': {
          'par1': 'Cezanne',
          'par2': '3.8',
          'par3': 'SocketAM4',
          'par4': '16',
          'par5': '65',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '0',
          'КоличествоЯдер': '8',
          'КоличествоКаналов': '2',
          'Техпроцесс': '7',
          'ЧастотаГрафическогоЯдра': '2000 ',
          'МодельГрафическогоЯдра': 'Radeon Vega 8',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/rLPsZ80k9njLtvB44B1FV74H7Q9Bij0JNUQG8EfKwdQ/fit/400/400/ce/false/plain/items/1773852_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Celeron G5905, OEM',
        'price': '2790',
        'link': 'https://www.citilink.ru/product/processor-intel-s-celeron-g5905-soc-1200-3-5ghz-iuhdg610-oem-1723029/',
        'cpu': {
          'par1': 'Comet Lake',
          'par2': '3.5',
          'par3': 'LGA 1200',
          'par4': '2',
          'par5': '58',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '2',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '350 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 610',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/KGqHyNmcNe_bDj33OPOK9qf_ygwF68yqdTJo21rG8BU/fit/400/400/ce/false/plain/items/1723029_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i5 10600KF, OEM',
        'price': '14290',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i5-10600kf-soc-1200-4-1ghz-oem-1825353/',
        'cpu': {
          'par1': 'Comet Lake',
          'par2': '4.1',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '125',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '2666 МГц'
        },
        'image': 'https://cdn.citilink.ru/ytzMs5-tXak3f_LuE2pH6yYeyVo3qkMuGJRimQs5e4M/fit/400/400/ce/false/plain/items/1825353_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i9 12900KF, OEM',
        'price': '44990',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i9-12900kf-soc-1700-3-2ghz-oem-1791233/',
        'cpu': {
          'par1': 'Alder Lake',
          'par2': '3.2',
          'par3': 'LGA 1700',
          'par4': '24',
          'par5': '125',
          'ТипПамяти': 'DDR5/ DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '16',
          'КоличествоКаналов': '2',
          'Техпроцесс': '10',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': 'DDR5 4800 МГц; DDR4 3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/MGyzoO3j-wik2tw2nBaIWoT1aJxaB7YIp5mLNSOOr20/fit/400/400/ce/false/plain/items/1791233_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'AMD Ryzen 3 PRO 2100GE, OEM',
        'price': '8990',
        'link': 'https://www.citilink.ru/product/processor-amd-ryzen-3-2100ge-am4-yd210bc6m2ofb-3-2ghz-vega-8-oem-1625193/',
        'cpu': {
          'par1': 'Raven Ridge',
          'par2': '3.2',
          'par3': 'SocketAM4',
          'par4': '4',
          'par5': '35',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '2',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '1000 ',
          'МодельГрафическогоЯдра': 'Radeon Vega 3',
          'ЧастотаПамяти': '2933 МГц'
        },
        'image': 'https://cdn.citilink.ru/V3ygHbijYRSrWtiOVczJDGsR5T9DVcJbNegnrjjluSs/fit/400/400/ce/false/plain/items/1625193_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i9 11900K, OEM',
        'price': '29990',
        'link': 'https://www.citilink.ru/product/processor-intel-s-h-core-i9-11900k-soc-1200-cm8070804400161s-rknd-3-5g-1725697/',
        'cpu': {
          'par1': 'Rocket Lake',
          'par2': '3.5',
          'par3': 'LGA 1200',
          'par4': '16',
          'par5': '125',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '8',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '350 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 750',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/QBcrkLjZl4n0N6gRq42k8a2h1S74bCVA-adnCXNPpOQ/fit/400/400/ce/false/plain/items/1725697_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i7 11700KF, OEM',
        'price': '27590',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i7-11700kf-soc-1200-3-6ghz-oem-1791235/',
        'cpu': {
          'par1': 'Rocket Lake',
          'par2': '3.6',
          'par3': 'LGA 1200',
          'par4': '16',
          'par5': '125',
          'ТипПамяти': 'DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '8',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0 ',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/iPz8vxivr_satoqTfwvNPBehZQDwma_9BHb9_DO6-9c/fit/400/400/ce/false/plain/items/1791235_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Процессор',
        'name': 'Intel Core i9 12900K, OEM',
        'price': '44290',
        'link': 'https://www.citilink.ru/product/processor-intel-s-core-i9-12900k-soc-1700-3-2ghz-iuhdg770-oem-1779474/',
        'cpu': {
          'par1': 'Alder Lake',
          'par2': '3.2',
          'par3': 'LGA 1700',
          'par4': '24',
          'par5': '125',
          'ТипПамяти': 'DDR5/ DDR4',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоЯдер': '16',
          'КоличествоКаналов': '2',
          'Техпроцесс': '10',
          'ЧастотаГрафическогоЯдра': '300 ',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 770',
          'ЧастотаПамяти': 'DDR5 4800 МГц; DDR4 3200 МГц'
        },
        'image': 'https://cdn.citilink.ru/EVHaTvhtj_xs8VSiDT4WEBA2AsfUDqsxPmS3m51Jano/fit/400/400/ce/false/plain/items/1779474_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Patriot Signature PSD48G266681S DDR4 - 8ГБ',
        'price': '1790',
        'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-signature-psd48g266681s-ddr4-8gb-2666-so-dimm-re-1147804/',
        'cpu': {
          'par1': '1* 8',
          'par2': '2666',
          'par3': 'CL19',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/jS_qeIfn152EtTItugj2v3invaWptMWEUkAPfw5nNDw/fit/400/400/ce/false/plain/items/1147804_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Patriot PSD34G16002 DDR3 - 4ГБ',
        'price': '1090',
        'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd34g16002-ddr3-4gb-1600-dimm-ret-740727/',
        'cpu': {
          'par1': '1* 4',
          'par2': '1600',
          'par3': 'CL11',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR3',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '4',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/zh0lDPTxM3eBYUbKfEpjS1xHS5k5LnRfBXxZ802TtTY/fit/400/400/ce/false/plain/items/740727_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Kingston Fury Beast Black KF432C16BBK2/16 DDR4 - 2x 8ГБ',
        'price': '4990',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-2x8gb-3200mhz-kingston-kf432c16bbk2-16-rtl-pc4-25600-cl16-1560200/',
        'cpu': {
          'par1': '2* 8',
          'par2': '3200',
          'par3': 'CL16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': 2
        },
        'image': 'https://cdn.citilink.ru/Prqhekv7h21rdVWiRNfAXV8CP26G16WAwdhdJuR9zlY/fit/400/400/ce/false/plain/items/1560200_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'A-Data AD4S32008G22-SGN DDR4 - 8ГБ',
        'price': '1790',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-a-data-ad4s32008g22-sgn-rtl-pc4-25600-cl22-so-1738815/',
        'cpu': {
          'par1': '1* 8',
          'par2': '3200',
          'par3': 'CL22',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/5dcPM3yW1jl67QgTpRdBBri4_qGAj32C5hwARzfl_U0/fit/400/400/ce/false/plain/items/1738815_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'AMD Radeon R7 Performance Series R748G2606U2S-U DDR4 - 8ГБ',
        'price': '1590',
        'link': 'https://www.citilink.ru/product/modul-pamyati-amd-radeon-r7-performance-series-r748g2606u2s-uo-ddr4-8g-333705/',
        'cpu': {
          'par1': '1* 8',
          'par2': '2666',
          'par3': 'CL16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/HYpVTeTp9sE-0JC1qq_yIOyUeY8fcgT0vVCQnBuJtyI/fit/400/400/ce/false/plain/items/333705_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'A-Data AD4U32008G22-SGN DDR4 - 8ГБ',
        'price': '1790',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-a-data-ad4u32008g22-sgn-rtl-pc4-25600-cl22-dim-1738816/',
        'cpu': {
          'par1': '1* 8',
          'par2': '3200',
          'par3': 'CL22',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/NAGACvHw5GSW0E0xQPr1swY8Faxmiukun0Bg9RWEacs/fit/400/400/ce/false/plain/items/1738816_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Patriot PSD34G160081S DDR3 - 4ГБ',
        'price': '1050',
        'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd34g160081s-ddr3-4gb-1600-so-dimm-ret-352757/',
        'cpu': {
          'par1': '1* 4',
          'par2': '1600',
          'par3': 'CL11',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR3',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '4',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/y7La546DIyfdjLMMqOHOANwyTyiPbdcVVl_6DDx0TkM/fit/400/400/ce/false/plain/items/352757_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Kingston VALUERAM KVR16LS11/8WP DDR3L - 8ГБ',
        'price': '3190',
        'link': 'https://www.citilink.ru/product/pamyat-ddr3l-8gb-1600mhz-kingston-kvr16ls11-8wp-rtl-pc3-12800-cl11-so-1520961/',
        'cpu': {
          'par1': '1* 8',
          'par2': '1600',
          'par3': 'CL11',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR3L',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/NHA6oDy-poqW7y7JTaY2KlATDXFDOU74aSxZdb-jKu8/fit/400/400/ce/false/plain/items/1520961_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Patriot Signature PSD48G240081 DDR4 - 8ГБ',
        'price': '1790',
        'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-signature-psd48g240081-ddr4-8gb-2400-dimm-ret-389002/',
        'cpu': {
          'par1': '1* 8',
          'par2': '2400',
          'par3': 'CL17',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/tXu_zIfY6Iwbd_tXeoIXMgZYz1VBMMWwW0th9PAFvt8/fit/400/400/ce/false/plain/items/389002_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Patriot Signature PSD48G320081 DDR4 - 8ГБ',
        'price': '1790',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-patriot-psd48g320081-rtl-pc4-23400-cl19-dimm-2-1422046/',
        'cpu': {
          'par1': '1* 8',
          'par2': '3200',
          'par3': 'CL22',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/iKxTGj-kXN-D7KcxjYZTYD2iW356VXZsxu3Qw2cjnV8/fit/400/400/ce/false/plain/items/1422046_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Kingston Fury Beast Black KF432C16BB/8 DDR4 - 8ГБ',
        'price': '2390',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-kingston-kf432c16bb-8-rtl-pc4-25600-cl16-dimm-1560197/',
        'cpu': {
          'par1': '1* 8',
          'par2': '3200',
          'par3': 'CL16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': 2
        },
        'image': 'https://cdn.citilink.ru/aWx08CGV28SIlwc-zpDBWKQbH-JAK4eAI4SYgX4KbpE/fit/400/400/ce/false/plain/items/1560197_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Patriot PSD22G8002S DDR2 - 2ГБ',
        'price': '890',
        'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd22g8002s-ddr2-2gb-800-so-dimm-ret-505550/',
        'cpu': {
          'par1': '1* 2',
          'par2': '800',
          'par3': 'CL6',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR2',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '2',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/O-0CkHTjI86PnuvP9ezuaO-ajJkc7s_s4EHbigsySE0/fit/400/400/ce/false/plain/items/505550_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Kingmax KM-LD4-3200-8GS DDR4 - 8ГБ',
        'price': '2390',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-kingmax-km-ld4-3200-8gs-oem-pc4-25600-cl22-dim-1702063/',
        'cpu': {
          'par1': '1* 8',
          'par2': '3200',
          'par3': 'CL22',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/nn3pWJYSNaYPR5phkJ-S2e3lkn9g7yJHNfzlp34KIdc/fit/400/400/ce/false/plain/items/1702063_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'NETAC Basic NTBSD4P32SP-08 DDR4 - 8ГБ',
        'price': '1790',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-netac-ntbsd4p32sp-08-basic-rtl-pc4-25600-cl6-d-1740123/',
        'cpu': {
          'par1': '1* 8',
          'par2': '3200',
          'par3': 'CL16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/ipC2qrGFS6j7deIPxvtvWIN2Gfb5dEaWNqPlQiZaDYg/fit/400/400/ce/false/plain/items/1740123_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Kingston VALUERAM KVR32N22S6/8 DDR4 - 8ГБ',
        'price': '2150',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-kingston-kvr32n22s6-8-rtl-pc4-25600-cl22-dimm-1430233/',
        'cpu': {
          'par1': '1* 8',
          'par2': '3200',
          'par3': 'CL22',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': 2
        },
        'image': 'https://cdn.citilink.ru/0zBTfUqOjcEr6ZYnoZFtzhaJri69xaEcyoo6hZ2hzp8/fit/400/400/ce/false/plain/items/1430233_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Crucial Basics CB8GU2666 DDR4 - 8ГБ',
        'price': '1990',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-2666mhz-crucial-cb8gu2666-oem-pc4-21300-cl16-dimm-288-1430542/',
        'cpu': {
          'par1': '1* 8',
          'par2': '2666',
          'par3': 'CL19',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': 2
        },
        'image': 'https://cdn.citilink.ru/KqYyMdNboHFFjxtXMOUoKE950zgbwdEkqey3uRd3e1c/fit/400/400/ce/false/plain/items/1430542_p01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Patriot PSD34G133381 DDR3 - 4ГБ',
        'price': '1090',
        'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd34g133381-ddr3-4gb-1333-dimm-ret-867169/',
        'cpu': {
          'par1': '1* 4',
          'par2': '1333',
          'par3': 'CL9',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR3',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '4',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/jmpzm28aHkOrpzCFm2h78Af1E6mYxCHI_AP6gSovTeo/fit/400/400/ce/false/plain/items/867169_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Kingston VALUERAM KVR16LS11/4WP DDR3L - 4ГБ',
        'price': '1990',
        'link': 'https://www.citilink.ru/product/pamyat-ddr3l-4gb-1600mhz-kingston-kvr16ls11-4wp-rtl-pc3-12800-cl11-so-1520889/',
        'cpu': {
          'par1': '1* 4',
          'par2': '1600',
          'par3': 'CL11',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR3L',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '4',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/Y-C3fc3msGWLr0q65yXIMK7m7QgSF9RoabIRL7tuwKI/fit/400/400/ce/false/plain/items/1520889_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Kingston Fury Beast Black RGB KF436C17BBAK2/16 DDR4 - 2x 8ГБ',
        'price': '5790',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-2x8gb-3600mhz-kingston-kf436c17bbak2-16-fury-beast-black-r-1633457/',
        'cpu': {
          'par1': '2* 8',
          'par2': '3600',
          'par3': 'CL17',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/cl8rZkXklNLZh1jz7ymyiopUCEUzWaDWvwr2S7GpxKw/fit/400/400/ce/false/plain/items/1633457_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Patriot Signature PSD44G266681 DDR4 - 4ГБ',
        'price': '1090',
        'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-signature-psd44g266681-ddr4-4gb-2666-dimm-ret-1147805/',
        'cpu': {
          'par1': '1* 4',
          'par2': '2666',
          'par3': 'CL19',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '4',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/9zI-inqLzs-XiVw_vroNGXvmGv3rPDNX7ztUzUuNKaw/fit/400/400/ce/false/plain/items/1147805_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Crucial CT8G4DFS6266 DDR4 - 8ГБ',
        'price': '2190',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-2666mhz-crucial-ct8g4dfs6266-rtl-pc4-21300-cl19-dimm-2-1691133/',
        'cpu': {
          'par1': '1* 8',
          'par2': '2666',
          'par3': 'CL19',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/QrZKguMCsSMdsNZL97q-ZIAC05xbIDVWeMuGyquPkNI/fit/400/400/ce/false/plain/items/1691133_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Patriot PSD38G16002S DDR3 - 8ГБ',
        'price': '1790',
        'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd38g16002s-ddr3-8gb-1600-so-dimm-ret-352745/',
        'cpu': {
          'par1': '1* 8',
          'par2': '1600',
          'par3': 'CL11',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR3',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/QODSJv6cDwHCsbuAlW2FVs7QejnJLln2rLfyS9QSiqg/fit/400/400/ce/false/plain/items/352745_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Patriot Signature PSD48G213381 DDR4 - 8ГБ',
        'price': '1990',
        'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-signature-psd48g213381-ddr4-8gb-2133-dimm-ret-389001/',
        'cpu': {
          'par1': '1* 8',
          'par2': '2133',
          'par3': 'CL15',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/SDWshvufg8JSbc1EwouIdIhuIGIN9VUikFz_ZhmJNeM/fit/400/400/ce/false/plain/items/389001_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'A-Data AD4U320016G22-RGN DDR4 - 16ГБ',
        'price': '3290',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-16gb-3200mhz-a-data-ad4u320016g22-rgn-rtl-cl22-dimm-288-pi-1769527/',
        'cpu': {
          'par1': '1* 16',
          'par2': '3200',
          'par3': 'CL22',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '16',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/ViittQ1wcqmo4u7kHIOHOBhSUxL5rBS7U7MIZoMZMb4/fit/400/400/ce/false/plain/items/1769527_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Crucial Basics CB8GS2666 DDR4 - 8ГБ',
        'price': '1990',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-2666mhz-crucial-cb8gs2666-oem-pc3-21300-cl16-so-dimm-2-1430543/',
        'cpu': {
          'par1': '1* 8',
          'par2': '2666',
          'par3': 'CL19',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': 2
        },
        'image': 'https://cdn.citilink.ru/c6VX_Nw6pybYf_GeaV2ghrx4U0F10r2eyE0SZFjiV9U/fit/400/400/ce/false/plain/items/1430543_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Kingston VALUERAM KVR26S19S8/8 DDR4 - 8ГБ',
        'price': '2150',
        'link': 'https://www.citilink.ru/product/modul-pamyati-kingston-valueram-kvr26s19s8-8-ddr4-8gb-2666-so-dimm-ret-1107382/',
        'cpu': {
          'par1': '1* 8',
          'par2': '2666',
          'par3': 'CL19',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/7JuWg9hmdev0KqGkKEKV5qrrA1QJ6Lsn3FzeZEHt0Fg/fit/400/400/ce/false/plain/items/1107382_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Kingston KVR16S11/8WP DDR3 - 8ГБ',
        'price': '2990',
        'link': 'https://www.citilink.ru/product/pamyat-ddr3-8gb-1600mhz-kingston-kvr16s11-8wp-rtl-pc3-12800-cl11-so-di-1520960/',
        'cpu': {
          'par1': '1* 8',
          'par2': '1600',
          'par3': 'CL11',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR3',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/leomOvF33u_6zUuGVRz_jwoRULEXCW2rvfsomKoUYd8/fit/400/400/ce/false/plain/items/1520960_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Kingston VALUERAM KVR16S11S8/4WP DDR3 - 4ГБ',
        'price': '1690',
        'link': 'https://www.citilink.ru/product/pamyat-ddr3-4gb-1600mhz-kingston-kvr16s11s8-4wp-rtl-pc3-12800-cl11-204-1508035/',
        'cpu': {
          'par1': '1* 4',
          'par2': '1600',
          'par3': 'CL11',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR3',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '4',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/QxqS7-2yUmwYVyVTZZoKqDEQ8bMmZwRsV9k80nC5JDo/fit/400/400/ce/false/plain/items/1508035_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'KINGSPEC KS1600D3N13508G DDR3L - 8ГБ',
        'price': '1490',
        'link': 'https://www.citilink.ru/product/pamyat-ddr3-4gb-1600mhz-kingspec-ks1600d3n13508g-rtl-pc3-12800-cl9-so-1742101/',
        'cpu': {
          'par1': '1* 8',
          'par2': '1600',
          'par3': 'CL11',
          'par4': 'none',
          'par5': 'SO-DIMM',
          'ТипПамяти': 'DDR3L',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/aZf9qDAL6WOU_eaVvDSyhq7T3-pBbB1LnNJJFJeZjjE/fit/400/400/ce/false/plain/items/1742101_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'A-Data AD4U32008G22-BGN DDR4 - 8ГБ',
        'price': '1890',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-8gb-3200mhz-a-data-ad4u32008g22-bgn-rtl-cl22-dimm-288-pin-1731685/',
        'cpu': {
          'par1': '1* 8',
          'par2': '3200',
          'par3': 'CL22',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/8l5A-A4K3WK4Z149s0sq52RAOKTHrp7Xnw5pnfF7HrE/fit/400/400/ce/false/plain/items/1731685_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Patriot PSD34G160081 DDR3 - 4ГБ',
        'price': '1050',
        'link': 'https://www.citilink.ru/product/modul-pamyati-patriot-psd34g160081-ddr3-4gb-1600-dimm-ret-422564/',
        'cpu': {
          'par1': '1* 4',
          'par2': '1600',
          'par3': 'CL11',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR3',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '4',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/MZ3Vdqz9-cEqWaHuAZlva1BWscS-o5I0ZvmS8ghc5wU/fit/400/400/ce/false/plain/items/422564_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'NETAC Basic NTBSD4P26SP-16 DDR4 - 16ГБ',
        'price': '3090',
        'link': 'https://www.citilink.ru/product/pamyat-ddr4-16gb-2666mhz-netac-ntbsd4p26sp-16-basic-rtl-cl19-dimm-288-1740122/',
        'cpu': {
          'par1': '1* 16',
          'par2': '2666',
          'par3': 'CL19',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '16',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/4h26Z9hNL4a2sVRwayNTnSzBhLZ6P-00MDI5D9Jj_A0/fit/400/400/ce/false/plain/items/1740122_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Kingston VALUERAM KVR26N19S6/8 DDR4 - 8ГБ',
        'price': '2290',
        'link': 'https://www.citilink.ru/product/modul-pamyati-kingston-valueram-kvr26n19s6-8-ddr4-8gb-2666-dimm-ret-1421635/',
        'cpu': {
          'par1': '1* 8',
          'par2': '2666',
          'par3': 'CL19',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/8kLj4DN7s47MNf2YnoLPayPmJfVYP6mf7ykNUStfK40/fit/400/400/ce/false/plain/items/1421635_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'AMD Radeon R7 Performance Series R748G2400U2S-UO DDR4 - 8ГБ',
        'price': '1690',
        'link': 'https://www.citilink.ru/product/modul-pamyati-amd-radeon-r7-performance-series-r748g2400u2s-uo-ddr4-8g-1007258/',
        'cpu': {
          'par1': '1* 8',
          'par2': '2400',
          'par3': 'CL16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/aIdu8Bmlt5d5Ehe41kt7TPZ5bJjaxdCPNHyKhu_bgqM/fit/400/400/ce/false/plain/items/1007258_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'Corsair Vengeance LPX CMK8GX4M1A2666C16 DDR4 - 8ГБ',
        'price': '2790',
        'link': 'https://www.citilink.ru/product/modul-pamyati-corsair-vengeance-lpx-cmk8gx4m1a2666c16-ddr4-8gb-2666-di-330655/',
        'cpu': {
          'par1': '1* 8',
          'par2': '2666',
          'par3': 'CL16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/lUSD-XM4qGWAV2kOYHmivfLdbZzZcCD4knI2aK8rULw/fit/400/400/ce/false/plain/items/330655_v01_m.jpg'
      }, {
        'store': 'Ситилинк',
        'type': 'Оперативная память',
        'name': 'AMD Radeon R7 Performance Series R744G2606U1S-UO DDR4 - 4ГБ',
        'price': '990',
        'link': 'https://www.citilink.ru/product/modul-pamyati-amd-radeon-r7-performance-series-r744g2606u1s-uo-ddr4-4g-1085014/',
        'cpu': {
          'par1': '1* 4',
          'par2': '2666',
          'par3': 'CL16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '4',
          'КоличествоКаналовПамяти': '1'
        },
        'image': 'https://cdn.citilink.ru/B_lHGuMR0hyquJ8DJkWH1dw_apvaxxFPoIDt-SQecXw/fit/400/400/ce/false/plain/items/1085014_v01_m.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'KFA2 GeForce RTX 3070 CORE (LHR) [37NSL6MD2KCK] [PCI-E 4.0, 8 ГБ GDDR6, 256 бит, DisplayPort x3, HDMI, GPU 1500 МГц]',
        'price': '49999',
        'link': 'https://www.dns-shop.ru/product/cfa3eecd06fbc823/videokarta-kfa2-geforce-rtx-3070-core-lhr-37nsl6md2kck/',
        'cpu': {
          'par1': 'KFA2 GeForce RTX 3070 CORE (LHR)',
          'par2': '8',
          'par8': '1500',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/a16054bc899a94b4e311a066a365dc51/6a8f4054ad444b0e48292f912bf35ba5884fe06d7cc1069028c849401d40940f.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'Palit GeForce RTX 3060 DUAL OC (LHR) [NE63060T19K9-190AD] [PCI-E 4.0, 12 ГБ GDDR6, 192 бит, DisplayPort x3, HDMI, GPU 1320 МГц]',
        'price': '35999',
        'link': 'https://www.dns-shop.ru/product/73c504d55af71b80/videokarta-palit-geforce-rtx-3060-dual-oc-lhr-ne63060t19k9-190ad/',
        'cpu': {
          'par1': 'Palit GeForce RTX 3060 DUAL OC (LHR)',
          'par2': '12',
          'par8': '1320',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '15000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/8be3e2f04d108b4f8f9bf574406655f5/7c80865de448b9054d6bd5b08dc25df8674ff369065f8a8ce2fc392625bd0ea6.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'KFA2 GeForce RTX 3070 Ti (1-Click OC) [37ISM6MD4COK] [PCI-E 4.0, 8 ГБ GDDR6X, 256 бит, DisplayPort x3, HDMI, GPU 1575 МГц]',
        'price': '55999',
        'link': 'https://www.dns-shop.ru/product/6507c0fd35f6ed20/videokarta-kfa2-geforce-rtx-3070-ti-1-click-oc-37ism6md4cok/',
        'cpu': {
          'par1': 'KFA2 GeForce RTX 3070 Ti (1-Click OC)',
          'par2': '8',
          'par8': '1575',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '19000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6X',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/67cb969204be1ed739e385d65aab0f22/d7ac8b065e4fbf06633877f5e6b5eb32109e878f921997f3dce71f33d69da241.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'GIGABYTE GeForce RTX 3060 Ti GAMING OC (LHR) [GV-N306TGAMING OC-8GD rev2.0] [PCI-E 4.0, 8 ГБ GDDR6, 256 бит, DisplayPort x2, HDMI x2, GPU 1410 МГц]',
        'price': '41999',
        'link': 'https://www.dns-shop.ru/product/7b2009f4db0fd763/videokarta-gigabyte-geforce-rtx-3060-ti-gaming-oc-lhr-gv-n306tgaming-oc-8gd-rev20/',
        'cpu': {
          'par1': 'GIGABYTE GeForce RTX 3060 Ti GAMING OC (LHR)',
          'par2': '8',
          'par8': '1410',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/3d0547e502e6af1d60044ffc8295f536/a68096039e1121724ba55de808fcfe8be1d308f004fc074a47634f2064c1c058.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'KFA2 GeForce GTX 1660 SUPER 1-click OC [60SRL7DSY91K] [PCI-E 3.0, 6 ГБ GDDR6, 192 бит, DVI-D, DisplayPort, HDMI, GPU 1530 МГц]',
        'price': '22999',
        'link': 'https://www.dns-shop.ru/product/ca7a8ad2f1443332/videokarta-kfa2-geforce-gtx-1660-super-1-click-oc-60srl7dsy91k/',
        'cpu': {
          'par1': 'KFA2 GeForce GTX 1660 SUPER 1-click OC',
          'par2': '6',
          'par8': '1530',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/594de3bf3d6988d09002c3200832c9f1/536212ae4c62db51b243eae644b3ca60b5e4b0e4989f1aad83b536c4d98a19f5.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'KFA2 GeForce RTX 3060 CORE (LHR) [36NOL7MD1VOK] [PCI-E 4.0, 12 ГБ GDDR6, 192 бит, DisplayPort x3, HDMI, GPU 1320 МГц]',
        'price': '36999',
        'link': 'https://www.dns-shop.ru/product/49b77a8077562eb0/videokarta-kfa2-geforce-rtx-3060-core-lhr-36nol7md1vok/',
        'cpu': {
          'par1': 'KFA2 GeForce RTX 3060 CORE (LHR)',
          'par2': '12',
          'par8': '1320',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '15000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/9a7629790f5e6415a557575cf2dae8c2/3a61cbd54b5ec7e12a9566bb151ce75e0778e40196208fccc5b415f6ee9621f8.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'GIGABYTE GeForce RTX 3070 Ti GAMING OC [GV-N307TGAMING OC-8GD] [PCI-E 4.0, 8 ГБ GDDR6X, 256 бит, DisplayPort x2, HDMI x2, GPU 1770 МГц]',
        'price': '59999',
        'link': 'https://www.dns-shop.ru/product/7f65939fb4862eb1/videokarta-gigabyte-geforce-rtx-3070-ti-gaming-oc-gv-n307tgaming-oc-8gd/',
        'cpu': {
          'par1': 'GIGABYTE GeForce RTX 3070 Ti GAMING OC',
          'par2': '8',
          'par8': '1770',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '19000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6X',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/a9d04e70b9d30deb9e86493763579c02/8c91a343c0a0a84c1530803c66009adf3e35823233a19f79fce109e6bfe72c4b.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'Palit GeForce RTX 3080 Ti GamingPro [NED308T019KB-132AA] [PCI-E 4.0, 12 ГБ GDDR6X, 384 бит, DisplayPort x3, HDMI, GPU 1365 МГц]',
        'price': '90999',
        'link': 'https://www.dns-shop.ru/product/8492f4a2a66a2ff1/videokarta-palit-geforce-rtx-3080-ti-gamingpro-ned308t019kb-132aa/',
        'cpu': {
          'par1': 'Palit GeForce RTX 3080 Ti GamingPro',
          'par2': '12',
          'par8': '1365',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '19000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6X',
          'РазрядностьШиныПамяти': '384'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/df2d63b0a3eb742cc3d2c1b255bb3261/37585d7b247cfba52f5afd018647e578f28c2e27430df1e0240a5267ae0a1ec4.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'Palit GeForce RTX 3060 Ti DUAL V1 (LHR) [NE6306T019P2-190AD] [PCI-E 4.0, 8 ГБ GDDR6, 256 бит, DisplayPort x3, HDMI, GPU 1410 МГц]',
        'price': '39999',
        'link': 'https://www.dns-shop.ru/product/f4d2887ac69fd763/videokarta-palit-geforce-rtx-3060-ti-dual-v1-lhr-ne6306t019p2-190ad/',
        'cpu': {
          'par1': 'Palit GeForce RTX 3060 Ti DUAL V1 (LHR)',
          'par2': '8',
          'par8': '1410',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/2ba75d1cbb16a04d7ff689fad4756c50/3c5fc580c9f6591fa59140dd574c28162a1e8d559f82ae135de942df2d10048f.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'KFA2 GeForce GTX 1660 [60SRH7DSY91K] [PCI-E 3.0, 6 ГБ GDDR5, 192 бит, HDMI, DVI-D, DisplayPort, GPU 1530 МГц]',
        'price': '21999',
        'link': 'https://www.dns-shop.ru/product/fd4c22e944893332/videokarta-kfa2-geforce-gtx-1660-60srh7dsy91k/',
        'cpu': {
          'par1': 'KFA2 GeForce GTX 1660',
          'par2': '6',
          'par8': '1530',
          'par3': 'PCI-E 3.0',
          'ЧастотаПамяти': '8000',
          'Техпроцесс': '12',
          'ТипПамяти': 'GDDR5',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/738e99f0340448e9eda6a247c3e1696e/aaf6d8c981775c543a70182eb6b4140caa8cc7bd3bcfd803de797f5e8401dfac.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'Palit GeForce RTX 3070 Ti GamingPro [NED307T019P2-1046A] [PCI-E 4.0, 8 ГБ GDDR6X, 256 бит, DisplayPort x3, HDMI, GPU 1575 МГц]',
        'price': '56999',
        'link': 'https://www.dns-shop.ru/product/bb884500ae092ff1/videokarta-palit-geforce-rtx-3070-ti-gamingpro-ned307t019p2-1046a/',
        'cpu': {
          'par1': 'Palit GeForce RTX 3070 Ti GamingPro',
          'par2': '8',
          'par8': '1575',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '19000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6X',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/df2d63b0a3eb742cc3d2c1b255bb3261/37585d7b247cfba52f5afd018647e578f28c2e27430df1e0240a5267ae0a1ec4.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'KFA2 Geforce RTX 3090 Ti X 3FAN BLACK [39IXM5MD6HEK] [PCI-E, 24 ГБ GDDR6X, 384 бит, DisplayPort x3, HDMI, GPU 1560 МГц]',
        'price': '110999',
        'link': 'https://www.dns-shop.ru/product/ce2aba59bc75ed20/videokarta-kfa2-geforce-rtx-3090-ti-x-3fan-black-39ixm5md6hek/',
        'cpu': {
          'par1': 'KFA2 Geforce RTX 3090 Ti X 3FAN BLACK',
          'par2': '24',
          'par8': '1560',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '21000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6X',
          'РазрядностьШиныПамяти': '384'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/ddf2d9718c173ed79edc40785e6d560b/563cae4694ea54172ecacf6dcf95d7800e88a7a20f14f200c78accaad8189a52.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'GIGABYTE GeForce RTX 3090 TI GAMING [GV-N309TGAMING-24GD]',
        'price': '99999',
        'link': 'https://www.dns-shop.ru/product/148e9a607da6ed20/videokarta-gigabyte-geforce-rtx-3090-ti-gaming-gv-n309tgaming-24gd/',
        'cpu': {
          'par1': 'GIGABYTE GeForce RTX 3090 TI GAMING',
          'par2': '24',
          'par8': '1560',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '21000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6X',
          'РазрядностьШиныПамяти': '384'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/7fae6c3809dd01e3c767739da57b415f/427b0bd2ca9a1c3609217aab6353ff9f6868da6bd505c7f72c3bad8286b0951d.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'PowerColor AMD Radeon RX 6600 Fighter [AXRX 6600 8GBD6-3DH] [PCI-E 4.0, 8 ГБ GDDR6, 128 бит, DisplayPort x3, HDMI, GPU 1626 МГц]',
        'price': '25999',
        'link': 'https://www.dns-shop.ru/product/7c767bd1144bed20/videokarta-powercolor-amd-radeon-rx-6600-fighter-axrx-6600-8gbd6-3dh/',
        'cpu': {
          'par1': 'PowerColor AMD Radeon RX 6600 Fighter',
          'par2': '8',
          'par8': '1626',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '7',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/72c489b6f0bef79a18dec444f203d7a3/3ef580a04cef82a54b66b2fadd13f4844f802e3b1d70ce1add53bb34300331d9.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'MSI GeForce RTX 3050 VENTUS 2X OC [RTX 3050 VENTUS 2X 8G OC] [PCI-E 4.0, 8 ГБ GDDR6, 128 бит, DisplayPort x3, HDMI, GPU 1552 МГц]',
        'price': '28299',
        'link': 'https://www.dns-shop.ru/product/b3f658c78b04ed20/videokarta-msi-geforce-rtx-3050-ventus-2x-oc-rtx-3050-ventus-2x-8g-oc/',
        'cpu': {
          'par1': 'MSI GeForce RTX 3050 VENTUS 2X OC',
          'par2': '8',
          'par8': '1552',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '14000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '128'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/80b3c32975a92a2bc52a6f88225e4f40/9f4dc71e563424ef952f3cc72252d5ba54d4b8ad50e8a141b939cec5712aa652.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'GIGABYTE GeForce RTX 3070 Ti AORUS MASTER [GV-N307TAORUS M-8GD] [PCI-E 4.0, 8 ГБ GDDR6X, 256 бит, DisplayPort x3, HDMI x3, GPU 1875 МГц]',
        'price': '63999',
        'link': 'https://www.dns-shop.ru/product/d00d5ac5b4852eb1/videokarta-gigabyte-geforce-rtx-3070-ti-aorus-master-gv-n307taorus-m-8gd/',
        'cpu': {
          'par1': 'GIGABYTE GeForce RTX 3070 Ti AORUS MASTER',
          'par2': '8',
          'par8': '1875',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '19000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6X',
          'РазрядностьШиныПамяти': '256'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/1617d686c51bdf0cec9727c8253114c5/2569a792e2050f8bb77ee97c53a9e88a0b209aadfba75881de7cfa2260db8cd8.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'MSI GeForce RTX 3060 VENTUS 2X OC (LHR) [RTX 3060 VENTUS 2X 12G OC] [PCI-E 4.0, 12 ГБ GDDR6, 192 бит, DisplayPort x3, HDMI, GPU 1320 МГц]',
        'price': '36999',
        'link': 'https://www.dns-shop.ru/product/55cc9b9165b71b80/videokarta-msi-geforce-rtx-3060-ventus-2x-oc-lhr-rtx-3060-ventus-2x-12g-oc/',
        'cpu': {
          'par1': 'MSI GeForce RTX 3060 VENTUS 2X OC (LHR)',
          'par2': '12',
          'par8': '1320',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '15000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/88ba6be8522a161808f4229215278720/fc564f8c7d94ad9491ecc65804ca366f019a2413bf5ce145dc4b0ca0141d4de9.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Видеокарта',
        'name': 'MSI GeForce RTX 3060 GAMING X (LHR) [RTX 3060 GAMING X 12G] [PCI-E 4.0, 12 ГБ GDDR6, 192 бит, DisplayPort x3, HDMI, GPU 1320 МГц]',
        'price': '42999',
        'link': 'https://www.dns-shop.ru/product/3065430f65b81b80/videokarta-msi-geforce-rtx-3060-gaming-x-lhr-rtx-3060-gaming-x-12g/',
        'cpu': {
          'par1': 'MSI GeForce RTX 3060 GAMING X (LHR)',
          'par2': '12',
          'par8': '1320',
          'par3': 'PCI-E 4.0',
          'ЧастотаПамяти': '15000',
          'Техпроцесс': '8',
          'ТипПамяти': 'GDDR6',
          'РазрядностьШиныПамяти': '192'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/390b10feb9122dd989f564650e37f65c/cf91df844aeb7602d3aa468957cba9adde9ae1e63634a468c67cda8088f628e7.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'AMD Ryzen 5 5600X OEM [AM4, 6 x 3.7 ГГц, L2 - 3 МБ, L3 - 32 МБ, 2хDDR4-3200 МГц, TDP 65 Вт]',
        'price': '14299',
        'link': 'https://www.dns-shop.ru/product/3239ebce09e93332/processor-amd-ryzen-5-5600x-oem/',
        'cpu': {
          'par1': 'AMD Vermeer',
          'par2': '3.7',
          'par3': 'AM4',
          'par4': '12',
          'par5': '65',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': 'TSMC 7FF',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/5296b3df36b3381db456e085a92cebb5/cca2b331b0947fe2973ee287baea67acb2f568793792d5fe6c2451239a7a9ea0.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'AMD Ryzen 5 3600 OEM [AM4, 6 x 3.6 ГГц, L2 - 3 МБ, L3 - 32 МБ, 2хDDR4-3200 МГц, TDP 65 Вт]',
        'price': '8399',
        'link': 'https://www.dns-shop.ru/product/b9c6465190d21b80/processor-amd-ryzen-5-3600-oem/',
        'cpu': {
          'par1': 'AMD Matisse',
          'par2': '3.6',
          'par3': 'AM4',
          'par4': '12',
          'par5': '65',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': 'TSMC 7FF',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/6e55c08c071d9744dba9a9582eafd812/fc1ee4a47dc4a1740799e996bf0d478f8908764c5f55f176f6b0bc0ca5f5eef2.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'Intel Core i5-12400F OEM [LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2хDDR4, DDR5-4800 МГц, TDP 117 Вт]',
        'price': '12499',
        'link': 'https://www.dns-shop.ru/product/9ccc15c74e6eed20/processor-intel-core-i5-12400f-oem/',
        'cpu': {
          'par1': 'Intel Alder Lake-S',
          'par2': '2.5',
          'par3': 'LGA 1700',
          'par4': '12',
          'par5': '117',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': 'Intel 7',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '4800'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/b6e3741430aca5128d5c862eb89d8fb7/772b65ea87280444134805565dc4ae9848336f1c551d50dac9bdc48520e3e6b9.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'Intel Core i5-11400F OEM [LGA 1200, 6 x 2.6 ГГц, L2 - 3 МБ, L3 - 12 МБ, 2хDDR4-3200 МГц, TDP 65 Вт]',
        'price': '12499',
        'link': 'https://www.dns-shop.ru/product/458b92646c303332/processor-intel-core-i5-11400f-oem/',
        'cpu': {
          'par1': 'Intel Rocket Lake-S',
          'par2': '2.6',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/3a47de6ca2b387c6ee0fbcf16ebf8013/ada8ee183c6e0aa841bfd877d0e04aac59793c60ce4b95ff78860a95d051eb0b.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'Intel Core i5-11400 OEM [LGA 1200, 6 x 2.6 ГГц, L2 - 3 МБ, L3 - 12 МБ, 2хDDR4-3200 МГц, Intel UHD Graphics 730, TDP 65 Вт]',
        'price': '13299',
        'link': 'https://www.dns-shop.ru/product/a4396c106c2f3332/processor-intel-core-i5-11400-oem/',
        'cpu': {
          'par1': 'Intel Rocket Lake-S',
          'par2': '2.6',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '1300',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 730',
          'ЧастотаПамяти': '3200'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/0f40344f7ed51137091451d8528768f9/b9a854def9a93f85bcd49da0a731d930c58744a32cef1d27ac424d0c15c5e5b5.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'AMD Ryzen 7 5800X OEM [AM4, 8 x 3.8 ГГц, L2 - 4 МБ, L3 - 32 МБ, 2хDDR4-3200 МГц, TDP 105 Вт]',
        'price': '21999',
        'link': 'https://www.dns-shop.ru/product/bfb6376209e83332/processor-amd-ryzen-7-5800x-oem/',
        'cpu': {
          'par1': 'AMD Vermeer',
          'par2': '3.8',
          'par3': 'AM4',
          'par4': '16',
          'par5': '105',
          'КоличествоЯдер': '8',
          'КоличествоКаналов': '2',
          'Техпроцесс': 'TSMC 7FF',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/a0c8b2dbb903f8652c372f15ab7919bb/72ead893eae419ae31fe09408ea825bc41a59c242322f1d0952a8e58efef7fb9.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'AMD Ryzen 5 5600X BOX [AM4, 6 x 3.7 ГГц, L2 - 3 МБ, L3 - 32 МБ, 2хDDR4-3200 МГц, TDP 65 Вт, кулер]',
        'price': '17799',
        'link': 'https://www.dns-shop.ru/product/01ffb0a109e93332/processor-amd-ryzen-5-5600x-box/',
        'cpu': {
          'par1': 'AMD Vermeer',
          'par2': '3.7',
          'par3': 'AM4',
          'par4': '12',
          'par5': '65',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': 'TSMC 7FF',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/57624bfb401a6e87a9649c9d9ff459d1/1df080ce2ba9939556bea15d1ba11cd384a90caa033715539a68a52569d373b6.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'AMD Ryzen 5 5600G OEM [AM4, 6 x 3.9 ГГц, L2 - 3 МБ, L3 - 16 МБ, 2хDDR4-3200 МГц, AMD Radeon Vega 7, TDP 65 Вт]',
        'price': '11499',
        'link': 'https://www.dns-shop.ru/product/4886d41bbea92eb1/processor-amd-ryzen-5-5600g-oem/',
        'cpu': {
          'par1': 'AMD Cezanne',
          'par2': '3.9',
          'par3': 'AM4',
          'par4': '12',
          'par5': '65',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': 'TSMC 7FF',
          'ЧастотаГрафическогоЯдра': '1900',
          'МодельГрафическогоЯдра': 'AMD Radeon Vega 7',
          'ЧастотаПамяти': '3200'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/b10fe17e8379694983c2565c5ebe8134/00ce42869b8770392607e1fe95c77df6013032a39769fb9e290622852ed545f4.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'Intel Core i3-10100F OEM [LGA 1200, 4 x 3.6 ГГц, L2 - 1 МБ, L3 - 6 МБ, 2хDDR4-2666 МГц, TDP 65 Вт]',
        'price': '6699',
        'link': 'https://www.dns-shop.ru/product/5371fd83f32a3332/processor-intel-core-i3-10100f-oem/',
        'cpu': {
          'par1': 'Intel Comet Lake-S',
          'par2': '3.6',
          'par3': 'LGA 1200',
          'par4': '8',
          'par5': '65',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '2666'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/f447d774798a2b2894a9ccacd863c860/4419b125de2be22932629c4b842d9d397be6e9e995fb379db2983fe021bfec04.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'Intel Core i5-10400F OEM [LGA 1200, 6 x 2.9 ГГц, L2 - 1.5 МБ, L3 - 12 МБ, 2хDDR4-2666 МГц, TDP 65 Вт]',
        'price': '10999',
        'link': 'https://www.dns-shop.ru/product/b60145356a693332/processor-intel-core-i5-10400f-oem/',
        'cpu': {
          'par1': 'Intel Comet Lake-S',
          'par2': '2.9',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '2666'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/7d23e73f88c43892ad26d704d40fe59b/e14519811e82129f98e024d17552893ca1471b3c1bd68fb49705aed6b94af052.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'AMD Ryzen 9 5900X OEM [AM4, 12 x 3.7 ГГц, L2 - 6 МБ, L3 - 64 МБ, 2хDDR4-3200 МГц, TDP 105 Вт]',
        'price': '28999',
        'link': 'https://www.dns-shop.ru/product/278adb2a09e83332/processor-amd-ryzen-9-5900x-oem/',
        'cpu': {
          'par1': 'AMD Vermeer',
          'par2': '3.7',
          'par3': 'AM4',
          'par4': '24',
          'par5': '105',
          'КоличествоЯдер': '12',
          'КоличествоКаналов': '2',
          'Техпроцесс': 'TSMC 7FF',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/6dc0153ea30e25626d7018f246e5e14d/1c85261012bc0cb4dd69ed330c00d5886eed40fb63716d0c16f134d9d9789df2.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'Intel Core i3-10100 OEM [LGA 1200, 4 x 3.6 ГГц, L2 - 1 МБ, L3 - 6 МБ, 2хDDR4-2666 МГц, Intel UHD Graphics 630, TDP 65 Вт]',
        'price': '7799',
        'link': 'https://www.dns-shop.ru/product/a66091f96a703332/processor-intel-core-i3-10100-oem/',
        'cpu': {
          'par1': 'Intel Comet Lake-S',
          'par2': '3.6',
          'par3': 'LGA 1200',
          'par4': '8',
          'par5': '65',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '1100',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 630',
          'ЧастотаПамяти': '2666'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/406f625d876109751d126cb5dd114338/c05040f3acd015003f9ce5409de4b901235be8d8e7bd74c9bc2bbdb0206a5f6a.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'Intel Core i5-11400F BOX [LGA 1200, 6 x 2.6 ГГц, L2 - 3 МБ, L3 - 12 МБ, 2хDDR4-3200 МГц, TDP 65 Вт, кулер]',
        'price': '13999',
        'link': 'https://www.dns-shop.ru/product/00c1301d6c303332/processor-intel-core-i5-11400f-box/',
        'cpu': {
          'par1': 'Intel Rocket Lake-S',
          'par2': '2.6',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/eac85a2dfeda22e85a477005d4d476e0/189e8fc8633c97b02646d6b7d402b13b0db20319330382aa311e9c0b915bb147.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'AMD Ryzen 7 3700X OEM [AM4, 8 x 3.6 ГГц, L2 - 4 МБ, L3 - 32 МБ, 2хDDR4-3200 МГц, TDP 65 Вт]',
        'price': '15299',
        'link': 'https://www.dns-shop.ru/product/4d664a0d90d61b80/processor-amd-ryzen-7-3700x-oem/',
        'cpu': {
          'par1': 'AMD Matisse',
          'par2': '3.6',
          'par3': 'AM4',
          'par4': '16',
          'par5': '65',
          'КоличествоЯдер': '8',
          'КоличествоКаналов': '2',
          'Техпроцесс': 'TSMC 7FF',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/6bd8d7c008ce902720e54ab28ba57dc4/d368e393397cec2b52d1307e42739ea91d8e1a8f2bab4b6d77cdadc271466e68.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'Intel Core i5-10400F BOX [LGA 1200, 6 x 2.9 ГГц, L2 - 1.5 МБ, L3 - 12 МБ, 2хDDR4-2666 МГц, TDP 65 Вт, кулер]',
        'price': '10799',
        'link': 'https://www.dns-shop.ru/product/e9c733de6a693332/processor-intel-core-i5-10400f-box/',
        'cpu': {
          'par1': 'Intel Comet Lake-S',
          'par2': '2.9',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '2666'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/99a855e6a1f777f59d470eb010582b4b/73808fa64b5271bcfeabaf6efa81d861af3ddafaabbceb5c244b824588c01365.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'AMD Ryzen 9 5950X OEM [AM4, 16 x 3.4 ГГц, L2 - 8 МБ, L3 - 64 МБ, 2хDDR4-3200 МГц, TDP 105 Вт]',
        'price': '37799',
        'link': 'https://www.dns-shop.ru/product/1f9f21fd09e73332/processor-amd-ryzen-9-5950x-oem/',
        'cpu': {
          'par1': 'AMD Vermeer',
          'par2': '3.4',
          'par3': 'AM4',
          'par4': '32',
          'par5': '105',
          'КоличествоЯдер': '16',
          'КоличествоКаналов': '2',
          'Техпроцесс': 'TSMC 7FF',
          'ЧастотаГрафическогоЯдра': '0',
          'МодельГрафическогоЯдра': 'Отсутствует',
          'ЧастотаПамяти': '3200'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/28c87b3bb974183829bff71d1bc56973/0476e557c8f660fed59e191968a939b02313a3b3f2d91ea4eccf6eecd31a8f08.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'Intel Core i5-10400 OEM [LGA 1200, 6 x 2.9 ГГц, L2 - 1.5 МБ, L3 - 12 МБ, 2хDDR4-2666 МГц, Intel UHD Graphics 630, TDP 65 Вт]',
        'price': '10999',
        'link': 'https://www.dns-shop.ru/product/c1ff7d286a6d3332/processor-intel-core-i5-10400-oem/',
        'cpu': {
          'par1': 'Intel Comet Lake-S',
          'par2': '2.9',
          'par3': 'LGA 1200',
          'par4': '12',
          'par5': '65',
          'КоличествоЯдер': '6',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '1100',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 630',
          'ЧастотаПамяти': '2666'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/f6cceee6003f6e79bf94497350bd2f18/420e31778723a1ffdfb6d65ec297a385983856fae48ed3808bee3dd03d25a7cd.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Процессор',
        'name': 'Intel Core i3-10105 OEM [LGA 1200, 4 x 3.7 ГГц, L2 - 1 МБ, L3 - 6 МБ, 2хDDR4-2666 МГц, Intel UHD Graphics 630, TDP 65 Вт]',
        'price': '8299',
        'link': 'https://www.dns-shop.ru/product/f9b436a76c163332/processor-intel-core-i3-10105-oem/',
        'cpu': {
          'par1': 'Intel Comet Lake-S',
          'par2': '3.7',
          'par3': 'LGA 1200',
          'par4': '8',
          'par5': '65',
          'КоличествоЯдер': '4',
          'КоличествоКаналов': '2',
          'Техпроцесс': '14',
          'ЧастотаГрафическогоЯдра': '1100',
          'МодельГрафическогоЯдра': 'Intel UHD Graphics 630',
          'ЧастотаПамяти': '2666'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/2c10b31fe70907b64aaa82812027f216/1802804e94edc606293eb2a64a7e578573f3f04f109cf72a0734a3a7f954cf93.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'Kingston FURY Beast Black [KF432C16BBK2/16] 16 ГБ [DDR4, 8 ГБx2 шт, 3200 МГц, 16-18-18]',
        'price': '5299',
        'link': 'https://www.dns-shop.ru/product/e8acb46cdae8d763/operativnaa-pamat-kingston-fury-beast-black-kf432c16bbk216-16-gb/',
        'cpu': {
          'par1': '16',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/225cc518fc6a53fbc269d803af1a8de3/7b56460c7c2042f71818b8d95f13d8713fa08ac88a38fa3c11011d56c8142fad.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'AMD Radeon R9 Gamer Series [R9S416G3206U2K] 16 ГБ [DDR4, 8 ГБx2 шт, 3200 МГц, 16-18-18]',
        'price': '3699',
        'link': 'https://www.dns-shop.ru/product/d0d4adf59fcd3332/operativnaa-pamat-amd-radeon-r9-gamer-series-r9s416g3206u2k-16-gb/',
        'cpu': {
          'par1': '16',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/df67c2e3dbc9c9108ad3d3e9ec96b6bc/5d4e29f2d2b0a38f8f74e9c957cf6f77b37c57bedf5e361b3de0b910783fcdd1.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'A-Data XPG GAMMIX D20 [AX4U32008G16A-DCBK20] 16 ГБ [DDR4, 8 ГБx2 шт, 3200 МГц, 16-20-20]',
        'price': '4399',
        'link': 'https://www.dns-shop.ru/product/f5054e5aea99d763/operativnaa-pamat-a-data-xpg-gammix-d20-ax4u32008g16a-dcbk20-16-gb/',
        'cpu': {
          'par1': '16',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/aac1685f04aaa64d88b4aa6053d55742/b90836eb633948dcdb7e6fff41e88be4ecbe47d4900c7b89341773d31aced3f5.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'AMD Radeon R9 Gamer Series [R9S432G3206U2K] 32 ГБ [DDR4, 16 ГБx2 шт, 3200 МГц, 16-18-18-39]',
        'price': '6799',
        'link': 'https://www.dns-shop.ru/product/20bc2abeb4553332/operativnaa-pamat-amd-radeon-r9-gamer-series-r9s432g3206u2k-32-gb/',
        'cpu': {
          'par1': '32',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '16'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/7066ce6de0e7bcc7effabd1b685185cb/7f7e164bbf8e0219d022ae2decda46a626fe3b633951335c053bf9fee2c63ed5.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'A-Data XPG SPECTRIX D41 RGB [AX4U32008G16A-DT41] 16 ГБ [DDR4, 8 ГБx2 шт, 3200 МГц, 16-20-20]',
        'price': '4699',
        'link': 'https://www.dns-shop.ru/product/6e58bffa7bf03332/operativnaa-pamat-a-data-xpg-spectrix-d41-rgb-ax4u32008g16a-dt41-16-gb/',
        'cpu': {
          'par1': '16',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/600669c5bb2390e00a4bd9cc20dd7553/c632d3cfc1d9e4afbf89949a90500765ffba7b12e3f80711532ba2e13d5a76fd.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'AMD Radeon R7 Performance Series [R748G2606U2S-U] 8 ГБ [DDR4, 8 ГБx1 шт, 2666 МГц, 16-18-18-35]',
        'price': '1699',
        'link': 'https://www.dns-shop.ru/product/86efe32779d23330/operativnaa-pamat-amd-radeon-r7-performance-series-r748g2606u2s-u-8-gb/',
        'cpu': {
          'par1': '8',
          'par2': '2666',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/b93538384be3b32a852e0068fabcd447/60787c3817b1f1771eb450d26e7a7f339a28043f33ca2514cdb440c9f4290cfb.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'A-Data XPG Gammix D10 [AX4U320038G16A-DB10] 16 ГБ [DDR4, 8 ГБx2 шт, 3200 МГц, 16-20-20]',
        'price': '4599',
        'link': 'https://www.dns-shop.ru/product/27908b3fb6ce2eb1/operativnaa-pamat-a-data-xpg-gammix-d10-ax4u320038g16a-db10-16-gb/',
        'cpu': {
          'par1': '16',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/363f8ab43fcd2d432836b356e0375cb8/f13746e1391d09dea80140038891c774f01b65f12b286083478b6d483d0ad213.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'Kingston FURY Beast Black [KF432C16BBK2/64] 64 ГБ [DDR4, 32 ГБx2 шт, 3200 МГц, 16-20-20]',
        'price': '16999',
        'link': 'https://www.dns-shop.ru/product/34e4ae76daead763/operativnaa-pamat-kingston-fury-beast-black-kf432c16bbk264-64-gb/',
        'cpu': {
          'par1': '64',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '32'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/f5a442413abdefbd717bdabf389e8e28/888a559040f7157e98f417fa5797381552bed96b4d57a68790f2366d70973a45.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'Patriot Viper Steel [PVS416G320C6K] 16 ГБ [DDR4, 8 ГБx2 шт, 3200 МГц, 16-20-20-40]',
        'price': '4499',
        'link': 'https://www.dns-shop.ru/product/5762c1c346fc1b80/operativnaa-pamat-patriot-viper-steel-pvs416g320c6k-16-gb/',
        'cpu': {
          'par1': '16',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/bd5eed5895f354f745842c70e51e7648/07d1e5633d136d30d85922e291fdf61ac5772e3e4b376034020f485d7ebc30a9.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'AMD Radeon R5 Entertainment Series [R538G1601U2S-U] 8 ГБ [DDR3, 8 ГБx1 шт, 1600 МГц, 11-11-11-28]',
        'price': '1599',
        'link': 'https://www.dns-shop.ru/product/ff7f7a38ad7f3330/operativnaa-pamat-amd-radeon-r5-entertainment-series-r538g1601u2s-u-8-gb/',
        'cpu': {
          'par1': '8',
          'par2': '1600',
          'par3': '11',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR3',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/08da1f956cc346cdce4effa51a8ea79a/eca85cbbf0c5a21a9414f973036d9266dba591cc32e4a70e0e8c4816ff711094.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'AMD Radeon R7 Performance Series [R7S416G2606U2K] 16 ГБ [DDR4, 8 ГБx2 шт, 2666 МГц, 16-18-18-35]',
        'price': '3699',
        'link': 'https://www.dns-shop.ru/product/5cd388f101be3332/operativnaa-pamat-amd-radeon-r7-performance-series-r7s416g2606u2k-16-gb/',
        'cpu': {
          'par1': '16',
          'par2': '2666',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/ce2101b227af741e10b275173c195f00/6d03f26eb506565793598df172d5227088abd999f4c1b9d323384752355e5853.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'Patriot Viper 4 Blackout [PVB416G320C6K] 16 ГБ [DDR4, 8 ГБx2 шт, 3200 МГц, 16-20-20-40]',
        'price': '4499',
        'link': 'https://www.dns-shop.ru/product/79a07ccd58643332/operativnaa-pamat-patriot-viper-4-blackout-pvb416g320c6k-16-gb/',
        'cpu': {
          'par1': '16',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/a0781894702123f468948dea63e4f721/b28c4f9c185740263d8fc3bc7191d9e94549fff4e15a41cf4bcfb76f9282bff8.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'AMD Radeon R5 Entertainment Series [R5S316G1601U2K] 16 ГБ [DDR3, 8 ГБx2 шт, 1600 МГц, 11-11-11-28]',
        'price': '3499',
        'link': 'https://www.dns-shop.ru/product/0bb9689f819d3332/operativnaa-pamat-amd-radeon-r5-entertainment-series-r5s316g1601u2k-16-gb/',
        'cpu': {
          'par1': '16',
          'par2': '1600',
          'par3': '11',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR3',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/960c7c3e24fe3947a596e7b572873252/4d32caa566c33fe701b008ad3a3cde06f59b646058b6c4ba023ecc0f958eec0e.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'A-Data XPG Gammix D10 [AX4U320016G16A-DB10] 32 ГБ [DDR4, 16 ГБx2 шт, 3200 МГц, 16-20-20]',
        'price': '7499',
        'link': 'https://www.dns-shop.ru/product/a28cf324b6d32eb1/operativnaa-pamat-a-data-xpg-gammix-d10-ax4u320016g16a-db10-32-gb/',
        'cpu': {
          'par1': '32',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '16'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/89220169dc5b4ce2974791cbcd023e70/298b9616702aebc8f7ab7458b875473da788ac698e9012c6175f2806105c396e.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'Kingston FURY Beast Black RGB [KF432C16BBAK2/32] 32 ГБ [DDR4, 16 ГБx2 шт, 3200 МГц, 16-20-20]',
        'price': '9299',
        'link': 'https://www.dns-shop.ru/product/2454a10bdaf6d763/operativnaa-pamat-kingston-fury-beast-black-rgb-kf432c16bbak232-32-gb/',
        'cpu': {
          'par1': '32',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '16'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/5edf1f928edc78ba12e41f674b9388d8/ca51de93c9dbd97418c28fa94e5c0f5e1f5df0f8e107588f7d2d5ca8b2991637.png'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'Kingston FURY Beast Black [KF432C16BBK2/16] 16 ГБ [DDR4, 8 ГБx2 шт, 3200 МГц, 16-18-18]',
        'price': '5299',
        'link': 'https://www.dns-shop.ru/product/bb6fb3a7fad5ed20/operativnaa-pamat-kingston-fury-beast-black-kf432c16bbk216-16-gb/',
        'cpu': {
          'par1': '16',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '2',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/225cc518fc6a53fbc269d803af1a8de3/7b56460c7c2042f71818b8d95f13d8713fa08ac88a38fa3c11011d56c8142fad.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Оперативная память',
        'name': 'G.Skill AEGIS [F4-3200C16S-8GIS] 8 ГБ [DDR4, 8 ГБx1 шт, 3200 МГц, 16-18-18-38]',
        'price': '2099',
        'link': 'https://www.dns-shop.ru/product/01a071e6c6aaed20/operativnaa-pamat-gskill-aegis-f4-3200c16s-8gis-8-gb/',
        'cpu': {
          'par1': '8',
          'par2': '3200',
          'par3': '16',
          'par4': 'none',
          'par5': 'DIMM',
          'ТипПамяти': 'DDR4',
          'КоличествоМодулей': '1',
          'ОбъемМодуля': '8'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/4c994d362bf6dcb9c73e3f52d4849582/93c7b9dd3dd901c9e2e51937960c4b47a0307185d481577038f5ec1dee47c96c.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'GIGABYTE B550 AORUS ELITE V2 [AM4, AMD B550, 4xDDR4-3200 МГц, 3xPCI-Ex16, 2xM.2, Standard-ATX]',
        'price': '10999',
        'link': 'https://www.dns-shop.ru/product/556eadf1e5cf3332/materinskaa-plata-gigabyte-b550-aorus-elite-v2/',
        'cpu': {
          'Сокет': 'AM4',
          'Чипсет': 'AMD B550',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '1',
          'ФормФактор': 'Standard-ATX',
          'КоличествоСлотовПамяти': '4'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/a94091d13e1c46b264e46890eebb71cc/cbeada593290a99b56177e3c496c9ae68eabaa00ef47178f7e303a3ec398b647.png'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'GIGABYTE H410M H V3 [LGA 1200, Intel H510, 2xDDR4-2933 МГц, 1xPCI-Ex16, 1xM.2, Micro-ATX]',
        'price': '4499',
        'link': 'https://www.dns-shop.ru/product/964c1575d97a2ff2/materinskaa-plata-gigabyte-h410m-h-v3/',
        'cpu': {
          'Сокет': 'LGA 1200',
          'Чипсет': 'Intel H510',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '2933',
          'МаксимальныйОбъемПамяти': '64',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '1',
          'ФормФактор': 'Micro-ATX',
          'КоличествоСлотовПамяти': '2'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/e8fe620de053a8c6a318d781f66923b6/22ef8297914703c94d7180f4556d257d8dbbcff8a5ae663c0e5ac5488c63f9bb.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'GIGABYTE B660M DS3H DDR4 [LGA 1700, Intel B660, 4xDDR4-3200 МГц, 1xPCI-Ex16, 2xM.2, Micro-ATX]',
        'price': '9999',
        'link': 'https://www.dns-shop.ru/product/45bc6e20563ded20/materinskaa-plata-gigabyte-b660m-ds3h-ddr4/',
        'cpu': {
          'Сокет': 'LGA 1700',
          'Чипсет': 'Intel B660',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '2',
          'ФормФактор': 'Micro-ATX',
          'КоличествоСлотовПамяти': '4'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/a15306e4398ad12621d2fbf9f0879db5/e422e69f2d6e60b36efab268e02087030dc8469baf23ff3382d2f119879ba7c2.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'MSI MAG B550 TOMAHAWK [AM4, AMD B550, 4xDDR4-3200 МГц, 2xPCI-Ex16, 2xM.2, Standard-ATX]',
        'price': '11999',
        'link': 'https://www.dns-shop.ru/product/b9a4575dafa61b80/materinskaa-plata-msi-mag-b550-tomahawk/',
        'cpu': {
          'Сокет': 'AM4',
          'Чипсет': 'AMD B550',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '2',
          'ФормФактор': 'Standard-ATX',
          'КоличествоСлотовПамяти': '4'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/cac4c5e2f5b0d3b5e6c2ca690f5a50f7/907bf69866a5592d2a92732fef8e99e4f91d83c3c763c13351dba3b29cfaa5e6.png'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'GIGABYTE B560M DS3H V2 [LGA 1200, Intel B560, 4xDDR4-3200 МГц, 1xPCI-Ex16, 2xM.2, Micro-ATX]',
        'price': '6999',
        'link': 'https://www.dns-shop.ru/product/d69943561a91ed20/materinskaa-plata-gigabyte-b560m-ds3h-v2/',
        'cpu': {
          'Сокет': 'LGA 1200',
          'Чипсет': 'Intel B560',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '2',
          'ФормФактор': 'Micro-ATX',
          'КоличествоСлотовПамяти': '4'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/549523237efc2e447d4bc9c87701b886/cd5933f9164f1a6a9c361a686d49a20ac72d1b44eaaa7fd2488dc8eac6e27b3e.png'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'GIGABYTE B660M GAMING DDR4 [LGA 1700, Intel B660, 2xDDR4-3200 МГц, 1xPCI-Ex16, 2xM.2, Micro-ATX]',
        'price': '8999',
        'link': 'https://www.dns-shop.ru/product/7f7f47575984ed20/materinskaa-plata-gigabyte-b660m-gaming-ddr4/',
        'cpu': {
          'Сокет': 'LGA 1700',
          'Чипсет': 'Intel B660',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '64',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '1',
          'ФормФактор': 'Micro-ATX',
          'КоличествоСлотовПамяти': '2'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/c4bc0b893deabd174fa14ec2d5c49acf/67a4dc1a710756d432b0f1b0a2685d849c9bca442696c35077616aa483df731a.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'GIGABYTE B560 HD3 [LGA 1200, Intel B560, 4xDDR4-3200 МГц, 2xPCI-Ex16, 2xM.2, Standard-ATX]',
        'price': '6999',
        'link': 'https://www.dns-shop.ru/product/f1ec3d7785402ff0/materinskaa-plata-gigabyte-b560-hd3/',
        'cpu': {
          'Сокет': 'LGA 1200',
          'Чипсет': 'Intel B560',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '2',
          'ФормФактор': 'Standard-ATX',
          'КоличествоСлотовПамяти': '4'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/afb89d15ce33cc7254ba440527e6a51d/ed8eb5c68c420c05dcb748861685127396e16b9cb4dd40fc5c28af9b801e59fa.png'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'MSI H510M-A PRO [LGA 1200, Intel H510, 2xDDR4-3200 МГц, 1xPCI-Ex16, 1xM.2, Micro-ATX]',
        'price': '4999',
        'link': 'https://www.dns-shop.ru/product/eb43199065e43332/materinskaa-plata-msi-h510m-a-pro/',
        'cpu': {
          'Сокет': 'LGA 1200',
          'Чипсет': 'Intel H510',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '64',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '1',
          'ФормФактор': 'Micro-ATX',
          'КоличествоСлотовПамяти': '2'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/86681543f545628aed033c1ce1120dbb/e2742c55b1b78647b00c0391864c6d410336e88e7e40f6d28146b836ca7d15e7.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'GIGABYTE B660 GAMING X DDR4 [LGA 1700, Intel B660, 4xDDR4-3200 МГц, 3xPCI-Ex16, 3xM.2, Standard-ATX]',
        'price': '12999',
        'link': 'https://www.dns-shop.ru/product/5147276b736ded20/materinskaa-plata-gigabyte-b660-gaming-x-ddr4/',
        'cpu': {
          'Сокет': 'LGA 1700',
          'Чипсет': 'Intel B660',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '0',
          'ФормФактор': 'Standard-ATX',
          'КоличествоСлотовПамяти': '4'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/c57ef0c8888571dcdc2afc3195d65405/6f6485bd0339c34dbd9a6e9e1482f0dd1dfcd05cedeff5987712a7203d3878af.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'GIGABYTE B550 GAMING X V2 [AM4, AMD B550, 4xDDR4-3200 МГц, 2xPCI-Ex16, 2xM.2, Standard-ATX]',
        'price': '9999',
        'link': 'https://www.dns-shop.ru/product/35162b08e5d63332/materinskaa-plata-gigabyte-b550-gaming-x-v2/',
        'cpu': {
          'Сокет': 'AM4',
          'Чипсет': 'AMD B550',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '3',
          'ФормФактор': 'Standard-ATX',
          'КоличествоСлотовПамяти': '4'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/24657415f2778c51e0f0cd207c6ff62a/65db425d4348cd10c2ff479dc73b5484e5cbed7e48af1bd54e2271b42feb49e1.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'GIGABYTE B560M AORUS ELITE [LGA 1200, Intel B560, 4xDDR4-3200 МГц, 2xPCI-Ex16, 2xM.2, Micro-ATX]',
        'price': '8999',
        'link': 'https://www.dns-shop.ru/product/155a276166013332/materinskaa-plata-gigabyte-b560m-aorus-elite/',
        'cpu': {
          'Сокет': 'LGA 1200',
          'Чипсет': 'Intel B560',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '1',
          'ФормФактор': 'Micro-ATX',
          'КоличествоСлотовПамяти': '4'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/d282239d265d1f242581218c211f1025/2e8b557d44d5404e81f7c9369b92035380aaf84223089668f635e15dbbd8cf8d.jpg'
      }, {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'MSI MPG B550 GAMING PLUS [AM4, AMD B550, 4xDDR4-3200 МГц, 2xPCI-Ex16, 2xM.2, Standard-ATX]',
        'price': '11499',
        'link': 'https://www.dns-shop.ru/product/232aa9f9b9a11b80/materinskaa-plata-msi-mpg-b550-gaming-plus/',
        'cpu': {
          'Сокет': 'AM4',
          'Чипсет': 'AMD B550',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '128',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '2',
          'ФормФактор': 'Standard-ATX',
          'КоличествоСлотовПамяти': '4'
        },
        'image': 'https://c.dns-shop.ru/thumb/st1/fit/500/500/267998bb3eb97620ace63198adfa63fc/489e1dfb774c68ca8c80a1cd66477739765abc0c00722185d2c1178489ffdec3.png'
      },
      // { 'store': 'ДНС', 'type': 'Материнская плата', 'name': 'GIGABYTE B660 DS3H DDR4 [LGA 1700, Intel B660, 4xDDR4-3200 МГц, 5xPCI-Ex16, 2xM.2, Standard-ATX]', 'price': '10999', 'link': 'https://www.dns-shop.ru/product/923700de7770ed20/materinskait/500/500/c98dc19004dbb1556020b6dec524c6cd/aae881eb490416918bf8c67e8da24bbdb8e86cba849477d1d128890ff8d0015f.jpg' },
      {
        'store': 'ДНС',
        'type': 'Материнская плата',
        'name': 'GIGABYTE H510M S2 [LGA 1200, Intel H510, 2xDDR4-3200 МГц, 1xPCI-Ex16, 1xM.2, Micro-ATX]',
        'price': '4499',
        'link': 'https://www.dns-shop.ru/product/524a4522f589c823/materinskaa-plata-gigabyte-h510m-s2/',
        'cpu': {
          'Сокет': 'LGA 1200',
          'Чипсет': 'Intel H510',
          'ТипПамяти': 'DIMM',
          'МаксимальнаяЧастотаПамяти': '3200',
          'МаксимальныйОбъемПамяти': '64',
          'КоличествоКаналовПамяти': '2',
          'КоличествоСлотовPCIE1': '1',
          'ФормФактор': 'Micro-ATX',
          'КоличествоСлотовПамяти': '2'
        },
        'image': 'https://c.dns-shop.ru/thumb/st4/fit/500/500/b3db22bf42f871ab94dd6b43d0908042/0d756402a9ba87ec398598172cb0cda8dbab834546bb76dfbca0fbd329dc10ed.jpg'
      }]
    };
  }
};
/* harmony default export */ var Mixin = (mix);
// CONCATENATED MODULE: ./store/datas.js

const state = () => ({
  datas: [],
  datasWithWeight: [],
  w1: 0.25,
  w2: 0.25,
  w3: 0.25,
  w4: 0.25,
  budget: 100000,
  filtVidName: '',
  filtVidMemory: '',
  filtProcName: ''
});
const mutations = {
  uploaddata(state, data) {
    state.datas = data;
  },
  uploadfiltVidName(state, data) {
    state.filtVidName = data;
  },
  uploadfiltVidMemory(state, data) {
    state.filtVidMemory = data;
  },
  uploadfiltProcName(state, data) {
    state.filtProcName = data;
  },
  uploaddatasWithWeight(state, data) {
    state.datasWithWeight = data;
  },
  uploadCoefficients(state, data) {
    Object.keys(data).forEach(x => {
      if (x === 'w1') {
        state.w1 = data[x];
      }
      if (x === 'w2') {
        state.w2 = data[x];
      }
      if (x === 'w3') {
        state.w3 = data[x];
      }
      if (x === 'w4') {
        state.w4 = data[x];
      }
    });
  },
  uploadBudget(state, data) {
    state.budget = data;
  }
};
const getters = {
  getdatas: state => {
    return state.datas;
  },
  getfiltVidName: state => {
    return state.filtVidName;
  },
  getfiltVidMemory: state => {
    return state.filtVidMemory;
  },
  getfiltProcName: state => {
    return state.filtProcName;
  },
  getdatasWithWeight: state => {
    return state.datasWithWeight;
  },
  getCoefficients: state => {
    return {
      w1: state.w1,
      w2: state.w2,
      w3: state.w3,
      w4: state.w4
    };
  },
  getBudget: state => {
    return state.budget;
  }
};
const actions = {};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@vue/shared");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map