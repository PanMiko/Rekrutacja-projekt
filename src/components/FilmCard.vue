<template>
  <v-card class="mx-auto ma-15 pa-2" max-width="550">
    <div class="d-flex">
      <v-img width="150" height="225" class="ma-3" src="@/assets/sample-poster.jpg"></v-img>
      <div>
        <v-card-title>{{ this.$store.getters.getTitle }}</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta dolorum ducimus esse id
          ipsum laboriosam maiores modi mollitia numquam perspiciatis quia quis quo sapiente sequi, similique tempore
          temporibus voluptas.
        </v-card-text>

        <!--FOR MD+ SCREENS-->
        <v-divider class="d-none d-sm-flex"></v-divider>

        <v-card-actions row wrap justify-center class="mt-3 d-none d-sm-flex">
          <v-flex xs6 md3>
            <v-btn rounded to="/about">12:30</v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn rounded to="/about">14:30</v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn rounded to="/about">16:30</v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn rounded to="/about">17:30</v-btn>
          </v-flex>
        </v-card-actions>

      </div>
    </div>
    <!------------------->

    <!--ONLY FOR XS SCREEN-->
    <v-divider class="d-flex d-sm-none"></v-divider>

    <v-card-actions row wrap justify-center class="ma-3 d-flex d-sm-none">
      <v-flex xs6 md3>
        <v-btn rounded to="/about">12:30</v-btn>
      </v-flex>
      <v-flex xs6 md3>
        <v-btn rounded to="/about">14:30</v-btn>
      </v-flex>
      <v-flex xs6 md3>
        <v-btn rounded to="/about">16:30</v-btn>
      </v-flex>
      <v-flex xs6 md3>
        <v-btn rounded to="/about">17:30</v-btn>
      </v-flex>
    </v-card-actions>
    <!---------------------->
  </v-card>
</template>

<script>
export default {
  name: "FilmCard.vue",
  data() {
    return {
      sessions: []
    };
  },
  created() {
    this.sessions = this.$store.getters.getSessions;
  }
}
</script>

<style scoped>
.v-btn::before {
  background-color: green;
}
</style>