import { RiArrowRightSFill } from "react-icons/ri";
function CasualCollection({img,name,classes}){
    return(
        <div className={`flex items-end${classes}`} >   
                 <div >
                    <div className="ml-6 mb-4">
                <p className="text-2xl ">Casual Collection</p>
                <p className="text-3xl font-bold">{name}</p>
                <p className="text-2xl font-bold flex items-center gap-5">Shop Now <RiArrowRightSFill  size={50}/></p>
                </div>
                <div>
                
</div>
            </div>
            <div className="h-[100%]">
                <img src={img} className="h-[100%]"/>
            </div>
        </div>
    )
}
export default CasualCollection