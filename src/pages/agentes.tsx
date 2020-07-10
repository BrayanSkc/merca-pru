// If you don't want to use TypeScript you can delete this file!
import React from "react"

import { MetaData } from "../utils/globals"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstAreaAgents from "./../components/agents/first-area"
import SecondAreaAgents from "./../components/agents/second-area"
import ThirdAreaAgents from "../components/agents/third-area"

const as = require('../css/agents/agents.module.css')

const Agents: React.FC<{}> = ({}) => (
  <>

    {/* SEO Start */}
        <Seo 
            title={MetaData.AGENTS.META.title} 
            description={MetaData.AGENTS.META.description} 
            keywords={MetaData.AGENTS.META.keywords} 
            author={MetaData.AGENTS.META.author}
            lang={MetaData.AGENTS.META.lang}
            meta={MetaData.AGENTS.META.meta}
            image={MetaData.AGENTS.META.image}
        />
    {/* SEO End */}

    {/* Layout Start */}
        <Layout>
        
            {/* First Area Start */}
                <FirstAreaAgents />
            {/* First Area End */}

            {/* Second Area Star */}
                <SecondAreaAgents />
            {/* Second Area End */}

            {/* Third Area Star */}
                <ThirdAreaAgents />
            {/* Third Area End */}

        </Layout>
    {/* Layout End */}
    
  </>
)

export default Agents