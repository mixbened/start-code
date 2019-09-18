<template>
    <section>
      <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-three-quarters">
              <h1 class="title" style="">
                Digitale Skills <br> für jeden.
              </h1>
              <div class="columns section">
                <div class="column card action-card blue-card">
                  <router-link to="/teams"><h5 class="title is-5 text-white">Kurse <b-icon icon="arrow-right" size="is-small"></b-icon></h5></router-link>

                </div>
                <div class="column card action-card green-card">
                  <router-link to="/teams"><h5 class="title is-5 text-white">Für Unternehmen <b-icon icon="arrow-right" size="is-small"></b-icon></h5></router-link>
                </div>
              </div>
            </div>
            <div class="column is-one-quarter">
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
.fact {
  margin-top: 3em;
}
.hero {
  min-height: 100vh;
}
.fact-title {
  margin-left: 1em;
}
.action-card {
  min-height: 8em;
  padding: 2em;
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
}
</style>
