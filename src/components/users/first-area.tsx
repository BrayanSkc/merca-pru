import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
const fus = require('../../css/users/users.module.css')


const FirstAreaUsers = () => {

    const data = useStaticQuery(query)

    return (
        <section className={`${fus.wellcome_area} clearfix`} id="home">
            
            <div className="container-fluid">
                <div className="row mt-5">
                  <div className="col-12" style={{display: 'flex', paddingLeft: '9%'}}>
                    <div className={fus.wellcome_heading}>
                      <h1>
                          <strong>Quiero comprar con Mercabot</strong>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">

                    <div className="col-12 col-lg-6 col-md-6" style={{display: 'flex', paddingLeft: '9%'}}>
                        <div className={fus.wellcome_heading}>
                            
                            <h2>Hacer tus pedidos es tan fácil como escribirle a tus amigos en tiempos de cuarentena</h2>
                            <p className="mt-5">Revisa nuestras tiendas, escoge tus productos y chatea con nosotros, todo al mismo tiempo. ¡Lo único que necesitas es tener WhatsApp!</p>
                        </div>
                    </div>

                    <div className="col-12 d-inline d-md-none" style={{paddingLeft: '9%', marginBottom: '20%'}}>
                      <div className="row">
                        <div className="col-7 col-sm-4">
                          <button className={`btn btn-sm btn-dark btn-start-area`}>{"Ya lo quiero probar  >"} </button>
                        </div>
                        <div className="col-5 col-sm-8">
                          <Img fluid={data.simbolo.childImageSharp.fluid} className={`wow fadeInDown`} style={{maxWidth:'40px'}} alt="simbolo-mercabot"/> 
                        </div>
                      </div>
                    </div>
                    
                    <div className={`col-12 col-lg-6 col-md-6  ${fus.montaje_img}`}>
                        <Img fluid={data.montaje.childImageSharp.fluid} className="wow fadeInDown shadow"  alt="MercaBot ChatBot Whatsapp"/> 
                    </div>
                    

                </div>

                <div className={`row mt-5 ${fus.get_start_area}`}>

                    <div className="col-12 col-xl-3 col-lg-4 col-md-4">
                        <button className={`btn btn-dark btn-start-area d-none d-md-flex`}>{"Ya lo quiero probar"} </button>
                    </div>

                    <div className="col-12 col-xl-3 col-lg-2 col-md-2 d-none d-md-block">
                        <Img fluid={data.simbolo.childImageSharp.fluid} className={`wow fadeInDown `} style={{maxWidth:'61px', maxHeight:'44px'}} alt="simbolo-mercabot"/> 
                    </div>

                    <div className={`col-12 col-lg-6 col-md-6 d-none d-md-block ${fus.img_margin}`}>
                        <Img fluid={data.chicaWhatsapp.childImageSharp.fluid} className={`wow fadeInDown shadow `} style={{width: '55%', maxWidth:'239px', maxHeight:'239px'}} alt="Whatsapp Mercabot"/> 
                    </div>

                </div>

            </div>
            
        </section>
    )
}


export default FirstAreaUsers

export const query = graphql`
  query {
      montaje: file(relativePath: { eq: "users/montaje.jpg" }) {
        childImageSharp {
        fluid(maxWidth: 410, maxHeight: 410, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    simbolo: file(relativePath: { eq: "users/simbolo.png" }) {
        childImageSharp {
        fluid(maxWidth: 61, maxHeight: 44, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    chicaWhatsapp: file(relativePath: { eq: "users/chica-whatsapp.jpg" }) {
        childImageSharp {
        fluid(maxWidth: 239, maxHeight: 239, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
