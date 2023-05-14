<script setup lang="ts">
   import { ref } from "vue";
   import {VForm} from "vuetify/components";

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

   const props = defineProps({
       dialog: Boolean,
   })
   const emit = defineEmits(['update:dialog'])

   const form = ref<VForm | null>(null);

   const onSave = async () => {
       const validation = await form.value?.validate();
       if (validation?.valid) {
         emit('update:dialog', false);
       }
   }
</script>

<template>
    <v-dialog :model-value="dialog" persistent max-width="500px">
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
                    @click="$emit('update:dialog', false)"
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