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

                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/">
                        Start
                    </router-link>
                </div>

                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/kurse">
                        Kurse
                    </router-link>
                </div>

                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/teams">
                        Für Unternehmen
                    </router-link>
                </div>

                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/blog">
                        Blog
                    </router-link>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Fragen
                    </a>

                    <div class="navbar-dropdown">

                        <router-link to="/faqs">
                            <a class="navbar-item" v-on:click="toggleMenu">
                                FAQs
                            </a>
                        </router-link>

                        <router-link to="/kurse">
                        <a class="navbar-item" v-on:click="toggleMenu">
                            Kursauswahl
                        </a>
                        </router-link>

                        <router-link to="/kontakt">
                            <a class="navbar-item" v-on:click="toggleMenu">
                                Kontakt
                            </a>
                        </router-link>

                        <hr class="navbar-divider">

                        <router-link to="/über-uns">
                            <a class="navbar-item" v-on:click="toggleMenu">
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
            // console.log('Toggle Menu!')
            this.mobileMenu = !this.mobileMenu
        }
    }
}
</script>

<style scoped>
    .navbar {
        padding: 0.5em 0.3em;
    }
    .navbar-item > a {
        color: #2a3758;
        font-weight: 800;
    }
</style>


