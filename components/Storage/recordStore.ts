import { defineStore } from "pinia";
import { IRecord } from "~/types";

export const useRecordStore = defineStore("record-store", {
    state: () => ({
        loading: false,
        records: [] as IRecord[],
    }),
    actions: {
        //get all
        async getRecords() {
            try{
                this.loading = true;
                let data = await $fetch<IRecord[]> ("/api/records");
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
