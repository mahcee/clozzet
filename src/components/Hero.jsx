import { FiSearch } from "react-icons/fi";
function Hero() {
  return (
    <>
      <div className="container mx-auto flex items-center">
        <div className="flex flex-col gap-7 flex-1">
          <h2 className="text-[5rem] font-medium">
            Choose the look that<span className="text-[#45c9a1]"> suits</span>{" "}
            you best
          </h2>
          <p>
            Every day is a fashion show & the world is your runway. Clozzet will
            elevate your wardrobe with the best collections. Be exclusive, Be
            Devine, Be yourself. Explore outfits that will make you comfortably
            beautiful.True style never dies.
          </p>
          <div className="flex w-[80%] justify-between">
            <button className="  py-4 px-[4em] rounded-full cursor-pointer bg-[#45c9a1] text-white text-xl">
              Shop Now
            </button>
            <button className=" border border-gray py-4 px-[4em] rounded-full cursor-pointer bg-white text-[#45c9a1] text-xl">
              About Us
            </button>
          </div>
          <div className="flex shadow-[0_0_5px_lightgray] items-center gap-3 rounded-full flex-wrap pl-4 w-[80%]">
            <FiSearch className="size-7" />

            <input
              type="text"
              placeholder="Search"
              className="flex-1 p-4 outline-none "
            />
          </div>
        </div>
        <div className="flex-1 ">
          <img src="src/assets/images/hero-image.png" className="h-[80vh]" />
        </div>
      </div>
      <div className="bg-[url('assets/images/hero-background.png')] h-[90vh] bg-cover w-[40vw] -z-10 bg-no-repeat absolute right-0 top-0">
       
      </div>
    </>
  );
}
export default Hero;
