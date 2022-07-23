(() => {
  // const login = (email: string, password: string) => {
  const login = (data: { email: string; password: number }) => {
    console.log(`Login: ${data.email}`);
  };

  // login('@gmail.com', '123456');
  login({
    email: 'test@gmail.com',
    password: 123456,
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const aProducts: any[] = [];

  const addProduct = (data: {
    title: string;
    price: number;
    description: string;
    image: string;
    stock: number;
    createAt: Date;
    sizes?: Sizes;
  }) => {
    console.log(`Product: ${data.title}`);
    aProducts.push(data);
  };

  addProduct({
    title: 'Product 1',
    price: 10,
    description: 'Product 1 description',
    image: 'https://picsum.photos/200/300',
    stock: 10,
    createAt: new Date(),
  })
  addProduct({
    title: 'Product 1',
    price: 10,
    description: 'Product 1 description',
    image: 'https://picsum.photos/200/300',
    stock: 10,
    createAt: new Date(),
    sizes: 'S',
  })

  console.log(aProducts);

})();
