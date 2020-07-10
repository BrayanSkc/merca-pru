import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "logo-mercabot.png" }) {
      childImageSharp {
        fixed(width: 283, height: 49) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(query)
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= -10)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
      setSticky(false)
    }
  }, [])

  const activeHeader = {
    borderBottom: "3px solid #1EAD5F",
  }

  return (
    <>
      <header
        className={`header_area animated ${
          isSticky ? "sticky slideInDown" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row align-items-center mt-2">
            <div className="col-12 col-lg-7">
              <div className="menu_area">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Link rel="prev" className="navbar-brand" to="/">
                    <Img
                      loading="eager"
                      fixed={data.placeholderImage.childImageSharp.fixed}
                      alt="Logo MercaBot"
                    />
                  </Link>
                </nav>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="btn-navs row">
                <Link
                  rel="next"
                  to="/clientes"
                  title="Usuarios Mercabot"
                  activeStyle={activeHeader}
                >
                  Usuarios
                </Link>
                <Link
                  rel="next"
                  to="/comercios"
                  title="Comercios Mercabot"
                  activeStyle={activeHeader}
                >
                  Comercios
                </Link>
                <Link
                  rel="next"
                  to="/agentes"
                  title="Agentes Mercabot"
                  activeStyle={activeHeader}
                >
                  Agentes
                </Link>
                <Link
                  rel="next"
                  to="/recursos"
                  title="Recursos Mercabot"
                  activeStyle={activeHeader}
                >
                  Recursos
                </Link>

                <a
                  rel="noopener noreferrer nofollow"
                  href='https://api.whatsapp.com/send?phone=15868004022&text=Hola!'
                  title="Entra al ChatBot de MercaBot"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  Ir a WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={ref}></div>
    </>
  )
}

export default Header
