import type { NextPage } from 'next'
import Image from 'next/image'
import { fromTo } from '../../assets/svg'
import { Button, Title } from '../../components/atoms'
import { MainLayout } from '../../layouts/MainLayout'
import { Row, Col, Card } from 'antd'
import { InputInfo } from '../../components/molecules'
import { useState, useEffect } from 'react'

const FromToPage: NextPage = () => {
  const [sendFrom, setSendFrom] = useState<string>('')
  const [sendTo, setSendTo] = useState<string>('')
  const [enableButon, setEnableButton] = useState<boolean>(true)

  const handleFromValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendFrom(e.currentTarget.value)
  }
  const handleToValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendTo(e.currentTarget.value)
  }

  useEffect(() => {
    setEnableButton(sendFrom.length > 0 && sendTo.length > 0)
  }, [sendTo, sendFrom])
  
  return (
    <MainLayout>
      <Card>
        <Row justify="center" gutter={[16, 16]}>
          <Col span={24}>
            <Title text="De quién y quién recibe" />
          </Col>
          <Col span={10}>
            <Image src={fromTo} alt="test" sizes="100%" />
          </Col>
          <Col span={24} />
          <Col xs={24} md={9} xl={8}>
            <InputInfo
              title="Zip quíen envía"
              inputProps={{
                name: 'from',
                type: 'number',
                onChange: handleFromValue,
              }}
            />
          </Col>
          <Col xs={24} md={9} xl={8}>
            <InputInfo
              title="Zip quíen recibe"
              inputProps={{
                name: 'to',
                type: 'number',
                onChange: handleToValue,
              }}
            />
          </Col>
          <Col span={24}>
            <Row justify="center">
              <Button disabled={!enableButon}>Siguiente</Button>
            </Row>
          </Col>
        </Row>
      </Card>
    </MainLayout>
  )
}

export default FromToPage
