import React from "react"
import "../styles/index.css"

const Instagram = ({ data }) => (
  <div>
  <ul style={{ listStyle: "none" }}>{data.allInstaNode.edges.map(post => 
(
   <div class="instagram-container">
   <img className="instagram-images" src={post.node.localFile.childImageSharp.resolutions.src} alt={post.node.localFile.childImageSharp.resolutions.alt_text} />
   </div>
))}
</ul>

</div>
)

export default Instagram