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
                    <figure class="courseImage">
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
        <a v-bind:href="'/kurs/'+id" class="card-footer-item">Syllabus</a>
        <a v-bind:href="'/kurs/'+id" class="card-footer-item">Anmeldung</a>
    </footer>
    </div>
</template>

<script>

export default {
  name: 'CourseCart',
  components: {
  },
  props: {
    'title': String,
    'date': String,
    'id': Number,
    'desc': String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.courseImage {
    background-image: url('https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
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
</style>
