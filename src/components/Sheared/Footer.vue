<!--
Group Project
Names & ID:
Armani Brown 20171095
Karrell Levy 20173772
-->
<template>
    <!-- Footer -->
    <div class="uk-section uk-section-muted" id="background">
        <!-- Desktop Screen-->
        <div class="uk-container uk-visible@m" id="footer">
            <div class="uk-column-1-2">
                <div>
                    <h2>Soail Media links</h2>
                    <br>

                    <ul class="uk-navbar-nav">
                        <a id="Tw1" href="https://twitter.com" target="_blank" class="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
                        <a id="int1" href="https://www.instagram.com/" target="_blank" class="uk-icon-button uk-margin-small-right" uk-icon="instagram"></a>
                        <a id="LI1" href="https://www.linkedin.com/" target="_blank" class="uk-icon-button  uk-margin-small-right" uk-icon="linkedin"></a>
                        <a id="Gp1" href="https://plus.google.com/" target="_blank" class="uk-icon-button" uk-icon="google-plus"></a>
                    </ul>
                    <br>
                    <hr class="uk-divider-small">
                    <br>
                    <p>&copy 2019 All rights belong to the K&ACompany.</p>
                </div>

                <div>
                    <br>
                    <h2>Location</h2>
                    <p>123 Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>951 Lorem ipsum dolor 12 road Kingston.</p>
                    <p uk-margin>
                        <button class="uk-button uk-button-default" id="btn">
                            <router-link to="/contact"><a>FOR MORE DETAILS</a></router-link>
                        </button>
                    </p>
                </div>
            </div>
        </div>
        <!-- Desktop Screen-->

        <!-- Mobile Screen -->
        <div class="uk-container uk-hidden@m" id="footer1">
            <div class="uk-column-1-2">
                <div>
                    <h2>Soail Media links</h2>

                    <ul class="uk-navbar-nav links">
                        <li><a href="https://twitter.com" target="_blank" id="Tw" class="uk-icon-link" uk-icon="icon:twitter; ratio: 1.5"></a></li>
                        <li><a href="#" id="LI" class="uk-icon-link" uk-icon="icon:linkedin; ratio: 1.5"></a></li>
                        <li><a href="#" id="Gp" class="uk-icon-link" uk-icon="icon:google-plus; ratio: 1.5"></a></li>
                    </ul>

                    <ul class="uk-navbar-nav links">
                        <li><a href="#" id="int" class="uk-icon-link" uk-icon="icon:instagram; ratio: 1.5"></a></li>
                    </ul>
                    <hr class="uk-divider-small">
                    <br>
                    <p>&copy 2019 All rights belong to the K&ACompany.</p>
                </div>

                <div>
                    <br>
                    <h2>Location</h2>
                    <p>123 Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>951 Lorem ipsum dolor 12 road Kingston.</p>
                    <p uk-margin>
                        <button class="uk-button uk-button-default" id="btn1">
                            <router-link to="/contact" ><a>DETAILS</a></router-link>
                        </button>
                    </p>
                </div>
            </div>
        </div>
        <!-- Mobile Screen -->
    </div>
    <!-- -->
</template>

<script>
    export default {name: 'Footer'}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    *{
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }

    #btn a{
        text-decoration: none;
        color: white;
    }


    #background{background: linear-gradient(#ffffff,#1abc9c);}

    #footer h2{
        font-weight: bolder;
        font-size: 2rem;
        color: #57606f;
    }
    #footer1 p{
        color: #2c3e50;
    }

    #footer1 h2{
        font-weight: bolder;
        font-size: 1.3rem;
        color: #57606f;
    }
    #footer1 p{
        font-size: 16px;
        color: #2c3e50;
    }

    #btn1 a{
        font-size: 15px;
        text-decoration: none;
        color: white;
    }


    .links li a{
        padding-left:5px;
    }
    .links li{text-decoration: none;}

    #int{color:#e4405f;}
    #LI{color:#0077B5;}
    #Tw{color:#55acee;}
    #Gp{color:#dd4b39;}

    #int1{color:#e4405f;}
    #LI1{color:#0077B5;}
    #Tw1{color:#55acee;}
    #Gp1{color:#dd4b39;}

</style>