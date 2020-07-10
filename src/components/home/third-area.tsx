import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ThirdAreaHome = () => {

    const data = useStaticQuery(query)

    return (
        <section className="simplifica-vida-all">

            <div className="row simplifica-vida-items">

                <div className="col-lg-5 col-md-6 col-12 col-xl-4 col-sm-9">
                    {/* <img src="./../../images/home/contactanos.png" alt="Contactanos MercaBot" className="wow fadeInDown" data-wow-delay="0.5s" /> */}
                    <Img fluid={data.contactanos.childImageSharp.fluid} className="wow fadeInDown simplifica-vida-img" alt="Contactanos MercaBot"/>
                </div>

            </div>

        </section>
    )
}

export default ThirdAreaHome

export const query = graphql`
  query {
      contactanos: file(relativePath: { eq: "home/contactanos.png" }) {
        childImageSharp {
        fluid(maxWidth: 450, maxHeight: 106) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`
