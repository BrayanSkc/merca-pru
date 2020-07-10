import React, { useState, useRef } from "react"
const fas = require("../../css/resourcs/resources.module.css")
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

interface FirstAreaResourcesProps {
  onClick?: Function
}

const FirstAreaResources = ({ onClick }) => {
  const Storage = {
    SectionFilter: sessionStorage.getItem("OptionFilter"),
    TextFilter: sessionStorage.getItem("TextFilter"),
  }
  const activeClass = useRef(Storage)
  const [textFilter, setTextFilter] = useState("")

  const clearSearch = () => {
    if (textFilter.trim() === "") {
      sessionStorage.removeItem("TextFilter")
    }
  }

  const optionFilter = (filter: string) => {
    sessionStorage.setItem("OptionFilter", filter)
    activeClass.current = {
      SectionFilter: filter,
      TextFilter: textFilter,
    }
    onClick()
  }
  const blogToSearch = () => {
    sessionStorage.setItem("TextFilter", textFilter)
    onClick()
  }

  clearSearch()
  return (
    <section
      className={`
        ${fas.wellcome_area} 
        ${fas.section_padding_0_100} 
        clearfix
        `}
      id="recursos"
    >
      <div className="container-fluid">
        <div className="row align-items-center pb-5 mt-5">
          <div
            className="col-12 col-lg-12 col-md-12 col-sm-12 pt-5"
            style={{ paddingLeft: "9%" }}
          >
            <div className="row align-items-center mt-5">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className={fas.wellcome_heading}>
                  <h1>
                    <strong>
                      Descubre todo el contenido que tenemos para ti
                    </strong>
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10">
                <div className={fas.wellcome_heading}>
                  <div className="input-group mt-4 mb-3">
                    <span
                      className="input-group-text"
                      style={{
                        marginRight: "-2px",
                        zIndex: 1,
                        background: "#fff",
                        borderRightColor: "transparent",
                      }}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input
                      type="text"
                      value={textFilter}
                      onChange={(e: any) => setTextFilter(e.target.value)}
                      className={`form-control ${fas.text_size_half}`}
                      id="search"
                      name="search"
                      autoComplete="off"
                      style={{ boxShadow: "none" }}
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className={`btn btn-outline-secondary text-white ${fas.text_size_half}`}
                        style={{ background: "#000028" }}
                        onClick={blogToSearch}
                      >
                        Buscar
                      </button>
                    </div>
                  </div>
                </div>

                <div className={fas.wellcome_heading}>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="col-xl-10-lg-10 col-md-10 col-sm-10 d-flex justify-content-end">
                      <button
                        type="button"
                        className={
                          activeClass.current.SectionFilter === "Prensa"
                            ? `${fas.btn_menu} ${fas.btn_active}`
                            : fas.btn_menu
                        }
                        onClick={() => optionFilter("Prensa")}
                      >
                        Prensa
                      </button>
                      <button
                        type="button"
                        className={
                          activeClass.current.SectionFilter === "Blog"
                            ? `${fas.btn_menu} ${fas.btn_active}`
                            : fas.btn_menu
                        }
                        onClick={() => optionFilter("Blog")}
                      >
                        Blog
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstAreaResources
