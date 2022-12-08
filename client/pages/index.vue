<template>

  <div>
    <NuxtChild :datas='rendData' :datasWithWeight='allitems3' v-if="posts.length"/>
    <div v-else class="error">
      <h1>Соединение с сервером утеряно!</h1>
    </div>
  </div>
  


</template>
  
<script>

// import Mixin from '~/mixins.js/Mixin.js'
import Mixin2 from '~/mixins.js/Mixin2.js'


import { mapGetters } from 'vuex'

export default {
  mixins: [Mixin2],
  layout: 'lay1',
  setup() {
    function arrayFilt(x) {
      if (x.type === 'Видеокарта'
        && x.name.toLowerCase().indexOf(this.getfiltVidName.toLowerCase()) !== -1
        && x['memory'] >= this.getfiltVidMemory) {
        return x
      }
      if (x.type === 'Процессор'
        && x.name.toLowerCase().indexOf(this.getfiltProcName.toLowerCase()) !== -1) {
        return x
      }
      if (x.type === 'Оперативная память') {
        return x
      }
      if (x.type === 'Материнская плата') {
        return x
      }

    }
    return { arrayFilt }
  },
  async asyncData({ $axios }) {
    try {
      const posts = await $axios.$get('http://localhost:8080/api/document')
      return { posts }
    } catch (error) {
      const posts = []
      return {posts}
    }

  },
  computed: {
    ...mapGetters('datas', ['getCoefficients']),
    ...mapGetters('datas', ['getBudget']),
    ...mapGetters('datas', ['getfiltVidName']),
    ...mapGetters('datas', ['getfiltVidMemory']),

    ...mapGetters('datas', ['getfiltProcName']),
    rendData() {
      
      const data = this.posts
      /////////////////////////видеокарта///////////////////////////////////
      let толькочастотавидеокарты = { список: [] }
      let толькопамятьвидеокарты = { список: [] }
      let ТолькоЧастотаПамятиВидеокарты = { список: [] }
      let ТолькоТехпроцессВидеокарты = { список: [] }
      let ТолькоРазрядностьШиныПамяти = { список: [] }
      /////////////////////////Процессор///////////////////////////////////
      let толькочастотапроцессора = { список: [] }
      let толькочислопотоков = { список: [] }
      let ТолькоКоличествоЯдер = { список: [] }
      let ТолькоКоличествоКаналов = { список: [] }
      let ТолькоЧастотаГрафическогоЯдра = { список: [] }
      let ТолькоЧастотаПамятиПроцессора = { список: [] }
      // /////////////////////////Оперативная память///////////////////////////////////
      let толькообъем = { список: [] }
      let толькочастотаоперативки = { список: [] }
      let ТолькоКоличествоМодулей = { список: [] }
      let ТолькоОбъемМодуля = { список: [] }
      /////////////////////////Материнская плата///////////////////////////////////
      let ТолькоМаксимальнаяЧастотаПамяти = { список: [] }
      let ТолькоМаксимальныйОбъемПамяти = { список: [] }
      let ТолькоКоличествоКаналовПамяти = { список: [] }
      let ТолькоКоличествоСлотовPCIE1 = { список: [] }
      let ТолькоКоличествоСлотовПамяти = { список: [] }

      let allItems1 = data.map(x => {
        console.log(x)
        if (x['type'] === 'Видеокарта') {
          x['memory'] = Number(x['memory'])
          x['frequency'] = Number(x['frequency'])
          x['frequencymemory'] = Number(x['frequencymemory'])
          x['processtechnology'] = Number(x['processtechnology'])
          x['memorybuswidth'] = Number(x['memorybuswidth'])
          // typeofmemory
          толькочастотавидеокарты.список.push(Number(x['frequency']))
          толькопамятьвидеокарты.список.push(Number(x['memory']))
          ТолькоЧастотаПамятиВидеокарты.список.push(Number(x['frequencymemory']))
          ТолькоТехпроцессВидеокарты.список.push(Number(x['processtechnology']))
          ТолькоРазрядностьШиныПамяти.список.push(Number(x['memorybuswidth']))
          x.transformations = {
            норм: {
              частоставидеокарты: 0,
              памятьвидеокарты: 0,
              ЧастотаПамяти: 0,
              Техпроцесс: 0,
              РазрядностьШиныПамяти: 0,
            }, рейтинг: 0
          }
        }
        if (x['type'] === 'Процессор') {
          x['frequency'] = Number(x['frequency'])
          x['numberofthreads'] = Number(x['numberofthreads'])
          x['numberofcores'] = Number(x['numberofcores'])
          x['numberofchannels'] = Number(x['numberofchannels'])
          x['graphicscorefrequency'] = (x['graphicscorefrequency'])
          // x ['ЧастотаПамяти'] = Number(x ['ЧастотаПамяти'])
          толькочастотапроцессора.список.push(Number(x['frequency']))
          толькочислопотоков.список.push(Number(x['numberofthreads']))
          ТолькоКоличествоЯдер.список.push(Number(x['numberofcores']))
          ТолькоКоличествоКаналов.список.push(Number(x['numberofchannels']))
          ТолькоЧастотаГрафическогоЯдра.список.push((x['graphicscorefrequency']))
          // ТолькоЧастотаПамятиПроцессора.список.push(Number(x ['ЧастотаПамяти']))
          x.transformations = {
            норм: {
              частостапроцессора: 0,
              числопотоков: 0,
              КоличествоЯдер: 0,
              КоличествоКаналов: 0,
              ЧастотаГрафическогоЯдра: 0,
              ЧастотаПамяти: 0,
            }, рейтинг: 0
          }
        }
        if (x['type'] === 'Оперативная память') {
          console.log("x['frequency']", x['frequency'])
          x['capacity'] = Number(eval(x['capacity']))
          x['frequency'] = Number(x['frequency'])
          x['numberofmodules'] = Number(x['numberofmodules'])
          x['volumemodule'] = Number(x['volumemodule'])
          толькообъем.список.push(Number(x['capacity']))
          толькочастотаоперативки.список.push(Number(x['frequency']))
          ТолькоКоличествоМодулей.список.push(Number(x['numberofmodules']))
          ТолькоОбъемМодуля.список.push(Number(x['volumemodule']))
          x.transformations = { норм: { объем: 0, частотаоперативки: 0, КоличествоМодулей: 0, ОбъемМодуля: 0 }, рейтинг: 0 }
        }
        if (x['type'] === 'Материнская плата') {
          x['maxmemoryfrequency'] = Number(x['maxmemoryfrequency'])
          x['maxmemory'] = Number(x['maxmemory'])
          x['numberofmemorychannels'] = Number(x['numberofmemorychannels'])
          x['numberofslotspcie1'] = Number(x['numberofslotspcie1'])
          x['numberofmemoryslots'] = Number(x['numberofmemoryslots'])
          ТолькоМаксимальнаяЧастотаПамяти.список.push(Number(x['maxmemoryfrequency']))
          ТолькоМаксимальныйОбъемПамяти.список.push(Number(x['maxmemory']))
          ТолькоКоличествоКаналовПамяти.список.push(Number(x['numberofmemorychannels']))
          ТолькоКоличествоСлотовPCIE1.список.push(Number(x['numberofslotspcie1']))
          ТолькоКоличествоСлотовПамяти.список.push(Number(x['numberofmemoryslots']))
          x.transformations = { норм: { объем: 0, частотаоперативки: 0, КоличествоМодулей: 0, ОбъемМодуля: 0 }, рейтинг: 0 }
        }
        x['price'] = Number(x['price'])
        return x
      })
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
        let max = 0
        let min = numArray[0]

        numArray.forEach(x => {
          if (x > max) { max = x }
          if (x < min) { min = x }
        })
        return { max: max, min: min }
      }

      //Видеокарта
      толькочастотавидеокарты.мах = getOfArray(толькочастотавидеокарты.список).max
      толькочастотавидеокарты.мин = getOfArray(толькочастотавидеокарты.список).min
      толькопамятьвидеокарты.мах = getOfArray(толькопамятьвидеокарты.список).max
      толькопамятьвидеокарты.мин = getOfArray(толькопамятьвидеокарты.список).min
      ТолькоЧастотаПамятиВидеокарты.мах = getOfArray(ТолькоЧастотаПамятиВидеокарты.список).max
      ТолькоЧастотаПамятиВидеокарты.мин = getOfArray(ТолькоЧастотаПамятиВидеокарты.список).min
      ТолькоТехпроцессВидеокарты.мах = getOfArray(ТолькоТехпроцессВидеокарты.список).max
      ТолькоТехпроцессВидеокарты.мин = getOfArray(ТолькоТехпроцессВидеокарты.список).min
      ТолькоРазрядностьШиныПамяти.мах = getOfArray(ТолькоРазрядностьШиныПамяти.список).max
      ТолькоРазрядностьШиныПамяти.мин = getOfArray(ТолькоРазрядностьШиныПамяти.список).min


      //Процессор
      толькочастотапроцессора.мах = getOfArray(толькочастотапроцессора.список).max
      толькочастотапроцессора.мин = getOfArray(толькочастотапроцессора.список).min
      толькочислопотоков.мах = getOfArray(толькочислопотоков.список).max
      толькочислопотоков.мин = getOfArray(толькочислопотоков.список).min

      ТолькоКоличествоЯдер.мах = getOfArray(ТолькоКоличествоЯдер.список).max
      ТолькоКоличествоЯдер.мин = getOfArray(ТолькоКоличествоЯдер.список).min
      ТолькоКоличествоКаналов.мах = getOfArray(ТолькоКоличествоКаналов.список).max
      ТолькоКоличествоКаналов.мин = getOfArray(ТолькоКоличествоКаналов.список).min
      ТолькоЧастотаГрафическогоЯдра.мах = getOfArray(ТолькоЧастотаГрафическогоЯдра.список).max
      ТолькоЧастотаГрафическогоЯдра.мин = getOfArray(ТолькоЧастотаГрафическогоЯдра.список).min
      // ТолькоЧастотаПамятиПроцессора.мах = getOfArray(ТолькоЧастотаПамятиПроцессора.список).max
      // ТолькоЧастотаПамятиПроцессора.мин = getOfArray(ТолькоЧастотаПамятиПроцессора.список).min


      //Оперативка
      толькообъем.мах = getOfArray(толькообъем.список).max
      толькообъем.мин = getOfArray(толькообъем.список).min
      толькочастотаоперативки.мах = getOfArray(толькочастотаоперативки.список).max
      толькочастотаоперативки.мин = getOfArray(толькочастотаоперативки.список).min
      ТолькоКоличествоМодулей.мах = getOfArray(ТолькоКоличествоМодулей.список).max
      ТолькоКоличествоМодулей.мин = getOfArray(ТолькоКоличествоМодулей.список).min
      ТолькоОбъемМодуля.мах = getOfArray(ТолькоОбъемМодуля.список).max
      ТолькоОбъемМодуля.мин = getOfArray(ТолькоОбъемМодуля.список).min


      //Материнская плата
      ТолькоМаксимальнаяЧастотаПамяти.мах = getOfArray(ТолькоМаксимальнаяЧастотаПамяти.список).max
      ТолькоМаксимальнаяЧастотаПамяти.мин = getOfArray(ТолькоМаксимальнаяЧастотаПамяти.список).min
      ТолькоМаксимальныйОбъемПамяти.мах = getOfArray(ТолькоМаксимальныйОбъемПамяти.список).max
      ТолькоМаксимальныйОбъемПамяти.мин = getOfArray(ТолькоМаксимальныйОбъемПамяти.список).min
      ТолькоКоличествоКаналовПамяти.мах = getOfArray(ТолькоКоличествоКаналовПамяти.список).max
      ТолькоКоличествоКаналовПамяти.мин = getOfArray(ТолькоКоличествоКаналовПамяти.список).min
      ТолькоКоличествоСлотовPCIE1.мах = getOfArray(ТолькоКоличествоСлотовPCIE1.список).max
      ТолькоКоличествоСлотовPCIE1.мин = getOfArray(ТолькоКоличествоСлотовPCIE1.список).min
      ТолькоКоличествоСлотовПамяти.мах = getOfArray(ТолькоКоличествоСлотовПамяти.список).max
      ТолькоКоличествоСлотовПамяти.мин = getOfArray(ТолькоКоличествоСлотовПамяти.список).min

      allItems1.map(x => {
        if (x['type'] === 'Видеокарта') {
          x.transformations.норм.частоставидеокарты = x['frequency'] / толькочастотавидеокарты.мах
          x.transformations.норм.памятьвидеокарты = x['memory'] / толькопамятьвидеокарты.мах
          x.transformations.норм.ЧастотаПамяти = x['frequencymemory'] / ТолькоЧастотаПамятиВидеокарты.мах
          x.transformations.норм.Техпроцесс = x['processtechnology'] / ТолькоТехпроцессВидеокарты.мах
          x.transformations.норм.РазрядностьШиныПамяти = x['memorybuswidth'] / ТолькоРазрядностьШиныПамяти.мах
          x.transformations.рейтинг = (x.transformations.норм.частоставидеокарты + x.transformations.норм.памятьвидеокарты + x.transformations.норм.ЧастотаПамяти - x.transformations.норм.Техпроцесс + x.transformations.норм.РазрядностьШиныПамяти) * this.getCoefficients.w1
        }
        if (x['type'] === 'Процессор') {
          x.transformations.норм.частостапроцессора = x['frequency'] / толькочастотапроцессора.мах
          x.transformations.норм.числопотоков = x['numberofthreads'] / толькочислопотоков.мах
          x.transformations.норм.КоличествоЯдер = x['numberofcores'] / ТолькоКоличествоЯдер.мах
          x.transformations.норм.КоличествоКаналов = x['numberofchannels'] / ТолькоКоличествоКаналов.мах
          x.transformations.норм.ЧастотаГрафическогоЯдра = x['graphicscorefrequency'] / ТолькоЧастотаГрафическогоЯдра.мах
          // x.transformations.норм.ЧастотаПамяти = x ['ЧастотаПамяти'] / ТолькоЧастотаПамятиПроцессора.мах
          x.transformations.рейтинг = (x.transformations.норм.частостапроцессора + x.transformations.норм.числопотоков + x.transformations.норм.КоличествоЯдер + x.transformations.норм.КоличествоКаналов + x.transformations.норм.ЧастотаГрафическогоЯдра) * this.getCoefficients.w2
        }
        if (x['type'] === 'Оперативная память') {
          x.transformations.норм.объем = x['capacity'] / толькообъем.мах
          x.transformations.норм.частотаоперативки = x['frequency'] / толькочастотаоперативки.мах
          x.transformations.норм.КоличествоМодулей = x['numberofmodules'] / ТолькоКоличествоМодулей.мах
          x.transformations.норм.ОбъемМодуля = x['volumemodule'] / ТолькоОбъемМодуля.мах
          x.transformations.рейтинг = (x.transformations.норм.объем + x.transformations.норм.частотаоперативки + x.transformations.норм.КоличествоМодулей + x.transformations.норм.ОбъемМодуля) * this.getCoefficients.w3
        }
        if (x['type'] === 'Материнская плата') {
          x.transformations.норм.МаксимальнаяЧастотаПамяти = x['maxmemoryfrequency'] / ТолькоМаксимальнаяЧастотаПамяти.мах
          x.transformations.норм.МаксимальныйОбъемПамяти = x['maxmemory'] / ТолькоМаксимальныйОбъемПамяти.мах
          x.transformations.норм.КоличествоКаналовПамяти = x['numberofmemorychannels'] / ТолькоКоличествоКаналовПамяти.мах
          x.transformations.норм.КоличествоСлотовPCIE1 = x['numberofslotspcie1'] / ТолькоКоличествоСлотовPCIE1.мах
          x.transformations.норм.КоличествоСлотовПамяти = x['numberofmemoryslots'] / ТолькоКоличествоСлотовПамяти.мах
          x.transformations.рейтинг = (x.transformations.норм.МаксимальнаяЧастотаПамяти + x.transformations.норм.МаксимальныйОбъемПамяти + x.transformations.норм.КоличествоКаналовПамяти + x.transformations.норм.КоличествоСлотовPCIE1 + x.transformations.норм.КоличествоСлотовПамяти) * this.getCoefficients.w4
        }
        return x
      })
      return allItems1.filter(x => this.arrayFilt(x))


    },
    allitems3() {
      let alls = []
      let videokards = []
      let processors = []
      let memories = []
      let motherboard = []
      this.rendData.forEach(x => {
        switch (x['type']) {
          case 'Видеокарта':
            return videokards.push(x)
          case 'Процессор':
            return processors.push(x)
          case 'Оперативная память':
            return memories.push(x)
          case 'Материнская плата':
            return motherboard.push(x)
          default:
            break;
        }
      })

      videokards.sort((a, b) => b.transformations.рейтинг - a.transformations.рейтинг)
      processors.sort((a, b) => b.transformations.рейтинг - a.transformations.рейтинг)
      memories.sort((a, b) => b.transformations.рейтинг - a.transformations.рейтинг)
      motherboard.sort((a, b) => b.transformations.рейтинг - a.transformations.рейтинг)

      if (videokards.length > 20) { videokards.length = 20 }
      if (processors.length > 20) { processors.length = 20 }
      if (memories.length > 20) { memories.length = 20 }
      if (motherboard.length > 20) { motherboard.length = 20 }


      videokards.map(x => {
        processors.map(y => {
          memories.map(z => {
            motherboard.map(f => {
              alls.push({
                список: [x, y, z, f],
                общийрейтинг: x.transformations.рейтинг + y.transformations.рейтинг + z.transformations.рейтинг + f.transformations.рейтинг,
                общаяцена: x['price'] + y['price'] + z['price'] + f['price']
              })
              return f
            })
            return z
          })
          return y
        })
        return x
      })
      return alls
    },
  },
}
</script>
  
<style>
.error{
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items:center
}

.error h1{
  color: rgb(6, 255, 180);
}


</style>