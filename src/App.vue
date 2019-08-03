<template>
  <div id="app">
    <Nav/>
    <hr>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>
body, .title, .navbar-item {
  color: #323232;
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
.button.is-primary:hover {
  background-color: #4964a9;
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
</style>
