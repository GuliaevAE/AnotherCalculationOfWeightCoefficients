<template>

  <div class="containerr">
    <div class="rows">
      <nuxt-link to="/profile/catalogForUser" active-class="act">UserCatalog</nuxt-link>
      <nuxt-link to="/profile/weightcoefficientsForUser" active-class="act">UserWeight</nuxt-link>
    </div>
    <!-- <span>Данные пользователя {{getlogin}}</span> -->
    <NuxtChild keep-alive :datas="rendData" :datasWithWeight="datasWithWeight"></NuxtChild>

  </div>
</template>



<script>

import { ref } from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default {

  props: ['datas'],

  setup() {
    let f1 = ref({ store: '', price: 300000 })

    function prfilt(x, f) {
      return x['price'] <= f.price
    }
    function stfilt(x, f) {
      if (f.store === '') { return x }
      return x['store'] == f.store
    }


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


    return { stfilt, prfilt, f1, arrayFilt }
  },
  data() {
    return {
      isOpen: 'Видеокарта',
      userDatas: [],

    }
  },
  mounted() {
    this.$nuxt.$on('refreshUserParts', ($event) => {
      this.fetchUserParts('$event', $event)
    })



  },


  methods: {
    async fetchUserParts() {
      const userParts = await this.$axios.$post('http://localhost:8080/api/allcp', { clientid: this.getloginId })
      this.userDatas = userParts
    },
    redirect() {
      // console.log('redirect')
      this.$nuxt.$router.replace({ path: '/help' });
    },

    normalizeDatasValues(posts) {
      const data = posts
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
        // console.log(x)
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
          // console.log("x['frequency']", x['frequency'])
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
    selectpart: function (event) {

      if (event.target.id === 'rowLeft') {
        if (this.isOpen === 'Видеокарта') return this.isOpen = 'Материнская плата'
        if (this.isOpen === 'Процессор') return this.isOpen = 'Видеокарта'
        if (this.isOpen === 'Оперативная память') return this.isOpen = 'Процессор'
        if (this.isOpen === 'Материнская плата') return this.isOpen = 'Оперативная память'
      }
      if (event.target.id === 'rowRight') {
        if (this.isOpen === 'Материнская плата') return this.isOpen = 'Видеокарта'
        if (this.isOpen === 'Видеокарта') return this.isOpen = 'Процессор'
        if (this.isOpen === 'Процессор') return this.isOpen = 'Оперативная память'
        if (this.isOpen === 'Оперативная память') return this.isOpen = 'Материнская плата'
      }


    },

  },

  computed: {
    ...mapGetters('datas', ['getlogin']),
    ...mapGetters('datas', ['getloginId']),
    ...mapGetters('datas', ['getCoefficients']),
    ...mapGetters('datas', ['getBudget']),
    ...mapGetters('datas', ['getfiltVidName']),
    ...mapGetters('datas', ['getfiltVidMemory']),
    ...mapGetters('datas', ['getfiltProcName']),
    path() {
      return $nuxt.$route.name
    },
    rendData() {
      if (this.getloginId && !this.userDatas.length) {
        this.$axios.$post('http://localhost:8080/api/allcp', { clientid: this.getloginId }).then(res => {this.userDatas = res})
      }
      if (!this.getloginId && this.userDatas.length) {
        this.userDatas = []
        if (this.path === 'index-profile-catalogForUser' || this.path === 'index-profile-weightcoefficientsForUser'){ this.redirect()}
      }

      return this.normalizeDatasValues(this.userDatas)
    },
    datasWithWeight() {
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
  }
}

</script>


<style lang="scss" scoped>
a {
  text-decoration: none;
  color: rgb(195, 195, 195);
  font-size: 15px;
  font-family: "CurrentRegular";
  transition: all .3s;

  &:hover {
    color: rgb(255, 255, 255);
    transform: scale(1.02);

  }
}

.act {

  color: rgb(6, 255, 180);

}




@keyframes moveout {
  50% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-20vw);
  }
}

@keyframes movein {
  0% {
    transform: translateX(-20vw);
  }

  100% {
    transform: translateX(0);
  }
}

.containerr {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding-top: 100px;
}

input,
select {
  border: 2px solid black;
  box-shadow: inset 0 0 1px 1px rgb(1, 212, 149);
  border-radius: 5px;
  font-family: 'ErmilovBold';
  background: #a5a3a3;
  width: 100%;
  font-size: 15px;
  height: 25px;

}





.rows {
  position: fixed;
  top: 30px;
  height: 45px;
  background: #747474;
  background: #515151;
  display: flex;
  width: 100%;
  justify-content: space-between;

  align-items: flex-end;
  z-index: 11;
  box-sizing: border-box;
  padding: 0 15%;
  box-shadow: 0 3px 5px rgb(39, 39, 39);

  z-index: 4;
  animation: dopmenuactive 1s ease-out;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
}

@keyframes dopmenuactive {
  0% {
    top: 0;
  }

  100% {
    top: 32px;
  }
}

.rows span {
  width: auto;
  margin: 0;
  font-family: 'ErmilovBold';
  color: rgb(0, 0, 0);
  font-size: 18px;
  transition: text-shadow .5s;
}

.row {
  height: 25px;
  padding: 5px 0;

}

.left {
  transform: rotate(90deg);
}

.right {
  transform: rotate(-90deg);
}



.blockForType {
  height: auto;
  width: 100%;
  overflow-y: auto;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

}

.blockForType .items {
  margin-top: 15px;


}

@media (max-width: 760px) {
  .blockForType .items {
    width: 100%;
  }
}

@media (min-width: 760px) {
  .blockForType .items {
    width: 48%;
  }
}

@media (min-width: 1200px) {
  .blockForType .items {
    width: 31%;
  }
}



.blockForType::-webkit-scrollbar {
  width: 0;
}

.fullWidth {
  width: 100%;
}
</style>