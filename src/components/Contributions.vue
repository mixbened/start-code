<template>
    <section class="section">
        <Title title="Contributions" subtitle="Quellen, welche wir auf unserer Webseite benutzen"/>
        <div class="container">
            <b-table :data="data" :columns="columns"></b-table>
        </div>
    </section>
</template>

<script>
import Title from './Title'

export default {
  name: 'Contributions',
  components: {
    Title
  },
  data(){
       return {
            data: [
                { 'id': 1, 'type': 'Icon', 'url': 'https://icons8.com/icon/20119/e-learning'}
            ],
            columns: [
                {
                    field: 'id',
                    label: 'Number',
                    numeric: true
                },
                {
                    field: 'type',
                    label: 'Type',
                },
                {
                    field: 'url',
                    label: 'Link',
                }
            ]
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>