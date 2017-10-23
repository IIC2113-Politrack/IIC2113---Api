var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server= 'http://ec2-18-221-146-123.us-east-2.compute.amazonaws.com'
var got = require('got');

chai.use(chaiHttp);

describe('Politicians', function() {

  it('should list ALL politicians on api/politicians GET', function(done) {
    chai.request(server)
      .get('/api/politicians')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('firstname');
        res.body[0].should.have.property('lastname');
        res.body[0].should.have.property('party');
        res.body[0].should.have.property('slogan');
        res.body[0].should.have.property('charge');
        res.body[0].should.have.property('biography');
        done();
    });
  });

  it('should list a SINGLE politician on api/politicians/<id> GET', function(done) {
    var random_id;
    got(server+'/api/politicians', { json: true }).then(response => {
      let number_politicians = response.body.length
      let randnumber = Math.floor(Math.random() * (number_politicians + 1));
      random_id = response.body[randnumber]._id
      return random_id

    }).then(random_id => {
    chai.request(server)
      .get('/api/politicians/'+random_id)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('_id');
        res.body.should.have.property('firstname');
        res.body.should.have.property('lastname');
        res.body.should.have.property('party');
        res.body.should.have.property('slogan');
        res.body.should.have.property('charge');
        res.body.should.have.property('biography');
        res.body._id.should.equal(random_id);
        done();
      });
    });
  });
});
