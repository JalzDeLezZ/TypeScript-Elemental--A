import { createProduct, calcStock, aProducts } from "./product.service";


  createProduct({
    name: 'Product 1',
    price: 10,
    description: 'Product 1 description',
    image: 'https://picsum.photos/200/300',
    stock: 10,
    createAt: new Date(),
  });
  createProduct({
    name: 'Product 1',
    price: 10,
    description: 'Product 1 description',
    image: 'https://picsum.photos/200/300',
    stock: 100,
    createAt: new Date(),
    sizes: 'S',
  });

  console.log(aProducts);

  const total = calcStock();
  console.log(total);