// If you don't want to use TypeScript you can delete this file!
import React from "react"
import "../css/home/index.css"

import { MetaData } from "../utils/globals"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstAreaHome from "./../components/home/first-area"
import SecondAreaHome from "./../components/home/second-area"
import ThirdAreaHome from "../components/home/third-area"

const Index: React.FC<{}> = ({}) => (
    <>
    
        {/* SEO Start */}
            <Seo 
                title={MetaData.HOME.META.title} 
                description={MetaData.HOME.META.description} 
                keywords={MetaData.HOME.META.keywords} 
                author={MetaData.HOME.META.author}
                lang={MetaData.HOME.META.lang}
                meta={MetaData.HOME.META.meta}
                image={MetaData.HOME.META.image}
            />
        {/* SEO End */}
        
        {/* Layout Start */}
            <Layout>
                
                {/* First Area Start */}
                    <FirstAreaHome />
                {/* First Area End */}

                {/* Second Area Star */}
                    <SecondAreaHome />
                {/* Second Area End */}

                {/* Third Area Star */}
                    <ThirdAreaHome />
                {/* Third Area End */}

            </Layout>
        {/* Layout End */}

    </>
)

export default Index
