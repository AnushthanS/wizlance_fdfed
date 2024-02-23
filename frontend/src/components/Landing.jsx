import React, { useEffect, useState } from "react";
import { Navbar, Hero, VerticalCard, Footer } from "./partials/index";
import axios from "axios";
import { Preloader } from "./animations/index";

const Landing = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

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
            } finally {
                setLoading(false);
            }
        }
        fetchCategories();
    }, []); 
    
    if (loading) {
        return <Preloader />; //Preloader for content images
    }

    return (
        <>
            <section className="relative">
                <Navbar isLanding={true} />
                <Hero />
            </section>

            <section className="px-6 flex flex-col items-start mt-5 p-5">
                <h2 className="my-2 py-4 text-bold text-3xl sm:text-5xl md:text-6xl border-b-2 border-red-800 ">
                    Explore our trending professional services
                </h2>

                <div className="flex flex-wrap flex-col md:flex-row gap-4 mx-auto my-9 max-w-full justify-center md:justify-normal">
                    {categories.map((category) => (
                        <div
                            key={category._id}
                            className="md:w-[22%] w-full shadow-2xl rounded-lg hover:cursor-pointer"
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
                    ))}
                </div>
            </section>

            <VerticalCard />
            <Footer />
        </>
    );
}

export default Landing;
