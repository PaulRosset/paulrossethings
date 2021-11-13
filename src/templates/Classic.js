import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function TemplateBlogPost({ data }) {
  const { markdownRemark } = data
  return (
    <>
      <Helmet>
        <meta name="description" content={markdownRemark.frontmatter.title} />
        <meta name="author" content="Paul Rosset" />
        <meta
          name="keywords"
          content={`${markdownRemark.frontmatter.year} canalplus canal+ software engineering`}
        />
        <meta
          property="og:url"
          content={`https://epikent.paulrossethings.com/${markdownRemark.frontmatter.path}`}
        />
        <meta property="og:title" content={markdownRemark.frontmatter.title} />
        <meta property="og:description" content={markdownRemark.excerpt} />
      </Helmet>
      <Layout>
        <h2>{markdownRemark.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        title
        year
      }
      excerpt
    }
  }
`
