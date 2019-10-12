<template>
    <nav class="navbar" :class="{transparentBg: transparent, whiteColor: start}" role="navigation" aria-label="main navigation"  v-view="changeBackground">
        
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/" :class="{whiteColor: start && transparent}">
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
                    <router-link to="/kurse" :class="{whiteColor: start && transparent}">
                        Kurse
                    </router-link>
                </div>

                <div class="navbar-item has-dropdown is-hoverable" :class="{whiteColor: start && transparent}">
                    <a class="navbar-link" :class="{whiteColor: start && transparent}">
                        Für Unternehmen
                    </a>

                    <div class="navbar-dropdown">

                        <router-link to="/teams">
                            <a class="navbar-item" v-on:click="toggleMenu" :class="{whiteColor: start && transparent}">
                                Übersicht
                            </a>
                        </router-link>

                        <router-link to="/ciod">
                        <a class="navbar-item" v-on:click="toggleMenu" :class="{whiteColor: start && transparent}">
                            CODE.INONEDAY
                        </a>
                        </router-link>

                        <router-link to="/coaching">
                            <a class="navbar-item" v-on:click="toggleMenu" :class="{whiteColor: start && transparent}">
                                Coaching
                            </a>
                        </router-link>
                    </div>
                </div>

                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/blog" :class="{whiteColor: start && transparent}">
                        News
                    </router-link>
                </div>

                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/partner" :class="{whiteColor: start && transparent}">
                        Partner
                    </router-link>
                </div>
                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/faqs" :class="{whiteColor: start && transparent}">
                        FAQ
                    </router-link>
                </div>
                <div class="navbar-item" v-on:click="toggleMenu">
                    <router-link to="/kontakt" :class="{whiteColor: start && transparent}">
                        Kontakt
                    </router-link>
                </div>

            </div>

            <div class="navbar-end">

                <div class="navbar-item">
                    <div class="buttons">

                    <a class="button is-link">
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
            transparent: true,
            start: true
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


