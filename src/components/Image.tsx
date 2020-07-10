// import React from "react"
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'

// interface UrlProps {
//     children: any
//   }

// const Image: React.SFC<UrlProps> = ({children}) => {

// //   const data = useStaticQuery(
// //     graphql`
// //     query (children) {
// //         placeholderImage: file(relativePath: { eq: children.url }) {
// //           childImageSharp {
// //           fixed(width: 283, height: 49) {
// //             ...GatsbyImageSharpFixed
// //           }
// //         }
// //       }
// //     }
// //   ` 
// //   )
// const { createNodeField } = actions
// const { createFilePath } = require(`gatsby-source-filesystem`)
// const slug = createFilePath({name: `image`, basePath: `pages`})
// createNodeField({
//     node,
//     name: `slug`,
//     value: slug,
//   })
// const data = useStaticQuery(
    
//     graphql`
//     query ($slug: Sting) {
//                 placeholderImage: file(relativePath: { eq: $slug }) {
//                   childImageSharp {
//                   fixed(width: 283, height: 49) {
//                     ...GatsbyImageSharpFixed
//                   }
//                 }
//               }
//             }
//     `
// )

//     return (
//         <Img fixed={data.placeholderImage.childImageSharp.fixed} alt={children.alt}/> 
//     )
// }

// export default Image

// // links****

// // https://spectrum.chat/gatsby-js/general/using-variables-in-a-staticquery~abee4d1d-6bc4-4202-afb2-38326d91bd05

// // https://www.gatsbyjs.org/docs/schema-sift/

// // https://github.com/gatsbyjs/gatsby/issues/2293

// // https://github.com/greglobinski/gatsby-starter-hero-blog/blob/3db65f5badd52c5b50924180c0b0f7d68870bb07/src/components/Blog/Item.js#L32

// // https://twitter.com/TimKolberger/status/1073348582168772608

// // https://twitter.com/jlengstorf/status/1073350099449724930

// // https://github.com/gatsbyjs/gatsby/issues/9843