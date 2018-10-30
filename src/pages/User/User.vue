<template>
    <div class="User">
        <!--<router-link to="/login">你还没有登录，点我登录</router-link>-->
        <div>
            <p @click="add">{{ count }}</p>
        </div>
        <MenuBar></MenuBar>
    </div>
</template>
<script>
    import {mapState} from 'vuex'

    export default {
        name: "User",
        /*computed:{
            count(){
				return this.$store.state.count
			}
        },
		methods:{
		    add(){
		        this.$store.commit("add")
			}
		}*/
        /* computed:mapState({
             count: state => state.count
         }),
         methods:{
             add(){
                 this.$store.commit("add")
             }
         }*/
        /*computed: mapState([
            'count'
        ]),
        methods: {
            add() {
                this.$store.commit("add")
            }
        }*/
        methods:{
            add() {
                this.$store.commit("add")
            }
        },
        computed:{
            ...mapState([
                'count'
            ])
        }
    }
</script>
<style scoped></style>
