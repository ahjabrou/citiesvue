<template>
  <v-img
    :height="500"
    aspect-ratio="1/1"
    cover
    v-for="(item,i) in items"
    :key="i"
    :src="item.src"
  >
    <div class="image-text">
      <p>{{ item.title }}</p>
      <p>{{ item.title1 }}</p>
      <p>{{ item.title2 }}</p>
    </div>

  </v-img>
</template>
  
<script>
  import image1 from "@/assets/images/bereby1.jpg";
  
  export default {
    data() {
      return {
        items: [
          { src: image1,
           title2:" Tout commence ici",
           title:"Visitez la Côte d'Ivoire", 
           title1:"Profitez des vues de nos magnifiques villes et plages du pays" },
          
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .image-text {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: rgba(104, 174, 228, 0.523);
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%);
    z-index: 1;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px #000;
  }
</style>
