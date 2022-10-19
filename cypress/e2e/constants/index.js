const login = Cypress.env('userLogin');
const password = Cypress.env('userPassword');

const existUser = {
  login,
  password,
};

module.exports = { existUser };
