<template>
    <section class="section banner mt-5">
        <div class="container">
            <h2 class="title is-2">{{ title }}</h2>
            <p class="content">{{ text }}</p>
            <router-link :to="cta"><b-button rounded>{{ action }}</b-button></router-link>
        </div>
    </section>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Banner',
  components: {
    Nav
  },
  props: ['title', 'text', 'cta', 'action']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
    background: linear-gradient(to right,#2a3758, #17a2b8);
    color: white;
    text-align: center;
}
h2 {
    color: white;
}
.banner > * .content {
    width: 50%;
    margin: 3% auto;
}
@media (max-width: 768px){
    .banner > * .content {
        width: 80%;
    }
}
</style>