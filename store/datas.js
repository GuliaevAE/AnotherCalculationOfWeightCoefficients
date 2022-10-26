import mix from '../mixins.js/Mixin.js'

export const state = () => ({
    datas: [],
    datasWithWeight: [],
    w1: 0.25,
    w2: 0.25,
    w3: 0.25,
    w4: 0.25,
    budget: 100000
})


export const mutations = {
    uploaddata(state, data) {
        state.datas = data
        // console.log('data', data)
    },

    uploaddatasWithWeight(state, data) {
        state.datasWithWeight = data
        console.log('datasWithWeight', data)
    },

    uploadCoefficients(state, data) {
        Object.keys(data).forEach(x => {
            if (x === 'w1') {
                state.w1 = data[x]
            }
            if (x === 'w2') {
                state.w2 = data[x]
            }
            if (x === 'w3') {
                state.w3 = data[x]
            }
            if (x === 'w4') {
                state.w4 = data[x]
            }
        })
    },

    uploadBudget(state, data){
        state.budget = data
    }
}

export const getters = {
    getdatas: (state) => {
        return state.datas
    },

    getdatasWithWeight: (state) => {
        return state.datasWithWeight
    },

    getCoefficients: (state) => {
        return { w1: state.w1, w2: state.w2, w3: state.w3, w4: state.w4 }
    },
    getBudget: (state) => {
        return state.budget
    }
}


export const actions = {
    rendData(ctx) {

        const data = mix.data().allItems

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
            if (x['type'] === 'Видеокарта') {

                x['cpu']['par2'] = Number(x['cpu']['par2'])

                x['cpu']['par8'] = Number(x['cpu']['par8'])


                x['cpu']['ЧастотаПамяти'] = Number(x['cpu']['ЧастотаПамяти'])
                x['cpu']['Техпроцесс'] = Number(x['cpu']['Техпроцесс'])
                x['cpu']['РазрядностьШиныПамяти'] = Number(x['cpu']['РазрядностьШиныПамяти'])

            }

            if (x['type'] === 'Процессор') {
                x['cpu']['par2'] = Number(x['cpu']['par2'])
                x['cpu']['par4'] = Number(x['cpu']['par4'])

                x['cpu']['КоличествоЯдер'] = Number(x['cpu']['КоличествоЯдер'])
                x['cpu']['КоличествоКаналов'] = Number(x['cpu']['КоличествоКаналов'])
                x['cpu']['ЧастотаГрафическогоЯдра'] = (x['cpu']['ЧастотаГрафическогоЯдра'])
                // x['cpu']['ЧастотаПамяти'] = Number(x['cpu']['ЧастотаПамяти'])
            }




            if (x['type'] === 'Оперативная память') {
                x['cpu']['par1'] = Number(eval(x['cpu']['par1']))
                x['cpu']['par2'] = Number(x['cpu']['par2'])

                x['cpu']['КоличествоМодулей'] = Number(x['cpu']['КоличествоМодулей'])
                x['cpu']['ОбъемМодуля'] = Number(x['cpu']['ОбъемМодуля'])

            }


            if (x['type'] === 'Материнская плата') {
                x['cpu']['МаксимальнаяЧастотаПамяти'] = Number(x['cpu']['МаксимальнаяЧастотаПамяти'])
                x['cpu']['МаксимальныйОбъемПамяти'] = Number(x['cpu']['МаксимальныйОбъемПамяти'])
                x['cpu']['КоличествоКаналовПамяти'] = Number(x['cpu']['КоличествоКаналовПамяти'])
                x['cpu']['КоличествоСлотовPCIE1'] = Number(x['cpu']['КоличествоСлотовPCIE1'])
                x['cpu']['КоличествоСлотовПамяти'] = Number(x['cpu']['КоличествоСлотовПамяти'])


            }
            x['price'] = Number(x['price'])
            return x
        })
        allItems1.map(x => {

            if (x['type'] === 'Видеокарта') {
                толькочастотавидеокарты.список.push(Number(x['cpu']['par8']))
                толькопамятьвидеокарты.список.push(Number(x['cpu']['par2']))

                ТолькоЧастотаПамятиВидеокарты.список.push(Number(x['cpu']['ЧастотаПамяти']))
                ТолькоТехпроцессВидеокарты.список.push(Number(x['cpu']['Техпроцесс']))
                ТолькоРазрядностьШиныПамяти.список.push(Number(x['cpu']['РазрядностьШиныПамяти']))

                x.transformations = {
                    видеокартаНорм: {
                        частоставидеокарты: 0,
                        памятьвидеокарты: 0,

                        ЧастотаПамяти: 0,
                        Техпроцесс: 0,
                        РазрядностьШиныПамяти: 0,
                    }, рейтинг: 0
                }
            }

            if (x['type'] === 'Процессор') {
                толькочастотапроцессора.список.push(Number(x['cpu']['par2']))
                толькочислопотоков.список.push(Number(x['cpu']['par4']))

                ТолькоКоличествоЯдер.список.push(Number(x['cpu']['КоличествоЯдер']))
                ТолькоКоличествоКаналов.список.push(Number(x['cpu']['КоличествоКаналов']))
                ТолькоЧастотаГрафическогоЯдра.список.push((x['cpu']['ЧастотаГрафическогоЯдра']))
                // ТолькоЧастотаПамятиПроцессора.список.push(Number(x['cpu']['ЧастотаПамяти']))

                x.transformations = {
                    процессорНорм: {
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
                толькообъем.список.push(Number(x['cpu']['par1']))
                толькочастотаоперативки.список.push(Number(x['cpu']['par2']))

                ТолькоКоличествоМодулей.список.push(Number(x['cpu']['КоличествоМодулей']))
                ТолькоОбъемМодуля.список.push(Number(x['cpu']['ОбъемМодуля']))


                x.transformations = { оперативкаНорм: { объем: 0, частотаоперативки: 0, КоличествоМодулей: 0, ОбъемМодуля: 0 }, рейтинг: 0 }
            }


            if (x['type'] === 'Материнская плата') {
                ТолькоМаксимальнаяЧастотаПамяти.список.push(Number(x['cpu']['МаксимальнаяЧастотаПамяти']))
                ТолькоМаксимальныйОбъемПамяти.список.push(Number(x['cpu']['МаксимальныйОбъемПамяти']))
                ТолькоКоличествоКаналовПамяти.список.push(Number(x['cpu']['КоличествоКаналовПамяти']))
                ТолькоКоличествоСлотовPCIE1.список.push(Number(x['cpu']['КоличествоСлотовPCIE1']))
                ТолькоКоличествоСлотовПамяти.список.push(Number(x['cpu']['КоличествоСлотовПамяти']))


                x.transformations = { оперативкаНорм: { объем: 0, частотаоперативки: 0, КоличествоМодулей: 0, ОбъемМодуля: 0 }, рейтинг: 0 }
            }
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
                x.transformations.видеокартаНорм.частоставидеокарты = x['cpu']['par8'] / толькочастотавидеокарты.мах
                x.transformations.видеокартаНорм.памятьвидеокарты = x['cpu']['par2'] / толькопамятьвидеокарты.мах

                x.transformations.видеокартаНорм.ЧастотаПамяти = x['cpu']['ЧастотаПамяти'] / ТолькоЧастотаПамятиВидеокарты.мах
                x.transformations.видеокартаНорм.Техпроцесс = x['cpu']['Техпроцесс'] / ТолькоТехпроцессВидеокарты.мах
                x.transformations.видеокартаНорм.РазрядностьШиныПамяти = x['cpu']['РазрядностьШиныПамяти'] / ТолькоРазрядностьШиныПамяти.мах
                x.transformations.рейтинг = (x.transformations.видеокартаНорм.частоставидеокарты + x.transformations.видеокартаНорм.памятьвидеокарты + x.transformations.видеокартаНорм.ЧастотаПамяти - x.transformations.видеокартаНорм.Техпроцесс + x.transformations.видеокартаНорм.РазрядностьШиныПамяти)
            }

            if (x['type'] === 'Процессор') {
                x.transformations.процессорНорм.частостапроцессора = x['cpu']['par2'] / толькочастотапроцессора.мах
                x.transformations.процессорНорм.числопотоков = x['cpu']['par4'] / толькочислопотоков.мах

                x.transformations.процессорНорм.КоличествоЯдер = x['cpu']['КоличествоЯдер'] / ТолькоКоличествоЯдер.мах
                x.transformations.процессорНорм.КоличествоКаналов = x['cpu']['КоличествоКаналов'] / ТолькоКоличествоКаналов.мах
                x.transformations.процессорНорм.ЧастотаГрафическогоЯдра = x['cpu']['ЧастотаГрафическогоЯдра'] / ТолькоЧастотаГрафическогоЯдра.мах
                // x.transformations.процессорНорм.ЧастотаПамяти = x['cpu']['ЧастотаПамяти'] / ТолькоЧастотаПамятиПроцессора.мах
                x.transformations.рейтинг = (x.transformations.процессорНорм.частостапроцессора + x.transformations.процессорНорм.числопотоков + x.transformations.процессорНорм.КоличествоЯдер + x.transformations.процессорНорм.КоличествоКаналов + x.transformations.процессорНорм.ЧастотаГрафическогоЯдра)
            }

            if (x['type'] === 'Оперативная память') {
                x.transformations.оперативкаНорм.объем = x['cpu']['par1'] / толькообъем.мах
                x.transformations.оперативкаНорм.частотаоперативки = x['cpu']['par2'] / толькочастотаоперативки.мах

                x.transformations.оперативкаНорм.КоличествоМодулей = x['cpu']['КоличествоМодулей'] / ТолькоКоличествоМодулей.мах
                x.transformations.оперативкаНорм.ОбъемМодуля = x['cpu']['ОбъемМодуля'] / ТолькоОбъемМодуля.мах
                x.transformations.рейтинг = (x.transformations.оперативкаНорм.объем + x.transformations.оперативкаНорм.частотаоперативки + x.transformations.оперативкаНорм.КоличествоМодулей + x.transformations.оперативкаНорм.ОбъемМодуля)
            }

            if (x['type'] === 'Материнская плата') {
                x.transformations.оперативкаНорм.МаксимальнаяЧастотаПамяти = x['cpu']['МаксимальнаяЧастотаПамяти'] / ТолькоМаксимальнаяЧастотаПамяти.мах
                x.transformations.оперативкаНорм.МаксимальныйОбъемПамяти = x['cpu']['МаксимальныйОбъемПамяти'] / ТолькоМаксимальныйОбъемПамяти.мах
                x.transformations.оперативкаНорм.КоличествоКаналовПамяти = x['cpu']['КоличествоКаналовПамяти'] / ТолькоКоличествоКаналовПамяти.мах
                x.transformations.оперативкаНорм.КоличествоСлотовPCIE1 = x['cpu']['КоличествоСлотовPCIE1'] / ТолькоКоличествоСлотовPCIE1.мах
                x.transformations.оперативкаНорм.КоличествоСлотовПамяти = x['cpu']['КоличествоСлотовПамяти'] / ТолькоКоличествоСлотовПамяти.мах



                x.transformations.рейтинг = (x.transformations.оперативкаНорм.МаксимальнаяЧастотаПамяти + x.transformations.оперативкаНорм.МаксимальныйОбъемПамяти + x.transformations.оперативкаНорм.КоличествоКаналовПамяти + x.transformations.оперативкаНорм.КоличествоСлотовPCIE1 + x.transformations.оперативкаНорм.КоличествоСлотовПамяти)
            }
            return x
        })



        ctx.commit('uploaddata', allItems1)
        ctx.dispatch('weightOfRendData', allItems1)
    },

    weightOfRendData(ctx, allitems) {
        let alls = []
        let videokards = []
        let processors = []
        let memories = []

        allitems.map(x => {
            if (x['type'] === 'Видеокарта') {
                // x.transformations.рейтинг *= this.w1
                videokards.push(x)
            }
            if (x['type'] === 'Процессор') {
                // x.transformations.рейтинг *= this.w2
                processors.push(x)
            }
            if (x['type'] === 'Оперативная память') {
                // x.transformations.рейтинг *= this.w3
                memories.push(x)
            }
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
        // 
        // alls=alls
        ctx.commit('uploaddatasWithWeight', alls)
    }

}