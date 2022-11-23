<template>
    <nav>
        <ul class = "header-box" :class="{ 'header-box--background': show }">
            <li class = "header-item"><img src="../assets/logo.png" alt="##"></li>
            <li class = "header-item">HOME</li>
            <li class = "header-item">PORTFOLIO</li>
            <li class = "header-item">DEMO VIDS</li>
            <li class = "header-item">GALLERY</li>
            <li class = "header-item">CONTACT</li>
        </ul>  
    </nav>
</template>

<script>
export default {
    name: 'MainHeader',
    data(){
        return{
            show: false,
            scroll_position: 0
        }
    },
    methods: {
        updateScroll(){
            this.scroll_position = window.scrollY;
            if((window.pageYOffset || document.documentElement.scrollTop) > 700){
                this.show = true;
            }
            else{
                this.show = false;
            }
            // console.log(window.pageYOffset || document.documentElement.scrollTop);
        },
    },  
    mounted () {
        window.addEventListener('scroll', this.updateScroll);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.updateScroll);
    }
}
</script>



<style scoped>
.header-box{
    position: fixed;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    width : 80%;
    padding : 10px 10%;
    color : black;
}
.header-box--background{
    background-color: black;
    color : white
}
.header-item{
    display : flex;
    align-items: center;
	list-style: none;
    font-weight: bold;
}

.header-item:hover{
    text-decoration: underline;
}

.header-item img{
    max-width: 100%;
    height: auto;
    display : block;
}
</style>