<template>
    <section>
      <section class="section">
        <div class="card courseContainer">
          <div class="hero" style="background: url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60') center">
            <h2 class="title is-2" style="color: white;">{{ course.title }}</h2>
            <h6 class="title is-6" style="color: white;">{{ course.date }}, {{ course.location }}</h6>
          </div>
          <div class="container content">
            <div class="columns">
              <div class="column is-three-quarter steps">
                <h4 class="title is-4">Was wird im Kurs gelehrt?</h4>
                <p class="content"></p>
                <h4 class="title is-4">Für wen ist der Kurs gedacht?</h4>
                <p class="content"></p>
                <h4 class="title is-4">Was benötige ich für den Kurs?</h4>
                <p class="content"></p>
                <h4 class="title is-4">Was kann ich nach dem Kurs?</h4>
                <p class="content"></p>
              </div>
              <div class="column is-one-quarter info">
                <h6 class="title is-6">Instructor</h6>
                <h6 class="title is-6">Kursort</h6>
                <h6 class="title is-6">Facts</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
</template>

<script>

export default {
  name: 'CourseCart',
  components: {
  },
  data(){
    return {
      course: {
        title: "Frontend Developer",
        desc: "Short Description",
        longDesc: "Lorem Ipsum",
        date: "26.10.2019",
        price: 999,
        picUrl: "",
        location: "Startplatz Köln"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.courseContainer {
  min-height: 100vh;
  margin: 2% 10%;
}
.hero {
  width: 100%;
  min-height: 25vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
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
</style>