import { Navbar, Footer } from "./partials";

const Contact = () => {
    return (
        <>
            <Navbar showlink={true} />

            <section className="flex flex-col justify-center items-center min-h-fit py-3 md:py-10">
                <div className="flex flex-col md:flex-row min-h-fit w-4/5 rounded-lg mx-auto">
                    <div className="p-6 mt-12 flex flex-col flex-wrap items-center w-1/2">
                        <span className="text-4xl sm:text-8xl font-extralight pl-2 mb-4">Contact Us</span>

                        <span className="text-2xl sm:text-4xl font-thin pr-2 ">Getting back to you is always our top priority</span>
                    </div>

                    <div className="w-[90%] md:w-1/2 max-w-screen mx-auto border-2 p-2 border-gray-500 rounded-2xl h-fit">

                        <form className='my-6 flex flex-col gap-4 items-center w-full'>

                            <label className='flex flex-col'>
                                <span className='text-black font-medium mb-4'>Your name</span>
                                <input type="text" name='name' placeholder='Enter name here' className='rounded-lg w-full py-4 px-6 bg-gray-100 font-medium placeholder:font-thin text-black outline-none border-none' />
                            </label>

                            <label className='flex flex-col'>
                                <span className='text-black font-medium mb-4'>Your email</span>
                                <input type="email" name='email' placeholder='Enter email here' className='rounded-lg w-full py-4 px-6 bg-gray-100 font-medium placeholder:font-thin text-black outline-none border-none' />
                            </label>

                            <label className='flex flex-col'>
                                <span className='text-black font-medium mb-4'>Your message</span>
                                <textarea rows='7' name='message' placeholder='Your message here' className='rounded-lg w-full py-4 px-6 bg-gray-100 font-medium placeholder:font-thin text-black outline-none border-none' />
                            </label>

                            <button type="submit" className='outline-none w-fit text-black shadow-md shadow-primary bg-gray-100 rounded-xl py-3 px-8 font-bold hover:bg-gray-200'>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Contact;