<script setup lang="ts">
  import {ref} from 'vue';
  import {VDataTable} from 'vuetify/labs/VDataTable';
  import {headers, items} from './constants';
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';

  const date = ref(Date.now());
  const showDialog = ref(false);

  const addItem = () => {
      showDialog.value = true;
  }

  const editItem = (item: any) => {
      showDialog.value = true;
  };
  const deleteItem = (item: any) => {};
</script>

<template>
    <v-card>
        <v-data-table :headers="headers" :items="items" item-value="ID">
            <template #top>
                <v-toolbar flat color="white" class="px-4">
                    <div style="max-width: 350px;">
                        <Datepicker
                            v-model="date"
                            :teleport="true"
                            position="left"
                            :clearable="false"
                            locale="ru"
                        ></Datepicker>
                    </div>
                    <v-spacer/>
                    <v-btn @click="addItem">Добавить запись</v-btn>
                </v-toolbar>
            </template>
            <template #item.actions="{ item }">
                <v-icon
                    size="small"
                    class="me-2"
                    @click="editItem(item.raw)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    size="small"
                    @click="deleteItem(item.raw)"
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </v-card>
    <Dialog v-model:dialog="showDialog"/>
</template>

<script lang="ts">
export default {
    name: 'Table',
}
</script>

<style scoped>

</style>