<template>
  <div id="app">
    <div class="circle small"></div>
    <div class="circle medium1"></div>
    <div class="circle medium2"></div>
    <div class="circle medium3"></div>
    <div class="circle big"></div>
    <Nav/>
    <hr>
    <div style="min-height: 100vh; margin-bottom: 3em;">
      <router-view></router-view>
    </div>
    <router-link to="/kontakt">
      <b-button v-if="$route.path !== '/kontakt'" class="is-warning contact">Kontakt</b-button>
    </router-link>
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
body, .title {
  color: #323232;
  font-family: 'Montserrat';
  position: relative;
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
.navbar-item > a:hover {
  color: #17a2b8;
}
.navbar-item > a:focus {
  color: #17a2b8;
}
.navbar-link:not(.is-arrowless)::after {
  border-color: #17a2b8;
}
.navbar-item img {
  max-height: 3em;
}
h6 {
  text-decoration: #17a2b8 underline;
}
#app {
  	/* background-image: linear-gradient(to bottom right, #ffffff, #eee); */
    position: relative;
    overflow: hidden;
}
.title {
  word-break: normal;
}
.circle {
	background-image: linear-gradient(to top right, #ffffff, #eee);
	border-radius: 50%;
	position: absolute;
  z-index: -1;
}

.circle.small {
	top: 30%;
	left: 20%;
	width: 100px;
	height: 100px;
}

.circle.medium1 {
	background-image: linear-gradient(to bottom left, #ffffff, #eee);
	bottom: 10%;
	left: 0;
	width: 200px;
	height: 200px;
}
.circle.medium2 {
	background-image: linear-gradient(to bottom left, #ffffff, #eee);
	bottom: 50%;
	left: -10%;
	width: 200px;
	height: 200px;
}

.circle.medium3 {
	background-image: linear-gradient(to bottom left, #ffffff, #eee);
	bottom: 30%;
	right: 10%;
	width: 200px;
	height: 200px;
}
.circle.big {
	top: -100px;
	right: -50px;
	width: 400px;
	height: 400px;
}
</style>
