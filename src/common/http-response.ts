export class Response {
    message: string;
    data?: any;
    status: number;
    constructor(status: number, message: string, data?: any) {
        this.message = message
        this.data = data;
        this.status = status;
          }
}


export class InsertSuccesfull extends Response {
    constructor(public data?: any) {
        super(200, "Insert Succesfull", data);
    }
}
