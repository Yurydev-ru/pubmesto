<script lang="ts" setup>
import { useNavigation } from '~/composables/useNavigation'

const { navLinks } = useNavigation()
</script>

<template>
    <ul class="app-nav__list">
        <li v-for="link in navLinks" :key="link.to" class="app-nav__item">
            <NavItem :link="link" />
        </li>
    </ul>
</template>

<style lang="scss" scoped>
</style>
