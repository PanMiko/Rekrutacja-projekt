<template>
  <div class="hall">
    <ArragmentGrid></ArragmentGrid>
    <v-divider class="ma-5"></v-divider>
    <DiscountsForm></DiscountsForm>
    <br>
    <v-btn dark tile fixed right color="#564F6F" to="/contact">
      <v-icon>arrow_right_alt</v-icon>
    </v-btn>
  </div>
</template>

<script>
import ArragmentGrid from "@/components/ArragmentGrid";
import DiscountsForm from "@/components/DiscountsForm";

export default {
  components: {
    ArragmentGrid,
    DiscountsForm
  }
}
</script>
