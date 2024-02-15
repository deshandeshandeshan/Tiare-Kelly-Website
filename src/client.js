import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "2knyycje",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-02-16", // use current date (YYYY-MM-DD) to target the latest API version
});

export default client;
