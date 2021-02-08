const jwt = require('jsonwebtoken');

function createToken() {
    const payload = {
        id: 'company.id'
    };
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '15m' });
}

module.exports = {

    login: (request, response) => {
        const token = createToken();
        response.set('Authorization', token);
        response.status(204).send();
    }

};