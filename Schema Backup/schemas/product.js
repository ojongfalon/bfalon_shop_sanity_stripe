export const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot:true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength:90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
                {
            name: 'rate',
            title: 'Rate',
            type: 'number',
            options: {
                maxLength: 5,
                default:1,
            }
        },
        {
            name: 'reviews',
            title: 'Reviews',
            type:'number',
        },

        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
}