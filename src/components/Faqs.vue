<template>
    <section class="section">
        <Title title="Fragen" subtitle="Wie können wir dir helfen?"/>
        <b-field>
            <b-input placeholder="Finde Antworten" v-on:input="searchQuestion" rounded></b-input>
        </b-field>
        <section class="section">
            <h5 class="title is-4 has-text-centered">FAQ</h5>
            <div class="questions">
                <Question v-if="!winner" v-for="(question,index) in questions" v-bind:key="index" v-bind:title="question.title" v-bind:content="question.content"/>
                <Question v-if="winner" v-bind:title="winner.title" v-bind:content="winner.content"/>
            </div>
        </section>
    </section>
</template>

<script>
import Title from './Title.vue'
import Question from './Question'

export default {
  name: 'Courses',
  components: {
    Question,
    Title
  },
  data(){
      return {
          questions: [{title: 'Question Title', content: 'Lorem Ipsum'},{title: 'Milk Title', content: 'Lorem Ipsum'}],
          winner: null
      }
  },
  methods: {
      searchQuestion: function(q){
            this.winner = null
          if(q.length > 3){
            this.questions.forEach((element,i) => {
                let title = element.title
                let re = new RegExp(q,"i");
                let result = title.search(re)
                //console.log('Result ', title, result)
                if(result >= 0){
                    this.winner = this.questions[i]
                    //console.log("Set new winner!")
                }
            });
          }
      }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.field {
    width: 60%;
    margin: 0 auto;
}
</style>
