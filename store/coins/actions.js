export default {

  async fetchAll ({ commit }) {
    await this.$axios
      .get('/db/coins.json')
      .then((respond) => {
        if (respond.status === 200) {
          commit('setProducts', respond.data)
        }
      })
  }

}
