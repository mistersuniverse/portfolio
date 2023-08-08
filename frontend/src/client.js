import  sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'sdspj56b',
    dataset: 'production',
    apiVersion: '2023-08-01',
    useCdn: true,
    token: 'skl6yQKTLrzg1IiJK7wWgbROErLLi3PoZrCFIe1WWko1YqCMDDeDpsSDYFjjOaBmhhiiHwvIbTnDuAut0gXxnrRbdjtEgLyjR8Wb3oiJIErpZ8OPSTbmacpxAlfOQESBK4KoPGcPJjqbBzGwLEm0qYLZPE5o1Es3Er49fxaJPg4tclYtOiVl'

});

const builder = ImageUrlBuilder(client);

export const urlFor = ( source ) => builder.image(source);