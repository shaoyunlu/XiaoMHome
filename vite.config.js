import { defineConfig } from "vite"
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  resolve: {
    alias: {
      'page': resolve(__dirname, 'src/page'),
      'comp': resolve(__dirname, 'src/component')
    }
  },
  plugins: [
    vue(),

  ],
  server: {
    // 配置服务器
    hmr: {
      overlay: false
    }
  }
})