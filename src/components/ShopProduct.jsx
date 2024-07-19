
function Shop({img,name,price,cart,setCart}){


  const handleAddToCart=(e,product)=>{
    if(e.target.textContent.toLowerCase()==="add to cart"){
      cart && setCart(prev=>[...prev,product])
      e.target.textContent="Remove from Cart"
    

    }
    else  {
    const cartDuplicate=[...cart]
      const itemIndex=cartDuplicate.indexOf(product)
      cartDuplicate.splice(itemIndex,1)
      setCart(cartDuplicate);
      localStorage.setItem("cart", cartDuplicate)

      cartDuplicate.length === 0 && localStorage.removeItem("cart")
      
      };
// setCart(cartCopy);
    }
  ;
return(
        <div>
          
            
            <div className=" container mx-auto group ">
      <div className="bg-[#F0EFEF] w-[300px] h-[500px] flex items-center justify-center relative gap-6">
        <img src={img} width={500} />
        <button  onClick={e=>handleAddToCart(e,{img,name,price})} className=" border   rounded-lg  border-solid hidden bg-[#45c9a1]  group-hover:block absolute bottom-0  py-2 px-[4em]">
        {cart && cart.filter(item=>item.name===name).length===1?"Remove from cart":"add to cart"}
        </button>
      </div>
      <div className="flex gap-3 ">
        <div>
          <p className=" font-tsemibold mt-4 text-2xl">{name}</p>
          <p className="text-[#45c9a1] mt-4 text-2xl">{price}</p>
        </div>
        <div>
          <img src="src/assets/images/heart.png" width={30} />
        </div>
      </div>
      
    </div>
            </div>
        
)}

export default Shop