<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
    @import "assets/sass/variable.scss";
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &::after,
        &::before{
            box-sizing: border-box;
        }
    }
    body{
        font-size: 12px;
        background: $body-color;
    }
    ul,li,ol{
        list-style:none;
    }
    a{
        text-decoration : none;
        color: $g3;
    }
</style>
