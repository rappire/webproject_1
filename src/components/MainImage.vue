<template>
	<ul class = "MainImage-box">
		<li class = "MainImage-item">
			<div class = "MainImage-image-box"> <img src="../assets/logo.png" alt=""> </div>
		</li>
		<li class = "MainImage-item">
			테스트 문자열 입니다.
		</li>
		<li class = "MainImage-item">
			테스트 문자열 입니다.
		</li>
	</ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.MainImage-box{
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: space-around;
}
.MainImage-item{
	width: 100%;
	list-style: none;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
    padding-top: 20%;
}
.MainImage-item:nth-child(1){
	background-color: #8091a5;
}
.MainImage-item:nth-child(2){
	background-color: #2a58a6;
}
.MainImage-item:nth-child(3){
	background-color: #082239;
}

.MainImage-item:hover{
	transition: all 1s;
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