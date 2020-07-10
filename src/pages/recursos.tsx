import React, { useState } from "react"
import { MetaData } from "../utils/globals"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstAreaResources from "../components/resources/first-area"
import SecondAreaResources from "../components/resources/second-area"

export interface ResourcesProps {}

const Resources: React.SFC<ResourcesProps> = () => {
  const [changeFilter, setChangeFilter] = useState(false)
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

      <FirstAreaResources onClick={() => setChangeFilter(!changeFilter)} />
      <SecondAreaResources isFilter={changeFilter} />
    </Layout>
  )
}

export default Resources
