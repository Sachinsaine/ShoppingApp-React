/* eslint-disable react/prop-types */
export const Item = (props) => {
  return (
    <div>
      <div className="relative cursor-pointer h-[300px] w-[250px] rounded-md transition-all duration-[0.5s] flex justify-center items-center hover:translate-y-[-3px]">
        <img
          src={props.image}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg text-white"> {props.name} </h1>
          <div className="text-white">Price: ${props.new_price}</div>
        </div>
      </div>
    </div>
  );
};
