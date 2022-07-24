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

export {
  MockUserRegister,
  MockUserRegisterReturn,
  MockBadRequest1,
  MockBadRequest2,
  MockBadRequest3,
  MockBadRequest4,
}