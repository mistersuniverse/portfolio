import  sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-08-01',
    useCdn: true,
    token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN

});

const builder = ImageUrlBuilder(client);

export const urlFor = ( source ) => builder.image(source);