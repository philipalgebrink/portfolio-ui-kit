<template>
  <button type="button" class="theme-toggle" :class="{ 'theme-toggle--active': isActive }" @click="toggle"
    :aria-label="`Switch to ${modelValue === 'light' ? 'dark' : 'light'} mode`">
    <Icon :icon="modelValue === 'light' ? 'mdi:weather-sunny' : 'mdi:weather-night'" width="20" height="20" />
    <span>{{ modelValue === "light" ? "Light" : "Dark" }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  modelValue: "light" | "dark";
}>();

const emit = defineEmits<{ "update:modelValue": ["light" | "dark"] }>();

const isActive = ref(false);

function toggle() {
  emit("update:modelValue", props.modelValue === "light" ? "dark" : "light");
  isActive.value = true;
  setTimeout(() => {
    isActive.value = false;
  }, 300);
}
</script>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--text-color);
  font-family: var(--font-sans);
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.theme-toggle:hover,
.theme-toggle--active {
  color: var(--highlight-color);
  font-weight: 700;
}
</style>
