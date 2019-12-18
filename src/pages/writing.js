import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            path
          }
        }
      }
    }
  }
`

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Writing" />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <article
        key={node.id}
        style={{
          margin: "20px 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ marginBottom: 10 }}>
          <Link
            style={{ color: "#db4d3f", textDecoration: "none" }}
            rel="bookmark"
            to={node.frontmatter.path}
          >
            {node.frontmatter.title}
          </Link>
        </h2>
        <div style={{ fontSize: 15, marginBottom: 5 }}>
          <span style={{ marginRight: 5 }}>{node.frontmatter.date}</span>
          <span>-- {node.timeToRead} min read</span>
        </div>
        <p
          style={{ margin: "0" }}
          dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
        />
      </article>
    ))}
  </Layout>
)

export default SecondPage
