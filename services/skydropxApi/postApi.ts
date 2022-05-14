import { PropsPostCreateShipments, PropsPostCreateLabel } from '../../interface';
import HttpService from '../HttpServices';

let examplePayload = {
  address_from: {
    province: 'Ciudad de México',
    city: 'Azcapotzalco',
    name: 'Jose Fernando',
    country: 'MX',
    address1: 'Av. Principal #234',
    company: 'skydropx',
    address2: 'Centro',
    phone: '5555555555',
    email: 'skydropx@email.com',
  },
  parcels: [],
  address_to: {
    province: 'Jalisco',
    city: 'Guadalajara',
    name: 'Jorge Fernández',
    country: 'MX',
    address1: ' Av. Lázaro Cárdenas #234',
    company: '-',
    address2: 'Americana',
    phone: '5555555555',
    email: 'ejemplo@skydropx.com',
    reference: 'Frente a tienda de abarro',
    contents: '0',
  },
  consignment_note_class_code: '53131600',
  consignment_note_packaging_code: '1H1',
};

class PostDataService {
  postCreateShipment({dataObject}:PropsPostCreateShipments) {
    const payload = {
      ...examplePayload,
      address_from: {
        ...examplePayload.address_from,
        zip: dataObject.address_from.zip
      },
      address_to: {
        ...examplePayload.address_to,
        zip: dataObject.address_to.zip,
      },
      parcels: dataObject.parcels,
    };
    return HttpService().post(payload, 'shipments');
  }
  postCreateLabel(payload:PropsPostCreateLabel) {
    return HttpService().post(payload, 'labels');
  }
}

export default new PostDataService();
