<template>
    <div class="loading" :class="{'veil-style': isVeiled}" :style="{height: windowHeight+'px'}">
        <span v-for="(item,index) in backgroundColor" :key="index" :style="{'background-color': item}"></span>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    props: {
        veiled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            backgroundColor: ['blue','red','yellow'],
            isVeiled: this.veiled,
            windowHeight: window.outerHeight
        };
    },
    mounted() {
        this.changeBgColor();
    },
    methods: {
        changeBgColor() {
            var that = this;
            setInterval(function() {
                let bg0 = that.backgroundColor[0];
                let bg1 = that.backgroundColor[1];
                let bg2 = that.backgroundColor[2];
                that.$set(that.backgroundColor,0,bg2);
                that.$set(that.backgroundColor,1,bg0);
                that.$set(that.backgroundColor,2,bg1);
            },1000);
        }
    }
}
</script>
<style scoped lang='less'>
    .loading {
        padding-top: 80px;
    }
    .veil-style {
        width: 100%;
        background-color: rgb(0, 0, 0);
        opacity: 0.5;
        z-index: 1000;
        position: absolute;
        top: 0;
        left: 0;
    }
    span {
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-left: 15px;
        &:nth-child(1) {
            animation: 1s amplifing infinite;
        }
        &:nth-child(3) {
            animation: 1s shrinking infinite;
        }
        
    }
    @keyframes amplifing {
        25% {
            transform: scale(1.5)
        }
        75% {
            transform: scale(0.5);
        }
    }
    @keyframes shrinking {
        25% {
            transform: scale(0.5)
        }
        75% {
            transform: scale(1.5);
        }
    }
</style>

