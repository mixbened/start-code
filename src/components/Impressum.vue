<template>
  <section>
    <Title title="Impressum" subtitle=""/>
    <section class="section">
        <div class="container has-text-centered">
            Firmenwortlaut: c/o Familie Gräf Holding GmbH<br>
            Firmensitz: Dietrich-Bonhoeffer Str. 5, D-50354 Hürth<br>
            Email: info@start-code.de
        </div>
    </section>
  </section>
</template>

<script>
import Title from './Title.vue'

export default {
  name: 'Impressum',
  components: {
      Title
  },
  data(){
    return {
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>