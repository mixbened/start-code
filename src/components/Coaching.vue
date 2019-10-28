<template>
    <section>
        <section class="hero">
            <div class="hero-body">
                <div class="container header-line">
                    <h2 style="color: white; font-size: 4em;" class="title is-2 has-text-centered">
                        Expert Sessions
                    </h2>
                    <h2 style="color: white;" class="subtitle has-text-centered">
                        Digitalkompetenz mit Coaching
                    </h2>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <section class="section mt-5">
                    <div class="columns container is-vcentered">
                        <div class="column content">
                            <h3 class="title is-5">Wieso Coaching?</h3>
                            Manchmal sind Projekte anspruchsvoll und erfordern erweiterte Digitale Kenntnisse. Hier unterstützen wir mit unserem Fachwissen und bringen ihr Projekt mit unseren Experts auf den richtigen Kurs!

                        </div>
                        <div class="column">
                            <figure class="figure">
                                <img src="../assets/img/learning-graphics.png">
                            </figure>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <section>
            <div class="container has-text-centered">
                <h3 class="title is-5">Unsere Experts</h3>
                <div class="columns mt-5">
                    <div class="column box" style="background: rgba(255, 221, 87,0.5)">
                        <div class="number" style="background: rgb(255, 221, 87)">
                        <b-icon icon="school" size="is-small"></b-icon>
                        </div>
                        <div>
                            <h5 class="title is-5">Expert Web Development</h5>
                            <p>Kurse und Schulungen, sowie Beratung in dieser Domäne gibt unser Experte. Von Kennenlern-Schulungen bishin zur Umschulung von Legacy Systemen zu modernen Technologien.</p>
                            <router-link to="/kontakt"><b-button type="is-primary" class="mt-2">Anfragen</b-button></router-link>
                        </div>
                    </div>
                    <div class="column box" style="background: rgb(23, 162, 184, 0.3)">
                        <div class="number" style="background: rgb(23, 162, 184)">
                        <b-icon icon="domain" size="is-small"></b-icon>
                        </div>
                        <div>
                            <h5 class="title is-5">Expert App Development</h5>
                            <p>Kurse und Schulungen, sowie Beratung in dieser Domäne gibt unser Experte. Wir unterrichten ganze Teams, die das "Mobile First" Prinzip leben. Weiterbildung von Web- zu Mobile App Developern beispielsweise.</p>
                            <router-link to="/kontakt"><b-button type="is-primary" class="mt-2">Anfragen</b-button></router-link>
                        </div>
                    </div>
                    <div class="column box" style="background: rgba(255, 221, 87,0.5)">
                        <div class="number" style="background: rgb(255, 221, 87)">
                        <b-icon icon="domain" size="is-small"></b-icon>
                        </div>
                        <div>
                            <h5 class="title is-5">Expert Data Analytics</h5>
                            <p>Kurse und Schulungen, sowie Beratung in dieser Domäne gibt unser Experte. Python für Controller, Tableau für Online Marketer...der Einsatz von Big Data und Analytics Tools ist überall möglich.</p>
                            <router-link to="/kontakt"><b-button type="is-primary" class="mt-2">Anfragen</b-button></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <section class="section mt-5">
                    <div class="columns container is-vcentered">
                        <div class="column content">
                            <h3 class="title is-5">Unser Brot & Butter Geschäft</h3>
                            Digital Themen sind häufig komplex… START.CODE Experts haben langjährige Erfahrung in den Bereichen Web Development, App Development und Data Analytics. Kontaktier uns einfach für einen ersten Beratungstermin.
                        </div>
                        <div class="column">
                            <figure class="figure">
                                <img src="../assets/img/coach-graphics.png">
                            </figure>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <Banner title="Noch Fragen?" text="Wir beantworten Fragen zu unseren Themenschwerpunkten oder dem Verfahren unseres Coaching sehr gerne persönlich. Unsere Leistungen werden von Kunde zu Kunde individuell zugeschnitten." cta="/kontakt" action="Schick uns eine Nachricht"/>
    </section>
</template>

<script>
import Nav from './Nav.vue'
import Banner from './Banner.vue'

export default {
  name: 'Coaching',
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
.box {
    background: rgba(110, 255, 219,0.3);
    margin: 1em;
    text-align: center;
    display: flex;
    position: relative;
    align-items:center;
    justify-content: center;
    padding: 2em 1em;
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
