import React from "react"
import { Helmet } from "react-helmet"

interface SeoProps {
    title: any
    description: any
    keywords?: any
    author: any
    lang: any
    meta?: any
    image?: any
}

const Seo: React.FC<SeoProps> = ({title, description, keywords, author, lang, meta, image}) => {
    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang,
                }}
                title={title}
                meta={
                    [
                        {
                            name: `description`,
                            content: description,
                        },
                        {
                            name: `keywords`,
                            content: keywords,
                        },
                        {
                            property: `og:title`,
                            content: title,
                        },
                        {
                            property: `og:description`,
                            content: description,
                        },
                        {
                            property: `og:type`,
                            content: `website`,
                        },
                        {
                            name: `twitter:title`,
                            content: title,
                        },
                        {
                            name: `twitter:description`,
                            content: description,
                        }
                    ].concat([
                        {
                            property: "og:image",
                            content: image
                        }
                    ]).concat(meta)
                }
            >
            </Helmet>
        </>
    )
}

export default Seo
