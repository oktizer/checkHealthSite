
const chai = require('chai');
let crudService;
let should = chai.should();

describe('Service: CRUDService', function () {
    before('load helpers', function (done) {
        crudService = global.services.CRUDService;
        done();
    });

    describe('Create New Data', function () {
        it('should response new object after save data', function (done) {
            crudService.createNewCustom('site', {url: 'https://www.google.com', status: true}, function (err, result) {
                should.not.exist(err);
                should.exist(result);
                result.should.be.an('object');
                result.url.should.be.a('string');
                result.url.should.equal('https://www.google.com');
                result.status.should.be.a('boolean');
                result.status.should.equal(true);
                done();
            });
        });
    });

    // describe('Get all data', function () {
    //     it('should response all list data', function (done) {
    //         crudService.getAll('site', null, null, function (err, result) {
    //             should.not.exist(err);
    //             should.exist(result);
    //             result.should.be.an('array');
    //             done();
    //         });
    //     });
    // });

    // describe('Update existing data', function () {
    //     it('should response new value in field which update before', function (done) {
    //         crudService.updateCustom('site', {url: 'https://www.google.com'}, {$set: {status: false}}, function (err, result) {
    //             should.not.exist(err);
    //             should.exist(result);
    //             result.should.be.an('object');
    //             result.url.should.be.a('string');
    //             result.url.should.equal('https://www.google.com');
    //             result.status.should.be.a('boolean');
    //             result.status.should.equal(false);
    //             done();
    //         });
    //     });
    // });

    // describe('Delete existing data', function () {
    //     it('should response object has been deleted', function (done) {
    //         crudService.findOneCustomAndDelete('site', {_id: '5c96fc551da0a5184734c34c'}, function (err, result) {
    //             should.not.exist(err);
    //             should.exist(result);
    //             result.should.be.an('object');
    //             result.ok.should.be.a('integer');
    //             result.ok.should.equal(1);
    //             done();
    //         });
    //     });
    // });
});
