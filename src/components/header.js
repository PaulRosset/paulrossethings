import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: 15,
        fontWeight: "bold",
      }}
    >
      <h1 style={{ margin: 0 }} className="name">
        <Link
          to="/"
          style={{
            fontFamily: "Teko",
            textDecoration: `none`,
            color: "black",
          }}
        >
          paul rosset
        </Link>
      </h1>
      <div style={{ fontSize: 17 }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li>
            <Link to="" className="headerLink">
              About
            </Link>
          </li>
          <li>
            <Link to="" className="headerLink">
              Writing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
