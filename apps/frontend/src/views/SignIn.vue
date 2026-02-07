<script setup lang="ts">
import { InputText } from "primevue";
import Button from "primevue/button";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import AuthLayout from "@/layouts/AuthLayout.vue";
</script>

<template>
  <AuthLayout>
    <div class="flex flex-col items-center">
      <h1 class="text-2xl font-bold text-surface-600 dark:text-surface-400 pb-1">
        Welcome to Contenuti!
      </h1>

      <span class="text-white/70"
        >Don't have an account?
        <router-link
          to="/signup"
          class="text-white/70 cursor-pointer hover:text-white/90 underline"
        >
          Sign Up
        </router-link>
      </span>
    </div>

    <div class="flex flex-col gap-4">
      <IconField>
        <InputIcon class="pi pi-user text-white/70" />
        <InputText class="w-full" placeholder="Email Address" />
      </IconField>

      <IconField>
        <InputIcon class="pi pi-lock text-white/70" />
        <InputText class="w-full" placeholder="Password" type="password" />
      </IconField>

      <Button label="Sign In" />
    </div>

    <div class="flex justify-center pt-4">
      <router-link to="/forgot-password" class="text-white/50 cursor-pointer hover:text-white/70">
        Forgot Password?
      </router-link>
    </div>
  </AuthLayout>
</template>

<style scoped></style>
