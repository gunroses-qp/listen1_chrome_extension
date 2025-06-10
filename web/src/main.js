// 解决 iOS 音频播放需要用户交互的问题
document.addEventListener('touchstart', function initAudioContext() {
  // 初始化音频上下文
  if (window.AudioContext) {
    const audioContext = new AudioContext()
    // 创建空音频缓冲区
    const buffer = audioContext.createBuffer(1, 1, 22050)
    const source = audioContext.createBufferSource()
    source.buffer = buffer
    source.connect(audioContext.destination)
    source.start()
  }
  
  // 移除事件监听器
  document.removeEventListener('touchstart', initAudioContext)
}, { once: true })
