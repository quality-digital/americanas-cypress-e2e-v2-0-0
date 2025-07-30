const path = require('path');
const cpfs = require(path.resolve(__dirname, '../../fixtures/cpfs.json'));
const { faker } = require('@faker-js/faker');

const fakeUser = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  cpf: cpfs.validCpfs[Math.floor(Math.random() * cpfs.validCpfs.length)]
};

