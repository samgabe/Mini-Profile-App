<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition duration-300">
    <NavBar />

    <main class="p-4">
      <RouterView />
    </main>
  </div>
</template>

