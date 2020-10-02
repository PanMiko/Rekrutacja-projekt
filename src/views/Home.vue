<template>
  <div v-if="show">
    <Header></Header>
    <FilmCard></FilmCard>
  </div>
</template>

<script>
import FilmCard from "@/components/Home/FilmCard";
import Header from "@/components/Home/HeaderHome";

export default {
  data() {
    return {
      show: false
    };
  },

//to forced animation on HomePage
  mounted() {
    this.show = true;
  },

  components: {
    Header,
    FilmCard
  }
}
</script>

<style scoped>

</style>