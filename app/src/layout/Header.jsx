import { Link } from "react-router-dom";
import { Icons } from "../assets/icons";
import routeConstants from "../constants/routeConstants";

const Header = () => {
  return (
    <header className="text-white flex flex-col relative after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[520px] after:h-[520px] after:top-[90%] after:left-0 after:blur-[80px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[520px] before:h-[520px] before:top-[60%] before:right-0 before:blur-[80px] before:rounded-full">
      <div className="max-w-[1320px] px-4 flex items-center justify-between py-[30px] mx-auto w-full relative">
        <div className="flex items-center gap-x-9">
          <Link to={routeConstants.ROOT} className="max-w-[160px]">
            <img src={Icons.logo} alt="" />
          </Link>
          <nav>
            <ul className="flex items-center gap-x-12">
              <li>
                <Link
                  to=""
                  className="text-white text-base font-source-sans hover:opacity-90 transition-all ease-in-out duration-200 font-normal"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-white text-base font-source-sans hover:opacity-90 transition-all ease-in-out duration-200 font-normal"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-white text-base font-source-sans hover:opacity-90 transition-all ease-in-out duration-200 font-normal"
                >
                  Free Generator
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-x-7">
          <Link
            to=""
            className="text-base font-semibold text-white  hover:text-risd-blue transition-all duration-300 ease-in-out"
          >
            Already a member?
          </Link>
          <Link
            to=""
            className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135"
          >
            log in
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-[1020px] mx-auto text-center font-montserrat flex-1 relative mt-[100px]">
        <h1 className="text-white font-bold text-[64px] leading-[1.25]">
          Pioneering communication in{" "}
          <span className="gradi-theme-text">software delivery.</span>
        </h1>
        <p className="text-xl my-[46px]">
          Accelerate development with AI-driven speed from design to delivery
          faster than ever before.
        </p>
        <form>
          <div className="flex items-stretch gap-[14px] min-w-[610px]">
            <input
              type="email"
              placeholder="Enter your work email"
              className="min-h-[56px] px-4 rounded-lg bg-transparent border-[1px] border-white w-full placeholder:text-anti-flash-white outline-0 font-source-sans text-base"
            />
            <button
              type="submit"
              className="bg-risd-blue rounded-lg min-h-[56px] text-nowrap text-base px-5 font-semibold hover:scale-105 transition-all ease-in-out duration-300"
            >
              Request Early Access
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
