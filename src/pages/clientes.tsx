// If you don't want to use TypeScript you can delete this file!
import React from "react"

import { MetaData } from "../utils/globals"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstAreaUsers from "./../components/users/first-area"
import SecondAreaUsers from "./../components/users/second-area"
import ThirdAreaUsers from "../components/users/third-area"

const Users: React.FC<{}> = ({}) => (
  <>

    {/* SEO Start */}
        <Seo 
            title={MetaData.USERS.META.title} 
            description={MetaData.USERS.META.description} 
            keywords={MetaData.USERS.META.keywords} 
            author={MetaData.USERS.META.author}
            lang={MetaData.USERS.META.lang}
            meta={MetaData.USERS.META.meta}
            image={MetaData.USERS.META.image}
        />
    {/* SEO End */}

    {/* Layout Start */}
        <Layout>
        
            {/* First Area Start */}
                <FirstAreaUsers />
            {/* First Area End */}

            {/* Second Area Star */}
                <SecondAreaUsers />
            {/* Second Area End */}

            {/* Third Area Star */}
                <ThirdAreaUsers />
            {/* Third Area End */}

        </Layout>
    {/* Layout End */}
    
  </>
)

export default Users
