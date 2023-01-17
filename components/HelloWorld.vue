<template>
  <div class="header">
    <nuxt-link to="/catalog" active-class="act">Compilation</nuxt-link>
    <!-- <div @click.prevent="isMenu = !isMenu" >
      <Icon icon="material-symbols:menu-rounded"  color= "rgb(195, 195, 195)" height="40"/>
    </div> -->
    
    <nuxt-link to="/weightcoefficients2" active-class="act">Weight</nuxt-link>
    <div class="options" v-if="getlogin"><span @click="isRegLog = !isRegLog">Pro</span>/<nuxt-link to="/profile/catalogForUser" >file</nuxt-link></div>
    <div class="options" v-else><span @click="isRegLog = !isRegLog">Profile</span></div>
    <!-- <div class="userCard">
      <span v-if="getlogin">{{getlogin}}</span>
      <span v-else>Пусто</span>
    </div> -->
    <Transition name="slide">
      <FilterMenu v-if="isMenu" />
      <RegLogMenu v-if="isRegLog"/>
    </Transition>

    <div v-if="getlogin" class="loginCard" >
      <div>{{getlogin}}</div>
 
    </div>
  </div>

</template>

<script>

import { Icon } from '@iconify/vue2';
import { mapGetters } from 'vuex'

export default {
  components: {
		Icon
	},
  data() {
    return {
      isMenu: false,
      isRegLog:false,
      filtVidName: '',
      filtVidMemory:'',
      filtProcName:''
    }
  },
  computed:{
    ...mapGetters('datas', ['getlogin']),
    ...mapGetters('datas', ['getloginId']),
    path(){
      return $nuxt.$route.name
    }
  },
  methods: {
    redirect() {
      this.$nuxt.$router.replace({ path: '/help'});
    }
  },
  mounted(){
    this.$nuxt.$on('closeRegLog', ($event) => {
     this.isRegLog = false
    })
  }


}
</script>

<style lang="scss" scoped>


.loginCard{
  position: absolute;
  left: 0;
  bottom:-92vh;
  padding: 10px 20px;
  background:grey;
  color: rgb(6, 255, 180);
  display: flex;
  align-items:center;
  border-radius: 0 10px 10px 0;
}

.slide-enter-active,
.slide-leave-active{
  transition: all .8s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100vh);
}




.header {
  height: 45px;
  width: 100%;
  
  background: #3c3c3e;
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



.options{
  span{
    display:inline-block
  }
  span:hover{
    color: rgb(255, 255, 255);
  }
}


a, .options {
  text-decoration: none;
  color: rgb(195, 195, 195);
  font-size: 18px;
  font-family: "CurrentRegular";
  transition: all .3s;
}

.act {
  color: rgb(6, 255, 180);
}

a:hover {
  color: rgb(255, 255, 255);
  transform: scale(1.02);
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
</style>
