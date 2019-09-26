<template>
    <section>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h2 style="color: white;" class="title has-text-centered">
                    Code In One Day
                    </h2>
                    <h2 style="color: white;" class="subtitle has-text-centered">
                    Digital denken und Digital umsetzen
                    </h2>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <section class="section mt-5">
                    <div class="columns container is-vcentered">
                        <div class="column content p-2">
                            <h3 class="title is-5">Was ist CODE IN ONE DAY</h3>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
                <section class="section mt-5">
                    <div class="columns container is-vcentered">
                        <div class="column content p-2">
                            <h3 class="title is-5">Das bringt CODE IN ONE DAY</h3>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
        <Banner title="Noch Fragen?" text="Wir beantworten Fragen zu unseren Themenschwerpunkten oder dem Verfahren unseres Coaching sehr gerne persönlich. Unsere Leistungen werden von Kunde zu Kunde individuell zugeschnitten." cta="/kontakt" action="Schick uns eine Nachricht"/>
    </section>
</template>

<script>
import Nav from './Nav.vue'
import Banner from './Banner.vue'


export default {
  name: 'COID',
  components: {
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
