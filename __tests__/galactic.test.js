import Galactic from './../src/galactic.js';

describe('Galactic', () => {

  test('should return a string asking for a number, given any other type of input is entered', () => {
    const user_age = "not a num";
    const userAge = new Galactic(user_age);
    userAge.isNumber();
    const result = userAge.dialogue;
    expect(result).toEqual("please enter a valid number for age");  
  });

  test('should return user age in Mercury years', () => {
    const userAge = new Galactic(28)
    const result = userAge.onMercury()
    expect(result).toEqual("116")
  });

  test('should return user age in Venus years', () => {
    const userAge = new Galactic(28)
    expect(userAge.onVenus()).toEqual("45")
  })

  test('should return user age in Mars years', () => {
    const userAge = new Galactic(28)
    expect(userAge.onMars()).toEqual("14")
  })
});


