import { products } from "@/data/data"
import { ProductFilterInterface } from "@/utils/types"

export const getProducts = async (params: ProductFilterInterface) => {
  return products
}
