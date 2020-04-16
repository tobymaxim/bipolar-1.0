import React from "react"
import "../styles/index.css"

const Instagram = ({ data }) => (
  <div>
    <ul style={{ listStyle: "none" }}>{data.allInstaNode.edges.map(post => 
    (
      <a href="../izzibizzi"><img className="artists-images" src={post.node.localFile.childImageSharp.resolutions.src} alt={post.node.localFile.childImageSharp.resolutions.alt_text} /></a> 
    ))}
    </ul>
  </div>
)

export default Instagram