import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { Footer, Navbar } from "./partials";

const SubCategories = () => {
  const categoryId = useLocation().pathname.replace("/subcategories/", "");
  console.log("CID :", categoryId);

  const [subcategories, setSubcategories] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios
      .post("/api/subcategories", { categoryId })
      .then((response) => {
        console.log(response.data.subCategories);
        setSubcategories(response.data.subCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .post("/api/category", { categoryId })
      .then((response) => {
        console.log(response.data);
        setCategory(response.data.category)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div
          className={`bg-[url("")] bg-cover`}
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        >
          <div className="text-white font-bold items-center flex justify-center p-40 text-4xl h-40 pb-14">
            <h1>{category.name}</h1>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div>
          <div className="sub-categories flex flex-wrap justify-evenly font-light p-4">
            {subcategories.length > 0 && subcategories.map(subcategory => (
              <div className="sc xl:w-1/5 md:w-1/2 p-4" key={subcategory.name}>
                <Link
                  to={`/gigs/${subcategory._id}`}
                  className="md:w-1/5 w-full shadow-2xl rounded-lg m-2"
                >
                  <img className="h-40 rounded-lg w-full object-cover object-center border-2" src={subcategory.imageUrl} /><br />
                  <h1 className="text-2xl font-bold">{subcategory.name}</h1>
                  <br />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default SubCategories;