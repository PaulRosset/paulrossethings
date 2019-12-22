import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { ThemeContext } from "./layout"

const Header = ({ onToggleTheme }) => {
  const themeColor = useContext(ThemeContext)
  return (
    <header>
      <h1 style={{ margin: 0 }} className="name">
        <Link
          to="/"
          style={{
            fontFamily: "Teko",
            textDecoration: `none`,
            color: themeColor.foreground,
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
            alignItems: "center",
          }}
        >
          <li>
            <Link
              to="/"
              className="headerLink"
              style={{ color: themeColor.foreground }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/writing"
              className="headerLink"
              style={{ color: themeColor.foreground }}
            >
              Writing
            </Link>
          </li>
          <li>
            <button onClick={onToggleTheme} className="switchDarkMode"></button>
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  onToggleTheme: PropTypes.func,
}

export default Header
