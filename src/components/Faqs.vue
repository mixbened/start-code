<template>
    <section>
        <Title title="Fragen" subtitle="Subtitle"/>
        <b-field>
            <b-input placeholder="Finde Antworten" rounded></b-input>
        </b-field>
        <section>
            <b-collapse class="card" aria-id="contentIdForA11y3">
                <div
                    open=false
                    slot="trigger" 
                    slot-scope="props"
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3">
                    <p class="card-header-title">
                        Frage
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-up' : 'menu-down'">
                        </b-icon>
                    </a>
                </div>
                <div class="card-content">
                    <div class="content">
                        Antwort auf die Frage
                    </div>
                </div>
            </b-collapse>
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
