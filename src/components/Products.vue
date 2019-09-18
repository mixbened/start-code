<template>
    <section>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h2 style="color: white;" class="title is-2 has-text-centered">
                    Für Innovative Teams
                    </h2>
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
                        <img src="https://img.icons8.com/color/96/000000/e-learning.png">
                        <h5 class="title is-4 has-text-centered">CODE.INONEDAY</h5>
                        <p class="content has-text-justified">Ziel von Code in one day ist es, ein interdisziplinäres Grundverständnis für digital-technische Themen im Unternehmen aufzubauen, um einen digitalen Denkansatz zu etablieren, ohne den Ansatz einer klassischen Weiterbildung zu verfolgen. </p>
                        <router-link to="/coid"><b-button type="is-primary">Details</b-button></router-link>
                    </div>
                    <div class="card column has-text-centered">
                        <img src="https://img.icons8.com/color/96/000000/teacher.png">
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
            <div class="card">
                <div class="card-content">
                    <p class="title">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">
                    Jeff Atwood
                    </p>
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                    <span>
                        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                    </span>
                    </p>
                    <p class="card-footer-item">
                    <span>
                        Share on <a href="#">Facebook</a>
                    </span>
                    </p>
                </footer>
                </div>
        </div>
        </section>
        <section class="section">
            <div class="container">
                <h3 class="title is-3">Statistik</h3>
                <div class="columns">
                    <div class="column">
                        <canvas id="statistics-1"></canvas>
                    </div>
                    <div class="column">
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
      this.createChart('statistics-1', this.chartData)
      this.createChart('statistics-2', this.chartData)
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
</style>
