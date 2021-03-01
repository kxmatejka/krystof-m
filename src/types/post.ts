interface Tag {
  slug: string
  title: string
}

interface Chapter {
  title?: string
  content: string
}

export interface Post {
  slug: string
  title: string
  image: string
  preview: string
  chapters: Chapter[]
  tags: Tag[]
  created: string
}
