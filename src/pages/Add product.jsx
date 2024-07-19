import { MdKeyboardArrowDown } from "react-icons/md";
function AddProduct(){
    return(
        <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold mt-5 mb-5">Add New Product</h2>
            <div className="shadow-[0_0_100px_lightgray] ">

<div className="flex flex-col items-center justify-center gap-3 border border-gray-400 w-full px-9">
<div className="flex w-full" ><input type="text" placeholder="Product Name" className="border shadow-lg border-gray-400 
 px-9 py-6 mt-5 text-left w-full"/></div>
<div  className="flex w-full"><input type="text" placeholder="Price" className="border shadow-lg border-gray-400
 px-9 py-6 w-full"/></div>
<div className="flex w-full">
 <select className=" p-4 bg-transparent outline-none border shadow-lg border-gray-400  px-9 py-6  text-gray-400 w-full">
            <option value="" selected disabled> Select Category</option>
            <option value="">Jackets</option>
            <option value="">Handbag</option>
            <option value="">Tshirts</option>
            <option value="">Dress</option>
            <option value="">Jeans</option>
            <option value="">Shoes</option>
            <option value="">Sweater</option>
            
          </select>
 </div>
<div className="flex w-3/6"><input type="text" placeholder="Upload Product Image" className="border shadow-lg border-gray-400
 px-3 py-6 w-3/6 ml-0"/> No File Chosen</div>
<div className="flex w-full"><input type="text" placeholder="Detailed Poduct Description" className="border shadow-lg border-gray-400
 px-9 py-[7em] mb-5 w-full"/></div>
                 <button className="border  border-gray-400 bg-[#45c9a1] rounded-full text-white px-[4em] py-4 mb-6 font-bold text-2xl">Sign in</button>

</div>
            </div>
        </div>
    )
}
export default AddProduct