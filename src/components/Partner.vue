<template>
  <section>
    <Title title="Partner & Projekte" subtitle="Wir lieben und pflegen Kooperationen"/>
    <section class="section">
      <div class="tile is-ancestor container mx-auto is-parent is-vcentered">
        <div class="tile is-vertical is-parent">
          <div class="tile box is-child has-text-centered">
            <figure class="image">
              <img src="../assets/img/partner/oscar.png">
            </figure>
          </div>
          <div class="tile box is-child has-text-centered">
            <figure class="image">
              <img src="../assets/img/partner/unity.png">
            </figure>
          </div>
          <div class="tile box is-child has-text-centered">
            <figure class="image">
              <img src="../assets/img/partner/kommit.jpg">
            </figure>
          </div>
        </div>
        <div class="tile is-vertical is-parent">
          <div class="tile box is-child has-text-centered">
            <figure class="image">
              <img src="http://www.finanzen-versicherungen-blog.de/wp-content/uploads/2013/09/Gothaer.png">
            </figure>
          </div>
          <div class="tile box is-child has-text-centered">
            <figure class="image">
              <img src="../assets/img/partner/foxbase.jpg">
            </figure>
          </div>
          <div class="tile box is-child has-text-centered">
            <figure class="image">
              <img src="https://codiviti.de/wp/wp-content/uploads/codiviti_logoclaim_low.png">
            </figure>
          </div>
        </div>
        <div class="tile is-vertical is-parent">
          <div class="tile box is-child has-text-centered">
            <figure class="image">
              <img src="http://mint-festival.de/wp-content/uploads/2018/04/mintkoeln-logo.png">
            </figure>
          </div>
          <div class="tile box is-child has-text-centered">
            <figure class="image">
              <img src="../assets/img/partner/startplatz.jpeg">
            </figure>
          </div>
          <div class="tile box is-child has-text-centered">
            <figure class="image">
              <img src="https://startplatz.de/wp-content/uploads/2017/09/digihub_dus_logo.png">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
    </section>
    <Banner title="Interesse an einer Partnerschaft oder Kooperation?" text="Vielleicht habt ihr ja ein Projekt im Kopf, bei dem wir unterstützen können. Sprecht uns an!" cta="/kontakt"  action="Schick uns eine Nachricht"/>
  </section>
</template>

<script>
import Title from './Title.vue'
import Banner from './Banner.vue'


export default {
  name: 'Partner',
  components: {
      Title,
      Banner
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
figure {
  box-shadow: none;
  max-width: 200px;
}
.mx-auto {
  margin: 0 auto;
}
.image {
  margin: auto;
}
</style>