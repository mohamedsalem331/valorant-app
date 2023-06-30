import heroImg from "../../../public/Assets/background.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 opacity-5 bg-secondary w-full h-full ">
        <Image
          className=" block w-screen h-screen"
          src={heroImg}
          alt="heroimg"
        />
      </div>
    </>
  );
};

export default Hero;
