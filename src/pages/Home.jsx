import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-home-tablet md:bg-cover flex text-center flex-col h-screen bg-black text-white pt-36 items-center bg-no-repeat  gap-20">
      <div className="flex flex-col items-center gap-10 md:bg-cover">
        <p className="barlow-condensed-regular text-[#D0D6F9] md:text-xl">SO, YOU WANT TO TRAVEL TO</p>
        <h2 className="text-8xl bellefair-regular md:text-[150px]">SPACE</h2>
        <p className="bellefair-regular px-10 text-lg md:w-[69%]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="text-xl md:text-[32px] md:p-[40]  mt-12 bg-white text-black h-44 w-44 pt-20 rounded-full bellefair-regular">
        EXPLORE
      </div>
    </div>
  );
};

export default Home;