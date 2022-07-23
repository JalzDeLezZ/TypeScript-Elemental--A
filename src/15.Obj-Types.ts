(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type oProduct = {
    title: string;
    price: number;
    description: string;
    image: string;
    stock: number;
    createAt: Date;
    sizes?: Sizes;
  };

  // const aProducts: any[] = []; // aProducts.push(123);
  const aProducts: oProduct[] = [];

  const addProduct = (data: oProduct) => {
    aProducts.push(data);
  };

  addProduct({
    title: 'Product 1',
    price: 10,
    description: 'Product 1 description',
    image: 'https://picsum.photos/200/300',
    stock: 10,
    createAt: new Date(),
  });
  addProduct({
    title: 'Product 1',
    price: 10,
    description: 'Product 1 description',
    image: 'https://picsum.photos/200/300',
    stock: 10,
    createAt: new Date(),
    sizes: 'S',
  });

  // aProducts.push({}); // Error: Argument of type '{}' is not assignable to parameter of type 'oProduct'.
  aProducts.push({
    title: 'Product 1',
    price: 10,
    description: 'Product 1 description',
    image: 'https://picsum.photos/200/300',
    stock: 10,
    createAt: new Date(1992,1,1),
    sizes: 'XL',
  });

  console.log(aProducts);
})();
