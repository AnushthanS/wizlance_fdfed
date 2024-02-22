const AdminMail = () => {
    return (
        <div className="px-6 mx-6 md:p-14 flex flex-col md:flex-row md:justify-around items-center gap-8 border border-gray-300 rounded-lg shadow-md">

            <div className="md:hidden w-full border-t-2 border-gray-300"></div>

            <div className="text-center md:text-left md:w-1/3">
                <h1 className="text-4xl font-semibold mb-4">Send a Common Mail</h1>
                <p className="text-lg text-gray-600 mb-4 font-thin">Send a common mail to every user</p>
            </div>

            <div className="hidden md:block border-r-2 border-gray-300 h-48"></div>

            <section className="flex flex-col items-center md:items-start md:w-2/3">
                <form id="emailForm" className="w-full max-w-md">

                    <div className="mb-6">
                        <label htmlFor="mailSubject" className="block text-lg font-semibold mb-2">Subject</label>
                        <input type="text" name="mailSubject" id="mailSubject" className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="mailMessage" className="block text-lg font-semibold mb-2">Message</label>
                        <textarea name="mailMessage" id="mailMessage" rows="6" className="w-full p-3 border border-gray-400 rounded-md resize-none focus:outline-none focus:border-blue-500"></textarea>
                    </div>

                    <button className="w-full py-3 bg-black text-white rounded-md hover:bg-pink-500 focus:outline-none focus:ring focus:ring-pink-400" type="submit">Send</button>

                </form>
            </section>

        </div>
    );
}

export default AdminMail;
