import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"

const IndexPage = ({ data }) => (
  
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div class="main-container">
        <div class="left-container">
            <div class="blackbox"><h1 class="headline1">Artists</h1></div>
            <div style={{ listStyle: "none" }}>{data.allWordpressPage.edges.map(post =>
                <img className="blog-images" src={post.node.featured_media.localFile.childImageSharp.resolutions.src} alt={post.node.featured_media.alt_text} />
            )}
            </div>
        </div>
        <div class="right-container">
            <div class="blackbox">
                <h1 class="headline1">Next Dates</h1>
            </div>
            <Sociallinks data={data} />
            <div class="blackbox">
            <h1 class="headline1">Instagram</h1>
            </div>
            <div className="instagram-container">asdasd</div>
        </div>
      </div>
    </Layout>
  )
  
export default IndexPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-artists.php"}}) {
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
    }    
`