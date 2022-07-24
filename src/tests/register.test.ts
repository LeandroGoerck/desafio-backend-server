import sinon from 'sinon';
import chai from 'chai';
import { before, after } from 'mocha'
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UsersModel from '../database/models/UserModel';

import { MockUserRegister, MockUserRegisterReturn} from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /register', () => {

  describe('Testing /register endpoint', () => {
    describe('In case of success (if user does not exists)', () => {
      before(async () => {
        sinon.stub(UsersModel, "findOne").resolves(null);
        sinon.stub(UsersModel, "create").resolves(MockUserRegisterReturn as UsersModel);
      });
    
      after(()=>{
        (UsersModel.findOne as sinon.SinonStub).restore();
        (UsersModel.create as sinon.SinonStub).restore();
      });
    
      it('Aprove registration when information is correct', async () => {
        const response = await chai.request(app).post('/register')
        .send(MockUserRegister);
        expect(response.body).to.be.deep.equal(MockUserRegisterReturn);
      });

    });

    describe('In case of fail (if user already exists)', () => {
      before(async () => {
        sinon.stub(UsersModel, "findOne").resolves(MockUserRegister as UsersModel);
      });
    
      after(()=>{
        (UsersModel.findOne as sinon.SinonStub).restore();
      });

      it('Get error if user already exists', async () => {
        const response = await chai.request(app).post('/register')
        .send(MockUserRegister);
        expect(response.body).to.be.deep.equal({ message: "This user already exists!" });
      });

    });
  });
});
