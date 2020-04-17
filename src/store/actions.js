export default{	
	addCart({commit},goods){
		commit('addCart',goods)
	},
	inc({commit},goods){
		commit('inc',goods)
	},
	dec({commit},goods){
		commit('dec',goods)
	},
	checkAll({commit},checked){
		commit('checkAll',checked)
	},
	checkOne({commit},checked){
		commit('checkOne',checked)
	}
}