<template>
<div class = 'all'>
  <v-layout row wrap >
    <v-flex  md12 lg4 >
      <v-date-picker v-model="e2" dark></v-date-picker>
    </v-flex>
    <!--<v-flex md12 lg8 class="hidden-xs-only">
      <v-date-picker v-model="e2" actions landscape dark></v-date-picker>
    </v-flex>-->
  </v-layout>
</div>
</template>



<script>
  export default {
   name: 'calendar',
    data () {
      return {
        e2: null,
      }
    }
  }
</script>

<style>
.all{
 text-align: center;
}
</style>


