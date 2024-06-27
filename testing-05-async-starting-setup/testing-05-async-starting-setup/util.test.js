// jest.mock("./http")//to mock the http file


const { loadTitle } = require('./util');

test('should print an uppercase text', () => {
  loadTitle().then((title) => {
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
});
