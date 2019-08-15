<template>
	<view class="content">
		<cmd-nav-bar :fixed="true" title="场景管理" font-color="#fff" background-color="linear-gradient(to right, rgb(17, 153, 142), rgb(56, 239, 125))"></cmd-nav-bar>
		
		<view class="">
			hero
		</view>
		
		
		<cmd-bottom-nav @click="fnClick" background-color="linear-gradient(to right, rgb(17, 153, 142), rgb(56, 239, 125))" :current="current" :list="list" text-auto></cmd-bottom-nav>
	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue";	//navbar标题导航栏
	import cmdBottomNav from "@/components/cmd-bottom-nav/cmd-bottom-nav.vue";	//底部导航
	
	export default{
		components:{
			cmdNavBar,
			cmdBottomNav
		},
		data() {
			return{
				current:2,
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
			
		},
		methods:{
			fnClick(e){		//底部导航跳转
				if(e.select == 0){	//主页
					uni.reLaunch({
						url:"../index/index"
					})
				}else if(e.select == 1){	//装备
					uni.redirectTo({
						url:"../equipment/equipment"
					})
				}else if(e.select == 2){	//英雄
					
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
</style>
