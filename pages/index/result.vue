<template>
	<view class="main">
		<view class="top">
			<view class="icon-bg" @click='goIndexWaken'>
				<image class="back-icon" src="../../static/icon-back.png" mode="widthFix"></image>
			</view>
			<view class="search">
				<image class="search-icon" @click='goIndexResult' src="../../static/icon-search2.png" mode="widthFix"></image>
				<input class="uni-input search-input" placeholder="七夕" />
			</view>
		</view>
		<view class="template-list">
			<view class="template-box">
				<view class="template-item active">全部</view>
				<view class="template-item active">公众号首图</view>
				<view class="template-item active">文章配图</view>
				<view class="template-item active">手机海报</view>
				<view class="template-item active">简历</view>
				<view class="template-item active">PC长图</view>
				<view class="template-item active">手机长图</view>
				<view class="template-item active">数据大屏</view>
				<view class="template-item active">PPT</view>
			</view>
		</view>
		<view class="tab">
			<text class="template-tab active">最新</text>
			<text class="template-tab">最热</text>
			<text class="template-num">{{all}}个模板</text>
		</view>
		<view v-if="all!=0" class="waterfall-layout">
			<view class="waterfall-item" style="height: 957rpx;">1</view>
			<view class="waterfall-item" style="height: 782rpx;">2</view>
			<view class="waterfall-item" style="height: 176rpx;">3</view>
			<view class="waterfall-item" style="height: 493rpx;">4</view>
			<view class="waterfall-item" style="height: 313rpx;">5</view>
			<view class="waterfall-item" style="height: 443rpx;">6</view>
			<view class="waterfall-item" style="height: 440rpx;">7</view>
			<view class="waterfall-item" style="height: 133rpx;">8</view>
		</view>
		<view class="no-template-box" v-if="all == 0">
			<image class="no-template" src='../../static/no-template.png' mode="widthFix"></image>
			<view class="no-template-text">没有相关模版，请修改 关键词后重试</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '结果页',
				all: 0
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
		.template-list {
			margin: 39rpx 0 32rpx 0;
			height: 90rpx;
			overflow-x: auto;
			overflow-y: hidden;
			.template-box {
				white-space: nowrap;
				height: 70rpx;
				.template-item {
					font-size: 28rpx;
					font-family: PingFangSC, PingFangSC-Medium;
					line-height: 70rpx;
					box-sizing: border-box;
					background: #eff1f5;
					border-radius: 34px;
					text-align: center;
					margin-right: 20rpx;
					display: inline-block;
					padding: 0 30rpx;
					&.active {
						border: 1px solid #005cfa;
						color: #005cfa;
					}
				}
			}
		}
		.tab {
			height: 80rpx;
			margin-bottom: 34rpx;
			text {
				float: left;
				height: 80rpx;
				padding: 0 10rpx;
				line-height: 80rpx;
				font-size: 36rpx;
				font-family: PingFangSC, PingFangSC-Medium;
				&.active {
					font-weight: 700;
					box-sizing: border-box;
					border-bottom: 8rpx solid #005cfa;
				}
			}
			.template-num {
				float: right;
			}
			.template-tab {
				margin-right: 82rpx;
			}
		}
		.waterfall-layout {
			column-count: 2;
			column-gap: 34rpx;
		
			.waterfall-item {
				width: 100%;
				margin-bottom: 34rpx;
				background: red;
				border-radius: 15rpx;
				break-inside: avoid;//使元素不分裂
			}
		}
		.no-template-box {
			text-align: center;
			.no-template {
				width: 320rpx;
				margin-top: 133rpx;
				margin-bottom: 60rpx;
			}
			.no-template-text {
				width: 320rpx;
				line-height: 60rpx;
				font-size: 32rpx;
				font-family: PingFangSC, PingFangSC-Regular;
				margin: 0 auto;
			}
		}
	}
</style>
