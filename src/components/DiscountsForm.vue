<template>
  <v-card>
    <v-list>

      <v-list-item v-for="(seat, i) in seats.slice().reverse()" :key="i">
        <v-list-item-content>
          <v-list-item-title>Rząd: {{ seat.row }} | Miejsce: {{ seat.seat }}</v-list-item-title>
        </v-list-item-content>

        <v-subheader class="subheading mr-8">Zniżki:</v-subheader>

        <v-select
            :items="options"
            label="Outlined style"
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
      selected: 'DUPA',
      options: ['Normalny', 'Studencki', 'Uczniowski', 'Senior']
    };
  },
  mounted() {
    this.seats = this.$store.state.choosenSeats;
  }
}
</script>

<style scoped>

</style>