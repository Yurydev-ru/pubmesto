<script lang="ts" setup>
import type { MenuProduct } from '@/composables/useMenu'

defineProps<{
  product: MenuProduct
}>()
</script>

<template>
  <div class="product-card">
    <div class="product-image">
      <!-- Можно добавить реальное изображение позже -->
      <div class="image-placeholder">
        {{ product.name[0] }}
      </div>
    </div>

    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="description">
        {{ product.description }}
      </p>

      <div class="meta">
        <span v-if="product.weight" class="weight">{{ product.weight }}</span>
        <span class="price">{{ product.price }} ₽</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .product-card {
      width: 100%;
      height: 100%;
  background: #1f2937;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.2);
  }
}

.product-image {
  height: 180px;
  background: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #60a5fa;
}

.product-info {
  padding: 1.25rem;
}

h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
}

.description {
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.35rem;
  font-weight: 700;
  color: #60a5fa;
}

.add-button {
  width: 100%;
  padding: 0.85rem;
  background: #60a5fa;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3b82f6;
  }
}
</style>
