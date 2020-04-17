import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"

const AboutPage = ({ data }) => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-container">
      <div className="left-container">
        <div className="blackbox"><h1 className="headline1">About</h1></div>
        <div className="blog-post-general">
          <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
            <div>
              <img className="about-image" src={post.node.featured_media.localFile.childImageSharp.resolutions.src} alt={post.node.featured_media.alt_text} />
              <div className="post-content" dangerouslySetInnerHTML={{ __html: post.node.content }} />
            </div>
          )}
          </div>
        </div>

        <div className="blackbox"><h1 className="headline1">Crew</h1></div>
        <div className="blog-post-general">
          <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
            <div>
              <a href={post.node.acf.image_1.localFile.url}><img className="about-images" src={post.node.acf.image_1.localFile.childImageSharp.resolutions.src} alt="" /></a>
            </div>
          )}
          </div>
        </div>

      </div>
      <div className="right-container">
        <div className="blackbox">
          <h1 className="headline1">Next Dates</h1>
        </div>
        <Nextdates data={data} />
        <Sociallinks data={data} />
      </div>
    </div>
  </Layout>
)

export default AboutPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-about.php"}}) {
      edges {
        node {
          acf {
            image_1 {
              localFile {
                url
                childImageSharp {
                  resolutions(width: 710, height: 330) {
                    src
                  }
                }
              }
            }
          }
          featured_media {
            localFile {
              childImageSharp {
                resolutions(height: 566, width: 440) {
                  src
                }
              }
            }
          }
          content
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
  }    
`