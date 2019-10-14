<template>
  <div id="app">
    <div class="circle small"></div>
    <div class="circle medium1"></div>
    <div class="circle medium2"></div>
    <div class="circle medium3"></div>
    <div class="circle big"></div>
    <Nav />
    <!-- <hr> -->
    <div style="margin-top: 2em; min-height: 95vh;">
      <router-view v-on:change-bg="doSomething"></router-view>
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
  },
  methods: {
    doSomething: function(){
      console.log('Empty')
    }
  },
  data(){
    return {
    }
  }
}
</script>

<style>
.mt-5 {
  margin-top: 5em;
}
.mt-2 {
  margin-top: 2em;
}
.is-3 {
  position: relative;
  display: inline-block;
}
.container {
  padding: 0 2em;
}
.input:active, .input:focus, .is-active.input, .is-active.textarea, .is-focused.input, .is-focused.textarea, .select select.is-active, .select select.is-focused, .select select:active, .select select:focus, .taginput .is-active.taginput-container.is-focusable, .taginput .is-focused.taginput-container.is-focusable, .taginput .taginput-container.is-focusable:active, .taginput .taginput-container.is-focusable:focus, .textarea:active, .textarea:focus {
  border-color: rgb(23, 162, 184);
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
.f-white {
  color: white;
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
    background-color: rgb(42, 55, 88);
}
.is-space-between {
  justify-content: space-between;
  flex-direction: column;
  padding: 0 20%;
}
.button.is-primary {
  background-color: #2a3758;
}
.button.is-link {
  background-color: #17a2b8;
}
.button.is-primary:hover {
  background-color: #354b82;
}
.button.is-link:hover {
  background-color: #38bed3;
}
.navbar-link:hover {
  color: #17a2b8;
  background-color: transparent;
}
.navbar-item > a:hover {
  color: #17a2b8;
}
.navbar-item.has-dropdown:hover {
  background: transparent;
}
.navbar-item > a:focus {
  color: #17a2b8;
  background-color: transparent;
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
.title, .subtitle {
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
iframe {
  height: 100% !important;
}
.underline {
  height: .08em;
  width: 100%;
  background: white;
  position: absolute;
  bottom: -.2em;
  animation-name: underline;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-delay: 1s;
  animation-direction: alternate;
}
@media (max-width: 768px){
  .section {
    padding: 1em 0;
  }
  .container {
    padding: 0 0.5em;
  }
  .container.header-line {
    width: 100% !important;
  }
  .title.is-2 {
    font-size: 2em !important;
  }
  .title.is-3 {
    font-size: 1.5em !important;
  }
  .hero-body {
    padding: 0;
  }
  .mt-5 {
    margin-top: 2em;
  }
  p.content {
    padding: 0;
    font-size: 0.8em;
  }
  div.content {
    font-size: 0.8em;
  }
}
@keyframes underline {
  0% {width: 0%}
  60% {width: 100%}
  100% {width: 100%}
}
</style>
