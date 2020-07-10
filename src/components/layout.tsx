// If you don't want to use TypeScript you can delete this file!
import React from "react"

import Header from "./../components/header/index"
import Footer from "./../components/footer/index"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"


interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    {/*  Header Start */}
    <Header />
    {/*  Header End */}

    {/* Content Start */}
    {children}
    {/* Content End */}

    {/*  Footer Start */}
    <Footer />
    {/*  Footer End */}

    <Helmet>
      {/* <script
        src={withPrefix("../../js/jquery.min.js")}
        type="text/javascript"
      />
      <script
        src={withPrefix("../../js/popper.min.js")}
        type="text/javascript"
      />
      <script
        src={withPrefix("../../js/bootstrap.min.js")}
        type="text/javascript"
      /> */}
    </Helmet>
  </>
)

export default Layout
