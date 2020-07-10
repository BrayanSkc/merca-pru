

import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const FirstAreaHome = () => {

    const data = useStaticQuery(query)

    return (
    <>
        <section className="wellcome_area clearfix" id="home">
        
            <div className="container-fluid">

                <div className="row align-items-center mt-5">

                    <div className="col-12 col-xl-5 col-lg-6 col-md-6 col-sm-6" style={{display: "flex", paddingLeft: "9%"}}>
                        <div className="wellcome-heading mt-5">
                            <h1>
                             ¡Reinventamos la forma de mercar!
                            </h1>
                            <h2>Únete a nuestro sistema colaborativo</h2>
                            <p className="mt-5">Te presentamos la última solución para comercios, 
                            compradores y amantes del WhatsApp. La mezcla perfecta 
                            entre un comercio en línea y una cotidiana conversación vía chat.
                            Sin tener que descargar una app, te traemos un producto 
                            al que puedes acceder desde la comodidad de tu 
                            teléfono inteligente con una aplicación que todos usamos. 
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-xl-7 col-lg-6 col-md-6 col-sm-6 hidden-xs-up" style={{paddingRight: "0"}}>
                        {/* <img src="../../images/home/header-compra-horizontal.png" className="wow fadeInDown img-header-compra" data-wow-delay="0.5s" alt="MercaBot Compra Whatsapp" /> */}
                        <Img fluid={data.headerCompraHorizontal.childImageSharp.fluid} className="wow fadeInDown d-none d-sm-block" alt="MercaBot Compra Whatsapp"/> 
                        <Img fluid={data.headerCompraVertical.childImageSharp.fluid} className="wow fadeInDown d-block d-sm-none header-compra-vertical" alt="MercaBot Compra Whatsapp"/> 
                    </div>

                </div>
                <div className="row get-start-area d-none d-sm-flex pt-4">

                    <div className="col-12 col-lg-4 col-md-4 col-sm-4">
                        <div className="card">
                            <div className="card-body-img">
                                {/* <img src="../../images/home/area-welcome-card1-img.png" alt="Quiero Comprar En MercaBot" /> */}
                                <Img fluid={data.areaWelcomeCard1.childImageSharp.fluid} className="card-body-img1" alt="Quiero Comprar En MercaBot"/> 
                                <p className="card-text">Quiero comprar con Mercabot</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-md-4 col-sm-4">
                        <div className="card">
                            <div className="card-body-img">
                                {/* <img src="../../images/home/area-welcome-card2-img.png" alt="Me Gustaria Vender En MercaBot" /> */}
                                <Img fluid={data.areaWelcomeCard2.childImageSharp.fluid} className="card-body-img2" alt="Me Gustaria Vender En MercaBot"/> 
                                <p className="card-text">Me gustaría vender en Mercabot</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-md-4 col-sm-4">
                        <div className="card">
                            <div className="card-body-img">
                                {/* <img src="../../images/home/area-welcome-card3-img.png" alt="Deseo Ser Un Agente Mercabot" /> */}
                                <Img fluid={data.areaWelcomeCard3.childImageSharp.fluid} className="card-body-img3" alt="Deseo Ser Un Agente Mercabot"/> 
                                <p className="card-text">Deseo ser un agente Mercabot</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </section>

        <div className="row get-start-area d-flex d-sm-none mt-5 mx-0" style={{marginLeft: '0rem !important', marginRight: '0rem !important'}}>
          <div className="col-12 col-lg-4 col-md-4 col-sm-4">
              <div className="card">
                  <div className="card-body-img">
                      {/* <img src="../../images/home/area-welcome-card1-img.png" alt="Quiero Comprar En MercaBot" /> */}
                      <Img fluid={data.areaWelcomeCard1.childImageSharp.fluid} className="card-body-img1" alt="Quiero Comprar En MercaBot"/> 
                      <p className="card-text">Quiero comprar con Mercabot</p>
                  </div>
              </div>
          </div>

          <div className="col-12 col-lg-4 col-md-4 col-sm-4">
              <div className="card">
                  <div className="card-body-img">
                      {/* <img src="../../images/home/area-welcome-card2-img.png" alt="Me Gustaria Vender En MercaBot" /> */}
                      <Img fluid={data.areaWelcomeCard2.childImageSharp.fluid} className="card-body-img2" alt="Me Gustaria Vender En MercaBot"/> 
                      <p className="card-text">Me gustaría vender en Mercabot</p>
                  </div>
              </div>
          </div>

          <div className="col-12 col-lg-4 col-md-4 col-sm-4">
              <div className="card">
                  <div className="card-body-img">
                      {/* <img src="../../images/home/area-welcome-card3-img.png" alt="Deseo Ser Un Agente Mercabot" /> */}
                      <Img fluid={data.areaWelcomeCard3.childImageSharp.fluid} className="card-body-img3" alt="Deseo Ser Un Agente Mercabot"/> 
                      <p className="card-text">Deseo ser un agente Mercabot</p>
                  </div>
              </div>
          </div>
        </div>
      </>
    )
}


export default FirstAreaHome

export const query = graphql`
  query {
      headerCompraHorizontal: file(relativePath: { eq: "home/header-compra-horizontal.png" }) {
        childImageSharp {
        fluid(maxWidth : 860, maxHeight: 715) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    headerCompraVertical: file(relativePath: { eq: "home/header-compra-vertical.png" }) {
      childImageSharp {
      fluid(maxWidth : 715, maxHeight: 871) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
    areaWelcomeCard1: file(relativePath: { eq: "home/area-welcome-card1-img.png" }) {
        childImageSharp {
        fluid(quality: 100, maxWidth: 54, maxHeight: 50) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    areaWelcomeCard2: file(relativePath: { eq: "home/area-welcome-card2-img.png" }) {
        childImageSharp {
        fluid(quality: 100, maxWidth: 50, maxHeight: 50) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    areaWelcomeCard3: file(relativePath: { eq: "home/area-welcome-card3-img.png" }) {
        childImageSharp {
        fluid(quality: 100, maxWidth: 57, maxHeight: 50) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
