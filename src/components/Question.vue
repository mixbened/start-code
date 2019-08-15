<template>
        <section>
            <b-collapse class="card" aria-id="contentIdForA11y3" :open.sync="isOpen">
                <div
                    slot="trigger" 
                    slot-scope="props"
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3">
                    <p class="card-header-title">
                        {{ title }}
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-up' : 'menu-down'">
                        </b-icon>
                    </a>
                </div>
                <div class="card-content">
                    <div class="content">
                        {{ content }}
                    </div>
                </div>
            </b-collapse>
        </section>
</template>

<script>

export default {
  name: 'Courses',
  data(){
      return {
          isOpen: false
      }
  },
  components: {
    
  },
  props: {
      title: String,
      content: String,
      open: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    width: 80%;
    margin: 0 auto;
}
section:first-child {
    margin-top: 5%;
}
</style>