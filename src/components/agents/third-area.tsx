import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
const tas = require('../../css/agents/agents.module.css')

const ThirdAreaAgents = () => {

    const data = useStaticQuery(query)

    return (
        <section className={tas.simplifica_vida_all}>

            <div className={`row ${tas.simplifica_vida_items}`} >
                <div className={`col-lg-1 col-md-2 col-sm-2 col-12 ${tas.left}`}>
                    <Img fixed={data.area.childImageSharp.fixed} alt="Inscríbete para recibir tu inducción en MercaBot"/>
                </div>
                <div className={`col-lg-11 col-md-10 col-sm-10 col-12 ${tas.right}`}>
                    <h4 className="text-left">Inscríbete para recibir tu inducción ¡Nuestro equipo te proveerá de todo el material que necesitas para que empieces a ganar ya!</h4>
                </div>
            </div>

        </section>
    )
}

export default ThirdAreaAgents

export const query = graphql`
  query {
    area: file(relativePath: { eq: "home/area-welcome-card3-img.png" }) {
        childImageSharp {
        fixed(width: 57, height: 50) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
