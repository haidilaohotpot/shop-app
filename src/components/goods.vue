<template>
	<div class="content">
		<van-image :src="product.pic"></van-image>
		<div>{{product.name}}</div>
		<div class="gray_text">{{product.desc}}</div>
		<div class="cart-wrap">
			<div>
				<span style="color:red">¥{{product.price}}</span>
				<span class="gray_text">/{{product.unit}}</span>
			</div>
			<van-icon name="shopping-cart-o" color="red" @click="addCart(product)"></van-icon>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex' 
	
	export default {
		props:['product'],
		methods:{
			...mapActions(['addCart'])
		}
	}
</script>

<style scoped="scoped">
	.cart-wrap{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.gray_text{
		color:#ccc;
	}
</style>
