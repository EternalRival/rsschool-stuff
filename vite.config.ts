import { defineConfig, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';

const config: UserConfigExport = defineConfig({ plugins: [vue()], base: '/rsschool-stuff/' });
export default config;
