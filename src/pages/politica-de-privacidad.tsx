// If you don't want to use TypeScript you can delete this file!
import React from "react"

import { MetaData } from "../utils/globals"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstAreaPolicies from "./../components/policies/first-area"
import SecondAreaPolicies from "./../components/policies/second-area"
// import ThirdAreaPolicies from "../components/policies/third-area"

const Policies: React.FC<{}> = ({}) => (
  <>

    {/* SEO Start */}
        <Seo 
            title={MetaData.POLICIES.META.title} 
            description={MetaData.POLICIES.META.description} 
            keywords={MetaData.POLICIES.META.keywords} 
            author={MetaData.POLICIES.META.author}
            lang={MetaData.POLICIES.META.lang}
            meta={MetaData.POLICIES.META.meta}
            image={MetaData.POLICIES.META.image}
        />
    {/* SEO End */}

    {/* Layout Start */}
        <Layout>
        
            {/* First Area Start */}
                <FirstAreaPolicies />
            {/* First Area End */}

            {/* Second Area Star */}
                <SecondAreaPolicies />
            {/* Second Area End */}

            {/* Third Area Star */}
                {/* <ThirdAreaUsers /> */}
            {/* Third Area End */}

        </Layout>
    {/* Layout End */}
    
  </>
)

export default Policies
