// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// import { dataset, projectId } from '../env'

// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source: SanityImageSource) => {
//   return builder.image(source)
// }


import createImageUrlBuider from '@sanity/image-url'
import type { Image } from 'sanity'

import {dataset, projectId} from '../env'
import { format } from 'path'
import { url } from 'inspector'

const imageBuilder = createImageUrlBuider ({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) =>{
  return imageBuilder?.image(source).auto('format').fit('max'),url()
}