export const headers = [
    { title: 'ID', key: 'id', align: 'start', sortable: true },
    { title: 'Время', key: 'time', align: 'end', sortable: true },
    { title: 'Тип операции', key: 'operation_type', align: 'start', sortable: true },
    { title: 'Сумма', key: 'summ', align: 'end', sortable: true },
    { title: 'Вид оплаты', key: 'payment_type', align: 'start', sortable: false },
    { title: 'Действия', key: 'actions', align: 'start', sortable: false },
]

export const items = [
    { id: 'Петя Петров', time: new Date(Date.now()).toLocaleString(), operation_type: 'Блаблабла', summ: 200, payment_type: 'Карта'  },
    { id: 'Иван Иванов', time: new Date(Date.now()).toLocaleString(), operation_type: 'Блаблабла', summ: 200, payment_type: 'Карта'  },
    { id: 'Гоша Гвоздь', time: new Date(Date.now()).toLocaleString(), operation_type: 'Блаблабла', summ: 200, payment_type: 'Карта'  },
    { id: 'Железный Гарри', time: new Date(Date.now()).toLocaleString(), operation_type: 'Блаблабла', summ: 200, payment_type: 'Карта'  },
]