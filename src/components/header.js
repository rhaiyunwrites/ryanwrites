import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

const Header = (text) => (
  <header>
    <div className={headerStyles.header}>
      <h2 className={headerStyles.h2}>
        <Link to="/" 
          style={{
            textDecoration: `none`,
            color: `inherit`,
          }}>
          Ryan Writes
        </Link>
      </h2>
      <hr className={headerStyles.hl}></hr>
    </div>  
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
