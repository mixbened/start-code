<template>
  <section>
    <Title title="Blog" subtitle="Infos rund um das Thema Programmieren lernen"/>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
    <section class="section">
        <sequential-entrance>
          <ArticleCard v-for="(article,index) in posts" v-bind:key="index" v-bind:id="article.id" v-bind:title="article.title" v-bind:content="article.content" v-bind:picUrl="images[index]"/>
        </sequential-entrance>
    </section>
  </section>
</template>

<script>
import Title from './Title.vue'
import ArticleCard from './ArticleCard.vue'
import axios from 'axios'

export default {
  name: 'Blog',
  components: {
      Title,
      ArticleCard
  },
  data(){
    return {
      posts: [],
      isFullPage: true,
      isLoading: true,
    }
  },
  props: {
  },
  mounted(){
    const id = '1782361453755391841'
    const k = 'AIzaSyB8RldXEP0uEfcKzwrl02WbiZttSdqJlPo'
    axios.get(`https://www.googleapis.com/blogger/v3/blogs/${id}/posts?key=${k}`)
      .then(res => {
        this.posts = res.data.items
        this.isLoading = false
        this.images = this.extractImages(this.posts)
      })
  },
  methods: {
    extractImages: function(list){
      // searches for the first image in string end gets URL
      let images = list.map(el => {
        let str = el.content
        let is = str.indexOf("src=")
        let rest = str.substring(is+5,)
        let ie = rest.indexOf('"')
        let url = rest.substring(0,ie)
        return url
      })
      return images
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
