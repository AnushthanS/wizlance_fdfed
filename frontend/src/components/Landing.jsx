import React, { useState } from "react";
import { Navbar, Hero, VerticalCard, Footer } from "./partials/index";


const Landing = () => {

    // fetch links or add to constants and then use a map
    // iterator instead of a for loop and fetch links from constants
    // to make this shorter and look better
    const cards = [];
    for (let i = 0; i < 6; i++) {
        cards.push(
            <div className="md:w-1/4 w-full shadow-lg rounded-lg m-2 md:mx-auto hover:cursor-pointer">
                <div class="rounded-lg bg-[url('https://i.pinimg.com/736x/7d/d9/c2/7dd9c2ded4abab02c41b261d6b06f3ba.jpg')] bg-cover h-40">
                    <h3 class="text-2xl text-white font-bold p-6">Voice<br />Over</h3>

                </div>
            </div>
        );
    }


    return (
        <>
            <section className='relative'>
                <Navbar />
                <Hero />
            </section>

            <section className="px-6 flex flex-col items-start my-4">

                <h2 className="my-6 text-bold text-3xl ">Explore our trending professional services</h2>

                <div className="h-1 w-[305px] sm:w-[620px] bg-red-800 mb-8" />

                <div className="flex flex-wrap flex-col md:flex-row gap-4 w-full">
                    {cards}
                </div>
            </section>
            
            <VerticalCard />

            <Footer />
        </>
    );
}


export default Landing;