<template>
    <div>
        <img :src="image" alt="404 error page">
        <router-link class="router"  :to="{ name: 'login' }">
            <span>
                Go back home!
            </span>
        </router-link>
    </div>
</template>


<script>
import Icon404 from "@/assets/images/404.svg"

export default {
    data() {
        return {
            image: Icon404 
        }   
    },
}
</script>


<style scoped>
    div {
        max-width: 1000px;
        width: 90%;
        margin: 0 auto;;
        text-align: center;
        background-color: #f3f3f6;
        position: relative;
    }

    img {
        width: 400px;
    }

    .router {
        position: absolute;
        z-index: 1000;
        left: 0;
        right: 0;
        top: 20px;
        text-decoration: underline;
        padding: 1em 0;
        color: #273238;
        cursor: pointer;
        font-weight: bold;
        font-size:1em;
        text-transform: uppercase;
    }

    
</style>