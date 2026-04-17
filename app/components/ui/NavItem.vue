<script lang="ts" setup>
import type { NavLink } from '@/types/navigation'
import { useNavigation } from '@/composables/useNavigation'

defineProps<{
  link: NavLink
}>()

const { getActiveClass } = useNavigation()
</script>

<template>
  <NuxtLink :to="link.to" :aria-label="link.ariaLabel" :class="getActiveClass(link)" class="app-nav__link">
    <NavIcon :name="link.name" />
    <span class="link-label">{{ link.label }}</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>

</style>
