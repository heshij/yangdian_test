<template>
	<div class="Home">
		<div class="header">
			<Search class="search"></Search>
			<banner class="banner"></banner>
		</div>
		<proList :info="proList.hot"></proList>
		<proList :info="proList.baby"></proList>
		<proList :info="proList.beauty"></proList>
		<proList :info="proList.life"></proList>
		<proList :info="proList.food"></proList>
		<proList :info="proList.global"></proList>

		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import Search from '@/components/Search.vue'
	import banner from './components/banner.vue'
	import proList from './components/proList.vue'
	export default {
		name: "Home",
		components: {
			Search,
			banner,
			proList
		},
		data() {
			return {
				proList: {
					hot: {
						titleIcon:"&#xe606;",
						title:"今日疯抢",
						proList: [{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro01.jpg'),
										new_price: 88,
										old_price: 96,
										proInfo: "美国/SUPER MILD沐浴露500ml"
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro02.jpg'),
										new_price: 88,
										old_price: 96,
										proInfo: "美国/SUPER MILD沐浴露500ml"
									}
								]
							},
							{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro01.jpg'),
										new_price: 88,
										old_price: 96,
										proInfo: "美国/SUPER MILD沐浴露500ml"
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro02.jpg'),
										new_price: 88,
										old_price: 96,
										proInfo: "美国/SUPER MILD沐浴露500ml"
									}
								]
							}
						]
					},
					baby: {
						titleIcon:"&#xe651;",
						title:"母婴专区",
						proList: [{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro03.jpg'),
										new_price: 298,
										old_price: 326,
										proInfo: "Nutrilon荷兰牛栏婴儿配方奶粉3段..."
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro04.jpg'),
										new_price: 298,
										old_price: 326,
										proInfo: "Nutrilon荷兰牛栏婴儿配方奶粉3段..."
									}
								]
							},
							{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro03.jpg'),
										new_price: 298,
										old_price: 326,
										proInfo: "Nutrilon荷兰牛栏婴儿配方奶粉3段..."
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro04.jpg'),
										new_price: 298,
										old_price: 326,
										proInfo: "Nutrilon荷兰牛栏婴儿配方奶粉3段..."
									}
								]
							}
						]
					},
					beauty: {
						titleIcon:"&#xe64c;",
						title:"美妆护肤",
						proList: [{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro05.jpg'),
										new_price: 112,
										old_price: 220,
										proInfo: "LA ROCHE-POSAY理肤泉 疤痕..."
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro06.jpg'),
										new_price: 112,
										old_price: 220,
										proInfo: "LA ROCHE-POSAY理肤泉 疤痕..."
									}
								]
							},
							{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro05.jpg'),
										new_price: 112,
										old_price: 220,
										proInfo: "LA ROCHE-POSAY理肤泉 疤痕..."
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro06.jpg'),
										new_price: 112,
										old_price: 220,
										proInfo: "LA ROCHE-POSAY理肤泉 疤痕..."
									}
								]
							}
						]
					},
					life: {
						titleIcon:"&#xe634;",
						title:"家具生活",
						proList: [{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro07.jpg'),
										new_price: 158,
										old_price: 199,
										proInfo: "法国Neolid正品 可爱动物图案扭扭杯..."
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro08.jpg'),
										new_price: 158,
										old_price: 199,
										proInfo: "法国Neolid正品 可爱动物图案扭扭杯..."
									}
								]
							},
							{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro07.jpg'),
										new_price: 158,
										old_price: 199,
										proInfo: "法国Neolid正品 可爱动物图案扭扭杯..."
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro08.jpg'),
										new_price: 158,
										old_price: 199,
										proInfo: "法国Neolid正品 可爱动物图案扭扭杯..."
									}
								]
							}
						]
					},
					food: {
						titleIcon:"&#xe63b;",
						title:"食品营养",
						proList: [{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro09.jpg'),
										new_price: 139,
										old_price: 288,
										proInfo: "【纯天然淡斑法】Caudalie欧缇丽葡..."
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro10.jpg'),
										new_price: 139,
										old_price: 288,
										proInfo: "【纯天然淡斑法】Caudalie欧缇丽葡..."
									}
								]
							},
							{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro09.jpg'),
										new_price: 139,
										old_price: 288,
										proInfo: "【纯天然淡斑法】Caudalie欧缇丽葡..."
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro10.jpg'),
										new_price: 139,
										old_price: 288,
										proInfo: "【纯天然淡斑法】Caudalie欧缇丽葡..."
									}
								]
							}
						]
					},
					global: {
						titleIcon:"&#xe723;",
						title:"全球直邮",
						proList: [{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro11.jpg'),
										new_price: 108,
										old_price: 118,
										proInfo: "Jacob Hooy雅歌布七叶树籽眼霜1..."
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro12.jpg'),
										new_price: 108,
										old_price: 118,
										proInfo: "Jacob Hooy雅歌布七叶树籽眼霜1..."
									}
								]
							},
							{
								listArray: [{
										id: 1,
										imgUrl: require('@/images/home/pro11.jpg'),
										new_price: 108,
										old_price: 118,
										proInfo: "Jacob Hooy雅歌布七叶树籽眼霜1..."
									},
									{
										id: 2,
										imgUrl: require('@/images/home/pro12.jpg'),
										new_price: 108,
										old_price: 118,
										proInfo: "Jacob Hooy雅歌布七叶树籽眼霜1..."
									}
								]
							}
						]
					}
				}
			}
		}
	}
</script>
<style scoped>
	.Home {
		padding-bottom: 104px;
	}

	.Home .header {
		position: relative;
		width: 100%;
		height: 474px;
	}

	.Home .search {
		position: absolute;
		z-index: 2;
		left: 0;
		right: 0;
		margin: 0 auto;
		margin-top: 14px;
	}

	.Home .banner {
		position: absolute;
		z-index: 1;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
</style>
