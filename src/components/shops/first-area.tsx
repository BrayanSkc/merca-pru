import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { sendEmail } from "../../services/email.services"
import Modal from "../modal"
const fss = require("../../css/shops/shops.module.css")

const FirstAreaShops = () => {
  const data = useStaticQuery(query)
  const [emailInput, setEmailInput] = useState("")
  const [openModal, setOpenModal] = useState(false)

  const sendInfo = async () => {
    await sendEmail(emailInput, "Agents")
      .then((response: any) => {
        setEmailInput("")
      })
      .catch((err: any) => {
        alert(err.message)
      })
  }

  return (
    <section
      className={`${fss.wellcome_area} ${fss.section_padding_0_100} clearfix`}
      id="home"
    >
      <div className="container-fluid">
        <div className="row align-items-center mt-5">
          <div
            className="col-lg-12 col-md-12 col-sm-12"
            style={{ paddingLeft: "9%" }}
          >
            <div className={fss.wellcome_heading}>
              <h1>
                <strong>Me gustaría vender en Mercabot</strong>
              </h1>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div
            className="col-lg-8 col-md-8 col-sm-8"
            style={{ paddingLeft: "9%" }}
          >
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className={fss.wellcome_heading}>
                  <h2>
                    ¿Sabías que el 84% de los colombianos usan WhatsApp como su
                    aplicación predilecta de mensajería instantánea?
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8">
                <div className={fss.wellcome_heading}>
                  <p className="mt-5">
                    Utilizar este canal de ventas sin invertir todo tu día
                    anotando los pedidos es una solución que Mercabot tiene para
                    ti.
                  </p>
                  <p className="mt-5">
                    <strong>
                      ¿Estás listo para automatizar la comunicación con tus
                      clientes?
                    </strong>
                  </p>
                  <div className="col-lg-8 col-md-8 col-sm8">
                    <button
                      type="button"
                      className={`btn btn-dark btn-outline-secondary text-white ${fss.half_font}`}
                      onClick={() => setOpenModal(true)}
                      style={{ background: "#000028" }}
                    >
                      Quiero víncular mi negocio{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">
                <Img
                  fluid={data.mujerConManzana.childImageSharp.fluid}
                  className={`wow fadeInDown shadow ${fss.img_header_mujer}`}
                  alt="Disfruta los productos con MercaBot"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 hidden-xs-up">
            <Img
              fluid={data.tenderoSonriente.childImageSharp.fluid}
              className={`wow fadeInDown shadow ${fss.img_header_tendero}`}
              alt="Sé feliz con Mercabot"
            />
          </div>
        </div>
        <Modal isShow={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </section>
  )
}

export default FirstAreaShops

export const query = graphql`
  query {
    mujerConManzana: file(relativePath: { eq: "shops/mujer-con-manzana.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 270, maxHeight: 410, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    tenderoSonriente: file(
      relativePath: { eq: "shops/tendero-sonriente.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 243, maxHeight: 327, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
