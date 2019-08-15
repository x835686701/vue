<template>
	<view class="content" @click="conClick">
		<clickCircle ref="clickCircle"></clickCircle>
		<cmd-nav-bar :fixed="true" title="场景管理" font-color="#fff" background-color="linear-gradient(to right, rgb(17, 153, 142), rgb(56, 239, 125))"></cmd-nav-bar>

		
		<view class="text-area">
			<navTab ref="navTab" :tabTitle="tabTitle" @changeTab='changeTab'></navTab>
			
		</view>
		
		<view v-show="tabShow == 0">
			<h1>选择一</h1>
		</view>
		<view v-show="tabShow == 1">
			<h1>选择二</h1>
		</view>
		
		
		<cmd-bottom-nav @click="fnClick" background-color="linear-gradient(to right, rgb(17, 153, 142), rgb(56, 239, 125))" :current="current" :list="list" text-auto></cmd-bottom-nav>
	</view>
</template>

<script>
	import navTab from '@/components/navTab.vue';	//滑动导航栏
	import clickCircle from "@/components/clickCircle.vue";		//点击反馈
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue";	//navbar标题导航栏
	import cmdBottomNav from "@/components/cmd-bottom-nav/cmd-bottom-nav.vue";	//底部导航
	
	export default {
		components:{
			navTab,
			clickCircle,
			cmdNavBar,
			cmdBottomNav
		},
		data() {
			return {
				current:0,	//底部导航默认项
				currentTab: 0, //sweiper所在页
				tabTitle:['选择一','选择二','选择三','选择四','选择五','选择六','选择七','选择八','选择九'], //导航栏格式
				tabShow:0,
				
				list:[{
				    "text": "首页", 
				    // src 大小限制为40kb，建议尺寸为 81px * 81px
				    "src": "../../static/home.png",
				    "srcSelect": "../../static/home.png"
				},{ 
				    "text": "装备", 
				    // src 大小限制为40kb，建议尺寸为 81px * 81px
				    "src": "../../static/equipment.png",
				    "srcSelect": "../../static/equipment.png"
				},{
				    "text": "英雄", 
				    // src 大小限制为40kb，建议尺寸为 81px * 81px
				    "src": "../../static/hero.png",
				    "srcSelect": "../../static/hero.png"
				}]
			}
		},
		onLoad(option) {
			console.log(option.select)
		},
		methods: {
			conClick(e) {
				this.$refs.clickCircle.conClick(e);
			},
			changeTab(e){
				this.tabShow = e;
			},
			
			fnClick(e){		//底部导航跳转
				if(e.select == 0){	//主页
					
				}else if(e.select == 1){	//装备
					uni.redirectTo({
						url:"../equipment/equipment"
					})
				}else if(e.select == 2){	//英雄
					uni.redirectTo({
						url:"../hero/hero"
					})
				}
			}
		}
	}
</script>

<style>
	.body{
		/*距离顶部范围应该在88-95范围内*/
		padding-top: 90upx;
		top: var(--status-bar-height);
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	.text-area {
		display: flex;
		background-color: #007AFF;
		justify-content: center;
	}

	
</style>
