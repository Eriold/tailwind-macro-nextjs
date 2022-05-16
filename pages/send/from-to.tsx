import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { fromTo } from '../../assets/svg'
import { Button, Title, CardShadow } from '../../components/atoms'
import { MainLayout } from '../../layouts/MainLayout'
import { Row, Col } from 'antd'
import { InputInfo } from '../../components/molecules'
import { useAppDispatch } from '../../hooks/dispatch'
import { addUser } from '../../redux/slices/users';

const FromToPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const [sendFrom, setSendFrom] = useState<string>('')
  const [sendTo, setSendTo] = useState<string>('')
  const [enableButon, setEnableButton] = useState<boolean>(true)

  const handleFromValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendFrom(e.currentTarget.value)
  }
  const handleToValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSendTo(e.currentTarget.value)
  }

  const dispatcherUsers = () => {
    const payload = { from: sendFrom, to: sendTo }
    dispatch(addUser(payload))
    router.push('/send/parcels')
  }

  useEffect(() => {
    setEnableButton(sendFrom.length > 0 && sendTo.length > 0)
  }, [sendTo, sendFrom])

  return (
    <MainLayout>
      <CardShadow>
        <Row justify="center" gutter={[16, 16]} role="main">
          <Col span={24} role="columnheader">
            <Title text="De quién envía y quién recibe" />
          </Col>
          <Col span={10} role="">
            <Image src={fromTo} alt="Para quíen" sizes="100%" />
          </Col>
          <Col span={24} role="columnheader" />
          <Col xs={24} md={9} xl={8} role="columnheader" >
            <InputInfo
              title="Zip quíen envía"
              inputProps={{
                name: 'from',
                type: 'number',
                onChange: handleFromValue,
              }}
            />
          </Col>
          <Col xs={24} md={9} xl={8} role="columnheader">
            <InputInfo
              title="Zip quíen recibe"
              inputProps={{
                name: 'to',
                type: 'number',
                onChange: handleToValue,
              }}
            />
          </Col>
          <Col span={24} role="columnheader">
            <Row justify="center" role="button">
              <Button disabled={!enableButon} onClick={() => dispatcherUsers()}>
                Siguiente
              </Button>
            </Row>
          </Col>
        </Row>
      </CardShadow>
    </MainLayout>
  )
}

export default FromToPage
