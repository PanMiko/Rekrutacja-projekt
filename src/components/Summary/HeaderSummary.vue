<template>
  <div class="my-header-background">
    <div class="text-center white black--text rounded-xl pa-6">

      <span class="font-weight-bold"
            :class="{
                      'display-1': $vuetify.breakpoint.smAndDown,
                      'display-2': $vuetify.breakpoint.md,
                      'display-4': $vuetify.breakpoint.lgAndUp}">
        PODSUMOWANIE
      </span>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.my-header-background {
  background-color: #2D283E;
  padding: 80px;
}
</style>