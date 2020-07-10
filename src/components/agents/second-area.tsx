import React from "react"
import Scrollspy from "react-scrollspy"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
const sas = require("../../css/agents/agents.module.css")

const SecondAreaAgents = () => {
    const data = useStaticQuery(query)
    const section1 = (
    <>
        <Img
            fluid={data.formDatosBasicos.childImageSharp.fluid}
            alt="Registra comercios como agente en MercaBot"
        />
        <p className="text-success">
            Por cada comercio que inscribas recibirás una ganancia y la
            mejor parte es que cada semana en que un comercio renueve su
            suscripción contigo, ¡vuelves a ganar!
        </p>
    </>
    )
  const section2 = (
    <>
        <Img
            fluid={data.comercios.childImageSharp.fluid}
            alt="Formularios de agentes en MercaBot"
        />
        <p className="text-success">
            En este escenario tendrías acceso a todos los pedidos que
            lleguen a la plataforma y tu ganancia es el 1% del monto total
            de cada uno de los pedidos que atiendas.
        </p>
    </>
  )
  const section3 = (
    <>
        <Img
            fluid={data.appMovile.childImageSharp.fluid}
            alt="Cada agente gana por compras en MercaBot"
        />
        <p className="text-success">
            Ganas por cada compra realizada con tu código, superior a
            $50.000 pesos en el primer mercado de un usuario. Así que no
            pares de compartirlo y sigue ganando con Mercabot.
        </p>
    </>
  )

  return (
    <section
        id="descubre"
        className={`
            ${sas.special_area}
            ${sas.section_padding_0_100}
            bg-white
        `}
    >
      <div className="container-fluid">
        <div className="row align-items-center mt-5">
          <div className="col-12 col-lg-12 col-md-12 col-sm-12">
            <h4 className={sas.special_area_title}>
              ¿Cuáles son las ventajas de convertirme en un agente?
            </h4>
          </div>
        </div>

        <div className={sas.info_cards}>
          <div className="row mt-5">
            <div className={`col-12 col-lg-4 ${sas.card1}`}>
              <div className={sas.card}>
                <Img
                  fluid={data.calendario.childImageSharp.fluid}
                  style={{ width: "20%" }}
                  className={sas.card_img_top}
                  alt="Flexibilidad de horario con MercaBot"
                />
                <div className="card-body">
                  <h4 className="card-title text-success text-center">
                    Flexibilidad
                  </h4>
                  <p className="card-text text-center">
                    Libertad de horario en cuanto al manejo y la distribución
                    del tiempo.
                  </p>
                </div>
              </div>
            </div>

            <div className={`col-12 col-lg-4 ${sas.card2}`}>
              <div className={sas.card}>
                <Img
                  fluid={data.crecimiento.childImageSharp.fluid}
                  style={{ width: "20%" }}
                  className={sas.card_img_top}
                  alt="Crece profesionalmente con MercaBot"
                />
                <div className="card-body">
                  <h4 className="card-title text-success text-center">
                    Crecimiento profesional
                  </h4>
                  <p
                    className="card-text text-center"
                    style={{ fontSize: "smaller" }}
                  >
                    Con una labor sobresaliente te ofrecemos la posibilidad de
                    vincularte contractualmente a largo plazo.
                  </p>
                </div>
              </div>
            </div>

            <div className={`col-12 col-lg-4 ${sas.card3}`}>
              <div className={sas.card}>
                <Img
                  fluid={data.ganancias.childImageSharp.fluid}
                  style={{ width: "20%" }}
                  className={sas.card_img_top}
                  alt="Obten ganancias con MercaBot"
                />
                <div className="card-body">
                  <h4 className="card-title  text-success text-center">
                    Ganancias{" "}
                  </h4>
                  <p className="card-text text-center">
                    Tu remuneración será acorde al esfuerzo y las metas
                    alcanzadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`row align-items-center ${sas.mt_10}`}>
          <div className="col-12 col-lg-12 col-md-12 col-sm-12">
            <h4 className={sas.special_area_title}>
              ¿Cómo gano dinero siendo un agente Mercabot?
            </h4>
          </div>

          <div className="col-12 col-lg-12 col-md-12 col-sm-12">
            <h5 className={`${sas.special_area_title2} text-success`}>
              Cumpliendo cualquiera de las tareas a continuación
            </h5>
          </div>
        </div>

        {/* large devices */}
        <div className={`row ${sas.menu_sticky} ${sas.d_xs_none}`}>
          <nav className="col-sm-5 col-5 myScrollspy">
            <ul
              className={`nav ${sas.nav_pills} flex-column`}
              id={sas.menu_one}
            >
                <Scrollspy 
                items={['section-1', 'section-2', 'section-3']}
                currentClassName={sas.active} offset={-400}>
                
                    <li className="nav-item">
                        <Link
                        className={`${sas.nav_link} ${sas.single_sticky} nav-link text-left`}
                        to="#section-1"
                        >
                        <div className="row">
                            <div
                            className={`col-12 col-md-12 ${sas.single_sticky_text}`}
                            >
                            <h3>Registro de comercios</h3>
                            <p>
                                Te invitamos a dar a conocer nuestros servicios a
                                comercios que puedan vender sus productos en nuestra
                                plataforma.
                            </p>
                            </div>
                        </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        className={`${sas.nav_link} ${sas.single_sticky} nav-link text-left`}
                        to="#section-2"
                        >
                        <div className="row">
                            <div
                            className={`col-12 col-md-12 ${sas.single_sticky_text}`}
                            >
                            <h3>Gestión de pedidos</h3>
                            <p>
                                Asignas los pedidos a los comercios cercanos, validas
                                los pagos y velas para que todo fluya de manera exitosa.{" "}
                            </p>
                            </div>
                        </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        className={`${sas.nav_link} ${sas.single_sticky} nav-link text-left`}
                        to="#section-3"
                        >
                        <div className="row">
                            <div
                            className={`col-12 col-md-12 ${sas.single_sticky_text}`}
                            >
                            <h3>Afiliación de usuarios</h3>
                            <p>
                                Te otorgamos un código para que lo compartas con todos
                                tus conocidos y nos ayudes a crecer la comunidad
                                Mercabot.{" "}
                            </p>
                            </div>
                        </div>
                        </Link>
                    </li>
                </Scrollspy>
            </ul>
          </nav>
          <div className="col-sm-7 col-7 d-none d-sm-block">
            <div className="mb-5 section-sticky pt-4" id="section-1">
                {section1}
            </div>
            <div className="mb-5 section-sticky pt-4" id="section-2">
                {section2}
            </div>
            <div className="mb-5 section-sticky pt-4" id="section-3">
                {section3}
            </div>
          </div>
        </div>
      

        {/* small devices */}
        <div className={`row ${sas.menu_sticky} d-block ${sas.d_sm_none}`}>
          <nav className="col-12 myScrollspy">
            <ul
              className={`nav ${sas.nav_pills} flex-column`}
              id={sas.menu_one}
            >
                <Scrollspy 
                items={['section-11', 'section-22', 'section-33']}
                currentClassName={sas.active} offset={-400}>
                    <li className="nav-item" id="section-11">
                        <Link
                        className={`${sas.nav_link} ${sas.single_sticky} nav-link text-left`}
                        to="#section-11"
                        >
                        <div className="row">
                            <div
                            className={`col-12 col-md-12 ${sas.single_sticky_text}`}
                            >
                            <h3>Registro de comercios</h3>
                            <p>
                                Te invitamos a dar a conocer nuestros servicios a
                                comercios que puedan vender sus productos en nuestra
                                plataforma.
                            </p>
                            </div>
                        </div>
                        </Link>
                        <div className="mb-5 section-sticky pt-4">
                            {section1}
                        </div>
                    </li>
                    <li className="nav-item" id="section-22">
                        <Link
                        className={`${sas.nav_link} ${sas.single_sticky} nav-link text-left`}
                        to="#section-22"
                        >
                        <div className="row">
                            <div
                            className={`col-12 col-md-12 ${sas.single_sticky_text}`}
                            >
                            <h3>Gestión de pedidos</h3>
                            <p>
                                Asignas los pedidos a los comercios cercanos, validas
                                los pagos y velas para que todo fluya de manera exitosa.{" "}
                            </p>
                            </div>
                        </div>
                        </Link>
                        <div className="mb-5 section-sticky pt-4" >
                            {section2}
                        </div>
                    </li>
                    <li className="nav-item" id="section-33">
                        <Link
                        className={`${sas.nav_link} ${sas.single_sticky} nav-link text-left`}
                        to="#section-33"
                        >
                        <div className="row">
                            <div
                            className={`col-12 col-md-12 ${sas.single_sticky_text}`}
                            >
                            <h3>Afiliación de usuarios</h3>
                            <p>
                                Te otorgamos un código para que lo compartas con todos
                                tus conocidos y nos ayudes a crecer la comunidad
                                Mercabot.{" "}
                            </p>
                            </div>
                        </div>
                        </Link>
                        <div className="mb-5 section-sticky pt-4" >
                            {section3}
                        </div>
                    </li>
                    {/* <li className="nav-item"> */}
                      
                    {/* </li> */}
                </Scrollspy>
            </ul>
          </nav>
          <div className="col-sm-7 col-7 d-none d-sm-block">
            
            
            
          </div>
        </div>
      

      </div>
    </section>
  )
}

export default SecondAreaAgents

export const query = graphql`
  query {
    calendario: file(relativePath: { eq: "agents/calendario.png" }) {
      childImageSharp {
        fluid(maxWidth: 78, maxHeight: 72) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    crecimiento: file(relativePath: { eq: "agents/crecimiento.png" }) {
      childImageSharp {
        fluid(maxWidth: 72, maxHeight: 72) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    ganancias: file(relativePath: { eq: "agents/ganancias.png" }) {
      childImageSharp {
        fluid(maxWidth: 72, maxHeight: 72) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    formDatosBasicos: file(
      relativePath: { eq: "agents/form-datos-basicos.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 610, maxHeight: 534, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    comercios: file(relativePath: { eq: "agents/comercios.png" }) {
      childImageSharp {
        fluid(maxWidth: 646, maxHeight: 553, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    appMovile: file(relativePath: { eq: "agents/app-movile.png" }) {
      childImageSharp {
        fluid(maxWidth: 477, maxHeight: 536, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
