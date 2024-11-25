import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const customer = createClient({
  projectId:'8zbi1xt1',
  dataset:'production',
  apiVersion:'v2024-11-25',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
