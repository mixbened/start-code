<template>
    <div class="card">
    <header class="card-header">
        <p class="card-header-title">
            {{ title }}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
            <b-icon
                icon="code-tags"
                size="is-medium">
            </b-icon>
        </span>
        </a>
    </header>
    <div class="card-content">
        <div class="content columns is-vcentered">
            <div class="column is-one-third">
                <div class="card-image">
                    <figure class="courseImage" :style="{ 'background-image': 'url(' + picUrl + ')'}">
                    </figure>
                </div>
            </div>
            <div class="column content" style="margin-left: 1em">
                <div>{{ desc }}</div>
                <div class="columns">
                    <div class="is-size-6 my-1 column">
                        <div v-if="formatDate(dateStart) != formatDate(dateEnd)">
                            <b-icon icon="calendar" size="is-small"></b-icon>
                            <b>{{ formatDate(dateStart) }} - {{ formatDate(dateEnd) }}</b>
                        </div>
                        <div v-if="formatDate(dateStart) === formatDate(dateEnd)">
                            <b-icon icon="calendar" size="is-small"></b-icon>
                            <b>{{ formatDate(dateStart) }}</b>
                        </div>
                        <div>
                            <b-icon icon="map-marker" size="is-small"></b-icon>
                            <b>{{ location }}</b>
                        </div>
                        <div v-if="formatDate(dateStart) != formatDate(dateEnd)">
                            <b-icon icon="clock-outline" size="is-small"></b-icon>
                            <b>1.5 Stunden, 2x wöchentlich</b>
                        </div>
                        <div v-if="formatDate(dateStart) === formatDate(dateEnd)">
                            <b-icon icon="clock-outline" size="is-small"></b-icon>
                            <b>2 Stunden</b>
                        </div>
                    </div>
                </div>
                <b-taglist>
                    <b-tag class="mx-1" type="is-success" size="is-small">
                        <time>{{ tags[selectTag()] }}</time>
                    </b-tag>
                    <b-tag class="mx-1" type="is-info" size="is-small">
                        <time>{{ tags[selectTag()] }}</time>
                    </b-tag>
                    <b-tag class="mx-1" type="is-danger" size="is-small">
                        <time>{{ tags[selectTag()] }}</time>
                    </b-tag>
                </b-taglist>
            </div>
        </div>
    </div>
    <footer class="card-footer">
        <router-link v-bind:to="'/kurs/'+id" class="card-footer-item blue">Weitere Infos</router-link>
        <router-link v-bind:to="'/kurs/'+id" class="card-footer-item green">Anmeldung</router-link>
    </footer>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CourseCard',
  components: {
  },
  data(){
      return {
          location: "",
          tags: ["#software", "#learning", "#parttime", "#code", "#einfachmalmachen", "#tech", "#justdoit", "#learntocode", "#immerweiter"]
      }
  },
  props: {
    'title': String,
    'dateStart': String,
    'dateEnd': String,
    'id': String,
    'desc': String,
    'price': Number,
    'picUrl': String,
    'venueId': String
    },
    methods: {
        formatDate: function(str){
            let date = str.substring(0,10)
            let parts = date.split("-")
            parts.reverse()
            let newDate = parts.join(".")
            return newDate
        },
        selectTag: function(){
            let tags = this.tags
            let number = Math.floor(Math.random() * this.tags.length-1) + 1
            // let tag = tags[number]
            // this.tags.splice(number,1)
            return number
        }
    },
    mounted() {
        axios.get(`https://www.eventbriteapi.com/v3/venues/${this.venueId}/?token=PMPLOOAVBFA3TSHBWX4U`)
        .then(response_venue => {
          // console.log('API Response Venue: ', response_venue)
          this.location = response_venue.data.name
        })
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div > b {
    margin-left: 0.5em;
}
.my-1 {
    margin: 1em 0 1em 0;
}
.mx-1 {
    margin: 0 1em;
}
.px-2 {
    padding: 0 2em 0 2em;
}
.courseImage {
    height: 200px;
    margin: 0;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    filter: grayscale(50%);
}
.card {
    width: 60%;
    margin: 5% auto;
}
.blue {
    background-color: #2a3758;
    color: white;
    font-weight: 800;
}
.blue:hover {
  background-color: #354b82;
}
.green {
    background-color: #17a2b8;
    color: white;
    font-weight: 800;
    flex: 2;
}
.green:hover {
  background-color: #38bed3;
}
.card-header-title {
    font-size: 1.4em;
}
div.content {
    padding: 0.5em 0;
}
</style>
