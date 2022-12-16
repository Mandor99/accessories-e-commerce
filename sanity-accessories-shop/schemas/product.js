import { defineType } from 'sanity'


const product =  defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name', // to create auto id for document with name
                maxLength: 90
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}], //type is array of images [...images]
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        },
        {
            name: 'smallDetails',
            title: 'smallDetails',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'rate',
            title: 'Rate',
            type: 'number'
        },
        {
            name: 'numRates',
            title: 'NumRates',
            type: 'number'
        },
    ]
})

export default product