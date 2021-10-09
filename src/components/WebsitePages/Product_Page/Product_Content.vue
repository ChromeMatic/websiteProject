<!--
Group Project
Names & ID:
Armani Brown 20171095
Karrell Levy 20173772
-->
<template>
 <div>
     <div class="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle"
          style="background-image: url(/zement2.jpg);">
     </div>
     <br><br>
        <div class="uk-container uk-container-small">
               <div>
                   <center>
                       <h2 id="heading1">PRODUCTS</h2>
                       <div class="uk-child-width-1-2@s" uk-grid>
                           <div>
                               <div class="uk-background-muted uk-card uk-card-default uk-card-large uk-card-body">
                                   <h3 class="uk-card-title">Commercial Cement</h3>
                                   <img src="../../../assets/HomePagePictures/cement.png" width="252px" alt="">
                                   <p>
                                       K&A Company Limited offers three different types of cement, the first is
                                       commercial cement that will suit your commercial needs from housing projects
                                       to small complexes. Our price for this is $450.00 per bag, in addition we offer
                                       discount to our customers. Contact us (860)-123-4567 or visit on of our 23
                                       Locations island wide to get best deal on our products.
                                   </p>
                               </div>
                           </div>
                           <div>
                               <div class="uk-background-muted uk-card uk-card-default uk-card-large uk-card-body">
                                   <h3 class="uk-card-title">Industrial Cement</h3>
                                   <img src="../../../assets/HomePagePictures/cement2.png" width="252px" alt="">
                                   <p>
                                        The second one is industrial cement mainly suited for: damns, skyscraper etc.
                                        This is made for structures that experiences high tension stress thought out
                                        their life. Our price for this is $550.00 per bag., in addition we offer
                                       discount to our customers. Contact us (860)-123-4567 or visit on of our 23
                                       Locations island wide to get best deal on our products.
                                   </p>
                               </div>
                           </div>
                       </div>
                   </center>
               </div>
               <div id="card2">
                   <center>
                       <div class="uk-child-width-1-1@s" uk-grid>
                           <div>
                               <div class="uk-background-muted uk-card uk-card-default uk-card-large uk-card-body">
                                   <h3 class="uk-card-title">Custom Made Cement</h3>
                                   <img src="../../../assets/HomePagePictures/cement3.png" width="252px" alt="">
                                   <p>
                                       This is a special mixture of cement that is use for structures that will be
                                       expose to extreme condition. Our price for this is $1050.00 per bag., in
                                       addition we offer discount to our customers. Contact us (860)-123-4567
                                       or visit on of our 23 Locations island wide to get best deal on our products.
                                   </p>
                               </div>
                           </div>
                       </div>
                   </center>
                   <div>
                       <center>
                           <br><br>
                           <h2 id="heading1">SERVICES</h2>
                           <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                               <div class="uk-card-media-left uk-cover-container">
                                   <img src="../../../assets/HomePagePictures/concrete-mixer.png" alt=""  uk-cover>
                                   <canvas width="600" height="500"></canvas>
                               </div>
                               <div>
                                   <div class="uk-card-body" >
                                       <h3 class="uk-card-title" id="heading2">K&A PreMix Cement</h3>
                                       <p>K&A Cement offers premix cement deliver right to your door to suit your needs,</p>
                                       <p>
                                          why mix the cement yourself when you can have it mix and deliver right to your
                                          door and ready to br poured on spot. With a low low cost of $22,500.00 plus tax.
                                       </p>
                                       <p>
                                           Depending on your location cost may vary.
                                       </p>
                                   </div>
                               </div>
                           </div>
                       </center>
                   </div>
                   <br>
               </div>
        </div>
     <!--END-->
 </div>
</template>

<script>
    export default {name: 'Product_Content'}
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    *{font-family: 'Montserrat', sans-serif;}

    #heading1{
        font-family:'Montserrat', sans-serif;
        font-size: 3rem;
        color: #2ecc71;
    }

    #card2{padding-top: 2rem;}

    #heading2{
        color: #2ecc71;
    }
</style>


<!--

 <div class="uk-container uk-container-small" id="boxInfo">
          <center>
              <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
                  <div>
                      <div class="uk-card uk-card-default uk-card-body">
                          <h3 class="uk-card-title">Comercial Cement</h3>
                          <img src="../../../assets/HomePagePictures/cement.png" alt="" width="70px">
                          <p>For</p>
                      </div>
                  </div>
                  <div>
                      <div class="uk-card uk-card-primary uk-card-body">
                          <h3 class="uk-card-title">Custom Made Cement</h3>
                          <img src="../../../assets/HomePagePictures/cement3.png" alt="" width="70px">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                  </div>
                  <div>
                      <div class="uk-card uk-card-default uk-card-body">
                          <h3 class="uk-card-title">Secondary</h3>
                          <img src="../../../assets/HomePagePictures/cement2.png" alt="" width="70px">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                  </div>
              </div>
              <br><br>
              <h2>SERVICES</h2>
              <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                  <div class="uk-card-media-left uk-cover-container">
                      <img src="../../../assets/HomePagePictures/concrete-mixer.png" alt=""  uk-cover>
                      <canvas width="600" height="400"></canvas>
                  </div>
                  <div>
                      <div class="uk-card-body">
                          <h3 class="uk-card-title">K&A Cement</h3>
                          <p>
                              We offer a wide range of products to suit your needs, from; industry cememt,
                              commerical cement, and sepcial design cement that will suit your need.
                          </p>
                      </div>
                  </div>
              </div>

              <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                  <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
                      <img src="../../../assets/HomePagePictures/cement-truck.png"  alt="" uk-cover>
                      <canvas width="500" height="400"></canvas>
                  </div>
                  <div>
                      <div class="uk-card-body">
                          <h3 class="uk-card-title">K&A PreMix Cement</h3>
                          <p>
                              K&A Cement offers premix cement deliver right to your door to suit your needs,
                              why mix the cement yourself when you can have it mix and deliver right to your
                              door and ready to br poured on spot.
                          </p>
                      </div>
                  </div>
              </div>
          </center>
     </div>


-->