import React, { useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Category 1', subcategories: ['Subcategory 1', 'Subcategory 2'] },
    { id: 2, name: 'Category 2', subcategories: ['Subcategory 3', 'Subcategory 4'] },
    
  ]);

  const addCategory = () => {
    const categoryName = window.prompt('Enter the name of the category:');
    if (categoryName) {
      const newCategory = {
        id: categories.length + 1,
        name: categoryName,
        subcategories: [],
      };
      setCategories([...categories, newCategory]);
    }
  };

  const deleteCategory = (categoryId) => {
    const updatedCategories = categories.filter((category) => category.id !== categoryId);
    setCategories(updatedCategories);
  };

  const addSubcategory = (categoryId) => {
    const subcategoryName = window.prompt('Enter the name of the subcategory:');
    if (subcategoryName) {
      const updatedCategories = categories.map((category) => {
        if (category.id === categoryId) {
          const newSubcategory = subcategoryName;
          return { ...category, subcategories: [...category.subcategories, newSubcategory] };
        }
        return category;
      });
      setCategories(updatedCategories);
    }
  };

  const deleteSubcategory = (categoryId, subcategoryIndex) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        const updatedSubcategories = category.subcategories.filter(
          (_, index) => index !== subcategoryIndex
        );
        return { ...category, subcategories: updatedSubcategories };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  return (
    <div className='mt-10 m-48 max-h-[80vh] overflow-y-scroll'>
      <h2 className='text-2xl font-semibold m-3'>Categories</h2>
      <table className='w-[100%]'>
        <thead>
          <tr>
            <th className='border-black border-2 p-[20px] text-xl align-middle '>Category</th>
            <th className='border-black border-2 p-[20px] text-xl align-middle '>Subcategories</th>
            <th className='border-black border-2 p-[20px] text-xl align-middle '>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{category.name}</td>
              <td>
                <ul className='border-black border-b-2'>
                  {category.subcategories.map((subcategory, index) => (
                    <li className='  p-[20px] text-lg align-middle' key={index}>
                      {subcategory}
                      <button className=' mx-6 border-red-600 border-2 bg-red-600 text-white p-2 rounded-md' onClick={() => deleteSubcategory(category.id, index)}>
                        Delete Subcategory
                      </button>
                    </li>
                  ))}
                  <li>
                    <button className=' m-6 border-green-700 border-2 bg-green-600 text-white p-2 rounded-md' onClick={() => addSubcategory(category.id)}>Add Subcategory</button>
                  </li>
                </ul>
              </td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>
                <button className=' border-red-600 border-2 bg-red-600 text-white p-2 rounded-md' onClick={() => deleteCategory(category.id)}>Delete Category</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className=' m-6 border-green-700 border-2 bg-green-600 text-white p-2 rounded-md' onClick={addCategory}>Add Category</button>
    </div>
  );
};

export default Categories;
