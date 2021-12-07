import knexDB from '../db/knex';
import {LinkInterface} from '../interface/link.interface';
import {DatabaseError} from "../common/http-exeption"
export class LinkRepository {
    public knx: typeof knexDB;

    constructor() {
        this.knx = knexDB;
    }

    async urlToDeeplink(linkInterface: LinkInterface): Promise<LinkInterface> {
        return new Promise(async (resolve, reject) => {
            await this.knx.db("db").insert(linkInterface)
                .returning("response")
                .then((result) => {
                    resolve(result[0]);
                })
                .catch(() => {
                    reject(new DatabaseError("DataBaseError"));

                })
        })
    }

     async deeplinktourl(linkInterface: LinkInterface): Promise<LinkInterface> {
         return new Promise(async (resolve, reject) => {
             await this.knx.db("db").insert(linkInterface)
                 .returning("response")
                 .then((result) => {
                     resolve(result[0]);
                 })
                 .catch(() => {
                     reject(new DatabaseError("DataBaseError"));

                 })
         })
     }

}