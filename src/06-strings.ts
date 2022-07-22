(() => {
  let productTitle = 'Product 1';
  // let productTitle = 123;
  // let productTitle = null;

  productTitle = 'Product 2';
  console.log('productTitle', productTitle);


  const productDescription = "Product 1 description I'm";
  console.log('productDescription', productDescription);
  const number: number = 123;
  const summary = `
  ${productTitle} @
  ${productDescription} @
  price: ${number}
  `;

})();
