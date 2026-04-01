<!-- pages/menu/index.vue -->
<script setup lang="ts">
import { useMenu } from '@/composables/useMenu';

const { categories } = useMenu();
</script>

<template>
  <section class="menu">
    <h2>Наше меню</h2>
    <div class="container">
    <div class="menu-grid">
      <NuxtLink 
        v-for="category in categories" 
        :key="category.slug"
        :to="`/menu/${category.slug}`"
        class="menu-card"
      >
        <AppIcon :name="category.icon" size="4.5rem" />
        <h3>{{ category.title }}</h3>
        <p v-if="category.description">{{ category.description }}</p>
      </NuxtLink>
    </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* стили аналогичны предыдущей версии */
</style>