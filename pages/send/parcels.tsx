import type { NextPage } from 'next'
import Image from 'next/image'
import { parcel } from '../../assets/svg'
import { Button, Title, CardShadow } from '../../components/atoms'
import { MainLayout } from '../../layouts/MainLayout'
import { Row, Col } from 'antd'
import { InputInfo } from '../../components/molecules'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { addParcel } from '../../redux/slices/pacerls'

const ParcelsPage: NextPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [sendWeight, setSendWeight] = useState<number>(0)
  const [sendHeight, setSendHeight] = useState<number>(0)
  const [sendWidth, setSendWidth] = useState<number>(0)
  const [sendLength, setSendLength] = useState<number>(0)
  const [enableButon, setEnableButton] = useState<boolean>(true)

  const handleWeightValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendWeight(parseInt(e.currentTarget.value))
  }
  const handleHeightValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendHeight(parseInt(e.currentTarget.value))
  }
  const handleWidthValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendWidth(parseInt(e.currentTarget.value))
  }
  const handleLengthValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendLength(parseInt(e.currentTarget.value))
  }

  const dispatcherParcels = () => {
    const payload = {
      forms: {
        weight: sendWeight,
        height: sendHeight,
        width: sendWidth,
        length: sendLength,
        distance_unit: 'CM',
        mass_unit: 'KG',
      },
    }
    dispatch(addParcel(payload))
    router.push('/send/pricing-list')
  }

  useEffect(() => {
    setEnableButton(
      sendWeight > 0 && sendHeight > 0 && sendWidth > 0 && sendLength > 0,
    )
  }, [sendWeight, sendHeight, sendWidth, sendLength])

  return (
    <MainLayout>
      <CardShadow>
        <Row justify="center" gutter={[16, 16]} role="main">
          <Col span={24}>
            <Title text="Información detallada del paquete" />
          </Col>
          <Col span={10} role="columnheader">
            <Image src={parcel} alt="test" sizes="100%" />
          </Col>
          <Col span={24} role="columnheader" />
          <Col xs={24} md={9} role="columnheader">
            <InputInfo
              title="Peso en kilogramos (KG)"
              inputProps={{
                name: 'weight',
                type: 'number',
                onChange: handleWeightValue,
              }}
            />
          </Col>
          <Col xs={24} md={9} role="columnheader">
            <InputInfo
              title="Altura en centímetros (CM)"
              inputProps={{
                name: 'height',
                type: 'number',
                onChange: handleHeightValue,
              }}
            />
          </Col>
          <Col xs={24} md={9} role="columnheader">
            <InputInfo
              title="Ancho en centímetros (CM)"
              inputProps={{
                name: 'width',
                type: 'number',
                onChange: handleWidthValue,
              }}
            />
          </Col>
          <Col xs={24} md={9} role="columnheader">
            <InputInfo
              title="Largo en centímetros (CM)"
              inputProps={{
                name: 'length',
                type: 'number',
                onChange: handleLengthValue,
              }}
            />
          </Col>
          <Col span={24} role="columnheader">
            <Row justify="center" role="button">
              <Button
                disabled={!enableButon}
                onClick={() => dispatcherParcels()}
              >
                Siguiente
              </Button>
            </Row>
          </Col>
        </Row>
      </CardShadow>
    </MainLayout>
  )
}

export default ParcelsPage
