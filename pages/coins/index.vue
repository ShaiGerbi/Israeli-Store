<template>
  <products :items="coins"></products>
</template>

<script>
import Products from '@/components/Products'

export default {

  name: 'CoinsIndex',

  components: {
    Products
  },

  computed: {
    coins () {
      return this.$store.getters['coins/all']
    }
  },

  created () {
    this.$store.dispatch('coins/fetchAll')
  }

}
</script>
