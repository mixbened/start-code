<template>
    <section>
        <section class="hero">
            <div class="hero-body">
                <div class="container header-line">
                    <h2 style="color: white; font-size: 4em;" class="title is-2 has-text-centered">
                        Inhouse Kurse
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
                        <p class="content has-text-justified">Ziel von CODE.INONEDAY ist es, ein interdisziplinäres Grundverständnis für digital-technische Themen im Unternehmen aufzubauen, um einen digitalen Denkansatz zu etablieren, ohne den Ansatz einer klassischen Weiterbildung zu verfolgen.</p>
                        <router-link to="/code-in-one-day"><b-button type="is-primary">Mehr erfahren</b-button></router-link>
                    </div>
                    <div class="card column has-text-centered">
                        <img src="../assets/img/coach-graphics.png" width="300">
                        <h5 class="title is-4 has-text-centered">Expert Sessions & Coaching</h5>
                        <p class="content has-text-justified">Mittels fachlichem Training zu Themen aus Technik & Programmierung helfen wir Teams dabei, Projekte schneller umzusetzen. Bei Projekten, die die fachlichen Kompetenzen von Mitarbeitern herausfordern, fördern wir in Digital Themen und bilden nachhaltig weiter.</p>
                        <router-link to="/coaching"><b-button type="is-primary">Mehr erfahren</b-button></router-link>
                    </div>
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
        <section class="section">
            <div class="container mt-5">
                <h3 class="title is-3">Für wen ist das Angebot interessant?</h3>
                <section>
                    <div class="column container is-vcentered p-2">
                        <div class="column content p-2">
                            <section class="section">
                                <div class="columns is-vcentered fact">
                                <img src="../assets/img/icons8-zusammenspiel-96.png" alt="Icon Zusammenspiel" width="50">
                                <h3 class="title is-5 fact-title">Projektmanagement & Produktmanagement</h3>
                                </div>
                                <p class="content">Personen in diesen Positionen betreuen oft digitale Produkte. Bei der Entwicklung arbeitet man viel mit Software-Architekten oder Entwicklern zusammen. Damit die Kommunikation zwischen diesen Domänen positiv verläuft, hilft es die Basics der Entwicklung zu beherrschen.
                                </p>
                                <div class="columns is-vcentered fact">
                                <img src="../assets/img/icons8-kundeninformationen-48.png" alt="Icon Zusammenspiel" width="50">
                                <h3 class="title is-5 fact-title">Online Marketing</h3>
                                </div>
                                <p class="content">Marketing wird in Zeiten von digitaler Wertschöpfung oft sehr technsich. Stichpunkte hierfür sind SEO, Analytics oder Web-Design. Mit Kompetenzen im Bereich der Programmierung, können Marketer ihre Tools und Maßnahmen auf das nächste Level bringen.</p>
                                <div class="columns is-vcentered fact">
                                <img src="../assets/img/icons8-ausbildung-96 (1).png" alt="Icon Zusammenspiel" width="50">
                                <h3 class="title is-5 fact-title">Sales oder Controlling</h3>
                                </div>
                                <p class="content">Auch in Fachbereichen werden digitale Skills immer wichtiger. Ob das direkte Zusammenarbeiten mit der IT Abteilung, oder eigenes Umsetzen von Tätigkeiten mittels Programmierung.</p>
                                <p><b>Und viele mehr!</b></p>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <Banner title="Interesse?" text="Wir beantworten Fragen zu unseren Themenschwerpunkten oder dem Verfahren unseren Inhouse Kursen sehr gerne persönlich. Unsere Leistungen werden von Kunde zu Kunde individuell zugeschnitten." cta="/kontakt" action="Schick uns eine Nachricht"/>
    </section>
</template>

<script>
import CIOD from './CIOD.vue'
import Title from './Title'
import Banner from './Banner'
import chartData from '../resources/chart-data.js'

export default {
  name: 'Products',
  components: {
      CIOD,
      Title,
      Banner
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
    min-height: 55vh;
    background: url('../assets/img/course2.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    flex-direction: row;
    align-items: center;
    filter: grayscale(50%)
}
.hero-body {
    width: 50%;
}
.number {
    position: absolute;
    top: -1.5em;
    border-radius: 100%;
    background: rgb(23, 162, 184);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
@media (max-width: 768px){
    p.title {
        font-size: 1em;
    }
    p.subtitle {
        font-size: 1em;
    }
    .banner {
        width: 100%;
    }
}
</style>
