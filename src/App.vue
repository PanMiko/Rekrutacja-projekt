<template>
  <v-app>
    <v-main class="background">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
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
  background-color: #D1D7E0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/*COLOR-PALLET:*/
/*#2D283E*/
/*#802BB1*/
/*#564F6F*/
/*#4C495D*/
/*#D1D7E0*/

</style>
