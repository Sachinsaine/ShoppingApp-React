/* eslint-disable react/no-unknown-property */
import icon from "../../assets/logo.png";
export const Footer = () => {
  return (
    <div className="footer-section">
      <footer class="w-full border border-t-2 py-2">
        <div class="mx-auto flex justify-between max-w-6xl flex-col items-start space-x-8 md:flex-row">
          <div class="w-full px-4 md:w-1/2 lg:px-0">
            <div class="inline-flex items-center">
              <img src={icon} alt="" width={50} height={50} />
              <span class="font-bold uppercase ms-2 text-2xl">Shopper</span>
            </div>
            <div class="mt-24">
              <p class="text-sm font-medium text-gray-500">
                © 2024 coderRonnie. All rights reserved.
              </p>
            </div>
          </div>
          <div class="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
            <div class="mb-8 lg:mb-0">
              <p class="mb-6 text-lg font-semibold text-gray-700 ">Resources</p>
              <div class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <div className="hover:underline cursor-pointer">About us</div>
                <div className="hover:underline cursor-pointer">
                  Company History
                </div>
                <div className="hover:underline cursor-pointer">Our Team</div>
                <div className="hover:underline cursor-pointer">Our Vision</div>
              </div>
            </div>
            <div class="mb-8 lg:mb-0">
              <p class="mb-6 text-lg font-semibold text-gray-700 ">Follow Us</p>
              <div class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <div className="hover:underline cursor-pointer">Github</div>
                <div className="hover:underline cursor-pointer"> Discover</div>
                <div className="hover:underline cursor-pointer">LinkdIn</div>
                <div className="hover:underline cursor-pointer">Greeks</div>
              </div>
            </div>
            <div class="mb-8 lg:mb-0">
              <p class="mb-6 text-lg font-semibold text-gray-700 ">Legal</p>
              <div class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <div className="hover:underline cursor-pointer">
                  Privacy Policy
                </div>
                <div className="hover:underline cursor-pointer">
                  {" "}
                  Terms &amp; Conditions
                </div>
                <div className="hover:underline cursor-pointer">
                  Return Policy
                </div>
                <div className="hover:underline cursor-pointer">
                  {" "}
                  Terms of Services
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <hr class="my-4" />
        <div class="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
          <div class="inline-flex items-center">
            <img src={icon} alt="" width={50} height={50} />
            <span class="font-bold uppercase ms-2 text-2xl">Shopper</span>
          </div>
          <div class="mt-4 md:mt-0">
            <p class="text-sm font-medium text-gray-500">
              © 2024 coderRonnie. All rights reserved.
            </p>
          </div>
        </div> */}
      </footer>
    </div>
  );
};
