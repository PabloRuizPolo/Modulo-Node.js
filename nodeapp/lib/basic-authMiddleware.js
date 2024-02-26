const basicAuth = require('basic-auth')

module.exports = (req, res, next) => {
    const user = basicAuth(req);
    if (!user || user.name != 'admin' || user.pass !== '123') {
        //no esta autorizado
        res.set('WWW-Authenticate', 'Basic reale=Authozation required');
        res.sendStatus(401);
        return; 
    }
    next();
}