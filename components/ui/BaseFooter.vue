<template>
  <footer
    class="
      footer
      flex
      justify-around
      px-5
      pt-2
      dark:text-white dark:bg-blue-main-800
    "
  >
    <nuxt-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.url"
      class="flex flex-col items-center"
    >
      <component :is="link.component" class="w-8 h-8 fill-white" />
      <span>{{ link.name }}</span>
    </nuxt-link>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',
  components: {
    HomeIcon: () => import('@/assets/icons/home.svg?inline'),
    AddIcon: () => import('@/assets/icons/add.svg?inline'),
    ProfileIcon: () => import('@/assets/icons/profile.svg?inline'),
  },
  data() {
    return {
      links: [
        {
          icon: 'home',
          name: 'Inicio',
          url: '/',
          component: 'HomeIcon',
        },
        {
          icon: 'add',
          name: 'Nuevo',
          url: '/add',
          component: 'ProfileIcon',
        },
        {
          icon: 'profile',
          name: 'Perfil',
          url: '/profile',
          component: 'AddIcon',
        },
      ],
    }
  },
}
</script>

<style>
.footer {
  height: var(--footer);
}
</style>
