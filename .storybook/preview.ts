import type { Preview } from "@storybook/react-vite";
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
  },
  loaders: [mswLoader],
};

export default preview;
