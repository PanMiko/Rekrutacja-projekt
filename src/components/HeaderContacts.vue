<template>
  <div class="home header-background">
    <div class="text-center white black--text rounded-xl pa-6">
      <span
          :class="{
        'display-2': $vuetify.breakpoint.mdAndDown,
        'display-4': $vuetify.breakpoint.lgAndUp}">Podaj swoje</span>

      <span class="font-weight-bold"
            :class="{
        'display-2': $vuetify.breakpoint.mdAndDown,
        'display-4': $vuetify.breakpoint.lgAndUp}">
        dane kontaktowe
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderContacts.vue"
}
</script>

<style scoped>
.header-background {
  background-color: #2D283E;
  padding: 80px;
}
</style>