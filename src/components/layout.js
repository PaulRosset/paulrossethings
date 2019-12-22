import React, { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import Header from "./header"
import "./layout.css"

const iconBrand = {
  margin: 5,
  fontSize: 20,
}

export const themes = {
  light: {
    foreground: "#333535",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
}

export const ThemeContext = createContext(themes.light)

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light")
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      window.localStorage.setItem("theme", "dark")
    } else {
      setTheme("light")
      window.localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    setTheme(window.localStorage.getItem("theme") || "light")
    const bodySelector = document.querySelector("body")
    bodySelector.className = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "42rem",
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          onToggleTheme={toggleTheme}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <main>{children}</main>
          <div style={{ textAlign: "center" }}>
            <br />
            <a
              href="https://www.twitter.com/RossetPaul"
              style={{ ...iconBrand, color: themes[theme].foreground }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://github.com/PaulRosset"
              style={{ ...iconBrand, color: themes[theme].foreground }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/profile/view?id=AAIAABbpRe0B3A_Cmy2Ry3-cpt8i2AW51nCSLlo&amp;trk=nav_responsive_tab_profile_pic"
              style={{ ...iconBrand, color: themes[theme].foreground }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="mailto:paulrosset96@gmail.com"
              style={{ ...iconBrand, color: themes[theme].foreground }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
