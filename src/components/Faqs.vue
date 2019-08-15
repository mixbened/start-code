<template>
    <section class="section">
        <Title title="Fragen" subtitle="Wie können wir dir helfen?"/>
        <b-field>
            <b-input placeholder="Finde Antworten" rounded></b-input>
        </b-field>
        <section class="section">
            <h5 class="title is-4 has-text-centered">FAQ</h5>
            <div class="questions">
                <Question title="Fragentitel" content="antwort"/>
                <Question title="Fragentitel" content="antwort"/>
            </div>
        </section>
    </section>
</template>

<script>
import Title from './Title.vue'
import Question from './Question'

export default {
  name: 'Courses',
  components: {
    Question,
    Title
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.field {
    width: 60%;
    margin: 0 auto;
}
</style>
