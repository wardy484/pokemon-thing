<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left color="indigo" dark>
      <v-img src="/images/pokeball.png" max-width="40px" class="mr-2" />

      <v-toolbar-title>Pokedex</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    }
  }
}
</script>
