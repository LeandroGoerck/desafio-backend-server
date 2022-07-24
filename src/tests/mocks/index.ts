const MockUserRegister = {
  name: "Franciela",
  email: "fran@gmail.com",
  password: "fran_admin"
};

const MockUserRegisterReturn = {
  id: 4,
  name: "Franciela",
  email: "fran@gmail.com",
  role: "USER"
}

const MockBadRequest1 = {
  nome: "Franciela",
  email: "fran@gmail.com",
  role: "USER"
}

const MockBadRequest2 = {
  name: "Franciela",
  mail: "fran@gmail.com",
  role: "USER"
}

const MockBadRequest3 = {
  name: "Franciela",
  mail: "fran@gmail.com",
  rol: "USER"
}

const MockBadRequest4 = {
  mail: "fran@gmail.com",
  role: "USER"
}



const MockUserlogin = {
  username: "Leandro",
  password: "lg_admin"
}

const MockUserLoginReturn2 = {
  id: 4,
  name: "Leandro",
}

const MockLoginReturn = {
  user: {
      id: 6,
      username: "Leandro"
  },
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxlYW5kcm8iLCJwYXNzd29yZCI6ImxnX2FkbWluIiwiaWF0IjoxNjU4Njg0NDQ1LCJleHAiOjE2NTg3NzA4NDV9.6VhS4OfAJ-4rWcXJEJORz81DlCA7fFZP00N7YE7l98I"
}

const MockToken = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxlYW5kcm8iLCJwYXNzd29yZCI6ImxnX2FkbWluIiwiaWF0IjoxNjU4Njg0NDQ1LCJleHAiOjE2NTg3NzA4NDV9.6VhS4OfAJ-4rWcXJEJORz81DlCA7fFZP00N7YE7l98I"
}


export {
  MockUserRegister,
  MockUserRegisterReturn,
  MockBadRequest1,
  MockBadRequest2,
  MockBadRequest3,
  MockBadRequest4,
  MockUserlogin,
  MockLoginReturn,
  MockToken,
  MockUserLoginReturn2,
}