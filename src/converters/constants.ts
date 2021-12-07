const enum Constant {
    SITE_HOMEPAGE_LINK = "https://www.longUrl.com",
    SITE_HOMEPAGE_BRAND = "https://www.longUrl.com/brand/name-p-",
    SITE_HOMEPAGE_SR = "https://www.longUrl.com/sr?q=",

    SITE_HOMEPAGE_DEEPLINK = "dl://?Page=Home",
    SITE_HOMEPAGE_DEEPLINK_PC = "dl://?Page=Product&ContentId=",
    SITE_HOMEPAGE_DEEPLINK_SR = "dl://?Page=Search&Query=",

    PRODUCT_CONTENTID_PARAM = "Product&ContentId=",
    
    SEARCH_QUERY_PARAM = "Search&Query=",
    SEARCH_PARAM = "/sr",
    CAMPAIGN_ID_PARAM = "&CampaignId",
    CAMPAIGN_ID_PARAM_UP_EQ = "&CampaignId=",


    MERCHANT_ID_PARAM_UPPER = "MerchantId",
    MERCHANT_ID_PARAM_LOWER = "&merchantId",
    MERCHANT_ID_PARAM_UP_EQ = "&MerchantId=",
    MERCHANT_ID_PARAM = "merchantId",
    MERCHANT_ID_EQ = "merchantId=",

    BOUTIQUE_ID_PARAM = "?boutiqueId",
    BOUTIQUE_ID_LOWER = "boutiqueId",
    BOUTIQUE_ID_EQ = "boutiqueId=",
    P_PARAM = "-p-",
    Q_PARAM = "?",
    Q_EQ = "q=",




}
export default Constant;