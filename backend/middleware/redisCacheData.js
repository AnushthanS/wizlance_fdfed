const client = require("../Redis/client");

const redisCacheData = async (req, res, next) => {
  const key = req.originalUrl;
  console.log(key);
  const cachedData = await client.get(key);

  if (cachedData) {
    console.log(key, "Fetching from Redis");

    const responseMap = {
      "/api/subcategory": { subCategory: JSON.parse(cachedData) },
      "/api/category": { category: JSON.parse(cachedData) },
      "/api/subcategories": { subCategories: JSON.parse(cachedData) },
      "/api/gigs": { gigs: JSON.parse(cachedData) },
      "/api/gig/details": { gig: JSON.parse(cachedData) },
      "/api/categories": { categories: JSON.parse(cachedData) },
      "/api/admin-categories": { categories: JSON.parse(cachedData) },
      "/api/admin-subcategories": { subcategories: JSON.parse(cachedData) },
    };

    const response = responseMap[key];
    if (response) {
      return res.status(200).json(response);
    }
  }
  else {
    console.log("Cached data not found");
    next();
    console.log("Cached data not found");
    next();
  }
};

module.exports = redisCacheData;
