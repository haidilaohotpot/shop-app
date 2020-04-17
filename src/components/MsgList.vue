<template>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="我们也是有底线的~"
            @load="onLoad"
    >

        <van-card
                v-for="item in list"
                :key="item"
                tag="最新"
                @click="getInfo"
                price="2.00"
                title="出一台华为MateBook平板，可小刀"
                desc="购入时间是2020年10月20日，华为MateBook平板，都是高配的，
                        没有任何磨损，要的联系我，wx：tx8888"
                thumb="https://img.yzcdn.cn/vant/apple-1.jpg"
        >
            <template #tags>
                <van-tag plain type="danger">平板</van-tag>
                <van-tag plain type="danger">华为</van-tag>
            </template>
            <template #footer>

            </template>
        </van-card>

    </van-list>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
            };
        },
        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 20; i++) {
                        this.list.push("Vant 是一套轻量、可靠的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。");
                    }

                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            },
            getInfo(){
                this.$router.push({path:"/msglistinfo"})
            }
        },
    };
</script>

<style scoped>

</style>
