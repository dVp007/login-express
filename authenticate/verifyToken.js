var jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    var token = req.headers['Authorization']
    if (!token){
        return res.status(500).send({err: true, errMessage: 'No Token Found'});
    }
    jwt.verify(token, {
        'secret': 'supersecret'
    }, function(err, decoded){
        if(err){
            return res.status(500).send({err: true, errMessage: 'Failed to authenticate token'})
        }
        req.userId = decoded.id;
        next();
    });
}