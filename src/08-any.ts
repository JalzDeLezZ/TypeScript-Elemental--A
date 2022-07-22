(()=>{
  let myDinamicVar : any;
  myDinamicVar = 'Product 1';
  myDinamicVar = 123;
  myDinamicVar = {};

  myDinamicVar

  myDinamicVar = 'ANYYY';
  const rta= (myDinamicVar as string).toLowerCase() //cast
  console.log('rta', rta);

  myDinamicVar = 1234;

  const rta2= (<number>myDinamicVar).toFixed() //cast
  console.log('rta', rta2);

})();