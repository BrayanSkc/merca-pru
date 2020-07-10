import { Link } from "gatsby"
import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
const fs = require('../../css/layout/footer.module.css')

const Footer = () => {

    const data = useStaticQuery(query)

    return(
    <footer className={`row ${fs.footer_social} text-center clearfix`}>

        <section className={`${fs.info_footer} col-12 mt-2 `}>

            <div className="row align-items-center" style={{height: '100%'}}>
                <div className="col-lg-3">
                    <a rel="noopener noreferrer nofollow" href="https://pluriza.com/">
                        <Img fixed={data.poweredByPluriza.childImageSharp.fixed} className={fs.PoweredBy} alt="Powered by Pluriza"/>
                    </a>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <ul className={`${fs.footer_nav} row`}>
                                <li>
                                  <Link className="col-xs-12 d-flex justify-content-center"  rel="next" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="col-xs-12 d-flex justify-content-center" rel="next" to="/clientes">Usuarios</Link>
                                </li>
                                <li>
                                    <Link className="col-xs-12 d-flex justify-content-center" rel="next" to="/comercios">Comercios</Link>
                                </li>
                                <li>
                                    <Link className="col-xs-12 d-flex justify-content-center" rel="next" to="/agentes">Agentes</Link>
                                </li>
                                <li>
                                    <Link className="col-xs-12 d-flex justify-content-center" rel="next" to="/recursos">Recursos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <ul className={fs.footer_info}>
                                <li>
                                    <Link rel="next" to="/politica-de-privacidad">Política de privacidad</Link>
                                </li>
                                <li>
                                    <Link rel="next" to="/terminos&condiciones">Términos y condiciones</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <a rel="noopener noreferrer nofollow" href="https://api.whatsapp.com/send?phone=15868004022&text=Hola!">
                    <Img fixed={data.whatsapp.childImageSharp.fixed} className={fs.social_media} alt="whatsapp"/>
                    </a>
                    <a rel="noopener noreferrer nofollow" href="https://www.facebook.com/Mercabot-105762264446943/">
                    <Img fixed={data.facebook.childImageSharp.fixed} className={fs.social_media} alt="facebook"/>
                    </a>
                    <a rel="noopener noreferrer nofollow" href="https://www.instagram.com/mercabotco/">
                    <Img fixed={data.instagram.childImageSharp.fixed} className={fs.social_media} alt="instagram"/>
                    </a> 
                    <a rel="noopener noreferrer nofollow" href="https://www.linkedin.com/company/pluriza/">
                    <Img fixed={data.linkedin.childImageSharp.fixed} className={fs.social_media} alt="instagram"/>
                    </a>   
                </div>  
            </div>

        </section>

    </footer>
)}

export default Footer

export const query = graphql`
  query {
      simboloMercabot: file(relativePath: { eq: "simbolo-mercabot.png" }) {
        childImageSharp {
        fixed(width: 55, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    logoPluriza: file(relativePath: { eq: "logo-pluriza.png" }) {
        childImageSharp {
        fixed(width: 38, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    poweredByPluriza: file(relativePath: { eq: "Powered-by-pluriza.png" }) {
        childImageSharp {
        fixed(width: 1526, height: 723) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    facebook: file(relativePath: { eq: "media/facebook.png" }) {
        childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    instagram: file(relativePath: { eq: "media/instagram.png" }) {
        childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    whatsapp: file(relativePath: { eq: "media/whatsapp.png" }) {
        childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    linkedin: file(relativePath: { eq: "media/linkedin.png" }) {
        childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
