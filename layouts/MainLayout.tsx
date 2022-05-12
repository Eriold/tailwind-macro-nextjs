import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Col, Layout, Row } from 'antd'
import { Footer } from '../components/atoms'

const { Header, Content } = Layout

type LayoutProps = {
  children?: ReactNode
  title?: string
}

export const MainLayout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Skydropx test</title>
        <meta name="author" content="Daniel Montoya" />
        <meta
          name="description"
          content="Consulta las mejores tarifas para enviar paquetes nacional e internacional con Skydropx"
        />
        <meta
          name="keywords"
          content="paquetes, envios, nacional, internacional"
        />
        <meta
          property="og:title"
          content="Información sobre envío de paquete"
        />
      </Head>
      <Layout>
        <Content style={{ padding: '20px 0px 75px 0px', backgroundColor: 'white' }}>
          <Row justify="center">
            <Col xs={24} sm={20} md={18} lg={16} xl={14} xxl={12}>
              {children}
            </Col>
          </Row>
        </Content>
        <Footer />
      </Layout>
    </>
  )
}
