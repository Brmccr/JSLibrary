module.exports = (req, res, next) => {
    res.header('access-control-allow-origin', '*') // tells the browser to allow code from any origin -- With the '*'
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS') // allows our methods that will be used
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    // Every request makes 2 requests - preflight-1st declares which http headers can be used - Options also come into play
    
    next();
}