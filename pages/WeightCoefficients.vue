<template>

  <div class="containerr">

    <div class="minicont">
      <span>В.карта <input type="number" v-model="w1sub" /></span>
      <input id="Видеокарта" type="range" min="0.01" max="0.99" step="0.01" v-model="w1sub"
        @change="onchangerangeinput" />


    </div>
    <div class="minicont">
      <span>CPU <input type="number" v-model="w2sub" /></span>
      <input id="Процессор" type="range" min="0.01" max="0.99" step="0.01" v-model="w2sub"
        @change="onchangerangeinput" />

    </div>
    <div class="minicont">
      <span>RAM <input type="number" v-model="w3sub" /></span>
      <input id="Оперативная память" type="range" min="0.01" max="0.99" step="0.01" v-model="w3sub"
        @change="onchangerangeinput" />

    </div>
    <div class="groups " style="justify-content:center">
      <div class="btnBack" @click="inputschange">
        <span class="btn">Применить</span>
      </div>

    </div>

    <div class="groups groupsName">
      <span>Бюджет<input type="number" v-model="budget" /></span>

    </div>


    <div class="groups forArrows">
      <span @click="page-=10">Влево</span>
      <span @click="page+=10">Вправо</span>
    </div>
    <div class="groups" v-for="(it,key) in allItems3.slice(page, page+10)" :key="key">
      <div class="groupRating">
        <span>Общая цена: {{it.общаяцена}}₽</span>
        <span>Общий рейтинг: {{it.общийрейтинг.toFixed(5)}}</span>

      </div>
      
        <div class="groupsData">

          <CompsItemWeight2 id="items" v-for="(it1, key1) in it.список" :key="key1" :name="it1['name']"
            :store="it1['store']" :type="it1['type']" :price="it1['price']" :link="it1['link']" :cpu="it1['cpu']"
            :transformations='it1.transformations' :w='w1' :image="it1['image']" isImage="true" />

        </div>
      


    </div>


  </div>


</template>
  
<script>



import Mixin from '~/mixins.js/Mixin.js'
import {toNumber} from '@vue/shared'
import { ref } from 'vue'


export default {
  name: 'WeightCoefficients',
  mixins: [Mixin],
  layout:'lay1',
  methods: {
    inputschange() {


      let allchange = (1 - toNumber(this.w1sub) - toNumber(this.w2sub) - toNumber(this.w3sub))
      this.w1sub = toNumber(this.w1sub + allchange / 3)
      this.w2sub = toNumber(this.w2sub + allchange / 3)
      this.w3sub = toNumber(this.w3sub + allchange / 3)
      this.w1 = this.w1sub
      this.w2 = this.w2sub
      this.w3 = this.w3sub

    },
    onchangerangeinput(event) {
      if (event.target.id === 'Видеокарта') {
        this.w1sub = toNumber(this.w1sub)
      }
      if (event.target.id === 'Процессор') {
        this.w2sub = toNumber(this.w2sub)
      }
      if (event.target.id === 'Оперативная память') {
        this.w3sub = toNumber(this.w3sub)
      }
    }
  },

  setup() {
    let f1 = ref({ store: '', price: 300000 })
    let f2 = ref({ store: '', price: 300000 })
    let f3 = ref({ store: '', price: 300000 })
    function prfilt(x) {
      if (x['type'] === 'Видеокарта') {
        return x['price'] <= f1.value.price
      }
      if (x['type'] === 'Процессор') {
        return x['price'] <= f2.value.price
      }
      if (x['type'] === 'Оперативная память') {
        return x['price'] <= f3.value.price
      }
    }
    // function budgetfilt(x) {
    //   return toNumber(x['price'].replace(' ', '')) <= budget
    // }
    function stfilt(x, f) {
      if (f.store === '') { return x }
      return x['store'] == f.store
    }


    // function onChangeInputs()


    return { stfilt, prfilt, f1, f2, f3 }
  },

  computed: {
    allItems2: function () {

      /////////////////////////видеокарта///////////////////////////////////
      let толькочастотавидеокарты = { список: [] }
      let толькопамятьвидеокарты = { список: [] }

      /////////////////////////Процессор///////////////////////////////////
      let толькочастотапроцессора = { список: [] }
      let толькочислопотоков = { список: [] }

      // /////////////////////////Оперативная память///////////////////////////////////
      let толькообъем = { список: [] }
      let толькочастотаоперативки = { список: [] }

      let allItems1 = this.allItems.map(x => {
        if (x['type'] === 'Видеокарта') {
          x['cpu']['par2'] = toNumber(x['cpu']['par2'])
          x['cpu']['par8'] = toNumber(x['cpu']['par8'])
        }
        if (x['type'] === 'Процессор') {
          x['cpu']['par2'] = toNumber(x['cpu']['par2'])
          x['cpu']['par4'] = toNumber(x['cpu']['par4'])
        }
        if (x['type'] === 'Оперативная память') {
          x['cpu']['par1'] = toNumber(x['cpu']['par1'])
          x['cpu']['par2'] = toNumber(x['cpu']['par2'])

        }
        x['price'] = toNumber(x['price'])
        return x
      })
      allItems1.map(x => {

        if (x['type'] === 'Видеокарта') {
          толькочастотавидеокарты.список.push(Number(x['cpu']['par8']))
          толькопамятьвидеокарты.список.push(Number(x['cpu']['par2']))
          x.transformations = { видеокартаНорм: { частоставидеокарты: 0, памятьвидеокарты: 0, }, рейтинг: 0 }
        }

        if (x['type'] === 'Процессор') {
          толькочастотапроцессора.список.push(Number(x['cpu']['par2']))
          толькочислопотоков.список.push(Number(x['cpu']['par4']))
          x.transformations = { процессорНорм: { частостапроцессора: 0, числопотоков: 0, }, рейтинг: 0 }
        }

        if (x['type'] === 'Оперативная память') {
          толькообъем.список.push(Number(x['cpu']['par1']))
          толькочастотаоперативки.список.push(Number(x['cpu']['par2']))
          x.transformations = { оперативкаНорм: { объем: 0, частотаоперативки: 0, }, рейтинг: 0 }
        }
        return x
      })
      function getOfArray(numArray) {
        let max = 0
        let min = numArray[0]

        numArray.forEach(x => {
          if (x > max) { max = x }
          if (x < min) {

            min = x
          }
        })
        return { max: max, min: min }
      }
      толькочастотавидеокарты.мах = getOfArray(толькочастотавидеокарты.список).max
      толькочастотавидеокарты.мин = getOfArray(толькочастотавидеокарты.список).min
      толькопамятьвидеокарты.мах = getOfArray(толькопамятьвидеокарты.список).max
      толькопамятьвидеокарты.мин = getOfArray(толькопамятьвидеокарты.список).min

      толькочастотапроцессора.мах = getOfArray(толькочастотапроцессора.список).max
      толькочастотапроцессора.мин = getOfArray(толькочастотапроцессора.список).min
      толькочислопотоков.мах = getOfArray(толькочислопотоков.список).max
      толькочислопотоков.мин = getOfArray(толькочислопотоков.список).min

      толькообъем.мах = getOfArray(толькообъем.список).max
      толькообъем.мин = getOfArray(толькообъем.список).min
      толькочастотаоперативки.мах = getOfArray(толькочастотаоперативки.список).max
      толькочастотаоперативки.мин = getOfArray(толькочастотаоперативки.список).min




      allItems1.map(x => {
        if (x['type'] === 'Видеокарта') {
          x.transformations.видеокартаНорм.частоставидеокарты = x['cpu']['par8'] / толькочастотавидеокарты.мах
          x.transformations.видеокартаНорм.памятьвидеокарты = x['cpu']['par2'] / толькопамятьвидеокарты.мах
          x.transformations.рейтинг = (x.transformations.видеокартаНорм.частоставидеокарты + x.transformations.видеокартаНорм.памятьвидеокарты) * this.w1
        }

        if (x['type'] === 'Процессор') {
          x.transformations.процессорНорм.частостапроцессора = x['cpu']['par2'] / толькочастотапроцессора.мах
          x.transformations.процессорНорм.числопотоков = x['cpu']['par4'] / толькочислопотоков.мах
          x.transformations.рейтинг = (x.transformations.процессорНорм.частостапроцессора + x.transformations.процессорНорм.числопотоков) * this.w2
        }

        if (x['type'] === 'Оперативная память') {
          x.transformations.оперативкаНорм.объем = x['cpu']['par1'] / толькообъем.мах
          x.transformations.оперативкаНорм.частотаоперативки = x['cpu']['par2'] / толькочастотаоперативки.мах
          x.transformations.рейтинг = (x.transformations.оперативкаНорм.объем + x.transformations.оперативкаНорм.частотаоперативки) * this.w3
        }


        return x
      })



      return allItems1

    },
    allItems3: function () {
      let alls = []
      let videokards = []
      let processors = []
      let memories = []
      this.allItems2.map(x => {
        if (x['type'] === 'Видеокарта') { videokards.push(x) }
        if (x['type'] === 'Процессор') { processors.push(x) }
        if (x['type'] === 'Оперативная память') { memories.push(x) }
        return x
      })



      videokards.map(x => {
        processors.map(y => {
          memories.map(z => {
            alls.push({
              список: [x, y, z],
              общийрейтинг: x.transformations.рейтинг + y.transformations.рейтинг + z.transformations.рейтинг,
              общаяцена: x['price'] + y['price'] + z['price']
            })

            return z
          })
          return y
        })
        return x
      })

      console.log(alls)

      // .filter(x=>Number(x.общаяцена) < this.budget)

      return alls.filter(x => x.общаяцена < this.budget).sort((a, b) => b.общийрейтинг - a.общийрейтинг)
    }

  }
}
</script>
  


<!-- eef0f3 -->
<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  
  height: 10px;
  background: #a5a3a3;
  border-radius: 5px;
  
  
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width:15px;
  border:2px solid black;
  border-radius: 50%;
  background: rgb(6, 255, 180);
  
}

.groups {
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 5px;
  align-items: center;
  padding: 0 20px;

  padding-top: 10px;
}


.groups.forArrows {
  flex-direction: row;
  justify-content: space-between;
}

.groupsName span {
  width: 100%;
}

.groups span {
  font-family: 'ErmilovBold';
  color: rgb(0, 0, 0);
  font-size: 18px;



}

.groupRating {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;


}

.groupRating span {
  font-size: 15px;
  font-weight: 800;

}

.containerr {
  height: auto;
  width: 100%;
  background: #444444;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 0;
  padding-top: 60px;
  padding-bottom: 30px;
}


.minicont {
  width: 33%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 5px;
  align-items: center;
  padding: 0 10px;
}


.minicont span {
  font-family: 'ErmilovBold';
  color: rgb(0, 0, 0);
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%;

}

.miniBox {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
}

.₽::after {
  content: ' ₽';
  font-weight: 800;
  font-size: 16px;
}

input {
  width: 99%;
  border: 2px solid black;
  box-shadow:inset 0 0 1px 1px rgb(1, 212, 149);
  font-family: 'ErmilovBold';
  border-radius:5px;
  font-size: 15px;
  background: #a5a3a3;
}

select {
  width: 100%;
}

select {
  font-family: 'AktivGroteskCorp';
  font-size: 18px;
  background: rgba(255, 255, 255, 0);
  border: 1px solid black;
  border-radius: 5px;
}

.row {
  height: 45px;
}

.mainminibox {
  display: flex;
  width: 100%;
}

.blockForType {
  height: 79vh;
  overflow-y: auto;
  padding: 0 10px;
  margin-top: 10px;
  width: 100%;
  min-width: 150px;

}

.blockForType::-webkit-scrollbar {
  width: 0;
}

.btnBack span {
  color:aliceblue;
  padding: 5px;
  font-size: 25px;
  text-shadow: -0 -3px  rgb(92, 92, 92), -0 -5px  rgb(6, 255, 180);
  letter-spacing: 3px;
  transition: all .3s;
}

.btnBack span:hover {
  text-shadow: -0 -3px  rgb(92, 92, 92), -0 -5px  red;
}



.btn {
  

}

.groups #items {
  width: auto;
  margin: 0 5px;

}

.groupsData {

  display: flex;
  justify-content: center;

}


@media (max-width: 1150px) {
  .groups #items {
    width: 100%;
    margin-bottom: 10px;
  }

  .groupsData {
    flex-wrap: wrap;
  }
}

@media (min-width: 1150px) {
  .groups #items {
    width: 32%;
  }
}
</style>
  
  
  
  