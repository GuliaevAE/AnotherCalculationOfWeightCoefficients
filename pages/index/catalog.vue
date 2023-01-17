<template>

  <div class="containerr">

    <div class="rows">
      <img id="rowLeft" class="row left" src="../../assets/downArrow.svg" @click="selectpart" />
      <span>{{ isOpen }}</span>
      <img id="rowRight" class="row right" src="../../assets/downArrow.svg" @click='selectpart' />
    </div>

    <div class="minicont">
      <div class="fullWidth selectAndInput">
        <div>
          <span>Магазин</span>
          <select v-model="f1.store">
            <option value="">Все</option>
            <option value="DNS">ДНС</option>
            <option value="SITILINK">Ситилинк</option>
          </select>
        </div>
        <div>
          <span>Цена</span>
          <input type="number" v-model="f1.price" />
        </div>

      </div>
      <div class="fullWidth">
        <input type="range" min="0" max="150000" v-model="f1.price" />
      </div>
    </div>

    <transition mode="out-in" name="">
      <div class="minicont">
        <div class="blockForType">
          <CompsItemWeight4 userPart="false" class="items"
            v-for="(it, key) in datas.filter(x => x['type'] == isOpen && prfilt(x, f1) && stfilt(x, f1)).sort((a, b) => b.transformations.рейтинг - a.transformations.рейтинг)"
            :key="it.id" :itemData="it" :transformations="it.transformations" />
        </div>
      </div>
    </transition>



  </div>
</template>



<script>
import Mixin from '~/mixins.js/Mixin2.js'
import { ref } from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  mixins: [],
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

    return { stfilt, prfilt, f1 }
  },
  data() {
    return {
      isOpen: 'Видеокарта',
    }
  },
  methods: {

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
  // computed: {
  //     ...mapGetters('datas', ['getdatas']),
  // }
}

</script>


<style lang="scss" scoped>
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



.fade-leave-active {
  animation: moveout .5s;
}

.fade-enter-active {
  animation: movein .5s;
}

.containerr {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding-top: 75px;
}


.minicont {
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 5px;
  align-items: center;
  padding: 0 10px;
  margin-top: 10px;

}

.minicont span {
  font-family: 'ErmilovBold';
  color: rgb(0, 0, 0);
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%;
  transition: text-shadow .5s;
}

input[type="range"] {
  -webkit-appearance: none;

  height: 10px;
  background: #a5a3a3;
  border-radius: 5px;


}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border: 2px solid black;
  border-radius: 50%;
  background: rgb(6, 255, 180);

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
  top: 32px;
  height: 45px;

  background: #515151;
  background: #747474;
  display: flex;
  width: 100%;
  justify-content: space-between;

  align-items: flex-end;
  z-index: 11;
  box-sizing: border-box;
  padding: 0 15%;
  box-shadow: 0 3px 5px rgb(39, 39, 39);
  z-index: 3;
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

.selectAndInput {
  display: flex;
  justify-content: space-between;

  div {
    width: 49%;
  }
}
</style>