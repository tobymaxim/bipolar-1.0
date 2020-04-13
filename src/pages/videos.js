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
            <div class="blackbox"><h1 class="headline1">Videos</h1></div>
            
            <div className="label-images-container">{data.allWordpressPage.edges.map(post =>
              <div>
                <div className="blackbox">
                    <h3 className="videos-date">{post.node.acf.date_1}</h3>
                </div> 
                <div class="blog-post">
                    <div class="videos-title">{post.node.acf.title_1}</div>
                    <hr className="videos-hr" />
                    <div class="videos-container">
                        <div className="videos-iframe" dangerouslySetInnerHTML={{ __html: post.node.acf.video_1 }} />
                        <div className="videos-content" dangerouslySetInnerHTML={{ __html: post.node.acf.content_1 }} />
                    </div>
                </div>

                <div className="blackbox">
                    <h3 className="videos-date">{post.node.acf.date_2}</h3>
                </div> 
                <div class="blog-post">
                    <div class="videos-title">{post.node.acf.title_2}</div>
                    <hr className="videos-hr" />
                    <div class="videos-container">
                        <div className="videos-iframe" dangerouslySetInnerHTML={{ __html: post.node.acf.video_2 }} />
                        <div className="videos-content" dangerouslySetInnerHTML={{ __html: post.node.acf.content_2 }} />
                    </div>
                </div>

                <div className="blackbox">
                    <h3 className="videos-date">{post.node.acf.date_3}</h3>
                </div> 
                <div class="blog-post">
                    <div class="videos-title">{post.node.acf.title_3}</div>
                    <hr className="videos-hr" />
                    <div class="videos-container">
                        <div className="videos-iframe" dangerouslySetInnerHTML={{ __html: post.node.acf.video_3 }} />
                        <div className="videos-content" dangerouslySetInnerHTML={{ __html: post.node.acf.content_3 }} />
                    </div>
                </div>

              </div>
            )}
            
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
  
export default LabelPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-videos.php"}}) {
        edges {
          node {
            acf {
                title_1
                title_2
                title_3
                video_1
                video_2
                video_3
                content_1
                content_2
                content_3
                date_1
                date_2
                date_3
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