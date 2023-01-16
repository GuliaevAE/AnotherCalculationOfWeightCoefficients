<template>
    <div class="menu">
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

</template>


<script>
export default {
  
    data() {
        return {

            filtVidName: '',
            filtVidMemory: '',

            filtProcName: ''
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


<style  scoped>
.minicont {
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
</style>