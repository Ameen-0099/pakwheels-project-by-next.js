import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <Image
          src="/hero-section (18).PNG"
          alt=""
          className="w-full h-96"
          width={1000}
          height={1000}
        />
      </div>
      <div className="hero-2 bg-[#f2f3f3] h-96  flex">
        <div className="text-black bg-[#f2f3f3] w-full ">
          <h1 className="ml-24 mt-3 font-bold">Featured New Cars</h1>
          <div className="links text-[#434343] mt-5 ml-24 flex gap-10 bg-[#f2f3f3]">
            <Link href="" className="text-black font-bold">
              Popular
            </Link>
            <Link href="" className="">
              Upcoming
            </Link>
            <Link href="" className="">
              Newly Launched
            </Link>
          </div>

          <div className="box flex items-center ml-24 gap-4 bg-[#f2f3f3] text-[#434343] mt-5">
            <div className="car1 bg-white h-64 w-64 text-[#434343] p-2">
              <div className="img cursor-pointer">
                <Image
                  src="/corolla-x.jpg"
                  alt=""
                  className="h-auto w-full bg-cover"
                  width={500}
                  height={500}
                ></Image>
                <Link
                  href="/toyotacorolla"
                  className="text-[#233d7b] font-bold ml-12 text-xl"
                >
                  Toyota Corolla
                </Link>{" "}
                <br />
                <span className="text-[#3eb549] ml-12 ">
                  PKR 59.7 - 75.5 lacs
                </span>
              </div>
            </div>
            <div className="car2 bg-white h-64 w-64 p-2 text-[#434343] cursor-pointer">
              <div className="img">
                <Image
                  src="/Suzuki_Alto_-_PNG.png"
                  alt=""
                  className="h-auto w-full bg-cover"
                  height={500}
                  width={500}
                />
                <Link
                  href="../toyotaAlto"
                  className="text-[#233d7b] font-bold ml-12 text-xl"
                >
                  Suzuki Alto
                </Link>{" "}
                <br />
                <span className="text-[#3eb549] ml-12 ">
                  PKR 23.3 - 30.5 lacs
                </span>
              </div>
            </div>

            <div className="car3 bg-white  h-64 w-64 cursor-pointer">
              <Image
                src="/honda_City_Front.jpeg"
                alt=""
                className="h-auto w-full bg-cover"
                height={500}
                width={500}
              />
              <Link href="../Hondacity" className="text-[#233d7b] font-bold ml-12 text-xl">
                Honda City
              </Link>{" "}
              <br />
              <span className="text-[#3eb549] ml-12 ">
                PKR 46.5 - 58.5 lacs
              </span>
            </div>

            <div className="car4 bg-white  h-64 w-64 cursor-pointer ">
              <Image
                src="/Cover (1).jpg"
                alt=""
                className="h-auto w-full ng-cover"
                height={500}
                width={500}
              />
              <Link href="../hondacivic" className="text-[#233d7b] font-bold ml-12 text-xl">
                Honda Civic
              </Link>{" "}
              <br />
              <span className="text-[#3eb549] ml-12 ">
                PKR 86.6 - 99.0 lacs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
