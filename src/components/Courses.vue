<template>
  <div>
    <Title title="Kurse" subtitle="Subtitle"/>
    <CourseCard />
  </div>
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
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
