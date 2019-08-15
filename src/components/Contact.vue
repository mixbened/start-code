<template>
    <section class="section">
        <Title title="Kontakt" subtitle="Stelle uns alle deine Fragen"/>
        <div class="container small-content">
            <div class="field">
                <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Gib deinen Namen ein">
                    </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Gib deine Email Adresse ein">
                    </div>
            </div>

            <div class="field">
            <label class="label">Subject</label>
                <div class="control">
                    <div class="select">
                        <select>
                            <option>Frage zu einem Kurs</option>
                            <option>Frage zu den Terminen</option>
                            <option>Anfrage Team-Workshop</option>
                            <option>Sonstiges</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="field">
            <label class="label">Deine Nachricht an uns</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Nachricht"></textarea>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <label class="checkbox">
                    <input type="checkbox">
                    Ich bestätige die <a href="#">Datenschutzbestimmungen</a> gelesen zu haben.
                    </label>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Title from './Title'

export default {
  name: 'Contact',
  components: {
      Title
  },
  props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select:not(.is-multiple):not(.is-loading)::after {
    border-color: #17a2b8;
}
.small-content {
    padding: 5% 20%
}
</style>