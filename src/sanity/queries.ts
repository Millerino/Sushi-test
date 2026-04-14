import { groq } from 'next-sanity'

export const menuItemsQuery = groq`
  *[_type == "menuItem"] | order(category asc, order asc, price asc) {
    _id,
    name,
    price,
    description,
    category
  }
`

export const menuItemsByCategoryQuery = groq`
  *[_type == "menuItem" && category == $category] | order(order asc, price asc) {
    _id,
    name,
    price,
    description,
    category
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    restaurantName,
    tagline,
    phone,
    address,
    email,
    openingHours
  }
`
