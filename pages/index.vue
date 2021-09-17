<template>
  <div class="container dark:bg-black">
    <BaseLink />
    <ColorSwitch />
  </div>
</template>

<script>
import BaseLink from '~/components/ui/BaseLink.vue'
import ColorSwitch from '~/components/ui/ColorSwitch.vue'

export default {
  components: {
    BaseLink,
    ColorSwitch,
  },
  layout: 'default',
}
</script>
