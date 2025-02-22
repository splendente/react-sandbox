import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from 'msw-storybook-addon';
import { handlers } from './../mocks/handers';

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: handlers,
  },
  loaders: [mswLoader],
};

export default preview;
