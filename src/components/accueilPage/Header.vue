<template> 
  <!-- <v-app-bar app color="transparent"> -->
    <v-app-bar>
    <v-toolbar-title>
      <v-img :width="70" cover src="@/assets/images/logoCitiestrans1.png"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items >
      <v-btn text>
        <router-link to="/">Accueil</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/grandbereby">Grand-Béréby</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/songon">Songon</router-link>
      </v-btn>
      <!-- <v-btn text>
        Dabou
      </v-btn>
      <v-btn text>
        Grand-Lahou
      </v-btn>
      <v-btn text>
        Jacqueville
      </v-btn> -->
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      customClass: 'no-underline'
    }
  }
}
</script>

<style>
.no-underline >>> .v-btn__content {
  text-decoration: none;
}
</style>