import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    historyApiFallback: true,
    host: true, // Accept connections from all network interfaces
    allowedHosts: true
  }
});
