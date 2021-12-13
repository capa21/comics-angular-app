export interface Comic {
  title: string,
  srcImageMobile: string,
  srcImageMedium?: string,
  srcImageLarge?: string,
  srcSetImages: string,
  price: number,
  globalInformation?: string,
  creator: string,
  characters: string[]
}
