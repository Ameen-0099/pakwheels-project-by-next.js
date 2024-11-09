"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const Hondacivic = () => {
    return (<div>
      <div className="main h-auto  ">
        <h1 className=" font-extrabold underline text-2xl ml-52 mt-5">
          Honda Civic 2024 Price in Pakistan,Images,Reviews & Specs
        </h1>
        <div className="img ml-96">
          <image_1.default src="/cover (1).jpg" alt="" className="bg-cover" width={500} height={500}/>
          <div className="buttons flex text-xs gap-4 text-white">
            <button className="w-32 rounded-sm h-10 text-xs border border-blue-600 bg-white text-blue-600 ">
              Book a test drive
            </button>
            <button className="w-32 rounded-sm  h-10 border border-blue-600 bg-white text-blue-600 ">
              Request best finance
            </button>
            <button className="w-32 rounded-sm  h-10 border border-blue-600 bg-white text-blue-600 ">
              Visit Place
            </button>
            <button className="w-32 rounded-sm  h-10 border border-blue-600 bg-white text-blue-600">
              Car Inspection
            </button>
          </div>
        </div>
      </div>

      <div className="deatils flex justify-center mt-5">
        <form>
          <table className="border">
            <tr>
              <th colSpan={3}>Specifications</th>
            </tr>
            <tr>
              <th>Make:</th>
              <td>Honda</td>
            </tr>
            <tr>
              <th>Transmission:</th>
              <td>Automatic</td>
            </tr>
            <tr>
              <th>Fuel Type:</th>
              <td>Petrol</td>
            </tr>
            <tr>
              <th>Engine:</th>
              <td>1799 cc</td>
            </tr>
            <tr>
              <th>Varient :</th>
              <td>orial 1.8</td>
            </tr>
          </table>
        </form>
      </div>
      <div className="payment justify-center flex mt-2">
        <h1 className="text-green-600">PKR 86.6 - 99.0 lacs</h1>
      </div>
      <div className="btn justify-center flex mt-2">
        <link_1.default href="hondacivic/payment" className="rounded-sm bg-blue-700 text-white text-sm p-2">
          {" "}
          Make Payment
        </link_1.default>
      </div>
    </div>);
};
exports.default = Hondacivic;
