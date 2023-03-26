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
  import image1 from "@/assets/images/mariasongon.jpg";
  import image2 from "@/assets/images/songon-park-hotel.jpg";
  import image3 from "@/assets/images/boulay-beach-resort6.jpg";
  import image4 from "@/assets/images/songonlodge.jpg";
  
  
  export default {
    data() {
      return {
        showCards: {},
        items: [
          { id: 1, src: image1, 
            title: "Hôtel Résidence Maria Gracia",
            description:"L'Hôtel Maria Gracia est l'établissement idéal situé à Songon pour se détendre et y déguster les plats locaux et les boissons du bar tout en profitant du cadre reposnt et des divertissements de l'endroit."
        },
          { id: 2, src: image2, 
            title: "Songon Park Hotel",
            description:"Situé dans un joli endroit par un lagon, Songon Park est un établissement bien réparti sur la périphérie d'Abidjan où vous pourrez profiter d'une magnifique vue sur la lagune depuis les jardins de l'hôtel." },
          { id: 3, src: image3, 
            title: "Boulay Beach Resort",
            description:"Situé sur l'île Boulay, île principale de la baie d'Abidjan, ce resort est l'endroit idéal pour passer des moments agréables que ce soit en famille ou entre amis tout en profitant du cadre magnifique de l'île." },
          { id: 4, src: image4, 
            title: "Coconut Grove Lodge",
            description:"Le Coconut Grove Lodge situé à Abidjan sur l'île Boulay est un lieu qui vous offrira un moment de plaisir, de repos et de détente avec une belle vue sur le lagon, la piscine et le jardin en famille ou entre amis." },
        ],
      };
    },
  };
  </script>
  