<script setup lang="ts">
import EntityOverview from "@/components/EntityOverview.vue";
import Button from "primevue/button";
</script>

<template>
  <h1>Welcome to Contenuti!</h1>
  <p>This is the home page.</p>
  <div class="flex flex-row gap-4">
    <Button>Button</Button>
    <Button severity="info">Button</Button>
  </div>
  <EntityOverview></EntityOverview>
</template>

<style scoped></style>
