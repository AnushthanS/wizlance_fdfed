import { subCategories, gigs } from "../constants";
import { Navbar, Footer } from './partials'

const ResultTemplate = () => {
    const loggedIn = true;

    return (
        <>
            <Navbar />
            <div className="p-10">
                {subCategories.map((subCategory) => (
                    <div key={subCategory.name}>
                        <h1 className="text-4xl">{subCategory.name}</h1>
                        <p className="font-light">{subCategory.category.name}</p>

                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap justify-evenly -m-4">
                                    {gigs.map((gig) => (
                                        <div key={gig.name} className="lg:w-1/4 md:w-1/3 p-4 w-2/3 border-2 m-2 rounded-lg">
                                            {loggedIn ? (
                                                <a className="block relative h-52 rounded overflow-hidden" href={`/${subCategory.category.name}/${subCategory.name}/${gig.name}`}>
                                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={gig.imageUrl} />
                                                </a>
                                            ) : (
                                                <a className="block relative h-52 rounded overflow-hidden" href="/signup">
                                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={gig.imageUrl} />
                                                </a>
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
                ))}
            </div>
            <Footer />
        </>
    );
};

export default ResultTemplate;
