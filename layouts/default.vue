<template>
  <div>
    <BaseHeader />
    <main class="fill-white dark:bg-black">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import BaseHeader from '@/components/ui/BaseHeader.vue'
export default {
  components: {
    BaseHeader,
  },
}
</script>
