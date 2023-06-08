<script setup lang="ts">
import { ref } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'
import Datepicker from '@vuepic/vue-datepicker'
import { storeToRefs } from 'pinia'
import { DateTime } from 'luxon'
import { headers } from './constants'
import '@vuepic/vue-datepicker/dist/main.css'
import { useRecordStore } from '~/composables/store/recordStore'
import { IRecord } from '~/types'

const recordStore = useRecordStore()
const { date, records, loading, totalCash, totalNoncash, totalSale } = storeToRefs(recordStore)

const dialog = ref<any>(null)

const addItem = () => {
  dialog.value?.open(undefined, (item: IRecord) => {
    item.date = date.value
    recordStore.create(item)
  })
}

const editItem = (item: any) => {
  dialog.value?.open({ ...item }, (item: IRecord) => {
    recordStore.update(item)
  })
}
const deleteItem = (item: any) => {
  recordStore.delete(item._id)
}

const pickerFormat = (date: Date) => DateTime.fromISO(date.toISOString()).toLocaleString(DateTime.DATE_FULL, { locale: 'ru' })

onMounted(() => {
  recordStore.getRecords()
})
</script>

<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="records"
      item-value="ID"
      :loading="loading"
      no-data-text="Записей не найдено"
      :items-per-page="-1"
    >
      <template #top>
        <v-toolbar flat color="white" class="px-4">
          <div style="max-width: 350px;">
            <Datepicker
              :model-value="date"
              :teleport="true"
              position="left"
              :clearable="false"
              locale="ru"
              :enable-time-picker="false"
              :format="pickerFormat"
              select-text="Ок"
              cancel-text="Закрыть"
              @update:model-value="recordStore.setDate($event)"
            />
          </div>
          <v-spacer />
          <v-btn @click="addItem">
            Добавить запись
          </v-btn>
        </v-toolbar>
      </template>
      <template #item.date="{ item }">
        {{ DateTime.fromISO(item.raw.date).toLocaleString(DateTime.TIME_24_SIMPLE) }}
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
      <template #bottom>
        <v-divider />
        <v-container fluid>
          <v-row>
            <v-col>Итого наличными: {{ totalCash }}</v-col>
            <v-col>Итого безналичными: {{ totalNoncash }} </v-col>
            <v-col>Общее кол-во продаж: {{ totalSale }} </v-col>
          </v-row>
        </v-container>
      </template>
    </v-data-table>
  </v-card>
  <Dialog ref="dialog" />
</template>

<script lang="ts">
export default {
  name: 'Table'
}
</script>

<style scoped>

</style>
