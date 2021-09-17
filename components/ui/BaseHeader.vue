<template>
  <header class="dark:text-white">
    <LogoIcon class="w-2" />
  </header>
</template>

<script>
import LogoIcon from '@/assets/icons/tv.svg?inline'
export default {
  name: 'BaseHeader',
  components: {
    LogoIcon,
  },
}
</script>
