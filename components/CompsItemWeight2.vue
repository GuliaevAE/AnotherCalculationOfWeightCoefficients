<template>
    <div class="item" @mouseenter="isHov=true" @mouseleave="isHov=false">
        <!-- @mouseenter="isHov=true" @mouseleave="isHov=false" -->

        <div class="data">
            <div class="divName">
                <div class="nameAndStore" :class="{activeText: isHov}">
                    <span id="store" :class="{activestore: isHov, juststore:!isHov}">{{store}}</span>
                    <span class="title">{{name}}</span>
                </div>


                <div  class="deskr" :class="{activeText: isHov}">
                    <div class="hov" v-if="type==='Видеокарта'">
                        <span>Видеочипсет: {{cpu['par1']}}</span>
                        <span class="Гб">Память: {{cpu['par2']}}</span>
                        <span class="МГц">Частота: {{cpu['par8']}}</span>
                        <span>Интерфейс: {{cpu['par3']}}</span>
                    </div>
                    <div class="hov" v-if="type==='Процессор'">
                        <span>Ядро: {{cpu['par1']}}</span>
                        <span class="ГГц">Частота: {{cpu['par2']}}</span>
                        <span>Сокет: {{cpu['par3']}}</span>
                        <span>Число потоков: {{cpu['par4']}}</span>
                        <span>Тепловыделение: {{cpu['par5']}}</span>
                    </div>
                    <div class="hov" v-if="type==='Оперативная память'">
                        <span class="Гб">Объем: {{cpu['par1']}}</span>
                        <span class="ГГц">Частота: {{cpu['par2']}}</span>
                        <span>Латентность: {{cpu['par3']}}</span>
                        <span>Задержки: {{cpu['par4']}}</span>
                        <span>Форм-фактор: {{cpu['par5']}}</span>
                    </div>
                   
                </div>
            </div>
            <div class="divOther">
                <span class="price ₽" :class="{activeprice: isHov}">{{price}}</span>
                <div v-if="isImage==='true' ">
                    <img :src="image" />

                </div>
             
            </div>
        </div>


        <div class="footer" :class="{activeprice: isHov}" >
            <div v-if="type==='Видеокарта'">
                <div>
                    <span>Рейтинг: {{transformations.рейтинг.toFixed(5)}}</span>
                    <div  style="display:flex;flex-direction:column;">
                        <span>Частота: {{transformations.видеокартаНорм.частоставидеокарты.toFixed(5)}}</span>
                        <span>Число потоков: {{transformations.видеокартаНорм.памятьвидеокарты.toFixed(5)}}</span>
                    </div>
                </div>

            </div>
            <div v-if="type==='Процессор'">
                <span>Рейтинг: {{transformations.рейтинг.toFixed(5)}}</span>
                <div  style="display:flex;flex-direction:column;">
                    <span>Частота: {{transformations.процессорНорм.частостапроцессора.toFixed(5)}}</span>
                    <span>Число потоков: {{transformations.процессорНорм.числопотоков.toFixed(5)}}</span>
                </div>
            </div>
            <div v-if="type==='Оперативная память'">
                <span>Рейтинг: {{transformations.рейтинг.toFixed(5)}}</span>
                <div  style="display:flex;flex-direction:column;">
                    <span>Объём: {{transformations.оперативкаНорм.объем.toFixed(5)}}</span>
                    <span>Частота: {{transformations.оперативкаНорм.частотаоперативки.toFixed(5)}}</span>
                </div>
            </div>
            <span  id="link" :class="{actionlink: isHov, justlink: !isHov}" ><a
                    target="_blank" :href=link>+</a></span>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'CompsItemWeight',
    props: ['name', 'store', 'type', 'price', 'link', 'cpu', 'transformations', 'image', 'isImage'],
    data: function () {
        return {
            isHov: false,
            
        }
    },
    computed: {
        thiseStore: function () {
            let cl
            switch (this.store) {
                case 'DNS':
                    return cl = 'st dns'

                case 'Ситилинк':
                    return cl = 'st citilink'

                default:
                    break;
            }
            return cl
        },
        isLink(){
            console.log(this.isHov)
            if(this.isHov){
                console.log(this.isHov)
                return 'actionlink'} else {return ''}
            
        }
    }
}
</script>
  
<!-- eef0f3 -->
<!-- 27272c -->
<style scoped>
.item {
    transform-style:preserve-3d;
    transform: rotateX(10deg); 
    min-height: 50px;
    width: 100%;
    position: relative;
    background: rgb(81, 81, 81);
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 15px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 3px;
    transition: all .5s;
    z-index: 2;
    box-shadow: 0 -3px  rgb(107, 107, 107), 0 -5px 1px  rgb(6, 255, 180);
}

.item:hover{
    box-shadow: 0 -3px  rgb(92, 92, 92), 0 -5px 7px  rgb(6, 255, 180);
}



.data {
    display: flex;
    background: #27272c;
    border-radius: 12px 12px 15px 15px;
    z-index: 2;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    justify-content: space-between;
    height: 100%;
    box-shadow: inset 0 0 2px rgb(0, 0, 0);
    transition: all .3s;
}

.data:hover{
    box-shadow: inset 0 0 2px 1px rgb(0, 0, 0), inset 0 0 5px .5px rgb(6, 255, 180);
}




.nameAndStore {
    display: flex;
    flex-direction: column;
    
}

.nameAndStore span{
    transition: all .3s;
}


#store {
    color: rgb(184, 184, 184);
   
    transition: all .3s;
}
.juststore{
    text-shadow: 0 1.5px rgba(6, 255, 180, 0);
}

.activestore{
    text-shadow: 0 -1.5px rgb(6, 255, 180);
    position: relative;
    top: .3px;
}


@keyframes moveGradient {
    50% {
        background-position: 100% 50%;
    }
}

a {
    text-decoration: none;
    color: white;
    transition: transform .3s;
}




  .justlink{
    bottom:7px;
    
    text-shadow: 0 -3px  rgb(92, 92, 92), 0 -5px  rgba(255, 24, 24, 0);
  }
.actionlink{
    bottom:5px;
    text-shadow: 0 -3px  rgb(92, 92, 92), 0 -5px  rgb(6, 255, 180);
}


.actionlink a::before{
    content:'buy'
}


#link {
    right:15px;
    display: block;
    transition: all .3s;
    font-weight: 1000;
    font-size:40px;
    position:absolute;
}

#link:hover {
    text-shadow: -0 -3px  rgb(92, 92, 92), -0 -5px  rgb(255, 24, 24);
    
}

.divName {
    width: auto;
    justify-content: center;
    align-self: center;
    font-family: 'AktivGroteskCorp';
    color: rgb(185, 185, 185);
    font-size: 15px;

}

.divOther {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: 700;
    font-size: 25px;
    margin-left: 5px;

}

.st {
    background: wheat;
    width: 100%;
    box-sizing: border-box;
    padding: 5px 5px;
    border-radius: 10px;
    font-family: "AktivGroteskCorp";
    font-weight: bold;
    margin-top: 5px;
}

.dns {
    background: orange;
    color: white;
    border: 2px solid white;
}

.citilink {
    background: white;
    color: rgb(255, 115, 0);
    border: 2px solid rgb(255, 115, 0);
    font-size: 15px;
}

.price {
    font-size: 18px;
    color: rgb(179, 179, 179);
    font-family: "CurrentRegular";
    transition: all .3s;
}

.activeprice{
    color:rgb(6, 255, 180)
}



.hov {
    display: flex;
    flex-direction: column;
}

.footer {
    background: rgba(138, 138, 138, 0);
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: flex-end;
    border-radius: 0 0 15px 15px;
    
}

.footer span{
    transition: all .3s;
}



.footer span {
    margin-left: 15px;
    font-family: "AktivGroteskCorp";
    font-size: 15px;
    color: #ffffff
}

.footer.activeprice span{
    color:rgb(6, 255, 180)
}


.divOther img {
    border-radius:5px;
    height: 100px;
    max-width: 100px;
}

.rotateZ {
    transform: rotate(90deg)
}

.rotateZ img {
    transform: scale(1.2);
}

.МГц::after {
    content: 'МГц';
}

.ГГц::after {
    content: 'ГГц';
}

.Гб::after {
    content: 'Гб';
}

.₽::after {
    content: '₽';
    font-weight: 700;
    font-size: 21px;
}

.title {
    font-size: 15px;
    font-family: UncutSansRegular;
    font-weight: 600;
}

.deskr span {
    font-size: small;
    transition: all .3s;
}

.activeText span{
    color: white;
    
}

item:hover {
    transform: scale(1.02);
    background: linear-gradient(60deg,
            hsl(224, 100%, 58%),
            hsl(269, 100%, 50%),
            hsl(359, 100%, 54%),
            hsl(61, 100%, 50%),
            hsl(125, 100%, 50%));
    background-size: 300% 300%;
    background-position: 0 50%;
    box-shadow: 0 5px 5px rgb(136, 136, 136);
    animation: moveGradient 4s alternate infinite;
}



</style>
<!-- hsl(269, 100%, 50%),
hsl(314, 100%, 57%),
hsl(359, 100%, 54%),
hsl(44, 100%, 55%),
hsl(89, 100%, 55%),
hsl(134, 100%, 55%),
hsl(179, 100%, 56%)); -->





<!-- hsl(224, 100%, 58%),
hsl(269, 100%, 50%),
hsl(359, 100%, 54%),
hsl(61, 100%, 50%),
hsl(125, 100%, 50%) -->



<!-- #link:hover {
    text-shadow: -3px -3px  rgb(92, 92, 92), -5px -5px  rgb(255, 24, 24);
    transform: rotate(45deg);
} -->