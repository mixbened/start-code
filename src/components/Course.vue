<template>
    <section>
      <section class="section">
        <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
        <div class="card courseContainer">
          <div class="hero" :style="{ 'background-image': 'url(' + course.logo.url + ')'}">
            <h2 class="title is-2 has-text-centered" style="color: white;">{{ course.name.text }}</h2>
            <h5 class="title is-5" style="color: white;">{{ course.start.utc }}, {{ course.location }}</h5>
          </div>
          <div class="container content">
            <div class="columns">
              <div class="column is-three-quarter steps">
                <h4 class="title is-4">Was wird im Kurs gelehrt?</h4>
                <div class="container">
                  <div class="progress-line">
                    <section class="step">
                      <span class="progress-bullet"></span>
                      <b>Frontend Development</b>
                      <p class="content">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </section>
                    <section class="step">
                      <span class="progress-bullet"></span>
                      <b>Frontend Development</b>
                      <p class="content">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </section>
                    <section class="step">
                      <span class="progress-bullet"></span>
                      <b>Frontend Development</b>
                      <p class="content">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </section>
                  </div>
                </div>
                <h4 class="title is-4">Für wen ist der Kurs gedacht?</h4>
                <div class="container">
                  <p class="content">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <section class="testimonial-box columns section">
                    <div class="column is-one-third">
                      <div class="profile column"></div>
                    </div>
                    <div class="column is-two-thirds">
                      <small>
                        <i>"Ich hatte ... lorem Ipsum"</i>
                      </small>
                    </div>
                  </section>
                </div>
                <h4 class="title is-4">Was benötige ich für den Kurs?</h4>
                <div class="container">
                  <p class="content">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <h4 class="title is-4">Was kann ich nach dem Kurs?</h4>
                <div class="container">
                  <p class="content">
                    {{ course.description.text }}
                  </p>
                </div>
              </div>
              <div class="column is-one-quarter info">
                <h4 class="title is-4 has-text-centered">Facts</h4>
                <div>
                    <div class="level-item has-text-centered">
                      <div class="p-2">
                        <p class="heading">Instructor</p>
                        <img src="https://www.startplatz.de/wp-content/uploads/2019/09/steins-1566198432-1.jpeg" alt="instructor course" width="100" style="border-radius: 20%;">
                        <p class="title">Frederik Schütte</p>
                      </div>
                    </div>
                    <div class="level-item has-text-centered">
                      <div class="p-2">
                        <p class="heading">Location</p>
                        <p class="title">Startplatz Köln</p>
                      </div>
                    </div>
                    <div class="has-text-centered">
                      <div class="p-2">
                        <p class="heading">Lessons</p>
                        <p class="title">8</p>
                      </div>
                    </div>
                    <div class="level-item has-text-centered">
                      <div class="p-2">
                        <p class="heading">Lesson Duration</p>
                        <p class="title">1.5h</p>
                      </div>
                    </div>
                    <div class="level-item has-text-centered">
                      <div class="p-2">
                        <p class="heading">Preis</p>
                        <p class="title">299 €</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <h4 class="title is-4">Anmeldung</h4>
            <div id="eventbrite-widget"></div>
          </div>
          <div class="level warteliste-banner is-vcentered">
            <h3 class="title is-3" style="margin: 0; color: #2a3758">Termine passen nicht?</h3>
            <h6 class="title is-6 is-white" style="margin-right: 2em;">
              <b-button @click="toggleModal" class="is-primary">
                Warteliste
                <b-icon
                    icon="chevron-right"
                    size="is-small">
                </b-icon>
              </b-button>
            </h6>
          </div>
        </div>
      </section>
      <div v-bind:class="{'modal': true, 'is-active': warteliste }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{{ course.title }}</p>
            <button @click="toggleModal" class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <p class="content">Schreibe dich auf die Warteliste und gebe an, wann du am Kurs am liebsten teilnehmen möchtest. Wir planen zeitnah die nächsten Kurse und werden versuchen deinen Wunsch zu berücksichtigen. Wenn wir einen neuen Termin haben, melden wir uns bei dir.</p>
            <!-- Warteliste Sign up ... -->
          </section>
          <footer class="modal-card-foot">
            <button  @click="toggleModal" class="button is-success">Einschreiben</button>
            <button  @click="toggleModal" class="button">Zurück</button>
          </footer>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Course',
  components: {
  },
  data(){
    return {
      warteliste: false,
      isLoading: false,
      isFullPage: true,
      course: {
        logo: {
          url: ""
        },
        name: {
          text: ""
        },
        description: {
          text: ""
        },
        start: {
          utc: ""
        }
      }
    }
  },
  mounted(){
    // in the future maybe we secure the key, but right now it's about public events, so no need to secure in MVP
    const id = this.$route.params .id
    axios
      .get(`https://www.eventbriteapi.com/v3/events/${id}/?token=PMPLOOAVBFA3TSHBWX4U`)
      .then(response => {
        console.log('API Response: ', response)
        this.course = response.data
        this.isLoading = false;
        this.loadCheckout(response.data.id)
      })
  },
  methods: {
    toggleModal: function(){
      this.warteliste = !this.warteliste
    },
    loadCheckout: function(id){
      console.log('Load Checkout!')
      var exampleCallback = function() {
          console.log('Order complete!');
      };

      window.EBWidgets.createWidget({
          // Required
          widgetType: 'checkout',
          eventId: id,
          iframeContainerId: 'eventbrite-widget',

          // Optional
          onOrderComplete: exampleCallback,
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#eventbrite-widget {
  height: 270px !important;
}
.profile {
  width: 5em;
  height: 5em;
  border-radius: 100%;
  margin: auto;
  background-image: url('https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
}
p.title {
  font-size: 1.3em;
}
.p-2 {
  padding: 2em;
}
.progress-bullet {
  position: absolute;
  top: -0.1em;
  left: -.5em;
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
  border: 4px solid #2a3758;
  background: white;
}
.step {
  /* border: 1px solid black; */
  padding-left: 2em;
  position: relative;
  border-left: 2px solid #2a3758;
}
.step:last-child {
  border: 0;
}
.courseContainer {
  /* min-height: 100vh; */
  margin: 2% 10%;
  position: relative;
}
.hero {
  width: 100%;
  min-height: 25vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
  background-size: cover;
}
.hero:before {
  content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background: rgba(109, 109, 109, 0.5);
}
.info {
  border-left: 1px solid grey;
  padding: 3%;
}
.content {
  padding: 3%;
}
.warteliste-banner {
  background: #ffdd57;
  padding: 5%;
}
.is-white {
  color: white;
}
p.heading {
  border-bottom: 2px solid #ffdd57;
}
@media (max-width: 768px){
  .info {
    border: 0;
  }
};
</style>