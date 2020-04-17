<template>
	<van-grid :border="false"  :column-num="2">
		<van-grid-item v-for="(item,index) in list" 
				:key="index">
			<goods :product="item"></goods>
		</van-grid-item>
	</van-grid>
</template>

<script>
	import Goods from "./goods.vue"
	export default{
		components:{
			Goods
		},
		props:['list']
	}
</script>

<style>
</style>
