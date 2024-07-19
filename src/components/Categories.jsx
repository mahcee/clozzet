import Category from "./Category"
import Jacket from"../assets/images/jacket.png"
import Handbag from"../assets/images/handbag.png"
import Tshirt from"../assets/images/tshirt.png"
import Dress from"../assets/images/dress.png"
import Jeans from"../assets/images/jeans.png"
import Shoe from"../assets/images/shoe.png"
import Sweater from"../assets/images/sweater.png"
function Categories(){
    return(
        <>
       <h2 className="text-center text-4xl">Top Categories</h2>
       <div className=" container mx-auto flex  justify-between">
        <Category img={Jacket}title="Jacket"/>
        <Category img={Handbag}title="Handbag"/>
        <Category img={Tshirt}title="Shirt"/>
        <Category img={Dress}title="Dress"/>
        <Category img={Jeans}title="Jeans"/>
        <Category img={Shoe}title="Shoe"/>
        <Category img={Sweater}title="Sweater"/>
       </div>
       </>
    )
}
export default Categories