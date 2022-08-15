<script>
	export default {
		globalData:{
		   loginInfo: null,
		   url: 'https://test.dycharts.com/',
		   backUserInfo: null
		},
		onLaunch: function() {
			//调用获取用户信息接口，判断用户是否登录
			uni.request({
				url: getApp().globalData.url + 'vis/auth/users/me/',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				withCredentials: true,
			}).then(res=>{
				if(res.data.resultCode == 1000) {
					getApp({allowDefault: true}).globalData.loginInfo = res.data.data;
					//在此处做一个回调函数，在路由的onload周期函数使用
					if(this.backUserInfo) {
						this.backUserInfo(getApp().globalData.loginInfo);
					}
				}
			})
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
