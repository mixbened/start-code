<template>
    <section>
      <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered" style="padding: 2em;">
          <div class="columns">
            <div class="column">
              <h1 class="title" style="display: inline-block; position: relative; font-size: 4em; margin-top: 0.3em;">
                Digitale Skills für jeden
                <div class="underline"></div>
              </h1>
              <h3 class="title is-3">Erlerne die Skills des 21. Jahrhunderts</h3>
            </div>
          </div>
        </div>
        <div class="header-image">
          <div class="columns action-container">
            <div class="column card action-card blue-card">
              <router-link to="/kurse"><h5 class="title is-5 text-white">Kurse <b-icon icon="arrow-right" size="is-small"></b-icon> </h5></router-link>
            </div>
            <div class="column card action-card green-card">
              <router-link to="/teams"><h5 class="title is-5 text-white">Für Unternehmen <b-icon icon="arrow-right" size="is-small"></b-icon></h5></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section big-section">
      <div class="container mx-3">
        <h3 class="title is-3">Was ist START.CODE?</h3>
        <div class="columns is-vcentered fact">
          <img src="../assets/img/icons8-zusammenspiel-96.png" alt="Icon Zusammenspiel" width="50">
          <h5 class="title is-5 fact-title">Gemeinsam Programmieren lernen</h5>
        </div>
        <p class="content">START.CODE Kurse finden gemeinsam in entspannter Atmosphäre statt. Online-Anegbote sind super Möglichkeiten zum schnuppern oder falls man Themen vertiefen möchte. Im Kurs arbeitet man gemeinsam, was den Spaßfaktor erhöht und kann auch direkt vor Ort fragen klären, falls ein Thema schwerer zu verstehen ist.</p>
        <div class="columns is-vcentered fact">
          <img src="../assets/img/icons8-zusammenspiel-96.png" alt="Icon Zusammenspiel" width="50">
          <h5 class="title is-5 fact-title">Digitalkompetenz für den Arbeitsalltag</h5>
        </div>
        <p class="content">Mit den bei uns erlernten Skills, können Macher eigene digitale Lösungen entwickeln. Auch jemand, der Themen der Digitalisierung einfach besser verstehen möchte und einen Überblick bekommen möchte, sollte Coding Kurse besuchen. Wir glaube daran, dass das eigene Ausprobieren den größten Lerneffekt hat.</p>
        <div class="columns is-vcentered fact">
          <img src="../assets/img/icons8-zusammenspiel-96.png" alt="Icon Zusammenspiel" width="50">
          <h5 class="title is-5 fact-title">Technologie für jeden</h5>
        </div>
        <p class="content">Unsere Kurse sind für Anfänger konzipiert. Wir verfolgen nicht das Ziel einer klassischen IT-Schulung, bei der Vokabeln und Fachbegriffe gepaukt werden. Wir möchten Technologie für jeden greifbar machen.</p>
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
    <section class="section">
      <div class="container">
        <h3 class="title is-3">Newsletter Sign Up</h3>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
p.content {
  padding-right: 10%;
}
.some-style {
  color: white;
}
.is-one-quarter.card {
  margin: 0 auto;
}
.hero-body {
  padding: 3em 0 0 0;
  position: relative;
}
.fact {
  margin-top: 3em;
}
.hero {
  min-height: 100vh;
  position: relative;
}
.fact-title {
  margin-left: 1em;
}
.action-container {
  position: absolute;
  width: 100%;
  margin: auto;
  padding: 0 5%;
  top: -5%;
}
.action-card {
  min-height: 8em;
  padding: 2em;
  margin: auto;
}
.green-card {
  background-color: #17a2b8;
}
.blue-card {
  background-color: #2a3758;
}
.text-white {
  color: white;
}
.header-image {
  background: url('../assets/img/course1.jpg');
  background-size: cover;
  background-position: center;
  filter: grayscale(50%);
  width: 100%;
  z-index: -1;
  height: 65vh;
  margin-top: 10vh;
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
  .hero-body {
    padding: 1em 0;
  }
}
</style>
