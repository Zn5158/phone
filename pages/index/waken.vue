<template>
	<view class="main">
		<view class="top">
			<view class="icon-bg" @click='goIndex'>
				<image class="back-icon" src="../../static/icon-back.png" mode="widthFix"></image>
			</view>
			<view class="search">
				<image class="search-icon" @click='goIndexResult' src="../../static/icon-search2.png" mode="widthFix"></image>
				<input class="uni-input search-input" placeholder="请搜索模板" />
			</view>
		</view>
		<view class="rank-title">热搜排名</view>
		<view class="rank-item">
			<image src="../../static/hot.png" mode="widthFix"></image>
			电商数据大屏
		</view>
		<view class="rank-item">
			<image src="../../static/hot.png" mode="widthFix"></image>
			企业年报
		</view>
		<view class="rank-item">
			<image src="../../static/hot.png" mode="widthFix"></image>
			高考
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '我是唤醒页'
			}
		},
		onLoad() {

		},
		methods: {
			goIndex() {
				uni.redirectTo({
					url: '/pages/index/index'
				})
			},
			goIndexResult() {
				uni.redirectTo({
					url: '/pages/index/result'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		padding: 36rpx 45rpx;
		.top {
			height: 70rpx;
			.icon-bg {
				float: left;
				width: 70rpx;
				height: 70rpx;
				background: #eff1f5;
				border-radius: 50%;
				text-align: center;
				margin-right: 30rpx;
			
				.back-icon {
					width: 28rpx;
					margin-top: 21rpx;
				}
			}
			.search {
				display: inline-block;
				width: 560rpx;
				height: 70rpx;
				vertical-align: -15rpx;
				background: #eff1f5;
				border-radius: 34rpx;
				box-sizing: border-box;
				padding-left: 44rpx;
				.search-icon {
					width: 32rpx;
					margin-top: 20rpx;
					float: left;
				}
				.search-input {
					float: left;
					box-sizing: border-box;
					padding-left: 14rpx;
					width: 450rpx;
					height: 70rpx;
					font-size: 28rpx;
					font-family: PingFangSC, PingFangSC-Semibold;
				}
			}
		}
		.rank-title {
			margin-top: 55rpx;
			height: 50rpx;
			font-size: 36rpx;
			font-family: PingFangSC, PingFangSC-Medium;
			margin-bottom: 34rpx;
		}
		.rank-item {
			margin-bottom: 34rpx;
			image {
				width: 28rpx;
				margin-right: 22rpx;
				vertical-align: -6rpx;
			}
		}
	}
</style>
