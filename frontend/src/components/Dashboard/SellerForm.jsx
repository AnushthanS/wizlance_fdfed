import { useState } from "react";
import signup from "../../assets/images/signup copy.svg";
import { Footer, Navbar } from "../partials";
import "../../assets/seller.css";

const SellerForm = () => {
  const [imageSelected, setImageSelected] = useState(false);
  const [file, setFile] = useState();

  const handleImageChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type.startsWith("image/")) {
      setImageSelected(true);
      setFile(URL.createObjectURL(uploadedFile));
    } else {
      setImageSelected(false);
    }
  };

  const handleBothChanges = (event) => {
    handleImageChange(event);
    handleChange(event);
  };

  // Your handleChange function remains the same as before
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [subCategories, setSubCategories] = useState([]);

  const updateSecondaryDropdown = (event) => {
    const selectedValue = event.target.value;
    let options = [];

    if (selectedValue === "Graphic Design") {
      options = ["Logo Design", "UI/UX", "Illustrations", "Web Design"];
    } else if (selectedValue === "Music Audio") {
      options = [
        "Voice Over",
        "Session Musician",
        "Background Music",
        "Audio Engineering",
      ];
    } else if (selectedValue === "Programming Tech") {
      options = [
        "App Development",
        "Game Development",
        "IOT Development",
        "Cloud Computing",
      ];
    } else if (selectedValue === "Photography") {
      options = [
        "Product Photography",
        "Food Photography",
        "Fashion Photography",
        "Wildlife Photography",
      ];
    } else if (selectedValue === "Animation") {
      options = [
        "Character Animation",
        "3D Animation",
        "2D Animation",
        "Anime",
      ];
    } else if (selectedValue === "Writing Translation") {
      options = [
        "Content Writing",
        "Technical Writing",
        "Translation",
        "Subtitling",
      ];
    } else {
      // No option selected
      options = ["Select Sub-Category"];
    }
    setSubCategories(options);
  };

  const [formData, setFormData] = useState({
    gig: "",
    category: "",
    subCategory: "",
    description: "",
    price: "",
    image: null, // Assuming you want to store the file object
  });
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    let newValue = value;

    if (type === "file") {
      // Extract the file name or URL and update the formData
      newValue = files[0] ? files[0].name : ""; // For example, extracting the file name
    }
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar showlink={false} />

      <main>
        <div className="container mx-auto mt-4 p-1 flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="mx-auto p-5">
            <h1 className="text-3xl text-[var(--color5)] font-bold md:text-5xl">
              Freelancing is the future.
            </h1>
            <p className="font- my-3">Join the community</p>
            <hr />
            <br />
            <img src={signup} className="h-60" alt="" />
          </div>
          <section className="max-w-lg h-auto  p-6 mx-auto bg-indigo-600 rounded-md shadow-md my-10 dark:bg-gray-800 ">
            <form method="post" onSubmit={handleSubmit}>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="username"
                >
                  Gig
                </label>
                <input
                  id="username"
                  type="text"
                  className="block w-[100%] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  name="gig"
                  value={formData.gig}
                  placeholder="Enter gig name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-4 mt-4 ">
                <div className="flex flex-row gap-3 justify-center w-full">
                  <div className="w-[50%]">
                    <label
                      className="text-white text-base dark:text-gray-200"
                      htmlFor="main-dropdown"
                    >
                      Select Category
                    </label>
                    <select
                      id="main-dropdown"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      name="category"
                      onChange={(e) => {
                        updateSecondaryDropdown(e);
                        handleInputChange(e);
                      }}
                    >
                      <option value="">Select an option</option>
                      <option value="Graphic Design">Graphic & Design</option>
                      <option value="Music Audio">Music & Audio</option>
                      <option value="Programming Tech">
                        Programming & Tech
                      </option>
                      <option value="Photography">Photography</option>
                      <option value="Animation">Animation</option>
                      <option value="Writing Translation">
                        Writing & Translation
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="text-white text-base  dark:text-gray-200"
                      htmlFor="secondary-dropdown"
                    >
                      Select Sub-Category
                    </label>
                    <select
                      id="secondary-dropdown"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      name="subCategory"
                      onChange={handleInputChange}
                    >
                      <option value="">Select an Option</option>
                      {subCategories.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-white text-lg dark:text-gray-200">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="textarea"
                    type="textarea"
                    className="block mt-2 w-full text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    rows="3"
                    placeholder="Enter description"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="relative">
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <span className="top-9 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white font-bold">
                    $
                  </span>
                  <input
                    name="price"
                    id="price"
                    min={0}
                    placeholder="Enter price"
                    type="number"
                    className="block w-full pl-12 pr-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="image"
                    className={
                      imageSelected ? "text-green-400" : "text-white text-base"
                    }
                  >
                    {imageSelected ? (
                      "Image Selected!"
                    ) : (
                      <span>
                        Upload image{" "}
                        <span className="text-blue-500 underline">here</span>
                      </span>
                    )}
                  </label>
                  <input
                    type="file"
                    className="text-black text-base hidden"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={(e) => {
                      handleBothChanges(e);
                      handleInputChange(e);
                    }}
                  />
                  {file && (
                    <img
                      src={file}
                      alt=""
                      style={{ height: "80px", width: "80px" }}
                    />
                  )}
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-center mt-6">
                  <button
                    className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SellerForm;
