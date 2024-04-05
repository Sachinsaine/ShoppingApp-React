import new_collections from "../../assets/newcollection";
import { Item } from "../Item/Item";

export const NewCollection = () => {
  return (
    <div className="container my-10">
      <div className="new-collection">
        <h1 className="text-center my-3">NEW COLLECTION</h1>
        <div className="flex flex-wrap gap-3">
          {new_collections.map((product, index) => {
            return (
              <Item
                key={index}
                productData={product}
                name={product.name}
                new_price={product.new_price}
                old_price={product.old_price}
                image={product.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
