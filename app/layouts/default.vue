<script lang="ts" setup></script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <VideoBg />
    <main class="app-main" role="main" aria-label="основной контент">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped></style>
