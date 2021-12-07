export class HttpException extends Error{
    message: string;
    status: number;
    statusCode: number
    constructor(status: number, message: string, statusCode: number) {
        super(message)
        this.message = message;
        this.status = status;
        this.statusCode = statusCode
    }
}

export class DatabaseError extends HttpException {
    constructor(message: string) {
        super(500, message || "Something went wrong", 1);
    }
}

export class ValidationError extends HttpException {
    constructor(message: string) {
        super(400, message || "Validation error",2);
    }
}
