<template>
	<view class="main">
		<view class="top">
			<image class="logo" src="../../static/logo.svg" mode="widthFix"></image>
			<view class="search">
				<uni-icons type="search" class='search-icon' @click='goIndexWake' size="20"></uni-icons>
				<input class="uni-input search-input" placeholder="搜索数据图文" />
			</view>
		</view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" indicator-active-color='#fff'
				indicator-color='#DDDFDE' :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item" style="background-color: red;">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item" style="background-color: green;">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item" style="background-color: blue;">C</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="category">
			<view class="category-item">
				<image class="category-item-img"></image>
				<text class="category-item-text">公众号首图</text>
			</view>
			<view class="category-item">
				<image class="category-item-img"></image>
				<text class="category-item-text">文章配图</text>
			</view>
			<view class="category-item">
				<image class="category-item-img"></image>
				<text class="category-item-text">手机海报</text>
			</view>
			<view class="category-item">
				<image class="category-item-img"></image>
				<text class="category-item-text">简历</text>
			</view>
			<view class="category-item">
				<image class="category-item-img"></image>
				<text class="category-item-text">PC长图</text>
			</view>
		</view>
		<view class="template-text">你可能想尝试</view>
		<view class="waterfall-layout">
			<view class="waterfall-item" style="height: 300rpx;">1</view>
			<view class="waterfall-item" style="height: 60rpx;">2</view>
			<view class="waterfall-item" style="height: 190rpx;">3</view>
			<view class="waterfall-item" style="height: 70rpx;">4</view>
			<view class="waterfall-item" style="height: 290rpx;">5</view>
			<view class="waterfall-item" style="height: 200rpx;">6</view>
			<view class="waterfall-item" style="height: 130rpx;">7</view>
			<view class="waterfall-item" style="height: 200rpx;">8</view>
			<view class="waterfall-item" style="height: 220rpx;">9</view>
			<view class="waterfall-item" style="height: 180rpx;">10</view>
			<view class="waterfall-item" style="height: 150rpx;">11</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				indicatorDots: true,
				autoplay: true,
				interval: 4000,
				duration: 500
			}
		},
		onLoad() {
			
		},
		methods: {
			goIndexWake() {
				uni.redirectTo({
					url: '/pages/index/waken'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		width: 750rpx;
		box-sizing: border-box;
		padding: 0 20rpx;

		.top {
			height: 100rpx;
			box-sizing: border-box;
			padding-top: 20rpx;

			.logo {
				width: 200rpx;
				margin: 0 20rpx;
			}

			.search {
				display: inline-block;
				width: 450rpx;
				border-radius: 50rpx;
				border: 1rpx solid #ccc;
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

		.uni-margin-wrap {
			width: 100%;

			.swiper {
				height: 300rpx;

				.swiper-item {
					display: block;
					height: 300rpx;
					line-height: 300rpx;
					text-align: center;
					border-radius: 10rpx;
				}
			}
		}

		.category {
			display: flex;
			width: 100%;
			margin: 40rpx 0;

			.category-item {
				flex: 0 0 20%;

				.category-item-img {
					width: 80rpx;
					height: 80rpx;
					background: red;
					display: block;
					margin: 10rpx auto;
					margin-top: 0;
				}

				.category-item-text {
					display: block;
					width: 100%;
					text-align: center;
					font-size: 24rpx;
				}
			}
		}

		.template-text {
			font-size: 30rpx;
			font-weight: 700;
			color: #000;
			line-height: 50rpx;
			margin-bottom: 20rpx;
		}

		.waterfall-layout {
			column-count: 2;
			column-gap: 20rpx;

			.waterfall-item {
				width: 100%;
				margin-bottom: 20rpx;
				background: red;
				break-inside: avoid;//使元素不分裂
			}
		}
	}
</style>
