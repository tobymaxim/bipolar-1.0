import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"

const EventsPage = ({ data }) => (
  
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div class="main-container">
        <div class="left-container">
          <div class="blackbox"><h1 class="headline1">Events</h1></div>
            <div class="blog-post">
              <div className="artists-images-container">

                <div className="images-row">

                
                  <div class="images-column">
                    <figure>
                      <a href="../izzibizzi"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/izzibizzi-artist.jpg" />
                      <figcaption className="artists-caption">Lost Festival 2019</figcaption>
                      </a>
                    </figure>
                  </div>

                  <div class="images-column">
                  <a href="../izzibizzi">
                    <figure>
                      <img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/rasval-artist.jpg" />
                      <figcaption className="artists-caption">Rasval</figcaption>

                    </figure>
                    </a>
                  </div>

                  <div class="images-column">
                    <figure>
                      <a href="../izzibizzi"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/tobiashall-artist.jpg" />
                      <figcaption className="artists-caption">Tobias Hall</figcaption>
                      </a>
                    </figure>
                  </div>

                  <div class="images-column">
                    <figure>
                      <a href="../izzibizzi"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/ones-artist.jpg" />
                      <figcaption className="artists-caption">Ones.</figcaption>
                      </a>
                    </figure>
                  </div>

                  <div class="images-column">
                    <figure>
                      <a href="../izzibizzi"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/glsky-artist.jpg" />
                      <figcaption className="artists-caption">GLSKY</figcaption>
                      </a>
                    </figure>
                  </div>

                  <div class="images-column">
                    <figure>
                      <a href="../izzibizzi"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/frederick-artist.jpg" />
                      <figcaption className="artists-caption">Frederick</figcaption>
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
  
export default EventsPage


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