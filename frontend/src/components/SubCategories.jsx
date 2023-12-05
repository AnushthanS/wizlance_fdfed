import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SubCategories = () => {
  const categoryId = useLocation().pathname.replace("/subcategories/", "");
  console.log("CID :", categoryId);

  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    axios
      .post("/api/subcategories", { categoryId })
      .then((response) => {
        console.log(response.data);
        setSubcategories(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {subcategories.length > 0 &&
        subcategories.map((subcategory) => (
          <div key={subcategory._id}>
            <p>{subcategory.name}</p>
            <p>{subcategory.imageUrl}</p>
          </div>
        ))}
    </div>
  );
};

export default SubCategories;
