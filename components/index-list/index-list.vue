<template>
	<view>
		<view class="ul">
			<view class="li flex-box" v-for="(item,index) in list" :key="index">
				<view class="left">
					<u-image class="szIco" :src="'https://cdn.uviewui.com/uview/swiper/swiper1.png'" :lazy-load="true" width="180rpx" height="180rpx"></u-image>
				</view>
				<view class="center box-1">
					<view class="hd media_title">标题标题标题标题标题标题标题标题标题标题标题标题</view>
					<view class="desc media_desc">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</view>
					<view class="time flex-box">
						<view>2021-12-30</view>
						<view>300</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 加载状态 -->
		<block v-if="loadStatus != 'none'">
			<block v-if="list.length > 0">
				<view style="padding: 30rpx;">
					<u-loadmore :status="loadStatus"  />
				</view>
			</block>
			<block v-else>
				<u-empty text="暂无数据" mode="favor"></u-empty>
			</block>
		</block>
	</view>
</template>

<script>
	export default {
		name:"assets-list",
		props: {
			list: Array,
			loadStatus: String
		},
		data() {
			return {
				
			};
		},
		onShow() {
			console.log(this.list)
		}
	}
</script>

<style lang="scss">
	.ul{
		.li{
			align-items: flex-start;
			padding:20rpx;
			.left{
				
			}
			.center{
				margin-left: 20rpx;
				.hd{
					font-size:32rpx;
				}
				.desc{
					font-size:26rpx;
					margin:10rpx 0;
				}
				.time{
					justify-content: space-between;
					color:#aaa;
				}
			}
		}
	}
</style>
