const cloudinary = require("cloudinary").v2;
const User = require("../models/user");
const Gig = require("../models/gig");
const SubCategory = require("../models/subcategory");
const Skill = require("../models/skill");

// cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});


// addGig Updated
exports.addGigs = async (req, res) => {
  try {
    const { email, gig, category, subCategory, description, price ,image } = req.body;
    const imageUrl = req.file.path;
    console.log(req.file);
    console.log(subCategory);

    // cloudinary setup
    
    let date = new Date();
    let dateStr = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    
    const uploadedResponse = await cloudinary.uploader.upload(imageUrl, {
      folder: 'wizlance-gig',
      public_id: `${dateStr}--${gig}--${subCategory}`
    });

    const cloudinaryImageUrl = uploadedResponse.secure_url;

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
      imageUrl: cloudinaryImageUrl,
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

exports.addSkill = async (req, res) => {
    const name = req.body.name;
    const skill = new Skill({
        name,
    });

    try {
        await skill.save();
        res.status(201).json({ skill });
    } catch (error) {
        console.error("Error adding skill:", error);
        return res.status(500).json({
            message: "An error occurred while adding the gig",
        });
    }
};

exports.getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json({ skills });
    } catch (error) {
        console.error("Error getting skills:", error);
        return res.status(500).json({
            message: "An error occurred while getting the skills",
        });
    }
};

exports.becomeFreelancer = async (req, res) => {
    const userId = req.body.userId;
    const skills = req.body.skills.map((skill) => ({
        skill: skill.value,
        name: skill.label,
    }));

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.isFreelancer = true;
        user.freelancerSkills = skills;

        await user.save();

        return res.status(200).json(user);
    } catch (error) {
        console.error("Error converting user:", error);
        return res.status(500).json({
            message: "An error occurred while making the user a freelancer",
        });
    }
};
