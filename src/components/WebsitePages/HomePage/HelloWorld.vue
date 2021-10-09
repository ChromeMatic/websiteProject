<!--
Group Project
Names & ID:
Armani Brown 20171095
-->
<template>
   <div>
       <div class="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle"
            style="background-image: url(/cement21.jpg);">
       </div>

         <div class="uk-container uk-container-small">
             <article class="uk-article">
                     <br>
                     <p class="uk-text-lead">
                         Well Hello There Thanks for taking your time to visit.
                         We specialize in simple, user-centric production of cement.
                         Feel free to take your time and learn more about us.
                     </p>
                     <center>
                         <p>
                             <a class="uk-button uk-button-text ReadMoreBTN">
                                 <router-link to="/about">Read more</router-link>
                             </a>
                         </p>
                     </center>
                     <br>
                     <p  class="uk-text-lead">
                         K&A Company Limited offers different cement products, to
                         suit you construction needs. To learn more about these
                         products please click on the link below.
                     </p>
                     <center>
                         <p>
                             <a class="uk-button uk-button-text  ReadMoreBTN">
                                 <router-link to="/product">View our products</router-link>
                             </a>
                         </p>
                     </center>
                    <br>
                     <p class="uk-text-lead">
                         K&A Company Limited opened its doors in Jamaica in the year 2019 Since then, the company
                         has seen several changes in ownership over the period with its first owners being the
                         Jamaican Government.  the field of Cement but is also the planning to expand their
                         business in other country such as Trinidad, Barbados, Anguilla, and Guyana.
                     </p>
                      <br>
                      <center>
                          <!-- Desktop Screen -->
                          <div class="uk-column-1-2@l uk-visible@m cen">
                              <a href="#" uk-icon="icon: location; ratio: 3"></a>
                              <h3>23</h3>
                              <p>Locations island wide</p>

                              <a href="#" uk-icon="icon: users; ratio:3"></a>
                              <h3>2000</h3>
                              <p>people within our organisation</p>
                          </div>
                          <br>
                          <!-- Desktop Screen -->

                          <!-- Mobile Screen -->
                          <div class="uk-column-1-2@l uk-hidden@m cen">
                              <a href="#" uk-icon="icon: location; ratio: 3"></a>
                              <h3>23</h3>
                              <p>Locations island wide</p>

                              <a href="#" uk-icon="icon: users; ratio:3"></a>
                              <h3>2000</h3>
                              <p>people within our organisation</p>
                          </div>
                          <br>
                          <!-- Mobile Screen-->
                      </center>
                      <br>
                     <center>
                      <h2 id="sharePrice">
                         Share Price as at December 11, 2019
                         J$76.37
                     </h2>
                     </center>
                     <br>
              </article>
         </div>
       <br>
       <!--Desktop Screen -->
       <div class="uk-child-width-1-1@s uk-grid" id="card2">
           <div>
               <div class="uk-visible@m uk-card uk-background-muted uk-card-default uk-card-body" >
                   <center>
                       <img src="../../../assets/HomePagePictures/cement.png" alt="" >
                       <h3 class="uk-card-title">Services</h3>
                       <p>We use modern technology is employed at K&A Company Limited to improve our products.</p>
                       <p>
                           Multinational cement manufacturer, Cemex, recently in increased their stake in
                           K&A Company Limited parent's, NPM.
                       </p>
                       <p>
                           This relationship with Cemex has given access to a number
                           of global industry leaders, and has assisted in improving our reliability and productivity
                           at least threefold within the last year.
                       </p>
                       <p>
                           The added expertise has enabled our employees,
                           and plant, to perform at international standards.
                       </p>

                   </center>
               </div>
           </div>
       </div>
       <!--Desktop Screen -->

       <!--Mobile Screen -->
       <div class="uk-child-width-1-1@s uk-grid" id="card3">
               <div class="uk-hidden@m uk-card uk-background-muted uk-card-default uk-card-body">
                   <center>
                       <img src="../../../assets/HomePagePictures/cement.png" alt="" >
                       <h3 class="uk-card-title">Services</h3>
                       <p>We use modern technology is employed at K&A Company Limited to improve our products.</p>
                       <p>
                           Multinational cement manufacturer, Cemex, recently in increased their stake in
                           K&A Company Limited parent's, NPM.
                       </p>
                       <p>
                           This relationship with Cemex has given access to a number
                           of global industry leaders, and has assisted in improving our reliability and productivity
                           at least threefold within the last year.
                       </p>
                       <p>
                           The added expertise has enabled our employees,
                           and plant, to perform at international standards.
                       </p>
                   </center>
               </div>
           </div>

       </div><!-- End of main div -->
</template>


 <script>
       export default {name: 'HelloWorld'}
</script>


<style scoped>

    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    *{font-family: 'Montserrat', sans-serif;}

    #card2{padding: 1rem 8rem;}
    #card2 h3{
        color:#2ecc71;
        font-size: 32px;
    }

    #card3{
        padding: 1rem 2rem;
        font-size: 18px;
    }

    .ReadMoreBTN a{
        text-decoration: none;
        color: #2ecc71;
        font-size: 18px;
    }

    .cen a{color: #2ecc71;}
    #sharePrice{color: #2ecc71;}
</style>
