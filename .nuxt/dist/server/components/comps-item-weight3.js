exports.ids = [2];
exports.modules = {

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0198321a", content, true, context)
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight3_vue_vue_type_style_index_0_id_59bc2592_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight3_vue_vue_type_style_index_0_id_59bc2592_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight3_vue_vue_type_style_index_0_id_59bc2592_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight3_vue_vue_type_style_index_0_id_59bc2592_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight3_vue_vue_type_style_index_0_id_59bc2592_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "span[data-v-59bc2592]{font-size:15px}.item[data-v-59bc2592]{background:hsla(0,0%,60.8%,.429)}.data[data-v-59bc2592],.item[data-v-59bc2592]{width:100%;display:flex;flex-direction:column;box-sizing:border-box}.data[data-v-59bc2592]{background:#fbfbfb;z-index:2;padding:10px;justify-content:space-between;height:100%;box-shadow:inset 0 0 2px #000;transition:all .3s}.store[data-v-59bc2592]{color:#fff}.hov[data-v-59bc2592]{display:flex;flex-direction:column}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompsItemWeight3.vue?vue&type=template&id=59bc2592&scoped=true&
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
  }, [_vm._ssrNode("<div data-v-59bc2592><span id=\"store\"" + _vm._ssrClass(null, {
    activestore: _vm.isHov,
    juststore: !_vm.isHov
  }) + " data-v-59bc2592>" + _vm._ssrEscape(_vm._s(_vm.store)) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape(_vm._s(_vm.price)) + "</span></div> <div class=\"data\"" + _vm._ssrStyle(null, _vm.styleObj, null) + " data-v-59bc2592><span class=\"title\" data-v-59bc2592>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Рейтинг: " + _vm._s(_vm.transformations.рейтинг.toFixed(3))) + "</span> <div" + _vm._ssrClass("deskr", {
    activeText: _vm.isHov
  }) + " data-v-59bc2592>" + (_vm.type === 'Видеокарта' ? "<div class=\"hov\" data-v-59bc2592><span data-v-59bc2592>" + _vm._ssrEscape("Видеочипсет: " + _vm._s(_vm.cpu['par1'])) + "</span> <span class=\"Гб\" data-v-59bc2592>" + _vm._ssrEscape("Память: " + _vm._s(_vm.cpu['par2'])) + "</span> <span class=\"МГц\" data-v-59bc2592>" + _vm._ssrEscape("Частота: " + _vm._s(_vm.cpu['par8'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Интерфейс: " + _vm._s(_vm.cpu['par3'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Частота памяти: " + _vm._s(_vm.cpu['ЧастотаПамяти'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Техпроцесс: " + _vm._s(_vm.cpu['Техпроцесс'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Тип памяти: " + _vm._s(_vm.cpu['ТипПамяти'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Разрядность шины памяти: " + _vm._s(_vm.cpu['РазрядностьШиныПамяти'])) + "</span></div>" : "<!---->") + " " + (_vm.type === 'Процессор' ? "<div class=\"hov\" data-v-59bc2592><span data-v-59bc2592>" + _vm._ssrEscape("Ядро: " + _vm._s(_vm.cpu['par1'])) + "</span> <span class=\"ГГц\" data-v-59bc2592>" + _vm._ssrEscape("Частота: " + _vm._s(_vm.cpu['par2'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Сокет: " + _vm._s(_vm.cpu['par3'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Число потоков: " + _vm._s(_vm.cpu['par4'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Тепловыделение: " + _vm._s(_vm.cpu['par5'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Кол-во ядер: " + _vm._s(_vm.cpu['КоличествоЯдер'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Кол-во каналов: " + _vm._s(_vm.cpu['КоличествоКаналов'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Техпроцесс: " + _vm._s(_vm.cpu['Техпроцесс'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Модель граф.ядра: " + _vm._s(_vm.cpu['МодельГрафическогоЯдра'])) + "</span> " + (_vm.cpu['ЧастотаГрафическогоЯдра'] != 0 ? "<span data-v-59bc2592>" + _vm._ssrEscape("ЧастотаГрафическогоЯдра:\n                        " + _vm._s(_vm.cpu['ЧастотаГрафическогоЯдра'])) + "</span>" : "<!---->") + " <span data-v-59bc2592>" + _vm._ssrEscape("Частота памяти: " + _vm._s(_vm.cpu['ЧастотаПамяти'])) + "</span></div>" : "<!---->") + " " + (_vm.type === 'Оперативная память' ? "<div class=\"hov\" data-v-59bc2592><span class=\"Гб\" data-v-59bc2592>" + _vm._ssrEscape("Объем: " + _vm._s(_vm.cpu['par1'])) + "</span> <span class=\"ГГц\" data-v-59bc2592>" + _vm._ssrEscape("Частота: " + _vm._s(_vm.cpu['par2'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Латентность: " + _vm._s(_vm.cpu['par3'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Форм-фактор: " + _vm._s(_vm.cpu['par5'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("ТипПамяти: " + _vm._s(_vm.cpu['ТипПамяти'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("КоличествоМодулей: " + _vm._s(_vm.cpu['КоличествоМодулей'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("ОбъемМодуля: " + _vm._s(_vm.cpu['ОбъемМодуля'])) + "</span></div>" : "<!---->") + " " + (_vm.type === 'Материнская плата' ? "<div class=\"hov\" data-v-59bc2592><span data-v-59bc2592>" + _vm._ssrEscape("Сокет: " + _vm._s(_vm.cpu['Сокет'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Чипсет: " + _vm._s(_vm.cpu['Чипсет'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Тип памяти: " + _vm._s(_vm.cpu['ТипПамяти'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Макс. частота памяти: " + _vm._s(_vm.cpu['МаксимальнаяЧастотаПамяти'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Макс.объем памяти: " + _vm._s(_vm.cpu['МаксимальныйОбъемПамяти'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Кол-во каналов памяти: " + _vm._s(_vm.cpu['КоличествоКаналовПамяти'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Кол-во PCIE1: " + _vm._s(_vm.cpu['КоличествоСлотовPCIE1'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Форм-фактор: " + _vm._s(_vm.cpu['ФормФактор'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Тип памяти: " + _vm._s(_vm.cpu['ТипПамяти'])) + "</span> <span data-v-59bc2592>" + _vm._ssrEscape("Кол-во слотов памяти: " + _vm._s(_vm.cpu['КоличествоСлотовПамяти'])) + "</span></div>" : "<!---->") + "</div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CompsItemWeight3.vue?vue&type=template&id=59bc2592&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompsItemWeight3.vue?vue&type=script&lang=js&
/* harmony default export */ var CompsItemWeight3vue_type_script_lang_js_ = ({
  name: 'CompsItemWeight',
  props: ['name', 'store', 'type', 'price', 'link', 'cpu', 'transformations', 'image', 'isImage'],
  data: function () {
    return {
      isHov: false,
      isOpen: true,
      styleObj: {
        // backgroundImage: 'url('+this.image+') ',
        // backgroundSize: '100% 100%',
        // backgroundPosition:'center',
        // backgroundRepeat: 'no-repeat'
      }
    };
  },
  computed: {}
});
// CONCATENATED MODULE: ./components/CompsItemWeight3.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CompsItemWeight3vue_type_script_lang_js_ = (CompsItemWeight3vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CompsItemWeight3.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CompsItemWeight3vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "59bc2592",
  "1835f3fe"
  
)

/* harmony default export */ var CompsItemWeight3 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=comps-item-weight3.js.map