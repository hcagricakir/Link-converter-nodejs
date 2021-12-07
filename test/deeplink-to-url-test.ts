import { ProductDetailUrlBuilder } from '../src/converters/deeplinkTourl/ProductDetailUrlBuilder'
import { SearchUrlBuilder } from '../src/converters/deeplinkTourl/SearchUrlBuilder';
import { DeeplinkServiceToUrl } from '../src/converters/deeplinkTourl/deeplink-to-url';
import { expect } from 'chai';
import { LinkInterface } from '../src/interface/link.interface'
describe("DeeplinkToUrl", () => {
  it("DeeplinkToUrl Search&Query", () => {
    let searchUrlBuilder = new SearchUrlBuilder();

    let request: LinkInterface = {
      request: "dl://?Page=Search&Query=elbise",
      response: ''
    }
    expect(searchUrlBuilder.builder(request)).equal("https://www.longUrl.com/sr?q=elbise")

  });
  it("DeeplinkToUrl Product&Detail", () => {
    let productDetailUrlBuilder = new ProductDetailUrlBuilder();

    let request: LinkInterface = {
      request: "dl://?Page=Product&ContentId=1925865&CampaignId=439892&MerchantId=105064",
      response: ''
    }
    expect(productDetailUrlBuilder.builder(request)).equal("https://www.longUrl.com/brand/name-p-1925865?boutiqueId=439892&merchantId=105064")
  })
  it("DeeplinkToUrl Others", () => {
    let deeplinkServiceToUrl = new DeeplinkServiceToUrl();

    let request: LinkInterface = {
      request: "dl://?Page=Favorites",
      response: ''
    }
    expect(deeplinkServiceToUrl.DeeplinkServiceToUrl(request)).equal("https://www.longUrl.com")


  })
});
