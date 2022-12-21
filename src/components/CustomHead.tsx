//import { useEffect  } from 'react'
import { Helmet } from "react-helmet"
import _ from "lodash"
import React from "react"
// import ReactGA from 'react-ga'

//https://sitechecker.pro/it/open-graph/
//https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
//https://support.google.com/webmasters/answer/79812?hl=it
//https://gist.github.com/EvanBacon/7fd4dc3be3d00096579bb0b134c56ec7

//Aggiugnere fb:app_id

export interface ICustomHeadProps {
    translateDescription?: boolean
    translateTitle?: boolean
    description?: string
    title?: string
    url?: string
    type?: string
    image?: string
    imageWidth?: string
    imageHeight?: string
}

export const CustomHead: React.FC<ICustomHeadProps> = ({ type = "website", url = "https://lory1990.github.io", image = "/assets/img/placeholders/logo.svg", description, ...props }) => {
    const title = props.title ? `${props.title} | Lorenzo De Francesco` : "Lorenzo De Francesco"
    const realUrl = url?.startsWith("http") ? url : "https://lory1990.github.io/" + url
    const realImage = image?.startsWith("http") ? image : "https://lory1990.github.io/" + image

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={realUrl} />

            <meta property="og:locale" content={"IT-it"} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={realImage} />
            <meta property="og:url" content={realUrl} />
            <meta property="og:site_name" content="AutoConnexa" />

            <meta property="og:image:width" content={props.imageWidth} />
            <meta property="og:image:height" content={props.imageHeight} />

            <meta name="twitter:image" content={realImage} />
            <meta name="twitter:summary_large_image" content={realImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content={realUrl} />
            <meta name="twitter:creator" content="" />
        </Helmet>
    )
}

export default CustomHead
