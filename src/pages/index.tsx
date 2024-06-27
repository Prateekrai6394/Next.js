import Navbar from '../../components/Navbar';
import style from "../styles/index.module.css"
import Head from "next/head";


const index = () => {
  return (
    <>
   <Head>
      <title>Home page</title>
    </Head>
    

     <Navbar/>

     {/* components level css or styling */}
     <h1 className={style.rajyt}>This is for pratice of components level css </h1>
     
     {/* <a href='#' className={'${style.btn} ${style.btn_white} ${style.btn_sucess}'}>Prateek BTN</a> */}
    </>
  )
}

export default index


