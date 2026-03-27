<script lang="ts" setup></script>

<template>
  <div class="bg-wrapper">
    <video
      class="bg-video"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-hidden="true"
    >
      <source src="/video/bg-video.mp4" type="video/mp4" loading="lazy" >
    </video>
  </div>
</template>

<style lang="scss" scoped>
.bg-wrapper {
  position: absolute;
  inset: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
}
</style>
