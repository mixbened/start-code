<template>
    <div class="postCard">
            <div class="postImage" :style="{ 'background-image': 'url(' + picUrl + ')'}"></div>
            <section class="section">
                <h4 class="title is-4">{{ title }}</h4>
                <p class="content" v-html="content"></p>
                <router-link :to="{ name: 'blog', params: { id: id, name: slugTitle(title) }}"><b-button>Zum Artikel</b-button></router-link>
            </section>
    </div>
</template>

<script>

export default {
  name: 'ArticleCard',
  components: {
  },
  props: {
      title: String,
      content: String,
      author: String,
      id: String,
      picUrl: String
    },
    data(){
        return {
            imageUrl: '',
            url: ''
        }
    },
    methods: {
        withPlaceholder: function(str){
            let arr = str.split(' ')
            let slug = arr.join('-')
            // console.log('Slug', slug)
            return slug
        },
        slugTitle: function(str){
            let parts = str.split(' ')
            let filtered = parts.filter(el => el !== "-")
            // console.log(filtered)
            let slug = filtered.join('-')
            return slug
        }
    },
    mounted(){
        this.url = "/blog/" + this.id + "/" + this.withPlaceholder(this.title)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p.content {
    height: 60px;
    overflow: hidden;
}
.postImage {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
}
.postCard {
    width: 60%;
    padding: 1em;
    margin: 5% auto;
}
.wrapper {
    max-height: 100px;
    overflow: hidden;
}
</style>
