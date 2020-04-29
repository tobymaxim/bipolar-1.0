import React from "react"
import "../styles/index.css"

const Instagram = ({ data }) => (
  <div>
    <ul style={{ listStyle: "none" }}>{data.allInstaNode.edges.map(post =>
      (
        <a href={post.node.localFile.childImageSharp.resolutions.src} target="__blank" rel="noopener noreferrer"><img className="artists-images" src={post.node.localFile.childImageSharp.resolutions.src} alt={post.node.localFile.childImageSharp.resolutions.alt_text} /></a>
      ))}
    </ul>
  </div>
)

export default Instagram