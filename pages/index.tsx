import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Button } from '../components/atoms'
import { PropsPostCreateSnipment } from '../interface'
import { PostDataService } from '../services'

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
  const [data, setData] = useState({})
  useEffect(() => {
    {
      console.log({ data })
    }
  }, [data])

  const sendBox = async () => {
    await PostDataService.postCreateSnipment(templateObject)
      .then(datas => {
        setData(datas)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Button>Button</Button>
      </main>
    </div>
  )
}

export default Home
