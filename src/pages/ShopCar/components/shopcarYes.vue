<template>
	<div class="shopcarYes">
		<ul>
			<li v-for="(item,index) of proList" :key="item.id">
				<div class="title">
					<span class="iconfont">&#xe627;</span>
					<h3>杭州保税区仓</h3>
				</div>
				<v-touch
						@swipeleft="swipeleftFn(index)"
						@swiperight="swiperightFn(index)"
				>
					<div class="main" ref="main">
						<div class="info">
							<label class="checkbox">
								<b
										:class="item.isChecked === true ? 'active' : null "
										@click="item.isChecked = !item.isChecked"
								></b>
								<input type="checkbox" :checked="item.isChecked">
							</label>

							<img :src="item.url">

							<div class="mes">
								<h3>{{item.title}}</h3>
								<div>
									<button class="reduice">-</button>
									<input type="text" class="text">
									<button class="add">+</button>
								</div>
							</div>

							<p class="price">{{item.price}}</p>
						</div>

						<div class="remove">删除</div>
					</div>
				</v-touch>
			</li>
		</ul>
	</div>
</template>
<script>
    export default {
        name:"shopcarYes",
        data(){
            return{
                proList:[
                    {
                        id:1,
                        isChecked:false,
                        title:"ChildLife/童年时光婴幼...",
                        price:"118",
                        url:require("@/images/details/head_img.jpg")
                    },
                    {
                        id:2,
                        isChecked:false,
                        title:"ChildLife/童年时光婴幼...",
                        price:"118",
                        url:require("@/images/details/head_img.jpg")
                    },
                    {
                        id:3,
                        isChecked:false,
                        title:"ChildLife/童年时光婴幼...",
                        price:"118",
                        url:require("@/images/details/head_img.jpg")
                    },
                    {
                        id:4,
                        isChecked:false,
                        title:"ChildLife/童年时光婴幼...",
                        price:"118",
                        url:require("@/images/details/head_img.jpg")
                    },
                    {
                        id:5,
                        isChecked:false,
                        title:"ChildLife/童年时光婴幼...",
                        price:"118",
                        url:require("@/images/details/head_img.jpg")
                    }
                ]
            }
        },
        methods:{
            swipeleftFn(index){
                this.$refs.main[index].className = 'left'
            },
            swiperightFn(index){
                this.$refs.main[index].className = 'main'
            }
        }
    }
</script>
<style scoped>
.shopcarYes ul li{
	height: 328px;
}
.shopcarYes ul li .title{
	display: flex;
	margin-top: 35px;
}
.shopcarYes ul li .title .iconfont{
	color: #999999;
	font-size: 35px;
	margin-left: 38px;
}
.shopcarYes ul li .title h3{
	font-size: 28px;
	margin-left: 27px;
	color: #999999;
}
.shopcarYes ul li .main{
	width: 850px;
	display: flex;
	transition: all .2s;
}
.shopcarYes ul li .left{
	width: 850px;
	display: flex;
	margin-left: -100px;
	transition: all .2s;
}
.shopcarYes ul li .info{
	height: 258px;
	display: flex;
	align-items: center;
	width: 750px;
}

.shopcarYes ul li .info .checkbox b{
	width: 43px;
	height: 43px;
	display: block;
	background: url(../../../images/shopcar/check_none.png) no-repeat;
	background-size: 43px;
	margin-left: 38px;
}
.shopcarYes ul li .info .checkbox .active{
	background: url(../../../images/shopcar/check.png) no-repeat;
	background-size: 43px;
}
.shopcarYes ul li .info .checkbox input{
	display: none;
}

.shopcarYes ul li .info img{
	width: 157px;
	height: 157px;
	margin-left: 21px;
}
.shopcarYes ul li .info .mes{
	width: 258px;
	height: 157px;
	margin-left: 21px;
}
.shopcarYes ul li .info .mes div{
	width: 229px;
	height: 41px;
	border: 3px solid #cccccc;
	display: flex;
	background: #fafafa;
	margin-top: 40px;
}
.shopcarYes ul li .info .mes div button{
	width: 74px;
	height: 41px;
	background: #fafafa;
}
.shopcarYes ul li .info .mes div .text{
	width: 79px;
	height: 41px;
	border-left: 3px solid #cccccc;
	border-right: 3px solid #cccccc;
	background: #fafafa;
	text-align: center;
	border-radius: 6px;
}

.shopcarYes ul li .info .price{
	font-size: 32px;
	margin-left: 44px;
}


.shopcarYes ul li .remove{
	width: 100px;
	height: 211px;
	background: #ff9900;
	color: #fff;
	text-align: center;
	line-height: 211px;
}
</style>
