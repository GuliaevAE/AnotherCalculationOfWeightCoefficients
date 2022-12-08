<template>
    <div class="item" @mouseenter="isHov=true" @mouseleave="isHov=false">
        <!-- @mouseenter="isHov=true" @mouseleave="isHov=false" -->
        <div class="">
            <span id="store" :class="{activestore: isHov, juststore:!isHov}">{{store}}</span>
            <span>{{price}}</span>
            
        </div>
        <div class="data" :style="styleObj">
           
                
                
                <span class="title">{{name}}</span>
                <span>Рейтинг: {{transformations.рейтинг.toFixed(3)}}</span>

                <div class="deskr" :class="{activeText: isHov}">
                    <div class="hov" v-if="type==='Видеокарта'">
                        <span>Видеочипсет: {{cpu['par1']}}</span>
                        <span class="Гб">Память: {{cpu['par2']}}</span>
                        <span class="МГц">Частота: {{cpu['par8']}}</span>
                        <span>Интерфейс: {{cpu['par3']}}</span>

                        <span>Частота памяти: {{cpu['ЧастотаПамяти']}}</span>
                        <span>Техпроцесс: {{cpu['Техпроцесс']}}</span>
                        <span>Тип памяти: {{cpu['ТипПамяти']}}</span>
                        <span>Разрядность шины памяти: {{cpu['РазрядностьШиныПамяти']}}</span>

                    </div>
                    <div class="hov" v-if="type==='Процессор'">
                        <span>Ядро: {{cpu['par1']}}</span>
                        <span class="ГГц">Частота: {{cpu['par2']}}</span>
                        <span>Сокет: {{cpu['par3']}}</span>
                        <span>Число потоков: {{cpu['par4']}}</span>
                        <span>Тепловыделение: {{cpu['par5']}}</span>

                        <span>Кол-во ядер: {{cpu['КоличествоЯдер']}}</span>
                        <span>Кол-во каналов: {{cpu['КоличествоКаналов']}}</span>
                        <span>Техпроцесс: {{cpu['Техпроцесс']}}</span>
                        <span>Модель граф.ядра: {{cpu['МодельГрафическогоЯдра']}}</span>
                        <span v-if="cpu['ЧастотаГрафическогоЯдра']!=0">ЧастотаГрафическогоЯдра:
                            {{cpu['ЧастотаГрафическогоЯдра']}}</span>

                        <span>Частота памяти: {{cpu['ЧастотаПамяти']}}</span>

                    </div>
                    <div class="hov" v-if="type==='Оперативная память'">
                        <span class="Гб">Объем: {{cpu['par1']}}</span>
                        <span class="ГГц">Частота: {{cpu['par2']}}</span>
                        <span>Латентность: {{cpu['par3']}}</span>
                        
                        <span>Форм-фактор: {{cpu['par5']}}</span>

                        <span>ТипПамяти: {{cpu['ТипПамяти']}}</span>
                        <span>КоличествоМодулей: {{cpu['КоличествоМодулей']}}</span>
                        <span>ОбъемМодуля: {{cpu['ОбъемМодуля']}}</span>

                    </div>
                    <div class="hov" v-if="type==='Материнская плата'">
                        <span>Сокет: {{cpu['Сокет']}}</span>
                        <span>Чипсет: {{cpu['Чипсет']}}</span>
                        <span>Тип памяти: {{cpu['ТипПамяти']}}</span>
                        <span>Макс. частота памяти: {{cpu['МаксимальнаяЧастотаПамяти']}}</span>
                        <span>Макс.объем памяти: {{cpu['МаксимальныйОбъемПамяти']}}</span>
                        <span>Кол-во каналов памяти: {{cpu['КоличествоКаналовПамяти']}}</span>
                        <span>Кол-во PCIE1: {{cpu['КоличествоСлотовPCIE1']}}</span>
                        <span>Форм-фактор: {{cpu['ФормФактор']}}</span>
                        <span>Тип памяти: {{cpu['ТипПамяти']}}</span>
                        <span>Кол-во слотов памяти: {{cpu['КоличествоСлотовПамяти']}}</span>
                    </div>

                </div>
                
           
        </div>











        <!-- <div class="data" :style="styleObj">
            <div class="divName">
                <div class="nameAndStore" :class="{activeText: isHov}">
                    <span id="store" :class="{activestore: isHov, juststore:!isHov}">{{store}}</span>
                    <span class="title">{{name}}</span>
                </div>


                <div class="deskr" :class="{activeText: isHov}">
                    <div class="hov" v-if="type==='Видеокарта'">
                        <span>Видеочипсет: {{cpu['par1']}}</span>
                        <span class="Гб">Память:{{cpu['par2']}}</span>
                        <span class="МГц">Частота: {{cpu['par8']}}</span>
                        <span>Интерфейс: {{cpu['par3']}}</span>

                        <span>Частота памяти: {{cpu['ЧастотаПамяти']}}</span>
                        <span>Техпроцесс: {{cpu['Техпроцесс']}}</span>
                        <span>Тип памяти: {{cpu['ТипПамяти']}}</span>
                        <span>Разрядность шины памяти: {{cpu['РазрядностьШиныПамяти']}}</span>

                    </div>
                    <div class="hov" v-if="type==='Процессор'">
                        <span>Ядро:{{cpu['par1']}}</span>
                        <span class="ГГц">Частота: {{cpu['par2']}}</span>
                        <span>Сокет:{{cpu['par3']}}</span>
                        <span>Число потоков:{{cpu['par4']}}</span>
                        <span>Тепловыделение:{{cpu['par5']}}</span>

                        <span>Кол-во ядер:{{cpu['КоличествоЯдер']}}</span>
                        <span>Кол-во каналов:{{cpu['КоличествоКаналов']}}</span>
                        <span>Техпроцесс:{{cpu['Техпроцесс']}}</span>
                        <span>Модель граф.ядра:{{cpu['МодельГрафическогоЯдра']}}</span>
                        <span v-if="cpu['ЧастотаГрафическогоЯдра']!=0">ЧастотаГрафическогоЯдра:
                            {{cpu['ЧастотаГрафическогоЯдра']}}</span>

                        <span>Частота памяти:{{cpu['ЧастотаПамяти']}}</span>

                    </div>
                    <div class="hov" v-if="type==='Оперативная память'">
                        <span class="Гб">Объем: {{cpu['par1']}}</span>
                        <span class="ГГц">Частота: {{cpu['par2']}}</span>
                        <span>Латентность: {{cpu['par3']}}</span>
                        
                        <span>Форм-фактор: {{cpu['par5']}}</span>

                        <span>ТипПамяти: {{cpu['ТипПамяти']}}</span>
                        <span>КоличествоМодулей: {{cpu['КоличествоМодулей']}}</span>
                        <span>ОбъемМодуля: {{cpu['ОбъемМодуля']}}</span>

                    </div>
                    <div class="hov" v-if="type==='Материнская плата'">
                        <span>Сокет: {{cpu['Сокет']}}</span>
                        <span>Чипсет: {{cpu['Чипсет']}}</span>
                        <span>Тип памяти: {{cpu['ТипПамяти']}}</span>
                        <span>Макс. частота памяти: {{cpu['МаксимальнаяЧастотаПамяти']}}</span>
                        <span>Макс.объем памяти: {{cpu['МаксимальныйОбъемПамяти']}}</span>
                        <span>Кол-во каналов памяти: {{cpu['КоличествоКаналовПамяти']}}</span>
                        <span>Кол-во PCIE1: {{cpu['КоличествоСлотовPCIE1']}}</span>
                        <span>Форм-фактор: {{cpu['ФормФактор']}}</span>
                        <span>Тип памяти: {{cpu['ТипПамяти']}}</span>
                        <span>Кол-во слотов памяти: {{cpu['КоличествоСлотовПамяти']}}</span>
                    </div>

                </div>
            </div>
            <div class="divOther">
                <span id="price" class="price ₽" :class="{activeprice: isHov}">{{price}}</span>
                <span id="link" :class="{actionlink: isHov, justlink: !isHov}"><a target="_blank" :href=link>+</a></span>
                <div v-if="isImage==='true' ">
                    <img :src="image" />

                </div>

            </div>
        </div>


        <div class="footer" :class="{activeprice: isHov}">
            <span>Рейтинг: {{transformations.рейтинг.toFixed(3)}}</span>
            <div>
                <div v-if="type==='Видеокарта' && isOpen" style="display:flex;flex-direction:column;" >
                    <span>Частота: {{transformations.видеокартаНорм.частоставидеокарты.toFixed(3)}}</span>
                    <span>Число потоков: {{transformations.видеокартаНорм.памятьвидеокарты.toFixed(3)}}</span>
    
                    <span>Частота памяти: {{transformations.видеокартаНорм.ЧастотаПамяти.toFixed(3)}}</span>
                    <span>Техпроцесс: {{transformations.видеокартаНорм.Техпроцесс.toFixed(3)}}</span>
                    <span>Разрядность шины памяти:
                        {{transformations.видеокартаНорм.РазрядностьШиныПамяти.toFixed(3)}}</span>
                </div>
                <div v-if="type==='Процессор' && isOpen" style="display:flex;flex-direction:column;" >
    
                    <span>Частота: {{transformations.процессорНорм.частостапроцессора.toFixed(3)}}</span>
                    <span>Число потоков: {{transformations.процессорНорм.числопотоков.toFixed(3)}}</span>
    
                    <span>Количество ядер: {{transformations.процессорНорм.КоличествоЯдер.toFixed(3)}}</span>
                    <span>Количество каналов: {{transformations.процессорНорм.КоличествоКаналов.toFixed(3)}}</span>
                    <span v-if="cpu['ЧастотаГрафическогоЯдра']!=0">ЧастотаГрафическогоЯдра:
                        {{transformations.процессорНорм.ЧастотаГрафическогоЯдра.toFixed(3)}}</span>
                  
                </div>
                <div v-if="type==='Оперативная память' && isOpen" style="display:flex;flex-direction:column;" >
    
                    <span>Объём: {{transformations.оперативкаНорм.объем.toFixed(3)}}</span>
                    <span>Частота: {{transformations.оперативкаНорм.частотаоперативки.toFixed(3)}}</span>
    
                    <span>Кол-во модулей: {{transformations.оперативкаНорм.КоличествоМодулей.toFixed(3)}}</span>
                    <span>Объем модуля: {{transformations.оперативкаНорм.ОбъемМодуля.toFixed(3)}}</span>
                </div>
                <div v-if="type==='Материнская плата' && isOpen" style="display:flex;flex-direction:column;" >
    
                    <span>Макс.частота памяти:
                        {{transformations.оперативкаНорм.МаксимальнаяЧастотаПамяти.toFixed(3)}}</span>
                    <span>Макс.объем памяти:
                        {{transformations.оперативкаНорм.МаксимальныйОбъемПамяти.toFixed(3)}}</span>
                    <span>Кол-во каналов памяти:
                        {{transformations.оперативкаНорм.КоличествоКаналовПамяти.toFixed(3)}}</span>
                    <span>Кол-во PCIE1:
                        {{transformations.оперативкаНорм.КоличествоСлотовPCIE1.toFixed(3)}}</span>
                    <span>Кол-во слотов памяти:
                        {{transformations.оперативкаНорм.КоличествоСлотовПамяти.toFixed(3)}}</span>
    
                </div>

            </div>
            
            
        </div> -->

    </div>
</template>
  
<script>
export default {
    name: 'CompsItemWeight',
    props: ['name', 'store', 'type', 'price', 'link', 'cpu', 'transformations', 'image', 'isImage'],
    data: function () {
        return {
            isHov: false,
            isOpen: true,
            styleObj:{
                // backgroundImage: 'url('+this.image+') ',
                // backgroundSize: '100% 100%',
                // backgroundPosition:'center',
                // backgroundRepeat: 'no-repeat'
                
            }

        }
    },
    computed: {


    }
}
</script>
  

<style scoped>


span{
    font-size: 15px;
}
.item {
    width: 100%;
    background: rgba(155, 155, 155, 0.429);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    
   
    
}





.data {
    display: flex;
    flex-direction: column;
    background: #fbfbfb;
    z-index: 2;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    justify-content: space-between;
    height: 100%;
    box-shadow: inset 0 0 2px rgb(0, 0, 0);
    transition: all .3s;
    
}


.store{
    color:white
}

.hov{
    display: flex;
    flex-direction: column;
}


</style>





<!-- <style scoped>
.item {

    min-height: 50px;
    width: 100%;
    position: relative;
    background: rgba(155, 155, 155, 0.429);
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 15px;
   
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 3px;
    transition: all .5s;
    z-index: 2;
    
}

.item:hover {
    box-shadow:  0 0 7px rgb(6, 255, 180);
}



.data {
    display: flex;
    background: #0d0d0d83;
    
    z-index: 2;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    justify-content: space-between;
    height: 100%;
    box-shadow: inset 0 0 2px rgb(0, 0, 0);
    transition: all .3s;
}






.nameAndStore {
    display: flex;
    flex-direction: column;

}

.nameAndStore span {
    transition: all .3s;
}


#store {
    color: rgb(184, 184, 184);

    transition: all .3s;
}

.juststore {
    text-shadow: 0 1.5px rgba(6, 255, 180, 0);
}

.activestore {
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




.justlink {
    top: 40px;

    
}

.actionlink {
    top: 44px;
    text-shadow: 0 -3px rgb(92, 92, 92), 0 -5px red;
}


.actionlink a::before {
    content: 'buy';
}


#link {
    
    right: 15px;
    display: block;
    transition: all .3s;
    font-weight: 1000;
    font-size: 35px;
    position: absolute;
}

#link:hover {
    text-shadow: -0 -3px rgb(92, 92, 92), -0 -5px rgb(6, 255, 180);

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
    font-size: 25px;
    color: rgb(255, 255, 255);
    font-family: "CurrentRegular";
    position: relative;
    top: 0;
    transition: all .3s;
}

.activeprice {

    color: rgb(6, 255, 180)
}


.price.activeprice {


    top: 5px;
    color: white;
    text-shadow: -0 -3px rgb(92, 92, 92), -0 -5px red;
    transition: all .3s;
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
    flex-direction: column;
    border-radius: 0 0 15px 15px;
    position: relative;

}




.footer span {
    transition: all .3s;
    margin-left: 15px;
    font-family: "AktivGroteskCorp";
    font-size: 15px;
    color: #ffffff
}

.footer.activeprice span {
    color: rgb(6, 255, 180)
}


.divOther img {
    border-radius: 5px;
    height: 100px;
    max-width: 100px;
    position: relative;
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
    color:white
}

.deskr span {
    font-size: small;
    transition: all .3s;
}

.activeText span {
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
</style> -->