export default{
	//购物车
	cart:localStorage["cart"]?JSON.parse(localStorage["cart"]): [] 
}