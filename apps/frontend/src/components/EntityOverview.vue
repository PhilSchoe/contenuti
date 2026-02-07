<script setup lang="ts">
import EntityComponent from "@/components/EntityComponent.vue";
import { entities } from "@/constants/entities";
</script>

<template>
  <div class="grid grid-cols-3 gap-4 p-4">
    <EntityComponent
      v-for="(entity, index) in entities"
      :key="index"
      :title="entity.title"
      :preview-image-url="entity.previewImageUrl"
      :type="entity.type"
    ></EntityComponent>
  </div>
</template>
