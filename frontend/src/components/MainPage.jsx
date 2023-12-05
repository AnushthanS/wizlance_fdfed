import { Navbar, MainCarousel, Footer } from "./partials/index";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainPage = () => {
  const user = useSelector((state) => state?.user?.user);
  const userName = user.firstName; //fetch user's name here

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    console.log("User = ", user);
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        if (Array.isArray(response.data.categories)) {
          setCategories(response.data.categories);
        } else {
          console.error("Fetched data is not an array:", data.categories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar showlink={false} />

      <div className="p-6 mb-12 max-h-fit min-h-[10vh]">
        <TypeAnimation
          repeat={Infinity}
          sequence={[`Welcome, ${userName}`, 1000, "", 500]}
          speed={50}
          wrapper="span"
          className="font-extralight text-4xl sm:text-8xl w-full"
        />

        <h3 className="mt-16 text-2xl sm:text-4xl font-thin">
          Check out these trending categories
        </h3>
      </div>

      <MainCarousel />

      <div className="flex flex-wrap flex-col md:flex-row gap-4 w-full max-w-full justify-center mt-12 px-6">
        <span className="w-full font-thin text-4xl">
          Explore offered categories
        </span>
        <div className="w-full">
          <div className="bg-red-800 h-1 w-[432px] mb-[20px]"></div>
        </div>
        {categories.map((category) => (
          <Link
            to={`/subcategories/${category._id}`}
            key={category._id}
            className="md:w-1/5 w-full shadow-2xl rounded-lg m-2"
          >
            <div
              style={{
                backgroundImage: `url(${category.imageUrl})`,
                backgroundSize: "cover",
              }}
            >
              <div className="rounded-lg bg-[url(`${category.imageUrl}`)] bg-cover h-40">
                <h3 className="text-2xl text-white font-bold p-6">
                  {category.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default MainPage;