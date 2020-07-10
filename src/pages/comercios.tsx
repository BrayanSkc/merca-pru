// If you don't want to use TypeScript you can delete this file!
import React from "react"

import { MetaData } from "../utils/globals"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstAreaShops from "./../components/shops/first-area"
import SecondAreaShops from "./../components/shops/second-area"
import ThirdAreaShops from "../components/shops/third-area"
import Modal from "../components/modal"

const Shops: React.FC<{}> = ({}) => (
  <>
    {/* SEO Start */}
    <Seo
      title={MetaData.SHOPS.META.title}
      description={MetaData.SHOPS.META.description}
      keywords={MetaData.SHOPS.META.keywords}
      author={MetaData.SHOPS.META.author}
      lang={MetaData.SHOPS.META.lang}
      meta={MetaData.SHOPS.META.meta}
      image={MetaData.SHOPS.META.image}
    />
    {/* SEO End */}
    {/* Layout Start */}
    <Layout>
      
      {/* First Area Start */}
      <FirstAreaShops />
      {/* First Area End */}

      {/* Second Area Star */}
      <SecondAreaShops />
      {/* Second Area End */}

      {/* Third Area Star */}
      <ThirdAreaShops />
      {/* Third Area End */}
    </Layout>
    {/* Layout End */}
  </>
)

export default Shops
