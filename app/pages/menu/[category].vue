<script lang="ts" setup>
// import { useMenu } from '@/composables/useMenu'
const route = useRoute()

const categorySlug = computed(() => route.params.category as string)

const { getCategory } = useMenu()

const category = computed(() => getCategory(categorySlug.value))
const title = computed(() => category.value?.title ?? 'Категория не найдена')

const hasSubcategories = computed(() => !!(category.value?.subcategories?.length))
const hasDirectProducts = computed(() => !!(category.value?.products?.length))
// // Если это роллы — редирект на /menu/rolls
// if (category.value?.slug === 'rolls') {
//   navigateTo('/menu/rolls')
// }
</script>

<template>
  <div class="page-container">
    <div class="category-header">
      <NuxtLink to="/menu" class="back-link">
        ← Назад в меню
      </NuxtLink>
      <h1>{{ title }}</h1>
    </div>

    <ul v-if="hasSubcategories" class="subcategory-list">
      <li v-for="sub in category!.subcategories" :key="sub.slug">
        <NuxtLink 
          :to="`/menu/${categorySlug}/${sub.slug}`"
          class="subcategory-link"
        >
          {{ sub.title }}
          <span v-if="sub.description" class="sub-description">
            — {{ sub.description }}
          </span>
        </NuxtLink>
      </li>
    </ul>

    <div v-else-if="hasDirectProducts" class="product-grid">
      <ProductCard 
        v-for="product in category!.products" 
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
