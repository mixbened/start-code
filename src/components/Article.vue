<template>
    <section class="section">
        <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
        <div class="container mt-5">
            <h1 class="title is-1 has-text-centered">{{ post.title }}</h1>
            <p class="content" v-html="post.content"></p>
            <nav class="level is-mobile">
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Author</p>
                <div class="columns">
                    <div class="column">
                        <img class="author" :alt="post.author.displayName" :src="post.author.image.url">
                    </div>
                    <div class="column">
                        {{ post.author.displayName }}
                    </div>
                </div>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Veröffentlicht am</p>
                <b-tag type="is-info">{{ post.published.substring(0,10) }}</b-tag>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Social</p>
                <p class="content">
                    <a href="">
                    <b-icon
                        icon="facebook"
                        size="is-medium">
                    </b-icon>
                    </a>
                    <router-link to="">
                    <b-icon
                        icon="twitter"
                        size="is-medium">
                    </b-icon>
                    </router-link>
                    <router-link to="">
                    <b-icon
                        icon="medium"
                        size="is-medium">
                    </b-icon>
                    </router-link>
                </p>
                </div>
            </div>
            </nav>
            <hr>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Article',
  components: {
  },
  props: {
  },
  data(){
    return {
        post: {
            author: {
                image: {
                    url: ''
                }
            },
            published: ''
        },
        imageUrl: '',
        isFullPage: true,
        isLoading: true
    }
  },
  methods: {
        getImage: function(){
        // get first image from blog and then remove it from the dom (blogger has no title images)
        let img = document.querySelector('.separator > a > img')
        let source = img['attributes']['src'].value
        this.imageUrl = source
        img.remove()
    }
  },
  mounted(){
    const id = this.$route.params.id
    const bid = '3080711742135149867'
    const k = 'AIzaSyBnM-ZB84vipaMjRrN8zFo59QizrI1VgKg'
    axios.get(`https://www.googleapis.com/blogger/v3/blogs/${bid}/posts/${id}?key=${k}`)
      .then(res => {
        this.post = res.data
        this.isLoading = false
      })
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.author {
    border-radius: 100%;
}
.content > span {
    padding: 0 2em;
}
p.content {
    padding: 0 2em;
    font-size: 1.1em;
}
figure.image {
    box-shadow: none;
}
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
