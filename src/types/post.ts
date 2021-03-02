interface Tag {
  slug: string
  title: string
}

export interface Post {
  slug: string
  title: string
  image: string
  preview: string
  content: string
  created: string
  tags: Tag[]
}
