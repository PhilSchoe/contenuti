<script setup lang="ts">
import { InputText } from "primevue";
import Button from "primevue/button";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import AuthLayout from "../layouts/AuthLayout.vue";
</script>

<template>
  <AuthLayout>
    <div class="flex flex-col items-center">
      <h1 class="text-2xl font-bold text-surface-600 dark:text-surface-400 pb-1">Reset Password</h1>
      <p class="text-white/70 text-center pb-6">
        Enter your email address and we'll send you a link to reset your password.
      </p>
    </div>

    <div class="flex flex-col gap-4">
      <IconField class="w-full">
        <InputIcon class="pi pi-envelope text-white/70" />
        <InputText class="w-full" placeholder="Email Address" />
      </IconField>

      <Button label="Send Reset Link" />
    </div>

    <div class="flex justify-center pt-8">
      <router-link to="/signin" class="text-white/70 cursor-pointer hover:text-white/90 underline">
        Back to Sign In
      </router-link>
    </div>
  </AuthLayout>
</template>

<style scoped></style>
