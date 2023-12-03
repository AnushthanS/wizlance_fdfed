import { Navbar, Footer } from "./partials";

const Contact = () => {
    return (
        <>
            <Navbar showlink={true} />
            <div className="p-6 mt-12 flex flex-col flex-wrap items-center">
                <span className="w-2/5 text-4xl sm:text-8xl font-extralight sm:self-start pl-2 mb-4">Contact Us</span>

                <span className="w-2/5 text-2xl sm:text-4xl font-thin sm:self-end pr-2 ">Getting back to you is always our top priority</span>
            </div>


            <div className="w-[90%] md:w-1/2 max-w-screen mx-auto border-4 border-gray-500 rounded-2xl h-fit">

                <form className='mt-12 flex flex-col gap-8 items-center'>

                    <label className='flex flex-col'>
                        <span className='text-black font-medium mb-4'>Your name</span>
                        <input type="text" name='name' placeholder='Enter name here' className='rounded-lg py-4 px-6 bg-gray-100 font-medium placeholder:font-thin text-black outline-none border-none' />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-black font-medium mb-4'>Your email</span>
                        <input type="email" name='email' placeholder='Enter email here' className='rounded-lg py-4 px-6 bg-gray-100 font-medium placeholder:font-thin text-black outline-none border-none' />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-black font-medium mb-4'>Your message</span>
                        <textarea rows='7' name='message' placeholder='Your message here' className='rounded-lg py-4 px-6 w-full bg-gray-100 font-medium placeholder:font-thin text-black outline-none border-none' />
                    </label>

                    <button type="submit" className='outline-none w-fit text-black shadow-md shadow-primary bg-gray-100 rounded-xl py-3 px-8 font-bold'>
                        Send
                    </button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default Contact;