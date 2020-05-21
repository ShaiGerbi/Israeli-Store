<template>
  <products :items="stamps"></products>
</template>

<script>
import Products from '@/components/Products'

export default {

  name: 'StampsIndex',

  components: {
    Products
  },

  computed: {
    stamps () {
      return this.$store.getters['stamps/all']
    }
  },

  created () {
    this.$store.dispatch('stamps/fetchAll')
  }

}
</script>
