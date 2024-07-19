import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      app: './src/entries/app.tsx',
      auth: './src/entries/auth.tsx',
    },
  },
  server: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/app/, to: '/app.html' },
        { from: /^\/auth/, to: '/auth.html' },
      ],
    },
  },
  output: {
    manifest: true,
  },
});
