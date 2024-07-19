import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
function Nav({cart}) {
  return (
    <nav className="relative">
      <div className="container mx-auto flex justify-between ">
        <ul className="flex justify-between gap-[3em] items-center" >
        <Link to= "/"> <li><img src="src/assets/images/logo.svg" /></li></Link>
          <Link to="/">  <li className="hidden md:block">Home</li></  Link>
          <Link to="/About Us">  <li className="hidden md:block">About Us</li></Link>
          <Link to="/shop">  <li className="hidden md:block">Shop</li></Link>

          
        </ul>
        <ul className="flex  justify-between gap-[3em] items-center">
            <div className="relative">
            <span className="border rounded-full bg-[hsl(162,37%,40%)] absolute w-[25px] h-[25px] flex items-center justify-center right-[-10px] top-[-10px] text-white">{cart? cart.length:0}</span>
            <Link to="/cart"><li>< AiOutlineShoppingCart className="size-9"/></li></Link>
</div>
         <Link to="/SignUp" ><li className="hidden  sm:block">Sign up</li></Link>
         <Link to="/login"> <button className="border border-black py-3 px-[4em] rounded-full cursor-pointer hidden sm:block ">Log In</button></Link>
            <li> <GiHamburgerMenu  className="size-9 block md:hidden" /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
