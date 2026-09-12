<template>
  <div
    :data-theme="theme"
    style="color: var(--text-color); background: var(--background-gradient); min-height: 100vh; max-width: 900px; margin: 0 auto; padding: 3rem 1.5rem; box-sizing: border-box;"
  >
    <SectionHeading
      title="Portfolio Design System"
      subtitle="This is a local dev preview — run `npm run storybook` for the full, documented component library."
    />

    <div style="margin: 2rem 0; display: flex; justify-content: center;">
      <ThemeToggle v-model="theme" />
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
      <BaseButton icon="mdi:arrow-right">Play Now</BaseButton>
      <BaseButton href="https://github.com/philipalgebrink">View on GitHub</BaseButton>
    </div>

    <div style="max-width: 280px; margin: 2rem auto 0;">
      <Card href="https://github.com/philipalgebrink/Airbean-API">
        <strong>Airbean-API</strong>
        <p style="margin: 0; font-size: 0.9rem; color: var(--secondary-text-color);">
          An API for the Airbean web app that lets you order coffee and get it delivered by drone.
        </p>
        <Badge>JavaScript</Badge>
      </Card>
    </div>

    <div style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem;">
      <IconLink icon="mdi:github" href="https://github.com/philipalgebrink">GitHub</IconLink>
      <IconLink icon="mdi:linkedin" href="https://www.linkedin.com/in/philip-%C3%A4lgebrink-27a9a2280/">LinkedIn</IconLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionHeading from "./components/SectionHeading.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import BaseButton from "./components/BaseButton.vue";
import Card from "./components/Card.vue";
import Badge from "./components/Badge.vue";
import IconLink from "./components/IconLink.vue";

const theme = ref<"light" | "dark">("light");
</script>
