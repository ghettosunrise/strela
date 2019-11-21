import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div>
      <Link to="/agency/whatwedo">Что мы делаем </Link>
      <Link to="/agency/cases">С кем работаем </Link>
      <Link to="/agency/aboutus">О нас </Link>
      <Link to="/agency/news">Новости </Link>
    </div>
  </footer>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Footer
