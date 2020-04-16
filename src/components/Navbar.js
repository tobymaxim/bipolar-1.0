import React from 'react'

console.log(data)

const Navbar = ({ data }) => {



  return (
    <div className="menu-container">
      <ul className="menu-list">
        {data.allWordpressWpApiMenusMenusItems.edges.map(menuItems => {
          menuItems.node.items.map(item => (
            <li className="menu-link">{item.title}</li>))
        })}
      </ul>
    </div>
  )
}

export default Navbar;

export const query = graphql`
  query {
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          slug
          items {
            title
            wordpress_children {
              title
            }
          }
        }
      }
    }
  }
`