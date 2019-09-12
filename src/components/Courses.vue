<template>
  <section>
    <Title title="Kurse" subtitle="Subtitle"/>
    <section class="section">
        <CourseCard v-for="(course,index) in courses" v-bind:key="index" v-bind:id="course.id" v-bind:title="course.title" v-bind:desc="course.desc" v-bind:picUrl="course.picUrl" v-bind:date="course.date" v-bind:price="course.price" v-bind:location="course.location"/>
    </section>
    <section class="section">
      <div class="container">
        <h3 class="title is-3">Kursstandorte</h3>
        <b-tabs type="is-toggle-rounded">
            <b-tab-item label="Köln">
              <div class="columns">
                <div class="column is-half">
                  <h5 class="title is-5">Startplatz Köln</h5>
                  <p class="content"></p>
                </div>
                <div class="column is-half">
                  <figure class="image">
                    <img src="../assets/img/course1.jpg" alt="Startplatz Köln">
                  </figure>
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Düsseldorf">
              <div class="columns">
                <div class="column is-half">
                  <h5 class="title is-5">Startplatz Düsseldorf</h5>
                  <p class="content"></p>
                </div>
                <div class="column is-half">
                  <figure class="image">
                    <img src="../assets/img/course1.jpg" alt="Startplatz Köln">
                  </figure>
                </div>
              </div>
            </b-tab-item>
        </b-tabs>
      </div>
    </section>
  </section>
</template>

<script>
import CourseCard from './CourseCard.vue'
import Title from './Title.vue'

export default {
  name: 'Courses',
  components: {
    CourseCard,
    Title
  },
  data(){
    return {
      courses: [{id:223 ,title: "Frontend Developer", desc: "In diesem Kurs werden wir mittels der Technologien HTML, CSS und JavaScript lernen, schöne Frontends im Web zu gestalten und zu programmieren.", date: "26.10.2019", price: "999", longDesc: "Lorem Ipsum"}]
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tabs.is-toggle li.is-active a {
  background-color: #2a3758;
  border-color: #2a3758;
}
figure {
      box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
      transition: 0.6s;
}

figure:hover {
  transform: scale(1.02);
  transition: 0.6s;
}
</style>
