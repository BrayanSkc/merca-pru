

import React, { useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { sendEmail } from "../../services/email.services"
const fas = require('../../css/agents/agents.module.css')


const FirstAreaUsers = () => {

    const data = useStaticQuery(query)
    const [emailInput, setEmailInput] = useState("")

    const sendInfo = async () => {
        await sendEmail(emailInput, "Agents").then((response: any) => {
            setEmailInput("")
        }).catch((err: any) => {
            alert(err.message)
        })
    }
    // section_padding_0_100 clearfix
    return (
        <section className={`
        ${fas.wellcome_area} 
        ${fas.section_padding_0_100} 
        clearfix
        `} id="home">

            <div className="container-fluid">

                <div className="row align-items-center pb-5 mt-5">

                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8" style={{paddingLeft: '9%'}}>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className={fas.wellcome_heading}>
                                    <h1>
                                        <strong>Deseo ser un agente Mercabot</strong>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className={fas.wellcome_heading}>
                                    <h2>La oportunidad de trabajar desde la comodidad de tu casa</h2>
                                    <p className="mt-5">Hemos diseñado un sistema colaborativo que ofrece empleo a todas aquellas personas que tienen tiempo libre, internet y deseos de ganar algo de dinero. </p>
                                    <p className="mt-5"><strong>¿Estás listo para unirte a nuestra familia Mercabot?</strong></p>
                                    <div className="input-group mt-4 mb-3">
                                    <input type="text" value={emailInput} onChange={(e: any) => setEmailInput(e.target.value)} className={`form-control ${fas.text_size_half}`} id="agents" name="agents" placeholder="Déjanos tu correo" aria-label="Déjanos tu correo" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                            <button type="button" className={`btn btn-dark btn-outline-secondary text-white ${fas.text_size_half}`} onClick={sendInfo}>Enviar</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
                                <Img fluid={data.collegeGirl.childImageSharp.fluid} className={`wow fadeInDown shadow ${fas.first_woman_img}`} alt="Piensa en trabajar en MercaBot"/>
                            </div>
                            <div className={`col-6 ${fas.hidden_xs_ups}`}>
                                <Img fluid={data.boy.childImageSharp.fluid} className={`wow fadeInDown shadow ${fas.first_man_img_xs}`} alt="Aplicación para agentes MercaBot"/>
                            </div>
                        </div>

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <Img fluid={data.boy.childImageSharp.fluid} className={`wow fadeInDown shadow ${fas.first_man_img}`} alt="Aplicación para agentes MercaBot"/>
                    </div>

                </div>

            </div>
        
        </section>
    )
}


export default FirstAreaUsers

export const query = graphql`
  query {
      collegeGirl: file(relativePath: { eq: "agents/college-girl.jpg" }) {
        childImageSharp {
        fluid(maxWidth: 250, maxHeight: 360) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    boy: file(relativePath: { eq: "agents/boy.jpg" }) {
        childImageSharp {
        fluid(maxWidth: 227, maxHeight: 338, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
