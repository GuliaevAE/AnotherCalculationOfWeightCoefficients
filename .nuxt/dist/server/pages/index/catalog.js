exports.ids = [7,3];
exports.modules = {

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5b35e901", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const mix2 = {
  data: function () {
    return {
      classs: 'transform: translateY(-90px)',
      isOpen: 'Видеокарта',
      isOn: true,
      // w1sub: 0.01,
      // w2sub: 0.01,
      // w3sub: 0.01,
      // w4sub: 0.01,
      page: 0,
      // budget: 1000000,
      help: 'Сайт для подсчёта рейтингов комплектующи* с помощью весовы* коэффициентов и создания лучши* подборок с использование рейтингов. Выполнено в рамка* магистерской работы.'
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (mix2);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight4_vue_vue_type_style_index_0_id_292dc3d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight4_vue_vue_type_style_index_0_id_292dc3d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight4_vue_vue_type_style_index_0_id_292dc3d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight4_vue_vue_type_style_index_0_id_292dc3d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight4_vue_vue_type_style_index_0_id_292dc3d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#rating[data-v-292dc3d0]{font-family:\"CurrentRegular\";font-weight:700;font-size:25px;margin-top:10px}.ranksValues[data-v-292dc3d0]{position:absolute;background:rgba(255,0,0,0);top:0;bottom:0;left:0;right:0;opacity:0}.op1[data-v-292dc3d0]{opacity:1}.op0[data-v-292dc3d0]{opacity:0}.item[data-v-292dc3d0]{width:100%;position:relative;background:#515151;display:flex;flex-direction:column;margin-top:5px;margin-bottom:15px;border-radius:15px;height:-moz-fit-content;height:fit-content;box-sizing:border-box;padding:3px;transition:all .5s;z-index:2;box-shadow:0 -3px #6b6b6b,0 -5px 1px #06ffb4}.item[data-v-292dc3d0]:hover{box-shadow:0 -3px #5c5c5c,0 -5px 7px #06ffb4,0 0 7px #06ffb4}.data[data-v-292dc3d0]{display:flex;background:#27272c;border-radius:12px 12px 15px 15px;z-index:2;width:100%;box-sizing:border-box;padding:10px;justify-content:space-between;box-shadow:inset 0 0 2px #000;transition:all .3s}.data[data-v-292dc3d0]:hover{background:#262d2a;box-shadow:inset 0 0 2px 1px #000,inset 0 0 5px .5px #06ffb4}.nameAndStore[data-v-292dc3d0]{display:flex;flex-direction:column;width:100%}.nameAndStore span[data-v-292dc3d0],.store[data-v-292dc3d0]{transition:all .3s}.store[data-v-292dc3d0]{color:#b8b8b8}.juststore[data-v-292dc3d0]{text-shadow:0 1.5px rgba(6,255,180,0)}.activestore[data-v-292dc3d0]{text-shadow:0 -1.5px #06ffb4;position:relative;top:.3px}@keyframes moveGradient-292dc3d0{50%{background-position:100% 50%}}a[data-v-292dc3d0]{text-decoration:none;transition:transform .3s}.justlink[data-v-292dc3d0]{top:5px}.actionlink[data-v-292dc3d0]{top:10px;text-shadow:0 -3px #5c5c5c,0 -5px red}#link[data-v-292dc3d0]{font-family:\"CurrentRegular\";right:15px;display:block;transition:all .3s;font-weight:1000;font-size:25px;position:absolute}#link[data-v-292dc3d0]:hover{text-shadow:0 -3px #5c5c5c,0 -5px #06ffb4}.divName[data-v-292dc3d0]{flex-wrap:wrap;align-self:center;font-family:\"AktivGroteskCorp\";color:#b9b9b9;font-size:15px}.divName[data-v-292dc3d0],.divOther[data-v-292dc3d0]{width:auto;display:flex}.divOther[data-v-292dc3d0]{flex-direction:column;justify-content:space-between;margin-left:5px;background:#515151;padding:10px 0;border-radius:4px}@keyframes text-292dc3d0{0%{transform:translateX(0)}to{transform:translateX(-50%)}}.st[data-v-292dc3d0]{background:wheat;width:100%;box-sizing:border-box;padding:5px;border-radius:10px;font-family:\"AktivGroteskCorp\";font-weight:700;margin-top:5px}.dns[data-v-292dc3d0]{background:orange;color:#fff;border:2px solid #fff}.citilink[data-v-292dc3d0]{background:#fff;color:#ff7300;border:2px solid #ff7300;font-size:15px}#price[data-v-292dc3d0]{color:#fff;font-family:\"CurrentRegular\";position:absolute;top:0;right:0;font-weight:700;font-size:25px;transition:all .3s}.activeprice[data-v-292dc3d0]{color:#06ffb4}.price.activeprice[data-v-292dc3d0]{top:5px;color:#fff;text-shadow:0 -3px #5c5c5c,0 -5px red}.hov[data-v-292dc3d0]{display:flex;flex-direction:column;transition:all .3s}.hov span[data-v-292dc3d0]:before{content:\"\";display:inline-block;height:10px;width:10px;border:2px solid #06ffb4;border-radius:50%;margin-right:5px}.footer[data-v-292dc3d0]{background:hsla(0,0%,54.1%,0);z-index:1;width:100%;display:flex;justify-content:space-between;border-radius:0 0 15px 15px;position:relative;padding:0 10px}.footer span[data-v-292dc3d0]{transition:all .3s;font-size:15px;color:#fff}.footer.activeprice span[data-v-292dc3d0]{color:#06ffb4}.divOther span[data-v-292dc3d0]{color:#06ffb4;writing-mode:vertical-lr;font-weight:700;font-size:18px}.divOther img[data-v-292dc3d0]{border-radius:5px;height:auto;max-width:90px;position:relative}.rotateZ[data-v-292dc3d0]{transform:rotate(90deg)}.rotateZ img[data-v-292dc3d0]{transform:scale(1.2)}.МГц[data-v-292dc3d0]:after{content:\"МГц\"}.ГГц[data-v-292dc3d0]:after{content:\"ГГц\"}.Гб[data-v-292dc3d0]:after{content:\"Гб\"}.₽[data-v-292dc3d0]:after{content:\"₽\";font-weight:700;font-size:21px}@keyframes animText-292dc3d0{0%{transform:translateX(0)}50%{transform:translateX(-50%)}to{transform:translateX(0)}}.deskr[data-v-292dc3d0]{position:relative;overflow-y:auto;width:100%}.smallheight[data-v-292dc3d0]{height:180px}.deskr[data-v-292dc3d0]::-webkit-scrollbar{width:0}.deskr span[data-v-292dc3d0]{font-size:small;transition:all .3s}.activeText span[data-v-292dc3d0]{color:#fff}item[data-v-292dc3d0]:hover{transform:scale(1.02);background:linear-gradient(60deg,#2962ff,#7b00ff,#ff1418,#fbff00,#00ff15);background-size:300% 300%;background-position:0 50%;box-shadow:0 5px 5px #888;animation:moveGradient-292dc3d0 4s infinite alternate}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompsItemWeight4.vue?vue&type=template&id=292dc3d0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "item",
    on: {
      "mouseenter": function ($event) {
        _vm.isHov = true;
      },
      "mouseleave": function ($event) {
        _vm.isHov = false;
      }
    }
  }, [_vm._ssrNode("<div class=\"data\" data-v-292dc3d0><div class=\"divName\" data-v-292dc3d0><div" + _vm._ssrClass("nameAndStore", {
    activeText: _vm.isHov
  }) + " data-v-292dc3d0><div style=\"display:flex; justify-content:space-between\" data-v-292dc3d0><span" + _vm._ssrClass("store", {
    activestore: _vm.isHov,
    juststore: !_vm.isHov
  }) + " data-v-292dc3d0>" + _vm._ssrEscape(_vm._s(_vm.itemData.store)) + "</span> <a target=\"_blank\"" + _vm._ssrAttr("href", _vm.itemData.link) + _vm._ssrClass("store", {
    activestore: _vm.isHov,
    juststore: !_vm.isHov
  }) + " data-v-292dc3d0>" + _vm._ssrEscape(_vm._s(_vm.itemData.price) + "₽") + "</a></div> <div class=\"title\" data-v-292dc3d0><div data-v-292dc3d0><span data-v-292dc3d0>" + _vm._ssrEscape(_vm._s(_vm.itemData.name)) + "</span></div></div></div> <div" + _vm._ssrClass("deskr", {
    activeText: _vm.isHov,
    smallheight: _vm.isSmall
  }) + " data-v-292dc3d0><div" + _vm._ssrClass("hov", {
    op0: _vm.isOpen
  }) + " data-v-292dc3d0>" + _vm._ssrList(_vm.itemData, function (value, key) {
    return key !== 'id' && key !== 'type' && key !== 'price' && key !== 'store' && key !== 'name' && key !== 'link' && key !== 'type' && key !== 'image' && key !== 'transformations' ? "<span data-v-292dc3d0>" + _vm._ssrEscape("\n                        " + _vm._s(key) + ": " + _vm._s(value) + "\n                    ") + "</span>" : "<!---->";
  }) + "</div> <div" + _vm._ssrClass("ranksValues hov", {
    op1: _vm.isOpen
  }) + " data-v-292dc3d0>" + _vm._ssrList(_vm.transformations.норм, function (value, key) {
    return "<span data-v-292dc3d0>" + _vm._ssrEscape(_vm._s(key) + ": " + _vm._s(value.toFixed(3))) + "</span>";
  }) + "</div></div></div> <div class=\"divOther\" data-v-292dc3d0><div data-v-292dc3d0><span data-v-292dc3d0>" + _vm._ssrEscape(_vm._s(_vm.itemData.type)) + "</span></div></div></div> "), _vm._ssrNode("<div" + _vm._ssrClass("footer", {
    activeprice: _vm.isHov
  }) + " data-v-292dc3d0>", "</div>", [_vm._ssrNode("<span id=\"rating\" data-v-292dc3d0>" + _vm._ssrEscape("RATING: " + _vm._s(_vm.transformations.рейтинг.toFixed(3))) + "</span> "), _c('Icon', {
    attrs: {
      "icon": "mdi:eye",
      "height": "50"
    }
  })], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CompsItemWeight4.vue?vue&type=template&id=292dc3d0&scoped=true&

// EXTERNAL MODULE: external "@iconify/vue2"
var vue2_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompsItemWeight4.vue?vue&type=script&lang=js&

/* harmony default export */ var CompsItemWeight4vue_type_script_lang_js_ = ({
  name: 'CompsItemWeight',
  props: ['itemData', 'transformations', 'isSmall'],
  components: {
    Icon: vue2_["Icon"]
  },
  data: function () {
    return {
      isHov: false,
      isOpen: false
    };
  }
});
// CONCATENATED MODULE: ./components/CompsItemWeight4.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CompsItemWeight4vue_type_script_lang_js_ = (CompsItemWeight4vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CompsItemWeight4.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CompsItemWeight4vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "292dc3d0",
  "18440b7f"
  
)

/* harmony default export */ var CompsItemWeight4 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjE5OS40MDRweCIgaGVpZ2h0PSIxOTkuNDA0cHgiIHZpZXdCb3g9IjAgMCAxOTkuNDA0IDE5OS40MDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMTk5LjQwNCAxOTkuNDA0IDE5OS40MDQgMTk5LjQwNDsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBvbHlnb24gcG9pbnRzPSIxOTkuNDA0LDYzLjk5MyAxNzEuMTIsMzUuNzA5IDk5LjcwMiwxMDcuMTI3IDI4LjI4NCwzNS43MDkgMCw2My45OTMgOTkuNzAyLDE2My42OTUgCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0f9b5e8b", content, true, context)
};

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_catalog_vue_vue_type_style_index_0_id_118f0238_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_catalog_vue_vue_type_style_index_0_id_118f0238_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_catalog_vue_vue_type_style_index_0_id_118f0238_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_catalog_vue_vue_type_style_index_0_id_118f0238_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_catalog_vue_vue_type_style_index_0_id_118f0238_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@keyframes moveout-118f0238{50%{transform:translateX(0)}to{transform:translateX(-20vw)}}@keyframes movein-118f0238{0%{transform:translateX(-20vw)}to{transform:translateX(0)}}.fade-leave-active[data-v-118f0238]{animation:moveout-118f0238 .5s}.fade-enter-active[data-v-118f0238]{animation:movein-118f0238 .5s}.containerr[data-v-118f0238]{height:auto;width:100%;justify-content:space-around;flex-wrap:wrap;padding-top:70px}.containerr[data-v-118f0238],.minicont[data-v-118f0238]{display:flex;box-sizing:border-box}.minicont[data-v-118f0238]{width:100vw;flex-direction:column;align-items:center;padding:0 10px;margin-top:10px}.minicont span[data-v-118f0238]{font-family:\"ErmilovBold\";color:#000;font-size:18px;margin-bottom:10px;width:100%;transition:text-shadow .5s}input[type=range][data-v-118f0238]{-webkit-appearance:none;height:10px;background:#a5a3a3;border-radius:5px}input[type=range][data-v-118f0238]::-webkit-slider-thumb{-webkit-appearance:none;height:15px;width:15px;border:2px solid #000;border-radius:50%;background:#06ffb4}input[data-v-118f0238],select[data-v-118f0238]{border:2px solid #000;box-shadow:inset 0 0 1px 1px #01d495;border-radius:5px;font-family:\"ErmilovBold\";background:#a5a3a3;width:100%;font-size:15px;height:25px}.rows[data-v-118f0238]{position:fixed;top:32px;height:45px;background:#747474;display:flex;width:100%;justify-content:space-between;align-items:flex-end;z-index:11;box-sizing:border-box;padding:0 15%;box-shadow:0 3px 5px #272727;z-index:3;animation:dopmenuactive-118f0238 1s ease-out;border-bottom-left-radius:25%;border-bottom-right-radius:25%}@keyframes dopmenuactive-118f0238{0%{top:0}to{top:32px}}.rows span[data-v-118f0238]{width:auto;margin:0;font-family:\"ErmilovBold\";color:#000;font-size:18px;transition:text-shadow .5s}.row[data-v-118f0238]{height:25px;padding:5px 0}.left[data-v-118f0238]{transform:rotate(90deg)}.right[data-v-118f0238]{transform:rotate(-90deg)}.blockForType[data-v-118f0238]{height:auto;width:100%;overflow-y:auto;padding:0 10px;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around}.blockForType .items[data-v-118f0238]{margin-top:15px}@media (max-width:760px){.blockForType .items[data-v-118f0238]{width:100%}}@media (min-width:760px){.blockForType .items[data-v-118f0238]{width:48%}}@media (min-width:1200px){.blockForType .items[data-v-118f0238]{width:31%}}.blockForType[data-v-118f0238]::-webkit-scrollbar{width:0}.fullWidth[data-v-118f0238]{width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/catalog.vue?vue&type=template&id=118f0238&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "containerr"
  }, [_vm._ssrNode("<div class=\"rows\" data-v-118f0238><img id=\"rowLeft\"" + _vm._ssrAttr("src", __webpack_require__(54)) + " class=\"row left\" data-v-118f0238> <span data-v-118f0238>" + _vm._ssrEscape(_vm._s(_vm.isOpen)) + "</span> <img id=\"rowRight\"" + _vm._ssrAttr("src", __webpack_require__(54)) + " class=\"row right\" data-v-118f0238></div> "), _vm._ssrNode("<div class=\"minicont\" data-v-118f0238>", "</div>", [_vm._ssrNode("<div class=\"fullWidth\" data-v-118f0238>", "</div>", [_vm._ssrNode("<span data-v-118f0238>Магазин</span> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.f1.store,
      expression: "f1.store"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.f1, "store", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Все")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DNS"
    }
  }, [_vm._v("ДНС")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SITILINK"
    }
  }, [_vm._v("Ситилинк")])])], 2), _vm._ssrNode(" <div class=\"fullWidth\" data-v-118f0238><span data-v-118f0238>Цена</span> <input type=\"number\"" + _vm._ssrAttr("value", _vm.f1.price) + " data-v-118f0238> <input type=\"range\" min=\"0\" max=\"150000\"" + _vm._ssrAttr("value", _vm.f1.price) + " data-v-118f0238></div>")], 2), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "mode": "out-in",
      "name": ""
    }
  }, [_c('div', {
    staticClass: "minicont"
  }, [_c('div', {
    staticClass: "blockForType"
  }, _vm._l(_vm.datas.filter(x => x['type'] == _vm.isOpen && _vm.prfilt(x, _vm.f1) && _vm.stfilt(x, _vm.f1)).sort((a, b) => b.transformations.рейтинг - a.transformations.рейтинг), function (it, key) {
    return _c('CompsItemWeight4', {
      key: it.id,
      staticClass: "items",
      attrs: {
        "itemData": it,
        "transformations": it.transformations
      }
    });
  }), 1)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index/catalog.vue?vue&type=template&id=118f0238&scoped=true&

// EXTERNAL MODULE: ./mixins.js/Mixin2.js
var Mixin2 = __webpack_require__(45);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/catalog.vue?vue&type=script&lang=js&

// import { toNumber } from '@vue/shared'


/* harmony default export */ var catalogvue_type_script_lang_js_ = ({
  mixins: [],
  props: ['datas'],
  setup() {
    let f1 = Object(external_vue_["ref"])({
      store: '',
      price: 300000
    });
    function prfilt(x, f) {
      return x['price'] <= f.price;
    }
    function stfilt(x, f) {
      if (f.store === '') {
        return x;
      }
      return x['store'] == f.store;
    }
    return {
      stfilt,
      prfilt,
      f1
    };
  },
  data() {
    return {
      isOpen: 'Видеокарта'
    };
  },
  methods: {
    selectpart: function (event) {
      if (event.target.id === 'rowLeft') {
        if (this.isOpen === 'Видеокарта') return this.isOpen = 'Материнская плата';
        if (this.isOpen === 'Процессор') return this.isOpen = 'Видеокарта';
        if (this.isOpen === 'Оперативная память') return this.isOpen = 'Процессор';
        if (this.isOpen === 'Материнская плата') return this.isOpen = 'Оперативная память';
      }
      if (event.target.id === 'rowRight') {
        if (this.isOpen === 'Материнская плата') return this.isOpen = 'Видеокарта';
        if (this.isOpen === 'Видеокарта') return this.isOpen = 'Процессор';
        if (this.isOpen === 'Процессор') return this.isOpen = 'Оперативная память';
        if (this.isOpen === 'Оперативная память') return this.isOpen = 'Материнская плата';
      }
    }
  }
  // computed: {
  //     ...mapGetters('datas', ['getdatas']),
  // }
});
// CONCATENATED MODULE: ./pages/index/catalog.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_catalogvue_type_script_lang_js_ = (catalogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/catalog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_catalogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "118f0238",
  "4fa043ea"
  
)

/* harmony default export */ var catalog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CompsItemWeight4: __webpack_require__(49).default})


/***/ })

};;
//# sourceMappingURL=catalog.js.map