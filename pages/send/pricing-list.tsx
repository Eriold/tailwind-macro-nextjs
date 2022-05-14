import type { NextPage } from 'next'
import { Button, CardShadow, Title } from '../../components/atoms'
import { MainLayout } from '../../layouts'
import { Table } from 'antd'
import { dateSpanish } from '../../utils/formatDate'
import { rankingStarts, ratingStarts } from '../../constants/starts'
import { ColumnsType } from 'antd/lib/table'
import { DefaultRecordType } from 'rc-table/lib/interface'
import { StyledTable } from '../../styles/tableStyled.styles'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PostDataService } from '../../services'
import { useAppSelector } from '../../hooks/dispatch'
import { PropsPostCreateShipments } from '../../interface'
import {
  ResShipment,
  MassageShipment,
  Included,
} from '../../interface/services/shipment'

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

const PricingList: NextPage = () => {
  const [dataTable, setDataTable] = useState<MassageShipment[]>([])
  const [spinerDataTable, setSpinerDataTable] = useState<boolean>(true)

  const { from, to } = useAppSelector(state => state.user)
  const { forms } = useAppSelector(state => state.parcel.forms)

  const postCreateShipment = () => {
    setSpinerDataTable(true)
    const payload: PropsPostCreateShipments = {
      dataObject: {
        address_from: {
          zip: from,
        },
        address_to: {
          zip: to,
        },
        parcels: [forms],
      },
    }
    PostDataService.postCreateShipment(payload).then((res: ResShipment) => {
      // @ts-ignore
      const dataMassage: MassageShipment[] = res.included
        .filter((includ: Included) => includ.type === 'rates')
        .map((includ: Included) => ({
          ...includ.attributes,
          key: includ.id,
          rating: ratingStarts(includ.attributes.ranking),
        }))
      setDataTable(dataMassage)
      setSpinerDataTable(false)
    })
  }
  useEffect(() => {
    postCreateShipment()
  }, [])
  return (
    <MainLayout>
      <CardShadow>
        <Title text="Selecciona la opción de preferencia" />
        <StyledTable>
          <Table
            columns={columns}
            dataSource={dataTable}
            key="key"
            onRow={record => ({
              onClick: () => {
                console.log(record.key)
              },
            })}
            loading={spinerDataTable}
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
