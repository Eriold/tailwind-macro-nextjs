export interface ResShipment {
    data:     DataClass;
    included: Included[];
}

export interface DataClass {
    id:            string;
    type:          string;
    attributes:    DataAttributes;
    relationships: Relationships;
}

export interface DataAttributes {
    status:     string;
    created_at: Date;
    updated_at: Date;
}

export interface Relationships {
    parcels:                        AddressFrom;
    rates:                          AddressFrom;
    address_to:                     AddressFrom;
    address_from:                   AddressFrom;
    order:                          AddressFrom;
    labels:                         AddressFrom;
    consignment_note_product_class: AddressFrom;
    consignment_note_packaging:     AddressFrom;
    chosen_rate:                    AddressFrom;
}

export interface AddressFrom {
    data: DAT[] | DAT | null;
}

export interface DAT {
    id:   string;
    type: string;
}

export interface Included {
    id:         string;
    type:       Type;
    attributes: IncludedAttributes;
}

export interface IncludedAttributes {
    length?:              string;
    height?:              string;
    width?:               string;
    weight?:              string;
    mass_unit?:           string;
    distance_unit?:       string;
    created_at?:          Date;
    updated_at?:          Date;
    amount_local?:        string;
    currency_local?:      string;
    provider?:            string;
    service_level_name?:  string;
    service_level_code?:  string;
    service_level_terms?: null;
    days?:                number;
    duration_terms?:      null;
    zone?:                null;
    arrives_by?:          null;
    effectiveness?:       null;
    ranking?:             string[];
    out_of_area?:         boolean;
    out_of_area_pricing?: string;
    total_pricing?:       string;
    is_ocurre?:           boolean;
    name?:                string;
    company?:             string;
    address1?:            string;
    address2?:            string;
    city?:                string;
    province?:            string;
    zip?:                 string;
    country?:             string;
    phone?:               string;
    email?:               string;
    reference?:           null | string;
    province_code?:       string;
    contents?:            null | string;
}

export enum Type {
    Addresses = "addresses",
    Parcels = "parcels",
    Rates = "rates",
}

export interface MassageShipment {
    created_at:          Date;
    updated_at:          Date;
    amount_local:        string;
    currency_local:      string;
    provider:            string;
    service_level_name:  string;
    service_level_code:  string;
    service_level_terms: null;
    days:                number;
    duration_terms:      null;
    zone:                null;
    arrives_by:          null;
    effectiveness:       null;
    ranking:             string[];
    out_of_area:         boolean;
    out_of_area_pricing: string;
    total_pricing:       string;
    is_ocurre:           boolean;
    key:                 string;
    rating:              string;
}
