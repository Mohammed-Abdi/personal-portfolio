import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser", // ensures minification
    terserOptions: {
      compress: true,
      mangle: true,
      format: {
        comments: false, // remove all comments
      },
    },
    cssCodeSplit: true, // split CSS for better caching
    assetsInlineLimit: 4096, // inline small assets
    sourcemap: false, // disable source maps in production
    rollupOptions: {
      output: {
        manualChunks: undefined, // avoid code splitting unless needed
      },
    },
  },
});
