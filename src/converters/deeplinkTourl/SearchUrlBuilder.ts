import { LinkInterface } from "../../interface/link.interface";
import Constant from "../constants";

export class SearchUrlBuilder {
    queryParams?: string;
    public builder(linkInterface: LinkInterface): string {
        let params = linkInterface.request;
        this.queryParams = String(params.substring(params.lastIndexOf(Constant.SEARCH_QUERY_PARAM) + 13, params.length));
        const urlLink = Constant.SITE_HOMEPAGE_SR + this.queryParams;
        return urlLink;
    }
}