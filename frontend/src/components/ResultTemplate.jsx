// import { subCategories, gigs } from "../constants";
import { useState, useEffect } from 'react';
import { Navbar, Footer } from './partials'
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const ResultTemplate = () => {
    const subCategoryId = useLocation().pathname.replace("/gigs/", "");
    console.log("sID :", subCategoryId);

    const loggedIn = true;
    const [gigs, setGigs] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    useEffect(() => {
        axios.post('/api/gigs', {subCategoryId}).then(
            (res) => {
                console.log(res.data)
                setGigs(res.data.gigs)
            }
        ).catch(
            err => console.log(err)
        );
    }, []);

    useEffect(() => {
        axios.post('/api/subcategory', {subCategoryId}).then(
            (res) => {
                console.log(res.data)
                setSubCategory(res.data.subCategory)
            }
        ).catch(
            err => console.log(err, "sub error")
        );
    }, []);

    return (
        <>
            <Navbar />
            <div className="p-10">

            <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap justify-evenly -m-4">
                                    {gigs.map((gig) => (
                                        <div key={gig.name} className="lg:w-1/4 md:w-1/3 p-4 w-2/3 border-2 m-2 rounded-lg">
                                            {loggedIn ? (
                                                <Link className="block relative h-52 rounded overflow-hidden" to={`/gigdetails/${gig._id}`}>
                                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={ `http://localhost:3000/${gig.imageUrl}`} />
                                                </Link>
                                            ) : (
                                                <Link className="block relative h-52 rounded overflow-hidden" to="/signup">
                                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={ `http://localhost:3000/${gig.imageUrl}`} />
                                                </Link>
                                            )}
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{subCategory.name}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">{gig.name}</h2>
                                                <hr />
                                                <p className="mt-1">${gig.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
            </div>
            <Footer />
        </>
    );
};

export default ResultTemplate;
