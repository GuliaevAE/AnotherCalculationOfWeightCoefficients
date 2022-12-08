exports.ids = [3];
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

/***/ })

};;
//# sourceMappingURL=comps-item-weight4.js.map