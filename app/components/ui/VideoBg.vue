<script lang="ts" setup></script>

<template>
  <div class="bg-wrapper">
    <NuxtImg class="bg-img" src="images/bg-m-3.jpg" sizes="sm:100vw" quality="30" format="webp" />
    <video
      class="bg-video"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-hidden="true"
    >
      <source src="/video/bg-video.mp4" type="video/mp4" loading="lazy">
    </video>
    <div class="bg-overlay" />
  </div>
</template>

<style lang="scss" scoped>
.bg-overlay {
  background: hsl(191.55deg 2.62% 20.09% / 5%);
  // background-color: var(--bg-gradient-overlay), 
  // hsla(0, 16%, 84%, 90);
  position: absolute;
  inset: 0;
  backdrop-filter: blur(5.6px);
}
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
  display: none;
}

.bg-img {
  object-fit: cover;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

}
</style>
