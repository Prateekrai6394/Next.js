import Link from "next/link"
import {useRouter} from "next/router"
import { useEffect } from 'react';

const Errorpage = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },3000)
         
       }, []);               //  [] = it means when you visit first time to the page it will run only once.

  return (
    <>
    <div className="error">
     <h1> This is error page  </h1>
     <Link href="/">
         Back to Homepage
     </Link>

     {/* or */}

    <br/>

     <a onClick={() => router.push("/")}>
         Back to Homepage 2
     </a>

     </div>
    </>
  )
}

export default Errorpage
