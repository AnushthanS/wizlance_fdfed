import React, { useEffect, useState } from "react";
import { Navbar, Hero, VerticalCard, Footer } from "./partials/index";
import axios from "axios";


const Landing = () => {

    const [categories , setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
              const response = await axios.get('/api/categories');
              if (Array.isArray(response.data.categories)) {
                setCategories(response.data.categories);
              } else {
                console.error(
                  "Fetched data is not an array:",
                  response.data.categories
                );
              }
            } catch (error) {
              console.error('Error fetching categories:', error.message);
            }
        }
        fetchCategories();
    }, []); 
    
    console.log(categories);

    return (
        <>
            <section className='relative'>
                <Navbar showlink={true}/>
                <Hero />
            </section>

            <section className="px-6 flex flex-col items-start mt-5 p-5">

                <h2 className="my-2 text-bold text-3xl ">Explore our trending professional services</h2>

                <div className="h-1 w-[305px] sm:w-[620px] bg-red-800 mb-8" />

                <div className="flex flex-wrap flex-col md:flex-row gap-4 w-full max-w-full justify-center /">

                {categories.map(category => (
                        <div key={category._id}
                        className="md:w-1/5 w-full shadow-2xl rounded-lg m-2 hover:cursor-pointer"
                        style={{ backgroundImage: `url(${category.imageUrl})`, backgroundSize: 'cover'  }}>
                            <div className="rounded-lg bg-[url(`${category.imageUrl}`)] bg-cover h-40">
                                <h3 className="text-2xl text-white font-bold p-6">{category.name}</h3>
                            </div>
                        </div>
                    ))}

                </div>

            </section>
            
            <VerticalCard />
            <Footer />
        </>
    );
}


export default Landing;
