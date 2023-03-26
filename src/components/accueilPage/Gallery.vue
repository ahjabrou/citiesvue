<template>
  <v-container>
    <div class="block latestPostBlock">
      <h2 class="text-center">Découvrez nos villes</h2>

      <v-divider
        color="blue"
        class="my-2 mx-auto"
        inset
        thick
        width="10%"
      ></v-divider>

      <p class="text-center">Visitez des endroits plus que captivants</p>
      <br />

      <v-sheet class="mx-auto" max-width="500">
        <v-carousel
          hide-delimiters
          hide-controls
          cycle
          interval="3000"
        >
          <v-carousel-item v-for="item in items" :key="item.id">
            <v-card outlined class="mx-auto">
              <v-img
                class="align-end text-white"
                height="440"
                :src="item.src"
                cover
              >
                <v-card-title>{{ item.title }}</v-card-title>
              </v-img>

              <v-card-actions>
                <v-btn color="green">Plus d'infos</v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
import image1 from "@/assets/images/dabou1.jpg";
import image2 from "@/assets/images/songon1.jpg";
import image3 from "@/assets/images/bereby2.jpg";
import image4 from "@/assets/images/le-ravin.jpg";
import image5 from "@/assets/images/jacqueville1.jpg";

export default {
  data() {
    return {
      items: [
        { id: 1, src: image1, title: "Dabou" },
        { id: 2, src: image2, title: "Songon" },
        { id: 3, src: image3, title: "Grand-Béréby" },
        { id: 4, src: image4, title: "Grand-Lahou" },
        { id: 5, src: image5, title: "Jacqueville" },
      ],
    };
  },
};
</script>
