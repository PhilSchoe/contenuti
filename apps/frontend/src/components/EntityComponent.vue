<script setup lang="ts">
import Card from "primevue/card";
import type { EntityType } from "@/types/EntityType";
import { entityIconMap } from "@/constants/entityIconMap";

interface EntityComponentProps {
  previewImageUrl: string;
  type: EntityType;
}

const props = defineProps<EntityComponentProps>();
</script>

<template>
  <Card>
    <template #header>
      <img
        :src="props.previewImageUrl"
        class="w-full h-64 aspect-video object-cover rounded-t-lg"
        alt="PreviewImage"
      />
    </template>
    <template #title>
      <span class="text-lg font-bold">
        <span :class="`pi ${entityIconMap[props.type]}`"></span>
        Card Title
      </span>
    </template>
  </Card>
</template>
