var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server= 'https://politrap-api.herokuapp.com'
var got = require('got');

chai.use(chaiHttp);

describe('Evidences', function() {
  it('should add a new evidence to database when requested', function(done) {
     random_id = '5a03876885614300126960d0';
     chai.request(server)
     .get('/api/commitments/'+random_id+'/evidences/')
     .end(function(err, res){
       res.should.have.status(200);
       //res.body.should.be.json;
       res.body[0].should.be.a('object');
       res.body[0].should.have.property('data');
       res.body[0].should.have.property('description');
       done();
    });
 });

 it('should upload the evidences in the correct format', function(done) {
   random_id = '5a03876885614300126960d0';
   chai.request(server)
   .get('/api/commitments/'+random_id+'/evidences')
   .end(function(err, res){
     res.should.have.status(200);
     //res.body.should.be.json;
     res.body[0].should.be.a('object');
     res.body[0].should.have.property('data');
     res.body[0].data.should.match(/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/)
     done();
     });
   });
 });
