<template>
  <div>
    <nav-top></nav-top>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <ul class="breadcrumb pull-left">
            <li><router-link :to="{ name: 'root_path' }">{{ $t('dashboard.title') }}</router-link>
            <li>{{ $t('supplements.title') }}</li>
          </ul>
          <div class="pull-right">
            <router-link :to="{ name: 'new_supplement_path' }" class="add-link">{{ $t('supplements.create') }}</router-link>
          </div>
          <div class="clearfix"></div>

          <filters :supplement="supplements"></filters>

          <table class="table table-striped table-thin">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Band</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='supplement in supplements'>
                <td><router-link :to="{ name: 'edit_supplement_path', params: { id: supplement.id }}">{{ supplement.id }}</router-link></td>
                <td><router-link :to="{ name: 'edit_supplement_path', params: { id: supplement.id }}">{{ supplement.name }}</router-link></td>
                <td>{{ supplement.amount }}</td>
                <td><a href="#" @click="destroy(supplement.id)">×</a></td>
              </tr>
            </tbody>
          </table>
          <pagination :pagination='pagination'></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '../shared/_pagination.vue'
import Filters from './_filters.vue'

export default {
  components: {
    'pagination': Pagination,
    'filters': Filters
  },

  data: function() {
    return this.$store.state.SupplementStore;
  },

  mounted: function() {
    this.$store.dispatch('SupplementStore/index', this.$route.query);
  },

  methods: {
    destroy: function(user_id) {
      if(confirm(this.$t('confirmation'))) {
        this.$store.dispatch('SupplementStore/destroy', user_id).then(
          response => {
            this.$store.dispatch('SupplementStore/index');
          }
        )
      }
    }
  }
}
</script>
