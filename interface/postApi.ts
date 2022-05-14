export interface PropsPostCreateShipments {
  dataObject: {
    address_from: ZipProps;
    address_to: ZipProps;
    parcels: ParcelsProps[];
  }
}

interface ZipProps {
  zip: string;
}

interface ParcelsProps {
  weight: number;
  distance_unit: string;
  mass_unit: string;
  height: number;
  width: number;
  length: number;
}

export interface PropsPostCreateLabel {}
