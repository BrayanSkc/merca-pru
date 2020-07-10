import React from "react"
import "./styles.scss"

interface LoaderProps {
  visible: boolean
}

const Loader: React.SFC<LoaderProps> = ({ visible }) => {
  return (
    <>
      {visible ? (
          <div className="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
      ) : null}
    </>
  )
}

export default Loader

export interface Props {}
