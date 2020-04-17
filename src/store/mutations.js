export default {
	//添加购物车
	addCart(state, goods) {
		//如果已经有该产品,增加数量
		let hasExist = state.cart.some((item) => {
			if (item.id == goods.id) {
				item.num++;
				return true;
			}
		});
		if (!hasExist) {
			state.cart.push({
				id: goods.id,
				name: goods.name,
				price: goods.price,
				num: 1,
				pic: goods.pic,
				selected: true
			});
		}
		//保存到本地存储
		localStorage.setItem('cart', JSON.stringify(state.cart));
	},

	inc(state, goods) {
		let hasExist = state.cart.some((item) => {
			if (item.id == goods.id) {
				item.num++;
				return true;
			}
		});
		localStorage.setItem('cart', JSON.stringify(state.cart));
	},
	dec(state, goods) {
		let saveFlag = state.cart.some((item) => {
			if (item.id == goods.id) {
				if(item.num<=0) return false;
				item.num--;
				if(item.num==0)
					item.selected=false;
				return true;
			}
		});
		if(saveFlag)
			localStorage.setItem('cart', JSON.stringify(state.cart));
	},
	
	checkAll(state,checked){
		state.cart.forEach((item)=>{
			item.selected=checked
		})
		localStorage.setItem('cart', JSON.stringify(state.cart));
	},
	
	checkOne(state,goods){
		let saveFlag = state.cart.some((item) => {
			if (item.id == goods.id) {
				item.selected=!goods.selected;
				return true;
			}
		});
		localStorage.setItem('cart', JSON.stringify(state.cart));
	}
}
