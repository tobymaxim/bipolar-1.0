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
        <div class="blackbox"><h1 class="headline1">Art</h1></div>
        <div class="blog-post">
          <div className="artists-images-container">

            <div className="images-row">


              <div class="images-column">
                <figure>
                  <a href="../kraft"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/kraft-art.jpg" />
                    <figcaption className="artists-caption">Kraft</figcaption>
                  </a>
                </figure>
              </div>

              <div class="images-column">
                <a href="../izzibizzi">
                  <figure>
                    <img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/awenita-art.jpg" />
                    <figcaption className="artists-caption">Awenita</figcaption>

                  </figure>
                </a>
              </div>

              <div class="images-column">
                <figure>
                  <a href="../izzibizzi"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/roods-art.jpg" />
                    <figcaption className="artists-caption">Roods</figcaption>
                  </a>
                </figure>
              </div>

            </div>
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
    allWordpressPage(filter: {template: {eq: "tpl-artists.php"}}, sort: {fields: guid}) {
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