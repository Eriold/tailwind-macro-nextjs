import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fromTo, welcome } from '../assets/svg'
import { Button, Title } from '../components/atoms'
import { PropsPostCreateSnipment } from '../interface'
import { PostDataService } from '../services'
import { MainLayout } from '../layouts/MainLayout'
import { Row, Col, Card } from 'antd'

const templateObject: PropsPostCreateSnipment = {
  dataObject: {
    address_from: {
      zip: '02900',
    },
    address_to: {
      zip: '44100',
    },
    parcels: [
      {
        weight: 3,
        distance_unit: 'CM',
        mass_unit: 'KG',
        height: 10,
        width: 10,
        length: 10,
      },
    ],
  },
}

const Home: NextPage = () => {
  // const [data, setData] = useState({})
  // useEffect(() => {
  //   {
  //     console.log({ data })
  //   }
  // }, [data])

  // const sendBox = async () => {
  //   await PostDataService.postCreateSnipment(templateObject)
  //     .then(datas => {
  //       setData(datas)
  //     })
  //     .catch(err => console.log(err))
  // }

  return (
      <MainLayout>
        <Card>
          <Row justify="center" gutter={[16, 16]}>
            <Col span={24}>
              <Title text="Bienvenido" />
            </Col>
            <Col span={20}>
              <Image src={welcome} alt="test" sizes="100%" />
            </Col>
            <Col span={24}>
              <Row justify="center">
                <Button>Continuar</Button>
              </Row>
            </Col>
          </Row>
        </Card>
      </MainLayout>
  )
}

export default Home
