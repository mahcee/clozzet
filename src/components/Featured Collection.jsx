function FeaturedCollection({ img, name, price,cart,setCart }) {
  return (
    <div className=" container mx-auto">
      <div className="bg-[#F0EFEF] w-[300px] h-[500px] flex flex-wrap flex-col items-center justify-center  mt-9 mb-6 group relative">
        <img src={img} />
        <button className="  py-3 px-[5em] rounded-xl cursor-pointer hidden bg-[#45c9a1]  group-hover:block absolute bottom-4 w-[90%]">
          Add To Cart
        </button>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <p className="  mt-4 text-2xl">{name}</p>
          <p className=" mt-4 text-2xl">{price}</p>
        </div>
        <div>
          <img src="src/assets/images/heart.png" width={30} />
        </div>
      </div>
      
    </div>
  );
}
export default FeaturedCollection;
