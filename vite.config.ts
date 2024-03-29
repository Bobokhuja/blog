import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@store', replacement: '/src/store' },
      { find: '@api', replacement: '/src/api' },
      { find: '@models', replacement: '/src/models' },
    ]
  }
})
