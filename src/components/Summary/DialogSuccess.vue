<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="400"
    >

      <template v-slot:activator="{ on, attrs }">
        <v-btn x-large
               dark
               tile
               fixed
               bottom
               right
               color="#564F6F"
               v-bind="attrs"
               v-on="on">
          <v-icon x-large>done</v-icon>
        </v-btn>
      </template>

      <v-card dark color="#2ABB17">
        <v-card-title>Pomyślnie zarezerwowałeś miejsca!</v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text
              @click="dialog = false"
              to="/"
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