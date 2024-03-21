import products from './response.mock.json'
import { Product } from "../../types/Product";

export const findProductById = (productId: string): Product | undefined => {
  return products.find(({id}) => id === productId)
}
