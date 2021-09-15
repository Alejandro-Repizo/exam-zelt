<template> 

    <div class="container">
        <px-icon></px-icon>
        <px-form></px-form>
    </div>

</template>

<script>

import PxIcon from "@/components/PxIcon"
import PxForm from "@/components/PxForm"
import "@/assets/css/login.css"


export default {
    name: "Login",
    components: {
        PxIcon,
        PxForm,
    },
    data() {
        return {
            
        }
    }

}
</script>
