<template>
  <div class="dark:text-white">
    <!-- {{ $colorMode.preference }} -->
    <IconDark
      v-if="$colorMode.preference !== 'dark'"
      class="w-8 h-8"
      @click="changeTheme('dark')"
    />
    <IconLight
      v-else
      class="cursor-pointer fill-white text-white w-8 h-8"
      @click="changeTheme('light')"
    />
  </div>
</template>

<script>
export default {
  name: 'ColorSwitch',
  components: {
    IconDark: () => import('@/assets/icons/dark.svg?inline'),
    IconLight: () => import('@/assets/icons/light.svg?inline'),
  },
  methods: {
    changeTheme(theme) {
      this.$colorMode.preference = theme
    },
  },
}
</script>

<style scoped>
.dark-icon {
  fill: theme('colors.white');
}
</style>
