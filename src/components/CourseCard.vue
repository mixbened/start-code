<template>
    <div class="card">
    <header class="card-header">
        <p class="card-header-title">
            Frontend Developer
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
    <div class="card-image">
        <figure class="courseImage">
        </figure>
    </div>
    <div class="card-content">
        <div class="content">
            Short Description
        <div>
            <b-tag type="is-primary" size="is-small">
                <time datetime="2016-1-1">1 Jan 2016 - 1 Apr 2016</time>
            </b-tag>
        </div>
        </div>
    </div>
    <footer class="card-footer">
        <a href="#" class="card-footer-item">Curriculum</a>
        <a href="#" class="card-footer-item">Anmeldung</a>
    </footer>
    </div>
</template>

<script>

export default {
  name: 'CourseCart',
  components: {
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.courseImage {
    background-image: url('https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
    height: 200px;
    background-position: center;
    background-size: cover;
}
</style>
