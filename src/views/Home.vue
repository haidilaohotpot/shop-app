<template>
	<div class="content">
		<!-- <van-row type="flex" justify="space-around"> -->
		<van-sticky >
			<van-row class="search-top" type="flex" align="center" justify="center">
				<van-col span="1" offset="1">
					<van-icon color="white" size="24px" name="location-o"></van-icon>
				</van-col>
				<van-col span="18">
					<van-search v-model="value" shape="round" background="skyblue" placeholder="水果" />
				</van-col>
				<van-col span="2">
					<van-icon size="24px" color="green" name="points"></van-icon>
				</van-col>
				<van-col span="2">
					<van-icon size="24px" color="white" dot name="chat-o"></van-icon>
				</van-col>
			</van-row>
		</van-sticky>
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img :src="image" />
			</van-swipe-item>
		</van-swipe>

		<van-grid :border="false" :column-num="5">
			<van-grid-item v-for="(item,index) in cataList" :icon="item.pic" :text="item.name" :key="index">
			</van-grid-item>
		</van-grid>
		<van-sticky :offset-top="stickyHeight">
			<van-tabs title-active-color="skyblue" background="#eee" color="skyblue" swipe-threshold="5" v-model="active">
				<van-tab title="全部" />
				<van-tab title="菜谱" />
				<van-tab title="早餐" />
				<van-tab title="休闲" />
				<van-tab title="人气" />
			</van-tabs>
		</van-sticky>

		<goods-list :list="productlist"></goods-list>
		<div class="zero-wrap"/>

		<foot-tabs></foot-tabs> 
	</div>
</template>

<script>
	import {mapGetters} from "vuex"
	import FootTabs from "../components/foot-tabs.vue"
	import GoodsList from "../components/goods-list.vue"

	export default {
		name: 'Home',
		components: {
			FootTabs,
			GoodsList
		},
		data() {
			return {
				value: '',
				active: 0,
				stickyHeight: '54',
				images: [
					require("../assets/pic/1.jpg"),
					require("../assets/pic/2.jpg"),
					require("../assets/pic/3.jpg"),
					require("../assets/pic/4.jpg")
				],
				cataList: [{
						name: '餐饮熟食',
						pic: require("../assets/pic/cata/1.png")
					},
					{
						name: '乳品烘焙',
						pic: require("../assets/pic/cata/2.png")
					},
					{
						name: '美妆百货',
						pic: require("../assets/pic/cata/3.png")
					},
					{
						name: '酒水饮料',
						pic: require("../assets/pic/cata/4.png")
					},
					{
						name: '粮油零食',
						pic: require("../assets/pic/cata/5.png")
					},
					{
						name: '面点冻品',
						pic: require("../assets/pic/cata/6.png")
					},
					{
						name: '海鲜水产',
						pic: require("../assets/pic/cata/7.png")
					},
					{
						name: '肉禽蛋品',
						pic: require("../assets/pic/cata/8.png")
					},
					{
						name: '新鲜蔬菜',
						pic: require("../assets/pic/cata/9.png")
					},
					{
						name: '时令水果',
						pic: require("../assets/pic/cata/10.png")
					}
				],
				productlist: [{
					    id:1,
						name: '羊排 1000g',
						desc: '草园领头羊',
						price: 120,
						unit: '份',
						pic: require("../assets/pic/product/1.jpg")
					},
					{
						id:2,
						name: '猪瘦肉',
						desc: '乡村,精选',
						price: 80,
						unit: '公斤',
						pic: require("../assets/pic/product/2.jpg")
					},
					{
						id:3,
						name: '明虾',
						desc: '南美白虾',
						price: 240,
						unit: '公斤',
						pic: require("../assets/pic/product/3.jpg")
					},
					{
						id:4,
						name: '龙虾',
						desc: '澳洲出产',
						price: 160,
						unit: '只',
						pic: require("../assets/pic/product/4.jpg")
					},
					{
						id:5,
						name: '红萝卜',
						desc: '根根脆爽,饱满红嫩',
						price: 4,
						unit: '公斤',
						pic: require("../assets/pic/product/5.jpg")
					},
					{
						id:6,
						name: '青尖椒',
						desc: '入口微辣,肉厚质嫩',
						price: 4.98,
						unit: '份',
						pic: require("../assets/pic/product/6.jpg")
					}
				]
			}
		},
		mounted() {
			let w = document.querySelector(".search-top").clientHeight;			
			this.stickyHeight=`${w}`;
		}

	}
</script>

<style scoped="scoped">
	.content{
		background: #ccc;
	}
	.search-top {
		background: skyblue;
	}
	img {
		width: 100%;
		height: 150px;
	}
	.zero-wrap{
		height: 50px;
	}
</style>
