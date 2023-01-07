import Head from 'next/head'
import HomeComponent from 'components/home/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Olivier Paspuel</title>
        <meta name="description" content="Olivier Paspuel portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent/>
    </>
  )
}
