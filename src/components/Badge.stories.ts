import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Badge from "./Badge.vue";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The colored-dot language tag from the repo cards in SectionRepos.vue.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => ({
    components: { Badge },
    template: `<Badge>Vue</Badge>`,
  }),
};

export const CustomColor: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 0.75rem;">
        <Badge color="#38bdf8">TypeScript</Badge>
        <Badge color="#f472b6">C#</Badge>
        <Badge color="#fbbf24">JavaScript</Badge>
      </div>
    `,
  }),
};
