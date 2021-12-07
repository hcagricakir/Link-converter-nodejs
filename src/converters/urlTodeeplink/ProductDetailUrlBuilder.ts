import { LinkInterface } from "../../interface/link.interface";
import Constant from "../constants";
export class ProductDetailUrlBuilder {

    contentId?: string;
    boutiqueId?: string;
    merchantId?: string;
    campaignId?: string;

    public builder(linkInterface:LinkInterface) {
        let params = linkInterface.request;
        this.contentId = params.substring(params.lastIndexOf(Constant.P_PARAM) + 3, (params.includes(Constant.Q_PARAM) ? params.lastIndexOf(Constant.Q_PARAM) : params.length));
        this.boutiqueId = params.includes(Constant.BOUTIQUE_ID_LOWER) ? this.getOnlyId(params.split(Constant.BOUTIQUE_ID_EQ)[1]) : "";
        this.merchantId = params.includes(Constant.MERCHANT_ID_PARAM) ? this.getOnlyId(params.split(Constant.MERCHANT_ID_EQ)[1]) : "";
        this.campaignId = this.boutiqueId;

        this.campaignId = this.campaignId ? Constant.CAMPAIGN_ID_PARAM_UP_EQ + this.campaignId : "";
        this.merchantId = this.merchantId ? Constant.MERCHANT_ID_PARAM_UP_EQ + this.merchantId : "";
        const deeplink = Constant.SITE_HOMEPAGE_DEEPLINK_PC + this.contentId + this.campaignId + this.merchantId;
        return deeplink;
    }
    private getOnlyId(restOfstring: string): string {
        if (restOfstring.includes("&")) {
            return restOfstring.split("&")[0];
        }
        return restOfstring;
    }
}