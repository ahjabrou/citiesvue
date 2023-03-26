<script setup>
import Gallery from '@/components/accueilPage/Gallery.vue'
import Hero from '@/components/accueilPage/Hero.vue'
import Services from '@/components/accueilPage/Services.vue'
import { RouterView } from 'vue-router';
</script>
<template>
    <v-container>
        <Hero />
        <Gallery />
        <Services />
        
    </v-container>
  </template>