import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Gradient } from "whatamesh";

const Hero = () => {
    const user = useSelector((state) => state?.user?.user);

    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, []);

    return (
        <section className="relative h-[700px]">
            <div className="absolute z-10 py-4 px-6 flex sm:justify-between flex-wrap items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <h1 className="text-gray-800 text-[32px] sm:text-[55px] font-extrabold sm:w-1/3 m-4">
                    The Freelancer hub you&apos;ve been searching for.
                </h1>

                <div className="relative sm:w-1/2 sm:top-[80px] text-black text-[22px] md:text-[28px] font-extralight ml-4 mb-2">
                    <p className="w-full">
                        With an ever-growing community of freelancers worldwide,
                        offer services or enlist them in the easiest possible
                        way.
                    </p>
                    <button className="mt-4 border-2 border-collapse rounded-lg p-2 shadow-md bg-gray-800 text-white hover:bg-gray-700">
                        <Link
                            to={
                                !user
                                    ? "/login"
                                    : user?.isAdmin
                                    ? "/admin"
                                    : "/mainpage"
                            }
                        >
                            Get Started
                        </Link>
                    </button>
                </div>
            </div>
            <canvas
                id="gradient-canvas"
                className="absolute"
                data-transition-in
            />
        </section>
    );
};

export default Hero;
