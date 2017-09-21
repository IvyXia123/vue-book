<template>
    <div id="dialog" :class="{'open':is_open}">
        <div class="overlay" @click="close"></div>
        <div class="dialog">
            <div class="heading">
                <slot name="header"></slot>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import './../css/dialog.less'
    export default{
        name: 'dialog',
        data(){
            return{
                is_open:false
            }
        },
        methods:{
            open(){
                if(!this.is_open){
                    this.$emit('dialogOpen');
                }
                this.is_open=true;
            },
            close(){
                if(this.is_open){
                    this.$emit("dialogClose");
                }
                this.is_open=false;
            }
        }
    }
</script>

<style lang="less" type="text/less">
    #dialog{

        height:100%;
        display:none;
        &.open{
            display:block;
        }
        &>.overlay{
            position:absolute;
            background:rgba(0,0,0,0.3);
            z-index:1;
            top:0;
            left:0;
            bottom:0;
            right:0;
        }
        &>.dialog{
            position:fixed;
            z-index:10;
            background:#fff;
            top:24px;
            left:24px;
            right:24px;
            bottom:24px;
            padding:24px 24px;
            box-shadow:0 0 10px rgba(0,0,0,0.8);
            &>.heading{
                padding:12px;
            }
        }
    }
</style>