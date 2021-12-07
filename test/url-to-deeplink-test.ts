import { expect } from "chai";
import { SearchUrlBuilder } from '../src/converters/urlTodeeplink/SearchUrlBuilder'
import { LinkInterface } from "../src/interface/link.interface";
import { ProductDetailUrlBuilder } from '../src/converters/urlTodeeplink/ProductDetailUrlBuilder'
import { UrlToDeeplinkService } from '../src/converters/urlTodeeplink/url-to-deeplink'
describe("UrlToDeeplink", () => {
    it("UrlToDeeplink Search&Query", () => {
        let searchUrlBuilder = new SearchUrlBuilder();

        let request: LinkInterface = {
            request: "https://www.longUrl.com/sr?q=elbise",
            response: ''
        }
        expect(searchUrlBuilder.builder(request)).equal("dl://?Page=Search&Query=elbise")
    })
    it("UrlToDeeplink Product&Detail", () => {
        let productDetailUrlBuilder = new ProductDetailUrlBuilder();

        let request: LinkInterface = {
            request: "https://www.longUrl.com/casio/saat-p-1925865?boutiqueId=439892&merchantId=105064",
            response: ''
        }
        expect(productDetailUrlBuilder.builder(request)).equal("dl://?Page=Product&ContentId=1925865&CampaignId=439892&MerchantId=105064")
    })
    it("UrlToDeeplink Others", () => {
        let urlToDeeplinkService = new UrlToDeeplinkService();

        let request: LinkInterface = {
            request: "https://www.longUrl.com/Hesabim/Favoriler",
            response: ''
        }

        expect(urlToDeeplinkService.urlToDeeplinkService(request)).equal("dl://?Page=Home")
    })





















})