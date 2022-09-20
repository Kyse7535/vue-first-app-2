import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import type * as types from "@/components/typeInterfaces";
import {options} from "@/store/variable";

// define your typings for the store state
export interface State {
  cart: Array<types.Product>,
  favorites: Array<types.Product>,
  products: Array<types.Product>,
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    cart: [],
    favorites: [],
    products: [],
  },
  getters: {
    getAllProducts(state)  {
      return state.products
    },
    getAllFavorites(state)  {
      return state.favorites
    },
    getCart(state){
      return state.cart
    }
  },
  mutations: {
    initProducts(state, products: Array<types.Product>) {
      state.products = products;
    }
  },
  actions: {
    async fetchProducts(context) {
      const response = await fetch(
          'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US as types.Currency&lang=en-US',
          options)
          .then(response => response.json() as Promise<types.FileProduct>)
          .then(response => {
            console.log(response.products)
            return response.products
          })
          .catch(err => console.error(err));
          if ((response instanceof Array<types.Product>) && JSON.stringify(context.state.products) == JSON.stringify([]) ) {
            context.commit('initProducts', response);
          }
      
    },
     async fetchProductsLocally(context) {
      const products: Array<types.Product> = [
        {
          id: 12315538,
          name: "ASOS DESIGN Wide Fit oxford shoes in tan leather with toe cap",
          price: {
            current: {
              value: 51,
              text: "$51.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Tan",
          colourWayId: 16421506,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1476638,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-wide-fit-oxford-shoes-in-tan-leather-with-toe-cap/prd/12315538?clr=tan&colourWayId=16421506",
          imageUrl: "images.asos-media.com/products/asos-design-wide-fit-oxford-shoes-in-tan-leather-with-toe-cap/12315538-1-tan"
        },
        {
          id: 11635845,
          name: "New Balance 574 V2 Pastel Mint Sneakers",
          price: {
            current: {
              value: 80,
              text: "$80.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Mint",
          colourWayId: 16336877,
          brandName: "New Balance",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1425031,
          productType: "Product" as types.ProductType,
          url: "new-balance/new-balance-574-v2-pastel-mint-sneakers/prd/11635845?clr=mint&colourWayId=16336877",
          imageUrl: "images.asos-media.com/products/new-balance-574-v2-pastel-mint-sneakers/11635845-1-mint"
        },
        {
          id: 12011431,
          name: "ASOS DESIGN backless mule loafer in black leather",
          price: {
            current: {
              value: 56,
              text: "$56.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16409614,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1454384,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-backless-mule-loafer-in-black-leather/prd/12011431?clr=black&colourWayId=16409614",
          imageUrl: "images.asos-media.com/products/asos-design-backless-mule-loafer-in-black-leather/12011431-1-black"
        },
        {
          id: 12686740,
          name: "Lacoste Court Slam chunky sneakers with gum sole in white",
          price: {
            current: {
              value: 121,
              text: "$121.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "White",
          colourWayId: 16427020,
          brandName: "Lacoste",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1505734,
          productType: "Product" as types.ProductType,
          url: "lacoste/lacoste-court-slam-chunky-sneakers-with-gum-sole-in-white/prd/12686740?clr=white&colourWayId=16427020",
          imageUrl: "images.asos-media.com/products/lacoste-court-slam-chunky-sneakers-with-gum-sole-in-white/12686740-1-white"
        },
        {
          id: 12692372,
          name: "Base London Hogan lace ups in brown",
          price: {
            current: {
              value: 119,
              text: "$119.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Brown",
          colourWayId: 16424851,
          brandName: "Base London",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1506343,
          productType: "Product" as types.ProductType,
          url: "base-london/base-london-hogan-lace-ups-in-brown/prd/12692372?clr=brown&colourWayId=16424851",
          imageUrl: "images.asos-media.com/products/base-london-hogan-lace-ups-in-brown/12692372-1-brown"
        },
        {
          id: 12718178,
          name: "House of Hounds cooper creepers in black leather",
          price: {
            current: {
              value: 125,
              text: "$125.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16437086,
          brandName: "House of Hounds",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1508308,
          productType: "Product" as types.ProductType,
          url: "house-of-hounds/house-of-hounds-cooper-creepers-in-black-leather/prd/12718178?clr=black&colourWayId=16437086",
          imageUrl: "images.asos-media.com/products/house-of-hounds-cooper-creepers-in-black-leather/12718178-1-black"
        },
        {
          id: 12860967,
          name: "Nike Training Figertrap sneakers in black",
          price: {
            current: {
              value: 75,
              text: "$75.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16443236,
          brandName: "Nike Training",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1519636,
          productType: "Product" as types.ProductType,
          url: "nike-training/nike-training-figertrap-sneakers-in-black/prd/12860967?clr=black&colourWayId=16443236",
          imageUrl: "images.asos-media.com/products/nike-training-figertrap-sneakers-in-black/12860967-1-black"
        },
        {
          id: 12907504,
          name: "Vans Varix sneakers in black color block",
          price: {
            current: {
              value: 100,
              text: "$100.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16426527,
          brandName: "Vans",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1522124,
          productType: "Product" as types.ProductType,
          url: "vans/vans-varix-sneakers-in-black-color-block/prd/12907504?clr=black&colourWayId=16426527",
          imageUrl: "images.asos-media.com/products/vans-varix-sneakers-in-black-color-block/12907504-1-black"
        },
        {
          id: 12907695,
          name: "Vans Anaheim Sk8-hi sneakers in leaf print",
          price: {
            current: {
              value: 90,
              text: "$90.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16426547,
          brandName: "Vans",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1522173,
          productType: "Product" as types.ProductType,
          url: "vans/vans-anaheim-sk8-hi-sneakers-in-leaf-print/prd/12907695?clr=black&colourWayId=16426547",
          imageUrl: "images.asos-media.com/products/vans-anaheim-sk8-hi-sneakers-in-leaf-print/12907695-1-black"
        },
        {
          id: 12907696,
          name: "Vans Anaheim Stripe Era sneakers in red/blue",
          price: {
            current: {
              value: 80,
              text: "$80.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "White",
          colourWayId: 16426553,
          brandName: "Vans",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1522199,
          productType: "Product as types.ProductType" as types.ProductType,
          url: "vans/vans-anaheim-stripe-era-sneakers-in-red-blue/prd/12907696?clr=white&colourWayId=16426553",
          imageUrl: "images.asos-media.com/products/vans-anaheim-stripe-era-sneakers-in-red-blue/12907696-1-white"
        },
        {
          id: 12907708,
          name: "Vans Anaheim Stripe Sk8-hi sneakers in red/blue",
          price: {
            current: {
              value: 90,
              text: "$90.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency as types.Currency
          },
          colour: "White",
          colourWayId: 16426562,
          brandName: "Vans",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1522207,
          productType: "Product" as types.ProductType,
          url: "vans/vans-anaheim-stripe-sk8-hi-sneakers-in-red-blue/prd/12907708?clr=white&colourWayId=16426562",
          imageUrl: "images.asos-media.com/products/vans-anaheim-stripe-sk8-hi-sneakers-in-red-blue/12907708-1-white"
        },
        {
          id: 12907712,
          name: "Vans Classic Slip-On sneakers In black",
          price: {
            current: {
              value: 50,
              text: "$50.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16426561,
          brandName: "Vans",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1522243,
          productType: "Product" as types.ProductType,
          url: "vans/vans-classic-slip-on-sneakers-in-black/prd/12907712?clr=black&colourWayId=16426561",
          imageUrl: "images.asos-media.com/products/vans-classic-slip-on-sneakers-in-black/12907712-1-black"
        },
        {
          id: 11749003,
          name: "New Look color block plimsolls",
          price: {
            current: {
              value: 24,
              text: "$24.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Multi",
          colourWayId: 16432607,
          brandName: "New Look",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1433697,
          productType: "Product" as types.ProductType,
          url: "new-look/new-look-color-block-plimsolls/prd/11749003?clr=multi&colourWayId=16432607",
          imageUrl: "images.asos-media.com/products/new-look-color-block-plimsolls/11749003-1-multi"
        },
        {
          id: 11749058,
          name: "New Look tassel loafer in navy",
          price: {
            current: {
              value: 45,
              text: "$45.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Navy",
          colourWayId: 16421336,
          brandName: "New Look",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1433701,
          productType: "Product" as types.ProductType,
          url: "new-look/new-look-tassel-loafer-in-navy/prd/11749058?clr=navy&colourWayId=16421336",
          imageUrl: "images.asos-media.com/products/new-look-tassel-loafer-in-navy/11749058-1-navy"
        },
        {
          id: 12267779,
          name: "adidas Original continental 80 vulc sneakers in off white leather",
          price: {
            current: {
              value: 70,
              text: "$70.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Off white",
          colourWayId: 16421317,
          brandName: "adidas Originals",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1472934,
          productType: "Product" as types.ProductType,
          url: "adidas-originals/adidas-original-continental-80-vulc-sneakers-in-off-white-leather/prd/12267779?clr=off-white&colourWayId=16421317",
          imageUrl: "images.asos-media.com/products/adidas-original-continental-80-vulc-sneakers-in-off-white-leather/12267779-1-offwhite"
        },
        {
          id: 12566974,
          name: "Nike P6000 Sneakers in triple white",
          price: {
            current: {
              value: 100,
              text: "$100.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "White",
          colourWayId: 16439250,
          brandName: "Nike",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1496304,
          productType: "Product" as types.ProductType,
          url: "nike/nike-p6000-sneakers-in-triple-white/prd/12566974?clr=white&colourWayId=16439250",
          imageUrl: "images.asos-media.com/products/nike-p6000-sneakers-in-triple-white/12566974-1-white"
        },
        {
          id: 12717957,
          name: "House of Hounds bowie loafers in burgundy hi shine leather",
          price: {
            current: {
              value: 109,
              text: "$109.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Red",
          colourWayId: 16424846,
          brandName: "House of Hounds",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1508281,
          productType: "Product" as types.ProductType,
          url: "house-of-hounds/house-of-hounds-bowie-loafers-in-burgundy-hi-shine-leather/prd/12717957?clr=red&colourWayId=16424846",
          imageUrl: "images.asos-media.com/products/house-of-hounds-bowie-loafers-in-burgundy-hi-shine-leather/12717957-1-red"
        },
        {
          id: 12860966,
          name: "Nike Training Metcon 5 sneakers in green",
          price: {
            current: {
              value: 130,
              text: "$130.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Green",
          colourWayId: 16444706,
          brandName: "Nike Training",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1519634,
          productType: "Product" as types.ProductType,
          url: "nike-training/nike-training-metcon-5-sneakers-in-green/prd/12860966?clr=green&colourWayId=16444706",
          imageUrl: "images.asos-media.com/products/nike-training-metcon-5-sneakers-in-green/12860966-1-green"
        },
        {
          id: 12860970,
          name: "Nike Training Metcon 5 sneakers in black",
          price: {
            current: {
              value: 130,
              text: "$130.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16444671,
          brandName: "Nike Training",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1519631,
          productType: "Product" as types.ProductType,
          url: "nike-training/nike-training-metcon-5-sneakers-in-black/prd/12860970?clr=black&colourWayId=16444671",
          imageUrl: "images.asos-media.com/products/nike-training-metcon-5-sneakers-in-black/12860970-1-black"
        },
        {
          id: 12923508,
          name: "River Island Suede Desert Boots In Dark Gray",
          price: {
            current: {
              value: 79,
              text: "$79.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Gray",
          colourWayId: 16428774,
          brandName: "River Island",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1524283,
          productType: "Product" as types.ProductType,
          url: "river-island/river-island-suede-desert-boots-in-dark-gray/prd/12923508?clr=gray&colourWayId=16428774",
          imageUrl: "images.asos-media.com/products/river-island-suede-desert-boots-in-dark-gray/12923508-1-grey"
        },
        {
          id: 11675109,
          name: "adidas Originals ozweego sneakers in multi pride",
          price: {
            current: {
              value: 110,
              text: "$110.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Multi",
          colourWayId: 16319786,
          brandName: "adidas Originals",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1428219,
          productType: "Product" as types.ProductType,
          url: "adidas-originals/adidas-originals-ozweego-sneakers-in-multi-pride/prd/11675109?clr=multi&colourWayId=16319786",
          imageUrl: "images.asos-media.com/products/adidas-originals-ozweego-sneakers-in-multi-pride/11675109-1-multi"
        },
        {
          id: 11933621,
          name: "ASOS DESIGN Wide Fit oxford shoes in tan leather with toe cap",
          price: {
            current: {
              value: 51,
              text: "$51.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Tan",
          colourWayId: 16412386,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1448475,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-wide-fit-oxford-shoes-in-tan-leather-with-toe-cap/prd/11933621?clr=tan&colourWayId=16412386",
          imageUrl: "images.asos-media.com/products/asos-design-wide-fit-oxford-shoes-in-tan-leather-with-toe-cap/11933621-1-tan"
        },
        {
          id: 12550731,
          name: "ASOS DESIGN stacked heel western chelsea boots in black faux leather",
          price: {
            current: {
              value: 45,
              text: "$45.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16415025,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1495078,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-stacked-heel-western-chelsea-boots-in-black-faux-leather/prd/12550731?clr=black&colourWayId=16415025",
          imageUrl: "images.asos-media.com/products/asos-design-stacked-heel-western-chelsea-boots-in-black-faux-leather/12550731-1-black"
        },
        {
          id: 12686082,
          name: "Lacoste Croco slides with large logo in red",
          price: {
            current: {
              value: 47,
              text: "$47.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Red",
          colourWayId: 16424439,
          brandName: "Lacoste",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1505685,
          productType: "Product" as types.ProductType,
          url: "lacoste/lacoste-croco-slides-with-large-logo-in-red/prd/12686082?clr=red&colourWayId=16424439",
          imageUrl: "images.asos-media.com/products/lacoste-croco-slides-with-large-logo-in-red/12686082-1-red"
        },
        {
          id: 12686098,
          name: "Lacoste Challenge sneakers in triple white leather",
          price: {
            current: {
              value: 101,
              text: "$101.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "White",
          colourWayId: 16424417,
          brandName: "Lacoste",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1505710,
          productType: "Product" as types.ProductType,
          url: "lacoste/lacoste-challenge-sneakers-in-triple-white-leather/prd/12686098?clr=white&colourWayId=16424417",
          imageUrl: "images.asos-media.com/products/lacoste-challenge-sneakers-in-triple-white-leather/12686098-1-white"
        },
        {
          id: 12686749,
          name: "Lacoste Menerva Sport sneakers in white",
          price: {
            current: {
              value: 115,
              text: "$115.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "White",
          colourWayId: 16427046,
          brandName: "Lacoste",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1505732,
          productType: "Product" as types.ProductType,
          url: "lacoste/lacoste-menerva-sport-sneakers-in-white/prd/12686749?clr=white&colourWayId=16427046",
          imageUrl: "images.asos-media.com/products/lacoste-menerva-sport-sneakers-in-white/12686749-1-white"
        },
        {
          id: 11522869,
          name: "ASOS DESIGN brogue boots in stone suede with natural sole",
          price: {
            current: {
              value: 72,
              text: "$72.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Stone",
          colourWayId: 16415038,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1416321,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-brogue-boots-in-stone-suede-with-natural-sole/prd/11522869?clr=stone&colourWayId=16415038",
          imageUrl: "images.asos-media.com/products/asos-design-brogue-boots-in-stone-suede-with-natural-sole/11522869-1-stone"
        },
        {
          id: 11586785,
          name: "ASOS DESIGN Wide Fit stacked heel western chelsea boots in black leather with studding and hardware detail",
          price: {
            current: {
              value: 87,
              text: "$87.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16419692,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1421120,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-wide-fit-stacked-heel-western-chelsea-boots-in-black-leather-with-studding-and-hardware-detail/prd/11586785?clr=black&colourWayId=16419692",
          imageUrl: "images.asos-media.com/products/asos-design-wide-fit-stacked-heel-western-chelsea-boots-in-black-leather-with-studding-and-hardware-detail/11586785-1-black"
        },
        {
          id: 11949726,
          name: "ASOS DESIGN sandals in black with chunky sole and studs",
          price: {
            current: {
              value: 45,
              text: "$45.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16411499,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1449743,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-sandals-in-black-with-chunky-sole-and-studs/prd/11949726?clr=black&colourWayId=16411499",
          imageUrl: "images.asos-media.com/products/asos-design-sandals-in-black-with-chunky-sole-and-studs/11949726-1-black"
        },
        {
          id: 11949734,
          name: "ASOS DESIGN sliders in black with tape slingback",
          price: {
            current: {
              value: 19,
              text: "$19.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16444229,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1449741,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-sliders-in-black-with-tape-slingback/prd/11949734?clr=black&colourWayId=16444229",
          imageUrl: "images.asos-media.com/products/asos-design-sliders-in-black-with-tape-slingback/11949734-1-black"
        },
        {
          id: 12010338,
          name: "ASOS DESIGN Wide Fit backless mule loafer in tan leather with snaffle",
          price: {
            current: {
              value: 64,
              text: "$64.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Tan",
          colourWayId: 16392236,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1454292,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-wide-fit-backless-mule-loafer-in-tan-leather-with-snaffle/prd/12010338?clr=tan&colourWayId=16392236",
          imageUrl: "images.asos-media.com/products/asos-design-wide-fit-backless-mule-loafer-in-tan-leather-with-snaffle/12010338-1-tan"
        },
        {
          id: 12010742,
          name: "ASOS DESIGN loafers in black leather with gold snaffle",
          price: {
            current: {
              value: 64,
              text: "$64.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16415049,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1454340,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-loafers-in-black-leather-with-gold-snaffle/prd/12010742?clr=black&colourWayId=16415049",
          imageUrl: "images.asos-media.com/products/asos-design-loafers-in-black-leather-with-gold-snaffle/12010742-1-black"
        },
        {
          id: 12011442,
          name: "ASOS DESIGN Wide Fit derby shoes in gray suede with piped edging",
          price: {
            current: {
              value: 51,
              text: "$51.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Gray",
          colourWayId: 16417826,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1454369,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-wide-fit-derby-shoes-in-gray-suede-with-piped-edging/prd/12011442?clr=gray&colourWayId=16417826",
          imageUrl: "images.asos-media.com/products/asos-design-wide-fit-derby-shoes-in-gray-suede-with-piped-edging/12011442-1-grey"
        },
        {
          id: 12011459,
          name: "ASOS DESIGN monk shoes in brown leather with brogue detail",
          price: {
            current: {
              value: 72,
              text: "$72.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Brown",
          colourWayId: 16419701,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1454378,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-monk-shoes-in-brown-leather-with-brogue-detail/prd/12011459?clr=brown&colourWayId=16419701",
          imageUrl: "images.asos-media.com/products/asos-design-monk-shoes-in-brown-leather-with-brogue-detail/12011459-1-brown"
        },
        {
          id: 12018593,
          name: "ASOS DESIGN stacked heel western chelsea boots in silver glitter",
          price: {
            current: {
              value: 48,
              text: "$48.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Multi",
          colourWayId: 16429935,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1454762,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-stacked-heel-western-chelsea-boots-in-silver-glitter/prd/12018593?clr=multi&colourWayId=16429935",
          imageUrl: "images.asos-media.com/products/asos-design-stacked-heel-western-chelsea-boots-in-silver-glitter/12018593-1-multi"
        },
        {
          id: 12091885,
          name: "ASOS DESIGN lace up shoes in gray suede with natural sole",
          price: {
            current: {
              value: 51,
              text: "$51.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Gray",
          colourWayId: 16417830,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1460330,
          productType: "Product" as types.ProductType,
          url: "asos-design/asos-design-lace-up-shoes-in-gray-suede-with-natural-sole/prd/12091885?clr=gray&colourWayId=16417830",
          imageUrl: "images.asos-media.com/products/asos-design-lace-up-shoes-in-gray-suede-with-natural-sole/12091885-1-grey"
        },
        {
          id: 12686066,
          name: "Lacoste Partner Retro runners in black",
          price: {
            current: {
              value: 115,
              text: "$115.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16427025,
          brandName: "Lacoste",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1505713,
          productType: "Product" as types.ProductType,
          url: "lacoste/lacoste-partner-retro-runners-in-black/prd/12686066?clr=black&colourWayId=16427025",
          imageUrl: "images.asos-media.com/products/lacoste-partner-retro-runners-in-black/12686066-1-black"
        },
        {
          id: 12686095,
          name: "Lacoste Croco slides with large logo in black",
          price: {
            current: {
              value: 47,
              text: "$47.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16424421,
          brandName: "Lacoste",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1505679,
          productType: "Product" as types.ProductType,
          url: "lacoste/lacoste-croco-slides-with-large-logo-in-black/prd/12686095?clr=black&colourWayId=16424421",
          imageUrl: "images.asos-media.com/products/lacoste-croco-slides-with-large-logo-in-black/12686095-1-black"
        },
        {
          id: 12688882,
          name: "Ted Baker esheron canvas sneakers in black",
          price: {
            current: {
              value: 125,
              text: "$125.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16440193,
          brandName: "Ted Baker",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1505906,
          productType: "Product" as types.ProductType,
          url: "ted-baker/ted-baker-esheron-canvas-sneakers-in-black/prd/12688882?clr=black&colourWayId=16440193",
          imageUrl: "images.asos-media.com/products/ted-baker-esheron-canvas-sneakers-in-black/12688882-1-black"
        },
        {
          id: 12688915,
          name: "Ted Baker daiser loafer in brown suede",
          price: {
            current: {
              value: 220,
              text: "$220.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Brown",
          colourWayId: 16440186,
          brandName: "Ted Baker",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1505913,
          productType: "Product" as types.ProductType,
          url: "ted-baker/ted-baker-daiser-loafer-in-brown-suede/prd/12688915?clr=brown&colourWayId=16440186",
          imageUrl: "images.asos-media.com/products/ted-baker-daiser-loafer-in-brown-suede/12688915-1-brown"
        },
        {
          id: 12688919,
          name: "Ted Baker lhennis sneakers in gray",
          price: {
            current: {
              value: 173,
              text: "$173.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Gray",
          colourWayId: 16440199,
          brandName: "Ted Baker",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1505910,
          productType: "Product" as types.ProductType,
          url: "ted-baker/ted-baker-lhennis-sneakers-in-gray/prd/12688919?clr=gray&colourWayId=16440199",
          imageUrl: "images.asos-media.com/products/ted-baker-lhennis-sneakers-in-gray/12688919-1-grey"
        },
        {
          id: 12688922,
          name: "Ted Baker daiser loafer in black leather",
          price: {
            current: {
              value: 220,
              text: "$220.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Black",
          colourWayId: 16440184,
          brandName: "Ted Baker",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1505911,
          productType: "Product" as types.ProductType,
          url: "ted-baker/ted-baker-daiser-loafer-in-black-leather/prd/12688922?clr=black&colourWayId=16440184",
          imageUrl: "images.asos-media.com/products/ted-baker-daiser-loafer-in-black-leather/12688922-1-black"
        },
        {
          id: 11072800,
          name: "Havaianas Top flip flops in white",
          price: {
            current: {
              value: 29,
              text: "$29.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "White",
          colourWayId: 16353711,
          brandName: "Havaianas",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1384117,
          productType: "Product" as types.ProductType,
          url: "havaianas/havaianas-top-flip-flops-in-white/prd/11072800?clr=white&colourWayId=16353711",
          imageUrl: "images.asos-media.com/products/havaianas-top-flip-flops-in-white/11072800-1-white"
        },
        {
          id: 11208675,
          name: "Dr Martens 8092 Arc sandals in dark brown",
          price: {
            current: {
              value: 95.5,
              text: "$95.50"
            },
            previous: {
              value: 137,
              text: "$137.00"
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: true,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Brown",
          colourWayId: 16356891,
          brandName: "Dr Martens",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1395162,
          productType: "Product" as types.ProductType,
          url: "dr-martens/dr-martens-8092-arc-sandals-in-dark-brown/prd/11208675?clr=brown&colourWayId=16356891",
          imageUrl: "images.asos-media.com/products/dr-martens-8092-arc-sandals-in-dark-brown/11208675-1-brown"
        },
        {
          id: 11608251,
          name: "Superdry Adam espadrille shoes in gray",
          price: {
            current: {
              value: 39.5,
              text: "$39.50"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Gray",
          colourWayId: 16338048,
          brandName: "Superdry",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1422160,
          productType: "Product" as types.ProductType,
          url: "superdry/superdry-adam-espadrille-shoes-in-gray/prd/11608251?clr=gray&colourWayId=16338048",
          imageUrl: "images.asos-media.com/products/superdry-adam-espadrille-shoes-in-gray/11608251-1-grey"
        },
        {
          id: 12565459,
          name: "Nike Air Force 1 with sneakers red swoosh and gum sole",
          price: {
            current: {
              value: 90,
              text: "$90.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "White/red",
          colourWayId: 16442410,
          brandName: "Nike",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1496247,
          productType: "Product" as types.ProductType,
          url: "nike/nike-air-force-1-with-sneakers-red-swoosh-and-gum-sole/prd/12565459?clr=white-red&colourWayId=16442410",
          imageUrl: "images.asos-media.com/products/nike-air-force-1-with-sneakers-red-swoosh-and-gum-sole/12565459-1-whitered"
        },
        {
          id: 12592338,
          name: "River Island espadrilles in tan",
          price: {
            current: {
              value: 28,
              text: "$28.00"
            },
            previous: {
              value: 40,
              text: "$40.00"
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: true,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Tan",
          colourWayId: 16434402,
          brandName: "River Island",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1498332,
          productType: "Product" as types.ProductType,
          url: "river-island/river-island-espadrilles-in-tan/prd/12592338?clr=tan&colourWayId=16434402",
          imageUrl: "images.asos-media.com/products/river-island-espadrilles-in-tan/12592338-1-tan"
        },
        {
          id: 12688925,
          name: "Ted Baker mitack brogues in tan leather",
          price: {
            current: {
              value: 173,
              text: "$173.00"
            },
            previous: {
              value: null,
              text: ""
            },
            rrp: {
              value: null,
              text: ""
            },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD" as types.Currency
          },
          colour: "Tan",
          colourWayId: 16440202,
          brandName: "Ted Baker",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 1505920,
          productType: "Product" as types.ProductType,
          url: "ted-baker/ted-baker-mitack-brogues-in-tan-leather/prd/12688925?clr=tan&colourWayId=16440202",
          imageUrl: "images.asos-media.com/products/ted-baker-mitack-brogues-in-tan-leather/12688925-1-tan"
        }
      ];

      const response = await new Promise<Array<types.Product>>(
        resolve => setTimeout(() => resolve(products), 3000)
      ).then(res => res)
      if (JSON.stringify(context.state.products) == JSON.stringify([])) {
            context.commit('initProducts', response)
      }
      
  }
}
})