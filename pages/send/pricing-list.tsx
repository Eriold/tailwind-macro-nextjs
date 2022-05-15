import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, CardShadow, Title } from '../../components/atoms'
import { MainLayout } from '../../layouts'
import { Alert, Col, Modal, notification, Row, Table } from 'antd'
import { dateSpanish } from '../../utils/formatDate'
import { rankingStarts, ratingStarts } from '../../constants/starts'
import { ColumnsType } from 'antd/lib/table'
import { DefaultRecordType } from 'rc-table/lib/interface'
import { StyledTable } from '../../styles/tableStyled.styles'
import { PostDataService } from '../../services'
import { useAppSelector } from '../../hooks/dispatch'
import { PropsPostCreateShipments } from '../../interface'
import { ResShipment, MassageShipment, Included } from '../../interface'

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
  const router = useRouter()

  const [retry, setRetry] = useState(false)
  const [dataTable, setDataTable] = useState<MassageShipment[]>([])
  const [spinerDataTable, setSpinerDataTable] = useState<boolean>(true)
  const [errorIncludedNull, seterrorIncludedNull] = useState<boolean>(false)
  const [showModalErr, setShowModalErr] = useState({
    show: false,
    message: null,
  })
  const [showModalSuccess, setShowModalSuccess] = useState({
    show: false,
    url: '',
  })

  const { from, to } = useAppSelector(state => state.user)
  const { forms } = useAppSelector(state => state.parcel.forms)

  const postCreateLabel = (rate_id: number) => {
    PostDataService.postCreateLabel(rate_id)
      .then(res => {
        if (res.data.attributes.status === 'ERROR') {
          setShowModalErr({
            show: true,
            message: res.data.attributes.error_message[0].message,
          })
        } else {
          setShowModalSuccess({
            show: true,
            url: res.data.attributes.tracking_url_provider,
          })
        }
      })
      .catch(err => {
        setShowModalErr({ message: err, show: true })
      })
  }

  const postCreateShipment = () => {
    setSpinerDataTable(true)
    seterrorIncludedNull(false)
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
    PostDataService.postCreateShipment(payload)
      .then((res: ResShipment) => {
        // @ts-ignore
        const dataMassage: MassageShipment[] = res.included
          .filter((includ: Included) => includ.type === 'rates')
          .map((includ: Included) => ({
            ...includ.attributes,
            key: includ.id,
            rating: ratingStarts(includ.attributes.ranking),
          }))
        if (dataMassage.length === 0) {
          seterrorIncludedNull(true)
        } else {
          setDataTable(dataMassage)
        }
        setSpinerDataTable(false)
      })
      .catch(err => {
        notification.error({
          message: 'Ha ocurrido un error',
          description: 'Este error puede asociarse al servidor' + err,
          placement: 'top',
        })
        setTimeout(() => {
          router.push('/')
        }, 4000)
      })
  }
  const modalStateErr = () => {
    setShowModalErr({ ...showModalErr, show: false })
    setRetry(!retry)
  }
  const modalStateSuccess = () => {
    setShowModalSuccess({ ...showModalSuccess, show: false })
    router.push('/')
  }
  useEffect(() => {
    postCreateShipment()
  }, [retry])
  return (
    <MainLayout>
      <CardShadow>
        <Title text="Selecciona la opción de preferencia" />
        {errorIncludedNull && (
          <Alert
            message="Aviso"
            description="No se encontraron servicios para tu paquete, intenta otra dirección o proporciones del paquete."
            type="warning"
            showIcon
          />
        )}
        <StyledTable>
          <Table
            columns={columns}
            dataSource={dataTable}
            key="key"
            onRow={record => ({
              onClick: () => {
                postCreateLabel(parseInt(record.key))
              },
            })}
            loading={spinerDataTable}
          />
        </StyledTable>
        <Link href="/">
          <Button>Regresar al inicio</Button>
        </Link>
      </CardShadow>
      <Modal
        visible={showModalErr.show}
        okText="Reintentar"
        onOk={modalStateErr}
        cancelButtonProps={{ style: { display: 'none' } }}
        closable={false}
      >
        <Alert
          message="Se encontró un error al generar la guía"
          description={
            showModalErr.message ||
            'No se encontraron servicios para tu paquete, intenta con otro servicio diferente.'
          }
          type="error"
          showIcon
        />
      </Modal>
      <Modal
        visible={showModalSuccess.show}
        okText="Finalizar"
        onOk={modalStateSuccess}
        cancelButtonProps={{ style: { display: 'none' } }}
        closable={false}
      >
        <Alert
          message="La guía fue generada correctamente"
          description="Puedes descargar la guía generada automáticamente"
          type="success"
          showIcon
        />
        <Row align="middle" justify="center" style={{ paddingTop: '12px' }}>
          <Col>
            <a href={showModalSuccess.url} target="_blank">
              <Button>Descargar guía</Button>
            </a>
          </Col>
        </Row>
      </Modal>
    </MainLayout>
  )
}

export default PricingList
