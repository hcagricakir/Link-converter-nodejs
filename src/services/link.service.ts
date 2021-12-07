import { LinkRepository } from "../repository/link.repository";
import { LinkInterface } from "../interface/link.interface";
import { UrlToDeeplinkService } from "../converters/urlTodeeplink/url-to-deeplink";
import { DeeplinkServiceToUrl } from "../converters/deeplinkTourl/deeplink-to-url";
export class LinkServices {
    private linkRepository: LinkRepository;
    private urlToDeeplinkService: UrlToDeeplinkService;
    private deeplinkServiceToUrl: DeeplinkServiceToUrl
    constructor() {
        this.linkRepository = new LinkRepository();
        this.urlToDeeplinkService= new UrlToDeeplinkService();
        this.deeplinkServiceToUrl= new DeeplinkServiceToUrl();
    }

    async urlToDeeplink(linkInterface: LinkInterface ): Promise<LinkInterface> {
        return new Promise((resolve, reject) => {
            this.urlToDeeplinkService.urlToDeeplinkService(linkInterface)
            this.linkRepository
                .urlToDeeplink(linkInterface)
                .then((result) => {
                    return resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
     async deeplinktourl(linkInterface: LinkInterface): Promise<LinkInterface> {
         return new Promise((resolve, reject) => {
             this.deeplinkServiceToUrl.DeeplinkServiceToUrl(linkInterface)
             this.linkRepository
                 .deeplinktourl(linkInterface)
                 .then((result) => {
                     return resolve(result);
                 })
                 .catch((err) => {
                     reject(err);
                 });
         });
     }

}
