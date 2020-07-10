import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
const tus = require('../../css/users/users.module.css')

const ThirdArea = () => {

  const data = useStaticQuery(query)

  return (
      <section className={`${tus.simplifica_vida_all} container`}>
          <div className={`row ${tus.simplifica_vida_items}`} >
              <div className={`col-2 col-lg-1 col-md-2 col-sm-2 col-xs-2 left ${tus.logo_footer}`}>
                  {/* <img src="./img/users/logo-mercabot.png" alt="logo mercado mercabot" className="wow fadeInDown" data-wow-delay="0.5s"> */}
                  <Img fluid={data.logoMercabot.childImageSharp.fluid} className="wow fadeInDown" style={{maxWidth: '54px', maxHeight: '50px'}} alt="logo mercado mercabot"/> 
              </div>
              <div className="col-10 col-lg-11 col-md-10 col-sm-10 col-xs-10 right">
                  <h4 className={`${tus.text_left}`}>Mercabot simplifica tu vida</h4>
              </div>
          </div>
          <div className={`row ${tus.simplifica_vida_items}`}>
              <div className="col-1 col-lg-1 col-md-2 col-sm-2 col-xs-1 left">
                  <p className="simplifica_vida_line"><strong>_</strong></p>
              </div>
              <div className="col-10 col-lg-11 col-md-10 col-sm-10 col-xs-11 right">
                  <p className={`${tus.text_left}`}>Sin preocupaciones por ocupar el espacio de tu teléfono con otra aplicación pesada,</p>
              </div>
          </div>
          <div className={`row ${tus.simplifica_vida_items}`}>
              <div className="col-1 col-lg-1 col-md-2 col-sm-2 col-xs-1 left">
                  <p className="simplifica_vida_line"><strong>_</strong></p>
              </div>
              <div className="col-10 col-lg-11 col-md-10 col-sm-10 col-xs-11 right">
                  <p className={`${tus.text_left}`}>Realiza tus compras sin tener que inscribir tu tarjeta de crédito,</p>
              </div>
          </div>
          <div className={`row ${tus.simplifica_vida_items}`}>
              <div className="col-1 col-lg-1 col-md-2 col-sm-2 col-xs-1 left">
                  <p className="simplifica_vida_line"><strong>_</strong></p>
              </div>
              <div className="col-10 col-lg-11 col-md-10 col-sm-10 col-xs-11 right">
                  <p className={`${tus.text_left}`}>Tan fácil de usar que no necesitas aprender a navegar nuestro producto,</p>
              </div>
          </div>
          <div className={`row ${tus.simplifica_vida_items}`}>
              <div className="col-2 col-lg-1 col-md-2 col-sm-2 col-xs-2 left">
              <Img fluid={data.corazon.childImageSharp.fluid} className="wow fadeInDown" style={{maxWidth: '18px', maxHeight: '14px'}} alt="logo mercado mercabot"/> 
              </div>
              <div className="col-10 col-lg-11 col-md-10 col-sm-10 col-xs-10 right">
                  <p className={`${tus.text_left} text-success`}>Nuestro chatbot te guía a ti.</p>
              </div>
          </div>
      </section>
  )
}

export default ThirdArea

export const query = graphql`
  query {
    logoMercabot: file(relativePath: { eq: "users/logo-mercabot.png" }) {
        childImageSharp {
        fluid(maxWidth: 54, maxHeight: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    corazon: file(relativePath: { eq: "users/corazon.png" }) {
        childImageSharp {
        fluid(maxWidth: 18, maxHeight: 14) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
