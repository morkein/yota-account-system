import { OperationType, PaymentType } from '~/types'

export const operationTypesItems: OperationType[] = [
  { value: 0, title: 'Смарт сим' },
  { value: 1, title: 'Модем сим' },
  { value: 2, title: 'Изменение ПД' },
  { value: 3, title: 'Замена сим' },
  { value: 4, title: 'Расторжение' },
  { value: 5, title: 'Претензия' },
  { value: 6, title: 'Возврат ДС' }
]
export const paymentTypesItems: PaymentType[] = [
  { value: 0, title: 'Наличные' },
  { value: 1, title: 'Безналичные' }
]
