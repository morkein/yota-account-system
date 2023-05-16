import { defineStore } from "pinia";
import { IRecord } from "~/types";

export const useRecordStore = defineStore("record-store", {
    state: () => ({
        loading: false,
        records: [] as IRecord[],
        date: new Date(Date.now()).toISOString(),
    }),
    actions: {
        async setDate(date: string) {
            this.date = new Date(date).toISOString();
            await this.getRecords();
        },
        //get all
        async getRecords() {
            try{
                this.loading = true;
                let data = await $fetch<IRecord[]> (`/api/records?date=${this.date}`);
                this.records = data;
                return data as IRecord[];
            } catch (e) {
                //Alert place
                throw createError({
                    message: (e as Error).message,
                })
                //Alert place
            } finally {
                this.loading = false;
            }
        },
        //create record
        async create(record: IRecord){
            await $fetch("/api/records/create",{
                method: "POST",
                body: record,
            })
            .catch((e) =>{
                //Alert place
                throw createError({
                    message: (e as Error).message,
                })
                //Alert place
            })
            .then(async () => {
                await this.getRecords();
                //Alert place
                //Alert place
            })
        },
        //Update Record
        async update(record: IRecord){
            await $fetch(`/api/records/${record._id}`, {
                method: "PUT",
                body: record,
            })
            .catch((e)=>{
                //Alert place
                throw createError({
                    message: (e as Error).message,
                })
                //Alert place
            })
            .then(async () => {
                await this.getRecords();
                //Alert place
                //Alert place
            })
        },
        async delete(id: string) {
            await $fetch(`/api/records/${id}`, {
                method: "DELETE",
            })
            .catch((e)=>{
                //Alert place
                throw createError({
                    message: (e as Error).message,
                })
                //Alert place
            })
            .then(async() => {
                await this.getRecords();
                //Alert place
                //Alert place
            });
        },
    } ,
});
