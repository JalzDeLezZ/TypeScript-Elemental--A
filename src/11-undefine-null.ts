(() => {
  // let myNumber:number;
  // let myString:string;

  let myNull:null = null;
  let myUndefined:undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 1234;

  let myString: string | undefined = undefined;
  myString = 'ASDFASDF';

  function hi(name:string | null) {
    let hello = 'Hello ';
    if (name) {
      hello += name.toLowerCase();
    } else {
      hello += 'World';
    }
    console.log(hello);
  }

  function hiV2(name:string | null) {
    let hello = 'Hello ';
    hello += name?.toLowerCase() || 'World'; //optional chaining
    console.log(hello);
  }
  hiV2('Jalz');
  hiV2(null);

})();