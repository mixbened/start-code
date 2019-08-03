<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
            <img alt="Vue logo" src="../assets/logo.png">
            </a>

            <a v-on:click="toggleMenu" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" v-bind:class="{'navbar-menu': true, 'is-active': mobileMenu}">
            <div class="navbar-start">

                <router-link to="/" class="navbar-item">
                    Start
                </router-link>

                <router-link to="/kurse" class="navbar-item">
                    Kurse
                </router-link>

                <router-link to="/teams" class="navbar-item">
                    Für Teams
                </router-link>

                <a target="_blank" href="https://medium.com/start-code" class="navbar-item">
                    Know-How
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Fragen
                    </a>

                    <div class="navbar-dropdown">

                        <router-link to="/faqs">
                        <a class="navbar-item">
                            FAQs
                        </a>
                        </router-link>

                        <router-link to="/kurse">
                        <a class="navbar-item">
                            Kursauswahl
                        </a>
                        </router-link>

                        <router-link to="/kontakt">
                            <a class="navbar-item">
                                Kontakt
                            </a>
                        </router-link>

                        <hr class="navbar-divider">

                        <router-link to="/about">
                            <a class="navbar-item">
                                Über Uns
                            </a>
                        </router-link>

                    </div>

                </div>

            </div>

            <div class="navbar-end">

                <div class="navbar-item">
                    <div class="buttons">

                    <a class="button is-primary">
                        <strong>Students</strong>
                    </a>

                    </div>
                </div>

            </div>

        </div>

    </nav>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            mobileMenu: false
        } 
    },
    methods: {
        toggleMenu: function(){
            console.log('Toggle Menu!')
            this.mobileMenu = !this.mobileMenu
        }
    }
}
</script>

<style scoped>
    .navbar {
        padding: 0.5em 0.3em;
    }
</style>


