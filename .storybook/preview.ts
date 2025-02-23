import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from 'msw-storybook-addon';
import { handlers } from './../mocks/handers';

let options = {};
if (location.hostname === "username.github.io") {
  options = {
    serviceWorker: {
      url: "/repo-name/mockServiceWorker.js",
    },
  };
}

// Initialize MSW
initialize(options);

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
