<!-- pages/menu/rolls/index.vue -->
<script setup lang="ts">
import { useMenu } from '@/composables/useMenu'

const { categories } = useMenu()
const rolls = computed(() => categories.find(c => c.slug === 'rolls'))
</script>

<template>
  <section class="menu">
    <h2>Меню</h2>
    <div class="menu__container">
      <div class="menu__grid">
          <MenuCard/>
      </div>
    </div>
  </section>
  <div class="page-container">
    <h1>Роллы</h1>
    <p class="subtitle">
      Выберите вид роллов
    </p>

    <div class="subcategories-grid">
      <div class="category-card">
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
  </div>
</template>

<style lang="scss">
.page-container {
  height: 100%;
  width: 100%;
  max-width: 680px;
  margin-inline: auto;
  padding-inline: 1rem;
}

.page-container h1 {
  font-family: var(--font-heading);
  font-size: var(--fs-h1);
  text-align: center;
}
.subcategories-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, 300px);
  height: 100%;
  row-gap: 15px;
}

.subcategory-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-bottom: 15px;
  background-color: rgb(47, 49, 49);

  h3 {
    font-family: var(--font-heading);
    font-size: 22px;
    text-align: center;
  }
}
</style>
