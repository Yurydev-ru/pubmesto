<script lang="ts" setup>
defineProps<{
  name: string
  size?: number | string
  color?: string
  iconClass?: string | string[]
}>()
</script>

<template>
    <span class="link-wrapper">
        <Icon :name="name" :size="size" :color="color" :class="iconClass"/>
    </span>
</template>

<style lang="scss" scoped>
    .link-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
