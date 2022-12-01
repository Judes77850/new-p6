const rateLimiter = require("express-rate-limit");

const limiter = rateLimiter({
    max: 4,
    windowMS: 10000,
    message: "Nombre maximum de requêtes, veuillez patienter",
    });

    
module.exports = limiter
