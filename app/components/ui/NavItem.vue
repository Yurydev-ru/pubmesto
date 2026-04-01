<script lang="ts" setup>
import type { NavItem } from "@/types/navigation";

defineProps<{
  link: NavItem
}>()

</script>

<template>
  <NuxtLink :to="link.to" :aria-label="link.ariaLabel || link.label" class="app-nav__link">
    <NavIcon :name="link.icon"/>
    <span>{{ link.label }}</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.app-nav__link {
  display: flex;
} 
.icon {
  width: 1.5rem;
  height: 1.5rem;
 
}
</style>
