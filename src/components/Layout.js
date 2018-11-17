import React from "react"
import Header from './Header'
import { withPrefix } from 'gatsby-link'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
    if (typeof window !== `undefined`) {
        var isHomepage = window.location.pathname === withPrefix('/')
        var isEvents = window.location.pathname === withPrefix('/events')
        // var isAboutus = location.pathname === withPrefix('/aboutus')
        // var isContact = location.pathname === withPrefix('/contacts')
        }
    return(
<React.Fragment>
{
        <video autoPlay muted loop className={styles.myVideo}>
          <source src="static/homevidtest.mp4" type="video/mp4" />
        </video>
      }
    <Header/>

      <div className={styles.body}>
        {children}
      </div>
</React.Fragment>
    

)}

export default Layout;