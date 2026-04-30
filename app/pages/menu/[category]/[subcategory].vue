<script setup lang="ts">
const route = useRoute()
const categorySlug = computed(() => route.params.category as string)
const subSlug = computed(() => route.params.subcategory as string)

const { getSubcategory } = useMenu()

const subcategory = computed(() => 
  getSubcategory(categorySlug.value, subSlug.value)
)

const products = computed(() => subcategory.value?.products ?? [])
</script>

<template>
  <section>
    <h1>{{ subcategory?.title ?? 'Подкатегория не найдена' }}</h1>
    
    <div v-if="products.length" class="product-grid">
      <ProductCard 
        v-for="product in products" 
        :key="product.id"
        :product="product"
      />
    </div>
    <p v-else>В этой подкатегории пока нет товаров.</p>
  </section>
</template>