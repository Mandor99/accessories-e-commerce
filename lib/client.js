import React from 'react'

import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_ID,
    dataset: 'production',
    apiVersion: '2022-12-08',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true, 
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
