import React from "react"

import Svg from "react-svg-inline"
import facebookSvg from "../icons/iconmonstr-facebook-3.svg"
import instagramSvg from "../icons/iconmonstr-instagram-6.svg"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      { "Copyright © 2017 "}
      <a
        href="http://www.nautilusurf.com/"
        className={ styles.footerLink }
        target="_blank"
        rel="noopener noreferrer"
      >
        { "Nautilus Surf Shop" }
      </a>
      { ". Made with " }
      <span className={ styles.heart }>{ "♥" }</span>
      { " on the Central Coast. " }
    </p>

    <ul className={ styles.socialLinks }>
      <li>
        <a
          href={ `https://www.facebook.com/nautilusurf` }
          className={ styles.link }
          target="_blank"
          rel="me noopener noreferrer"
        >
          <Svg svg={ facebookSvg } cleanup />
        </a>
      </li>
      <li>
        <a
          href={ `https://www.instagram.com/nautilusurf` }
          className={ styles.link }
          target="_blank"
          rel="me noopener noreferrer"
        >
          <Svg svg={ instagramSvg } cleanup />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
