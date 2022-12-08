exports.ids = [6];
exports.modules = {

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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_js_Mixin2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);
// import Mixin from '~/mixins.js/Mixin.js'


/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [_mixins_js_Mixin2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]],
  layout: 'lay1',
  setup() {
    function arrayFilt(x) {
      if (x.type === 'Видеокарта' && x.name.toLowerCase().indexOf(this.getfiltVidName.toLowerCase()) !== -1 && x['memory'] >= this.getfiltVidMemory) {
        return x;
      }
      if (x.type === 'Процессор' && x.name.toLowerCase().indexOf(this.getfiltProcName.toLowerCase()) !== -1) {
        return x;
      }
      if (x.type === 'Оперативная память') {
        return x;
      }
      if (x.type === 'Материнская плата') {
        return x;
      }
    }
    return {
      arrayFilt
    };
  },
  async asyncData({
    $axios
  }) {
    try {
      const posts = await $axios.$get('http://localhost:8080/api/document');
      return {
        posts
      };
    } catch (error) {
      const posts = [];
      return {
        posts
      };
    }
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('datas', ['getCoefficients']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('datas', ['getBudget']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('datas', ['getfiltVidName']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('datas', ['getfiltVidMemory']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('datas', ['getfiltProcName']),
    rendData() {
      const data = this.posts;
      /////////////////////////видеокарта///////////////////////////////////
      let толькочастотавидеокарты = {
        список: []
      };
      let толькопамятьвидеокарты = {
        список: []
      };
      let ТолькоЧастотаПамятиВидеокарты = {
        список: []
      };
      let ТолькоТехпроцессВидеокарты = {
        список: []
      };
      let ТолькоРазрядностьШиныПамяти = {
        список: []
      };
      /////////////////////////Процессор///////////////////////////////////
      let толькочастотапроцессора = {
        список: []
      };
      let толькочислопотоков = {
        список: []
      };
      let ТолькоКоличествоЯдер = {
        список: []
      };
      let ТолькоКоличествоКаналов = {
        список: []
      };
      let ТолькоЧастотаГрафическогоЯдра = {
        список: []
      };
      let ТолькоЧастотаПамятиПроцессора = {
        список: []
      };
      // /////////////////////////Оперативная память///////////////////////////////////
      let толькообъем = {
        список: []
      };
      let толькочастотаоперативки = {
        список: []
      };
      let ТолькоКоличествоМодулей = {
        список: []
      };
      let ТолькоОбъемМодуля = {
        список: []
      };
      /////////////////////////Материнская плата///////////////////////////////////
      let ТолькоМаксимальнаяЧастотаПамяти = {
        список: []
      };
      let ТолькоМаксимальныйОбъемПамяти = {
        список: []
      };
      let ТолькоКоличествоКаналовПамяти = {
        список: []
      };
      let ТолькоКоличествоСлотовPCIE1 = {
        список: []
      };
      let ТолькоКоличествоСлотовПамяти = {
        список: []
      };
      let allItems1 = data.map(x => {
        console.log(x);
        if (x['type'] === 'Видеокарта') {
          x['memory'] = Number(x['memory']);
          x['frequency'] = Number(x['frequency']);
          x['frequencymemory'] = Number(x['frequencymemory']);
          x['processtechnology'] = Number(x['processtechnology']);
          x['memorybuswidth'] = Number(x['memorybuswidth']);
          // typeofmemory
          толькочастотавидеокарты.список.push(Number(x['frequency']));
          толькопамятьвидеокарты.список.push(Number(x['memory']));
          ТолькоЧастотаПамятиВидеокарты.список.push(Number(x['frequencymemory']));
          ТолькоТехпроцессВидеокарты.список.push(Number(x['processtechnology']));
          ТолькоРазрядностьШиныПамяти.список.push(Number(x['memorybuswidth']));
          x.transformations = {
            норм: {
              частоставидеокарты: 0,
              памятьвидеокарты: 0,
              ЧастотаПамяти: 0,
              Техпроцесс: 0,
              РазрядностьШиныПамяти: 0
            },
            рейтинг: 0
          };
        }
        if (x['type'] === 'Процессор') {
          x['frequency'] = Number(x['frequency']);
          x['numberofthreads'] = Number(x['numberofthreads']);
          x['numberofcores'] = Number(x['numberofcores']);
          x['numberofchannels'] = Number(x['numberofchannels']);
          x['graphicscorefrequency'] = x['graphicscorefrequency'];
          // x ['ЧастотаПамяти'] = Number(x ['ЧастотаПамяти'])
          толькочастотапроцессора.список.push(Number(x['frequency']));
          толькочислопотоков.список.push(Number(x['numberofthreads']));
          ТолькоКоличествоЯдер.список.push(Number(x['numberofcores']));
          ТолькоКоличествоКаналов.список.push(Number(x['numberofchannels']));
          ТолькоЧастотаГрафическогоЯдра.список.push(x['graphicscorefrequency']);
          // ТолькоЧастотаПамятиПроцессора.список.push(Number(x ['ЧастотаПамяти']))
          x.transformations = {
            норм: {
              частостапроцессора: 0,
              числопотоков: 0,
              КоличествоЯдер: 0,
              КоличествоКаналов: 0,
              ЧастотаГрафическогоЯдра: 0,
              ЧастотаПамяти: 0
            },
            рейтинг: 0
          };
        }
        if (x['type'] === 'Оперативная память') {
          console.log("x['frequency']", x['frequency']);
          x['capacity'] = Number(eval(x['capacity']));
          x['frequency'] = Number(x['frequency']);
          x['numberofmodules'] = Number(x['numberofmodules']);
          x['volumemodule'] = Number(x['volumemodule']);
          толькообъем.список.push(Number(x['capacity']));
          толькочастотаоперативки.список.push(Number(x['frequency']));
          ТолькоКоличествоМодулей.список.push(Number(x['numberofmodules']));
          ТолькоОбъемМодуля.список.push(Number(x['volumemodule']));
          x.transformations = {
            норм: {
              объем: 0,
              частотаоперативки: 0,
              КоличествоМодулей: 0,
              ОбъемМодуля: 0
            },
            рейтинг: 0
          };
        }
        if (x['type'] === 'Материнская плата') {
          x['maxmemoryfrequency'] = Number(x['maxmemoryfrequency']);
          x['maxmemory'] = Number(x['maxmemory']);
          x['numberofmemorychannels'] = Number(x['numberofmemorychannels']);
          x['numberofslotspcie1'] = Number(x['numberofslotspcie1']);
          x['numberofmemoryslots'] = Number(x['numberofmemoryslots']);
          ТолькоМаксимальнаяЧастотаПамяти.список.push(Number(x['maxmemoryfrequency']));
          ТолькоМаксимальныйОбъемПамяти.список.push(Number(x['maxmemory']));
          ТолькоКоличествоКаналовПамяти.список.push(Number(x['numberofmemorychannels']));
          ТолькоКоличествоСлотовPCIE1.список.push(Number(x['numberofslotspcie1']));
          ТолькоКоличествоСлотовПамяти.список.push(Number(x['numberofmemoryslots']));
          x.transformations = {
            норм: {
              объем: 0,
              частотаоперативки: 0,
              КоличествоМодулей: 0,
              ОбъемМодуля: 0
            },
            рейтинг: 0
          };
        }
        x['price'] = Number(x['price']);
        return x;
      });
      // allItems1.map(x => {
      //   if (x['type'] === 'Видеокарта') {
      //     толькочастотавидеокарты.список.push(Number(x['frequency']))
      //     толькопамятьвидеокарты.список.push(Number(x['memory']))
      //     ТолькоЧастотаПамятиВидеокарты.список.push(Number(x['frequencymemory']))
      //     ТолькоТехпроцессВидеокарты.список.push(Number(x['processtechnology']))
      //     ТолькоРазрядностьШиныПамяти.список.push(Number(x['memorybuswidth']))
      //     x.transformations = {
      //       норм: {
      //         частоставидеокарты: 0,
      //         памятьвидеокарты: 0,
      //         ЧастотаПамяти: 0,
      //         Техпроцесс: 0,
      //         РазрядностьШиныПамяти: 0,
      //       }, рейтинг: 0
      //     }
      //   }

      //   if (x['type'] === 'Процессор') {
      //     толькочастотапроцессора.список.push(Number(x['frequency']))
      //     толькочислопотоков.список.push(Number(x['numberofthreads']))
      //     ТолькоКоличествоЯдер.список.push(Number(x['numberofcores']))
      //     ТолькоКоличествоКаналов.список.push(Number(x['numberofchannels']))
      //     ТолькоЧастотаГрафическогоЯдра.список.push((x['graphicscorefrequency']))
      //     // ТолькоЧастотаПамятиПроцессора.список.push(Number(x ['ЧастотаПамяти']))
      //     x.transformations = {
      //       норм: {
      //         частостапроцессора: 0,
      //         числопотоков: 0,
      //         КоличествоЯдер: 0,
      //         КоличествоКаналов: 0,
      //         ЧастотаГрафическогоЯдра: 0,
      //         ЧастотаПамяти: 0,
      //       }, рейтинг: 0
      //     }
      //   }

      //   if (x['type'] === 'Оперативная память') {
      //     толькообъем.список.push(Number(x['capacity']))
      //     толькочастотаоперативки.список.push(Number(x['frequency']))
      //     ТолькоКоличествоМодулей.список.push(Number(x['numberofmodules']))
      //     ТолькоОбъемМодуля.список.push(Number(x['volumemodule']))
      //     x.transformations = { норм: { объем: 0, частотаоперативки: 0, КоличествоМодулей: 0, ОбъемМодуля: 0 }, рейтинг: 0 }
      //   }

      //   if (x['type'] === 'Материнская плата') {
      //     ТолькоМаксимальнаяЧастотаПамяти.список.push(Number(x['maxmemoryfrequency']))
      //     ТолькоМаксимальныйОбъемПамяти.список.push(Number(x['maxmemory']))
      //     ТолькоКоличествоКаналовПамяти.список.push(Number(x['numberofmemorychannels']))
      //     ТолькоКоличествоСлотовPCIE1.список.push(Number(x['numberofslotspcie1']))
      //     ТолькоКоличествоСлотовПамяти.список.push(Number(x['numberofmemoryslots']))
      //     x.transformations = { норм: { объем: 0, частотаоперативки: 0, КоличествоМодулей: 0, ОбъемМодуля: 0 }, рейтинг: 0 }
      //   }
      //   return x
      // })

      function getOfArray(numArray) {
        let max = 0;
        let min = numArray[0];
        numArray.forEach(x => {
          if (x > max) {
            max = x;
          }
          if (x < min) {
            min = x;
          }
        });
        return {
          max: max,
          min: min
        };
      }

      //Видеокарта
      толькочастотавидеокарты.мах = getOfArray(толькочастотавидеокарты.список).max;
      толькочастотавидеокарты.мин = getOfArray(толькочастотавидеокарты.список).min;
      толькопамятьвидеокарты.мах = getOfArray(толькопамятьвидеокарты.список).max;
      толькопамятьвидеокарты.мин = getOfArray(толькопамятьвидеокарты.список).min;
      ТолькоЧастотаПамятиВидеокарты.мах = getOfArray(ТолькоЧастотаПамятиВидеокарты.список).max;
      ТолькоЧастотаПамятиВидеокарты.мин = getOfArray(ТолькоЧастотаПамятиВидеокарты.список).min;
      ТолькоТехпроцессВидеокарты.мах = getOfArray(ТолькоТехпроцессВидеокарты.список).max;
      ТолькоТехпроцессВидеокарты.мин = getOfArray(ТолькоТехпроцессВидеокарты.список).min;
      ТолькоРазрядностьШиныПамяти.мах = getOfArray(ТолькоРазрядностьШиныПамяти.список).max;
      ТолькоРазрядностьШиныПамяти.мин = getOfArray(ТолькоРазрядностьШиныПамяти.список).min;

      //Процессор
      толькочастотапроцессора.мах = getOfArray(толькочастотапроцессора.список).max;
      толькочастотапроцессора.мин = getOfArray(толькочастотапроцессора.список).min;
      толькочислопотоков.мах = getOfArray(толькочислопотоков.список).max;
      толькочислопотоков.мин = getOfArray(толькочислопотоков.список).min;
      ТолькоКоличествоЯдер.мах = getOfArray(ТолькоКоличествоЯдер.список).max;
      ТолькоКоличествоЯдер.мин = getOfArray(ТолькоКоличествоЯдер.список).min;
      ТолькоКоличествоКаналов.мах = getOfArray(ТолькоКоличествоКаналов.список).max;
      ТолькоКоличествоКаналов.мин = getOfArray(ТолькоКоличествоКаналов.список).min;
      ТолькоЧастотаГрафическогоЯдра.мах = getOfArray(ТолькоЧастотаГрафическогоЯдра.список).max;
      ТолькоЧастотаГрафическогоЯдра.мин = getOfArray(ТолькоЧастотаГрафическогоЯдра.список).min;
      // ТолькоЧастотаПамятиПроцессора.мах = getOfArray(ТолькоЧастотаПамятиПроцессора.список).max
      // ТолькоЧастотаПамятиПроцессора.мин = getOfArray(ТолькоЧастотаПамятиПроцессора.список).min

      //Оперативка
      толькообъем.мах = getOfArray(толькообъем.список).max;
      толькообъем.мин = getOfArray(толькообъем.список).min;
      толькочастотаоперативки.мах = getOfArray(толькочастотаоперативки.список).max;
      толькочастотаоперативки.мин = getOfArray(толькочастотаоперативки.список).min;
      ТолькоКоличествоМодулей.мах = getOfArray(ТолькоКоличествоМодулей.список).max;
      ТолькоКоличествоМодулей.мин = getOfArray(ТолькоКоличествоМодулей.список).min;
      ТолькоОбъемМодуля.мах = getOfArray(ТолькоОбъемМодуля.список).max;
      ТолькоОбъемМодуля.мин = getOfArray(ТолькоОбъемМодуля.список).min;

      //Материнская плата
      ТолькоМаксимальнаяЧастотаПамяти.мах = getOfArray(ТолькоМаксимальнаяЧастотаПамяти.список).max;
      ТолькоМаксимальнаяЧастотаПамяти.мин = getOfArray(ТолькоМаксимальнаяЧастотаПамяти.список).min;
      ТолькоМаксимальныйОбъемПамяти.мах = getOfArray(ТолькоМаксимальныйОбъемПамяти.список).max;
      ТолькоМаксимальныйОбъемПамяти.мин = getOfArray(ТолькоМаксимальныйОбъемПамяти.список).min;
      ТолькоКоличествоКаналовПамяти.мах = getOfArray(ТолькоКоличествоКаналовПамяти.список).max;
      ТолькоКоличествоКаналовПамяти.мин = getOfArray(ТолькоКоличествоКаналовПамяти.список).min;
      ТолькоКоличествоСлотовPCIE1.мах = getOfArray(ТолькоКоличествоСлотовPCIE1.список).max;
      ТолькоКоличествоСлотовPCIE1.мин = getOfArray(ТолькоКоличествоСлотовPCIE1.список).min;
      ТолькоКоличествоСлотовПамяти.мах = getOfArray(ТолькоКоличествоСлотовПамяти.список).max;
      ТолькоКоличествоСлотовПамяти.мин = getOfArray(ТолькоКоличествоСлотовПамяти.список).min;
      allItems1.map(x => {
        if (x['type'] === 'Видеокарта') {
          x.transformations.норм.частоставидеокарты = x['frequency'] / толькочастотавидеокарты.мах;
          x.transformations.норм.памятьвидеокарты = x['memory'] / толькопамятьвидеокарты.мах;
          x.transformations.норм.ЧастотаПамяти = x['frequencymemory'] / ТолькоЧастотаПамятиВидеокарты.мах;
          x.transformations.норм.Техпроцесс = x['processtechnology'] / ТолькоТехпроцессВидеокарты.мах;
          x.transformations.норм.РазрядностьШиныПамяти = x['memorybuswidth'] / ТолькоРазрядностьШиныПамяти.мах;
          x.transformations.рейтинг = (x.transformations.норм.частоставидеокарты + x.transformations.норм.памятьвидеокарты + x.transformations.норм.ЧастотаПамяти - x.transformations.норм.Техпроцесс + x.transformations.норм.РазрядностьШиныПамяти) * this.getCoefficients.w1;
        }
        if (x['type'] === 'Процессор') {
          x.transformations.норм.частостапроцессора = x['frequency'] / толькочастотапроцессора.мах;
          x.transformations.норм.числопотоков = x['numberofthreads'] / толькочислопотоков.мах;
          x.transformations.норм.КоличествоЯдер = x['numberofcores'] / ТолькоКоличествоЯдер.мах;
          x.transformations.норм.КоличествоКаналов = x['numberofchannels'] / ТолькоКоличествоКаналов.мах;
          x.transformations.норм.ЧастотаГрафическогоЯдра = x['graphicscorefrequency'] / ТолькоЧастотаГрафическогоЯдра.мах;
          // x.transformations.норм.ЧастотаПамяти = x ['ЧастотаПамяти'] / ТолькоЧастотаПамятиПроцессора.мах
          x.transformations.рейтинг = (x.transformations.норм.частостапроцессора + x.transformations.норм.числопотоков + x.transformations.норм.КоличествоЯдер + x.transformations.норм.КоличествоКаналов + x.transformations.норм.ЧастотаГрафическогоЯдра) * this.getCoefficients.w2;
        }
        if (x['type'] === 'Оперативная память') {
          x.transformations.норм.объем = x['capacity'] / толькообъем.мах;
          x.transformations.норм.частотаоперативки = x['frequency'] / толькочастотаоперативки.мах;
          x.transformations.норм.КоличествоМодулей = x['numberofmodules'] / ТолькоКоличествоМодулей.мах;
          x.transformations.норм.ОбъемМодуля = x['volumemodule'] / ТолькоОбъемМодуля.мах;
          x.transformations.рейтинг = (x.transformations.норм.объем + x.transformations.норм.частотаоперативки + x.transformations.норм.КоличествоМодулей + x.transformations.норм.ОбъемМодуля) * this.getCoefficients.w3;
        }
        if (x['type'] === 'Материнская плата') {
          x.transformations.норм.МаксимальнаяЧастотаПамяти = x['maxmemoryfrequency'] / ТолькоМаксимальнаяЧастотаПамяти.мах;
          x.transformations.норм.МаксимальныйОбъемПамяти = x['maxmemory'] / ТолькоМаксимальныйОбъемПамяти.мах;
          x.transformations.норм.КоличествоКаналовПамяти = x['numberofmemorychannels'] / ТолькоКоличествоКаналовПамяти.мах;
          x.transformations.норм.КоличествоСлотовPCIE1 = x['numberofslotspcie1'] / ТолькоКоличествоСлотовPCIE1.мах;
          x.transformations.норм.КоличествоСлотовПамяти = x['numberofmemoryslots'] / ТолькоКоличествоСлотовПамяти.мах;
          x.transformations.рейтинг = (x.transformations.норм.МаксимальнаяЧастотаПамяти + x.transformations.норм.МаксимальныйОбъемПамяти + x.transformations.норм.КоличествоКаналовПамяти + x.transformations.норм.КоличествоСлотовPCIE1 + x.transformations.норм.КоличествоСлотовПамяти) * this.getCoefficients.w4;
        }
        return x;
      });
      return allItems1.filter(x => this.arrayFilt(x));
    },
    allitems3() {
      let alls = [];
      let videokards = [];
      let processors = [];
      let memories = [];
      let motherboard = [];
      this.rendData.forEach(x => {
        switch (x['type']) {
          case 'Видеокарта':
            return videokards.push(x);
          case 'Процессор':
            return processors.push(x);
          case 'Оперативная память':
            return memories.push(x);
          case 'Материнская плата':
            return motherboard.push(x);
          default:
            break;
        }
      });
      videokards.sort((a, b) => b.transformations.рейтинг - a.transformations.рейтинг);
      processors.sort((a, b) => b.transformations.рейтинг - a.transformations.рейтинг);
      memories.sort((a, b) => b.transformations.рейтинг - a.transformations.рейтинг);
      motherboard.sort((a, b) => b.transformations.рейтинг - a.transformations.рейтинг);
      if (videokards.length > 20) {
        videokards.length = 20;
      }
      if (processors.length > 20) {
        processors.length = 20;
      }
      if (memories.length > 20) {
        memories.length = 20;
      }
      if (motherboard.length > 20) {
        motherboard.length = 20;
      }
      videokards.map(x => {
        processors.map(y => {
          memories.map(z => {
            motherboard.map(f => {
              alls.push({
                список: [x, y, z, f],
                общийрейтинг: x.transformations.рейтинг + y.transformations.рейтинг + z.transformations.рейтинг + f.transformations.рейтинг,
                общаяцена: x['price'] + y['price'] + z['price'] + f['price']
              });
              return f;
            });
            return z;
          });
          return y;
        });
        return x;
      });
      return alls;
    }
  }
});

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9f1086ac", content, true, context)
};

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0799dd08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0799dd08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0799dd08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0799dd08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0799dd08_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".error{position:fixed;height:100vh;width:100vw;display:flex;justify-content:center;align-items:center}.error h1{color:#06ffb4}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=0799dd08&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.posts.length ? _c('NuxtChild', {
    attrs: {
      "datas": _vm.rendData,
      "datasWithWeight": _vm.allitems3
    }
  }) : _c('div', {
    staticClass: "error"
  }, [_c('h1', [_vm._v("Соединение с сервером утеряно!")])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=0799dd08&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
var lib_vue_loader_options_pagesvue_type_script_lang_js_ = __webpack_require__(50);

// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7cf8da4e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map