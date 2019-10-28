<template>
    <section>
        <section class="hero">
            <div class="hero-body">
                <div class="container header-line">
                    <h2 style="color: white; font-size: 4em;" class="title is-2 has-text-centered">
                        CODE IN ONE DAY
                    </h2>
                    <h2 style="color: white;" class="subtitle has-text-centered">
                        Digitl denken & umsetzen
                    </h2>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <section class="section">
                    <div class="columns container is-vcentered">
                        <div class="column content p-2">
                            <h3 class="title is-5">Was ist CODE IN ONE DAY</h3>
                            Digitale Produkte leben von fachlicher Kompetenz und der Verzahnung von Ressourcen in Unternehmen, besonders in interdisziplinären Projektteams. Von der Idee zum Produkt hindern unterschiedliche Kenntnisstände im digitalen Bereich den effizienten Einsatz von Ressourcen.
                            Beim Tagesformat Code in one Day wird den Teilnehmern sowohl theoretisches Wissen zur Softwareentwicklung vermittelt, als auch Methoden zur Umsetzung von digitalen Lösungen nähergebracht, die in praktischen Übungen direkt angewandt werden können. 
                        </div>
                        <div class="column">
                            <figure class="image">
                                <img src="../assets/img/workshop-graphics.png">
                            </figure>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <section>
            <div class="container">
                <section class="section">
                    <div class="column container is-vcentered p-2">
                        <div class="column content p-2">
                            <h3 class="title is-5">Für wen ist CODE.INONEDAY?</h3>
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
        <section>
            <div class="container">
                <section class="section">
                    <div class="columns container is-vcentered">
                        <div class="column content p-2">
                            <h3 class="title is-5">Wofür ist CODE.INONEDAY</h3>
                            Ziel von Code in one day ist es, ein interdisziplinäres Grundverständnis für digital-technische Themen im Unternehmen aufzubauen, um einen digitalen Denkansatz zu etablieren, ohne den Ansatz einer klassischen Weiterbildung zu verfolgen. 
                        </div>
                        <div class="column">
                            <figure class="image">
                                <img src="../assets/img/team-graphics.png">
                            </figure>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <section class="section">

        </section>
        <Banner title="Noch Fragen?" text="Wir beantworten Fragen zu unseren Themenschwerpunkten oder dem Verfahren unseres Coaching sehr gerne persönlich. Unsere Leistungen werden von Kunde zu Kunde individuell zugeschnitten." cta="/kontakt" action="Schick uns eine Nachricht"/>
    </section>
</template>

<script>
import Nav from './Nav.vue'
import Banner from './Banner.vue'


export default {
  name: 'CIOD',
  components: {
      Banner
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
figure {
    box-shadow: none;
    width: 50%;
    margin: auto;
}
.p-2 {
    padding: 3em 2em 1em 2em;
}
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
    height: 55vh;
    background: url('../assets/img/course2.jpg');
    background-attachment: fixed;
    filter: grayscale(20%);
    background-size: cover;
    background-position: center;
    position: relative;
    flex-direction: row;
    align-items: center;
}
</style>
