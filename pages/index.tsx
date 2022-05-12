import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { welcome } from '../assets/svg'
import { Button, Title, CardShadow } from '../components/atoms'
import { MainLayout } from '../layouts/MainLayout'
import { Row, Col } from 'antd'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <CardShadow>
        <Row justify="center" gutter={[16, 16]}>
          <Col span={24}>
            <Title text="Bienvenido" />
          </Col>
          <Col span={20}>
            <Image src={welcome} alt="test" sizes="100%" />
          </Col>
          <Col span={24}>
            <Row justify="center">
              <Link href='/send/from-to'>
              <Button>Continuar</Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </CardShadow>
    </MainLayout>
  )
}

export default Home
