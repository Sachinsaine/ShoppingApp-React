/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";
import emptyCart from "../assets/emptyCart.png";
import { Link } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const pData = useSelector((state) => state.pData);
  const handleRomoveCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice(pData.reduce((acc, curr) => acc + curr.price, 0));
  }, [pData]);
  return (
    <div>
      {pData && pData.length ? (
        <div className="container d-flex justify-between items-center mt-4">
          <div className="col-8 flex flex-wrap">
            {pData.map((product) => (
              <div className="my-3 mx-2">
                <div className="w-[300px] rounded-md border">
                  <img
                    src={product.image}
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-contain p-2"
                  />
                  <div className="p-3">
                    <div className="mt-1 text-sm text-gray-600">
                      {product.title.substr(0, 30)}...
                    </div>
                    <h6 className="my-2">Price: ${product.price}</h6>
                    <button
                      type="button"
                      className="mt-1 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={() => handleRomoveCart(product.id)}
                    >
                      Remove form cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="col-4 amount-summary">
              <h3>Your Cart Summary</h3>
              <hr />
              <div className="flex justify-between items-center px-5 text-xl my-2">
                <span className="">Number of Items : </span>
                <strong>{pData.length}</strong>
              </div>
              <div className="flex justify-between items-center px-5 text-xl my-2">
                <span>Total Amount : </span>
                <strong>{price}</strong>
              </div>
            </div>

            <button className="shopmore">
              <Link to="/shop">
                {" "}
                <button
                  type="button"
                  className="cursor-pointer bg-black text-white no-underline py-1.5 px-3 rounded-sm"
                >
                  Shop More
                </button>
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="my-5">
            <h1 className="text-center my-3 text-black font-bold">
              Your cart is Empty
            </h1>
            <div
              className="d-grid place-content-center items-center py-5 mx-32"
              style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
            >
              <img src={emptyCart} alt="" style={{ height: "200px" }} />

              <Link to="/shop">
                <button
                  type="button"
                  className="mt-3 w-full rounded-sm bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Start Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
