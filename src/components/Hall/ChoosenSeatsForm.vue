<template>
  <v-card class="ma-auto" max-width="1000px">
    <v-list v-for="(seat, i) in $store.state.choosenSeats.slice().reverse()" :key="i">
      <v-list-item>

        <v-card-text>
          <v-list-item-content>
            <v-list-item-title>Rząd: {{ seat.row }} | Miejsce: {{ seat.seat }}</v-list-item-title>
          </v-list-item-content>
        </v-card-text>

<!--ONLY ON MD+-->
        <v-chip-group
            v-model="seat.discount"
            class="hidden-sm-and-down"
            active-class="my-color white--text"
            mandatory
        >
          <v-chip v-for="x in discounts" :key="x">{{ x }}</v-chip>
        </v-chip-group>
<!--------------->
      </v-list-item>


<!--ONLY ON SM AND XS-->
      <v-chip-group
          v-model="seat.discount"
          class="hidden-md-and-up ml-7"
          active-class="my-color white--text"
          mandatory>
        <v-chip small v-for="x in discounts" :key="x">{{ x }}</v-chip>
      </v-chip-group>
<!--------------------->

      <v-divider></v-divider>

    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      discounts: ['Normalny', 'Studencki (-50%)', 'Uczniowski (-30%)', 'Senior (-70%)']
    };
  },
}
</script>

<style scoped>
/* warning about not using '.my-color', but it's actually being used */
.my-color {
  background-color: #802BB1;
}

</style>