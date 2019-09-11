<template>
  <section>
    <Title title="Kurse" subtitle="Subtitle"/>
    <section class="section">
        <CourseCard title="Frontend Developer" id="334" date="Januar 2019" desc="In unserem Data Analytics Kurs zeigen wir euch, wie ihr mit Grundlagen in Python einfach Berechnungen und Analysen mit großen Datenmengen erledigen könnt."/>
        <CourseCard title="SQL & Datenbanken" id="334" date="Januar 2019" desc="In unserem Data Analytics Kurs zeigen wir euch, wie ihr mit Grundlagen in Python einfach Berechnungen und Analysen mit großen Datenmengen erledigen könnt."/>
        <CourseCard title="Data Analytics" id="334" date="Januar 2019" desc="In unserem Data Analytics Kurs zeigen wir euch, wie ihr mit Grundlagen in Python einfach Berechnungen und Analysen mit großen Datenmengen erledigen könnt."/>
    </section>
    <section class="section">
      <div class="container">
        <h3 class="title is-3">Kurse im Startplatz Köln oder Düsseldorf</h3>
        <b-tabs type="is-toggle-rounded">
            <b-tab-item label="Köln" icon="google-photos">
              <p>Impressions</p>
            </b-tab-item>
            <b-tab-item label="Düsseldorf" icon="library-music">
              <p>Impressions</p>
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
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
