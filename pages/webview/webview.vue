<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		name:"webview",
		data() {
			return {
				src:'https://www.baidu.com'
			};
		},
		onLoad(e) {
			this.src = e.url;
		}
	}
</script>

<style>

</style>