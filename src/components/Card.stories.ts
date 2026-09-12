import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Card from "./Card.vue";
import Badge from "./Badge.vue";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The hover-lift, glow-on-hover card used for repos (SectionRepos.vue) and games (SectionGames.vue).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const RepoCard: Story = {
  render: () => ({
    components: { Card, Badge },
    template: `
      <div style="width: 280px">
        <Card href="https://github.com/philipalgebrink/Airbean-API">
          <strong>Airbean-API</strong>
          <p style="margin: 0; font-size: 0.9rem; color: var(--secondary-text-color);">
            An API for the Airbean web app that lets you order coffee and get it delivered by drone.
          </p>
          <Badge>JavaScript</Badge>
        </Card>
      </div>
    `,
  }),
};

export const WithThumbnail: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div style="width: 280px">
        <Card>
          <template #thumbnail>
            <span style="color: white; font-size: 0.85rem;">Screenshot area</span>
          </template>
          <strong>Mastermind</strong>
          <p style="margin: 0; font-size: 0.9rem; color: var(--secondary-text-color);">
            A classic code-breaking game built with Vue and Nuxt.
          </p>
        </Card>
      </div>
    `,
  }),
};
