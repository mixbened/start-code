<template>
    <section>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 style="color: white;" class="title has-text-centered">
                    Für innovative Teams
                    </h1>
                    <h2 style="color: white;" class="subtitle has-text-centered">
                    Lebenslanges lernen bleibt keine Ausnahme
                    </h2>
                </div>
            </div>
        </section>
        <div class="level facts">
            <div class="level-item has-text-centered">
                <div>
                <img src="../assets/img/tectrion.gif" alt="" width="200">
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <img src="../assets/img/roland.png" alt="" width="200">
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <img src="../assets/img/unity.png" alt="" width="150">
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <img src="../assets/img/kommit.jpg" alt="" width="150">
                </div>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <h3 class="title is-3">Nachhaltig Umdenken</h3>
                <p></p>
                <div class="columns">
                    <div class="card column has-text-centered">
                        <h5 class="title is-4 has-text-centered">CODE.INONEDAY</h5>
                        <p class="content has-text-justified">Ziel von Code in one day ist es, ein interdisziplinäres Grundverständnis für digital-technische Themen im Unternehmen aufzubauen, um einen digitalen Denkansatz zu etablieren, ohne den Ansatz einer klassischen Weiterbildung zu verfolgen. </p>
                        <router-link to="/coid"><b-button type="is-primary">Details</b-button></router-link>
                    </div>
                    <div class="card column has-text-centered">
                        <h5 class="title is-4 has-text-centered">Coaching</h5>
                        <p class="content has-text-justified">Ziel von Code in one day ist es, ein interdisziplinäres Grundverständnis für digital-technische Themen im Unternehmen aufzubauen, um einen digitalen Denkansatz zu etablieren, ohne den Ansatz einer klassischen Weiterbildung zu verfolgen. </p>
                        <router-link to="/coaching"><b-button type="is-primary">Details</b-button></router-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
        <div class="container">
            <h3 class="title is-3">Erahrungsbericht</h3>
        </div>
        </section>
        <section class="section">
            <div class="container">
                <h3 class="title is-3">Statistik</h3>
            </div>
        </section>
    </section>
</template>

<script>
import COID from './COID.vue'
import Title from './Title'

export default {
  name: 'Products',
  components: {
      COID,
      Title
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.facts {
    /* background: #f9fdfd; */
    padding: 1em 2em;
    color: white;
    /* border-top: 1px solid #999;
    border-bottom: 1px solid #999; */
}

.card {
    margin: 5%;
    padding: 3%;
}


.hero {
    width: 100%;
    height: 35vh;
    background: url('../assets/img/course2.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    flex-direction: row;
    align-items: center;
}
.hero:before {
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;   
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.582);
}
</style>
