<template>
	<view class="container">
		<view class="main">
			<!-- <view class="top">
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
			</view> -->
			<view class="title" v-if="isLogin">
				<view class="icon-user"></view>
				<view class="ellipsis title-space">{{loginInfo.loginname}}</view>
				<view class="icon-bg fr" @click='exitLogin'>
					<image class="search-icon" src="../../static/icon-search.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="info-bg">
				<view class="rise-vip">升级会员</view>
			</view>
		</view>
		<view class="module-item buy-vip">
			<view class="icon-bg fl">
				<image class="module-icon" src="../../static/icon-search.png" mode="widthFix"></image>
			</view>
			购买会员<uni-icons type="forward" class='icon-arrow-right' size="20"></uni-icons>
		</view>
		<view class="module-item exchange">
			<view class="inner-module-item">
				<view class="icon-bg fl">
					<image class="module-icon" src="../../static/icon-search.png" mode="widthFix"></image>
				</view>
				兑换会员<uni-icons type="forward" class='icon-arrow-right' size="20"></uni-icons>
			</view>
		</view>
		<view class="module-item">
			<view class="inner-module-item">
				<view class="icon-bg fl">
					<image class="module-icon" src="../../static/icon-search.png" mode="widthFix"></image>
				</view>
				企业版<uni-icons type="forward" class='icon-arrow-right' size="20"></uni-icons>
			</view>
		</view>
		<view class="module-item">
			<view class="inner-module-item">
				<view class="icon-bg fl">
					<image class="module-icon" src="../../static/icon-search.png" mode="widthFix"></image>
				</view>
				使用帮助<uni-icons type="forward" class='icon-arrow-right' size="20"></uni-icons>
			</view>
		</view>
		<view class="module-item">
			<view class="inner-module-item no-border">
				<view class="icon-bg fl">
					<image class="module-icon" src="../../static/icon-search.png" mode="widthFix"></image>
				</view>
				联系客服<uni-icons type="forward" class='icon-arrow-right' size="20"></uni-icons>
			</view>
		</view>
		<login :isMask='isMask' @clickMask='closeMask' @back='back'></login>
		<bar currentTab='2'></bar>
	</view>
</template>

<script>
	import bar from'/components/bar/bar.vue';
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
	.main {
		width: 100%;
		box-sizing: border-box;
		padding: 30rpx 45rpx 0 45rpx;
		.title {
			height: 74rpx;
			margin-bottom: 49rpx;
			.icon-user {
				width: 74rpx;
				height: 74rpx;
				border-radius: 50%;
				float: left;
				background: #3963ff;
				margin-right: 24rpx;
			}
			.title-space {
				box-sizing: border-box;
				height: 74rpx;
				line-height: 74rpx;
				font-size: 40rpx;
				width: 450rpx;
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
		.info-bg {
			width: 100%;
			height: 236rpx;
			background: linear-gradient(352deg,#5b00fd 0%, #0072fd 65%, #0078fa 100%);
			border-radius: 30rpx;
			margin-bottom: 48rpx;
			position: relative;
			.rise-vip {
				width: 160rpx;
				height: 48rpx;
				line-height: 48rpx;
				background: linear-gradient(130deg,#ffd06b 0%, #ff6839 100%);
				border-radius: 30rpx;
				position: absolute;
				right: 24rpx;
				bottom: 42rpx;
				font-size: 24rpx;
				font-family: PingFangSC, PingFangSC-Medium;
				text-align: center;
				color: #fff;
			}
		}
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
	}
	.module-item {
		height: 130rpx;
		line-height: 130rpx;
		background: #fff;
		position: relative;
		box-sizing: border-box;
		padding-left: 59rpx;
		padding-right: 45rpx;
		.icon-arrow-right {
			position: absolute;
			right: 83rpx;
			top: 4rpx;
		}
		.inner-module-item {
			height: 100%;
			box-sizing: border-box;
			border-bottom: 2rpx solid #e3e3e3;
			&.no-border {
				border-bottom: none;
			}
		}
		.icon-bg {
			width: 70rpx;
			height: 70rpx;
			background: #eff1f5;
			border-radius: 50%;
			text-align: center;
			margin-top: 30rpx;
			margin-right: 25rpx;
			.module-icon {
				width: 32rpx;
				margin-bottom: 25rpx;
			}
		}
		.fl {
			float: left;
		}
		&.buy-vip {
			height: 250rpx;
			background: #d4e7ff;
			border-radius: 40px 40px 0px 0px;
			box-shadow: 0px 0px 40px 0px rgba(8,24,57,0.10); 
		}
		&.exchange {
			margin-top: -120rpx;
			border-radius: 40px 40px 0px 0px;
		}
	}
}
.ellipsis {
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
</style>
