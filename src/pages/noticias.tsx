import React from "react"

import { MetaData } from "../utils/globals"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstAreaNews from "../components/news/first-area"
import SecondAreaNews from "../components/news/second-area"

export interface ResourcesProps {}
const News: React.SFC<ResourcesProps> = () => {
 
  return (
    <Layout>
      <Seo
        title={MetaData.AGENTS.META.title}
        description={MetaData.AGENTS.META.description}
        keywords={MetaData.AGENTS.META.keywords}
        author={MetaData.AGENTS.META.author}
        lang={MetaData.AGENTS.META.lang}
        meta={MetaData.AGENTS.META.meta}
        image={MetaData.AGENTS.META.image}
      />

      <FirstAreaNews/>
      <SecondAreaNews />
    </Layout>
  )
}

export default News
