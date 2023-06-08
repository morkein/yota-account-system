import { OperationType, PaymentType } from '~/types'

export const idRules = [
  (value: number) => {
    if (value !== null) { return true }
    return 'Поле ID обязательно для заполнения'
  }
]

export const operationTypeRules = [
  (value: OperationType) => {
    if (value !== null) { return true }
    return 'Поле Тип операции обязательно для заполнения'
  }
]
export const summRules = [
  (value: number) => {
    if (value !== null) { return true }
    return 'Поле Сумма обязательно для заполнения'
  }
]
export const paymentTypeRules = [
  (value: PaymentType) => {
    if (value !== null) { return true }
    return 'Поле Вид оплаты обязательно для заполнения'
  }
]
