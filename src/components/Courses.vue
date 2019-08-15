<template>
  <div>
    <Title title="Kurse" subtitle="Subtitle"/>
    <CourseCard title="Frontend Developer" id="334" date="Januar 2019"/>
    <CourseCard title="SQL & Datenbanken" id="334" date="Januar 2019"/>
    <CourseCard title="Data Analytics" id="334" date="Januar 2019" desc="In unserem Data Analytics Kurs zeigen wir euch, wie ihr mit Grundlagen in Python einfach Berechnungen und Analysen mit großen Datenmengen erledigen könnt."/>
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
