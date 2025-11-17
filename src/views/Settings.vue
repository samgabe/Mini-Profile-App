<script setup>
import { ref } from 'vue'

const darkMode = ref(false)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value

  if (darkMode.value) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}
</script>

<template>
  <div class="mt-10 space-y-4 p-4">
    <h1 class="text-2xl font-bold">Settings</h1>

    <button 
      @click="toggleDarkMode"
      class="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Dark Mode: {{ darkMode ? 'On' : 'Off' }}
    </button>
  </div>
</template>
