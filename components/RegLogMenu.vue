<template>
    <div class="menu">
        <div class="minicont">
            <div class="changeTag">
                <span :class="{ activeTag: tag === 'Авторизация' }" @click="tag = 'Авторизация'">Авторизация</span>
                <span :class="{ activeTag: tag === 'Регистрация' }" @click="tag = 'Регистрация'">Регистрация</span>

            </div>

            <form v-if="tag === 'Регистрация'">
                <label>Введите email</label>
                <input type="text" v-model="email" />
                <label>Введите password</label>
                <input type="text" v-model="password" />
                <label>Введите password повторно </label>
                <input type="text" v-model="passwordAgain" />
            </form>
            <form v-if="tag === 'Авторизация'">
                <label>Введите email</label>
                <input type="text" v-model="email" />
                <label>Введите password</label>
                <input type="text" v-model="password" />

            </form>
            <div class="btnAndError">

                <button @click="submit">Применить</button>
                <div>{{ errorMessage }}</div>
            </div>
            <div class="btnAndError">
                <button @click="exit">Выйти</button>
            </div>



        </div>


    </div>

</template>


<script>

import { mapGetters } from 'vuex'
export default {

    data() {
        return {
            tag: 'Авторизация',
            email: '',
            password: '',
            passwordAgain: '',
            errorMessage: ''

        }
    },
    computed: {
        ...mapGetters('datas', ['getlogin']),
    },
    methods: {
        async submit() {
            if (this.email === '' && this.password === '') {
                setTimeout(() => this.errorMessage = '', 1000)
                return this.errorMessage = 'Данные не введены'
            }
            if (this.tag === 'Регистрация') {
                if (this.password === this.passwordAgain) {
                    const posts = await this.$axios.$post('http://localhost:8080/api/registration', { email: this.email, password: this.password })
                    console.log('posts', posts)
                    this.errorMessage = posts
                    if (posts === 'Пользователь зарегестирирован') {
                        this.email = ''
                        this.password = ''
                        this.passwordAgain = ''
                    }
                    setTimeout(() => this.errorMessage = '', 1000)
                } else {
                    this.errorMessage = 'Пароль не подтвержден'
                    setTimeout(() => this.errorMessage = '', 1000)
                }
            }
            if (this.tag === 'Авторизация') {

                const posts = await this.$axios.$post('http://localhost:8080/api/login', { email: this.email, password: this.password })
                console.log('posts', posts)
                this.errorMessage = posts.message
                if (posts.message === 'Пользователь залогинен') {
                    this.$store.commit('datas/uploadlogin', this.email)
                    this.$store.commit('datas/uploadloginId', posts.id)
                    localStorage.setItem('login', this.email);
                    localStorage.setItem('loginId', posts.id);
                    this.email = ''
                    this.password = ''
                    this.passwordAgain = ''

                }
                setTimeout(() => this.errorMessage = '', 1000)

            }



        },
        exit() {
            this.$store.commit('datas/uploadlogin', null)
            this.$store.commit('datas/uploadloginId', null)
            localStorage.removeItem('login');
            localStorage.removeItem('loginId');
        }
    }

}


</script>


<style lang="scss" scoped>
.minicont {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        color: rgb(1, 212, 149)
    }

    .activeTag {
        color: rgb(1, 212, 149)
    }


    .btnAndError {
        width: 100%;
        display: flex;
        justify-content: space-between;

        button {
            border: 2px solid black;
            box-shadow: inset 0 0 1px 1px rgb(1, 212, 149);
            font-family: 'ErmilovBold';
            border-radius: 5px;

            background: #a5a3a3;
        }

    }
}



.minicont span {
    font-family: 'ErmilovBold';
    color: rgb(0, 0, 0);
    font-size: 18px;

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
    margin-bottom: 10px;
}

.menu {
    position: absolute;
    left: auto;
    right: auto;
    top: 100px;
    background: #515151;
    border: 2px solid rgb(6, 255, 180);
    border-radius: 10px;
    display: flex;
    padding: 15px;
    max-width: 500px;


}
</style>