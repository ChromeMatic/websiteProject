<!--
Group Project
Names & ID:
Armani Brown 20171095
Karrell Levy 20173772
-->
<template>
    <div>
        <!--Content-->
        <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
             data-src="/pavan-trikutam-71CjSSB83Wo-unsplash.jpg" uk-img id="Pciture">
        </div>
        <br>
        <div class="uk-container-large" id="pannel1">
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <!-- Map  -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15181.290568832906!2d-
                    76.7318151!3d17.9637201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa14cda44345c522!2sCar
                    ibbean%20Cement%20Company%20Limited!5e0!3m2!1sen!2sjm!4v1575000307223!5m2!1sen!2sjm"
                    width="650" height="350" frameborder="0" style="border:0;" allowfullscreen=""
                    class="uk-cover uk-visible@m" id="map">
                    </iframe>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15181.290568832906!2d-
                    76.7318151!3d17.9637201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa14cda44345c522!2sCar
                    ibbean%20Cement%20Company%20Limited!5e0!3m2!1sen!2sjm!4v1575000307223!5m2!1sen!2sjm"
                            width="300" height="270" frameborder="0" style="border:0;" allowfullscreen=""
                            class="uk-cover uk-hidden@m" id="map">
                    </iframe>
                    <!-- Map -->
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div class="uk-card-body">

                        <h3 id="heading">CONTACT INFO</h3>
                        <br>
                        <p class="uk-visible@m">Telephone number:  876-123-4567.</p>
                        <br><br>
                        <p class="uk-visible@m">Email: KAGAssistline@gmail.com</p>

                        <p class="uk-hidden@m" id="psize">Telephone number: 876-123-4567.</p>
                        <br>
                        <p class="uk-hidden@m" id="psize1">Email : KAGAssistline@gmail.com</p>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {name:"ContactContent"}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    *{
        font-family: 'Montserrat', sans-serif;
    }


    #pannel1{margin: 1rem 3rem;}
    #psize{font-size: 0.85rem;}
    #psize1{font-size: 0.85rem;}
    #heading{
        color: #2ecc71;
        font-size: 2rem;
    }
</style>