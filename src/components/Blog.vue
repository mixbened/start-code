<template>
  <section>
    <Title title="Blog" subtitle="Infos rund um das Thema Programmieren lernen"/>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
    <section class="section">
        <ArticleCard v-for="(article,index) in posts" v-bind:key="index" v-bind:id="article.id" v-bind:title="article.title" v-bind:content="article.content" v-bind:picUrl="article.image"/>
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
    const id = '3080711742135149867'
    const k = 'AIzaSyBnM-ZB84vipaMjRrN8zFo59QizrI1VgKg'
    axios.get(`https://www.googleapis.com/blogger/v3/blogs/${id}/posts?key=${k}`)
      .then(res => {
        // console.log('API Response: ', res)
        this.posts = res.data.items
        this.isLoading = false
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
