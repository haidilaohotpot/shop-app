import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Row,Col,Icon,Search,Swipe, SwipeItem,
   Lazyload,Grid,GridItem,Image,Tabbar, TabbarItem,
   Tab,Tabs,Sticky,Card,Checkbox,Stepper
   ,SubmitBar,List,PullRefresh,Cell,Panel,Button,Tag} from "vant"

Vue.config.productionTip = false

Vue.use(Row).use(Col).use(Icon).use(Search).use(Swipe)
    .use(SwipeItem).use(Lazyload).use(Grid).use(GridItem)
	.use(Image).use(Tabbar).use(TabbarItem).use(Tab)
	.use(Tabs).use(Sticky).use(Card).use(Stepper).use(SubmitBar)
	.use(Checkbox).use(List).use(PullRefresh).use(Cell).use(Panel).use(Button).use(Tag)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
