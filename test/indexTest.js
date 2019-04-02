const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

describe('Index Routes', function () {
    describe('/', function () {
        // GET - List all colors
        it('should return home page', function () {
            return chai.request(app)
                .get('/')
                .then(function (res) {
                    expect(res).to.have.status(200);
                });
        });
    });

    describe('/about', function () {
        // GET - List all colors
        it('should return about page', function () {
            return chai.request(app)
                .get('/about')
                .then(function (res) {
                    expect(res).to.have.status(200);
                });
        });
    });

    describe('/contact', function () {
        // GET - List all colors
        it('should return contact page', function () {
            return chai.request(app)
                .get('/contact')
                .then(function (res) {
                    expect(res).to.have.status(200);
                });
        });
    });

    describe('/idonotexist', function () {
        it('should return 404', function () {
            return chai.request(app)
                .get('/idonotexist')
                .then(function (res) {
                    expect(res).to.have.status(404);
                });
        });
    });
})
;

