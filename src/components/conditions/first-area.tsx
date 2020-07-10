

import React from "react"
const fcs = require('../../css/conditions/conditions.module.css')


const FirstAreaConditions = () => {

    return (
        <section className={`${fcs.wellcome_area} clearfix`} id="home">
            
            <div className="container-fluid">

                <div className="row align-items-center mt-5">

                    <div className="col-12 col-lg-12 col-md-12 col-sm-12" style={{display: 'flex', paddingLeft: '9%'}}>
                        <div className={fcs.wellcome_heading}>
                            <h1>
                                {/* <strong>Terminos y condiciones de Mercabot</strong> */}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}


export default FirstAreaConditions