import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseButton from "./BaseButton.vue";

const meta: Meta<typeof BaseButton> = {
  title: "Components/BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The solid hover-glow button used across nuxt-portfolio: 'View all on GitHub' (SectionRepos.vue) and 'Play Now' (SectionGames.vue).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {
  render: () => ({
    components: { BaseButton },
    template: `<BaseButton>View all on GitHub</BaseButton>`,
  }),
};

export const WithIcon: Story = {
  render: () => ({
    components: { BaseButton },
    template: `<BaseButton icon="mdi:arrow-right">Play Now</BaseButton>`,
  }),
};

export const AsLink: Story = {
  render: () => ({
    components: { BaseButton },
    template: `<BaseButton href="https://github.com/philipalgebrink" icon="mdi:github">View on GitHub</BaseButton>`,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { BaseButton },
    template: `<BaseButton disabled>Unavailable</BaseButton>`,
  }),
};
