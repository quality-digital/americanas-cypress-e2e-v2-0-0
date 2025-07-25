import { faker } from '@faker-js/faker'

export const fakeUser = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  cpf: faker.number.int({ min: 10000000000, max: 99999999999 }).toString()
}
