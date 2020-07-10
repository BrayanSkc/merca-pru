import React, { useState, useCallback, useEffect } from "react"
import "./style.css"
import Loader from "../loader/index"
import { gsap } from "gsap"
import { sendInfoAsoc } from "../../services/email.services"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export interface ModalProps {
  isShow: boolean
  onClose: Function
}

interface FieldContact {
  typeMembership: string
  fullName: string
  email: string
  numberPhone: string
  message: string
}

const DefaultFieldContact = {
  typeMembership: "",
  fullName: "",
  email: "",
  numberPhone: "",
  message: "",
}

interface ModalSendProps {
  isVisible: boolean
}

const ModalSend: React.SFC<ModalSendProps> = ({ isVisible }) => {
  const data = useStaticQuery(query)

  return (
    <>
      {isVisible && (
        <div className="finish-content" onClick={onclose as any}>
          <Img
            fluid={data.surface.childImageSharp.fluid}
            className="img-send-data"
            alt="Datos enviados correctamente"
          />
          <span className="text-send-data">
            ¡La solicitud se ha enviado de forma exitosa!
          </span>
          <span className="text-send-data">
            Nuestro equipo se estará comunicando contigo próximamente para
            vincular a tu negocio.
          </span>
        </div>
      )}
    </>
  )
}

const Modal: React.SFC<ModalProps> = ({ isShow, onClose }) => {
  const [field, setField] = useState<FieldContact>(DefaultFieldContact)
  const [loading, setLoading] = useState(false)
  const [isFinish, setIsFinish] = useState(false)

  const getAnimation = () => {
    gsap.from(".content-modal", {
      duration: 2,
      scale: 0.5,
      opacity: 0,
      delay: 0.3,
      stagger: 0.2,
      ease: "elastic",
      force3D: true,
    })
  }

  const registerUser = async () => {
    try {
      if (!validData()) {
        alert("datos no enviados correctamente")
      } else {
        setLoading(true)
        setTimeout(() => {
          sendInfoAsoc(field)
          setField(DefaultFieldContact)
          setLoading(false)
        }, 1000)

        setTimeout(() => {
          setIsFinish(true)
        }, 2000)
        setTimeout(() => {
          onCloseForm()
        }, 3000)
      }
    } catch (error) {}
  }

  const onCloseForm = async () => {
    await gsap.to(".content-modal", {
      duration: 0.5,
      opacity: 0,
      y: -100,
      stagger: 0.1,
      ease: "back.in",
    })
    onClose()
    setIsFinish(false)
  }
  const handleChange = useCallback(
    (key: keyof FieldContact, value?: any) => {
      setField({
        ...field,
        [key]: value,
      })
    },
    [field]
  )

  const validData = () => {
    try {
      if (field.fullName.trim() == "" || field.fullName.length < 4) {
        return false
      }

      if (
        !/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/.test(
          field.email
        )
      ) {
        return false
      }

      if (!/^(\+57)?[3]{1}[0-2]{1}[0-9]{1}[0-9]{7}$/.test(field.numberPhone)) {
        return false
      }

      return true
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAnimation()
  }, [isShow])

  return (
    <>
      {isShow ? (
        <div className="background-modal">
          <div className="content-modal">
            <span
              className="modal-close-header"
              onClick={onClose as any}
              style={{ cursor: "pointer", zIndex: 3 }}
            >
              x
            </span>
            <div className="form-contact-modal">
              {isFinish ? (
                <ModalSend isVisible={isFinish} />
              ) : (
                <form>
                  {loading && (
                    <div className="content-loader">
                      <Loader visible={loading} />
                    </div>
                  )}
                  <span className="form-title">
                    Ingresa tus datos para que podamos comunicarnos contigo:
                  </span>
                  <div className="form-group hg-f">
                    <label htmlFor="membershipControl">
                      Tipo de afiliación
                    </label>
                    <select
                      className="form-control hg-i"
                      id="membershipControl"
                      value={field.typeMembership}
                      onChange={({ target: { value } }: any) => {
                        handleChange("typeMembership", value)
                      }}
                    >
                      <option value="" disabled selected></option>
                      <option value="ASC">Asociado</option>
                      <option value="AGN">Agente</option>
                    </select>
                  </div>

                  <div className="form-group hg-f">
                    <label htmlFor="NameUserControl">Nombre completo:</label>
                    <input
                      type="text"
                      className="form-control text-capitalize hg-i"
                      id="NameUserControl"
                      value={field.fullName}
                      autoComplete="off"
                      onChange={({ target: { value } }: any) => {
                        handleChange("fullName", value)
                      }}
                    />
                  </div>

                  <div className="form-group hg-f">
                    <label htmlFor="emailControl">Correo electrónico:</label>
                    <input
                      type="email"
                      className="form-control text-lowercase hg-i"
                      id="emailControl"
                      value={field.email}
                      onChange={({ target: { value } }: any) => {
                        handleChange("email", value)
                      }}
                    />
                  </div>

                  <div className="form-group hg-f">
                    <label htmlFor="NumberUser">Número de contacto:</label>
                    <input
                      type="number"
                      className="form-control hg-i"
                      id="NumberUser"
                      value={field.numberPhone}
                      onChange={({ target: { value } }: any) => {
                        handleChange("numberPhone", value)
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="MessageControl">Mensaje:</label>
                    <textarea
                      className="form-control p-0"
                      id="MessageControl"
                      rows={2}
                      style={{ resize: "none", fontSize:'12px' }}
                      value={field.message}
                      onChange={({ target: { value } }: any) => {
                        handleChange("message", value)
                      }}
                    ></textarea>
                    <span className="footer-modal-text">
                      Al ingresar tu correo, aceptas nuestras Políticas de
                      Privacidad y que tus datos sean tratados conforme a la Ley
                      1581 de 2012.
                    </span>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm12 py-1 d-flex justify-content-center">
                    <button
                      type="button"
                      className={`btn btn-dark btn-outline-secondary text-white btn_send`}
                      style={{ background: "#000028" }}
                      onClick={registerUser}
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal

export const query = graphql`
  query {
    surface: file(relativePath: { eq: "shops/goals.png" }) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
