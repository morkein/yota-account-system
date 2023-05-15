<script setup lang="ts">
   import { ref } from "vue";
   import {VForm} from "vuetify/components";
   import { IRecord } from '~/types'

   const idRules = [
       (value: string) => {
         if (value) return true;
         return 'Поле ID обязательно для заполнения'
       }
   ];
   const timeRules = [
       (value: string) => {
           if (value) return true;
           return 'Поле Время обязательно для заполнения'
       }
   ];
   const operationTypeRules = [
       (value: string) => {
           if (value) return true;
           return 'Поле Тип операции обязательно для заполнения'
       }
   ];
   const summRules = [
       (value: string) => {
           if (value) return true;
           return 'Поле Сумма обязательно для заполнения'
       }
   ];
   const paymentTypeRules = [
       (value: string) => {
           if (value) return true;
           return 'Поле Вид оплаты обязательно для заполнения'
       }
   ];

   const show = ref(false);
   const form = ref<VForm | null>(null);
   const item = ref<IRecord>({id: 0, time: '', operationType: '', summ: 0, paymentType: ''});
   const onSuccess = ref<any>();

   const open = (data = {id: null, time: null, operationType: null, summ: null, paymentType: null}, success: (item: IRecord) => void) => {
       item.value = data as any;
       onSuccess.value = success;
       show.value = true;
   }

   const onSave = async () => {
       const validation = await form.value?.validate();
       if (validation?.valid) {
           show.value = false;
           onSuccess.value(item.value);
       }
   }

   defineExpose({
       open,
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
                                <v-text-field
                                    v-model="item.time"
                                    color="info"
                                    label="Время"
                                    required
                                    :rules="timeRules"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="item.operationType"
                                    color="info"
                                    label="Тип операции"
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
                                <v-text-field
                                    v-model="item.paymentType"
                                    color="info"
                                    label="Вид оплаты"
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
                <v-spacer></v-spacer>
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
    name: 'Dialog',
}
</script>

<style scoped>

</style>
