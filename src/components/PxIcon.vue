<template>
    <div class="thumbnail">
      <img :src="imagen" alt="login" class="thumbnail__img" />
    </div>
</template>

<script> 
import Icon from "@/assets/images/login.svg"

export default {
    name: "PxIcon",
    data() {
        return {
            imagen: Icon,
        }
    }
}
</script>