<template>
  <div>
    <Header></Header>
    <FilmCard></FilmCard>
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard";
import Header from "@/components/Header";

export default {
  name: 'Home',
  components: {
    Header,
    FilmCard
  }
}
</script>

<style scoped>

</style>