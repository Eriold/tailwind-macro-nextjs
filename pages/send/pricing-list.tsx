import { NextPage } from 'next'
import { Button, CardShadow, Title } from '../../components/atoms'
import { MainLayout } from '../../layouts'
import { Table } from 'antd'
import { dateSpanish } from '../../utils/formatDate'
import { rankingStarts, ratingStarts } from '../../constants/starts'
import { ColumnsType } from 'antd/lib/table'
import { DefaultRecordType } from 'rc-table/lib/interface'
import { StyledTable } from '../../styles/tableStyled.styles'
import Link from 'next/link'

const preData = {
  data: {
    id: '15928139',
    type: 'shipments',
    attributes: {
      status: 'WAITING',
      created_at: '2022-05-11T10:32:03.124-05:00',
      updated_at: '2022-05-11T10:32:03.171-05:00',
    },
    relationships: {
      parcels: {
        data: [
          {
            id: '72888',
            type: 'parcels',
          },
        ],
      },
      rates: {
        data: [
          {
            id: '414675',
            type: 'rates',
          },
          {
            id: '414674',
            type: 'rates',
          },
          {
            id: '414673',
            type: 'rates',
          },
          {
            id: '414672',
            type: 'rates',
          },
          {
            id: '414671',
            type: 'rates',
          },
          {
            id: '414670',
            type: 'rates',
          },
          {
            id: '414669',
            type: 'rates',
          },
          {
            id: '414668',
            type: 'rates',
          },
          {
            id: '414667',
            type: 'rates',
          },
        ],
      },
      address_to: {
        data: {
          id: '142409',
          type: 'addresses',
        },
      },
      address_from: {
        data: {
          id: '142408',
          type: 'addresses',
        },
      },
      order: {
        data: null,
      },
      labels: {
        data: [],
      },
      consignment_note_product_class: {
        data: {
          id: '3115',
          type: 'consignment_note_product_classes',
        },
      },
      consignment_note_packaging: {
        data: {
          id: '1',
          type: 'consignment_note_packagings',
        },
      },
      chosen_rate: {
        data: null,
      },
    },
  },
  included: [
    {
      id: '72888',
      type: 'parcels',
      attributes: {
        length: '10.0',
        height: '10.0',
        width: '10.0',
        weight: '3.0',
        mass_unit: 'KG',
        distance_unit: 'CM',
      },
    },
    {
      id: '414675',
      type: 'rates',
      attributes: {
        created_at: '2022-05-11T10:32:09.578-05:00',
        updated_at: '2022-05-11T10:32:09.618-05:00',
        amount_local: '134.0',
        currency_local: 'MXN',
        provider: 'CARSSA',
        service_level_name: 'Nacional',
        service_level_code: 'NACIONAL',
        service_level_terms: null,
        days: 10,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        effectiveness: null,
        ranking: [],
        out_of_area: false,
        out_of_area_pricing: '0.0',
        total_pricing: '134.0',
        is_ocurre: false,
      },
    },
    {
      id: '414674',
      type: 'rates',
      attributes: {
        created_at: '2022-05-11T10:32:09.555-05:00',
        updated_at: '2022-05-11T10:32:09.625-05:00',
        amount_local: '362.0',
        currency_local: 'MXN',
        provider: 'DHL',
        service_level_name: 'DHL Express',
        service_level_code: 'EXPRESS',
        service_level_terms: null,
        days: 2,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        effectiveness: null,
        ranking: ['fastest'],
        out_of_area: false,
        out_of_area_pricing: '0.0',
        total_pricing: '362.0',
        is_ocurre: false,
      },
    },
    {
      id: '414673',
      type: 'rates',
      attributes: {
        created_at: '2022-05-11T10:32:09.550-05:00',
        updated_at: '2022-05-11T10:32:09.631-05:00',
        amount_local: '331.0',
        currency_local: 'MXN',
        provider: 'DHL',
        service_level_name: 'DHL Terrestre',
        service_level_code: 'STANDARD',
        service_level_terms: null,
        days: 5,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        effectiveness: null,
        ranking: [],
        out_of_area: false,
        out_of_area_pricing: '0.0',
        total_pricing: '331.0',
        is_ocurre: false,
      },
    },
    {
      id: '414672',
      type: 'rates',
      attributes: {
        created_at: '2022-05-11T10:32:09.311-05:00',
        updated_at: '2022-05-11T10:32:09.637-05:00',
        amount_local: '178.0',
        currency_local: 'MXN',
        provider: 'REDPACK',
        service_level_name: 'Express',
        service_level_code: 'EXPRESS',
        service_level_terms: null,
        days: 2,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        effectiveness: null,
        ranking: ['fastest'],
        out_of_area: false,
        out_of_area_pricing: '0.0',
        total_pricing: '178.0',
        is_ocurre: false,
      },
    },
    {
      id: '414671',
      type: 'rates',
      attributes: {
        created_at: '2022-05-11T10:32:09.305-05:00',
        updated_at: '2022-05-11T10:32:09.644-05:00',
        amount_local: '127.0',
        currency_local: 'MXN',
        provider: 'REDPACK',
        service_level_name: 'Ecoexpress',
        service_level_code: 'ECOEXPRESS',
        service_level_terms: null,
        days: 5,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        effectiveness: null,
        ranking: ['best_price'],
        out_of_area: false,
        out_of_area_pricing: '0.0',
        total_pricing: '127.0',
        is_ocurre: false,
      },
    },
    {
      id: '414670',
      type: 'rates',
      attributes: {
        created_at: '2022-05-11T10:32:03.457-05:00',
        updated_at: '2022-05-11T10:32:09.650-05:00',
        amount_local: '219.0',
        currency_local: 'MXN',
        provider: 'ESTAFETA',
        service_level_name: 'Servicio Express',
        service_level_code: 'ESTAFETA_NEXT_DAY',
        service_level_terms: null,
        days: 2,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        effectiveness: null,
        ranking: ['fastest'],
        out_of_area: false,
        out_of_area_pricing: '0.0',
        total_pricing: '219.0',
        is_ocurre: false,
      },
    },
    {
      id: '414669',
      type: 'rates',
      attributes: {
        created_at: '2022-05-11T10:32:03.452-05:00',
        updated_at: '2022-05-11T10:32:09.657-05:00',
        amount_local: '174.0',
        currency_local: 'MXN',
        provider: 'ESTAFETA',
        service_level_name: 'Terrestre',
        service_level_code: 'ESTAFETA_STANDARD',
        service_level_terms: null,
        days: 5,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        effectiveness: null,
        ranking: [],
        out_of_area: false,
        out_of_area_pricing: '0.0',
        total_pricing: '174.0',
        is_ocurre: false,
      },
    },
    {
      id: '414668',
      type: 'rates',
      attributes: {
        created_at: '2022-05-11T10:32:03.302-05:00',
        updated_at: '2022-05-11T10:32:09.664-05:00',
        amount_local: '271.0',
        currency_local: 'MXN',
        provider: 'FEDEX',
        service_level_name: 'Standard Overnight',
        service_level_code: 'STANDARD_OVERNIGHT',
        service_level_terms: null,
        days: 2,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        effectiveness: null,
        ranking: ['fastest'],
        out_of_area: false,
        out_of_area_pricing: '0.0',
        total_pricing: '271.0',
        is_ocurre: false,
      },
    },
    {
      id: '414667',
      type: 'rates',
      attributes: {
        created_at: '2022-05-11T10:32:03.295-05:00',
        updated_at: '2022-05-11T10:32:09.672-05:00',
        amount_local: '185.0',
        currency_local: 'MXN',
        provider: 'FEDEX',
        service_level_name: 'Fedex Express Saver',
        service_level_code: 'FEDEX_EXPRESS_SAVER',
        service_level_terms: null,
        days: 5,
        duration_terms: null,
        zone: null,
        arrives_by: null,
        effectiveness: null,
        ranking: [],
        out_of_area: false,
        out_of_area_pricing: '0.0',
        total_pricing: '185.0',
        is_ocurre: false,
      },
    },
    {
      id: '142409',
      type: 'addresses',
      attributes: {
        name: 'Jorge Fernández',
        company: '-',
        address1: 'Av. Lázaro Cárdenas #234',
        address2: 'Americana',
        city: 'Guadalajara',
        province: 'Jalisco',
        zip: '44100',
        country: 'MX',
        phone: '5555555555',
        email: 'ejemplo@skydropx.com',
        created_at: '2022-05-11T10:32:03.121-05:00',
        updated_at: '2022-05-11T10:32:03.121-05:00',
        reference: 'Frente a tienda de abarro',
        province_code: 'JA',
        contents: '0',
      },
    },
    {
      id: '142408',
      type: 'addresses',
      attributes: {
        name: 'Jose Fernando',
        company: 'skydropx',
        address1: 'Av. Principal #234',
        address2: 'Centro',
        city: 'Azcapotzalco',
        province: 'Ciudad de México',
        zip: '02900',
        country: 'MX',
        phone: '5555555555',
        email: 'skydropx@email.com',
        created_at: '2022-05-11T10:32:03.117-05:00',
        updated_at: '2022-05-11T10:32:03.117-05:00',
        reference: null,
        province_code: 'DF',
        contents: null,
      },
    },
  ],
}

const columns: ColumnsType<DefaultRecordType> = [
  {
    key: 'provider',
    title: 'Proveedor',
    dataIndex: 'provider',
  },
  {
    key: 'days',
    title: 'Fecha de entrega',
    dataIndex: 'days',
    render: (days: number, service: any) => (
      <span>{dateSpanish(service.created_at, days)}</span>
    ),
    sorter: (a: DefaultRecordType, b: DefaultRecordType) => a.days - b.days,
  },
  {
    key: 'pricing',
    title: 'Costo',
    dataIndex: 'currency_local',
    render: (currency_local: string, service: DefaultRecordType) => (
      <span>
        ${service.total_pricing} {currency_local}
      </span>
    ),
    sorter: (a: DefaultRecordType, b: DefaultRecordType) => a.days - b.days,
  },
  {
    key: 'service_level_name',
    title: 'Tipo de servicio',
    dataIndex: 'service_level_name',
  },
  {
    key: 'rating',
    title: 'Recomendado',
    dataIndex: 'rating',
    render: (rating: string) => <span>{rankingStarts(rating)}</span>,
    sorter: (a: DefaultRecordType, b: DefaultRecordType) => a.rating - b.rating,
    defaultSortOrder: 'descend',
  },
]

const PricingList: NextPage = children => {
  const dataMassage = preData.included
    .filter(item => item.type === 'rates')
    .map(item => ({
      ...item.attributes,
      key: item.id,
      rating: ratingStarts(item.attributes.ranking),
    }))
  return (
    <MainLayout>
      <CardShadow>
        <Title text="Selecciona la opción de preferencia" />
        <StyledTable>
          <Table
            columns={columns}
            dataSource={dataMassage}
            key="key"
            onRow={record => ({
              onClick: () => {
                console.log(record.key)
              },
            })}
          />
        </StyledTable>
        <Link href="/">
          <Button>Regresar al inicio</Button>
        </Link>
      </CardShadow>
    </MainLayout>
  )
}

export default PricingList
