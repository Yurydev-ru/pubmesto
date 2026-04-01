<script lang="ts" setup>
defineProps<{
  name: string
  size?: number | string
  color?: string
}>()
</script>

<template>
  <span class="link-wrapper">
    <Icon :name="name" :size="size" :color="color" />
  </span>
</template>

<style lang="scss" scoped>
    .link-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
</style>
