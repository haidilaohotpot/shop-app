<template>
	<div>
		<div>
			<div class="cart" v-for="(item,index) in cart" :key="index">
				<van-checkbox :value="item.selected" @click="oneCheckHandler(item)"></van-checkbox>
				<van-card :price="item.price" :title="item.name" :thumb="item.pic">
				</van-card>
				<van-stepper size="32" :value="item.num" min="1" max="10" @plus="inc(item)" @minus="dec(item)" />
			</div>
		</div>
		<van-submit-bar custom-class="van-submit-bar" :price="cartTotal*100" button-text="提交订单">
			<van-checkbox @click="checkAllHandler" v-model="checked">全选</van-checkbox>
		</van-submit-bar>
	</div>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapActions
	} from "vuex"
	export default {
		data() {
			return {
				checked: true
			}
		},
		computed: {
			...mapState(['cart']),
			...mapGetters(['cartTotal'])
		},
		methods: {
			...mapActions(['inc', 'dec', 'checkAll', 'checkOne']),
			checkAllHandler() {
				this.checked = !this.checked;
				this.checkAll(this.checked)
			},
			oneCheckHandler(item) {
				this.checkOne(item);
			}
		}
	}
</script>

<style scoped="scoped">
	.cart {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	.van-submit-bar {
	    position: relative !important;
	}
</style>
