var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server= 'http://ec2-18-221-146-123.us-east-2.compute.amazonaws.com'
var got = require('got');

chai.use(chaiHttp);

describe('Evidences', function() {



  it('should add a new evidence to database when requested', function(done) {
    random_id =  '59ed890a92bd8210dabf8a92'
    chai.request(server)
      .get('/api/evidences/'+random_id)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.should.have.property('description');
        done();
    });
  });

  it('should upload the evidences in the correct format', function(done) {
    random_id =  '59ed890a92bd8210dabf8a92'
    chai.request(server)
      .get('/api/evidences/'+random_id)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.match(/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/)
        done();
    });
  });

});
