export default {

  async fetchAll ({ commit }) {
    await this.$axios
      .get('/stamps.json')
      .then((respond) => {
        if (respond.status === 200) {
          commit('setProducts', respond.data)
        }
      })
  }

}
