import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feeds from '../components/Feeds'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Instagram Clone</title>
        <meta name="description" content="Pagina Clone sobre Instagram como experencia para portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Section Header */}
      <Header/>

      {/* Section Body */}
      <div className='flex p-6 px-8'>
        <div className='flex flex-[.66]'>
          <Feeds></Feeds>
        </div>
        <div className='flex flex-[.33]'>
          <Sidebar></Sidebar>
        </div>  
      </div>
    </div>
  )
}
