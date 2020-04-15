import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"

const IzziBizziPage = ({ data }) => (
  
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div class="main-container">
        <div class="left-container">
            <div class="blackbox"><h1 class="headline1">Izzi Bizzi</h1></div>
            <div class="blog-post">
            <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
            <div>
                                <div class="artists-titles">Biography</div>
                <hr className="artists-hr" />
              <div className="artists-container">
                <div className="artists-container-left">

                    <img className="artists-image" src={post.node.featured_media.localFile.childImageSharp.resolutions.src} alt={post.node.featured_media.alt_text} />
                    <div className="artists-sociallinks-container">
                        <a className="artists-sociallinks" href="https://www.facebook.com/bipolar.berlin/" target="_blank" rel="noopener noreferrer"><div className="facebook-icon"></div></a>
                        <a className="artists-sociallinks" href="https://bipolarberlin.bandcamp.com/" target="_blank" rel="noopener noreferrer"><div className="bandcamp-icon"></div></a>
                        <a className="artists-sociallinks" href="https://www.soundcloud.com/bipolarberlin/" target="_blank" rel="noopener noreferrer"><div className="soundcloud-icon"></div></a>
                        <a className="artists-sociallinks" href="https://www.instagram.com/bipolar.berlin/" target="_blank" rel="noopener noreferrer"><div className="instagram-icon"></div></a>
                    </div>
                </div> 
                <div className="artists-container-right">
                    <div className="artists-post-content" dangerouslySetInnerHTML={{ __html: post.node.content }} />
                </div>
              </div>
              <div class="artists-spacer">
                <div class="artists-titles">Releases</div>
                <hr className="artists-hr" />
                 <div className="artists-bandcamp-iframe">
                     {post.node.acf && post.node.acf.bandcamp_iframe &&
                     <div className="bandcamp-iframe-self" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.bandcamp_iframe }} />}
                  </div>
              </div>
                {post.node.acf && post.node.acf.youtube_iframe &&
                    <div className="artists-youtube-iframe" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.youtube_iframe }} />}
                <div class="artists-spacer">
                <div class="artists-titles">Music</div>
                <hr className="artists-hr" />
                <div className="artists-soundcloud-container">
                {post.node.acf && post.node.acf.soundcloud_iframe &&
                <div className="artists-soundcloud-iframe" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.soundcloud_iframe }} />}
                </div>
                </div>
            </div>
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
  
export default IzziBizziPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-artists.php"}, title: {eq: "Izzi Bizzi"}}) {
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