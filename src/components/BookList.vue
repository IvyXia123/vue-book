<template>
    <div id="book-list">
        <div class="header">
            <div class="heading">{{heading}}</div>
            <div class="more">更多...</div>
            <div class="book-items">
                <div class="book" v-for="book in books" @click="$emit('onBookSelect',book)">
                    <div class="cover">
                        <img :src="book.img_url"/>
                    </div>
                    <div class="title">{{book.title}}</div>
                    <div class="authors">{{book.authors|join}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default{
        name: 'book-list',
        props:[
            'heading',
            'books'
        ],
        filters:{
//            join(args){
//                return args.join(',');
//            }
        }
    }
</script>

<style lang="less" type="text/less">
    #book-list{
        width:100%;
        height:100%;
        .header{
            height:100%;
            .heading{
                float:left;
                line-height:25px;
                padding-left:10px;
                box-sizing:border-box;
                font-weight:bold;
            }
            .more{
                float:right;
                line-height:25px;
                padding-right:10px;
                box-sizing:border-box;
                font-weight:bold;
            }
            .book-items{
                width:100%;
                height:190px;
                padding:0 6px 0 6px;
                box-sizing:border-box;
                overflow:scroll;
                .book{
                    float:left;
                    width:50%;
                    height:100%;
                    padding:3px 6px 0 6px;
                    box-sizing:border-box;
                    .cover{
                        width:100%;
                        height:135px;
                        margin-bottom:3px;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .title{
                        text-align:center;
                        margin-bottom:5px;
                        font-weight:bold;
                    }
                    .authors{
                        text-align:center;
                    }
                }
            }
        }
    }
</style>