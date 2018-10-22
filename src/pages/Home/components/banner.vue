<template>
	<div class="banner">
		<swiper :options="swiperOption" ref="mySwiper">

			<!-- slides -->
			<swiper-slide v-for="item of imgList" :key="item.id">
				<img :src="item.url" class="image-item">
			</swiper-slide>

			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default {
		name: "banner",
		data() {
			return {
				imgList: [{
					id: 1,
					url: require('@/images/home/banner01.jpg')
				}, {
					id: 2,
					url: require('@/images/home/banner01.jpg')
				}, {
					id: 3,
					url: require('@/images/home/banner01.jpg')
				}],
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					},
// 					autoplay:{
// 						stopOnLastSlide:true,
// 						delay:3000,
// 						disableOnInteraction: false
// 					},
					loop:true
				},
				swiperSlides: [1, 2, 3]
			}
		},
		components: {
			swiper,
			swiperSlide
		}
	}
</script>
<style scoped>
	.banner {
		width: 750px;
		height: 474px;
	}

	.banner swiper {}

	.banner .swiper-slide {}

	.banner .swiper-slide .image-item {
		width: 750px;
		height: 474px;
	}
	.banner >>> .swiper-pagination-bullet{
		width: 20px;
		height: 20px;
		display: inline-block;
	}
</style>
