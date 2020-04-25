import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"

const AboutPage = ({ data }) => (

  <Layout data={data}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-container">
      <div className="left-container">
        <div className="blackbox"><h1 className="headline1">About</h1></div>
        <div className="blog-post-general">
          <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
            <div>



              <img className="about-image" src={post.node.featured_media.localFile.childImageSharp.resolutions.src} alt={post.node.featured_media.alt_text} />
              <h2 className="post-title">Bipølar.</h2>
              <div className="about-content" dangerouslySetInnerHTML={{ __html: post.node.content }} />
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
                  resolutions(width: 1420, height: 660) {
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
          start_date(formatString: "D")
          date(formatString: "MMM")
        }
      }
    }
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          slug
          items {
            title
            wordpress_children {
              title
            }
          }
        }
      }
    }
  }    
`