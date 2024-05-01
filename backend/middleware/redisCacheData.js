const client = require("../Redis/client");

const redisCacheData = async (req, res, next) => {
  const key = req.originalUrl;
  console.log(key);
  const cachedData = await client.get(key);
  if (cachedData) {
    console.log(key, "Fetching from Redis");

    if (key === "/api/subcategory") {
      return res.status(200).json({
        subCategory: JSON.parse(cachedData),
      });
    }
    if (key === "/api/category") {
      return res.status(200).json({
        category: JSON.parse(cachedData),
      });
    }

    if (key === "/api/subcategories") {
      return res.status(200).json({
        subCategories: JSON.parse(cachedData),
      });
    }

    if (key === "/api/gigs") {
      return res.status(200).json({
        gigs: JSON.parse(cachedData),
      });
    }

    if (key === "/api/gig/details") {
      return res.status(200).json({
        gig: JSON.parse(cachedData),
      });
    }

    if (key === "/api/categories") {
      return res.status(200).json({
        categories: JSON.parse(cachedData),
      });
    }

    if (key === "/api/admin-categories") {
      return res.status(200).json({
        categories: JSON.parse(cachedData),
      });
    }

    if (key === "/api/admin-subcategories") {
      return res.status(200).json({
        subcategories: JSON.parse(cachedData),
      });
    }
  } else {
    console.log("Cached data not found");
    next();
  }
};

module.exports = redisCacheData;
