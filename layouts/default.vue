<template>
  <v-app dark>

    <the-header />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <the-footer />

  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {

  components: {
    TheHeader,
    TheFooter
  }

}
</script>
