import React from "react"
import styles from "../styles/artists.module.css"
import Container from "../components/container"
import Layout from "../components/layout"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h3 className={styles.username}>{props.username}</h3>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)


export default () => (
  <Layout>
    <Container>
      <h2>Artists</h2>
      <User
        username="Izzi Bizzi"
        avatar="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/03/izzibizzi-2019-300x300.jpg"
        excerpt="As a passionate DJane and activist of the Berlin techno scene, Izzi Bizzi made her commitment to keeping subcultures alive. Her DJ sets oscillate between deep melancholic keys, experimental distortion sounds, hypnotic Acid lines and elements of trancy old school 90’s techno. Merging these diversified musical patterns into a holistic sound journey mirrors her personality, characterized by an integrated approach. Always staying true to her authentic self, her music reflects the connection between the polarities – the feminine and the masculine – the brutal and the soft. In live performances she collaborates with diverse artists, for instance FREDERICK, combining all kinds of fine arts."
      />
      <User
        username="Rasval"
        avatar="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/03/rasval-2019-large-300x300.jpg"
        excerpt="Rasval describes himself as young artist, continually eager to inject the new generation’s spirit into subcultural music. While audibly open to new influences, his track selection remains true to his inimitable soundscape. His aspiration is to infuse every single set with the same unifying spirit, he experienced years ago. From cerebral, trippy and deep to powerful and driving Techno, his audiences can expect an expansive spectrum combining new and old tones, constantly making them move."
      />
      <User
        username="Tobias Hall"
        avatar="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/03/tobiashall-2019-large-300x300.jpg"
        excerpt="Tobias Hall has been evolving his own interpretation of electronic music, strongly influenced by hardtechno and the psytrance scene at an early stage. Heavy, deep-toned basslines establish a powerful foundation, dreamy melodies contrast this raw basis, casting its spell on the listener. Consequently following his own sharp logic the output is a harmonic sound journey, often described as industrial techno with a positive attitude to psy and acid."
      />
      <User
        username="Ones."
        avatar="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/03/ones-2019-large-300x300.jpg"
        excerpt="Ones., born and raised in Berlin, is a DJ and producer whose biggest motivation pulls him into the studio experimenting. What he loves most is the eternal research for fresh sounds. As a DJ his expertise unleashes in surprising the listener by mixing a lot of different genres carried by a technoid fundament. Fully exploring each spectrum of sound while creating a feeling of weightlessness, which is rounded off by harmonic and wide ranged spheres, he reshapes the perspective on techno music. Ones. takes you on a musical journey: you never know what you get in the end, but it will be a driving and energetic ride for sure."
      />
      <User
        username="GLSKY"
        avatar="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/03/glsky-2019-large-300x300.jpg"
        excerpt="Dynamic and driven: GLSKY’s energetic personality permeates through all frequencies of his music. An ever perceived calling to express his feelings through his music paved a life path, guided by all kinds of sound. Years of experience, an ever evolving taste and a mind open to all genres allowed him to develop his skills, senses, and intuition for what he loves most and does best. Heavy bass and raw emotion build a powerful foundation; accompanied by melodic whirlwinds, the spark ignites."
      />
      <User
        username="Frederick"
        avatar="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/03/frederick-2019-large-300x300.jpg"
        excerpt="The way we express ourselves sets the tone. For Frederick it’s both: not only what we say, but also how we say it. Communication goes way beyond words and as a passionate vocalist and writer Frederick’s aim is to grace music with relevant messages, originating from a deep place within the collective consciousness. During live performances, her intuition leads her to match either the mood of the DJ set or the moves of a dancer using abstract sounds, symbolic texts, rapping and spiritual singing."
      />
      <User
        username="Anna Ground"
        avatar="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/03/anna-ground-300x300.png"
        excerpt="Experimental Drone Breakbeat"
      />
    </Container>
  </Layout>
)