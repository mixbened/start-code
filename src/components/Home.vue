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
            <div class="column card action-card blue-card box">
              <router-link to="/kurse"><h5 class="title is-3 text-white">Kurse <b-icon icon="arrow-right" size="is-medium"></b-icon> </h5></router-link>
            </div>
            <div class="column card action-card green-card box">
              <router-link to="/teams"><h5 class="title is-3 text-white">Für Unternehmen <b-icon icon="arrow-right" size="is-medium"></b-icon></h5></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h3 class="title is-3">Was ist START.CODE?</h3>
        <div class="columns is-vcentered fact">
          <img src="../assets/img/icons8-zusammenspiel-96.png" alt="Icon Zusammenspiel" width="50">
          <h5 class="title is-5 fact-title">Gemeinsam Programmieren lernen</h5>
        </div>
        <p>Lorem Ipsum dolor sit amet</p>
        <div class="columns is-vcentered fact">
          <img src="../assets/img/icons8-zusammenspiel-96.png" alt="Icon Zusammenspiel" width="50">
          <h5 class="title is-5 fact-title">Gemeinsam Programmieren lernen</h5>
        </div>
        <p>Lorem Ipsum dolor sit amet</p>
        <div class="columns is-vcentered fact">
          <img src="../assets/img/icons8-zusammenspiel-96.png" alt="Icon Zusammenspiel" width="50">
          <h5 class="title is-5 fact-title">Gemeinsam Programmieren lernen</h5>
        </div>
        <p>Lorem Ipsum dolor sit amet</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h3 class="title is-3 has-text-left">Für wen ist START.CODE?</h3>
        <div class="columns section">
          <div class="is-one-quarter column card is-vcentered has-text-centered">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">Web Development</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a href="#">Code In One Day</a>
              </div>
            </div>
          </div>
          <div class="is-one-quarter card column is-vcentered has-text-centered">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">Python für Beginner</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a href="#">Code In One Day</a>
              </div>
            </div>
          </div>
          <div class="is-one-quarter card column is-vcentered has-text-centered">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">Code In One Day</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a href="#">Code In One Day</a>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/kurse"><b-button class="is-primary" icon-right="arrow-right">Kurse entdecken</b-button></router-link>
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
.some-style {
  color: white;
}
.is-one-quarter.card {
  margin: 0 auto;
}
.hero-body {
  padding-bottom: 0;
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
