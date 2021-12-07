import Constant from "../constants";
export class ProductDetailUrlBuilder {

    contentId?: string;
    boutiqueId?: string;
    merchantId?: string;
    campaignId?: string;
    
    public builder(linkInterface : any): string{
        let params = linkInterface.request;
        this.contentId = params.substring(params.lastIndexOf(Constant.PRODUCT_CONTENTID_PARAM) + 18, (params.includes(Constant.CAMPAIGN_ID_PARAM) ? params.lastIndexOf(Constant.CAMPAIGN_ID_PARAM) : params.length));
        this.boutiqueId = params.includes(Constant.CAMPAIGN_ID_PARAM) ? this.getOnlyId(params.split(Constant.CAMPAIGN_ID_PARAM)[1]) : "";
        this.merchantId = params.includes(Constant.MERCHANT_ID_PARAM_UPPER) ? this.getOnlyId(params.split(Constant.MERCHANT_ID_PARAM_UPPER)[1]) : "";
        this.campaignId = this.boutiqueId;

        this.campaignId = this.campaignId ? Constant.BOUTIQUE_ID_PARAM + this.campaignId : "";
        this.merchantId = this.merchantId ? Constant.MERCHANT_ID_PARAM_LOWER + this.merchantId : "";
        const urlLink = Constant.SITE_HOMEPAGE_BRAND + this.contentId + this.campaignId + this.merchantId;
        return urlLink;
    }
    private getOnlyId(restOfstring: string){
        if (restOfstring.includes("&")) {
            return restOfstring.split("&")[0];
        }
        return restOfstring;
    }
}