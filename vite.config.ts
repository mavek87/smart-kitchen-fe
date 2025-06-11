import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

const ReactCompilerConfig = {
  target: '19'
};

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true, // se usi globals come describe, it, expect senza importare
//     setupFiles: './src/setupTests.ts', // il file di setup
//     environment: 'jsdom', // ambiente simile browser per i test React
//   },
// });

// https://vite.dev/config/
export default defineConfig({
  plugins: react({
    babel: {
      plugins: [
        ["babel-plugin-react-compiler", ReactCompilerConfig],
      ],
    },
  }),
  test: {
    globals: true, // se usi globals come describe, it, expect senza importare
    setupFiles: './src/setupTests.ts', // il file di setup
    environment: 'jsdom', // ambiente simile browser per i test React
  }
});