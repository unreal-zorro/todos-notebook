import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false
      }
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    'storybook-addon-mock',
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      // builder: {
      //   useSWC: true,
      // },
    },
  },
  // docs: {
  //   autodocs: "tag",
  // },
};
export default config;
