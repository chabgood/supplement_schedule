<template>
  <div class='container'>
    <nav-top></nav-top>

    <div class='row'>
      <div class='col-xs-12'>
        <h2>{{ supplement.name }}</h2>
        <ul>
          <li>{{ $t('supplement.id') }}: {{ supplement.id }}</li>
          <li>{{ $t('supplement.name') }}: {{ supplement.name }}</li>
          <li>{{ $t('supplement.amount') }}: {{  supplement.amount }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data: function() {
    return this.$store.state.SupplementStore;
  },

  mounted: function() {
    this.$store.dispatch('SupplementStore/show', this.$route.params.id)
  }
}
</script>
