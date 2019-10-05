<template>
    <div class="card postCard">
        <router-link to="/article/">
            <div class="postImage" :style="{ 'background-image': 'url(' + imageUrl + ')'}"></div>
            <section class="section">
                <h2 class="title is-2">{{ title }}</h2>
                <p class="content" v-html="content"></p>
            </section>
        </router-link>
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
      author: String
    },
    data(){
        return {
            imageUrl: ''
        }
    },
    methods: {
        getImage: function(){
            // get first image from blog
            let img = document.querySelector('.separator > a > img')
            let source = img['attributes']['src'].value
            this.imageUrl = source
            img.remove()
        }
    },
    mounted(){
        this.getImage()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postImage {
    background-size: cover;
    width: 100%;
    height: 200px;
}
.postCard {
    width: 60%;
    margin: auto;
}
</style>
