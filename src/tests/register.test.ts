import sinon from 'sinon';
import chai from 'chai';
import { before, after } from 'mocha'
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UsersModel from '../database/models/UserModel';

import { MockBadRequest1, MockBadRequest2, MockBadRequest3, MockBadRequest4, MockUserRegister, MockUserRegisterReturn} from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /register', () => {

  describe('Testing /register endpoint', () => {
    describe('In case of success', () => {
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

    describe('In case of fail', () => {
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
        expect(response.status).to.be.equal(401);
      });
      
      it('Get error when request key name is wrong', async () => {
        const response = await chai.request(app).post('/register')
        .send(MockBadRequest1);
        expect(response.body).to.be.deep.equal({ message: "Bad Request" });
        expect(response.status).to.be.equal(403);
      });
      
      it('Get error when request key mail is wrong', async () => {
        const response = await chai.request(app).post('/register')
        .send(MockBadRequest2);
        expect(response.body).to.be.deep.equal({ message: "Bad Request" });
        expect(response.status).to.be.equal(403);
      });
      
      it('Get error when request key role is wrong', async () => {
        const response = await chai.request(app).post('/register')
        .send(MockBadRequest3);
        expect(response.body).to.be.deep.equal({ message: "Bad Request" });
        expect(response.status).to.be.equal(403);
      });
      
      it('Get error when request key name is not present', async () => {
        const response = await chai.request(app).post('/register')
        .send(MockBadRequest4);
        expect(response.body).to.be.deep.equal({ message: "Bad Request" });
        expect(response.status).to.be.equal(403);
      });
      
    });
  });
});

