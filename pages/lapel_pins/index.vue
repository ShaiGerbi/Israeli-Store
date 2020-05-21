<template>
  <products :items="lapel_pins"></products>
</template>

<script>
import Products from '@/components/Products'

export default {

  name: 'LapelPinsIndex',

  components: {
    Products
  },

  computed: {
    lapel_pins () {
      return this.$store.getters['lapel_pins/all']
    }
  },

  created () {
    this.$store.dispatch('lapel_pins/fetchAll')
  }

}
</script>
