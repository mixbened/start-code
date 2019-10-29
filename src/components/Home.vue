<template>
    <section>
      <section class="hero">
      <div class="hero-body columns is-centered is-vcentered is-desktop">
        <div class="column bg-overlay"></div>
        <div class="column" style="padding-bottom: 5%;">
            <sequential-entrance delay="1500">
            <section class="teaser">
                <h1 class="title" style="display: inline-block; position: relative; font-size: 4em; margin: 0.3em auto;color: white; font-weight: 1000">
                  Digitale Skills für Jeden
                  <!-- <div class="underline"></div> -->
                </h1>
                <h5 class="title is-5" style="color: white;">
                  Wir lehren Programmieren verständlich vor Ort.
                </h5>
                <b-button @click="scrollDown" type="is-link" rounded>Entdecken</b-button>
                <router-link to="/kurse"><b-button type="is-light" class="mx-1" rounded>Kurse</b-button></router-link>
            </section>
            </sequential-entrance>
        </div>
      </div>
    </section>
    <section class="section big-section" id="section">
      <div class="container mx-3">
        <h3 class="title is-3">Was ist START.CODE?</h3>
        <div class="columns is-vcentered fact">
          <img src="../assets/img/icons8-zusammenspiel-96.png" alt="Icon Zusammenspiel" width="50">
          <h5 class="title is-5 fact-title">Gemeinsam Programmieren lernen</h5>
        </div>
        <p class="content">START.CODE Kurse finden gemeinsam in entspannter Atmosphäre statt. Online-Anegbote sind super Möglichkeiten zum schnuppern oder falls man Themen vertiefen möchte. Im Kurs arbeitet man gemeinsam, was den Spaßfaktor erhöht und kann auch direkt vor Ort fragen klären, falls ein Thema schwerer zu verstehen ist.</p>
        <div class="columns is-vcentered fact">
          <img src="https://img.icons8.com/color/48/000000/mission-of-a-company.png" alt="Icon Zusammenspiel" width="50">
          <h5 class="title is-5 fact-title">Digitalkompetenz für den Arbeitsalltag</h5>
        </div>
        <p class="content">Mit den bei uns erlernten Skills, können Macher eigene digitale Lösungen entwickeln. Auch jemand, der Themen der Digitalisierung einfach besser verstehen möchte und einen Überblick bekommen möchte, sollte Coding Kurse besuchen. Wir glaube daran, dass das eigene Ausprobieren den größten Lerneffekt hat.</p>
        <div class="columns is-vcentered fact">
          <img src="https://img.icons8.com/color/96/000000/working-with-a-laptop.png" alt="Icon Zusammenspiel" width="50">
          <h5 class="title is-5 fact-title">Technologie für jeden</h5>
        </div>
        <p class="content">Unsere Kurse sind für Anfänger konzipiert. Wir verfolgen nicht das Ziel einer klassischen IT-Schulung, bei der Vokabeln und Fachbegriffe gepaukt werden. Wir möchten Technologie für jeden greifbar machen.</p>
      </div>
    </section>
    <section class="section big-section">
      <div class="container mx-3">
        <h3 class="title is-3">Unsere Themengebiete</h3>
        <div class="tile is-ancestor mt-5">
            <div class="tile box" style="background: rgb(0, 0, 0, 0.05)">
              <div class="number" style="background: rgb(23, 162, 184)">
                  <b-icon icon="web" size="is-small"></b-icon>
              </div>
              <div>
                <h5 class="title is-5 fact-title">Web Development</h5>
                <p class="content">Von Frontend bis Backend - Von Kennenlern-Schulungen bishin zur Umschulung von Legacy Systemen zu modernen Technologien.</p>
              </div>
            </div>
            <div class="tile box" style="background: rgb(0, 0, 0, 0.05)">
              <div class="number" style="background: rgb(23, 162, 184)">
                  <b-icon icon="google-analytics" size="is-small"></b-icon>
              </div>
              <div>
                <h5 class="title is-5 fact-title">Data Analytics</h5>
                <p class="content">Python für Controller, Tableau für Online Marketer...der Einsatz von Big Data und Analytics Tools ist überall möglich.</p>
              </div>
            </div>
            <div class="tile box" style="background: rgb(0, 0, 0, 0.05)">
              <div class="number" style="background: rgb(23, 162, 184)">
                  <b-icon icon="cellphone-iphone" size="is-small"></b-icon>
              </div>
              <div>
                <h5 class="title is-5 fact-title">Mobile App Development</h5>
                <p class="content">Wir unterrichten ganze Teams, die das "Mobile First" Prinzip leben. Weiterbildung von Web- zu Mobile App Developern beispielsweise.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
    <section class="section big-section">
      <div class="container mx-3">
        <h3 class="title is-3">Wofür interessierst du dich?</h3>
        <div class="columns">
            <div class="column box-action">
                <img alt="web development course" src="../assets/img/course1.jpg">
                <div style="padding: 1em; text-align: center">
                    <h5 class="title is-5">Kurse</h5>
                    <p>Ob Start-Up in Aussicht, eine neue Position oder einfach der Wunsch nach tiefergehendem Verständnis. Coding ist für alle!</p>
                    <router-link to="/kurse"><b-button type="is-link" class="mt-2">Zu den Kursen</b-button></router-link>
                </div>
            </div>
            <div class="column box-action">
                <img alt="web development course" src="../assets/img/course1.jpg">
                <div style="padding: 1em; text-align: center">
                    <h5 class="title is-5">Für Unternehmen</h5>
                    <p>Nicht nur Softwareentwickler profitieren von IT-Skills. Wir schlauen Ihre Mitarbeiten auf um die digitale Welt gemeinsam zu gestalten.</p>
                    <router-link to="/teams"><b-button type="is-link" class="mt-2">Für Teams</b-button></router-link>
                </div>
            </div>
        </div>
      </div>
    </section>
    <section class="section big-section">
      <div class="container">
        <h3 class="title is-3 has-text-left">Für wen ist START.CODE?</h3>
        <div class="columns section">
          <div class="is-one-quarter column card is-vcentered has-text-centered">
            <div class="card-image">
              <figure class="image is-128x128">
                <img src="../assets/img/profile-1.jpeg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title is-4">Anna</p>
                  <p class="subtitle is-6">Web Development</p>
                </div>
              </div>
              <div class="content cite">
                Für meine Projekte muss ich mich viel mit unseren Entwicklern austauschen. Um diese besser zu verstehen und sicherzustellen, dass wir nicht aneinander vorbeireden, wollte ich mich tiefer mit dem Thema beschäftigen. Toll fand ich die freundschaftliche und lockere Stimmung im Kurs - dadurch fiel es deutlich leichter nach Feierabend noch zu lernen.
              </div>
              <router-link to="/kurse">Mehr dazu</router-link>
            </div>
          </div>
          <div class="is-one-quarter card column is-vcentered has-text-centered">
            <div class="card-image">
              <figure class="image is-128x128">
                <img src="../assets/img/profile-2.jpeg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title is-4">Valentin</p>
                  <p class="subtitle is-6">Python für Beginner</p>
                </div>
              </div>
              <div class="content cite">
                Durch die Arbeit mit den verschiedenen Marketing Technologien bin ich mit APIs und Regular Expressions in Kontakt gekommen. Ich habe beschlossen einen Programmierkurs zu besuchen, um verschiedene Features nicht einfach nur stumpf anzuwenden, sondern auch die Mechaniken dahinter zu verstehen.
              </div>
              <router-link to="/kurse">Mehr dazu</router-link>
            </div>
          </div>
          <div class="is-one-quarter card column is-vcentered has-text-centered">
            <div class="card-image">
              <figure class="image is-128x128">
                <img src="../assets/img/profile-3.jpeg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title is-4">Katharina</p>
                  <p class="subtitle is-6">Code In One Day</p>
                </div>
              </div>
              <div class="content cite">
                Es wurde alles vom Trainer verständlich rübergebracht und mich hat dann überrascht, was wir alles ohn Vorwissen in der kurzen Zeot auf die Beine gestellt haben.
              </div>
              <router-link to="/kurse">Mehr dazu</router-link>
            </div>
          </div>
        </div>
        <div class="has-text-centered">
          <router-link to="/kurse"><b-button class="is-primary" icon-right="arrow-right">Kurse entdecken</b-button></router-link>
        </div>
      </div>
    </section>
    <section class="section sign-up">
      <div class="container has-text-centered">
        <h3 class="title is-3" style="color: white;"><b-icon icon="newspaper" size="is-medium" style="margin: 0 1em"></b-icon>Melde dich für den START.CODE Newsletter an!</h3>
        <div class="container">
          <form action="https://start-code.us20.list-manage.com/subscribe/post?u=e8429b1b1cc6f7df4af8fbf90&amp;id=2e53d86122" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" style="width: 50%; margin: auto" novalidate>
            <div class="columns mt-2">
            <b-field style="width: 100%;">
                <b-input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email address" required></b-input>
            </b-field>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e8429b1b1cc6f7df4af8fbf90_2e53d86122" tabindex="-1" value=""></div>
            <div style="padding: 0 1em;" class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
            <p class="content">
              <input type="checkbox" required>
              Ich stimme zu, Informationen und kommerzielle Angebote über START.CODE zu erhalten (z.B. Newsletter, die Veröffentlichung von Kurs- oder Blog-Posts, das Auslaufen von Tickets, ...) in Übereinstimmung mit der <router-link to="/data-privacy" style="color: #ffdd57;"> Datenschutzerklärung</router-link>.
            </p>
          </form>
        </div>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  props: {
  },
  data(){
    return {
      bg: true
    }
  },
  methods: {
    scrollDown: function(){
      document.getElementById('section').scrollIntoView({behavior: 'smooth'})
    },
    handleScroll: function(event) {
      let top = document.scrollingElement.scrollTop
      if(top > 100){
        this.$emit('top', false)
      } else {
        this.$emit('top', true)
      }
    }
  },
  created () {
      this.$emit('top', true)
      window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
      this.$emit('top', false)
      window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.place {

}
.box-action {
  border: 1px solid rgb(42, 55, 88, 0.2);
  padding: 0;
  margin: 5%;
  text-align: center;
  /* color: white; */
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
.box {
    background: rgba(110, 255, 219,0.3);
    margin: 1em;
    text-align: center;
    display: flex;
    position: relative;
    justify-content: center;
    padding: 2em 1em;
}
.mt-5 {
  margin-top: 5em;
}
.mt-2 {
  margin-top: 2em;
}
.bg-overlay {
  position: absolute;
  top: 0;
  background-color: rgba(42, 55, 88, 0.4);
  height: 100%;
  width: 100%;
}
.teaser {
  width: 100%;
  text-align: center;
}
.mx-1 {
  margin: 0 1em;
}
.sign-up {
  background-color: rgb(23, 162, 184);
  color: white;
}
figure.image {
  margin: auto;
  border-radius: 100%
}
figure.image > img {
    border-radius: 100%
}
.cite {
  font-size: 0.7em;
  font-style: italic;
}
.big-section {
  padding: 8rem 1.5rem;
}
.teaser > p {
  padding: 2% 15% 0 0;
}
p.content {
  max-width: 1023px;
}
.some-style {
  color: white;
}
.is-one-quarter.card {
  margin: 0 auto;
}
.hero-body {
  position: relative;
  background-image: url('../assets/img/course1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 3%;
  min-height: 100vh;
  display: flex;
}
.fact {
  margin-top: 3em;
}
.hero {
  position: relative;
}
.fact-title {
  margin-left: 1em;
}
.action-container {
  width: 100%;
  margin: auto;
}
.action-card {
  min-height: 6em;
  padding: 1em;
  width: 100% !important;
}
.green-card {
  background-color: #17a2b8;
}
.blue-card {
  background-color: rgb(42, 55, 88);
}
.text-white {
  color: white;
}
@media (max-width: 768px){
  .head-title {
    font-size: 2em;
  }
  .fact {
    text-align: center;
  }
  p {
    text-align: center;
  }
  h1 {
    font-size: 2em !important;
  }
  .teaser > h1 {
    font-size: 3em !important;
  }
  h3 {
    font-size: 1em !important;
  }
  .hero-body {
    padding: 1em 0;
    display: flex;
  }
  .hero-body > .container {
    padding: 0 1em !important;
  }
  .action-card {
    min-height: 0;
    font-size: 0.6em !important;
  }
  .validate {
    width: 80% !important;
  }
  .column.box {
    margin-top: 20%;
  }
}
</style>
