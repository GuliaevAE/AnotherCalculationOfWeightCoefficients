<template>

  <div class="welcome">
    <h1>Сервис для подбора комплектующих для пк</h1>
    <p>Данные предоставлены из магазинов ДНС и СИТИЛИНК</p>
    <p>Последнее обновление данный: <strong>{{ lastdateofchange.dateofchange }}</strong></p>
    <p>Список представленных компонентов
    <div>
      <span>Видеокарты</span>
      <span>Процессоры</span>
      <span>Оперативные памяти</span>
      <span>Материнские платы</span>
    </div>

    </p>
    <p>
      Во вкладке <nuxt-link to="/catalog" active-class="act">Compilation</nuxt-link> можно посмотреть все имеющиеся
      компоненты в отдельности.
    </p>
    <p>
      Во вкладке <nuxt-link to="/weightcoefficients2" active-class="act">Weight</nuxt-link> предоставлены сбоки,
      сортированные по их рейтингам.
    </p>
  </div>

</template>
  
<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'lay1',
  data() {
    return {
      userPosts: []
    }
  },

  async asyncData({ $axios }) {
    try {
      // const posts = await $axios.$get('http://a0754783.xsph.ru/api/docum const posts = await $axios.$get('http://localhost:8080/api/document')
      const dateofchange = await $axios.$get('http://localhost:8080/api/dateofchange')
      const lastdateofchange = dateofchange[dateofchange.length - 1]

      return { lastdateofchange }
    } catch (error) {
      const lastdateofchange = '[Данные удалены]'
      return { lastdateofchange }
    }

  },



}
</script>
  
<style lang="scss" >
.error {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center
}

.welcome {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: white
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      color: white;

      &::before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 10px;
        border: 2px solid rgb(6, 255, 180);
        border-radius: 50%;
        margin-right: 5px;
      }
    }
  }

}

a {
  display: inline-block;
  text-decoration: none;
  color: rgb(195, 195, 195);
  font-size: 20px;
  font-family: "CurrentRegular";
  transition: all .3s;

  &:hover {
    color: rgb(255, 255, 255);
    text-decoration: none;
    transform: scale(1.02);
    animation: moveGradient 4s alternate infinite;
  }
}


h1,
strong {
  color: rgb(6, 255, 180);
}
</style>