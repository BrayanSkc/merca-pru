

import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const SecondAreaHome = () => {

    const data = useStaticQuery(query)

    return (
        <section className="bg-white section_padding_0_100" id="descubre">

            <div className="special-area container-fluid">

                <div className="row align-items-center mt-5" >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12" style={{display: "flex", padding: "0 7.5%"}}>
                        <h3 className="special-area-title">Conoce la experiencia Mercabot</h3>
                    </div>
                </div>

                <div className="row mt-5" >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="row special-area-content">
                            <div className="col-12 col-xl-5 col-lg-5 col-md-5 col-sm-12 special-area-content-background1">
                                <h4 className="special-area-content-title">Guarda nuestro número de contacto en tu teléfono</h4>
                                <p className="special-area-content-info mt-4">
                                    Abre tu WhatsApp y <strong>salúdanos</strong>, dinos en 
                                    cuál tienda deseas comprar, qué 
                                    productos necesitas, cuál es el método 
                                    de pago de tu preferencia y déjanos 
                                    todos los datos de envío. Nuestro bot es 
                                    muy <strong>amigable</strong> y registrará tu pedido.
                                </p>
                            </div>
                            <div className="col-12 col-xl-7 col-lg-7 col-md-7 col-sm-12 area-content-img">
                                <Img fluid={data.specialAreaPedido.childImageSharp.fluid} style={{maxWidth: '507px', maxHeight:'578px'}} alt="Pedido MercaBot"/> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="row aprende-area-content">
                            <div className="col-12 col-xl-5 col-lg-5 col-md-5 col-sm-12 aprende-area-img">
                                <Img fluid={data.aprendeAreaPedido.childImageSharp.fluid} style={{maxWidth: '302px', maxHeight:'497px'}} alt="Aprende con MercaBot"/> 
                            </div>
                            <div className="col-12 col-xl-7 col-lg-7 col-md-7 col-sm-12 aprende-area-content-background2">
                                <h4 className="aprende-area-content-title">¡Mercabot crece y aprende contigo!</h4>
                                <p className="aprende-area-content-info mt-4">
                                    Implementamos <strong>inteligencia artificial</strong> para atenderte pero en caso de que 
                                    encuentres algún inconveniente en la comunicación tenemos la solución para ello. 
                                    En la misma conversación, recibirás un enlace que te permitirá acceder 
                                    a una <strong>tienda en línea</strong> ¡De esta forma podrás continuar con tu pedido siguiendo los lineamientos de cualquier otro comercio en línea!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5" >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="row question-area-content">
                            <div className="col-12 col-xl-7 col-lg-7 col-md-5 col-sm-12 question-area-content-background3">
                                <h4 className="question-area-content-title">En cuestión de minutos</h4>
                                <p className="question-area-content-info mt-4">
                                    Uno de nuestros <strong>agentes</strong>  tomará tu pedido y se 
                                    encargará de conectarlo con el comercio seleccionado. 
                                    Ponemos la tecnología a tu disposición, sin embargo, 
                                    nuestro <strong>equipo</strong>  siempre está contigo, acompañándote en cada paso del proceso.
                                </p>
                            </div>
                            <div className="col-12 col-xl-5 col-lg-5 col-md-7 col-sm-12 question-area-img">
                                <Img fluid={data.aprendeAreaAgente.childImageSharp.fluid} style={{maxWidth: '610px', maxHeight:'558px'}} alt="Nuestros Agentes MercaBot"/> 
                                {/* <img src="./../../images/home/aprende-area-agente.png" alt="Nuestros Agentes MercaBot" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">

                <div className="row" >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="row catalogo-area-content">
                            <div className="col-12 col-xl-5 col-lg-5 col-md-6 col-sm-12 catalogo-area-img">
                                <Img fluid={data.aprendeAreaCatalogo.childImageSharp.fluid} style={{maxWidth: '519px', maxHeight:'481px'}} alt="Catálogo MercaBot"/> 
                            </div>
                            <div className="col-12 col-xl-7 col-lg-7 col-md-6 col-sm-12 catalogo-area-content-background4">
                                <h4 className="catalogo-area-content-title">Nuestro catálogo de comercios te ofrece todas tus tiendas favoritas</h4>
                                <p className="catalogo-area-content-info mt-4">
                                    En tiempos de crisis, estamos para <strong>ayudarnos</strong> y no hay tienda 
                                    muy pequeña o super mercado muy grande para Mercabot. 
                                    Queremos ofrecerte todas las opciones para que puedas comprar justo 
                                    lo que necesitas de forma <strong>ágil</strong> y segura.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="row recibiras-area-content">
                            <div className="col-12 col-xl-5 col-lg-5 col-md-5 col-sm-12 recibiras-area-content-background5">
                                <h4 className="recibiras-area-content-title">Siempre recibirás los productos más frescos</h4>
                                <p className="recibiras-area-content-info mt-4">
                                    Si tienes alguna duda sobre el proceso, puedes escribirnos 
                                    en cualquier momento a través del mismo chat y hacer seguimiento de tus pedidos. 
                                    ¡Finalmente, puedes explorar todo Mercabot y disfrutar de las <strong>promociones</strong> y los <strong>beneficios</strong> 
                                    que tenemos preparados para ti!
                                </p>
                            </div>
                            <div className="col-12 col-xl-7 col-lg-7 col-md-7 col-sm-12 recibiras-area-img">
                                <Img fluid={data.aprendeAreaRecibiras.childImageSharp.fluid} style={{maxWidth: '603px', maxHeight:'482px'}} alt="Recibiras lo mejor con Mercabot"/> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}


export default SecondAreaHome

export const query = graphql`
  query {
      specialAreaPedido: file(relativePath: { eq: "home/special-area-pedido.png" }) {
        childImageSharp {
        fluid(maxWidth: 507, maxHeight: 578, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    aprendeAreaPedido: file(relativePath: { eq: "home/aprende-area-pedido.png" }) {
        childImageSharp {
        fluid(maxWidth: 302, maxHeight: 497, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    aprendeAreaAgente: file(relativePath: { eq: "home/aprende-area-agente.png" }) {
        childImageSharp {
        fluid(maxWidth: 610, maxHeight: 558, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    aprendeAreaCatalogo: file(relativePath: { eq: "home/aprende-area-catalogo.png" }) {
        childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aprendeAreaRecibiras: file(relativePath: { eq: "home/aprende-area-recibiras.png" }) {
        childImageSharp {
        fluid(maxWidth: 603, maxHeight: 482, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
