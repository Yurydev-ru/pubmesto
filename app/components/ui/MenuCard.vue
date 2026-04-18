<script lang="ts" setup>
import { useMenu } from '@/composables/useMenu'

const { categories } = useMenu()
</script>

<template>
    <NuxtLink 
    v-for="category in categories"
            :key="category.slug"
            :to="`/menu/${category.slug}`"
            class="menu-card">
            <NuxtImg :src="category.image" sm:100vw quality="30" format="webp" class="menu-card__img"/>
            <div class="menu-card__overlay"/>
            <div class="menu-card__light"/>
            <div class="menu-card__content">
            <h3 class="menu-card__title">{{ category.title }}</h3>
            <!-- <p v-if="category.description">
              {{ category.description }}
            </p> -->
      </div>
    </NuxtLink>
</template>
