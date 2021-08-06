import Galactic from './../src/galactic.js';

describe('Galactic', () => {

  test('should create an instance of Galactic constructor with integer as age property', () => {
  let user_age = 6;
  let galactic = new Galactic(user_age);
  expect(user_age).toEqual(Number.isInteger(user_age));
  });
});