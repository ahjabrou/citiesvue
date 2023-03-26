<template>
    <v-container>
      <div class="block latestPostBlock">
        <h2 class="text-center">HEBERGEMENT</h2>
  
        <v-divider
          color="blue"
          class="my-2 mx-auto"
          inset
          thick
          width="10%"
        ></v-divider>
  
        <p class="text-center">        
            Réservez votre séjour dans 
                nos meilleurs hôtels et profitez de divertissements
                 incroyables
        </p>
        <br />
  
        <v-row class="d-flex justify-center align-center">
          <v-col cols="5" v-for="item in items" :key="item.id">
            <v-card outlined class="mx-auto">
              <v-img
                class="align-end text-white"
                height="200"
                :src="item.src"
                cover
              >
                <v-card-title>{{item.title}}</v-card-title>
              </v-img>

              <v-card-actions>
                <v-btn
                  color="pink"
                  variant="text"
                  @click="showCards[item.id] = !showCards[item.id]"
                >
                  Explore
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  :icon="showCards[item.id] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="showCards[item.id] = !showCards[item.id]"
                ></v-btn>
              </v-card-actions>
  
              <v-expand-transition>
                <div v-show="showCards[item.id]">
                  <v-divider></v-divider>
  
                  <v-card-text>
                    {{ item.description }}
                </v-card-text>
                </div>
              </v-expand-transition>
  
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </template>
  
  <script>
  import image1 from "@/assets/images/le-katoum.jpg";
  import image2 from "@/assets/images/hotel-la-flotte.jpg";
  import image3 from "@/assets/images/la-baie-des-sirenes.jpg";
  import image4 from "@/assets/images/tabaoule.jpg";
  
  
  export default {
    data() {
      return {
        showCards: {},
        items: [
          { id: 1, src: image1, 
            title: "Hôtel Katoum",
            description:"Le Katoum est à votre service toute l'année que ce soit pour une petite nuit ou un bon repas, une balade de nuit ou pour bien d'autres activités."
        },
          { id: 2, src: image2, 
            title: "Hôtel La Flotte",
            description:"L'Hôtel <<La Flotte>> situé face à la mer disposent de terrasses, de salle de bain individuelles, des suites parentales, du wi-fi gratuit à disposition des hôtes." },
          { id: 3, src: image3, 
            title: "Baie des sirènes",
            description:"C'est l'un des plus beaux établissements du littoral ivoirien. Entièrement rénové, des loisirs de plage et des excursions sont disponibles pour votre divertissement." },
          { id: 4, src: image4, 
            title: "Campement Tabaoulé",
            description:"Cet établissement est situé au bout de la piste qui mène aux piscines naturelles. Il est au bord de la magnifique baie de Pointe Poor, où la baignade est sans danger." },
        ],
      };
    },
  };
  </script>
  