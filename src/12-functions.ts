(() => {
  type Sizes = 'small' | 'medium' | 'large';

  function createProductToJson( //number, object, boolean, string
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size,
    };
  }
  const producto1 = createProductToJson('Camiseta', new Date(), 10, 'small');
  const producto2 = createProductToJson('Pantalon', new Date(), 20, 'medium');

  console.log(producto1);
  console.log(producto1.title);
  console.log(producto2);


  const createProductToJsonV2 = ( //number, object, boolean, string
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size,
    };
  }

  const producto3 = createProductToJsonV2('Camiseta', new Date(), 10, 'small');
  const producto4 = createProductToJsonV2('Pantalon', new Date(), 20);

  console.log(producto3);
  console.log(producto4.title);
  console.log(producto4.size);
  console.log(producto4.stock);

})();
