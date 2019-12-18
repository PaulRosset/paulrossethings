import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    file(relativePath: { eq: "paul.png" }) {
      id
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <img
        src={data.file.childImageSharp.fluid.src}
        alt="paulrosset"
        style={{ width: "5.5rem", height: "5.5rem", borderRadius: "50%" }}
      />
      <h1 style={{ fontSize: 25 }}>Hello! I'm Paul!</h1>
      <p>Welcome to my world.</p>
      <p>I'm currently a software developer at Canal+, a media company.</p>
      <p>
        I also come from a French school named Epitech and I have studied at
        Kent University in Canterbury (close to London) during a year.
      </p>{" "}
      <p>Thank's for coming!</p>
    </div>
  </Layout>
)

export default IndexPage
