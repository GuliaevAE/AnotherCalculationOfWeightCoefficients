<template>
  <div class="header">
    <nuxt-link to="/catalog" active-class="act">Compilation</nuxt-link>
    <!-- <div @click.prevent="isMenu = !isMenu" >
      <Icon icon="material-symbols:menu-rounded"  color= "rgb(195, 195, 195)" height="40"/>
    </div> -->
   
    <nuxt-link to="/weightcoefficients2" active-class="act">Weight</nuxt-link>
    <Transition name="slide">
      <div v-if="isMenu" class="menu">
        <div class="minicont">
          <span>Видеокарта</span>
          <form>
            <label>Название</label>
            <input type="text" v-model="filtVidName" />
            <label>Память</label>
            <input type="number" v-model="filtVidMemory" />
          </form>
          <input type="submit" @click="submit" value="Применить">
        </div>
        <div class="minicont">
          <span>Процессор</span>
          <form>
            <label>Название</label>
            <input type="text" v-model="filtProcName" />
          </form>
          <input type="submit" @click="submit" value="Применить">
        </div>
       
      </div>
    </Transition>
  </div>

</template>

<script>

import { Icon } from '@iconify/vue2';

export default {
  components: {
		Icon,
	},
  data() {
    return {
      isMenu: false,
      filtVidName: '',
      filtVidMemory:'',

      filtProcName:''
    }
  },
  methods: {
    submit() {
      console.log(this.$store.state.datas.filtVidName)
      this.$store.commit('datas/uploadfiltVidName', this.filtVidName)
      this.$store.commit('datas/uploadfiltVidMemory', this.filtVidMemory)

      this.$store.commit('datas/uploadfiltProcName', this.filtProcName)
    }
  }


}
</script>

<style scoped>

.slide-enter-active,
.slide-leave-active{
  transition: all .8s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100vh);
}


.minicont{
  display: flex;
  flex-direction: column;
}

.minicont span {
  font-family: 'ErmilovBold';
  color: rgb(0, 0, 0);
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%;
  transition: text-shadow .5s;
}



input {
  width: 100%;
  border: 2px solid black;
  box-shadow: inset 0 0 1px 1px rgb(1, 212, 149);
  font-family: 'ErmilovBold';
  border-radius: 5px;
  font-size: 12px;
  background: #a5a3a3;
}

.menu {
  position: absolute;
  left: auto;
  right: auto;
  top: 100px;
  background: #515151;
  width: 90%;
  border: 2px solid rgb(6, 255, 180);
  border-radius: 10px;

  display: flex;
  padding: 15px;
  

}

.header {
  height: 45px;
  width: 100%;
  background: #515151;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  z-index: 10;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  box-shadow: 0 3px 5px rgb(39, 39, 39);
  animation:slideHeader 1s ease;
}

@keyframes slideHeader {
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0);
  }
}

.row {
  height: 45px;
}

.mainminibox {
  display: flex;
  width: 100%;
  background: red
}


@keyframes moveGradient {
  0% {
    text-shadow: 0 0 3px hsl(224, 100%, 58%);
  }

  12.5% {
    text-shadow: 0 0 3px hsl(269, 100%, 56%);
  }

  25% {
    text-shadow: 0 0 3px hsl(314, 100%, 57%);
  }

  37.5% {
    text-shadow: 0 0 3px hsl(359, 100%, 54%);
  }

  50% {
    text-shadow: 0 0 3px hsl(44, 100%, 55%);
  }

  62.5% {
    text-shadow: 0 0 3px hsl(89, 100%, 55%);
  }

  75% {
    text-shadow: 0 0 3px hsl(134, 100%, 55%);
  }

  100% {
    text-shadow: 0 0 3px hsl(179, 100%, 56%);
  }

}

a {
  text-decoration: none;
  color: rgb(195, 195, 195);
  font-size: 20px;
  font-family: "CurrentRegular";
  transition: all .3s;
}

.act {

  color: rgb(6, 255, 180);

}

a:hover {
  color: rgb(255, 255, 255);
  transform: scale(1.02);
  animation: moveGradient 4s alternate infinite;
}
</style>
