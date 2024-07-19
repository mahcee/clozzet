import StripKnittedSweater from "../assets/shop-images/knitted-sweater.png";
import UnisexAirforceSneakers from "../assets/shop-images/unisex.png";
import slimbanquetdress from "../assets/shop-images/slim-banquet-dress.png";
import WomenDenimJeans from "../assets/shop-images/denim-jeans.png";
import CartProduct from "../components/Cart product";
import { useEffect, useState } from "react";

function Carts({ cart,setCart}) {
  const[CartCopy,setCartCopy]=useState([])
  useEffect(()=>{
    cart && setCartCopy([...cart])
      } ,[])
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex-1">
          <ul className=" flex gap-20 border-2  " width={75}>
            <li>Product</li>
            <li>Quantity</li>
            <li>Price</li>
          </ul>

          <div>
            {cart && cart.map((item) => {
              return <CartProduct cart={cart} setCart={setCart} HAICartCopy={CartCopy} setCartCopy={setCartCopy} img={item.img} price={item.price} name={item.name}/>;
            })}
          </div>
        </div>
        <div className="pl-3 border bg-gray-100 w-[30%] h-[55vh] ">
          <h1 className="font-bold">Cart Summary</h1>
          <p className="my-4">Have a promo code? Apply here</p>
          <div className="flex gap-6 ">
            <input
              type="text"
              placeholder="Promo Code(optional)"
              className="text-gray-200 border-gray-200 pl-2 "
            />
            <button className="text-white bg-emerald-300 font-bold py-[0.75em] px-3">
              Apply
            </button>
          </div>
          <div className="flex gap-7 my-4 ">
            <p >Subtotal</p>
            <p> { `ksh. ${CartCopy.reduce((acc,curr)=>acc+parseInt (curr.price.replace("ksh","").replace(",","")),0).toLocaleString()}` }</p>
          </div>
          <div className="flex gap-5 border-b border-b-[#B0B0B0] my-4">
            <p>Delivery Fee</p>
            <p>KSh 450</p>
          </div>
          <div className="font-bold flex gap-5 my-4">
            <p>Total</p>
            <p>{ `ksh. ${CartCopy.reduce((acc,curr)=>acc+parseInt (curr.price.replace("ksh","").replace(",","")),450).toLocaleString()}` }</p>
          </div>
          <button className="text-white  bg-emerald-300 py-2 px-[4em] my-4 rounded-xl font-bold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
export default Carts;
