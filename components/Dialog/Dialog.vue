<script setup lang="ts">
import { ref } from 'vue'
import { VForm } from 'vuetify/components'
import { operationTypesItems, paymentTypesItems } from './constants'
import { idRules, operationTypeRules, summRules, paymentTypeRules } from './rules'
import { IRecord } from '~/types'

const show = ref(false)
const form = ref<VForm | null>(null)
const item = ref<IRecord>({ id: 0, date: '', operationType: '', summ: 0, paymentType: '' })
const onSuccess = ref<any>()
const date = ref(Date.now())

const open = (data = { id: null, date: null, operationType: null, summ: null, paymentType: null }, success: (item: IRecord) => void) => {
  item.value = data as any
  onSuccess.value = success
  show.value = true
}

const onSave = async () => {
  const validation = await form.value?.validate()
  if (validation?.valid) {
    show.value = false
    onSuccess.value(item.value)
  }
}

defineExpose({
  open
})
</script>

<template>
  <v-dialog :model-value="show" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Запись</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" validate-on="blur">
            <v-row>
              <v-col>
                <v-text-field
                  v-model="item.id"
                  type="number"
                  color="info"
                  label="ID"
                  required
                  :rules="idRules"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-select
                  v-model="item.operationType"
                  return-object
                  label="Тип операции"
                  :items="operationTypesItems"
                  required
                  :rules="operationTypeRules"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="item.summ"
                  type="number"
                  color="info"
                  label="Сумма"
                  required
                  :rules="summRules"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-select
                  v-model="item.paymentType"
                  return-object
                  label="Тип оплаты"
                  :items="paymentTypesItems"
                  required
                  :rules="paymentTypeRules"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <small>* обязательные поля</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="info"
          variant="text"
          @click="show = false"
        >
          Отменить
        </v-btn>
        <v-btn
          color="info"
          variant="text"
          @click="onSave"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
export default {
  name: 'Dialog'
}
</script>

<style scoped>

</style>
