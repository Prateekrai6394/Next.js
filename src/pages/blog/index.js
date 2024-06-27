import Link from "next/link";
import Navbar from "../../../components/Navbar"


export const getStaticProps = async () => {
  // Fetch data from an API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      data,
    },
  };
}

const blog = ({ data }) => {
  return (
    <>
      <Navbar />

      <h1>List of Data</h1>

      {
        data.slice(0, 5).map((curElem) => {
          return (
            <div key={curElem.id} className="ssr-style">
              <h3>{curElem.id}</h3>
              <Link href={`/blog/${curElem.id}`}><h2>{curElem.title}</h2></Link>
            </div>
          )
        })
      }



      <h1>this is blog index page for creating and fetching API</h1>
    </>
  )
}

export default blog
