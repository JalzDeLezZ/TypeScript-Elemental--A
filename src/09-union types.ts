(() => {
  let userId: string | number;
  userId = 1234;
  let userId2: string = 'ASDFASDF';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string  ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed()}`);
    }
  }

  greeting(userId);
  greeting(userId2);
  
})();
