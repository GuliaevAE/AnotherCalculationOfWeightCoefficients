<template>
  <div class="header">
    <!-- <a href="#/Container" class="Каталог">Catalog </a> -->
    <nuxt-link to="/catalog" active-class="act">Compilation</nuxt-link>
    <nuxt-link to="/weightcoefficients2" active-class="act">Weight</nuxt-link>
  </div>

</template>

<script>



export default {
  
  
  
}
</script>

<style scoped>


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
  border-bottom-left-radius: 25% ;
  border-bottom-right-radius: 25% ;
  box-shadow: 0 3px 5px rgb(39, 39, 39);
  
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
    text-shadow: 0 0  3px hsl(224, 100%, 58%);
  }

  12.5% {
    text-shadow: 0  0  3px hsl(269, 100%, 56%);
  }

  25% {
    text-shadow: 0  0  3px hsl(314, 100%, 57%);
  }

  37.5% {
    text-shadow: 0  0  3px hsl(359, 100%, 54%);
  }

  50% {
    text-shadow: 0  0  3px hsl(44, 100%, 55%);
  }

  62.5% {
    text-shadow: 0  0  3px hsl(89, 100%, 55%);
  }

  75% {
    text-shadow: 0  0  3px hsl(134, 100%, 55%);
  }

  100% {
    text-shadow: 0  0  3px hsl(179, 100%, 56%);
  }

}

a {
  text-decoration: none;
  color: rgb(195, 195, 195);
  font-size: 20px;
  
  font-family: "CurrentRegular", Helvetica, Arial;
  transition: all .3s;
}
.act{
  text-decoration: none;
  color: rgb(6, 255, 180);
  font-size: 20px;
  
  font-family: "CurrentRegular", Helvetica, Arial;
  transition: all .3s;
}

a:hover {
  color: rgb(255, 255, 255);
  transform: scale(1.02);
  animation: moveGradient 4s alternate infinite;
}
</style>
