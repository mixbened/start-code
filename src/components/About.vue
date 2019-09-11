<template>
    <section>
      <section class="section">
        <Title title="Team & Vision" subtitle="Wer wir sind und was wir tun"/>
      </section>
      <section class="section">
        <div class="container columns ">
          <div class="column is-half">
            <h3 class="title is-3">Team</h3>
            <p>Lorem Ipsum dolor sit amet</p>
          </div>
          <div class="column is-half">
          </div>
        </div>
        <b-button class="is-warning">Offene Positionen</b-button>
      </section>
      <section class="section">
        <div class="container columns">
          <div class="column">
            <h3 class="title is-3">Motivation</h3>
            <p>Wieso wir START.CODE sind</p>
          </div>
          <div class="column has-text-centered">
            <img src="https://img.icons8.com/color/96/000000/school-building.png" width="96">
          </div>
        </div>
      </section>
    </section>
</template>

<script>
import Title from './Title'

export default {
  name: 'About',
  components: {
    Title
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
