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
  const [sendWeight, setSendWeight] = useState<string>('')
  const [sendHeight, setSendHeight] = useState<string>('')
  const [sendWidth, setSendWidth] = useState<string>('')
  const [sendLength, setSendLength] = useState<string>('')
  const [enableButon, setEnableButton] = useState<boolean>(true)

  const handleWeightValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendWeight(e.currentTarget.value)
  }
  const handleHeightValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendHeight(e.currentTarget.value)
  }
  const handleWidthValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendWidth(e.currentTarget.value)
  }
  const handleLengthValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendLength(e.currentTarget.value)
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
      sendWeight.length > 0 &&
        sendHeight.length > 0 &&
        sendWidth.length > 0 &&
        sendLength.length > 0,
    )
  }, [sendWeight, sendHeight, sendWidth, sendLength])

  return (
    <MainLayout>
      <CardShadow>
        <Row justify="center" gutter={[16, 16]}>
          <Col span={24}>
            <Title text="Información detallada del paquete" />
          </Col>
          <Col span={10}>
            <Image src={parcel} alt="test" sizes="100%" />
          </Col>
          <Col span={24} />
          <Col xs={24} md={9}>
            <InputInfo
              title="Peso en kilogramos (KG)"
              inputProps={{
                name: 'weight',
                type: 'number',
                onChange: handleWeightValue,
              }}
            />
          </Col>
          <Col xs={24} md={9}>
            <InputInfo
              title="Altura en centímetros (CM)"
              inputProps={{
                name: 'height',
                type: 'number',
                onChange: handleHeightValue,
              }}
            />
          </Col>
          <Col xs={24} md={9}>
            <InputInfo
              title="Ancho en centímetros (CM)"
              inputProps={{
                name: 'width',
                type: 'number',
                onChange: handleWidthValue,
              }}
            />
          </Col>
          <Col xs={24} md={9}>
            <InputInfo
              title="Largo en centímetros (CM)"
              inputProps={{
                name: 'length',
                type: 'number',
                onChange: handleLengthValue,
              }}
            />
          </Col>
          <Col span={24}>
            <Row justify="center">
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
