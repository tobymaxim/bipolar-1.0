import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"
import Pastdates from "../components/Pastdates"
import Imagegallery from "../components/Imagegallery"

const IzziBizziPage = ({ data }) => (
  
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div class="main-container">
        <div class="left-container">
            
            
            <div class="blackbox"><h1 class="headline1">Izzi Bizzi</h1></div>
            <div class="artist-blog-post">
            <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
            <div>
              <div className="artists-container">
                <div className="artists-container-left">
                    

                      <a href={post.node.featured_media.localFile.url}><img className="artists-images" src={post.node.featured_media.localFile.childImageSharp.resolutions.src} alt={post.node.featured_media.alt_text} />
                      </a>

                    
                    <div className="artists-sociallinks-container">
                    <a className="artists-sociallinks" href="https://bipolarberlin.bandcamp.com/" target="_blank" rel="noopener noreferrer"><div className="residentadvisor-icon"></div></a>
                    <a className="artists-sociallinks" href="https://www.soundcloud.com/bipolarberlin/" target="_blank" rel="noopener noreferrer"><div className="soundcloud-icon"></div></a>
                        <a className="artists-sociallinks" href="https://www.facebook.com/bipolar.berlin/" target="_blank" rel="noopener noreferrer"><div className="facebook-icon"></div></a>
                        <a className="artists-sociallinks" href="https://www.instagram.com/bipolar.berlin/" target="_blank" rel="noopener noreferrer"><div className="instagram-icon"></div></a>
                    </div>
                </div> 
                <div className="artists-container-right">
                    <div className="artists-post-content" dangerouslySetInnerHTML={{ __html: post.node.content }} />
                </div>
              </div>

            </div>
            )}
            </div>
            </div>


            <div class="blackbox"><h1 class="headline1">Discography</h1></div>
            <div class="artist-blog-post">
            <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
            <div>
                 <div className="artists-bandcamp-iframe">
                     {post.node.acf && post.node.acf.bandcamp_iframe &&
                     <div className="bandcamp-iframe-self" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.bandcamp_iframe }} />}
                  </div>

                {post.node.acf && post.node.acf.youtube_iframe &&
                    <div className="artists-youtube-iframe" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.youtube_iframe }} />}
                </div>

            )}
            </div>
            </div>


            <div class="blackbox"><h1 class="headline1">Music</h1></div>
            <div class="artist-blog-post">
            <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
            <div>

                <div className="artists-soundcloud-container">
                {post.node.acf && post.node.acf.soundcloud_iframe &&
                <div className="artists-soundcloud-iframe" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.soundcloud_iframe }} />}
                </div>
                </div>

            )}
            </div>
            </div>


        </div>
        <div class="right-container">
            <Imagegallery data={data} />
            <div class="blackbox">
              <h1 class="headline1">Next Dates</h1>
            </div>
            <Nextdates data={data} /> 
            <div class="blackbox-pastdates">
              <h1 class="headline1">Past Dates</h1>
            </div>
            <Pastdates data={data} />
            <Sociallinks data={data} />
        </div>
      </div>
    </Layout>
  )
  
export default IzziBizziPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-artists.php"}, title: {eq: "Izzi Bizzi"}}) {
      edges {
        node {
          featured_media {
            localFile {
              url
              childImageSharp {
                resolutions(height: 530, width: 530) {
                  src
                }
              }
            }
          }
          acf {
            resident_advisor
            soundcloud
            facebook
            instagram
            booking
            presskit
            bandcamp_iframe
            youtube_iframe
            soundcloud_iframe
            image_1 {
              localFile {
                childImageSharp {
                  resolutions(fit: COVER) {
                    src
                  }
                }
                url
              }
            }
            image_2 {
              localFile {
                childImageSharp {
                  resolutions(fit: COVER) {
                    src
                  }
                }
                url
              }
            }
          }
          content
        }
      }
    }
    allTribeEvents(filter: {title: {eq: "Izzi Bizzi"}}) {
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