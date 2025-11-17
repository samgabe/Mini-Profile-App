<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
<nav class="flex gap-6 p-4 bg-gray-100 dark:bg-gray-800 shadow">
  <button @click="router.push('/')" class="hover:underline">
    Home
  </button>
  <button @click="router.push('/profile')" class="hover:underline">
    Profile
  </button>
  <button @click="router.push('/settings')" class="hover:underline">
    Settings
  </button>
</nav>
</template>
