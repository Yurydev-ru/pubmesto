<script lang="ts" setup>
import { useMenu } from '@/composables/useMenu';

const route = useRoute()
const { getCategory } = useMenu()

const category = computed(() => getCategory(route.params.category as string))

// Если это роллы — редирект на /menu/rolls
if (category.value?.slug === 'rolls') {
  navigateTo('/menu/rolls')
}
</script>

<template>
  <div class="page-container" v-if="category">
    <h1>{{ category.title }}</h1>
    
    <div class="products-grid">
      <ProductCard 
        v-for="product in category.products" 
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
</style>
