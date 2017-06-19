<template>
    <div class="loyout-page">
        <!-- No.3 -->
        <Vheader></Vheader>
        <Vcontent></Vcontent>
        <Vfooter></Vfooter>
    </div>
</template>
<script>
    // No.1
    import Vheader from "../template/header"
    import Vcontent from "../template/content"
    import Vfooter from "../template/footer"

    // No.2
    export default{
        name : "index",
        components : {
            Vheader,
            Vcontent,
            Vfooter
        }
    }
</script>
<style lang="scss">
    @import "../../assets/sass/variable.scss";
    @import "../../assets/sass/common.scss";

    .loyout-page{
        padding-top: px2rem(132);
        padding-bottom: px2rem(146);
    }
</style>