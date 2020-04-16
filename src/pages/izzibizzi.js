import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"
import Pastdates from "../components/Pastdates"

const IzziBizziPage = ({ data }) => (

  <Layout>
    <SEO title="Izzi Bizzi" keywords={[`gatsby`, `application`, `react`]} />
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
                    <a className="artists-sociallinks" href="https://www.residentadvisor.net/dj/izzibizzi-de/" target="_blank" rel="noopener noreferrer"><div className="residentadvisor-icon"></div></a>
                    <a className="artists-sociallinks" href="https://www.soundcloud.com/bipolarberlin/" target="_blank" rel="noopener noreferrer"><div className="soundcloud-icon"></div></a>
                    <a className="artists-sociallinks" href="https://www.facebook.com/bipolar.berlin/" target="_blank" rel="noopener noreferrer"><div className="facebook-icon"></div></a>
                    <a className="artists-sociallinks" href="https://www.instagram.com/bipolar.berlin/" target="_blank" rel="noopener noreferrer"><div className="instagram-icon"></div></a>
                  </div>
                  <a className="button-presskit" href="https://drive.google.com/open?id=1Xb9WTVpZ36BjvlJ4vxldsH0wVuz3FEbi" target="_blank" rel="noopener noreferrer"><div className="button-general">Download Presskit</div></a>
                  {post.node.acf && post.node.acf.credits &&
                    <div className="artist-credits" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.credits }} />}
                </div>
                <div className="artists-container-right">
                  <div className="artists-post-content" dangerouslySetInnerHTML={{ __html: post.node.content }} />

                  <div className="artist-tag-container">
                    <div className="post-tag">#{post.node.acf.tag_1}</div>
                    <div className="post-tag">#{post.node.acf.tag_2}</div>
                    <div className="post-tag">#{post.node.acf.tag_3}</div>
                    <div className="post-tag">#{post.node.acf.tag_4}</div>
                  </div>
                  {post.node.acf && post.node.acf.credits &&
                    <div className="artist-credits-mobile" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.credits }} />}


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
        <div>
          <div class="blackbox-imagegallery">
            <h1 class="headline1">Presspics</h1>
          </div>
          <ul className="imagegallery-ul" style={{ listStyle: "none" }}>{data.allWordpressPage.edges.map(post =>
            (
              <div>
                {post.node.acf.image_1.localFile && post.node.acf.image_1.localFile.url &&
                  <li className="imagegallery-li"><a href={post.node.acf.image_1.localFile.url} target="_blank"><img className="artist-imagegallery" src={post.node.acf.image_1.localFile.childImageSharp.resolutions.src} /></a></li>}
                {post.node.acf.image_2.localFile && post.node.acf.image_2.localFile.url &&
                  <li className="imagegallery-li"><a href={post.node.acf.image_2.localFile.url} target="_blank"><img className="artist-imagegallery" src={post.node.acf.image_2.localFile.childImageSharp.resolutions.src} /></a></li>}
              </div>
            ))}
          </ul>
        </div>
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
            credits
            tag_1
            tag_2
            tag_3
            tag_4
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