import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const token = process.env.NEXT_PUBLIC_SANITY_TOKEN?.trim()

export const client = sanityClient({
    projectId: 'ehjfuyh4',
    dataset: 'production',
    apiVersion: '2022-08-06',
    useCdn: true,
    ...(token ? { token } : {})  // Only include token if it exists and is valid
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);