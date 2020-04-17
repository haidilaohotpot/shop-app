<template xmlns:v-lazy="http://www.w3.org/1999/xhtml">
    <div>
        <van-nav-bar
                title="详情"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-grid-item>
        </van-grid>
        <van-panel title="出一台华为MateBook平板" desc="购入时间是2020年10月20日，华为MateBook平板，都是高配的，
                        没有任何磨损，要的联系我，wx：tx8888" status="可议价">
            <div>
                <img v-for="img in imageList" v-lazy="img" />
            </div>
        </van-panel>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Lazyload } from 'vant';
    import { Toast,NavBar } from 'vant';
    import { Grid, GridItem } from 'vant';
    import { Panel } from 'vant';


    Vue.use(Panel);
    Vue.use(Grid);
    Vue.use(GridItem);
    Vue.use(Toast).use(NavBar);
    // 注册时可以配置额外的选项
    Vue.use(Lazyload, {
        lazyComponent: true,
    });

    export default {
        data() {
            return {
                imageList: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg'
                ],
            };
        },
        methods: {
            onClickLeft() {
                this.$router.push({path:"/community"})
            }
        },
    };
</script>

<style scoped>

</style>
