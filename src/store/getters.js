export default{
	//购物车数量
	cartNum(state){
		let cart=state.cart;
		if((cart==undefined)||(cart==null)) return 0;
		let num=0;
		cart.forEach(item=>{
				num+=item.num;
		})
		return num;
	},
	
	//某产品goods是否在购物车选中,
	//通过方法让getter返回一个函数，实现 getter 传参。
	// isInCart:state=>goods=>{}

	//计算总价
	cartTotal:state=>{
		let cart=state.cart;
		if((cart==undefined)||(cart==null)) return 0;
		let total=0;
		cart.forEach((item)=>{
			if(item.selected)
				total+=item.price*item.num
		})
		return total;
	}
}