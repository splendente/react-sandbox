import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from 'msw-storybook-addon';
import { handlers } from './../mocks/handers';

let options = {};
if (location.hostname === "splendente.github.io") {
  options = {
    serviceWorker: {
      url: "/react-sandbox/mockServiceWorker.js",
    },
  };
}

// Initialize MSW
initialize(options);

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    msw: handlers,

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
  loaders: [mswLoader],
};

export default preview;
