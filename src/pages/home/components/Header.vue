<template>
  <div class="header">
    	<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
    	<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入景点/城市/游玩主题
		</div>
		<router-link to='/city'> <!--点击跳转到city-->
			<div class="header-right">
				{{this.city}}  <!--直接使用计算属性-->
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'HomeHeader',
	computed: {
		...mapState(['city'])  // 展开mapState，这是一个vuex的api，意思是将vuex中的city，映射到名为city的计算属性中
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'; /*引入全局样式*/  /*使用其他自定义的缩写符号前，需要加上波浪线~*/
	.header /*header部分样式*/
		display: flex
		line-height: $headerHeight
		background: $bgColor
		color:#fff
		.header-left /*左侧返回样式*/
			width: .64rem
			float: left
			.back-icon
				text-align: center
				font-size: .4rem
		.header-input /*输入框样式*/
			flex: 1
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .2rem
			padding-left: .2rem
			background: #fff
			border-radius: .1rem
			color: #ccc
		.header-right /*右侧城市样式*/
			min-width: 1.04rem
			padding: 0 .1rem
			float: right
			text-align: center
			color: #fff
			.arrow-icon
				margin-left: -.04rem
				font-size: .24rem
</style>