<script lang="ts" setup>
defineProps<{
  name: string
  size?: number | string
  color?: string
}>()
</script>

<template>
  <span class="link-wrapper">
    <Icon :name="name" :size="size" :color="color" class="nav-icon" />
  </span>
</template>

<style lang="scss" scoped>

</style>
