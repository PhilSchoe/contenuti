<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-surface-50 dark:bg-surface-950 flex items-center justify-center">
    <div
      class="flex flex-col justify-around gap-4 bg-surface-100 dark:bg-surface-900 w-full max-w-sm p-10 rounded-lg shadow-lg min-h-[480px]"
    >
      <slot />
    </div>
  </div>
</template>
