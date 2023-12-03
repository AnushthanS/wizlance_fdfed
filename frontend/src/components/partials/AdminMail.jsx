const AdminMail = () => {
    return (
        <>
            <div className="p-6 m-14 flex flex-col md:flex-row md:justify-around items-center gap-4 border-[#ccc] border-2 rounded-[25px] shadow-[0_0px_20px_rgba(0,0,0,0.1)]">

                <span className="text-4xl w-full font-normal sm:w-1/3">Send a common mail to every user, <br />
                    or to a specific user.</span>

                <div className="hidden md:block border-2 border-slate-600 h-[200px] w-[0.25rem]"></div>

                <section className="text-2xl font-light max-w-fit w-1/2">

                    <form id="emailForm" className="flex flex-col">

                        <label htmlFor="mailSubject" className="mt-12">Subject</label>
                        <input type="text" name="mailSubject" className="p-2 border-1 border-gray-600 active:border-blue-900 shadow-[0_0px_20px_rgba(0,0,0,0.1)] max-w-fit my-2 mb-4" />

                        <label htmlFor="mailMessage" className="mt-12">Message</label>
                        <textarea name="mailMessage" id="mailMessage" rows="10"
                            className="p-2 border-1 border-gray-600 active:border-blue-900 shadow-[0_0px_20px_rgba(0,0,0,0.1)] max-w-fit my-2 mb-4"
                        />
                     <button className='p-[10px] bg-black text-white rounded-[20px] hover:bg-pink-500' type="submit">Send</button>
                    </form>

                </section>
            </div>
        </>
    );
}

export default AdminMail;