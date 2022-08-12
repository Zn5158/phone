<template>
	<view class="container">
		<view class="top">
			<view class="left">
				
			</view>
			<view class="right no-login" v-if="!isLogin" @click='isMask=true'>
				登录/注册
			</view>
			<view class="right" v-if="isLogin">
				<view class="user-info">
					<text class="ellipsis">{{loginInfo.loginname}}</text>
					<text class="ellipsis">{{loginInfo.phoneno}}</text>
				</view>
				<view class="exits" @click='exitLogin'>退出登录</view>
			</view>
		</view>
		<view class="module-item">购买会员<uni-icons type="forward" class='icon-arrow-right' size="20"></uni-icons></view>
		<view class="module-item">兑换会员<uni-icons type="forward" class='icon-arrow-right' size="20"></uni-icons></view>
		<view class="module-item">企业版<uni-icons type="forward" class='icon-arrow-right' size="20"></uni-icons></view>
		<view class="module-item">使用帮助<uni-icons type="forward" class='icon-arrow-right' size="20"></uni-icons></view>
		<view class="module-item">联系客服<uni-icons type="forward" class='icon-arrow-right' size="20"></uni-icons></view>
		<login :isMask='isMask' @clickMask='closeMask' @back='back'></login>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,
				isMask: false,
				loginInfo: {}
			}
		},
		onShow() {
			//页面切换需要给loginInfo进行赋值，否则首次加载首页的时候，再切换到该页面，不会走onLoad周期和backUserInfo回调
			this.isLogin = getApp().globalData.loginInfo ? true : false;
			this.loginInfo = getApp().globalData.loginInfo;
		},
		onLoad() {
			//this.getUserInfo();
			getApp().backUserInfo = e=>{
				this.isLogin = e ? true : false;
				this.loginInfo = e;
			}
		},
		methods: {
			exitLogin() {
				uni.request({
					url: getApp().globalData.url + 'vis/auth/logout',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					withCredentials: true,
				}).then(res=>{
					debugger
					if(res.data.resultCode == 1000) {
						getApp().globalData.loginInfo = null;
					}
				})
			},
			//获取用户信息
			getUserInfo() {
				uni.request({
					url: getApp().globalData.url + 'vis/auth/users/me/',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					withCredentials: true,
				}).then(res=>{
					if(res.data.resultCode == 1000) {
						getApp().globalData.loginInfo = res.data.data;
						this.isLogin = getApp().globalData.loginInfo ? true : false;
						this.loginInfo = getApp().globalData.loginInfo;
					}
				})
			},
			//点击遮罩层关闭弹框
			closeMask(e) {
				this.isMask = e;
			},
			back(e) {
				//做不同的操作并且关闭弹框
				this.isMask = e;
				this.isLogin = true;
				this.loginInfo = getApp().globalData.loginInfo;
			}
		}
	}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	box-sizing: border-box;
	padding: 16rpx 30rpx;
	.top {
		width: 100%;
		height: 160rpx;
		.left {
			width: 100rpx;
			height: 100rpx;
			float: left;
			margin-top: 30rpx;
			background: blue;
		}
		.right {
			width: calc(100% - 130rpx);
			height: 160rpx;
			float: left;
			margin-left: 30rpx;
			.user-info {
				float: left;
				height: 120rpx;
				margin-top: 20rpx;
				width: calc(100% - 180rpx);
				line-height: 60rpx;
				> text {
					display: block;
					width: 360rpx;
				}
			}
			.exits {
				width: 180rpx;
				height: 60rpx;
				line-height: 60rpx;
				float: left;
				text-align: center;
				border-radius: 30rpx;
				border: 2rpx solid #ccc;
				box-sizing: border-box;
				margin-top: 50rpx;
				font-size: 26rpx;
			}
		}
		.no-login {
			line-height: 160rpx;
		}
	}
	.module-item {
		height: 80rpx;
		line-height: 80rpx;
		position: relative;
		.icon-arrow-right {
			position: absolute;
			right: 0;
			top: 4rpx;
		}
	}
}
.ellipsis {
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
</style>
