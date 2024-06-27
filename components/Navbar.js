import Link from "next/link"

const Navbar = () => {
  return (
    <>
       <nav>
        <ul className="menu_bar">
          <li>
          <Link  href="/">
            Home
          </Link>
          </li>
          <li>
          <Link href="/about">
            About
          </Link>
          </li>
          <li>
          <Link href="/contact">
            Contact
          </Link>
          </li>
          <li>
          <Link  href="/service">
            Service
          </Link>
          </li>
          <li>
          <Link  href="/blog">
            Blog
          </Link>
          </li>
        </ul>
     </nav>
    </>
  )
}

export default Navbar
