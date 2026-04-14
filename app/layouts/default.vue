<script lang="ts" setup></script>

<template>
  <div class="app-wrapper">
    <VideoBg />

    <AppHeader/>
    
    <div class="container">
      <AppSidebar>
      <div id="aside-nav-target">
          <slot/>
        </div>
      </AppSidebar>
      
    
    <main class="app-main" role="main" aria-label="основной контент">
      <slot />
    </main>

  </div>
  <AppFooter>
    <div id="footer-nav-target">
      <slot/>
      </div>
  </AppFooter>
    
  </div>

</template>

<style lang="scss" scoped></style>
