import type { Meta, StoryObj } from "@storybook/vue3-vite";
import SectionHeading from "./SectionHeading.vue";

const meta: Meta<typeof SectionHeading> = {
  title: "Components/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The heading + subheading pairing repeated in every section of nuxt-portfolio (About, Experiences, Skills, Games, Repos, Contact).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionHeading>;

export const Default: Story = {
  args: {
    title: "Repositories",
    subtitle: "A few projects I'm proud of.",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Games",
  },
};
