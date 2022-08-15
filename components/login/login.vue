<template>
	<view class="mask" @click="clickMask" v-if="isMask">
		<view class="modal" @click.stop='modalClick'>
			<view class='tooltip-title'>只需几秒即可登录/注册</view>
			<input class="uni-input phone" type="number" v-model="phone" placeholder="请输入手机号" />
			<view class="error-text">
				<text v-if='!validPhone'>{{validText}}</text>
			</view>
			<view class="password-container">
				<text class="valid-code-text" :class="{'gray':sending}" @click='sendCode'>{{ codeText }}</text>
				<input class="uni-input password" type="text" v-model="codeValue" placeholder="手机验证码" />
			</view>
			<view class="error-text">
				<text v-if='!validCode'>{{validText2}}</text>
			</view>
			<button type="primary" class="login-btn" @click='login'>登录/注册</button>
			<!-- <view class="login-msg">登录即同意<text class="blue" @click='agreement = true'>用户协议</text></view> -->
			<!-- <view class="login-msg">登录即同意<text class="blue" @click='aaa'>用户协议2</text><text class="blue" @click='aaa2'>用户协议3</text></view> -->
		</view>
		<agreement v-if='agreement' @click.stop='agreement = false'></agreement>
	</view>
</template>

<script>
	//引入用户协议组件
	import agreement from "/components/agreement/agreement.vue";
	export default {
		name: "login",
		data() {
			return {
				agreement: false,
				webUrl: getApp().globalData.url,
				codeText: '发送验证码',
				code: '',
				sending: false,
				validPhone: true,
				validCode: true,
				phone: '',
				codeValue: '',
				validText: '您输入的手机号有误',
				validText2: '请输入验证码',
				isFirst: true, //首次验证码错误提示文字是不展示的
			};
		},
		props: ['isMask'],
		methods: {
			/* aaa() {
				uni.navigateTo({
					url: '/pages/webview/webview?url=https://www.hao123.com/'
				})
			},
			aaa2() {
				uni.navigateTo({
					url: '/pages/webview/webview?url=https://www.baidu.com/'
				})
			}, */
			getUserData() {
				uni.request({
					url: this.webUrl + 'vis/auth/users/me/',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					withCredentials: true,
					success: (res) => {
						if (res.data.resultCode == 1000) {
							getApp({
								allowDefault: true
							}).globalData.loginInfo = res.data.data;
							this.$emit('back', false);
						}
					}
				})
			},
			//登录
			handlerLogin() {
				uni.request({
					url: this.webUrl + 'vis/auth/signin_by_phone',
					method: 'POST',
					data: {
						phoneNo: this.phone,
						validateCode: this.codeValue,
						promotions: 803
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					withCredentials: true,
					success: (res) => {
						if (res.data.resultCode == 1000) {
							this.getUserData();
						} else {
							let exceptionCodeInfo = {
								'2011': '手机号存在，请直接登录',
								'2004': '验证码错误',
								'2005': '短信验证码过期',
								'1002': '发送频率超过限制，请稍后再试！',
								'1007': '发送频率超过限制，请稍后再试！',
							}
							let msg = exceptionCodeInfo[res.data.resultCode] || res.data.message;
							uni.showToast({
								title: msg,
								icon: 'error',
								duration: 2000
							});
						}
					}
				})
			},
			//获取验证码
			getCode() {
				uni.request({
					url: this.webUrl + 'vis/auth/send_signin_sms_code',
					method: 'POST',
					data: {
						phoneNo: this.phone
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					withCredentials: true,
					success: (res) => {
						if (res.data.resultCode == 1000) {
							this.sending = true;
							this.code = 59;
							this.validCode = true;
							this.codeText = this.code + '秒后可重新发送';
							let timer = setInterval(() => {
								this.code--;
								if (this.code == 0) {
									clearInterval(timer);
									this.codeText = "重新发送";
									this.sending = false;
								} else {
									this.codeText = this.code + '秒后可重新发送';
								}
							}, 1000);
						} else {
							let msg = res.data.message;
							if (res.data.resultCode == 1007) {
								msg = '发送频率超过限制，请稍后再试！';
							}
							uni.showToast({
								title: msg,
								icon: 'error',
								duration: 2000
							});
							return;
						}
					}
				})
			},
			sendCode() {
				//先校验手机号格式，再登录判断
				if (!this.phone) {
					this.validPhone = false;
					this.validText = '请输入手机号';
					return;
				}
				let valid = /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone);
				if (!valid) {
					this.validPhone = valid;
					this.validText = '您输入的手机号有误';
					return;
				} else {
					this.validPhone = valid;
				}
				if (!this.sending) {
					//此处做了节流阀，在此处调用获取验证码的接口，不允许频繁调用，60秒后可重新发送请求
					this.getCode();
				}
			},
			clickMask() {
				this.isFirst = true;
				this.sending = false;
				this.validPhone = true;
				this.validCode = true;
				this.isFirst = true;
				this.$emit('clickMask', false);
			},
			modalClick() {
				console.log('事件冒泡');
			},
			login() {
				this.isFirst = false;
				//先校验手机号格式，再登录判断
				if (!this.phone) {
					this.validPhone = false;
					this.validText = '请输入手机号';
					return;
				}
				let valid = /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone);
				if (!valid) {
					this.validPhone = valid;
					this.validText = '您输入的手机号有误';
					return;
				} else {
					this.validPhone = valid;
				}
				if (!this.codeValue) {
					this.validCode = false;
					return;
				}
				//发送http请求登录账户
				this.handlerLogin();
			},
			goOtherPage() {
				uni.redirectTo({
					url: '/pages/webview/webview',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mask {
		width: 750rpx;
		height: 100vh;
		background: rgba(0, 0, 0, .5);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 6666;

		.modal {
			width: 100%;
			height: 560rpx;
			background: #fff;
			border-radius: 60rpx 60rpx 0 0;
			position: absolute;
			bottom: 0;
			left: 0;
			box-sizing: border-box;
			padding: 55rpx 45rpx 0 58rpx;

			.tooltip-title {
				font-size: 36rpx;
				font-family: PingFangSC, PingFangSC-Semibold;
				font-weight: 700;
				text-align: center;
				margin-bottom: 45rpx;
			}

			.uni-input {
				margin-bottom: 0;
				display: block;
				color: #000;
				font-size: 32rpx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: #000000;
				line-height: 60rpx;
				height: 60rpx;
				padding-bottom: 10rpx;
				border-bottom: 2rpx solid #e3e3e3;
			}

			.error-text {
				line-height: 48rpx;
				height: 48rpx;
				color: red;
				font-size: 25rpx;
			}

			.password-container {
				position: relative;

				.valid-code-text {
					float: right;
					width: 280rpx;
					height: 70rpx;
					line-height: 70rpx;
					border: 1rpx solid #005cfa;
					border-radius: 15rpx;
					text-align: center;
					color: #005CFA;
					&.gray {
						color: #ccc;
						border: 1rpx solid #ccc;
					}
				}

				.password {
					width: 360rpx;
					height: 60rpx;
					line-height: 60rpx;
				}
			}

			.login-btn {
				font-size: 36rpx;
				font-family: PingFangSC, PingFangSC-Medium;
				text-align: center;
				color: #ffffff;
				padding-top: 10rpx;
				padding-bottom: 10rpx;
				border-radius: 30rpx;
			}

			.login-msg {
				margin: 20rpx auto;
				text-align: center;
				font-size: 24rpx;

				.blue {
					color: #228CFE;
					display: inline-block;
				}
			}
		}
	}
</style>
