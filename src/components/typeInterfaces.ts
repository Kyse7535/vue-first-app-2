export interface FileProduct {
    searchTerm:                 string;
    categoryName:               string;
    itemCount:                  number;
    redirectUrl:                string;
    products:                   Product[];
    facets:                     Facet[];
    diagnostics:                Diagnostics;
    searchPassMeta:             SearchPassMeta;
    queryId:                    null;
    discoverSearchProductTypes: any[];
}

export interface Diagnostics {
    requestId:                string;
    processingTime:           number;
    queryTime:                number;
    recommendationsEnabled:   boolean;
    recommendationsAnalytics: RecommendationsAnalytics;
}

export interface RecommendationsAnalytics {
    personalisationStatus: number;
    numberOfItems:         number;
    personalisationType:   string;
    items:                 any[];
}

export interface Facet {
    id:                string;
    name:              string;
    facetValues:       FacetValue[];
    displayStyle:      string;
    facetType:         string;
    hasSelectedValues: boolean;
}

export interface FacetValue {
    count:      number;
    id:         string;
    name:       string;
    isSelected: boolean;
}

export interface Product {
    id:                number;
    name:              string;
    price:             Price;
    colour:            string;
    colourWayId:       number;
    brandName:         string;
    hasVariantColours: boolean;
    hasMultiplePrices: boolean;
    groupId:           null;
    productCode:       number;
    productType:       ProductType;
    url:               string;
    imageUrl:          string;
}

export interface Price {
    current:       Current;
    previous:      Current;
    rrp:           Current;
    isMarkedDown:  boolean;
    isOutletPrice: boolean;
    currency:      Currency;
}

export enum Currency {
    Usd = "USD",
}

export interface Current {
    value: number | null;
    text:  string;
}

export enum ProductType {
    Product = "Product",
}

export interface SearchPassMeta {
    isPartial:            boolean;
    isSpellcheck:         boolean;
    searchPass:           any[];
    alternateSearchTerms: any[];
}
