const Payment = () => {
    return (
        <>
            <div className="p-6 mt-2 flex flex-col flex-wrap flex-shrink">
                <span className="sm:text-6xl text-4xl ">Secure Payment API</span>
                <div className="border-2 border-red-800 w-[360px] md:w-[600px]  mb-[40px]"></div>

                <div className="border-2 border-gray-800 mt-6 rounded-lg self-center w-2/5 min-h-fit py-2">
                    <form className='py-6 flex flex-col gap-8 items-center'>

                        <label className='flex flex-col w-3/5'>
                            <span className='text-black font-medium mb-4'>Cardholder's name</span>
                            <input type="text" name='name' placeholder='Enter name here' className='rounded-lg py-4 px-6 bg-gray-100 font-medium placeholder:font-thin text-black outline-none border-none' />
                        </label>

                        <label className='flex flex-col w-3/5'>
                            <span className='text-black font-medium mb-4'>Card Number</span>
                            <input type="number" name='cardNum' placeholder='Card Number' className='rounded-lg py-4 px-6 bg-gray-100 font-medium placeholder:font-thin text-black outline-none border-none' />
                        </label>

                        <label className='flex flex-row w-3/5 justify-between flex-wrap'>
                            <span className='text-black w-full font-medium mb-4'>Details</span>
                            <input type="number" min={1} max={12} className="bg-gray-100 shadow-2xl px-2 py-4 w-1/5 rounded-lg min-h-fit" placeholder="MM" />
                            <input type="number" min={2016} max={2026} className="bg-gray-100 shadow-2xl px-2 py-4 w-1/5 rounded-lg min-h-fit" placeholder="YY" />
                            <input type="number" min={100} max={999} className="bg-gray-100 shadow-2xl px-2 py-4 w-2/5 rounded-lg min-h-fit" placeholder="CVV" />
                        </label>

                        <button type="submit" className='outline-none w-3/5 text-black shadow-md shadow-primary bg-gray-100 rounded-3xl py-3 px-8 font-bold'>
                            Pay now
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Payment;