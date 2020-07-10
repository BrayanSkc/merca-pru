import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const tss = require("../../css/shops/shops.module.css")

const ThirdAreaShops = () => {

    const data = useStaticQuery(query)

    return (
        <section className={tss.simplifica_vida_all}>

            <div className={`row ${tss.simplifica_vida_items}`}>

                <div className={`col-lg-4 col-sm-4 col-12 ${tss.left}`}>
                    {/* <img src="./../../images/home/area-welcome-card2-img.png" alt="Vender sera fácil con MercaBot" className="wow fadeInDown" data-wow-delay="0.5s" /> */}
                    <Img
                    fixed={data.area.childImageSharp.fixed}
                    className="wow fadeInDown"
                    alt="Vender sera fácil con MercaBot"
                    />
                    <h4 className="text-left">¡Y listo! </h4>
                </div>

                <div className={`col-lg-8 col-sm-8 col-12 ${tss.right}`}>
                    <h5 className="text-left text-success"> Vender nunca había sido tan fácil</h5>
                </div>

            </div>

        </section> 
    )
}

export default ThirdAreaShops

export const query = graphql`
  query {
    area: file(relativePath: { eq: "home/area-welcome-card2-img.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

