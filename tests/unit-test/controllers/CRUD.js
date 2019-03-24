//
// const chai = require('chai');
// let CRUDController;
// let should = chai.should();
//
// describe('Controller: CRUDController', function () {
//     before('load helpers', function (done) {
//         CRUDController = global.controllers.CRUDController;
//         done();
//     });
//
//     describe('Controller for create data', function () {
//         it('should return result object and message', function (done) {
//             CRUDController.crudCheckController({schema: 'site', value: {url: 'https://www.detik.com', status: true}, method: 'POST'}, function (err, result) {
//                 should.not.exist(err);
//                 should.exist(result);
//                 result.should.be.an('object');
//                 result.message.should.be.a('string');
//                 result.message.should.equal('Welcome!');
//                 done();
//             });
//         });
//     });
//
//     describe('Controller for get data', function () {
//         it('should return result object and message', function (done) {
//             CRUDController.crudCheckController({schema: 'site', value: null, method: 'GET'}, function (err, result) {
//                 should.not.exist(err);
//                 should.exist(result);
//                 result.should.be.an('object');
//                 result.message.should.be.a('string');
//                 result.message.should.equal('Welcome!');
//                 done();
//             });
//         });
//     });
//
//     describe('Controller for delete data', function () {
//         it('should return result object and message', function (done) {
//             CRUDController.crudCheckController({schema: 'site', value: {_id: '5c96f1a0f99c9117b374c5a6'}, method: 'POST'}, function (err, result) {
//                 should.not.exist(err);
//                 should.exist(result);
//                 result.should.be.an('object');
//                 result.message.should.be.a('string');
//                 result.message.should.equal('Welcome!');
//                 done();
//             });
//         });
//     });
//
//     describe('Controller for update site status', function () {
//         it('should return result object and message', function (done) {
//             CRUDController.crudCheckController([
//                 {
//                     '_id': '5c9651c41a5ca216897c7029',
//                     'url': 'https://yahoo.com',
//                     'status': false,
//                     'createdAt': '2019-03-23T15:33:24.929Z',
//                     'updatedAt': '2019-03-24T07:15:27.280Z',
//                     '__v': 0
//                 },
//                 {
//                     '_id': '5c96521a1a5ca216897c702a',
//                     'url': 'https://newrelic.com',
//                     'status': false,
//                     'createdAt': '2019-03-23T15:35:00.644Z',
//                     'updatedAt': '2019-03-24T07:15:27.281Z',
//                     '__v': 0
//                 }], function (err, result) {
//                 should.not.exist(err);
//                 should.exist(result);
//                 result.should.be.an('object');
//                 done();
//             });
//         });
//     });
// });
