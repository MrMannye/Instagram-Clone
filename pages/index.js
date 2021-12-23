import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feeds from '../components/Feeds'

export default function Home() {
  return (
    <div className='bg-gray-50 dark:bg-black h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Instagram Clone</title>
        <meta name="description" content="Pagina Clone sobre Instagram como experencia para portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Section Header */}
      <Header/>

      {/* Section Body */}
      <Feeds></Feeds>
    </div>
  )
}
