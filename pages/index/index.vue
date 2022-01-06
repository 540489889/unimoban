<template>
	<view class="indexContent">
		<view class="header">
			<u-swiper
				:autoplay="false"
				:list="list1"
				@click="swiperClick"
			    ></u-swiper>
		</view>
		<view class="content">
			<u-sticky offset-top="0" bgColor="#ffffff">
				<u-tabs :list="list2" @click="tabClick"></u-tabs>
			</u-sticky>
			<indexList :list="list" :loadStatus="loadStatus"></indexList>
		</view>
	</view>
</template>

<script>
	import indexList from '../../components/index-list/index-list.vue';
	export default {
		components:{
			indexList
		},
		data() {
			return {
				page:1,
				loadStatus:'loading',
				title: 'Hello',
				list1:[
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				list2:[{
                    name: '动漫',
                },{
                    name: '理财',
                },
				{
				    name: '跨境',
				},
				{
				    name: '手机银行',
				},
				{
				    name: '营销活动',
				}],
				list:[]
			}
		},
		onLoad() {
			this.getIndexList()
		},
		onShow() {
			
		},
		onReachBottom() {
			this.page++;
			this.getIndexList();
		},
		onPullDownRefresh() {
			
		},
		methods: {
			getIndexList(){
				console.log(this.page)
				// this.loadStatus = 'loading'
				let page = this.page
				this.$u.api.indexList({page: page}).then(res=>{
					console.log(res,this.page)
					if(this.page==1){
						this.list = res.msg.list
					}else{
						this.list = this.list.concat(res.msg.list);
						// this.$forceUpdate()
						if (this.page >= res.msg.totalPage || res.msg.totalPage === 0) {
							this.loadStatus = "nomore";
						} else {
							this.loadStatus = "loadmore"
						}
					}
				})
				return false
				// this.$H.post('/prefix/index/info/index', {
				// 	page: page
				// }).then(res => {
				// 	console.log(res,this.page)
				// });
			},
			swiperClick(){
				
			},
			tabClick(item){
				console.log('item', item);
			}
		}
	}
</script>

<style lang="scss">
	
</style>
