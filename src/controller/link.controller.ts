import { Router, Response, Request, NextFunction } from "express";
import { LinkServices } from "../services/link.service";
import schema from "../validation/link.validation";
import Joi from "joi";
import { ValidationError } from "../common/http-exeption"
import { InsertSuccesfull } from "../common/http-response";
export class LinkController {
    public router: Router;
    private linkService: LinkServices;
    constructor() {
        this.router = Router();
        this.linkService = new LinkServices();
        this.routes();
    }

    urlToDeeplink(req: Request, res: Response, next: NextFunction) {
        const { body } = req;
        schema.create.validateAsync(body).then((validatedlink) => {
            this.linkService.urlToDeeplink(validatedlink)
                .then((link) => {
                    return res.send(new InsertSuccesfull(link));
                })
                .catch((err) => {
                    next(err);
                });
        })
            .catch((err: Joi.ValidationError) => {
                next(new ValidationError(err.message));
            })
    }
    deeplinktourl(req: Request, res: Response, next: NextFunction) {
        const { body } = req;
        schema.create.validateAsync(body).then((validatedlink) => {
            this.linkService.deeplinktourl(validatedlink)
                .then((link) => {
                    return res.send(new InsertSuccesfull(link));
                })
                .catch((err) => {
                    next(err);
                });
        })
            .catch((err: Joi.ValidationError) => {
                next(new ValidationError(err.message));
            })
    }

    public routes() {

        this.router.post('/url-to-deeplink', this.urlToDeeplink.bind(this));
        this.router.post('/deeplink-to-url', this.deeplinktourl.bind(this));

    }
}