<template>
	<van-tabbar  route :z-index="0" v-model="active">
		<van-tabbar-item to="/" icon="home-o">主页</van-tabbar-item>
		<van-tabbar-item icon="apps-o">分类</van-tabbar-item>
		<van-tabbar-item to="/community" icon-prefix="iconfont icon"  icon="24gl-bagFull2">盒区生活</van-tabbar-item>
		<van-tabbar-item to="/cart" :info="cartNum==0?null:cartNum"
			icon="shopping-cart-o">购物车</van-tabbar-item>
		<van-tabbar-item icon="contact">我的</van-tabbar-item>
	</van-tabbar>
</template>

<script>
	import {mapGetters} from "vuex"
	export default {
		data() {
			return {
				active: 0,
			}
		},
		computed:{
			 ...mapGetters(['cartNum'])
		}
	}
</script>

<style scoped="scoped">
	@import url("../assets/font/iconfont.css");
</style>
