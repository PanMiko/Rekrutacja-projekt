<template>
  <div>
    <HeaderSummary></HeaderSummary>
    <SummaryContent></SummaryContent>
    <DialogSuccess></DialogSuccess>
  </div>
</template>

<script>
import HeaderSummary from "@/components/Summary/HeaderSummary";
import SummaryContent from "@/components/Summary/SummaryContent";
import DialogSuccess from "@/components/Summary/DialogSuccess";

export default {
  components: {
    HeaderSummary,
    SummaryContent,
    DialogSuccess
  }
}
</script>

<style scoped>

</style>