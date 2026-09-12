<template>
  <component
    :is="href ? 'a' : 'button'"
    class="base-button"
    :href="href"
    :target="href ? target : undefined"
    :rel="href && target === '_blank' ? 'noopener noreferrer' : undefined"
    :disabled="!href && disabled"
    @click="onClick"
  >
    <Icon v-if="icon" :icon="icon" width="18" height="18" />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

withDefaults(
  defineProps<{
    icon?: string;
    href?: string;
    target?: string;
    disabled?: boolean;
  }>(),
  {
    target: "_blank",
  }
);

const emit = defineEmits<{ click: [MouseEvent] }>();

function onClick(event: MouseEvent) {
  emit("click", event);
}
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--button-bg);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: var(--font-sans);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.base-button:hover:not(:disabled) {
  background-color: var(--button-bg-hover);
  box-shadow: 0 0 8px 2px var(--highlight-color);
}

.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
