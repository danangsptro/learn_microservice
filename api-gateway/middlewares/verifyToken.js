const jwt = require('jsonwebtoken');
const { JWT_sECRET } = process.env;

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;
    jwt.verify(token, JWT_sECRET, function (err, decoded) {
        if (err) {
            return res.status(403).json({ message: err.message });
        }

        req.user = decoded;
        return next();
    })
}