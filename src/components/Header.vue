<template>
  <div class="home header-background grey darken-4">
    <div class="text-center white black--text rounded-xl pa-6">
      <span
          :class="{
        'display-3': $vuetify.breakpoint.mdAndDown,
        'display-4': $vuetify.breakpoint.lgAndUp}">Witaj w kinie</span>

      <span class="font-weight-bold"
            :class="{
        'display-3': $vuetify.breakpoint.mdAndDown,
        'display-4': $vuetify.breakpoint.lgAndUp}">
        PWR
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header.vue"
}
</script>

<style scoped>
.header-background {
  padding: 80px;
}
</style>