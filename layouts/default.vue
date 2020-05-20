<template>
  <v-app dark>

    <the-header />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {

  components: {
    TheHeader
  }

}
</script>
