<script lang="ts" setup>

// Асинхронная загрузка навигации
const AppNav = defineAsyncComponent(() => import('@layout/AppNav.vue'))

// Реактивный target для Teleport
const target = ref('#footer-nav-target')

// Media Query
let mql: MediaQueryList | null = null

// Computed для определения текущего целевого элемента
const currentTarget = computed(() => {
  return (mql && mql.matches) ? '#aside-nav-target' : '#footer-nav-target'
})

// Функция обновления target
function updateTarget () {
  target.value = currentTarget.value
}

onMounted(() => {
  mql = window.matchMedia('(min-width: 768px)')
  
  // Первоначальная установка
  updateTarget()

  // Слушаем изменение размера экрана
  mql.addEventListener('change', updateTarget)
})

onBeforeUnmount(() => {
  if (mql) {
    mql.removeEventListener('change', updateTarget)
  }
})
</script>

<template>
  <ClientOnly>
    <Teleport :to="target">
      <AppNav />
    </Teleport>
  </ClientOnly>
</template>

<style lang="scss" scoped>
/* Стили при необходимости */
</style>