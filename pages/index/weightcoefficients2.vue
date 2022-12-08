<template>

    <div class="containerr">
        <div class="minicont">
            <span>В.карта <input type="number" v-model="w1s" /></span>
            <input id="Видеокарта" type="range" min="0.01" max="0.99" step="0.01" v-model="w1s"
                @change="onchangerangeinput" />
        </div>
        <div class="minicont">
            <span>CPU <input type="number" v-model="w2s" /></span>
            <input id="Процессор" type="range" min="0.01" max="0.99" step="0.01" v-model="w2s"
                @change="onchangerangeinput" />
        </div>
        <div class="minicont">
            <span>RAM <input type="number" v-model="w3s" /></span>
            <input id="Оперативная память" type="range" min="0.01" max="0.99" step="0.01" v-model="w3s"
                @change="onchangerangeinput" />
        </div>
        <div class="minicont">
            <span>М.плата <input type="number" v-model="w4s" /></span>
            <input id="Материнская плата" type="range" min="0.01" max="0.99" step="0.01" v-model="w4s"
                @change="onchangerangeinput" />
        </div>
        <div class="groups " style="justify-content:center">
            <div class="btnBack" @click="inputschange">
                <span class="btn">Применить</span>
            </div>
        </div>
        <div class="groups groupsName">
            <span>Бюджет<input type="number" v-model="budgets" /></span>
        </div>
        <div class="groups forArrows">
            <span @click="page -= 10">Влево</span>
            <span @click="page += 10">Вправо</span>
        </div>
        <div class="groups"
            v-for="(it, key) in datasWithWeight.filter(x => x.общаяцена < this.getBudget).sort((a, b) => b.общийрейтинг - a.общийрейтинг).slice(page, page + 10)"
            :key="key">
            <div class="groupRating">
                <div>
                    <span>price: {{ it.общаяцена }}₽</span>
                    <span>rating: {{ it.общийрейтинг.toFixed(5) }}</span>
                </div>

            </div>
            <div class="groupsData">
                <CompsItemWeight4 id="items" v-for="(it1, key1) in it.список" :key="key1" :itemData="it1"
                    :transformations='it1.transformations' isSmall="true" />
            </div>
        </div>
    </div>


</template>


<script>



import { mapGetters, mapActions } from 'vuex'
import mix2 from '~/mixins.js/Mixin2.js'
// import mix from '~/mixins.js/Mixin.js'
import { toNumber } from '@vue/shared'
import { ref } from 'vue'


export default {
    mixins: [],
    props: ['datasWithWeight'],
    data() {
        return {
            w1s: 0.25,
            w2s: 0.25,
            w3s: 0.25,
            w4s: 0.25,
            budgets: 100000,
            page:0
            
        }
    },
    methods: {
        inputschange() {
            let allchange = (1 - this.w1s - this.w2s - this.w3s - this.w4s)
            this.w1s = this.w1s + allchange / 4
            this.w2s = this.w2s + allchange / 4
            this.w3s = this.w3s + allchange / 4
            this.w4s = this.w3s + allchange / 4

            this.$store.commit('datas/uploadCoefficients', { w1: this.w1s, w2: this.w2s, w3: this.w3s, w4: this.w4s })
            this.$store.commit('datas/uploadBudget', this.budgets)


        },
        onchangerangeinput(event) {
            if (event.target.id === 'Видеокарта') {
                this.w1s = toNumber(this.w1s)
            }
            if (event.target.id === 'Процессор') {
                this.w2s = toNumber(this.w2s)
            }
            if (event.target.id === 'Оперативная память') {
                this.w3s = toNumber(this.w3s)
            }
            if (event.target.id === 'Материнская плата') {
                this.w4s = toNumber(this.w4s)
            }
        }
    },
    computed: {
        ...mapGetters('datas', ['getBudget']),
    },
}

</script>


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
    width: 15px;
    border: 2px solid black;
    border-radius: 50%;
    background: rgb(6, 255, 180);

}

.groups {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 5px;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;

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


    margin-top: 20px;
    margin-bottom: 10px;
    padding: 3px;
    border-radius: 15px;
    width: 100%;
    background: rgb(81, 81, 81);
    box-shadow: 0 -3px rgb(107, 107, 107), 0 -5px 1px rgb(6, 255, 180);



}

.groupRating div {
    background: #27272c;
    box-shadow: inset 0 0 2px rgb(0, 0, 0);
    width: 100%;
    padding: 10px;
    border-radius: 12px 12px 15px 15px;
    display: flex;
    justify-content: space-between;
}

.groupRating span {

    color: #ffffff;

    font-family: "CurrentRegular";
    font-weight: 700;
    font-size: 20px;
}

.containerr {
    height: auto;
    width: 100%;

    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    flex-wrap: wrap;
    padding: 0 0;
    padding-top: 60px;
    padding-bottom: 30px;
}


.minicont {
    width: 25%;
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
    width: 100%;
    border: 2px solid black;
    box-shadow: inset 0 0 1px 1px rgb(1, 212, 149);
    font-family: 'ErmilovBold';
    border-radius: 5px;
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
    color: aliceblue;
    padding: 5px;
    font-size: 25px;
    text-shadow: -0 -3px rgb(92, 92, 92), -0 -5px rgb(6, 255, 180);

    transition: all .3s;
}

.btnBack span:hover {
    text-shadow: -0 -3px rgb(92, 92, 92), -0 -5px red;
    letter-spacing: 3px;
}


.groups #items {

    margin: 0 5px;
    margin-bottom: 20px;

}

.groupsData {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}


@media (max-width: 1150px) {
    .groups #items {
        width: 100%;

    }

    .minicont {
        width: 50%;
    }

    .groupsData {
        flex-wrap: wrap;
    }
}

@media (min-width: 1150px) {
    .groups #items {
        width: 24%;
    }
}
</style>