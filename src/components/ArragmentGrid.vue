<template>
  <div>
    <v-container text-center class="background white--text">
      <v-row justify="center" align="center" class="grey lighten-2 grey--text"
             style="margin: 0 50px 0 200px;">
        <p class="subtitle-2" style="padding-top: 15px">EKRAN</p>
      </v-row>
      <v-row class="pt-5">
        <v-col>A</v-col>
        <v-col v-for="(seat, i) in arr['A']" :key="i">
          <v-btn :class="checkOccupation(getValue(seat))" @click="selectSeat(seat, 'A')">{{ getKey(seat) }}</v-btn>
        </v-col>
      </v-row>

      <v-divider color="#4C495D"></v-divider>

      <v-row>
        <v-col>B</v-col>
        <v-col v-for="(seat, i) in arr['B']" :key="i">
          <v-btn :class="checkOccupation(getValue(seat))" @click="selectSeat(seat, 'B')">{{ getKey(seat) }}</v-btn>
        </v-col>
      </v-row>

      <v-divider color="#4C495D"></v-divider>

      <div v-for="i in 5" :key="i">
        <v-row>
          <v-col>{{ transformToRowNumber(i) }}</v-col>
          <v-col v-for="(seat, index) in arr[transformToRowNumber(i)]" :key="index">
            <v-btn :class="checkOccupation(getValue(seat))" @click="selectSeat(seat, transformToRowNumber(i))">
              {{ getKey(seat) }}
            </v-btn>
          </v-col>
        </v-row>
        <v-divider color="#4C495D"></v-divider>
      </div>
    </v-container>

<!--    Vue.filter('reverse', function(value) {-->
<!--    // slice to make a copy of array, then reverse the copy-->
<!--    return value.slice().reverse();-->
<!--    });-->

<!--    <li v-for="item in items | reverse" track-by="id">-->

<!--    <v-card>-->
<!--      <v-list-item v-for="(seat, i) in choosenSeats.slice().reverse()" :key="i">-->
<!--        <v-list-item-content>-->
<!--          <v-list-item-title>Rząd: {{ seat.row }} | Miejsce: {{ seat.seat }}</v-list-item-title>-->
<!--        </v-list-item-content>-->
<!--      </v-list-item>-->
<!--    </v-card>-->
  </div>
</template>

<script>
export default {
  name: "ArragmentGrid.vue",

  data() {
    return {
      arr: {},
      choosenSeats: []
    };
  },

  computed: {},

  methods: {
    selectSeat(seat, row) {
      let key = this.getKey(seat);
      let value = this.getValue(seat);

      if (value === 0) {
        seat[key] = 2;
        this.choosenSeats.push({row: row, seat: key});
        this.$store.dispatch('pushSeat', {row: row, seat: key});
      }
      else {
        seat[key] = 0;
        for (let i = 0; i < this.choosenSeats.length; i++) {
          if (this.choosenSeats[i].row === row && this.choosenSeats[i].seat === key) {
            this.choosenSeats.splice(i, 1);
            this.$store.dispatch('removeSeat', i);
          }
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
  },

  created() {
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"movie": "78483421"})
    };
    fetch("http://localhost:5000/movie", requestOptions)
        .then(response => response.json())
        .then(data => {
          this.arr = data.arrangement;
        });
  }
}
</script>

<style scoped>
.background {
  background-color: #2D283E;
}

.btn-disable {
  cursor: not-allowed;
  pointer-events: none;
}

</style>