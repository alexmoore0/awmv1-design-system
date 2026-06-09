/** Storybook config — HTML renderer (the system is framework-free CSS). */
import { dirname, join } from 'path';

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(js|mjs)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  // Let Vite serve the Google Fonts + token CSS imported in preview.js
  core: { disableTelemetry: true }
};
export default config;
