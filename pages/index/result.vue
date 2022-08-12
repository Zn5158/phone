<template>
	<view class="top">
		<uni-icons type="back" size="20" color='#fff' class='back-icon' @click='goIndexWaken'></uni-icons>
		<view class="search">
			<uni-icons type="search" class='search-icon' size="20"></uni-icons>
			<input class="uni-input search-input" placeholder="七夕" />
		</view>
	</view>
	<view>{{title}}</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '结果页'
			}
		},
		onLoad() {

		},
		methods: {
			goIndexWaken() {
				uni.redirectTo({
					url: '/pages/index/waken'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		height: 100rpx;
		background: #0F42F4;
		.back-icon {
			line-height: 100rpx;
			margin: 0 20rpx;
		}
		.search {
			display: inline-block;
			width: 650rpx;
			vertical-align: -15rpx;
			background: #fff;
			border-radius: 5rpx;
			position: relative;
			.search-icon {
				position: absolute;
				left: 10rpx;
				top: 10rpx;
			}
			.search-input {
				box-sizing: border-box;
				padding-left: 60rpx;
				height: 60rpx;
				font-size: 26rpx;
			}
		}
	}
</style>
