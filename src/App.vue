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
    this.$store.commit('getInfoFromServer');
  }
}
</script>

<style scoped>
.background {
  background: linear-gradient(34deg, #19e41b, #2cc42e, #305131);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 16s ease infinite;
  -moz-animation: AnimationName 16s ease infinite;
  animation: AnimationName 16s ease infinite;
}

@-webkit-keyframes AnimationName {
  0%{background-position:0% 73%}
  50%{background-position:100% 28%}
  100%{background-position:0% 73%}
}
@-moz-keyframes AnimationName {
  0%{background-position:0% 73%}
  50%{background-position:100% 28%}
  100%{background-position:0% 73%}
}
@keyframes AnimationName {
  0%{background-position:0% 73%}
  50%{background-position:100% 28%}
  100%{background-position:0% 73%}
}
</style>
