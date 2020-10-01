<template>
  <div>
<!--  ONLY ON LG+ -->
    <div class="hidden-sm-and-down">
      <v-container text-center class="my-background white--text">

        <v-row class="grey lighten-2 grey--text"
               justify="center"
               align="center"
               style="margin: 0 100px 0 200px;">
          <p class="subtitle-2"
             style="padding-top: 15px">
            EKRAN
          </p>
        </v-row>

        <v-row class="pt-5">
          <v-col>A</v-col>

          <v-col v-for="(seat, i) in $store.state.arrangement['A']" :key="i">
            <v-btn fab
                   tile
                   :class="checkOccupation(getValue(seat))"
                   @click="selectSeat(seat, 'A')">
              {{ getKey(seat) }}
            </v-btn>
          </v-col>
        </v-row>

        <v-divider color="#4C495D"></v-divider>

        <v-row>

          <v-col>B</v-col>

          <v-col cols="" v-for="(seat, i) in $store.state.arrangement['B']" :key="i">
            <v-btn fab
                   tile
                   :class="checkOccupation(getValue(seat))"
                   @click="selectSeat(seat, 'B')">
              {{ getKey(seat) }}
            </v-btn>
          </v-col>

        </v-row>

        <v-divider color="#4C495D"></v-divider>

        <div v-for="i in 5" :key="i">
          <v-row>

            <v-col>{{ transformToRowNumber(i) }}</v-col>

            <v-col v-for="(seat, index) in $store.state.arrangement[transformToRowNumber(i)]"
                   :key="index">
              <v-btn fab
                     tile
                     :class="checkOccupation(getValue(seat))"
                     @click="selectSeat(seat, transformToRowNumber(i))">
                {{ getKey(seat) }}
              </v-btn>
            </v-col>

          </v-row>

          <v-divider color="#4C495D"></v-divider>

        </div>

      </v-container>
    </div>
<!------------------>

<!--  ONLY ON MD- --->
    <div class="hidden-md-and-up">
      <v-container text-center class="my-background white--text">

        <v-row class="grey lighten-2 grey--text"
               justify="center"
               style="margin: 0 50px 0 150px;">
          <p class="subtitle-2"
             style="padding-top: 15px">
            EKRAN
          </p>
        </v-row>

        <v-row class="pt-5">

          <v-col cols="1" style="margin-right: 100px;">A</v-col>

          <v-col cols="1"
                 v-for="(seat, i) in $store.state.arrangement['A']"
                 :key="i">
            <v-btn fab
                   tile
                   x-small
                   :class="checkOccupation(getValue(seat))"
                   @click="selectSeat(seat, 'A')">
              {{getKey(seat)}}
            </v-btn>
          </v-col>

        </v-row>

        <v-divider color="#4C495D"></v-divider>

        <v-row>

          <v-col cols="1" style="margin-right: 75px;">B</v-col>

          <v-col cols="1"
                 v-for="(seat, i) in $store.state.arrangement['B']"
                 :key="i">
            <v-btn fab
                   tile
                   x-small
                   :class="checkOccupation(getValue(seat))"
                   @click="selectSeat(seat, 'B')">
              {{getKey(seat)}}
            </v-btn>
          </v-col>

        </v-row>

        <v-divider color="#4C495D"></v-divider>

        <div v-for="i in 5" :key="i">
          <v-row>

            <v-col cols="1" style="margin-right: 50px;">{{ transformToRowNumber(i) }}</v-col>

            <v-col cols="1"
                   v-for="(seat, index) in $store.state.arrangement[transformToRowNumber(i)]"
                   :key="index">
              <v-btn fab
                     tile
                     x-small
                     :class="checkOccupation(getValue(seat))"
                     @click="selectSeat(seat, transformToRowNumber(i))">
                {{ getKey(seat) }}
              </v-btn>
            </v-col>

          </v-row>

          <v-divider color="#4C495D"></v-divider>

        </div>

      </v-container>
    </div>
<!------------------>

  </div>
</template>

<script>
export default {
  methods: {
    selectSeat(seat, row) {
      let key = this.getKey(seat);
      let value = this.getValue(seat);

      if (value === 0) {
        seat[key] = 2;
        this.$store.dispatch('addSeat', {row: row, seat: key, discount: 0});
      }

      else {
        seat[key] = 0;

        for (let i = 0; i < this.$store.state.choosenSeats.length; i++) {
          if (this.$store.state.choosenSeats[i].row === row && this.$store.state.choosenSeats[i].seat === key)
            this.$store.dispatch('removeSeat', i);
        }
      }
    },

    checkOccupation(occupation) {
      if (occupation === 1) return 'error btn-disable';
      else if (occupation === 0) return 'success';
      else if (occupation === 2) return 'warning';
    },

    getKey(seat) {
      let keys = Object.keys(seat);
      return keys[0];
    },

    getValue(seat) {
      let values = Object.values(seat);
      return values[0];
    },

    transformToRowNumber(x) {
      switch (x) {
        case 1:
          return 'C';
        case 2:
          return 'D';
        case 3:
          return 'E';
        case 4:
          return 'F';
        case 5:
          return 'G';
        default:
          console.log('Error!!!');
      }
    },
  }
}
</script>

<style scoped>
.my-background {
  background-color: #2D283E;
}

/* warning about not using '.btn-disable', but it's actually being used */
.btn-disable {
  cursor: not-allowed;
  pointer-events: none;
}

</style>