<template>
    <div class="card postCard">
        <router-link :to="'/article/'+id">
            <div class="postImage" :style="{ 'background-image': 'url(' + imageUrl + ')'}"></div>
            <section class="section">
                <h3 class="title is-3">{{ title }}</h3>
                <p class="content wrapper" v-html="content"></p>
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
      id: String
    },
    data(){
        return {
            imageUrl: ''
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
        this.getImage()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postImage {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-height: 200px;
}
.postCard {
    width: 60%;
    padding: 1em;
    margin: auto;
}
.wrapper {
    max-height: 100px;
    overflow: hidden;
}
</style>
