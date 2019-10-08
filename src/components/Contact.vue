<template>
    <section>
        <section class="section">
            <Title title="Kontakt" subtitle="Stelle uns alle deine Fragen"/>
            <section class="section">
                <div v-if="!messageSuccess" class="container small-content">
                    <div class="field">
                        <label class="label">Name*</label>
                            <div class="control">
                                <b-input type="text" placeholder="Gib deinen Namen ein" v-model="name"></b-input>
                            </div>
                    </div>
                    <b-field label="Email*">
                            <b-input type="email"
                                value=""
                                maxlength="30"
                                placeholder="Gib deine Email-Adresse ein"
                                >
                            </b-input>
                    </b-field>

                    <div class="field">
                    <label class="label">Subject*</label>
                        <div class="control">
                            <div class="select">
                                <select v-model="subject">
                                    <option selected>Frage zu einem Kurs</option>
                                    <option>Frage zu den Terminen</option>
                                    <option>Anfrage Team-Workshop</option>
                                    <option>Sonstiges</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                    <label class="label">Deine Nachricht an uns</label>
                        <div class="control">
                            <b-input type="textarea" placeholder="Nachricht" v-model="text" maxlength="100"></b-input>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                            <input type="checkbox" v-model="dataPrivacy">
                            Ich bestätige die <router-link to="/data-privacy">Datenschutzbestimmungen</router-link> gelesen zu haben.
                            </label>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-primary" @click="sendMessage">Senden</button>
                        </div>
                    </div>
                </div>
            </section>
            <b-message v-if="messageSuccess" style="width: 80%; margin: auto;" size="is-large" title="Danke für deine Nachricht" type="is-success" has-icon aria-close-label="Close message">
                Wir haben deine Nachricht erhalten, und werden sie so schnell wie möglich beantworten. In ganz dringenden Fällen, kannst du uns auch anrufen.
            </b-message>
            <b-message v-if="warning" style="width: 80%; margin: auto;" size="is-small" title="Datenschutz" type="is-warning" has-icon aria-close-label="Close message">
                Bitte akzeptiere die Datenschutzbestimmungen, damit wir deine Anfrage bearbeiten können.
            </b-message>
        </section>
        <section class="section">
                <section class="container small-content">
                    <h3 class="title is-3">Deine Ansprechpartnerin</h3>
                    <div class="columns">
                        <div class="column">
                            <h5 class="title is-5">Christine Schlütz</h5>
                            <p class="content">Program Manager START.CODE</p>
                            <p class="content">Email: christine@start-code.de</p>
                        </div>
                        <figure class="image">
                            <img src="https://www.startplatz.de/wp-content/uploads/2018/11/christine_schluetz_startplatz.png" alt="christine schlütz">
                        </figure>
                    </div>
                </section>
        </section>
    </section>
</template>

<script>
import Title from './Title'
import axios from 'axios'

export default {
  name: 'Contact',
  components: {
      Title
  },
  data(){
      return {
          name: '',
          mail: '',
          subject: '',
          text: '',
          messageSuccess: false,
          dataPrivacy: false,
          warning: false
      }
  },
  props: {
    },
  methods: {
      // zapier blocks request with body value with cors policy, bc axios sets a content type. Workaround is sending it as querystring
      sendMessage: function(){
          if(this.dataPrivacy){              
              axios.get('https://hooks.zapier.com/hooks/catch/4921789/o2d5p6v/', {params: {name: this.name, mail: this.mail,subject: this.subject, text: this.text}})
              .then(res => {
                 //  console.log('Response: ', res)
                 if(res.data.status == "success"){
                     this.messageSuccess = true;
                     setTimeout(() => {
                         this.$router.push('/')
                     }, 10000)
                 } else {
                     
                 }
              })
          } else {
                this.warning = true
                setTimeout(() => {
                    this.warning = false
                }, 5000)
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
figure.image {
    box-shadow: none;
    width: 200px;
}
.banner {
    background-color: #17a2b8;
}
.select:not(.is-multiple):not(.is-loading)::after {
    border-color: #17a2b8;
}
.small-content {
    padding: 0 20%
}
@media (max-width: 768px){
    .small-content {
        padding: 0 5%;
    }
}
</style>