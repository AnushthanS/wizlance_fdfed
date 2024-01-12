import { useState, useEffect } from "react";
import { Footer, Navbar } from "./partials";
import img from "../assets/images/user.jpg";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const gigId = useLocation().pathname.replace("/gigdetails/", "");
    console.log("GID :", gigId);

    const [gig, setGig] = useState([]);

    useEffect(() => {
        axios.post('/api/gig/details', {gigId}).then(
            (res) => {
                console.log(res.data)
                setGig(res.data.gig)
            }
        ).catch(
            err => console.log(err)
        );
    }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="min-h-screen">
          <main className="profile-page">
            <section className="relative block h-[500px]">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")',
                }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-50 bg-black"
                ></span>
              </div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                style={{ transform: "translateZ(0px)" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-blueGray-200 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </section>

            <section className="relative py-16 bg-blueGray-200">
              <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                          <div className="">
                            <img
                              alt="..."
                              src={img}
                              className=" absolute shadow-xl rounded-full h-auto align-middle border-none -top-28  -m-16 -ml-22 lg:-ml-[100px] max-w-150-px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-32">
                      <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                        Nikunj Khinchi
                      </h3>
                      <div className="mb-2 text-blueGray-600 mt-6">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                        Web Developer
                      </div>
                    </div>

                    <div className=" text-center">
                      <div className="w-full lg:w-4/12 lg:mx-auto px-4 lg:order-1">
                        <div className="flex  items-center justify-center py-4 lg:pt-4 pt-8">
                          <div className="mr-4 p-3 text-center">
                            <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">
                              12
                            </span>
                            <span className="text-m text-blueGray-400">
                              Projects
                            </span>
                          </div>
                          <div className="mr-4 p-3 text-center">
                            <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">
                              4.7
                            </span>
                            <span className="text-m text-blueGray-400">
                              Rating
                            </span>
                          </div>
                        </div>
                      </div>

                      <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quos voluptate suscipit doloribus facere iusto
                        reprehenderit cupiditate adipisci quisquam. Ratione
                        dolore, qui cupiditate magni sed eum repellendus minima.
                        Fugiat, veritatis soluta.
                      </span>
                    </div>

                    <div className="mt-20 py-10 border-t border-blueGray-200 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                            <b>Price:</b> $ 50/hr
                          </p>
                          <div className="py-3 px-3 mt-16 sm:mt-0">
                            
                            <Link to={'/payment'}>
                              <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                                <i className="mdi mdi-lock-outline mr-1"></i> Hire
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <Footer/>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
