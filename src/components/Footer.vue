<template>
    <nav class="navbar is-primary footer">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="../assets/logo.png" alt="START.CODE Logo" width="112" height="28">
            </a>
        </div>
        <div class="navbar-item">
                <router-link to="/impressum" class="mx-2">Impressum</router-link>
        </div>
        <div class="navbar-item">
                <router-link to="/data-privacy" class="mx-2">Datenschutzerklärung</router-link>
        </div>
        <div class="navbar-item">
                <router-link to="/cont" class="mx-2">Contributions</router-link>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <p class="control">
                        <router-link to="/kurse">
                            <b-button type="is-primary" icon-left="book-multiple">
                                Kurse
                            </b-button>
                        </router-link>
                    </p>
                    <p class="control">
                        <router-link to="/kontakt">
                            <b-button type="is-primary" icon-left="contact-mail">
                                Kontakt
                            </b-button>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'Footer',
  components: {
  },
  props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar.is-primary {
    background: white;
    color: white;
    padding: 1em;
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
.mx-2 {
    padding: 0 2em;
}
</style>