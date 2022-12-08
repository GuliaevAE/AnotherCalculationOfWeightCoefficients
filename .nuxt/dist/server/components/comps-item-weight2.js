exports.ids = [1];
exports.modules = {

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("11bc28df", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight2_vue_vue_type_style_index_0_id_db283d20_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight2_vue_vue_type_style_index_0_id_db283d20_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight2_vue_vue_type_style_index_0_id_db283d20_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight2_vue_vue_type_style_index_0_id_db283d20_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompsItemWeight2_vue_vue_type_style_index_0_id_db283d20_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#rating[data-v-db283d20]{font-family:\"CurrentRegular\";font-weight:700;font-size:25px;margin-top:10px}.item[data-v-db283d20]{width:100%;position:relative;background:#515151;display:flex;flex-direction:column;margin-top:5px;margin-bottom:15px;border-radius:15px;height:-moz-fit-content;height:fit-content;box-sizing:border-box;padding:3px;transition:all .5s;z-index:2;box-shadow:0 -3px #6b6b6b,0 -5px 1px #06ffb4}.item[data-v-db283d20]:hover{box-shadow:0 -3px #5c5c5c,0 -5px 7px #06ffb4,0 0 7px #06ffb4}.data[data-v-db283d20]{display:flex;background:#27272c;border-radius:12px 12px 15px 15px;z-index:2;width:100%;box-sizing:border-box;padding:10px;justify-content:space-between;box-shadow:inset 0 0 2px #000;transition:all .3s}.data[data-v-db283d20]:hover{background:#262d2a;box-shadow:inset 0 0 2px 1px #000,inset 0 0 5px .5px #06ffb4}.nameAndStore[data-v-db283d20]{display:flex;flex-direction:column;width:100%}.nameAndStore span[data-v-db283d20],.store[data-v-db283d20]{transition:all .3s}.store[data-v-db283d20]{color:#b8b8b8}.juststore[data-v-db283d20]{text-shadow:0 1.5px rgba(6,255,180,0)}.activestore[data-v-db283d20]{text-shadow:0 -1.5px #06ffb4;position:relative;top:.3px}@keyframes moveGradient-db283d20{50%{background-position:100% 50%}}a[data-v-db283d20]{text-decoration:none;transition:transform .3s}.justlink[data-v-db283d20]{top:5px}.actionlink[data-v-db283d20]{top:10px;text-shadow:0 -3px #5c5c5c,0 -5px red}#link[data-v-db283d20]{font-family:\"CurrentRegular\";right:15px;display:block;transition:all .3s;font-weight:1000;font-size:25px;position:absolute}#link[data-v-db283d20]:hover{text-shadow:0 -3px #5c5c5c,0 -5px #06ffb4}.divName[data-v-db283d20]{flex-wrap:wrap;align-self:center;font-family:\"AktivGroteskCorp\";color:#b9b9b9;font-size:15px}.divName[data-v-db283d20],.divOther[data-v-db283d20]{width:auto;display:flex}.divOther[data-v-db283d20]{flex-direction:column;justify-content:space-between;align-items:flex-end;margin-left:5px;background:#515151;padding:10px 0;border-radius:4px}.st[data-v-db283d20]{background:wheat;width:100%;box-sizing:border-box;padding:5px;border-radius:10px;font-family:\"AktivGroteskCorp\";font-weight:700;margin-top:5px}.dns[data-v-db283d20]{background:orange;color:#fff;border:2px solid #fff}.citilink[data-v-db283d20]{background:#fff;color:#ff7300;border:2px solid #ff7300;font-size:15px}#price[data-v-db283d20]{color:#fff;font-family:\"CurrentRegular\";position:absolute;top:0;right:0;font-weight:700;font-size:25px;transition:all .3s}.activeprice[data-v-db283d20]{color:#06ffb4}.price.activeprice[data-v-db283d20]{top:5px;color:#fff;text-shadow:0 -3px #5c5c5c,0 -5px red}.hov[data-v-db283d20]{display:flex;flex-direction:column}.hov span[data-v-db283d20]:before{content:\"\";display:inline-block;height:10px;width:10px;border:2px solid #06ffb4;border-radius:50%;margin-right:5px}.footer[data-v-db283d20]{background:hsla(0,0%,54.1%,0);z-index:1;width:100%;display:flex;flex-direction:column;border-radius:0 0 15px 15px;position:relative}.footer span[data-v-db283d20]{transition:all .3s;margin-left:15px;font-family:\"AktivGroteskCorp\";font-size:15px;color:#fff}.footer.activeprice span[data-v-db283d20]{color:#06ffb4}.divOther span[data-v-db283d20]{color:#06ffb4;writing-mode:vertical-lr;font-weight:700;font-size:18px}.divOther img[data-v-db283d20]{border-radius:5px;height:auto;max-width:90px;position:relative}.rotateZ[data-v-db283d20]{transform:rotate(90deg)}.rotateZ img[data-v-db283d20]{transform:scale(1.2)}.МГц[data-v-db283d20]:after{content:\"МГц\"}.ГГц[data-v-db283d20]:after{content:\"ГГц\"}.Гб[data-v-db283d20]:after{content:\"Гб\"}.₽[data-v-db283d20]:after{content:\"₽\";font-weight:700;font-size:21px}.title[data-v-db283d20]{font-size:15px;font-family:UncutSansRegular;font-weight:600}.deskr[data-v-db283d20]{position:relative;width:100%}.deskr span[data-v-db283d20]{font-size:small;transition:all .3s}.activeText span[data-v-db283d20]{color:#fff}item[data-v-db283d20]:hover{transform:scale(1.02);background:linear-gradient(60deg,#2962ff,#7b00ff,#ff1418,#fbff00,#00ff15);background-size:300% 300%;background-position:0 50%;box-shadow:0 5px 5px #888;animation:moveGradient-db283d20 4s infinite alternate}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompsItemWeight2.vue?vue&type=template&id=db283d20&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "item",
    on: {
      "mouseenter": function ($event) {
        _vm.isHov = true, _vm.isOpen = true;
      },
      "mouseleave": function ($event) {
        _vm.isHov = false, _vm.isOpen = false;
      }
    }
  }, [_vm._ssrNode("<div class=\"data\" data-v-db283d20><div class=\"divName\" data-v-db283d20><div" + _vm._ssrClass("nameAndStore", {
    activeText: _vm.isHov
  }) + " data-v-db283d20><div style=\"display:flex; justify-content:space-between\" data-v-db283d20><span" + _vm._ssrClass("store", {
    activestore: _vm.isHov,
    juststore: !_vm.isHov
  }) + " data-v-db283d20>" + _vm._ssrEscape(_vm._s(_vm.store)) + "</span> <a target=\"_blank\"" + _vm._ssrAttr("href", _vm.link) + _vm._ssrClass("store", {
    activestore: _vm.isHov,
    juststore: !_vm.isHov
  }) + " data-v-db283d20>" + _vm._ssrEscape(_vm._s(_vm.price) + "₽") + "</a></div> <span class=\"title\" data-v-db283d20>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</span></div> <div" + _vm._ssrClass("deskr", {
    activeText: _vm.isHov
  }) + " data-v-db283d20>" + (_vm.type === 'Видеокарта' ? "<div class=\"hov\" data-v-db283d20><span class=\"Гб\" data-v-db283d20>" + _vm._ssrEscape("Память:" + _vm._s(_vm.cpu['par2'])) + "</span> <span class=\"МГц\" data-v-db283d20>" + _vm._ssrEscape("Частота: " + _vm._s(_vm.cpu['par8'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Интерфейс: " + _vm._s(_vm.cpu['par3'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Частота памяти: " + _vm._s(_vm.cpu['ЧастотаПамяти'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Техпроцесс: " + _vm._s(_vm.cpu['Техпроцесс'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Тип памяти: " + _vm._s(_vm.cpu['ТипПамяти'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Разрядность шины памяти: " + _vm._s(_vm.cpu['РазрядностьШиныПамяти'])) + "</span></div>" : "<!---->") + " " + (_vm.type === 'Процессор' ? "<div class=\"hov\" data-v-db283d20><span data-v-db283d20>" + _vm._ssrEscape("Ядро:" + _vm._s(_vm.cpu['par1'])) + "</span> <span class=\"ГГц\" data-v-db283d20>" + _vm._ssrEscape("Частота: " + _vm._s(_vm.cpu['par2'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Сокет:" + _vm._s(_vm.cpu['par3'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Число потоков:" + _vm._s(_vm.cpu['par4'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Тепловыделение:" + _vm._s(_vm.cpu['par5'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Кол-во ядер:" + _vm._s(_vm.cpu['КоличествоЯдер'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Кол-во каналов:" + _vm._s(_vm.cpu['КоличествоКаналов'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Техпроцесс:" + _vm._s(_vm.cpu['Техпроцесс'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Модель граф.ядра:" + _vm._s(_vm.cpu['МодельГрафическогоЯдра'])) + "</span> " + (_vm.cpu['ЧастотаГрафическогоЯдра'] != 0 ? "<span data-v-db283d20>" + _vm._ssrEscape("ЧастотаГрафическогоЯдра:\n                        " + _vm._s(_vm.cpu['ЧастотаГрафическогоЯдра'])) + "</span>" : "<!---->") + " <span data-v-db283d20>" + _vm._ssrEscape("Частота памяти:" + _vm._s(_vm.cpu['ЧастотаПамяти'])) + "</span></div>" : "<!---->") + " " + (_vm.type === 'Оперативная память' ? "<div class=\"hov\" data-v-db283d20><span class=\"Гб\" data-v-db283d20>" + _vm._ssrEscape("Объем: " + _vm._s(_vm.cpu['par1'])) + "</span> <span class=\"ГГц\" data-v-db283d20>" + _vm._ssrEscape("Частота: " + _vm._s(_vm.cpu['par2'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Латентность: " + _vm._s(_vm.cpu['par3'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Форм-фактор: " + _vm._s(_vm.cpu['par5'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("ТипПамяти: " + _vm._s(_vm.cpu['ТипПамяти'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("КоличествоМодулей: " + _vm._s(_vm.cpu['КоличествоМодулей'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("ОбъемМодуля: " + _vm._s(_vm.cpu['ОбъемМодуля'])) + "</span></div>" : "<!---->") + " " + (_vm.type === 'Материнская плата' ? "<div class=\"hov\" data-v-db283d20><span data-v-db283d20>" + _vm._ssrEscape("Сокет: " + _vm._s(_vm.cpu['Сокет'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Чипсет: " + _vm._s(_vm.cpu['Чипсет'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Тип памяти: " + _vm._s(_vm.cpu['ТипПамяти'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Макс. частота памяти: " + _vm._s(_vm.cpu['МаксимальнаяЧастотаПамяти'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Макс.объем памяти: " + _vm._s(_vm.cpu['МаксимальныйОбъемПамяти'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Кол-во каналов памяти: " + _vm._s(_vm.cpu['КоличествоКаналовПамяти'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Кол-во PCIE1: " + _vm._s(_vm.cpu['КоличествоСлотовPCIE1'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Форм-фактор: " + _vm._s(_vm.cpu['ФормФактор'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Тип памяти: " + _vm._s(_vm.cpu['ТипПамяти'])) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Кол-во слотов памяти: " + _vm._s(_vm.cpu['КоличествоСлотовПамяти'])) + "</span></div>" : "<!---->") + "</div></div> <div class=\"divOther\" data-v-db283d20><span data-v-db283d20>" + _vm._ssrEscape(_vm._s(_vm.type.toUpperCase())) + "</span> " + (_vm.isImage === 'false' ? "<div data-v-db283d20><img" + _vm._ssrAttr("src", _vm.image) + " data-v-db283d20></div>" : "<!---->") + "</div></div> <div" + _vm._ssrClass("footer", {
    activeprice: _vm.isHov
  }) + " data-v-db283d20><span id=\"rating\" data-v-db283d20>" + _vm._ssrEscape("RATING: " + _vm._s(_vm.transformations.рейтинг.toFixed(3))) + "</span> <div data-v-db283d20>" + (_vm.type === 'Видеокарта' && _vm.isOpen ? "<div style=\"display:flex;flex-direction:column;\" data-v-db283d20><span data-v-db283d20>" + _vm._ssrEscape("Частота: " + _vm._s(_vm.transformations.видеокартаНорм.частоставидеокарты.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Число потоков: " + _vm._s(_vm.transformations.видеокартаНорм.памятьвидеокарты.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Частота памяти: " + _vm._s(_vm.transformations.видеокартаНорм.ЧастотаПамяти.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Техпроцесс: " + _vm._s(_vm.transformations.видеокартаНорм.Техпроцесс.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Разрядность шины памяти:\n                    " + _vm._s(_vm.transformations.видеокартаНорм.РазрядностьШиныПамяти.toFixed(3))) + "</span></div>" : "<!---->") + " " + (_vm.type === 'Процессор' && _vm.isOpen ? "<div style=\"display:flex;flex-direction:column;\" data-v-db283d20><span data-v-db283d20>" + _vm._ssrEscape("Частота: " + _vm._s(_vm.transformations.процессорНорм.частостапроцессора.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Число потоков: " + _vm._s(_vm.transformations.процессорНорм.числопотоков.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Количество ядер: " + _vm._s(_vm.transformations.процессорНорм.КоличествоЯдер.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Количество каналов: " + _vm._s(_vm.transformations.процессорНорм.КоличествоКаналов.toFixed(3))) + "</span> " + (_vm.cpu['ЧастотаГрафическогоЯдра'] != 0 ? "<span data-v-db283d20>" + _vm._ssrEscape("ЧастотаГрафическогоЯдра:\n                    " + _vm._s(_vm.transformations.процессорНорм.ЧастотаГрафическогоЯдра.toFixed(3))) + "</span>" : "<!---->") + "</div>" : "<!---->") + " " + (_vm.type === 'Оперативная память' && _vm.isOpen ? "<div style=\"display:flex;flex-direction:column;\" data-v-db283d20><span data-v-db283d20>" + _vm._ssrEscape("Объём: " + _vm._s(_vm.transformations.оперативкаНорм.объем.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Частота: " + _vm._s(_vm.transformations.оперативкаНорм.частотаоперативки.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Кол-во модулей: " + _vm._s(_vm.transformations.оперативкаНорм.КоличествоМодулей.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Объем модуля: " + _vm._s(_vm.transformations.оперативкаНорм.ОбъемМодуля.toFixed(3))) + "</span></div>" : "<!---->") + " " + (_vm.type === 'Материнская плата' && _vm.isOpen ? "<div style=\"display:flex;flex-direction:column;\" data-v-db283d20><span data-v-db283d20>" + _vm._ssrEscape("Макс.частота памяти:\n                    " + _vm._s(_vm.transformations.оперативкаНорм.МаксимальнаяЧастотаПамяти.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Макс.объем памяти:\n                    " + _vm._s(_vm.transformations.оперативкаНорм.МаксимальныйОбъемПамяти.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Кол-во каналов памяти:\n                    " + _vm._s(_vm.transformations.оперативкаНорм.КоличествоКаналовПамяти.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Кол-во PCIE1:\n                    " + _vm._s(_vm.transformations.оперативкаНорм.КоличествоСлотовPCIE1.toFixed(3))) + "</span> <span data-v-db283d20>" + _vm._ssrEscape("Кол-во слотов памяти:\n                    " + _vm._s(_vm.transformations.оперативкаНорм.КоличествоСлотовПамяти.toFixed(3))) + "</span></div>" : "<!---->") + "</div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CompsItemWeight2.vue?vue&type=template&id=db283d20&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompsItemWeight2.vue?vue&type=script&lang=js&
/* harmony default export */ var CompsItemWeight2vue_type_script_lang_js_ = ({
  name: 'CompsItemWeight',
  props: ['name', 'store', 'type', 'price', 'link', 'cpu', 'transformations', 'image', 'isImage'],
  data: function () {
    return {
      isHov: false,
      isOpen: false,
      styleObj: {
        // backgroundImage: 'url('+this.image+') ',
        // backgroundSize: 'contain',
        // opacity:0.5,
        // backgroundRepeat: 'no-repeat'
      }
    };
  },
  computed: {}
});
// CONCATENATED MODULE: ./components/CompsItemWeight2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CompsItemWeight2vue_type_script_lang_js_ = (CompsItemWeight2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CompsItemWeight2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CompsItemWeight2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "db283d20",
  "1827dc7d"
  
)

/* harmony default export */ var CompsItemWeight2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=comps-item-weight2.js.map