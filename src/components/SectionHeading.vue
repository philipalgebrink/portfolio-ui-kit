<template>
  <div class="section-heading">
    <h1 class="heading">{{ title }}</h1>
    <p v-if="subtitle" class="subheading">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<style scoped>
.section-heading {
  text-align: center;
}

.heading {
  font-size: 2.5rem;
  font-weight: 800;
  font-family: var(--font-sans);
  color: var(--text-color);
  margin: 0;
}

.subheading {
  font-size: 1rem;
  color: var(--muted-text-color);
  margin-top: 0.75rem;
  font-family: var(--font-sans);
}

@media (max-width: 480px) {
  .heading {
    font-size: 1.75rem;
  }
}
</style>
