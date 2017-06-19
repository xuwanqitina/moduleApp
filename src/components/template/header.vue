<template>
    <div class="layout-header clearfix">
        <div class="header-topBar-left fl">
            <span class="topBar-user-avatar fl">
                <img src="" alt="">
            </span>
            <span class="topBar-user-name fl">Tina</span>
        </div>
        <div class="header-topBar-right fr">
            <p>EMZ 生存部</p>
        </div>
    </div>
</template>
<script>
    export default {
        name : "header"
    }
</script>
<style lang="scss">
    @import "../../assets/sass/variable.scss";
    .layout-header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: px2rem(132);
        padding: px2rem(18) px2rem(20) px2rem(14);
        background-color: $gf;
        font-size: px2rem(36);
        line-height: px2rem(100);
        .topBar-user-avatar{
            width: px2rem(100);
            height: px2rem(100);
            margin: 0 px2rem(2);
            border-radius: 50%;
            background: $temp-color;
        }
        .topBar-user-name{
            text-indent: px2rem(20);
        }
    }
</style>