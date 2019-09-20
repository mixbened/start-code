<template>
  <section>
    <Title title="Blog" subtitle="Infos rund um das Thema Programmieren lernen"/>
    <section class="section">
        Artikel
    </section>
    <section class="section">
    </section>
  </section>
</template>

<script>
import Title from './Title.vue'

export default {
  name: 'Blog',
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
