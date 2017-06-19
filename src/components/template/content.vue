<template>
    <div class="layout-content">
        <div class="nav layout-section">
            <div class="nav-sections" v-for="items in navList">
                <h2>{{items.navTitle}}</h2>
                <ul class="nav-list flex-group">
                    <li class="nav-items" v-for="navItem in items.navItems">
                        <a :href="navItem.path">
                            <span class="items-count">{{navItem.count}}</span>
                            <span class="items-names">{{navItem.names}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="storageStatus layout-section">
            <h2 class="statusTitle">入库动态</h2>
            <span class="statueNews">本月共有123批次，共24234件塑料件待入库</span>
            <ul class="newsList">
                <li class="todat-info">
                    <span class="updateTime">今天</span>
                    <span class="newsinfo">共有1批次，共有97件塑料件待入库</span>
                </li>
                <li v-for="items in newsList">
                    <span class="updateTime">{{items.time}}</span>
                    <span class="newsinfo">{{items.newsinfo}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name : "content",
        data(){
            return {
                navList : [
                    {
                        navTitle : "资源管理",
                        navItems : [
                            {
                                count : 25,
                                names : "产品",
                                path : "#" 
                            },
                            {
                                count : 25,
                                names : "产品",
                                path : "#" 
                            },
                            {
                                count : 25,
                                names : "产品",
                                path : "#" 
                            },
                            {
                                count : 25,
                                names : "产品",
                                path : "#" 
                            }
                        ]
                    },
                    {
                        navTitle : "生产预警",
                        navItems : [
                            {
                                count : 25,
                                names : "产品",
                                path : "#" 
                            },
                            {
                                count : 25,
                                names : "产品",
                                path : "#" 
                            },
                            {
                                count : 25,
                                names : "产品",
                                path : "#" 
                            },
                            {
                                count : 25,
                                names : "产品",
                                path : "#" 
                            }, 
                        ]
                    },
                ],
                newsList:[
                    {
                        time:"明天",
                        newsinfo:"共有1225批次，共有232897件塑料件待入库"
                    },
                    {
                        time:"06.11",
                        newsinfo:"共有225批次，共有97件塑料件待入库"
                    },
                    {
                        time:"06.12",
                        newsinfo:"共有5批次，共有97件塑料件待入库"
                    },
                ]
            }
        }
    }
</script>
<style lang="scss">
    @import "../../assets/sass/variable.scss";

    .layout-content{
        max-width: 10rem;
        margin: 0 auto;
    }
    .layout-section{
        h2{
            position: relative;
            padding: px2rem(32) 0;
            margin-bottom: px2rem(40);
            font-size: px2rem(40);
            font-weight: 400;
            &::after{
                content: "";
                position: absolute;
                left: 50%;
                bottom: 0;
                width: px2rem(60);
                height: 1px;
                transform: translateX(-50%);
                background: $border-blue;
            }
        }
    }
    .nav-sections{
        margin: px2rem(30) 0;
        padding: px2rem(14) px2rem(20) px2rem(40);
        background: $gf;
        text-align: center;
        .nav-items{
            flex: 1;
            margin-right: px2rem(20);
            &:last-child{
                margin-right: 0;
                background: $nav-purple;
            }
            &:first-child{
                background: $nav-green;
            }
            &:nth-child(2){
                background: $nav-orange;
            }
            &:nth-child(3){
                background: $nav-blue;
            }
        }
        .items-count{
            display: block;
            color: $gf;
            font-size: px2rem(55);
            line-height: px2rem(130);
        }
        .items-names{
            display: block;
            color: $gf;
            font-size: px2rem(30);
            line-height: px2rem(60);
            background: rgba(0,0,0,.15);
        }          
        &:nth-child(2){
            .nav-items{
                &:last-child{
                    background: $nav-darkblue;
                }
                &:first-child{
                    background: $nav-darkorange;
                }
                &:nth-child(2){
                    background: $nav-chocolate;
                }
                &:nth-child(3){
                    background: $nav-black;
                }
            }
        }
    }
    .storageStatus{
        background: $gf;
        height:px2rem(748);
        margin-bottom:px2rem(20);
        h2{
            text-align:center;
        }
        .statueNews{
            display: block;
            height: px2rem(80);
            font-size: px2rem(28);
            text-align: left;
            text-indent: px2rem(72);
            line-height: px2rem(80);
            background: $storage-news;
        }
        .newsList li{
            &:last-child{
                .updateTime::before{
                    display: none;
                }
            }
        }
        .newsList li{
            &:first-child{
                .updateTime::after{
                    background: $news-font;
                }
            }
        }
        .newsList {
            height:px2rem(536);
            backgroud: $nav-black;
            font-size: px2rem(28);
            li{ 
                margin-top: px2rem(47);
                margin-bottom: px2rem(50);
                position: relative;
            }
            .todat-info{
                color: $news-font;
            }
            .updateTime{
                display: inline-block;
                width: px2rem(115);
                margin-left:px2rem(26);
                margin-right:px2rem(30);
                &::after{
                    content: "";
                    position: absolute;
                    left: px2rem(135);
                    top: px2rem(16);
                    border-radius: 60%;
                    width: px2rem(16);
                    height: px2rem(16);
                    background: $news-line;
                }
                &::before{
                    content: "";
                    position: absolute;
                    left: px2rem(140);
                    top: px2rem(50);
                    width: 1px;
                    height: px2rem(45);
                    background: $news-line;
                }
            }
        }
    }
</style>