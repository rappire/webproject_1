<template>
    <nav>
        <ul class = "header-box" :class="{ 'header-box--background': show }">
            <li class = "header-item"><img src="@/assets/MainPage/logo.png" alt="##"></li>
            <li class = "header-item"><router-link to="/main">HOME</router-link></li>
            <li class = "header-item"><router-link to="/portfolio">PORTFOLIO</router-link></li>
            <li class = "header-item"><router-link to="/demovid">DEMO VIDS</router-link></li>
            <li class = "header-item"><router-link to="/gallery">GALLERY</router-link></li>
            <li class = "header-item"><router-link to="/contact">CONTACT</router-link></li>
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
            if((window.pageYOffset || document.documentElement.scrollTop) > 850){
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
    justify-content:center;
    align-items: center;
	list-style: none;
    font-weight: bold;
    width: 10%;
}

.header-item:hover{
    text-decoration: underline;
    /* background-color: white;
    color : black */
}

.header-item img{
    max-width: 100%;
    height: auto;
    display : block;
}
.header-box a { 
    text-decoration: none;
    color: black; 
}
.header-box--background a{
    background-color: black;
    color : white
}
a:visited { 
    text-decoration: none; 
}
a:hover { 
    text-decoration: none;
}
a:focus { 
    text-decoration: none;
}
a:hover, a:active { 
    text-decoration: none;
}     
</style>