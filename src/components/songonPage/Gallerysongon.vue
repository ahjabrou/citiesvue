<template>
    <v-container>
      <div class="gallerybereby">
        <h2 class="text-center">Profitez de vues magnifiques</h2>
  
        <v-divider
          color="blue"
          class="my-2 mx-auto"
          inset
          thick
          width="10%"
        ></v-divider>
  
        <p class="text-center">Visitez nos paysages éblouissants</p>
        <br />
        <!--galerie-->
        <div class="onlygallery">
        <v-row class="d-flex justify-center align-center">
          <v-col
            v-for="item in items"
            :key="item.id"
            cols="5"
          >
            <v-img 
              :src="item.src"
              aspect-ratio="2"
              cover
              class="bg-rgb(104, 175, 228)-lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="rgb(104, 175, 228)-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
    </div>
      </div>
    </v-container>
  </template>
  
  <script>
    import image1 from "@/assets/images/songon2.jpg";
    import image2 from "@/assets/images/songon3.jpg";
    import image3 from "@/assets/images/songon4.jpg";
    import image4 from "@/assets/images/songon5.jpg";
    
    export default {
      data() {
        return {
          items: [
            { src: image1, id:1 },
            { src: image2, id:2 },
            { src: image3, id:3 },
            { src: image4, id:4 },
          ],
        };
      },
    };
  </script>
  
  <style scoped>
     .onlygallery{
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        border:4px solid grey;
        padding:20px 0px;
     }
  </style>
  