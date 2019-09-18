<template>
  <section>
    <Title title="Partner & Projekte" subtitle="Wir lieben und pflegen Kooperationen"/>
    <section class="section">
        <div class="tile is-ancestor container mx-auto">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification">
                  <p class="title">Oscar GmbH</p>
                  <p class="subtitle">Partner</p>
                </article>
                <article class="tile is-child notification">
                  <p class="title">Komm IT</p>
                  <p class="subtitle">Kunde & Partner</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification">
                  <p class="title">AXA Versicherungen</p>
                  <p class="subtitle">Kunde</p>
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                  </figure>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <p class="title">Click to Success</p>
                <p class="subtitle">Partner</p>
                <div class="content">
                  <!-- Content -->
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <p class="title">Click to Success</p>
                <p class="subtitle">Partner</p>
                <div class="content">
                  <!-- Content -->
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <div class="content">
                <p class="title">Unitymedia</p>
                <p class="subtitle">Kunde & Partner</p>
                <div class="content">
                  <!-- Content -->
                </div>
              </div>
            </article>
            <article class="tile is-child notification">
              <div class="content">
                <p class="title">Unitymedia</p>
                <p class="subtitle">Kunde & Partner</p>
                <div class="content">
                  <!-- Content -->
                </div>
              </div>
            </article>
          </div>
        </div>
    </section>
    <section class="section">
    </section>
  </section>
</template>

<script>
import Title from './Title.vue'

export default {
  name: 'Partner',
  components: {
      Title
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mx-auto {
  margin: 0 auto;
}
</style>