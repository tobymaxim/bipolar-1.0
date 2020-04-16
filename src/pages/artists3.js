import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"

const ArtistsPage = ({ data }) => (
  
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div class="main-container">
        <div class="left-container">
            <div class="blackbox"><h1 class="headline1">Artists</h1></div>
            <div class="blog-post">
            <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
                <img className="artists-images" src={post.node.featured_media.localFile.childImageSharp.resolutions.src} alt={post.node.featured_media.alt_text} />
            )}
            </div>
            </div>
        </div>
        <div class="right-container">
            <div class="blackbox">
              <h1 class="headline1">Next Dates</h1>
            </div>
            <Nextdates data={data} />
            <Sociallinks data={data} />
        </div>
      </div>
    </Layout>
  )
  
export default ArtistsPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-art.php"}}, sort: {fields: guid}) {
      edges {
        node {
          featured_media {
            localFile {
              childImageSharp {
                resolutions(height: 530, width: 530) {
                  src
                }
              }
            }
          }
          title
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
              resolutions(height: 580, width: 580, fit: COVER, cropFocus: CENTER) {
                src
              }
            }
          }
        }
      }
    }
  }    
`