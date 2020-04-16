import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"

const LabelPage = ({ data }) => (
  
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div class="main-container">
        <div class="left-container">
            <div class="blackbox"><h1 class="headline1">BPLR000</h1></div>
            <div class="blog-post-general">
            <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
              <div>
                <a href={post.node.featured_media.localFile.childImageSharp.resolutions.src}><img className="label-image" src={post.node.featured_media.localFile.childImageSharp.resolutions.src} alt={post.node.featured_media.alt_text} /></a>
                <div className="bandcamp-iframe">
                  {post.node.acf && post.node.acf.bandcamp_iframe &&
                  <div className="bandcamp-iframe-self" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.bandcamp_iframe }} />}
                </div>
                <div className="post-content" dangerouslySetInnerHTML={{ __html: post.node.content }} />
               
                </div>
                 )}
                 </div>
                 </div>

                 
                 <div class="blackbox">
          <h1 class="headline1">Official Music Video</h1>
        </div>
        <div class="blog-post-general">

        <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
                <div>
                {post.node.acf && post.node.acf.youtube_iframe &&
                <div className="label-youtube-iframe" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.youtube_iframe }} />}
                {post.node.acf && post.node.acf.video_credits &&
                <div className="label-youtube-iframe" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.video_credits }} />}
                
                </div>
                )}
            
            </div>
            </div></div>
            

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
  
export default LabelPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-label.php"}}) {
      edges {
        node {
          featured_media {
            localFile {
              childImageSharp {
                resolutions(height: 550, width: 550) {
                  src
                }
              }
            }
          }
          content
          acf {
            bandcamp_iframe
            youtube_iframe
            video_credits
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
  }    
`