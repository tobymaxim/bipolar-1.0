import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"

import Blogpost from "../components/Blogpost"
import Nextdates from "../components/Nextdates"
import Instagram from "../components/Instagram"
import Sociallinks from "../components/Sociallinks"

const IndexPage = ({ data }) => (
  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="main-container">
      <div class="left-container">
        <div class="blackbox"><h1 class="headline1">News</h1></div>
        <Blogpost data={data} />
      </div>
      <div class="right-container">
        <div class="blackbox">
          <h1 class="headline1">Next Dates</h1>
        </div>
        <Nextdates data={data} />
        <Sociallinks data={data} />
        <div class="blackbox">
        <h1 class="headline1">Instagram</h1>
        </div>
        <div className="instagram-container"><Instagram data={data} /></div>
        </div>
    </div>
  </Layout>
)

export default IndexPage


export const query = graphql`
  query {
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Posts"}}}}, sort: {fields: [date], order: DESC}) {
      edges {
        node {
          title
          slug
          content
          author {
            name
          }
          date(formatString: "LLLL")
          tags {
            name
          }
          categories {
            name
          }
          acf {
            credits
            resident_advisor
            soundcloud_iframe
            youtube_iframe
            facebook
            link
          }
          featured_media{
            localFile{
              url
              childImageSharp{
                resolutions(height: 530, width: 530) {
                  src
                }
              }
            }
          alt_text
        }
        }
      }
    }
    allTribeEvents {
      edges {
        node {
          title
          categories {
            name
          }
          website
          venue {
            venue
            website
            city
            country
          }
          start_date(formatString: "D. MMMM YYYY")
        }
      }
    }
    allInstaNode {
      edges {
        node {
          localFile {
            childImageSharp {
              resolutions(fit: COVER, cropFocus: CENTER) {
                src
              }
            }
          }
        }
      }
    }
  }
`