import type { Meta, StoryObj } from "@storybook/vue3-vite";
import IconLink from "./IconLink.vue";

const meta: Meta<typeof IconLink> = {
  title: "Components/IconLink",
  component: IconLink,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Icon + label link pattern used for both nav items (Nav.vue) and contact links (SectionContactMe.vue).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconLink>;

export const NavStyle: Story = {
  render: () => ({
    components: { IconLink },
    template: `<IconLink icon="mdi:account" href="#about-me">About Me</IconLink>`,
  }),
};

export const SocialLinks: Story = {
  render: () => ({
    components: { IconLink },
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-start;">
        <IconLink icon="mdi:github" href="https://github.com/philipalgebrink">GitHub</IconLink>
        <IconLink icon="mdi:linkedin" href="https://www.linkedin.com/in/philip-%C3%A4lgebrink-27a9a2280/">LinkedIn</IconLink>
        <IconLink icon="mdi:email" href="mailto:philipalgebrink.pa@gmail.com" target="_self">Email</IconLink>
      </div>
    `,
  }),
};
