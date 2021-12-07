import { LinkInterface } from "../../interface/link.interface";
import Constant from "../constants";
import { SearchUrlBuilder } from "./SearchUrlBuilder";
import { ProductDetailUrlBuilder } from "./ProductDetailUrlBuilder";
export class UrlToDeeplinkService {
    private productDetailUrlBuilder: ProductDetailUrlBuilder;
    private searchUrlBuilder: SearchUrlBuilder;
    
    constructor() {
        this.productDetailUrlBuilder = new ProductDetailUrlBuilder();
        this.searchUrlBuilder = new SearchUrlBuilder();
    }
    public urlToDeeplinkService(linkInterface: LinkInterface) {

        if (linkInterface.request.includes(Constant.P_PARAM)) {
            return linkInterface.response = this.productDetailUrlBuilder.builder(linkInterface);
        } else if (linkInterface.request.includes(Constant.SEARCH_PARAM)) {
            return linkInterface.response = this.searchUrlBuilder.builder(linkInterface);
        } else {
            return linkInterface.response = Constant.SITE_HOMEPAGE_DEEPLINK;
        }
    }  
}
