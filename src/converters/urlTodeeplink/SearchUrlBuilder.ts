import { LinkInterface } from "../../interface/link.interface";
import Constant from "../constants";

export class SearchUrlBuilder {
    queryParams?: string;
    public builder(linkInterface: LinkInterface) {
        let params = linkInterface.request;
        this.queryParams = params.substring(params.lastIndexOf(Constant.Q_EQ) + 2, params.length);
        const deeplink = Constant.SITE_HOMEPAGE_DEEPLINK_SR + this.queryParams;
        return deeplink;
    }
}