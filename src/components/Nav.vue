<template>
    <nav class="navbar" role="navigation" aria-label="main navigation" >

        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
            <img alt="Vue logo" src="../assets/logo.png">
            </router-link>

            <a v-on:click="toggleMenu" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" v-bind:class="{'navbar-menu': true, 'is-active': mobileMenu}">
            <div class="navbar-start">

                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/kurse">
                        Kurse
                    </router-link>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Für Unternehmen
                    </a>

                    <div class="navbar-dropdown">

                        <router-link to="/fuer-unternehmen">
                            <a class="navbar-item" v-on:click="toggleMenu">
                                Übersicht
                            </a>
                        </router-link>

                        <router-link to="/code-in-one-day">
                        <a class="navbar-item" v-on:click="toggleMenu">
                            CODE.INONEDAY
                        </a>
                        </router-link>

                        <router-link to="/coaching">
                            <a class="navbar-item" v-on:click="toggleMenu">
                                Coaching
                            </a>
                        </router-link>
                    </div>
                </div>

                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/blog">
                        News
                    </router-link>
                </div>

                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/partner">
                        Partner
                    </router-link>
                </div>
                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/faqs">
                        FAQ
                    </router-link>
                </div>
                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/kontakt">
                        Kontakt
                    </router-link>
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
            mobileMenu: false,
        }
    },
    props: {
        change: Boolean
    },
    methods: {
        toggleMenu: function(){
            // console.log('Toggle Menu!')
            this.mobileMenu = !this.mobileMenu
        },
        // changeBackground: function(e){
        //     if(e.scrollPercent === 0){
        //         console.log('See!')
        //         this.transparent = true
        //         if(this.$route.path === '/'){
        //             this.start = true
        //         } else {
        //             this.start = false
        //         }
        //     } else {
        //         console.log('Dont See!')
        //         this.transparent = false
        //     }
        // }
    }
}
</script>

<style scoped>
    /* .transparentBg {
        background: transparent !important;
        transition: 0.5s;
    } */
    /* .whiteColor {
        color: white !important;
    } */
    .navbar {
        position: fixed;
        width: 100%;
        background: white;
    }
    .navbar-item > a {
        color: #17a2b8;
        font-weight: 800;
    }

</style>
