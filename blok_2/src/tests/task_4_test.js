const request = require('supertest');
const sinon = require('sinon');
const app = require('../task_4.js');

// Набор тестов для middleware requestLogger
describe('requestLogger middleware', () => {
    it('should log the method, URL and duration of a request', (done) => {
        const consoleSpy = sinon.spy(console, 'log');
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                // Если есть ошибка, завершаем тест с ошибкой
                if (err) return done(err);
                sinon.assert.calledWithMatch(consoleSpy, /Method: GET, URL: \/, Duration: \d + ms/);
                consoleSpy.restore();
                done();
            });
    });
});
