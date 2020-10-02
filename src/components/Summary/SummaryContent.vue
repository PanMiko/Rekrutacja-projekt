<template>
  <div>

<!--INFORMACJE O MIEJSCACH-->
    <div class="mt-10 my-style">
      <span class="display-2 ml-5">Wybrane miejsca</span>

      <v-btn text
             class="mt-5 float-right"
             color="#564F6F"
             to="/hall">
        <v-icon>edit</v-icon>
        EDYTUJ
      </v-btn>

      <DiscountsForm class="mt-5"></DiscountsForm>

    </div>
<!-------------------------->

    <v-divider style="margin-top: 100px;"></v-divider>

<!--INFORMACJE O DANYCH KONTAKTOWYCH-->
    <div class="my-style mt-15">
      <span class="display-2 ml-5">Dane kontaktowe</span>

      <v-btn text
             class="my-5 float-right"
             color="#564F6F"
             to="/contact">
        <v-icon>edit</v-icon>
        EDYTUJ
      </v-btn>

      <v-card class="mt-10 mx-auto mb-10" max-width="1000px">
        <div v-for="(value, name, index) in $store.state.userInfo" :key="name">
          <v-list-item two-line>

            <v-list-item-content>
              <v-list-item-title>{{ categories[index] }}</v-list-item-title>
              <v-list-item-subtitle>{{ value }}</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>
          <v-divider class="mx-2"></v-divider>
        </div>
      </v-card>
<!------------------------------------>

    </div>

  </div>
</template>

<script>
import DiscountsForm from "@/components/Hall/ChoosenSeatsForm";

export default {
  data() {
    return {
      categories: ['Imię', 'Nazwisko', 'E-mail', 'Numer telefonu'],
    };
  },

  components: {
    DiscountsForm
  }
}
</script>

<style scoped>
.my-style {
  max-width: 1000px;
  margin: auto;
}
</style>