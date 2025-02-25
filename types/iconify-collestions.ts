export type IconifyCollections = IconifyCollestion[]

export interface IconifyCollestion {
  name: string
  total: number
  version: string
  author: Author
  license: License
  samples: string[]
  category: string
  palette: boolean
}

export interface Author {
  name: string
  url: string
}

export interface License {
  title: string
  spdx: string
  url: string
}
