<template>
  <div>
    <nav-top></nav-top>
    <div class='container-fluid'>
      <div class='row'>
        <div class='col-xs-12'>
          <ul class='breadcrumb pull-left'>
            <li><router-link :to="{ name: 'root_path' }">{{ $t('dashboard.title') }}</router-link>
            <li><router-link :to="{ name: 'supplements_path' }">{{ $t('supplements.title') }}</router-link>
            <li>{{ $t('supplements.editing_supplement')}}</li>
          </ul>
        </div>
        <div class='col-xs-12'>
          <form v-on:submit.prevent="update" accept-charset="UTF-8" class="form">
            <form-supplement></form-supplement>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormSupplement from './_form.vue'

export default {
  components: {
    'form-supplement': FormSupplement
  },

  data: function() {
    return this.$store.state.SupplementStore;
  },

  mounted: function() {
    this.$store.dispatch('SupplementStore/edit', this.$route.params.id)
  },

  methods: {
    update: function() {
      this.$store.dispatch('SupplementStore/update', this.supplement)
    }
  }
}
</script>
