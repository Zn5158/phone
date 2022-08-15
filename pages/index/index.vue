<template>
	<view class="main">
		<view class="top">
			<image class="logo" src="../../static/logo-title.png" mode="widthFix"></image>
			<view class="icon-bg fr" @click='goIndexWake'>
				<image class="search-icon" src="../../static/icon-search.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" indicator-active-color='rgba(255,255,255,0.80)'
				indicator-color='rgba(255,255,255,0.40)' :autoplay="autoplay" :interval="interval" :duration="duration">
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
			<view class="category-box">
				<view class="category-item" v-for="item of categoryList" :key='item.url' :class="item.className1" :hover-class='item.className2'>
					<image class="category-item-img" :src="item.url" mode="widthFix"></image>
					<text class="category-item-text">{{item.text}}</text>
				</view>
			</view>
		</view>
		<view class="template-text">你可能想尝试</view>
		<view class="waterfall-layout">
			<view class="waterfall-item" style="height: 957rpx;">1</view>
			<view class="waterfall-item" style="height: 782rpx;">2</view>
			<view class="waterfall-item" style="height: 176rpx;">3</view>
			<view class="waterfall-item" style="height: 493rpx;">4</view>
			<view class="waterfall-item" style="height: 313rpx;">5</view>
			<view class="waterfall-item" style="height: 443rpx;">6</view>
			<view class="waterfall-item" style="height: 440rpx;">7</view>
			<view class="waterfall-item" style="height: 133rpx;">8</view>
		</view>
		<bar currentTab='0'></bar>
	</view>
</template>

<script>
	import bar from'/components/bar/bar.vue';
	export default {
		data() {
			return {
				title: 'Hello',
				indicatorDots: true,
				autoplay: true,
				interval: 4000,
				duration: 500,
				categoryList: [
					{
						url: '../../static/gzh.png',
						className1: 'style1',
						className2: 'style1-click',
						text: '公众号首图'
					},
					{
						url: '../../static/article.png',
						className1: 'style2',
						className2: 'style2-click',
						text: '文章配图'
					},
					{
						url: '../../static/sjhb.png',
						className1: 'style3',
						className2: 'style3-click',
						text: '手机海报'
					},
					{
						url: '../../static/jl.png',
						className1: 'style1',
						className2: 'style1-click',
						text: '简历'
					},
					{
						url: '../../static/pc-pic.png',
						className1: 'style2',
						className2: 'style2-click',
						text: 'PC长图'
					},
					{
						url: '../../static/phone-pic.png',
						className1: 'style3',
						className2: 'style3-click',
						text: '手机长图'
					},
					{
						url: '../../static/big-screen.png',
						className1: 'style1',
						className2: 'style1-click',
						text: '数据大屏'
					},
					{
						url: '../../static/ppt.png',
						className1: 'style2',
						className2: 'style2-click',
						text: 'PPT'
					},
				]
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
		padding: 0 45rpx;
		padding-bottom: 150rpx;

		.top {
			height: 70rpx;
			padding-top: 45rpx;
			margin-bottom: 16rpx;

			.logo {
				width: 303rpx;
				margin-top: 16rpx;
			}

			.icon-bg {
				float: right;
				width: 70rpx;
				height: 70rpx;
				background: #eff1f5;
				border-radius: 50%;
				text-align: center;

				.search-icon {
					width: 32rpx;
					margin-top: 19rpx;
				}
				&.fr {
					float: right;
				}
			}
		}

		.uni-margin-wrap {
			width: 100%;

			.swiper {
				height: 323rpx;

				.swiper-item {
					display: block;
					height: 323rpx;
					line-height: 323rpx;
					text-align: center;
					border-radius: 30rpx;
				}
			}
		}

		.category {
			width: 100%;
			height: 206rpx;
			margin: 34rpx 0;
			margin-bottom: 10rpx;
			overflow-x: auto;
			overflow-y: hidden;
			.category-box {
				white-space: nowrap;
				height: 186rpx;
				.category-item {
					width: 186rpx;
					height: 186rpx;
					display: inline-block;
					border-radius: 30px;
					margin-right: 34rpx;
					&.style1 {
						background: #d4ebff;
					}
					&.style2 {
						background: #d8fcde;
					}
					&.style3 {
						background: #e2d6fc;
					}
					&.style1-click {
						background: #badbf8;
					}
					&.style2-click {
						background: #bcefc4;
					}
					&.style3-click {
						background: #cfbef4;
					}
					
					.category-item-img {
						width: 47rpx;
						height: 46rpx;
						display: block;
						margin: 18rpx auto;
						margin-top: 44rpx;
					}
				
					.category-item-text {
						display: block;
						width: 100%;
						font-size: 24rpx;
						font-family: PingFangSC, PingFangSC-Medium;
						text-align: center;
					}
				}
			}
		}

		.template-text {
			height: 50rpx;
			line-height: 50rpx;
			font-size: 36rpx;
			font-family: PingFangSC, PingFangSC-Medium;
			margin-bottom: 18rpx;
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
	}
</style>
