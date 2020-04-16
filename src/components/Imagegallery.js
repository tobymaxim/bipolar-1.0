import React from "react"
import "../styles/index.css"
import "../styles/imagegallery.css";

const Imagegallery = ({ data }) => (
    <div>
                <div class="blackbox">
          <h1 class="headline1">Presspics</h1>
        </div>

  <ul className="imagegallery-ul" style={{ listStyle: "none" }}>{data.allWordpressPage.edges.map(post => 
(
   <div>
   <li className="imagegallery-li"><a href={post.node.acf.image_1.localFile.url} target="_blank"><img className="artist-imagegallery" src={post.node.acf.image_1.localFile.childImageSharp.resolutions.src} /></a></li>
   <li className="imagegallery-li"><a href={post.node.acf.image_2.localFile.url} target="_blank"><img className="artist-imagegallery" src={post.node.acf.image_2.localFile.childImageSharp.resolutions.src} /></a></li>
   </div>
))}
</ul>

</div>
)

export default Imagegallery