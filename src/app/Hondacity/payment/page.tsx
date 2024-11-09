import Link from "next/link";
const citypayment = () => {
  return (
    <div>
      <div className="card h-auto flex justify-center mt-5 ">
        <h1 className="font-extrabold text-2xl">Enter Your Details</h1>
      </div>
      <div className="input ">
        <div className="1in flex justify-center">
          <input
            className="h-10 w-64 rounded-sm p-3  bg-[#f2f3f3] border  mt-5 "
            placeholder="Enter Your Name"
            type="name"
          ></input>{" "}
          <br />
        </div>
        <div className="2in flex justify-center">
          <input
            className="h-10 w-64 rounded-sm p-3 bg-[#f2f3f3] border mt-5 "
            placeholder="Enter Your Email"
            type="email"
          ></input>{" "}
          <br />
        </div>
        <div className="3in flex justify-center">
          <input
            className="h-10 w-64 rounded-sm p-3 bg-[#f2f3f3] border mt-5 "
            placeholder="Enter Your Card"
            type="email"
          ></input>{" "}
          <br />
        </div>
        <div className="4in flex justify-center">
          <input
            className="h-10 w-64 rounded-sm p-3 bg-[#f2f3f3] border mt-5 "
            placeholder="Enter Your Address"
            type="email"
          ></input>{" "}
          <br />
        </div>
        <div className="place flex justify-center mt-5">
          <Link
            href="/Hondacity/thanks"
            className="rounded-sm bg-blue-700 text-white text-sm p-2"
          >
            Place Order{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default citypayment;
