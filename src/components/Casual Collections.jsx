import CasualCollection from "./Casual Collection"
import Men from"../assets/images/mens.png"
import Watches from"../assets/images/watches.png"
import Handbags from"../assets/images/hbags.png"
import Ladies from"../assets/images/ladies.png"
function CasualCollections(){
    return(
        <div>
            <div className=" container mx-auto mt-6 grid grid-col-2 grid-row-3 my-10 gap-3">
               
                <CasualCollection img={Men}name="Men's Collection" classes=" bg-[#F0EFEF] row-start-1 row-end-3"/>
                <CasualCollection img={Watches}name="Luxury Watches" classes=" bg-[#E3F9FB]"/>
                <CasualCollection img={Handbags}name="Designer Handbags"classes=" bg-[#FFF1F1]"/>
                <CasualCollection img={Ladies}name="Ladies Collection"classes=" bg-[#FEDBDB] row-start-2 row-end-4"/>
            </div>

        </div>
    )
}
export default CasualCollections;