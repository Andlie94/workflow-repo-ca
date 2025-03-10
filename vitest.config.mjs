import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, 
    environment: 'jsdom', 
    exclude: [
      '**/node_modules/**', 
      '**/tests/e2e/**', 
      '**/js/e2e/**' 
    ],
  }
})

