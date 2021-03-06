<template>
  <section>
    <Title title="Kurse" subtitle="Programmieren für Beginner"/>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
    <section class="section full">
        <b-message v-if="!this.isLoading && this.courses.length === 0" style="width: 80%; margin: auto;" size="is-large" title="Aktuell haben wir keinen Kurs geplant..." type="is-warning" aria-close-label="Close message">
          Es dauert aber nicht mehr lange! Melde dich zum Newsletter an, um Up-to-date zu bleiben.
        </b-message>
        <b-tabs v-model="filterValue" type="is-toggle" size="is-small" @input="filterCourses(Number)">
            <b-tab-item label="Alle Themen"></b-tab-item>
            <b-tab-item label="Data Science" icon="google-analytics"></b-tab-item>
            <b-tab-item label="App Development" icon="cellphone"></b-tab-item>
            <b-tab-item label="Web Development" icon="web"></b-tab-item>
        </b-tabs>
        <sequential-entrance>
          <CourseCard v-for="(course,index) in filteredCourses" v-bind:key="index" v-bind:id="course.id" v-bind:title="course.name.text" v-bind:desc="course.summary" v-bind:dateStart="course.start.utc" v-bind:dateEnd="course.end.utc" v-bind:venueId="course.venue_id" v-bind:price="course.price" v-bind:location="course.location" v-bind:picUrl="course.logo.url"/>
        </sequential-entrance>
    </section>
    <section class="section">
      <div class="container">
        <h3 class="title is-3">Kursstandorte</h3>
        <b-tabs type="is-toggle-rounded">
            <b-tab-item label="Köln">
              <div class="columns">
                <div class="column is-half">
                  <h5 class="title is-5">Startplatz Köln</h5>
                  <p class="content" style="padding-right: 20%;">
                    STARTPLATZ ist Startup Inkubator und Accelerator mit Standorten in Köln sowie Düsseldorf und Treffpunkt der rheinischen Gründerszene. Gegründet wurde er 2012 von den Geschäftsführern der Familie Gräf Holding GmbH, Dr. Lorenz und Matthias Gräf. Auf rund 4.500 qm im Kölner Mediapark und 1.900 qm im Düsseldorfer Medienhafen entstand ein Ökosystem, das aufstrebenden Startups und innovativen Unternehmen Raum zum Wachsen, Beratung und Coaching, Workshops & Events sowie Anschluss an das große Netzwerk bietet.
                  </p>
                </div>
                <div class="column is-half">
                    <div class="impressionImage course-k1">
                      <div class="impressionImage-inner course-k2"></div>
                    </div>
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Düsseldorf">
              <div class="columns">
                <div class="column is-half">
                  <h5 class="title is-5">Startplatz Düsseldorf</h5>
                  <p class="content" style="padding-right: 20%;">
                    Mehr als 200 Startups arbeiteten hier bereits an ihren Geschäftsideen, über 100 Millionen Euro wurden in sie investiert und es wurden mehr als 175 Teams im Accelerator gefördert. Gemeinsam mit Partnern aus dem Ökosystem bietet der STARTPLATZ zudem Konzernen und mittelständischen Unternehmen verschiedene Lösungsansätze aus der Startup-Welt, um die Digitalisierung und Innovationsprozesse erfolgreich umzusetzen und voranzutreiben.
                  </p>
                </div>
                <div class="column is-half">
                    <div class="impressionImage course-d1">
                      <div class="impressionImage-inner course-d2"></div>
                    </div></div>
              </div>
            </b-tab-item>
        </b-tabs>
      </div>
    </section>
    <section>
      <Banner title="Fragen zu den Kursen?" text="Suche in den am meisten gestellten Fragen zu unseren Kursen nach Antworten." cta="/faqs" action="FAQs"/>
    </section>
  </section>
</template>

<script>
import CourseCard from './CourseCard.vue'
import Title from './Title.vue'
import Banner from './Banner.vue'
import axios from 'axios'

export default {
  name: 'Courses',
  metaInfo: {
    htmlAttrs: {
      lang: 'de',
      amp: undefined
    },
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'App & Web Development, Data Analytics',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Bei START.CODE kannst du alles rund um die Themen Web Development, App Development und Data Analytics lernen - praktisch und konkret! Unsere Kurse sind für Anfänger ausgelegt und verhelfen dir zu deinem digitalen Skillset.' }
    ]
  },
  components: {
    CourseCard,
    Title,
    Banner
  },
  data(){
    return {
      courses: [],
      filteredCourses: [],
      isLoading: true,
      isFullPage: true,
      filterValue: 0
    }
  },
  props: {
  },
  mounted(){
    // in the future maybe we secure the key, but right now it's about public events, so no need to secure in MVP
    axios
      .get('https://www.eventbriteapi.com/v3/organizations/334588197527/events/?token=CNL4QBETWEIPIIRYNLJ5')
      .then(response => {
        // console.log('API Response: ', response)
        this.courses = response.data.events.filter(course => course.status === 'live')
        this.courses = this.courses.map(el => {
          let cat = this.findCategory(el)
          el.category = cat
          return el
        })
        this.filterCourses()
        this.isLoading = false;
      })
  },
  methods: {
    findCategory: function(obj){
      let title = obj.name.text
      // console.log(title)
      let matchW = title.search(/web/i);
      let matchA = title.search(/app/i);
      let matchD = title.search(/data/i);
      if(matchW > -1){
        return "Web Development"
      } else if(matchA > -1){
        return "App Development"
      } else if(matchD > -1){
        return "Data Science"
      } else {
        return "No Match"
      }
    },
    filterCourses: function(match){
      if(this.filterValue === 0){
        this.filteredCourses = this.courses.filter(el => el)
      } else if(this.filterValue === 1){
        this.filteredCourses = this.courses.filter(el => el.category === "Data Science")
      } else if(this.filterValue === 2){
        this.filteredCourses = this.courses.filter(el => el.category === "App Development")
      } else if(this.filterValue === 3){
        this.filteredCourses = this.courses.filter(el => el.category === "Web Development")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.full {
  min-height: 50vh;
}
.tabs.is-toggle li.is-active a {
  background-color: #2a3758;
  border-color: #2a3758;
}
figure {
      box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
      transition: 0.6s;
}
.impressionImage {
  height: 300px;
  background-size: cover;
  background-position: center;
  filter: grayscale(10%);
  position: relative;
  border-radius: 5px;
}
.impressionImage-inner {
  width: 50%;
  height: 150px;
  background-size: cover;
  background-position: center;
  filter: grayscale(10%);
  position: absolute;
  bottom: -20%;
  left: -10%;
  border-radius: 5px;
}
.course-d2 {
    background-image: url('https://www.startplatz.de/wp-content/uploads/2018/05/design_thinking_im_startplatz_duesseldorf.jpg');
}
.course-d1 {
  background-image: url('../assets/img/course1.jpg');
}
.course-k1 {
  background-image: url('../assets/img/course2.jpg');
}
.course-k2 {
  background-image: url('../assets/img/course3.jpg');
}
figure:hover {
  transform: scale(1.02);
  transition: 0.6s;
}
.tabs ul {
  justify-content: center;
}
.is-toggle-rounded ul {
  justify-content: flex-start;
}
@media (max-width: 768px){
  .card {
    width: 90% !important;
  }
  .tabs.is-small {
    font-size: .5rem
  }
}
</style>
