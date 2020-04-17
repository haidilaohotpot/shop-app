<template>
	<div>
		<van-sticky>
			<van-row class="search-top">
				<van-col offset="10" span="10">
					<div class="cart-text">购物车</div>
				</van-col>
				<van-col span="4">
					<div class="gray-text">删除</div>
				</van-col>
			</van-row>
		</van-sticky>
		<myCard></myCard>
		<foot-tabs></foot-tabs>
	</div>
</template>
<script>
	import FootTabs from "../components/foot-tabs.vue"
	import myCard from "../components/MyCart.vue"
	export default {
		components: {
			FootTabs,myCard
		}
	}
</script>
<style scoped="scoped">
	.search-top {
		background: skyblue;
		width: 100%;
		height: 50px;
	}

	.cart-text {
		color: white;
		font-size: 18px;
		line-height: 50px;
		font-weight: bold;
	}

	.gray-text {
		color: #EEEEEE;
		line-height: 50px;
	}
</style>
