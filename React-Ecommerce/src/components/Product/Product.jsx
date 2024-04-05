/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";

export const Product = ({ productData }) => {
  const pData = useSelector((state) => state.pData);
  let dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(productData));
  };
  const handleRemoveCart = () => {
    dispatch(removeFromCart(productData.id));
  };
  return (
    <div>
      <div className="my-3 mx-2">
        <div className="w-[300px] rounded-md border">
          <img
            src={productData.image}
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-contain p-2"
          />
          <div className="p-3">
            <div className="mt-1 text-sm text-gray-600">
              {productData.title.substr(0, 30)}...
            </div>
            <h6 className="my-2">Price: ${productData.price}</h6>
            <button
              type="button"
              className="mt-1 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={
                pData.some((item) => item.id === productData.id)
                  ? handleRemoveCart
                  : handleAddToCart
              }
            >
              {pData.some((item) => item.id === productData.id)
                ? "Remove form cart"
                : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
