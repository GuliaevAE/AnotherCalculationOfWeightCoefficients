<template>
    <div class="item" @mouseenter="isHov = true" @mouseleave="isHov = false">
        <!-- @mouseenter="isHov=true" @mouseleave="isHov=false" -->

        <div class="data">
            <div class="divName">
                <div class="nameAndStore" :class="{ activeText: isHov }">
                    <div style="display:flex; justify-content:space-between">
                        <span class="store" :class="{ activestore: isHov, juststore: !isHov }">
                            {{ itemData.store }}
                        </span>
                        <a class="store" :class="{ activestore: isHov, juststore: !isHov }" target="_blank"
                            :href=itemData.link><span>{{ itemData.price }} Ryb</span></a>
                    </div>

                    <div class="title">
                        <div><span>{{ itemData.name }}</span></div>

                    </div>
                </div>

                <div class="deskr " :class="{ activeText: isHov, smallheight: isSmall }">
                    <div class="hov" :class="{ op0: isOpen }">
                        <span v-for="(value, key) in itemData" :key="key"
                            v-if="key !== 'id' && key !== 'type' && key !== 'price' && key !== 'store' && key !== 'name' && key !== 'link' && key !== 'type' && key !== 'image' && key !== 'transformations'">
                            {{ key }}: {{ value }}
                        </span>
                    </div>
                    <div class="ranksValues hov" :class="{ op1: isOpen }">
                        <div class="message" v-if="message"><strong>{{ message }}</strong></div>
                        <span v-if="!message" v-for="(value, key) in transformations.норм">{{ key }}: {{
                            value.toFixed(3)
                        }}</span>

                    </div>

                </div>
            </div>
            <div class="divOther">
                <div>
                    <span>{{ itemData.type }}</span>
                </div>

            </div>
        </div>

        <div class="footer" :class="{ activeprice: isHov }">
            <span id="rating">RATING: {{ transformations.рейтинг.toFixed(3) }}</span>
            <div class="icons">
                <div @click="isOpen = !isOpen">
                    <Icon icon="mdi:eye" height="40" />
                </div>
                <div v-if="userPart === 'false'" @click="addNewClientPart">
                    <Icon icon="material-symbols:bookmark-add" height="38" />
                </div>
                <div v-if="userPart === 'true'" @click="deleteUserParts">
                    <Icon icon="majesticons:analytics-delete" height="37" />
                </div>
            </div>


        </div>
    </div>
</template>
  
<script>
import { Icon } from '@iconify/vue2';
import { mapGetters } from 'vuex'
export default {
    name: 'CompsItemWeight',
    props: ['itemData', 'transformations', 'isSmall', 'userPart'],
    components: {
        Icon,
    },
    data: function () {
        return {
            isHov: false,
            isOpen: false,
            message: false
        }
    },
    computed: {
        ...mapGetters('datas', ['getloginId'])
    },
    methods: {
        async addNewClientPart() {
            const message = await this.$axios.$post('http://localhost:8080/api/newcp', { clientid: this.getloginId, moduleid: this.itemData.id, type: this.itemData.type })
            console.log(message.message)
            this.message = message.message
            this.isOpen = true
            setTimeout(() => {
                this.isOpen = false
                this.$nuxt.$emit('refreshUserParts')
            }, 750)
            setTimeout(() => {
                this.message = false
            }, 1000)



            // const ip = await this.$axios.$post('http://localhost:8080/api/allcp', { clientid: this.getloginId })
        },
        async deleteUserParts() {
            const message = await this.$axios.$post('http://localhost:8080/api/deletecp', { clientid: this.getloginId, moduleid: this.itemData.id, type: this.itemData.type })
            console.log(message.message)
            this.message = message.message
            this.isOpen = true
            setTimeout(() => {
                this.isOpen = false
                this.$nuxt.$emit('refreshUserParts')
            }, 750)
            setTimeout(() => {
                this.message = false
            }, 1000)


        },
    }

}
</script>
  
<style lang="scss" scoped>
#rating {
    font-family: "CurrentRegular";
    font-weight: 700;
    font-size: 25px;
    margin-top: 10px;
}


.ranksValues {
    position: absolute;
    background: rgba(255, 0, 0, 0);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;


    .message {
        height: 100%;
        width: 100%;
        color: rgb(6, 255, 180);
        display: flex;

        justify-content: center;
        align-items: center;

        strong {
            font-size: 20px;
            display: inline-block;
            width: 80%;
        }
    }
}

.op1 {
    opacity: 1;
}

.op0 {
    opacity: 0;
}

.item {
    width: 100%;
    position: relative;
    background: rgb(81, 81, 81);
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 15px;
    height: fit-content;
    box-sizing: border-box;
    padding: 3px;
    transition: all .5s;
    z-index: 2;
    box-shadow: 0 -3px rgb(107, 107, 107), 0 -5px 1px rgb(6, 255, 180);
}

.item:hover {
    box-shadow: 0 -3px rgb(92, 92, 92), 0 -5px 7px rgb(6, 255, 180), 0 0px 7px rgb(6, 255, 180);
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
    box-shadow: inset 0 0 2px rgb(0, 0, 0);
    transition: all .3s;
}

.data:hover {
    background: #262d2a;
    box-shadow: inset 0 0 2px 1px rgb(0, 0, 0), inset 0 0 5px .5px rgb(6, 255, 180);

}

.nameAndStore {
    display: flex;
    flex-direction: column;
    width: 100%;

}

.nameAndStore span {
    transition: all .3s;
}


.store {
    font-size: 15px;
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
    transition: transform .3s;
}


#link {
    font-family: "CurrentRegular";
    right: 15px;
    display: block;
    transition: all .3s;
    font-weight: 1000;
    font-size: 25px;
    position: absolute;
}

#link:hover {
    text-shadow: -0 -3px rgb(92, 92, 92), -0 -5px rgb(6, 255, 180);
}

.divName {
    width: auto;
    display: flex;
    flex-wrap: wrap;
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
    margin-left: 10px;
    background: rgb(81, 81, 81);
    padding: 10px 0;
    border-radius: 4px 6px 6px 4px;
}


@keyframes text {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-50%);
    }
}

#price {
    color: rgb(255, 255, 255);
    font-family: "CurrentRegular";
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 700;
    font-size: 25px;
    transition: all .3s;
}

.activeprice {
    color: rgb(6, 255, 180)
}


.price.activeprice {
    top: 5px;
    color: white;
    text-shadow: -0 -3px rgb(92, 92, 92), -0 -5px red;
}



.hov {
    display: flex;
    flex-direction: column;
    transition: all .3s;

    span::before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 10px;
        border: 2px solid rgb(6, 255, 180);
        border-radius: 50%;
        margin-right: 5px;
    }
}



.footer {
    background: rgba(138, 138, 138, 0);
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 15px 15px;
    position: relative;
    padding: 0 10px;

    .icons {
        display: flex;
        gap: 5px;
        align-items: center;
    }


    span {
        transition: all 13s;
        transition: none;
        color: rgb(36, 36, 36)
    }

}






.footer.activeprice span {
    color: rgb(6, 255, 180)
}

.divOther span {
    color: rgb(6, 255, 180);
    writing-mode: vertical-lr;
    font-weight: 700;
    font-size: 18px;
}

.divOther img {
    border-radius: 5px;
    height: auto;
    max-width: 90px;
    position: relative;
}


.deskr {
    position: relative;
    overflow-y: auto;
    width: 100%;
}

.smallheight {
    height: 180px;
}

.deskr::-webkit-scrollbar {
    width: 0;
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
</style>