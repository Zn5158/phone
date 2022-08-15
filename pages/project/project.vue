<template>
	<view class="no-login" v-if='!isLogin'>
		<view class="no-login-view">
			<text class="tip">登录后才可以看到你的项目</text>
			<button class="login" @click='isMask = true'>立即登录</button>
		</view>
	</view>
	<view class="page-login" v-if='isLogin'>
		<!-- <view class="space-select" @click='handlerSelect'>
			{{spaceName}}
			<uni-icons class='icon-arrow' :type="arrow" color='#fff' size="15"></uni-icons>
			<view class="space-container" v-if="arrow == 'top'">
				<view class="space-item" :class="{'active': spaceId == item.id}" v-for="item of spaceList" :key="item.id" @click.stop='selectSpace(item)'>
					{{item.name}}
					<uni-icons v-if='spaceId == item.id' class='icon-check' type="checkmarkempty" color='#517CEF' size="15"></uni-icons>
				</view>
			</view>
		</view> -->
		<view class="title">
			<view class="icon-user"></view>
			<view class="title-space">{{spaceName}}</view>
			<view class="icon-bg fr" @click='goIndexWake'>
				<image class="search-icon" src="../../static/icon-search.png" mode="widthFix"></image>
			</view>
		</view>
		<tab :modelData='tabData' @change='changeTab'></tab>
		<view class="page-list">
			<view class="page-item">
				<view class="page-item-bg"></view>
				<view class="page-item-label">文件夹1</view>
			</view>
			<view class="page-item">
				<view class="page-item-bg"></view>
				<view class="page-item-label">文件夹2</view>
			</view>
			<view class="page-item">
				<view class="page-item-bg"></view>
				<view class="page-item-label">文件夹3</view>
			</view>
			<view class="page-item">
				<view class="page-item-bg">
					<view class='icon-more' @click.stop="showMore=true">
						<text class="points"></text>
						<text class="points"></text>
						<text class="points"></text>
					</view>
				</view>
				<view class="page-item-label">折线图</view>
			</view>
		</view>
	</view>
	<view class="more-mask" v-if='showMore'>
		<view class="more-control">
			<view class="type-title">
				折线图
				<view class='icon-close' @click="showMore=false">
					<uni-icons color="#ccc" type="closeempty" size="15"></uni-icons>
				</view>
			</view>
			<view class="lastest-record">
				<view class="lastest-record-info">
					最近修改日期：2022-08-12<text class="power">可编辑</text>
				</view>
			</view>
			<view class="contorl-btn"><uni-icons color="#000" class='icon-control icon-share' type="star" size="15"></uni-icons>编辑</view>
			<view class="contorl-btn"><uni-icons color="#000" class='icon-control icon-share' type="star" size="15"></uni-icons>分享</view>
		</view>
	</view>
	<login :isMask='isMask' @clickMask='closeMask' @back='back'></login>
	<bar currentTab='1'></bar>
</template>

<script>
	//引入组件
	import login from "/components/login/login.vue";
	import tab from '/components/tab/tab.vue';
	import bar from'/components/bar/bar.vue';
	export default {
		data() {
			return {
				isMask: false,
				isLogin: false,
				arrow: 'bottom',
				spaceName: 'xxx的个人空间',
				spaceId: '1',
				spaceList: [
					{
						name: 'xxx的个人空间',
						id: '1'
					},
					{
						name: '未来科技有限公司',
						id: '2'
					}
				],
				tabData: [
					{
						label: '图表'
					},
					{
						label: '图文'
					}
				],
				showMore: false
			}
		},
		onLoad() {
			//判断是否登录
			getApp().backUserInfo = e=>{
				this.isLogin = e ? true : false;
			}
		},
		onShow() {
			//页面切换需要给loginInfo进行赋值，否则首次加载首页的时候，再切换到该页面，不会走onLoad周期和backUserInfo回调
			this.isLogin = getApp().globalData.loginInfo ? true : false;
		},
		methods: {
			selectSpace(item) {
				this.spaceId = item.id;
				this.spaceName = item.name;
				this.arrow = 'bottom';
			},
			handlerSelect() {
				this.arrow = this.arrow == 'bottom' ? 'top' : 'bottom';
			},
			//点击遮罩层关闭弹框
			closeMask(e) {
				this.isMask = e;
			},
			back(e) {
				//登录成功，做不同的操作并且关闭弹框
				this.isMask = e;
				this.isLogin = true;
			},
			changeTab(e) {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.no-login {
		width: 100%;
		height: 100vh;
		position: relative;
		.no-login-view {
			width: 350rpx;
			position: absolute;
			left: 50%;
			top: 30%;
			margin-left: -175rpx;
			.tip {
				display: block;
				font-size: 26rpx;
				text-align: center;
			}
			.login {
				display: block;
				width: 320rpx;
				height: 70rpx;
				line-height: 70rpx;
				margin-top: 25rpx;
				border-radius: 40rpx;
				color: #fff;
				font-size: 26rpx;
				background: #1041F4;
				text-align: center;
			}
		}
	}
	.page-login {
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		padding: 30rpx 45rpx 30rpx 45rpx;
		.title {
			height: 74rpx;
			.icon-user {
				width: 74rpx;
				height: 74rpx;
				border-radius: 50%;
				float: left;
				background: #3963ff;
				margin-right: 24rpx;
			}
			.title-space {
				padding-top: 16rpx;
				height: 32rpx;
				font-size: 32rpx;
				font-family: PingFangSC, PingFangSC-Semibold;
				float: left;
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
		.space-select {
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			background: #0F42F4;
			color: #fff;
			font-size: 26rpx;
			box-sizing: border-box;
			padding: 0 30rpx;
			position: relative;
			.icon-arrow {
				vertical-align: -2rpx;
				margin-left: 6rpx;
			}
			.space-container {
				width: 100%;
				height: 500rpx;
				background: rgba(0, 0, 0, .5);
				position: absolute;
				top: 80rpx;
				left: 0;
				z-index: 6;
				.space-item {
					height: 80rpx;
					line-height: 80rpx;
					background: #fff;
					padding: 0 30rpx;
					box-sizing: border-box;
					border-bottom: 2rpx solid #ccc;
					color: #aaa;
					&.active {
						color: #517CEF;
						.icon-check {
							vertical-align: -2rpx;
							float: right;
						}
					}
				}
			}
		}
		.page-list {
			padding:15rpx 0;
			.page-item {
				display: inline-block;
				margin-top: 10rpx;
				margin-right: 34rpx;
				&:nth-of-type(2n) {
					margin-right: 0;
				}
				.page-item-bg {
					width: 313rpx;
					height: 313rpx;
					background: #f6f8fc;
					border-radius: 30rpx;
					position: relative;
					.icon-more {
						width: 56rpx;
						height: 38rpx;
						background: #ffffff;
						border-radius: 10rpx;
						box-shadow: 3rpx 3rpx 8rpx 0rpx rgba(107,102,152,0.10); 
						position: absolute;
						right: 20rpx;
						top: 20rpx;
						text-align: center;
						.points {
							display: inline-block;
							width: 8rpx;
							height: 8rpx;
							background: #000000;
							border-radius: 50%;
							margin: 0 2rpx;
							margin-bottom: 10rpx;
						}
					}
				}
				.page-item-label {
					line-height: 60rpx;
					font-size: 28rpx;
					font-family: PingFangSC, PingFangSC-Medium;
					text-align: center;
					margin-bottom: 10rpx;
				}
			}
		}
	}
	.more-mask {
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, .5);
		position: absolute;
		left: 0;
		top: 0;
		z-index: 6666;
		.more-control {
			width: 100%;
			height: 350rpx;
			position: absolute;
			bottom: 0;
			left: 0;
			background: #fff;
			.type-title {
				height: 40rpx;
				line-height: 40rpx;
				padding: 0 30rpx;
				font-size: 30rpx;
				margin-top: 30rpx;
				margin-bottom: 10rpx;
				.icon-close {
					float: right;
					vertical-align: -2rpx;
				}
			}
			.lastest-record {
				line-height: 30rpx;
				height: 30rpx;
				color: #aaa;
				font-size: 22rpx;
				padding: 0 30rpx;
				margin-bottom: 35rpx;
				.lastest-record-info {
					border-bottom: 2rpx solid #aaa;
					padding-bottom: 15rpx;
					.power {
						float: right;
					}
				}
			}
			.contorl-btn {
				padding: 0 30rpx;
				line-height: 65rpx;
				.icon-control {
					margin-right: 10rpx;
				}
				.icon-share {
					vertical-align: 2rpx;
				}
			}
		}
	}
</style>
