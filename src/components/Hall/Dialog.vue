<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
    >

      <template v-slot:activator="{ on, attrs }">
        <v-btn small
               :large="$vuetify.breakpoint.mdAndUp"
               dark
               tile
               fixed
               bottom
               right
               color="#564F6F"
               to="/contact"
               v-bind="attrs"
               v-on="on">
          <v-icon>arrow_right_alt</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Musisz wybrać miejsca!</v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              color="#564F6F"
              text
              @click="dialog = false"
          >
            OK
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  }
}
</script>

<style scoped>

</style>