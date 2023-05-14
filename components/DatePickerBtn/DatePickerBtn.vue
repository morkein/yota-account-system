<script setup lang="ts">
  import { ref } from 'vue';
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  const date = ref(Date.now());
</script>

<template>
    <Datepicker v-model="date"></Datepicker>
</template>

<script lang="ts">
  export default {
      name: 'DatePickerBtn',
  }
</script>

<style scoped>

</style>