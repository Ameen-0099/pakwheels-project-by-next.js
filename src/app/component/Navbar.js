"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const Navbar = () => {
    return (<div>
           
           <div className="img bg-background bg-cover relative ">
             <div className="content bg-black text-white flex justify-between ">
              <p className="mt-3 ml-7 cursor-pointer ">Download App Via Sms</p>
               <div className="links mt-3 ">
               <link_1.default href="" className="mr-3">Sign Up</link_1.default>
               <link_1.default href="" className="mr-5"> Sign In</link_1.default>
               </div>
               </div>
               <div className="logo bg-black p-3 text-white flex justify-around pt-5">
                <div className="img cursor-pointer">
               <image_1.default src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" alt="logo" width={150} height={110}/>
               </div>
               <link_1.default className="p-3" href="">Used Cars</link_1.default>               
               <link_1.default className="p-3" href="">New Cars</link_1.default>               
               <link_1.default className="p-3" href="">Bikes</link_1.default>               
               <link_1.default className="p-3" href="">Auto Store</link_1.default>               
               <link_1.default className="p-3" href="">Videos</link_1.default>               
               <link_1.default className="p-3" href="">Forums</link_1.default>                             
               <link_1.default className="p-3" href="">blog</link_1.default>             
               <link_1.default className="p-3" href=""><span className="mb-7">New</span> More</link_1.default>   
               <button className="bg-[#b73439] rounded-sm w-32 p-2 font-bold h-10">Post an Ad </button>            
             </div>
            </div>
          <image_1.default src="/8.jpeg" alt="" className="h-auto w-full  " width={500} height={500} quality={100}/>
          

          
           

      </div>);
};
exports.default = Navbar;
