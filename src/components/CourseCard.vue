<template>
    <div class="card">
    <header class="card-header">
        <p class="card-header-title">
            {{ title }}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
            <b-icon
                icon="view-dashboard"
                size="is-medium">
            </b-icon>
        </span>
        </a>
    </header>
    <div class="card-content">
        <div class="content columns">
            <div class="column is-one-third">
                <div class="card-image">
                    <figure class="courseImage" :style="{ 'background-image': 'url(' + picUrl + ')'}">
                    </figure>
                </div>
            </div>
            <div class="column">
                <b-tag type="is-primary" size="is-small">
                    <time v-bind:datetime="date">{{ date }}</time>
                </b-tag>
                <div class="is-size-6 content">
                    {{ desc }}
                </div>
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

export default {
  name: 'CourseCard',
  components: {
  },
  props: {
    'title': String,
    'date': String,
    'id': String,
    'desc': String,
    'price': Number,
    'picUrl': String,
    'location': String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.courseImage {
    height: 150px;
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
}
.green:hover {
  background-color: #38bed3;
}
.card-header-title {
    font-size: 1.4em;
}
</style>
