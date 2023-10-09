export interface Content {
  id: number,
  typeTitle: string,
  type: string,
  link: string,
  img?: string,
  category: string,
  author: string,
  tag?: [],
  landing?: boolean,
  trending?: boolean,
  description?: string,
}
