import express from 'express';
import { LinkController } from './src/controller/link.controller';
import knexDB from './src/db/knex';
import errorHandler from './src/middlewares/error.middleware'
import loggerMiddleware from './src/middlewares/logger.middleware';
import dotenv from 'dotenv';
class Server {

    private linkController: LinkController;
    private app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        dotenv.config();
        knexDB.init();
        this.configuration();
        this.linkController = new LinkController();
        this.routes();
        this.app.use(errorHandler);

    }

    public configuration() {
        this.app.set('port', process.env.POSTGRES_PORT || 3000);
    }

    public async routes() {
        this.linkController = new LinkController();
        this.app.use(loggerMiddleware);
        this.app.use('/api', this.linkController.router);
    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server ${this.app.get('port')} portundan dinleniyor. `);

        })
    }
}

const server = new Server();
server.start();