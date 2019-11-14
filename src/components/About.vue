<template>
    <section>
      <section class="section">
        <Title title="Team & Vision" subtitle="Wer wir sind und was wir tun"/>
      </section>
      <section class="section">
        <div class="container">
          <h3 class="title is-3 has-text-left">Das Team</h3>
          <div class="columns section">
            <div class="is-one-third column is-vcentered has-text-centered">
              <div class="card-image">
                <figure class="image is-128x128">
                  <img src="../assets/img/profile-1.jpeg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content has-text-centered">
                    <p class="title is-4">Dr. Lorenz Gräf</p>
                    <p class="subtitle is-6">Geschäftsführer</p>
                  </div>
                </div>
                <div class="content cite">
                  
                </div>
                <router-link to="/kurse">Mehr dazu</router-link>
              </div>
            </div>
            <div class="is-one-third column is-vcentered has-text-centered">
              <div class="card-image">
                <figure class="image is-128x128">
                  <img src="../assets/img/profile-2.jpeg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content has-text-centered">
                    <p class="title is-4">Christine Schlütz</p>
                    <p class="subtitle is-6">Operations & Marketing Manager</p>
                  </div>
                </div>
                <div class="content cite">
                  
                </div>
                <router-link to="/kurse">Mehr dazu</router-link>
              </div>
            </div>
            <div class="is-one-third column is-vcentered has-text-centered">
              <div class="card-image">
                <figure class="image is-128x128">
                  <img src="../assets/img/profile-3.jpeg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content has-text-centered">
                    <p class="title is-4">Benedikt Mix</p>
                    <p class="subtitle is-6">Head Instructor</p>
                  </div>
                </div>
                <div class="content cite">
                </div>
                <router-link to="/kurse">LinkedIn</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h3 class="title is-3 has-text-left">Unsere Vision</h3>
          
        </div>
      </section>
    </section>
</template>

<script>
import Title from './Title'

export default {
  name: 'About',
  components: {
    Title
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
figure.image {
  margin: auto;
  border-radius: 100%
}
figure.image > img {
    border-radius: 100%
}
.is-one-quarter.card {
  margin: 0 auto;
}
</style>
