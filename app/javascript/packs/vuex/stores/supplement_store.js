const SupplementStore = {
  namespaced: true,
  state: {
    supplements: [],
    supplement: {}
  },
  mutations: {
    one(state, data) {
      state.supplement = data.supplement;
      return state;
    },
    many(state, data) {
      state.supplements= data.supplements;
      return state;
    }
  },
  actions: {
    index(context, query) {
      $.ajax({
        url: `supplements`,
        type: 'get',
        data: query,
        success: function(data) {
          context.commit('many', data)
        }
      })
    },
    show(context, id) {
      $.ajax({
        url: `supplements/${id}`,
        type: 'get',
        success: function(data) {
          context.commit('one', data)
        }
      })
    },
  }
};

export default SupplementStore;
