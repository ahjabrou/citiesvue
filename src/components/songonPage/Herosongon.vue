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
        <p class="title">{{ item.title }}</p>
        <p class="description">{{ item.description }}</p>
        <p class="last">{{ item.lastword }}</p>
    </div>
    </v-img>
  </template>
  
  <script>
    import image1 from "@/assets/images/coconut-grove-lodge.jpg";
    
    export default {
      data() {
        return {
          items: [
            { src: image1,
              title:"Songon",
              description: "Disposant d’une sous- préfecture et étant incluse dans le District Autonome d’Abidjan, elle est délimitée par la commune de Yopougon, elle se situe à l’ouest d’Abidjan, et regroupe plusieurs villages.",
              lastword:"Votre séjour commence ici" },
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
      /*background-color: rgba(0, 0, 0, 0.523);
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);*/
      transform: translate(-50%, -50%);
      z-index: 1;
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      text-shadow: 1px 1px #000;
    }
    .title{
        font-size: 1.5rem;
        color:rgb(104, 175, 228);
    }
    .description{
        font-size: 1rem;
        text-shadow:none;
    }
    .last{
        font-size:2rem ;
        border-radius: 10px;
        border: 1px solid;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
  </style>
  