import FeaturedCollection from "./Featured Collection"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import LeatherJacket from"../assets/images/leather-jacket.png"
import Sweatshirts from"../assets/images/sweatshirts.png"
import Pallazo from"../assets/images/pallazo.png"
import Denim from"../assets/images/denim.png"

function FeaturedCollections({cart,setCart}){
    return(
        <div >
            <h2 className="text-center text-4xl mt-3">Featured Collection</h2>
            <div className="flex  items-center justify-center gap-10 container mx-auto ">
            <IoIosArrowBack className="text-gray-400" size={200} />
           
            <FeaturedCollection cart={cart} setCart={setCart} img={LeatherJacket}name="Brown Leather Jacket" price="ksh 2,250"/> 
            <FeaturedCollection cart={cart} setCart={setCart} img={Sweatshirts}name="Round-neck Sweatshirts" price="ksh 2,000"/> 
            <FeaturedCollection cart={cart} setCart={setCart} img={Pallazo}name="Pleated Pallazo Trousers" price="ksh 1,800"/> 
            <FeaturedCollection cart={cart} setCart={setCart} img={Denim}name="M-22 Denim Jacket" price="ksh 1,200"/> 
            <IoIosArrowForward  className="text-gray-400" size={200} />
            </div>
        </div>
    )
}
export default FeaturedCollections
