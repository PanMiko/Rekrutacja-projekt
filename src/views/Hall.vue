<template>
  <div class="hall">
    <ArragmentGrid></ArragmentGrid>
    <v-divider class="ma-5"></v-divider>
    <DiscountsForm></DiscountsForm>
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
