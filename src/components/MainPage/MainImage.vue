<template>
	<ul class = "MainImage-box">
		<li class = "MainImage-item1" :class = "{'MainImage-item1-hover' : Item1Hover}"
		v-on:mouseover=Item1Enter
		v-on:mouseout=Item1Leave
		>
			<div class = "MainImage-image-box"> <img src="@/assets/MainPage/logo.png" alt=""> </div>
		</li>
		<li class = "MainImage-item2" :class = "{'MainImage-item2-hover' : Item2Hover}"
		v-on:mouseover=Item2Enter
		v-on:mouseout=Item2Leave>
			테스트 문자열 입니다.
		</li>
		<li class = "MainImage-item3" :class = "{'MainImage-item3-hover' : Item3Hover}"
		v-on:mouseover=Item3Enter
		v-on:mouseout=Item3Leave>
			테스트 문자열 입니다.
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			Item1Hover : false,
			Item2Hover : false,
			Item3Hover : false,
		}
	},
	methods: {
		Item1Enter: function(){
			this.Item1Hover = true;
		},
		Item1Leave: function(){
			this.Item1Hover = false;
		},
		Item2Enter: function(){
			this.Item2Hover = true;
		},
		Item2Leave: function(){
			this.Item2Hover = false;
		},
		Item3Enter: function(){
			this.Item3Hover = true;
		},
		Item3Leave: function(){
			this.Item3Hover = false;
		},
	},
}
</script>

<style scoped>
.MainImage-box{
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: space-around;
}
.MainImage-item1{
	width: 100%;
	list-style: none;
	font-size: 0px;
	font-weight: bold;
	text-align: center;
    padding-top: 20%;
	background-color: #8091a5;
}
.MainImage-item1-hover{
	background-color: yellow;
	color : white;
}
.MainImage-item2{
	width: 100%;
	list-style: none;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
    padding-top: 20%;
	background-color: #2a58a6;
}
.MainImage-item2-hover{
	background-color: black;
	color : white;
}
.MainImage-item3{
	width: 100%;
	list-style: none;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
    padding-top: 20%;
	background-color: #082239;
}
.MainImage-item3-hover{
	background-color: black;
	color : white;
}


.MainImage-item:hover{
	background-color: black;
	color : white;
}
.MainImage-image-box{
	background-image: "";
	display: block;
	padding: 30px;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
}

</style>