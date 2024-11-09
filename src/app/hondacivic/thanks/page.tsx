import Image from "next/image";
const civicthanks = () => {
  return (
    <div>
      <div className="img h-auto">
        <Image
          src="/thank-yoy.PNG"
          alt=""
          className="w-full h-full"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
export default civicthanks;
