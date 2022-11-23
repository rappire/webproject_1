<template>
	<ul class = "main-box">
		<li class = "item">
			<div class = "image-box"> <img src="../assets/logo.png" alt=""> </div>
		</li>
		<li class = "item">
			<div class = "image-box"> 테스트 문자열 입니다. </div>
		</li>
		<li class = "item">
			<div class = "image-box"> 테스트 문자열 입니다. </div>
		</li>
	</ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-box{
	width: 100%;
	height: 90%;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: space-around;
}
.item{
	width: 100%;
	list-style: none;
	margin: 0;
	padding: 0;
	background-color: #8091a5;
}
.item:nth-child(1){
	background-color: #8091a5;
}
.item:nth-child(2){
	background-color: #2a58a6;
}
.item:nth-child(3){
	background-color: #082239;
}

.item:hover{
	transition: background-color 1s;
	background-color: black;
	color : white;
}
.image-box{
	background-image: "";
	display: block;
	padding: 30px;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
}

</style>