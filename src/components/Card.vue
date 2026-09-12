<template>
  <component :is="href ? 'a' : 'div'" class="card" :href="href" :target="href ? target : undefined"
    :rel="href && target === '_blank' ? 'noopener noreferrer' : undefined">
    <div v-if="$slots.thumbnail" class="card-thumb">
      <slot name="thumbnail" />
    </div>
    <div class="card-body">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string;
    target?: string;
  }>(),
  {
    target: "_blank",
  }
);
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

a.card {
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 10px 2px var(--highlight-color);
}

.card-thumb {
  width: 100%;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--button-bg);
  overflow: hidden;
  flex-shrink: 0;
}

.card-thumb :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.1rem 1.4rem;
  flex-grow: 1;
  font-family: var(--font-sans);
}
</style>
