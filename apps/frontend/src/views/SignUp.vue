<script setup lang="ts">
import { InputText } from "primevue";
import Button from "primevue/button";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import AuthLayout from "../layouts/AuthLayout.vue";
</script>

<template>
  <AuthLayout>
    <div class="flex flex-col items-center pb-6">
      <h1 class="text-2xl font-bold text-surface-600 dark:text-surface-400 pb-1">Create Account</h1>

      <span class="text-white/70"
        >Already have an account?
        <router-link
          to="/signin"
          class="text-white/70 cursor-pointer hover:text-white/90 underline"
        >
          Sign In
        </router-link>
      </span>
    </div>

    <IconField class="w-full">
      <InputIcon class="pi pi-user text-white/70" />
      <InputText class="w-full" placeholder="Full Name" />
    </IconField>

    <IconField class="w-full">
      <InputIcon class="pi pi-envelope text-white/70" />
      <InputText class="w-full" placeholder="Email Address" />
    </IconField>

    <IconField class="w-full">
      <InputIcon class="pi pi-lock text-white/70" />
      <InputText class="w-full" placeholder="Password" type="password" />
    </IconField>

    <IconField class="w-full">
      <InputIcon class="pi pi-lock text-white/70" />
      <InputText class="w-full" placeholder="Confirm Password" type="password" />
    </IconField>

    <Button label="Sign Up" />
  </AuthLayout>
</template>

<style scoped></style>
