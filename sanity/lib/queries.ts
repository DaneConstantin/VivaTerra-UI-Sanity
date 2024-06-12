// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const PROPERTIES_QUERY = groq`*[_type == "property" && defined(slug)]`;

export const PROPERTY_QUERY = groq`*[_type == "property" && slug.current == $slug][0]`;

export const FAQ_QUERY = groq`*[_type == "faq"]`;
