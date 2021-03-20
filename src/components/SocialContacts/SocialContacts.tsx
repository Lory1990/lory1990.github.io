import React from 'react'

export interface ISingleContactProps{
    imgUrl: string,
    url: string,
    label: string,
}

const SingleContact = ({imgUrl, url, label} : ISingleContactProps) =>{

    return <a href={url} target='_blank'>
        <img src={imgUrl} /> 
        {label}
    </a>
}

export default function SocialContacts{


    <div>
        <SingleContact  
            imgUrl="https://www.facebook.com/lory1990"
            label="lory1990"
            url="https://www.instagram.com/lory_1990"
        />
        <SingleContact  
            imgUrl="https://cdn.cdnlogo.com/logos/f/83/facebook.svg"
            label="@lory_1990"
            url="https://www.instagram.com/lory_1990"
        />
        <SingleContact  
            imgUrl="https://cdn.cdnlogo.com/logos/f/83/facebook.svg"
            label="lorenzo.defrancesco"
            url="https://www.instagram.com/lory_1990"
        />
    </div>
}