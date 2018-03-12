import helpers from '../../helpers';

const SupplementStore = {
  namespaced: true,
  state: {
    supplements: [],
    supplement: {},
    errors: {},
    amount: 0,
    progress: '',
    pagination: {}
  },
  mutations: {
    one(state, data) {
      state.errors = {}
      state.supplement = data.supplement;
      return state;
    },
    many(state, data) {
      state.amount = data.amount;
      state.supplements= data.supplements;
      state.pagination = data.pagination;
      return state;
    },
    progress(state, step) {
      state.progress = step;
      return state.progress;
    },
    errors(state, data) {
      state.errors = helpers.showErrors(data);
      return state.errors;
    }
  },
  actions: {
    index(context, query) {
      $.ajax({
        url: `supplements?${query}`,
        type: 'get',
        data: query,
        success: function(data) {
          context.commit('many', data)
        }
      })
    },
    new(context, id) {
      $.ajax({
        url: `supplements/new`,
        type: 'get',
        success: function(data) {
          context.commit('one', data)
        }
      })
    },
    create(context, form) {
      context.commit('progress', 'loading')
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `supplements`,
          type: 'post',
          data: {
            supplement: form
          },
          success: function(data) {
            context.commit('progress', 'success')
            resolve(data);
          },
          error: function(data) {
            context.commit('progress', 'failed')
            context.commit('errors', data)
          }
        })
      })
    },
    edit(context, id) {
      $.ajax({
        url: `supplements/${id}/edit`,
        type: 'get',
        success: function(data) {
          context.commit('one', data);
        }
      });
    },
    update(context, supplement) {
      context.commit('progress', 'loading')
      $.ajax({
        url: `supplements/${supplement.id}`,
        type: 'put',
        data: {
          supplement: supplement
        },
        success: function(data) {
          context.commit('progress', 'success')
          context.commit('one', data);
        },
        error: function(data) {
          context.commit('progress', 'failed')
          context.commit('errors', data);
        }
      })
    },
    destroy(context, supplement_id) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: `supplements/${supplement_id}`,
          type: 'delete',
          success: function(data) {
            resolve(data);
          },
          error: function(data) {
            reject(data);
          }
        });
      });
    }
  }
};

export default SupplementStore;
