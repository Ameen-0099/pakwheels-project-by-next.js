import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
  
      <div>
           
           <div className="img bg-background bg-cover relative ">
             <div className="content bg-black text-white flex justify-between ">
              <p className="mt-3 ml-7 cursor-pointer ">Download App Via Sms</p>
               <div className="links mt-3 ">
               <Link href="" className="mr-3">Sign Up</Link>
               <Link href="" className="mr-5" > Sign In</Link>
               </div>
               </div>
               <div className="logo bg-black p-3 text-white flex justify-around pt-5">
                <div className="img cursor-pointer">
               <Image src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" 
                alt="logo" 
                width={150}
                height={110}
               />
               </div>
               <Link className="p-3"  href="">Used Cars</Link>               
               <Link className="p-3" href="">New Cars</Link>               
               <Link className="p-3" href="">Bikes</Link>               
               <Link className="p-3" href="">Auto Store</Link>               
               <Link className="p-3"  href="">Videos</Link>               
               <Link className="p-3"  href="">Forums</Link>                             
               <Link className="p-3" href="">blog</Link>             
               <Link className="p-3"  href=""><span className="mb-7">New</span> More</Link>   
               <button className="bg-[#b73439] rounded-sm w-32 p-2 font-bold h-10" >Post an Ad </button>            
             </div>
            </div>
          <Image src="/8.jpeg" alt=""
              className="h-auto w-full  " 
               width={500}
               height={500}
               quality={100}
              
              />
          

          
           

      </div>





  );
}
export default Navbar

