import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { JSON_CARDS } from "../../utils/articles"
const sas = require("../../css/resourcs/resources.module.css")


const SecondAreaNews = (props: any) => {
  const idArticleSelected= 'SBN002'
  // const [otherArticles, setOtherArticles] = useState<[]>([])
  // useEffect(() => {
  //   let OtherArticles = JSON_CARDS.filter(function (f) {
  //     return f.idNotice !== props.idArticleSelected
  //   })
  //   setOtherArticles(OtherArticles)
  // }, [])

  const data = useStaticQuery(query)
  return (
    <section
      id="otherNews"
      className={`
            ${sas.special_area}
            ${sas.section_padding_0_100}
        `}
      style={{ background: "#e4e4e4" }}
    >
      <div className="container-fluid">
        <div className={sas.info_cards}>
          <div className={sas.other_news}>Otros artículos similares</div>
          <div className="row">
            {JSON_CARDS.map((blog, index) => {
              if (blog.idNotice !== idArticleSelected) {
                return (
                  <div className={`col-12 col-lg-4 ${sas.card1}`}>
                    <div className={sas.card}>
                      <Img
                        fluid={data.entorno.childImageSharp.fluid}
                        className={sas.imgHeader}
                        alt="Flexibilidad de horario con MercaBot"
                      />

                      <div className="card-body" style={{ height: "12rem" }}>
                        <span className={sas.infoCardTitle}>{blog.title}</span>
                        <p
                          className={sas.infoCardBody}
                        >{`${blog.bodyContent.substr(0, 110)}[...]`}</p>
                      </div>
                      <div className={sas.infoCardFooter}>
                        <span>{blog.date} </span>
                        <Link to="/noticias" state={{ news: blog }}>
                          Leer más
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }
            })}

            {/* 
              //Carta_3 
            <div className={`col-12 col-lg-4 ${sas.card1}`}>
              <div className={sas.card}>
                <Img
                  fluid={data.entorno.childImageSharp.fluid}
                  className={sas.imgHeader}
                  alt="Flexibilidad de horario con MercaBot"
                />

                <div className="card-body" style={{ height: "12rem" }}>
                  <span className={sas.infoCardTitle}>
                    Una forma inteligente para mercar sin usar otra app
                  </span>
                  <p className={sas.infoCardBody}>
                    Mercabot utiliza como solución inclusiva el WhatsApp para
                    automatizar los procesos de pedido. Andrés Lastra es un
                    em[...]
                  </p>
                </div>
                <div className={sas.infoCardFooter}>
                  <span>11/07/2020 </span>
                  <Link to="/noticias">Leer más</Link>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondAreaNews

export const query = graphql`
  query {
    entorno: file(relativePath: { eq: "resources/header-resources.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    espectador: file(relativePath: { eq: "resources/header-resources-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
