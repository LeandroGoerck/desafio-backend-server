import bcryptjs from 'bcryptjs';

const getHash = (password: string) => {
  const salt = bcryptjs.genSaltSync(10);
  const hash = bcryptjs.hashSync(password, salt);
  return hash;
}

export default getHash;