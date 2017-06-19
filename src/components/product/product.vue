<template>
    <div class="layout-page">
        <VheaderTitle></VheaderTitle>
        <Vfooter></Vfooter>
    </div>
</template>
<script>
    // No.1
    import Vfooter from "../template/footer"
    import VheaderTitle from "../template/headerTitle"

    export default {
        name : "product",
        components : {
            Vfooter,
            VheaderTitle
        }
    }
</script>