import React from "react"
import navbarStyles from "./navbar.module.css"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <span className={navbarStyles.navbarWrapper}>
        <span className={navbarStyles.navbar}>
            <Link to="/">
                <li className={navbarStyles.li}>home</li>
            </Link>
            <Link to="/writing/"><li className={navbarStyles.li}>writing</li></Link>
            <Link to="/learning/"><li className={navbarStyles.li}>learning</li></Link>
            <Link to="/about/"><li className={navbarStyles.li}>about</li></Link>
        </span>
    </span>
  )
}