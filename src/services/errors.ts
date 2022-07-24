import CustomError from './CustomError';

const jwtCheckError = new CustomError('Jwt check error', 400);
const emptyAuthorization = new CustomError('Empty Authorization', 401);
const thisIdDoesNotExist = new CustomError('Wrong Id!', 404);
const thisUserDoesNotExist = new CustomError('This user does not exist!', 403);
const allFieldsMustBeFilled = new CustomError('All fields must be filled', 400);
const thisUserAlreadyExists = new CustomError('This user already exists!', 401);
const incorrectUsernameOrPassword = new CustomError('Incorrect username or password', 401);
const thisResourceIsOnlyForAdmins = new CustomError('This resource is only for Admins!', 403);

export default {
  jwtCheckError,
  emptyAuthorization,
  thisIdDoesNotExist,
  thisUserDoesNotExist,
  allFieldsMustBeFilled,
  thisUserAlreadyExists,
  incorrectUsernameOrPassword,
  thisResourceIsOnlyForAdmins,
};
