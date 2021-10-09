<!--
Group Project
Names & ID:
Armani Brown 20171095
Karrell Levy 20173772
-->
<template>
    <div>
        <!-- Desktop Nav-->
        <nav class="uk-visible@m">
            <nav id="desktopNav"  class="uk-navbar-container uk-margin"  uk-sticky uk-scroll uk-navbar>
                <div class="uk-navbar-center">
                    <div class="uk-navbar-center-left"><div>
                        <ul class="uk-navbar-nav">
                            <li class="uk-active"><router-link to="/"><a>Home</a></router-link></li>
                            <li class="uk-active"><router-link to="/about"><a>History</a></router-link></li>
                            <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                                <ul class="uk-nav uk-dropdown-nav">
                                    <li class="uk-active"><a href="MSt">MISSION STATEMENT</a></li>
                                    <li class="uk-active"><a href="#">Our Vision</a> </li>
                                    <li class="uk-active"><a href="#">Company Information</a> </li>
                                    <li class="uk-active"><a href="#">Environment</a> </li>
                                    <li class="uk-active"><a href="#">Work Environment</a> </li>
                                    <li class="uk-active"><a href="#">Health</a> </li>
                                </ul>
                            </div>
                            <li class="uk-active"><router-link to="/contact"><a>Contact Us</a></router-link></li>
                        </ul>
                    </div></div>
                    <a class="uk-navbar-item uk-logo" href="/">
                        <img src="../../assets/HomePagePictures/onlinelogomaker-112819-2122-7079-2000-transparent.png" width="240px" alt="">
                    </a>
                    <div class="uk-navbar-center-right"><div>
                        <ul class="uk-navbar-nav">
                            <li class="uk-active"><router-link to="/product"><a>Products</a></router-link></li>
                            <li class="uk-active"><router-link to="/jobs"><a>Jobs</a></router-link></li>
                        </ul>
                    </div></div>

                </div>
            </nav>
        </nav>
        <!-- Desktop Nav-->

        <!-- Mobile Nav-->
        <nav id="MobileNav" class="uk-navbar-container uk-hidden@m" uk-sticky uk-scroll uk-navbar>
            <a class="uk-navbar-toggle" uk-toggle="target: #offcanvas-overlay">
                <span uk-navbar-toggle-icon></span>
            </a>
            <img id="ImgNav" src="../../assets/HomePagePictures/onlinelogomaker-112819-2122-7079-2000-transparent.png"
                 width="250px" alt="">
            <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
                <div class="uk-offcanvas-bar" id="sideNav">
                    <button class="uk-offcanvas-close" type="button" uk-close></button>
                    <br><br>
                    <ul class="uk-nav uk-nav-default">
                        <li class="uk-active">
                            <a href="#">
                                <span class="uk-margin-small-right" uk-icon="icon: home">
                                </span>
                                <router-link to="/">
                                    <a>HOME</a>
                                </router-link>
                            </a>
                        </li>
                        <br>
                        <li class="uk-active">
                            <a href="#">
                                <span class="uk-margin-small-right" uk-icon="icon: info"></span>
                                <router-link to="/about">
                                    <a>HISTORY</a></router-link>
                            </a>
                        </li>
                        <br>
                        <li class="uk-nav-divider"></li>
                        <br>
                        <li class="uk-active" ><a><span class="uk-margin-small-right" uk-icon="icon: receiver"></span><router-link to="/contact"><a>CONTACT US</a></router-link></a></li>
                        <br>
                        <li class="uk-active" ><a><span class="uk-margin-small-right" uk-icon="icon: credit-card"></span><router-link to="/product"><a>PRODUCT & SERVICES</a></router-link></a></li>
                        <br>
                        <li class="uk-active" ><a><span class="uk-margin-small-right" uk-icon="icon: bell"></span><router-link to="/jobs"><a>JOBS</a></router-link></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Mobile Nav-->

        <router-view/>
    </div>
</template>

<script>
    export default {name:'NavBar'}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    *{font-family: 'Montserrat', sans-serif;}

    #desktopNav{
        background:#f5f6fa;
        padding: 1rem;
    }

    #desktopNav li a{
        text-decoration: none;
        color: #2ecc71;
        font-weight: bold;
        font-size: 18px;
    }

    #MobileNav{background-color: #f5f6fa;}
    #ImgNav{padding-left: 1.5rem;}
</style>
