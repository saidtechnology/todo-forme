import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  base: "/todo-forme/",
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
};
