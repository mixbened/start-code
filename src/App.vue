<template>
  <div id="app">
    <Nav/>
    <hr>
    <div style="min-height: 100vh;">
      <router-view></router-view>
    </div>
    <b-button v-if="$route.path !== '/kontakt'" class="contact is-warning">Kontakt</b-button>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
.container {
  padding: 0 2em;
}
.input:active, .input:focus, .is-active.input, .is-active.textarea, .is-focused.input, .is-focused.textarea, .select select.is-active, .select select.is-focused, .select select:active, .select select:focus, .taginput .is-active.taginput-container.is-focusable, .taginput .is-focused.taginput-container.is-focusable, .taginput .taginput-container.is-focusable:active, .taginput .taginput-container.is-focusable:focus, .textarea:active, .textarea:focus {
  border-color: #17a2b8;
}
.contact {
  position: fixed;
  bottom: 3%;
  right: 2%;
}
body, .title, .navbar-item {
  color: #323232;
  font-family: 'Montserrat';
}
a {
  color: #17a2b8;
}
hr {
  width: 98%;
  margin: 0 auto;
  background: #cdcdcd79;
  height: 1px;
}
.tag:not(body).is-primary {
    background-color: #2a3758;
}
.button.is-primary {
  background-color: #2a3758;
}
.button.is-link {
  background-color: #17a2b8;
}
.button.is-primary:hover {
  background-color: #4964a9;
}
.button.is-link:hover {
  background-color: #38bed3;
}
.navbar-link:hover {
  color: #17a2b8;
}
a.navbar-item:hover {
  color: #17a2b8;
}
a.navbar-item:focus {
  color: #17a2b8;
}
.navbar-link:not(.is-arrowless)::after {
  border-color: #17a2b8;
}
.navbar-item img {
  max-height: 3em;
}
</style>
