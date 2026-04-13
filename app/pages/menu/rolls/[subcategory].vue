<script setup lang="ts">
import { useMenu } from '@/composables/useMenu'

const route = useRoute()
const { getRollSubcategory } = useMenu()

const subcategory = computed(() =>
  getRollSubcategory(route.params.subcategory as string),
)
</script>

<template>
  <div v-if="subcategory" class="page-container">
    <h1>{{ subcategory.title }}</h1>
    <p class="subtitle">
      {{ subcategory.description }}
    </p>

    <div class="products-grid">
      <ProductCard
        v-for="product in subcategory.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
