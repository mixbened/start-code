<template>
    <section>
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
        <Banner title="Weitere Fragen?" text="Nimm direkt Kontakt zu uns auf" cta="/kontakt" action="Schick uns eine Nachricht"/>
    </section>
</template>

<script>
import Title from './Title.vue'
import Question from './Question'
import Banner from './Banner'

export default {
  name: 'Courses',
  components: {
    Question,
    Title,
    Banner
  },
  data(){
      return {
          questions: [
              {title: 'Was ist START.CODE?', content: 'START.CODE ist eine Coding Schule, wo du aktuelle Programmiersprachen in kleinen Klassen von 10-12 Leuten lernen kannst. Unsere Mission ist es IT-Skills auf eine spannende Art und Weise zu unterrichten.'},
              {title: 'Welche Skills erlerne ich mit START.CODE?', content: 'Bei uns lernst du aktuelle Coding Skills, die bei IT-Unternehmen nachgefragt werden. Unsere Coding Kurse richten sich sowohl an AnfängerInnen als auch an Fortgeschrittene.'},
              {title: 'Wer unterrichtet die START.CODE Kurse?', content: 'Die SmartNinja TrainerInnen sind IT-Profis: Sie arbeiten entweder als ProgrammiererInnen oder sind IT-Selbstständige. Sie sind erfahren und können dir Coding beibringen und dir zeigen, wie das Leben einer/s CoderIn aussieht.'},
              {title: 'Warum sollte ich das Programmieren lernen?', content: 'Digitale Skills sind heutzutage in jedem Beruf von Nutzen. Egal ob als Praktikant, Angestellter oder Gründer - mit einem Grundwissen im Programmieren bist du vielen anderen einen Schritt voraus! In unserem Kurs Web Development 1 lernst du die Basics des Programmierens und kannst für dich herausfinden, ob das Programmieren etwas für dich ist und inwieweit du deine Kenntnisse noch vertiefen möchtest. :)'},
              {title: 'Woher weiß ich, welche Programmiersprache die richtige für mich ist?', content: 'Das ist eine Frage, die sich viele am Anfang stellen. Am Ende des Tages ist es nicht entscheidend, welche Sprache du lernst, weil die Grundprinzipien des Programmierens in jeder Programmiersprache die gleichen sind. Wir unterrichten Python (im Web Development 1 Kurs), da es eine sehr Anfänger/innen-freundliche Programmiesprache ist.'},
              {title: 'Welchen Kurs soll ich besuchen?', content: 'Wenn du Coding AnfängerIn bist, solltest du das Web Development 1 zuerst besuchen, damit du herausfinden kannst, ob Programmieren überhaupt das Richtige für dich ist und ob es etwas ist, was du künftig machen willst (entweder als Hobby oder beruflich).'},
              {title: 'Ich habe keinen IT-Background, ist es das Richtige für mich?', content: 'Wenn du Anfänger bist, bist du bei uns richtig. Um die Grundlagen des Programmierens zu erlernen kannst du super den Web Development Kurs besuchen. Unser Curriculum ist so aufgebaut, dass die Folgekurse auf dem erlernten Grundwissen aufbauen und du dein Wissen in jedem Kurs erweitern kannst. :)'},
              {title: 'Ich habe keine Erfahrung im Programmieren, kann ich trotzdem teilnehmen?', content: 'Unsere Grundlagenkurse sind perfekt für Personen ohne Coding-Background. Schau Dir doch einmal den Kurs Web Development 1 an, dieser ist auf Anfänger ausgerichtet.'},
              {title: 'Ab wann darf ich an einem Kurs teilnehmen?', content: 'Normalerweise sind die Kurse für Personen ab 18 Jahren vorgesehen, solltest du aber älter als 15 Jahre alt sein, darfst du gerne an einem Kurs teilnehmen. Sprich uns hierzu auch gerne an. :)'},
              {title: 'Bekomme ich eine Teilnahmebescheinigung oder ein Zertifikat?', content: 'Natürlich stellen wir dir am Ende eines jeden Kurses eine Teilnahmebestätigung aus. :)'},
              ],
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
@media (max-width: 768px){
    .card-header-title {
        font-size: 0.8em;
    }
}
</style>
