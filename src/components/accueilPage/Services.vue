<template>
    <v-container
      class="mb-6"
    >
    <h2 class="text-center">Planifiez votre séjour</h2>

            <v-divider
            color="blue"
            class="my-2 mx-auto"
            inset
            thick
            width="10%"></v-divider>

            
            <p class="text-center">Dans des établissements de luxe et confortables</p><br>
      <v-row
        align="center"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="item in items"
          :key="item.id"
        >
          <v-sheet class="pa-2 ma-2">
            <v-img
      class="align-end text-white" style="border:3px solid grey; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);" 
      height="200"
      :src="item.src"
      cover
    >
    </v-img>

    <h2 class="text-center">{{ item.title }}</h2>
          </v-sheet>

        </v-col>

<!--la carte avec bouton visiter-->
        <v-container>
            <v-card
    class="mx-auto"
    max-width="400" style="box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); padding:20px 0px;"
  >

    <v-card-text>
        <div class="text-center">
      <h2 >Tout pour votre divertissement</h2>
      <v-divider
      color="blue"
      class="my-2 mx-auto"
      inset
      thick
      width="10%"
    ></v-divider>
      <p>Réservez dès maintenant votre séjour</p>
    </div>
    </v-card-text>


    <v-card-actions >
    
      <v-btn class="mx-auto" color="blue">
        RESERVEZ
      </v-btn>
      
    </v-card-actions>
  </v-card>
        </v-container>
<v-footer class="d-flex flex-column" style="padding:20px 0px; width: 100%;">
          <div class="bg-blue d-flex w-100 align-center px-4">
            <strong>Visitez les plus beaux du pays!</strong>
      
            <v-spacer></v-spacer>
      
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              :icon="icon"
              variant="plain"
              size="small"
            ></v-btn>
          </div>
      
          <div class="px-4 py-2 bg-black text-center w-100">
            {{ new Date().getFullYear() }} — <strong>Cities cotières</strong>
          </div>
        </v-footer>
        
      </v-row>

    </v-container>
</template>

<script>

  import image1 from "@/assets/images/plat1-1.png";
  import image2 from "@/assets/images/logement.jpg";
  import image3 from "@/assets/images/detente.jpg";

  
  export default {
    data() {
        return {
            items: [
                { id: 1, src: image1, title: "RESTAURANT"
                },
                { id: 2, src: image2, title: "LOGEMENT"
                },
                { id: 3, src: image3, title: "DETENTE"
                },
            ],
            icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
        };
    },
};
  </script>
  <style scoped>

</style>