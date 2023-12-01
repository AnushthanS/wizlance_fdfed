import React, { useEffect, useState } from "react";
import { Navbar, Hero, VerticalCard, Footer } from "./partials/index";


const Landing = () => {

    // fetch links or add to constants and then use a map
    // iterator instead of a for loop and fetch links from constants
    // to make this shorter and look better
   

    const [categories , setCategories] = useState([]);


    useEffect(() => {
     const fetchCategories = () =>{ 
          fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.categories)) {
                    setCategories(data.categories);
                } else {
                    console.error('Fetched data is not an array:', data.categories);
                }
            })
            .catch(error => console.error('Error fetching categories:', error));

        };

        fetchCategories();

    }, []);
    
    


    console.log(categories);

    return (
        <>
            <section className='relative'>
                <Navbar showlink={true}/>
                <Hero />
            </section>

            <section className="px-6 flex flex-col items-start my-4">

                <h2 className="my-6 text-bold text-3xl ">Explore our trending professional services</h2>

                <div className="h-1 w-[305px] sm:w-[620px] bg-red-800 mb-8" />

                <div className="flex flex-wrap flex-col md:flex-row gap-4 w-full">

                {categories.map(category => (
                        <div key={category._id}
                        className="md:w-1/4 w-full shadow-lg rounded-lg m-2 md:mx-auto hover:cursor-pointer"
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