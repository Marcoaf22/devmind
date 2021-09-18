import ColorSwitch from '~/components/ui/ColorSwitch.vue';
<template>
  <div class="h-full overflow-hidden">
    <div class="flex justify-end p-4">
      <ColorSwitch />
    </div>
    <h1 class="text-center text-3xl font-bold">Devmind</h1>
    <div
      class="
        login-body
        mt-12
        h-full
        flex
        justify-center
        items-center
        bg-light
        border-blue-main-800
        dark:bg-blue-main-900
      "
    >
      <SocialLoginButton
        class="border-black"
        type="google"
        text="Iniciar sesion con google"
      />
    </div>
  </div>
</template>

<script>
import ColorSwitch from '~/components/ui/ColorSwitch.vue'
import SocialLoginButton from '~/components/auth/SocialLoginButton.vue'
export default {
  name: 'Login',
  components: {
    ColorSwitch,
    SocialLoginButton,
  },
  layout: 'auth',
}
</script>

<style scoped>
.login-body {
  width: 200%;
  margin-left: -50%;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
}
</style>
