import {createClient} from '@sanity/client'

const client = createClient({
  projectId: "or36hvfv",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-12-01",
});

export default client