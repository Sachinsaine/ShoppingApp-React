export const NewsLetter = () => {
  return (
    <div className="news-letter container">
      <div className="my-3 py-5 grid text-center place-content-center text-white bg-gradient-to-b from-black">
        <h1 className="my-3">Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated.</p>
        <div>
          <input
            type="email"
            className="outline-none px-2 w-96 py-2 text-black"
            placeholder="Enter Your Email"
          />
          <button className="bg-red-600 hover:bg-whit py-2 px-3 uppercase rounded-t-sm ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
