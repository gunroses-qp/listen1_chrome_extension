<template>
  <!-- 在播放器界面添加 -->
  <div v-if="isIOS" class="ios-audio-control">
    <button @click="resumeAudioContext">
      <i class="material-icons">play_circle</i>
      <span>点击播放</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    }
  },
  methods: {
    resumeAudioContext() {
      if (window.AudioContext && this.audioContext?.state === 'suspended') {
        this.audioContext.resume()
      }
    }
  }
}
</script>

<style>
.ios-audio-control {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 15px;
  z-index: 1000;
}

.ios-audio-control button {
  background: #1db954;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.ios-audio-control button i {
  margin-right: 8px;
}
</style>
