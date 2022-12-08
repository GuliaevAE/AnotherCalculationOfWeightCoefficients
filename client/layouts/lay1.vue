<template>
    <div>
        <HelloWorld />
        <Nuxt style="width: 100%;" />
        <div v-if="viewButton" class="toTop" onclick="window.scroll({left:0, top:0, behavior: 'smooth'})">Top</div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            viewButton:false
        }
    },
    methods: {
        scrollHandle: function (e) {
            let top = e.srcElement.scrollingElement.scrollTop
            if (top > 100) {
                this.viewButton = true
            }else{this.viewButton = false}
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollHandle)
    }
    

}
</script>

<style scoped>
.toTop {
    position: fixed;
    color: rgb(6, 255, 180);
    bottom: 10px;
    right: 10px;
    background: rgb(92, 92, 92);
    border-radius: 10px;
    font-size: 20px;
    font-family: "CurrentRegular";
    padding: 10px;
    z-index: 3;
}
</style>


