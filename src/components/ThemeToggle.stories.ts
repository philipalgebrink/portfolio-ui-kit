import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import ThemeToggle from "./ThemeToggle.vue";

const meta: Meta<typeof ThemeToggle> = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The sun/moon toggle from Nav.vue. Click it here, then flip the toolbar's Theme control above to see the design tokens respond independently of this component's own state.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Interactive: Story = {
  render: () => ({
    components: { ThemeToggle },
    setup() {
      const mode = ref<"light" | "dark">("light");
      return { mode };
    },
    template: `<ThemeToggle v-model="mode" />`,
  }),
};
