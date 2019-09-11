<template>
    <section>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 style="color: white;" class="title has-text-centered">
                    Code In One Day
                    </h1>
                    <h2 style="color: white;" class="subtitle has-text-centered">
                    Digital denken und Digital umsetzen
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
        <section>
            <div class="container">
                <section class="section">
                    <div class="columns container">
                        <div class="column content">
                            <h3 class="title is-5">Was ist CODE IN ONE DAY</h3>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </div>
                        <div class="column">

                        </div>
                    </div>
                </section>
            </div>
        </section>
        <section>
            <div class="container">
                <section class="section">
                    <div class="columns container">
                        <div class="column content">
                            <h3 class="title is-5">Das bringt CODE IN ONE DAY</h3>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </div>
                        <div class="column">

                        </div>
                    </div>
                </section>
            </div>
        </section>
        <section class="section">
            <h1 class="title is-4 has-text-centered">So funktioniert CODE IN ONE DAY</h1>
            <div class="container steps">
                <b-steps size="is-medium">
                    <b-step-item label="Identifikation" icon="account-key">
                        <div class="box">Im ersten Schritt wird ein Ziel definiert. Beispielsweise sollen alle Projektteilnehmer ein einheitliches Verstädnnis von Web-Anwendungen haben. Oder alle Beteiligten sollen den Umgang mit Datenbanken beherrschen.</div>
                    </b-step-item>
                    <b-step-item label="Basics" icon="account">
                        <div class="box">In einem angepassten Workshops werden Grundkenntnisse des Fachs gemeinsam gelernt. Beispielsweise Python Programmierung. HTML & CSS oder auch Tools wie Tableau oder Power BI.</div>
                    </b-step-item>
                    <b-step-item label="Digitale Lösung" icon="account-plus">
                        <div class="box">Mit dem erlernten kann nun gemeinsam ein erste Prototyp entwickelt werden. Alle Themen sollen direkt an realen Beispielen umgesetzt werden.</div>
                    </b-step-item>
                    <b-step-item label="Refinement" icon="account-plus">
                        <div class="box">Im Anschluss an den Workshop wird überlegt, ob weitere Skills für die Zielerfüllung notwendig sind. So kann im nachhinein eine Roadmap zur Weiterbildung erstellt werden.</div>
                    </b-step-item>
                </b-steps>
            </div>
        </section>
    </section>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Products',
  components: {
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
    margin: 5%;
}
.steps {
    margin: 5% auto;
}
.title {
    text-transform: uppercase;
}
.facts {
    /* background: #f9fdfd; */
    padding: 2em;
    color: white;
}
p.title {
    color: white;
}
.hero {
    width: 100%;
    height: 35vh;
    background: url();
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
