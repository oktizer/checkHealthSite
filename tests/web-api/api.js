
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const should = chai.should();
// chai.use(chaiHttp);
//
// describe('API Endpoints ', function () {
//     describe('POST /', function () {
//         it('should return list of url status and new post', function (done) {
//             chai.request(global.express_server).post('/check/tracksite').end(function (err, response) {
//                 if (err) {
//                     done(err);
//                 } else {
//                     response.should.have.code(200);
//                     response.should.have.status('OK');
//                     response.should.be.an('object');
//                     done();
//                 }
//             });
//         });
//     });
//
//     after('close application server', function (done) {
//         global.express_server.close();
//         done();
//     });
// });
