<template>
    <div class="layout-footer">
        <ul class="footer-nav flex-group">
            <li class="footer-nav-items" v-for="navitems in footerNav">
                <a :href="navitems.path">
                    <i class="icon-font icon-index"></i>
                    <span class="nav-itmes-name">{{navitems.names}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name : "footer",
        data(){
            return {
                footerNav :[
                    {
                        names : "首页",
                        path : "/"
                    },
                    {
                        names : "产品",
                        path : "#/product"
                    },
                    {
                        names : "模具",
                        path : "#/module"
                    },
                    {
                        names : "我的",
                        path : "#/member"
                    },
                ]
            }
        }
    }
</script>
<style lang="scss">
    @import "../../assets/sass/variable.scss";

    .layout-footer{
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        height: px2rem(146);
        background: $gf;
        .footer-nav-items{
            flex : 1;
        }
    }
    .footer-nav{
        text-align: center;
        font-size: px2rem(32);
        color: $a4;
        &.active{
            color: $font-currentColor;
        }
        .icon-font{
            display: block;
            width: px2rem(60);
            height: px2rem(60);
            margin: 0 auto;
            background: cyan;
        }
        .nav-itmes-name{
            display: block;
            margin-top: px2rem(18);
            line-height: 1;
        }
    }
</style>