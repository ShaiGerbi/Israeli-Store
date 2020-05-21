<template>
  <products :items="tokens"></products>
</template>

<script>
import Products from '@/components/Products'

export default {

  name: 'TokensIndex',

  components: {
    Products
  },

  computed: {
    tokens () {
      return this.$store.getters['tokens/all']
    }
  },

  created () {
    this.$store.dispatch('tokens/fetchAll')
  }

}
</script>
