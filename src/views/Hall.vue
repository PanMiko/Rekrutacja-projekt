<template>
  <div>
    <HeaderHall></HeaderHall>
    <ArragmentGrid class="mt-10"></ArragmentGrid>
    <v-divider class="ma-5"></v-divider>
    <DiscountsForm></DiscountsForm>
    <Dialog></Dialog>
  </div>
</template>

<script>
import HeaderHall from "@/components/Hall/HeaderHall";
import ArragmentGrid from "@/components/Hall/ArragmentGrid";
import DiscountsForm from "@/components/Hall/ChoosenSeatsForm";
import Dialog from "@/components/Hall/Dialog";

export default {
  components: {
    HeaderHall,
    ArragmentGrid,
    DiscountsForm,
    Dialog
  },

  beforeRouteLeave(to, from, next) {
    if(this.$store.state.choosenSeats.length !== 0) next();
  }
}
</script>
