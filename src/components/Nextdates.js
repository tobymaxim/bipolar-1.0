import React from "react"
import "../styles/index.css"

const Nextdates = ({ data }) => (
  <div class="blog-post">
    <div>{data.allTribeEvents.edges.map(post => 
      (
        <div class="date-query">
          <div class="blackbox">
            <h3 class="dates-date">{post.node.start_date}</h3>
          </div>
          <p class="dates-content"><strong>{post.node.title}</strong> in {post.node.venue.city} at <strong><a className="dates-venue-link" href={post.node.venue.website}>{post.node.venue.venue}</a></strong></p>
        </div>

    ))}</div>
    
  </div>
    
)

export default Nextdates

