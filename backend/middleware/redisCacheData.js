const client = require('../Redis/client');

const redisCacheData = async (req, res, next) => {
    const key = req.originalUrl;
    console.log(key);
   const cachedData = await client.get(key);
   if (cachedData) {
       console.log("Fetching from Redis");
       return res.status(200).json({
           categories: JSON.parse(cachedData),
       });
   }else{
    console.log("Cached data not found");
    next();
   }
    
};

module.exports = redisCacheData;