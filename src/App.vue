<template>
  <v-app>
    <v-main class="background">
      <router-view></router-view>
      <p>{{ info }}</p>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    info: ''
  }),

  created() {
    this.$store.dispatch('connect');
  }
}
</script>

<style scoped>
.background {
  background-color: #D1D7E0;;
}
/*.background {*/
/*  background: linear-gradient(34deg, #19e41b, #2cc42e, #305131);*/
/*  background-size: 600% 600%;*/

/*  -webkit-animation: AnimationName 16s ease infinite;*/
/*  -moz-animation: AnimationName 16s ease infinite;*/
/*  animation: AnimationName 16s ease infinite;*/
/*}*/

/*@-webkit-keyframes AnimationName {*/
/*  0%{background-position:0% 73%}*/
/*  50%{background-position:100% 28%}*/
/*  100%{background-position:0% 73%}*/
/*}*/
/*@-moz-keyframes AnimationName {*/
/*  0%{background-position:0% 73%}*/
/*  50%{background-position:100% 28%}*/
/*  100%{background-position:0% 73%}*/
/*}*/
/*@keyframes AnimationName {*/
/*  0%{background-position:0% 73%}*/
/*  50%{background-position:100% 28%}*/
/*  100%{background-position:0% 73%}*/
/*}*/

/*COLOR-PALLET:*/
/*#2D283E*/
/*#802BB1*/
/*#564F6F*/
/*#4C495D*/
/*#D1D7E0*/

</style>
