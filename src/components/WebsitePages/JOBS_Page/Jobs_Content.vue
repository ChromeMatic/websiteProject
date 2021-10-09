<!--
Group Project
Names & ID:
Armani Brown 20171095
Karrell Levy 20173772
-->
<template>
    <div>

        <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
             data-src="/claudio-hirschberger-VI1UCQe4U4A-unsplash.jpg" uk-img id="Pciture">
        </div>
        <br><br>
        <!-- Content -->
          <div class="uk-container uk-container-small">
              <!-- Desktop -->
                  <br>
                  <center>
                      <h2 id="heading1">Join us to help the world build better</h2>
                  </center>
                  <br>
                 <div class="content1">
                     <div id="box" class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
                         <div>
                             <div class="uk-card uk-background-muted uk-card-default uk-card-body card2">
                                 <center>
                                     <h3 class="uk-card-title" id="hd1">What we offer</h3>
                                 </center>
                                 <p>
                                   We offer personal development opportunities, our concern for
                                   employees’ health and well-being is reflected in our family-friendly
                                   benefit packages that encourage wellness, promote healthy living and
                                   help provide peace of mind.
                                 </p>
                             </div>
                         </div>
                         <br><br>
                         <div>
                             <div class="uk-card uk-background-default uk-card-default uk-card-body card2">
                                 <center>
                                     <h3 class="uk-card-title" id="hd2">INTERNSHIPS</h3>
                                 </center>
                                 <p>
                                     As one of the Caribbean's leading manufacturers of construction
                                     materials, we offer excellent career opportunities. For students we offers
                                     internship to  ready the young generation for the working world. Click the
                                     link below to see our internships we offer.
                                 </p>
                                 <div class="uk-card-footer">
                                     <a href="https://www.linkedin.com/" target="_blank" id="apbtn"
                                        class="uk-button uk-button-text ">APPLY NOW!</a>
                                 </div>
                             </div>
                         </div>
                         <br><br>
                         <div>
                             <div class="uk-card uk-background-muted uk-card-default uk-card-body">
                                 <center>
                                     <h3 class="uk-card-title " id="hd3">What we are look for</h3>
                                 </center>
                                 <p>
                                     We ar looking for competent individuals that can
                                     help us achieve our goals, if you are that individual
                                     we extend our invitation to you, we don’t just have careers;
                                     we build the future.
                                 </p>

                             </div>
                         </div>

                     </div>
                     <br><br>
                     <center> <h2 id="heading2">JOB OPENINGS</h2> </center>

                     <!-- Desktop table -->
                     <table class="uk-table uk-table-striped uk-visible@m">
                         <thead>
                         <tr>
                             <th>JOBS</th>
                             <th>DETAILS</th>
                             <th>LOCATION</th>
                         </tr>
                         </thead>
                         <tbody>
                         <tr>
                             <td>Software Engineer</td>
                             <td>Designing software to improve efficiency</td>
                             <td>Main office Kingston</td>
                         </tr>
                         <tr>
                             <td>Administer</td>
                             <td>Supervision and paper work</td>
                             <td>Mandeville</td>
                         </tr>
                         <tr>
                             <td>Chemical engineer</td>
                             <td>Help develop new products</td>
                             <td>Main office Kingston</td>
                         </tr>
                         </tbody>
                     </table>
                     <!-- Desktop table -->

                     <!-- Mobile Table -->
                     <div class="uk-hidden@m">
                         <ul class="uk-list uk-list-striped">
                             <li>
                                 <h4>Software Engineer</h4>
                                 <p>Details :</p>
                                 <p>- Designing software</p>
                                 <p>location :</p>
                                 <p>- Main office Kingston</p>
                             </li>
                             <li>
                                <h4> Chemical Engineer</h4>
                                 <p>Details :</p>
                                 <p>- Help develop new products</p>
                                 <p>Location :</p>
                                 <p>- Main office Kingston</p>
                             </li>
                             <li>
                                 <h4>Administer</h4>
                                 <p>Details :</p>
                                 <p>- Supervision and paper work</p>
                                 <p>Location :</p>
                                 <p>- Mandeville</p>
                             </li>
                         </ul>
                     </div>
                     <!-- Mobile Table -->

                     <br><br>

                     <center>
                         <div class="uk-card uk-card-default uk-width-1-2@m">
                             <div class="uk-card-header">
                                 <div class="uk-grid-small uk-flex-middle" uk-grid>
                                     <div class="uk-width-auto">
                                         <img class="uk-border-circle" width="40" height="40" src="../../../assets/HomePagePictures/Teacher-512.png">
                                     </div>
                                     <div class="uk-width-expand">
                                         <h3 class="uk-card-title uk-margin-remove-bottom">H&R Department</h3>
                                         <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">
                                            December 9 2019</time>
                                         </p>
                                     </div>
                                 </div>
                             </div>
                             <div class="uk-card-body">
                                 <p>
                                     Well Hello There, if you are interested in applying for one of these
                                     jobs, please click on the link below to  apply.
                                 </p>
                             </div>
                             <div class="uk-card-footer">
                                 <a href="https://www.linkedin.com/" target="_blank" id="apbtn"
                                    class="uk-button uk-button-text ">APPLY NOW!</a>
                             </div>
                         </div>
                     </center>

                     <br><br>
                 </div>
              <!-- Desktop -->
          </div>
        <!-- Content -->
    </div>
</template>

<script>

    export default {name: 'Jobs_Contenet'}

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    *{font-family: 'Montserrat', sans-serif;}

    .content1{margin: 1rem;}
    #heading1{color: #2ecc71;}
    #heading2{color: #2ecc71;}


    #apbtn:hover{
        transition: 0.20s ease-in;
        color: #2ecc71;
    }

    #box{padding-left: 2rem;}
    .card2{padding: 1rem;}

    #hd2{color: #2ecc71;}
</style>