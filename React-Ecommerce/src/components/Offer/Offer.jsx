import Button from "@mui/material/Button";
import offer from "../../assets/offer01.jpeg";
export const Offer = () => {
  return (
    <div className="my-5 container">
      <div className="d-flex justify-between items-center p-4 w-full text-white bg-gradient-to-r from-black">
        <div>
          <h1>Excluesive</h1>
          <h1>Offers For You</h1>
          <h1 className="uppercase">Only On Best Sellers Products</h1>
          <Button variant="contained" color="error" className="my-2">
            Check now
          </Button>
        </div>
        <div>
          <img
            src={offer}
            alt=""
            style={{ width: "500px", height: "350px", mixBlendMode: "darken" }}
          />
        </div>
      </div>
    </div>
  );
};
