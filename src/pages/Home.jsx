import Hero from"../components/Hero";
import Categories from "../components/Categories";
import FeaturedCollections from "../components/Featured Collections";
import CasualCollections from "../components/Casual Collections";

function Home({cart,setCart}){
    return(
        <div className="w-[100vw] ">
            <Hero/>
<Categories/>
<FeaturedCollections cart={cart} setCart={setCart}/>
<CasualCollections/>
        </div>
    )
}

export default Home;