import ShopProduct from "./ShopProduct";

import Ragged from "../assets/shop-images/denim-jeans.png";
import Sweatshirts from "../assets/images/sweatshirts.png";
import Dress from "../assets/shop-images/slim-banquet-dress.png";
import DenimJacket from "../assets/images/denim.png";
import LeatherJacket from "../assets/images/leather-jacket.png";
import Quartzwatch from "../assets/shop-images/quartz-watch.png";
import Denimjeans from "../assets/shop-images/denim-jeans.png";
import Handbag from "../assets/shop-images/brown-handbag.png";
import Graphic from "../assets/shop-images/graphic-tshirts.png";
import Bomber from "../assets/shop-images/bomber.png";
import Pallazo from "../assets/images/pallazo.png";
import LeatherShoes from "../assets/shop-images/leather-shoes.png";
import Serpenti from "../assets/shop-images/serpenti-forever.png";
import Unisex from "../assets/shop-images/unisex.png";
import Cocktail from "../assets/shop-images/cocktail.png";
import OffShoulder from "../assets/shop-images/Off-The-Shoulder.png";
import Pleated from "../assets/shop-images/Airsense-pleated.png";
import Smartwatch from "../assets/shop-images/smartwatch.png";
import Heels from "../assets/shop-images/ZOOSHI-COBALT.png";
import Knitted from "../assets/shop-images/knitted-sweater.png";

function ShopProducts({ cart, setCart }) {
  return (
    <>
      <div>
        <div className="container mx-auto ">
          <div className="flex   flex-wrap items-center justify-between gap-10 ">
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Ragged}
              name="Blue Ragged Jeans"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Sweatshirts}
              name="Brown Leather Jacket"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Dress}
              name="SlimBanquet Dress"
              price="ksh 10,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={DenimJacket}
              name="Blue Denim Jacket"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={LeatherJacket}
              name="Brown Leather Jacket"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Quartzwatch}
              name="Quartz Men's Watch"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Denimjeans}
              name="Women Denim Jeans"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Handbag}
              name="Brown handbag"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Graphic}
              name="Unisex Graphic T-shirt"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Bomber}
              name="Black Bomber Jacket"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Pallazo}
              name="Pleated pallazo pants"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={LeatherShoes}
              name="Pure Leather Shoes"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Serpenti}
              name="Purple Serpenti purse"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Unisex}
              name="Unisex Airforce Sneakers"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Cocktail}
              name="Blue Cocktail Dress"
              price="ksh 2,250"
            />
            <ShopProduct
              img={OffShoulder}
              name="Off-Shoulder Crop Top"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Pleated}
              name="Airsense Pleated Pants"
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Smartwatch}
              name="Classy Smart Watch "
              price="ksh 2,250"
            />
            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Heels}
              name="Blue Platform Heels "
              price="ksh 2,250"
            />

            <ShopProduct
              cart={cart}
              setCart={setCart}
              img={Knitted}
              name="Strip Knitted Sweater"
              price="ksh 2,250"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default ShopProducts;
