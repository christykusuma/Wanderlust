module.exports = (req, res, next) => {
    if (!req.res) {
        return res.status(401).send({ error: 'You must log in' })
    }
    next();
};

