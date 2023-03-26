<template>
  <v-app>
    <v-container>
      <v-main>
        <v-container>
          <Header />
          <RouterView />
        </v-container>
      </v-main>
      
    </v-container>
  </v-app>
</template>

<script setup> 
  import Header from '@/components/accueilPage/Header.vue';
  import { RouterView } from 'vue-router';
</script>
