<script lang="ts" setup>
import type { NavItem } from "@/types/navigation";

const navItems: NavItem[] = [
  {
    to: "/",
    icon: "streamline-freehand-home",
    label: "Home",
    ariaLabel: "Go to Home page",
    exact: true
  },
  {
    to: "/about",
    icon: "streamline-freehand-task-list-pen",
    label: "About",
    ariaLabel: "Go to About page"
  },
  {
    to: "/contact",
    icon: "streamline-freehand-collaboration-team-chat",
    label: "Contact",
    ariaLabel: "Go to Contact page"
  }
];
</script>

<template>
  <nav class="app-nav">
    <ul class="app-nav__list">
      <li class="app-nav__item" v-for="item in navItems" :key="item.to">
        <NavItem :link="item" />
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
