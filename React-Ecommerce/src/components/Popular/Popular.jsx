import popularItems from "../../assets/data";
import { Item } from "../Item/Item";
export const Popular = () => {
  return (
    <div className="container mb-24">
      <div className="popular-women">
        <h1 className="uppercase text-center my-5">Popular in Women</h1>
        <div className="flex flex-wrap gap-3">
          {popularItems.map((item, index) => {
            return (
              <Item
                key={index}
                productData={item}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
