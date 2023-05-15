<script setup lang="ts">
  import {ref} from 'vue';
  import {VDataTable} from 'vuetify/labs/VDataTable';
  import {headers} from './constants';
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  import { useRecordStore } from '~/components/Storage/recordStore'
  import { IRecord } from '~/types'

  const recordStore = useRecordStore();

  const date = ref(Date.now());
  const dialog = ref<any>(null);

  const addItem = () => {
      dialog.value?.open(undefined, (item: IRecord) => {
          recordStore.create(item);
      });
  }

  const editItem = (item: any) => {
      dialog.value?.open({...item}, (item: IRecord) => {
          recordStore.update(item);
      });
  };
  const deleteItem = (item: any) => {
      recordStore.delete(item._id);
  };

  onMounted(() => {
      recordStore.getRecords();
  })
</script>

<template>
    <v-card>
        <v-data-table :headers="headers" :items="recordStore.records" item-value="ID" :loading="recordStore.loading">
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
    <Dialog ref="dialog"/>
</template>

<script lang="ts">
export default {
    name: 'Table',
}
</script>

<style scoped>

</style>
