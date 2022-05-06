import type { NextPage } from 'next'
import Image from 'next/image'
import { welcome } from '../assets/svg'
import { Button, Title } from '../components/atoms'
import { MainLayout } from '../layouts/MainLayout'
import { Row, Col, Card } from 'antd'

const Home: NextPage = () => {
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
