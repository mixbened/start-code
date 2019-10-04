<template>
    <section>
        <section class="hero">
            <div class="hero-body">
                <div class="container header-line">
                    <h2 style="color: white; font-size: 4em;" class="title is-1 has-text-centered">
                        Innovation von innen
                    </h2>
                    <h2 style="color: white;" class="subtitle has-text-centered">
                        Jetzt Team in digitalen Skills schulen
                    </h2>
                </div>
            </div>
        </section>
        <div class="level facts">
            <div class="level-item has-text-centered">
                <div>
                    <img src="../assets/img/partner/oscar.png" alt="" width="100">
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <img src="../assets/img/partner/unity.png" alt="" width="100">
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <img src="../assets/img/partner/kommit.jpg" alt="" width="100">
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <img src="https://www.mediapark.de/wp-content/uploads/2019/03/2019-03-26-STARTPLATZ_Logo_RGB-1024x504.png" alt="" width="100">
                </div>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <h3 class="title is-3">Nachhaltig Umdenken</h3>
                <p></p>
                <div class="columns">
                    <div class="card column has-text-centered">
                        <img src="../assets/img/workshop-graphics.png" width="300">
                        <h5 class="title is-4 has-text-centered">CODE.INONEDAY</h5>
                        <p class="content has-text-justified">Ziel von Code in one day ist es, ein interdisziplinäres Grundverständnis für digital-technische Themen im Unternehmen aufzubauen, um einen digitalen Denkansatz zu etablieren, ohne den Ansatz einer klassischen Weiterbildung zu verfolgen. </p>
                        <router-link to="/coid"><b-button type="is-primary">Mehr erfahren</b-button></router-link>
                    </div>
                    <div class="card column has-text-centered">
                        <img src="../assets/img/coach-graphics.png" width="300">
                        <h5 class="title is-4 has-text-centered">Coaching</h5>
                        <p class="content has-text-justified">Ziel von Code in one day ist es, ein interdisziplinäres Grundverständnis für digital-technische Themen im Unternehmen aufzubauen, um einen digitalen Denkansatz zu etablieren, ohne den Ansatz einer klassischen Weiterbildung zu verfolgen. </p>
                        <router-link to="/coaching"><b-button type="is-primary">Mehr erfahren</b-button></router-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
        <div class="container">
            <div class="banner">
                <div class="card-content">
                    <p class="title">
                    “Teams werden interdisziplinär? Dazu muss das Skillset auch interdisziplinär sein. Ziel ist es nicht, neue Coder zu finden. Wir wollen ein gesamtes digitales und agiles Team sein.”
                    </p>
                    <p class="subtitle">
                        Johan Hacklin, Unitymeda Agile Coach
                    </p>
                </div>
                <footer class="card-footer">
                    <p class="content card-footer-item">
                        Wie interdisziplinäre Teams mit CODE.INONEDAY geschaffen werden:<router-link to="/article/unitymedia"> Artikel</router-link>
                    </p>
                </footer>
                </div>
        </div>
        </section>
        <section class="section">
            <div class="container">
                <h3 class="title is-3">Fakten - Bitkom Studie aus dem Jahr 2018</h3>
                <div class="columns mt-5">
                    <div class="column">
                        <h5 class="title is-5">Digitalkompetenz wird...</h5>
                        <canvas id="statistics-1"></canvas>
                    </div>
                    <div class="column">
                        <h5 class="title is-5">Nachfrage IT-Fachkräfte</h5>
                        <canvas id="statistics-2"></canvas>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import COID from './COID.vue'
import Title from './Title'
import chartData from '../resources/chart-data.js'

export default {
  name: 'Products',
  components: {
      COID,
      Title
  },
  data(){
      return {
          chartData
      }
  },
  methods: {
    createChart(chartId, chartData) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
        })
    }
  },
  mounted() {
      this.createChart('statistics-1', this.chartData[0])
      this.createChart('statistics-2', this.chartData[1])
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-line {
    background-color: rgb(23, 162, 184, 0.6);
    padding: 2%;
    width: 60%;
}
.card.column {
    margin-left: 1em;
    margin-right: 1em;
}
.facts {
    /* background: #f9fdfd; */
    padding: 1em 2em;
    color: white;
    /* border-top: 1px solid #999;
    border-bottom: 1px solid #999; */
}

.card {
    margin: 5% auto;
    padding: 3%;
}

.hero {
    width: 100%;
    min-height: 35vh;
    background: url('../assets/img/course2.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    flex-direction: row;
    align-items: center;
    filter: grayscale(50%)
}
.hero-body {
    width: 50%;
}
.banner {
    width: 80%;
    margin: auto;
}
</style>
