// If you don't want to use TypeScript you can delete this file!
import React from "react"

import { MetaData } from "../utils/globals"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstAreaConditions from "./../components/conditions/first-area"
import SecondAreaconditions from "./../components/conditions/second-area"
// import ThirdAreaconditions from "../components/conditions/third-area"

const Conditions: React.FC<{}> = ({}) => (
  <>

    {/* SEO Start */}
        <Seo 
            title={MetaData.CONDITIONS.META.title} 
            description={MetaData.CONDITIONS.META.description} 
            keywords={MetaData.CONDITIONS.META.keywords} 
            author={MetaData.CONDITIONS.META.author}
            lang={MetaData.CONDITIONS.META.lang}
            meta={MetaData.CONDITIONS.META.meta}
            image={MetaData.CONDITIONS.META.image}
        />
    {/* SEO End */}

    {/* Layout Start */}
        <Layout>
        
            {/* First Area Start */}
                <FirstAreaConditions />
            {/* First Area End */}

            {/* Second Area Star */}
                <SecondAreaconditions />
            {/* Second Area End */}

        </Layout>
    {/* Layout End */}
    
  </>
)

export default Conditions
