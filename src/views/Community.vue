<template>
	<div>
		<van-sticky>
			<van-row class="search-top">
				<van-col offset="10" span="10">
					<div class="cart-text">让闲置活起来</div>
				</van-col>
			</van-row>
		</van-sticky>
		<msg-list></msg-list>
		<foot-tabs></foot-tabs>
	</div>
</template>
<script>
	import FootTabs from "../components/foot-tabs.vue"
	import MsgList from "../components/MsgList.vue"
	export default {
		components: {
			FootTabs,MsgList
		}
	}
</script>
<style scoped="scoped">
	.search-top {
		background:yellow;
		width: 100%;
		height: 50px;
	}

	.cart-text {
		color: black;
		font-size: 18px;
		line-height: 50px;
		font-weight: bold;
	}

	.gray-text {
		color: #EEEEEE;
		line-height: 50px;
	}
</style>
