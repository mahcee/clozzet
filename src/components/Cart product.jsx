import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
function CartProduct({
  cart,
  CartCopy,
  setCartCopy,
  setCart,
  img,
  price,
  name,
}) {
  function handleCartActions(action, product) {
    if (action === "increment") {
      setCartCopy((prev) => [...prev, product]);
    } else if (action === "decrement") {
      const CartCopyItems = [...CartCopy];
      const CartItemIndex = CartCopyItems.indexOf(product);
      CartCopyItems.splice(CartItemIndex, 1);
      setCartCopy(CartCopyItems);
    }
    else if(action=== "trash"){
      const cartFilter=cart.filter(item=>item.name!==name)
      setCart(cartFilter);
      localStorage.setItem("cart",JSON.stringify(cartFilter))
    }
  }
  return (
    <div>
      <div className="flex gap-9 border-2 px-4 group">
        <div className="flex">
          <img src={img} width={80} />
          <div>
            <h2>{name}</h2>
            <p className="text-gray-500">Size:XL</p>
          </div>
        </div>
        <div className="flex my-2">
          <button
            disabled={
              CartCopy.filter((item) => item.name === name).length === 1
            }
            onClick={() => handleCartActions("decrement", { img, price, name })}
            className="border py-1 px-4  "
          >
            -
          </button>
          <p className="border py-1 px-4">
            {CartCopy.filter((item) => item.name === name).length}
          </p>
          <button
            onClick={() => handleCartActions("increment", { img, price, name })}
            className="border py-1 px-4"
          >
            +
          </button>
        </div>
        <p></p>
        <div className="flex gap-7 justify-center items-center">
          <p>{`ksh.${CartCopy.filter((item) => item.name === name)
            .reduce(
              (acc, curr) =>
                acc + parseInt(curr.price.replace("ksh", "").replace(",", "")),
              0
            )
            .toLocaleString()}`}</p>
          <FaRegTrashAlt  onClick={()=>handleCartActions("trash")} className="hidden group-hover:block text-red-700" />
        </div>
      </div>
    </div>
  );
}
export default CartProduct;
