<!-- pages/menu/rolls/index.vue -->
<script setup lang="ts">
import { useMenu } from '@/composables/useMenu';

const { categories } = useMenu()
const rolls = computed(() => categories.find(c => c.slug === 'rolls'))
</script>

<template>
  <div class="page-container">
    <h1>Роллы</h1>
    <p class="subtitle">Выберите вид роллов</p>

    <div class="subcategories-grid">
      <NuxtLink
        v-for="sub in rolls?.subcategories"
        :key="sub.slug"
        :to="`/menu/rolls/${sub.slug}`"
        class="subcategory-card"
      >
        <h3>{{ sub.title }}</h3>
        <p>{{ sub.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>