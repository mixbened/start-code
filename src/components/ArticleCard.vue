<template>
    <div class="postCard">
        <router-link :to="'/article/'+id">
            <div class="postImage" :style="{ 'background-image': 'url(' + picUrl + ')'}"></div>
            <section class="section">
                <h4 class="title is-4">{{ title }}</h4>
                <p class="content" v-html="content"></p>
                <b-button>Zum Artikel</b-button>
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
      author: String,
      id: String,
      picUrl: String
    },
    data(){
        return {
            imageUrl: ''
        }
    },
    methods: {
    },
    mounted(){
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
