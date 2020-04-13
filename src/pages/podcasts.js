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
            <div class="blackbox"><h1 class="headline1">Bipølar. Series</h1></div>
            <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
                <div className="post-content" dangerouslySetInnerHTML={{ __html: post.node.content }} />
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
    allWordpressPage(filter: {template: {eq: "tpl-podcasts.php"}}) {
      edges {
        node {
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