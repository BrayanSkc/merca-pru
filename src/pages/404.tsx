// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

type DataProps = {
    site: {
      buildTime: string
    }
  }
  
const Index: React.FC<PageProps<DataProps>> = ({ data, path }) => (
    <>
        <h1>Error</h1>
    </>
)

export default Index


export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
