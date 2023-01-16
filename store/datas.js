import mix from '../mixins.js/Mixin.js'

export const state = () => ({
    datas: [],
    datasWithWeight: [],
    w1: 0.25,
    w2: 0.25,
    w3: 0.25,
    w4: 0.25,
    budget: 100000,

    login:null,
    loginId:null,

    filtVidName: '',
    filtVidMemory: '',

    filtProcName: '',
})

export const mutations = {
    uploaddata(state, data) {
        state.datas = data
    },
    uploadlogin(state, data) {
        state.login = data
    },
    uploadloginId(state, data) {
        state.loginId = data
    },
    uploadfiltVidName(state, data) {
        state.filtVidName = data
    },
    uploadfiltVidMemory(state, data) {
        state.filtVidMemory = data
    },
    uploadfiltProcName(state, data) {
        state.filtProcName = data
    },
    uploaddatasWithWeight(state, data) {
        state.datasWithWeight = data
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

    uploadBudget(state, data) {
        state.budget = data
    }
}

export const getters = {
    getdatas: (state) => {
        return state.datas
    },
    getlogin: (state) => {
        return state.login
    },
    getloginId: (state) => {
        return state.loginId
    },
    getfiltVidName: (state) => {
        return state.filtVidName
    },
    getfiltVidMemory: (state) => {
        return state.filtVidMemory
    },
    getfiltProcName: (state) => {
        return state.filtProcName
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
}