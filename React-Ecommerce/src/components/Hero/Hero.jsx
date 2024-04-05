import handIcon from "../../assets/hand_icon.png";
import hero from "../../assets/hero_image.png";
import Button from "@mui/material/Button";

export const Hero = () => {
  return (
    <div>
      <div className="flex flex-wrap px-5 pt-4 justify-between items-center w-full relative text-white bg-gradient-to-b from-black">
        <div>
          <h6>NEW ARRIVALS ONLY</h6>
          <div className="flex flex-wrap">
            <p className="h1">New Collections</p>
            <img src={handIcon} style={{ height: "50px" }} alt="" />
          </div>
          <p className="h1">Summer Specital Edition</p>
          <p className="h1">Get Upto 50% Off</p>

          <Button variant="contained" color="error" className="mt-2">
            Latest Collection
          </Button>
        </div>
        <div>
          <img src={hero} style={{ height: "450px", width: "auto" }} alt="" />
        </div>
      </div>
    </div>
  );
};
