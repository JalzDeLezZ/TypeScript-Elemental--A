(() => {

  type UserID = string | number;
  let userId: UserID;

  //literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  // shirtSize = 'Las'; // error
  shirtSize = 'L';
  shirtSize = 'M';
  shirtSize = 'XL';

  function greeting (userId: UserID, size: Sizes){
    if (typeof userId === 'string') {
      console.log(`string  ${userId.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${userId.toFixed()}`);
    }
    console.log(`size ${size}`);
  }

  greeting(1234, "S");
  greeting("ASDFASDF", "M");
  // greeting(true, "M"); // error

})();
