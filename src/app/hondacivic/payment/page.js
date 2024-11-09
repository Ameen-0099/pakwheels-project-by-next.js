"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const civicpayment = () => {
    return (<div>
      <div className="card h-auto flex justify-center mt-5 ">
        <h1 className="font-extrabold text-2xl">Enter Your Details</h1>
      </div>
      <div className="input ">
        <div className="1in flex justify-center">
          <input className="h-10 w-64 rounded-sm p-3  bg-[#f2f3f3] border  mt-5 " placeholder="Enter Your Name" type="name"></input>{" "}
          <br />
        </div>
        <div className="2in flex justify-center">
          <input className="h-10 w-64 rounded-sm p-3 bg-[#f2f3f3] border mt-5 " placeholder="Enter Your Email" type="email"></input>{" "}
          <br />
        </div>
        <div className="3in flex justify-center">
          <input className="h-10 w-64 rounded-sm p-3 bg-[#f2f3f3] border mt-5 " placeholder="Enter Your Card" type="email"></input>{" "}
          <br />
        </div>
        <div className="4in flex justify-center">
          <input className="h-10 w-64 rounded-sm p-3 bg-[#f2f3f3] border mt-5 " placeholder="Enter Your Address" type="email"></input>{" "}
          <br />
        </div>
        <div className="place flex justify-center mt-5">
          <link_1.default href="/hondacivic/thanks" className="rounded-sm bg-blue-700 text-white text-sm p-2">
            Place Order{" "}
          </link_1.default>
        </div>
      </div>
    </div>);
};
exports.default = civicpayment;
