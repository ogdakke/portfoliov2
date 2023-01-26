const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  "coverImage": coverImage.asset->,
  "slug": slug.current,
  "author": author->{name, picture}
`

export const imageQuery = `

`

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`
// here we get the metadata for each image in the content, and only do this in the post
export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content[]{
      ...,
      _type == 'image' => {
      ...,
      "asset": asset->
      }
    },
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
