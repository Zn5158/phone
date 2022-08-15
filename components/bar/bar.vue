<template>
	<view class="view-bar">
		<image v-if='currentTab == 0' class="image-btn index-btn" src="../../static/index-btn-acitive.png" @click='clickTab("/pages/index/index",0)' mode="widthFix"></image>
		<image v-if='currentTab != 0' class="image-btn index-btn" src="../../static/index-btn.png" @click='clickTab("/pages/index/index",0)' mode="widthFix"></image>
		<image v-if='currentTab != 1' class="image-btn project-btn" src="../../static/project-btn.png" @click='clickTab("/pages/project/project",1)' mode="widthFix"></image>
		<image v-if='currentTab == 1' class="image-btn project-btn" src="../../static/project-btn-active.png" @click='clickTab("/pages/project/project",1)' mode="widthFix"></image>
		<image v-if='currentTab != 2' class="image-btn personal-btn" src="../../static/personal-btn.png" @click='clickTab("/pages/personal/personal",2)' mode="widthFix"></image>
		<image v-if='currentTab == 2' class="image-btn personal-btn" src="../../static/personal-btn-active.png" @click='clickTab("/pages/personal/personal",2)' mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		name: "bar",
		data() {
			return {
				
			};
		},
		props: ['currentTab'],
		onLoad(e) {
			debugger
		},
		methods: {
			clickTab(e,index) {
				uni.redirectTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.view-bar {
		width: 100%;
		height: 138rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		border-radius: 60rpx 60rpx 0rpx 0rpx;
		box-shadow: 0rpx 0rpx 40rpx 0rpx rgba(8,24,57,0.10);
		.image-btn {
			width: 39rpx;
			height: 38rpx;
			margin-top: 53rpx;
			&.index-btn {
				margin-left: 137rpx;
				margin-right: 179rpx;
			}
			&.project-btn {
				margin-right: 178rpx;
			}
		}
	}
</style>
