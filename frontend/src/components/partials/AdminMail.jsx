const AdminMail = () => {
    return (
        <>
            <div className="p-6 flex flex-col md:flex-row md:justify-around items-center gap-4">

                <span className="text-4xl w-full font-thin sm:w-1/3">Send a common mail to every user, <br />
                    or to a specific user.</span>

                <div className="hidden md:block border-2 border-slate-600 h-[200px] w-[0.25rem]"></div>

                <section className="text-2xl font-thin max-w-fit w-1/2">

                    <form id="emailForm" className="flex flex-col">

                        <label htmlFor="mailSubject" className="mt-12">Subject</label>
                        <input type="text" name="mailSubject" className="p-2 border-1 border-gray-600 active:border-blue-900 shadow-md max-w-fit my-2 mb-4" />

                        <label htmlFor="mailMessage" className="mt-12">Message</label>
                        <textarea name="mailMessage" id="mailMessage" rows="10"
                            className="p-2 border-1 border-gray-600 active:border-blue-900 shadow-md max-w-fit my-2 mb-4"
                        />
                    </form>

                </section>
            </div>
        </>
    );
}

export default AdminMail;