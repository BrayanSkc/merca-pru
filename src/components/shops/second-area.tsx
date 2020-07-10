import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const sss = require("../../css/shops/shops.module.css")

const SecondAreaShops = () => {

    const data = useStaticQuery(query)

    return (
        <section className={`${sss.special_area} bg-white ${sss.section_padding_0_100}`} id="descubre">

            <div className="container-fluid">

                <div className={`row align-items-center ${sss.mt_15}`} >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12" style={{display: "flex",padding: "0 7.5%"}}>
                        <h3 className={sss.special_area_title}>¿Cuáles son los beneficios de asociarte a Mercabot?</h3>
                    </div>
                </div>

                <div className={`row ${sss.mt_8}`} >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                        <div className={`row ${sss.special_area_content}`}>
                            
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                {/* <img src="./../../images/shops/beneficios-mercabot.png" alt="Beneficios Mercabot" className="wow fadeInDown" data-wow-delay="0.5s" /> */}
                                <Img
                                fluid={data.beneficiosMercabot.childImageSharp.fluid}
                                className="wow fadeInDown"
                                alt="Beneficios Mercabot"
                                />
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12 ">
                                <div className="row" style={{height: '100%', alignContent: 'space-between'}}>
                                    <div className="col-md-12">
                                        <div className={sss.special_area_content_text}>
                                            <h4 className={sss.special_area_content_title}>Aumentaras el volumen de tus ventas</h4>
                                            <p className={`${sss.special_area_content_info} mt-4`}>
                                                Tu comercio formaría parte de un amplio portafolio de negocios que se presentan a todos nuestros usuarios desde el momento en que inician la conversación.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className={sss.special_area_content_text}>
                                            <h4 className={sss.special_area_content_title}>Tendrás un nuevo canal de ventas automatizado</h4>
                                            <p className={`${sss.special_area_content_info} mt-4`}>
                                                Podrás descansar de la constante preocupación de atender todos los mensajes de tus clientes y recibirás todos tus pedidos definidos y organizados en un mismo lugar. Tu única preocupación será validar y enviar las ordenes, permitiéndote invertir energía en mejorar otros aspectos de tu negocio.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className={sss.special_area_content_text}>
                                            <h4 className={sss.special_area_content_title}>Proporcionaras una mejor experiencia a todos tus clientes</h4>
                                            <p className={`${sss.special_area_content_info} mt-4`}>
                                                Olvídate de las constantes quejas de tus clientes por la demora en recibir tu respuesta. Prestaras un mejor servicio y esto se vera reflejado en las ganancias al tener un incremento en el retorno de compra de tus clientes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={`row ${sss.all_targets}`}>
                    <div className="col-lg-12">
                        <h2 className={sss.all_cards_title}>¿Cómo es el proceso de gestión de pedidos?</h2>
                    </div>
                </div>

                <div className={`row align-items-center mt-5 ${sss.all_cards}`}>
                    <div className={`col-12 col-lg-3 col-md-3 col-sm-6 ${sss.card_background_1}`}>
                        <div className={`${sss.card} text-dark text-center bg-default`}>
                        <Img
                        fluid={data.chicaComprando.childImageSharp.fluid}
                        className={`card-img-top shadow  ${sss.borders}`}
                        alt="Recibimos un pedido para tu comercio con MercaBot"
                        />
                        <div className="card-body">
                            <p className="card-title">Recibimos un pedido para tu comercio</p>
                        </div>
                        </div>
                    </div>
                    <div className={`col-12 col-lg-3 col-md-3 col-sm-6 ${sss.card_background_2}`}>
                        <div className={`${sss.card} text-dark text-center bg-default`}>
                            <Img
                            fluid={data.gestor.childImageSharp.fluid}
                            className={`card-img-top shadow  ${sss.borders}`}
                            alt="Te informamos los detalles del pedido con MercaBot"
                            />
                            <div className="card-body">
                            <p className="card-text">Te informamos los detalles del pedido</p>
                            </div>
                        </div>
                    </div>
                    <div  className={`col-12 col-lg-3 col-md-3 col-sm-6 ${sss.card_background_3}`}>
                        <div className={`${sss.card} text-dark text-center bg-default`}>
                            <Img
                            fluid={data.tenderoFeliz.childImageSharp.fluid}
                            className={`card-img-top shadow  ${sss.borders}`}
                            alt="Recibimos tu confirmación con MercaBot"
                            />
                            <div className="card-body">
                            <p className="card-text">Recibimos tu confirmación</p>
                            </div>
                        </div>
                    </div>
                    <div style={{marginLeft: "-4rem"}} className={`col-12 col-lg-3 col-md-3 col-sm-6 ${sss.card_background_4}`}>
                        <div className={`${sss.card} text-dark text-center bg-default`}>
                            <Img
                            fluid={data.entrega.childImageSharp.fluid}
                            className={`card-img-top shadow  ${sss.borders}`}
                            alt="Te encargas del envío del pedido con MercaBot"
                            />
                            <div className="card-body">
                            <p className="card-text">Te encargas del envío del pedido</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>  

        </section>
    )
}


export default SecondAreaShops

export const query = graphql`
  query {
    beneficiosMercabot: file(relativePath: { eq: "shops/beneficios-mercabot.png" }) {
      childImageSharp {
        fluid(maxWidth: 563, maxHeight: 985) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    chicaComprando: file(relativePath: { eq: "shops/chica-comprando.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 217, maxHeight: 217) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    gestor: file(relativePath: { eq: "shops/gestor.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 190, maxHeight: 190) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      },
      tenderoFeliz: file(relativePath: { eq: "shops/tendero-feliz.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 201, maxHeight: 201) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      },
      entrega: file(relativePath: { eq: "shops/entrega.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 201, maxHeight: 201) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`
