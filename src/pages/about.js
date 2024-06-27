import Navbar from '../../components/Navbar';
import Image from "next/image";
import Head from 'next/head';

const about = () => {
  return (
    
    <div>
      <Head>
      <title>About page</title>
      </Head>
     <Navbar/>
        
      <div className='img_center'> 
      <h1 style={{color: "blue", display: "flex"}} >this is about page</h1>
       
      <Image src="/panchyat.jpg" width={500} height={300} alt='panchayat3Img'/>
      </div>

    </div>
  )
}

export default about
