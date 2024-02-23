// const User = require("../models/user");
// const Category = require("../models/category");
// const Gig = require("../models/gig");
// const session = require("express-session");

// exports.addGigs = (req, res) => {
//     console.log(req.body);
    
//     const email = req.body.email;
//     const gig = req.body.gig;
//     const category = req.body.category;
//     const subCategory = req.body.subCategory;
//     const description = req.body.description; 
//     const price = req.body.price;
//     const imageUrl = req.file.path;

//     const gigdata = new Gig({
//       name: gig,
//       price: price,
//       freelancerEmail: email,
//       imageUrl,
//       description: description,
//       category: category,
//       subCategory: subCategory,
//     });
  
//     gigdata.save();
//     freelancer = true;
    

//     return res.status(200).json({
//         message: "Gig added successfully",
//     });
//   // const gig = req.body.GigName;
//   // const category = req.body.Category;
//   // const subCategory = req.body.subCategory;
//   // const description = req.body.description;
//   // const price = req.body.price;
//   // const img = req.file;
//   // const imageUrl = img.path;

//   // console.log(gig);
//   // console.log(category);
//   // console.log(subCategory);
//   // console.log(description);
//   // console.log(price);
//   // console.log(imageUrl);

//   // console.log(req.session.user.email);

//   // const gigdata = new Gig({
//   //   name: gig,
//   //   price: price,
//   //   freelancerEmail: req.session.user.email,
//   //   imageUrl,
//   //   description: description,
//   //   category: category,
//   //   subCategory: subCategory,
//   // });

//   // gigdata.save();
//   // freelancer = true;

//   // return res.redirect("/dashboard");
// };



const User = require("../models/user");
const Category = require("../models/category");
const Gig = require("../models/gig");
const SubCategory = require("../models/subcategory"); // Import SubCategory model

exports.addGigs = async (req, res) => {
  try {
    const { email, gig, category, subCategory, description, price } = req.body;
    const imageUrl = req.file.path;

      // Find the user's id based on their email
      const user = await User.findOne({ email });
      console.log(user, 'user') ;
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

    // Find the SubCategory ID based on the SubCategory name
   // Find the SubCategory document by its name
   const subCategoryObj = await SubCategory.findOne({ name: subCategory });

   if (!subCategory) {
     return res.status(404).json({ message: "SubCategory not found" });
   }
    
    const gigData = new Gig({
      name: gig,
      price: price,
      freelancer: user._id, // Assign the User ID
      imageUrl,
      description: description,
      subCategoryId: subCategoryObj._id, // Assign the SubCategory ID
    });

    await gigData.save();

    return res.status(200).json({
      message: "Gig added successfully",
    });
  } catch (error) {
    console.error("Error adding gig:", error);
    return res.status(500).json({
      message: "An error occurred while adding the gig",
    });
  }
};

