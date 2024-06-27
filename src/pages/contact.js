import Navbar from '../../components/Navbar';
import style from '../styles/contact.module.css'

const contact = () => {
  return (
    <div>
     <Navbar/>
     
    {/* {components level styling}  {we con't target directly h1 this will show error. */}
      <h1 className={style.contactyt}>this is contact page</h1>
   
    </div>
  )
}

export default contact
