<!-- pages/menu/index.vue -->
<script setup lang="ts">
const {categories} = useMenu()
</script>

<template>
  <section class="menu">
    <h2>Меню</h2>
    <div class="menu__container">
      <div class="menu__grid">
          <MenuCard 
          v-for="category in categories"
          :key="category.slug"
          :category="category"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
