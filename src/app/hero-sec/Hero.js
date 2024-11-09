"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const Hero = () => {
    return (<div>
      <div className="hero">
        <image_1.default src="/hero-section (18).PNG" alt="" className="w-full h-96" width={1000} height={1000}/>
      </div>
      <div className="hero-2 bg-[#f2f3f3] h-96  flex">
        <div className="text-black bg-[#f2f3f3] w-full ">
          <h1 className="ml-24 mt-3 font-bold">Featured New Cars</h1>
          <div className="links text-[#434343] mt-5 ml-24 flex gap-10 bg-[#f2f3f3]">
            <link_1.default href="" className="text-black font-bold">
              Popular
            </link_1.default>
            <link_1.default href="" className="">
              Upcoming
            </link_1.default>
            <link_1.default href="" className="">
              Newly Launched
            </link_1.default>
          </div>

          <div className="box flex items-center ml-24 gap-4 bg-[#f2f3f3] text-[#434343] mt-5">
            <div className="car1 bg-white h-64 w-64 text-[#434343] p-2">
              <div className="img cursor-pointer">
                <image_1.default src="/corolla-x.jpg" alt="" className="h-auto w-full bg-cover" width={500} height={500}></image_1.default>
                <link_1.default href="/toyotacorolla" className="text-[#233d7b] font-bold ml-12 text-xl">
                  Toyota Corolla
                </link_1.default>{" "}
                <br />
                <span className="text-[#3eb549] ml-12 ">
                  PKR 59.7 - 75.5 lacs
                </span>
              </div>
            </div>
            <div className="car2 bg-white h-64 w-64 p-2 text-[#434343] cursor-pointer">
              <div className="img">
                <image_1.default src="/Suzuki_Alto_-_PNG.png" alt="" className="h-auto w-full bg-cover" height={500} width={500}/>
                <link_1.default href="../toyotaAlto" className="text-[#233d7b] font-bold ml-12 text-xl">
                  Suzuki Alto
                </link_1.default>{" "}
                <br />
                <span className="text-[#3eb549] ml-12 ">
                  PKR 23.3 - 30.5 lacs
                </span>
              </div>
            </div>

            <div className="car3 bg-white  h-64 w-64 cursor-pointer">
              <image_1.default src="/honda_City_Front.jpeg" alt="" className="h-auto w-full bg-cover" height={500} width={500}/>
              <link_1.default href="../Hondacity" className="text-[#233d7b] font-bold ml-12 text-xl">
                Honda City
              </link_1.default>{" "}
              <br />
              <span className="text-[#3eb549] ml-12 ">
                PKR 46.5 - 58.5 lacs
              </span>
            </div>

            <div className="car4 bg-white  h-64 w-64 cursor-pointer ">
              <image_1.default src="/Cover (1).jpg" alt="" className="h-auto w-full ng-cover" height={500} width={500}/>
              <link_1.default href="../hondacivic" className="text-[#233d7b] font-bold ml-12 text-xl">
                Honda Civic
              </link_1.default>{" "}
              <br />
              <span className="text-[#3eb549] ml-12 ">
                PKR 86.6 - 99.0 lacs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = Hero;
