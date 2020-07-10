import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const fus = require("../../css/resourcs/news.module.css")

export interface FirstAreaNewsProps {
}

const news = {
  editorial: "Espectador",
  title: "Emprendimientos naranja que se lucen durante el coronavirus",
  bodyContent:
    "Es motivo de orgullo demostrar que como colom… naranja que se lucen durante el coronavirus!",
  date: "02/07/2020",
  idNotice: "SBN004",
  author: "Lucia Leal",
  tag: "blog",
}

const FirstAreaNews = () => {
  const social = useStaticQuery(query)
  console.log('article')
  return (
    <section className={`${fus.wellcome_area} clearfix`} id="news">
      <div className="container-fluid bg-white mt-4">
        <div className="row mt-5">
          <div
            className="col-12 text-left"
            style={{
              display: "flex",
              padding: "0 9%",
              justifyContent: "center",
            }}
          >
            <div className={fus.wellcome_heading}>
              <span className={fus.title_news} id="titleNews">
                {news.title}
                <div className={fus.border_bottom}></div>
              </span>
              <div className={fus.author_news} id="authorNews">
                <span>{news.author}</span>
                <span>{news.date}</span>
              </div>
              <div style={{ paddingBottom: "5%" }}> </div>

              <p className={fus.body_news} id="bodyNews">
                {news.bodyContent}
              </p>
              <div className={fus.footerNews}>
                Compartelo
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://api.whatsapp.com/send?text=Visita%20el%20blog%20de%2Mercabot%20en%20https://mercabot.co/recursos
                  "
                >
                  <Img
                    fixed={social.whatsapp.childImageSharp.fixed}
                    className={fus.social_media}
                    alt="whatsapp"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://www.facebook.com/Mercabot-105762264446943/"
                >
                  <Img
                    fixed={social.facebook.childImageSharp.fixed}
                    className={fus.social_media}
                    alt="facebook"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://www.instagram.com/mercabotco/"
                >
                  <Img
                    fixed={social.instagram.childImageSharp.fixed}
                    className={fus.social_media}
                    alt="instagram"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://www.linkedin.com/company/pluriza/"
                >
                  <Img
                    fixed={social.linkedin.childImageSharp.fixed}
                    className={fus.social_media}
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstAreaNews

export const query = graphql`
  query {
    facebook: file(relativePath: { eq: "media/facebook.png" }) {
      childImageSharp {
        fixed(width: 20, height: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    instagram: file(relativePath: { eq: "media/instagram.png" }) {
      childImageSharp {
        fixed(width: 20, height: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    whatsapp: file(relativePath: { eq: "media/whatsapp.png" }) {
      childImageSharp {
        fixed(width: 20, height: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    linkedin: file(relativePath: { eq: "media/linkedin.png" }) {
      childImageSharp {
        fixed(width: 20, height: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
