export default defineConfig({
  build: {
    outDir: '../../web-dist',  // 输出到项目根目录
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        player: resolve(__dirname, 'src/player.html')
      }
    }
  }
})
