<template>
  <div class='container'>
    <nav-top></nav-top>

    <div class='row'>
      <div class='col-xs-12'>
        <table class='table table-striped table-thin'>
          <thead>
            <tr>
              <th>{{ $t('supplements.name') }}</th>
              <th>{{ $t('supplements.amount') }}</th>
            </tr>
          </thead>
          <tbody>
             <tr v-for='supplement in supplements'>
               <td><router-link :to="{ name: 'supplement_path', params: {id: supplement.id} }">{{ supplement.name }}</router-link></td>
               <td>{{ supplement.amount }}</td>
             </tr>
           </tbody>
         </table>
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
    this.$store.dispatch('SupplementStore/index');
  }
}
</script>
