import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { JSON_CARDS } from "../../utils/articles"
const sas = require("../../css/resourcs/resources.module.css")

interface SecondAreaResourcesProps {
  isFilter: boolean
}
const SecondAreaResources:React.SFC<SecondAreaResourcesProps> = ({ isFilter }) => {
  const [listFilter, setListFilter] = useState<any>([])

  // useEffect(() => {
  //   const getFilterBlog = () => {
  //     const section = sessionStorage.getItem("OptionFilter")
  //     const text = sessionStorage.getItem("TextFilter")?.toLowerCase()
  //     if (section) {
  //       const newSection: any = JSON_CARDS.filter(function (f: any) {
  //         return f.tag == section
  //       })
  //       if (text) {
  //         const newFilter: any = newSection.filter(function (f: any) {
  //           return f.title.includes(text)
  //         })
  //         setListFilter(newFilter)
  //         return
  //       }
  //       setListFilter(newSection)
  //     } else {
  //       if (text?.trim().length > 1) {
  //         console.log("entre filtro texto")
  //         const newFilter: any = JSON_CARDS.filter(function (f: any) {
  //           return f.title.indexOf(text?.toLowerCase()) != -1
  //         })
  //         setListFilter(newFilter)
  //         return
  //       }
  //       setListFilter(JSON_CARDS)
  //     }
  //   }
  //   getFilterBlog()
  // }, [isFilter])

  const data = useStaticQuery(query)
  const getImageCards = (partner: any) => {
    if (partner === "Heraldo") {
      return data.entorno.childImageSharp.fluid
    } else {
      return data.espectador.childImageSharp.fluid
    }
  }

  return (
    <section
      id="cardsNews"
      className={`
            ${sas.special_area}
            ${sas.section_padding_0_100}
            bg-white
        `}
    >
      <div className="container-fluid">
        <div className={sas.info_cards}>
          <div className="row mt-5">
            {JSON_CARDS.map((article:any) => (
              <div
                className={`col-12 col-lg-4 ${sas.card1}`}
                key={article.idNotice}
              >
                <div className={sas.card}>
                  <Img
                    fluid={getImageCards(article.editorial)}
                    className={sas.imgHeader}
                    alt={`Entrada articulo ${article.editorial}`}
                  />

                  <div className="card-body" style={{ height: "12rem" }}>
                    <span className={sas.infoCardTitle}>{article.title}</span>
                    <p
                      className={sas.infoCardBody}
                    >{`${article.bodyContent.substr(0, 110)}[...]`}</p>
                  </div>
                  <div className={sas.infoCardFooter}>
                    <span>{article.date}</span>
                    <Link to="/noticias">Leer más</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondAreaResources

export const query = graphql`
  query {
    entorno: file(relativePath: { eq: "resources/header-resources.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    tiempo: file(relativePath: { eq: "resources/header-resources-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 250) {
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
