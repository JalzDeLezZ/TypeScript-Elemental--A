import { oProduct } from "./product.model";

export const aProducts: oProduct[] = [];

export const createProduct = (data: oProduct) => {
  aProducts.push(data);
};

export const calcStock = () : number => {
  let total = 0;
  aProducts.forEach(pI => {
    total += pI.stock;
  })
  return total;
}