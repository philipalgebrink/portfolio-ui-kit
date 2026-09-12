<template>
  <a class="icon-link" :href="href" :target="target" :rel="target === '_blank' ? 'noopener noreferrer' : undefined">
    <Icon :icon="icon" width="20" height="20" class="icon-link-icon" />
    <span class="icon-link-label">
      <slot />
    </span>
  </a>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

withDefaults(
  defineProps<{
    icon: string;
    href: string;
    target?: string;
  }>(),
  {
    target: "_blank",
  }
);
</script>

<style scoped>
.icon-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  text-decoration: none;
  font-family: var(--font-sans);
  transition: color 0.3s ease;
}

.icon-link:hover {
  color: var(--highlight-color);
}

.icon-link-icon {
  flex-shrink: 0;
  color: var(--repo-icon-color);
  transition: color 0.3s ease;
}

.icon-link:hover .icon-link-icon {
  color: var(--highlight-color);
}
</style>
