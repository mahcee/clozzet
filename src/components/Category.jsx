
function Category({img,title}){
return(
    <div >
 <div className="  flex justify-center items-center w-[100px] h-[100px] bg-gray-200 rounded-full"> 
    <img src={img} width={50} height={50}/></div>
  <p className="text-center mt-4 text-2xl">{title}</p>
    </div>
)
   
}
export default Category;