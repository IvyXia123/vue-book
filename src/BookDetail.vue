<template>
    <div id="bookDetail">
        <h2>牛仔裤萨达</h2>
        <h1>{{$route.params.id}}</h1>
    </div>
</template>

<script>

    export default {
        name: 'bookDetail',
        data () {
            return {
                msg: ''
            }
        },
        methods: {
            getId(){
                console.log(this.$route.params.id);
                return this.$route.params.id;
            }
        },
        created(){
            this.getId();
        },
        watch: {
            '$route': 'getId'  //监听id值的变化
        }
    }
</script>

<style>
    h1 {
        color: red;
    }
</style>



