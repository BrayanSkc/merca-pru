import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
const sus = require('../../css/users/users.module.css')

const SecondAreaCondirions = () => {

    const data = useStaticQuery(query)

    return (
        <section className={`${sus.special_area} bg-white section_padding_0_100`} id="descubre">

            <div className="container-fluid">

                <div className="row align-items-center mt-5" >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12" style={{display: 'flex',padding: '0 7.5%'}}>
                        <h3 className={`${sus.special_area_title}`}>¡Conoce por qué Mercabot es para ti!</h3>
                    </div>
                </div>

                <div className="row mt-5" >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                        <div className={`row ${sus.special_area_content}`}>
                            
                            <div className={`col-12 col-lg-5 col-md-5 col-sm-12 ${sus.special_area_img}`}>
                                <Img fluid={data.adultosMayores.childImageSharp.fluid} alt="Deseo Ser Un Agente Mercabot"/> 
                            </div>
                            <div className={`col-12 col-lg-7 col-md-7 col-sm-12 ${sus.special_area_content_text}`}>
                                <h4 className={`${sus.special_area_content_title}`}>Es una solución inclusiva</h4>
                                <p className={`${sus.special_area_content_info} mt-4`}>
                                    Para todos aquellos que no están tan familiarizados con el uso de aplicaciones móviles. Nuestro producto te guía paso a paso a través de tu proceso de compra.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5" >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                        <div className={`row ${sus.aprende_area_content}`}>
                            <div className={`col-12 col-lg-7 col-md-6 col-sm-12 ${sus.aprende_area_img}`}>
                                <Img fluid={data.metodosPagos.childImageSharp.fluid} style={{maxWidth: '534px', maxHeight: '522px'}} alt="Deseo Ser Un Agente Mercabot"/> 
                            </div>
                            <div className={`col-12 col-lg-5 col-md-6 col-sm-12 ${sus.aprende_area_content_text}`}>
                                <h4 className={`${sus.aprende_area_content_title}`}>Es un producto seguro</h4>
                                <p className={`${sus.aprende_area_content_info} mt-4`}>
                                    Puedes realizar tus pagos contra entrega o si quieres hacerlos en línea contamos con el apoyo de Nequi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5" >
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                        <div className={`row ${sus.question_area_content}`}>
                            <div className={`col-12 col-lg-6 col-md-6 col-sm-12  ${sus.question_area_img}`}>
                                <Img fluid={data.domiciliario.childImageSharp.fluid} className="shadow" style={{maxWidth: '610px', maxHeight: '407px'}} alt="Deseo Ser Un Agente Mercabot"/> 
                            </div>
                            <div className={`col-12 col-lg-6 col-md-6 col-sm-12 ${sus.question_area_content_text}`}>
                                <h4 className={`${sus.question_area_content_title}`}>Es un servicio rápido</h4>
                                <p className={`${sus.question_area_content_info} mt-4`}>
                                    Nuestros agentes escogen el comercio más cercano a la dirección de envío para
                                    garantizar que tu pedido llegará lo más pronto posible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        

        </section>
    )
}


export default SecondAreaCondirions

export const query = graphql`
  query {
    adultosMayores: file(relativePath: { eq: "users/adultos-mayores.png" }) {
        childImageSharp {
        fluid(maxWidth: 397, maxHeight: 396, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    metodosPagos: file(relativePath: { eq: "users/metodos-pagos.png" }) {
        childImageSharp {
        fluid(maxWidth: 534, maxHeight: 522, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    domiciliario: file(relativePath: { eq: "users/domiciliario.jpg" }) {
        childImageSharp {
        fluid(maxWidth: 610, maxHeight: 407, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
