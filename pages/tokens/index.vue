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
      return []
    }
  }

}
</script>
