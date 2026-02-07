<script setup lang="ts">
import EntityComponent from "@/components/EntityComponent.vue";
import Button from "primevue/button";

const imageUrls = ["https://picsum.photos/200/300", "https://picsum.photos/400/300"];
</script>

<template>
  <h1>Welcome to Contenuti!</h1>
  <p>This is the home page.</p>
  <div class="flex flex-row gap-4">
    <Button>Button</Button>
    <Button severity="info">Button</Button>
  </div>
  <div class="flex flex-row gap-4">
    <EntityComponent
      :preview-image-url="imageUrls[i - 1]!"
      type="image"
      v-for="i in 2"
      :key="i"
    ></EntityComponent>
  </div>
</template>

<style scoped></style>
