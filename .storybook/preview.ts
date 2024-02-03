import type { Preview } from "@storybook/react";
import { StyleDecorator } from "./decorators/StyleDecorator";
import { RouterDecorator } from "./decorators/RouterDecorator";
import { SuspenseDecorator } from "./decorators/SuspenseDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    themes: {
      default: 'light',
      // list: [
      //   { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
      //   { name: 'dark', class: Theme.DARK, color: '#000000' },
      //   { name: 'orange', class: Theme.ORANGE, color: '#ffb005' }
      // ]
    }
  },
  decorators: [
    StyleDecorator,
    RouterDecorator,
    SuspenseDecorator
  ]
};

export default preview;
