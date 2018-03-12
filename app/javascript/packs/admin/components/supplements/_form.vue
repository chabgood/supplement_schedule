<template>
  <div>
    <div class="form-group">
      <label for="">{{ $t('activerecord.models.supplement.name') }}</label>
      <span class='error'>{{errors.name}}</span>
      <input type="text" v-model="supplement.name" class="form-control">
    </div>
    <div class="form-group">
      <label for="">{{ $t('activerecord.models.supplement.amount') }}</label>
      <span class='error'>{{error.amount}}</span>
      <input type="text" v-model="supplement.amount" class="form-control">
    </div>
    <router-link :to="{ name: 'supplements_path' }" class="btn btn-default pull-left">{{ $t('cancel')}}</router-link>
    <submit-tag :value="$t('save')" klass="btn btn-warning pull-right" :progress="progress"></submit-tag>
  </div>
</template>

<script>
export default {
  data: function() {
    return this.$store.state.SupplementStore;
  }
}
</script>
