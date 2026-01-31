import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  "summary": pt::text(body),
  "publishDate": publishedAt,
  "tags": categories[]->title,
  "imageUrl": mainImage.asset->url
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  "publishDate": publishedAt,
  "tags": categories[]->title,
  "imageUrl": mainImage.asset->url,
  body,
  "author": author->{name, image}
}`;

export const GALLERY_QUERY = groq`*[_type == "gallery"][0] {
  title,
  images[]{
    "id": asset._ref,
    "imageUrl": asset->url,
    "title": caption,
    "destination": alt
  }
}`;

export const ABOUT_QUERY = groq`*[_type == "about"][0] {
  title, 
  "imageUrl": heroImage.asset->url,
  content
}`;
