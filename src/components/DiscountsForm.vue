<template>
  <v-card>
    <v-list>

      <v-list-item v-for="(seat, i) in seats" :key="i">
        <v-list-item-content>
          <v-list-item-title>Rząd: {{ seat.row }} | Miejsce: {{ seat.seat }}</v-list-item-title>
        </v-list-item-content>

        <v-subheader class="subheading mr-8">Zniżka:</v-subheader>

        <v-select
            v-model="select"
            :items="options"
            item-text="name"
            outlined
        ></v-select>

      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "DiscountsForm.vue",
  data() {
    return {
      seats: [],
      select: 'Normalny',
      options: ['Normalny', 'Studencki (-50%)', 'Uczniowski (-30%)', 'Senior (-70%)']
    };
  },
  mounted() {
    this.seats = this.$store.state.choosenSeats;
  }
}
</script>

<style scoped>

</style>