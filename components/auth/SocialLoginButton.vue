<template>
  <button class="rounded-full border py-2 px-6 flex items-center" :class="type">
    <component :is="socialComponent" class="w-6 mr-2" />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'SocialLoginButton',
  components: {
    GoogleIcon: () => import('@/assets/icons/google.svg?inline'),
  },
  props: {
    type: {
      type: String,
      required: true,
      validate: (value) => ['google'].includes(value),
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      socialOptions: {
        google: 'GoogleIcon',
      },
    }
  },
  computed: {
    socialComponent() {
      return this.socialOptions[this.type]
    },
  },
}
</script>
