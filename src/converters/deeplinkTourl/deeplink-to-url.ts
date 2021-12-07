import { LinkInterface } from "../../interface/link.interface";
import { SearchUrlBuilder } from "./SearchUrlBuilder";
import { ProductDetailUrlBuilder } from "./ProductDetailUrlBuilder";
import Constant from "../constants";
export class DeeplinkServiceToUrl {
    private productDetailUrlBuilder : ProductDetailUrlBuilder;
    private searchUrlBuilder : SearchUrlBuilder;

    constructor(){
        this.productDetailUrlBuilder = new ProductDetailUrlBuilder();
        this.searchUrlBuilder = new SearchUrlBuilder();
    }  
    public DeeplinkServiceToUrl(linkInterface: LinkInterface) {

        if (linkInterface.request.includes(Constant.PRODUCT_CONTENTID_PARAM)) {
            return linkInterface.response = this.productDetailUrlBuilder.builder(linkInterface);
        } else if (linkInterface.request.includes(Constant.SEARCH_QUERY_PARAM)) {
            return linkInterface.response = this.searchUrlBuilder.builder(linkInterface);
        } else {
            return linkInterface.response = Constant.SITE_HOMEPAGE_LINK;
        }
    }
}