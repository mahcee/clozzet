import ShopProducts from "../components/ShopProducts";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

function Shop({cart,setCart}) {

  return (
    
      <div className="container mx-auto  ">
        <div className="flex gap-10 justify-center flex-col sm:flex-row border border-[#45c9a1] mt-10 mb-10 bg-white rounded-full px-[4em] py-4">
          <FiSearch className="size-7" />
          <input
            type="text"
            placeholder="Search Products and categories"
            className=""
          />
          <div className="flex items-center gap-4">

         <p> Filter Categories</p>
         <MdKeyboardArrowDown size={50}/>
          </div>

        </div>
      
      <ShopProducts  cart={cart} setCart={setCart}/>
      <div className="flex items-center justify-center group ">
      
      <div className="   w-[70px] h-[70px] bg-gray-200 rounded-full border border-gray-500 flex   items-center  "><IoIosArrowBack className="text-gray-400" size={100} /></div>
      <div className="  w-[70px] h-[70px]  rounded-full border m-8 border-gray-500 flex justify-center items-center text-gray-500 text-2xl font-bold "  >1</div>
      <div  className="  w-[70px] h-[70px] rounded-full border m-8 border-gray-500 flex justify-center items-center text-gray-500 text-2xl font-bold" >2</div>
      <div  className="  w-[70px] h-[70px] rounded-full border m-8 border-gray-500 flex justify-center items-center  text-gray-500 text-2xl font-bold">3</div>
      <div  className="  w-[70px] h-[70px] rounded-full border m-8 border-gray-500 flex justify-center items-center  text-gray-500 text-2xl font-bold">4</div>
      <div  className="  w-[70px] h-[70px] rounded-full border m-8 border-gray-500 flex justify-center items-center  text-gray-500 text-2xl font-bold">5</div>
      <div  className="  w-[70px] h-[70px] rounded-full border m-8 border-gray-500 flex justify-center items-center  text-gray-500 text-2xl font-bold"><IoIosArrowForward className="text-gray-400" size={100} /></div>
      
      </div>
    </div>
    
  );
}
export default Shop;
