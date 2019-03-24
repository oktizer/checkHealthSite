
let mongoose = require('mongoose');

describe('Database connectivity', function () {
    before('load environments', function () {
        require('dotenv').load();
    });

    describe('Mongoose schema', function () {
        it('should connect to mongoose and mongodb server', function (done) {
            mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, done);
        });
    });
});
