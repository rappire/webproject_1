<template>
    <nav>
        <ul class = "item-box" :class="{ 'item-box--background': show }">
            <li class = "item"><img src="../assets/logo.png" alt="##"></li>
            <li class = "item">HOME</li>
            <li class = "item">PORTFOLIO</li>
            <li class = "item">DEMO VIDS</li>
            <li class = "item">GALLERY</li>
            <li class = "item">CONTACT</li>
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
            console.log("update")
            this.scroll_position = window.scrollY;
            window.pageYOffset || document.documentElement.scrollTop
        },
        onScroll () {
            console.log("onScroll")
        },
    },  
    mounted () {
        window.addEventListener('scroll', this.updateScroll);
        console.log("yeah")
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.updateScroll)
        console.log("dead")
    }
}
</script>



<style scoped>
.item-box{
    position: fixed;
    z-index: 2;
    position: absolute;
    display: flex;
    justify-content: space-around;
    width : 75%;
    margin : 0 0;
    padding : 0 10%;
}
.item-box--background{
    background-color: black;
}
.item{
    display : flex;
    align-items: center;
	list-style: none;
    color : white;
    font-weight: bold;
}

.item:hover{
    text-decoration: underline;
}
.item img{
    max-width: 100%;
    height: auto;
    display : block;
}
</style>