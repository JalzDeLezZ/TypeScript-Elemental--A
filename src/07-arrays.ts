(()=> {
  let prices = [1,4,5,6,6,7, "hola", true];
  prices.push("asdf")
  console.log('prices', prices);

  let products = ['hola', true];
  products.push("asdf");
  // products.push(123);
  products.push(false);

  let mixed: (string | number | boolean | Object)[] = [1, 'hola', true];
  mixed.push({});


  let number = [1,4,5,6,8,1]
  number.map (item => item * 2);
})();