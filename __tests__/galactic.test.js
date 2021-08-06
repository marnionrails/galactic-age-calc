import Galactic from './../src/galactic.js';

describe('Galactic', () => {

  test('should return a string asking for a number, given any other type of input is entered', () => {
    const user_age = "not a num";
    const userAge = new Galactic(user_age);
    userAge.isNumber();
    const result = userAge.dialogue;
    expect(result).toEqual("please enter a valid number for age");  
  });
});


