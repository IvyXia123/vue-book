<template>
    <div id="home">
        <!--热门推荐：轮播图-->
        <swiper :options="swiperOption" ref="mySwiperA">
            <!-- 幻灯内容 -->
            <router-link class="swiper-slide" tag="div" :to="{name:'BookDetail',params:{id:slide.id}}"
                         v-for="slide in slides">
                <img :src="slide.img_url"/>
            </router-link>
            <!-- 以下控件元素均为可选 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <!--快讯-->
        <div class="anouncement">
            <label>快讯</label>
            <span>{{anouncement}}</span>
        </div>

        <!--新书上架和编辑推荐-->
        <div class="selection">
            <book-list :books="latestUpdated" heading="新书上架" @onBookSelect="preview($event)"></book-list>
        </div>
        <div class="selection">
            <book-list :books="recommended" heading="编辑推荐" @onBookSelect="preview($event)"></book-list>
        </div>

        <!--ModalDialog模态框-->
        <modal-dialog ref="dialog" @dialogClose="selected=false">
            <div slot="header">
                <div class="dismiss" @click.prevent="$refs.dialog.close()">&times;</div>
            </div>
            <div class="selectImg">
                <img :src="selected.img_url"/>
                <div class="basicInfo">
                    <p><span>图书编号: </span>{{selected.id}}</p>
                    <p><span>作者: </span>{{selected.authors|join}}</p>
                    <p><span>标题: </span>{{selected.title}}</p>
                </div>
            </div>
            <div class="desc">
                {{selected.description}}
            </div>
        </modal-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';
    import VueAwesomeSwiper from 'vue-awesome-swiper';
    Vue.use(VueAwesomeSwiper);

    require('swiper/dist/css/swiper.css');

    import BookList from './components/BookList.vue'
    import ModalDialog from './components/Dialog.vue'
    import axios from 'axios'

    export default{
        data(){
            return {
                //轮播图的配置：
                swiperOption: {
                    // 所有配置均为可选（同Swiper配置）
                    autoplay: 3000,
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    onTransitionStart(swiper){
//                        console.log(swiper.activeIndex)
                    }
                },
                slides: [],
                anouncement: '',
                latestUpdated: [],
                recommended: [],
                selected: {}
            }
        },
        components: {
            BookList,
            ModalDialog
        },
//        filters:{
//            merge(args){
//                if(args){
//                    return args.join(',');
//                }
//            }
//        },
        computed: {
            swiper() {
                return this.$refs.mySwiperA.swiper
            }
        },
        methods: {
            preview(book){
//                console.log(book);
                this.selected = book;
                this.$refs.dialog.open();
            }
        },
        created(){
            const self = this;
            axios.get('../data.json').then((res) => {
                self.anouncement = res.data.anouncement;
                self.slides = res.data.slides;
                self.latestUpdated = res.data.latestUpdated;
                self.recommended = res.data.recommended;
            }, (error) => {
                console.log(`获取数据失败:${error}`);
            })
        },
        mounted() {
//            console.log("每次切换都会触发我");
//            this.swiper.slideTo(3, 1000, false)
        }
    }
</script>

<style lang="less" type="text/less">
    @import 'css/init.less';

    #home {
        height: 100%;
        padding-bottom: 50px;
        box-sizing: border-box;
        .swiper-container {
            height: 130px;
            width: 100%;
            .swiper-wrapper {
                .w(100%);
                height: 100% !important;
                .swiper-slide {
                    img {
                        .w(100%);
                        .h(100%);
                    }
                }
            }
        }
        .anouncement {
            .w(100%);
            .h(30px);
            .l-h(30px);
            text-align: left;
            padding-left: 10px;
            box-sizing: border-box;
            background: rgba(0, 0, 0, 0.1);
            label {
                padding: 5px;
                margin-top: 5px;
                box-sizing: border-box;
                font-weight: bold;
                background: #c0c0c0;
            }
        }
        .selection {
            height: 220px;
            &:nth-child(1) {
                background: blue;
            }
            &:nth-child(2) {
                background: green;
            }
        }
        .dismiss{
            text-align:right;
        }
        .selectImg{
            width:100%;
            height:200px;
            img{
                width:50%;
                height:100%;
                background:yellow;
            }
            .basicInfo{
                display:inline-block;
                width:50%;
                padding:0 3px 0 15px;
                box-sizing:border-box;
                float:right;
                p{
                    padding:5px 0;
                    line-height:20px;
                    &>span{
                        font-weight:bold;
                    }
                }
            }
        }
        .desc{
            margin-top:20px;
            line-height:20px;
            text-indent:25px;
        }
    }
</style>