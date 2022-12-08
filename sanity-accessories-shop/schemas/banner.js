import { defineType } from 'sanity'


const banner = defineType({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'product', // as /id for product
            title: 'Product',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true}
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string'
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string'
        },
        {
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string'
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string'
        },
        {
            name: 'smallText',
            title: 'SmallText',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'MidText',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'LargeText2',
            type: 'string',
        },

    ]
})

export default banner