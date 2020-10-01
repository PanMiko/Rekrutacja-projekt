<template>
  <v-card class="mx-auto ma-15 pa-2" max-width="550">
    <div class="d-flex">
      <v-img width="150" height="225" class="ma-3" src="@/assets/sample-poster.jpg"></v-img>

      <div>
        <v-card-title>{{ $store.getters.getTitle }}</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque, dicta dignissimos dolorem
          ea earum enim et eum ex laudantium maiores non rerum sunt! Beatae dolore eveniet ex quam quas.
        </v-card-text>

<!--FOR MD+ SCREENS-->
        <v-divider class="d-none d-sm-flex"></v-divider>

        <v-card-actions row wrap justify-center class="mt-3 d-none d-sm-flex">
          <v-flex xs6 md3 v-for="i in $store.state.sessions" :key="i">
            <v-btn rounded to="/hall">{{ i }}</v-btn>
          </v-flex>
        </v-card-actions>
      </div>

    </div>
<!------------------->

<!--ONLY FOR XS SCREEN-->
    <v-divider class="d-flex d-sm-none"></v-divider>

    <v-card-actions row wrap justify-center class="ma-3 d-flex d-sm-none">
      <v-flex xs6 md3 v-for="i in $store.state.sessions" :key="i">
        <v-btn rounded to="/hall">{{ i }}</v-btn>
      </v-flex>
    </v-card-actions>
<!---------------------->
  </v-card>
</template>

<script>
export default {
}
</script>

<style scoped>
/* warning about not using '.v-btn', but it's actually being used */
.v-btn::before {
  background-color: #802BB1;
}
</style>