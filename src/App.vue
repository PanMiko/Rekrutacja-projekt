<template>
  <v-app>
    <v-main class="background">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('getInfoFromServer');
  }
}
</script>

<style scoped>
.background {
  background-color: #D1D7E0;;
}

/*COLOR-PALLET:*/
/*#2D283E*/
/*#802BB1*/
/*#564F6F*/
/*#4C495D*/
/*#D1D7E0*/

</style>
