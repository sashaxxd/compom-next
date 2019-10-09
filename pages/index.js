import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from "../src/hoc/Layout/Layout";
import DeviceContainer from "../src/containers/DeviceContainer";

const Home = () => (
  <>

    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

      {/*Шаблон сайта*/}
      <Layout>

          <DeviceContainer/>


      </Layout>
  </>
)

export default Home
