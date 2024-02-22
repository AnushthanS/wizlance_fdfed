import axios from "axios";
import { Navbar } from "./partials";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Payment = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state?.user?.token);
  const orderId = useLocation().pathname.replace("/payment/", "");

  const handlePayment = () => {
    axios
      .post(
        "/api/pay",
        { orderId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
          style={{ maxWidth: "600px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">
              Secure payment info
            </h1>
          </div>
          <div className="mb-3 flex -mx-2">
            <div className="px-2">
              <label
                htmlFor="type1"
                className="flex items-center cursor-pointer"
              >
                <img
                  src="https://dharmamerchantservices.com/wp-content/uploads/2017/06/visa-logo-white-background.png"
                  alt="Type 1"
                  className="h-8 ml-3"
                />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Smith"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">
                Expiration date
              </label>
              <div>
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="03">04 - April</option>
                  <option value="03">05 - May</option>
                  <option value="03">06 - June</option>
                  <option value="03">07 - July</option>
                  <option value="03">08 - August</option>
                  <option value="03">09 - September</option>
                  <option value="03">10 - October</option>
                  <option value="03">11 - November</option>
                  <option value="03">12 - December</option>
                </select>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </select>
            </div>
          </div>
          <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
              <input
                className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="000"
                type="text"
              />
            </div>
          </div>
          <div>
            <button
              onClick={handlePayment}
              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
